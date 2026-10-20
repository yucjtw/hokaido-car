import { mount } from 'svelte'
import { setUpPwa } from '../lib/pwa'
import '../app.css'
import Cards from './Cards.svelte'

const app = mount(Cards, {
  target: document.getElementById('app')!,
})

setUpPwa()

export default app
