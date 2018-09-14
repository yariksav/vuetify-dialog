<template>
  <span>
    <v-btn v-for="action in actionlist" :key="action.key"
      :flat="action.flat !== false"
      :color="action.color || color"
      :loading="loadingAction === action.key"
      :disabled="isActionDisabled(action) || !!loadingAction"
      @click="onActionClick(action)">
      {{ action.text }}
    </v-btn>
  </span>
</template>
<script>

import Actionable from 'vuedl/src/mixins/actionable'

export default {
  mixins: [ Actionable ],
  props: {
    color: {
      type: String,
      default: 'gray'
    }
  }
}
</script>
