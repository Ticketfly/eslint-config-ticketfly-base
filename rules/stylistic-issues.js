/**
 * eslint-config-ticketfly-base/stylistic-issues
 *
 * The rules here are this configuration's opinion of
 * rules listed under ESLint's "Stylistic Issues"
 * category: (http://eslint.org/docs/rules/#stylistic-issues)
 */
module.exports = {
  rules: {
    // enforce spacing inside single-line blocks
    // http://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // enforce one true brace style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // require or disallow trailing commas
    'comma-dangle': ['error', 'never'],

    // enforce spacing before and after comma
    'comma-spacing': ['error', { before: false, after: true }],

    // enforce one true comma style
    'comma-style': ['error', 'last'],

    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': ['error', 'always'],

    // enforce spacing between functions and their invocations
    // http://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // this option sets a specific tab width for your code
    // http://eslint.org/docs/rules/indent
    indent: ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],

    // enforces spacing between keys and values in object literal properties
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // require a space before & after certain keywords
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // require an empty line after variable declarations
    // http://eslint.org/docs/rules/newline-after-var
    'newline-after-var': ['error', 'always'],

    // disallow Array constructors
    // http://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': ['error'],

    // disallow use of unary operators, ++ and --
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',

    // enforce the consistent use of single quotes, while also allowing
    // deviations where an escape character would be needed otherwise, and
    // allowing backticks for template-literals
    // http://eslint.org/docs/rules/quotes
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

    // require semicolons at the end of statements
    // http://eslint.org/docs/rules/semi
    semi: ['error', 'always'],

    // require or disallow space before blocks
    'space-before-blocks': 'error'
  }
};
