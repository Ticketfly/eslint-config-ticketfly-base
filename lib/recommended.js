module.exports = {
  root: true,

  extends: [
    './base.js',
    '../rules/es2015.js'
  ].map(require.resolve),

  env: {
    es6: true,
    browser: true
  },

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  }
}
