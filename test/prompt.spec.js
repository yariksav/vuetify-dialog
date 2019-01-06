// import Dialog from 'vuedl/src/dialog'
import DialogManager from 'vuedl/src/manager'
import Prompt from '../src/components/Prompt'
import DialogLayout from '../src/components/DialogLayout'
// import Returnable from 'vuedl/src/mixins/returnable'
import Vue from 'vue'
import Vuetify from 'vuetify'
import { sleep } from './utils'
Vue.use(Vuetify)

describe('manager', () => {
  let manager

  test('Create manager instance', () => {
    const el = document.createElement('div')
    el.setAttribute('data-app', true)
    document.body.appendChild(el)

    manager = new DialogManager({ context: { store: {} } })
    manager.layout('default', DialogLayout)
    manager.component('prompt', Prompt, {
      actions: {
        false: 'Cancel',
        true: 'OK'
      }
    })
  })

  test('Test default prompt', async () => {
    const dialog = await manager.prompt({
      text: 'Test prompt',
      tytle: 'Title'
    })
    expect(dialog.element).toMatchSnapshot()
    dialog.close()
    await sleep(1200)
    expect(document.body.innerHTML).toBe('<div data-app=\"true\"></div>')
  })

  test('Prompt confirm', async () => {
    let dlg = await manager.prompt({
      text: 'Test prompt',
      tytle: 'Title',
      value: 'test'
    })
    expect(dlg.vm.$el).toMatchSnapshot()
    setTimeout(() => {
      dlg.vmd.$refs.card.trigger(true)
    }, 5)
    let res = await dlg.wait()
    expect(res).toBe('test')
    await sleep(1000)
    expect(document.body.innerHTML).toBe('<div data-app=\"true\"></div>')
  })
})
