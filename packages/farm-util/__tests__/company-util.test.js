'use strict';

const companyUtil = require('@ychengke/farm-util');
const assert = require('assert').strict;

assert.strictEqual(companyUtil(), 'Hello from companyUtil');
console.info('companyUtil tests passed');
