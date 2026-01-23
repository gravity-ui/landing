# 🌍 Gravity-UI i18n Tools

Dieses Repository enthält gängige Hilfsprogramme, Bibliotheken und Plugins, die für i18n in Gravity-UI verwendet werden.

## Nützliche Links

- [Demo-Projekt](./example/README.md)

## Bibliotheken

| Name                                                    | Beschreibung                                                         | Version                                                |
|-------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|
| [i18n](./packages/i18n/README.md)                 | Leichtgewichtige i18n-Bibliothek.                  |  <a href="https://npmjs.com/package/@gravity-ui/i18n-core"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-react](./packages/i18n-react/README.md)               | i18n-Bibliothek für React-Clientanwendungen (ICU Message Syntax).              |  <a href="https://npmjs.com/package/@gravity-ui/i18n-react"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-react?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-node](./packages/i18n-node/README.md)                 | i18n-Bibliothek für Serveranwendungen (ICU Message Syntax).                        |  <a href="https://npmjs.com/package/@gravity-ui/i18n-node"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-node?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [eslint-plugin-i18n](./packages/eslint-plugin-i18n/README.md) | ESLint-Regeln für i18n.                                       |  <a href="https://npmjs.com/package/@gravity-ui/eslint-plugin-i18n"><img src="https://img.shields.io/npm/v/@gravity-ui/eslint-plugin-i18n?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-cli](./packages/i18n-cli/README.md)                   | Werkzeug für Operationen mit Sprachdateien.                   |  <a href="https://npmjs.com/package/@gravity-ui/i18n-cli"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-cli?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-babel-plugin](./packages/i18n-babel-plugin/README.md) | Babel-Plugin zur Optimierung der Auslieferung von Sprachdateien.           |  <a href="https://npmjs.com/package/@gravity-ui/i18n-babel-plugin"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-babel-plugin?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-optimize-plugin](./packages/i18n-optimize-plugin/README.md) | Webpack/Rspack-Plugin zur Optimierung der Auslieferung von Sprachdateien. |  <a href="https://npmjs.com/package/@gravity-ui/i18n-optimize-plugin"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-optimize-plugin?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [vscode-extension](./packages/vscode-extension/README.md) | VS Code-Erweiterung zum Erstellen von Lokalisierungsdateien | |

## Entwicklung

1. Installiere pnpm

    ```bash
    npm run install:global
    ```

1. Installiere Abhängigkeiten

    ```bash
    pnpm i
    ```

1. Führe Befehle mit `nx` aus

    ```bash
    # Baue das i18n-cli-Paket
    pnpm nx build @gravity-ui/i18n-cli

    # Führe Typüberprüfung für das i18n-cli-Paket aus
    pnpm nx typecheck @gravity-ui/i18n-cli

    # Führe Lint für alle Pakete aus
    pnpm nx run-many --target=lint --parallel
    ```