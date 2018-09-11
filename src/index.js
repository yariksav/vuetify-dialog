import Vuedl from 'vuedl'
import DialogLayout from './components/DialogLayout.vue'
import Confirm from './components/Confirm.vue'
import Toast from './components/Toast.vue'
import SnackbarLayout from './components/SnackbarLayout.vue'
import Prompt from './components/Prompt.vue'
// import DialogActions from './components/DialogActions.vue'

const Plugin = {
  install (Vue, options = {}) {
    const property = options.property || '$dialog'
    Vue.use(Vuedl, options)
    const manager = Vue.prototype[property]
    manager.layout('default', DialogLayout)
    manager.layout('snackbar', SnackbarLayout)
    // Vue.component('DialogActions', DialogActions)
    manager.component('confirm', Confirm, {
      waitForResult: true,
      actions: {
        'false': 'Cancel',
        'true': 'OK'
      }
    })

    manager.component('warning', Confirm, {
      type: 'warning',
      waitForResult: true,
      actions: {
        'false': 'Cancel',
        'true': 'OK'
      }
    })

    manager.component('error', Confirm, {
      type: 'error',
      waitForResult: true,
      actions: ['Close']
    })

    manager.component('toast', Toast, {
      waitForResult: true
    })

    manager.message = {
      info: (message, options) => manager.toast({ text: message, type: 'info', ...options }),
      error: (message, options) => manager.toast({ text: message, type: 'error', ...options }),
      success: (message, options) => manager.toast({ text: message, type: 'success', ...options }),
      warning: (message, options) => manager.toast({ text: message, type: 'warning', ...options })
    }

    manager.component('prompt', Prompt, {
      waitForResult: true,
      actions: {
        'false': 'Cancel',
        'true': 'OK'
      }
    })
  }
}

export default Plugin
