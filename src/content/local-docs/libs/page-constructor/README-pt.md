# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Page constructor

`Page-constructor` é uma biblioteca para renderizar páginas web ou partes delas com base em dados `JSON` (o suporte ao formato `YAML` será adicionado posteriormente).

Ao criar páginas, é utilizada uma abordagem baseada em componentes: uma página é construída usando um conjunto de blocos prontos que podem ser posicionados em qualquer ordem. Cada bloco possui um tipo específico e um conjunto de parâmetros de entrada de dados.

Para o formato dos dados de entrada e a lista de blocos disponíveis, consulte a [documentação](https://preview.gravity-ui.com/page-constructor/?path=/docs/documentation-blocks--docs).

## Instalar

```shell
npm install @gravity-ui/page-constructor
```

## Início rápido

Primeiro, precisamos de um projeto React e algum tipo de servidor. Por exemplo, você pode criar um projeto React usando Vite e um servidor Express, ou pode criar uma aplicação Next.js - ela terá lado do cliente e do servidor ao mesmo tempo.

Instale as dependências necessárias:

```shell
npm install @gravity-ui/page-constructor @diplodoc/transform @gravity-ui/uikit
```

Insira o `Page Constructor` na página. Para que funcione corretamente, ele deve ser envolvido em um `PageConstructorProvider`:

```tsx
import {PageConstructor, PageConstructorProvider} from '@gravity-ui/page-constructor';
import '@gravity-ui/page-constructor/styles/styles.scss';

const App = () => {
  const content = {
    blocks: [
      {
        type: 'header-block',
        title: 'Hello world',
        background: {color: '#f0f0f0'},
        description:
          '**Congratulations!** Have you built a [page-constructor](https://github.com/gravity-ui/page-constructor) into your website',
      },
    ],
  };

  return (
    <PageConstructorProvider>
      <PageConstructor content={content} />
    </PageConstructorProvider>
  );
};

export default App;
```

Este foi o exemplo mais simples de conexão. Para que a marcação YFM funcione, você precisa processar o conteúdo no servidor e recebê-lo no cliente.

Se o seu servidor for uma aplicação separada, você precisará instalar o page-constructor:

```shell
npm install @gravity-ui/page-constructor
```

Para processar YFM em todos os blocos base, chame o `contentTransformer` e passe o conteúdo e as opções para ele:

```ts
const express = require('express');
const app = express();
const {contentTransformer} = require('@gravity-ui/page-constructor/server');

const content = {
  blocks: [
    {
      type: 'header-block',
      title: 'Hello world',
      background: {color: '#f0f0f0'},
      description:
        '**Congratulations!** Have you built a [page-constructor](https://github.com/gravity-ui/page-constructor) into your website',
    },
  ],
};

app.get('/content', (req, res) => {
  res.send({content: contentTransformer({content, options: {lang: 'en'}})});
});

app.listen(3000);
```

No cliente, adicione uma chamada de endpoint para receber o conteúdo:

```tsx
import {PageConstructor, PageConstructorProvider} from '@gravity-ui/page-constructor';
import '@gravity-ui/page-constructor/styles/styles.scss';
import {useEffect, useState} from 'react';

const App = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/content').then((r) => r.json());
      setContent(response.content);
    })();
  }, []);

  return (
    <PageConstructorProvider>
      <PageConstructor content={content} />
    </PageConstructorProvider>
  );
};

export default App;
```

### Template pronto

Para iniciar um novo projeto, você pode usar o [template pronto no Next.js](https://github.com/gravity-ui/page-constructor-website-template) que preparamos.

### Construtor de sites estáticos

[Page Constructor Builder](https://github.com/gravity-ui/page-constructor-builder) - utilitário de linha de comando para construir páginas estáticas a partir de configurações YAML usando o @gravity-ui/page-constructor

## Documentação

### Parâmetros

```typescript
interface PageConstructorProps {
  content: PageContent; // Dados dos blocos em formato JSON.
  shouldRenderBlock?: ShouldRenderBlock; // Uma função que é invocada ao renderizar cada bloco e permite definir condições para sua exibição.
  custom?: Custom; // Blocos personalizados (veja `Customization`).
  renderMenu?: () => React.ReactNode; // Uma função que renderiza o menu da página com navegação (planejamos adicionar a renderização para a versão padrão do menu).
  navigation?: NavigationData; // Dados de navegação para usar o componente de navegação em formato JSON
  isBranded?: boolean; // Se true, adiciona um rodapé que linka para https://gravity-ui.com/. Tente o componente BrandFooter para mais personalização.
}

interface PageConstructorProviderProps {
  isMobile?: boolean; // Um flag indicando que o código está sendo executado em modo mobile.
  locale?: LocaleContextProps; // Informações sobre o idioma e domínio (usado ao gerar e formatar links).
  location?: Location; // API do histórico do navegador ou do roteador, URL da página.
  analytics?: AnalyticsContextProps; // função para lidar com eventos de analytics

  ssrConfig?: SSR; // Um flag indicando que o código está sendo executado no lado do servidor.
  theme?: 'light' | 'dark'; // Tema para renderizar a página.
  mapsContext?: MapsContextType; // Parâmetros para o mapa: apikey, type, scriptSrc, nonce
}

export interface PageContent extends Animatable {
  blocks: Block[];
  menu?: Menu;
  background?: MediaProps;
}

interface Custom {
  blocks?: CustomItems;
  subBlocks?: CustomItems;
  headers?: CustomItems;
  loadable?: LoadableConfig;
}

type ShouldRenderBlock = (block: Block, blockKey: string) => Boolean;

interface Location {
  history?: History;
  search?: string;
  hash?: string;
  pathname?: string;
  hostname?: string;
}

interface Locale {
  lang?: Lang;
  tld?: string;
}

interface SSR {
  isServer?: boolean;
}

interface NavigationData {
  logo: NavigationLogo;
  header: HeaderData;
}

interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}

interface HeaderData {
  leftItems: NavigationItem[];
  rightItems?: NavigationItem[];
}
```

```typescript
interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}
```

### Utilitários do Servidor

O pacote fornece um conjunto de utilitários de servidor para transformar seu conteúdo.

```ts
const {fullTransform} = require('@gravity-ui/page-constructor/server');

const {html} = fullTransform(content, {
  lang,
  extractTitle: true,
  allowHTML: true,
  path: __dirname,
  plugins,
});
```

Por baixo dos panos, um pacote é usado para transformar Yandex Flavored Markdown em HTML - `diplodoc/transfrom`, então ele também está nas dependências peer.

Você também pode usar utilitários úteis nos locais que precisar, por exemplo, em seus componentes personalizados.

```ts
const {
  typografToText,
  typografToHTML,
  yfmTransformer,
} = require('@gravity-ui/page-constructor/server');

const post = {
  title: typografToText(title, lang),
  content: typografToHTML(content, lang),
  description: yfmTransformer(lang, description, {plugins}),
};
```

Você pode encontrar mais utilitários nesta [seção](https://github.com/gravity-ui/page-constructor/tree/main/src/text-transform).

### Documentação Detalhada sobre Utilitários de Servidor e Transformers

Para um guia completo sobre o uso de utilitários de servidor, incluindo explicações detalhadas e casos de uso avançados, visite o [capítulo adicional sobre uso de utilitários de servidor](./docs/data-preparation.md).

### Blocos Personalizados

O construtor de páginas permite que você use blocos definidos pelo usuário em seu aplicativo. Blocos são componentes React regulares.

Para passar blocos personalizados para o construtor:

1. Crie um bloco em seu aplicativo.

2. Em seu código, crie um objeto com o tipo do bloco (string) como chave e um componente de bloco importado como valor.

3. Passe o objeto que você criou para o parâmetro `custom.blocks`, `custom.headers` ou `custom.subBlocks` do componente `PageConstructor` (`custom.headers` especifica os cabeçalhos do bloco a serem renderizados separadamente acima do conteúdo geral).

4. Agora você pode usar o bloco criado nos dados de entrada (o parâmetro `content`) especificando seu tipo e dados.

Para usar mixins e variáveis de estilo do construtor ao criar blocos personalizados, adicione a importação em seu arquivo:

```css
@import '~@gravity-ui/page-constructor/styles/styles.scss';
```

Para usar a fonte padrão, adicione a importação em seu arquivo:

```css
@import '~@gravity-ui/page-constructor/styles/fonts.scss';
```

### Blocos Carregáveis (Loadable Blocks)

Às vezes, é necessário que um bloco se renderize com base em dados a serem carregados. Nesses casos, blocos carregáveis são usados.

Para adicionar blocos `loadable` personalizados, passe para o `PageConstructor` a propriedade `custom.loadable` com nomes de fontes de dados (string) como chave e um objeto como valor.

```typescript
export interface LoadableConfigItem {
  fetch: FetchLoadableData; // método de carregamento de dados
  component: React.ComponentType; // bloco para passar os dados carregados
}

type FetchLoadableData<TData = any> = (blockKey: string) => Promise<TData>;
```

### Grid

O construtor de páginas usa a grid do `bootstrap` e sua implementação baseada em componentes React que você pode usar em seu próprio projeto (inclusive separadamente do construtor).

Exemplo de uso:

```jsx
import {Grid, Row, Col} from '@gravity-ui/page-constructor';

const Page = ({children}: PropsWithChildren<PageProps>) => (
  <Grid>
    <Row>
      <Col sizes={{lg: 4, sm: 6, all: 12}}>{children}</Col>
    </Row>
  </Grid>
);
```

### Navegação

A navegação da página também pode ser usada separadamente do construtor:

```jsx
import {Navigation} from '@gravity-ui/page-constructor';

const Page= ({data, logo}: React.PropsWithChildren<PageProps>) => <Navigation data={data} logo={logo} />;
```

### Blocos

Cada bloco é um componente atômico de nível superior. Eles são armazenados no diretório `src/units/constructor/blocks`.

### Sub-blocos

Sub-blocos são componentes que podem ser usados na propriedade `children` de um bloco. Em uma configuração, uma lista de componentes filhos de sub-blocos é especificada. Uma vez renderizados, esses sub-blocos são passados para o bloco como `children`.

### Como adicionar um novo bloco ao `page-constructor`

1. No diretório `src/blocks` ou `src/sub-blocks`, crie uma pasta com o código do bloco ou sub-bloco.

2. Adicione o nome do bloco ou sub-bloco ao enum `BlockType` ou `SubBlockType` e descreva suas propriedades no arquivo `src/models/constructor-items/blocks.ts` ou `src/models/constructor-items/sub-blocks.ts` de forma semelhante aos existentes.

3. Adicione a exportação para o bloco no arquivo `src/blocks/index.ts` e para o sub-bloco no arquivo `src/sub-blocks/index.ts`.

4. Adicione um novo componente ou bloco ao mapeamento em `src/constructor-items.ts`.

5. Adicione um validador para o novo bloco:

   - Adicione um arquivo `schema.ts` ao diretório do bloco ou sub-bloco. Neste arquivo, descreva um validador de parâmetro para o componente no formato [`json-schema`](http://json-schema.org/).
   - Exporte-o no arquivo `schema/validators/blocks.ts` ou `schema/validators/sub-blocks.ts`.
   - Adicione-o ao `enum` ou `selectCases` no arquivo `schema/index.ts`.

6. No diretório do bloco, adicione o arquivo `README.md` com uma descrição dos parâmetros de entrada.
7. No diretório do bloco, adicione uma demonstração do storybook na pasta `__stories__`. Todo o conteúdo de demonstração para a story deve ser colocado em `data.json` no diretório da story. A `Story` genérica deve aceitar o tipo das props do bloco, caso contrário, props incorretas serão exibidas no Storybook.
8. Adicione um template de dados do bloco à pasta `src/editor/data/templates/`, o nome do arquivo deve corresponder ao tipo do bloco.
9. (opcional) Adicione um ícone de pré-visualização do bloco à pasta `src/editor/data/previews/`, o nome do arquivo deve corresponder ao tipo do bloco.

### Temas

O `PageConstructor` permite que você use temas: você pode definir valores diferentes para propriedades individuais de blocos dependendo do tema selecionado no aplicativo.

Para adicionar um tema a uma propriedade de bloco:

1. No arquivo `models/blocks.ts`, defina o tipo da respectiva propriedade de bloco usando o genérico `ThemeSupporting<T>`, onde `T` é o tipo da propriedade.

2. No arquivo com o componente `react` do bloco, obtenha o valor da propriedade com o tema via `getThemedValue` e o hook `useTheme` (veja exemplos no bloco `MediaBlock.tsx`).

3. Adicione suporte a tema ao validador da propriedade: no arquivo `schema.ts` do bloco, envolva essa propriedade em `withTheme`.

### i18n

O `page-constructor` é uma biblioteca baseada em `uikit`, e usamos uma instância de `i18n` do uikit. Para configurar a internacionalização, você só precisa usar o `configure` do uikit:

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

### Mapas

Para usar mapas, coloque o tipo do mapa, `scriptSrc` e `apiKey` no campo `mapContext` em `PageConstructorProvider`.

Você pode definir variáveis de ambiente para o modo de desenvolvimento no arquivo `.env.development` dentro da raiz do projeto.
`STORYBOOK_GMAP_API_KEY` - apiKey para google maps.

### Analytics

#### Inicialização

Para começar a usar qualquer análise, passe um manipulador para o construtor. O manipulador deve ser criado no lado do projeto. O manipulador receberá os objetos de evento `default` e `custom`. O manipulador passado será acionado em cliques de botão, link, navegação e controle. Como um único manipulador é usado para o tratamento de todos os eventos, preste atenção em como tratar diferentes eventos ao criar o manipulador. Existem campos predefinidos que servem para ajudar você a construir lógica complexa.

Passe `autoEvents: true` para o construtor para disparar eventos configurados automaticamente.

```ts
function sendEvents(events: MyEventType []) {
  ...
}

<PageConstructorProvider
    ...

    analytics={{sendEvents, autoEvents: true}}

    ...
/>
```

Um objeto de evento tem apenas um campo obrigatório - `name`. Ele também possui campos predefinidos, que servem para ajudar a gerenciar lógicas complexas. Por exemplo, `counter.include` pode ajudar a enviar um evento em um contador específico se vários sistemas de análise forem usados em um projeto.

```ts
type AnalyticsEvent<T = {}> = T & {
  name: string;
  type?: string;
  counters?: AnalyticsCounters;
  context?: string;
};
```

É possível configurar um tipo de evento necessário para um projeto.

```ts
type MyEventType = AnalyticsEvent<{
  [key: string]?: string; // apenas um tipo 'string' é suportado
}>;
```

#### Seletor de contador

É possível configurar um evento para qual sistema de análise enviar.

```ts
type AnalyticsCounters = {
  include?: string[]; // array de IDs de contadores de análise que serão aplicados
  exclude?: string[]; // array de IDs de contadores de análise que não serão aplicados
};
```

#### Parâmetro `context`

Passe o valor `context` para definir o local em um projeto onde um evento é disparado.

Use o seletor abaixo ou crie uma lógica que atenda às necessidades do projeto.

```ts
// analyticsHandler.ts
if (isCounterAllowed(counterName, counters)) {
  analyticsCounter.reachGoal(counterName, name, parameters);
}
```

#### Tipos de evento reservados

Vários tipos de eventos predefinidos são usados para marcar eventos configurados automaticamente. Use os tipos para filtrar eventos padrão, por exemplo.

```ts
enum PredefinedEventTypes {
  Default = 'default-event', // eventos padrão que disparam em cada clique de botão
  Play = 'play', // evento do player React
  Stop = 'stop', // evento do player React
}
```

## Desenvolvimento

```bash
npm ci
npm run dev
```

#### Nota sobre Vite

```ts
import react from '@vitejs/plugin-react-swc';
import dynamicImport from 'vite-plugin-dynamic-import';

export default defineConfig({
  plugins: [
    react(),
    dynamicImport({
      filter: (id) => id.includes('/node_modules/@gravity-ui/page-constructor'),
    }),
  ],
});
```

Para Vite, você precisa instalar o plugin `vite-plugin-dynamic-import` e configurar o arquivo de configuração para que os imports dinâmicos funcionem.

## Fluxo de lançamento

Em casos normais, usamos dois tipos de commits:

1. `fix`: um commit do tipo `fix` corrige um bug em sua base de código (isso se correlaciona com PATCH em Versionamento Semântico).
2. `feat`: um commit do tipo `feat` introduz

Este projeto inclui um abrangente **Banco de Memória** - uma coleção de arquivos de documentação Markdown que fornecem informações detalhadas sobre a arquitetura, componentes e padrões de uso do projeto. O Banco de Memória é particularmente útil ao trabalhar com agentes de IA, pois contém informações estruturadas sobre:

- **Visão Geral do Projeto**: Requisitos principais, objetivos e contexto
- **Documentação de Componentes**: Guias de uso detalhados para todos os componentes
- **Arquitetura do Sistema**: Padrões técnicos e decisões de design
- **Progresso do Desenvolvimento**: Status atual e detalhes de implementação

### Usando o Banco de Memória

O Banco de Memória está localizado no diretório `memory-bank/` e consiste em arquivos Markdown regulares que podem ser lidos como qualquer outra documentação:

- `projectbrief.md` - Documento fundamental com os requisitos principais
- `productContext.md` - Propósito do projeto e objetivos de experiência do usuário
- `systemPatterns.md` - Arquitetura e decisões técnicas
- `techContext.md` - Tecnologias, configuração e restrições
- `activeContext.md` - Foco de trabalho atual e alterações recentes
- `progress.md` - Status de implementação e problemas conhecidos
- `usage/` - Documentação de uso específica do componente
- `storybookComponents.md` - Detalhes de integração do Storybook

## Testes

Documentação abrangente está disponível no [link](./test-utils/docs/README.md) fornecido.

## Licença

Distribuído sob a Licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## Para agentes de IA

Uma biblioteca para renderizar páginas web inteiras ou seções de páginas a partir de configurações declarativas JSON/YAML, usando um conjunto de blocos prontos e ordenáveis — utilize-a para construir páginas de marketing/landing pages, não interfaces de aplicativos gerais.

### Quando usar

- Páginas orientadas por dados: renderize uma configuração `content` de blocos tipados com `PageConstructor` encapsulado em `PageConstructorProvider`.
- Páginas de marketing, landing pages e documentação montadas a partir de blocos pré-construídos (cabeçalhos, mídia, cartões, etc.).
- Processamento YFM do lado do servidor de texto de blocos através das utilidades `@gravity-ui/page-constructor/server` (`contentTransformer`, `fullTransform`).
- Reutilizando apenas a grade responsiva (`Grid`/`Row`/`Col`) ou o componente `Navigation` isoladamente.

### Quando não usar

- Interfaces de aplicativos gerais (botões, formulários, modais) — use [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Edição de conteúdo Markdown/YFM — use [`@gravity-ui/markdown-editor`](https://github.com/gravity-ui/markdown-editor).
- Estruturas de navegação de aplicativos (barra lateral, cabeçalho) — use [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation); o `Navigation` deste pacote é uma navegação superior em nível de página.

### Armadilhas comuns

- **`PageConstructor` deve ser encapsulado em `PageConstructorProvider`.** Renderizá-lo sem isso quebra o contexto (local, tema, SSR, analytics).
- **A prop `content` é `content`, com a estrutura `{blocks: [...]}`.** Cada objeto de bloco precisa de um `type` que corresponda a um bloco conhecido, mais seus campos de dados; não há prop `data`/`config`.
- **YFM em texto de bloco requer processamento do lado do servidor.** Campos semelhantes a Markdown são renderizados como texto puro, a menos que você processe o conteúdo através de `contentTransformer`/`fullTransform` de `@gravity-ui/page-constructor/server`; `@diplodoc/transform` é uma dependência peer obrigatória.
- **Importe os estilos SCSS.** Adicione `@gravity-ui/page-constructor/styles/styles.scss` (SCSS, não CSS); blocos personalizados importam o mesmo arquivo para reutilizar mixins/variáveis.
- **Vite precisa de `vite-plugin-dynamic-import`.** Importações dinâmicas de blocos falham no Vite sem ele.

## Documentação para agentes de IA

A documentação legível por agente para a versão instalada está localizada em `node_modules/@gravity-ui/page-constructor/build/docs/INDEX.md`.