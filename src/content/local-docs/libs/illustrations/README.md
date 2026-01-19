# @gravity-ui/illustrations &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/illustrations)](https://www.npmjs.com/package/@gravity-ui/illustrations) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/illustrations/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/illustrations/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/illustrations/)

## Installation

```shell
npm install --save-dev @gravity-ui/illustrations
```

## Usage

### React

#### Preparation

Setup illustrations theme. Execute any of the following steps:

##### Defining css-tokens with own colors pallete

Define following css-tokens in app:

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

##### Using mixins with default gravity-theme in scss

Use the following mixins for styling illustrations in different themes

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

##### Alternative for projects with pre-installed gravity theme

Alternatively, if `@gravity-ui/uikit` is already installed in the project and default theme is used, you can just import `styles.scss` to the root file with styles in your project:

```scss
// existing gravity styles definition
import '@gravity-ui/uikit/styles/styles.css';
// just add one more import below
import '@gravity-ui/illustrations/styles/styles.scss';
```

#### Components usage

```js
import NotFound from '@gravity-ui/illustrations/NotFound';
```

or

```js
import {NotFound} from '@gravity-ui/illustrations';
```

### SVG

> You might need an appropriate loader for this

```js
import notFound from '@gravity-ui/illustrations/svgs/not-found-light.svg';
```

### Development

For updating illustrations according to new design, change the content of svg-s in light theme (`<this-repository-root>/svgs/<illustration-name>-light.svg` files) and then run command:

```shell
npm run generate
```

