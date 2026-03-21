# Gravity UI ChartKit · [![npm package](https://img.shields.io/npm/v/@gravity-ui/chartkit)](https://www.npmjs.com/package/@gravity-ui/chartkit) [![License](https://img.shields.io/github/license/gravity-ui/ChartKit)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/ChartKit/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/chartkit/)

플러그인 기반 React 컴포넌트로, 여러 차트 라이브러리에 대한 통합 렌더링 인터페이스를 제공합니다. 하나 이상의 플러그인을 등록하고 `<ChartKit type="..." data={...} />`를 통해 차트를 렌더링하면 — ChartKit이 자동으로 올바른 렌더러로 디스패치합니다.

각 플러그인 렌더러는 지연 로딩되므로, 기본 라이브러리 코드는 ChartKit이 UI에 실제로 렌더링될 때만 다운로드됩니다. ChartKit은 또한 모바일 친화적인 툴팁 표시를 기본적으로 지원합니다. 내장된 플러그인을 사용하거나 직접 구현할 수 있습니다.

**언제 사용해야 할까요:**

- 최신 선언형 차트 (`gravity-charts`) 또는 시계열/모니터링 차트 (`yagr`)가 필요할 때
- 단일하고 일관된 API 아래에서 여러 차트 유형이 필요할 때
- Gravity UI 생태계에서 개발할 때

**언제 사용하지 않아야 할까요:**

- 특정 차트 라이브러리 하나만 필요할 때 — [@gravity-ui/charts](https://github.com/gravity-ui/charts)를 직접 사용하는 것이 좋습니다.

## 목차

- [시작하기](#get-started)
- [개발](#development)

## 시작하기

### 요구 사항

- React 16, 17, 또는 18
- `[@gravity-ui/uikit](https://github.com/gravity-ui/uikit)` — 필수 peer 의존성 (테마 및 UI 기본 요소를 제공합니다)

### 설치

```shell
npm install @gravity-ui/chartkit @gravity-ui/uikit
```

### 스타일

엔트리 포인트에서 `@gravity-ui/uikit`의 스타일을 가져옵니다:

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

전체 설정 세부 정보는 [uikit 스타일 가이드](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles)를 참조하세요.

### 기본 사용법

ChartKit은 전역 플러그인 레지스트리를 사용합니다. 앱 엔트리 포인트에서 `settings.set`을 한 번 호출하여 필요한 플러그인을 등록합니다. `<ChartKit type="..." />`가 렌더링될 때, 일치하는 플러그인을 찾습니다 — 찾지 못하면 오류가 발생합니다. 각 플러그인의 렌더러는 `React.lazy` 컴포넌트이므로, 해당 코드의 가져오기는 ChartKit이 UI에 처음 나타날 때만 수행됩니다.

여러 플러그인을 한 번에 등록할 수 있습니다:

```ts
settings.set({plugins: [GravityChartsPlugin, YagrPlugin]});
```

또는 `settings.set`을 여러 번 호출할 수 있습니다 — 플러그인 목록을 대체하는 대신 병합합니다.

**기본 예제:**

```tsx
import {ThemeProvider} from '@gravity-ui/uikit';
import ChartKit, {settings} from '@gravity-ui/chartkit';
import {GravityChartsPlugin} from '@gravity-ui/chartkit/gravity-charts';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

settings.set({plugins: [GravityChartsPlugin]});

const data = {
  series: {
    data: [
      {
        type: 'line',
        name: 'Series',
        data: [
          {x: 0, y: 10},
          {x: 1, y: 25},
          {x: 2, y: 18},
          {x: 3, y: 30},
        ],
      },
    ],
  },
};

export default function App() {
  return (
    <ThemeProvider theme="light">
      <div style={{height: 300}}>
        <ChartKit type="gravity-charts" data={data} />
      </div>
    </ThemeProvider>
  );
}
```

`ChartKit`은 부모 요소의 크기에 맞춰 조정됩니다 — 컨테이너에 명시적인 높이가 지정되어 있는지 확인하세요.

## 개발

### 사전 요구 사항

- [Node.js](https://nodejs.org/) 22 (참조: [.nvmrc](https://github.com/gravity-ui/ChartKit/blob/main/.nvmrc))
- [npm](https://www.npmjs.com/) 10 이상

### 설정

저장소를 복제하고 종속성을 설치합니다:

```shell
git clone https://github.com/gravity-ui/ChartKit.git
cd ChartKit
npm ci
```

### Storybook 실행

```shell
npm run start
```

Storybook은 `http://localhost:7007`에서 사용할 수 있습니다.

### 로컬 종속성으로 개발하기

npm에 게시하지 않고 Storybook에서 변경 사항을 실시간으로 확인하면서 종속성(예: `@gravity-ui/charts`)을 작업하려면 다음을 수행하세요:

**1. 로컬 패키지 링크**

```shell
# 로컬 @gravity-ui/charts 복제본에서:
git clone https://github.com/gravity-ui/charts.git
cd charts
npm ci
# 변경 사항 적용
npm run build
npm link

# ChartKit에서:
npm link @gravity-ui/charts
```

**2. 로컬 패키지 감시 설정**

ChartKit 루트에 `.env.local` 파일을 생성합니다 (이 파일은 gitignore됩니다):

```shell
LOCAL_PKG=@gravity-ui/charts
```

이렇게 하면 Vite가 `node_modules`에서 해당 패키지를 감시하고 사전 번들링을 건너뛰도록 지시합니다. `@gravity-ui/charts`를 다시 빌드하면 Storybook이 자동으로 다시 로드됩니다.

여러 패키지의 경우 쉼표로 구분된 목록을 사용합니다:

```shell
LOCAL_PKG=@gravity-ui/charts,@gravity-ui/uikit
```

**3. Storybook 시작**

```shell
npm run start
```

**4. 원래 패키지로 복원**

완료 후:

1. `.env.local`에서 `LOCAL_PKG`를 주석 처리합니다.
2. ChartKit에서 `npm install`을 실행합니다 — 이렇게 하면 심볼릭 링크가 레지스트리 버전으로 대체됩니다.

```shell
# ChartKit에서:
npm ci
```

### 테스트 실행

```shell
npm test
```

환경 간 일관된 스크린샷을 보장하기 위해 시각적 회귀 테스트는 Docker에서 실행됩니다:

```shell
npm run test:docker
```

의도적인 UI 변경 후 참조 스크린샷을 업데이트하려면:

```shell
npm run test:docker:update
```

### 기여

풀 리퀘스트를 제출하기 전에 [기여 가이드](CONTRIBUTING.md)를 참조하세요.