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
  // window.__DATA__ に設定される、JSON互換の任意のデータ
  data?: Data;
  // ファビコン
  icon?: Icon;
  // タグに設定される nonce
  nonce?: string;
  // base タグの属性
  base?: Base;

  // 一般的なオプション
  // ページのタイトル
  title: string;
  // ページの言語、html タグに設定される
  lang?: string;
  isMobile?: boolean;

  // html 属性
  htmlAttributes?: string;
  // ヘッダータグの内容
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
    // id="root" の div タグの内部 HTML
    root?: string;
    // root div タグの後の body の内容
    afterRoot?: string;
  };
  // プラグインオプション
  pluginsOptions?: Partial<PluginsOptions<Plugins>>;
}
```

### Base

`base` タグを記述します:

```typescript
interface Base {
  href?: string;
  target?: HTMLBaseElement['target'];
}
```

例:

```js
renderLayout({
  title: 'ホーム',
  base: {target: '_top'},
});
```

次のようにレンダリングされます:

```html
<base target="_top" />
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
  {name: 'description', content: 'テキスト'},
  {name: 'robots', content: 'noindex'},
  {name: 'og:title', content: 'タイトル'},
];
```

次のようにレンダリングされます:

```html
<meta name="description" content="テキスト" />
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

次のようにレンダリングされます:

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

次のようにレンダリングされます:

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

次のようにレンダリングされます:

```html
<link href="url/to/stylesheet" rel="stylesheet" />
```

## プラグイン

レンダリング関数はプラグインで拡張できます。プラグインはユーザー定義のレンダリングコンテンツを書き換えることができます。
プラグインは `name` と `apply` プロパティを持つオブジェクトです:

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

このパッケージにはいくつかのプラグインがあります:

### Google Analytics

ページにGoogle Analyticsカウンターを追加します。

使い方：

