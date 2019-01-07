<template>
  <span>
    <component
      :is="action.component || component"
      :action-key="''+action.key"
      v-for="action in actionlist"
      :key="action.key"
      v-bind="action.attrs"
      :flat="action.flat !== undefined ? action.flat : flat"
      :outline="action.outline !== undefined ? action.outline : outline"
      :icon="!action.text && !!action.icon"
      :color="action.color || color"
      :round="action.round || round"
      :loading="!passive && isActionInLoading(action)"
      :class="{'loading': loadingAction === action.key}"
      :disabled="isActionDisabled(action) || (!passive && Boolean(loadingAction))"
      @click="onActionClick(action)"
      v-on="action.on"
    >
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
    component: {
      type: [String, Object],
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
