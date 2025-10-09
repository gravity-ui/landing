# @gravity-ui/app-layout &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/app-layout)](https://www.npmjs.com/package/@gravity-ui/app-layout) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/app-layout/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/app-layout/actions/workflows/ci.yml?query=branch:main)

## Instalación

```shell
npm install --save-dev @gravity-ui/app-layout
```

## Uso

Con `express`:

```js
import express from 'express';
import {createRenderFunction} from '@gravity-ui/app-layout';

const app = express();

const renderLayout = createRenderFunction();

app.get('/', function (req, res) {
  res.send(
    renderLayout({
      // RenderParams
      title: 'Página de inicio',
      bodyContent: {
        root: '¡Hola mundo!',
      },
    }),
  );
});

app.listen(3000);
```

donde

```typescript
interface RenderParams<Data, Plugins> {
  // Cualquier dato compatible con JSON, se establecerá en window.__DATA__ en la página
  data?: Data;
  // favicon
  icon?: Icon;
  // nonce que se establecerá en las etiquetas apropiadas
  nonce?: string;

  // opciones comunes
  // Título de la página
  title: string;
  // idioma de la página, se establecerá en la etiqueta html
  lang?: string;
  isMobile?: boolean;

  // atributos html
  htmlAttributes?: string;
  // contenido de la etiqueta header
  // etiquetas meta
  meta?: Meta[];
  // etiquetas link
  links?: Link[];
  // etiquetas script
  scripts?: Script[];
  // etiquetas style
  styleSheets?: Stylesheet[];
  // etiquetas script con código en línea
  inlineScripts?: string[];
  // etiquetas style con estilos en línea
  inlineStyleSheets?: string[];

  // contenido de la etiqueta body
  bodyContent?: {
    // nombre de clase para la etiqueta body
    className?: string;
    // atributos del body
    attributes?: string;
    // contenido del body antes de la etiqueta div con id root
    beforeRoot?: string;
    // contenido innerHtml de la etiqueta div con id root
    root?: string;
    // contenido del body después de la etiqueta div con id root
    afterRoot?: string;
  };
  // opciones de plugins
  pluginsOptions?: Partial<PluginsOptions<Plugins>>;
}
```

### Meta

Describe la etiqueta `meta`:

```typescript
interface Meta {
  name: string;
  content: string;
}
```

Ejemplo:

```js
const meta = [
  {name: 'description', content: 'algún texto'},
  {name: 'robots', content: 'noindex'},
  {name: 'og:title', content: 'Algún título'},
];
```

Se renderizará como:

```html
<meta name="description" content="algún texto" />
<meta name="robots" content="noindex" />
<meta property="og:title" content="Algún título" />
```

### Icon

Describe el favicon de la página:

```typescript
interface Icon {
  type?: string;
  sizes?: string;
  href?: string;
}
```

El valor predeterminado es:

```js
const icon = {
  type: 'image/png',
  sizes: '16x16',
  href: '/favicon.png',
};
```

### Links

Describe la etiqueta `link`:

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

Ejemplo:

```js
const link = {
  href: 'myFont.woff2',
  rel: 'preload',
  as: 'font',
  type: 'font/woff2',
  crossOrigin: 'anonymous',
};
```

se renderizará como:

```html
<link href="myFont.woff2" rel="preload" as="font" type="font/woff2" crossorigin="anonymous" />
```

### Scripts

Describe el enlace a un script con precarga:

```typescript
interface Script {
  src: string;
  defer?: boolean;
  async?: boolean;
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
  type?: 'importmap' | 'module' | string;
}
```

Ejemplo:

```js
const script = {
  src: 'url/to/script',
  defer: true,
  async: false,
  crossOrigin: 'anonymous',
};
```

se renderizará como:

```html
<link href="url/to/script" rel="preload" as="script" crossorigin="anonymous" />

<script src="url/to/script" defer="true" async="false" crossorigin="anonymous" nonce="..."></script>
```

#### Hojas de estilo

Describen el enlace a estilos:

```typescript
interface Stylesheet {
  href: string;
}
```

Ejemplo:

