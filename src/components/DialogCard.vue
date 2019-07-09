<template>
  <v-card>
    <v-card-title v-if="title">
      <slot name="title">
        <span :class="titleClass" v-text="title" />
      </slot>
    </v-card-title>
    <v-card-text>
      <slot />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <DialogActions :actions="actions" flat ref="actions" :handle="handle" />
    </v-card-actions>
  </v-card>
</template>

<script>

import DialogActions from './DialogActions.vue'

export default {
  components: {
    DialogActions
  },
  props: {
    title: String,
    titleClass: {
      type: String,
      default: 'headline'
    },
    actions: [ Array, Object, Function ],
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
