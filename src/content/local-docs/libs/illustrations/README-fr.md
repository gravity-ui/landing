# @gravity-ui/illustrations &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/illustrations)](https://www.npmjs.com/package/@gravity-ui/illustrations) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/illustrations/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/illustrations/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/illustrations/)

## Installation

```shell
npm install --save-dev @gravity-ui/illustrations
```

## Utilisation

### React

#### Préparation

Configurez le thème des illustrations. Suivez l'une des étapes suivantes :

##### Définir les css-tokens avec votre propre palette de couleurs

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

##### Utiliser les mixins avec le thème gravity par défaut en scss

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

Pour mettre à jour les illustrations conformément au nouveau design, modifiez le contenu des fichiers svg dans le thème clair (`<racine-de-ce-dépôt>/svgs/<nom-illustration>-light.svg`) puis exécutez la commande :

```shell
npm run generate
```

## Licence

Distribué sous la licence MIT. Voir [LICENSE](LICENSE) pour plus de détails.

## Pour les agents IA

Un ensemble thématique d'illustrations SVG plates (états vides, erreurs, non trouvées, etc.) pour les applications Gravity UI — utilisez-le lorsque vous avez besoin d'illustrations prêtes à l'emploi et conscientes du thème, plutôt que de dessiner les vôtres ou d'utiliser des icônes simples.

### Quand l'utiliser

- États vides, pages 404/erreurs, ou espaces réservés d'intégration qui nécessitent une illustration cohérente, pas un contrôle d'interface utilisateur fonctionnel.
- Illustrations thématiques — les SVG répondent aux tokens de thème Gravity (clair/sombre, contraste élevé) via des mixins SCSS ou des variables CSS.
- Importation d'illustrations en tant que composants React (par défaut) ou en tant que fichiers `.svg` bruts.

### Quand ne pas l'utiliser

- Pour l'iconographie fonctionnelle de l'interface utilisateur (chevrons, coches, boutons), utilisez [`@gravity-ui/icons`](https://gravity-ui.com/icons) — les illustrations sont des œuvres décoratives, pas des glyphes d'interface utilisateur.
- Pour une seule illustration ponctuelle que vous possédez déjà en tant qu'actif, importez cet actif directement plutôt que d'inclure ce package.

### Pièges courants

- **Rendu sans importation de thème** — les illustrations apparaissent sans couleur à moins que vous n'importiez `@gravity-ui/illustrations/styles/styles.scss` (ou que vous ne définissiez les tokens CSS `--gil-color-*`).
- **Noms d'exportation par défaut halluciné** — les composants d'illustration sont des exportations nommées en PascalCase (par exemple, `NotFound`), importées de la racine du package ou par fichier (`@gravity-ui/illustrations/NotFound`).
- **Importation de `.svg` directement dans un bundler non configuré** — les importations SVG brutes nécessitent un loader approprié ; préférez l'exportation de composant React pour éviter la configuration du bundler.

## Documentation pour les agents IA

La documentation lisible par agent pour la version installée se trouve dans `node_modules/@gravity-ui/illustrations/docs/INDEX.md`.