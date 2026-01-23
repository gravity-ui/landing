# @gravity-ui/illustrations &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/illustrations)](https://www.npmjs.com/package/@gravity-ui/illustrations) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/illustrations/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/illustrations/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/illustrations/)

## 설치

```shell
npm install --save-dev @gravity-ui/illustrations
```

## 사용법

### React

#### 준비

일러스트레이션 테마를 설정합니다. 다음 단계 중 하나를 실행하세요:

##### 자체 색상 팔레트로 CSS 토큰 정의

앱에서 다음 CSS 토큰을 정의하세요:

```scss
--gil-color-object-base: rgb(255, 190, 92);
--gil-color-object-accent-heavy: rgb(211, 101, 7);
--gil-color-object-hightlight: rgb(255, 216, 157);
--gil-color-shadow-over-object: rgb(211, 158, 80);
--gil-color-background-lines: rgb(140, 140, 140);
--gil-color-background-shapes: rgb(242, 242, 242);
--gil-color-object-accent-light: rgb(255, 255, 255);
--gil-color-object-danger: rgb(255, 0, 61);
```

##### SCSS에서 기본 gravity-theme 믹스인 사용

다양한 테마에서 일러스트레이션 스타일링을 위해 다음 믹스인을 사용하세요.

```scss
@import '@gravity-ui/illustrations/styles/theme.scss';

.g-root {
  &_theme_light {
    @include g-illustrations-colors-light;
  }

  &_theme_light-hc {
    @include g-illustrations-colors-light-hc;
  }

  &_theme_dark {
    @include g-illustrations-colors-dark;
  }

  &_theme_dark-hc {
    @include g-illustrations-colors-dark-hc;
  }
}
```

##### 미리 설치된 gravity 테마가 있는 프로젝트를 위한 대안

대안으로, 프로젝트에 `@gravity-ui/uikit`이 이미 설치되어 있고 기본 테마를 사용하는 경우, 프로젝트의 스타일 루트 파일에 `styles.scss`를 가져오기만 하면 됩니다:

```js
// 기존 gravity 스타일 정의
import '@gravity-ui/uikit/styles/styles.css';
// 아래에 한 줄 더 추가
import '@gravity-ui/illustrations/styles/styles.scss';
```

#### 컴포넌트 사용법

```js
import NotFound from '@gravity-ui/illustrations/NotFound';
```

또는

```js
import {NotFound} from '@gravity-ui/illustrations';
```

### SVG

> 이를 위해 적절한 로더가 필요할 수 있습니다.

```js
import notFound from '@gravity-ui/illustrations/svgs/not-found-light.svg';
```

### 개발

새로운 디자인에 맞춰 일러스트레이션을 업데이트하려면, 라이트 테마의 SVG 파일 (`<이-저장소-루트>/svgs/<일러스트레이션-이름>-light.svg` 파일)의 내용을 변경한 후 다음 명령을 실행하세요:

```shell
npm run generate
```