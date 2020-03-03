<template>
  <div class="DialogActions">
    <template v-for="action in actionlist">
      <DialogAction
        :key="action.key"
        v-bind="getActionProps(action)"
        :action-key="''+action.key"
        :loading="!passive && isActionInLoading(action)"
        :class="{'loading': loadingAction === action.key}"
        :disabled="isActionDisabled(action) || (!passive && Boolean(loadingAction))"
        @click="onActionClick(action)"
      />
    </template>
    <slot />
  </div>
</template>
<script>

import Actionable from 'vuedl/src/mixins/actionable'
import DialogAction from './DialogAction.vue'

export default {
  components: {
    DialogAction
  },
  mixins: [Actionable],
  props: {
    component: [String, Object],
    color: String,
    flat: Boolean,
    rounded: Boolean,
    outlined: Boolean,
    passive: Boolean
  },
  computed: {
    nestedProps () {
      return [
        'color',
        'flat',
        'icon',
        'outlined',
        'rounded',
        'block',
        'small',
        'large',
        'x-small',
        'x-large'
      ]
    }
  },
  methods: {
    getActionProps (action) {
      const res = {
        component: action.component || this.component,
        text: action.text
      }
      this.nestedProps.forEach(key => {
        if (action[key] || this[key]) {
          res[key] = action[key] === undefined ? this[key] : action[key]
        }
      })
      return res
    }
  }
}
</script>
