# @gravity-ui/icons &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/icons)](https://www.npmjs.com/package/@gravity-ui/icons) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/icons/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/icons/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/icons/)

Gravity UI 아이콘 모음입니다. 아이콘은 SVG와 React 두 가지 소스를 제공합니다. [쇼케이스](https://preview.gravity-ui.com/icons/) 페이지를 확인해 보세요.

## 설치

```shell
npm install --save-dev @gravity-ui/icons
```

## 사용법

### React

```js
import Cloud from '@gravity-ui/icons/Cloud';
```

또는

```js
import {Cloud} from '@gravity-ui/icons';
```

### SVG

> 이 기능을 사용하려면 적절한 로더가 필요할 수 있습니다.

```js
import cloudIcon from '@gravity-ui/icons/svgs/cloud.svg';
```