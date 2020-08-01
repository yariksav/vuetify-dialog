<template>
  <component
    :is="component"
    v-bind="$attrs"
    :text="flat"
    :icon="!text && Boolean(icon)"
    :disabled="disabled"
    @click="$emit('click', this)"
    v-on="on"
  >
    <v-icon
      v-if="icon && !icon.right"
      v-bind="icon"
      v-text="icon.text"
    />
    {{ actionText }}
    <v-icon
      v-if="icon && icon.right"
      v-bind="icon"
      v-text="icon.text"
    />
  </component>
</template>
<script>

import { VIcon, VBtn } from 'vuetify/lib'

export default {
  components: {
    VIcon,
    VBtn
  },
  props: {
    attrs: Object,
    component: {
      type: [String, Object],
      default: 'v-btn'
    },
    text: [String, Function],
    disabled: Boolean,
    flat: Boolean,
    icon: Object,
    on: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    actionText () {
      return typeof this.text === 'function' ? this.text() : this.text
    }
  }
}
</script>
