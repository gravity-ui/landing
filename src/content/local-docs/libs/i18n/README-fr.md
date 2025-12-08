# 🌍 Gravity-UI i18n Tools

Ce dépôt contient des utilitaires, des bibliothèques et des plugins courants utilisés pour l'i18n dans Gravity-UI.

## Liens Utiles

- [Projet de Démonstration](./example/README.md)

## Bibliothèques

| Nom                                                    | Description                                                         | Version                                                |
|-------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|
| [i18n](./packages/i18n/README.md)                 | Bibliothèque i18n légère.                  |  <a href="https://npmjs.com/package/@gravity-ui/i18n-core"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-react](./packages/i18n-react/README.md)               | Bibliothèque i18n pour les applications client React (Syntaxe de Message ICU).              |  <a href="https://npmjs.com/package/@gravity-ui/i18n-react"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-react?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-node](./packages/i18n-node/README.md)                 | Bibliothèque i18n pour les applications serveur (Syntaxe de Message ICU).                        |  <a href="https://npmjs.com/package/@gravity-ui/i18n-node"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-node?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [eslint-plugin-i18n](./packages/eslint-plugin-i18n/README.md) | Règles ESLint pour l'i18n.                                       |  <a href="https://npmjs.com/package/@gravity-ui/eslint-plugin-i18n"><img src="https://img.shields.io/npm/v/@gravity-ui/eslint-plugin-i18n?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-cli](./packages/i18n-cli/README.md)                   | Outil pour les opérations avec les fichiers de langue.                   |  <a href="https://npmjs.com/package/@gravity-ui/i18n-cli"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-cli?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-babel-plugin](./packages/i18n-babel-plugin/README.md) | Plugin Babel pour optimiser la livraison des fichiers de langue.           |  <a href="https://npmjs.com/package/@gravity-ui/i18n-babel-plugin"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-babel-plugin?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-optimize-plugin](./packages/i18n-optimize-plugin/README.md) | Plugin Webpack/Rspack pour optimiser la livraison des fichiers de langue. |  <a href="https://npmjs.com/package/@gravity-ui/i18n-optimize-plugin"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-optimize-plugin?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [vscode-extension](./packages/vscode-extension/README.md) | Extension VS Code pour la création de fichiers de localisation | |

## Développement

1. Installer pnpm

    ```bash
    npm run install:global
    ```

1. Installer les dépendances

    ```bash
    pnpm i
    ```

1. Exécuter des commandes avec `nx`

    ```bash
    # Construire le package i18n-cli
    pnpm nx build @gravity-ui/i18n-cli

    # Vérifier les types pour le package i18n-cli
    pnpm nx typecheck @gravity-ui/i18n-cli

    # Exécuter le lint pour tous les packages
    pnpm nx run-many --target=lint --parallel
    ```