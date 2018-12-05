module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/strongly-recommended',
    'standard'
  ],
  plugins: [
    'vue',
    'jest'
  ],
  rules: {
    "jest": true,
    ident: false,
    'no-debugger': 'off',
    'no-console': 'off',
    'no-useless-escape': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-indent': 'off',
    'vue/require-default-prop': 'off',
    'vue/component-name-in-template-casing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/multiline-html-element-content-newline': 'off'
  },
  globals: {}
}
