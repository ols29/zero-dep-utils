import { test } from 'node:test';
import assert from 'node:assert/strict';
import { debounce } from '../src/debounce.js';

test('debounce collapses rapid calls into one', async () => {
  let calls = 0;
  const fn = debounce(() => { calls += 1; }, 20);
  fn();
  fn();
  fn();
  await new Promise((resolve) => setTimeout(resolve, 60));
  assert.equal(calls, 1);
});
