import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { sleep } from './utils'
import VuetifyDialogPlugin from '../src'
Vue.use(Vuetify)
const vuetify = new Vuetify({})

describe('manager', () => {
  let manager

  beforeAll(() => {
    Vue.use(VuetifyDialogPlugin, { context: { vuetify } })
    manager = Vue.prototype.$dialog
  })

  test('Test notification component', async () => {
    const dlg = await manager.notification({
      text: 'Test notification',
      timeout: 100,
      waitForResult: false
    })
    await sleep(1)
    expect(dlg.vm.$el).toMatchSnapshot()
    await sleep(200)
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })

  test('Test success notification', async () => {
    const dlg = await manager.notify.success('Test notification', {
      timeout: 100,
      waitForResult: false
    })
    await sleep(1)
    expect(dlg.vm.$el).toMatchSnapshot()
    await sleep(200)
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })

  test('Test info notification', async () => {
    const dlg = await manager.notify.info('Test notification', {
      timeout: 1,
      waitForResult: false
    })
    await sleep(1)
    expect(dlg.vm.$el).toMatchSnapshot()
    await sleep(200)
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })

  test('Test error notification with top-left position', async () => {
    const dlg = await manager.notify.error('Test notification', {
      timeout: 100,
      position: 'top-left',
      waitForResult: false
    })
    await sleep(1)
    expect(dlg.vm.$el).toMatchSnapshot()
    await sleep(500)
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })

  test('Test warning notification with bottom-right position', async () => {
    const dlg = await manager.notify.warning('Test notification', {
      timeout: 100,
      position: 'bottom-right',
      waitForResult: false
    })
    await sleep(50)
    expect(dlg.vm.$el).toMatchSnapshot()
    await sleep(1000)
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })
})
