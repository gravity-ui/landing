# Gravity UI ChartKit · [![npm package](https://img.shields.io/npm/v/@gravity-ui/chartkit)](https://www.npmjs.com/package/@gravity-ui/chartkit) [![License](https://img.shields.io/github/license/gravity-ui/ChartKit)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/ChartKit/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/chartkit/)

Componente React baseado em plugins que renderiza gráficos de diversas bibliotecas, como Gravity Charts e Yagr, através de uma única API ChartKit, com tooltips amigáveis para dispositivos móveis e suporte a plugins customizados. Você registra um ou mais plugins e renderiza gráficos via `<ChartKit type="..." data={...} />` — o ChartKit despacha para o renderizador correto automaticamente.

Cada renderizador de plugin é carregado sob demanda (lazy-loaded), então o código da biblioteca subjacente só é baixado quando o ChartKit é efetivamente renderizado na UI. O ChartKit também lida com a exibição de tooltips amigáveis para dispositivos móveis nativamente. Você pode usar os plugins embutidos ou implementar os seus próprios.

**Quando usar:**

- Você precisa de gráficos declarativos modernos (`gravity-charts`) ou gráficos de séries temporais / monitoramento (`yagr`)
- Você precisa de múltiplos tipos de gráficos sob uma única API consistente
- Você quer gráficos que sigam o mesmo tema claro/escuro do restante da sua UI nativamente

**Quando não usar:**

