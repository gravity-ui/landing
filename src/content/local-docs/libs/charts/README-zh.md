# Gravity UI Charts · [![npm package](https://img.shields.io/npm/v/@gravity-ui/charts)](https://www.npmjs.com/package/@gravity-ui/charts) [![License](https://img.shields.io/github/license/gravity-ui/charts)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/charts/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/charts/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/charts/)

一个 React 图表库，提供 10+ 种图表类型：面积图、柱状图、折线图、饼图、散点图、树状图等。

## 安装

```shell
npm install @gravity-ui/uikit @gravity-ui/charts
```

`@gravity-ui/uikit` 是一个必需的对等依赖项 — 它提供了图表依赖的主题和样式。

## 用法

在你的入口文件中导入一次 `@gravity-ui/uikit` 样式，用 `ThemeProvider` 包裹你的应用，并在一个具有明确高度的容器内渲染 `Chart` 组件：

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

`Chart` 组件会自适应其父容器的大小，因此包裹的元素必须有一个高度。

## 图表配置工具

该包提供了 TypeScript 声明和 JSON Schema，用于图表配置的验证、生成以及 Monaco 编辑器的集成。有关设置和使用详情，请参阅 [图表配置工具文档](https://gravity-ui.github.io/charts/pages/integrations/chart-config.html)。

## 文档

- [概述](https://gravity-ui.github.io/charts/pages/overview.html)
- [入门](https://gravity-ui.github.io/charts/pages/get-started.html)
- [开发](https://gravity-ui.github.io/charts/pages/development.html)
- [API](https://gravity-ui.github.io/charts/pages/api/overview.html)
- [指南](https://gravity-ui.github.io/charts/pages/guides/tooltip.html)

## 许可证

在 MIT 许可证下分发。详情请参阅 [LICENSE](LICENSE)。

## 致 AI 代理

一个声明式的 React 图表库，适用于 Gravity UI 应用 — 从单一的 `data` 配置渲染折线图、面积图、柱状图、饼图、散点图、树状图等图表，并能与应用的其他部分保持一致的主题风格。

### 何时使用

- 标准业务图表：`line`（折线图）、`area`（面积图）、`bar-x`/`bar-y`（柱状图）、`pie`（饼图）、`scatter`（散点图）、`treemap`（树状图）、`waterfall`（瀑布图）、`sankey`（桑基图）、`radar`（雷达图）、`heatmap`（热力图）、`funnel`（漏斗图）、`x-range`（范围图）。
- 需要遵循 Gravity UI 主题（浅色/深色）并与 `@gravity-ui/uikit` 应用共享 token 的可视化。
- 从声明式数据渲染图表，而不是命令式绘制。

### 何时**不**使用

- 仍在使用 `@gravity-ui/chartkit` 的项目 — 那是旧的基于适配器的包装器（YAGR/Highcharts/D3）；此包是现代的独立渲染器，并非直接替换。
- 纯表格数据 — 请使用 [`@gravity-ui/table`](https://github.com/gravity-ui/table)。
- 非 React 或仅服务器端渲染 — `Chart` 组件渲染的是 React SVG，需要 DOM 环境。

### 常见陷阱

- **组件是 `Chart`，不是 `ChartKit`。** 从 `@gravity-ui/charts` 导入 `{Chart}`；`ChartKit` 属于独立的旧版 `@gravity-ui/chartkit` 包。
- **`data` prop 的结构是 `{series: {data: [...]}}`。** `series.data` 中的每个条目代表一个系列，拥有自己的 `type` 和 `data` 数组 — 没有顶层的系列数组。
- **没有尺寸容器则什么都不会渲染。** `Chart` 组件会填充其父容器，因此请为包裹元素设置明确的高度。
- **需要 uikit 设置。** 使用 `ThemeProvider` 包裹，并导入 `@gravity-ui/uikit/styles/styles.css`；`@gravity-ui/uikit` 是必需的对等依赖项。

### 有用的文档

- [入门](./docs/diplodoc/pages/get-started.md)
- [主题](./docs/diplodoc/pages/guides/theming.md)
- [工具提示](./docs/diplodoc/pages/guides/tooltip.md)
- [图例](./docs/diplodoc/pages/guides/legend.md)
- [HTML 内容](./docs/diplodoc/pages/guides/html.md)
- [数值格式化](./docs/diplodoc/pages/guides/value-formatting.md)
- [数据标签](./docs/diplodoc/pages/guides/data-labels.md)
- [轴类型](./docs/diplodoc/pages/guides/axes/axis-types.md)
- [轴标签](./docs/diplodoc/pages/guides/axes/axis-labels.md)

## AI 代理文档

已安装版本的、供代理读取的文档位于 `node_modules/@gravity-ui/charts/dist/docs/INDEX.md`。