<template>
  <div>
    <v-toolbar
      v-if="!!type"
      dark
      :color="getColor"
      dense
    >
      <v-icon v-if="!!getIcon">
        {{ getIcon }}
      </v-icon>
      <v-toolbar-title
        class="white--text"
        v-text="title"
      />
    </v-toolbar>
    <v-card tile>
      <v-card-title v-if="!type">
        <h3
          class="headline mb-0"
          v-text="title"
        />
      </v-card-title>
      <v-card-text v-html="text" />
      <v-card-actions>
        <v-spacer />
        <DialogActions :actions="actions" />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

import Actionable from 'vuedl/src/mixins/actionable'
import Confirmable from 'vuedl/src/mixins/confirmable'
import ColorsMixin from '../mixins/colorable'

import { VToolbar, VToolbarTitle, VIcon, VCard, VCardTitle, VCardText, VCardActions } from 'vuetify/lib'

export default {
  components: {
    VToolbar,
    VToolbarTitle,
    VIcon,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions
  },
  layout: ['default', { width: 450 }],
  mixins: [
    Actionable,
    Confirmable,
    ColorsMixin
  ],
  props: {
    icon: String,
    persistent: Boolean
  },
  computed: {
    getIcon () {
      return this.icon || this.type
    }
  }
}
</script>
