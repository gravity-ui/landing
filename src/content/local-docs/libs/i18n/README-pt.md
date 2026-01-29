# 🌍 Gravity-UI i18n Tools

Este repositório contém utilitários, bibliotecas e plugins comuns usados para i18n no Gravity-UI.

## Links Úteis

- [Projeto de Exemplo](./example/README.md)

## Bibliotecas

| Nome                                                    | Descrição                                                         | Versão                                                |
|-------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|
| [i18n](./packages/i18n/README.md)                 | Biblioteca i18n leve.                  |  <a href="https://npmjs.com/package/@gravity-ui/i18n-core"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-react](./packages/i18n-react/README.md)               | Biblioteca i18n para aplicações cliente React (Sintaxe de Mensagens ICU).              |  <a href="https://npmjs.com/package/@gravity-ui/i18n-react"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-react?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-node](./packages/i18n-node/README.md)                 | Biblioteca i18n para aplicações servidor (Sintaxe de Mensagens ICU).                        |  <a href="https://npmjs.com/package/@gravity-ui/i18n-node"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-node?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [eslint-plugin-i18n](./packages/eslint-plugin-i18n/README.md) | Regras ESLint para i18n.                                       |  <a href="https://npmjs.com/package/@gravity-ui/eslint-plugin-i18n"><img src="https://img.shields.io/npm/v/@gravity-ui/eslint-plugin-i18n?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-cli](./packages/i18n-cli/README.md)                   | Ferramenta para operações com arquivos de idioma.                   |  <a href="https://npmjs.com/package/@gravity-ui/i18n-cli"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-cli?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-babel-plugin](./packages/i18n-babel-plugin/README.md) | Plugin Babel para otimizar a entrega de arquivos de idioma.           |  <a href="https://npmjs.com/package/@gravity-ui/i18n-babel-plugin"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-babel-plugin?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [i18n-optimize-plugin](./packages/i18n-optimize-plugin/README.md) | Plugin Webpack/Rspack para otimizar a entrega de arquivos de idioma. |  <a href="https://npmjs.com/package/@gravity-ui/i18n-optimize-plugin"><img src="https://img.shields.io/npm/v/@gravity-ui/i18n-optimize-plugin?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a> |
| [vscode-extension](./packages/vscode-extension/README.md) | Extensão VS Code para criar arquivos de localização | |

## Desenvolvimento

1. Instale o pnpm

    ```bash
    npm run install:global
    ```

1. Instale as dependências

    ```bash
    pnpm i
    ```

1. Execute comandos com `nx`

    ```bash
    # Construa o pacote i18n-cli
    pnpm nx build @gravity-ui/i18n-cli

    # Execute a verificação de tipos para o pacote i18n-cli
    pnpm nx typecheck @gravity-ui/i18n-cli

    # Execute o lint para todos os pacotes
    pnpm nx run-many --target=lint --parallel
    ```