import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import VuetifyDialogPlugin from '../src'
import { sleep, addElemWithDataAppToBody, disableTransitions } from './utils'
Vue.use(Vuetify)
const vuetify = new Vuetify({})

describe('manager', () => {
  disableTransitions()
  addElemWithDataAppToBody()
  Vue.use(VuetifyDialogPlugin, {
    confirm: {
      actions: ['Foo', 'Bar', 'Baz'],
      icon: false
    },
    context: {
      vuetify
    }
  })
  const manager = Vue.prototype.$dialog

  test('Test confirmation with generic options', async () => {
    const dialog = await manager.confirm({
      waitForResult: false,
      text: 'Test confirmation with generic options',
      title: 'Title'
    })
    await sleep(100)
    expect(dialog.element).toMatchSnapshot()
    await dialog.close()
    await Vue.nextTick()
    await sleep(5)
    expect(document.body).toMatchSnapshot()
  })
})
