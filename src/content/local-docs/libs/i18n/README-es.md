# 🌍 Gravity-UI i18n Tools

Este repositorio contiene utilidades, bibliotecas y plugins comunes utilizados para i18n en Gravity-UI.

## Enlaces Útiles

- [Proyecto de Ejemplo](./example/README.md)

## Bibliotecas

| Nombre                                                    | Descripción                                                         | Versión                                                |
|-------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|
| [i18n](./packages/i18n/README.md)                 | Biblioteca i18n ligera.                  |  <a href="https://npmjs.com/package/@gravity-ui/i18n-core"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-react](./packages/i18n-react/README.md)               | Biblioteca i18n para aplicaciones cliente de React (Sintaxis de Mensajes ICU).              |  <a href="https://npmjs.com/package/@gravity-ui/i18n-react"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-react?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-node](./packages/i18n-node/README.md)                 | Biblioteca i18n para aplicaciones de servidor (Sintaxis de Mensajes ICU).                        |  <a href="https://npmjs.com/package/@gravity-ui/i18n-node"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-node?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [eslint-plugin-i18n](./packages/eslint-plugin-i18n/README.md) | Reglas de ESLint para i18n.                                       |  <a href="https://npmjs.com/package/@gravity-ui/eslint-plugin-i18n"><img src="https://img.shields.io/npm/v/@gravity-ui/eslint-plugin-i18n?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-cli](./packages/i18n-cli/README.md)                   | Herramienta para operaciones con archivos de idioma.                   |  <a href="https://npmjs.com/package/@gravity-ui/i18n-cli"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-cli?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-babel-plugin](./packages/i18n-babel-plugin/README.md) | Plugin de Babel para optimizar la entrega de archivos de idioma.           |  <a href="https://npmjs.com/package/@gravity-ui/i18n-babel-plugin"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-babel-plugin?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-optimize-plugin](./packages/i18n-optimize-plugin/README.md) | Plugin de Webpack/Rspack para optimizar la entrega de archivos de idioma. |  <a href="https://npmjs.com/package/@gravity-ui/i18n-optimize-plugin"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-optimize-plugin?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
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

    # Ejecuta el lint para todos los paquetes
    pnpm nx run-many --target=lint --parallel
    ```