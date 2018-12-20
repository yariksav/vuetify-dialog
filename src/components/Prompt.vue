<template>
  <div>
    <DialogCard
      :title="title"
      :actions="actions"
      :handle="handleClick"
    >
      <v-text-field
        autofocus
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
  computed: {
    getIcon () {
      return this.icon || this.type
    }
  },
  methods: {
    handleClick (res) {
      this.$emit('submit', this.editedValue)
      return false
    }
  }
}
</script>
