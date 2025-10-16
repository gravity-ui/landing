# 🌍 Gravity-UI i18n Tools

This repository contains common utilities, libraries, and plugins used for i18n in Gravity-UI.

## Useful Links

- [Demo Project](./example/README.md)

## Libraries

| Name                                                    | Description                                                         | Latest Version                                                |
|-------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|
| [i18n-core](./packages/i18n-core/README.md)                 | Core i18n library. Wrapper around FormatJS.                  |  |
| [i18n-react](./packages/i18n-react/README.md)               | i18n library for React client applications.              |  |
| [i18n-node](./packages/i18n-node/README.md)                 | i18n library for server applications.                        |  |
| [eslint-plugin-i18n](./packages/eslint-plugin-i18n/README.md) | ESLint linting rules.                                       |  |
| [i18n-cli](./packages/i18n-cli/README.md)                   | Tool for operations with language files.                   |  |
| [i18n-babel-plugin](./packages/i18n-babel-plugin/README.md) | Babel plugin for optimizing language file delivery.           |  |
| [i18n-optimize-plugin](./packages/i18n-optimize-plugin/README.md) | Webpack/Rspack plugin for optimizing language file delivery. |  |
| [vscode-extension](./packages/vscode-extension/README.md) | VS Code extension for creating localization files | |

## Development

1. Install pnpm

    ```bash
    npm i -g pnpm@9.12.3
    ```

1. Install dependencies

    ```bash
    pnpm i
    ```

1. Run commands with `nx` 

    ```bash
    # Build the i18n-cli package
    pnpm nx build @gravity-ui/i18n-cli

    # Run typecheck for the i18n-cli package
    pnpm nx typecheck @gravity-ui/i18n-cli

    # Run lint for all packages
    pnpm nx run-many --target=lint --parallel
    ```
