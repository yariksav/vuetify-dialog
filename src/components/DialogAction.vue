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
    v-on="$listeners"
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
    outline: Boolean,
    round: Boolean
  },
  computed: {
    actionText () {
      return typeof this.text === 'function' ? this.text() : this.text
    }
  }
}
</script>
