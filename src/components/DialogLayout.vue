<template>
  <v-dialog @keydown.esc="dismiss"
    v-model="isActive" :max-width="getWidth"
    :persistent="persistent || loading" :fullscreen="fullscreen" ref="vdialog">
    <slot/>
  </v-dialog>
</template>

<script>
export default {
  props: {
    fullscreen: Boolean
  },
  methods: {
    _destroy () {
      this.$refs.vdialog.$refs.dialog.addEventListener('transitionend', this.onTransitionEnd)
    },
    onTransitionEnd (event) {
      if (['opacity', 'z-index'].indexOf(event.propertyName) >= 0) {
        this.$refs.vdialog.$refs.dialog.removeEventListener('transitionend', this.onTransitionEnd)
        this.$destroy()
      }
    }
  }
}
</script>
