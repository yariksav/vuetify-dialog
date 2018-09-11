<template>
  <div>
    <v-toolbar v-if="!!type" dark :color="getColor" dense>
      <v-icon v-if="!!getIcon">{{ getIcon }}</v-icon>
      <v-toolbar-title class="white--text" v-text="title"/>
    </v-toolbar>
    <v-card tile>
      <v-card-title v-if="!type">
        <h3 class="headline mb-0" v-text="title" />
      </v-card-title>
      <v-card-text v-html="text"/>
      <v-card-actions>
        <v-spacer/>
        <DialogActions :actions="actions"/>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

import Confirmable from 'vuedl/src/mixins/confirmable'
import Colorable from '../mixins/colorable'
import DialogActions from './DialogActions.vue'

export default {
  components: {
    DialogActions
  },
  layout: ['default', { width: 450 }],
  mixins: [ Confirmable, Colorable ],
  props: {
    icon: String,
    persistent: Boolean
  },
  computed: {
    getIcon () {
      return this.icon || this.type
    }
  },
  methods: {
    translate (text) {
      return (typeof this.$t === 'function') ? this.$t(text) : text
    }
  }
}
</script>
