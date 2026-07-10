# Gravity UI Charts · [![npm package](https://img.shields.io/npm/v/@gravity-ui/charts)](https://www.npmjs.com/package/@gravity-ui/charts) [![License](https://img.shields.io/github/license/gravity-ui/charts)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/charts/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/charts/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/charts/)

10가지 이상의 차트 유형(영역, 막대, 선, 파이, 산점도, 트리맵 등)을 지원하는 React 차트 라이브러리입니다.

## 설치

```shell
npm install @gravity-ui/uikit @gravity-ui/charts
```

`@gravity-ui/uikit`은 필수 피어 종속성입니다. 차트가 의존하는 테마 및 스타일을 제공합니다.

## 사용법

진입점에서 `@gravity-ui/uikit` 스타일을 한 번 임포트하고, 앱을 `ThemeProvider`로 감싼 다음, 명시적인 높이를 가진 컨테이너 안에 `Chart`를 렌더링하세요.

```tsx
import {ThemeProvider} from '@gravity-ui/uikit';
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
    <ThemeProvider theme="light">
      <div style={{height: 300}}>
        <Chart data={data} />
      </div>
    </ThemeProvider>
  );
}
```

`Chart`는 부모 요소의 크기에 맞춰 조정되므로, 감싸는 요소에는 높이가 지정되어야 합니다.

## 문서

- [개요](https://gravity-ui.github.io/charts/pages/overview.html)
- [시작하기](https://gravity-ui.github.io/charts/pages/get-started.html)
- [개발](https://gravity-ui.github.io/charts/pages/development.html)
- [API](https://gravity-ui.github.io/charts/pages/api/overview.html)
- [가이드](https://gravity-ui.github.io/charts/pages/guides/tooltip.html)

## 라이선스

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참조하세요.

## AI 에이전트용

Gravity UI 앱을 위한 선언형 React 차트 라이브러리 — 단일 `data` 구성으로 선, 영역, 막대, 파이, 산점도, 트리맵 및 기타 차트를 렌더링하며, 앱의 나머지 부분과 일치하도록 테마가 적용됩니다.

### 언제 사용해야 할까요?

- 표준 비즈니스 차트: `line`, `area`, `bar-x`/`bar-y`, `pie`, `scatter`, `treemap`, `waterfall`, `sankey`, `radar`, `heatmap`, `funnel`, `x-range`.
- Gravity UI 테마(라이트/다크)를 따르고 `@gravity-ui/uikit` 앱과 토큰을 공유해야 하는 시각화.
- 명령형으로 그리는 대신 선언형 데이터에서 차트를 렌더링하는 경우.

### 언제 사용하지 않아야 할까요?

- 아직 `@gravity-ui/chartkit`을 사용하는 프로젝트 — 이는 이전 어댑터 기반 래퍼(YAGR/Highcharts/D3)이며, 이 패키지는 최신 독립형 렌더러이며 드롭인 대체재가 아닙니다.
- 일반적인 테이블 형식 데이터 — [`@gravity-ui/table`](https://github.com/gravity-ui/table)을 사용하세요.
- React가 아니거나 서버 전용 렌더링 — `Chart`는 React SVG를 렌더링하며 DOM이 필요합니다.

### 일반적인 함정

- **컴포넌트 이름은 `Chart`이며 `ChartKit`이 아닙니다.** `@gravity-ui/charts`에서 `{Chart}`를 임포트하세요. `ChartKit`은 별도의 레거시 `@gravity-ui/chartkit` 패키지에 속합니다.
- **`data` prop은 `{series: {data: [...]}}` 형식의 `data`입니다.** `series.data`의 각 항목은 자체 `type`과 `data` 배열을 가진 하나의 시리즈입니다. 최상위 배열은 없습니다.
- **크기가 지정되지 않은 컨테이너 없이는 아무것도 렌더링되지 않습니다.** `Chart`는 부모를 채우므로 래퍼에 명시적인 높이를 지정하세요.
- **uikit 설정이 필요합니다.** `ThemeProvider`로 감싸고 `@gravity-ui/uikit/styles/styles.css`를 임포트하세요. `@gravity-ui/uikit`은 필수 피어 종속성입니다.

### 유용한 문서

- [시작하기](./docs/diplodoc/pages/get-started.md)
- [테마 설정](./docs/diplodoc/pages/guides/theming.md)
- [툴팁](./docs/diplodoc/pages/guides/tooltip.md)
- [범례](./docs/diplodoc/pages/guides/legend.md)
- [HTML 콘텐츠](./docs/diplodoc/pages/guides/html.md)
- [값 형식 지정](./docs/diplodoc/pages/guides/value-formatting.md)
- [데이터 레이블](./docs/diplodoc/pages/guides/data-labels.md)
- [축 유형](./docs/diplodoc/pages/guides/axis-types.md)