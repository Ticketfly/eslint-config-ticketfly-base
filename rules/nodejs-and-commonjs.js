/**
 * eslint-config-ticketfly-base/nodejs-and-commonjs
 *
 * The rules here are this configuration's opinion of
 * rules listed under ESLint's "Node.js and CommonJS"
 * category: (http://eslint.org/docs/rules/#nodejs-and-commonjs)
 */
module.exports = {
  rules: {
    // require all requires be top-level
    // http://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // disallow use of new operator with the require function
    'no-new-require': 'error'
  }
};
