<template>
  <div>
    <v-snackbar
      :timeout="timeout || 6000"
      :color="getColor"
      v-model="isActive"
      class="application"
      v-bind="$options.propsData"
      @click="dismiss">

      <span v-html="text" />
      <v-btn v-for="button in parsedButtons" :key="button.key"
        dark flat
        @click="onButtonClick(button)"
        v-text="button.text"
      />
    </v-snackbar>
  </div>
</template>

<script>

import WrapperMixin from 'vuedl/src/mixins/wrapper'
import ButtonsMixin from 'vuedl/src/mixins/buttons'
import ColorsMixin from '../mixins/colorable'
import ConfirmMixin from 'vuedl/src/mixins/confirm'

export default {
  mixins: [ConfirmMixin, WrapperMixin, ButtonsMixin, ColorsMixin],
  props: {
    timeout: Number,
    persistent: Boolean
  },
  methods: {
    dismiss () {
      if (!this.persistent) {
        this.isActive = false
      }
    }
  }
}
</script>
