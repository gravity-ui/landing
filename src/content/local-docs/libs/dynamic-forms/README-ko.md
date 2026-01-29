# @gravity-ui/dynamic-forms &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dynamic-forms)](https://www.npmjs.com/package/@gravity-ui/dynamic-forms) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dynamic-forms/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/dynamic-forms/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dynamic-forms/)

JSON Schema 기반의 폼 및 폼 값 렌더링 라이브러리입니다.

## 설치

```shell
npm install --save-dev @gravity-ui/dynamic-forms
```

## 사용법

```jsx
import {DynamicField, Spec, dynamicConfig} from '@gravity-ui/dynamic-forms';

// final-form에 포함시키려면
<DynamicField name={name} spec={spec} config={config} />;

import {DynamicView, dynamicViewConfig} from '@gravity-ui/dynamic-forms';

// 값 개요를 보려면
<DynamicView value={value} spec={spec} config={dynamicViewConfig} />;
```

### 국제화 (I18N)

일부 컴포넌트에는 `en`(기본값) 및 `ru` 두 가지 언어로 제공되는 텍스트 토큰(단어 및 구문)이 포함되어 있습니다. 언어를 설정하려면 `configure` 함수를 사용하세요.

```js
// index.js

import {configure, Lang} from '@gravity-ui/dynamic-forms';

configure({lang: Lang.Ru});
```

## 개발

개발 서버를 스토리북과 함께 시작하려면 다음 명령을 실행하세요.

```shell
npm ci
npm run dev
```