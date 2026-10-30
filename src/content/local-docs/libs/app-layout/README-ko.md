# @gravity-ui/app-layout &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/app-layout)](https://www.npmjs.com/package/@gravity-ui/app-layout) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/app-layout/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/app-layout/actions/workflows/ci.yml?query=branch:main)

## 설치

```shell
npm install --save-dev @gravity-ui/app-layout
```

## 사용법

`express`와 함께 사용하는 경우:

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
  // 태그에 설정될 nonce
  nonce?: string;
  // base 태그 속성
  base?: Base;

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
  // 스타일시트 태그
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

### Base

`base` 태그를 설명합니다:

```typescript
interface Base {
  href?: string;
  target?: HTMLBaseElement['target'];
}
```

예시:

```js
renderLayout({
  title: '홈 페이지',
  base: {target: '_top'},
});
```

다음과 같이 렌더링됩니다:

```html
<base target="_top" />
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

스크립트와 함께 preload 링크를 설명합니다:

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

렌더 함수는 플러그인으로 확장될 수 있습니다. 플러그인은 사용자 정의 렌더링 콘텐츠를 재작성할 수 있습니다.
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

이 패키지에는 몇 가지 플러그인이 있습니다:

### Google analytics

페이지에 Google Analytics 카운터를 추가합니다.

사용법:

```js
import {createRenderFunction, createGoogleAnalyticsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createGoogleAnalyticsPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: '홈 페이지',
      pluginsOptions: {
        googleAnalytics: {
          useBeaconTransport: true, // navigator.sendBeacon 사용을 활성화합니다.
          counter: {
            id: 'some id',
          },
        },
      },
    }),
  );
});
```

플러그인 옵션:

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

페이지에 Yandex Metrika 카운터를 추가합니다.

사용법:

```js
import {createRenderFunction, createYandexMetrikaPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createYandexMetrikaPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: '홈 페이지',
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

플러그인 옵션:

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

Webpack assets manifest 파일에서 스크립트와 스타일을 추가합니다.

사용법:

```js
import {createRenderFunction, createLayoutPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([
  createLayoutPlugin({manifest: 'path/to/assets-manifest.json', publicPath: '/build/'}),
]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: '홈 페이지',
      pluginsOptions: {
        layout: {
          name: 'home',
        },
      },
    }),
  );
});
```

플러그인 옵션:

```typescript
export interface LayoutOptions {
  name: string;
  prefix?: string;
}
```

#### Public path fallbacks

`publicPath`에서 로딩이 실패할 경우 백업 주소에서 초기 스크립트와 스타일시트를 로드합니다.

사용법:

```js
createLayoutPlugin({
  manifest: 'path/to/assets-manifest.json',
  publicPath: 'https://static.example.com/build/',
  publicPathFallbacks: ['https://backup.example.com/build/', '/build/'],
});
```

이 옵션들은 `createDefaultPlugins({layout: …})`에서도 사용할 수 있습니다. 예시와 같이 `pluginsOptions.layout.name`으로 레이아웃 플러그인을 활성화하세요. `publicPathFallbacks`를 생략하거나 `[]`를 전달하면 일반적인 렌더링이 유지됩니다.

콜백 함수를 사용할 수도 있습니다.

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

함수는 한 번 실행되며 클로저나 가져오기 없이 자체적으로 포함되어야 합니다. `{publicPath}`를 인자로 받으며, 루트 상대 기본 경로의 경우 이 값에 `layout.prefix`가 포함됩니다. `[]`를 반환하면 재시도 없이 기본 주소를 사용합니다.

로더는 app-layout이 빌드될 때 번들링되고 축소됩니다. 사용자 콜백은 `Function.prototype.toString()`을 사용하여 컴파일된 서버 코드로 직렬화됩니다. esbuild `keepNames`와 같은 변환은 브라우저에서 사용할 수 없는 외부 헬퍼(`__name`)를 주입할 수 있습니다. 최종 서버 빌드에서 콜백을 테스트하세요. 부트스트랩이 실패하면 HTML 파싱 중 동기식 등록이 `document.write`를 통해 스크립트 태그를 복원하지만, 브라우저 제한 사항이 적용됩니다. 복구는 CSP가 등록 스크립트를 차단하는 경우 도움이 되지 않습니다.

재시도 옵션:

```typescript
interface AssetRetryOptions {
  retries?: number; // 주소당 추가 시도 횟수. 기본값: 0.
  delayMs?: number; // 첫 번째 재시도 전 지연 시간(밀리초). 기본값: 500.
  factor?: number; // 후속 재시도 지연 시간의 승수. 기본값: 2.
  maxDelayMs?: number; // 최대 재시도 지연 시간(밀리초). 기본값: 3000.
  timeoutMs?: number; // 시도 타임아웃(밀리초). 기본값: 10000; 0은 비활성화.
}
```

이 옵션들을 `assetRetry`로 `createLayoutPlugin`에 전달하세요. 기본적으로 리소스 오류는 동일한 URL을 재시도하지 않고 다음 주소로 전환됩니다. `retries`를 설정하여 지수적 지연을 가진 추가 시도를 활성화하세요. 로더는 마지막으로 성공한 주소를 기억하고 후속 스크립트를 거기서 시작하며, 백업으로 남은 주소를 순환합니다. 스타일시트는 항상 `publicPath`에서 시작한 다음 구성된 순서대로 백업 주소를 시도합니다. 개별 실패는 기본 주소를 변경하지 않습니다. 성공적인 로드 후에만 변경됩니다. 진행 중인 리소스는 후보 순서를 유지합니다. 명시적인 `undefined` 옵션 값은 기본값을 사용합니다.

각 스크립트 또는 스타일시트 시도는 `timeoutMs` 제한(기본값 10000ms)을 가집니다. 타임아웃은 로딩 오류와 동일한 재시도 정책을 따릅니다: 남은 시도가 있으면 현재 URL을 재시도하고, 다음 주소를 시도합니다. 타임아웃을 비활성화하려면 `0`으로 설정하세요. 로더는 타임아웃된 요소를 제거하고 늦은 콜백을 무시합니다. 스크립트를 제거한다고 해서 실행이 취소되는 것은 보장되지 않습니다.

백업 주소는 동일한 빌드 파일을 동일한 상대 경로로 제공해야 합니다. 기본 주소에 쿼리 매개변수나 프래그먼트를 포함하지 마세요. 후행 슬래시가 자동으로 추가되고 중복 주소가 제거됩니다. `/build/`와 같은 경로는 페이지의 origin을 기준으로 합니다. 애플리케이션 접두사를 명시적으로 포함하세요. CSP에서 백업 도메인을 허용하고 CORS를 구성하세요.

로딩 동작:

- `defer` 스크립트(`async` 또는 `type` 없음) 및 기본 경로의 스타일시트를 `nonce` 및 `crossOrigin`을 유지하면서 지원합니다. 다른 리소스는 정상적으로 렌더링됩니다. 응답 조각의 모든 관리 대상 에셋은 부트스트랩 직후에 생성되는 단일 인라인 스크립트에 등록됩니다 (스타일시트, 그 다음 스크립트). 원본 스크립트 태그는 렌더링되지 않습니다.
- 스타일시트는 HTML에 포함되며 JavaScript 로더가 시작되지 않더라도 병렬로 로드됩니다. 재시도 중에 부분적으로 스타일이 적용된 콘텐츠가 보일 수 있습니다. 스크립트는 스타일시트 시도가 완료되고 DOM이 준비된 후에 순서대로 실행됩니다. `DOMContentLoaded`는 애플리케이션 로딩이 완료되었음을 의미하지 않습니다.
- 최종 실패 시 `window`에 `app-layout:asset-load-error` 이벤트가 발생합니다. 이벤트 상세 정보에는 `{type, originalUrl, attempts}`가 포함되며, 내보낸 `AssetLoadError` 타입으로 설명됩니다. `attempts`는 재시도를 포함하여 시도된 URL 목록입니다. 리소스 로드 전에 핸들러를 등록하세요. 최종 스타일시트 로딩 실패는 스크립트를 차단하지 않습니다. 최종 스크립트 로딩 실패는 로더의 스크립트 큐를 중지합니다.
- 스트리밍 중 초기 스크립트의 경우 `renderScripts(content, scripts, state)`를 사용한 다음, 동일한 `state: AssetRenderState = {}`로 `renderHeadContent(content, state)`를 호출하여 하나의 HTML 응답에 대해 콘텐츠가 재생성되더라도 사용합니다. `renderHeadContent`는 HTML 응답당 한 번 호출해야 합니다. 부트스트랩은 한 번만 생성되며, 초기 구성은 전체 응답에 적용됩니다. 직접 `content.helpers`를 호출하면 폴백 처리 없이 일반 태그가 렌더링됩니다.
- 스트리밍 중 스타일시트의 `timeoutMs`는 해당 참조가 HTML에 도착할 때 시작됩니다. `DOMContentLoaded`에서 찾을 수 없는 등록된 스타일시트 링크는 실패로 보고되며 스크립트를 차단하지 않습니다.

```ts
import {renderHeadContent, renderScripts, type AssetRenderState} from '@gravity-ui/app-layout';

const state: AssetRenderState = {};
res.write(renderScripts(content, firstScripts, state));
// ... 데이터 로드 및 필요한 경우 콘텐츠 재생성.
res.write(renderHeadContent(content, state));
```

지연 로드 청크는 별도의 구성이 필요합니다. 예를 들어 [App Builder](https://github.com/gravity-ui/app-builder)의 `client.publicPathFallback`과 같습니다. 두 라이브러리 모두에서 백업 주소를 구성하세요. 폴백 목록은 전역 변수를 통해 공유되지 않습니다.

### @gravity-ui/uikit

body 속성을 추가합니다.

사용법:

```js
import {createRenderFunction, createUikitPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createUikitPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: '홈 페이지',
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

플러그인 옵션:

```typescript
interface UikitPluginOptions {
  theme: string;
  direction?: 'ltr' | 'rtl';
}
```

### Remote Versions

마이크로프론트엔드 버전 정보를 페이지에 추가합니다.

이 플러그인은 제공된 마이크로프론트엔드 버전을 포함하는 전역 `window.__REMOTE_VERSIONS__` 객체를 생성합니다. 이 객체는 모듈 페더레이션 또는 유사한 마이크로프론트엔드 아키텍처에서 로드할 원격 모듈의 버전을 결정하는 데 사용할 수 있습니다.

[App Builder](https://github.com/gravity-ui/app-builder?tab=readme-ov-file#module-federation) 및 `moduleFederation.remotesRuntimeVersioning` 옵션과 함께 사용하여 해당 버전의 원격 모듈을 자동으로 로드할 수 있습니다.

사용법:

```js
import {createRenderFunction, createRemoteVersionsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createRemoteVersionsPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: '홈 페이지',
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

플러그인 옵션:

```typescript
type RemoteVersionsPluginOptions = Record<string, string>;
```

### Helpers

모든 플러그인을 생성하는 헬퍼가 있습니다:

```js
import {createMiddleware, createDefaultPlugins} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction(
    createDefaultPlugins({layout: {manifest: 'path/to/assets-manifest.json'}})
);

app.get((req, res) => {
    res.send(renderLayout({
        title: '홈 페이지',
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

## 대체 사용법

`generateRenderContent`, `renderHeadContent`, `renderBodyContent` 파트 렌더러를 사용하여 HTML 스트리밍:

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
    title: '홈 페이지',
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