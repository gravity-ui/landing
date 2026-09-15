# @gravity-ui/timeline [![npm package](https://img.shields.io/npm/v/@gravity-ui/timeline)](https://www.npmjs.com/package/@gravity-ui/timeline) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/timeline/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/timeline/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/timeline/)

> [Русская версия](./README-ru.md)

Eine auf React basierende Bibliothek zum Erstellen interaktiver Timeline-Visualisierungen mit Canvas-Rendering.

## Dokumentation

Details finden Sie in der [Dokumentation](./docs/docs.md).

## Vorschau

Grundlegende Timeline mit Ereignissen und Achsen:

![Basic timeline with events](./docs/img/lines.png)

Benutzerdefiniertes Rendering mit erweiterbaren verschachtelten Ereignissen ([NestedEvents](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--nested-events-story) Beispiel):

![Nested events timeline](./docs/img/events.png)

## Funktionen

- Canvas-basiertes Rendering für hohe Leistung
- Interaktive Timeline mit Zoom- und Schwenkfunktionen
- Flexible Mausrad- und Trackpad-Interaktionen, einschließlich vertikalem Scroll-Pass-Through
- Unterstützung für Ereignisse, Markierungen, Abschnitte, Achsen und Gitter
- Hintergrundabschnitte zur visuellen Organisation und Hervorhebung von Zeiträumen
- Intelligente Gruppierung von Markierungen mit automatischem Zoom auf die Gruppe – Klicken Sie auf gruppierte Markierungen, um in ihre einzelnen Komponenten hineinzuzoomen
- Virtualisiertes Rendering für verbesserte Leistung bei großen Datensätzen (nur aktiv, wenn der Timeline-Inhalt den Viewport überschreitet)
- Anpassbares Erscheinungsbild und Verhalten
- TypeScript-Unterstützung mit vollständigen Typdefinitionen
- React-Integration mit benutzerdefinierten Hooks

## Installation

```bash
npm install @gravity-ui/timeline
```

## Verwendung

Die Timeline-Komponente kann in React-Anwendungen mit der folgenden grundlegenden Einrichtung verwendet werden:

```tsx
import { TimelineCanvas, useTimeline } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline, api, start, stop } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000, // 1 Stunde ab jetzt
      axes: [],
      events: [],
      markers: [],
      sections: []
    },
    viewConfiguration: {
      // Optionale Ansichtskonfiguration
    }
  });

  // timeline - Timeline-Instanz
  // api - CanvasApi-Instanz (identisch mit timeline.api)
  // start - Funktion zur Initialisierung der Timeline mit Canvas
  // stop - Funktion zur Zerstörung der Timeline

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <TimelineCanvas timeline={timeline} />
    </div>
  );
};
```

### Achsenstruktur

Jede Achse hat die folgende Struktur:

```typescript
type TimelineAxis = {
  id: string;          // Eindeutiger Achsenidentifikator
  tracksCount: number; // Anzahl der Spuren in der Achse
  top: number;         // Vertikale Position (px)
  height: number;      // Höhe pro Spur (px)
};
```

### Horizontale Achsenlinien

Konfigurieren Sie die Platzierung horizontaler Linien über `viewConfiguration.axes.linePosition`:

- `"center"` (Standard) zeichnet eine Linie durch die Mitte jeder Spur.
- `"between"` zeichnet eine Linie nach jeder Spur, an ihrer unteren Grenze. Dies ist nützlich für tabellenähnliche Zeilen mit zentrierten Ereignisbalken.

```typescript
viewConfiguration: {
  axes: {
    linePosition: 'between'
  }
}
```

### Flexible Kamera-Interaktionen

`ZoomMode` bietet vertraute Interaktions-Presets, während `camera.interactions` es Ihnen ermöglicht, eine einzelne Geste zu überschreiben. Dies ist nützlich, wenn sich eine Timeline innerhalb einer vertikal scrollbaren Seite befindet: Behalten Sie das horizontale Schwenken und das Trackpad-Zoomen bei, aber lassen Sie das normale Mausrad-Scrollen den übergeordneten Container erreichen.

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

