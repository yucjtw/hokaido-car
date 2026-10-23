export type Category = '正餐' | '甜點與咖啡' | '其它'

export interface Place {
  /** Japanese name, so it matches signs and Google Maps. */
  name: string
  category: Category
  /** Google Maps link. Omit it and the page searches Google Maps for `query`. */
  map?: string
  /** Search text when there is no `map` link; defaults to the name plus the area's `city`. */
  query?: string
  /** Free text in Traditional Chinese, including opening hours and closing days. Supports **bold**, ~~strike~~, [text](url) and "- " lists. */
  body?: string
  /** Set when the place is saved in the user's own Google Maps list; `note` is the user's note there, copied as is. */
  myMap?: { note?: string }
}

/** Places within walking distance of each other. */
export interface SubArea {
  name: string
  note?: string
  /** Area map image URL, imported from ./maps so the build hashes it and saves it offline. */
  image?: string
  /** Additional maps shown together in the area's expandable map section. */
  images?: string[]
  places: Place[]
}

/** One lodging base or one day trip; its sub-areas are not walkable from each other. */
export interface Area {
  /** URL hash, e.g. "hakodate-west". */
  id: string
  /** Tab label. */
  name: string
  /** Added to Google Maps searches so a shop name finds the right branch. */
  city: string
  /** Trip dates (YYYY-MM-DD) this area is for; the tab for today opens first. */
  dates: string[]
  note?: string
  subAreas: SubArea[]
}
