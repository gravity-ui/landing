# @gravity-ui/graph &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/graph)](https://www.npmjs.com/package/@gravity-ui/graph) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/graph/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/graph/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/graph/)

> [Guide de migration de la version 0.x vers la version 1.x →](docs/migration-guides/v0-to-v1.md)

Une bibliothèque de visualisation de graphes qui combine le meilleur des deux mondes :
- Canvas pour des performances élevées lors de la visualisation du graphe complet
- HTML/React pour des interactions riches lors du zoom

Fini le choix entre performance et interactivité. Idéal pour les grands diagrammes, les organigrammes et les éditeurs basés sur des nœuds.

![preview graph.](docs/_static/graph_preview.png)

## Motivation

Les applications web modernes nécessitent souvent une visualisation et une interactivité complexes, mais les solutions existantes se concentrent généralement sur une seule technologie de rendu :

- **Canvas** offre des performances élevées pour les graphiques complexes, mais est limité dans la gestion du texte et l'interactivité.
- **DOM HTML** est pratique pour les interfaces, mais moins efficace pour les graphiques complexes ou un grand nombre d'éléments.

@gravity-ui/graph résout ce problème en basculant automatiquement entre Canvas et HTML en fonction du niveau de zoom :
- **Dézoomé** : Utilise Canvas pour un rendu efficace du graphe complet
- **Zoom moyen** : Affiche une vue schématique avec une interactivité de base
- **Zoomé** : Bascule vers des composants HTML/React pour des interactions riches

## Comment ça marche

La bibliothèque utilise un système de rendu intelligent qui gère automatiquement la transition entre Canvas et les composants React :

1. Aux faibles niveaux de zoom, tout est rendu sur Canvas pour des raisons de performance.
2. Lors du zoom avant vers une vue détaillée, le composant `GraphCanvas` :
   - Suit les changements de la vue caméra et de l'échelle.
   - Calcule quels blocs sont visibles dans la vue actuelle (avec un padding pour un défilement fluide).
   - Rend les composants React uniquement pour les blocs visibles.
   - Met à jour automatiquement la liste lors du défilement ou du zoom.
   - Supprime les composants React lors du zoom arrière.

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

## Utilisation

### Exemple React

[Documentation détaillée des composants React](docs/react/usage.md)

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
          name: "Bloc #1",
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
          name: "Bloc #2",
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

```javascript
// Ajouter des blocs et des connexions
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

// Démarrer le rendu
graph.start();

// Centrer la vue
graph.zoomTo("center", { padding: 100 });
```

## Exemples en direct

- [Exemple de base](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--hundred-blocks)
- [Exemple à grande échelle](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--five-thousands-blocks)
- [Vue de blocs personnalisée](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--custom-schematic-block)
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
   - [Composant de graphe Canvas](docs/components/canvas-graph-component.md)
   - [Composant de bloc](docs/components/block-component.md)
   - [Ancres](docs/components/anchors.md)

3. Rendu
   - [Mécanisme de rendu](docs/rendering/rendering-mechanism.md)
   - [Calques](docs/rendering/layers.md)

4. Blocs et connexions
   - [Groupes de blocs](docs/blocks/groups.md)
   - [Système de connexion Canvas](docs/connections/canvas-connection-system.md)

## Licence

Distribué sous la licence MIT. Voir [LICENSE](LICENSE) pour les détails.

## Pour les agents IA

Un éditeur de graphes hybride Canvas/React pour les diagrammes basés sur des nœuds — utilisez-le pour créer des organigrammes, des éditeurs de nœuds ou de grands diagrammes interactifs où Canvas offre des performances à faible zoom et les composants React offrent une riche interactivité lors du zoom avant.

### Quand l'utiliser

- Éditeurs basés sur des nœuds (organigrammes, pipelines, constructeurs visuels) avec des centaines/milliers de nœuds et de connexions.
- Rendu mixte : Canvas pour la vue d'ensemble du graphe complet, composants React pour les blocs visibles dans la fenêtre d'affichage à fort zoom.
- Consommateurs Vanilla JS ou React — la classe principale `Graph` est indépendante du framework ; `@gravity-ui/graph/react` fournit les liaisons React.

### Quand ne pas l'utiliser

- Pour tracer des séries de données numériques (graphiques linéaires/à barres/de dispersion), utilisez [`@gravity-ui/charts`](https://gravity-ui.com/charts) ou [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr`) — le graphe est un éditeur de diagrammes de nœuds/arêtes, pas un graphique de données.
- Pour un diagramme statique, non modifiable avec peu de nœuds, un SVG ou une bibliothèque de diagrammes plus simple peut suffire sans la machinerie de la fenêtre d'affichage Canvas/React.

### Pièges courants

- **Importation hallucinée de `GraphEditor`** — les composants React sont `GraphCanvas`, `GraphBlock` et le hook `useGraph`, importés de `@gravity-ui/graph/react` ; la classe principale est `Graph` de `@gravity-ui/graph`.
- **Appel des méthodes du graphe avant l'état `ATTACHED`** — appelez `start()`/`zoomTo(...)` dans le callback `onStateChanged` lorsque `state === GraphState.ATTACHED`, pas au montage.
- **Oubli de `setEntities`** — `useGraph` renvoie `graph`, `setEntities`, `start` ; les données n'apparaissent qu'après `setEntities({blocks, connections})`.
- **Mélange de types d'ancres** — les connexions doivent référencer des identifiants d'ancres existants avec des `EAnchorType` (`IN`/`OUT`) correspondants sur les blocs source et cible.

## Documentation pour les agents IA

La documentation lisible par agent pour la version installée se trouve dans `node_modules/@gravity-ui/graph/build/docs/INDEX.md`.