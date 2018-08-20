<template>
  <v-dialog v-model="isActive" :max-width="width" :persistent="persistent" :fullscreen="fullscreen">
    <dialog-child v-bind="$options.propsData" ref="dialog"/>
  </v-dialog>
</template>

<script>
export default {
  props: {
    persistent: Boolean,
    fullscreen: Boolean,
    width: {
      type: Number,
      default: 500
    }
  }
}
</script>
