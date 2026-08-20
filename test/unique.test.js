import { test } from 'node:test';
import assert from 'node:assert/strict';
import { unique } from '../src/unique.js';

test('unique removes duplicate values preserving order', () => {
  assert.deepEqual(unique([1, 1, 2, 3, 3, 2]), [1, 2, 3]);
});
