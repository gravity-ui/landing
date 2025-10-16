# 🌍 Gravity-UI i18n Tools

本仓库包含 Gravity-UI 在国际化 (i18n) 方面使用的通用工具、库和插件。

## 实用链接

- [演示项目](./example/README.md)

## 库

| 名称                                                    | 描述                                                         | 最新版本                                                |
|-------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|
| [i18n-core](./packages/i18n-core/README.md)                 | 核心 i18n 库。FormatJS 的封装。                          |  |
| [i18n-react](./packages/i18n-react/README.md)               | 适用于 React 客户端应用的 i18n 库。              |  |
| [i18n-node](./packages/i18n-node/README.md)                 | 适用于服务器应用的 i18n 库。                        |  |
| [eslint-plugin-i18n](./packages/eslint-plugin-i18n/README.md) | ESLint 检查规则。                                       |  |
| [i18n-cli](./packages/i18n-cli/README.md)                   | 用于处理语言文件的工具。                   |  |
| [i18n-babel-plugin](./packages/i18n-babel-plugin/README.md) | 用于优化语言文件交付的 Babel 插件。           |  |
| [i18n-optimize-plugin](./packages/i18n-optimize-plugin/README.md) | 用于优化语言文件交付的 Webpack/Rspack 插件。 |  |
| [vscode-extension](./packages/vscode-extension/README.md) | 用于创建本地化文件的 VS Code 扩展 | |

## 开发

1. 安装 pnpm

    ```bash
    npm i -g pnpm@9.12.3
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