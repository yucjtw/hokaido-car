import { mount } from 'svelte'
import '../app.css'
import Cards from './Cards.svelte'

const app = mount(Cards, {
  target: document.getElementById('app')!,
})

export default app
