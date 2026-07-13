# UIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/ci.yml?query=branch:main) [![storybook tests](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/test-storybook.yml?label=Storybook%20Tests&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/test-storybook.yml) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/uikit/)

풍부한 웹 애플리케이션을 만들기 위한 유연하고 실용적이며 효율적인 React 컴포넌트 모음입니다.

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/uikit_cover.png)

## 리소스

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [웹사이트](https://gravity-ui.com)

### ![Documentation Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_light.svg#gh-light-mode-only) ![Documentation Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_dark.svg#gh-dark-mode-only) [문서](https://gravity-ui.com/components/uikit/alert)

### ![Figma Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_light.svg#gh-light-mode-only) ![Figma Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_dark.svg#gh-dark-mode-only) [Figma](<https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)>)

### ![Themer Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_light.svg#gh-light-mode-only) ![Themer Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_dark.svg#gh-dark-mode-only) [Themer](https://gravity-ui.com/themer)

### ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/uikit/)

### ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [커뮤니티](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## 설치

```shell
npm install --save-dev @gravity-ui/uikit
```

## 사용법

```jsx
import {Button} from '@gravity-ui/uikit';

const SubmitButton = <Button view="action" size="l" />;
```

### 스타일

UIKit은 기본 스타일과 테마를 제공합니다. 모든 것이 보기 좋게 보이도록 하려면 진입 파일 상단에 다음을 포함하세요.

```js
// index.js

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

// ...
```

UIKit은 라이트, 다크 및 해당 대비 변형과 같은 다양한 테마를 지원합니다. 앱은 `ThemeProvider` 내에서 렌더링되어야 합니다.

```js
import {createRoot} from 'react-dom/client';
import {ThemeProvider} from '@gravity-ui/uikit';

const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme="light">
    <App />
  </ThemeProvider>,
);
```

SSR 중에 초기 루트 CSS 클래스를 생성하여 테마 깜박임을 방지할 수 있습니다.

```js
import {getRootClassName} from '@gravity-ui/uikit/server';

const theme = 'dark';
const rootClassName = getRootClassName({theme});

const html = `
<html>
  <body>
    <div id="root" class="${rootClassName}"></div>
  </body>
</html>
`;
```

또한 앱에서 유용한 도우미를 사용하는 SCSS [믹스인](styles/mixins.scss) 파일이 있습니다.

### I18N

일부 컴포넌트에는 텍스트 토큰(단어 및 구문)이 포함되어 있습니다. 이들은 `en`(기본값) 및 `ru` 두 가지 언어로 제공됩니다.
언어를 설정하려면 `configure` 함수를 사용하세요.

```js
// index.js

import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

## 개발

스토리북으로 개발 서버를 시작하려면 다음을 실행하세요.

```shell
git clone git@github.com:gravity-ui/uikit.git
cd uikit
npm ci
npm run start
```

## 라이선스

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참조하세요.

## AI 에이전트용

Gravity UI 앱을 위한 기본 React 컴포넌트 및 디자인 토큰 라이브러리 — 다른 모든 @gravity-ui 패키지가 기반으로 하는 컨트롤, 입력, 오버레이, 레이아웃 및 테마입니다.

### 언제 사용해야 할까요?

- 표준 애플리케이션 UI: 버튼, 폼 컨트롤, 모달 및 팝업, 메뉴, 탭, 레이블, 타이포그래피 및 레이아웃 기본 요소.
- Gravity UI 앱의 테마 기초: `ThemeProvider`, 디자인 토큰 및 `@gravity-ui/*` 생태계의 나머지 부분이 존재하기를 기대하는 CSS 변수.
- 내장된 `Table` 컴포넌트를 통한 간단한 테이블 형식 데이터(선택, 정렬, 행 작업).

### 언제 사용하지 않아야 할까요?

- 기능이 풍부한 데이터 그리드 (가상화, 컬럼 크기 조절, 그룹화, 재정렬) — [`@gravity-ui/table`](https://github.com/gravity-ui/table)을 사용하세요. 이 패키지는 별도의 헤드리스(headless) 패키지입니다. uikit의 `Table` 컴포넌트와는 **다릅니다**.
- 차트 및 데이터 시각화 — [`@gravity-ui/charts`](https://github.com/gravity-ui/charts)를 사용하세요 (`@gravity-ui/chartkit`은 레거시 래퍼입니다).
- 애플리케이션 네비게이션 쉘 (aside, header, footer, logo) — [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation)을 사용하세요.
- 날짜 선택기, 캘린더 및 범위 컨트롤 — [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components)를 사용하세요.
- SVG 아이콘 세트 자체 — [`@gravity-ui/icons`](https://github.com/gravity-ui/icons)를 사용하세요. uikit은 `Icon` 렌더러만 제공합니다.

### 흔히 발생하는 실수

- `Button`의 스타일링 prop은 `view`이며, `variant`나 `color`가 아닙니다.
- **컴포넌트가 설정 없이 스타일이 적용되지 않은 채 렌더링됩니다.** 앱을 `ThemeProvider`로 감싸고, 진입점에서 `@gravity-ui/uikit/styles/styles.css` (및 `fonts.css`)를 한 번 임포트해야 합니다. 둘 다 필수입니다.
- **`Icon`에는 `name` prop이 없습니다.** 임포트한 아이콘 컴포넌트를 `data` prop으로 전달하세요: `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} size={16} />`.
- **`theme` 값은 `light | dark | light-hc | dark-hc`입니다.** `theme="default"`는 없습니다.

### 유용한 문서

- [레이아웃 컴포넌트 및 간격](./docs/layout.md)
- [테마, 색상 및 브랜딩](./docs/theming.md)
- [타이포그래피](./docs/typography.md)