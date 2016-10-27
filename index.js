module.exports = {
  extends: [
    'eslint:recommended',
    './rules/best-practices.js',
    './rules/es2015.js',
    './rules/possible-errors.js',
    './rules/strict-mode.js',
    './rules/stylistic-issues.js',
    './rules/variables.js'
  ],

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  }
};
