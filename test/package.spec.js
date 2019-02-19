import Vue from 'vue'
import Vuetify from 'vuetify'
import VuetifyDialogPlugin from '../src'
import { sleep } from './utils'
Vue.use(Vuetify)

describe('manager', () => {
  let manager

  beforeAll(() => {
    Vue.use(VuetifyDialogPlugin, {
      confirm: {
        actions: ['Foo', 'Bar', 'Baz'],
        icon: false
      }
    })
    manager = Vue.prototype.$dialog
  })

  test('Test confirmation with generic options', async () => {
    const res = await manager.confirm({
      waitForResult: false,
      text: 'Test confirmation with generic options',
      title: 'Title'
    })
    expect(res.vm.$el).toMatchSnapshot()
    await res.close()
    await Vue.nextTick()
    await sleep(1000)
    expect(document.body.innerHTML).toBe('')
  })
})
