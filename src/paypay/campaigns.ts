// PayPay cashback campaigns for Taiwanese wallets during the trip.
// Base list: hokaido repo web-data/paypay_2026-10-21_to_11-02.md.
// Dates, budgets, fee waivers and rounding re-checked on the official pages on 2026-10-19.
// Where each wallet posts its full-quota notices checked on the official pages on 2026-10-20.
// 台新 Pay+ new-member offers added from the official page on 2026-10-21.
// Caps and minimums are in NT$; 全點 and 台新 Point are both worth NT$1 each.

export const TRIP_START = '2026-10-21'
export const TRIP_END = '2026-11-02'
export const CHECKED_ON = '2026-10-19'

export type PeriodKind = 'month' | 'week' | 'wave' | 'quarter' | 'all'

export interface Settings {
  /** NT$ per JPY 1. */
  rate: number
  /** Taishin 3.8% needs auto-debit from a Taishin account; otherwise 1.3%. */
  taishinAutoDebit: boolean
  /** Keys `${campaignId}:${month}` registered before paying, for campaigns that need it. */
  registered: Record<string, boolean>
  /** Keys `${campaignId}:${periodKey}` whose total budget has run out. */
  full: Record<string, boolean>
}

export const defaultSettings: Settings = {
  rate: 0.21,
  taishinAutoDebit: true,
  registered: {},
  full: {},
}

export interface Campaign {
  id: string
  name: string
  rate: number | ((s: Settings) => number)
  unit: '點' | 'NT$' | '台新 Point'
  /** First and last payment date, Taiwan time. */
  start: string
  end: string
  /** Max reward for one payment. */
  perTxn?: number
  /** Payment must be at least this many NT$. */
  minTxn?: number
  /** Personal reward cap per `capPeriod`. */
  cap?: number
  capPeriod?: PeriodKind
  /** The period whose total budget can run out; null when there is no budget limit. */
  fullPeriod: PeriodKind | null
  /** How the wallet rounds each payment's reward, when its terms say. */
  rounding?: 'round' | 'floor'
  /** A step that must be done in a calendar month before this pays, ticked per month in Settings. */
  register?: Register
  /** Fee waiver, not a reward: shown apart and never runs out. */
  fee?: boolean
  /** Settings title, three parts: wallet, what the wallet must pay from, and which offer (official wording). */
  label?: { wallet: string; source: string; offer: string }
  /** Exclusions the official rules add to `label.source`. */
  sourceNote?: string
  budget: string
  /** Official rules page. */
  link?: string
  /** Where the wallet announces that the budget has run out; undefined when no official place was found. */
  fullNotice?: FullNotice
  /** Words that tell this campaign's full-quota notice apart from the others in the same list. */
  noticeKeywords?: string
}

export interface Register {
  /** Settings key prefix; campaigns that hinge on the same step share it. */
  key: string
  /** Settings title and what to do. */
  title: string
  how: string
  /** Checkbox text after the month. */
  done: string
  /** Chip text when the payment's month does not qualify, and when no month is ticked at all. */
  missing: string
  never?: string
  /** A tick also counts for every later month, as for a sign-up; otherwise only for its own month. */
  carries?: boolean
}

const PX_REG: Register = {
  key: 'px_reg4',
  title: '全支付｜加碼活動 4%（需登錄，單筆滿 NT$3,000）',
  how: '每月月初開放登錄，要在付款前登錄',
  done: '已登錄',
  missing: '本月未登錄',
}

const TAISHIN_NEW = {
  key: 'taishin_new',
  title: '台新 Pay+｜新戶加碼',
  how: '限從沒註冊過台新 Pay+ 的人（註冊後銷戶再註冊不算），勾註冊的月份。6.2% 只算註冊當月的消費；單筆滿 NT$3,000 送 60 點每月一次',
  done: '註冊',
  never: '未註冊',
}

export interface FullNotice {
  place: string
  url?: string
  how: string
}

