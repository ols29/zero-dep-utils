# zero-dep-utils

[![Module: ESM](https://img.shields.io/badge/module-ESM-blue.svg)](https://nodejs.org/api/esm.html)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)](https://github.com/ols29/zero-dep-utils/pulls)

Small, dependency free JavaScript utility functions. Pure ESM, tested with the built in Node.js test runner, no build step, no runtime dependencies.

## Why

Most projects reach for a heavy utility library to use two or three helpers. This is the opposite: each function is tiny, isolated in its own file, and copy paste friendly. Take only what you need.

## Usage

```js
import { capitalize } from './src/index.js';

capitalize('hello'); // "Hello"
```

## Available utilities

- `capitalize(str)`: uppercase the first character of a string.

## Testing

Run the full suite with the built in Node.js test runner (Node 18 or newer):

```bash
npm test
```

## License

MIT, see [LICENSE](LICENSE).
