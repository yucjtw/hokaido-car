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
    if (raw) {
      const data = JSON.parse(raw)
      return {
        settings: { ...defaultSettings, ...data.settings, done: { ...data.settings?.done } },
        entries: Array.isArray(data.entries) ? data.entries : [],
      }
    }
  } catch {
    // Storage blocked (private mode) or unreadable: start empty; saving will fail visibly.
  }
  return { settings: { ...defaultSettings, done: {} }, entries: [] }
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
