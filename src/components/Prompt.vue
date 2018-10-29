<template>
  <div>
    <DialogCard :title="title" :actions="actions" :handle="handleClick">
      <v-text-field
          autofocus
          @keypress.enter="$emit('submit', editedValue)"
          v-model="editedValue"
          :label="text"
          required
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
