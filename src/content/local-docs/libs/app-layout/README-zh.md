# @gravity-ui/app-layout &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/app-layout)](https://www.npmjs.com/package/@gravity-ui/app-layout) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/app-layout/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/app-layout/actions/workflows/ci.yml?query=branch:main)

## 安装

```shell
npm install --save-dev @gravity-ui/app-layout
```

## 用法

使用 `express`：

```js
import express from 'express';
import {createRenderFunction} from '@gravity-ui/app-layout';

const app = express();

const renderLayout = createRenderFunction();

app.get('/', function (req, res) {
  res.send(
    renderLayout({
      // RenderParams
      title: '首页',
      bodyContent: {
        root: '你好，世界！',
      },
    }),
  );
});

app.listen(3000);
```

其中

```typescript
interface RenderParams<Data, Plugins> {
  // 任何 JSON 兼容的数据，将设置为页面的 window.__DATA__
  data?: Data;
  // 网站图标
  icon?: Icon;
  // 用于设置相应标签的 nonce
  nonce?: string;
  // base 标签属性
  base?: Base;

  // 通用选项
  // 页面标题
  title: string;
  // 页面的语言，将设置为 html 标签
  lang?: string;
  isMobile?: boolean;

  // html 属性
  htmlAttributes?: string;
  // header 标签内容
  // meta 标签
  meta?: Meta[];
  // link 标签
  links?: Link[];
  // script 标签
  scripts?: Script[];
  // 样式表标签
  styleSheets?: Stylesheet[];
  // 内联代码的 script 标签
  inlineScripts?: string[];
  // 内联样式的 style 标签
  inlineStyleSheets?: string[];

  // body 标签内容
  bodyContent?: {
    // body 标签的类名
    className?: string;
    // body 属性
    attributes?: string;
    // root div 标签之前的 body 内容
    beforeRoot?: string;
    // id 为 root 的 div 标签的 innerHtml 内容
    root?: string;
    // root div 标签之后的 body 内容
    afterRoot?: string;
  };
  // 插件选项
  pluginsOptions?: Partial<PluginsOptions<Plugins>>;
}
```

### Base

描述 `base` 标签：

```typescript
interface Base {
  href?: string;
  target?: HTMLBaseElement['target'];
}
```

示例：

```js
renderLayout({
  title: '首页',
  base: {target: '_top'},
});
```

将渲染为：

```html
<base target="_top" />
```

### Meta

描述 `meta` 标签：

```typescript
interface Meta {
  name: string;
  content: string;
}
```

示例：

```js
const meta = [
  {name: 'description', content: '一些文本'},
  {name: 'robots', content: 'noindex'},
  {name: 'og:title', content: '某个标题'},
];
```

将渲染为：

```html
<meta name="description" content="一些文本" />
<meta name="robots" content="noindex" />
<meta property="og:title" content="某个标题" />
```

### Icon

描述页面图标：

```typescript
interface Icon {
  type?: string;
  sizes?: string;
  href?: string;
}
```

默认值是：

```js
const icon = {
  type: 'image/png',
  sizes: '16x16',
  href: '/favicon.png',
};
```

### Links

描述 `link` 标签：

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

示例：

```js
const link = {
  href: 'myFont.woff2',
  rel: 'preload',
  as: 'font',
  type: 'font/woff2',
  crossOrigin: 'anonymous',
};
```

将渲染为：

```html
<link href="myFont.woff2" rel="preload" as="font" type="font/woff2" crossorigin="anonymous" />
```

### Scripts

描述带有预加载的脚本链接：

```typescript
interface Script {
  src: string;
  defer?: boolean;
  async?: boolean;
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
  type?: 'importmap' | 'module' | string;
}
```

示例：

```js
const script = {
  src: 'url/to/script',
  defer: true,
  async: false,
  crossOrigin: 'anonymous',
};
```

将渲染为：

```html
<link href="url/to/script" rel="preload" as="script" crossorigin="anonymous" />

<script src="url/to/script" defer="true" async="false" crossorigin="anonymous" nonce="..."></script>
```

#### Style sheets

描述样式链接：

```typescript
interface Stylesheet {
  href: string;
}
```

示例：

```js
const styleSheet = {
  href: 'url/to/stylesheet',
};
```

将渲染为：

```html
<link href="url/to/stylesheet" rel="stylesheet" />
```

## Plugins

渲染函数可以通过插件进行扩展。插件可以重写用户定义的渲染内容。
插件是一个具有 `name` 和 `apply` 属性的对象：

```typescript
interface Plugin<Options = any, Name = string> {
  name: Name;
  apply: (params: {
    options: Options | undefined; // 通过 `renderLayout` 函数的 `pluginsOptions` 参数传递。
    commonOptions: CommonOptions;
    renderContent: RenderContent;
    /** @deprecated 使用 `renderContent.helpers` 代替 */
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

此包中包含一些插件：

### Google analytics

为页面添加 Google Analytics 计数器。

用法：

```js
import {createRenderFunction, createGoogleAnalyticsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createGoogleAnalyticsPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: '首页',
      pluginsOptions: {
        googleAnalytics: {
          useBeaconTransport: true, // 启用 navigator.sendBeacon
          counter: {
            id: 'some id',
          },
        },
      },
    }),
  );
});
```

插件选项：

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

为页面添加 Yandex Metrika 计数器。

用法：

```js
import {createRenderFunction, createYandexMetrikaPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createYandexMetrikaPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: '首页',
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

插件选项：

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

从 webpack assets manifest 文件添加脚本和样式。

用法：

```js
import {createRenderFunction, createLayoutPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([
  createLayoutPlugin({manifest: 'path/to/assets-manifest.json', publicPath: '/build/'}),
]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: '首页',
      pluginsOptions: {
        layout: {
          name: 'home',
        },
      },
    }),
  );
});
```

插件选项：

```typescript
export interface LayoutOptions {
  name: string;
  prefix?: string;
}
```

### @gravity-ui/uikit

添加 body 属性。

用法：

```js
import {createRenderFunction, createUikitPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createUikitPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: '首页',
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

插件选项：

```typescript
interface UikitPluginOptions {
  theme: string;
  direction?: 'ltr' | 'rtl';
}
```

### Remote Versions

向页面添加微前端版本信息。

此插件创建一个全局 `window.__REMOTE_VERSIONS__` 对象，其中包含提供的微前端版本，可供模块联邦或类似的微前端架构使用，以确定要加载的远程模块版本。

它可以与 [App Builder](https://github.com/gravity-ui/app-builder?tab=readme-ov-file#module-federation) 和 `moduleFederation.remotesRuntimeVersioning` 选项结合使用，以自动加载具有相应版本的远程模块。

用法：

```js
import {createRenderFunction, createRemoteVersionsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createRemoteVersionsPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: '首页',
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

插件选项：

```typescript
type RemoteVersionsPluginOptions = Record<string, string>;
```

### Helpers

有一个创建所有插件的辅助函数：

```js
import {createMiddleware, createDefaultPlugins} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction(
    createDefaultPlugins({layout: {manifest: 'path/to/assets-manifest.json'}})
);

app.get((req, res) => {
    res.send(renderLayout({
        title: '首页',
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

通过 `generateRenderContent`、`renderHeadContent`、`renderBodyContent` 等部分渲染器进行 HTML 流式传输：

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

```zh
  const plugins = createDefaultPlugins({layout: {manifest: 'path/to/assets-manifest.json'}});

  const content = generateRenderContent(plugins, {
    title: '首页',
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