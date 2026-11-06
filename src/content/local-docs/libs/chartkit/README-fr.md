# Gravity UI ChartKit · [![npm package](https://img.shields.io/npm/v/@gravity-ui/chartkit)](https://www.npmjs.com/package/@gravity-ui/chartkit) [![License](https://img.shields.io/github/license/gravity-ui/ChartKit)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/ChartKit/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/chartkit/)

Composant React basé sur des plugins qui rend des graphiques à partir de plusieurs bibliothèques de graphiques, telles que Gravity Charts et Yagr, via une API ChartKit unique, avec des infobulles adaptées aux mobiles et un support de plugins personnalisés. Vous enregistrez un ou plusieurs plugins et affichez les graphiques via `<ChartKit type="..." data={...} />` — ChartKit distribue automatiquement au bon rendu.

Chaque rendu de plugin est chargé de manière différée, de sorte que le code de la bibliothèque sous-jacente n'est téléchargé que lorsque ChartKit est effectivement rendu dans l'interface utilisateur. ChartKit gère également l'affichage des infobulles adaptées aux mobiles dès la sortie de la boîte. Vous pouvez utiliser les plugins intégrés ou implémenter les vôtres.

**Quand l'utiliser :**

- Vous avez besoin de graphiques déclaratifs modernes (`gravity-charts`) ou de graphiques de séries temporelles / de surveillance (`yagr`)
- Vous avez besoin de plusieurs types de graphiques sous une API cohérente unique
- Vous voulez des graphiques qui suivent le même thème clair/sombre que le reste de votre interface utilisateur dès la sortie de la boîte

**Quand ne pas l'utiliser :**

