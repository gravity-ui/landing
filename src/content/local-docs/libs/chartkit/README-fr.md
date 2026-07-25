# Gravity UI ChartKit · [![npm package](https://img.shields.io/npm/v/@gravity-ui/chartkit)](https://www.npmjs.com/package/@gravity-ui/chartkit) [![License](https://img.shields.io/github/license/gravity-ui/ChartKit)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/ChartKit/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/chartkit/)

Composant React basé sur des plugins qui offre une interface de rendu unifiée pour plusieurs bibliothèques de graphiques. Vous enregistrez un ou plusieurs plugins et affichez les graphiques via `<ChartKit type="..." data={...} />` — ChartKit distribue automatiquement vers le bon moteur de rendu.

Chaque moteur de rendu de plugin est chargé à la demande (lazy-loaded), de sorte que le code de la bibliothèque sous-jacente n'est téléchargé que lorsque ChartKit est effectivement rendu dans l'interface utilisateur. ChartKit gère également l'affichage des infobulles adaptées aux mobiles dès l'installation. Vous pouvez utiliser les plugins intégrés ou implémenter les vôtres.

**Quand l'utiliser :**

- Vous avez besoin de graphiques déclaratifs modernes (`gravity-charts`) ou de graphiques de séries temporelles / de surveillance (`yagr`).
- Vous avez besoin de plusieurs types de graphiques sous une seule API cohérente.
- Vous développez dans l'écosystème Gravity UI.

**Quand ne pas l'utiliser :**