// All 全支付 rules pages say full-quota notices are posted only inside the app.
// App names for the main offer and bank-account offers follow the user's screenshots (2026-10-23).
const PX_NOTICE: FullNotice = {
  place: '全支付 App（官網沒有額滿公告）',
  how: '全支付首頁右上角小鈴鐺 › 上方「通知類別」選「活動通知」',
}
// The 全盈+PAY rules (event2023.pluspay.com.tw/2026Q4paypay_cathaybk) say notices go on the 全盈支付 site
// and the 國泰 campaign page; the 國泰 page has no notice area, and past PayPay notices are on this list.
const QY_NOTICE: FullNotice = {
  place: '全盈支付官網',
  url: 'https://www.pluspay.com.tw/News/activity',
  how: '最新公告 › 活動消息；標題格式是「【活動額滿公告】活動名稱_10月」',
}

const PX_MAIN = 'https://marketing.pxpayplus.com/pxplus_marketing_page/activity_content_page?EventId=135'
const PX_ACCOUNT = 'https://marketing.pxpayplus.com/pxplus_marketing_page/activity_content_page?EventId=124'
const PX_CARD = 'https://marketing.pxpayplus.com/pxplus_marketing_page/activity_content_page?EventId=131'
const QY = 'https://www.cathay-cube.com.tw/cathaybk/personal/event/overview/Deposit/All/2026/payplus_paypay_202610'
const TAISHIN = 'https://mkp.taishinbank.com.tw/TsCms/marketing/expose/WM_20260128095425540/index.html'
const ESUN = 'https://www.esunbank.com/zh-tw/personal/credit-card/intro/bank-card/kumamon_card'

function feeWaiver(id: string, start: string, end: string, link: string): Campaign {
  return {
    id,
    name: '免 1.5% 國外交易服務費',
    rate: 1.5,
    unit: 'NT$',
    start,
    end,
    fullPeriod: null,
    fee: true,
    budget: '官方公告免收，不另發回饋',
    link,
  }
}

