# @gravity-ui/app-layout &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/app-layout)](https://www.npmjs.com/package/@gravity-ui/app-layout) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/app-layout/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/app-layout/actions/workflows/ci.yml?query=branch:main)

## Instalar

```shell
npm install --save-dev @gravity-ui/app-layout
```

## Uso

Com `express`:

```js
import express from 'express';
import {createRenderFunction} from '@gravity-ui/app-layout';

const app = express();

const renderLayout = createRenderFunction();

app.get('/', function (req, res) {
  res.send(
    renderLayout({
      // RenderParams
      title: 'Página inicial',
      bodyContent: {
        root: 'Olá mundo!',
      },
    }),
  );
});

app.listen(3000);
```

onde

```typescript
interface RenderParams<Data, Plugins> {
  // Qualquer dado compatível com JSON, será definido em window.__DATA__ na página
  data?: Data;
  // favicon
  icon?: Icon;
  // nonce a ser definido nas tags apropriadas
  nonce?: string;
  // atributos da tag base
  base?: Base;

  // opções comuns
  // Título da página
  title: string;
  // idioma da página, será definido na tag html
  lang?: string;
  isMobile?: boolean;

  // atributos html
  htmlAttributes?: string;
  // conteúdo da tag header
  // tags meta
  meta?: Meta[];
  // tags link
  links?: Link[];
  // tags script
  scripts?: Script[];
  // folhas de estilo
  styleSheets?: Stylesheet[];
  // tags script com código inline
  inlineScripts?: string[];
  // tags style com estilos inline
  inlineStyleSheets?: string[];

  // conteúdo da tag body
  bodyContent?: {
    // nome da classe para a tag body
    className?: string;
    // atributos do body
    attributes?: string;
    // conteúdo do body antes da tag div com id root
    beforeRoot?: string;
    // conteúdo innerHtml da tag div com id root
    root?: string;
    // conteúdo do body depois da tag div com id root
    afterRoot?: string;
  };
  // opções de plugins
  pluginsOptions?: Partial<PluginsOptions<Plugins>>;
}
```

### Base

Descreve a tag `base`:

```typescript
interface Base {
  href?: string;
  target?: HTMLBaseElement['target'];
}
```

Exemplo:

```js
renderLayout({
  title: 'Página inicial',
  base: {target: '_top'},
});
```

Será renderizado como:

```html
<base target="_top" />
```

### Meta

Descreve a tag `meta`:

```typescript
interface Meta {
  name: string;
  content: string;
}
```

Exemplo:

```js
const meta = [
  {name: 'description', content: 'algum texto'},
  {name: 'robots', content: 'noindex'},
  {name: 'og:title', content: 'Algum título'},
];
```

Será renderizado como:

```html
<meta name="description" content="algum texto" />
<meta name="robots" content="noindex" />
<meta property="og:title" content="Algum título" />
```

### Icon

Descreve o favicon da página:

```typescript
interface Icon {
  type?: string;
  sizes?: string;
  href?: string;
}
```

O valor padrão é:

```js
const icon = {
  type: 'image/png',
  sizes: '16x16',
  href: '/favicon.png',
};
```

### Links

Descreve a tag `link`:

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

Exemplo:

```js
const link = {
  href: 'myFont.woff2',
  rel: 'preload',
  as: 'font',
  type: 'font/woff2',
  crossOrigin: 'anonymous',
};
```

será renderizado como:

```html
<link href="myFont.woff2" rel="preload" as="font" type="font/woff2" crossorigin="anonymous" />
```

### Scripts

Descreve o link para um script com pré-carregamento:

```typescript
interface Script {
  src: string;
  defer?: boolean;
  async?: boolean;
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
  type?: 'importmap' | 'module' | string;
}
```

Exemplo:

```js
const script = {
  src: 'url/to/script',
  defer: true,
  async: false,
  crossOrigin: 'anonymous',
};
```

será renderizado como:

```html
<link href="url/to/script" rel="preload" as="script" crossorigin="anonymous" />

<script src="url/to/script" defer="true" async="false" crossorigin="anonymous" nonce="..."></script>
```

#### Folhas de estilo

Descrevem o link para estilos:

```typescript
interface Stylesheet {
  href: string;
}
```

Exemplo:

```js
const styleSheet = {
  href: 'url/to/stylesheet',
};
```

será renderizado como:

```html
<link href="url/to/stylesheet" rel="stylesheet" />
```

## Plugins

A função de renderização pode ser estendida por plugins. Um plugin pode reescrever o conteúdo de renderização definido pelo usuário.
Um plugin é um objeto com as propriedades `name` e `apply`:

