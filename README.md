# Ticketfly's ESLint Base Configuration

[![NPM version][npm-image]][npm-url]

_Ticketfly's base ESLint configuration for JavaScript projects._

## Installation

You can install ESLint using npm:

    npm install eslint --save-dev

Then install this configuration:

    npm install eslint-config-ticketfly-base --save-dev

## Usage

In your `.eslintrc.js` file, extend from one or more of the categorized rules:

```js
{
    extends: [
      'eslint-config-ticketfly-base/best-practices',
      'eslint-config-ticketfly-base/errors',
    ].map(require.resolve)
}
```

Currently, we provide a ["recommended" bundle]() that includes a few of these:

```js
{
    extends: 'eslint-config-ticketfly-base/recommended
}
```

[npm-image]: https://img.shields.io/npm/v/eslint-config-ticketfly-base.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-ticketfly-base