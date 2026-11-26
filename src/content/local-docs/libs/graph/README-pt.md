# @gravity-ui/graph &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/graph)](https://www.npmjs.com/package/@gravity-ui/graph) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/graph/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/graph/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/graph/)

> [Guia de Migração de 0.x para 1.x →](docs/migration-guides/v0-to-v1.md)

Uma biblioteca de visualização de grafos que combina o melhor dos dois mundos:
- Canvas para alto desempenho ao visualizar o grafo completo
- HTML/React para interações ricas ao dar zoom

Chega de escolher entre desempenho e interatividade. Perfeito para diagramas grandes, fluxogramas e editores baseados em nós.

![preview graph.](docs/_static/graph_preview.png)

## Motivação

Aplicações web modernas frequentemente exigem visualização e interatividade complexas, mas as soluções existentes geralmente se concentram em uma única tecnologia de renderização:

- **Canvas** oferece alto desempenho para gráficos complexos, mas é limitado no tratamento de texto e interatividade.
- **HTML DOM** é conveniente para interfaces, mas menos eficiente para gráficos complexos ou um grande número de elementos.

O @gravity-ui/graph resolve isso alternando automaticamente entre Canvas e HTML com base no nível de zoom:
- **Zoom Out**: Usa Canvas para renderização eficiente do grafo completo
- **Zoom Médio**: Mostra uma visão esquemática com interatividade básica
- **Zoom In**: Alterna para componentes HTML/React para interações ricas

## Como Funciona

A biblioteca usa um sistema de renderização inteligente que gerencia automaticamente a transição entre Canvas e componentes React:

1. Em níveis de zoom baixos, tudo é renderizado no Canvas para desempenho.
2. Ao dar zoom para uma visão detalhada, o componente `GraphCanvas`:
   - Rastreia as mudanças na viewport da câmera e na escala.
   - Calcula quais blocos estão visíveis na viewport atual (com preenchimento para rolagem suave).
   - Renderiza componentes React apenas para os blocos visíveis.
   - Atualiza automaticamente a lista ao rolar ou dar zoom.
   - Remove componentes React ao dar zoom out.

```typescript
// Exemplo de renderização de componentes React
const MyGraph = () => {
  return (
    <GraphCanvas
      graph={graph}
      renderBlock={(graph, block) => (
        <MyCustomBlockComponent
          graph={graph}
          block={block}
        />
      )}
    />
  );
};
```

