# @gravity-ui/app-layout &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/app-layout)](https://www.npmjs.com/package/@gravity-ui/app-layout) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/app-layout/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/app-layout/actions/workflows/ci.yml?query=branch:main)

## Install

```shell
npm install --save-dev @gravity-ui/app-layout
```

## Usage

With `express`:

```js
import express from 'express';
import {createRenderFunction} from '@gravity-ui/app-layout';

const app = express();

const renderLayout = createRenderFunction();

app.get('/', function (req, res) {
  res.send(
    renderLayout({
      // RenderParams
      title: 'Home page',
      bodyContent: {
        root: 'Hello world!',
      },
    }),
  );
});

app.listen(3000);
```

where

```typescript
interface RenderParams<Data, Plugins> {
  // Any json compatible data, will be set to window.__DATA__ on the page
  data?: Data;
  // favicon
  icon?: Icon;
  // nonce to be set on the appropriate tags
  nonce?: string;
  // base tag attributes
  base?: Base;

  // common options
  // Page title
  title: string;
  // language of page, will be set to html tag
  lang?: string;
  isMobile?: boolean;

  // html attributes
  htmlAttributes?: string;
  // header tag content
  // meta tags
  meta?: Meta[];
  // link tags
  links?: Link[];
  // script tags
  scripts?: Script[];
  // style tags
  styleSheets?: Stylesheet[];
  // script tags with inlined code
  inlineScripts?: string[];
  // style tags with inlined styles
  inlineStyleSheets?: string[];

  // content of body tag
  bodyContent?: {
    // class name for body tag
    className?: string;
    // body attributes
    attributes?: string;
    // body content before div tag with id root
    beforeRoot?: string;
    // innerHtml content of div tag with id root
    root?: string;
    // body content after div tag with id root
    afterRoot?: string;
  };
  // plugins options
  pluginsOptions?: Partial<PluginsOptions<Plugins>>;
}
```

### Base

Describes `base` tag:

```typescript
interface Base {
  href?: string;
  target?: HTMLBaseElement['target'];
}
```

Example:

```js
renderLayout({
  title: 'Home page',
  base: {target: '_top'},
});
```

Will be rendered as:

```html
<base target="_top" />
```

### Meta

Describes `meta` tag:

```typescript
interface Meta {
  name: string;
  content: string;
}
```

Example:

```js
const meta = [
  {name: 'description', content: 'some text'},
  {name: 'robots', content: 'noindex'},
  {name: 'og:title', content: 'Some title'},
];
```

Will be rendered as:

```html
<meta name="description" content="some text" />
<meta name="robots" content="noindex" />
<meta property="og:title" content="Some title" />
```

### Icon

Describes page favicon:

```typescript
interface Icon {
  type?: string;
  sizes?: string;
  href?: string;
}
```

Default value is:

```js
const icon = {
  type: 'image/png',
  sizes: '16x16',
  href: '/favicon.png',
};
```

### Links

Describes `link` tag:

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

Example:

```js
const link = {
  href: 'myFont.woff2',
  rel: 'preload',
  as: 'font',
  type: 'font/woff2',
  crossOrigin: 'anonymous',
};
```

will be rendered as:

```html
<link href="myFont.woff2" rel="preload" as="font" type="font/woff2" crossorigin="anonymous" />
```

### Scripts

Describes link to script with preload:

```typescript
interface Script {
  src: string;
  defer?: boolean;
  async?: boolean;
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
  type?: 'importmap' | 'module' | string;
}
```

Example:

```js
const script = {
  src: 'url/to/script',
  defer: true,
  async: false,
  crossOrigin: 'anonymous',
};
```

will be rendered as:

```html
<link href="url/to/script" rel="preload" as="script" crossorigin="anonymous" />

<script src="url/to/script" defer="true" async="false" crossorigin="anonymous" nonce="..."></script>
```

#### Style sheets

Describe link to styles:

```typescript
interface Stylesheet {
  href: string;
}
```

Example:

```js
const styleSheet = {
  href: 'url/to/stylesheet',
};
```

