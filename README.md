# zero-dep-utils

[![Module: ESM](https://img.shields.io/badge/module-ESM-blue.svg)](https://nodejs.org/api/esm.html)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)](https://github.com/ols29/zero-dep-utils/pulls)

Small, dependency free JavaScript utility functions. Pure ESM, tested with the built in Node.js test runner, no build step, no runtime dependencies.

## Why

Most projects reach for a heavy utility library to use two or three helpers. This is the opposite: each function is tiny, isolated in its own file, and copy paste friendly. Take only what you need.

## Install

```bash
npm install zero-dep-utils
```

Or copy the single file you need directly from `src/`. Every utility is self contained.

## Usage

```js
import { capitalize, slugify, formatBRL, isValidCPF, debounce, chunk, unique } from './src/index.js';

capitalize('hello');            // "Hello"
slugify('São Paulo');           // "sao-paulo"
formatBRL(1234.5);              // "R$ 1.234,50"
isValidCPF('111.444.777-35');   // true
chunk([1, 2, 3, 4, 5], 2);      // [[1, 2], [3, 4], [5]]
unique([1, 1, 2, 3]);           // [1, 2, 3]

const onResize = debounce(() => console.log('done'), 200);
```

## Available utilities

| Function | Description |
| --- | --- |
| `capitalize(str)` | Uppercase the first character of a string. |
| `slugify(str)` | Convert a string into a URL safe slug, stripping accents. |
| `formatBRL(value)` | Format a number as Brazilian Real currency. |
| `isValidCPF(cpf)` | Validate a Brazilian CPF number, with or without mask. |
| `debounce(fn, wait)` | Delay a function until calls stop for a given interval. |
| `chunk(array, size)` | Split an array into groups of a given size. |
| `unique(array)` | Remove duplicate values from an array, preserving order. |
| `clamp(value, min, max)` | Restrict a number to an inclusive range. |
| `range(start, end, step)` | Build an array of numbers over an interval. |
| `sleep(ms)` | Resolve a promise after a delay, for use with async/await. |
| `pick(obj, keys)` | Copy a subset of keys into a new object. |
| `omit(obj, keys)` | Copy an object without the given keys. |
| `groupBy(array, fn)` | Group array items into buckets by a selector. |
| `isValidCNPJ(cnpj)` | Validate a Brazilian CNPJ number, with or without mask. |
| `truncate(str, length, suffix)` | Shorten a string and append a suffix when cut. |
| `deepClone(value)` | Deep clone a structured value. |

Every function lives in its own file under `src/`, so you can also copy a single helper without importing the rest.

## Testing

Run the full suite with the built in Node.js test runner (Node 18 or newer):

```bash
npm test
```

Each utility ships with its own test file under `test/`. No test framework or dependencies required.

## License

MIT, see [LICENSE](LICENSE).
