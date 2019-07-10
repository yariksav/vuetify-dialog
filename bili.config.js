module.exports = {
  name: 'vuetify-dialog',
  input: 'src/index.js',
  output: {
    dir: './dist',
    name: 'vuetify-dialog',
    moduleName: 'dfdfdfd',
    extractCSS: false,
    format: ['es', 'cjs', 'umd', 'umd-min']
  },
  plugins: {
    vue: true
  },
  globals: {
    vue: 'Vue'
  },
  external: ['vue']
}
