import type { Area } from '../types'
import { chitose } from './chitose'
import { donanDrive } from './donanDrive'
import { goryokaku } from './goryokaku'
import { hakodateWest } from './hakodateWest'
import { sapporo } from './sapporo'
import { sapporoSuburbs } from './sapporoSuburbs'
import { sapporoSubway } from './sapporoSubway'
import { shiraoi } from './shiraoi'
import { tomakomai } from './tomakomai'
import { toya } from './toya'

/** Tabs in trip order. */
export const areas: Area[] = [hakodateWest, goryokaku, donanDrive, toya, sapporo, sapporoSubway, sapporoSuburbs, chitose, shiraoi, tomakomai]
