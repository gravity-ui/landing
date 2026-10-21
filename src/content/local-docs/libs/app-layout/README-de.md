# @gravity-ui/app-layout &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/app-layout)](https://www.npmjs.com/package/@gravity-ui/app-layout) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/app-layout/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/app-layout/actions/workflows/ci.yml?query=branch:main)

## Installation

```shell
npm install --save-dev @gravity-ui/app-layout
```

## Verwendung

Mit `express`:

```js
import express from 'express';
import {createRenderFunction} from '@gravity-ui/app-layout';

const app = express();

const renderLayout = createRenderFunction();

app.get('/', function (req, res) {
  res.send(
    renderLayout({
      // RenderParams
      title: 'Startseite',
      bodyContent: {
        root: 'Hallo Welt!',
      },
    }),
  );
});

app.listen(3000);
```

wobei

```typescript
interface RenderParams<Data, Plugins> {
  // Beliebige JSON-kompatible Daten, werden auf der Seite unter window.__DATA__ gesetzt
  data?: Data;
  // Favicon
  icon?: Icon;
  // Nonce, die auf die entsprechenden Tags gesetzt wird
  nonce?: string;
  // Attribute für das base-Tag
  base?: Base;

  // Allgemeine Optionen
  // Seitentitel
  title: string;
  // Sprache der Seite, wird auf dem html-Tag gesetzt
  lang?: string;
  isMobile?: boolean;

  // html-Attribute
  htmlAttributes?: string;
  // Inhalt des header-Tags
  // Meta-Tags
  meta?: Meta[];
  // Link-Tags
  links?: Link[];
  // Script-Tags
  scripts?: Script[];
  // Stylesheet-Tags
  styleSheets?: Stylesheet[];
  // Script-Tags mit eingebettetem Code
  inlineScripts?: string[];
  // Style-Tags mit eingebetteten Styles
  inlineStyleSheets?: string[];

  // Inhalt des body-Tags
  bodyContent?: {
    // Klassenname für das body-Tag
    className?: string;
    // Attribute für das body-Tag
    attributes?: string;
    // Inhalt des body-Tags vor dem div-Tag mit der ID root
    beforeRoot?: string;
    // Innerer HTML-Inhalt des div-Tags mit der ID root
    root?: string;
    // Inhalt des body-Tags nach dem div-Tag mit der ID root
    afterRoot?: string;
  };
  // Plugin-Optionen
  pluginsOptions?: Partial<PluginsOptions<Plugins>>;
}
```

### Base

Beschreibt das `base`-Tag:

```typescript
interface Base {
  href?: string;
  target?: HTMLBaseElement['target'];
}
```

Beispiel:

```js
renderLayout({
  title: 'Startseite',
  base: {target: '_top'},
});
```

Wird gerendert als:

```html
<base target="_top" />
```

### Meta

Beschreibt das `meta`-Tag:

```typescript
interface Meta {
  name: string;
  content: string;
}
```

Beispiel:

```js
const meta = [
  {name: 'description', content: 'Ein Text'},
  {name: 'robots', content: 'noindex'},
  {name: 'og:title', content: 'Ein Titel'},
];
```

Wird gerendert als:

```html
<meta name="description" content="Ein Text" />
<meta name="robots" content="noindex" />
<meta property="og:title" content="Ein Titel" />
```

### Icon

Beschreibt das Favicon der Seite:

```typescript
interface Icon {
  type?: string;
  sizes?: string;
  href?: string;
}
```

Standardwert ist:

```js
const icon = {
  type: 'image/png',
  sizes: '16x16',
  href: '/favicon.png',
};
```

### Links

Beschreibt das `link`-Tag:

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

Beispiel:

```js
const link = {
  href: 'myFont.woff2',
  rel: 'preload',
  as: 'font',
  type: 'font/woff2',
  crossOrigin: 'anonymous',
};
```

wird gerendert als:

