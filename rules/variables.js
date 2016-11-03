/**
 * eslint-config-ticketfly-base/variables
 *
 * The rules here are this configuration's opinion of
 * rules listed under ESLint's "Variables"
 * category: (http://eslint.org/docs/rules/#variables)
 */
module.exports = {
  rules: {
    // disallow labels that share a name with a variable
    // http://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',

    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',

    // disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // disallow use of variables before they are defined
    'no-use-before-define': 'error'
  }
};