- Vous n'avez besoin que d'une bibliothèque de graphiques spécifique — préférez utiliser [@gravity-ui/charts](https://github.com/gravity-ui/charts) directement

## Table des matières

- [Démarrage](#getting-started)
- [Mise à jour des packages de graphiques](#updating-charting-packages)
- [Développement](#development)

## Démarrage

### Prérequis

- React 18 ou 19
- [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) 8 — dépendance pair requise (fournit le thème et les primitives d'interface utilisateur)

### Installation

```shell
npm install @gravity-ui/chartkit @gravity-ui/uikit
```

### Styles

Importez les styles de `@gravity-ui/uikit` dans votre point d'entrée :

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

Pour des détails complets sur la configuration, consultez le [guide des styles uikit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles).

### Utilisation de base

ChartKit utilise un registre global de plugins. Appelez `settings.set` une fois à votre point d'entrée d'application pour enregistrer les plugins dont vous avez besoin. Lorsque `<ChartKit type="..." />` est rendu, il recherche le plugin correspondant — si aucun n'est trouvé, une erreur est levée. Le rendu de chaque plugin est un composant `React.lazy`, son code est donc récupéré uniquement lorsque ChartKit apparaît pour la première fois dans l'interface utilisateur.

Vous pouvez enregistrer plusieurs plugins à la fois :

```ts
settings.set({plugins: [GravityChartsPlugin, YagrPlugin]});
```

Ou appelez `settings.set` plusieurs fois — il fusionne la liste des plugins au lieu de la remplacer.

**Exemple de base :**

```tsx
import {Provider} from '@gravity-ui/uikit';
import ChartKit, {settings} from '@gravity-ui/chartkit';
import {GravityChartsPlugin} from '@gravity-ui/chartkit/gravity-charts';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

settings.set({plugins: [GravityChartsPlugin]});

const data = {
  series: {
    data: [
      {
        type: 'line',
        name: 'Series',
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
    <Provider theme="light">
      <div style={{height: 300}}>
        <ChartKit type="gravity-charts" data={data} />
      </div>
    </Provider>
  );
}
```

`ChartKit` s'adapte à la taille de son parent — assurez-vous que le conteneur a une hauteur explicite.

### SplitTooltip

La disposition d'infobulle en panneau divisé que `gravity-charts` utilise sur les appareils tactiles (`tooltip={{splitted: true}}`) est également disponible en tant que composant autonome. Il fonctionne avec n'importe quel contenu : il rend le panneau principal et le panneau d'infobulle côte à côte (ou empilés, selon la taille du conteneur) avec un redimensionneur déplaçable entre les deux.

```tsx
import {SplitTooltip} from '@gravity-ui/chartkit';

export function Panel() {
  return (
    <div style={{height: 400}}>
      <SplitTooltip
        renderMainPane={() => <MyVisualization />}
        renderTooltip={() => <MyTooltipContent />}
      />
    </div>
  );
}
```

Consultez le type `SplitTooltipProps` pour le contrôle de la disposition, le dimensionnement des panneaux et les options du redimensionneur.

## Mise à jour des packages de graphiques

ChartKit regroupe deux bibliothèques de graphiques Gravity UI comme dépendances :

- [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) — alimente le plugin `gravity-charts`
- [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) — alimente le plugin `yagr`

Si vous avez besoin d'une version plus récente de l'un de ces packages, ouvrez une demande de mise à jour de package [Package update request](https://github.com/gravity-ui/ChartKit/issues/new?template=package-update-request.yml) et sélectionnez le(s) package(s) dont vous avez besoin. Les mainteneurs mettront à jour les packages sélectionnés et publieront la mise à jour.

### Mise à niveau depuis ChartKit 8

Consultez le [guide de migration](docs/migration-to-v9.md) : uikit 8 et React 18+, les notes sur la compilation CommonJS/ESM et `moduleResolution` de TypeScript, ainsi que les changements de données `gravity-charts` qui accompagnent `@gravity-ui/charts` 2.

## Développement

### Prérequis

- [Node.js](https://nodejs.org/) 22 (voir [.nvmrc](https://github.com/gravity-ui/ChartKit/blob/main/.nvmrc))
- [npm](https://www.npmjs.com/) 10 ou version ultérieure

### Configuration

Clonez le dépôt et installez les dépendances :

```shell
git clone https://github.com/gravity-ui/ChartKit.git
cd ChartKit
npm ci
```

### Lancement de Storybook

```shell
npm run start
```

Storybook sera disponible à l'adresse `http://localhost:7007`.

### Développement avec une dépendance locale

Pour travailler sur une dépendance (par exemple `@gravity-ui/charts`) et voir vos modifications en direct dans Storybook sans publier sur npm :

**1. Lier le package local**

```shell
# Dans votre clone local de @gravity-ui/charts :
git clone https://github.com/gravity-ui/charts.git
cd charts
npm ci
# faites vos modifications
npm run build
npm link

# Dans ChartKit :
npm link @gravity-ui/charts
```

**2. Configurer la surveillance du package local**

Créez un fichier `.env.local` à la racine de ChartKit (il est ignoré par Git) :

```shell
LOCAL_PKG=@gravity-ui/charts
```

Cela indique à Vite de surveiller ce package dans `node_modules` et de sauter son pré-bundling. Après avoir reconstruit `@gravity-ui/charts`, Storybook se rechargera à chaud automatiquement.

Pour plusieurs packages, utilisez une liste séparée par des virgules :

```shell
LOCAL_PKG=@gravity-ui/charts,@gravity-ui/uikit
```

**3. Lancez Storybook**

```shell
npm run start
```

**4. Restaurez le package d'origine**

Lorsque vous avez terminé :

1. Commentez `LOCAL_PKG` dans `.env.local`
2. Exécutez `npm install` dans ChartKit — cela remplace le lien symbolique par la version du registre

```shell
# Dans ChartKit :
npm ci
```

### Exécution des tests

```shell
npm test
```

Pour vérifier le package construit, construisez-le d'abord. La vérification charge les builds CommonJS et ESM dans Node, compare leurs exportations et effectue une vérification de type d'un consommateur sous les résolutions de module `nodenext`, `bundler` et `node` :

```shell
npm run build
npm run test:build
```

Les tests de régression visuelle s'exécutent dans Docker pour garantir des captures d'écran cohérentes entre les environnements :

```shell
npm run test:docker
```

Pour mettre à jour les captures d'écran de référence après des modifications intentionnelles de l'interface utilisateur :

```shell
npm run test:docker:update
```

### Contribution

Veuillez vous référer au [guide de contribution](CONTRIBUTING.md) avant de soumettre une pull request.

## Licence

Distribué sous la licence MIT. Voir [LICENSE](LICENSE) pour les détails.

## Pour les agents IA

Un composant React basé sur des plugins qui rend des graphiques à partir de plusieurs bibliothèques de graphiques, telles que Gravity Charts et Yagr, via une seule API `<ChartKit type="..." data={...} />`, chargeant chaque bibliothèque uniquement lorsque son type de graphique est rendu.

### Quand l'utiliser

- Rendre plus d'un moteur de graphique sous un composant cohérent : `gravity-charts` (graphiques SVG déclaratifs via [`@gravity-ui/charts`](https://github.com/gravity-ui/charts)) et `yagr` (séries temporelles basées sur uPlot via [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr)).
- Chargement différé des bundles de graphiques — le rendu de chaque plugin est `React.lazy`, donc le code d'une bibliothèque n'est récupéré que lorsque son type de graphique est réellement affiché.
- Tooltips adaptés aux mobiles prêts à l'emploi — le graphique et son tooltip sont affichés dans des panneaux divisés redimensionnables au lieu d'une popup au survol ; pour `gravity-charts`, activez-le avec `<ChartKit type="gravity-charts" tooltip={{splitted: true}} />`.
- Utiliser la disposition du tooltip en panneau divisé de manière autonome — `SplitTooltip` est un composant autonome exporté de l'entrée racine : passez `renderMainPane` et `renderTooltip`, et il les dispose en panneaux redimensionnables (verticalement ou horizontalement, choisis en fonction de la taille du conteneur) pour n'importe quel contenu, pas seulement les graphiques ChartKit.
- Écrire votre propre plugin — enregistrez `{type, renderer}` via `settings.set({plugins: [...]})`, où `renderer` est un composant `React.lazy` ; ChartKit lui délègue par `type` exactement comme aux plugins intégrés.
- Thèmes clairs/sombres cohérents pour tous les moteurs de graphique prêts à l'emploi — les graphiques suivent le thème `@gravity-ui/uikit` de l'application environnante.

### Quand ne pas l'utiliser

- Pour un seul type de graphique, importez directement [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) (général) ou [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) (séries temporelles haute performance) — le registre des plugins représente une surcharge pour un seul moteur.
- Pour composer une grille de tableau de bord de widgets, utilisez [`@gravity-ui/dashkit`](https://github.com/gravity-ui/dashkit) — ChartKit rend un graphique ; DashKit organise de nombreux widgets.

### Pièges courants

- **Rendre `<ChartKit>` avant `settings.set({plugins: [...]})`** — le registre global des plugins doit être peuplé à l'entrée de l'application ; un `type` non enregistré provoque une erreur au moment du rendu.
- **Prop `chartType` / `library` hallucinée** — la prop de dispatch est `type` (par exemple, `type="gravity-charts"`), et les données sont `data`.
- **Importer des plugins depuis l'entrée racine** — les plugins résident dans des exportations de sous-chemins (par exemple, `@gravity-ui/chartkit/gravity-charts`, `@gravity-ui/chartkit/yagr`) ; l'entrée racine `@gravity-ui/chartkit` ne les réexporte pas.
- **Supposer une seule forme de `data` pour chaque `type`** — la forme dépend du plugin, par exemple `gravity-charts` prend `ChartData` de `@gravity-ui/charts` (`{series: {data: [...]}}`), tandis que `yagr` prend `{data: {graphs, timeline}, libraryConfig}` avec `libraryConfig` requis.
- **Oublier une hauteur de conteneur** — `ChartKit` remplit son parent ; sans hauteur explicite sur le wrapper, le graphique s'effondre à zéro.
- **Manque l'importation des styles uikit** — le thème dépend de `@gravity-ui/uikit/styles/styles.css` ; sans cela, les graphiques sont rendus sans style.

## Documentation pour les agents IA

La documentation lisible par agent pour la version installée se trouve dans `node_modules/@gravity-ui/chartkit/build/docs/INDEX.md`.