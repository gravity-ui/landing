# @gravity-ui/navigation &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/navigation)](https://www.npmjs.com/package/@gravity-ui/navigation) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/navigation/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/navigation/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/navigation/)

### 좌측 헤더 네비게이션 &middot; [미리보기 →](https://preview.yandexcloud.dev/navigation/)

![](docs/images/showcase.png)

## 설치

```bash
npm install @gravity-ui/navigation
```

프로젝트에 peer dependencies가 설치되어 있는지 확인하세요.

```bash
npm install --dev @gravity-ui/uikit@^7.2.0 @gravity-ui/icons@^2.2.0 @bem-react/classname@^1.6.0 react@^19.0.0 react-dom@^19.0.0
```

## 사용법

`AsideHeader`를 앱 쉘로 렌더링하세요. 이 컴포넌트는 `compact`/`onChangeCompact`를 통해 접힌 상태를 제어하며, 페이지 콘텐츠는 `renderContent`를 통해 전달됩니다. 먼저 `@gravity-ui/uikit` 스타일과 `ThemeProvider`를 설정해야 합니다 ( [uikit 스타일 가이드](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles) 참조).

```tsx
import React from 'react';
import {AsideHeader} from '@gravity-ui/navigation';
import {Gear, House} from '@gravity-ui/icons';
import {ThemeProvider} from '@gravity-ui/uikit';

import '@gravity-ui/uikit/styles/styles.css';

export function App() {
  const [compact, setCompact] = React.useState(false);

  return (
    <ThemeProvider theme="light">
      <AsideHeader
        logo={{text: 'My App', href: '/'}}
        compact={compact}
        onChangeCompact={setCompact}
        menuItems={[
          {id: 'home', title: 'Home', icon: House, current: true},
          {id: 'settings', title: 'Settings', icon: Gear},
        ]}
        renderContent={() => <main>Page content</main>}
      />
    </ThemeProvider>
  );
}
```

## 샌드박스

기본
https://codesandbox.io/p/devbox/navigation-demo-simple-x9k5sd

고급
https://codesandbox.io/p/devbox/recursing-dawn-6kc9vh

## 로드맵 2025

1. SSR 지원
2. [Gravity UI](https://gravity-ui.com/ru/components/navigation/aside-header)에 더 많은 문서 및 예제 추가
3. UIKit 테마에서 네비게이션 지원
4. subheaderItem, menuItem, footerItem API 통합

## 컴포넌트

- [AsideHeader](https://github.com/gravity-ui/navigation/tree/main/src/components/AsideHeader/README.md)
  - [AllPagesPanel](https://github.com/gravity-ui/navigation/tree/main/src/components/AllPagesPanel/README.md)
  - PageLayout
- [PageLayoutAside](https://github.com/gravity-ui/navigation/tree/main/src/components/AsideHeader/README.md)
- AsideFallback
- FooterItem
- [Logo](https://github.com/gravity-ui/navigation/tree/main/src/components/Logo/Readme.md)
- [Drawer](https://github.com/gravity-ui/navigation/tree/main/src/components/Drawer/README.md)
- [DrawerItem](https://github.com/gravity-ui/navigation/blob/main/src/components/Drawer/README.md#draweritem-props)
- [MobileHeader](https://github.com/gravity-ui/navigation/tree/main/src/components/MobileHeader/README.md)
- MobileHeaderFooterItem
- MobileLogo
- [HotkeysPanel](https://github.com/gravity-ui/navigation/tree/main/src/components/HotkeysPanel/README.md)
- [Footer](https://github.com/gravity-ui/navigation/tree/main/src/components/Footer/README.md)
- [MobileFooter](https://github.com/gravity-ui/navigation/tree/main/src/components/Footer/README.md)
- [ActionBar](https://github.com/gravity-ui/navigation/tree/main/src/components/ActionBar/README.md)
- [Settings](https://github.com/gravity-ui/navigation/tree/main/src/components/Settings/README.md)

## CSS API

네비게이션 컴포넌트의 테마화를 위해 사용됩니다.

## 라이선스

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참조하세요.

## AI 에이전트용

Gravity UI 앱을 위한 애플리케이션 쉘 네비게이션 컴포넌트 — 접을 수 있는 `AsideHeader` 사이드바와 전체 페이지를 둘러싸는 푸터, 드로어, 로고, 핫키 및 설정 패널입니다.

### 언제 사용해야 할까요?

- 앱의 기본 네비게이션 프레임: `AsideHeader` (접을 수 있는 사이드 네비게이션)와 `menuItems`, 서브헤더, 푸터 섹션.
- 지원 쉘 UI: `Drawer`/`DrawerItem`, `Footer`/`MobileFooter`, `MobileHeader`, `HotkeysPanel`, `Settings`, `ActionBar`, `Logo`.
- `renderContent` / `PageLayout`을 통한 네비게이션 프레임 내 페이지 콘텐츠 레이아웃.

### 언제 사용하지 않아야 할까요?

- 일반적인 인페이지 컨트롤 (버튼, 탭, 메뉴, 브레드크럼) — [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit)을 사용하세요. 이 패키지는 일반적인 컴포넌트가 아닌 외부 앱 크롬입니다.
- 설정에서 페이지 본문 자체를 렌더링하는 경우 — [`@gravity-ui/page-constructor`](https://github.com/gravity-ui/page-constructor)를 사용하세요.
- 클라이언트 측 라우팅 — 이 패키지는 네비게이션 UI만 제공합니다. 클릭 이벤트를 자체 라우터에 연결하세요.

### 일반적인 주의사항

- **`AsideHeader`는 제어됩니다.** `compact` 상태를 직접 관리하고 `onChangeCompact`에서 업데이트해야 합니다. 핸들러 없이 `compact`만 전달하면 사이드바가 고정됩니다.
- **메뉴 항목은 `menuItems`이며 `id`로 키가 지정됩니다.** 각 항목은 `{id, title, icon, current, onItemClick}` 형식입니다. `icon`에는 문자열 이름이 아닌 아이콘 컴포넌트 (예: `@gravity-ui/icons`에서 가져온 것)를 사용합니다.
- **Peer dependencies가 필요합니다.** `@gravity-ui/uikit`, `@gravity-ui/icons`, `@bem-react/classname`은 `react`/`react-dom`과 함께 설치되어야 합니다.
- **uikit 설정이 필요합니다.** `ThemeProvider` 내에서 렌더링하고 `@gravity-ui/uikit/styles/styles.css`를 import해야 합니다. 그렇지 않으면 쉘이 스타일 없이 렌더링됩니다.
- **페이지 콘텐츠는 `renderContent`를 통해 전달됩니다.** `children`이 아닌 `renderContent` prop / `PageLayout`을 통해 라우팅된 콘텐츠를 렌더링하세요.

## AI 에이전트용 문서

설치된 버전에 대한 에이전트 읽기 가능 문서는 `node_modules/@gravity-ui/navigation/build/docs/INDEX.md`에 있습니다.