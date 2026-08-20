import { test } from 'node:test';
import assert from 'node:assert/strict';
import { deepClone } from '../src/deepClone.js';

test('deepClone produces an independent copy', () => {
  const original = { a: 1, nested: { b: 2 } };
  const copy = deepClone(original);
  copy.nested.b = 99;
  assert.equal(original.nested.b, 2);
  assert.deepEqual(copy, { a: 1, nested: { b: 99 } });
});
