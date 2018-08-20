<template>
  <div>
    <v-card tile>
      <v-card-title v-if="title">
        <h3 class="headline mb-0" v-text="title" />
      </v-card-title>
      <v-container>
        <v-text-field
          autofocus
          @keypress.enter="$emit('close', editedValue)"
          v-model="editedValue"
          :label="text"
          required
        />
      </v-container>
      <v-card-actions>
        <v-spacer/>
        <v-btn v-for="button in parsedButtons" :key="button.key"
          :color="button.color || 'green'"
          @click="onSubmit(button)"
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
  layout: 'default',
  mixins: [ConfirmMixin, ColorsMixin, ButtonsMixin],
  props: {
    icon: String,
    persistent: Boolean,
    value: String
  },
  data () {
    return {
      editedValue: this.value
    }
  },
  computed: {
    getIcon () {
      return this.icon || this.type
    }
  },
  methods: {
    onSubmit (button) {
      if (button.key) {
        this.$emit('close', this.editedValue)
      } else {
        this.$emit('close', false)
      }
    },
    translate (text) {
      return (typeof this.$t === 'function') ? this.$t(text) : text
    }
  }
}
</script>