[Storybook](https://preview.gravity-ui.com/graph/)

## Instalar

```bash
npm install @gravity-ui/graph
```

## Uso

### Exemplo com React

[Documentação Detalhada de Componentes React](docs/react/usage.md)

```typescript
import React, { useEffect } from "react";
import type { Graph, TBlock } from "@gravity-ui/graph";
import { EAnchorType, GraphState } from "@gravity-ui/graph";
import { GraphCanvas, GraphBlock, useGraph } from "@gravity-ui/graph/react";

const config = {};

export function GraphEditor() {
  const { graph, setEntities, start } = useGraph(config);

  useEffect(() => {
    setEntities({
      blocks: [
        {
          is: "block-action",
          id: "action_1",
          x: -100,
          y: -450,
          width: 126,
          height: 126,
          selected: true,
          name: "Bloco #1",
          anchors: [
            {
              id: "out1",
              blockId: "action_1",
              type: EAnchorType.OUT,
              index: 0,
            },
          ],
        },
        {
          id: "action_2",
          is: "block-action",
          x: 253,
          y: 176,
          width: 126,
          height: 126,
          selected: false,
          name: "Bloco #2",
          anchors: [
            {
              id: "in1",
              blockId: "action_2",
              type: EAnchorType.IN,
              index: 0,
            },
          ],
        },
      ],
      connections: [
        {
          sourceBlockId: "action_1",
          sourceAnchorId: "out1",
          targetBlockId: "action_2",
          targetAnchorId: "in1",
        },
      ],
    });
  }, [setEntities]);

  const renderBlockFn = (graph: Graph, block: TBlock) => {
    return (
      <GraphBlock graph={graph} block={block}>
        {block.id}
      </GraphBlock>
    );
  };

  return (
    <GraphCanvas
      graph={graph}
      renderBlock={renderBlockFn}
      onStateChanged={({ state }) => {
        if (state === GraphState.ATTACHED) {
          start();
          graph.zoomTo("center", { padding: 300 });
        }
      }}
    />
  );
}

```

### Exemplo com JavaScript Puro

```javascript
import { Graph } from "@gravity-ui/graph";

// Cria o elemento container
const container = document.createElement('div');
container.style.width = '100vw';
container.style.height = '100vh';
container.style.overflow = 'hidden';
document.body.appendChild(container);

// Inicializa o grafo com a configuração
const graph = new Graph({
    configurationName: "example",
    blocks: [],
    connections: [],
    settings: {
        canDragCamera: true,
        canZoomCamera: true,
        useBezierConnections: true,
        showConnectionArrows: true
    }
}, container);
```

// Adiciona blocos e conexões
graph.setEntities({
    blocks: [
        {
            is: "block-action",
            id: "block1",
            x: 100,
            y: 100,
            width: 120,
            height: 120,
            name: "Bloco #1",
            anchors: [
                {
                    id: "out1",
                    blockId: "block1",
                    type: EAnchorType.OUT,
                    index: 0
                }
            ]
        },
        {
            is: "block-action",
            id: "block2",
            x: 300,
            y: 300,
            width: 120,
            height: 120,
            name: "Bloco #2",
            anchors: [
                {
                    id: "in1",
                    blockId: "block2",
                    type: EAnchorType.IN,
                    index: 0
                }
            ]
        }
    ],
    connections: [
        {
            sourceBlockId: "block1",
            sourceAnchorId: "out1",
            targetBlockId: "block2",
            targetAnchorId: "in1"
        }
    ]
});

// Inicia a renderização
graph.start();

// Centraliza a visualização
graph.zoomTo("center", { padding: 100 });
```

## Exemplos ao Vivo

- [Exemplo básico](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--hundred-blocks)
- [Exemplo em larga escala](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--five-thousands-blocks)
- [Visualização de blocos personalizados](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--custom-schematic-block)
- [Conexão Bezier](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--one-bezier-connection)
- [Personalização de conexão](https://preview.gravity-ui.com/graph/?path=/story/api-updateconnection--default)

## Documentação

### Índice

1. Sistema
   - [Ciclo de Vida do Componente](docs/system/component-lifecycle.md)
   - [Eventos](docs/system/events.md)
   - [Configurações do Gráfico](docs/system/graph-settings.md)
   - [API Pública](docs/system/public_api.md)
   - [Sistema de Agendamento](docs/system/scheduler-system.md)

2. Componentes
   - [Componente Canvas Graph](docs/components/canvas-graph-component.md)
   - [Componente Block](docs/components/block-component.md)
   - [Âncoras](docs/components/anchors.md)

3. Renderização
   - [Mecanismo de Renderização](docs/rendering/rendering-mechanism.md)
   - [Camadas](docs/rendering/layers.md)

4. Blocos e Conexões
   - [Grupos de Blocos](docs/blocks/groups.md)
   - [Sistema de Conexão Canvas](docs/connections/canvas-connection-system.md)

5. Testes
   - [Objetos de página Playwright](docs/testing/playwright.md)

## Licença

Distribuído sob a Licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## Para agentes de IA

Um editor de gráficos híbrido Canvas/React para diagramas baseados em nós — utilize-o para construir fluxogramas, editores de nós ou diagramas interativos grandes onde o Canvas oferece desempenho em zoom baixo e os componentes React oferecem interatividade rica ao dar zoom.

### Quando usar

- Editores baseados em nós (fluxogramas, pipelines, construtores visuais) com centenas/milhares de nós e conexões.
- Renderização mista: Canvas para a visão geral completa do gráfico, componentes React para os blocos visíveis na viewport em zoom alto.
- Consumidores Vanilla JS ou React — a classe principal `Graph` é agnóstica a frameworks; `@gravity-ui/graph/react` fornece os bindings React.

### Quando não usar

- Para plotar séries de dados numéricos (gráficos de linha/barra/dispersão), use [`@gravity-ui/charts`](https://gravity-ui.com/charts) ou [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) — o gráfico é um editor de diagramas de nós/arestas, não um gráfico de dados.
- Para um diagrama estático, não editável com poucos nós, um SVG ou uma biblioteca de diagramas mais simples pode ser suficiente sem a maquinaria de viewport Canvas/React.

### Armadilhas comuns

- **Importação alucinada `GraphEditor`** — os componentes React são `GraphCanvas`, `GraphBlock` e o hook `useGraph`, importados de `@gravity-ui/graph/react`; a classe principal é `Graph` de `@gravity-ui/graph`.
- **Chamar métodos do gráfico antes do estado `ATTACHED`** — chame `start()`/`zoomTo(...)` dentro do callback `onStateChanged` quando `state === GraphState.ATTACHED`, não no momento da montagem.
- **Esquecer `setEntities`** — `useGraph` retorna `graph`, `setEntities`, `start`; os dados só aparecem após `setEntities({blocks, connections})`.
- **Misturar tipos de âncora** — as conexões devem referenciar IDs de âncora existentes com `EAnchorType` (`IN`/`OUT`) correspondente nos blocos de origem e destino.

## Documentação para agentes de IA

A documentação legível por agente para a versão instalada está localizada em `node_modules/@gravity-ui/graph/build/docs/INDEX.md`.