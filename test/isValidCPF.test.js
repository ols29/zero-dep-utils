import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isValidCPF } from '../src/isValidCPF.js';

test('isValidCPF accepts a valid CPF with or without mask', () => {
  assert.equal(isValidCPF('111.444.777-35'), true);
  assert.equal(isValidCPF('11144477735'), true);
});

test('isValidCPF rejects invalid check digits', () => {
  assert.equal(isValidCPF('11144477700'), false);
});

test('isValidCPF rejects repeated digit sequences', () => {
  assert.equal(isValidCPF('11111111111'), false);
});
