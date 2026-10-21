# @gravity-ui/app-layout &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/app-layout)](https://www.npmjs.com/package/@gravity-ui/app-layout) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/app-layout/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/app-layout/actions/workflows/ci.yml?query=branch:main)

## Installation

```shell
npm install --save-dev @gravity-ui/app-layout
```

## Utilisation

Avec `express` :

```js
import express from 'express';
import {createRenderFunction} from '@gravity-ui/app-layout';

const app = express();

const renderLayout = createRenderFunction();

app.get('/', function (req, res) {
  res.send(
    renderLayout({
      // RenderParams
      title: 'Page d\'accueil',
      bodyContent: {
        root: 'Bonjour le monde !',
      },
    }),
  );
});

app.listen(3000);
```

où

```typescript
interface RenderParams<Data, Plugins> {
  // Toutes données compatibles JSON, sera défini sur window.__DATA__ sur la page
  data?: Data;
  // favicon
  icon?: Icon;
  // nonce à définir sur les balises appropriées
  nonce?: string;
  // attributs de la balise base
  base?: Base;

  // options communes
  // Titre de la page
  title: string;
  // langue de la page, sera défini sur la balise html
  lang?: string;
  isMobile?: boolean;

  // attributs html
  htmlAttributes?: string;
  // contenu de la balise header
  // balises meta
  meta?: Meta[];
  // balises link
  links?: Link[];
  // balises script
  scripts?: Script[];
  // feuilles de style
  styleSheets?: Stylesheet[];
  // balises script avec code inline
  inlineScripts?: string[];
  // balises style avec styles inline
  inlineStyleSheets?: string[];

  // contenu de la balise body
  bodyContent?: {
    // nom de classe pour la balise body
    className?: string;
    // attributs du body
    attributes?: string;
    // contenu du body avant la balise div avec id root
    beforeRoot?: string;
    // contenu innerHtml de la balise div avec id root
    root?: string;
    // contenu du body après la balise div avec id root
    afterRoot?: string;
  };
  // options des plugins
  pluginsOptions?: Partial<PluginsOptions<Plugins>>;
}
```

### Base

Décrit la balise `base` :

```typescript
interface Base {
  href?: string;
  target?: HTMLBaseElement['target'];
}
```

Exemple :

```js
renderLayout({
  title: 'Page d\'accueil',
  base: {target: '_top'},
});
```

Sera rendu comme :

```html
<base target="_top" />
```

### Meta

Décrit la balise `meta` :

```typescript
interface Meta {
  name: string;
  content: string;
}
```

Exemple :

```js
const meta = [
  {name: 'description', content: 'quelque texte'},
  {name: 'robots', content: 'noindex'},
  {name: 'og:title', content: 'Un titre'},
];
```

Sera rendu comme :

```html
<meta name="description" content="quelque texte" />
<meta name="robots" content="noindex" />
<meta property="og:title" content="Un titre" />
```

### Icon

Décrit le favicon de la page :

```typescript
interface Icon {
  type?: string;
  sizes?: string;
  href?: string;
}
```

La valeur par défaut est :

```js
const icon = {
  type: 'image/png',
  sizes: '16x16',
  href: '/favicon.png',
};
```

### Links

Décrit la balise `link` :

```typescript
interface Link {
  as?: string;
  href: string;
  rel?: string;
  type?: string;
  sizes?: string;
  title?: HTMLLinkElement['title'];
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
}
```

Exemple :

```js
const link = {
  href: 'myFont.woff2',
  rel: 'preload',
  as: 'font',
  type: 'font/woff2',
  crossOrigin: 'anonymous',
};
```

sera rendu comme :

```html
<link href="myFont.woff2" rel="preload" as="font" type="font/woff2" crossorigin="anonymous" />
```

### Scripts

Décrit le lien vers un script avec préchargement :

```typescript
interface Script {
  src: string;
  defer?: boolean;
  async?: boolean;
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
  type?: 'importmap' | 'module' | string;
}
```

Exemple :

```js
const script = {
  src: 'url/to/script',
  defer: true,
  async: false,
  crossOrigin: 'anonymous',
};
```

sera rendu comme :

```html
<link href="url/to/script" rel="preload" as="script" crossorigin="anonymous" />

<script src="url/to/script" defer="true" async="false" crossorigin="anonymous" nonce="..."></script>
```

#### Feuilles de style

Décrivent le lien vers les styles :

```typescript
interface Stylesheet {
  href: string;
}
```

Exemple :

```js
const styleSheet = {
  href: 'url/to/stylesheet',
};
```

