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
  // atributos de la etiqueta base
  base?: Base;

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
  // hojas de estilo
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

### Base

Describe la etiqueta `base`:

```typescript
interface Base {
  href?: string;
  target?: HTMLBaseElement['target'];
}
```

Ejemplo:

```js
renderLayout({
  title: 'Página de inicio',
  base: {target: '_top'},
});
```

Se renderizará como:

```html
<base target="_top" />
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

El valor por defecto es:

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

La función de renderizado se puede extender mediante plugins. Un plugin puede reescribir el contenido de renderizado definido por el usuario.
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

Hay algunos plugins en este paquete:

### Google analytics

Agrega un contador de Google Analytics a la página.

Uso:

```js
import {createRenderFunction, createGoogleAnalyticsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createGoogleAnalyticsPlugin()]);

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

Agrega contadores de Yandex Metrika a la página.

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

Agrega scripts y estilos desde el archivo de manifiesto de assets de webpack.

Uso:

```js
import {createRenderFunction, createLayoutPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([
  createLayoutPlugin({manifest: 'ruta/a/assets-manifest.json', publicPath: '/build/'}),
]);

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

#### Fallbacks de ruta pública

Carga scripts y hojas de estilo iniciales desde direcciones de respaldo si la carga desde `publicPath` falla.

Uso:

```js
createLayoutPlugin({
  manifest: 'ruta/a/assets-manifest.json',
  publicPath: 'https://static.example.com/build/',
  publicPathFallbacks: ['https://backup.example.com/build/', '/build/'],
});
```

Estas opciones también están disponibles en `createDefaultPlugins({layout: …})`. Habilita el plugin de layout con `pluginsOptions.layout.name`, como en el ejemplo anterior. Omitir `publicPathFallbacks` o pasar `[]` preserva la renderización normal.

También puedes usar una función de callback:

```js
createLayoutPlugin({
  manifest: 'ruta/a/assets-manifest.json',
  publicPath: 'https://static.example.com/build/',
  publicPathFallbacks: () =>
    location.hostname.endsWith('.example.org')
      ? ['https://backup.example.org/build/', '/build/']
      : ['/build/'],
});
```

La función se ejecuta una vez y debe ser autocontenida, sin cierres ni importaciones. Recibe `{publicPath}`; para rutas primarias relativas a la raíz, este valor incluye `layout.prefix`. Devolver `[]` usa la dirección principal sin reintentos.

El cargador se empaqueta y se minimiza cuando se compila app-layout. El callback del usuario se serializa desde el código del servidor compilado usando `Function.prototype.toString()`: transformaciones como `keepNames` de esbuild pueden inyectar ayudantes externos (`__name`) que no están disponibles en el navegador. Prueba los callbacks en tu compilación de servidor final. Si bootstrap falla, los registros síncronos durante el análisis HTML restauran las etiquetas de script a través de `document.write`, sujeto a restricciones del navegador; la recuperación no puede ayudar si CSP bloquea los scripts de registro.

Opciones de reintento:

```typescript
interface AssetRetryOptions {
  retries?: number; // Intentos adicionales por dirección. Predeterminado: 0.
  delayMs?: number; // Retraso antes del primer reintento, en milisegundos. Predeterminado: 500.
  factor?: number; // Multiplicador para los retrasos de reintento subsiguientes. Predeterminado: 2.
  maxDelayMs?: number; // Retraso máximo de reintento, en milisegundos. Predeterminado: 3000.
  timeoutMs?: number; // Tiempo de espera del intento, en milisegundos. Predeterminado: 10000; 0 deshabilita.
}
```

Pasa estas opciones como `assetRetry` a `createLayoutPlugin`. Por defecto, un error de recurso cambia a la siguiente dirección sin reintentar la misma URL. Establece `retries` para habilitar intentos adicionales con retrasos exponenciales. El cargador recuerda la última dirección exitosa y comienza los scripts subsiguientes allí, recorriendo las direcciones restantes como respaldos. Las hojas de estilo siempre comienzan en `publicPath`, luego intentan las direcciones de respaldo en el orden configurado. Un fallo individual no cambia la dirección preferida; solo cambia después de una carga exitosa. Los recursos en curso mantienen su orden de candidatos. Los valores de opción explícitamente `undefined` usan los predeterminados.

Cada intento de script o hoja de estilo tiene un límite de `timeoutMs` (10000 ms por defecto). Un tiempo de espera sigue la misma política de reintento que un error de carga: reintenta la URL actual mientras queden intentos, luego intenta la siguiente dirección. Establece `0` para deshabilitar el tiempo de espera. El cargador elimina los elementos que han superado el tiempo de espera e ignora sus callbacks tardíos; eliminar un script no garantiza la cancelación de su ejecución.

Las direcciones de respaldo deben servir los mismos archivos de compilación en las mismas rutas relativas. No incluyas parámetros de consulta ni fragmentos en las direcciones base. Las barras diagonales finales se agregan y las direcciones duplicadas se eliminan automáticamente. Una ruta como `/build/` es relativa al origen de la página; incluye explícitamente cualquier prefijo de aplicación. Permite dominios de respaldo en CSP y configura CORS.

Comportamiento de carga:

- Admite scripts `defer` sin `async` ni `type`, y hojas de estilo bajo la ruta principal, conservando `nonce` y `crossOrigin`. Otros recursos conservan la representación normal. Todos los activos gestionados de un fragmento de respuesta se registran mediante un único script en línea emitido justo después del arranque, en orden de cabecera (hojas de estilo, luego scripts); las etiquetas de script originales no se renderizan.
- Las hojas de estilo se incluyen en el HTML y se cargan en paralelo, incluso si el cargador de JavaScript no puede iniciarse. Es posible que se muestre contenido parcialmente estilizado durante los reintentos. Los scripts se ejecutan en orden después de que finalizan los intentos de carga de hojas de estilo y el DOM está listo. `DOMContentLoaded` no significa que la aplicación haya terminado de cargar.
- Los fallos finales emiten `app-layout:asset-load-error` en `window`. Los detalles del evento contienen `{type, originalUrl, attempts}` y se describen mediante el tipo exportado `AssetLoadError`; `attempts` enumera las URL intentadas, incluidos los reintentos. Registre el manejador antes de que se carguen los recursos. Un fallo final en la carga de una hoja de estilo no bloquea los scripts; un fallo final en la carga de un script detiene la cola de scripts del cargador.
- Para scripts tempranos durante la transmisión, use `renderScripts(content, scripts, state)`, luego `renderHeadContent(content, state)` con el mismo `state: AssetRenderState = {}` para una respuesta HTML, incluso si el contenido se regenera. Llame a `renderHeadContent` una vez por respuesta HTML. El arranque se emite una vez; su configuración inicial se aplica a toda la respuesta. Las llamadas directas a `content.helpers` renderizan etiquetas normales sin manejo de respaldo.
- Durante la transmisión, el `timeoutMs` de una hoja de estilo comienza cuando su referencia llega al HTML. Los enlaces de hoja de estilo registrados que no se encuentran en `DOMContentLoaded` se informan como fallidos y no bloquean los scripts.

```ts
import {renderHeadContent, renderScripts, type AssetRenderState} from '@gravity-ui/app-layout';

const state: AssetRenderState = {};
res.write(renderScripts(content, firstScripts, state));
// ... esperar datos y regenerar contenido si es necesario.
res.write(renderHeadContent(content, state));
```

Los fragmentos diferidos requieren una configuración separada, como `client.publicPathFallback` en [App Builder](https://github.com/gravity-ui/app-builder). Configure las direcciones de respaldo en ambas bibliotecas; la lista de respaldo no se comparte a través de una variable global.

### @gravity-ui/uikit

Agrega atributos al `body`.

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

Agrega información de versiones de microfrontends a la página.

Este plugin crea un objeto global `window.__REMOTE_VERSIONS__` que contiene las versiones de microfrontends proporcionadas, las cuales pueden ser utilizadas por module federation o arquitecturas de microfrontends similares para determinar qué versiones de módulos remotos cargar.

Puede usarse en combinación con [App Builder](https://github.com/gravity-ui/app-builder?tab=readme-ov-file#module-federation) y la opción `moduleFederation.remotesRuntimeVersioning` para cargar automáticamente módulos remotos con las versiones correspondientes.

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

Hay un helper para crear todos los plugins:

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

Con renderizadores de partes `generateRenderContent`, `renderHeadContent`, `renderBodyContent` a través de streaming HTML:

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