import {
  type Campaign,
  type Plan,
  type Settings,
  campaigns,
  isRegistered,
  nextReset,
  periodKey,
  periodLabel,
  planCampaigns,
  plans,
  rateOf,
} from './campaigns'

export interface Entry {
  id: string
  planId: string
  /** Payment date in Taiwan time. */
  date: string
  yen: number
  note: string
  createdAt: number
}

/** Reward already earned, keyed `${campaignId}:${capPeriodKey}`. */
type Used = Map<string, number>

function capKey(c: Campaign, date: string): string {
  return `${c.id}:${periodKey(c.capPeriod ?? 'all', date)}`
}

export function isFull(c: Campaign, s: Settings, date: string): boolean {
  return c.fullPeriod !== null && !!s.full[`${c.id}:${periodKey(c.fullPeriod, date)}`]
}

/**
 * Reward for one payment of `ntd`, from a campaign that pays on `date`. Logged payments
 * ignore the budget flags, because a payment made before the budget ran out still earned.
 */
function rewardFor(c: Campaign, s: Settings, ntd: number, date: string, used: Used, ignoreFull: boolean) {
  if (!ignoreFull && isFull(c, s, date)) return 0
  if (c.minTxn && ntd < c.minTxn) return 0
  let r = (ntd * rateOf(c, s)) / 100
  if (c.rounding === 'round') r = Math.round(r)
  if (c.rounding === 'floor') r = Math.floor(r)
  if (c.perTxn !== undefined) r = Math.min(r, c.perTxn)
  if (c.cap !== undefined) r = Math.min(r, Math.max(0, c.cap - (used.get(capKey(c, date)) ?? 0)))
  return r
}

export interface Ledger {
  used: Used
  /** Per entry id: reward per campaign id. */
  rewards: Map<string, Record<string, number>>
}

export function replay(entries: Entry[], s: Settings): Ledger {
  const used: Used = new Map()
  const rewards = new Map<string, Record<string, number>>()
  const ordered = [...entries].sort((a, b) => a.date.localeCompare(b.date) || a.createdAt - b.createdAt)
  for (const e of ordered) {
    const plan = plans.find((p) => p.id === e.planId)
    if (!plan) continue
    const ntd = e.yen * s.rate
    const byCampaign: Record<string, number> = {}
    for (const c of planCampaigns(plan, s, e.date)) {
      const r = rewardFor(c, s, ntd, e.date, used, true)
      byCampaign[c.id] = r
      if (c.cap !== undefined) used.set(capKey(c, e.date), (used.get(capKey(c, e.date)) ?? 0) + r)
    }
    rewards.set(e.id, byCampaign)
  }
  return { used, rewards }
}

export interface CampaignStatus {
  campaign: Campaign
  rate: number
  /** Why the campaign does not pay on this day: outside its dates, or its `register` step not done. */
  inactive: string | null
  unregistered: boolean
  full: boolean
  /** Reward earned in the current cap period. */
  used: number
  /** Reward still available in the current cap period; Infinity when uncapped. */
  remaining: number
  /** NT$ that can still be spent at the full rate this period. */
  spendLeft: number
  periodText: string | null
  reset: string | null
  /** NT$ per payment that reaches the per-payment cap. */
  perTxnSpend: number | null
}

export interface PlanStatus {
  plan: Plan
  index: number
  campaigns: CampaignStatus[]
  /** Reward rate plus fee waiver for the next payment too small for any per-payment minimum, in percent. */
  rate: number
  /** Per-payment minimums that raise the rate, lowest first, with the rate a payment of exactly that NT$ gets. */
  large: { min: number; rate: number }[]
  feeRate: number
  /** NT$ that keeps `rate`, then `afterRate` applies. null when nothing caps it. */
  hold: { ntd: number; afterRate: number; by: string } | null
  hidden: boolean
  preview: { ntd: number; reward: number; unit: string; fee: number; rate: number; notes: string[] } | null
  spentYen: number
  earned: Record<string, number>
}

