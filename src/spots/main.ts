import { mount } from 'svelte'
import { setUpPwa } from '../lib/pwa'
import '../app.css'
import Spots from './Spots.svelte'

const app = mount(Spots, {
  target: document.getElementById('app')!,
})

setUpPwa()

export default app
