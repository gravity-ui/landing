# @gravity-ui/navigation &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/navigation)](https://www.npmjs.com/package/@gravity-ui/navigation) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/navigation/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/navigation/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/navigation/)

### 侧边栏头部导航 &middot; [预览 →](https://preview.yandexcloud.dev/navigation/)

![](docs/images/showcase.png)

## 安装

```bash
npm install @gravity-ui/navigation
```

请确保您的项目中已安装对等依赖项

```bash
npm install --dev @gravity-ui/uikit@^7.2.0 @gravity-ui/icons@^2.2.0 @bem-react/classname@^1.6.0 react@^19.0.0 react-dom@^19.0.0
```

## 用法

将 `AsideHeader` 作为应用的骨架渲染。它是一个受控组件——您通过 `compact`/`onChangeCompact` 属性来控制折叠状态，并将您的页面内容通过 `renderContent` 属性传入。请先设置 `@gravity-ui/uikit` 的样式和 `ThemeProvider`（请参阅 [uikit 样式指南](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles)）。

```tsx
import React from 'react';
import {AsideHeader} from '@gravity-ui/navigation';
import {Gear, House} from '@gravity-ui/icons';
import {ThemeProvider} from '@gravity-ui/uikit';

import '@gravity-ui/uikit/styles/styles.css';

export function App() {
  const [compact, setCompact] = React.useState(false);

  return (
    <ThemeProvider theme="light">
      <AsideHeader
        logo={{text: '我的应用', href: '/'}}
        compact={compact}
        onChangeCompact={setCompact}
        menuItems={[
          {id: 'home', title: '首页', icon: House, current: true},
          {id: 'settings', title: '设置', icon: Gear},
        ]}
        renderContent={() => <main>页面内容</main>}
      />
    </ThemeProvider>
  );
}
```

## Sandboxes

基础示例
https://codesandbox.io/p/devbox/navigation-demo-simple-x9k5sd

高级示例
https://codesandbox.io/p/devbox/recursing-dawn-6kc9vh

## 2025 年路线图

1. 支持 SSR
2. 向 [Gravity UI](https://gravity-ui.com/ru/components/navigation/aside-header) 添加更多文档和示例
3. 支持 UIKit 主题中的导航
4. 统一 subheaderItem、menuItem、footerItem 的 API

## 组件

- [AsideHeader](https://github.com/gravity-ui/navigation/tree/main/src/components/AsideHeader/README.md)
  - [AllPagesPanel](https://github.com/gravity-ui/navigation/tree/main/src/components/AllPagesPanel/README.md)
  - PageLayout
- [PageLayoutAside](https://github.com/gravity-ui/navigation/tree/main/src/components/AsideHeader/README.md)
- AsideFallback
- FooterItem
- [Logo](https://github.com/gravity-ui/navigation/tree/main/src/components/Logo/Readme.md)
- [Drawer](https://github.com/gravity-ui/navigation/tree/main/src/components/Drawer/README.md)
- [DrawerItem](https://github.com/gravity-ui/navigation/blob/main/src/components/Drawer/README.md#draweritem-props)
- [MobileHeader](https://github.com/gravity-ui/navigation/tree/main/src/components/MobileHeader/README.md)
- MobileHeaderFooterItem
- MobileLogo
- [HotkeysPanel](https://github.com/gravity-ui/navigation/tree/main/src/components/HotkeysPanel/README.md)
- [Footer](https://github.com/gravity-ui/navigation/tree/main/src/components/Footer/README.md)
- [MobileFooter](https://github.com/gravity-ui/navigation/tree/main/src/components/Footer/README.md)
- [ActionBar](https://github.com/gravity-ui/navigation/tree/main/src/components/ActionBar/README.md)
- [Settings](https://github.com/gravity-ui/navigation/tree/main/src/components/Settings/README.md)

## CSS API

用于 Navigation 组件的主题化

## 许可证

在 MIT 许可证下分发。详情请参阅 [LICENSE](LICENSE)。

## 致 AI 代理

Gravity UI 应用的应用程序外壳导航组件——可折叠的 `AsideHeader` 侧边栏，以及用于构成整个页面的页脚、抽屉、Logo、快捷键和设置面板。

### 何时使用

- 应用的主要导航框架：`AsideHeader`（可折叠侧边导航），包含 `menuItems`、子头部和页脚部分。
- 支持性的外壳 UI：`Drawer`/`DrawerItem`、`Footer`/`MobileFooter`、`MobileHeader`、`HotkeysPanel`、`Settings`、`ActionBar`、`Logo`。
- 通过 `renderContent` / `PageLayout` 在导航框架内布局页面内容。

### 何时避免使用

- 通用的页面内控件（按钮、标签页、菜单、面包屑）——请使用 [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit)；此包是外部应用外壳，而非通用组件。
- 从配置中渲染页面主体本身——请使用 [`@gravity-ui/page-constructor`](https://github.com/gravity-ui/page-constructor)。
- 客户端路由——此包仅提供导航 UI；请将点击事件连接到您自己的路由。

### 常见陷阱

- **`AsideHeader` 是受控的。** 您必须通过 `compact` 属性来管理折叠状态，并在 `onChangeCompact` 中更新它；如果只传递 `compact` 而不提供处理函数，侧边栏将无法响应。
- **菜单项是 `menuItems`，通过 `id` 键控。** 每个菜单项的格式为 `{id, title, icon, current, onItemClick}`；`icon` 属性接受一个图标组件（例如来自 `@gravity-ui/icons`），而不是字符串名称。
- **需要对等依赖项。** `@gravity-ui/uikit`、`@gravity-ui/icons` 和 `@bem-react/classname` 必须与 `react`/`react-dom` 一起安装。
- **需要 uikit 设置。** 请在 `ThemeProvider` 中渲染，并导入 `@gravity-ui/uikit/styles/styles.css`，否则外壳将无法正确显示样式。
- **页面内容通过 `renderContent` 传入。** 请通过 `renderContent` 属性 / `PageLayout` 来渲染您的路由内容，而不是作为 `children`。

## AI 代理文档

已安装版本的代理可读文档位于 `node_modules/@gravity-ui/navigation/build/docs/INDEX.md`。