```js
const styleSheet = {
  href: 'url/to/stylesheet',
};
```

se renderizará como:

```html
<link href="url/to/stylesheet" rel="stylesheet" />
```

## Plugins

La función de renderizado puede extenderse mediante plugins. Un plugin puede reescribir el contenido de renderizado definido por el usuario.
Un plugin es un objeto con las propiedades `name` y `apply`:

```typescript
interface Plugin<Options = any, Name = string> {
  name: Name;
  apply: (params: {
    options: Options | undefined; // pasado a través de la función `renderLayout` en el parámetro `pluginsOptions`.
    commonOptions: CommonOptions;
    renderContent: RenderContent;
    /** @deprecated usar `renderContent.helpers` en su lugar */
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

Hay algunos plugins en este paquete:

### Google analytics

Añade el contador de Google Analytics a la página.

Uso:

```js
import {createRenderFunction, createGoogleAnalyticsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createGoogleAnalyticsPlugin()]);
```

```html
<div class="language-selector">
  <a href="/en/README.md">English</a>
  <a href="/es/README.md">Español</a>
</div>
```

```js
app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Página de inicio',
      pluginsOptions: {
        googleAnalytics: {
          useBeaconTransport: true, // habilita el uso de navigator.sendBeacon
          counter: {
            id: 'algún id',
          },
        },
      },
    }),
  );
});
```

Opciones del plugin:

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

Añade contadores de métricas de Yandex a la página.

Uso:

```js
import {createRenderFunction, createYandexMetrikaPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createYandexMetrikaPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Página de inicio',
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

Opciones del plugin:

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

Añade scripts y estilos del archivo de manifiesto de assets de webpack.

Uso:

```js
import {createRenderFunction, createLayoutPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createLayoutPlugin({manifest: 'path/to/assets-manifest.json', publicPath: '/build/'})]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Página de inicio',
      pluginsOptions: {
        layout: {
          name: 'home',
        },
      },
    }),
  );
});
```

Opciones del plugin:

```typescript
export interface LayoutOptions {
  name: string;
  prefix?: string;
}
```

### @gravity-ui/uikit

Añade atributos al `body`.

Uso:

```js
import {createRenderFunction, createUikitPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createUikitPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Página de inicio',
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

Opciones del plugin:

```typescript
interface UikitPluginOptions {
  theme: string;
  direction?: 'ltr' | 'rtl';
}
```

### Remote Versions

Añade información de versiones de microfrontends a la página.

Este plugin crea un objeto global `window.__REMOTE_VERSIONS__` que contiene las versiones de microfrontends proporcionadas, las cuales pueden ser utilizadas por module federation o arquitecturas de microfrontends similares para determinar qué versiones de módulos remotos cargar.

Puede ser utilizado en combinación con [App Builder](https://github.com/gravity-ui/app-builder?tab=readme-ov-file#module-federation) y la opción `moduleFederation.remotesRuntimeVersioning` para cargar automáticamente módulos remotos con las versiones correspondientes.

Uso:

```js
import {createRenderFunction, createRemoteVersionsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createRemoteVersionsPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Página de inicio',
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

Opciones del plugin:

```typescript
type RemoteVersionsPluginOptions = Record<string, string>;
```

### Helpers

Existe un helper para crear todos los plugins:

```js
import {createMiddleware, createDefaultPlugins} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction(
    createDefaultPlugins({layout: {manifest: 'path/to/assets-manifest.json'}})
);

app.get((req, res) => {
    res.send(renderLayout({
        title: 'Página de inicio',
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

## Uso alternativo

Con renderizadores de partes `generateRenderContent`, `renderHeadContent`, `renderBodyContent` a través de streaming de HTML:

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
    title: 'Página de inicio',
  });

  const {htmlAttributes, helpers, bodyContent} = content;
```

```html
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mi Aplicación</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <h1>Bienvenido a Mi Aplicación</h1>
            <p>Esta es una página de ejemplo.</p>
            <div id="root"></div>
            <script>
                window.__DATA__ = {"user": "ejemplo"};
            </script>
        </body>
        </html>
    
```