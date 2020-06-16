<template>
  <div>
    <DialogCard
      :title="title"
      :actions="actions"
      :handle="handleClick"
      ref="card"
    >
      <v-form ref="form">
        <v-text-field
          ref="input"
          v-model="editedValue"
          :rules="rules"
          :label="text"
          v-bind="textField"
          @keypress.enter="$emit('submit', editedValue)"
        />
      </v-form>
    </DialogCard>
  </div>
</template>

<script>

import Confirmable from 'vuedl/src/mixins/confirmable'
import DialogCard from './DialogCard.vue'
import { VTextField, VForm } from 'vuetify/lib'

export default {
  components: {
    DialogCard,
    VTextField,
    VForm
  },
  layout: 'default',
  mixins: [Confirmable],
  props: {
    value: String,
    rules: Array,
    textField: Object,
    autofocus: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      editedValue: this.value
    }
  },
  mounted () {
    if (this.autofocus) {
      setTimeout(() => {
        this.$refs.input.focus()
      }, 100)
    }
  },
  methods: {
    handleClick (res, action) {
      if (!action.key) {
        this.$emit('submit', action.key)
      }
      const valid = this.rules ? this.$refs.form.validate() : true
      if (!valid) {
        this.$refs.input.focus()
        return false
      }
      this.$emit('submit', action.key ? this.editedValue : action.key)
    }
  }
}
</script>
