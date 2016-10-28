module.exports = {
  extends: [
    'eslint:recommended',
    require.resolve('../rules/best-practices.js'),
    require.resolve('../rules/possible-errors.js'),
    require.resolve('../rules/strict-mode.js'),
    require.resolve('../rules/stylistic-issues.js'),
    require.resolve('../rules/variables.js')
  ]
};
