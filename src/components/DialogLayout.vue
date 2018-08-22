<template>
  <v-dialog @keydown.esc="dismiss"
    v-model="isActive" :max-width="width"
    :persistent="persistent" :fullscreen="fullscreen">
    <slot/>
  </v-dialog>
</template>

<script>
export default {
  props: {
    fullscreen: Boolean
  }
}
</script>
