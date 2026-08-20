import { test } from 'node:test';
import assert from 'node:assert/strict';
import { capitalize } from '../src/capitalize.js';

test('capitalize uppercases the first character', () => {
  assert.equal(capitalize('hello'), 'Hello');
});

test('capitalize leaves empty strings untouched', () => {
  assert.equal(capitalize(''), '');
});
