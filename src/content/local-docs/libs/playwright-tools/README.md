# playwright-tools

A library of additional utilities for writing tests using Playwright Test.

```
npm i -D @gravity-ui/playwright-tools
```

The package contains several subdirectories with utilities for different purposes. You should import from these subdirectories, for example:

```ts
import { matchScreenshot } from 'playwright-tools/actions';
```

- [actions](./actions/README.md) — Browser actions.
- [auth/storage](./auth/storage/README.md) — Authentication functions for saving and restoring browser storage snapshots.
- [component-tests](./component-tests/README.md) — Utilities and fixtures for Playwright Component Testing.
- [fixtures](./fixtures/README.md) — Fixtures for passing values into tests.
- [har](./har/README.md) — Functions for working with HAR request dumps.
- [utils](./utils/README.md) — Helper functions.

You can learn more about Playwright and how to configure it in the [Playwright documentation](https://playwright.dev/docs/intro).

## Maintainers

[@Avol-V](https://github.com/Avol-V)
[SwinX](https://github.com/SwinX)
