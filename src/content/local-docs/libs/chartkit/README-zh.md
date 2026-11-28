# Gravity UI ChartKit · [![npm package](https://img.shields.io/npm/v/@gravity-ui/chartkit)](https://www.npmjs.com/package/@gravity-ui/chartkit) [![License](https://img.shields.io/github/license/gravity-ui/ChartKit)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/ChartKit/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/chartkit/)

一个基于插件的 React 组件，通过单一的 ChartKit API 渲染来自多个图表库（如 Gravity Charts 和 Yagr）的图表，并支持移动端友好的工具提示和自定义插件。您只需注册一个或多个插件，然后通过 `<ChartKit type="..." data={...} />` 渲染图表——ChartKit 会自动分发到正确的渲染器。

每个插件渲染器都是按需加载的，因此底层库代码仅在 ChartKit 实际渲染到 UI 时才会被下载。ChartKit 还开箱即用地处理了移动端友好的工具提示显示。您可以直接使用内置插件，也可以实现自己的插件。

**何时使用：**

- 您需要现代化的声明式图表（`gravity-charts`）或时间序列/监控图表（`yagr`）
- 您需要在单一、一致的 API 下支持多种图表类型
- 您希望图表开箱即用地与您 UI 的其他部分保持相同的浅色/深色主题

**何时不使用：**

