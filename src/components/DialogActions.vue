<template>
  <span>
    <component :is="tag" v-for="action in actionlist" :key="action.key"
      v-bind="action.attrs"
      v-if="isActionVisible(action)"
      :flat="action.flat !== undefined ? action.flat : flat"
      :outline="action.outline !== undefined ? action.outline : outline"
      :icon="!action.text && !!action.icon"
      :color="action.color || color"
      :round="action.round || round"
      :loading="!passive && isActionInLoading(action)"
      :disabled="isActionDisabled(action) || (!passive && Boolean(loadingAction))"
      @click="onActionClick(action)">
      <v-icon v-if="action.icon && !action.icon.right" v-bind="action.icon" v-text="action.icon.text" />
      {{ action.text }}
      <v-icon v-if="action.icon && action.icon.right" v-bind="action.icon" v-text="action.icon.text" />
    </component>
  </span>
</template>
<script>

import Actionable from 'vuedl/src/mixins/actionable'

export default {
  mixins: [ Actionable ],
  props: {
    tag: {
      type: String,
      default: () => 'v-btn'
    },
    color: String,
    flat: Boolean,
    round: Boolean,
    outline: Boolean,
    passive: Boolean
  }
}
</script>
