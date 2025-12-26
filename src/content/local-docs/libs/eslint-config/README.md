# @gravity-ui/eslint-config

## Install

```
npm install --save-dev eslint @gravity-ui/eslint-config
```

## Usage

Add `eslint.config.js` file in your project with the following content:

```js
import baseConfig from '@gravity-ui/eslint-config';

export default [
  ...baseConfig,
  {
    // ...other config
  },
];
```

Base config also includes TypeScript rules.

### Prettier

If you are using Prettier, add corresponding config:

```js
import baseConfig from '@gravity-ui/eslint-config';
import prettierConfig from '@gravity-ui/eslint-config/prettier';

export default [
  ...baseConfig,
  ...prettierConfig,
  {
    // ...other config
  },
];
```

### a11y

If you want to spot accessibility issues, add corresponding config:

```js
import baseConfig from '@gravity-ui/eslint-config';
import a11yConfig from '@gravity-ui/eslint-config/a11y';

export default [
  ...baseConfig,
  ...a11yConfig,
  {
    // ...other config
  },
];
```

### Order

if you want to enforce a convention in module import order, add corresponding config:

```js
import baseConfig from '@gravity-ui/eslint-config';
import importOrderConfig from '@gravity-ui/eslint-config/import-order';

export default [
  ...baseConfig,
  ...importOrderConfig,
  {
    // ...other config
  },
];
```
