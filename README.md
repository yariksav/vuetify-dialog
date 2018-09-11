# vuetify-dialog - vuetify dialog helper

Implementation of [vuedl](https://github.com/yariksav/vuedl) dialog helper with Vuetify.js framework

This module will help you to work with modal dialogs in your project

> NOTE: Module is in initial development. Anything may change at any time.

[![NPM Version][npm-image]][npm-url]

<p align="center">
  <!-- <a href="https://travis-ci.org/yariksav/vuetify-dialog">
    <img src="https://travis-ci.org/yariksav/vuetify-dialog.svg?branch=master">
  </a>
  <a href="https://coveralls.io/github/yariksav/vuetify-dialog?branch=master">
    <img src="https://coveralls.io/repos/github/yariksav/vuetify-dialog/badge.svg?branch=master">
  </a> -->
  <a href="https://cdnjs.com/libraries/vuetify-dialog">
    <img src="https://img.shields.io/cdnjs/v/vuetify-dialogi.svg">
  </a>
  <a href="https://www.npmjs.org/package/vuetify-dialog">
    <img src="https://img.shields.io/npm/v/vuetify-dialog">
  </a>
  <a href="https://npmcharts.com/compare/vuetify-dialog?minimal=true">
    <img src="http://img.shields.io/npm/dm/vuetify-dialog.svg">
  </a>
  <br>
  <a href="http://img.badgesize.io/https://unpkg.com/vuetify-dialog/dist/vuetify-dialog.js?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/vuetify-dialog/dist/vuetify-dialog.cjs.js?compression=gzip&label=gzip%20size:%20JS">
  </a>
  <!-- <a href="#backers">
    <img src="https://opencollective.com/element/backers/badge.svg">
  </a>
  <a href="#sponsors">
    <img src="https://opencollective.com/element/sponsors/badge.svg">
  </a> -->
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>

## Documentation
[See docs here](https://github.com/yariksav/vuedl#readme)

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
const res = await this.$dialog.confirm({ text: 'Do you really want to exit?'})
```

### Warning dialog
```js
const res = await this.$dialog.warning({ text: 'Do you really want to exit?', title: 'Warning'})
```

### Error dialog
```js
this.$dialog.error({ text: 'Cannot delete this item', title: 'Error'})
```

### Propt dialog
```js
let res = await this.$dialog.prompt({ text: 'Your name', title: 'Please input your name' })
```

### Toasts
```js
const res = await this.$dialog.toast({ text: 'Do you really want to exit?'})
```

### Actions
To all this simple dialogs you can config your actions, just send
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