export const campaigns: Record<string, Campaign> = {
  px_main: {
    id: 'px_main',
    name: '全支付主活動 3.5%',
    rate: 3.5,
    unit: '點',
    start: '2026-10-01',
    end: '2026-12-31',
    perTxn: 35,
    cap: 140,
    capPeriod: 'month',
    fullPeriod: 'quarter',
    label: { wallet: '全支付', source: '帳戶餘額、銀行帳戶、信用卡都算', offer: '日本跨境｜筆筆享3.5%回饋' },
    budget: '全季總預算 170 萬點；每月點數合併後四捨五入',
    link: PX_MAIN,
    fullNotice: PX_NOTICE,
    noticeKeywords: 'App 點數紀錄名稱「10月｜日本跨境｜筆筆享3.5%回饋」（月份依當月顯示）；預算整季共用，額滿就到 12/31 都沒有',
  },
  px_reg4: {
    id: 'px_reg4',
    name: '全支付滿額加碼 4%（每月登錄）',
    rate: 4,
    unit: '點',
    start: '2026-10-01',
    end: '2026-12-31',
    minTxn: 3000,
    cap: 120,
    capPeriod: 'all',
    fullPeriod: 'month',
    register: PX_REG,
    label: { wallet: '全支付', source: '帳戶餘額、銀行帳戶、信用卡都算', offer: '加碼活動 4%（需登錄，單筆滿 NT$3,000）' },
    budget: '登錄人數不限，但回饋每月總量 160,000 點，大家共用、送完就沒有',
    link: PX_MAIN,
    fullNotice: PX_NOTICE,
    noticeKeywords: '玩日本、加碼活動、需登錄、滿 3,000、4%；每月一期',
  },
  px_cathay_account: {
    id: 'px_cathay_account',
    name: '國泰世華帳戶加碼 5%',
    rate: 5,
    unit: '點',
    start: '2026-09-28',
    end: '2027-01-03',
    perTxn: 100,
    cap: 100,
    capPeriod: 'week',
    fullPeriod: 'week',
    rounding: 'round',
    label: { wallet: '全支付', source: '國泰世華銀行帳戶', offer: '週週｜國泰世華銀行｜日本PayPay消費回饋活動' },
    sourceNote: '限新臺幣活期存款帳戶；支票存款帳戶、用信用卡驗證的第三類數位存款帳戶不算',
    budget: '每週總預算 80,000 點，約 800 人拿滿',
    link: PX_ACCOUNT,
    fullNotice: PX_NOTICE,
    noticeKeywords: '「《週週｜國泰世華銀行｜日本PayPay消費回饋活動》本週額滿公告」對應這個帳戶加碼 5%，不是信用卡加碼；每週一期，只勾公告所屬週別',
  },
  px_cathay_card: {
    id: 'px_cathay_card',
    name: '國泰世華卡加碼 5%',
    rate: 5,
    unit: '點',
    start: '2026-09-28',
    end: '2027-01-03',
    minTxn: 1000,
    cap: 100,
    capPeriod: 'wave',
    fullPeriod: 'week',
    label: { wallet: '全支付', source: '國泰世華信用卡', offer: '指定信用卡加碼 5%（單筆滿 NT$1,000）' },
    budget: '每週總預算 45,000 點，約 450 人拿滿',
    link: PX_CARD,
    fullNotice: PX_NOTICE,
    noticeKeywords: '日韓跨境、國泰世華、信用卡、滿千；每週一期',
  },
  px_next_account: {
    id: 'px_next_account',
    name: '將來銀行帳戶加碼 5%',
    rate: 5,
    unit: '點',
    start: '2026-09-28',
    end: '2027-01-03',
    perTxn: 100,
    cap: 100,
    capPeriod: 'week',
    fullPeriod: 'week',
    rounding: 'round',
    label: { wallet: '全支付', source: '將來銀行帳戶', offer: '週週｜將來銀行｜日本PayPay消費回饋活動' },
    budget: '每週總預算 20,000 點，約 200 人拿滿',
    link: PX_ACCOUNT,
    fullNotice: PX_NOTICE,
    noticeKeywords: '「《週週｜將來銀行｜日本PayPay消費回饋活動》本週額滿公告」對應這個帳戶加碼 5%；每週一期，只勾公告所屬週別',
  },
  px_fee: feeWaiver('px_fee', '2026-10-01', '2026-12-31', PX_MAIN),
  qy_cathay_account: {
    id: 'qy_cathay_account',
    name: '全盈+PAY 國泰帳戶 15%',
    rate: 15,
    unit: 'NT$',
    start: '2026-10-01',
    end: '2026-12-31',
    cap: 200,
    capPeriod: 'month',
    fullPeriod: 'month',
    label: { wallet: '全盈+PAY', source: '國泰世華銀行帳戶', offer: '國泰世華帳戶加碼 15%' },
    sourceNote: '綁定國泰世華簽帳金融卡付款不算',
    budget: '每月總預算 NT$100,000，約 500 人拿滿；2027/2/28 前統一發放',
    link: QY,
    fullNotice: QY_NOTICE,
    noticeKeywords: '國泰世華、15%、_10月／_11月。10/10 額滿的「暢遊日本用全盈 滿額享12%」是另一個活動，不是這個',
  },
  qy_fee: feeWaiver('qy_fee', '2026-10-01', '2026-12-31', QY),
  taishin_pay: {
    id: 'taishin_pay',
    name: '台新「Pay著刷」',
    rate: (s) => (s.taishinAutoDebit ? 3.8 : 1.3),
    unit: '台新 Point',
    start: '2026-07-01',
    end: '2027-03-31',
    fullPeriod: null,
    budget: '無固定點數上限；設定自動扣繳後，次期帳單結帳後才有 3.8%',
    link: TAISHIN,
  },
  taishin_new: {
    id: 'taishin_new',
    name: '新戶加碼 6.2%（註冊當月）',
    rate: 6.2,
    unit: '台新 Point',
    start: '2026-08-01',
    end: '2026-12-31',
    cap: 50,
    capPeriod: 'all',
    fullPeriod: 'month',
    register: { ...TAISHIN_NEW, missing: '非註冊當月' },
    budget: '每帳號一次、上限 50 點；依每人當月第一筆交易時間排序，每月前 5,000 名',
    link: TAISHIN,
  },
  taishin_new_big: {
    id: 'taishin_new_big',
    name: '新戶單筆滿 NT$3,000 送 60 點',
    rate: 2,
    unit: '台新 Point',
    start: '2026-08-01',
    end: '2026-12-31',
    minTxn: 3000,
    perTxn: 60,
    cap: 60,
    capPeriod: 'month',
    fullPeriod: 'month',
    register: { ...TAISHIN_NEW, missing: '未註冊', carries: true },
    budget: '每月一次；依交易時間排序，每月前 4,000 名',
    link: TAISHIN,
  },
  taishin_fee: feeWaiver('taishin_fee', '2026-07-01', '2027-03-31', TAISHIN),
  esun_cash: {
    id: 'esun_cash',
    name: '玉山熊本熊卡 3.5% 現金回饋',
    rate: 3.5,
    unit: 'NT$',
    start: '2026-01-01',
    end: '2026-12-31',
    cap: 100,
    capPeriod: 'quarter',
    fullPeriod: null,
    rounding: 'floor',
    budget: '不用登錄、不限名額；每筆無條件捨去到元',
    link: ESUN,
  },
  esun_fee: feeWaiver('esun_fee', '2026-01-01', '2026-12-31', ESUN),
}

