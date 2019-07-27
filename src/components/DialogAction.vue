<template>
  <component
    :is="component"
    v-bind="attrs"
    :text="flat"
    :outlined="outlined"
    :icon="!text && Boolean(icon)"
    :color="color"
    :rounded="rounded"
    :loading="loading"
    :disabled="disabled"
    @click="$emit('click', this)"
    v-on="on"
  >
    <v-icon v-if="icon && !icon.right" v-bind="icon" v-text="icon.text" />
    {{ actionText }}
    <v-icon v-if="icon && icon.right" v-bind="icon" v-text="icon.text" />
  </component>
</template>
<script>

export default {
  props: {
    attrs: Object,
    component: {
      type: [String, Object],
      default: () => 'v-btn'
    },
    text: [String, Function],
    color: String,
    disabled: Boolean,
    flat: Boolean,
    icon: Object,
    loading: Boolean,
    outlined: Boolean,
    rounded: Boolean,
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
