<template>
  <div>
    <DialogCard
      :title="title"
      :actions="actions"
      :handler="handlerClick"
      :title-class="titleClass"
      ref="card"
    >
      <v-text-field
        ref="input"
        v-model="editedValue"
        :rules="rules"
        :label="text"
        v-bind="textField"
        @keyup.enter.stop="onEnter"
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
    rules: Array,
    textField: Object,
    titleClass: [String, Object],
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
    onEnter () {
      this.$refs.card.$refs.actions.trigger(true)
    },
    handlerClick (res, action) {
      if (!action.key) {
        this.$emit('submit', action.key)
      }
      const valid = this.rules ? this.$refs.input.validate() : true
      if (!valid) {
        this.$refs.input.focus()
        return false
      }
      this.$emit('submit', action.key ? this.editedValue : action.key)
    }
  }
}
</script>
