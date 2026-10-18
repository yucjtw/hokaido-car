import type { Day } from '../data/types'

/** Today's date as YYYY-MM-DD in the browser's own time zone. */
function localIsoDate(now: Date): string {
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, '0')
  const d = String(now.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

/**
 * Tab to open on load: the URL hash if it names a day, else today's day,
 * else the next upcoming day, else the first day.
 */
export function pickInitialDay(days: Day[], hash: string, now = new Date()): Day {
  const fromHash = days.find((day) => `#${day.date}` === hash)
  if (fromHash) return fromHash
  const today = localIsoDate(now)
  return days.find((day) => day.date === today) ?? days.find((day) => day.date > today) ?? days[0]
}
