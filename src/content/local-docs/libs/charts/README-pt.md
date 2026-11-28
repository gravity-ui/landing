# Gravity UI Charts · [![npm package](https://img.shields.io/npm/v/@gravity-ui/charts)](https://www.npmjs.com/package/@gravity-ui/charts) [![License](https://img.shields.io/github/license/gravity-ui/charts)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/charts/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/charts/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/charts/)

Biblioteca declarativa de gráficos React: linha, área, barra, pizza, dispersão, treemap, sankey, heatmap e mais, renderizados a partir de uma única configuração de dados.

## Instalar

```shell
npm install @gravity-ui/uikit @gravity-ui/charts
```

`@gravity-ui/uikit` é uma dependência peer obrigatória — ela fornece a tematização e os estilos dos quais os gráficos dependem.

## Uso

Importe os estilos de `@gravity-ui/uikit` uma vez no seu ponto de entrada, envolva seu aplicativo em `Provider` e renderize um `Chart` dentro de um contêiner com altura explícita:

```tsx
import {Provider} from '@gravity-ui/uikit';
import {Chart} from '@gravity-ui/charts';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

const data = {
  series: {
    data: [
      {
        type: 'line',
        name: 'Temperature',
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
        <Chart data={data} />
      </div>
    </Provider>
  );
}
```

`Chart` se adapta ao tamanho do seu elemento pai, portanto, o elemento de envolvimento deve ter uma altura.

## Ferramentas de configuração de gráficos

O pacote fornece declarações TypeScript e JSON Schema para validação, geração e integração com Monaco da configuração de gráficos. Veja a [documentação das ferramentas de configuração de gráficos](https://gravity-ui.github.io/charts/pages/integrations/chart-config.html) para detalhes de configuração e uso.

## Documentação

- [Visão geral](https://gravity-ui.github.io/charts/pages/overview.html)
- [Começando](https://gravity-ui.github.io/charts/pages/get-started.html)
- [Desenvolvimento](https://gravity-ui.github.io/charts/pages/development.html)
- [API](https://gravity-ui.github.io/charts/pages/api/overview.html)
- [Guias](https://gravity-ui.github.io/charts/pages/guides/series-types/index.html)

## Licença

Distribuído sob a Licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## Para agentes de IA

Uma biblioteca declarativa de gráficos React — renderiza gráficos de linha, área, barra, pizza, dispersão, treemap, sankey, heatmap e outros a partir de uma única configuração `data`, com temas claro e escuro integrados.

### Quando usar

- Tipos de série suportados: `line`, `area`, `area-range`, `bar-x`/`bar-y`, `pie`, `scatter`, `treemap`, `waterfall`, `sankey`, `radar`, `heatmap`, `funnel`, `x-range`.
- Visualizações que devem seguir a tematização Gravity UI (claro/escuro) e compartilhar tokens com um aplicativo `@gravity-ui/uikit`.
- Renderização de um gráfico a partir de dados declarativos em vez de desenho imperativo.

### Quando não usar

- Projetos ainda com `@gravity-ui/chartkit` — esse é o wrapper mais antigo baseado em adaptadores (YAGR/Highcharts/D3); este pacote é o renderizador independente moderno e não é um substituto direto.
- Dados tabulares simples — use [`@gravity-ui/table`](https://github.com/gravity-ui/table).
- Renderização não-React ou apenas no servidor — `Chart` renderiza SVG React e precisa do DOM.

### Armadilhas comuns

- **O componente é `Chart`, não `ChartKit`.** Importe `{Chart}` de `@gravity-ui/charts`; `ChartKit` pertence ao pacote legado separado `@gravity-ui/chartkit`.
- **A prop `data` é `data`, com formato `{series: {data: [...]}}`.** Cada entrada em `series.data` é uma série com seu próprio `type` e array `data` — não há um array de séries de nível superior.
- **Nada é renderizado sem um contêiner dimensionado.** `Chart` preenche seu pai, então dê ao wrapper uma altura explícita.
- **Requer configuração do uikit.** Envolva em `Provider` e importe `@gravity-ui/uikit/styles/styles.css`; `@gravity-ui/uikit` é uma dependência peer obrigatória.

### Documentos úteis

- [Começando](./docs/diplodoc/pages/get-started.md)
- [Tipos de série](./docs/diplodoc/pages/guides/series-types/index.md)
- [Tematização](./docs/diplodoc/pages/guides/theming.md)
- [Tooltip](./docs/diplodoc/pages/guides/tooltip.md)
- [Legenda](./docs/diplodoc/pages/guides/legend.md)
- [Conteúdo HTML](./docs/diplodoc/pages/guides/html.md)
- [Formatação de valores](./docs/diplodoc/pages/guides/value-formatting.md)
- [Rótulos de dados](./docs/diplodoc/pages/guides/data-labels.md)
- [Tipos de eixo](./docs/diplodoc/pages/guides/axes/axis-types.md)
- [Rótulos de eixo](./docs/diplodoc/pages/guides/axes/axis-labels.md)
- [Eventos e interações](./docs/diplodoc/pages/guides/chart-interactions.md)
- [Ferramentas de configuração de gráficos](./docs/diplodoc/pages/integrations/chart-config.md)
- [Migrando de v1 para v2](./docs/diplodoc/pages/migration/v2.md)

## Documentação para agentes de IA

A documentação legível por agente para a versão instalada está localizada em `node_modules/@gravity-ui/charts/dist/docs/INDEX.md`.