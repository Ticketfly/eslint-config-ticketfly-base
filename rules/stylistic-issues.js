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

    //  enforces line comments only above code, in its own line.
    // http://eslint.org/docs/rules/line-comment-position
    'line-comment-position': ['error', { position: 'above' }],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // require empty lines around comments
    // http://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': ['error', {
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: true,
      afterLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: false,
      allowObjectStart: true,
      allowObjectEnd: false,
      allowArrayStart: true,
      allowArrayEnd: false
    }],

    // require an empty line after variable declarations
    // http://eslint.org/docs/rules/newline-after-var
    'newline-after-var': ['error', 'always'],

    // disallow Array constructors
    // http://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': ['error'],

    // disallow inline comments after code
    // http://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'off',

    // disallow use of unary operators, ++ and --
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // disallow trailing whitespace at the end of lines
    // http://eslint.org/docs/rules/no-trailing-spaces#skipblanklines
    'no-trailing-spaces': ['error', { skipBlankLines: true }],

    // enforce the consistent use of single quotes, while also allowing
    // deviations where an escape character would be needed otherwise, and
    // allowing backticks for template-literals
    // http://eslint.org/docs/rules/quotes
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

    // require semicolons at the end of statements
    // http://eslint.org/docs/rules/semi
    semi: ['error', 'always'],

    // require or disallow space before blocks
    'space-before-blocks': 'error',

    // enforce consistent spacing after the // or /* in a comment
    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+']
      },
      block: {
        exceptions: ['-', '+'],
        balanced: false
      }
    }]
  }
};
