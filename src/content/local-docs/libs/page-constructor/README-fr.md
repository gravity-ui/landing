# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Page constructor

`Page-constructor` est une bibliothèque pour le rendu de pages web ou de leurs parties basé sur des données `JSON` (le support du format `YAML` sera ajouté ultérieurement).

Lors de la création de pages, une approche basée sur les composants est utilisée : une page est construite à l'aide d'un ensemble de blocs prêts à l'emploi qui peuvent être placés dans n'importe quel ordre. Chaque bloc a un type spécifique et un ensemble de paramètres de données d'entrée.

Pour le format des données d'entrée et la liste des blocs disponibles, consultez la [documentation](https://preview.gravity-ui.com/page-constructor/?path=/docs/documentation-blocks--docs).

## Installation

```shell
npm install @gravity-ui/page-constructor
```

## Démarrage rapide

Tout d'abord, nous avons besoin d'un projet React et d'un serveur quelconque. Par exemple, vous pouvez créer un projet React avec Vite et un serveur Express, ou vous pouvez créer une application Next.js - elle aura un côté client et un côté serveur à la fois.

Installez les dépendances requises :

```shell
npm install @gravity-ui/page-constructor @diplodoc/transform @gravity-ui/uikit
```

Insérez le `Page Constructor` sur la page. Pour qu'il fonctionne correctement, il doit être enveloppé dans un `PageConstructorProvider` :

```tsx
import {PageConstructor, PageConstructorProvider} from '@gravity-ui/page-constructor';
import '@gravity-ui/page-constructor/styles/styles.scss';

const App = () => {
  const content = {
    blocks: [
      {
        type: 'header-block',
        title: 'Hello world',
        background: {color: '#f0f0f0'},
        description:
          '**Congratulations!** Have you built a [page-constructor](https://github.com/gravity-ui/page-constructor) into your website',
      },
    ],
  };

  return (
    <PageConstructorProvider>
      <PageConstructor content={content} />
    </PageConstructorProvider>
  );
};

export default App;
```

C'était l'exemple de connexion le plus simple. Pour que le balisage YFM fonctionne, vous devez traiter le contenu sur le serveur et le recevoir sur le client.

Si votre serveur est une application distincte, vous devez installer `page-constructor` :

```shell
npm install @gravity-ui/page-constructor
```

Pour traiter le YFM dans tous les blocs de base, appelez `contentTransformer` et passez-lui le contenu et les options :

```ts
const express = require('express');
const app = express();
const {contentTransformer} = require('@gravity-ui/page-constructor/server');

const content = {
  blocks: [
    {
      type: 'header-block',
      title: 'Hello world',
      background: {color: '#f0f0f0'},
      description:
        '**Congratulations!** Have you built a [page-constructor](https://github.com/gravity-ui/page-constructor) into your website',
    },
  ],
};

app.get('/content', (req, res) => {
  res.send({content: contentTransformer({content, options: {lang: 'en'}})});
});

app.listen(3000);
```

Côté client, ajoutez un appel d'endpoint pour recevoir le contenu :

```tsx
import {PageConstructor, PageConstructorProvider} from '@gravity-ui/page-constructor';
import '@gravity-ui/page-constructor/styles/styles.scss';
import {useEffect, useState} from 'react';

const App = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/content').then((r) => r.json());
      setContent(response.content);
    })();
  }, []);

  return (
    <PageConstructorProvider>
      <PageConstructor content={content} />
    </PageConstructorProvider>
  );
};

export default App;
```

### Modèle prêt à l'emploi