export function planStatus(
  plan: Plan,
  index: number,
  s: Settings,
  ledger: Ledger,
  entries: Entry[],
  day: string,
  nextYen: number,
): PlanStatus {
  const statuses: CampaignStatus[] = plan.campaignIds.map((id) => {
    const c = campaigns[id]
    const rate = rateOf(c, s)
    const unregistered = !isRegistered(c, s, day)
    const ticked = Object.keys(s.registered).some((k) => k.startsWith(`${c.register?.key}:`))
    const inactive =
      day < c.start
        ? '未開始'
        : day > c.end
          ? '已結束'
          : unregistered
            ? ((!ticked && c.register!.never) || c.register!.missing)
            : null
    const used = c.cap !== undefined ? (ledger.used.get(capKey(c, day)) ?? 0) : 0
    const remaining = c.cap !== undefined ? Math.max(0, c.cap - used) : Infinity
    return {
      campaign: c,
      rate,
      inactive,
      unregistered,
      full: isFull(c, s, day),
      used,
      remaining,
      spendLeft: remaining === Infinity ? Infinity : remaining / (rate / 100),
      periodText: c.capPeriod ? periodLabel(c.capPeriod, periodKey(c.capPeriod, day)) : null,
      reset: c.capPeriod ? nextReset(c.capPeriod, day) : null,
      perTxnSpend: c.perTxn !== undefined ? c.perTxn / (rate / 100) : null,
    }
  })

  const active = statuses.filter((st) => !st.inactive && !st.full && st.remaining > 0)
  // Without an amount typed, rank by what any payment earns; campaigns with a minimum only show in `large`.
  const always = active.filter((st) => !st.campaign.minTxn)
  const rate = always.reduce((sum, st) => sum + st.rate, 0)
  const feeRate = always.filter((st) => st.campaign.fee).reduce((sum, st) => sum + st.rate, 0)

  let hold: PlanStatus['hold'] = null
  const capped = always.filter((st) => st.spendLeft !== Infinity)
  if (capped.length) {
    const first = capped.reduce((a, b) => (b.spendLeft < a.spendLeft ? b : a))
    const afterRate = always.filter((st) => st.spendLeft > first.spendLeft).reduce((sum, st) => sum + st.rate, 0)
    hold = { ntd: first.spendLeft, afterRate, by: first.campaign.name }
  }

  /** Reward and fee waiver for one payment of `ntd` on `day`. */
  function payment(ntd: number) {
    let reward = 0
    let fee = 0
    for (const st of statuses) {
      if (st.inactive) continue
      const r = rewardFor(st.campaign, s, ntd, day, ledger.used, false)
      if (st.campaign.fee) fee += r
      else reward += r
    }
    return { reward, fee }
  }

  const mins = [...new Set(active.flatMap((st) => (st.campaign.minTxn ? [st.campaign.minTxn] : [])))].sort(
    (a, b) => a - b,
  )
  // Per-payment caps can make a larger payment earn no more, so keep a minimum only when it raises the rate.
  const large: PlanStatus['large'] = []
  for (const min of mins) {
    const { reward, fee } = payment(min)
    const r = ((reward + fee) / min) * 100
    if (r > (large.at(-1)?.rate ?? rate) + 0.05) large.push({ min, rate: r })
  }

  let preview: PlanStatus['preview'] = null
  if (nextYen > 0) {
    const ntd = nextYen * s.rate
    const { reward, fee } = payment(ntd)
    const notes: string[] = []
    for (const st of statuses) {
      if (st.inactive) continue
      if (!st.full && st.campaign.minTxn && ntd < st.campaign.minTxn) notes.push(`未達 ${st.campaign.name} 的單筆門檻`)
      // NT$1 of slack, so a yen amount that converts to NT$1,000.02 does not warn.
      else if (!st.full && st.perTxnSpend !== null && ntd - st.perTxnSpend >= 1)
        notes.push(`超過 ${st.campaign.name} 的單筆上限`)
    }
    // Every plan pays its rewards in one unit; fee waivers are counted apart.
    const unit = statuses.find((st) => !st.campaign.fee)?.campaign.unit ?? 'NT$'
    preview = { ntd, reward, unit, fee, rate: ((reward + fee) / ntd) * 100, notes }
  }

  const mine = entries.filter((e) => e.planId === plan.id)
  const earned: Record<string, number> = {}
  for (const e of mine) {
    for (const [cid, r] of Object.entries(ledger.rewards.get(e.id) ?? {})) {
      const c = campaigns[cid]
      if (c.fee) continue
      earned[c.unit] = (earned[c.unit] ?? 0) + r
    }
  }

  // Unregistered or not-running campaigns are not "full", so they never hide a plan.
  const rewardCampaigns = statuses.filter((st) => !st.campaign.fee && !st.inactive)
  return {
    plan,
    index,
    campaigns: statuses,
    rate,
    large,
    feeRate,
    hold,
    hidden: rewardCampaigns.length > 0 && rewardCampaigns.every((st) => st.full),
    preview,
    spentYen: mine.reduce((sum, e) => sum + e.yen, 0),
    earned,
  }
}

/** Visible plans first by the rate the next payment would get, then source order. */
export function rank(statuses: PlanStatus[]): PlanStatus[] {
  const score = (p: PlanStatus) => (p.preview ? p.preview.rate : p.rate)
  return [...statuses].sort((a, b) => score(b) - score(a) || a.index - b.index)
}
