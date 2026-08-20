import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sleep } from '../src/sleep.js';

test('sleep resolves after the delay', async () => {
  const start = process.hrtime.bigint();
  await sleep(20);
  const elapsedMs = Number(process.hrtime.bigint() - start) / 1e6;
  assert.ok(elapsedMs >= 15, `expected at least 15ms, got ${elapsedMs}`);
});
