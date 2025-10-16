# 🌍 Gravity-UI i18n Tools

Este repositorio contiene utilidades, bibliotecas y plugins comunes utilizados para i18n en Gravity-UI.

## Enlaces Útiles

- [Proyecto de Ejemplo](./example/README.md)

## Bibliotecas

| Nombre                                                    | Descripción                                                         | Última Versión                                                |
|-------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|
| [i18n-core](./packages/i18n-core/README.md)                 | Biblioteca principal de i18n. Wrapper alrededor de FormatJS.                  |  |
| [i18n-react](./packages/i18n-react/README.md)               | Biblioteca de i18n para aplicaciones cliente de React.              |  |
| [i18n-node](./packages/i18n-node/README.md)                 | Biblioteca de i18n para aplicaciones de servidor.                        |  |
| [eslint-plugin-i18n](./packages/eslint-plugin-i18n/README.md) | Reglas de linting de ESLint.                                       |  |
| [i18n-cli](./packages/i18n-cli/README.md)                   | Herramienta para operaciones con archivos de idioma.                   |  |
| [i18n-babel-plugin](./packages/i18n-babel-plugin/README.md) | Plugin de Babel para optimizar la entrega de archivos de idioma.           |  |
| [i18n-optimize-plugin](./packages/i18n-optimize-plugin/README.md) | Plugin de Webpack/Rspack para optimizar la entrega de archivos de idioma. |  |
| [vscode-extension](./packages/vscode-extension/README.md) | Extensión de VS Code para crear archivos de localización | |

## Desarrollo

1. Instala pnpm

    ```bash
    npm i -g pnpm@9.12.3
    ```

1. Instala las dependencias

    ```bash
    pnpm i
    ```

1. Ejecuta comandos con `nx` 

    ```bash
    # Compila el paquete i18n-cli
    pnpm nx build @gravity-ui/i18n-cli

    # Ejecuta la verificación de tipos para el paquete i18n-cli
    pnpm nx typecheck @gravity-ui/i18n-cli

    # Ejecuta el linting para todos los paquetes
    pnpm nx run-many --target=lint --parallel
    ```