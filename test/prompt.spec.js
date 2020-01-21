import DialogManager from 'vuedl/src/manager'
import Prompt from '../src/components/Prompt'
import DialogLayout from '../src/components/DialogLayout'
import Vue from 'vue'
import Vuetify from 'vuetify'
import { sleep, addElemWithDataAppToBody, disableTransitions } from './utils'
Vue.use(Vuetify)
const vuetify = new Vuetify()

describe('manager', () => {
  let manager
  disableTransitions()
  addElemWithDataAppToBody()

  manager = new DialogManager({ context: { vuetify, store: {} } })
  manager.layout('default', DialogLayout)
  manager.component('prompt', Prompt, {
    actions: {
      false: 'Cancel',
      true: 'OK'
    }
  })

  test('Test default prompt', async () => {
    const dialog = await manager.prompt({
      text: 'Test prompt',
      tytle: 'Title'
    })
    await sleep(100)
    expect(dialog.element).toMatchSnapshot()
    dialog.close()
    await sleep(100)
    expect(document.body).toMatchSnapshot()
  })

  test('Prompt confirm', async () => {
    let dlg = await manager.prompt({
      text: 'Test prompt',
      tytle: 'Title',
      value: 'test'
    })
    await sleep(100)
    expect(dlg.vm.$el).toMatchSnapshot()
    setTimeout(() => {
      dlg.vmd.$refs.card.trigger(true)
    }, 5)
    let res = await dlg.wait()
    expect(res).toBe('test')
    await sleep(100)
    expect(document.body).toMatchSnapshot()
  })
})
