# Gravity UI Charts · [![npm package](https://img.shields.io/npm/v/@gravity-ui/charts)](https://www.npmjs.com/package/@gravity-ui/charts) [![License](https://img.shields.io/github/license/gravity-ui/charts)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/charts/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/charts/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/charts/)

선언형 React 차트 라이브러리: 단일 데이터 구성으로 렌더링되는 라인, 영역, 막대, 파이, 산점도, 트리맵, 생키, 히트맵 등.

## 설치

```shell
npm install @gravity-ui/uikit @gravity-ui/charts
```

`@gravity-ui/uikit`은 필수 피어 의존성입니다. 차트가 의존하는 테마 및 스타일을 제공합니다.

## 사용법

진입점에서 `@gravity-ui/uikit` 스타일을 한 번 임포트하고, 앱을 `Provider`로 감싸고, 명시적인 높이를 가진 컨테이너 내부에 `Chart`를 렌더링하세요:

```tsx
import {Provider} from '@gravity-ui/uikit';
import {Chart} from '@gravity-ui/charts';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

const data = {
  series: {
    data: [
      {
        type: 'line',
        name: 'Temperature',
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
        <Chart data={data} />
      </div>
    </Provider>
  );
}
```

`Chart`는 부모 요소의 크기에 맞춰 조정되므로, 감싸는 요소에는 높이가 지정되어야 합니다.

## 차트 구성 도구

이 패키지는 차트 구성 유효성 검사, 생성 및 Monaco 통합을 위한 TypeScript 선언과 JSON 스키마를 제공합니다. 설정 및 사용 방법에 대한 자세한 내용은 [차트 구성 도구 문서](https://gravity-ui.github.io/charts/pages/integrations/chart-config.html)를 참조하세요.

## 문서

- [개요](https://gravity-ui.github.io/charts/pages/overview.html)
- [시작하기](https://gravity-ui.github.io/charts/pages/get-started.html)
- [개발](https://gravity-ui.github.io/charts/pages/development.html)
- [API](https://gravity-ui.github.io/charts/pages/api/overview.html)
- [가이드](https://gravity-ui.github.io/charts/pages/guides/series-types/index.html)

## 라이선스

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참조하세요.

## AI 에이전트용

선언형 React 차트 라이브러리 — 단일 `data` 구성으로 라인, 영역, 막대, 파이, 산점도, 트리맵, 생키, 히트맵 및 기타 차트를 렌더링하며, 내장된 라이트 및 다크 테마를 지원합니다.

### 언제 사용해야 할까요?

- 지원되는 시리즈 유형: `line`, `area`, `area-range`, `bar-x`/`bar-y`, `pie`, `scatter`, `treemap`, `waterfall`, `sankey`, `radar`, `heatmap`, `funnel`, `x-range`.
- Gravity UI 테마(라이트/다크)를 따라야 하고 `@gravity-ui/uikit` 앱과 토큰을 공유해야 하는 시각화.
- 명령형 방식이 아닌 선언형 데이터로부터 차트를 렌더링할 때.

### 언제 사용하지 않아야 할까요?

- 아직 `@gravity-ui/chartkit`을 사용하는 프로젝트 — 이는 이전 버전의 어댑터 기반 래퍼(YAGR/Highcharts/D3)이며, 이 패키지는 최신 독립형 렌더러이며 드롭인 대체재가 아닙니다.
- 일반적인 테이블 형식 데이터 — [`@gravity-ui/table`](https://github.com/gravity-ui/table)을 사용하세요.
- React가 아니거나 서버 전용 렌더링 — `Chart`는 React SVG를 렌더링하며 DOM이 필요합니다.

### 일반적인 주의 사항

- **컴포넌트 이름은 `Chart`이며 `ChartKit`이 아닙니다.** `@gravity-ui/charts`에서 `{Chart}`를 임포트하세요. `ChartKit`은 별도의 레거시 `@gravity-ui/chartkit` 패키지에 속합니다.
- **`data` prop은 `{series: {data: [...]}}` 형식의 `data`입니다.** `series.data`의 각 항목은 자체 `type`과 `data` 배열을 가진 하나의 시리즈이며, 최상위 배열은 없습니다.
- **크기가 지정되지 않은 컨테이너 없이는 아무것도 렌더링되지 않습니다.** `Chart`는 부모 요소를 채우므로, 래퍼에 명시적인 높이를 지정해야 합니다.
- **uikit 설정이 필요합니다.** `Provider`로 감싸고 `@gravity-ui/uikit/styles/styles.css`를 임포트하세요. `@gravity-ui/uikit`은 필수 피어 의존성입니다.

### 유용한 문서

- [시작하기](./docs/diplodoc/pages/get-started.md)
- [시리즈 유형](./docs/diplodoc/pages/guides/series-types/index.md)
- [테마 설정](./docs/diplodoc/pages/guides/theming.md)
- [툴팁](./docs/diplodoc/pages/guides/tooltip.md)
- [범례](./docs/diplodoc/pages/guides/legend.md)
- [HTML 콘텐츠](./docs/diplodoc/pages/guides/html.md)
- [값 형식 지정](./docs/diplodoc/pages/guides/value-formatting.md)
- [데이터 레이블](./docs/diplodoc/pages/guides/data-labels.md)
- [축 유형](./docs/diplodoc/pages/guides/axes/axis-types.md)
- [축 레이블](./docs/diplodoc/pages/guides/axes/axis-labels.md)
- [이벤트 및 상호작용](./docs/diplodoc/pages/guides/chart-interactions.md)
- [차트 구성 도구](./docs/diplodoc/pages/integrations/chart-config.md)
- [v1에서 v2로 마이그레이션](./docs/diplodoc/pages/migration/v2.md)

## AI 에이전트용 문서

설치된 버전에 대한 에이전트가 읽을 수 있는 문서는 `node_modules/@gravity-ui/charts/dist/docs/INDEX.md`에 있습니다.