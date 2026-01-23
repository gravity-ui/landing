# 🌍 Gravity-UI i18n Tools

This repository contains common utilities, libraries, and plugins used for i18n in Gravity-UI.

## Useful Links

- [Demo Project](./example/README.md)

## Libraries

| Name                                                    | Description                                                         | Version                                                |
|-------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|
| [i18n](./packages/i18n/README.md)                 | Lightweight i18n library.                  |  <a href="https://npmjs.com/package/@gravity-ui/i18n-core"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-react](./packages/i18n-react/README.md)               | i18n library for React client applications (ICU Message Syntax).              |  <a href="https://npmjs.com/package/@gravity-ui/i18n-react"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-react?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-node](./packages/i18n-node/README.md)                 | i18n library for server applications (ICU Message Syntax).                        |  <a href="https://npmjs.com/package/@gravity-ui/i18n-node"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-node?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [eslint-plugin-i18n](./packages/eslint-plugin-i18n/README.md) | ESLint rules for i18n.                                       |  <a href="https://npmjs.com/package/@gravity-ui/eslint-plugin-i18n"><img src="https://img.shields.io/npm/v/@gravity-ui/eslint-plugin-i18n?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-cli](./packages/i18n-cli/README.md)                   | Tool for operations with language files.                   |  <a href="https://npmjs.com/package/@gravity-ui/i18n-cli"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-cli?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-babel-plugin](./packages/i18n-babel-plugin/README.md) | Babel plugin for optimizing language files delivery.           |  <a href="https://npmjs.com/package/@gravity-ui/i18n-babel-plugin"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-babel-plugin?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-optimize-plugin](./packages/i18n-optimize-plugin/README.md) | Webpack/Rspack plugin for optimizing language files delivery. |  <a href="https://npmjs.com/package/@gravity-ui/i18n-optimize-plugin"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-optimize-plugin?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [vscode-extension](./packages/vscode-extension/README.md) | VS Code extension for creating localization files | |

## Development

1. Install pnpm

    ```bash
    npm run install:global
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
