import { test } from 'node:test';
import assert from 'node:assert/strict';
import { range } from '../src/range.js';

test('range builds an ascending sequence', () => {
  assert.deepEqual(range(0, 5), [0, 1, 2, 3, 4]);
  assert.deepEqual(range(0, 10, 2), [0, 2, 4, 6, 8]);
});

test('range supports a negative step', () => {
  assert.deepEqual(range(5, 0, -1), [5, 4, 3, 2, 1]);
});
