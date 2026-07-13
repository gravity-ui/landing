# UIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/ci.yml?query=branch:main) [![storybook tests](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/test-storybook.yml?label=Storybook%20Tests&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/test-storybook.yml) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/uikit/)

一套灵活、实用且高效的 React 组件，用于构建丰富的 Web 应用程序。

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/uikit_cover.png)

## 资源

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [网站](https://gravity-ui.com)

### ![Documentation Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_light.svg#gh-light-mode-only) ![Documentation Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_dark.svg#gh-dark-mode-only) [文档](https://gravity-ui.com/components/uikit/alert)

### ![Figma Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_light.svg#gh-light-mode-only) ![Figma Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_dark.svg#gh-dark-mode-only) [Figma](<https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)>)

### ![Themer Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_light.svg#gh-light-mode-only) ![Themer Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_dark.svg#gh-dark-mode-only) [Themer](https://gravity-ui.com/themer)

### ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/uikit/)

### ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [社区](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## 安装

```shell
npm install --save-dev @gravity-ui/uikit
```

## 使用

```jsx
import {Button} from '@gravity-ui/uikit';

const SubmitButton = <Button view="action" size="l" />;
```

### 样式

UIKit 包含基础样式和主题。为了让一切看起来都很棒，请在你的入口文件的顶部添加以下内容：

```js
// index.js

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

// ...
```

UIKit 支持不同的主题：浅色、深色以及它们的对比色变体。你的应用必须渲染在 `ThemeProvider` 内部：

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

在 SSR（服务器端渲染）期间，可以生成初始的根 CSS 类，以避免主题闪烁：

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

此外，还有一个 SCSS [mixins](styles/mixins.scss) 文件，其中包含一些有用的辅助函数，可以在你的应用程序中使用。

### i18N（国际化）

某些组件包含文本令牌（单词和短语）。它们有两种语言：`en`（默认）和 `ru`。
要设置语言，请使用 `configure` 函数：

```js
// index.js

import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

## 开发

要启动带有 storybook 的开发服务器，请运行以下命令：

```shell
git clone git@github.com:gravity-ui/uikit.git
cd uikit
npm ci
npm run start
```

## 许可证

根据 MIT 许可证分发。有关详细信息，请参阅 [LICENSE](LICENSE)。

## 致 AI 代理

Gravity UI 应用的基础 React 组件和设计令牌库 — 包含其他所有 `@gravity-ui` 包都依赖的控件、输入、覆盖层、布局和主题化功能。

### 何时使用

- 标准应用程序 UI：按钮、表单控件、模态框和弹出窗口、菜单、标签页、标签、排版和布局基元。
- Gravity UI 应用的主题基础：`ThemeProvider`、设计令牌和 CSS 变量，这是其他 `@gravity-ui/*` 生态系统所期望存在的。
- 通过内置的 `Table` 组件（支持选择、排序、行操作）处理简单的表格数据。

### 何时避免使用

- 功能丰富的表格（虚拟化、列调整、分组、重排）— 请使用 [`@gravity-ui/table`](https://github.com/gravity-ui/table)，这是一个独立的无头包。它**不同于** uikit 的 `Table` 组件。
- 图表和数据可视化 — 请使用 [`@gravity-ui/charts`](https://github.com/gravity-ui/charts)（`@gravity-ui/chartkit` 是旧版包装器）。
- 应用导航外壳（侧边栏、页眉、页脚、Logo）— 请使用 [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation)。
- 日期选择器、日历和范围控件 — 请使用 [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components)。
- SVG 图标集本身 — 请使用 [`@gravity-ui/icons`](https://github.com/gravity-ui/icons)；uikit 只提供 `Icon` 渲染器。

### 常见陷阱

- `Button` 的样式属性是 `view`，而不是 `variant` 或 `color`。
- **组件在未设置的情况下会渲染无样式。** 请将应用包裹在 `ThemeProvider` 中，**并**在入口点一次性导入 `@gravity-ui/uikit/styles/styles.css`（以及 `fonts.css`）— 两者都是必需的。
- **`Icon` 没有 `name` 属性。** 通过 `data` 传递导入的图标组件：`import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} size={16} />`。
- **`theme` 的值是 `light | dark | light-hc | dark-hc`。** 没有 `theme="default"`。

### 有用的文档

- [布局组件和间距](./docs/layout.md)
- [主题、颜色和品牌](./docs/theming.md)
- [排版](./docs/typography.md)