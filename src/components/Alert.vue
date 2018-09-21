<template>
  <v-alert
    style="margin: 0; min-width: 300px"
    :value="true"
    @input="$emit('submit')"
    :dismissible="dismissible"
    :type="type"
  >
    {{ text }}
    <DialogActions :actions="actions"/>
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
    type: {
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
