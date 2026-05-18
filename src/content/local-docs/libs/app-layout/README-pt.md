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

Descreve o link para um script com preload:

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

### @gravity-ui/uikit

Adiciona atributos ao `body`.

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

Este plugin cria um objeto global `window.__REMOTE_VERSIONS__` contendo as versões dos microfrontends fornecidas, que pode ser usado por module federation ou arquiteturas de microfrontend semelhantes para determinar quais versões de módulos remotos carregar.

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

## Uso alternativo

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

```markdown
# @gravity/uikit

Um wrapper simples para o Axios que fornece funcionalidades adicionais para facilitar o desenvolvimento de aplicações React.

## Instalação

```bash
npm install @gravity/uikit
# ou
yarn add @gravity/uikit
```

## Uso

Este wrapper estende o Axios, então você pode usá-lo da mesma forma que usaria o Axios. No entanto, ele também fornece algumas funcionalidades adicionais.

### Configuração

Você pode configurar o wrapper Axios com opções adicionais, como:

*   `baseUrl`: A URL base para todas as requisições.
*   `headers`: Cabeçalhos padrão a serem incluídos em todas as requisições.
*   `interceptors`: Interceptadores para requisições e respostas.

```javascript
import axios from '@gravity/uikit';

const api = axios.create({
  baseUrl: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
  interceptors: {
    request: [
      (config) => {
        // Faça algo com a configuração da requisição
        return config;
      },
    ],
    response: [
      (response) => {
        // Faça algo com a resposta
        return response;
      },
    ],
  },
});
```

### Requisições

Você pode fazer requisições HTTP da mesma forma que faria com o Axios:

```javascript
// GET
api.get('/users').then((response) => {
  console.log(response.data);
});

// POST
api.post('/users', { name: 'John Doe' }).then((response) => {
  console.log(response.data);
});

// PUT
api.put('/users/1', { name: 'Jane Doe' }).then((response) => {
  console.log(response.data);
});

// DELETE
api.delete('/users/1').then((response) => {
  console.log(response.data);
});
```

### Funcionalidades Adicionais

#### Interceptadores de Requisição e Resposta

O wrapper permite que você defina interceptadores de requisição e resposta para modificar requisições antes que elas sejam enviadas ou respostas antes que sejam retornadas para o seu código.

```javascript
api.interceptors.request.use((config) => {
  // Adicionar um token de autenticação aos cabeçalhos
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

api.interceptors.response.use(
  (response) => {
    // Lidar com respostas de sucesso
    return response;
  },
  (error) => {
    // Lidar com erros de resposta
    if (error.response.status === 401) {
      // Redirecionar para a página de login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

#### Gerenciamento de Erros

O wrapper fornece um gerenciamento de erros mais robusto, permitindo que você lide com diferentes códigos de status de erro de forma centralizada.

```javascript
api.get('/users').catch((error) => {
  if (error.response) {
    // A requisição foi feita e o servidor respondeu com um status code
    // que está fora do range de 2xx
    console.error(error.response.data);
    console.error(error.response.status);
    console.error(error.response.headers);
  } else if (error.request) {
    // A requisição foi feita mas nenhuma resposta foi recebida
    console.error(error.request);
  } else {
    // Algo aconteceu na configuração da requisição que disparou um erro
    console.error('Error', error.message);
  }
});
```

## Exemplo de Código

```javascript
import React, { useState, useEffect } from 'react';
import axios from '@gravity/uikit';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/users');
        setUsers(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Carregando usuários...</div>;
  }

  if (error) {
    return <div>Erro ao carregar usuários: {error.message}</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
```

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Por favor, consulte o arquivo `CONTRIBUTING.md` para obter mais informações.

## Licença

Este projeto está licenciado sob a Licença MIT.
```