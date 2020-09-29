export default {
  props: {
    icon: {
      type: [String, Boolean],
      default: undefined
    },
    type: String
  },
  computed: {
    getIcon () {
      if (this.icon === false) {
        return
      }
      return this.icon || (this.$vuetify && this.$vuetify.icons && this.$vuetify.icons.values[this.type]) || this.type
    }
  }
}