- Você só precisa de uma biblioteca de gráficos específica — prefira usar o [@gravity-ui/charts](https://github.com/gravity-ui/charts) diretamente

## Sumário

- [Primeiros passos](#getting-started)
- [Atualizando pacotes de gráficos](#updating-charting-packages)
- [Desenvolvimento](#development)

## Primeiros passos

### Requisitos

- React 18 ou 19
- [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) 8 — dependência peer obrigatória (fornece temas e primitivas de UI)

### Instalação

```shell
npm install @gravity-ui/chartkit @gravity-ui/uikit
```

### Estilos

Importe os estilos do `@gravity-ui/uikit` no seu ponto de entrada:

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

Para detalhes completos de configuração, consulte o [guia de estilos do uikit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles).

### Uso básico

O ChartKit usa um registro global de plugins. Chame `settings.set` uma vez no ponto de entrada da sua aplicação para registrar os plugins que você precisa. Quando `<ChartKit type="..." />` renderiza, ele procura o plugin correspondente — se nenhum for encontrado, um erro é lançado. O renderizador de cada plugin é um componente `React.lazy`, então seu código é buscado apenas quando o ChartKit aparece pela primeira vez na UI.

Você pode registrar múltiplos plugins de uma vez:

```ts
settings.set({plugins: [GravityChartsPlugin, YagrPlugin]});
```

Ou chame `settings.set` múltiplas vezes — ele mescla a lista de plugins em vez de substituí-la.

**Exemplo básico:**

```tsx
import {Provider} from '@gravity-ui/uikit';
import ChartKit, {settings} from '@gravity-ui/chartkit';
import {GravityChartsPlugin} from '@gravity-ui/chartkit/gravity-charts';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

settings.set({plugins: [GravityChartsPlugin]});

const data = {
  series: {
    data: [
      {
        type: 'line',
        name: 'Series',
        data: [
          {x: 0, y: 10},
          {x: 1, y: 25},
          {x: 2, y: 18},
          {x: 3, y: 30},
        ],
      },
    ],
  },
};

export default function App() {
  return (
    <Provider theme="light">
      <div style={{height: 300}}>
        <ChartKit type="gravity-charts" data={data} />
      </div>
    </Provider>
  );
}
```

O `ChartKit` se adapta ao tamanho do seu elemento pai — certifique-se de que o contêiner tenha uma altura explícita.

### SplitTooltip

O layout de tooltip em painéis divididos que o `gravity-charts` usa em dispositivos de toque (`tooltip={{splitted: true}}`) também está disponível como um componente independente. Ele funciona com qualquer conteúdo: renderiza o painel principal e o painel de tooltip lado a lado (ou empilhados, dependendo do tamanho do contêiner) com um redimensionador arrastável entre eles.

```tsx
import {SplitTooltip} from '@gravity-ui/chartkit';

export function Panel() {
  return (
    <div style={{height: 400}}>
      <SplitTooltip
        renderMainPane={() => <MyVisualization />}
        renderTooltip={() => <MyTooltipContent />}
      />
    </div>
  );
}
```

Consulte o tipo `SplitTooltipProps` para controle de layout, dimensionamento de painéis e opções de redimensionador.

## Atualizando pacotes de gráficos

O ChartKit agrupa duas bibliotecas de gráficos do Gravity UI como dependências:

- [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) — alimenta o plugin `gravity-charts`
- [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) — alimenta o plugin `yagr`

Se você precisar de uma versão mais recente de um desses pacotes, abra uma solicitação de atualização de pacote [Package update request](https://github.com/gravity-ui/ChartKit/issues/new?template=package-update-request.yml) e selecione o(s) pacote(s) que você precisa. Os mantenedores atualizarão os pacotes selecionados e lançarão a atualização.

### Atualizando do ChartKit 8

Consulte o [guia de migração](docs/migration-to-v9.md): uikit 8 e React 18+, notas sobre o build CommonJS/ESM e `moduleResolution` do TypeScript, e as mudanças nos dados do `gravity-charts` que vêm com o `@gravity-ui/charts` 2.

## Desenvolvimento

### Pré-requisitos

- [Node.js](https://nodejs.org/) 22 (veja [.nvmrc](https://github.com/gravity-ui/ChartKit/blob/main/.nvmrc))
- [npm](https://www.npmjs.com/) 10 ou posterior

### Configuração

Clone o repositório e instale as dependências:

```shell
git clone https://github.com/gravity-ui/ChartKit.git
cd ChartKit
npm ci
```

### Executando o Storybook

```shell
npm run start
```

O Storybook estará disponível em `http://localhost:7007`.

### Desenvolvendo com uma dependência local

Para trabalhar em uma dependência (por exemplo, `@gravity-ui/charts`) e ver suas alterações ao vivo no Storybook sem publicar no npm:

**1. Vincule o pacote local**

```shell
# No seu clone local do @gravity-ui/charts:
git clone https://github.com/gravity-ui/charts.git
cd charts
npm ci
# faça suas alterações
npm run build
npm link

# No ChartKit:
npm link @gravity-ui/charts
```

**2. Configure o monitoramento de pacotes locais**

Crie um arquivo `.env.local` na raiz do ChartKit (ele é ignorado pelo git):

```shell
LOCAL_PKG=@gravity-ui/charts
```

Isso instrui o Vite a monitorar esse pacote em `node_modules` e pular a pré-empacotamento dele. Após reconstruir o `@gravity-ui/charts`, o Storybook será recarregado automaticamente.

Para múltiplos pacotes, use uma lista separada por vírgulas:

```shell
LOCAL_PKG=@gravity-ui/charts,@gravity-ui/uikit
```

**3. Inicie o Storybook**

```shell
npm run start
```

**4. Restaure o pacote original**

Quando terminar:

1. Comente o `LOCAL_PKG` em `.env.local`
2. Execute `npm install` no ChartKit — ele substitui o link simbólico pela versão do registro

```shell
# No ChartKit:
npm ci
```

### Executando testes

```shell
npm test
```

Para verificar o pacote compilado, compile-o primeiro. A verificação carrega as compilações CommonJS e ESM no Node, compara suas exportações e verifica os tipos de um consumidor sob as resoluções de módulo `nodenext`, `bundler` e `node`:

```shell
npm run build
npm run test:build
```

Testes de regressão visual são executados no Docker para garantir capturas de tela consistentes entre ambientes:

```shell
npm run test:docker
```

Para atualizar as capturas de tela de referência após alterações intencionais na UI:

```shell
npm run test:docker:update
```

### Contribuição

Por favor, consulte o [guia de contribuição](CONTRIBUTING.md) antes de enviar um pull request.

## Licença

Distribuído sob a Licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## Para agentes de IA

Um componente React baseado em plugins que renderiza gráficos de múltiplas bibliotecas de gráficos, como Gravity Charts e Yagr, através de uma única API `<ChartKit type="..." data={...} />`, carregando cada biblioteca sob demanda apenas quando seu tipo de gráfico é renderizado.

### Quando usar

- Renderizar mais de um motor de gráficos sob um componente consistente: `gravity-charts` (gráficos SVG declarativos via [`@gravity-ui/charts`](https://github.com/gravity-ui/charts)) e `yagr` (séries temporais baseadas em uPlot via [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr)).
- Carregamento sob demanda de pacotes de gráficos — o renderizador de cada plugin é `React.lazy`, então o código de uma biblioteca só é buscado quando seu tipo de gráfico é realmente exibido.
- Tooltips amigáveis para dispositivos móveis prontos para uso — o gráfico e seu tooltip são exibidos em painéis divididos redimensionáveis em vez de um pop-up de hover; para `gravity-charts`, ative-o com `<ChartKit type="gravity-charts" tooltip={{splitted: true}} />`.
- Usar o layout de tooltip de painel dividido por si só — `SplitTooltip` é um componente autônomo exportado da entrada raiz: passe `renderMainPane` e `renderTooltip`, e ele os organiza como painéis redimensionáveis (vertical ou horizontal, escolhidos pelo tamanho do contêiner) para qualquer conteúdo, não apenas gráficos ChartKit.
- Escrever seu próprio plugin — registre `{type, renderer}` via `settings.set({plugins: [...]})`, onde `renderer` é um componente `React.lazy`; ChartKit o despacha por `type` exatamente como para os plugins integrados.
- Tematização clara/escura consistente em todos os motores de gráficos prontos para uso — os gráficos seguem o tema `@gravity-ui/uikit` do aplicativo circundante.

### Quando não usar

- Para um único tipo de gráfico, importe [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) (geral) ou [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) (séries temporais de alto desempenho) diretamente — o registro de plugins é um overhead para um único motor.
- Para compor uma grade de painel de widgets, use [`@gravity-ui/dashkit`](https://github.com/gravity-ui/dashkit) — ChartKit renderiza um gráfico; DashKit organiza muitos widgets.

### Armadilhas comuns

- **Renderizar `<ChartKit>` antes de `settings.set({plugins: [...]})`** — o registro global de plugins deve ser preenchido na entrada do aplicativo; um `type` não registrado lança um erro no tempo de renderização.
- **Prop `chartType` / `library` alucinada** — a prop de despacho é `type` (por exemplo, `type="gravity-charts"`), e os dados são `data`.
- **Importar plugins da entrada raiz** — os plugins residem em exportações de subcaminhos (por exemplo, `@gravity-ui/chartkit/gravity-charts`, `@gravity-ui/chartkit/yagr`); a entrada raiz `@gravity-ui/chartkit` não os reexporta.
- **Assumir uma forma `data` para cada `type`** — a forma depende do plugin, por exemplo, `gravity-charts` aceita `ChartData` de `@gravity-ui/charts` (`{series: {data: [...]}}`), enquanto `yagr` aceita `{data: {graphs, timeline}, libraryConfig}` com `libraryConfig` obrigatório.
- **Esquecer a altura do contêiner** — `ChartKit` preenche seu pai; sem uma altura explícita no wrapper, o gráfico colapsa para zero.
- **Faltando a importação de estilos do uikit** — a tematização depende de `@gravity-ui/uikit/styles/styles.css`; sem ela, os gráficos são renderizados sem estilo.

## Documentação para agentes de IA

A documentação legível por agente para a versão instalada está localizada em `node_modules/@gravity-ui/chartkit/build/docs/INDEX.md`.