- Vous n'avez besoin que d'une seule bibliothèque de graphiques spécifique — préférez utiliser [@gravity-ui/charts](https://github.com/gravity-ui/charts) directement.

## Table des matières

- [Démarrage](#getting-started)
- [Mise à jour des packages de graphiques](#updating-charting-packages)
- [Développement](#development)

## Démarrage

### Prérequis

- React 16, 17 ou 18
- `[@gravity-ui/uikit](https://github.com/gravity-ui/uikit)` — dépendance pair requise (fournit le thème et les primitives d'interface utilisateur)

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

ChartKit utilise un registre global de plugins. Appelez `settings.set` une seule fois au point d'entrée de votre application pour enregistrer les plugins dont vous avez besoin. Lorsque `<ChartKit type="..." />` est rendu, il recherche le plugin correspondant — si aucun n'est trouvé, une erreur est levée. Le moteur de rendu de chaque plugin est un composant `React.lazy`, son code est donc récupéré uniquement lorsque ChartKit apparaît pour la première fois dans l'interface utilisateur.

Vous pouvez enregistrer plusieurs plugins à la fois :

```ts
settings.set({plugins: [GravityChartsPlugin, YagrPlugin]});
```

Ou appelez `settings.set` plusieurs fois — il fusionne la liste des plugins au lieu de la remplacer.

**Exemple de base :**

```tsx
import {ThemeProvider} from '@gravity-ui/uikit';
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
    <ThemeProvider theme="light">
      <div style={{height: 300}}>
        <ChartKit type="gravity-charts" data={data} />
      </div>
    </ThemeProvider>
  );
}
```

`ChartKit` s'adapte à la taille de son parent — assurez-vous que le conteneur a une hauteur explicite.

## Mise à jour des packages de graphiques

ChartKit regroupe deux bibliothèques de graphiques Gravity UI comme dépendances :

- [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) — alimente le plugin `gravity-charts`
- [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) — alimente le plugin `yagr`

Si vous avez besoin d'une version plus récente de l'un de ces packages, ouvrez une demande de mise à jour de package ([Package update request](https://github.com/gravity-ui/ChartKit/issues/new?template=package-update-request.yml)) et sélectionnez le(s) package(s) dont vous avez besoin. Les mainteneurs mettront à jour les packages sélectionnés et publieront la mise à jour.

## Développement

### Prérequis

- [Node.js](https://nodejs.org/) 22 (voir [.nvmrc](https://github.com/gravity-ui/ChartKit/blob/main/.nvmrc))
- [npm](https://www.npmjs.com/) 10 ou plus récent

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

Pour travailler sur une dépendance (par exemple `@gravity-ui/charts`) et voir vos modifications en direct dans Storybook sans la publier sur npm :

**1. Lier le package local**

```shell
# Dans votre clone local de @gravity-ui/charts :
git clone https://github.com/gravity-ui/charts.git
cd charts
npm ci
# apportez vos modifications
npm run build
npm link

# Dans ChartKit :
npm link @gravity-ui/charts
```

**2. Configurer la surveillance du package local**

Créez un fichier `.env.local` à la racine de ChartKit (il est ignoré par git) :

```shell
LOCAL_PKG=@gravity-ui/charts
```

Cela indique à Vite de surveiller ce package dans `node_modules` et de ne pas le pré-compiler. Après avoir reconstruit `@gravity-ui/charts`, Storybook se rechargera à chaud automatiquement.

Pour plusieurs packages, utilisez une liste séparée par des virgules :

```shell
LOCAL_PKG=@gravity-ui/charts,@gravity-ui/uikit
```

**3. Lancer Storybook**

```shell
npm run start
```

**4. Restaurer le package d'origine**

Lorsque vous avez terminé :

1. Commentez `LOCAL_PKG` dans `.env.local`
2. Exécutez `npm install` dans ChartKit — cela remplace le lien symbolique par la version du registre

```shell
# Dans ChartKit :
npm ci
```

### Lancement des tests

```shell
npm test
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

Un composant React qui distribue des plugins et rend des graphiques à partir de plusieurs bibliothèques de graphiques Gravity UI via une seule API `<ChartKit type="..." data={...} />`. Utilisez-le lorsque vous avez besoin d'un point d'entrée unique pour le chargement différé de types de graphiques mixtes, au lieu d'importer chaque bibliothèque de graphiques directement.

### Quand l'utiliser

- Pour rendre plus d'un moteur de graphique (par exemple, `gravity-charts` + `yagr`) derrière un composant cohérent.
- Pour le chargement différé des bundles de graphiques — le rendu de chaque plugin est `React.lazy`, donc le code d'une bibliothèque n'est récupéré que lorsque son type de graphique est réellement affiché.
- Pour regrouper des graphiques dans une application Gravity UI qui souhaite des infobulles adaptées aux mobiles et un thème unifié dès le départ.

### Quand ne pas l'utiliser

- Pour un seul type de graphique, importez directement [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) (général) ou [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) (séries temporelles haute performance) — le registre des plugins représente une surcharge pour un seul moteur.
- Pour composer une grille de tableaux de bord de widgets, utilisez [`@gravity-ui/dashkit`](https://github.com/gravity-ui/dashkit) — ChartKit rend un graphique ; DashKit organise plusieurs widgets.

### Pièges courants

- **Rendre `<ChartKit>` avant `settings.set({plugins: [...]})`** — le registre global des plugins doit être peuplé à l'entrée de l'application ; un `type` non enregistré provoque une erreur au moment du rendu.
- **Prop `chartType` / `library` hallucinée** — la prop de distribution est `type` (par exemple, `type="gravity-charts"`), et les données sont `data`.
- **Oublier une hauteur de conteneur** — `ChartKit` remplit son parent ; sans hauteur explicite sur le wrapper, le graphique s'effondre à zéro.
- **S'attendre à ce que les plugins soient inclus dans le bundle** — les rendus des plugins (`@gravity-ui/chartkit/gravity-charts`, `.../yagr`) sont différés ; le premier rendu d'un type récupère son bundle.
- **Oublier l'importation des styles uikit** — le thème dépend de `@gravity-ui/uikit/styles/styles.css` ; sans cela, les graphiques sont rendus sans style.

## Documentation pour les agents IA

La documentation lisible par agent pour la version installée se trouve dans `node_modules/@gravity-ui/chartkit/build/docs/INDEX.md`.