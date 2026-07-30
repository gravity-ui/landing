# @gravity-ui/illustrations &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/illustrations)](https://www.npmjs.com/package/@gravity-ui/illustrations) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/illustrations/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/illustrations/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/illustrations/)

## Instalación

```shell
npm install --save-dev @gravity-ui/illustrations
```

## Uso

### React

#### Preparación

Configura el tema de las ilustraciones. Realiza cualquiera de los siguientes pasos:

##### Definición de css-tokens con paleta de colores propia

Define los siguientes css-tokens en tu aplicación:

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

##### Uso de mixins con el tema predeterminado de Gravity en scss

Utiliza los siguientes mixins para estilizar las ilustraciones en diferentes temas:

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

##### Alternativa para proyectos con el tema de Gravity preinstalado

Alternativamente, si `@gravity-ui/uikit` ya está instalado en el proyecto y se utiliza el tema predeterminado, puedes simplemente importar `styles.scss` en el archivo raíz con los estilos de tu proyecto:

```scss
// Definición de estilos de Gravity existente
import '@gravity-ui/uikit/styles/styles.css';
// Simplemente añade otra importación debajo
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

> Es posible que necesites un cargador adecuado para esto

```js
import notFound from '@gravity-ui/illustrations/svgs/not-found-light.svg';
```

### Desarrollo

Para actualizar las ilustraciones según el nuevo diseño, cambia el contenido de los svg en el tema claro (archivos `<this-repository-root>/svgs/<illustration-name>-light.svg`) y luego ejecuta el comando:

```shell
npm run generate
```

## Licencia

Distribuido bajo la Licencia MIT. Consulta [LICENSE](LICENSE) para más detalles.

## Para agentes de IA

Un conjunto temático de ilustraciones SVG planas (estados