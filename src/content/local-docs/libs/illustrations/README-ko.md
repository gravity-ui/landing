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

##### SCSS에서 기본 gravity-theme가 있는 믹스인 사용

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

##### 이미 gravity 테마가 설치된 프로젝트의 대안

대안으로, 프로젝트에 `@gravity-ui/uikit`이 이미 설치되어 있고 기본 테마를 사용하는 경우, 프로젝트의 스타일 루트 파일에 `styles.scss`를 가져오기만 하면 됩니다:

```scss
// 기존 gravity 스타일 정의
import '@gravity-ui/uikit/styles/styles.css';
// 아래에 한 줄 더 추가하세요
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

새로운 디자인에 맞춰 일러스트레이션을 업데이트하려면, 라이트 테마의 SVG 파일 (`<이 저장소 루트>/svgs/<일러스트레이션 이름>-light.svg` 파일) 내용을 변경한 후 다음 명령을 실행하세요:

```shell
npm run generate
```

## 라이선스

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참조하세요.

## AI 에이전트용

Gravity UI 앱을 위한 테마가 적용된 플랫 SVG 일러스트레이션 세트 (빈 상태, 오류, 찾을 수 없음 등) — 직접 그리거나 단순 아이콘을 사용하는 대신 즉시 사용 가능한 테마 인식 플레이스홀더/빈 상태 아트워크가 필요할 때 사용하세요.

### 언제 사용해야 할까요?

- 일관된 일러스트레이션이 필요한 빈 상태, 404/오류 페이지 또는 온보딩 플레이스홀더 (기능적 UI 컨트롤이 아닌).
- 테마 가능한 아트워크 — SVG는 SCSS 믹스인 또는 CSS 변수를 통해 Gravity 테마 (라이트/다크, 고대비)에 반응합니다.
- React 컴포넌트 (기본값) 또는 원시 `.svg` 파일로 아트워크 가져오기.

### 언제 사용하지 않아야 할까요?

- 기능적 UI 아이콘 (화살표, 체크, 버튼)의 경우 [`@gravity-ui/icons`](https://gravity-ui.com/icons)를 사용하세요 — 일러스트레이션은 장식용 아트워크이며 UI 글리프가 아닙니다.
- 이미 에셋으로 가지고 있는 단일 일회성 일러스트레이션의 경우, 이 패키지를 가져오는 대신 해당 에셋을 직접 가져오세요.

### 일반적인 함정

- **테마 가져오기 없이 렌더링** — `@gravity-ui/illustrations/styles/styles.scss`를 가져오거나 (`--gil-color-*` CSS 토큰을 정의하지 않으면) 일러스트레이션이 색상 없이 표시됩니다.
- **잘못된 기본 내보내기 이름** — 일러스트레이션 컴포넌트는 PascalCase 명명된 내보내기 (예: `NotFound`)이며, 패키지 루트 또는 파일별로 (`@gravity-ui/illustrations/NotFound`) 가져옵니다.
- **구성되지 않은 번들러에서 `.svg` 직접 가져오기** — 원시 SVG 가져오기에는 적절한 로더가 필요합니다. 번들러 설정을 피하려면 React 컴포넌트 내보내기를 선호하세요.

## AI 에이전트용 문서

설치된 버전에 대한 에이전트 읽기 가능 문서는 `node_modules/@gravity-ui/illustrations/docs/INDEX.md`에 있습니다.