import Dialog from 'vuedl/src/dialog'
import DialogManager from 'vuedl/src/manager'
import Confirm from '../src/components/Confirm'
import Returnable from 'vuedl/src/mixins/returnable'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
Vue.use(Vuetify)
const vuetify = new Vuetify({})

describe('manager', () => {
  let manager
  test('Create manager instance', () => {
    manager = new DialogManager({ context: { store: {}, vuetify } })
    manager.component('confirm', Confirm)
  })

  test('Test default confirm', async () => {
    const res = await manager.confirm({
      text: 'Test confirmation',
      title: 'Title'
    })
    expect(res.vm.$el).toMatchSnapshot()
    await res.close()
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })

  test('Test confirm without icon', async () => {
    const res = await manager.confirm({
      icon: false,
      text: 'Test confirmation withot icon',
      title: 'Title'
    })
    expect(res.vm.$el).toMatchSnapshot()
    await res.close()
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })

  test('Returnable', async () => {
    const dlg = new Dialog({
      mixins: [Returnable],
      template: '<p></p>'
    })
    await dlg.show()
    expect(typeof dlg.vmd.return).toBe('function')
    expect(dlg.element).toMatchSnapshot()
    setTimeout(() => {
      dlg.vmd.return(123)
    }, 5)
    const res = await dlg.wait()
    expect(res).toBe(123)
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })

  test('Check confirm', async () => {
    const dlg = await manager.confirm({
      text: 'test',
      type: 'warning',
      actions: ['ok', 'cancel']
    })
    expect(dlg.vm.$el).toMatchSnapshot()
    setTimeout(() => {
      dlg.element.querySelector('[action-key=ok]').click()
    }, 0)
    const res = await dlg.wait()
    expect(res).toBe('ok')
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })

  test('Check confirm with action icons', async () => {
    const dlg = await manager.confirm({
      text: 'test',
      icon: 'warning',
      actions: {
        false: {
          icon: {
            text: 'cancel'
          },
          color: 'info',
          rounded: true,
          text: 'No'
        },
        true: {
          text: 'Yes',
          icon: {
            text: 'success',
            right: true
          }
        }
      }
    })
    expect(dlg.vm.$el).toMatchSnapshot()
    await dlg.close()
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })

  test('Check confirm with btns true|false', async () => {
    const dlg = await manager.confirm({
      text: 'test',
      actions: { true: 'Yes', false: 'No' }
    })
    expect(dlg.element).toMatchSnapshot()
    expect(dlg.element.querySelector('[action-key=true]')).toBeTruthy()
    expect(dlg.element.querySelector('[action-key=false]')).toBeTruthy()
    setTimeout(() => {
      dlg.element.querySelector('[action-key=true]').click()
    }, 0)
    const res = await dlg.wait()
    expect(res).toBe(true)
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })

  test('Check confirm with handler functions', async () => {
    const dlg = await manager.confirm({
      text: 'test',
      actions: {
        false: 'No',
        true: {
          text: 'Yes',
          class: 'action-true',
          handler: () => {
            return new Promise((resolve) => {
              setTimeout(() => resolve({ msg: 'foo' }), 5)
            })
          }
        }
      }
    })
    expect(dlg.element).toMatchSnapshot()
    setTimeout(() => {
      dlg.element.querySelector('[action-key=true]').click()
      Vue.nextTick(() => {
        expect(dlg.element.querySelector('[action-key=true]').hasAttribute('disabled')).toBe(true)
      })
    }, 0)
    const res = await dlg.wait()
    expect(res).toEqual({ msg: 'foo' })
    await Vue.nextTick()
    expect(document.body.innerHTML).toBe('')
  })
})
