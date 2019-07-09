<template>
  <div>
    <DialogCard
      :title="title"
      :actions="actions"
      :handle="handleClick"
      ref="card"
    >
      <v-text-field
        ref="input"
        required
        v-model="editedValue"
        :label="text"
        @keypress.enter="$emit('submit', editedValue)"
      />
    </DialogCard>
  </div>
</template>

<script>

import Confirmable from 'vuedl/src/mixins/confirmable'
import DialogCard from './DialogCard.vue'

export default {
  components: {
    DialogCard
  },
  layout: 'default',
  mixins: [ Confirmable ],
  props: {
    value: String
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
