/**
 * eslint-config-ticketfly-base/possible-errors
 *
 * The rules here are this configuration's opinion of
 * rules listed under ESLint's "Possible Errors"
 * category: (http://eslint.org/docs/rules/#possible-errors)
 */
module.exports = {
  rules: {
    // disallow use of Object.prototypes builtins directly
    // http://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // disallow negating the left operand of relational operators
    // http://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error'
  }
};
