<template>
  <div>
    <v-snackbar
      :timeout="timeout || 5000"
      :color="getColor"
      v-model="isActive"
      class="application"
      v-bind="$options.propsData"
      :top="top"
      :left="left"
      :right="right"
      :bottom="bottom"
      @click="dismiss"
    >
      <slot />
    </v-snackbar>
  </div>
</template>

<script>
import Colorable from '../mixins/colorable'

export default {
  mixins: [ Colorable ],
  props: {
    timeout: Number,
    position: String
  },
  data () {
    const position = this.position || this.$options.propsData.position || ''
    return {
      top: position.indexOf('top') !== -1,
      left: position.indexOf('left') !== -1,
      right: position.indexOf('right') !== -1,
      bottom: position.indexOf('bottom') !== -1
    }
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
