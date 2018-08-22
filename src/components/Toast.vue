<template>
  <div>
    <v-snackbar
      :timeout="timeout || 5000"
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
      <v-btn @click="close" class="ml-3" icon>
        <v-icon>clear</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>

import WrapperMixin from 'vuedl/src/mixins/wrapper'
import ButtonsMixin from 'vuedl/src/mixins/buttons'
import ColorsMixin from '../mixins/colorable'
import ConfirmMixin from 'vuedl/src/mixins/confirm'

export default {
  mixins: [ ConfirmMixin, WrapperMixin, ButtonsMixin, ColorsMixin ],
  props: {
    timeout: Number
  }
}
</script>
