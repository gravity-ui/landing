# Gravity UI ChartKit · [![npm package](https://img.shields.io/npm/v/@gravity-ui/chartkit)](https://www.npmjs.com/package/@gravity-ui/chartkit) [![License](https://img.shields.io/github/license/gravity-ui/ChartKit)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/ChartKit/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/chartkit/)

플러그인 기반 React 컴포넌트로, 단일 ChartKit API를 통해 Gravity Charts 및 Yagr와 같은 여러 차트 라이브러리의 차트를 렌더링합니다. 모바일 친화적인 툴팁과 사용자 정의 플러그인을 지원합니다. 하나 이상의 플러그인을 등록하고 `<ChartKit type="..." data={...} />`를 통해 차트를 렌더링하면, ChartKit이 자동으로 올바른 렌더러로 디스패치합니다.

각 플러그인 렌더러는 지연 로딩되므로, 해당 라이브러리 코드는 ChartKit이 UI에 실제로 렌더링될 때만 다운로드됩니다. ChartKit은 기본적으로 모바일 친화적인 툴팁 표시도 처리합니다. 내장 플러그인을 사용하거나 직접 구현할 수 있습니다.

**언제 사용해야 할까요?**

- 최신 선언형 차트 (`gravity-charts`) 또는 시계열/모니터링 차트 (`yagr`)가 필요할 때
- 단일 일관된 API 아래에서 여러 차트 유형이 필요할 때
- UI의 나머지 부분과 동일한 라이트/다크 테마를 따르는 차트를 기본적으로 사용하고 싶을 때

**언제 사용하지 않아야 할까요?**

