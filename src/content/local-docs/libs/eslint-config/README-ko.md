# @gravity-ui/eslint-config

## 설치

```
npm install --save-dev eslint @gravity-ui/eslint-config
```

## 사용법

프로젝트에 `eslint.config.js` 파일을 만들고 다음 내용을 추가하세요:

```js
import baseConfig from '@gravity-ui/eslint-config';

export default [
  ...baseConfig,
  {
    // ...기타 설정
  },
];
```

기본 설정에는 TypeScript 규칙도 포함되어 있습니다.

### Prettier

Prettier를 사용 중이라면 해당 설정을 추가하세요:

```js
import baseConfig from '@gravity-ui/eslint-config';
import prettierConfig from '@gravity-ui/eslint-config/prettier';

export default [
  ...baseConfig,
  ...prettierConfig,
  {
    // ...기타 설정
  },
];
```

### a11y

접근성 문제를 감지하고 싶다면 해당 설정을 추가하세요:

```js
import baseConfig from '@gravity-ui/eslint-config';
import a11yConfig from '@gravity-ui/eslint-config/a11y';

export default [
  ...baseConfig,
  ...a11yConfig,
  {
    // ...기타 설정
  },
];
```

### Order

모듈 가져오기 순서에 대한 규칙을 적용하고 싶다면 해당 설정을 추가하세요:

```js
import baseConfig from '@gravity-ui/eslint-config';
import importOrderConfig from '@gravity-ui/eslint-config/import-order';

export default [
  ...baseConfig,
  ...importOrderConfig,
  {
    // ...기타 설정
  },
];
```