# 🌍 Gravity-UI i18n Tools

Ce dépôt contient des utilitaires, des bibliothèques et des plugins courants utilisés pour l'i18n dans Gravity-UI.

## Liens Utiles

- [Projet de Démonstration](./example/README.md)

## Bibliothèques

| Nom                                                    | Description                                                         | Dernière Version                                                |
|-------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|
| [i18n-core](./packages/i18n-core/README.md)                 | Bibliothèque i18n principale. Wrapper autour de FormatJS.                  |  |
| [i18n-react](./packages/i18n-react/README.md)               | Bibliothèque i18n pour les applications client React.              |  |
| [i18n-node](./packages/i18n-node/README.md)                 | Bibliothèque i18n pour les applications serveur.                        |  |
| [eslint-plugin-i18n](./packages/eslint-plugin-i18n/README.md) | Règles de linting ESLint.                                       |  |
| [i18n-cli](./packages/i18n-cli/README.md)                   | Outil pour les opérations avec les fichiers de langue.                   |  |
| [i18n-babel-plugin](./packages/i18n-babel-plugin/README.md) | Plugin Babel pour optimiser la livraison des fichiers de langue.           |  |
| [i18n-optimize-plugin](./packages/i18n-optimize-plugin/README.md) | Plugin Webpack/Rspack pour optimiser la livraison des fichiers de langue. |  |
| [vscode-extension](./packages/vscode-extension/README.md) | Extension VS Code pour la création de fichiers de localisation | |

## Développement

1. Installer pnpm

    ```bash
    npm i -g pnpm@9.12.3
    ```

1. Installer les dépendances

    ```bash
    pnpm i
    ```

1. Exécuter des commandes avec `nx` 

    ```bash
    # Construire le package i18n-cli
    pnpm nx build @gravity-ui/i18n-cli

    # Exécuter la vérification de type pour le package i18n-cli
    pnpm nx typecheck @gravity-ui/i18n-cli

    # Exécuter le linting pour tous les packages
    pnpm nx run-many --target=lint --parallel
    ```