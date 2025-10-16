# 🌍 Gravity-UI i18n Tools

Dieses Repository enthält allgemeine Dienstprogramme, Bibliotheken und Plugins, die für i18n in Gravity-UI verwendet werden.

## Nützliche Links

- [Demo-Projekt](./example/README.md)

## Bibliotheken

| Name                                                    | Beschreibung                                                         | Neueste Version                                                |
|-------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|
| [i18n-core](./packages/i18n-core/README.md)                 | Kern-i18n-Bibliothek. Wrapper um FormatJS.                  |  |
| [i18n-react](./packages/i18n-react/README.md)               | i18n-Bibliothek für React-Clientanwendungen.              |  |
| [i18n-node](./packages/i18n-node/README.md)                 | i18n-Bibliothek für Serveranwendungen.                        |  |
| [eslint-plugin-i18n](./packages/eslint-plugin-i18n/README.md) | ESLint-Linting-Regeln.                                       |  |
| [i18n-cli](./packages/i18n-cli/README.md)                   | Werkzeug für Operationen mit Sprachdateien.                   |  |
| [i18n-babel-plugin](./packages/i18n-babel-plugin/README.md) | Babel-Plugin zur Optimierung der Auslieferung von Sprachdateien.           |  |
| [i18n-optimize-plugin](./packages/i18n-optimize-plugin/README.md) | Webpack/Rspack-Plugin zur Optimierung der Auslieferung von Sprachdateien. |  |
| [vscode-extension](./packages/vscode-extension/README.md) | VS Code-Erweiterung zum Erstellen von Lokalisierungsdateien | |

## Entwicklung

1. pnpm installieren

    ```bash
    npm i -g pnpm@9.12.3
    ```

1. Abhängigkeiten installieren

    ```bash
    pnpm i
    ```

1. Befehle mit `nx` ausführen

    ```bash
    # Das i18n-cli-Paket bauen
    pnpm nx build @gravity-ui/i18n-cli

    # Typüberprüfung für das i18n-cli-Paket ausführen
    pnpm nx typecheck @gravity-ui/i18n-cli

    # Linting für alle Pakete ausführen
    pnpm nx run-many --target=lint --parallel
    ```