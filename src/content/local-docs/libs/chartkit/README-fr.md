# @gravity-ui/chartkit · [npm package](https://www.npmjs.com/package/@gravity-ui/chartkit) [License](LICENSE) [CI](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [storybook](https://preview.gravity-ui.com/chartkit/)

Composant React basé sur des plugins, offrant une interface de rendu unifiée pour plusieurs bibliothèques de graphiques. Vous enregistrez un ou plusieurs plugins et affichez les graphiques via `<ChartKit type="..." data={...} />` — ChartKit se charge de la distribution vers le bon moteur de rendu automatiquement.

Chaque moteur de rendu de plugin est chargé de manière différée (lazy-loaded), ainsi le code de la bibliothèque sous-jacente n'est téléchargé que lorsque ChartKit est effectivement rendu dans l'interface utilisateur. ChartKit gère également l'affichage des infobulles adaptées aux mobiles dès l'installation. Vous pouvez utiliser les plugins intégrés ou implémenter les vôtres.

**Quand l'utiliser :**

- Vous avez besoin de graphiques déclaratifs modernes (`gravity-charts`) ou de graphiques de séries temporelles / de surveillance (`yagr`)
- Vous avez besoin de plusieurs types de graphiques sous une API unique et cohérente
- Vous développez dans l'écosystème Gravity UI

**Quand ne pas l'utiliser :**

- Vous n'avez besoin que d'une seule bibliothèque de graphiques spécifique — préférez utiliser [@gravity-ui/charts](https://github.com/gravity-ui/charts) directement

## Table des matières

- [Démarrage](#get-started)
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

Pour les détails complets de configuration, consultez le [guide des styles uikit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles).

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

## Développement

### Prérequis

- Node.js 22 (voir [.nvmrc](https://github.com/gravity-ui/ChartKit/blob/main/.nvmrc))
- npm 10 ou plus récent

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

**1. Lier le paquet local**

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

**2. Configurer la surveillance du paquet local**

Créez un fichier `.env.local` à la racine de ChartKit (il est ignoré par git) :

```shell
LOCAL_PKG=@gravity-ui/charts
```

Cela indique à Vite de surveiller ce paquet dans `node_modules` et de ne pas le pré-compiler. Après avoir reconstruit `@gravity-ui/charts`, Storybook se rechargera à chaud automatiquement.

Pour plusieurs paquets, utilisez une liste séparée par des virgules :

```shell
LOCAL_PKG=@gravity-ui/charts,@gravity-ui/uikit
```

**3. Lancer Storybook**

```shell
npm run start
```

**4. Restaurer le paquet d'origine**

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

Les tests de régression visuelle s'exécutent dans Docker pour garantir des captures d'écran cohérentes entre les environnements :

```shell
npm run test:docker
```

Pour mettre à jour les captures d'écran de référence après des modifications intentionnelles de l'interface utilisateur :

```shell
npm run test:docker:update
```

### Contribution

Veuillez consulter le [guide de contribution](CONTRIBUTING.md) avant de soumettre une pull request.