```js
import {createRenderFunction, createGoogleAnalyticsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createGoogleAnalyticsPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'ホームページ',
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

プラグインオプション：

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

ページにYandexメトリカカウンターを追加します。

使い方：

```js
import {createRenderFunction, createYandexMetrikaPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createYandexMetrikaPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'ホームページ',
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

プラグインオプション：

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

使い方：

```js
import {createRenderFunction, createLayoutPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([
  createLayoutPlugin({manifest: 'path/to/assets-manifest.json', publicPath: '/build/'}),
]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'ホームページ',
      pluginsOptions: {
        layout: {
          name: 'home',
        },
      },
    }),
  );
});
```

プラグインオプション：

```typescript
export interface LayoutOptions {
  name: string;
  prefix?: string;
}
```

#### Public path のフォールバック

`publicPath` からの読み込みに失敗した場合、バックアップアドレスから初期スクリプトとスタイルシートを読み込みます。

使い方：

```js
createLayoutPlugin({
  manifest: 'path/to/assets-manifest.json',
  publicPath: 'https://static.example.com/build/',
  publicPathFallbacks: ['https://backup.example.com/build/', '/build/'],
});
```

これらのオプションは `createDefaultPlugins({layout: …})` でも利用可能です。上記の例のように、`pluginsOptions.layout.name` でレイアウトプラグインを有効にします。`publicPathFallbacks` を省略するか `[]` を渡すと、通常のレンダリングが維持されます。

コールバック関数を使用することもできます：

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

関数は一度だけ実行され、クロージャやインポートなしで自己完結している必要があります。`{publicPath}` を受け取ります。ルート相対のプライマリパスの場合、この値には `layout.prefix` が含まれます。`[]` を返すと、リトライなしでプライマリアドレスが使用されます。

ローダーは app-layout がビルドされる際にバンドルおよびミニファイされます。ユーザーコールバックは、`Function.prototype.toString()` を使用してコンパイルされたサーバーコードからシリアライズされます。esbuild の `keepNames` のような変換は、ブラウザで利用できない外部ヘルパー (`__name`) を注入する可能性があります。コールバックは最終的なサーバービルドでテストしてください。ブートストラップが失敗した場合、HTML パーシング中の同期登録は `document.write` を介して元のタグを復元しますが、これはブラウザの制限を受けます。CSP が登録スクリプトをブロックした場合、リカバリは機能しません。

リトライオプション：

```typescript
interface AssetRetryOptions {
  retries?: number; // アドレスごとの追加試行回数。デフォルト: 0。
  delayMs?: number; // 最初の試行までの遅延時間（ミリ秒）。デフォルト: 500。
  factor?: number; // 後続の試行遅延の乗数。デフォルト: 2。
  maxDelayMs?: number; // 最大試行遅延時間（ミリ秒）。デフォルト: 3000。
  timeoutMs?: number; // 試行タイムアウト（ミリ秒）。デフォルト: 10000。0 で無効化。
}
```

これらのオプションを `assetRetry` として `createLayoutPlugin` に渡します。デフォルトでは、リソースエラーが発生すると、同じ URL をリトライせずに次のアドレスに切り替わります。`retries` を設定すると、指数関数的な遅延で追加の試行が可能になります。ローダーは最後に成功したアドレスを記憶し、後続のリソースをそこから開始し、残りのアドレスをバックアップとして循環させます。個々の失敗は優先アドレスを変更しません。成功したロード後にのみ変更されます。インフライトリソースは候補順序を維持します。明示的な `undefined` オプション値はデフォルトを使用します。

各スクリプトまたはスタイルシートの試行には `timeoutMs` の制限があります（デフォルトは 10000 ミリ秒）。タイムアウトは、ロードエラーと同じリトライポリシーに従います。試行回数が残っている間は現在の URL をリトライし、その後次アドレスを試行します。`0` を設定するとタイムアウトが無効になります。ローダーはタイムアウトした要素を削除し、それらの遅延コールバックを無視します。スクリプトを削除しても、その実行がキャンセルされることは保証されません。

バックアップアドレスは、同じビルドファイルを同じ相対パスで提供する必要があります。ベースアドレスにクエリパラメータやフラグメントを含めないでください。末尾のスラッシュは自動的に追加され、重複するアドレスは削除されます。`/build/` のようなパスはページのオリジンからの相対パスです。アプリケーションプレフィックスがあれば明示的に含めてください。CSP でバックアップドメインを許可し、CORS を設定してください。

読み込み動作：

- `defer`スクリプト（`async`や`type`なし）およびプライマリパス下のスタイルシートを、nonceと`crossOrigin`を保持したままサポートします。その他のリソースは通常のレンダリングを維持します。レスポンスフラグメントの管理対象アセットはすべて、ブートストラップ直後に発行される単一のインラインスクリプトによって登録されます（ヘッド順：スタイルシート、次にスクリプト）。元のタグはレンダリングされません。
- スタイルシートは並列でロードされます。スクリプトは、スタイルシートのロード試行が完了し、DOMが準備できた後に順次実行されます。`DOMContentLoaded`は、アプリケーションのロードが完了したことを意味するわけではありません。
- 最終的な失敗は、`window`上で`app-layout:asset-load-error`を発行します。イベントの詳細には`{type, originalUrl, attempts}`が含まれ、エクスポートされた`AssetLoadError`型によって記述されます。`attempts`はリトライを含む試行されたURLのリストです。ハンドラーはリソースロード前に登録してください。最終的なスタイルシートのロード失敗はスクリプトをブロックしません。最終的なスクリプトのロード失敗は、ローダーのスクリプトキューを停止します。
- ストリーミング中の早期スクリプトには、`renderScripts(content, scripts, state)`を使用し、次に同じ`state: AssetRenderState = {}`で`renderHeadContent(content, state)`を使用してください。これは単一のHTMLレスポンスに対して行われ、コンテンツが再生成された場合でも同様です。ブートストラップは一度だけ発行され、その初期設定はレスポンス全体に適用されます。直接の`content.helpers`呼び出しは、フォールバック処理なしで通常のタグをレンダリングします。

```ts
import {renderHeadContent, renderScripts, type AssetRenderState} from '@gravity-ui/app-layout';

const state: AssetRenderState = {};
res.write(renderScripts(content, firstScripts, state));
// ... データの待機と必要に応じたコンテンツの再生成。
res.write(renderHeadContent(content, state));
```

遅延チャンクには、[App Builder](https://github.com/gravity-ui/app-builder)の`client.publicPathFallback`のような個別の設定が必要です。両方のライブラリでバックアップアドレスを設定してください。フォールバックリストはグローバル変数では共有されません。

### @gravity-ui/uikit

body属性を追加します。

使用方法：

```js
import {createRenderFunction, createUikitPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createUikitPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'ホーム',
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

プラグインオプション：

```typescript
interface UikitPluginOptions {
  theme: string;
  direction?: 'ltr' | 'rtl';
}
```

### Remote Versions

マイクロフロントエンドのバージョン情報をページに追加します。

このプラグインは、提供されたマイクロフロントエンドのバージョンを含むグローバルな`window.__REMOTE_VERSIONS__`オブジェクトを作成します。これは、モジュールフェデレーションや同様のマイクロフロントエンドアーキテクチャが、ロードするリモートモジュールのバージョンを決定するために使用できます。

[App Builder](https://github.com/gravity-ui/app-builder?tab=readme-ov-file#module-federation)および`moduleFederation.remotesRuntimeVersioning`オプションと組み合わせて使用することで、対応するバージョンのリモートモジュールを自動的にロードできます。

使用方法：

```js
import {createRenderFunction, createRemoteVersionsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createRemoteVersionsPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'ホーム',
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

プラグインオプション：

```typescript
type RemoteVersionsPluginOptions = Record<string, string>;
```

### Helpers

すべてのプラグインを作成するためのヘルパーがあります：

```js
import {createMiddleware, createDefaultPlugins} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction(
    createDefaultPlugins({layout: {manifest: 'path/to/assets-manifest.json'}})
);

app.get((req, res) => {
    res.send(renderLayout({
        title: 'ホーム',
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

## 代替使用方法

`generateRenderContent`、`renderHeadContent`、`renderBodyContent`のパーツレンダラーをHTMLストリーミング経由で使用します：

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
    title: 'ホーム',
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