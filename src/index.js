import Vuedl from 'vuedl'
import DialogLayout from './components/DialogLayout.vue'
import Confirm from './components/Confirm.vue'

const Plugin = {
  install (Vue, options = {}) {
    const property = options.property || '$dialog'
    Vue.use(Vuedl, options)
    const manager = Vue.prototype[property]
    manager.layout('default', DialogLayout)
    manager.template('confirm', Confirm)
  }
}

export default Plugin
