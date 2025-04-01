# @gravity-ui/graph &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/graph)](https://www.npmjs.com/package/@gravity-ui/graph) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/graph/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/graph/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/graph/)

Renderizador de gráficos de alto rendimiento con detalle sensible a la escala

[Libro de cuentos](https://preview.gravity-ui.com/graph/)

## Instalación y configuración

```bash
npm install @gravity-ui/graph
```

## Ejemplos

- [Ejemplo de libro de cuentos básico](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--hundred-blocks)
- [Ejemplo de libro de cuentos de Large Basic](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--five-thousands-blocks)
- [Vista de bloques personalizados](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--custom-schematic-block)
- [Conexión Bézier](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--one-bezier-connection)
- [Conexión de personalización](https://preview.gravity-ui.com/graph/?path=/story/api-updateconnection--default)

```jsx
import {GraphCanvas, GraphState, TRenderBlockFn, GraphBlock, useGraph} from '@gravity-ui/graph';
import React from 'react';

const config = {};

export function GraphEditor() {
  const {graph, setEntities, start} = useGraph(config);

  useEffect(() => {
    setEntities({
      blocks: [
        {
          is: 'block-action',
          id: 'action_1',
          x: -100,
          y: -450,
          width: 126,
          height: 126,
          selected: true,
          name: 'Block #1',
          anchors: [],
        },
        {
          id: 'action_2',
          is: 'block-action',
          x: 253,
          y: 176,
          width: 126,
          height: 126,
          selected: false,
          name: 'Block #2',
          anchors: [],
        },
      ],
      connections: [
        {
          sourceBlockId: 'action_1',
          targetBlockId: 'action_2',
        },
      ],
    });
  });

  const renderBlockFn = (graph, block) => {
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
      onStateChanged={({state}) => {
        if (state === GraphState.ATTACHED) {
          start();
          graph.zoomTo('center', {padding: 300});
        }
      }}
    />
  );
}
```

### Documentos

- [API pública](docs/public_api.md)
- [Graficar eventos](docs/events.md)
- [Capas](docs/layers.md)
- [Grupos](docs/groups.md)