sera rendu comme :

```html
<link href="url/to/stylesheet" rel="stylesheet" />
```

## Plugins

La fonction de rendu peut être étendue par des plugins. Un plugin peut réécrire le contenu de rendu défini par l'utilisateur.
Un plugin est un objet avec les propriétés `name` et `apply` :

```typescript
interface Plugin<Options = any, Name = string> {
  name: Name;
  apply: (params: {
    options: Options | undefined; // passé via la fonction `renderLayout` dans le paramètre `pluginsOptions`.
    commonOptions: CommonOptions;
    renderContent: RenderContent;
    /** @deprecated utiliser `renderContent.helpers` à la place */
    utils: RenderHelpers;
  }) => void;
}

interface CommonOptions {
  name: string;
  title: string;
  lang?: string;
  isMobile?: boolean;
}

export interface HeadContent {
  base?: Base;
  scripts: Script[];
  helpers: RenderHelpers;
  links: Link[];
  meta: Meta[];
  styleSheets: Stylesheet[];
  inlineStyleSheets: string[];
  inlineScripts: string[];
  title: string;
}

export interface BodyContent {
  attributes: Attributes;
  beforeRoot: string[];
  root?: string;
  afterRoot: string[];
}

export interface RenderContent extends HeadContent {
  htmlAttributes: Attributes;
  bodyContent: BodyContent;
}

export interface RenderHelpers {
  renderScript(script: Script): string;
  renderInlineScript(content: string): string;
  renderStyle(style: Stylesheet): string;
  renderInlineStyle(content: string): string;
  renderMeta(meta: Meta): string;
  renderLink(link: Link): string;
  attrs(obj: Attributes): string;
}
```

Il existe quelques plugins dans ce package :

### Google analytics

Ajoute un compteur Google Analytics à la page.

Utilisation :

```js
import {createRenderFunction, createGoogleAnalyticsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createGoogleAnalyticsPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Page d\'accueil',
      pluginsOptions: {
        googleAnalytics: {
          useBeaconTransport: true, // active l'utilisation de navigator.sendBeacon
          counter: {
            id: 'un identifiant',
          },
        },
      },
    }),
  );
});
```

Options du plugin :

```typescript
interface GoogleAnalyticsCounter {
  id: string;
}

interface GoogleAnalyticsOptions {
  useBeaconTransport?: boolean;
  counter: GoogleAnalyticsCounter;
}
```

### Yandex Metrika

Ajoute des compteurs Yandex Metrika à la page.

Utilisation :

```js
import {createRenderFunction, createYandexMetrikaPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createYandexMetrikaPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Page d\'accueil',
      pluginsOptions: {
        yandexMetrika: {
          counter: {
            id: 123123123,
            defer: true,
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
          },
        },
      },
    }),
  );
});
```

Options du plugin :

```typescript
export type UserParams = {
  [x: string]: boolean | string | number | null | UserParams;
};

export interface MetrikaCounter {
  id: number;
  defer: boolean;
  clickmap: boolean;
  trackLinks: boolean;
  accurateTrackBounce: boolean | number;
  webvisor?: boolean;
  nonce?: string;
  encryptedExperiments?: string;
  triggerEvent?: boolean;
  trackHash?: boolean;
  ecommerce?: boolean | string;
  type?: number;
  userParams?: UserParams;
}

export type MetrikaOptions = {
  src?: string;
  counter: MetrikaCounter | MetrikaCounter[];
};
```

### Layout

Ajoute les scripts et styles du fichier de manifeste des assets webpack.

Utilisation :

```js
import {createRenderFunction, createLayoutPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([
  createLayoutPlugin({manifest: 'chemin/vers/assets-manifest.json', publicPath: '/build/'}),
]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Page d\'accueil',
      pluginsOptions: {
        layout: {
          name: 'home',
        },
      },
    }),
  );
});
```

Options du plugin :

```typescript
export interface LayoutOptions {
  name: string;
  prefix?: string;
}
```

#### Replis pour le chemin public

Charge les scripts et feuilles de style initiaux à partir d'adresses de secours si le chargement depuis `publicPath` échoue.

Utilisation :

```js
createLayoutPlugin({
  manifest: 'chemin/vers/assets-manifest.json',
  publicPath: 'https://static.example.com/build/',
  publicPathFallbacks: ['https://backup.example.com/build/', '/build/'],
});
```

Ces options sont également disponibles dans `createDefaultPlugins({layout: …})`. Activez le plugin de mise en page avec `pluginsOptions.layout.name`, comme dans l'exemple ci-dessus. Omettre `publicPathFallbacks` ou passer `[]` préserve le rendu normal.

