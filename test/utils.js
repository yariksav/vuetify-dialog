import { createWrapper } from '@vue/test-utils'
import Dialog from 'vuedl/src/dialog'

export function sleep (ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function wrap (vm) {
  return createWrapper({ componentInstance: vm }, {
    attachedToDocument: true
  })
}

export async function mount (component, params) {
  const dialog = new Dialog(component)
  await dialog.show(params)
  const wrappper = wrap(dialog.vm)
  return {
    dialog,
    element: dialog.element,
    wrappper
  }
}
