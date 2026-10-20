import { mount } from 'svelte'
import { setUpPwa } from './lib/pwa'
import './app.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

setUpPwa()

export default app
