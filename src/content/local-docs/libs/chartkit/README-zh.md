# @gravity-ui/chartkit · [npm 包](https://www.npmjs.com/package/@gravity-ui/chartkit) [许可证](LICENSE) [CI](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [storybook](https://preview.gravity-ui.com/chartkit/)

基于插件的 React 组件，为多个图表库提供统一的渲染接口。您注册一个或多个插件，然后通过 `<ChartKit type="..." data={...} />` 来渲染图表 — ChartKit 会自动分发到正确的渲染器。

每个插件渲染器都是懒加载的，因此底层库代码仅在 ChartKit 实际渲染到 UI 时才会被下载。ChartKit 还开箱即用地处理了移动端友好的工具提示显示。您可以直接使用内置插件，也可以实现自己的插件。

**何时使用：**

- 您需要现代化的声明式图表 (`gravity-charts`) 或时间序列/监控图表 (`yagr`)
- 您需要在单一一致的 API 下使用多种图表类型
- 您正在 Gravity UI 生态系统中进行开发

**何时不使用：**

- 您只需要一个特定的图表库 — 建议直接使用 [@gravity-ui/charts](https://github.com/gravity-ui/charts)

## 目录

- [入门](#get-started)
- [开发](#development)

## 入门

### 要求

- React 16、17 或 18
- `[@gravity-ui/uikit](https://github.com/gravity-ui/uikit)` — 必需的对等依赖项（提供主题和 UI 基础组件）

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

ChartKit 使用全局插件注册表。在您的应用程序入口点调用 `settings.set` 一次，以注册您需要的插件。当 `<ChartKit type="..." />` 渲染时，它会查找匹配的插件 — 如果找不到，则会抛出错误。每个插件的渲染器都是一个 `React.lazy` 组件，因此其代码仅在 ChartKit 首次出现在 UI 中时才会被获取。

您可以一次注册多个插件：

```ts
settings.set({plugins: [GravityChartsPlugin, YagrPlugin]});
```

或者多次调用 `settings.set` — 它会合并插件列表而不是替换它。

**基本示例：**

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

`ChartKit` 会适应其父容器的大小 — 确保容器具有明确的高度。

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

要在不发布到 npm 的情况下，在 Storybook 中查看对依赖项（例如 `@gravity-ui/charts`）的更改：

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

**2. 配置本地包的监视**

在 ChartKit 的根目录创建一个 `.env.local` 文件（它会被 gitignore）：

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