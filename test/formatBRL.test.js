import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatBRL } from '../src/formatBRL.js';

test('formatBRL formats a number as Brazilian currency', () => {
  const result = formatBRL(1234.5);
  assert.match(result, /R\$/);
  assert.match(result, /1\.234,50/);
});

test('formatBRL throws on non numeric input', () => {
  assert.throws(() => formatBRL('abc'), TypeError);
});
