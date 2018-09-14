<template>
  <div>
    <v-snackbar
      :timeout="timeout || 5000"
      :color="getColor"
      v-model="isActive"
      class="application"
      v-bind="$options.propsData"
      @click="dismiss">
      <slot/>
    </v-snackbar>
  </div>
</template>

<script>
import Colorable from '../mixins/colorable'

export default {
  mixins: [ Colorable ],
  props: {
    timeout: Number
  },
  methods: {
    _destroy () {
      setTimeout(() => {
        this.$destroy()
      }, 300)
    }
  }
}
</script>
