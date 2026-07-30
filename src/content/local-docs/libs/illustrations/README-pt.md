# @gravity-ui/illustrations &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/illustrations)](https://www.npmjs.com/package/@gravity-ui/illustrations) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/illustrations/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/illustrations/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/illustrations/)

## Instalação

```shell
npm install --save-dev @gravity-ui/illustrations
```

## Uso

### React

#### Preparação

Configure o tema das ilustrações. Execute qualquer um dos seguintes passos:

##### Definindo tokens CSS com paleta de cores própria

Defina os seguintes tokens CSS na sua aplicação:

```scss
--gil-color-object-base: rgb(255, 190, 92);
--gil-color-object-accent-heavy: rgb(211, 101, 7);
--gil-color-object-hightlight: rgb(255, 216, 157);
--gil-color-shadow-over-object: rgb(211, 158, 80);
--gil-color-background-lines: rgb(140, 140, 140);
--gil-color-background-shapes: rgb(242, 242, 242);
--gil-color-object-accent-light: rgb(255, 255, 255);
--gil-color-object-danger: rgb(255, 0, 61);
```

##### Usando mixins com o tema padrão do Gravity em SCSS

Use os seguintes mixins para estilizar ilustrações em diferentes temas:

```scss
@import '@gravity-ui/illustrations/styles/theme.scss';

.g-root {
  &_theme_light {
    @include g-illustrations-colors-light;
  }

  &_theme_light-hc {
    @include g-illustrations-colors-light-hc;
  }

  &_theme_dark {
    @include g-illustrations-colors-dark;
  }

  &_theme_dark-hc {
    @include g-illustrations-colors-dark-hc;
  }
}
```

##### Alternativa para projetos com tema Gravity pré-instalado

Alternativamente, se `@gravity-ui/uikit` já estiver instalado no projeto e o tema padrão for usado, você pode simplesmente importar `styles.scss` no arquivo raiz com os estilos do seu projeto:

```scss
// definição de estilos Gravity existente
import '@gravity-ui/uikit/styles/styles.css';
// apenas adicione mais uma importação abaixo
import '@gravity-ui/illustrations/styles/styles.scss';
```

#### Uso de componentes

```js
import NotFound from '@gravity-ui/illustrations/NotFound';
```

ou

```js
import {NotFound} from '@gravity-ui/illustrations';
```

### SVG

> Você pode precisar de um loader apropriado para isso

```js
import notFound from '@gravity-ui/illustrations/svgs/not-found-light.svg';
```

### Desenvolvimento

Para atualizar as ilustrações de acordo com o novo design, altere o conteúdo dos SVGs no tema claro (arquivos `<raiz-deste-repositório>/svgs/<nome-da-ilustracao>-light.svg`) e então execute o comando:

```shell
npm run generate
```

## Licença

Distribuído sob a Licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## Para agentes de IA

Um conjunto temático de ilustrações SVG planas (estados vazios, erros, não encontrados, etc.) para aplicativos Gravity UI — utilize-o quando precisar de arte pronta e consciente do tema em vez de desenhar a sua própria ou usar ícones simples.

### Quando usar

- Estados vazios, páginas 404/erro, ou placeholders de onboarding que precisam de uma ilustração consistente, não um controle de UI funcional.
- Arte temática — os SVGs respondem aos tokens de tema do Gravity (claro/escuro, alto contraste) via mixins SCSS ou variáveis CSS.
- Importando arte como componentes React (padrão) ou como arquivos `.svg` brutos.

### Quando não usar

- Para ícones de UI funcionais (setas, checks, botões), use [`@gravity-ui/icons`](https://gravity-ui.com/icons) — ilustrações são arte decorativa, não glifos de UI.
- Para uma única ilustração pontual que você já possui como um asset, importe esse asset diretamente em vez de incluir este pacote.

### Armadilhas comuns

- **Renderização sem importação de tema** — as ilustrações aparecem sem cor, a menos que você importe `@gravity-ui/illustrations/styles/styles.scss` (ou defina os tokens CSS `--gil-color-*`).
- **Nomes de exportação padrão alucinados** — os componentes de ilustração são exportações nomeadas em PascalCase (por exemplo, `NotFound`), importadas da raiz do pacote ou por arquivo (`@gravity-ui/illustrations/NotFound`).
- **Importar `.svg` diretamente em um bundler não configurado** — importações de SVG bruto precisam de um loader apropriado; prefira a exportação de componente React para evitar configuração de bundler.

## Documentação para agentes de IA

A documentação legível por agente para a versão instalada está localizada em `node_modules/@gravity-ui/illustrations/docs/INDEX.md`.