# Ticketfly's ESLint Base Configuration

[![NPM version][npm-image]][npm-url]

_Ticketfly's base ESLint configuration for JavaScript projects._

## Installation

You can install ESLint using npm:

```sh
    npm install eslint --save-dev
```

\*_Note that if your build process includes using a tool that runs ESLint
(for example, [Ember CLI ESLint](https://github.com/ember-cli/ember-cli-eslint)),
installing `eslint` directly might not be necessary_.

Next, install this configuration:

```sh
    npm install eslint-config-ticketfly-base --save-dev
```

## Usage

You'll need to configure the way that you extend from `eslint-config-ticketfly-base`
inside of your `.eslintrc.js` file.

The most straightforward approach involves extending the root project name:

```js
{
    extends: 'ticketfly-base',  // shorthand for 'eslint-config-ticketfly-base'
    rules: {
      // Additional, per-project rules...
    }
}
```

This will provide the configuration files [composed in `lib/base.js`](./lib/base.js)
(which, first and foremost, extend from [`eslint:recommended`](http://eslint.org/docs/rules/)).

**In most cases, however, you'll likely want to extend from [our "recommended" setup](./lib/recommended.js),
which is optimized for modern browser environments**:

```js
{
    extends: 'ticketfly-base/lib/recommended',  // shorthand for 'eslint-config-ticketfly-base'
    rules: {
      // Additional, per-project rules...
    }
}
```

If you want to be more selective, however, you can always compose individual files yourself:

```js
{
    extends: [
      'eslint:recommended'
      'eslint-config-ticketfly-base/rules/best-practices',
      'eslint-config-ticketfly-base/rules/possible-errors',
      'eslint-config-ticketfly-base/rules/nodejs-and-commonjs'
    ].map(require.resolve),

    rules: {
      // Additional, per-project rules...
    }
}
```


[npm-image]: https://img.shields.io/npm/v/eslint-config-ticketfly-base.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-ticketfly-base
