<template>
  <v-card>
    <v-card-title v-if="title">
      <slot name=title>
        <span :class="titleClass" v-text="title"/>
      </slot>
      <!-- <div v-if="$parent && typeof $parent.close === 'function'"
        class="vuedl-notification__closeBtn"
        @click.stop="$parent.close">×</div> -->
    </v-card-title>
    <v-card-text>
      <slot/>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <DialogActions :actions="actions" ref="actions" outline color="blue-grey"/>
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
    actions: [Array, Object]
  },
  methods: {
    trigger (name) {
      this.$refs.actions && this.$refs.actions.trigger(name)
    }
  }
}
</script>