will be rendered as:

```html
<link href="url/to/stylesheet" rel="stylesheet" />
```

## Plugins

Render function can be extended by plugins. Plugin may rewrite user defined render content.
Plugin is an object with `name` and `apply` properties:

```typescript
interface Plugin<Options = any, Name = string> {
  name: Name;
  apply: (params: {
    options: Options | undefined; // passed through `renderLayout` function in `pluginsOptions` parameter.
    commonOptions: CommonOptions;
    renderContent: RenderContent;
    /** @deprecated use `renderContent.helpers` instead */
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

There are some plugins in this package:

### Google analytics

Adds google analytics counter on the page.

Usage:

```js
import {createRenderFunction, createGoogleAnalyticsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createGoogleAnalyticsPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Home page',
      pluginsOptions: {
        googleAnalytics: {
          useBeaconTransport: true, // enables use of navigator.sendBeacon
          counter: {
            id: 'some id',
          },
        },
      },
    }),
  );
});
```

Plugin options:

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

Adds Yandex metrics counters on the page.

Usage:

```js
import {createRenderFunction, createYandexMetrikaPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createYandexMetrikaPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Home page',
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

Plugin options:

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

Adds script and styles from webpack assets manifest file.

Usage:

```js
import {createRenderFunction, createLayoutPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([
  createLayoutPlugin({manifest: 'path/to/assets-manifest.json', publicPath: '/build/'}),
]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Home page',
      pluginsOptions: {
        layout: {
          name: 'home',
        },
      },
    }),
  );
});
```

Plugin options:

```typescript
export interface LayoutOptions {
  name: string;
  prefix?: string;
}
```

#### Public path fallbacks

Loads initial scripts and stylesheets from backup addresses if loading from `publicPath` fails.

Usage:

```js
createLayoutPlugin({
  manifest: 'path/to/assets-manifest.json',
  publicPath: 'https://static.example.com/build/',
  publicPathFallbacks: ['https://backup.example.com/build/', '/build/'],
});
```

These options are also available in `createDefaultPlugins({layout: …})`. Enable the layout plugin with `pluginsOptions.layout.name`, as in the example above. Omitting `publicPathFallbacks` or passing `[]` preserves normal rendering.

You can also use a callback function:

```js
createLayoutPlugin({
  manifest: 'path/to/assets-manifest.json',
  publicPath: 'https://static.example.com/build/',
  publicPathFallbacks: () =>
    location.hostname.endsWith('.example.org')
      ? ['https://backup.example.org/build/', '/build/']
      : ['/build/'],
});
```

The function runs once and must be self-contained, without closures or imports. It receives `{publicPath}`; for root-relative primary paths, this value includes `layout.prefix`. Returning `[]` uses the primary address without retries.

The loader is bundled and minified when app-layout is built. The user callback is serialized from compiled server code using `Function.prototype.toString()`: transformations such as esbuild `keepNames` can inject external helpers (`__name`) that are unavailable in the browser. Test callbacks in your final server build. If bootstrap throws, synchronous registrations during HTML parsing restore script tags via `document.write`, subject to browser restrictions; recovery cannot help if CSP blocks the registration scripts.

Retry options:

```typescript
interface AssetRetryOptions {
  retries?: number; // Additional attempts per address. Default: 0.
  delayMs?: number; // Delay before the first retry, in milliseconds. Default: 500.
  factor?: number; // Multiplier for subsequent retry delays. Default: 2.
  maxDelayMs?: number; // Maximum retry delay, in milliseconds. Default: 3000.
  timeoutMs?: number; // Attempt timeout, in milliseconds. Default: 10000; 0 disables.
}
```

Pass these options as `assetRetry` to `createLayoutPlugin`. By default, a resource error switches to the next address without retrying the same URL. Set `retries` to enable additional attempts with exponential delays. The loader remembers the last successful address and starts subsequent scripts there, cycling through the remaining addresses as backups. Stylesheets always start at `publicPath`, then try backup addresses in the configured order. An individual failure does not change the preferred address; it changes only after a successful load. In-flight resources keep their candidate order. Explicit `undefined` option values use the defaults.

Each script or stylesheet attempt has a `timeoutMs` limit (10000 ms by default). A timeout follows the same retry policy as a loading error: retry the current URL while attempts remain, then try the next address. Set `0` to disable the timeout. The loader removes timed-out elements and ignores their late callbacks; removing a script does not guarantee cancellation of its execution.

Backup addresses must serve the same build files at the same relative paths. Do not include query parameters or fragments in base addresses. Trailing slashes are added and duplicate addresses are removed automatically. A path such as `/build/` is relative to the page's origin; include any application prefix explicitly. Allow backup domains in CSP and configure CORS.

Loading behavior:

- Supports `defer` scripts without `async` or `type`, and stylesheets under the primary path, preserving `nonce` and `crossOrigin`. Other resources retain normal rendering. All managed assets of a response fragment are registered by a single inline script emitted right after the bootstrap, in head order (stylesheets, then scripts); original script tags are not rendered.
- Stylesheets are included in the HTML and load in parallel, even if the JavaScript loader cannot start. Partially styled content may be visible during retries. Scripts run in order after stylesheet attempts finish and the DOM is ready. `DOMContentLoaded` does not mean the application has finished loading.
- Final failures emit `app-layout:asset-load-error` on `window`. The event detail contains `{type, originalUrl, attempts}` and is described by the exported `AssetLoadError` type; `attempts` lists attempted URLs, including retries. Register the handler before resources load. A final stylesheet loading failure does not block scripts; a final script loading failure stops the loader’s script queue.
- For early scripts during streaming, use `renderScripts(content, scripts, state)`, then `renderHeadContent(content, state)` with the same `state: AssetRenderState = {}` for one HTML response, even if content is regenerated. Call `renderHeadContent` once per HTML response. Bootstrap is emitted once; its initial configuration applies to the entire response. Direct `content.helpers` calls render ordinary tags without fallback handling.
- During streaming, a stylesheet's `timeoutMs` starts when its reference arrives in the HTML. Registered stylesheet links that cannot be found by `DOMContentLoaded` are reported as failed and do not block scripts.

```ts
import {renderHeadContent, renderScripts, type AssetRenderState} from '@gravity-ui/app-layout';

const state: AssetRenderState = {};
res.write(renderScripts(content, firstScripts, state));
// ... await data and regenerate content if needed.
res.write(renderHeadContent(content, state));
```

Lazy chunks require separate configuration, such as `client.publicPathFallback` in [App Builder](https://github.com/gravity-ui/app-builder). Configure the backup addresses in both libraries; the fallback list is not shared through a global variable.

### @gravity-ui/uikit

Adds body attributes.

Usage:

```js
import {createRenderFunction, createUikitPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createUikitPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Home page',
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

Plugin options:

```typescript
interface UikitPluginOptions {
  theme: string;
  direction?: 'ltr' | 'rtl';
}
```

### Remote Versions

Adds microfrontend versions information to the page.

This plugin creates a global `window.__REMOTE_VERSIONS__` object containing the provided microfrontend versions, which can be used by module federation or similar microfrontend architectures to determine which versions of remote modules to load.

It can be used in combination with [App Builder](https://github.com/gravity-ui/app-builder?tab=readme-ov-file#module-federation) and the `moduleFederation.remotesRuntimeVersioning` option to automatically load remote modules with the corresponding versions.

Usage:

```js
import {createRenderFunction, createRemoteVersionsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createRemoteVersionsPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Home page',
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

Plugin options:

```typescript
type RemoteVersionsPluginOptions = Record<string, string>;
```

### Helpers

There is helper to create all plugins:

```js
import {createMiddleware, createDefaultPlugins} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction(
    createDefaultPlugins({layout: {manifest: 'path/to/assets-manifest.json'}})
);

app.get((req, res) => {
    res.send(renderLayout({
        title: 'Home page',
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

## Alternative usage

With parts renderers `generateRenderContent`, `renderHeadContent`, `renderBodyContent` via html streaming:

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
    title: 'Home page',
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
