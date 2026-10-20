// Credit cards for in-person payments in Japan during the trip.
// Source: hokaido repo web-data/credit_cards_2026-10-21_to_11-02.md, checked on the official pages on 2026-10-19.
// 中信 LINE Pay 卡 added, and uniopen and SPORT base rates and caps re-checked, on the official pages on 2026-10-20.
// 富邦 J 卡 added from its official page on 2026-10-20.
// Rates are bank-announced cashback or points before the overseas fee; every point is worth NT$1.

import { TRIP_END } from '../paypay/campaigns'

export const CHECKED_ON = '2026-10-20'

/**
 * How a bonus cap resets. Billing-cycle caps depend on each person's statement date, so the
 * whole trip counts as one cycle: a cap that does reset mid-trip is then only underestimated.
 */
export type Period = 'calendar' | 'billing' | 'campaign'

export interface Bonus {
  name: string
  rate: number
  /** Most reward per period, in the card's points (NT$1 each). */
  cap: number
  period: Period
  /** Smallest single payment in NT$ that earns this bonus; smaller ones get only the base rate. */
  min?: number
}

/** A step without which no bonus pays: a registration, or SPORT's monthly exercise goal. */
export interface Requirement {
  kind: 'monthly' | 'once'
  /** Checkbox text in Settings; monthly ones get the month in front. */
  label: string
  how: string
}

export interface Card {
  id: string
  name: string
  /** Rate paid on every eligible payment, uncapped. */
  base: number
  bonuses: Bonus[]
  requires?: Requirement
  unit: string
  scope: string
  /** Total quota shared by everyone, when there is one. */
  quota?: string
  conditions: string[]
  link: string
}