Vous pouvez également utiliser une fonction de rappel :

```js
createLayoutPlugin({
  manifest: 'chemin/vers/assets-manifest.json',
  publicPath: 'https://static.example.com/build/',
  publicPathFallbacks: () =>
    location.hostname.endsWith('.example.org')
      ? ['https://backup.example.org/build/', '/build/']
      : ['/build/'],
});
```

La fonction s'exécute une fois et doit être autonome, sans fermetures ni imports. Elle reçoit `{publicPath}`; pour les chemins principaux relatifs à la racine, cette valeur inclut `layout.prefix`. Retourner `[]` utilise l'adresse principale sans nouvelles tentatives.

Le chargeur est regroupé et minifié lors de la compilation de app-layout. Le rappel utilisateur est sérialisé à partir du code serveur compilé en utilisant `Function.prototype.toString()` : des transformations comme `keepNames` d'esbuild peuvent injecter des assistants externes (`__name`) indisponibles dans le navigateur. Testez les rappels dans votre build serveur final. Si le bootstrap échoue, les enregistrements synchrones pendant l'analyse HTML restaurent les balises d'origine via `document.write`, sous réserve des restrictions du navigateur ; la récupération ne peut pas aider si CSP bloque les scripts d'enregistrement.

Options de nouvelle tentative :

```typescript
interface AssetRetryOptions {
  retries?: number; // Tentatives supplémentaires par adresse. Par défaut : 0.
  delayMs?: number; // Délai avant la première nouvelle tentative, en millisecondes. Par défaut : 500.
  factor?: number; // Multiplicateur pour les délais de nouvelles tentatives ultérieures. Par défaut : 2.
  maxDelayMs?: number; // Délai maximum de nouvelle tentative, en millisecondes. Par défaut : 3000.
  timeoutMs?: number; // Délai d'attente de la tentative, en millisecondes. Par défaut : 10000 ; 0 désactive.
}
```

Passez ces options en tant que `assetRetry` à `createLayoutPlugin`. Par défaut, une erreur de ressource passe à l'adresse suivante sans retenter la même URL. Définissez `retries` pour activer des tentatives supplémentaires avec des délais exponentiels. Le chargeur mémorise la dernière adresse réussie et commence les ressources suivantes là, parcourant les adresses restantes comme secours. Un échec individuel ne modifie pas l'adresse préférée ; il ne change qu'après un chargement réussi. Les ressources en cours de chargement conservent leur ordre de candidats. Les valeurs d'option explicitement `undefined` utilisent les valeurs par défaut.

Chaque tentative de script ou de feuille de style a une limite `timeoutMs` (10000 ms par défaut). Un délai d'attente suit la même politique de nouvelle tentative qu'une erreur de chargement : retenter l'URL actuelle tant qu'il reste des tentatives, puis essayer l'adresse suivante. Définissez `0` pour désactiver le délai d'attente. Le chargeur supprime les éléments dont le délai d'attente a expiré et ignore leurs rappels tardifs ; la suppression d'un script ne garantit pas l'annulation de son exécution.

Les adresses de secours doivent servir les mêmes fichiers de build aux mêmes chemins relatifs. N'incluez pas de paramètres de requête ni de fragments dans les adresses de base. Les barres obliques finales sont ajoutées et les adresses dupliquées sont supprimées automatiquement. Un chemin tel que `/build/` est relatif à l'origine de la page ; incluez explicitement tout préfixe d'application. Autorisez les domaines de secours dans CSP et configurez CORS.

Comportement de chargement :

- Prend en charge les scripts `defer` sans `async` ni `type`, ainsi que les feuilles de style sous le chemin principal, en préservant le nonce et `crossOrigin`. Les autres ressources conservent un rendu normal. Tous les actifs gérés d'un fragment de réponse sont enregistrés par un seul script inline émis juste après le bootstrap, dans l'ordre de la tête (feuilles de style, puis scripts) ; leurs balises d'origine ne sont pas rendues.
- Les feuilles de style se chargent en parallèle. Les scripts s'exécutent dans l'ordre après la fin des tentatives de chargement des feuilles de style et lorsque le DOM est prêt. `DOMContentLoaded` ne signifie pas que l'application a fini de charger.
- Les échecs finaux émettent `app-layout:asset-load-error` sur `window`. Le détail de l'événement contient `{type, originalUrl, attempts}` et est décrit par le type exporté `AssetLoadError` ; `attempts` liste les URL tentées, y compris les nouvelles tentatives. Enregistrez le gestionnaire avant le chargement des ressources. Un échec final de chargement de feuille de style ne bloque pas les scripts ; un échec final de chargement de script arrête la file d'attente des scripts du chargeur.
- Pour les scripts précoces lors du streaming, utilisez `renderScripts(content, scripts, state)`, puis `renderHeadContent(content, state)` avec le même `state: AssetRenderState = {}` pour une seule réponse HTML, même si le contenu est régénéré. Le bootstrap est émis une seule fois ; sa configuration initiale s'applique à l'ensemble de la réponse. Les appels directs à `content.helpers` rendent des balises ordinaires sans gestion de secours.

