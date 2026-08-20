import { test } from 'node:test';
import assert from 'node:assert/strict';
import { clamp } from '../src/clamp.js';

test('clamp keeps a value inside the range', () => {
  assert.equal(clamp(10, 0, 5), 5);
  assert.equal(clamp(-3, 0, 5), 0);
  assert.equal(clamp(3, 0, 5), 3);
});
