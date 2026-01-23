# @gravity-ui/illustrations &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/illustrations)](https://www.npmjs.com/package/@gravity-ui/illustrations) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/illustrations/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/illustrations/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/illustrations/)

## Installation

```shell
npm install --save-dev @gravity-ui/illustrations
```

## Verwendung

### React

#### Vorbereitung

Richten Sie das Illustrations-Theme ein. Führen Sie einen der folgenden Schritte aus:

##### Definition von CSS-Tokens mit eigener Farbpalette

Definieren Sie folgende CSS-Tokens in Ihrer App:

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

##### Verwendung von Mixins mit dem Standard-Gravity-Theme in SCSS

Verwenden Sie die folgenden Mixins für das Styling von Illustrationen in verschiedenen Themes:

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

##### Alternative für Projekte mit vorinstalliertem Gravity-Theme

Alternativ, wenn `@gravity-ui/uikit` bereits im Projekt installiert ist und das Standard-Theme verwendet wird, können Sie einfach `styles.scss` in die Stammdatei mit den Styles Ihres Projekts importieren:

```scss
// bestehende Gravity-Styles-Definition
import '@gravity-ui/uikit/styles/styles.css';
// fügen Sie einfach einen weiteren Import darunter hinzu
import '@gravity-ui/illustrations/styles/styles.scss';
```

#### Komponentenverwendung

```js
import NotFound from '@gravity-ui/illustrations/NotFound';
```

oder

```js
import {NotFound} from '@gravity-ui/illustrations';
```

### SVG

> Möglicherweise benötigen Sie einen geeigneten Loader dafür.

```js
import notFound from '@gravity-ui/illustrations/svgs/not-found-light.svg';
```

### Entwicklung

Um Illustrationen gemäß dem neuen Design zu aktualisieren, ändern Sie den Inhalt der SVGs im Light-Theme (`<dieses-Repository-Root>/svgs/<illustrationsname>-light.svg`-Dateien) und führen Sie dann den Befehl aus:

```shell
npm run generate
```