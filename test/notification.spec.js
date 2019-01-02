import Vue from 'vue'
import Vuetify from 'vuetify'
import { sleep } from './utils'
import VuetifyDialogPlugin from '../src'
Vue.use(Vuetify)

describe('manager', () => {
  let manager

  beforeAll(() => {
    Vue.use(VuetifyDialogPlugin)
    manager = Vue.prototype.$dialog
  })

  test('Test success notification', async () => {
    const dlg = await manager.notify.success('Test confirmation', {
      timeout: 100,
      waitForResult: false
    })
    await sleep(50)
    expect(dlg.vm.$el).toMatchSnapshot()
    await sleep(100)
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })

  test('Test error notification with top-left position', async () => {
    const dlg = await manager.notify.error('Test confirmation', {
      timeout: 100,
      position: 'top-left',
      waitForResult: false
    })
    await sleep(50)
    expect(dlg.vm.$el).toMatchSnapshot()
    await sleep(100)
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })

  test('Test warning notification with bottom-right position', async () => {
    const dlg = await manager.notify.warning('Test confirmation', {
      timeout: 100,
      position: 'bottom-right',
      waitForResult: false
    })
    await sleep(50)
    expect(dlg.vm.$el).toMatchSnapshot()
    await sleep(100)
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })
})
