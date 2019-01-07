import { createWrapper } from '@vue/test-utils'

export function sleep (ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

export function wrap (vm) {
  return createWrapper({ componentInstance: vm }, {
    attachedToDocument: true
  })
}