// Order is the source document's ranking and breaks ties when sorting.
export const cards: Card[] = [
  {
    id: 'uniopen',
    name: '中國信託 uniopen 聯名卡',
    base: 3,
    bonuses: [{ name: '國外實體商店加碼 8%', rate: 8, cap: 500, period: 'calendar' }],
    unit: 'OPENPOINT',
    scope: '日本一般實體消費、飯店櫃台',
    conditions: [
      '先在中信 App 連結 uniopen 會員',
      '實體卡、Apple Pay、Google Pay、Samsung Pay 都算；網路、條碼、第三方支付不算',
      '商店須在次月 5 日前請款',
    ],
    link: 'https://www.ctbcbank.com/twrbo/zh_tw/cc_index/cc_product/cc_introduction_index/C_uniopen.html',
  },
  {
    id: 'dual-currency',
    name: '永豐幣倍卡',
    base: 2,
    bonuses: [{ name: '國外實體加碼 4%', rate: 4, cap: 800, period: 'billing' }],
    unit: '現金回饋',
    scope: '國外實體消費、飯店櫃台',
    conditions: [
      '須符合資產或 DAWHO 等級，設定永豐臺外幣帳戶自動扣繳、電子或行動帳單',
      '飯店若用付款連結或人工輸入卡號請款，可能不算實體交易而拿不到 4% 加碼',
    ],
    link: 'https://bank.sinopac.com/sinopacBT/personal/credit-card/introduction/bankcard/dual-currency-card.html',
  },
  {
    id: 'fubon-j',
    name: '富邦 J 卡「日韓泰實體」',
    base: 3,
    bonuses: [{ name: '日韓泰實體加碼 3%（單筆滿 NT$1,000）', rate: 3, cap: 1000, period: 'campaign', min: 1000 }],
    requires: { kind: 'once', label: '已登錄', how: '每月 20 日 16:00 起開放登錄，登錄一次適用 10/1–12/31 整季' },
    unit: '刷卡金',
    scope: '日本實體店面、飯店櫃台（面對面交易）',
    quota: '每月 20,000 名、每季 60,000 名',
    conditions: [
      '基本 3% 要設定富邦帳戶自動扣繳或電子帳單（取消紙本），結帳日前生效，否則只有 0.5%',
      '基本回饋依申辦時選的 J Cash 或 J Points（LINE POINTS），加碼 3% 是刷卡金，預計 2027/2 底起發放',
      '儲值不算加碼',
    ],
    link: 'https://www.fubon.com/banking/personal/credit_card/all_card/omiyage/omiyage.htm',
  },
  {
    id: 'sport',
    name: '永豐 SPORT 卡',
    base: 1,
    bonuses: [
      { name: '運動獎勵 1%', rate: 1, cap: 50, period: 'calendar' },
      { name: '指定行動支付 3%', rate: 3, cap: 300, period: 'calendar' },
    ],
    requires: {
      kind: 'monthly',
      label: '運動任務會達成',
      how: '當月在大咖 DACARD App 累積 10,000 大卡，或 Apple Watch 圓滿畫圈 10 次',
    },
    unit: '豐點',
    scope: '用 Apple Pay、Google Pay、Samsung Pay、Garmin Pay 的一般消費；飯店要支援感應付款',
    conditions: ['要用行動支付才有 3%', '電子帳單、永豐或京城帳戶自動扣繳'],
    link: 'https://bank.sinopac.com/sinopacBT/webevents/2008_SportCard2/index.html',
  },
  {
    id: 'costco',
    name: '富邦 Costco 聯名卡「精選海外旅遊」',
    base: 1,
    bonuses: [{ name: '精選海外旅遊加碼 4%', rate: 4, cap: 600, period: 'calendar' }],
    requires: { kind: 'monthly', label: '已登錄', how: '每月 1 日 00:00 開放登錄，10 月、11 月要各登錄一次' },
    unit: '好多金',
    scope: '國外實體消費、飯店櫃台',
    quota: '每月 50,000 名',
    conditions: ['第三方支付不適用', '依台灣時間的消費日算月份'],
    link: 'https://efin.taipeifubon.com.tw/bank_bcs/l/10450',
  },
  {
    id: 'ctbc-travel',
    name: '中國信託商旅鈦金卡「亞洲實體」',
    base: 2.5,
    bonuses: [{ name: '亞洲實體加碼 2.5%', rate: 2.5, cap: 300, period: 'calendar' }],
    requires: { kind: 'once', label: '已登錄', how: '登錄一次，適用 10/1–12/31 整季' },
    unit: '現金回饋',
    scope: '日本等九個亞洲地區實體店面、飯店櫃台',
    quota: '每月 4,000 名',
    conditions: ['官方寫「每月」、以交易日認定，但沒明寫月界線'],
    link: 'https://www.ctbcbank.com/content/dam/minisite/long/creditcard/TravelTitanium/index.html?rsrc=CTBCcoupon_button1',
  },
  {
    id: 'ctbc-linepay',
    name: '中國信託 LINE Pay 信用卡「國外實體店」',
    base: 2.8,
    bonuses: [{ name: '國外實體店加碼 2.2%', rate: 2.2, cap: 450, period: 'campaign' }],
    requires: { kind: 'once', label: '已登錄', how: '在中信活動登錄平台登錄，每週二開放 3,000 名' },
    unit: 'LINE POINTS',
    scope: '國外實體店面、飯店櫃台（面對面交易）',
    quota: '2.2% 加碼限量 20,000 名，額滿就只剩 2.8%',
    conditions: [
      '實體卡、Apple Pay、Google Pay、Samsung Pay 都算；網路、條碼、第三方支付不算',
      '加碼 2.2% 從 2027/2/25 起陸續發放',
    ],
    link: 'https://www.ctbcbank.com/content/dam/minisite/long/creditcard/LINEPay/page_travel.html#lightbox_overseas',
  },
]

/** Hotels on the itinerary that may be paid at the counter. */
export const counterHotels = [
  { name: '洞爺観光ホテル', dates: '10/29–10/30' },
  { name: 'KOKO HOTEL 苫小牧', dates: '11/1–11/2' },
]

export function periodKey(p: Period, date: string): string {
  return p === 'calendar' ? date.slice(0, 7) : 'trip'
}

export function periodLabel(p: Period, date: string): string {
  if (p === 'calendar') return `${Number(date.slice(5, 7))} 月`
  if (p === 'billing') return '整趟（帳單週期依結帳日，保守算同一期）'
  return '整個活動 10/1–12/31'
}

/** First day of the next calendar month when it falls within the trip, else null. */
export function nextReset(p: Period, date: string): string | null {
  if (p !== 'calendar') return null
  const [y, m] = date.split('-').map(Number)
  const next = m === 12 ? `${y + 1}-01-01` : `${y}-${String(m + 1).padStart(2, '0')}-01`
  return next <= TRIP_END ? next : null
}

/** Settings key of the requirement that applies on `date`. */
export function requirementKey(card: Card, date: string): string {
  return card.requires?.kind === 'monthly' ? `${card.id}:${date.slice(0, 7)}` : card.id
}
