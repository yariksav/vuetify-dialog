<template>
  <v-dialog @keydown.esc="dismiss"
    v-model="isActive" :max-width="width"
    :persistent="persistent || loading" :fullscreen="fullscreen" ref="vdialog">
    {{ $data }}
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
      if (event.propertyName === 'opacity') {
        this.$refs.vdialog.$refs.dialog.removeEventListener('transitionend', this.onTransitionEnd)
        this.$destroy()
      }
    }
  }
}
</script>
