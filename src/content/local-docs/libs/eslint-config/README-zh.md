# @gravity-ui/eslint-config

## 安装

```
npm install --save-dev eslint @gravity-ui/eslint-config
```

## 使用

在你的项目中添加 `eslint.config.js` 文件，内容如下：

```js
import baseConfig from '@gravity-ui/eslint-config';

export default [
  ...baseConfig,
  {
    // ...其他配置
  },
];
```

基础配置也包含了 TypeScript 规则。

### Prettier

如果你正在使用 Prettier，请添加相应的配置：

```js
import baseConfig from '@gravity-ui/eslint-config';
import prettierConfig from '@gravity-ui/eslint-config/prettier';

export default [
  ...baseConfig,
  ...prettierConfig,
  {
    // ...其他配置
  },
];
```

### a11y

如果你想检测可访问性问题，请添加相应的配置：

```js
import baseConfig from '@gravity-ui/eslint-config';
import a11yConfig from '@gravity-ui/eslint-config/a11y';

export default [
  ...baseConfig,
  ...a11yConfig,
  {
    // ...其他配置
  },
];
```

### Order

如果你想强制执行模块导入顺序约定，请添加相应的配置：

```js
import baseConfig from '@gravity-ui/eslint-config';
import importOrderConfig from '@gravity-ui/eslint-config/import-order';

export default [
  ...baseConfig,
  ...importOrderConfig,
  {
    // ...其他配置
  },
];
```