import { test } from 'node:test';
import assert from 'node:assert/strict';
import { omit } from '../src/omit.js';

test('omit removes the given keys', () => {
  assert.deepEqual(omit({ a: 1, b: 2, c: 3 }, ['b']), { a: 1, c: 3 });
});
