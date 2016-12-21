/**
 * eslint-config-ticketfly-base/best-practices
 *
 * The rules here are this configuration's opinion of
 * rules listed under ESLint's "Best Practices"
 * category: (http://eslint.org/docs/rules/#best-practices)
 */
module.exports = {
  rules: {
    // specify curly brace conventions for all control statements
    curly: ['error', 'all'],

    // encourages use of dot notation whenever possible
    'dot-notation': ['error', { allowKeywords: true }],

    // enforces consistent newlines before or after dots
    // http://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // require the use of === and !==
    // http://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'smart'],

    // disallow the use of alert, confirm, and prompt
    'no-alert': 'warn',

    // disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',

    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 'error',

    // disallow use of eval()
    'no-eval': 'error',

    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 'error',

    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    // HINT: use this style: `var x = (function () { return { y: 1 };}());`,
    'wrap-iife': ['error', 'outside'],

    // require or disallow Yoda conditions
    yoda: 'error'
  }
};
