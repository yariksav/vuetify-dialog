<template>
  <div class="d-flex">
    <span v-html="text" />
    <DialogActions :actions="actions" />
  </div>
</template>

<script>

import Confirmable from 'vuedl/src/mixins/confirmable'
import DialogActions from './DialogActions.vue'

export default {
  layout: 'snackbar',
  mixins: [Confirmable],
  components: {
    DialogActions
  }
}
</script>
