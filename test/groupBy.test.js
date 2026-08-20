import { test } from 'node:test';
import assert from 'node:assert/strict';
import { groupBy } from '../src/groupBy.js';

test('groupBy buckets items by the selector result', () => {
  const result = groupBy([1, 2, 3, 4], (n) => (n % 2 === 0 ? 'even' : 'odd'));
  assert.deepEqual(result, { odd: [1, 3], even: [2, 4] });
});
