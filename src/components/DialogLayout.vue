<template>
  <v-dialog @keydown.esc="dismiss" :scrollable="scrollable"
    content-class="vuedl-layout"
    v-model="isActive" :max-width="getWidth"
    :persistent="persistent || loading" :fullscreen="fullscreen" ref="vdialog" >
    <div v-if="closeBtn && !persistent && !loading"
      class="vuedl-layout__closeBtn"
      @click.stop="close">×</div>
    <slot />
  </v-dialog>
</template>

<script>
export default {
  props: {
    fullscreen: Boolean,
    scrollable: Boolean,
    closeBtn: {
      type: Boolean,
      default: () => true
    }
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
<style>
  .vuedl-layout {
    position: relative;
  }
  .vuedl-layout__closeBtn {
    position: absolute;
    top: 0px;
    font-family: -webkit-pictograph;
    right: 14px;
    font-size: 29px;
    opacity: 0.5;
    z-index: 1000;
    cursor: pointer;
  }
  .vuedl-layout__closeBtn:hover {
    opacity: 1;
  }
</style>
