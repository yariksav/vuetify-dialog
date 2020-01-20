import Vuedl from 'vuedl/src/index'
import DialogLayout from './components/DialogLayout.vue'
import Confirm from './components/Confirm.vue'
import Toast from './components/Toast.vue'
import Alert from './components/Alert.vue'
import SnackbarLayout from './components/SnackbarLayout.vue'
import Prompt from './components/Prompt.vue'
import Loading from './components/Loading.vue'
import DialogActions from './components/DialogActions.vue'
import DialogCard from './components/DialogCard.vue'
import NotificationLayout from 'vuedl/src/components/NotificationLayout.vue'

function install (Vue, options = {}) {
  if (install.installed) return
  install.installed = true
  if (!options.container) {
    options.container = '[data-app=true]'
  }
  const property = options.property || '$dialog'
  const actionsFn = options.actions || (() => {
    return {
      false: 'Cancel',
      true: {
        text: 'OK',
        color: 'primary'
      }
    }
  })
  Vue.use(Vuedl, options)
  const manager = Vue.prototype[property]
  manager.layout('default', DialogLayout)
  manager.layout('snackbar', SnackbarLayout)
  manager.layout('notification', NotificationLayout)
  Vue.component('DialogActions', DialogActions)
  Vue.component('DialogCard', DialogCard)
  manager.component('confirm', Confirm, {
    waitForResult: true,
    actions: actionsFn,
    ...options.confirm
  })

  manager.component('warning', Confirm, {
    type: 'warning',
    waitForResult: true,
    actions: actionsFn,
    ...options.warning
  })

  manager.component('error', Confirm, {
    type: 'error',
    waitForResult: true,
    actions: ['Close'],
    ...options.error
  })

  manager.component('toast', Toast, {
    waitForResult: true,
    ...options.toast
  })

  manager.component('loading', Loading, {
    waitForResult: false,
    ...options.loading
  })

  manager.withLoading = function (options, callback) {
    return manager.loading(options).then(dlg => {
      callback()
        .then(res => {
          dlg.close()
          return res
        })
        .catch(e => {
          dlg.close()
          throw e
        })
    })
  }

  manager.message = {
    info: (message, options) => manager.toast({ text: message, color: 'info', ...options }),
    error: (message, options) => manager.toast({ text: message, color: 'error', ...options }),
    success: (message, options) => manager.toast({ text: message, color: 'success', ...options }),
    warning: (message, options) => manager.toast({ text: message, color: 'warning', ...options })
  }

  manager.component('notification', Alert, {
    waitForResult: true,
    ...options.notification
  })

  manager.notify = {
    info: (message, options) => manager.notification({ text: message, color: 'info', ...options }),
    error: (message, options) => manager.notification({ text: message, color: 'error', ...options }),
    success: (message, options) => manager.notification({ text: message, color: 'success', ...options }),
    warning: (message, options) => manager.notification({ text: message, color: 'warning', ...options })
  }

  manager.component('prompt', Prompt, {
    waitForResult: true,
    actions: actionsFn,
    ...options.prompt
  })
}

const Plugin = {
  install
}

/* istanbul ignore next */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Plugin)
}

export default Plugin
