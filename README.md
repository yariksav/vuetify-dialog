# vuetify-dialog - vuetify dialog helper

Implementation of [vuedl](https://github.com/yariksav/vuedl) dialog helper with Vuetify.js framework

This module will help you to work with modal dialogs in your project

> NOTE: Module is in initial development. Anything may change at any time.

[![NPM Version][npm-image]][npm-url]

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

-- `context` - the context of your application, such as store, axios, router etc.
-- `property` - the property, which will integrate to Vue. Default is `$dialog`

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

### Buttons
To all this simple dialogs you can config your buttons, just send
```js
{
  ...
  buttons: {
    'false': 'No',
    'true': 'Yes'
  }
}
// result will be true, false, or undefigned
{
  ...
  buttons: ['No', 'Yes']
}
// result will be 'No', 'Yes', or undefigned

```
You can also send full button options
```js
{
  buttons: [{
    text: 'Yes', color: 'blue', key: true
  }]
}
```


[npm-image]: https://img.shields.io/npm/v/vuetify-dialog.svg?style=flat-square
[npm-url]: https://npmjs.org/package/vuetify-dialog
