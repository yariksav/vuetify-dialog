<template>
  <div>
    <DialogCard
      :title="title"
      :actions="actions"
      :handle="handleClick"
      :titleClass="titleClass"
      ref="card"
    >
      <v-text-field
        ref="input"
        required
        v-model="editedValue"
        :label="text"
        @keypress.enter="$emit('submit', editedValue)"
          :single-line="textField.singleLine"
          :rounded="textField.rounded"
          :solo="textField.solo"
          :filled="textField.filled"
          :outlined="textField.outlined"
          :autofocus="textField.autofocus"
      />
    </DialogCard>
  </div>
</template>

<script>

import Confirmable from 'vuedl/src/mixins/confirmable'
import DialogCard from './DialogCard.vue'
import { VTextField } from 'vuetify/lib'

export default {
  components: {
    DialogCard,
    VTextField
  },
  layout: 'default',
  mixins: [Confirmable],
  props: {
    value: String,
    titleClass: String,
    textField : {
      type: Object,
      default: () => ({
        singleLine:Boolean,
        rounded:Boolean,
        solo:Boolean,
        filled:Boolean,
        outlined:Boolean,
        autofocus:Boolean
      })
    }
  },
  data () {
    return {
      editedValue: this.value
    }
  },
  mounted () {
    setTimeout(() => {
      this.$refs.input.focus()
    }, 100)
  },
  methods: {
    handleClick (res, action) {
      this.$emit('submit', action.key ? this.editedValue : action.key)
      return false
    }
  }
}
</script>
