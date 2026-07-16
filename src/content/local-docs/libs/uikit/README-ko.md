# UIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![npm downloads](https://img.shields.io/npm/dm/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/ci.yml?query=branch:main) [![storybook tests](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/test-storybook.yml?label=Storybook%20Tests&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/test-storybook.yml) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/uikit/)

[English](README.md) | [Русский](README-ru.md)

풍부한 웹 애플리케이션을 만들기 위한 유연하고 실용적이며 효율적인 React 컴포넌트 모음입니다. [Gravity UI](https://gravity-ui.com) 디자인 시스템의 일부입니다.

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/uikit_cover.png)

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [웹사이트](https://gravity-ui.com) &nbsp;&nbsp; ![Documentation Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_light.svg#gh-light-mode-only) ![Documentation Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_dark.svg#gh-dark-mode-only) [문서](https://gravity-ui.com/components/uikit/alert) &nbsp;&nbsp; ![Figma Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_light.svg#gh-light-mode-only) ![Figma Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_dark.svg#gh-dark-mode-only) [Figma](<https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)>) &nbsp;&nbsp; ![Themer Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_light.svg#gh-light-mode-only) ![Themer Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_dark.svg#gh-dark-mode-only) [Themer](https://gravity-ui.com/themer) &nbsp;&nbsp; ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/uikit/) &nbsp;&nbsp; ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [커뮤니티](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## 소개

UIKit은 [Gravity UI](https://gravity-ui.com) 디자인 시스템의 기반이 되는 패키지입니다. 70개 이상의 React 컴포넌트로 구성되어 있으며, 실제 프로덕션 웹 애플리케이션에 적용 가능하도록 검증되었습니다. 테마, 접근성, RTL 레이아웃, 서버 사이드 렌더링, 국제화와 같이 복잡한 부분들을 처리해주므로, 여러분은 제품 개발에만 집중할 수 있습니다.

주요 기능:

- **70개 이상의 컴포넌트**: 입력, 오버레이, 데이터 표시, 레이아웃 기본 요소, 피드백 등 다양한 컴포넌트를 제공합니다.
- **내장 테마 기능**: 라이트, 다크, 고대비(high-contrast) 테마를 지원하며, [Themer](https://gravity-ui.com/themer) 도구를 통해 토큰을 실시간으로 사용자 정의할 수 있습니다.
- **RTL 지원**: 완벽한 오른쪽에서 왼쪽으로의 레이아웃 방향을 지원합니다.

[Storybook](https://preview.gravity-ui.com/uikit/) 또는 [문서](https://gravity-ui.com/components/uikit/alert)에서 전체 컴포넌트 카탈로그를 살펴보세요.

## 시작하기

### 사전 요구 사항

프로젝트에 React 16.14, 17, 18 또는 19가 설치되어 있어야 합니다.

### 설치

```shell
npm install @gravity-ui/uikit
```

## 사용법

패키지에서 컴포넌트를 직접 가져와 사용하세요:

```jsx
import {Button} from '@gravity-ui/uikit';

const SubmitButton = (
  <Button view="action" size="l">
    Submit
  </Button>
);
```

### 스타일

앱 진입점 상단에 기본 스타일과 폰트를 한 번만 포함하세요:

```js
// index.js
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

유용한 헬퍼가 포함된 SCSS [믹스인](styles/mixins.scss) 파일도 자체 스타일시트에서 사용할 수 있습니다.

### 가이드

더 읽어보기:

- [테마](docs/theming.md) — 라이트, 다크, 고대비 테마 활성화
- [서버 사이드 렌더링](docs/server-side-rendering.md) — 서버에서 루트 CSS 클래스 생성
- [국제화](docs/i18n.md) — 내장 컴포넌트 언어 설정

## 개발

```shell
git clone git@github.com:gravity-ui/uikit.git
cd uikit
npm ci
npm run start   # Storybook을 http://localhost:7007에서 실행합니다.
```

기타 유용한 명령어:

```shell
npm test              # 단위 테스트 실행
npm run lint          # JS, SCSS, Markdown 린트
npm run typecheck     # TypeScript 타입 검사
npm run playwright    # 시각적 회귀 테스트 실행
```

## 유지보수자

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/amje">
        <img src="https://github.com/amje.png?size=100" width="100" alt="amje" /><br />
        <sub><b>@amje</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ValeraS">
        <img src="https://github.com/ValeraS.png?size=100" width="100" alt="ValeraS" /><br />
        <sub><b>@ValeraS</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/korvin89">
        <img src="https://github.com/korvin89.png?size=100" width="100" alt="korvin89" /><br />
        <sub><b>@korvin89</b></sub>
      </a>
    </td>
  </tr>
</table>

## 기여하기

기여는 언제나 환영입니다! 풀 리퀘스트를 제출하기 전에 [CONTRIBUTING.md](CONTRIBUTING.md)를 읽어주세요. 자세한 PR 가이드라인은 [contribute/pull-request.md](contribute/pull-request.md)를 참고하세요.

저희는 [![contributors](https://img.shields.io/github/contributors/gravity-ui/uikit?label=contributors)](https://github.com/gravity-ui/uikit/graphs/contributors) 명의 기여자와 함께하고 있으며, 계속 늘어나고 있습니다 — 함께해요!

질문이나 토론은 [Telegram](https://t.me/gravity_ui) 커뮤니티에서 참여해주세요.

## 라이선스

MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참고하세요.

## AI 에이전트용

Gravity UI 앱을 위한 기본 React 컴포넌트 및 디자인 토큰 라이브러리 — 다른 모든 `@gravity-ui/*` 패키지가 기반으로 하는 컨트롤, 입력, 오버레이, 레이아웃 및 테마 기능을 제공합니다.

### 언제 사용해야 할까요?

- 표준 애플리케이션 UI: 버튼, 폼 컨트롤, 모달 및 팝업, 메뉴, 탭, 라벨, 타이포그래피 및 레이아웃 기본 요소.
- Gravity UI 앱의 테마 기반: `ThemeProvider`, 디자인 토큰, 그리고 `@gravity-ui/*` 생태계의 나머지 부분에서 필요로 하는 CSS 변수.
- 내장된 `Table` 컴포넌트를 통한 간단한 테이블 데이터 (선택, 정렬, 행 액션).

### 언제 사용하지 않아야 할까요?

- 기능이 풍부한 데이터 그리드 (가상화, 컬럼 크기 조절, 그룹화, 재정렬) — 별도의 헤드리스 패키지인 [`@gravity-ui/table`](https://github.com/gravity-ui/table)을 사용하세요. uikit의 `Table` 컴포넌트와는 **다릅니다**.
- 차트 및 데이터 시각화 — [`@gravity-ui/charts`](https://github.com/gravity-ui/charts)를 사용하세요 (`@gravity-ui/chartkit`은 레거시 래퍼입니다).
- 애플리케이션 네비게이션 쉘 (사이드 헤더, 푸터, 로고) — [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation)을 사용하세요.
- 날짜 선택기, 캘린더 및 범위 컨트롤 — [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components)를 사용하세요.
- SVG 아이콘 세트 자체 — [`@gravity-ui/icons`](https://github.com/gravity-ui/icons)를 사용하세요; uikit은 `Icon` 렌더러만 제공합니다.

### 흔한 실수

- `Button`의 스타일링 prop은 `view`이며, `variant`나 `color`가 아닙니다.
- **컴포넌트가 설정 없이 스타일링되지 않은 채 렌더링됩니다.** 앱을 `ThemeProvider`로 감싸고, 진입점에서 `@gravity-ui/uikit/styles/styles.css` (및 `fonts.css`)를 한 번 임포트해야 합니다 — 둘 다 필수입니다.
- **`Icon`에는 `name` prop이 없습니다.** 임포트한 아이콘 컴포넌트를 `data`를 통해 전달하세요: `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} size={16} />`.
- **`theme` 값은 `light | dark | light-hc | dark-hc`입니다.** `theme="default"`는 없습니다.

### 유용한 문서

- [레이아웃 컴포넌트 및 간격](./docs/layout.md)
- [테마, 색상 & 브랜딩](./docs/theming.md)
- [타이포그래피](./docs/typography.md)

## AI 에이전트용 문서

설치된 버전의 에이전트 읽기 가능 문서는 `node_modules/@gravity-ui/uikit/build/docs/INDEX.md`에 있습니다.

## Star History

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline" />
    <img alt="Star History Chart" width="600" src="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline" />
  </picture>
</div>

---

UIKit이 유용하다고 생각하시면, [GitHub](https://github.com/gravity-ui/uikit)에서 ⭐를 눌러주세요 — 다른 사람들이 프로젝트를 발견하는 데 도움이 됩니다.