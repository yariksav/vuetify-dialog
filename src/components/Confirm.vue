<template>
  <v-card tile>
    <v-toolbar
      v-if="title"
      :dark="Boolean(getColor)"
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
      <v-toolbar-title class="">
        {{ title }}
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text
      class="body-1 py-2"
      :class="{ 'pt-4': !title }"
      v-html="text"
    />
    <DialogActions
      :actions="actions"
      v-bind="actionOptions"
    />
  </v-card>
</template>

<script>
import Confirmable from 'vuedl/src/mixins/confirmable'
import Colorable from '../mixins/colorable'
import Iconable from '../mixins/iconable'
import DialogActions from './DialogActions.vue'
import { VCard, VCardText, VToolbar, VToolbarTitle, VIcon } from 'vuetify/lib'

export default {
  components: {
    DialogActions,
    VCard,
    VCardText,
    VToolbar,
    VToolbarTitle,
    VIcon
  },
  layout: ['default', { width: 450 }],
  mixins: [Iconable, Confirmable, Colorable],
  props: {
    actionOptions: Object,
    text: {
      type: [String, Function],
      required: true,
      default: ''
    }
  },
  computed: {
    getText () {
      return typeof this.text === 'function' ? this.text() : this.text
    }
  }
}
</script>
