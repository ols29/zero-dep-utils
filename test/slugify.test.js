import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/slugify.js';

test('slugify lowercases and hyphenates', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('slugify strips accents', () => {
  assert.equal(slugify('São Paulo'), 'sao-paulo');
});

test('slugify trims leading and trailing separators', () => {
  assert.equal(slugify('  --Café & Cream--  '), 'cafe-cream');
});
