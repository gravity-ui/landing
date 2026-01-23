# @gravity-ui/eslint-config

## インストール

```
npm install --save-dev eslint @gravity-ui/eslint-config
```

## 使用方法

プロジェクトに `eslint.config.js` ファイルを作成し、以下の内容を追加してください。

```js
import baseConfig from '@gravity-ui/eslint-config';

export default [
  ...baseConfig,
  {
    // ...その他の設定
  },
];
```

ベース設定には TypeScript のルールも含まれています。

### Prettier

Prettier を使用している場合は、対応する設定を追加してください。

```js
import baseConfig from '@gravity-ui/eslint-config';
import prettierConfig from '@gravity-ui/eslint-config/prettier';

export default [
  ...baseConfig,
  ...prettierConfig,
  {
    // ...その他の設定
  },
];
```

### a11y

アクセシビリティの問題を検出したい場合は、対応する設定を追加してください。

```js
import baseConfig from '@gravity-ui/eslint-config';
import a11yConfig from '@gravity-ui/eslint-config/a11y';

export default [
  ...baseConfig,
  ...a11yConfig,
  {
    // ...その他の設定
  },
];
```

### Order

モジュールのインポート順に規約を適用したい場合は、対応する設定を追加してください。

```js
import baseConfig from '@gravity-ui/eslint-config';
import importOrderConfig from '@gravity-ui/eslint-config/import-order';

export default [
  ...baseConfig,
  ...importOrderConfig,
  {
    // ...その他の設定
  },
];
```