Jede Interaktion akzeptiert `'zoom'`, `'pan'` oder `'pass-through'`. `pinch` repräsentiert die Strg-Taste + Mausrad-Geste des Browsers auf dem Trackpad. Sehen Sie sich das interaktive [Camera interactions Storybook-Beispiel](https://preview.gravity-ui.com/timeline/?path=/story/components-timelinecanvas--interaction-and-focus) an.

### Abschnittsstruktur

Jeder Abschnitt erfordert die folgende Struktur:

```typescript
type TimelineSection = {
  id: string;               // Eindeutiger Abschnittsidentifikator
  from: number;             // Start-Zeitstempel
  to?: number;              // Optionaler End-Zeitstempel (standardmäßig das Ende der Timeline)
  color: string;            // Hintergrundfarbe des Abschnitts
  hoverColor?: string;      // Optionale Farbe, wenn der Abschnitt überfahren wird
  renderer?: AbstractSectionRenderer; // Optionaler benutzerdefinierter Renderer (exportiert aus dem Paket)
};
```

Abschnitte bieten Hintergrundfarben für Zeiträume und helfen bei der visuellen Organisation von Timeline-Inhalten:

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
          to: Date.now() + 1800000, // 30 Minuten
          color: 'rgba(255, 235, 59, 0.3)', // Halbtransparentes Gelb
          hoverColor: 'rgba(255, 235, 59, 0.4)'
        },
        {
          id: 'afternoon',
          from: Date.now() + 1800000,
          // Kein 'to' angegeben – erstreckt sich bis zum Ende der Timeline
          color: 'rgba(76, 175, 80, 0.2)', // Halbtransparentes Grün
          hoverColor: 'rgba(76, 175, 80, 0.3)'
        }
      ]
    },
    viewConfiguration: {
      sections: {
        hitboxPadding: 2 // Polsterung für die Hover-Erkennung
      }
    }
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### Markerstruktur

Jeder Marker erfordert die folgende Struktur:

```typescript
type TimelineMarker = {
  time: number;           // Zeitstempel für die Position des Markers
  color: string;          // Farbe der Markerlinie
  activeColor: string;    // Farbe, wenn der Marker ausgewählt ist (erforderlich)
  hoverColor: string;     // Farbe, wenn der Marker überfahren wird (erforderlich)
  lineWidth?: number;     // Optionale Breite der Markerlinie
  label?: string;         // Optionaler Labeltext
  labelColor?: string;    // Optionale Farbe des Labels
  renderer?: AbstractMarkerRenderer; // Optionaler benutzerdefinierter Renderer
  nonSelectable?: boolean;// Ob der Marker ausgewählt werden kann
  group?: boolean;        // Ob der Marker eine Gruppe repräsentiert
};
```

### Gruppierung und Zoom von Markern

Die Timeline gruppiert automatisch Marker, die nahe beieinander liegen, und bietet Zoom-Funktionalität:

