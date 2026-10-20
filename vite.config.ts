import { svelte } from '@sveltejs/vite-plugin-svelte'
import { createHash } from 'node:crypto'
import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'

const root = (path: string) => fileURLToPath(new URL(path, import.meta.url))

/**
 * Writes sw.js from service-worker.js with the list of every built and public file,
 * so the worker can save them all for offline use. Built file names change with their
 * content, so the list is only known after bundling.
 */
function serviceWorker(): Plugin {
  return {
    name: 'service-worker',
    apply: 'build',
    // Runs after Vite's HTML plugin has added the pages to the bundle.
    generateBundle: {
      order: 'post',
      handler(_, bundle) {
        const hash = createHash('sha256')
        const files: string[] = []
        for (const item of Object.values(bundle)) {
          files.push(item.fileName)
          hash.update(item.fileName).update(item.type === 'chunk' ? item.code : item.source)
        }
        for (const name of readdirSync(root('public'))) {
          files.push(name)
          hash.update(name).update(readFileSync(root(`public/${name}`)))
        }
        files.sort()
        const source = readFileSync(root('service-worker.js'), 'utf8')
          .replace('__VERSION__', hash.digest('hex').slice(0, 12))
          .replace('__FILES__', JSON.stringify(['./', ...files.map((f) => `./${f}`)]))
        this.emitFile({ type: 'asset', fileName: 'sw.js', source })
      },
    },
  }
}

// GitHub Pages serves the site under /hokaido-car/, so asset paths must be relative.
// Each tool is its own page, added to the phone's home screen separately; index.html lists them.
export default defineConfig({
  base: './',
  plugins: [svelte(), serviceWorker()],
  build: {
    rolldownOptions: {
      input: {
        index: root('index.html'),
        nav: root('nav.html'),
        paypay: root('paypay.html'),
        cards: root('cards.html'),
        spots: root('spots.html'),
      },
    },
  },
})
