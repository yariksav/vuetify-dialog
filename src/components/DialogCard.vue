<template>
  <v-card v-bind="$attrs">
    <slot name="title">
      <v-card-title v-if="title">
        <div
          :class="titleClass"
          v-text="title"
        />
      </v-card-title>
    </slot>
    <v-card-text>
      <slot />
    </v-card-text>
    <v-card-actions v-if="actions">
      <v-spacer />
      <DialogActions
        :actions="actions"
        flat
        ref="actions"
        :handle="handle"
      />
    </v-card-actions>
  </v-card>
</template>

<script>

import DialogActions from './DialogActions.vue'

import { VCard, VCardTitle, VCardText, VCardActions, VSpacer } from 'vuetify/lib'

export default {
  components: {
    DialogActions,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VSpacer
  },
  props: {
    title: String,
    titleClass: {
      type: String,
      default: 'headline'
    },
    actions: [Array, Object, Function],
    handle: Function
  },
  methods: {
    trigger (name) {
      this.$refs.actions && this.$refs.actions.trigger(name)
    }
  }
}
</script>
<style>
  .vuedl-layout.v-dialog--scrollable > .v-card > .v-card__text {
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
  }
</style>
