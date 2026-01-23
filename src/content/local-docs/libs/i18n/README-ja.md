# 🌍 Gravity-UI i18n Tools

このリポジトリには、Gravity-UI における i18n で使用される共通のユーティリティ、ライブラリ、およびプラグインが含まれています。

## 便利なリンク

- [デモプロジェクト](./example/README.md)

## ライブラリ

| 名前                                                    | 説明                                                         | バージョン                                                |
|-------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|
| [i18n](./packages/i18n/README.md)                 | 軽量 i18n ライブラリ。                  |  <a href="https://npmjs.com/package/@gravity-ui/i18n-core"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-react](./packages/i18n-react/README.md)               | React クライアントアプリケーション向けの i18n ライブラリ (ICU メッセージ構文)。              |  <a href="https://npmjs.com/package/@gravity-ui/i18n-react"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-react?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-node](./packages/i18n-node/README.md)                 | サーバーアプリケーション向けの i18n ライブラリ (ICU メッセージ構文)。                        |  <a href="https://npmjs.com/package/@gravity-ui/i18n-node"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-node?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [eslint-plugin-i18n](./packages/eslint-plugin-i18n/README.md) | i18n 用の ESLint ルール。                                       |  <a href="https://npmjs.com/package/@gravity-ui/eslint-plugin-i18n"><img src="https://img.shields.io/npm/v/@gravity-ui/eslint-plugin-i18n?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-cli](./packages/i18n-cli/README.md)                   | 言語ファイル操作ツール。                   |  <a href="https://npmjs.com/package/@gravity-ui/i18n-cli"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-cli?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-babel-plugin](./packages/i18n-babel-plugin/README.md) | 言語ファイル配信を最適化するための Babel プラグイン。           |  <a href="https://npmjs.com/package/@gravity-ui/i18n-babel-plugin"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-babel-plugin?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-optimize-plugin](./packages/i18n-optimize-plugin/README.md) | 言語ファイル配信を最適化するための Webpack/Rspack プラグイン。 |  <a href="https://npmjs.com/package/@gravity-ui/i18n-optimize-plugin"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-optimize-plugin?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [vscode-extension](./packages/vscode-extension/README.md) | ローカライゼーションファイル作成用の VS Code 拡張機能 | |

## 開発

1. pnpm をインストールします

    ```bash
    npm run install:global
    ```

1. 依存関係をインストールします

    ```bash
    pnpm i
    ```

1. `nx` を使用してコマンドを実行します

    ```bash
    # i18n-cli パッケージをビルドする
    pnpm nx build @gravity-ui/i18n-cli

    # i18n-cli パッケージの型チェックを実行する
    pnpm nx typecheck @gravity-ui/i18n-cli

    # すべてのパッケージの lint を実行する
    pnpm nx run-many --target=lint --parallel
    ```