# UIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![npm downloads](https://img.shields.io/npm/dm/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/ci.yml?query=branch:main) [![storybook tests](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/test-storybook.yml?label=Storybook%20Tests&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/test-storybook.yml) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/uikit/)

[English](README.md) | [Русский](README-ru.md)

一套灵活、实用且高效的 React 组件，用于构建丰富的 Web 应用程序。作为 [Gravity UI](https://gravity-ui.com) 设计系统的一部分。

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/uikit_cover.png)

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [网站](https://gravity-ui.com) &nbsp;&nbsp; ![Documentation Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_light.svg#gh-light-mode-only) ![Documentation Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_dark.svg#gh-dark-mode-only) [文档](https://gravity-ui.com/components/uikit/alert) &nbsp;&nbsp; ![Figma Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_light.svg#gh-light-mode-only) ![Figma Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_dark.svg#gh-dark-mode-only) [Figma](<https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)>) &nbsp;&nbsp; ![Themer Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_light.svg#gh-light-mode-only) ![Themer Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_dark.svg#gh-dark-mode-only) [Themer](https://gravity-ui.com/themer) &nbsp;&nbsp; ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/uikit/) &nbsp;&nbsp; ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [社区](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## 关于

UIKit 是 [Gravity UI](https://gravity-ui.com) 设计系统的基础包——一个经过实战检验的、包含 70 多个 React 组件的集合，专为生产级 Web 应用程序而构建。它处理了棘手的问题：主题化、可访问性、RTL 布局、服务器端渲染和国际化，让您可以专注于构建您的产品。

主要特点：

- **70 多个组件** — 输入框、弹出层、数据展示、布局基元、反馈等
- **内置主题化** — 提供浅色、深色和高对比度变体，并附带实时 [Themer](https://gravity-ui.com/themer) 工具来定制令牌
- **RTL 支持** — 完全支持从右到左的布局方向

您可以在 [Storybook](https://preview.gravity-ui.com/uikit/) 或 [文档](https://gravity-ui.com/components/uikit/alert) 中浏览完整的组件目录。

## 入门

### 前提条件

您的项目必须安装 React 18 或 19。

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

在您的应用程序入口点的顶部一次性引入基础样式和字体：

```js
// index.js
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

还提供了一个 SCSS [mixins](styles/mixins.scss) 文件，其中包含有用的辅助函数，供您在自己的样式表中使用。

### 指南

阅读更多：

- [迁移到 v8](docs/migration-to-v8.md) — v8 的破坏性变更以及如何逐一处理
- [布局组件和间距](docs/layout.md) — 使用共享的网格和间距比例来组合响应式页面
- [主题化](docs/theming.md) — 启用浅色、深色和高对比度主题
- [排版](docs/typography.md) — 使用和自定义共享的文本比例
- [服务器端渲染](docs/server-side-rendering.md) — 在服务器上生成根 CSS 类
- [国际化](docs/i18n.md) — 设置内置组件的语言

### 入口点

| 入口点                           | 内容                                                              | 何时使用                                                                                             |
| :-------------------------------- | :---------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| `@gravity-ui/uikit`               | 组件、Hooks 和工具                                                | 始终使用——这是核心包                                                                                 |
| `@gravity-ui/uikit/styles/*`      | 全局 CSS 和 SCSS Mixins                                           | 在应用的入口点处一次性引入，请参阅 [Styles](#styles)                                                 |
| `@gravity-ui/uikit/i18n`          | `addLanguageKeysets`, `addComponentKeysets`                       | 添加或覆盖内置组件的字符串                                                                           |
| `@gravity-ui/uikit/server`        | `getRootClassName`                                                | 在服务器端生成根类名，请参阅 [SSR](docs/server-side-rendering.md)                                    |
| `@gravity-ui/uikit/toaster-singleton` | 预置的 `Toaster` 实例                                             | 在 React 树之外显示 Toasts                                                                           |
| `@gravity-ui/uikit/virtualizer`   | `Virtualizer`, `ListVirtualizer`                                  | 只渲染长列表的可见部分                                                                               |
| `@gravity-ui/uikit/hello-pangea-dnd` | `ListHelloPangeaDnd`, `useListHelloPangeaDnd`                     | 使用 `@hello-pangea/dnd` 重新排序列表行                                                              |
| `@gravity-ui/uikit/unstable`      | API 仍在变动的组件                                                | 自行承担风险——这些组件在主版本发布之外可能会发生变化                                                 |
| `@gravity-ui/uikit/legacy`        | `DropdownMenu`, `List`, `Menu`, `Table`, `TableColumnSetup`       | 仅在迁移到新版本时使用，请参阅 [Migration to v8](docs/migration-to-v8.md)                            |

某些入口点需要单独安装其包，这些包被声明为可选的 peer 依赖项：当您从这些入口点导入时，请与 `@gravity-ui/uikit` 一起安装它们。其他所有内容都包含在包本身中。

| 入口点                           | 需要安装的包                                                    |
| :-------------------------------- | :-------------------------------------------------------------- |
| `@gravity-ui/uikit/virtualizer`   | `@tanstack/react-virtual`                                       |
| `@gravity-ui/uikit/hello-pangea-dnd` | `@hello-pangea/dnd`                                             |
| `@gravity-ui/uikit/legacy`        | `@hello-pangea/dnd`, `react-window`, `react-virtualized-auto-sizer` |

## 开发

开发时请使用 Node.js 24 或更高版本，以及 npm 11 或更高版本。

```shell
git clone git@github.com:gravity-ui/uikit.git
cd uikit
npm ci
npm run start   # 在 http://localhost:7007 启动 Storybook
```

其他常用命令：

```shell
npm test              # 运行单元测试
npm run lint          # 对 JS, SCSS 和 Markdown 进行 lint
npm run typecheck     # TypeScript 类型检查
npm run playwright    # 运行视觉回归测试
```

## Maintainers

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

我们有 [![contributors](https://img.shields.io/github/contributors/gravity-ui/uikit?label=contributors)](https://github.com/gravity-ui/uikit/graphs/contributors) 位贡献者，并且还在不断增加——快加入我们吧！

加入 [Telegram](https://t.me/gravity_ui) 社区，进行提问和讨论。

## 许可证

在 MIT 许可下分发。详情请参阅 [LICENSE](LICENSE)。

## 适用于 AI 代理

Gravity UI 应用的基础 React 组件和设计令牌库——包含其他所有 `@gravity-ui` 包都依赖的控件、输入框、覆盖层、布局和主题化。

### 何时使用

- 标准应用 UI：按钮、表单控件、模态框和弹出框、菜单、标签页、标签、排版和布局基础组件。
- 可选、可导航的列表 (`List`) 和选择控件 (`Select`)。
- Gravity UI 应用的主题化基础：`Provider`、设计令牌以及其他 `@gravity-ui/*` 生态系统期望存在的 CSS 变量。

### 何时避免使用

- 表格和数据网格（选择、排序、虚拟化、列调整大小、分组、重新排序）——请使用独立的无头包 [`@gravity-ui/table`](https://github.com/gravity-ui/table)。uikit 的 `Table` 组件自 v8 起位于 `@gravity-ui/uikit/legacy` 中，仅为现有代码保留。
- 图表和数据可视化——请使用 [`@gravity-ui/charts`](https://github.com/gravity-ui/charts)（`@gravity-ui/chartkit` 是旧版包装器）。
- 应用导航外壳（侧边栏、页眉、页脚、Logo）——请使用 [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation)。
- 日期选择器、日历和范围控件——请使用 [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components)。
- SVG 图标集本身——请使用 [`@gravity-ui/icons`](https://github.com/gravity-ui/icons)；uikit 只提供 `Icon` 渲染器。

### 常见陷阱

- `Button` 的样式属性是 `view`，而不是 `variant` 或 `color`。
- **组件在未进行设置的情况下会渲染为无样式。** 请将应用包裹在 `Provider` 中 **并** 在入口点导入 `@gravity-ui/uikit/styles/styles.css`（以及 `fonts.css`）——两者都是必需的。
- **`Icon` 没有 `name` 属性。** 通过 `data` 传递导入的图标组件：`import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} size={16} />`。
- **`theme` 的值是 `light | dark | light-hc | dark-hc | system`。** `system`（默认值）遵循操作系统偏好设置，并解析为 `light` 或 `dark`。没有 `theme="default"`。
- **v8 中的 `List` 是一个新组件。** v7 的 `List` 位于 `@gravity-ui/uikit/legacy` 中；请参阅 [List 迁移指南](./docs/migration-from-legacy-list.md)。

### 有用的文档

- [布局组件和间距](./docs/layout.md)
- [主题化、颜色和品牌](./docs/theming.md)
- [排版](./docs/typography.md)
- [迁移到 v8](./docs/migration-to-v8.md)

## 适用于 AI 代理的文档

已安装版本的代理可读文档位于 `node_modules/@gravity-ui/uikit/build/docs/INDEX.md`。

## Star History

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://star-history.dera.page/svg?repos=gravity-ui/uikit&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://star-history.dera.page/svg?repos=gravity-ui/uikit&type=Timeline" />
    <img alt="Star History Chart" width="600" src="https://star-history.dera.page/svg?repos=gravity-ui/uikit&type=Timeline" />
  </picture>
</div>

---

如果您觉得 UIKit 有用，请考虑在 [GitHub](https://github.com/gravity-ui/uikit) 上给它一个 ⭐——这将有助于其他人发现该项目。