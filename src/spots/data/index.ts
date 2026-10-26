import type { Area } from '../types'
import { chitose } from './chitose'
import { donanDrive } from './donanDrive'
import { goryokaku } from './goryokaku'
import { hakodateMotomachi } from './hakodateMotomachi'
import { hakodateWest } from './hakodateWest'
import { sapporo } from './sapporo'
import { sapporoSuburbs } from './sapporoSuburbs'
import { sapporoSubway } from './sapporoSubway'
import { shiraoi } from './shiraoi'
import { tomakomai } from './tomakomai'
import { toya } from './toya'
import { expressway, nakayama } from './toyaSapporo'

/** Tabs in trip order. */
export const areas: Area[] = [hakodateWest, hakodateMotomachi, goryokaku, donanDrive, toya, nakayama, expressway, sapporo, sapporoSubway, sapporoSuburbs, chitose, shiraoi, tomakomai]

/** Keep earlier areas available by URL while hiding their tabs. */
const hiddenAreaIds = new Set(['hakodate-west', 'hakodate-motomachi', 'goryokaku', 'donan-drive'])
export const visibleAreas = areas.filter((area) => !hiddenAreaIds.has(area.id))