```ts
import {renderHeadContent, renderScripts, type AssetRenderState} from '@gravity-ui/app-layout';

const state: AssetRenderState = {};
res.write(renderScripts(content, firstScripts, state));
// ... attendre les données et régénérer le contenu si nécessaire.
res.write(renderHeadContent(content, state));
```

Les chunks différés nécessitent une configuration séparée, telle que `client.publicPathFallback` dans [App Builder](https://github.com/gravity-ui/app-builder). Configurez les adresses de secours dans les deux bibliothèques ; la liste de secours n'est pas partagée via une variable globale.

### @gravity-ui/uikit

Ajoute des attributs au corps.

Utilisation :

```js
import {createRenderFunction, createUikitPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createUikitPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Page d\'accueil',
      pluginsOptions: {
        uikit: {
          theme: 'dark',
          direction: 'ltr',
        },
      },
    }),
  );
});
```

Options du plugin :

```typescript
interface UikitPluginOptions {
  theme: string;
  direction?: 'ltr' | 'rtl';
}
```

### Versions distantes

Ajoute des informations sur les versions des micro-frontends à la page.

Ce plugin crée un objet global `window.__REMOTE_VERSIONS__` contenant les versions des micro-frontends fournies, qui peut être utilisé par la fédération de modules ou des architectures de micro-frontends similaires pour déterminer quelles versions des modules distants charger.

Il peut être utilisé en combinaison avec [App Builder](https://github.com/gravity-ui/app-builder?tab=readme-ov-file#module-federation) et l'option `moduleFederation.remotesRuntimeVersioning` pour charger automatiquement les modules distants avec les versions correspondantes.

Utilisation :

```js
import {createRenderFunction, createRemoteVersionsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createRemoteVersionsPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Page d\'accueil',
      pluginsOptions: {
        remoteVersions: {
          header: '1.2.3',
          footer: '2.1.0',
          sidebar: '0.5.1',
        },
      },
    }),
  );
});
```

Options du plugin :

```typescript
type RemoteVersionsPluginOptions = Record<string, string>;
```

### Helpers

Il existe un helper pour créer tous les plugins :

```js
import {createMiddleware, createDefaultPlugins} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction(
    createDefaultPlugins({layout: {manifest: 'path/to/assets-manifest.json'}})
);

app.get((req, res) => {
    res.send(renderLayout({
        title: 'Page d\'accueil',
        pluginsOptions: {
            layout: {
                name: 'home'
            },
            googleAnalytics: {
                counter: {...}
            },
            yandexMetrika: {
                counter: {...}
            },
        },
    }));
})
```

## Utilisation alternative

Avec les renderers de parties `generateRenderContent`, `renderHeadContent`, `renderBodyContent` via le streaming HTML :

```js
import express from 'express';
import htmlescape from 'htmlescape';
import {
  generateRenderContent,
  renderHeadContent,
  renderBodyContent,
  createDefaultPlugins,
} from '@gravity-ui/app-layout';

const app = express();

app.get('/', async function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Transfer-Encoding': 'chunked',
  });

  const plugins = createDefaultPlugins({layout: {manifest: 'path/to/assets-manifest.json'}});

  const content = generateRenderContent(plugins, {
    title: 'Page d\'accueil',
  });

  const {htmlAttributes, helpers, bodyContent} = content;

  res.write(`
        <!DOCTYPE html>
        <html ${helpers.attrs({...htmlAttributes})}>
        <head>
            ${renderHeadContent(content)}
        </head>
        <body ${helpers.attrs(bodyContent.attributes)}>
            ${renderBodyContent(content)}
    `);

  const data = await getUserData();

  res.write(`
            ${content.renderHelpers.renderInlineScript(`
                window.__DATA__ = ${htmlescape(data)};
            `)}
        </body>
        </html>
    `);
  res.end();
});

app.listen(3000);
```