```html
<link href="myFont.woff2" rel="preload" as="font" type="font/woff2" crossorigin="anonymous" />
```

### Scripts

Beschreibt den Link zu einem Skript mit Preload:

```typescript
interface Script {
  src: string;
  defer?: boolean;
  async?: boolean;
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
  type?: 'importmap' | 'module' | string;
}
```

Beispiel:

```js
const script = {
  src: 'url/to/script',
  defer: true,
  async: false,
  crossOrigin: 'anonymous',
};
```

wird gerendert als:

```html
<link href="url/to/script" rel="preload" as="script" crossorigin="anonymous" />

<script src="url/to/script" defer="true" async="false" crossorigin="anonymous" nonce="..."></script>
```

#### Style sheets

Beschreibt den Link zu Stylesheets:

```typescript
interface Stylesheet {
  href: string;
}
```

Beispiel:

```js
const styleSheet = {
  href: 'url/to/stylesheet',
};
```

wird gerendert als:

```html
<link href="url/to/stylesheet" rel="stylesheet" />
```

## Plugins

Die Renderfunktion kann durch Plugins erweitert werden. Ein Plugin kann den vom Benutzer definierten Renderinhalt überschreiben.
Ein Plugin ist ein Objekt mit den Eigenschaften `name` und `apply`:

