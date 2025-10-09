# @gravity-ui/dynamic-forms &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dynamic-forms)](https://www.npmjs.com/package/@gravity-ui/dynamic-forms) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dynamic-forms/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/dynamic-forms/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dynamic-forms/)

基于 JSON Schema 的库，用于渲染表单和表单值。

## 安装

```shell
npm install --save-dev @gravity-ui/dynamic-forms
```

## 用法

```jsx
import {DynamicField, Spec, dynamicConfig} from '@gravity-ui/dynamic-forms';

// 嵌入到 final-form 中
<DynamicField name={name} spec={spec} config={config} />;

import {DynamicView, dynamicViewConfig} from '@gravity-ui/dynamic-forms';

// 获取值的概览
<DynamicView value={value} spec={spec} config={dynamicViewConfig} />;
```

### 国际化 (I18N)

某些组件包含两种语言的文本标记（单词和短语）：`en`（默认）和 `ru`。要设置语言，请使用 `configure` 函数：

```js
// index.js

import {configure, Lang} from '@gravity-ui/dynamic-forms';

configure({lang: Lang.Ru});
```

## 开发

要启动带有 storybook 的开发服务器，请执行以下命令：

```shell
npm ci
npm run dev
```