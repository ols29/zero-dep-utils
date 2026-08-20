import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pick } from '../src/pick.js';

test('pick copies only the requested keys', () => {
  assert.deepEqual(pick({ a: 1, b: 2, c: 3 }, ['a', 'c']), { a: 1, c: 3 });
});

test('pick ignores keys that are absent', () => {
  assert.deepEqual(pick({ a: 1 }, ['a', 'z']), { a: 1 });
});
