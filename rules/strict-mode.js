/**
 * eslint-config-ticketfly-base/strict-mode
 *
 * The rules here are this configuration's opinion of
 * rules listed under ESLint's "Strict Mode"
 * category: (http://eslint.org/docs/rules/#strict-mode)
 */
module.exports = {
  rules: {
    // require or disallow strict mode directives
    // http://eslint.org/docs/rules/strict#rule-details
    strict: ['error', 'never']  // we prefer ECMAScript2015+ module environment, where strict mode is already implied
  }
};
