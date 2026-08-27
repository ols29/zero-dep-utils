# Contributing

Thanks for helping improve `zero-dep-utils`.

## What fits this project

A utility should be small, dependency free, useful across projects, and easy to
understand in isolation. Prefer standards built into modern JavaScript when they
already solve the problem well.

Bug fixes, tests, documentation, and accessibility improvements are also
welcome.

## Development

The project requires Node.js 18 or newer and has no development dependencies.

```bash
git clone https://github.com/ols29/zero-dep-utils.git
cd zero-dep-utils
npm test
```

For a new utility:

1. Add one focused module under `src/`.
2. Export it from `src/index.js`.
3. Add its tests under `test/`.
4. Document its behavior and edge cases in `README.md`.

Keep public behavior backward compatible. If an incompatible change is
necessary, explain the tradeoff in the pull request.

## Pull requests

Keep each pull request focused, describe why the change is useful, and include
tests for behavior changes. By contributing, you agree that your contribution
is licensed under the project's MIT license.
