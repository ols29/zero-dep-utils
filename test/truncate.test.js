import { test } from 'node:test';
import assert from 'node:assert/strict';
import { truncate } from '../src/truncate.js';

test('truncate shortens long strings with a suffix', () => {
  assert.equal(truncate('Hello World', 8), 'Hello...');
});

test('truncate leaves short strings untouched', () => {
  assert.equal(truncate('Hi', 8), 'Hi');
});
