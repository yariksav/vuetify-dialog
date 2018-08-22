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
        <v-btn v-for="button in parsedButtons" :key="button.key"
          :color="button.color || 'green'"
          @click="onButtonClick(button)"
          v-html="translate(button.text)"
          flat/>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

import ButtonsMixin from 'vuedl/src/mixins/buttons'
import ConfirmMixin from 'vuedl/src/mixins/confirm'
import ColorsMixin from '../mixins/colorable'

export default {
  layout: ['default', { width: 450 }],
  mixins: [ConfirmMixin, ColorsMixin, ButtonsMixin],
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
