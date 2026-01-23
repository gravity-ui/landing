# @gravity-ui/app-layout &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/app-layout)](https://www.npmjs.com/package/@gravity-ui/app-layout) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/app-layout/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/app-layout/actions/workflows/ci.yml?query=branch:main)

## インストール

```shell
npm install --save-dev @gravity-ui/app-layout
```

## 使用方法

`express` を使用する場合:

```js
import express from 'express';
import {createRenderFunction} from '@gravity-ui/app-layout';

const app = express();

const renderLayout = createRenderFunction();

app.get('/', function (req, res) {
  res.send(
    renderLayout({
      // RenderParams
      title: 'ホーム',
      bodyContent: {
        root: 'こんにちは、世界！',
      },
    }),
  );
});

app.listen(3000);
```

ここで

```typescript
interface RenderParams<Data, Plugins> {
  // JSON互換の任意のデータ。ページ上の window.__DATA__ に設定されます。
  data?: Data;
  // ファビコン
  icon?: Icon;
  // タグに設定される nonce
  nonce?: string;

  // 一般的なオプション
  // ページのタイトル
  title: string;
  // ページの言語。html タグに設定されます。
  lang?: string;
  isMobile?: boolean;

  // html 属性
  htmlAttributes?: string;
  // header タグの内容
  // meta タグ
  meta?: Meta[];
  // link タグ
  links?: Link[];
  // script タグ
  scripts?: Script[];
  // style タグ
  styleSheets?: Stylesheet[];
  // インラインコードを含む script タグ
  inlineScripts?: string[];
  // インラインスタイルを含む style タグ
  inlineStyleSheets?: string[];

  // body タグの内容
  bodyContent?: {
    // body タグのクラス名
    className?: string;
    // body 属性
    attributes?: string;
    // root div タグの前の body の内容
    beforeRoot?: string;
    // id が root の div タグの innerHtml コンテンツ
    root?: string;
    // root div タグの後の body の内容
    afterRoot?: string;
  };
  // プラグインオプション
  pluginsOptions?: Partial<PluginsOptions<Plugins>>;
}
```

### Meta

`meta` タグを記述します:

```typescript
interface Meta {
  name: string;
  content: string;
}
```

例:

```js
const meta = [
  {name: 'description', content: 'いくつかのテキスト'},
  {name: 'robots', content: 'noindex'},
  {name: 'og:title', content: 'タイトル'},
];
```

以下のようにレンダリングされます:

```html
<meta name="description" content="いくつかのテキスト" />
<meta name="robots" content="noindex" />
<meta property="og:title" content="タイトル" />
```

### Icon

ページのファビコンを記述します:

```typescript
interface Icon {
  type?: string;
  sizes?: string;
  href?: string;
}
```

デフォルト値は次のとおりです:

```js
const icon = {
  type: 'image/png',
  sizes: '16x16',
  href: '/favicon.png',
};
```

### Links

`link` タグを記述します:

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

例:

```js
const link = {
  href: 'myFont.woff2',
  rel: 'preload',
  as: 'font',
  type: 'font/woff2',
  crossOrigin: 'anonymous',
};
```

以下のようにレンダリングされます:

```html
<link href="myFont.woff2" rel="preload" as="font" type="font/woff2" crossorigin="anonymous" />
```

### Scripts

プリロード付きのスクリプトへのリンクを記述します:

```typescript
interface Script {
  src: string;
  defer?: boolean;
  async?: boolean;
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
  type?: 'importmap' | 'module' | string;
}
```

例:

```js
const script = {
  src: 'url/to/script',
  defer: true,
  async: false,
  crossOrigin: 'anonymous',
};
```

以下のようにレンダリングされます:

```html
<link href="url/to/script" rel="preload" as="script" crossorigin="anonymous" />

<script src="url/to/script" defer="true" async="false" crossorigin="anonymous" nonce="..."></script>
```

#### Style sheets

スタイルへのリンクを記述します:

```typescript
interface Stylesheet {
  href: string;
}
```

例:

```js
const styleSheet = {
  href: 'url/to/stylesheet',
};
```

以下のようにレンダリングされます:

```html
<link href="url/to/stylesheet" rel="stylesheet" />
```

## プラグイン

レンダリング関数はプラグインによって拡張できます。プラグインは `name` と `apply` プロパティを持つオブジェクトです:

```typescript
interface Plugin<Options = any, Name = string> {
  name: Name;
  apply: (params: {
    options: Options | undefined; // `pluginsOptions` パラメータで `renderLayout` 関数を通じて渡されます。
    commonOptions: CommonOptions;
    renderContent: RenderContent;
    /** @deprecated `renderContent.helpers` を使用してください */
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

このパッケージにはいくつかのプラグインがあります:

### Google Analytics

ページに Google Analytics カウンターを追加します。

使用方法:

```js
import {createRenderFunction, createGoogleAnalyticsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createGoogleAnalyticsPlugin()]);
```

Google Analytics

Google Analytics をページに追加します。

使用方法:

```js
import {createRenderFunction, createGoogleAnalyticsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createGoogleAnalyticsPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Home page',
      pluginsOptions: {
        googleAnalytics: {
          useBeaconTransport: true, // navigator.sendBeacon の使用を有効にします
          counter: {
            id: 'some id',
          },
        },
      },
    }),
  );
});
```

プラグイン オプション:

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

Yandex Metrika カウンターをページに追加します。

使用方法:

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

プラグイン オプション:

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

webpack assets manifest ファイルからスクリプトとスタイルを追加します。

使用方法:

```js
import {createRenderFunction, createLayoutPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createLayoutPlugin({manifest: 'path/to/assets-manifest.json', publicPath: '/build/'})]);

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

プラグイン オプション:

```typescript
export interface LayoutOptions {
  name: string;
  prefix?: string;
}
```

### @gravity-ui/uikit

body 属性を追加します。

使用方法:

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

プラグイン オプション:

```typescript
interface UikitPluginOptions {
  theme: string;
  direction?: 'ltr' | 'rtl';
}
```

### Remote Versions

マイクロフロントエンドのバージョン情報をページに追加します。

このプラグインは、指定されたマイクロフロントエンドのバージョンを含むグローバルな `window.__REMOTE_VERSIONS__` オブジェクトを作成します。これは、モジュールフェデレーションなどのマイクロフロントエンド アーキテクチャで、ロードするリモート モジュールのバージョンを決定するために使用できます。

[App Builder](https://github.com/gravity-ui/app-builder?tab=readme-ov-file#module-federation) および `moduleFederation.remotesRuntimeVersioning` オプションと組み合わせて、対応するバージョンのリモート モジュールを自動的にロードするために使用できます。

使用方法:

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

プラグイン オプション:

```typescript
type RemoteVersionsPluginOptions = Record<string, string>;
```

### ヘルパー

すべてのプラグインを作成するためのヘルパーがあります。

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

## 代替の使用方法

HTML ストリーミング経由のパーツ レンダラー `generateRenderContent`、`renderHeadContent`、`renderBodyContent` を使用します。

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

```markdown
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