```typescript
interface Plugin<Options = any, Name = string> {
  name: Name;
  apply: (params: {
    options: Options | undefined; // wird über den Parameter `pluginsOptions` der Funktion `renderLayout` übergeben.
    commonOptions: CommonOptions;
    renderContent: RenderContent;
    /** @deprecated verwende stattdessen `renderContent.helpers` */
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

Es gibt einige Plugins in diesem Paket:

### Google Analytics

Fügt einen Google Analytics-Zähler zur Seite hinzu.

Verwendung:

```js
import {createRenderFunction, createGoogleAnalyticsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createGoogleAnalyticsPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Startseite',
      pluginsOptions: {
        googleAnalytics: {
          useBeaconTransport: true, // aktiviert die Verwendung von navigator.sendBeacon
          counter: {
            id: 'eine ID',
          },
        },
      },
    }),
  );
});
```

Plugin-Optionen:

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

Fügt Yandex Metrika-Zähler zur Seite hinzu.

Verwendung:

```js
import {createRenderFunction, createYandexMetrikaPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createYandexMetrikaPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Startseite',
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

Plugin-Optionen:

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

Fügt Skripte und Stile aus der Webpack Assets Manifest-Datei hinzu.

Verwendung:

```js
import {createRenderFunction, createLayoutPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([
  createLayoutPlugin({manifest: 'pfad/zu/assets-manifest.json', publicPath: '/build/'}),
]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Startseite',
      pluginsOptions: {
        layout: {
          name: 'home',
        },
      },
    }),
  );
});
```

Plugin-Optionen:

```typescript
export interface LayoutOptions {
  name: string;
  prefix?: string;
}
```

#### Fallbacks für den öffentlichen Pfad

Lädt initiale Skripte und Stylesheets von Backup-Adressen, falls das Laden vom `publicPath` fehlschlägt.

Verwendung:

```js
createLayoutPlugin({
  manifest: 'pfad/zu/assets-manifest.json',
  publicPath: 'https://static.example.com/build/',
  publicPathFallbacks: ['https://backup.example.com/build/', '/build/'],
});
```

Diese Optionen sind auch in `createDefaultPlugins({layout: …})` verfügbar. Aktivieren Sie das Layout-Plugin mit `pluginsOptions.layout.name`, wie im obigen Beispiel. Wenn Sie `publicPathFallbacks` weglassen oder `[]` übergeben, wird das normale Rendering beibehalten.

Sie können auch eine Callback-Funktion verwenden:

```js
createLayoutPlugin({
  manifest: 'pfad/zu/assets-manifest.json',
  publicPath: 'https://static.example.com/build/',
  publicPathFallbacks: () =>
    location.hostname.endsWith('.example.org')
      ? ['https://backup.example.org/build/', '/build/']
      : ['/build/'],
});
```

Die Funktion wird einmal ausgeführt und muss in sich geschlossen sein, ohne Closures oder Importe. Sie empfängt `{publicPath}`; für primäre Pfade, die relativ zur Wurzel sind, enthält dieser Wert `layout.prefix`. Die Rückgabe von `[]` verwendet die primäre Adresse ohne Wiederholungsversuche.

Der Loader wird beim Erstellen von app-layout gebündelt und minimiert. Der Benutzer-Callback wird aus kompiliertem Servercode mithilfe von `Function.prototype.toString()` serialisiert: Transformationen wie esbuild `keepNames` können externe Helfer (`__name`) einfügen, die im Browser nicht verfügbar sind. Testen Sie Callbacks in Ihrem endgültigen Server-Build. Wenn Bootstrap fehlschlägt, stellen synchrone Registrierungen während der HTML-Analyse die ursprünglichen Tags über `document.write` wieder her, vorbehaltlich von Browserbeschränkungen; eine Wiederherstellung kann nicht helfen, wenn CSP die Registrierungsskripte blockiert.

Wiederholungsoptionen:

```typescript
interface AssetRetryOptions {
  retries?: number; // Zusätzliche Versuche pro Adresse. Standard: 0.
  delayMs?: number; // Verzögerung vor dem ersten Wiederholungsversuch in Millisekunden. Standard: 500.
  factor?: number; // Multiplikator für nachfolgende Wiederholungsverzögerungen. Standard: 2.
  maxDelayMs?: number; // Maximale Wiederholungsverzögerung in Millisekunden. Standard: 3000.
  timeoutMs?: number; // Timeout für den Versuch in Millisekunden. Standard: 10000; 0 deaktiviert.
}
```

Übergeben Sie diese Optionen als `assetRetry` an `createLayoutPlugin`. Standardmäßig wechselt ein Ressourcenfehler zur nächsten Adresse, ohne dieselbe URL erneut zu versuchen. Setzen Sie `retries` auf einen Wert größer als 0, um zusätzliche Versuche mit exponentiellen Verzögerungen zu aktivieren. Der Loader merkt sich die zuletzt erfolgreiche Adresse und beginnt mit nachfolgenden Ressourcen dort, wobei er die verbleibenden Adressen als Backups durchläuft. Ein einzelner Fehler ändert nicht die bevorzugte Adresse; er ändert sich erst nach einem erfolgreichen Laden. In Bearbeitung befindliche Ressourcen behalten ihre Kandidatenreihenfolge. Explizite `undefined`-Optionen verwenden die Standardwerte.

Jeder Skript- oder Stylesheet-Versuch hat ein `timeoutMs`-Limit (standardmäßig 10000 ms). Ein Timeout folgt der gleichen Wiederholungsrichtlinie wie ein Ladefehler: Versuchen Sie die aktuelle URL erneut, solange noch Versuche übrig sind, und versuchen Sie dann die nächste Adresse. Setzen Sie den Wert auf 0, um das Timeout zu deaktivieren. Der Loader entfernt abgelaufene Elemente und ignoriert deren späte Callbacks; das Entfernen eines Skripts garantiert nicht die Unterbrechung seiner Ausführung.

Backup-Adressen müssen dieselben Build-Dateien unter denselben relativen Pfaden bereitstellen. Fügen Sie keine Abfrageparameter oder Fragmente zu Basisadressen hinzu. Nachgestellte Schrägstriche werden automatisch hinzugefügt und doppelte Adressen entfernt. Ein Pfad wie `/build/` ist relativ zum Ursprung der Seite; fügen Sie jeden Anwendungspräfix explizit hinzu. Erlauben Sie Backup-Domains in CSP und konfigurieren Sie CORS.

Ladeverhalten:

- Unterstützt `defer`-Skripte ohne `async` oder `type` sowie Stylesheets unter dem primären Pfad, wobei Nonce und `crossOrigin` erhalten bleiben. Andere Ressourcen behalten das normale Rendering. Alle verwalteten Assets eines Response-Fragments werden von einem einzigen Inline-Skript registriert, das direkt nach dem Bootstrap in der Reihenfolge des Head ausgegeben wird (Stylesheets, dann Skripte); ihre ursprünglichen Tags werden nicht gerendert.
- Stylesheets werden parallel geladen. Skripte werden nach Abschluss der Stylesheet-Versuche und wenn der DOM bereit ist, in der Reihenfolge ausgeführt. `DOMContentLoaded` bedeutet nicht, dass die Anwendung vollständig geladen ist.
- Bei endgültigen Fehlern wird `app-layout:asset-load-error` auf `window` ausgelöst. Die Event-Details enthalten `{type, originalUrl, attempts}` und werden durch den exportierten `AssetLoadError`-Typ beschrieben; `attempts` listet versuchte URLs auf, einschließlich Wiederholungsversuchen. Registrieren Sie den Handler, bevor die Ressourcen geladen werden. Ein endgültiger Fehler beim Laden eines Stylesheets blockiert keine Skripte; ein endgültiger Fehler beim Laden eines Skripts stoppt die Skriptwarteschlange des Loaders.
- Für frühe Skripte während des Streamings verwenden Sie `renderScripts(content, scripts, state)`, dann `renderHeadContent(content, state)` mit demselben `state: AssetRenderState = {}` für eine HTML-Antwort, auch wenn der Inhalt neu generiert wird. Der Bootstrap wird einmal ausgegeben; seine anfängliche Konfiguration gilt für die gesamte Antwort. Direkte `content.helpers`-Aufrufe rendern normale Tags ohne Fallback-Handling.

```ts
import {renderHeadContent, renderScripts, type AssetRenderState} from '@gravity-ui/app-layout';

const state: AssetRenderState = {};
res.write(renderScripts(content, firstScripts, state));
// ... await data and regenerate content if needed.
res.write(renderHeadContent(content, state));
```

Lazy Chunks erfordern eine separate Konfiguration, wie z. B. `client.publicPathFallback` in [App Builder](https://github.com/gravity-ui/app-builder). Konfigurieren Sie die Backup-Adressen in beiden Bibliotheken; die Fallback-Liste wird nicht über eine globale Variable geteilt.

### @gravity-ui/uikit

Fügt Body-Attribute hinzu.

Verwendung:

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

Plugin-Optionen:

```typescript
interface UikitPluginOptions {
  theme: string;
  direction?: 'ltr' | 'rtl';
}
```

### Remote Versions

Fügt Versionsinformationen von Microfrontends zur Seite hinzu.

Dieses Plugin erstellt ein globales `window.__REMOTE_VERSIONS__`-Objekt, das die bereitgestellten Microfrontend-Versionen enthält. Dies kann von Modul-Federation oder ähnlichen Microfrontend-Architekturen verwendet werden, um zu bestimmen, welche Versionen von Remote-Modulen geladen werden sollen.

Es kann in Kombination mit [App Builder](https://github.com/gravity-ui/app-builder?tab=readme-ov-file#module-federation) und der Option `moduleFederation.remotesRuntimeVersioning` verwendet werden, um Remote-Module mit den entsprechenden Versionen automatisch zu laden.

Verwendung:

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

Plugin-Optionen:

```typescript
type RemoteVersionsPluginOptions = Record<string, string>;
```

### Helpers

Es gibt einen Helper zum Erstellen aller Plugins:

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

## Alternative Verwendung

Mit Teil-Renderern `generateRenderContent`, `renderHeadContent`, `renderBodyContent` über HTML-Streaming:

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