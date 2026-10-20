import type { Area } from './types'

/** Today's date as YYYY-MM-DD in the browser's own time zone. */
function localIsoDate(now: Date): string {
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, '0')
  const d = String(now.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

/**
 * Tab to open on load: the URL hash if it names an area, else the area for today,
 * else the area for the next upcoming trip day, else the first area.
 */
export function pickInitialArea(areas: Area[], hash: string, now = new Date()): Area {
  const fromHash = areas.find((area) => `#${area.id}` === hash)
  if (fromHash) return fromHash
  const today = localIsoDate(now)
  const upcoming = areas
    .flatMap((area) => area.dates.filter((date) => date >= today).map((date) => ({ area, date })))
    .sort((a, b) => a.date.localeCompare(b.date))
  return upcoming[0]?.area ?? areas[0]
}
