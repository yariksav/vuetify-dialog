<template>
  <v-card tile>
    <v-toolbar
      v-if="Boolean(type)"
      dark
      :color="getColor"
      dense
      flat
    >
      <v-icon
        v-if="Boolean(getIcon)"
        left
      >
        {{ getIcon }}
      </v-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <v-card-title v-if="!type">
      <h3
        class="headline mb-0"
        v-text="title"
      />
    </v-card-title>
    <v-card-text
      class="body-1 py-2"
      v-html="text"
    />
    <v-card-actions>
      <v-spacer />
      <DialogActions
        :actions="actions"
        flat
      />
    </v-card-actions>
  </v-card>
</template>

<script>

import Confirmable from 'vuedl/src/mixins/confirmable'
import Colorable from '../mixins/colorable'
import DialogActions from './DialogActions.vue'
import { VCard, VCardTitle, VCardText, VCardActions, VToolbar, VToolbarTitle, VIcon, VSpacer } from 'vuetify/lib'

export default {
  components: {
    DialogActions,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VToolbar,
    VToolbarTitle,
    VIcon,
    VSpacer
  },
  layout: ['default', { width: 450 }],
  mixins: [Confirmable, Colorable],
  props: {
    icon: {
      type: [String, Boolean],
      default: undefined
    },
    text: {
      type: [String, Function],
      reqiured: true,
      default: ''
    }
  },
  computed: {
    getIcon () {
      if (this.icon === false) {
        return
      }
      return this.icon || (this.$vuetify && this.$vuetify.icons && this.$vuetify.icons[this.type]) || this.type
    },
    getText () {
      return typeof this.text === 'function' ? this.text() : this.text
    }
  }
}
</script>
