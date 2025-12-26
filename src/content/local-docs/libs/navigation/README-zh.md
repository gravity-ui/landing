# @gravity-ui/navigation &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/navigation)](https://www.npmjs.com/package/@gravity-ui/navigation) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/navigation/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/navigation/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/navigation/)

### 侧边栏头部导航 &middot; [预览 →](https://preview.yandexcloud.dev/navigation/)

![](docs/images/showcase.png)

## 安装

```bash
npm install @gravity-ui/navigation
```

请确保您的项目中已安装对等依赖项

```bash
npm install --dev @gravity-ui/uikit@^6.15.0 @gravity-ui/icons@2.2.0 @gravity-ui/components@3.0.0 @bem-react/classname@1.6.0 react@^18.0.0 react-dom@18.0.0
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

用于导航组件的主题化