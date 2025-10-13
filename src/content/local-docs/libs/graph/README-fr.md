# @gravity-ui/graph &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/graph)](https://www.npmjs.com/package/@gravity-ui/graph) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/graph/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/graph/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/graph/)

> [Guide de migration de la version 0.x vers 1.x →](docs/migration-guides/v0-to-v1.md)

Une bibliothèque de visualisation de graphes qui combine le meilleur des deux mondes :
- Canvas pour des performances élevées lors de la visualisation du graphe complet
- HTML/React pour des interactions riches lorsque l'on zoome

Fini le choix entre performance et interactivité. Idéal pour les diagrammes complexes, les organigrammes et les éditeurs basés sur des nœuds.

## Motivation

Les applications web modernes nécessitent souvent une visualisation et une interactivité complexes, mais les solutions existantes se concentrent généralement sur une seule technologie de rendu :

- **Canvas** offre des performances élevées pour les graphiques complexes, mais est limité dans la gestion du texte et l'interactivité.
- **DOM HTML** est pratique pour les interfaces, mais moins efficace pour les graphiques complexes ou un grand nombre d'éléments.

@gravity-ui/graph résout ce problème en basculant automatiquement entre Canvas et HTML en fonction du niveau de zoom :
- **Dézoomé** : Utilise Canvas pour un rendu efficace du graphe complet
- **Zoom moyen** : Affiche une vue schématique avec une interactivité de base
- **Zoomé** : Bascule vers des composants HTML/React pour des interactions riches

## Comment ça marche

La bibliothèque utilise un système de rendu intelligent qui gère automatiquement la transition entre les composants Canvas et React :

1. Aux niveaux de zoom bas, tout est rendu sur Canvas pour des raisons de performance.
2. Lors du zoom avant vers une vue détaillée, le composant `GraphCanvas` :
   - Suit les changements de la caméra (position et échelle).
   - Calcule quels blocs sont visibles dans la fenêtre d'affichage actuelle (avec un padding pour un défilement fluide).
   - Rend les composants React uniquement pour les blocs visibles.
   - Met à jour automatiquement la liste lors du défilement ou du zoom.
   - Supprime les composants React lors du dézoom.

```typescript
// Exemple de rendu de composants React
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

## Installation

```bash
npm install @gravity-ui/graph
```

## Exemples

### Exemple React

[Documentation détaillée des composants React](docs/react/usage.md)

```typescript
import { EAnchorType, Graph, GraphState } from "@gravity-ui/graph";
import { GraphCanvas, GraphBlock, useGraph } from "@gravity-ui/graph/react";
import React from "react";

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
          name: "Bloc #1",
          anchors: [
            {
              id: "out1",
              blockId: "action_1",
              type: EAnchorType.OUT,
              index: 0
            }
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
          name: "Bloc #2",
          anchors: [
            {
              id: "in1",
              blockId: "action_2",
              type: EAnchorType.IN,
              index: 0
            }
          ],
        }
      ],
      connections: [
        {
          sourceBlockId: "action_1",
          sourceAnchorId: "out1",
          targetBlockId: "action_2",
          targetAnchorId: "in1",
        }
      ]
    });
  }, [setEntities]);

  const renderBlockFn = (graph, block) => {
    return <GraphBlock graph={graph} block={block}>{block.id}</GraphBlock>;
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

### Exemple JavaScript Vanilla

```javascript
import { Graph } from "@gravity-ui/graph";

// Créer un élément conteneur
const container = document.createElement('div');
container.style.width = '100vw';
container.style.height = '100vh';
container.style.overflow = 'hidden';
document.body.appendChild(container);

// Initialiser le graphe avec la configuration
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

```html
<div class="language-selector">
    <a href="/README.md">English</a>
    <a href="/README.fr.md">Français</a>
</div>
```

```javascript
// Ajout de blocs et de connexions
graph.setEntities({
    blocks: [
        {
            is: "block-action",
            id: "block1",
            x: 100,
            y: 100,
            width: 120,
            height: 120,
            name: "Bloc #1",
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
            name: "Bloc #2",
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

// Démarrage du rendu
graph.start();

// Centrage de la vue
graph.zoomTo("center", { padding: 100 });
```

## Exemples en direct

- [Exemple de base](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--hundred-blocks)
- [Exemple à grande échelle](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--five-thousands-blocks)
- [Vue de blocs personnalisés](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--custom-schematic-block)
- [Connexion Bézier](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--one-bezier-connection)
- [Personnalisation des connexions](https://preview.gravity-ui.com/graph/?path=/story/api-updateconnection--default)

## Documentation

### Table des matières

1. Système
   - [Cycle de vie des composants](docs/system/component-lifecycle.md)
   - [Événements](docs/system/events.md)
   - [Paramètres du graphe](docs/system/graph-settings.md)
   - [API publique](docs/system/public_api.md)
   - [Système de planification](docs/system/scheduler-system.md)

2. Composants
   - [Composant Canvas Graph](docs/components/canvas-graph-component.md)
   - [Composant Bloc](docs/components/block-component.md)
   - [Points d'ancrage](docs/components/anchors.md)

3. Rendu
   - [Mécanisme de rendu](docs/rendering/rendering-mechanism.md)
   - [Calques](docs/rendering/layers.md)

4. Blocs et Connexions
   - [Groupes de blocs](docs/blocks/groups.md)
   - [Système de connexion Canvas](docs/connections/canvas-connection-system.md)