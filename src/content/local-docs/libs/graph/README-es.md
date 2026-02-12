# @gravity-ui/graph &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/graph)](https://www.npmjs.com/package/@gravity-ui/graph) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/graph/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/graph/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/graph/)

> [Guía de migración de 0.x a 1.x →](docs/migration-guides/v0-to-v1.md)

Una biblioteca de visualización de grafos que combina lo mejor de ambos mundos:
- Canvas para un alto rendimiento al ver el grafo completo
- HTML/React para interacciones ricas al hacer zoom

No más elegir entre rendimiento e interactividad. Perfecto para diagramas grandes, diagramas de flujo y editores basados en nodos.

## Motivación

Las aplicaciones web modernas a menudo requieren visualización e interactividad complejas, pero las soluciones existentes suelen centrarse en una única tecnología de renderizado:

- **Canvas** ofrece un alto rendimiento para gráficos complejos, pero está limitado en el manejo de texto e interactividad.
- **HTML DOM** es conveniente para interfaces, pero menos eficiente para gráficos complejos o un gran número de elementos.

@gravity-ui/graph resuelve esto cambiando automáticamente entre Canvas y HTML según el nivel de zoom:
- **Alejado**: Utiliza Canvas para renderizar eficientemente el grafo completo
- **Zoom medio**: Muestra una vista esquemática con interactividad básica
- **Acercado**: Cambia a componentes HTML/React para interacciones ricas

## Cómo funciona

La biblioteca utiliza un sistema de renderizado inteligente que gestiona automáticamente la transición entre Canvas y componentes React:

1. En niveles de zoom bajos, todo se renderiza en Canvas para obtener rendimiento.
2. Al hacer zoom para ver los detalles, el componente `GraphCanvas`:
   - Rastrea los cambios en la vista de la cámara y la escala.
   - Calcula qué bloques son visibles en la vista actual (con relleno para un desplazamiento suave).
   - Renderiza componentes React solo para los bloques visibles.
   - Actualiza automáticamente la lista al desplazarse o hacer zoom.
   - Elimina los componentes React al alejarse.

```typescript
// Ejemplo de renderizado de componentes React
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

## Instalación

```bash
npm install @gravity-ui/graph
```

## Ejemplos

### Ejemplo de React

[Documentación detallada de componentes React](docs/react/usage.md)

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
          name: "Bloque #1",
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
          name: "Bloque #2",
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

### Ejemplo de JavaScript Vanilla

```javascript
import { Graph } from "@gravity-ui/graph";

// Crear elemento contenedor
const container = document.createElement('div');
container.style.width = '100vw';
container.style.height = '100vh';
container.style.overflow = 'hidden';
document.body.appendChild(container);

// Inicializar grafo con configuración
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

```javascript
// Añadir bloques y conexiones
graph.setEntities({
    blocks: [
        {
            is: "block-action",
            id: "block1",
            x: 100,
            y: 100,
            width: 120,
            height: 120,
            name: "Bloque #1",
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
            name: "Bloque #2",
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

// Iniciar renderizado
graph.start();

// Centrar la vista
graph.zoomTo("center", { padding: 100 });
```

## Ejemplos en Vivo

- [Ejemplo básico](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--hundred-blocks)
- [Ejemplo a gran escala](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--five-thousands-blocks)
- [Vista de bloques personalizados](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--custom-schematic-block)
- [Conexión Bezier](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--one-bezier-connection)
- [Personalización de conexiones](https://preview.gravity-ui.com/graph/?path=/story/api-updateconnection--default)

## Documentación

### Tabla de Contenidos

1. Sistema
   - [Ciclo de Vida del Componente](docs/system/component-lifecycle.md)
   - [Eventos](docs/system/events.md)
   - [Configuración del Gráfico](docs/system/graph-settings.md)
   - [API Pública](docs/system/public_api.md)
   - [Sistema de Planificación](docs/system/scheduler-system.md)

2. Componentes
   - [Componente de Gráfico de Lienzo](docs/components/canvas-graph-component.md)
   - [Componente de Bloque](docs/components/block-component.md)
   - [Anclajes](docs/components/anchors.md)

3. Renderizado
   - [Mecanismo de Renderizado](docs/rendering/rendering-mechanism.md)
   - [Capas](docs/rendering/layers.md)

4. Bloques y Conexiones
   - [Grupos de Bloques](docs/blocks/groups.md)
   - [Sistema de Conexiones de Lienzo](docs/connections/canvas-connection-system.md)