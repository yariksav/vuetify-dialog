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
    'no-debugger': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'vue/require-default-prop': 'off',
  },
  globals: {}
}
