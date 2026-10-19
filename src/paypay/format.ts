const intl = new Intl.NumberFormat('zh-TW', { maximumFractionDigits: 0 })

export function num(n: number): string {
  return intl.format(n)
}

export function pct(n: number): string {
  return `${Number(n.toFixed(1))}%`
}

/** JPY that converts to `ntd`, rounded down so the cap is not passed. */
export function yenFor(ntd: number, rate: number): string {
  return `¥${num(Math.floor(ntd / rate))}`
}

const intl1 = new Intl.NumberFormat('zh-TW', { maximumFractionDigits: 1 })

export function reward(amount: number, unit: string): string {
  return unit === 'NT$' ? `NT$${intl1.format(amount)}` : `${intl1.format(amount)} ${unit}`
}

/** JPY needed to reach `ntd`, rounded up so a minimum is met. */
export function yenAtLeast(ntd: number, rate: number): string {
  return `¥${num(Math.ceil(ntd / rate))}`
}
