import { svelte } from '@sveltejs/vite-plugin-svelte'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

// GitHub Pages serves the site under /hokaido-car/, so asset paths must be relative.
// Each HTML file is its own page, bookmarked separately on the phone.
export default defineConfig({
  base: './',
  plugins: [svelte()],
  build: {
    rolldownOptions: {
      input: {
        main: fileURLToPath(new URL('index.html', import.meta.url)),
        paypay: fileURLToPath(new URL('paypay.html', import.meta.url)),
        cards: fileURLToPath(new URL('cards.html', import.meta.url)),
      },
    },
  },
})
