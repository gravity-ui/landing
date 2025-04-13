# @gravity-ui/illustrations &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/illustrations)](https://www.npmjs.com/package/@gravity-ui/illustrations) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/illustrations/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/illustrations/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/illustrations/)

## Instalación

```shell
npm install --save-dev @gravity-ui/illustrations
```

## Uso

### Reacciona

#### Preparación

Configurar el tema de las ilustraciones. Ejecute cualquiera de los pasos siguientes:

##### Definición de fichas CSS con su propia paleta de colores

Defina los siguientes css-tokens en la aplicación:

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

##### Uso de mezclas con el tema de gravedad predeterminado en scss

Usa los siguientes mixins para diseñar ilustraciones en diferentes temas

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

##### Alternativa para proyectos con tema de gravedad preinstalado

Alternativamente, si ya `@gravity-ui/uikit` está instalado en el proyecto y se usa el tema predeterminado, puedes simplemente importarlo `styles.scss` al archivo raíz con los estilos de tu proyecto:

```scss
// existing gravity styles definition
import '@gravity-ui/uikit/styles/styles.css';
// just add one more import below
import '@gravity-ui/illustrations/styles/styles.scss';
```

#### Uso de componentes

```js
import NotFound from '@gravity-ui/illustrations/NotFound';
```

o

```js
import {NotFound} from '@gravity-ui/illustrations';
```

### SVG

> Es posible que necesite un cargador adecuado para esto

```js
import notFound from '@gravity-ui/illustrations/svgs/not-found-light.svg';
```

### Desarrollo

Para actualizar las ilustraciones de acuerdo con el nuevo diseño, cambie el contenido de svg-s en el tema light (`archivos`<this-repository-root>/svgs/<illustration-name>-light.svg) y, a continuación, ejecute el comando:

```shell
npm run generate
```
