export interface Spot {
  /** Japanese name as shown on site signs and car navigation. */
  name: string
  /** Car-navigation map code, e.g. "86 816 665*28". null = not found yet. */
  mapcode: string | null
  /** Where the map code came from. Not shown on the page; kept for re-checking. */
  mapcodeSource?: string
  /** Public business phone number. */
  phone?: string
  /** Japanese address. */
  address?: string
  /** One short line in Traditional Chinese, e.g. what this stop is for. */
  note?: string
}

export interface Section {
  title: string
  /** One short line about the area, e.g. "繞路候選". */
  note?: string
  spots: Spot[]
}

export interface Day {
  /** ISO date in Japan time, used to pick the tab that matches today. */
  date: string
  /** Tab label, e.g. "10/25". */
  label: string
  weekday: string
  route: string
  sections: Section[]
}