```typescript
interface Plugin<Options = any, Name = string> {
  name: Name;
  apply: (params: {
    options: Options | undefined; // passado através da função `renderLayout` no parâmetro `pluginsOptions`.
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

Existem alguns plugins neste pacote:

### Google analytics

Adiciona um contador do Google Analytics à página.

Uso:

```js
import {createRenderFunction, createGoogleAnalyticsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createGoogleAnalyticsPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Página inicial',
      pluginsOptions: {
        googleAnalytics: {
          useBeaconTransport: true, // habilita o uso de navigator.sendBeacon
          counter: {
            id: 'algum id',
          },
        },
      },
    }),
  );
});
```

Opções do plugin:

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

Adiciona contadores do Yandex Metrika à página.

Uso:

```js
import {createRenderFunction, createYandexMetrikaPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createYandexMetrikaPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Página inicial',
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

Opções do plugin:

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

Adiciona scripts e estilos do arquivo de manifesto de assets do webpack.

Uso:

```js
import {createRenderFunction, createLayoutPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([
  createLayoutPlugin({manifest: 'path/to/assets-manifest.json', publicPath: '/build/'}),
]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Página inicial',
      pluginsOptions: {
        layout: {
          name: 'home',
        },
      },
    }),
  );
});
```

Opções do plugin:

```typescript
export interface LayoutOptions {
  name: string;
  prefix?: string;
}
```

#### Fallbacks de caminho público

Carrega scripts e folhas de estilo iniciais de endereços de backup se o carregamento do `publicPath` falhar.

Uso:

```js
createLayoutPlugin({
  manifest: 'path/to/assets-manifest.json',
  publicPath: 'https://static.example.com/build/',
  publicPathFallbacks: ['https://backup.example.com/build/', '/build/'],
});
```

Essas opções também estão disponíveis em `createDefaultPlugins({layout: …})`. Habilite o plugin de layout com `pluginsOptions.layout.name`, como no exemplo acima. Omitir `publicPathFallbacks` ou passar `[]` preserva a renderização normal.

Você também pode usar uma função de callback:

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

A função é executada uma vez e deve ser autônoma, sem closures ou imports. Ela recebe `{publicPath}`; para caminhos primários relativos à raiz, esse valor inclui `layout.prefix`. Retornar `[]` usa o endereço primário sem novas tentativas.

O loader é empacotado e minificado quando o app-layout é construído. O callback do usuário é serializado do código do servidor compilado usando `Function.prototype.toString()`: transformações como `keepNames` do esbuild podem injetar helpers externos (`__name`) que não estão disponíveis no navegador. Teste os callbacks na sua build final do servidor. Se o bootstrap falhar, registros síncronos durante a análise HTML restauram tags de script via `document.write`, sujeitos a restrições do navegador; a recuperação não pode ajudar se o CSP bloquear os scripts de registro.

Opções de nova tentativa:

```typescript
interface AssetRetryOptions {
  retries?: number; // Tentativas adicionais por endereço. Padrão: 0.
  delayMs?: number; // Atraso antes da primeira nova tentativa, em milissegundos. Padrão: 500.
  factor?: number; // Multiplicador para atrasos de novas tentativas subsequentes. Padrão: 2.
  maxDelayMs?: number; // Atraso máximo de nova tentativa, em milissegundos. Padrão: 3000.
  timeoutMs?: number; // Tempo limite da tentativa, em milissegundos. Padrão: 10000; 0 desabilita.
}
```

Passe essas opções como `assetRetry` para `createLayoutPlugin`. Por padrão, um erro de recurso muda para o próximo endereço sem tentar novamente o mesmo URL. Defina `retries` para habilitar tentativas adicionais com atrasos exponenciais. O loader lembra o último endereço bem-sucedido e inicia scripts subsequentes lá, percorrendo os endereços restantes como backups. Folhas de estilo sempre começam em `publicPath`, depois tentam endereços de backup na ordem configurada. Uma falha individual não altera o endereço preferido; ele muda apenas após um carregamento bem-sucedido. Recursos em andamento mantêm sua ordem de candidatos. Valores de opção `undefined` explícitos usam os padrões.

Cada tentativa de script ou folha de estilo tem um limite de `timeoutMs` (10000 ms por padrão). Um tempo limite segue a mesma política de nova tentativa de um erro de carregamento: tente o URL atual enquanto houver tentativas restantes, depois tente o próximo endereço. Defina `0` para desabilitar o tempo limite. O loader remove elementos com tempo limite esgotado e ignora seus callbacks tardios; remover um script não garante o cancelamento de sua execução.

Endereços de backup devem servir os mesmos arquivos de build nos mesmos caminhos relativos. Não inclua parâmetros de consulta ou fragmentos em endereços base. Barras finais são adicionadas e endereços duplicados são removidos automaticamente. Um caminho como `/build/` é relativo à origem da página; inclua qualquer prefixo de aplicativo explicitamente. Permita domínios de backup em CSP e configure CORS.

Comportamento de carregamento:

- Suporta scripts `defer` sem `async` ou `type`, e folhas de estilo sob o caminho principal, preservando `nonce` e `crossOrigin`. Outros recursos mantêm a renderização normal. Todos os ativos gerenciados de um fragmento de resposta são registrados por um único script inline emitido logo após o bootstrap, na ordem do head (folhas de estilo, depois scripts); as tags de script originais não são renderizadas.
- Folhas de estilo são incluídas no HTML e carregam em paralelo, mesmo que o carregador JavaScript não possa iniciar. Conteúdo parcialmente estilizado pode ser visível durante as tentativas de retentativa. Scripts são executados em ordem após as tentativas de folha de estilo terminarem e o DOM estiver pronto. `DOMContentLoaded` não significa que a aplicação terminou de carregar.
- Falhas finais emitem `app-layout:asset-load-error` em `window`. O detalhe do evento contém `{type, originalUrl, attempts}` e é descrito pelo tipo exportado `AssetLoadError`; `attempts` lista URLs tentados, incluindo retentativas. Registre o manipulador antes que os recursos carreguem. Uma falha final no carregamento de uma folha de estilo não bloqueia scripts; uma falha final no carregamento de um script para a fila de scripts do carregador.
- Para scripts iniciais durante o streaming, use `renderScripts(content, scripts, state)`, depois `renderHeadContent(content, state)` com o mesmo `state: AssetRenderState = {}` para uma resposta HTML, mesmo que o conteúdo seja regenerado. Chame `renderHeadContent` uma vez por resposta HTML. O bootstrap é emitido uma vez; sua configuração inicial se aplica a toda a resposta. Chamadas diretas a `content.helpers` renderizam tags comuns sem tratamento de fallback.
- Durante o streaming, o `timeoutMs` de uma folha de estilo começa quando sua referência chega no HTML. Links de folha de estilo registrados que não podem ser encontrados por `DOMContentLoaded` são relatados como falhos e não bloqueiam scripts.

```ts
import {renderHeadContent, renderScripts, type AssetRenderState} from '@gravity-ui/app-layout';

const state: AssetRenderState = {};
res.write(renderScripts(content, firstScripts, state));
// ... aguardar dados e regenerar conteúdo, se necessário.
res.write(renderHeadContent(content, state));
```

Chunks lazy requerem configuração separada, como `client.publicPathFallback` em [App Builder](https://github.com/gravity-ui/app-builder). Configure os endereços de backup em ambas as bibliotecas; a lista de fallback não é compartilhada através de uma variável global.

### @gravity-ui/uikit

Adiciona atributos ao body.

Uso:

```js
import {createRenderFunction, createUikitPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createUikitPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Página inicial',
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

Opções do plugin:

```typescript
interface UikitPluginOptions {
  theme: string;
  direction?: 'ltr' | 'rtl';
}
```

### Remote Versions

Adiciona informações de versões de microfrontends à página.

Este plugin cria um objeto global `window.__REMOTE_VERSIONS__` contendo as versões de microfrontends fornecidas, que podem ser usadas por module federation ou arquiteturas de microfrontend semelhantes para determinar quais versões de módulos remotos carregar.

Pode ser usado em combinação com [App Builder](https://github.com/gravity-ui/app-builder?tab=readme-ov-file#module-federation) e a opção `moduleFederation.remotesRuntimeVersioning` para carregar automaticamente módulos remotos com as versões correspondentes.

Uso:

```js
import {createRenderFunction, createRemoteVersionsPlugin} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction([createRemoteVersionsPlugin()]);

app.get((req, res) => {
  res.send(
    renderLayout({
      title: 'Página inicial',
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

Opções do plugin:

```typescript
type RemoteVersionsPluginOptions = Record<string, string>;
```

### Helpers

Existe um helper para criar todos os plugins:

```js
import {createMiddleware, createDefaultPlugins} from '@gravity-ui/app-layout';

const renderLayout = createRenderFunction(
    createDefaultPlugins({layout: {manifest: 'path/to/assets-manifest.json'}})
);

app.get((req, res) => {
    res.send(renderLayout({
        title: 'Página inicial',
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

## Uso Alternativo

Com renderizadores de partes `generateRenderContent`, `renderHeadContent`, `renderBodyContent` via streaming de HTML:

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
    title: 'Página inicial',
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