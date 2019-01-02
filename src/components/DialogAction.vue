<template>
  <component
    :is="component"
    v-bind="attrs"
    :flat="flat"
    :outline="outline"
    :icon="!text && Boolean(icon)"
    :color="color"
    :round="round"
    :loading="loading"
    :disabled="disabled"
    @click="$emit('click', this)"
    v-on="on"
  >
    <v-icon v-if="icon && !icon.right" v-bind="icon" v-text="icon.text" />
    {{ text }}
    <v-icon v-if="icon && icon.right" v-bind="icon" v-text="icon.text" />
  </component>
</template>
<script>

import Actionable from 'vuedl/src/mixins/actionable'

export default {
  mixins: [ Actionable ],
  props: {
    attrs: Object,
    component: {
      type: [String, Object],
      default: () => 'v-btn'
    },
    text: String,
    color: String,
    disabled: Boolean,
    flat: Boolean,
    icon: Object,
    loading: Boolean,
    outline: Boolean,
    round: Boolean
  }
}
</script>
