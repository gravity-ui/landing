# UIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![npm downloads](https://img.shields.io/npm/dm/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/ci.yml?query=branch:main) [![storybook tests](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/test-storybook.yml?label=Storybook%20Tests&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/test-storybook.yml) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/uikit/)

[English](README.md) | [Русский](README-ru.md)

Um conjunto de componentes React flexíveis, altamente práticos e eficientes para a criação de aplicações web ricas. Parte do sistema de design [Gravity UI](https://gravity-ui.com).

<!--GITHUB_BLOCK-->

![Imagem de capa](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/uikit_cover.png)

### ![Logo do Globo Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Logo do Globo Escuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [Website](https://gravity-ui.com) &nbsp;&nbsp; ![Logo da Documentação Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_light.svg#gh-light-mode-only) ![Logo da Documentação Escuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_dark.svg#gh-dark-mode-only) [Documentação](https://gravity-ui.com/components/uikit/alert) &nbsp;&nbsp; ![Logo do Figma Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_light.svg#gh-light-mode-only) ![Logo do Figma Escuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_dark.svg#gh-dark-mode-only) [Figma](<https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)>) &nbsp;&nbsp; ![Logo do Themer Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_light.svg#gh-light-mode-only) ![Logo do Themer Escuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_dark.svg#gh-dark-mode-only) [Themer](https://gravity-ui.com/themer) &nbsp;&nbsp; ![Logo do Storybook Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Logo do Storybook Escuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/uikit/) &nbsp;&nbsp; ![Logo da Comunidade Claro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Logo da Comunidade Escuro](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [Comunidade](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## Sobre

O UIKit é o pacote fundamental do sistema de design [Gravity UI](https://gravity-ui.com) — um conjunto testado em batalha com mais de 70 componentes React construídos para aplicações web de produção. Ele cuida das partes difíceis: temas, acessibilidade, layout RTL, renderização do lado do servidor e internacionalização, para que você possa focar na construção do seu produto.

Principais recursos:

- **Mais de 70 componentes** — inputs, overlays, exibição de dados, primitivas de layout, feedback e muito mais
- **Temas integrados** — variantes claras, escuras e de alto contraste com uma ferramenta [Themer](https://gravity-ui.com/themer) ao vivo para personalizar tokens
- **Suporte RTL** — direção completa do layout da direita para a esquerda

Navegue pelo catálogo completo de componentes no [Storybook](https://preview.gravity-ui.com/uikit/) ou na [documentação](https://gravity-ui.com/components/uikit/alert).

## Primeiros Passos

### Pré-requisitos

React 16.14, 17, 18 ou 19 deve estar instalado no seu projeto.

### Instalação

```shell
npm install @gravity-ui/uikit
```

## Uso

Importe componentes diretamente do pacote:

```jsx
import {Button} from '@gravity-ui/uikit';

const SubmitButton = (
  <Button view="action" size="l">
    Submit
  </Button>
);
```

### Estilos

Inclua os estilos base e as fontes uma vez no topo do ponto de entrada da sua aplicação:

```js
// index.js
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

Um arquivo SCSS com [mixins](styles/mixins.scss) e utilitários úteis também está disponível para uso em suas próprias folhas de estilo.

### Guias

Leia mais:

- [Temas](docs/theming.md) — habilite temas claros, escuros e de alto contraste
- [Renderização do lado do servidor](docs/server-side-rendering.md) — gere a classe CSS raiz no servidor
- [Internacionalização](docs/i18n.md) — defina o idioma dos componentes integrados

## Desenvolvimento

```shell
git clone git@github.com:gravity-ui/uikit.git
cd uikit
npm ci
npm run start   # inicia o Storybook em http://localhost:7007
```

Outros comandos úteis:

```shell
npm test              # executa testes unitários
npm run lint          # faz lint em JS, SCSS e Markdown
npm run typecheck     # verifica tipos do TypeScript
npm run playwright    # executa testes de regressão visual
```

## Mantenedores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/amje">
        <img src="https://github.com/amje.png?size=100" width="100" alt="amje" /><br />
        <sub><b>@amje</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ValeraS">
        <img src="https://github.com/ValeraS.png?size=100" width="100" alt="ValeraS" /><br />
        <sub><b>@ValeraS</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/korvin89">
        <img src="https://github.com/korvin89.png?size=100" width="100" alt="korvin89" /><br />
        <sub><b>@korvin89</b></sub>
      </a>
    </td>
  </tr>
</table>

## Contribuições

Suas contribuições são bem-vindas! Por favor, leia o [CONTRIBUTING.md](CONTRIBUTING.md) antes de enviar um pull request. Para diretrizes detalhadas de PR, consulte [contribute/pull-request.md](contribute/pull-request.md).

Temos [![contributors](https://img.shields.io/github/contributors/gravity-ui/uikit?label=contributors)](https://github.com/gravity-ui/uikit/graphs/contributors) contribuidores e contando — junte-se a nós!

Participe da comunidade no [Telegram](https://t.me/gravity_ui) para dúvidas e discussões.

## Licença

Distribuído sob a Licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## Para agentes de IA

A biblioteca base de componentes React e tokens de design para aplicativos Gravity UI — controles, entradas, overlays, layout e temas nos quais todos os outros pacotes `@gravity-ui/*` se baseiam.

### Quando usar

- UI padrão de aplicativos: botões, controles de formulário, modais e popups, menus, abas, rótulos, tipografia e primitivas de layout.
- A base de temas de um aplicativo Gravity UI: `ThemeProvider`, tokens de design e variáveis CSS que o restante do ecossistema `@gravity-ui/*` espera que estejam presentes.
- Dados tabulares simples através do componente `Table` integrado (seleção, ordenação, ações de linha).

### Quando não usar

- Grids de dados com muitos recursos (virtualização, redimensionamento de colunas, agrupamento, reordenação) — use [`@gravity-ui/table`](https://github.com/gravity-ui/table), um pacote headless separado. Ele **não** é o mesmo que o componente `Table` do uikit.
- Gráficos e visualização de dados — use [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) (`@gravity-ui/chartkit` é o wrapper legado).
- Estruturas de navegação de aplicativos (cabeçalho lateral, rodapé, logo) — use [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation).
- Seletores de data, calendários e controles de intervalo — use [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components).
- O próprio conjunto de ícones SVG — use [`@gravity-ui/icons`](https://github.com/gravity-ui/icons); o uikit apenas fornece o renderizador `Icon`.

### Armadilhas comuns

- A prop de estilo do `Button` é `view`, não `variant` ou `color`.
- **Componentes renderizam sem estilo sem configuração.** Envolva o aplicativo em `ThemeProvider` **e** importe `@gravity-ui/uikit/styles/styles.css` (mais `fonts.css`) uma vez no ponto de entrada — ambos são necessários.
- **`Icon` não tem a prop `name`.** Passe um componente de ícone importado através de `data`: `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} size={16} />`.
- **Os valores de `theme` são `light | dark | light-hc | dark-hc`.** Não existe `theme="default"`.

### Documentação útil

- [Componentes de layout e espaçamentos](./docs/layout.md)
- [Temas, Cores e Branding](./docs/theming.md)
- [Tipografia](./docs/typography.md)

## Documentação para agentes de IA

A documentação legível por agente para a versão instalada está localizada em `node_modules/@gravity-ui/uikit/build/docs/INDEX.md`.

## Histórico de Estrelas

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline" />
    <img alt="Star History Chart" width="600" src="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline" />
  </picture>
</div>

---

Se você achar o UIKit útil, considere dar uma ⭐ no [GitHub](https://github.com/gravity-ui/uikit) — isso ajuda outras pessoas a descobrirem o projeto.