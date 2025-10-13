# @gravity-ui/app-layout &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/app-layout)](https://www.npmjs.com/package/@gravity-ui/app-layout) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/app-layout/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/app-layout/actions/workflows/ci.yml?query=branch:main)

## 설치

```shell
npm install --save-dev @gravity-ui/app-layout
```

## 사용법

`express`와 함께 사용:

```js
import express from 'express';
import {createRenderFunction} from '@gravity-ui/app-layout';

const app = express();

const renderLayout = createRenderFunction();

app.get('/', function (req, res) {
  res.send(
    renderLayout({
      // RenderParams
      title: '홈 페이지',
      bodyContent: {
        root: '안녕하세요!',
      },
    }),
  );
});

app.listen(3000);
```

여기서

```typescript
interface RenderParams<Data, Plugins> {
  // window.__DATA__에 설정될 JSON 호환 데이터
  data?: Data;
  // favicon
  icon?: Icon;
  // 적절한 태그에 설정될 nonce
  nonce?: string;

  // 공통 옵션
  // 페이지 제목
  title: string;
  // 페이지 언어, html 태그에 설정됨
  lang?: string;
  isMobile?: boolean;

  // html 속성
  htmlAttributes?: string;
  // 헤더 태그 내용
  // meta 태그
  meta?: Meta[];
  // link 태그
  links?: Link[];
  // script 태그
  scripts?: Script[];
  // style 태그
  styleSheets?: Stylesheet[];
  // 인라인 코드 스크립트 태그
  inlineScripts?: string[];
  // 인라인 스타일 태그
  inlineStyleSheets?: string[];

  // body 태그 내용
  bodyContent?: {
    // body 태그의 클래스 이름
    className?: string;
    // body 속성
    attributes?: string;
    // root div 태그 이전의 body 내용
    beforeRoot?: string;
    // root div 태그의 innerHtml 내용
    root?: string;
    // root div 태그 이후의 body 내용
    afterRoot?: string;
  };
  // 플러그인 옵션
  pluginsOptions?: Partial<PluginsOptions<Plugins>>;
}
```

### Meta

`meta` 태그를 설명합니다:

```typescript
interface Meta {
  name: string;
  content: string;
}
```

예시:

```js
const meta = [
  {name: 'description', content: 'some text'},
  {name: 'robots', content: 'noindex'},
  {name: 'og:title', content: 'Some title'},
];
```

다음과 같이 렌더링됩니다:

```html
<meta name="description" content="some text" />
<meta name="robots" content="noindex" />
<meta property="og:title" content="Some title" />
```

### Icon

페이지 favicon을 설명합니다:

```typescript
interface Icon {
  type?: string;
  sizes?: string;
  href?: string;
}
```

기본값은 다음과 같습니다:

```js
const icon = {
  type: 'image/png',
  sizes: '16x16',
  href: '/favicon.png',
};
```

### Links

`link` 태그를 설명합니다:

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

예시:

```js
const link = {
  href: 'myFont.woff2',
  rel: 'preload',
  as: 'font',
  type: 'font/woff2',
  crossOrigin: 'anonymous',
};
```

다음과 같이 렌더링됩니다:

```html
<link href="myFont.woff2" rel="preload" as="font" type="font/woff2" crossorigin="anonymous" />
```

### Scripts

스크립트 링크를 preload와 함께 설명합니다:

```typescript
interface Script {
  src: string;
  defer?: boolean;
  async?: boolean;
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
  type?: 'importmap' | 'module' | string;
}
```

예시:

```js
const script = {
  src: 'url/to/script',
  defer: true,
  async: false,
  crossOrigin: 'anonymous',
};
```

다음과 같이 렌더링됩니다:

```html
<link href="url/to/script" rel="preload" as="script" crossorigin="anonymous" />

<script src="url/to/script" defer="true" async="false" crossorigin="anonymous" nonce="..."></script>
```

#### Style sheets

스타일 링크를 설명합니다:

```typescript
interface Stylesheet {
  href: string;
}
```

예시:

```js
const styleSheet = {
  href: 'url/to/stylesheet',
};
```

다음과 같이 렌더링됩니다:

```html
<link href="url/to/stylesheet" rel="stylesheet" />
```

## Plugins

렌더 함수는 플러그인으로 확장될 수 있습니다. 플러그인은 사용자 정의 렌더링 콘텐츠를 덮어쓸 수 있습니다.
플러그인은 `name`과 `apply` 속성을 가진 객체입니다:

```typescript
interface Plugin<Options = any, Name = string> {
  name: Name;
  apply: (params: {
    options: Options | undefined; // `pluginsOptions` 매개변수의 `renderLayout` 함수를 통해 전달됩니다.
    commonOptions: CommonOptions;
    renderContent: RenderContent;
    /** @deprecated `renderContent.helpers`를 사용하세요 */
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

이 패키지에는 몇 가지 플러그인이 있습니다:

### Google analytics

페이지에 Google Analytics 카운터를 추가합니다.

사용법:

```js
import {createRenderFunction, createGoogleAnalyticsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createGoogleAnalyticsPlugin()]);
```

```html
<div class="languages">
  <a href="/en/README.md">English</a>
  <a href="/ko/README.md">Korean</a>
</div>
```

# @gravity-ui/app-layout

This library provides a set of plugins for rendering HTML layouts with server-side rendering (SSR) support. It allows you to easily integrate various third-party services and features into your application's HTML structure.

## Installation

```bash
npm install @gravity-ui/app-layout
# or
yarn add @gravity-ui/app-layout
```

## Usage

The main idea is to create a `renderLayout` function using `createRenderFunction` and pass it an array of plugins. Then, you can use this function to render your HTML.

```js
import {createRenderFunction} from '@gravity-ui/app-layout';

// Create a render function with your desired plugins
const renderLayout = createRenderFunction([
  // ... your plugins
]);

// Use the render function to generate HTML
app.get('/', (req, res) => {
  res.send(
    renderLayout({
      title: 'My Page Title',
      // ... other options
    }),
  );
});
```

## Plugins

### Google Analytics

Adds Google Analytics counters on the page.

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
          useBeaconTransport: true, // navigator.sendBeacon 사용 활성화
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

Adds Yandex Metrika counters on the page.

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

Adds scripts and styles from the webpack assets manifest file.

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

This plugin creates a global `window.__REMOTE_VERSIONS__` object containing the provided microfrontend versions. This object can be used by module federation or similar microfrontend architectures to determine which versions of remote modules to load.

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

There is a helper to create all plugins:

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

With partial renderers `generateRenderContent`, `renderHeadContent`, `renderBodyContent` via HTML streaming:

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