- 您只需要一个特定的图表库——建议直接使用 [@gravity-ui/charts](https://github.com/gravity-ui/charts)

## 目录

- [快速开始](#getting-started)
- [更新图表包](#updating-charting-packages)
- [开发](#development)

## 快速开始

### 要求

- React 18 或 19
- [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) 8 — 必需的对等依赖项（提供主题和 UI 基础组件）

### 安装

```shell
npm install @gravity-ui/chartkit @gravity-ui/uikit
```

### 样式

在您的入口文件中导入 `@gravity-ui/uikit` 的样式：

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

有关完整的设置详细信息，请参阅 [uikit 样式指南](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles)。

### 基本用法

ChartKit 使用全局插件注册表。在您的应用入口点调用 `settings.set` 一次，以注册您需要的插件。当 `<ChartKit type="..." />` 渲染时，它会查找匹配的插件——如果找不到，则会抛出错误。每个插件的渲染器都是一个 `React.lazy` 组件，因此其代码仅在 ChartKit 首次出现在 UI 中时才会被获取。

您可以一次注册多个插件：

```ts
settings.set({plugins: [GravityChartsPlugin, YagrPlugin]});
```

或者多次调用 `settings.set`——它会合并插件列表而不是替换它。

**基本示例：**

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

`ChartKit` 会适应其父容器的大小——请确保容器具有明确的高度。

### SplitTooltip

`gravity-charts` 在触摸设备上使用的分屏工具提示布局（`tooltip={{splitted: true}}`）也可以作为一个独立组件使用。它可以处理任何内容：它会并排渲染主面板和工具提示面板（或者根据容器大小堆叠显示），中间有一个可拖动的分隔器。

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

有关布局控制、面板尺寸和分隔器选项，请参阅 `SplitTooltipProps` 类型。

## 更新图表包

ChartKit 捆绑了两个 Gravity UI 图表库作为依赖项：

- [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) — 为 `gravity-charts` 插件提供支持
- [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) — 为 `yagr` 插件提供支持

如果您需要这些包的更新版本，请打开一个 [包更新请求](https://github.com/gravity-ui/ChartKit/issues/new?template=package-update-request.yml) 问题，并选择您需要的包。维护者将更新选定的包并发布新版本。

### 从 ChartKit 8 升级

请参阅 [迁移指南](docs/migration-to-v9.md)：uikit 8 和 React 18+，CommonJS/ESM 构建和 TypeScript `moduleResolution` 说明，以及 `@gravity-ui/charts` 2 带来的 `gravity-charts` 数据更改。

## 开发

### 先决条件

- [Node.js](https://nodejs.org/) 22 (请参阅 [.nvmrc](https://github.com/gravity-ui/ChartKit/blob/main/.nvmrc))
- [npm](https://www.npmjs.com/) 10 或更高版本

### 设置

克隆仓库并安装依赖项：

```shell
git clone https://github.com/gravity-ui/ChartKit.git
cd ChartKit
npm ci
```

### 运行 Storybook

```shell
npm run start
```

Storybook 将在 `http://localhost:7007` 上可用。

### 使用本地依赖项进行开发

要在不发布到 npm 的情况下，在 Storybook 中查看对依赖项（例如 `@gravity-ui/charts`）的本地更改：

**1. 链接本地包**

```shell
# 在您的本地克隆的 @gravity-ui/charts 中：
git clone https://github.com/gravity-ui/charts.git
cd charts
npm ci
# 进行您的更改
npm run build
npm link

# 在 ChartKit 中：
npm link @gravity-ui/charts
```

**2. 配置本地包的监听**

在 ChartKit 根目录下创建一个 `.env.local` 文件（该文件会被 gitignore）：

```shell
LOCAL_PKG=@gravity-ui/charts
```

这会告诉 Vite 监视 `node_modules` 中的该包，并跳过预打包。在重新构建 `@gravity-ui/charts` 后，Storybook 将自动热重载。

对于多个包，请使用逗号分隔的列表：

```shell
LOCAL_PKG=@gravity-ui/charts,@gravity-ui/uikit
```

**3. 启动 Storybook**

```shell
npm run start
```

**4. 恢复原始包**

完成后：

1. 在 `.env.local` 中注释掉 `LOCAL_PKG`
2. 在 ChartKit 中运行 `npm install` — 这会将符号链接替换为注册表版本

```shell
# 在 ChartKit 中：
npm ci
```

### 运行测试

```shell
npm test
```

要检查构建后的包，请先进行构建。检查会加载 Node 中的 CommonJS 和 ESM 构建，比较它们的导出，并对 `nodenext`、`bundler` 和 `node` 模块解析下的消费者进行类型检查：

```shell
npm run build
npm run test:build
```

视觉回归测试在 Docker 中运行，以确保跨环境的截图一致性：

```shell
npm run test:docker
```

在有意进行 UI 更改后更新参考截图：

```shell
npm run test:docker:update
```

### 贡献

在提交拉取请求之前，请参阅[贡献指南](CONTRIBUTING.md)。

## 许可证

根据 MIT 许可证分发。有关详细信息，请参阅[许可证](LICENSE)。

## 致 AI 代理

一个基于插件的 React 组件，通过单一的 `<ChartKit type="..." data={...} />` API 渲染来自多个图表库（如 Gravity Charts 和 Yagr）的图表，仅在渲染其图表类型时才按需加载每个库。

### 何时使用

- 在一个统一的组件背后渲染多个图表引擎：`gravity-charts`（通过 [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) 进行声明式 SVG 图表）和 `yagr`（基于 uPlot 的时间序列，通过 [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr)）。
- 按需加载图表包 — 每个插件的渲染器都是 `React.lazy`，因此库的代码仅在其实际显示图表类型时才会被获取。
- 开箱即用的移动友好型工具提示 — 图表及其工具提示显示在可调整大小的分屏面板中，而不是悬停弹出窗口；对于 `gravity-charts`，可以使用 `<ChartKit type="gravity-charts" tooltip={{splitted: true}} />` 来启用。
- 单独使用分屏工具提示布局 — `SplitTooltip` 是从根入口导出的独立组件：传递 `renderMainPane` 和 `renderTooltip`，它会将它们布局为可调整大小的面板（垂直或水平，根据容器大小选择），不仅仅用于 ChartKit 图表。
- 编写自己的插件 — 通过 `settings.set({plugins: [...]})` 注册 `{type, renderer}`，其中 `renderer` 是一个 `React.lazy` 组件；ChartKit 会根据 `type` 精确地像内置插件一样分派给它。
- 开箱即用的所有图表引擎之间一致的浅色/深色主题 — 图表遵循周围应用程序的 `@gravity-ui/uikit` 主题。

### 何时不要使用

- 如果只使用一种图表类型，请直接导入 [`@gravity-ui/charts`](https://github.com/gravity-ui/charts)（通用）或 [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr)（高性能时间序列）— 插件注册表对于单个引擎来说是额外的开销。
- 要组合仪表板小部件网格，请使用 [`@gravity-ui/dashkit`](https://github.com/gravity-ui/dashkit) — ChartKit 渲染图表；DashKit 安排多个小部件。

### 常见陷阱

- **在 `settings.set({plugins: [...]})` 之前渲染 `<ChartKit>`** — 全局插件注册表必须在应用程序入口处填充；未注册的 `type` 会在渲染时抛出错误。
- **虚构的 `chartType` / `library` 属性** — 分派属性是 `type`（例如 `type="gravity-charts"`），数据是 `data`。
- **从根入口导入插件** — 插件位于子路径导出中（例如 `@gravity-ui/chartkit/gravity-charts`、`@gravity-ui/chartkit/yagr`）；根的 `@gravity-ui/chartkit` 入口不重新导出它们。
- **假设所有 `type` 都有一个 `data` 形状** — 形状取决于插件，例如 `gravity-charts` 接受来自 `@gravity-ui/charts` 的 `ChartData`（`{series: {data: [...]}}`），而 `yagr` 接受 `{data: {graphs, timeline}, libraryConfig}`，其中 `libraryConfig` 是必需的。
- **忘记容器高度** — `ChartKit` 会填充其父容器；如果没有为包装器设置显式高度，图表将收缩为零。
- **缺少 uikit 样式导入** — 主题依赖于 `@gravity-ui/uikit/styles/styles.css`；没有它，图表将呈现为未样式化。

## 致 AI 代理的文档

已安装版本的代理可读文档位于 `node_modules/@gravity-ui/chartkit/build/docs/INDEX.md`。