# @gravity-ui/illustrations &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/illustrations)](https://www.npmjs.com/package/@gravity-ui/illustrations) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/illustrations/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/illustrations/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/illustrations/)

## Instalação

```shell
npm install --save-dev @gravity-ui/illustrations
```

## Uso

### React

#### Preparação

Configure o tema das ilustrações. Execute qualquer um dos seguintes passos:

##### Definindo css-tokens com sua própria paleta de cores

Defina os seguintes css-tokens no seu aplicativo:

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

##### Usando mixins com o tema gravity padrão em scss

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

##### Alternativa para projetos com tema gravity pré-instalado

Alternativamente, se `@gravity-ui/uikit` já estiver instalado no projeto e o tema padrão for usado, você pode simplesmente importar `styles.scss` para o arquivo raiz com os estilos do seu projeto:

```scss
// definição de estilos gravity existente
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

Para atualizar as ilustrações de acordo com o novo design, altere o conteúdo dos svgs no tema claro (arquivos `<raiz-deste-repositório>/svgs/<nome-da-ilustracao>-light.svg`) e então execute o comando:

```shell
npm run generate
```