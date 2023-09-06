'use strict';

const companyUi = require('..');
const assert = require('assert').strict;

assert.strictEqual(companyUi(), 'Hello from companyUi');
console.info('companyUi tests passed');


const companyUtil = require("@monorepo/company-util")
assert.strictEqual(companyUtil(), 'Hello from companyUtil');
console.info('companyUtil tests passed');