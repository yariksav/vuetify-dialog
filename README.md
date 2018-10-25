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

## Documentation
[See docs here](https://github.com/yariksav/vuedl#readme)

## Demo
[See demo in CodeSandbox](https://k2910xo07r.codesandbox.io/)

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

### Messages
```js
this.$dialog.message.warning('Warning message')
this.$dialog.message.error('Error message')
this.$dialog.message.info('Info message')
this.$dialog.message.success('Success message')
```

### Actions
To all this simple dialogs you can config your actions, just put to options
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
