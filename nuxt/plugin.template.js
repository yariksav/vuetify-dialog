import Vue from 'vue'
import VuetifyDialog from 'vuetify-dialog'

export default (obj, inject) => {
    // inject options from module
  const pluginOptions = [<%= serialize(options) %>][0] || {}
  const property = pluginOptions.property || '$dialog'

  const keys = Object.keys(obj.app).filter(key =>
    key.startsWith('$') || ['router', 'i18n', 'store'].indexOf(key) >= 0)
  
  const context = Object.assign({}, ...keys.map(prop => {
    if (obj.app[prop]) return {[prop]: obj.app[prop]};
  }))
  context.route = obj.route

  Vue.use(VuetifyDialog, { context, ...pluginOptions })
  const instance = Vue.prototype[property]
  if (instance) {
    obj[property] = instance
    inject(property, instance)
  }
}
