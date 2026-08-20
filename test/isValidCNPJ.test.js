import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isValidCNPJ } from '../src/isValidCNPJ.js';

test('isValidCNPJ accepts a valid CNPJ with or without mask', () => {
  assert.equal(isValidCNPJ('11.222.333/0001-81'), true);
  assert.equal(isValidCNPJ('11222333000181'), true);
});

test('isValidCNPJ rejects invalid check digits', () => {
  assert.equal(isValidCNPJ('11222333000100'), false);
});

test('isValidCNPJ rejects repeated digit sequences', () => {
  assert.equal(isValidCNPJ('11111111111111'), false);
});
