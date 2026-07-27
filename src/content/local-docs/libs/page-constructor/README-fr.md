# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Page constructor

`Page-constructor` est une bibliothèque pour le rendu de pages web ou de leurs parties à partir de données `JSON` (la prise en charge du format `YAML` sera ajoutée ultérieurement).

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

Si votre serveur est une application distincte, vous devez installer page-constructor :

```shell
npm install @gravity-ui/page-constructor
```

Pour traiter YFM dans tous les blocs de base, appelez `contentTransformer` et passez-lui le contenu et les options :

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

Pour démarrer un nouveau projet, vous pouvez utiliser le [modèle prêt à l'emploi sur Next.js](https://github.com/gravity-ui/page-constructor-website-template) que nous avons préparé.

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

2. Dans le fichier avec le composant `react` du bloc, obtenez la valeur de la propriété avec le thème via le hook `getThemedValue` et `useTheme` (voir les exemples dans le bloc `MediaBlock.tsx`).

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
`STORYBOOK_GMAP_API_KEY` - apiKey pour google maps

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

Un objet événement possède un seul champ obligatoire : `name`. Il dispose également de champs prédéfinis qui servent à faciliter la gestion de logiques complexes. Par exemple, `counter.include` peut aider à envoyer un événement dans un compteur particulier si plusieurs systèmes d

Ce projet inclut une **Banque de Mémoire** complète – une collection de fichiers de documentation Markdown qui fournissent des informations détaillées sur l'architecture du projet, ses composants et ses modèles d'utilisation. La Banque de Mémoire est particulièrement utile lorsque l'on travaille avec des agents IA, car elle contient des informations structurées sur :

- **Vue d'ensemble du projet** : Exigences fondamentales, objectifs et contexte
- **Documentation des composants** : Guides d'utilisation détaillés pour tous les composants
- **Architecture du système** : Modèles techniques et décisions de conception
- **Progression du développement** : État actuel et détails d'implémentation

### Utilisation de la Banque de Mémoire

La Banque de Mémoire se trouve dans le répertoire `memory-bank/` et se compose de fichiers Markdown ordinaires qui peuvent être lus comme toute autre documentation :

- `projectbrief.md` - Document de base avec les exigences fondamentales
- `productContext.md` - Objectifs du projet et expérience utilisateur
- `systemPatterns.md` - Architecture et décisions techniques
- `techContext.md` - Technologies, configuration et contraintes
- `activeContext.md` - Focus du travail actuel et changements récents
- `progress.md` - État de l'implémentation et problèmes connus
- `usage/` - Documentation d'utilisation spécifique aux composants
- `storybookComponents.md` - Détails de l'intégration Storybook

## Tests

Une documentation complète est disponible au [lien](./test-utils/docs/README.md) fourni.

## Licence

Distribué sous la licence MIT. Voir [LICENSE](LICENSE) pour les détails.

## Pour les agents IA

Une bibliothèque pour rendre des pages web entières ou des sections de pages à partir d'une configuration déclarative JSON/YAML, en utilisant un ensemble de blocs prêts à l'emploi et ordonnables — utilisez-la pour construire des pages marketing/de destination, pas des interfaces utilisateur d'application générales.

### Quand l'utiliser

- Pages basées sur des données : rendez une configuration `content` de blocs typés avec `PageConstructor` encapsulé dans `PageConstructorProvider`.
- Pages marketing, de destination et de documentation assemblées à partir de blocs préfabriqués (en-têtes, médias, cartes, etc.).
- Traitement côté serveur de YFM de texte de bloc via les utilitaires `@gravity-ui/page-constructor/server` (`contentTransformer`, `fullTransform`).
- Réutilisation de la grille responsive (`Grid`/`Row`/`Col`) ou du composant `Navigation` de manière autonome.

### Quand ne pas l'utiliser

- Interfaces utilisateur d'application générales (boutons, formulaires, modales) — utilisez [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Édition de contenu Markdown/YFM — utilisez [`@gravity-ui/markdown-editor`](https://github.com/gravity-ui/markdown-editor).
- Coques de navigation d'application (en-tête latéral) — utilisez [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation) ; le `Navigation` de ce package est une navigation principale au niveau de la page.

### Pièges courants

- **`PageConstructor` doit être encapsulé dans `PageConstructorProvider`.** Le rendre tel quel casse le contexte (locale, thème, SSR, analytique).
- **La prop `content` est `content`, structurée `{blocks: [...]}`.** Chaque objet de bloc a besoin d'un `type` correspondant à un bloc connu plus ses champs de données ; il n'y a pas de prop `data`/`config`.
- **YFM dans le texte des blocs nécessite un traitement côté serveur.** Les champs de type Markdown sont rendus comme du texte brut à moins que vous ne traitiez le contenu via `contentTransformer`/`fullTransform` depuis `@gravity-ui/page-constructor/server` ; `@diplodoc/transform` est une dépendance pair requise.
- **Importez les styles SCSS.** Ajoutez `@gravity-ui/page-constructor/styles/styles.scss` (SCSS, pas CSS) ; les blocs personnalisés importent le même fichier pour réutiliser les mixins/variables.
- **Vite a besoin de `vite-plugin-dynamic-import`.** Les importations dynamiques de blocs échouent sous Vite sans cela.

## Documentation pour les agents IA

La documentation lisible par agent pour la version installée se trouve dans `node_modules/@gravity-ui/page-constructor/build/docs/INDEX.md`.