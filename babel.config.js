module.exports = {
  presets: [
    ['@babel/preset-env', { 'modules': false }] // , 'useBuiltIns': false
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
    // ['@babel/plugin-transform-runtime', {
    //   regenerator: true
    // }]
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', {
          'targets': {
            'node': 'current'
          }
        }]
      ]
    }
  }
}
