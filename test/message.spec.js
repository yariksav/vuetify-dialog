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

  it('Should not raise exception when use vuetify-dialog several times', () => {
    Vue.use(VuetifyDialogPlugin)
    VuetifyDialogPlugin.install(Vue, {})
  })

  test('Test success notification', async () => {
    const dlg = await manager.message.success('Test message', {
      timeout: 100,
      waitForResult: false
    })
    await sleep(50)
    expect(dlg.vm.$el).toMatchSnapshot()
    await sleep(600)
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })

  test('Test info notification', async () => {
    const dlg = await manager.message.info('Test message', {
      timeout: 100,
      waitForResult: false
    })
    await sleep(50)
    expect(dlg.vm.$el).toMatchSnapshot()
    await sleep(600)
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })

  test('Test error notification with top-left position', async () => {
    const dlg = await manager.message.error('Test message', {
      timeout: 100,
      position: 'top-left',
      waitForResult: false
    })
    await sleep(50)
    expect(dlg.vm.$el).toMatchSnapshot()
    await sleep(600)
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })

  test('Test warning notification with bottom-right position', async () => {
    const dlg = await manager.message.warning('Test message', {
      timeout: 100,
      position: 'bottom-right',
      waitForResult: false
    })
    await sleep(50)
    expect(dlg.vm.$el).toMatchSnapshot()
    await sleep(600)
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })
})