```tsx
const MyTimelineComponent = () => {
  const { timeline } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000,
      axes: [],
      events: [],
      markers: [
        // Diese Marker werden zusammen gruppiert
        { time: Date.now(), color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Ereignis 1' },
        { time: Date.now() + 1000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Ereignis 2' },
        { time: Date.now() + 2000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Ereignis 3' },
      ]
    },
    viewConfiguration: {
      markers: {
        collapseMinDistance: 8,        // Marker innerhalb von 8 Pixeln gruppieren
        groupZoomEnabled: true,        // Zoom beim Klicken auf eine Gruppe aktivieren
        groupZoomPadding: 0.3,        // 30% Abstand um die Gruppe
        groupZoomMaxFactor: 0.3,      // Maximaler Zoomfaktor
      }
    }
  });

  // Auf Gruppen-Zoom-Ereignisse hören
  useTimelineEvent(timeline, 'on-group-marker-click', (data) => {
    console.log('Gruppe gezoomt:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

## Funktionsweise

Die Timeline-Komponente ist mit React erstellt und bietet eine flexible Möglichkeit, interaktive Timeline-Visualisierungen zu erstellen. So funktioniert sie:

### Komponentenarchitektur

Die Timeline ist als React-Komponente implementiert, die über zwei Hauptobjekte konfiguriert werden kann:

1. **TimelineSettings**: Steuert das Kernverhalten und die Darstellung der Timeline
   - `start`: Startzeit der Timeline
   - `end`: Endzeit der Timeline
   - `axes`: Array von Achsenkonfigurationen (siehe Struktur unten)
   - `events`: Array von Ereigniskonfigurationen
   - `markers`: Array von Marker-Konfigurationen
   - `sections`: Array von Abschnittskonfigurationen

2. **ViewConfiguration**: Verwaltet die visuelle Darstellung und die Interaktionseinstellungen
   - Steuert Darstellung, Zoomstufen und Interaktionsverhalten
   - Kann angepasst oder Standardwerte verwendet werden

### Ereignisbehandlung

Die Timeline-Komponente unterstützt mehrere interaktive Ereignisse:

- `on-click`: Wird beim Klicken auf die Timeline ausgelöst
- `on-context-click`: Wird bei Rechtsklick/Kontextmenü ausgelöst
- `on-select-change`: Wird ausgelöst, wenn sich die Auswahl ändert
- `on-hover`: Wird beim Überfahren von Timeline-Elementen ausgelöst
- `on-leave`: Wird ausgelöst, wenn die Maus Timeline-Elemente verlässt

Beispiel für die Ereignisbehandlung:

```tsx
import { useTimelineEvent } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline } = useTimeline({ /* ... */ });

  useTimelineEvent(timeline, 'on-click', (data) => {
    console.log('Timeline geklickt:', data);
  });

  useTimelineEvent(timeline, 'on-select-change', (data) => {
    console.log('Auswahl geändert:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### React-Integration

Die Komponente verwendet benutzerdefinierte Hooks für die Timeline-Verwaltung:

- `useTimeline`: Verwaltet die Timeline-Instanz und ihren Lebenszyklus
  - Erstellt und initialisiert die Timeline
  - Kümmert sich um die Bereinigung beim Unmounten der Komponente
  - Bietet Zugriff auf die Timeline-Instanz

- `useTimelineEvent`: Behandelt Ereignisabonnements und Bereinigung
  - Verwaltet den Lebenszyklus von Ereignis-Listenern
  - Bereinigt Listener automatisch beim Unmounten

Die Komponente kümmert sich automatisch um die Bereinigung und Zerstörung der Timeline-Instanz, wenn sie unmounted wird.

### Ereignis-Popup

Installieren Sie `@gravity-ui/uikit` und seine Stile, um Ereignisdetails anzuzeigen, ohne sich für Hover-Ereignisse anzumelden oder Koordinaten selbst zu berechnen:

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

`EventPopup` öffnet sich nach 150 ms und schließt sich 200 ms, nachdem der Zeiger das Ereignis verlassen hat. Setzen Sie `openDelay`, `closeDelay`, `placement`, `offset`, `className` oder `aria-label` nach Bedarf. Das Popup bleibt geöffnet, solange sein Inhalt Zeiger- oder Fokusereignisse hat, schließt sich bei Escape oder Klick außerhalb und verwendet das letzte Ereignis in der Datenreihenfolge, wenn sich Ereignisse überlappen. `hoverColor` und `isHovered` steuern die Ereignisdarstellung; `EventPopup` steuert seine Detail-UI.

### Ereignisstruktur

Ereignisse in der Timeline folgen dieser Struktur:

```typescript
type TimelineEvent = {
  id: string;             // Eindeutiger Bezeichner
  from: number;           // Start-Zeitstempel
  to?: number;            // End-Zeitstempel (optional für Punkt-Ereignisse)
  axisId: string;         // ID der Achse, zu der dieses Ereignis gehört
  trackIndex: number;     // Index in der Achsenspur
  renderer?: AbstractEventRenderer; // Optionaler benutzerdefinierter Renderer
  color?: string;         // Optionale Ereignisfarbe
  hoverColor?: string;    // Optionale Farbe im Hover-Zustand
  selectedColor?: string; // Optionale Farbe im ausgewählten Zustand
};
```

### Gravity UI Farben

Canvas kann CSS-benutzerdefinierte Eigenschaften nicht von sich aus auflösen. Timeline löst einen vollständigen Wert `var(--token)` gegen sein Canvas-Element auf, sodass semantische Gravity UI-Token für integrierte Ereignisse, Marker, Abschnitte, Achsen, Gitter und Lineale funktionieren.

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

`GravityTimelineCanvas` zeichnet sich automatisch neu, wenn sich das effektive Gravity UI-Theme ändert. Für ein fehlendes Token verwenden Sie einen CSS-Fallback wie `var(--app-event-color, transparent)` oder rufen Sie `timeline.api.resolveColor(color, fallback)` aus einem benutzerdefinierten Renderer auf.

Für Ereignisse wird `color` normal verwendet, `hoverColor` beim Zeiger-Hover und `selectedColor` nach der Auswahl:

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

Benutzerdefinierte Ereignis-Renderer erhalten `resolveColor` als letztes optionales Argument; benutzerdefinierte Marker- und Abschnitts-Renderer erhalten es in ihren Render-Daten.

### Direkte TypeScript-Nutzung

Die `Timeline`-Klasse kann direkt in TypeScript ohne React verwendet werden. Dies ist nützlich für die Integration mit anderen Frameworks oder Vanilla-JavaScript-Anwendungen:

```typescript
import { Timeline } from '@gravity-ui/timeline';

const timestamp = Date.now();

// Timeline-Instanz erstellen
const timeline = new Timeline({
  settings: {
    start: timestamp,
    end: timestamp + 3600000, // 1 Stunde ab jetzt
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
        from: timestamp + 1800000, // 30 Minuten ab jetzt
        to: timestamp + 2400000,   // 40 Minuten ab jetzt
        label: 'Beispiel-Ereignis',
        axisId: 'main'
      }
    ],
    markers: [
      {
        id: 'marker1',
        time: timestamp + 1200000, // 20 Minuten ab jetzt
        label: 'Wichtiger Punkt',
        color: '#ff0000',
        activeColor: '#ff5252',
        hoverColor: '#ff1744'
      }
    ],
    sections: [
      {
        id: 'section1',
        from: timestamp,
        to: timestamp + 1800000, // Erste 30 Minuten
        color: 'rgba(33, 150, 243, 0.2)', // Hellblaue Hintergrundfarbe
        hoverColor: 'rgba(33, 150, 243, 0.3)'
      }
    ]
  },
  viewConfiguration: {
    // Optional: Ansichtseinstellungen anpassen
    zoomLevels: [1, 2, 4, 8, 16],
    hideRuler: false,
    showGrid: true
  }
});

// Mit einem Canvas-Element initialisieren
const canvas = document.querySelector('canvas');
if (canvas instanceof HTMLCanvasElement) {
  timeline.init(canvas);
}

// Event-Listener hinzufügen
timeline.on('on-click', (detail) => {
  console.log('Timeline geklickt:', detail);
});

timeline.on('on-select-change', (detail) => {
  console.log('Auswahl geändert:', detail);
});

// Aufräumen, wenn fertig
timeline.destroy();
```

Die `Timeline`-Klasse bietet eine umfangreiche API zur Verwaltung der Timeline:

- **Ereignisverwaltung**:
  ```typescript
  // Event-Listener hinzufügen
  timeline.on('eventClick', (detail) => {
    console.log('Ereignis geklickt:', detail);
  });

  // Event-Listener entfernen
  const handler = (detail) => console.log(detail);
  timeline.on('eventClick', handler);
  timeline.off('eventClick', handler);

  // Benutzerdefinierte Ereignisse auslösen
  timeline.emit('customEvent', { data: 'benutzerdefinierte Daten' });
  ```

- **Timeline-Steuerung**:
  ```typescript
  // Timeline-Daten aktualisieren
  timeline.api.setEvents([
    {
      id: 'newEvent',
      from: Date.now(),
      to: Date.now() + 3600000,
      label: 'Neues Ereignis',
      axisId: 'main',
      trackIndex: 0
    }
  ]);

  // Achsen aktualisieren
  timeline.api.setAxes([
    {
      id: 'newAxis',
      tracksCount: 2,
      top: 0,
      height: 80
    }
  ]);

  // Marker aktualisieren
  timeline.api.setMarkers([
    {
      id: 'newMarker',
      time: Date.now(),
      label: 'Neuer Marker',
      color: '#00ff00',
      activeColor: '#4caf50',
      hoverColor: '#2e7d32'
    }
  ]);

  // Abschnitte aktualisieren
  timeline.api.setSections([
    {
      id: 'newSection',
      from: Date.now(),
      to: Date.now() + 1800000,
      color: 'rgba(255, 193, 7, 0.2)', // Hellamber Hintergrundfarbe
      hoverColor: 'rgba(255, 193, 7, 0.3)'
    }
  ]);

  // Ansichtskonfiguration aktualisieren (wird mit der aktuellen Konfiguration zusammengeführt)
  timeline.api.setViewConfiguration({ hideRuler: true });
  ```

## Live-Beispiele

Entdecken Sie interaktive Beispiele in unserem [Storybook](https://preview.gravity-ui.com/timeline/):

- [Basis-Timeline](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--basic) - Einfache Timeline mit Ereignissen und Achsen
- [Endlose Timeline](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--endless-timelines) - Endlose Timeline mit Ereignissen und Achsen
- [Marker](https://preview.gravity-ui.com/timeline/?path=/story/timeline-markers--basic) - Timeline mit vertikalen Markern und Beschriftungen
- [Kamera-Interaktionen](https://preview.gravity-ui.com/timeline/?path=/story/components-timelinecanvas--interaction-and-focus) - Konfigurieren Sie das Verhalten von Mausrad, horizontalem Scrollen und Trackpad-Pinch
- [Benutzerdefinierte Ereignisse](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--custom-renderer) - Timeline mit benutzerdefinierter Ereignisdarstellung
- [Integrationen](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--timeline-ruler) - RangeDateSelection, DragHandler, NestedEvents, Popup, List


## Entwicklung

### Storybook

Dieses Projekt enthält Storybook für die Komponentenentwicklung und -dokumentation.

Um Storybook auszuführen:

```bash
npm run storybook
```

Dadurch wird der Storybook-Entwicklungsserver auf Port 6006 gestartet. Sie können ihn unter http://localhost:6006 aufrufen.

Um eine statische Version von Storybook für die Bereitstellung zu erstellen:

```bash
npm run build-storybook
```

## Lizenz

MIT