import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chunk } from '../src/chunk.js';

test('chunk splits an array into groups of the given size', () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

test('chunk rejects a non positive size', () => {
  assert.throws(() => chunk([1, 2], 0), RangeError);
});