- 특정 차트 라이브러리 하나만 필요한 경우 — [@gravity-ui/charts](https://github.com/gravity-ui/charts)를 직접 사용하는 것이 좋습니다.

## 목차

- [시작하기](#getting-started)
- [차트 패키지 업데이트](#updating-charting-packages)
- [개발](#development)

## 시작하기

### 요구 사항

- React 18 또는 19
- [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) 8 — 필수 peer 의존성 (테마 및 UI 기본 요소를 제공합니다)

### 설치

```shell
npm install @gravity-ui/chartkit @gravity-ui/uikit
```

### 스타일

애플리케이션 진입점에서 `@gravity-ui/uikit`의 스타일을 가져옵니다:

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

전체 설정 정보는 [uikit 스타일 가이드](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles)를 참조하세요.

### 기본 사용법

ChartKit은 전역 플러그인 레지스트리를 사용합니다. 앱 진입점에서 `settings.set`을 한 번 호출하여 필요한 플러그인을 등록합니다. `<ChartKit type="..." />`가 렌더링될 때, 일치하는 플러그인을 찾습니다. 찾지 못하면 오류가 발생합니다. 각 플러그인의 렌더러는 `React.lazy` 컴포넌트이므로, ChartKit이 UI에 처음 나타날 때만 코드가 로드됩니다.

여러 플러그인을 한 번에 등록할 수 있습니다:

```ts
settings.set({plugins: [GravityChartsPlugin, YagrPlugin]});
```

또는 `settings.set`을 여러 번 호출할 수 있습니다. 이 경우 플러그인 목록을 대체하는 것이 아니라 병합합니다.

**기본 예제:**

```tsx
import {Provider} from '@gravity-ui/uikit';
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
    <Provider theme="light">
      <div style={{height: 300}}>
        <ChartKit type="gravity-charts" data={data} />
      </div>
    </Provider>
  );
}
```

`ChartKit`은 부모 요소의 크기에 맞춰 조정됩니다. 컨테이너에 명시적인 높이를 지정해야 합니다.

### SplitTooltip

`gravity-charts`가 터치 장치에서 사용하는 분할 패널 툴팁 레이아웃 (`tooltip={{splitted: true}}`)은 독립형 컴포넌트로도 사용할 수 있습니다. 어떤 콘텐츠와도 작동합니다. 메인 패널과 툴팁 패널을 나란히 (또는 컨테이너 크기에 따라 쌓아서) 렌더링하며, 그 사이에 드래그 가능한 리사이저가 있습니다.

```tsx
import {SplitTooltip} from '@gravity-ui/chartkit';

export function Panel() {
  return (
    <div style={{height: 400}}>
      <SplitTooltip
        renderMainPane={() => <MyVisualization />}
        renderTooltip={() => <MyTooltipContent />}
      />
    </div>
  );
}
```

레이아웃 제어, 패널 크기 조정 및 리사이저 옵션은 `SplitTooltipProps` 타입을 참조하세요.

## 차트 패키지 업데이트

ChartKit은 두 개의 Gravity UI 차트 라이브러리를 종속성으로 번들링합니다:

- [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) — `gravity-charts` 플러그인을 지원합니다.
- [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) — `yagr` 플러그인을 지원합니다.

이러한 패키지의 최신 버전을 사용해야 하는 경우, [Package update request](https://github.com/gravity-ui/ChartKit/issues/new?template=package-update-request.yml) 이슈를 열고 필요한 패키지를 선택하세요. 유지보수자가 선택한 패키지의 버전을 업데이트하고 릴리스를 진행할 것입니다.

### ChartKit 8에서 업그레이드

[마이그레이션 가이드](docs/migration-to-v9.md)를 참조하세요: uikit 8 및 React 18+, CommonJS/ESM 빌드 및 TypeScript `moduleResolution` 관련 사항, 그리고 `@gravity-ui/charts` 2와 함께 제공되는 `gravity-charts` 데이터 변경 사항을 확인하세요.

## 개발

### 사전 요구 사항

- [Node.js](https://nodejs.org/) 22 (참조: [.nvmrc](https://github.com/gravity-ui/ChartKit/blob/main/.nvmrc))
- [npm](https://www.npmjs.com/) 10 이상

### 설정

리포지토리를 클론하고 종속성을 설치합니다:

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

npm에 게시하지 않고 Storybook에서 변경 사항을 실시간으로 확인하기 위해 종속성(예: `@gravity-ui/charts`)을 작업하려면 다음을 수행하세요:

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

```markdown
.env.local 파일을 ChartKit 루트에 생성합니다 (이 파일은 gitignore 처리됩니다):

```shell
LOCAL_PKG=@gravity-ui/charts
```

이렇게 하면 Vite는 `node_modules`에서 해당 패키지를 감시하고 사전 번들링을 건너뜁니다. `@gravity-ui/charts`를 다시 빌드하면 Storybook이 자동으로 핫 리로드됩니다.

여러 패키지의 경우 쉼표로 구분된 목록을 사용합니다:

```shell
LOCAL_PKG=@gravity-ui/charts,@gravity-ui/uikit
```

**3. Storybook 시작**

```shell
npm run start
```

**4. 원본 패키지 복원**

완료 후:

1. `.env.local`에서 `LOCAL_PKG`를 주석 처리합니다.
2. ChartKit에서 `npm install`을 실행합니다. 그러면 심볼릭 링크가 레지스트리 버전으로 대체됩니다.

```shell
# ChartKit에서:
npm ci
```

### 테스트 실행

```shell
npm test
```

빌드된 패키지를 확인하려면 먼저 빌드하십시오. 이 검사는 Node에서 CommonJS 및 ESM 빌드를 모두 로드하고, 내보내기를 비교하고, `nodenext`, `bundler` 및 `node` 모듈 해결 방식에서 소비자 유형을 검사합니다:

```shell
npm run build
npm run test:build
```

시각적 회귀 테스트는 Docker에서 실행되어 환경 간의 일관된 스크린샷을 보장합니다:

```shell
npm run test:docker
```

의도적인 UI 변경 후 참조 스크린샷을 업데이트하려면:

```shell
npm run test:docker:update
```

### 기여

풀 리퀘스트를 제출하기 전에 [기여 가이드](CONTRIBUTING.md)를 참조하십시오.

## 라이선스

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참조하십시오.

## AI 에이전트용

`<ChartKit type="..." data={...} />` API 하나를 통해 Gravity Charts 및 Yagr와 같은 여러 차트 라이브러리에서 차트를 렌더링하는 플러그인 기반 React 컴포넌트입니다. 각 라이브러리는 해당 차트 유형이 렌더링될 때만 지연 로드됩니다.

### 언제 사용해야 할까요?

- 하나의 일관된 컴포넌트 뒤에서 여러 차트 엔진을 렌더링할 때: `gravity-charts` ([`@gravity-ui/charts`](https://github.com/gravity-ui/charts)를 통한 선언적 SVG 차트) 및 `yagr` ([`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr)를 통한 uPlot 기반 시계열).
- 차트 번들 지연 로드 — 각 플러그인의 렌더러는 `React.lazy`이므로 라이브러리 코드는 차트 유형이 실제로 표시될 때만 가져옵니다.
- 기본 제공되는 모바일 친화적인 툴팁 — 차트와 툴팁은 호버 팝업 대신 크기 조절 가능한 분할 창에 표시됩니다. `gravity-charts`의 경우 `<ChartKit type="gravity-charts" tooltip={{splitted: true}} />`로 활성화할 수 있습니다.
- 분할 창 툴팁 레이아웃을 독립적으로 사용 — `SplitTooltip`은 루트 엔트리에서 내보내는 독립형 컴포넌트입니다. `renderMainPane` 및 `renderTooltip`을 전달하면 차트킷 차트뿐만 아니라 모든 콘텐츠에 대해 크기 조절 가능한 창(컨테이너 크기에 따라 수직 또는 수평)으로 레이아웃됩니다.
- 자체 플러그인 작성 — `settings.set({plugins: [...]})`를 통해 `{type, renderer}`를 등록합니다. 여기서 `renderer`는 `React.lazy` 컴포넌트입니다. ChartKit은 내장 플러그인과 마찬가지로 `type`별로 이를 디스패치합니다.
- 모든 차트 엔진에서 일관된 라이트/다크 테마 기본 제공 — 차트는 주변 앱의 `@gravity-ui/uikit` 테마를 따릅니다.

### 언제 사용하지 않아야 할까요?

- 단일 차트 유형만 사용하는 경우 [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) (일반) 또는 [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) (고성능 시계열)를 직접 가져옵니다. 플러그인 레지스트리는 단일 엔진에 대한 오버헤드입니다.
- 위젯 대시보드 그리드를 구성하려면 [`@gravity-ui/dashkit`](https://github.com/gravity-ui/dashkit)를 사용하십시오. ChartKit은 차트를 렌더링하고 DashKit은 여러 위젯을 배열합니다.

### 일반적인 함정

- **`settings.set({plugins: [...]})` 전에 `<ChartKit>` 렌더링** — 전역 플러그인 레지스트리는 앱 진입점에서 채워져야 합니다. 등록되지 않은 `type`은 렌더링 시 오류를 발생시킵니다.
- **환각적인 prop `chartType` / `library`** — 디스패치 prop은 `type` (예: `type="gravity-charts"`)이고 데이터는 `data`입니다.
- **루트 엔트리에서 플러그인 가져오기** — 플러그인은 하위 경로 내보내기(예: `@gravity-ui/chartkit/gravity-charts`, `@gravity-ui/chartkit/yagr`)에 있습니다. 루트 `@gravity-ui/chartkit` 엔트리는 이를 다시 내보내지 않습니다.
- **모든 `data` 모양이 동일하다고 가정** — 모양은 플러그인에 따라 다릅니다. 예를 들어, `gravity-charts`는 `@gravity-ui/charts`의 `ChartData` (`{series: {data: [...]}}`)를 사용하고, `yagr`는 `{data: {graphs, timeline}, libraryConfig}`를 사용하며 `libraryConfig`가 필수입니다.
- **컨테이너 높이 누락** — `ChartKit`은 부모를 채웁니다. 래퍼에 명시적인 높이가 없으면 차트가 0으로 축소됩니다.
- **uikit 스타일 가져오기 누락** — 테마는 `@gravity-ui/uikit/styles/styles.css`에 따라 달라집니다. 이것이 없으면 차트가 스타일 없이 렌더링됩니다.

## AI 에이전트용 문서

설치된 버전에 대한 에이전트 읽기 가능 문서는 `node_modules/@gravity-ui/chartkit/build/docs/INDEX.md`에 있습니다.
```