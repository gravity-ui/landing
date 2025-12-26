# 🌍 Gravity-UI i18n Tools

本仓库包含 Gravity-UI 在国际化 (i18n) 方面使用的通用工具、库和插件。

## 实用链接

- [演示项目](./example/README.md)

## 库

| 名称                                                    | 描述                                                         | 版本                                                |
|-------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|
| [i18n](./packages/i18n/README.md)                 | 轻量级的 i18n 库。                  |  <a href="https://npmjs.com/package/@gravity-ui/i18n-core"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-react](./packages/i18n-react/README.md)               | 适用于 React 客户端应用的 i18n 库 (ICU 消息语法)。              |  <a href="https://npmjs.com/package/@gravity-ui/i18n-react"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-react?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-node](./packages/i18n-node/README.md)                 | 适用于服务器应用的 i18n 库 (ICU 消息语法)。                        |  <a href="https://npmjs.com/package/@gravity-ui/i18n-node"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-node?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [eslint-plugin-i18n](./packages/eslint-plugin-i18n/README.md) | i18n 的 ESLint 规则。                                       |  <a href="https://npmjs.com/package/@gravity-ui/eslint-plugin-i18n"><img src="https://img.shields.io/npm/v/@gravity-ui/eslint-plugin-i18n?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-cli](./packages/i18n-cli/README.md)                   | 用于处理语言文件的工具。                   |  <a href="https://npmjs.com/package/@gravity-ui/i18n-cli"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-cli?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-babel-plugin](./packages/i18n-babel-plugin/README.md) | 用于优化语言文件交付的 Babel 插件。           |  <a href="https://npmjs.com/package/@gravity-ui/i18n-babel-plugin"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-babel-plugin?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-optimize-plugin](./packages/i18n-optimize-plugin/README.md) | 用于优化语言文件交付的 Webpack/Rspack 插件。 |  <a href="https://npmjs.com/package/@gravity-ui/i18n-optimize-plugin"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-optimize-plugin?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [vscode-extension](./packages/vscode-extension/README.md) | 用于创建本地化文件的 VS Code 扩展 | |

## 开发

1. 安装 pnpm

    ```bash
    npm run install:global
    ```

1. 安装依赖

    ```bash
    pnpm i
    ```

1. 使用 `nx` 运行命令

    ```bash
    # 构建 i18n-cli 包
    pnpm nx build @gravity-ui/i18n-cli

    # 为 i18n-cli 包运行类型检查
    pnpm nx typecheck @gravity-ui/i18n-cli

    # 为所有包运行 lint
    pnpm nx run-many --target=lint --parallel
    ```