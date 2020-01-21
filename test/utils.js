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

export function disableTransitions () {
  const css = `
  * {
    animation: none !important;
    transition: none !important;
    transition-timing-function: none !important;
  }`
  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style')
  head.appendChild(style)
  style.type = 'text/css'
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }
}

export function addElemWithDataAppToBody () {
  const app = document.createElement('div')
  app.setAttribute('data-app', true)
  document.body.append(app)
}
