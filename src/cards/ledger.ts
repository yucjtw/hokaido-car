import { type Bonus, type Card, cards, nextReset, periodKey, periodLabel, requirementKey } from './cards'

export interface Settings {
  /** NT$ per JPY 1. */
  rate: number
  /** Keys from `requirementKey` that are registered or done. */
  done: Record<string, boolean>
  /** Card ids this person does not have. Stored as hidden, so a newly added card shows by default. */
  hidden: Record<string, boolean>
}

export const defaultSettings: Settings = { rate: 0.21, done: {}, hidden: {} }

export interface Entry {
  id: string
  cardId: string
  /** Payment date in Taiwan time. */
  date: string
  yen: number
  note: string
  createdAt: number
}

/** Bonus reward already earned, keyed `${cardId}:${bonusIndex}:${periodKey}`. */
type Used = Map<string, number>

function usedKey(card: Card, i: number, date: string): string {
  return `${card.id}:${i}:${periodKey(card.bonuses[i].period, date)}`
}

/** Whether the card's bonuses pay on `date`: no requirement, or it is ticked in Settings. */
export function bonusesOn(card: Card, s: Settings, date: string): boolean {
  return !card.requires || !!s.done[requirementKey(card, date)]
}

function bonusFor(card: Card, i: number, ntd: number, date: string, used: Used): number {
  const b = card.bonuses[i]
  if (b.min && ntd < b.min) return 0
  return Math.min((ntd * b.rate) / 100, Math.max(0, b.cap - (used.get(usedKey(card, i, date)) ?? 0)))
}

export interface Ledger {
  used: Used
  /** Per entry id: total reward in the card's points. */
  rewards: Map<string, number>
}

export function replay(entries: Entry[], s: Settings): Ledger {
  const used: Used = new Map()
  const rewards = new Map<string, number>()
  const ordered = [...entries].sort((a, b) => a.date.localeCompare(b.date) || a.createdAt - b.createdAt)
  for (const e of ordered) {
    const card = cards.find((c) => c.id === e.cardId)
    if (!card) continue
    const ntd = e.yen * s.rate
    let r = (ntd * card.base) / 100
    if (bonusesOn(card, s, e.date)) {
      card.bonuses.forEach((_, i) => {
        const b = bonusFor(card, i, ntd, e.date, used)
        used.set(usedKey(card, i, e.date), (used.get(usedKey(card, i, e.date)) ?? 0) + b)
        r += b
      })
    }
    rewards.set(e.id, r)
  }
  return { used, rewards }
}

export interface BonusStatus {
  bonus: Bonus
  /** False when the card's requirement is not ticked for this day. */
  on: boolean
  used: number
  remaining: number
  /** NT$ that still earns this bonus in the current period. */
  spendLeft: number
  periodText: string
  reset: string | null
}

export interface CardStatus {
  card: Card
  index: number
  bonuses: BonusStatus[]
  /** Rate for the next NT$, in percent. */
  rate: number
  /** NT$ that keeps `rate`, then `afterRate` applies. null when no bonus is left. */
  hold: { ntd: number; afterRate: number; by: string } | null
  preview: { ntd: number; reward: number; rate: number } | null
  spentYen: number
  earned: number
}

export function cardStatus(
  card: Card,
  index: number,
  s: Settings,
  ledger: Ledger,
  entries: Entry[],
  day: string,
  nextYen: number,
): CardStatus {
  const on = bonusesOn(card, s, day)
  const bonuses: BonusStatus[] = card.bonuses.map((bonus, i) => {
    const used = ledger.used.get(usedKey(card, i, day)) ?? 0
    const remaining = Math.max(0, bonus.cap - used)
    return {
      bonus,
      on,
      used,
      remaining,
      spendLeft: remaining / (bonus.rate / 100),
      periodText: periodLabel(bonus.period, day),
      reset: nextReset(bonus.period, day),
    }
  })

  const active = bonuses.filter((b) => b.on && b.remaining > 0)
  const rate = card.base + active.reduce((sum, b) => sum + b.bonus.rate, 0)

  let hold: CardStatus['hold'] = null
  if (active.length) {
    const first = active.reduce((a, b) => (b.spendLeft < a.spendLeft ? b : a))
    const afterRate =
      card.base + active.filter((b) => b.spendLeft > first.spendLeft).reduce((sum, b) => sum + b.bonus.rate, 0)
    hold = { ntd: first.spendLeft, afterRate, by: first.bonus.name }
  }

  let preview: CardStatus['preview'] = null
  if (nextYen > 0) {
    const ntd = nextYen * s.rate
    let reward = (ntd * card.base) / 100
    if (on) card.bonuses.forEach((_, i) => (reward += bonusFor(card, i, ntd, day, ledger.used)))
    preview = { ntd, reward, rate: (reward / ntd) * 100 }
  }

  const mine = entries.filter((e) => e.cardId === card.id)
  return {
    card,
    index,
    bonuses,
    rate,
    hold,
    preview,
    spentYen: mine.reduce((sum, e) => sum + e.yen, 0),
    earned: mine.reduce((sum, e) => sum + (ledger.rewards.get(e.id) ?? 0), 0),
  }
}

/** By the rate the next payment would get, then source order. */
export function rank(statuses: CardStatus[]): CardStatus[] {
  const score = (c: CardStatus) => (c.preview ? c.preview.rate : c.rate)
  return [...statuses].sort((a, b) => score(b) - score(a) || a.index - b.index)
}
