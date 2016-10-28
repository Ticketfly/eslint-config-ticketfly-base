'use strict';

const assert = require('assert');
const { CLIEngine } = require('eslint');

/**
 * Files in the repo to test
 */
const filesUnderTest = [
  'index.js',
  'base.js',
  'recommended.js',
  'tests/test.js',
  'rules/best-practices.js',
  'rules/es2015.js',
  'rules/nodejs-and-commonjs.js',
  'rules/possible-errors.js',
  'rules/strict-mode.js',
  'rules/stylistic-issues.js',
  'rules/variables.js'
];

const eslintOpts = {
  envs: ['node', 'es6'],
  useEslintrc: false,
  configFile: './index.js'
};

const report = new CLIEngine(eslintOpts).executeOnFiles(filesUnderTest);

assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 0);

filesUnderTest.forEach((fileName, idx) => {
  const lintedFileName = report.results[idx].filePath.split('/').slice(-1).join('');
  const expectedFileName = filesUnderTest[idx].split('/').slice(-1).join('');

  assert.equal(lintedFileName, expectedFileName);
});
