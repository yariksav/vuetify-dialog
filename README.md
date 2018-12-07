# vuetify-dialog - vuetify dialog helper

Implementation of [vuedl](https://github.com/yariksav/vuedl) dialog helper with Vuetify.js framework

This module will help you to work with modal dialogs in your project

> NOTE: Module is in initial development. Anything may change at any time.

<p align="center">
  <a href="https://npmcharts.com/compare/vuetify-dialog?minimal=true">
    <img src="http://img.shields.io/npm/dm/vuetify-dialog.svg">
  </a>
  <a href="https://www.npmjs.org/package/vuetify-dialog">
    <img src="https://img.shields.io/npm/v/vuetify-dialog.svg">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/vuetify-dialog/dist/vuetify-dialog.js?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/vuetify-dialog/dist/vuetify-dialog.cjs.js?compression=gzip&label=gzip%20size:%20JS">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>

## Vuedl module documentation
[See docs here](https://github.com/yariksav/vuedl#readme)

## Demo
[See demo in CodeSandbox](https://ppx57r3nnj.codesandbox.io/)

## Setup

Install the package from npm

```npm
npm install vuetify-dialog
```

```javascript
import VuetifyDialog from 'vuetify-dialog'
Vue.use(VuetifyDialog, {
  context,
  property
})
```

+ `context` - the context of your application, such as store, axios, router etc.
+ `property` - the property, which will integrate to Vue. Default is `$dialog`

## ♻️ Usage with Nuxt.js

Add `vuetify-dialog/nuxt` to modules section of `nuxt.config.js`

Module automatically add to dialog nuxt context data, such as router, route, i18n, $axios, etc

```js
{
  modules: [
    // Simple usage
    'vuetify-dialog/nuxt'

    // Optionally passing options in module configuration
    ['vuetify-dialog/nuxt', { property: '$dialog' }]
  ],

  // Optionally passing options in module top level configuration
  vuetifyDialog: {
    property: '$dialog'
  }
}
```


### Simple confirm dialog
```js
const res = await this.$dialog.confirm({
  text: 'Do you really want to exit?'
  title: 'Warning'
})
```

### Warning dialog
```js
const res = await this.$dialog.warning({
  text: 'Do you really want to exit?',
  title: 'Warning'
})
```

### Error dialog
```js
this.$dialog.error({
  text: 'Cannot delete this item',
  title: 'Error'
})
```

### Prompt dialog
```js
let res = await this.$dialog.prompt({
  text: 'Your name',
  title: 'Please input your name'
})
```


### Notifications
The notification component is used to convey important information to the user. 
Notification support positioning, removal delay and callbacks. It comes in 4 variations, **success**, **info**, **warning** and **error**. These have default icons assigned which can be changed and represent different actions

Notification uses [v-alert](https://vuetifyjs.com/en/components/alerts) component

Props:
* **text** - _the text fo your message_
  - type: String
* options:
  - type: Object
  - properties:
    - position: one of _top-left_, _top-right_, _bottom-left_, _bootom-right_
    - timeoot: timer to hide message. Default 5000. If set to 0 - message will not closes automatically
    - actions
```js
this.$dialog.notify.info('Test notification', {
  position: 'top-right',
  timeout: 5000
})
```

### Toasts 
The toast component is used to display a quick message to a user. Toasts support positioning, removal delay and callbacks. It comes in 4 variations, **success**, **info**, **warning** and **error**. These have default icons assigned which can be changed and represent different actions

Toast uses [v-snackbar](https://vuetifyjs.com/en/components/snackbars) component

Props:
* **text** - _the text fo your message_
  - type: String
* options:
  - type: Object
  - properties:
    - position: one of _top-left_, _top-right_, _bottom-left_, _bootom-right_
    - timeoot: timer to hide message. Default 5000. If set to 0 - message will not closes automatically 
    - actions: - see below
``` javascript
this.$dialog.message.info('Test', {
  position: 'top-left'
})
```
### Actions
To all dialogs you can put your own buttons
Props:
* **key** - _the text fo your message_
  - type: String
* options:
  - type: Object
  - properties:
    - position: one of _top-left_, _top-right_, _bottom-left_, _bootom-right_
    - timeoot: timer to hide message. Default 5000. If set to 0 - message will not closes automatically 
    - actions: - see below
```js
{
  ...
  actions: {
    'false': 'No',
    'true': 'Yes'
  }
}
// result will be true, false, or undefigned
{
  ...
  actions: ['No', 'Yes']
}
// result will be 'No', 'Yes', or undefigned

```
You can also send full button options
```js
{
  actions: [{
    text: 'Yes', color: 'blue', key: true
  }]
}
```


[npm-image]: https://img.shields.io/npm/v/vuetify-dialog.svg?style=flat-square
[npm-url]: https://npmjs.org/package/vuetify-dialog
