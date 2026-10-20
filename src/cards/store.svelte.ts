import { defaultSettings, type Entry, type Settings } from './ledger'

// A static GitHub Pages site has no server, so records live in this browser only.
const KEY = 'hokaido-cards-v1'

interface Saved {
  settings: Settings
  entries: Entry[]
}

function load(): Saved {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return parse(raw)
  } catch {
    // Storage blocked (private mode) or unreadable: start empty; saving will fail visibly.
  }
  return { settings: { ...defaultSettings, done: {}, hidden: {} }, entries: [] }
}

/** Accepts saved or exported JSON; throws when it is not this page's data. */
export function parse(raw: string): Saved {
  const data = JSON.parse(raw)
  if (!data || typeof data !== 'object' || !Array.isArray(data.entries)) throw new Error('格式不符')
  return {
    settings: {
      ...defaultSettings,
      ...data.settings,
      done: { ...data.settings?.done },
      hidden: { ...data.settings?.hidden },
    },
    entries: data.entries,
  }
}

export const store = $state(load())
export const saveError = $state({ message: '' })

export function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(store))
    saveError.message = ''
  } catch {
    saveError.message = '這個瀏覽器無法儲存資料（可能是私密瀏覽），重新整理後紀錄會消失'
  }
}

export function exportJson(): string {
  return JSON.stringify(store)
}

export function importJson(raw: string) {
  const data = parse(raw)
  store.settings = data.settings
  store.entries = data.entries
  save()
}
