import { mount } from 'svelte'
import '../app.css'
import PayPay from './PayPay.svelte'

const app = mount(PayPay, {
  target: document.getElementById('app')!,
})

export default app
