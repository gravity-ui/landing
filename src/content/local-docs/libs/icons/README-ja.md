# @gravity-ui/icons &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/icons)](https://www.npmjs.com/package/@gravity-ui/icons) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/icons/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/icons/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/icons/)

Gravity UI アイコンパックです。アイコンはSVGとReactの2つのソースを持っています。[ショーケース](https://preview.gravity-ui.com/icons/)ページをご覧ください。

## インストール

```shell
npm install --save-dev @gravity-ui/icons
```

## 使用方法

### React

```js
import Cloud from '@gravity-ui/icons/Cloud';
```

または

```js
import {Cloud} from '@gravity-ui/icons';
```

### SVG

> これには適切なローダーが必要になる場合があります

```js
import cloudIcon from '@gravity-ui/icons/svgs/cloud.svg';
```