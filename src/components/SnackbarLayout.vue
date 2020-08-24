<template>
  <v-snackbar
    :timeout="timeout"
    :color="getColor"
    v-model="isActive"
    class="application"
    :top="top"
    :left="left"
    :right="right"
    :bottom="bottom"
    :multi-line="multiLine"
    :vertical="vertical"
    :elevation="elevation"
    :text="flat"
    :centered="centered"
    :rounded="rounded"
    :outlined="outlined"
    :shaped="shaped"
    @click="dismiss"
  >
    <dialog-child
      v-bind="$options.propsData"
      ref="dialog"
    />
    <DialogActions
      slot="action"
      :actions="actions"
    />
  </v-snackbar>
</template>

<script>
import Colorable from '../mixins/colorable'
import { VSnackbar } from 'vuetify/lib'
import Confirmable from 'vuedl/src/mixins/confirmable'
import DialogActions from './DialogActions.vue'

export default {
  components: {
    VSnackbar,
    DialogActions
  },
  mixins: [Colorable, Confirmable],
  props: {
    timeout: {
      type: Number,
      default: 5000
    },
    position: String,
    multiLine: Boolean,
    vertical: Boolean,
    elevation: [Number, String],
    flat: Boolean,
    centered: Boolean,
    rounded: [Boolean, String],
    outlined: Boolean,
    shaped: Boolean
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
