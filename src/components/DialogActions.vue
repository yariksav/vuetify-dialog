<template>
  <span>
    <DialogAction
      v-for="action in actionlist"
      :key="action.key"
      v-bind="getActionProps(action)"
      :action-key="''+action.key"
      :loading="!passive && isActionInLoading(action)"
      :class="{'loading': loadingAction === action.key}"
      :disabled="isActionDisabled(action) || (!passive && Boolean(loadingAction))"
      @click="onActionClick(action)"
    />
  </span>
</template>
<script>

import Actionable from 'vuedl/src/mixins/actionable'
// import DialogActions from 'vuedl/src/components/DialogActions.vue'
import DialogAction from './DialogAction.vue'

export default {
  components: {
    DialogAction
  },
  mixins: [Actionable],
  // extends: DialogActions,
  props: {
    component: [String, Object],
    color: String,
    flat: Boolean,
    round: Boolean,
    outline: Boolean,
    passive: Boolean
  },
  computed: {
    nestedProps () {
      return [ 'color', 'flat', 'icon', 'outline', 'round' ]
    }
  },
  methods: {
    getActionProps (action) {
      const res = {
        component: action.component || this.component,
        text: action.text
      }
      ;[ 'color', 'flat', 'icon', 'outline', 'round' ].forEach(key => {
        if (action[key] || this[key]) {
          res[key] = action[key] === undefined ? this[key] : action[key]
        }
      })
      return res
    }
  }
}
</script>
