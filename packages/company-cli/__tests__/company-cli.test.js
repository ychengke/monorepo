'use strict';

const companyCli = require('..');
const assert = require('assert').strict;

assert.strictEqual(companyCli(), 'Hello from companyCli');
console.info('companyCli tests passed');
