<template>
  <span>
    <v-btn v-for="action in actionlist" :key="action.key"
      :flat="action.flat !== undefined ? action.flat : flat"
      :outline="action.outline !== undefined ? action.outline : outline"
      :icon="!action.text && action.icon"
      :color="action.color || color"
      :loading="loadingAction === action.key"
      :disabled="isActionDisabled(action) || !!loadingAction"
      @click="onActionClick(action)">
      <v-icon v-if="action.icon && !action.icon.right" v-bind="action.icon" v-text="action.icon.text"/>
      {{ action.text }}
      <v-icon v-if="action.icon && action.icon.right" v-bind="action.icon" v-text="action.icon.text"/>
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
      default: () => 'blue-grey'
    },
    flat: Boolean,
    outline: Boolean,
    params: [ Object, Array ]
  }
}
</script>
