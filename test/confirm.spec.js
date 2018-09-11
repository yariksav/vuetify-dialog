// import Dialog from 'vuedl/src/dialog'
import DialogManager from 'vuedl'
import Confirm from '../src/components/Confirm'
// import { wrap } from 'vuedl/test/utils'
// import Returnable from 'vuedl/src/mixins/returnable'
import Vue from 'vue'

describe('manager', () => {
  let manager

  test('Create manager instance', () => {
    manager = new DialogManager({ context: { store: {} } })
    expect(manager).toBeInstanceOf(DialogManager)
    manager.component('confirm', Confirm)
  })

  // test('returnable', async () => {
  //   const dlg = new Dialog({
  //     mixins: [ Returnable ],
  //     template: '<p></p>'
  //   })
  //   await dlg.show()
  //   expect(typeof dlg.vmd.return).toBe('function')
  //   expect(dlg.element).toMatchSnapshot()
  //   setTimeout(() => {
  //     dlg.vmd.return(123)
  //   }, 5)
  //   let res = await dlg.wait()
  //   expect(res).toBe(123)
  //   expect(document.body.innerHTML).toBe('')
  // })

  test('Check confirm', async () => {
    let dlg = await manager.confirm({ text: 'test', actions: ['ok', 'cancel'] })
    const wrapper = wrap(dlg.vm)
    expect(dlg.vm.$el).toMatchSnapshot()
    setTimeout(() => {
      wrapper.find('[action-key=ok]').trigger('click')
    }, 5)
    let res = await dlg.wait()
    expect(res).toBe('ok')
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })

  // test('Check confirm with btns true|false', async () => {
  //   let dlg = await manager.confirm({ text: 'test', actions: {'true': 'Yes', 'false': 'No'} })
  //   const wrapper = wrap(dlg.vm)
  //   expect(dlg.element).toMatchSnapshot()
  //   expect(wrapper.find('[action-key=true]').exists()).toBe(true)
  //   setTimeout(() => {
  //     wrapper.find('[action-key=true]').trigger('click')
  //   }, 10)
  //   let res = await dlg.wait()
  //   expect(res).toBe(true)
  //   await Vue.nextTick()
  //   expect(document.body.innerHTML).toBe('')
  // })
})
