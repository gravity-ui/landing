# UIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![npm downloads](https://img.shields.io/npm/dm/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/ci.yml?query=branch:main) [![storybook tests](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/test-storybook.yml?label=Storybook%20Tests&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/test-storybook.yml) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/uikit/)

[English](README.md) | [Русский](README-ru.md)

一套灵活、实用且高效的 React 组件，用于构建丰富的 Web 应用程序。是 [Gravity UI](https://gravity-ui.com) 设计系统的一部分。

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/uikit_cover.png)

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [网站](https://gravity-ui.com) &nbsp;&nbsp; ![Documentation Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_light.svg#gh-light-mode-only) ![Documentation Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_dark.svg#gh-dark-mode-only) [文档](https://gravity-ui.com/components/uikit/alert) &nbsp;&nbsp; ![Figma Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_light.svg#gh-light-mode-only) ![Figma Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_dark.svg#gh-dark-mode-only) [Figma](<https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)>) &nbsp;&nbsp; ![Themer Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_light.svg#gh-light-mode-only) ![Themer Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_dark.svg#gh-dark-mode-only) [Themer](https://gravity-ui.com/themer) &nbsp;&nbsp; ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/uikit/) &nbsp;&nbsp; ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [社区](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## 关于

UIKit 是 [Gravity UI](https://gravity-ui.com) 设计系统的基础包——这是一套经过实战检验的、包含 70 多个 React 组件的集合，专为生产环境的 Web 应用程序而构建。它处理了棘手的问题：主题化、可访问性、RTL 布局、服务器端渲染和国际化，让您可以专注于构建您的产品。

主要特点：

- **70 多个组件** — 输入框、弹出层、数据展示、布局基元、反馈等
- **内置主题化** — 提供浅色、深色和高对比度变体，并附带实时 [Themer](https://gravity-ui.com/themer) 工具来定制令牌
- **RTL 支持** — 完全支持从右到左的布局方向

您可以在 [Storybook](https://preview.gravity-ui.com/uikit/) 或 [文档](https://gravity-ui.com/components/uikit/alert) 中浏览完整的组件目录。

## 入门

### 前提条件

您的项目必须已安装 React 16.14、17、18 或 19。

### 安装

```shell
npm install @gravity-ui/uikit
```

## 用法

直接从包中导入组件：

```jsx
import {Button} from '@gravity-ui/uikit';

const SubmitButton = (
  <Button view="action" size="l">
    Submit
  </Button>
);
```

### 样式

在应用程序入口点的顶部一次性引入基础样式和字体：

```js
// index.js
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

还提供了一个 SCSS [mixins](styles/mixins.scss) 文件，其中包含有用的辅助函数，供您在自己的样式表中使用。

### 指南

阅读更多：

- [主题化](docs/theming.md) — 启用浅色、深色和高对比度主题
- [服务器端渲染](docs/server-side-rendering.md) — 在服务器上生成根 CSS 类
- [国际化](docs/i18n.md) — 设置内置组件的语言

## 开发

```shell
git clone git@github.com:gravity-ui/uikit.git
cd uikit
npm ci
npm run start   # 在 http://localhost:7007 启动 Storybook
```

其他常用命令：

```shell
npm test              # 运行单元测试
npm run lint          # 检查 JS、SCSS 和 Markdown 代码风格
npm run typecheck     # TypeScript 类型检查
npm run playwright    # 运行视觉回归测试
```

## 维护者

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

## 贡献

欢迎贡献！在提交 Pull Request 之前，请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。有关详细的 PR 指南，请参阅 [contribute/pull-request.md](contribute/pull-request.md)。

我们已有 [![contributors](https://img.shields.io/github/contributors/gravity-ui/uikit?label=contributors)](https://github.com/gravity-ui/uikit/graphs/contributors) 位贡献者，并且还在不断增加——快加入我们吧！

加入我们的 [Telegram](https://t.me/gravity_ui) 社区，进行提问和讨论。

## 许可证

在 MIT 许可证下分发。详情请参阅 [LICENSE](LICENSE)。

## 供 AI 代理使用

Gravity UI 应用的基础 React 组件和设计令牌库——包含所有其他 `@gravity-ui/*` 包都依赖的控件、输入框、覆盖层、布局和主题化。

### 何时使用

- 标准应用 UI：按钮、表单控件、模态框和弹出框、菜单、标签页、标签、排版以及布局基础组件。
- Gravity UI 应用的主题化基础：`ThemeProvider`、设计令牌以及其他 `@gravity-ui/*` 生态系统期望存在的 CSS 变量。
- 通过内置的 `Table` 组件处理简单的表格数据（选择、排序、行操作）。

### 何时避免使用

- 功能丰富的表格（虚拟化、列调整、分组、重排）——请使用独立的无头包 [`@gravity-ui/table`](https://github.com/gravity-ui/table)。它**不**等同于 uikit 的 `Table` 组件。
- 图表和数据可视化——请使用 [`@gravity-ui/charts`](https://github.com/gravity-ui/charts)（`@gravity-ui/chartkit` 是旧版包装器）。
- 应用导航外壳（侧边栏、页眉、页脚、Logo）——请使用 [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation)。
- 日期选择器、日历和范围控件——请使用 [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components)。
- SVG 图标集本身——请使用 [`@gravity-ui/icons`](https://github.com/gravity-ui/icons)；uikit 只提供 `Icon` 渲染器。

### 常见陷阱

- `Button` 的样式属性是 `view`，而不是 `variant` 或 `color`。
- **组件在未进行设置的情况下会渲染为空白。** 请在应用的入口点使用 `ThemeProvider` 包裹整个应用，**并且**一次性导入 `@gravity-ui/uikit/styles/styles.css`（以及 `fonts.css`）——两者都是必需的。
- **`Icon` 没有 `name` 属性。** 请通过 `data` 属性传递导入的图标组件：`import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} size={16} />`。
- **`theme` 的值是 `light | dark | light-hc | dark-hc`。** 没有 `theme="default"`。

### 有用的文档

- [布局组件和间距](./docs/layout.md)
- [主题化、颜色与品牌](./docs/theming.md)
- [排版](./docs/typography.md)

## 供 AI 代理使用的文档

已安装版本的代理可读文档位于 `node_modules/@gravity-ui/uikit/build/docs/INDEX.md`。

## Star History

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline" />
    <img alt="Star History Chart" width="600" src="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline" />
  </picture>
</div>

---

如果您觉得 UIKit 有用，请考虑在 [GitHub](https://github.com/gravity-ui/uikit) 上给它一个 ⭐，这有助于他人发现该项目。