<template>
  <v-card
    :color="color"
    :dark="dark"
  >
    <v-card-text>
      {{ text }}
      <v-progress-linear
        indeterminate
        :color="dark ? 'white' : 'primary'"
        class="mb-0"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { VCard, VCardText, VProgressLinear } from 'vuetify/lib'

export default {
  layout: ['default', {
    hideOverlay: true,
    persistent: true,
    width: 300
  }],
  components: {
    VCard,
    VCardText,
    VProgressLinear
  },
  props: {
    text: String,
    dark: {
      type: Boolean,
      default: true
    },
    color: String
  }
}
</script>
