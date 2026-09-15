# @gravity-ui/timeline [![npm package](https://img.shields.io/npm/v/@gravity-ui/timeline)](https://www.npmjs.com/package/@gravity-ui/timeline) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/timeline/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/timeline/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/timeline/)

> [Version française](./README-fr.md)

Une bibliothèque basée sur React pour créer des visualisations interactives de chronologies avec rendu sur canvas.

## Documentation

Pour plus de détails, consultez la [Documentation](./docs/docs.md).

## Aperçu

Chronologie de base avec événements et axes :

![Chronologie de base avec événements](./docs/img/lines.png)

Rendu personnalisé avec des événements imbriqués extensibles (exemple [NestedEvents](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--nested-events-story)) :

![Chronologie d'événements imbriqués](./docs/img/events.png)

## Fonctionnalités

- Rendu basé sur le canvas pour des performances élevées
- Chronologie interactive avec capacités de zoom et de panoramique
- Interactions flexibles avec la molette et le pavé tactile, y compris le passage de la molette de défilement verticale
- Prise en charge des événements, des marqueurs, des sections, des axes et de la grille
- Sections d'arrière-plan pour l'organisation visuelle et la mise en évidence des périodes
- Regroupement intelligent des marqueurs avec zoom automatique sur le groupe - Cliquez sur les marqueurs groupés pour zoomer sur leurs composants individuels
- Rendu virtualisé pour améliorer les performances avec de grands ensembles de données (actif uniquement lorsque le contenu de la chronologie dépasse la fenêtre d'affichage)
- Apparence et comportement personnalisables
- Prise en charge de TypeScript avec des définitions de types complètes
- Intégration React avec des hooks personnalisés

## Installation

```bash
npm install @gravity-ui/timeline
```

## Utilisation

Le composant de chronologie peut être utilisé dans les applications React avec la configuration de base suivante :

```tsx
import { TimelineCanvas, useTimeline } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline, api, start, stop } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000, // 1 heure à partir de maintenant
      axes: [],
      events: [],
      markers: [],
      sections: []
    },
    viewConfiguration: {
      // Configuration de vue optionnelle
    }
  });

  // timeline - Instance de la chronologie
  // api - Instance de CanvasApi (identique à timeline.api)
  // start - fonction pour initialiser la chronologie avec le canvas
  // stop - fonction pour détruire la chronologie

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <TimelineCanvas timeline={timeline} />
    </div>
  );
};
```

### Structure des axes

Chaque axe a la structure suivante :

```typescript
type TimelineAxis = {
  id: string;          // Identifiant unique de l'axe
  tracksCount: number; // Nombre de pistes dans l'axe
  top: number;         // Position verticale (px)
  height: number;      // Hauteur par piste (px)
};
```

### Lignes d'axe horizontales

Configurez le placement des lignes horizontales via `viewConfiguration.axes.linePosition` :

- `"center"` (par défaut) dessine une ligne au centre de chaque piste.
- `"between"` dessine une ligne après chaque piste, à sa limite inférieure. Ceci est utile pour les lignes de style tableau avec des barres d'événements centrées.

```typescript
viewConfiguration: {
  axes: {
    linePosition: 'between'
  }
}
```

### Interactions flexibles de la caméra

`ZoomMode` fournit des préréglages d'interaction familiers, tandis que `camera.interactions` vous permet de remplacer un geste individuel. Ceci est utile lorsqu'une chronologie se trouve à l'intérieur d'une page défilante verticalement : conservez le panoramique horizontal et le zoom du pavé tactile, mais laissez le défilement normal de la molette atteindre le conteneur parent.

```tsx
import {ZoomMode} from '@gravity-ui/timeline';

const {timeline} = useTimeline({
  settings: { /* ... */ },
  viewConfiguration: {
    camera: {
      zoom: ZoomMode.DEFAULT,
      interactions: {
        verticalWheel: 'pass-through',
        horizontalWheel: 'pan',
        pinch: 'zoom',
      },
    },
  },
});
```

Chaque interaction accepte `'zoom'`, `'pan'` ou `'pass-through'`. `pinch` représente le geste Ctrl+molette du pavé tactile du navigateur. Consultez l'exemple interactif [Storybook sur les interactions de la caméra](https://preview.gravity-ui.com/timeline/?path=/story/components-timelinecanvas--interaction-and-focus).

### Structure des sections

Chaque section nécessite la structure suivante :

```typescript
type TimelineSection = {
  id: string;               // Identifiant unique de la section
  from: number;             // Horodatage de début
  to?: number;              // Horodatage de fin optionnel (par défaut, fin de la chronologie)
  color: string;            // Couleur d'arrière-plan de la section
  hoverColor?: string;      // Couleur optionnelle lorsque la section est survolée
  renderer?: AbstractSectionRenderer; // Renderer personnalisé optionnel (exporté du package)
};
```

Les sections fournissent une coloration d'arrière-plan pour les périodes et aident à organiser visuellement le contenu de la chronologie :

```tsx
const MyTimelineComponent = () => {
  const { timeline } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000,
      axes: [],
      events: [],
      markers: [],
      sections: [
        {
          id: 'morning',
          from: Date.now(),
          to: Date.now() + 1800000, // 30 minutes
          color: 'rgba(255, 235, 59, 0.3)', // Jaune semi-transparent
          hoverColor: 'rgba(255, 235, 59, 0.4)'
        },
        {
          id: 'afternoon',
          from: Date.now() + 1800000,
          // Pas de 'to' spécifié - s'étend jusqu'à la fin de la chronologie
          color: 'rgba(76, 175, 80, 0.2)', // Vert semi-transparent
          hoverColor: 'rgba(76, 175, 80, 0.3)'
        }
      ]
    },
    viewConfiguration: {
      sections: {
        hitboxPadding: 2 // Marge de détection de survol
      }
    }
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### Structure des marqueurs

Chaque marqueur nécessite la structure suivante :

```typescript
type TimelineMarker = {
  time: number;           // Timestamp pour la position du marqueur
  color: string;          // Couleur de la ligne du marqueur
  activeColor: string;    // Couleur lorsque le marqueur est sélectionné (obligatoire)
  hoverColor: string;     // Couleur lorsque le marqueur est survolé (obligatoire)
  lineWidth?: number;     // Largeur optionnelle de la ligne du marqueur
  label?: string;         // Texte optionnel de l'étiquette
  labelColor?: string;    // Couleur optionnelle de l'étiquette
  renderer?: AbstractMarkerRenderer; // Renderer personnalisé optionnel
  nonSelectable?: boolean;// Indique si le marqueur peut être sélectionné
  group?: boolean;        // Indique si le marqueur représente un groupe
};
```

### Groupement et Zoom des Marqueurs

La chronologie regroupe automatiquement les marqueurs proches les uns des autres et offre une fonctionnalité de zoom :

```tsx
const MyTimelineComponent = () => {
  const { timeline } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000,
      axes: [],
      events: [],
      markers: [
        // Ces marqueurs seront regroupés
        { time: Date.now(), color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Événement 1' },
        { time: Date.now() + 1000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Événement 2' },
        { time: Date.now() + 2000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Événement 3' },
      ]
    },
    viewConfiguration: {
      markers: {
        collapseMinDistance: 8,        // Regroupe les marqueurs à moins de 8 pixels
        groupZoomEnabled: true,        // Active le zoom sur le clic d'un groupe
        groupZoomPadding: 0.3,        // Marge de 30% autour du groupe
        groupZoomMaxFactor: 0.3,      // Facteur de zoom maximum
      }
    }
  });

  // Écoute les événements de zoom de groupe
  useTimelineEvent(timeline, 'on-group-marker-click', (data) => {
    console.log('Groupe zoomé :', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

## Comment ça Marche

Le composant de chronologie est construit avec React et offre un moyen flexible de créer des visualisations interactives de chronologie. Voici comment il fonctionne :

### Architecture des Composants

La chronologie est implémentée comme un composant React qui peut être configuré via deux objets principaux :

1. **TimelineSettings**: Contrôle le comportement et l'apparence fondamentaux de la chronologie
   - `start`: Heure de début de la chronologie
   - `end`: Heure de fin de la chronologie
   - `axes`: Tableau de configurations d'axes (voir la structure ci-dessous)
   - `events`: Tableau de configurations d'événements
   - `markers`: Tableau de configurations de marqueurs
   - `sections`: Tableau de configurations de sections

2. **ViewConfiguration**: Gère la représentation visuelle et les paramètres d'interaction
   - Contrôle l'apparence, les niveaux de zoom et le comportement d'interaction
   - Peut être personnalisé ou utiliser les valeurs par défaut

### Gestion des Événements

Le composant de chronologie prend en charge plusieurs événements interactifs :

- `on-click`: Déclenché lors d'un clic sur la chronologie
- `on-context-click`: Déclenché lors d'un clic droit/menu contextuel
- `on-select-change`: Déclenché lorsque la sélection change
- `on-hover`: Déclenché lors du survol des éléments de la chronologie
- `on-leave`: Déclenché lorsque la souris quitte les éléments de la chronologie

Exemple de gestion d'événements :

```tsx
import { useTimelineEvent } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline } = useTimeline({ /* ... */ });

  useTimelineEvent(timeline, 'on-click', (data) => {
    console.log('Chronologie cliquée :', data);
  });

  useTimelineEvent(timeline, 'on-select-change', (data) => {
    console.log('Sélection modifiée :', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### Intégration React

Le composant utilise des hooks personnalisés pour la gestion de la chronologie :

- `useTimeline`: Gère l'instance de la chronologie et son cycle de vie
  - Crée et initialise la chronologie
  - Gère le nettoyage lors du démontage du composant
  - Fournit l'accès à l'instance de la chronologie

- `useTimelineEvent`: Gère les abonnements aux événements et le nettoyage
  - Gère le cycle de vie des écouteurs d'événements
  - Nettoie automatiquement les écouteurs lors du démontage

Le composant gère automatiquement le nettoyage et la destruction de l'instance de la chronologie lors de son démontage.

### Popup d'Événement

Installez `@gravity-ui/uikit` et ses styles pour afficher les détails des événements sans
vous abonner aux événements de survol ni calculer vous-même les coordonnées :

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import {EventPopup} from '@gravity-ui/timeline/react/uikit';

<>
  <TimelineCanvas timeline={timeline} />
  <EventPopup
    timeline={timeline}
    content={(event) => <EventDetails event={event} />}
  />
</>
```

`EventPopup` s'ouvre après 150 ms et se ferme 200 ms après que le pointeur quitte
l'événement. Définissez `openDelay`, `closeDelay`, `placement`, `offset`, `className`, ou
`aria-label` si nécessaire. Le popup reste ouvert tant que son contenu a le pointeur
ou le focus, se ferme sur Échap ou un clic extérieur, et utilise le dernier événement dans l'ordre des données lorsque les événements se chevauchent. `hoverColor` et `isHovered` contrôlent le dessin de l'événement ;
`EventPopup` contrôle son interface utilisateur de détails.

### Structure des Événements

Les événements dans la chronologie suivent cette structure :

```typescript
type TimelineEvent = {
  id: string;             // Identifiant unique
  from: number;           // Timestamp de début
  to?: number;            // Timestamp de fin (optionnel pour les événements ponctuels)
  axisId: string;         // ID de l'axe auquel cet événement appartient
  trackIndex: number;     // Index dans la piste de l'axe
  renderer?: AbstractEventRenderer; // Renderer personnalisé optionnel
  color?: string;         // Couleur optionnelle de l'événement
  hoverColor?: string;    // Couleur optionnelle de l'état survolé
  selectedColor?: string; // Couleur optionnelle de l'état sélectionné
};
```

### Couleurs Gravity UI

Le Canvas ne peut pas résoudre les propriétés personnalisées CSS par lui-même. La chronologie résout une valeur complète `var(--token)` par rapport à son élément canvas, de sorte que les jetons sémantiques de Gravity UI fonctionnent pour les événements intégrés, les marqueurs, les sections, les axes, la grille et la règle.

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import {ThemeProvider} from '@gravity-ui/uikit';
import {useTimeline} from '@gravity-ui/timeline/react';
import {GravityTimelineCanvas} from '@gravity-ui/timeline/react/uikit';

<ThemeProvider theme="light">
  <GravityTimelineCanvas timeline={timeline} />
</ThemeProvider>
```

`GravityTimelineCanvas` se redessine automatiquement lorsque le thème Gravity UI effectif change. Pour un token manquant, utilisez un fallback CSS tel que `var(--app-event-color, transparent)` ou appelez `timeline.api.resolveColor(color, fallback)` depuis un renderer personnalisé.

Pour les événements, `color` est utilisé normalement, `hoverColor` au survol du pointeur, et `selectedColor` après la sélection :

```ts
const events = [
  {
    id: 'deploy',
    from: start,
    to: end,
    axisId: 'main',
    trackIndex: 0,
    color: 'var(--g-color-base-positive-medium)',
    hoverColor: 'var(--g-color-base-positive-medium-hover)',
    selectedColor: 'var(--g-color-base-positive-heavy)',
  },
];
```

Les renderers d'événements personnalisés reçoivent `resolveColor` comme dernier argument optionnel ; les renderers de marqueurs et de sections personnalisés le reçoivent dans leurs données de rendu.

### Utilisation directe de TypeScript

La classe `Timeline` peut être utilisée directement en TypeScript sans React. Ceci est utile pour l'intégration avec d'autres frameworks ou des applications JavaScript vanilla :

```typescript
import { Timeline } from '@gravity-ui/timeline';

const timestamp = Date.now();

// Créer une instance de timeline
const timeline = new Timeline({
  settings: {
    start: timestamp,
    end: timestamp + 3600000, // 1 heure à partir de maintenant
    axes: [
      {
        id: 'main',
        tracksCount: 3,
        top: 0,
        height: 100
      }
    ],
    events: [
      {
        id: 'event1',
        from: timestamp + 1800000, // 30 minutes à partir de maintenant
        to: timestamp + 2400000,   // 40 minutes à partir de maintenant
        label: 'Événement d\'exemple',
        axisId: 'main'
      }
    ],
    markers: [
      {
        id: 'marker1',
        time: timestamp + 1200000, // 20 minutes à partir de maintenant
        label: 'Point important',
        color: '#ff0000',
        activeColor: '#ff5252',
        hoverColor: '#ff1744'
      }
    ],
    sections: [
      {
        id: 'section1',
        from: timestamp,
        to: timestamp + 1800000, // Les 30 premières minutes
        color: 'rgba(33, 150, 243, 0.2)', // Fond bleu clair
        hoverColor: 'rgba(33, 150, 243, 0.3)'
      }
    ]
  },
  viewConfiguration: {
    // Optionnel : personnaliser les paramètres d'affichage
    zoomLevels: [1, 2, 4, 8, 16],
    hideRuler: false,
    showGrid: true
  }
});

// Initialiser avec un élément canvas
const canvas = document.querySelector('canvas');
if (canvas instanceof HTMLCanvasElement) {
  timeline.init(canvas);
}

// Ajouter des écouteurs d'événements
timeline.on('on-click', (detail) => {
  console.log('Timeline cliquée :', detail);
});

timeline.on('on-select-change', (detail) => {
  console.log('Sélection modifiée :', detail);
});

// Nettoyer lorsque terminé
timeline.destroy();
```

La classe `Timeline` fournit une API riche pour gérer la timeline :

- **Gestion des événements** :
  ```typescript
  // Ajouter un écouteur d'événements
  timeline.on('eventClick', (detail) => {
    console.log('Événement cliqué :', detail);
  });

  // Supprimer un écouteur d'événements
  const handler = (detail) => console.log(detail);
  timeline.on('eventClick', handler);
  timeline.off('eventClick', handler);

  // Émettre des événements personnalisés
  timeline.emit('customEvent', { data: 'données personnalisées' });
  ```

- **Contrôle de la timeline** :
  ```typescript
  // Mettre à jour les données de la timeline
  timeline.api.setEvents([
    {
      id: 'newEvent',
      from: Date.now(),
      to: Date.now() + 3600000,
      label: 'Nouvel événement',
      axisId: 'main',
      trackIndex: 0
    }
  ]);

  // Mettre à jour les axes
  timeline.api.setAxes([
    {
      id: 'newAxis',
      tracksCount: 2,
      top: 0,
      height: 80
    }
  ]);

  // Mettre à jour les marqueurs
  timeline.api.setMarkers([
    {
      id: 'newMarker',
      time: Date.now(),
      label: 'Nouveau marqueur',
      color: '#00ff00',
      activeColor: '#4caf50',
      hoverColor: '#2e7d32'
    }
  ]);

  // Mettre à jour les sections
  timeline.api.setSections([
    {
      id: 'newSection',
      from: Date.now(),
      to: Date.now() + 1800000,
      color: 'rgba(255, 193, 7, 0.2)', // Fond ambre clair
      hoverColor: 'rgba(255, 193, 7, 0.3)'
    }
  ]);

  // Mettre à jour la configuration d'affichage (fusionne avec la configuration actuelle)
  timeline.api.setViewConfiguration({ hideRuler: true });
  ```

## Exemples en direct

Explorez des exemples interactifs dans notre [Storybook](https://preview.gravity-ui.com/timeline/) :

- [Timeline de base](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--basic) - Timeline simple avec événements et axes
- [Timeline infinie](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--endless-timelines) - Timeline infinie avec événements et axes
- [Marqueurs](https://preview.gravity-ui.com/timeline/?path=/story/timeline-markers--basic) - Timeline avec marqueurs verticaux et étiquettes
- [Interactions de caméra](https://preview.gravity-ui.com/timeline/?path=/story/components-timelinecanvas--interaction-and-focus) - Configuration du comportement de la molette, du défilement horizontal et du pincement du trackpad
- [Événements personnalisés](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--custom-renderer) - Timeline avec rendu d'événements personnalisé
- [Intégrations](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--timeline-ruler) - RangeDateSelection, DragHandler, NestedEvents, Popup, List


## Développement

### Storybook

Ce projet inclut Storybook pour le développement et la documentation des composants.

Pour exécuter Storybook :

```bash
npm run storybook
```

Cela démarrera le serveur de développement Storybook sur le port 6006. Vous pouvez y accéder à l'adresse http://localhost:6006.

Pour construire une version statique de Storybook pour le déploiement :

```bash
npm run build-storybook
```

## Licence

MIT