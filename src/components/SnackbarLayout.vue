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
      <dialog-child
        v-bind="$options.propsData"
        ref="dialog"
      />
    </v-snackbar>
  </div>
</template>

<script>
import Colorable from '../mixins/colorable'
import { VSnackbar } from 'vuetify/lib'

export default {
  components: {
    VSnackbar
  },
  mixins: [Colorable],
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
      }, 500)
    }
  }
}
</script>
