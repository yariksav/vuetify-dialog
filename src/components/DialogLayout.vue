<template>
  <v-dialog
    ref="vdialog"
    eager
    content-class="vuedl-layout"
    v-model="isActive"
    :fullscreen="fullscreen"
    :max-width="getWidth"
    :persistent="persistent || loading"
    :scrollable="scrollable"
    :transition="transition"
    :hide-overlay="hideOverlay"
    @keydown.esc="dismiss"
  >
    <div class="v-dialog-wrapper">
      <div
        v-if="showClose && !persistent && !loading"
        class="vuedl-layout__closeBtn"
        @click.stop="close"
      >
        ×
      </div>
      <dialog-child
        ref="dialog"
        v-bind="$options.propsData"
      />
    </div>
  </v-dialog>
</template>

<script>
import { VDialog } from 'vuetify/lib'

export default {
  components: {
    VDialog
  },
  props: {
    fullscreen: Boolean,
    scrollable: Boolean,
    hideOverlay: Boolean,
    transition: {
      type: [String, Boolean],
      default: 'dialog-transition'
    },
    showClose: {
      type: Boolean,
      default: () => true
    }
  },
  methods: {
    _destroy () {
      // Allow to draw transition, cause vuetify doesn't have onClose method
      setTimeout(() => {
        this.$destroy()
      }, 1000)
      // this.$refs.vdialog.$refs.dialog.addEventListener('transitionend', this.onTransitionEnd)
    }
    // onTransitionEnd (event) {
    //   if (['opacity', 'z-index'].indexOf(event.propertyName) >= 0) {
    //     this.$refs.vdialog.$refs.dialog.removeEventListener('transitionend', this.onTransitionEnd)
    //     this.$destroy()
    //   }
    // }
  }
}
</script>
<style>
  .vuedl-layout {
    position: relative;
  }
  .vuedl-layout__closeBtn {
    position: absolute;
    top: 16px;
    width: 16px;
    height: 16px;
    font-family: -webkit-pictograph;
    right: 14px;
    font-size: 30px;
    opacity: 0.5;
    z-index: 1000;
    cursor: pointer;
    line-height: 0.5;
  }
  .vuedl-layout__closeBtn:hover {
    opacity: 1;
  }
</style>
