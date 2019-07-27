<template>
  <v-alert
    style="margin: 0; min-width: 300px"
    @input="$emit('submit')"
    :dismissible="dismissible"
    :type="color"
  >
    {{ text }}
    <DialogActions :actions="actions" />
  </v-alert>
</template>
<script>

import DialogActions from './DialogActions.vue'

export default {
  components: {
    DialogActions
  },
  layout: ['notification', { showClose: false }],
  props: {
    color: {
      type: String,
      default: () => 'info'
    },
    actions: [ Array, Object ],
    text: String,
    dismissible: {
      type: Boolean,
      default: true
    }
  }
}
</script>
