# Gravity UI Charts · [![npm package](https://img.shields.io/npm/v/@gravity-ui/charts)](https://www.npmjs.com/package/@gravity-ui/charts) [![License](https://img.shields.io/github/license/gravity-ui/charts)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/charts/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/charts/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/charts/)

Bibliothèque de graphiques React avec plus de 10 types de graphiques : aire, barres, lignes, secteurs, nuage de points, arbre, et plus encore.

## Installation

```shell
npm install @gravity-ui/uikit @gravity-ui/charts
```

`@gravity-ui/uikit` est une dépendance pair requise — elle fournit le thème et les styles dont les graphiques dépendent.

## Utilisation

Importez les styles de `@gravity-ui/uikit` une seule fois dans votre point d'entrée, enveloppez votre application dans `ThemeProvider`, et affichez un `Chart` à l'intérieur d'un conteneur avec une hauteur explicite :

```tsx
import {ThemeProvider} from '@gravity-ui/uikit';
import {Chart} from '@gravity-ui/charts';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

const data = {
  series: {
    data: [
      {
        type: 'line',
        name: 'Temperature',
        data: [
          {x: 0, y: 10},
          {x: 1, y: 25},
          {x: 2, y: 18},
          {x: 3, y: 30},
        ],
      },
    ],
  },
};

export default function App() {
  return (
    <ThemeProvider theme="light">
      <div style={{height: 300}}>
        <Chart data={data} />
      </div>
    </ThemeProvider>
  );
}
```

`Chart` s'adapte à la taille de son parent, donc l'élément enveloppant doit avoir une hauteur.

## Documentation

- [Vue d'ensemble](https://gravity-ui.github.io/charts/pages/overview.html)
- [Démarrage](https://gravity-ui.github.io/charts/pages/get-started.html)
- [Développement](https://gravity-ui.github.io/charts/pages/development.html)
- [API](https://gravity-ui.github.io/charts/pages/api/overview.html)
- [Guides](https://gravity-ui.github.io/charts/pages/guides/tooltip.html)

## Licence

Distribué sous la licence MIT. Voir [LICENSE](LICENSE) pour les détails.

## Pour les agents IA

Une bibliothèque de graphiques déclarative pour React, destinée aux applications Gravity UI — affiche des graphiques linéaires, en aire, à barres, circulaires, en nuage de points, en arbre, et d'autres, à partir d'une seule configuration `data`, avec un thème assorti au reste de l'application.

### Quand l'utiliser

- Graphiques d'entreprise standards : `line`, `area`, `bar-x`/`bar-y`, `pie`, `scatter`, `treemap`, `waterfall`, `sankey`, `radar`, `heatmap`, `funnel`, `x-range`.
- Visualisations qui doivent suivre le thème Gravity UI (clair/sombre) et partager des jetons avec une application `@gravity-ui/uikit`.
- Affichage d'un graphique à partir de données déclaratives plutôt que d'un dessin impératif.

### Quand ne pas l'utiliser

- Projets encore sur `@gravity-ui/chartkit` — il s'agit de l'ancien wrapper basé sur des adaptateurs (YAGR/Highcharts/D3) ; ce package est le moteur de rendu autonome moderne et n'est pas un remplacement direct.
- Données tabulaires brutes — utilisez [`@gravity-ui/table`](https://github.com/gravity-ui/table).
- Rendu non-React ou uniquement côté serveur — `Chart` rend des SVG React et nécessite le DOM.

### Pièges courants

- **Le composant est `Chart`, pas `ChartKit`.** Importez `{Chart}` depuis `@gravity-ui/charts` ; `ChartKit` appartient au package distinct et hérité `@gravity-ui/chartkit`.
- **La prop `data` est `data`, structurée `{series: {data: [...]}}`.** Chaque entrée dans `series.data` représente une série avec son propre `type` et son tableau `data` — il n'y a pas de tableau de séries de niveau supérieur.
- **Rien ne s'affiche sans un conteneur dimensionné.** `Chart` remplit son parent, donc donnez une hauteur explicite au wrapper.
- **Configuration uikit requise.** Enveloppez dans `ThemeProvider` et importez `@gravity-ui/uikit/styles/styles.css` ; `@gravity-ui/uikit` est une dépendance pair requise.

### Documentation utile

- [Démarrage](./docs/diplodoc/pages/get-started.md)
- [Thématisation](./docs/diplodoc/pages/guides/theming.md)
- [Info-bulle](./docs/diplodoc/pages/guides/tooltip.md)
- [Légende](./docs/diplodoc/pages/guides/legend.md)
- [Contenu HTML](./docs/diplodoc/pages/guides/html.md)
- [Formatage des valeurs](./docs/diplodoc/pages/guides/value-formatting.md)
- [Étiquettes de données](./docs/diplodoc/pages/guides/data-labels.md)
- [Types d'axes](./docs/diplodoc/pages/guides/axis-types.md)

## Documentation pour les agents IA

La documentation lisible par agent pour la version installée se trouve dans `node_modules/@gravity-ui/charts/dist/docs/INDEX.md`.