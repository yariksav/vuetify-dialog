<template>
  <span>
    <v-btn v-for="action in actionlist" :key="action.key"
      :flat="action.flat !== false"
      :color="action.color || color"
      :loading="loadingAction === action.key"
      :disabled="!!loadingAction"
      @click="onActionClick(action)">
      {{ action.text }}
    </v-btn>
  </span>
</template>
<script>

import Actionable from 'vuedl/src/mixins/actionable'

export default {
  mixins: [ Actionable ],
  props: {
    color: {
      type: String,
      default: 'gray'
    }
    // actions: [Array]
  }
  // data () {
  //   return {
  //     loadingAction: null
  //   }
  // },
  // methods: {
  //   setLoadingState (value) {
  //     this.$emit('loading', value)
  //     !value && (this.loadingAction = null)
  //     if (this.$root && this.$root._dialogInstance) {
  //       this.$set(this.$root._dialogInstance, 'loading', value)
  //     }
  //   },
  //   async onActionClick (action) {
  //     if (action.handle) {
  //       this.loadingAction = action.key
  //       this.setLoadingState(true)
  //       try {
  //         let ret = await action.handle()
  //         this.setLoadingState(false)
  //         if (ret !== false) {
  //           this.$emit('submit', ret || action.key)
  //         }
  //       } catch (e) {
  //         this.setLoadingState(false)
  //         console.log('error', e) // TODO
  //         throw e
  //       }
  //     } else {
  //       this.$emit('submit', action.key)
  //     }
  //   }
  // }
}
</script>
