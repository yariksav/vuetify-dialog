export default {
  props: {
    type: String,
    color: String
  },
  computed: {
    getColor () {
      return this.color || this.type
    }
  }
}