export interface Plan {
  id: string
  wallet: string
  source: string
  campaignIds: string[]
  tip: string
}

// Order matches the source document's ranking and breaks ties when sorting.
export const plans: Plan[] = [
  {
    id: 'px-cathay-account',
    wallet: '全支付',
    source: '國泰世華銀行帳戶',
    campaignIds: ['px_main', 'px_cathay_account', 'px_reg4', 'px_fee'],
    tip: '單筆 NT$1,000 內可同時拿滿兩段',
  },
  {
    id: 'qy-cathay-account',
    wallet: '全盈+PAY',
    source: '國泰世華銀行帳戶',
    campaignIds: ['qy_cathay_account', 'qy_fee'],
    tip: '全盈+PAY 不是全支付。回饋率最高但名額少，出發時先看官方額滿公告',
  },
  {
    id: 'px-cathay-card',
    wallet: '全支付',
    source: '國泰世華信用卡',
    campaignIds: ['px_main', 'px_cathay_card', 'px_reg4', 'px_fee'],
    tip: '每筆刷約 NT$1,000 最容易同時符合兩段',
  },
  {
    id: 'px-next-account',
    wallet: '全支付',
    source: '將來銀行帳戶',
    campaignIds: ['px_main', 'px_next_account', 'px_reg4', 'px_fee'],
    tip: '5% 每週預算最少，四個主力方案中最容易額滿',
  },
  {
    id: 'taishin',
    wallet: '台新 Pay+',
    source: '台新 Richart 卡',
    campaignIds: ['taishin_pay', 'taishin_new', 'taishin_new_big', 'taishin_fee'],
    tip: '台新 Pay+ 限 NT$50,000／筆、NT$300,000／月',
  },
  {
    id: 'esun',
    wallet: '玉山 Wallet',
    source: '玉山熊本熊卡',
    campaignIds: ['esun_cash', 'esun_fee'],
    tip: '上限低，但不限名額、確定性高',
  },
]

export const unavailable = [
  { name: 'iPASS MONEY', reason: '第三季活動 9/30 已結束，未見第四季活動（查至 10/11）' },
  { name: 'LINE Pay', reason: '臺灣 LINE Pay 不能在日本 PayPay 商店付款' },
  { name: '街口支付', reason: '依個人偏好排除' },
]

export function rateOf(c: Campaign, s: Settings): number {
  return typeof c.rate === 'function' ? c.rate(s) : c.rate
}

export function isRegistered(c: Campaign, s: Settings, date: string): boolean {
  const r = c.register
  if (!r) return true
  const month = date.slice(0, 7)
  if (!r.carries) return !!s.registered[`${r.key}:${month}`]
  return Object.keys(s.registered).some((k) => k.startsWith(`${r.key}:`) && k.slice(r.key.length + 1) <= month)
}

/** Campaigns of a plan that pay on `date`: running then, and registered when that is required. */
export function planCampaigns(plan: Plan, s: Settings, date: string): Campaign[] {
  return plan.campaignIds
    .map((id) => campaigns[id])
    .filter((c) => date >= c.start && date <= c.end && isRegistered(c, s, date))
}

// ---- Dates and periods. Dates are YYYY-MM-DD strings in Taiwan time, because the wallets
// record and count payments by their own (Taiwan) transaction time.