Pour démarrer un nouveau projet, vous pouvez utiliser le [modèle prêt à l'emploi sur Next.js ](https://github.com/gravity-ui/page-constructor-website-template) que nous avons préparé.

### Générateur de site statique

[Page Constructor Builder](https://github.com/gravity-ui/page-constructor-builder) - utilitaire en ligne de commande pour construire des pages statiques à partir de configurations YAML en utilisant @gravity-ui/page-constructor

## Documentation

### Paramètres

```typescript
interface PageConstructorProps {
  content: PageContent; // Données des blocs au format JSON.
  shouldRenderBlock?: ShouldRenderBlock; // Une fonction qui est appelée lors du rendu de chaque bloc et vous permet de définir des conditions pour son affichage.
  custom?: Custom; // Blocs personnalisés (voir `Personnalisation`).
  renderMenu?: () => React.ReactNode; // Une fonction qui rend le menu de la page avec la navigation (nous prévoyons d'ajouter le rendu de la version par défaut du menu).
  navigation?: NavigationData; // Données de navigation pour utiliser le composant de navigation au format JSON
  isBranded?: boolean; // Si vrai, ajoute un pied de page qui renvoie vers https://gravity-ui.com/. Essayez le composant BrandFooter pour plus de personnalisation.
}

interface PageConstructorProviderProps {
  isMobile?: boolean; // Un indicateur indiquant que le code est exécuté en mode mobile.
  locale?: LocaleContextProps; // Informations sur la langue et le domaine (utilisé lors de la génération et du formatage des liens).
  location?: Location; // API du navigateur ou de l'historique du routeur, URL de la page.
  analytics?: AnalyticsContextProps; // fonction pour gérer les événements d'analyse

  ssrConfig?: SSR; // Un indicateur indiquant que le code est exécuté côté serveur.
  theme?: 'light' | 'dark'; // Thème avec lequel rendre la page.
  mapsContext?: MapsContextType; // Paramètres pour la carte : apikey, type, scriptSrc, nonce
}

export interface PageContent extends Animatable {
  blocks: Block[];
  menu?: Menu;
  background?: MediaProps;
}

interface Custom {
  blocks?: CustomItems;
  subBlocks?: CustomItems;
  headers?: CustomItems;
  loadable?: LoadableConfig;
}

type ShouldRenderBlock = (block: Block, blockKey: string) => Boolean;

interface Location {
  history?: History;
  search?: string;
  hash?: string;
  pathname?: string;
  hostname?: string;
}

interface Locale {
  lang?: Lang;
  tld?: string;
}

interface SSR {
  isServer?: boolean;
}

interface NavigationData {
  logo: NavigationLogo;
  header: HeaderData;
}

interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}

interface HeaderData {
  leftItems: NavigationItem[];
  rightItems?: NavigationItem[];
}
```

```typescript
interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}
```

### Utilitaires serveur

Le package fournit un ensemble d'utilitaires serveur pour transformer votre contenu.

```ts
const {fullTransform} = require('@gravity-ui/page-constructor/server');

const {html} = fullTransform(content, {
  lang,
  extractTitle: true,
  allowHTML: true,
  path: __dirname,
  plugins,
});
```

En coulisses, un package est utilisé pour transformer le Yandex Flavored Markdown en HTML - `diplodoc/transfrom`, il est donc également dans les dépendances pairées.

Vous pouvez également utiliser des utilitaires utiles là où vous en avez besoin, par exemple dans vos composants personnalisés.

```ts
const {
  typografToText,
  typografToHTML,
  yfmTransformer,
} = require('@gravity-ui/page-constructor/server');

const post = {
  title: typografToText(title, lang),
  content: typografToHTML(content, lang),
  description: yfmTransformer(lang, description, {plugins}),
};
```

Vous pouvez trouver plus d'utilitaires dans cette [section](https://github.com/gravity-ui/page-constructor/tree/main/src/text-transform).

### Documentation détaillée sur les utilitaires serveur et les transformateurs

Pour un guide complet sur l'utilisation des utilitaires serveur, y compris des explications détaillées et des cas d'utilisation avancés, consultez le [chapitre supplémentaire sur l'utilisation des utilitaires serveur](./docs/data-preparation.md).

### Blocs personnalisés

Le constructeur de page vous permet d'utiliser des blocs définis par l'utilisateur dans leur application. Les blocs sont des composants React ordinaires.

Pour passer des blocs personnalisés au constructeur :

1. Créez un bloc dans votre application.

2. Dans votre code, créez un objet avec le type de bloc (chaîne de caractères) comme clé et un composant de bloc importé comme valeur.

3. Passez l'objet que vous avez créé aux paramètres `custom.blocks`, `custom.headers` ou `custom.subBlocks` du composant `PageConstructor` (`custom.headers` spécifie les en-têtes de bloc à rendre séparément au-dessus du contenu général).

4. Vous pouvez maintenant utiliser le bloc créé dans les données d'entrée (le paramètre `content`) en spécifiant son type et ses données.

Pour utiliser des mixins et des variables de style du constructeur lors de la création de blocs personnalisés, ajoutez une importation dans votre fichier :

```css
@import '~@gravity-ui/page-constructor/styles/styles.scss';
```

Pour utiliser la police par défaut, ajoutez une importation dans votre fichier :

```css
@import '~@gravity-ui/page-constructor/styles/fonts.scss';
```

### Blocs chargeables

Il est parfois nécessaire qu'un bloc se rende en fonction des données à charger. Dans ce cas, des blocs chargeables sont utilisés.

Pour ajouter des blocs `loadable` personnalisés, passez à `PageConstructor` la propriété `custom.loadable` avec les noms des sources de données (chaîne de caractères) pour le composant comme clé et un objet comme valeur.

```typescript
export interface LoadableConfigItem {
  fetch: FetchLoadableData; // méthode de chargement des données
  component: React.ComponentType; // bloc pour passer les données chargées
}

type FetchLoadableData<TData = any> = (blockKey: string) => Promise<TData>;
```

### Grille

Le constructeur de page utilise la grille `bootstrap` et son implémentation basée sur des composants React que vous pouvez utiliser dans votre propre projet (y compris séparément du constructeur).

Exemple d'utilisation :

```jsx
import {Grid, Row, Col} from '@gravity-ui/page-constructor';

const Page = ({children}: PropsWithChildren<PageProps>) => (
  <Grid>
    <Row>
      <Col sizes={{lg: 4, sm: 6, all: 12}}>{children}</Col>
    </Row>
  </Grid>
);
```

### Navigation

La navigation de page peut également être utilisée séparément du constructeur :

```jsx
import {Navigation} from '@gravity-ui/page-constructor';

const Page= ({data, logo}: React.PropsWithChildren<PageProps>) => <Navigation data={data} logo={logo} />;
```

### Blocs

Chaque bloc est un composant atomique de haut niveau. Ils sont stockés dans le répertoire `src/units/constructor/blocks`.

### Sous-blocs

Les sous-blocs sont des composants qui peuvent être utilisés dans la propriété `children` d'un bloc. Dans une configuration, une liste de composants enfants provenant de sous-blocs est spécifiée. Une fois rendus, ces sous-blocs sont passés au bloc en tant que `children`.

### Comment ajouter un nouveau bloc au `page-constructor`

1. Dans le répertoire `src/blocks` ou `src/sub-blocks`, créez un dossier avec le code du bloc ou du sous-bloc.

2. Ajoutez le nom du bloc ou du sous-bloc à l'énumération `BlockType` ou `SubBlockType` et décrivez ses propriétés dans le fichier `src/models/constructor-items/blocks.ts` ou `src/models/constructor-items/sub-blocks.ts` de manière similaire aux existants.

3. Ajoutez une exportation pour le bloc dans le fichier `src/blocks/index.ts` et pour le sous-bloc dans le fichier `src/sub-blocks/index.ts`.

4. Ajoutez un nouveau composant ou bloc au mappage dans `src/constructor-items.ts`.

5. Ajoutez un validateur pour le nouveau bloc :

   - Ajoutez un fichier `schema.ts` au répertoire du bloc ou du sous-bloc. Dans ce fichier, décrivez un validateur de paramètre pour le composant au format [`json-schema`](http://json-schema.org/).
   - Exportez-le dans le fichier `schema/validators/blocks.ts` ou `schema/validators/sub-blocks.ts`.
   - Ajoutez-le à l'énumération `enum` ou `selectCases` dans le fichier `schema/index.ts`.

6. Dans le répertoire du bloc, ajoutez le fichier `README.md` avec une description des paramètres d'entrée.
7. Dans le répertoire du bloc, ajoutez une démo Storybook dans le dossier `__stories__`. Tout le contenu de démo pour l'histoire doit être placé dans `data.json` dans le répertoire de l'histoire. Le `Story` générique doit accepter le type des props du bloc, sinon des props de bloc incorrectes seront affichées dans Storybook.
8. Ajoutez un modèle de données de bloc au dossier `src/editor/data/templates/`, le nom du fichier doit correspondre au type de bloc.
9. (facultatif) Ajoutez une icône de prévisualisation de bloc au dossier `src/editor/data/previews/`, le nom du fichier doit correspondre au type de bloc.

### Thèmes

Le `PageConstructor` vous permet d'utiliser des thèmes : vous pouvez définir différentes valeurs pour les propriétés individuelles des blocs en fonction du thème sélectionné dans l'application.

Pour ajouter un thème à une propriété de bloc :

1. Dans le fichier `models/blocks.ts`, définissez le type de la propriété de bloc respective en utilisant le générique `ThemeSupporting<T>`, où `T` est le type de la propriété.

2. Dans le fichier du composant `react` du bloc, obtenez la valeur de la propriété avec le thème via le hook `getThemedValue` et `useTheme` (voir les exemples dans le bloc `MediaBlock.tsx`).

3. Ajoutez la prise en charge des thèmes au validateur de propriété : dans le fichier `schema.ts` du bloc, enveloppez cette propriété dans `withTheme`.

### i18n

Le `page-constructor` est une bibliothèque basée sur `uikit`, et nous utilisons une instance de `i18n` de uikit. Pour configurer l'internationalisation, il vous suffit d'utiliser la fonction `configure` de uikit :

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

### Cartes

Pour utiliser des cartes, placez le type de carte, `scriptSrc` et `apiKey` dans le champ `mapContext` de `PageConstructorProvider`.

Vous pouvez définir des variables d'environnement pour le mode de développement dans le fichier `.env.development` à la racine du projet.
`STORYBOOK_GMAP_API_KEY` - apiKey pour les cartes Google

### Analytique

#### Initialisation

Pour commencer à utiliser une quelconque analytique, passez un gestionnaire au constructeur. Le gestionnaire doit être créé côté projet. Le gestionnaire recevra les objets d'événements `default` et `custom`. Le gestionnaire passé sera déclenché lors des clics sur les boutons, les liens, la navigation et les contrôles. Comme un seul gestionnaire est utilisé pour le traitement de tous les événements, faites attention à la manière de traiter les différents événements lors de la création du gestionnaire. Il existe des champs prédéfinis qui servent à vous aider à construire une logique complexe.

Passez `autoEvents: true` au constructeur pour déclencher des événements configurés automatiquement.

```ts
function sendEvents(events: MyEventType []) {
  ...
}

<PageConstructorProvider
    ...

    analytics={{sendEvents, autoEvents: true}}

    ...
/>
```

Un objet événement possède un seul champ obligatoire : `name`. Il dispose également de champs prédéfinis qui servent à faciliter la gestion de logiques complexes. Par exemple, `counter.include` peut aider à envoyer un événement dans un compteur particulier si plusieurs systèmes d'analyse sont utilisés dans un projet.

```ts
type AnalyticsEvent<T = {}> = T & {
  name: string;
  type?: string;
  counters?: AnalyticsCounters;
  context?: string;
};
```

Il est possible de configurer le type d'événement nécessaire pour un projet.

```ts
type MyEventType = AnalyticsEvent<{
  [key: string]?: string; // seul le type 'string' est supporté
}>;
```

#### Sélecteur de compteur

Il est possible de configurer un événement pour savoir à quel système d'analyse l'envoyer.

```ts
type AnalyticsCounters = {
  include?: string[]; // tableau des identifiants de compteurs d'analyse qui seront appliqués
  exclude?: string[]; // tableau des identifiants de compteurs d'analyse qui ne seront pas appliqués
};
```

#### Paramètre `context`

Passez la valeur `context` pour définir l'endroit dans le projet où un événement est déclenché.

Utilisez le sélecteur ci-dessous ou créez une logique qui répond aux besoins du projet.

```ts
// analyticsHandler.ts
if (isCounterAllowed(counterName, counters)) {
  analyticsCounter.reachGoal(counterName, name, parameters);
}
```

#### Types d'événements réservés

Plusieurs types d'événements prédéfinis sont utilisés pour marquer les événements configurés automatiquement. Utilisez ces types pour filtrer les événements par défaut, par exemple.

```ts
enum PredefinedEventTypes {
  Default = 'default-event', // événements par défaut qui se déclenchent à chaque clic sur un bouton
  Play = 'play', // événement du lecteur React
  Stop = 'stop', // événement du lecteur React
}
```

## Développement

```bash
npm ci
npm run dev
```

#### Note sur Vite

```ts
import react from '@vitejs/plugin-react-swc';
import dynamicImport from 'vite-plugin-dynamic-import';

export default defineConfig({
  plugins: [
    react(),
    dynamicImport({
      filter: (id) => id.includes('/node_modules/@gravity-ui/page-constructor'),
    }),
  ],
});
```

Pour Vite, vous devez installer le plugin `vite-plugin-dynamic-import` et configurer le fichier de configuration pour que les importations dynamiques fonctionnent.

## Flux de publication

Dans la plupart des cas, nous utilisons deux types de commits :

1. `fix` : un commit de type `fix` corrige un bug dans votre base de code (ce qui correspond à PATCH dans la sémantique de versionnement).
2. `feat` : un commit de type `feat` introduit une nouvelle fonctionnalité dans la base de code (ce qui correspond à MINOR dans la sémantique de versionnement).
3. `BREAKING CHANGE` : un commit qui a un pied de page `BREAKING CHANGE:`, ou qui ajoute un `!` après le type/scope, introduit un changement d'API majeur (correspondant à MAJOR dans la sémantique de versionnement). Un `BREAKING CHANGE` peut faire partie de commits de n'importe quel type.
4. Pour définir manuellement la version du package de publication, vous devez ajouter `Release-As: <version>` à votre message de commit, par exemple :

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

Vous pouvez trouver toutes les informations [ici](https://www.conventionalcommits.org/en/v1.0.0/).

Lorsque vous recevez l'approbation de votre pull-request par les propriétaires du code et que vous avez passé toutes les vérifications, veuillez suivre les étapes suivantes :

1. Vérifiez s'il existe une pull-request de publication du robot avec des changements d'un autre contributeur (elle ressemble à `chore(main): release 0.0.0`). Si elle existe, vérifiez pourquoi elle n'a pas été fusionnée. Si le contributeur accepte de publier une version partagée, passez à l'étape suivante. Sinon, demandez-lui de publier sa version, puis suivez l'étape suivante.
2. Squash and merge votre PR (Il est important de publier une nouvelle version avec Github-Actions).
3. Attendez que le robot crée une PR avec une nouvelle version du package et des informations sur vos changements dans CHANGELOG.md. Vous pouvez suivre le processus dans [l'onglet Actions](https://github.com/gravity-ui/page-constructor/actions).
4. Vérifiez vos changements dans CHANGELOG.md et approuvez la PR du robot.
5. Squash and merge la PR. Vous pouvez suivre le processus de publication dans [l'onglet Actions](https://github.com/gravity-ui/page-constructor/actions).

### Publication de versions alpha

Si vous souhaitez publier une version alpha du package depuis votre branche, vous pouvez le faire manuellement :

1. Allez dans l'onglet Actions.
2. Sélectionnez le workflow "Release alpha version" sur le côté gauche de la page.
3. Sur le côté droit, vous verrez le bouton "Run workflow". Ici, vous pouvez choisir la branche.
4. Vous verrez également un champ pour la version manuelle. Si vous publiez une alpha dans votre branche pour la première fois, ne laissez rien ici. Après la première publication, vous devrez définir la nouvelle version manuellement car nous ne modifions pas `package.json` au cas où la branche pourrait expirer très rapidement. Utilisez le préfixe `alpha` dans votre version manuelle, sinon vous obtiendrez une erreur.
5. Cliquez sur "Run workflow" et attendez que l'action se termine. Vous pouvez publier autant de versions que vous le souhaitez, mais n'en abusez pas et publiez des versions uniquement si vous en avez vraiment besoin. Dans les autres cas, utilisez [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack).

### Publication de versions bêta majeures

Si vous souhaitez publier une nouvelle version majeure, vous aurez probablement besoin de versions bêta avant la version stable. Veuillez suivre les étapes suivantes :

1. Créez ou mettez à jour la branche `beta`.
2. Ajoutez-y vos changements.
3. Lorsque vous êtes prêt pour une nouvelle version bêta, publiez-la manuellement avec un commit vide (ou vous pouvez ajouter ce message de commit avec un pied de page au dernier commit) :

```bash
git commit -m 'fix: last commit

Release-As: 3.0.0-beta.0' --allow-empty
```

4. Le robot "Release please" créera une nouvelle PR vers la branche `beta` avec CHANGELOG.md mis à jour et la version du package incrémentée.
5. Vous pouvez répéter cela autant de fois que vous le souhaitez. Lorsque vous êtes prêt à publier la dernière version majeure sans tag bêta, vous devez créer une PR de la branche `beta` vers la branche `main`. Notez qu'il est normal que la version de votre package soit taguée bêta. Le robot le sait et la modifiera correctement. `3.0.0-beta.0` deviendra `3.0.0`.

### Flux de publication pour les versions majeures précédentes

Si vous souhaitez publier une nouvelle version dans une version majeure précédente après l'avoir committée sur `main`, veuillez suivre les étapes suivantes :

1. Mettez à jour la branche nécessaire. Les noms des branches de publication des versions majeures précédentes sont :
   1. `version-1.x.x/fixes` - pour la version majeure 1.x.x
   2. `version-2.x.x` - pour la version majeure 2.x.x
2. Créez une nouvelle branche à partir de la branche de publication de la version majeure précédente.
3. Cherry-pick votre commit depuis la branche `main`.
4. Créez une PR, obtenez l'approbation et fusionnez-la dans la branche de publication de la version majeure précédente.
5. Squash and merge votre PR (Il est important de publier une nouvelle version avec Github-Actions).
6. Attendez que le robot crée une PR avec une nouvelle version du package et des informations sur vos changements dans CHANGELOG.md. Vous pouvez suivre le processus dans [l'onglet Actions](https://github.com/gravity-ui/page-constructor/actions).
7. Vérifiez vos changements dans CHANGELOG.md et approuvez la PR du robot.
8. Squash and merge la PR. Vous pouvez suivre le processus de publication dans [l'onglet Actions](https://github.com/gravity-ui/page-constructor/actions).

## Éditeur de constructeur de page

L'éditeur fournit une interface utilisateur pour la gestion du contenu de la page avec un aperçu en temps réel.

Comment l'utiliser :

```tsx
import {Editor} from '@gravity-ui/page-constructor/editor';

interface MyAppEditorProps {
  initialContent: PageContent;
  transformContent: ContentTransformer;
  onChange: (content: PageContent) => void;
}

export const MyAppEditor = ({initialContent, onChange, transformContent}: MyAppEditorProps) => (
  <Editor content={initialContent} onChange={onChange} transformContent={transformContent} />
);
```

## Memory Bank
```

Ce projet inclut une **Banque de Mémoire** complète - une collection de fichiers de documentation Markdown qui fournissent des informations détaillées sur l'architecture du projet, ses composants et ses modèles d'utilisation. La Banque de Mémoire est particulièrement utile lorsque l'on travaille avec des agents IA, car elle contient des informations structurées sur :

- **Vue d'ensemble du projet** : Exigences fondamentales, objectifs et contexte
- **Documentation des composants** : Guides d'utilisation détaillés pour tous les composants
- **Architecture du système** : Modèles techniques et décisions de conception
- **Progression du développement** : État actuel et détails d'implémentation

### Utilisation de la Banque de Mémoire

La Banque de Mémoire se trouve dans le répertoire `memory-bank/` et se compose de fichiers Markdown ordinaires qui peuvent être lus comme toute autre documentation :

- `projectbrief.md` - Document fondamental avec les exigences principales
- `productContext.md` - Objectifs du projet et expérience utilisateur
- `systemPatterns.md` - Architecture et décisions techniques
- `techContext.md` - Technologies, configuration et contraintes
- `activeContext.md` - Focus du travail actuel et changements récents
- `progress.md` - État de l'implémentation et problèmes connus
- `usage/` - Documentation d'utilisation spécifique aux composants
- `storybookComponents.md` - Détails de l'intégration Storybook

### Pour les agents IA

Lorsque vous travaillez avec des agents IA sur ce projet, la Banque de Mémoire sert de base de connaissances complète qui aide les agents à comprendre :

- La structure et les modèles du projet
- Les API des composants et les exemples d'utilisation
- Les flux de développement et les meilleures pratiques
- L'état actuel de l'implémentation et les prochaines étapes

Les agents IA peuvent lire ces fichiers pour se familiariser rapidement avec le contexte du projet et prendre des décisions plus éclairées concernant les modifications de code et les implémentations.

## Tests

Une documentation complète est disponible au [lien](./test-utils/docs/README.md) fourni.