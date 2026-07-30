# @gravity-ui/graph &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/graph)](https://www.npmjs.com/package/@gravity-ui/graph) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/graph/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/graph/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/graph/)

> [Guía de migración de 0.x a 1.x →](docs/migration-guides/v0-to-v1.md)

Una biblioteca de visualización de grafos que combina lo mejor de ambos mundos:
- Canvas para un alto rendimiento al ver el grafo completo
- HTML/React para interacciones ricas al hacer zoom

Se acabaron las elecciones entre rendimiento e interactividad. Perfecta para diagramas grandes, diagramas de flujo y editores basados en nodos.

![preview graph.](docs/_static/graph_preview.png)

## Motivación

Las aplicaciones web modernas a menudo requieren visualización e interactividad complejas, pero las soluciones existentes suelen centrarse en una única tecnología de renderizado:

- **Canvas** ofrece un alto rendimiento para gráficos complejos, pero está limitado en el manejo de texto e interactividad.
- **HTML DOM** es conveniente para interfaces, pero menos eficiente para gráficos complejos o un gran número de elementos.

@gravity-ui/graph resuelve esto cambiando automáticamente entre Canvas y HTML según el nivel de zoom:
- **Alejado**: Utiliza Canvas para un renderizado eficiente del grafo completo
- **Zoom medio**: Muestra una vista esquemática con interactividad básica
- **Acercado**: Cambia a componentes HTML/React para interacciones ricas

## Cómo Funciona

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

## Uso

### Ejemplo con React

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

### Ejemplo con JavaScript Vanilla

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

## Ejemplos en vivo

- [Ejemplo básico](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--hundred-blocks)
- [Ejemplo a gran escala](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--five-thousands-blocks)
- [Vista de bloques personalizados](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--custom-schematic-block)
- [Conexión Bezier](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--one-bezier-connection)
- [Personalización de conexiones](https://preview.gravity-ui.com/graph/?path=/story/api-updateconnection--default)

## Documentación

### Tabla de contenidos

1. Sistema
   - [Ciclo de vida del componente](docs/system/component-lifecycle.md)
   - [Eventos](docs/system/events.md)
   - [Configuración del gráfico](docs/system/graph-settings.md)
   - [API pública](docs/system/public_api.md)
   - [Sistema de planificación](docs/system/scheduler-system.md)

2. Componentes
   - [Componente de gráfico Canvas](docs/components/canvas-graph-component.md)
   - [Componente de bloque](docs/components/block-component.md)
   - [Anclajes](docs/components/anchors.md)

3. Renderizado
   - [Mecanismo de renderizado](docs/rendering/rendering-mechanism.md)
   - [Capas](docs/rendering/layers.md)

4. Bloques y conexiones
   - [Grupos de bloques](docs/blocks/groups.md)
   - [Sistema de conexiones Canvas](docs/connections/canvas-connection-system.md)

## Licencia

Distribuido bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## Para agentes de IA

Un editor de gráficos híbrido Canvas/React para diagramas basados en nodos — úsalo para crear diagramas de flujo, editores de nodos o diagramas interactivos grandes donde Canvas ofrece rendimiento con zoom bajo y los componentes React ofrecen una rica interactividad al hacer zoom.

### Cuándo usarlo

- Editores basados en nodos (diagramas de flujo, pipelines, constructores visuales) con cientos/miles de nodos y conexiones.
- Renderizado mixto: Canvas para la vista general del gráfico completo, componentes React para los bloques visibles en el viewport con zoom alto.
- Consumidores de Vanilla JS o React — la clase principal `Graph` es independiente del framework; `@gravity-ui/graph/react` proporciona los enlaces de React.

### Cuándo no usarlo

- Para trazar series de datos numéricos (gráficos de líneas/barras/dispersión), usa [`@gravity-ui/charts`](https://gravity-ui.com/charts) o [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) — graph es un editor de diagramas de nodos/aristas, no un gráfico de datos.
- Para un diagrama estático, no editable con pocos nodos, un SVG o una biblioteca de diagramas más simple pueden ser suficientes sin la maquinaria de viewport Canvas/React.

### Errores comunes

- **Importación "alucinada" de `GraphEditor`** — los componentes de React son `GraphCanvas`, `GraphBlock` y el hook `useGraph`, importados de `@gravity-ui/graph/react`; la clase principal es `Graph` de `@gravity-ui/graph`.
- **Llamar a métodos del gráfico antes del estado `ATTACHED`** — llama a `start()`/`zoomTo(...)` dentro del callback `onStateChanged` cuando `state === GraphState.ATTACHED`, no al montar.
- **Olvidar `setEntities`** — `useGraph` devuelve `graph`, `setEntities`, `start`; los datos solo aparecen después de `setEntities({blocks, connections})`.
- **Mezclar tipos de anclajes** — las conexiones deben referenciar IDs de anclajes existentes con `EAnchorType` (`IN`/`OUT`) coincidentes en los bloques de origen y destino.

## Documentación para agentes de IA

La documentación legible por agentes para la versión instalada se encuentra en `node_modules/@gravity-ui/graph/build/docs/INDEX.md`.