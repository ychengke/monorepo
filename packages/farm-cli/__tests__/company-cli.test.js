'use strict';

const companyCli = require("@ychengke/farm-cli");
const assert = require('assert').strict;

assert.strictEqual(companyCli(), 'Hello from companyCli');
console.info('companyCli tests passed');
