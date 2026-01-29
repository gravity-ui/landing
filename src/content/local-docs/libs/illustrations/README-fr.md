# @gravity-ui/illustrations &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/illustrations)](https://www.npmjs.com/package/@gravity-ui/illustrations) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/illustrations/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/illustrations/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/illustrations/)

## Installation

```shell
npm install --save-dev @gravity-ui/illustrations
```

## Utilisation

### React

#### Préparation

Configurez le thème des illustrations. Suivez l'une des étapes suivantes :

##### Définir des css-tokens avec votre propre palette de couleurs

Définissez les css-tokens suivants dans votre application :

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

##### Utiliser des mixins avec le thème gravity par défaut en scss

Utilisez les mixins suivants pour styliser les illustrations dans différents thèmes :

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

##### Alternative pour les projets avec le thème gravity pré-installé

Alternativement, si `@gravity-ui/uikit` est déjà installé dans le projet et que le thème par défaut est utilisé, vous pouvez simplement importer `styles.scss` dans le fichier racine de vos styles :

```scss
// définition existante des styles gravity
import '@gravity-ui/uikit/styles/styles.css';
// ajoutez simplement une autre importation ci-dessous
import '@gravity-ui/illustrations/styles/styles.scss';
```

#### Utilisation des composants

```js
import NotFound from '@gravity-ui/illustrations/NotFound';
```

ou

```js
import {NotFound} from '@gravity-ui/illustrations';
```

### SVG

> Vous pourriez avoir besoin d'un loader approprié pour cela

```js
import notFound from '@gravity-ui/illustrations/svgs/not-found-light.svg';
```

### Développement

Pour mettre à jour les illustrations conformément au nouveau design, modifiez le contenu des fichiers svg dans le thème clair (`<racine-de-ce-dépôt>/svgs/<nom-de-l-illustration>-light.svg`) puis exécutez la commande :

```shell
npm run generate
```