function toDate(d: string): Date {
  const [y, m, day] = d.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, day))
}

export function addDays(d: string, n: number): string {
  const x = toDate(d)
  x.setUTCDate(x.getUTCDate() + n)
  return x.toISOString().slice(0, 10)
}

export function shortDate(d: string): string {
  const [, m, day] = d.split('-')
  return `${Number(m)}/${Number(day)}`
}

const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六']

export function dateWithWeekday(d: string): string {
  return `${shortDate(d)}（${WEEKDAYS[toDate(d).getUTCDay()]}）`
}

const taiwanDate = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Taipei' })

/** Today's date in Taiwan, whatever time zone the phone is set to. */
export function taiwanToday(now = new Date()): string {
  return taiwanDate.format(now)
}

/** Taiwan today clamped to the trip, so the page shows trip periods before and after the trip too. */
export function tripDay(now = new Date()): string {
  const today = taiwanToday(now)
  if (today < TRIP_START) return TRIP_START
  if (today > TRIP_END) return TRIP_END
  return today
}

function mondayOf(d: string): string {
  const weekday = (toDate(d).getUTCDay() + 6) % 7
  return addDays(d, -weekday)
}

// 國泰世華卡 5% counts its personal cap per wave.
const WAVES = [
  { key: 'wave1', start: '2026-09-28', end: '2026-11-01', label: '第一波' },
  { key: 'wave2', start: '2026-11-02', end: '2026-11-29', label: '第二波' },
  { key: 'wave3', start: '2026-11-30', end: '2027-01-03', label: '第三波' },
]

export function periodKey(kind: PeriodKind, d: string): string {
  switch (kind) {
    case 'month':
      return d.slice(0, 7)
    case 'week':
      return mondayOf(d)
    case 'wave':
      return WAVES.find((w) => d >= w.start && d <= w.end)?.key ?? 'none'
    case 'quarter':
      return d.slice(0, 4) + 'Q' + Math.ceil(Number(d.slice(5, 7)) / 3)
    case 'all':
      return 'all'
  }
}

/** First and last day of a period, or null for a period with no fixed range. */
function periodRange(kind: PeriodKind, key: string): [string, string] | null {
  switch (kind) {
    case 'month': {
      const [y, m] = key.split('-').map(Number)
      const next = m === 12 ? `${y + 1}-01-01` : `${y}-${String(m + 1).padStart(2, '0')}-01`
      return [`${key}-01`, addDays(next, -1)]
    }
    case 'week':
      return [key, addDays(key, 6)]
    case 'wave': {
      const w = WAVES.find((x) => x.key === key)
      return w ? [w.start, w.end] : null
    }
    case 'quarter': {
      const y = key.slice(0, 4)
      const q = Number(key.slice(5))
      const first = `${y}-${String(q * 3 - 2).padStart(2, '0')}-01`
      return [first, periodRange('month', `${y}-${String(q * 3).padStart(2, '0')}`)![1]]
    }
    case 'all':
      return null
  }
}

export function periodLabel(kind: PeriodKind, key: string): string {
  const range = periodRange(kind, key)
  const span = range ? `${shortDate(range[0])}–${shortDate(range[1])}` : ''
  switch (kind) {
    case 'month':
      return `${Number(key.slice(5))} 月`
    case 'week':
      return `週 ${span}`
    case 'wave':
      return `${WAVES.find((w) => w.key === key)?.label ?? ''} ${span}`
    case 'quarter':
      return `第四季 ${span}`
    case 'all':
      return '活動期間'
  }
}

/** First day of the next period, or null when the period outlasts the trip. */
export function nextReset(kind: PeriodKind, d: string): string | null {
  const range = periodRange(kind, periodKey(kind, d))
  if (!range) return null
  const reset = addDays(range[1], 1)
  return reset <= TRIP_END ? reset : null
}

/** Period keys that the trip's days fall into, in order. */
export function tripPeriods(kind: PeriodKind): string[] {
  const keys: string[] = []
  for (let d = TRIP_START; d <= TRIP_END; d = addDays(d, 1)) {
    const k = periodKey(kind, d)
    if (!keys.includes(k)) keys.push(k)
  }
  return keys
}
