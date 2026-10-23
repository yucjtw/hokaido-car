import assert from 'node:assert/strict'
import { createServer } from 'vite'

function unique(values, context) {
  const seen = new Set()
  for (const value of values) {
    assert(!seen.has(value), `Duplicate spot list key in ${context}: ${value}`)
    seen.add(value)
  }
}

// Load the actual data, including Vite's image imports, without opening a browser.
const server = await createServer({ server: { middlewareMode: true } })
try {
  const { areas } = await server.ssrLoadModule('/src/spots/data/index.ts')
  unique(areas.map((area) => area.id), 'areas')
  for (const area of areas) {
    unique(area.subAreas.map((sub) => sub.name), area.id)
    for (const sub of area.subAreas) {
      // The area view uses category/name; the category view uses sub-area/name.
      unique(sub.places.map((place) => `${place.category}/${place.name}`), `${area.id}/${sub.name}`)
    }
  }
  console.log(`Spot list keys are unique across ${areas.length} areas.`)
} finally {
  await server.close()
}
