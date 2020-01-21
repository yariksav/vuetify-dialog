<template>
  <v-alert
    style="margin: 0; min-width: 300px"
    @input="$emit('submit')"
    :dismissible="dismissible"
    :type="color"
    :outlined="outlined"
    :prominent="prominent"
  >
    <div class="d-flex align-center">
      <div class="mr-2">
        {{ text }}
      </div>
      <DialogActions :actions="actions" />
    </div>
  </v-alert>
</template>
<script>

import DialogActions from './DialogActions.vue'
import { VAlert } from 'vuetify/lib'

export default {
  components: {
    DialogActions,
    VAlert
  },
  layout: ['notification', { showClose: false }],
  props: {
    color: {
      type: String,
      default: () => 'info'
    },
    actions: {
      type: [Array, Object],
      default: () => {}
    },
    text: {
      type: String,
      default: ''
    },
    outlined: Boolean,
    prominent: Boolean,
    dismissible: {
      type: Boolean,
      default: true
    }
  }
}
</script>
