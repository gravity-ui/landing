# @gravity-ui/dynamic-forms &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dynamic-forms)](https://www.npmjs.com/package/@gravity-ui/dynamic-forms) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dynamic-forms/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/dynamic-forms/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dynamic-forms/)

JSON Schema をベースにした、フォームおよびフォーム値のレンダリングライブラリです。

## インストール

```shell
npm install --save-dev @gravity-ui/dynamic-forms
```

## 使用方法

```jsx
import {DynamicField, Spec, dynamicConfig} from '@gravity-ui/dynamic-forms';

// final-form に埋め込む場合
<DynamicField name={name} spec={spec} config={config} />;

import {DynamicView, dynamicViewConfig} from '@gravity-ui/dynamic-forms';

// 値の概要を取得する場合
<DynamicView value={value} spec={spec} config={dynamicViewConfig} />;
```

### I18N

一部のコンポーネントには、`en` (デフォルト) と `ru` の 2 つの言語で利用可能なテキストトークン (単語やフレーズ) が含まれています。言語を設定するには、`configure` 関数を使用します。

```js
// index.js

import {configure, Lang} from '@gravity-ui/dynamic-forms';

configure({lang: Lang.Ru});
```

## 開発

Storybook を使用して開発サーバーを起動するには、次のコマンドを実行します。

```shell
npm ci
npm run dev
```