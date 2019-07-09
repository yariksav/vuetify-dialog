module.exports = {
  name: 'vuetify-dialog',
  input: './src/index.js',
  format: ['es', 'cjs', 'umd', 'umd-min'],
  plugins: ['vue'],
  // vue: {
  //   someOption: "value'
  // },
  globals: {
    vue: 'Vue'
  },
  external: ['vue'],
  postcss: {
    extract: false
  }
}
