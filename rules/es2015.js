/**
 * eslint-config-ticketfly-base/es2015
 *
 * The rules here are this configuration's opinion of
 * rules listed under ESLint's "ECMAScript 6"
 * category: (http://eslint.org/docs/rules/#ecmascript-6)
 */
module.exports = {
  rules: {
    // require space before/after arrow function's arrow
    // http://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['error', { before: true, after: true }],

    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true
    }],

    // require let or const instead of var
    'no-var': 'error'
  }
};
