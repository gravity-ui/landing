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
    // attributs de la balise body
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

Ajoute un compteur Google Analytics sur la page.

Utilisation :

```js
import {createRenderFunction, createGoogleAnalyticsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createGoogleAnalyticsPlugin()]);
```

```html
<div class="language-selector">
  <a href="/README.md">English</a>
  <a href="/README.fr.md">Français</a>
</div>
```

```js
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

Ajoute les compteurs de métriques Yandex sur la page.

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

Ajoute les scripts et les styles du fichier manifest des assets webpack.

Utilisation :

```js
import {createRenderFunction, createLayoutPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([
  createLayoutPlugin({manifest: 'path/to/assets-manifest.json', publicPath: '/build/'}),
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

### @gravity-ui/uikit

Ajoute des attributs au corps de la page.

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

### Remote Versions

Ajoute les informations de version des micro-frontends à la page.

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

Il existe une aide pour créer tous les plugins :

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

Avec les renderers partiels `generateRenderContent`, `renderHeadContent`, `renderBodyContent` via le streaming HTML :

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
```

```html
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