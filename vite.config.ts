import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// GitHub Pages serves the site under /hokaido-car/, so asset paths must be relative.
export default defineConfig({
  base: './',
  plugins: [svelte()],
})
