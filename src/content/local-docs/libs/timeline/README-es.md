# @gravity -ui/línea de tiempo [![npm package](https://img.shields.io/npm/v/@gravity-ui/timeline) (https://www.npmjs.com/package/@gravity-ui/timeline) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/timeline/release.yml?branch=main&label=Release) (https://github.com/gravity-ui/timeline/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685) (https://preview.gravity-ui.com/timeline/)

Una biblioteca basada en React para crear visualizaciones de línea de tiempo interactivas con renderizado de lienzo.

## Documentación

Para obtener más información, consulte [la documentación](./docs/docs.md).

## Características

- Renderización basada en lienzo para un alto rendimiento
- Cronología interactiva con funciones de zoom y panorámica
- Soporte para eventos, marcadores, ejes y cuadrículas
- Agrupación inteligente de marcadores con zoom automático para agrupar: haga clic en los marcadores agrupados para ampliar sus componentes individuales
- Renderización virtualizada para mejorar el rendimiento con conjuntos de datos de gran tamaño (solo se activa cuando el contenido de la línea de tiempo supera la ventana gráfica)
- Apariencia y comportamiento personalizables
- Soporte de TypeScript con definiciones de tipos completas
- Integración de React con ganchos personalizados

## Instalación

```bash
npm install @gravity-ui/timeline
```

## Uso

El componente de línea de tiempo se puede usar en aplicaciones React con la siguiente configuración básica:

```tsx
import {TimelineCanvas, useTimeline} from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const {timeline} = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000, // 1 hour from now
      axes: [],
      events: [],
      markers: [],
    },
    viewConfiguration: {
      // Optional view configuration
    },
  });

  return (
    <div style={{width: '100%', height: '100%'}}>
      <TimelineCanvas timeline={timeline} />
    </div>
  );
};
```

### Agrupación de marcadores y zoom

La línea de tiempo agrupa automáticamente los marcadores que están cerca unos de otros y proporciona la función de zoom:

```tsx
const MyTimelineComponent = () => {
  const {timeline} = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000,
      axes: [],
      events: [],
      markers: [
        // These markers will be grouped together
        {time: Date.now(), color: '#ff0000', label: 'Event 1'},
        {time: Date.now() + 1000, color: '#ff0000', label: 'Event 2'},
        {time: Date.now() + 2000, color: '#ff0000', label: 'Event 3'},
      ],
    },
    viewConfiguration: {
      markers: {
        collapseMinDistance: 8, // Group markers within 8 pixels
        groupZoomEnabled: true, // Enable zoom on group click
        groupZoomPadding: 0.3, // 30% padding around group
        groupZoomMaxFactor: 0.3, // Max zoom factor
      },
    },
  });

  // Listen for group zoom events
  useTimelineEvent(timeline, 'on-group-marker-click', (data) => {
    console.log('Group zoomed:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

## Cómo funciona

El componente de cronograma se crea con React y proporciona una forma flexible de crear visualizaciones interactivas de cronograma. Así es como funciona:

### Arquitectura de componentes

La línea de tiempo se implementa como un componente de React que se puede configurar a través de dos objetos principales:

1. **Configuración de la línea** de tiempo: Controla el comportamiento y la apariencia principales de la línea temporal

   - `start`: Hora de inicio de la línea de tiempo
   - `end`: Hora de finalización del cronograma
   - `axes`: Conjunto de configuraciones de ejes
   - `events`: Conjunto de configuraciones de eventos
   - `markers`: Conjunto de configuraciones de marcadores

2. **Ver configuración**: Gestiona la representación visual y los ajustes de interacción
   - Controla la apariencia, los niveles de zoom y el comportamiento de interacción
   - Se puede personalizar o usar valores predeterminados

### Gestión de eventos

El componente de cronograma admite varios eventos interactivos:

- `on-click`: Se activa al hacer clic en la línea de tiempo
- `on-context-click`: Se activa al hacer clic con el botón derecho/menú contextual
- `on-select-change`: Se dispara cuando cambia la selección
- `on-hover`: Se activa al pasar el ratón sobre los elementos de la línea de tiempo
- `on-leave`: Se activa cuando el ratón abandona los elementos de la línea de tiempo

Ejemplo de gestión de eventos:

```tsx
import {useTimelineEvent} from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const {timeline} = useTimeline({
    /* ... */
  });

  useTimelineEvent(timeline, 'on-click', (data) => {
    console.log('Timeline clicked:', data);
  });

  useTimelineEvent(timeline, 'on-select-change', (data) => {
    console.log('Selection changed:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### Integración de React

El componente usa ganchos personalizados para la administración de la línea de tiempo:

- `useTimeline`: Gestiona la instancia de cronograma y su ciclo de vida

  - Crea e inicializa la línea de tiempo
  - Se encarga de la limpieza al desmontar los componentes
  - Proporciona acceso a la instancia de línea de tiempo

- `useTimelineEvent`: Gestiona las suscripciones y la limpieza de eventos
  - Gestiona el ciclo de vida del detector de eventos
  - Limpia automáticamente los oyentes al desmontarlos

El componente gestiona automáticamente la limpieza y la destrucción de la instancia de la línea de tiempo cuando se desmonta.

### Uso directo de TypeScript

La clase Timeline se puede usar directamente en TypeScript sin React. Esto es útil para la integración con otros marcos o aplicaciones JavaScript estándar:

```typescript
import {Timeline} from '@gravity-ui/timeline';

const timestamp = Date.now();

// Create a timeline instance
const timeline = new Timeline({
  settings: {
    start: timestamp,
    end: timestamp + 3600000, // 1 hour from now
    axes: [
      {
        id: 'main',
        label: 'Main Axis',
        color: '#000000',
      },
    ],
    events: [
      {
        id: 'event1',
        start: timestamp + 1800000, // 30 minutes from now
        end: timestamp + 2400000, // 40 minutes from now
        label: 'Sample Event',
        axisId: 'main',
      },
    ],
    markers: [
      {
        id: 'marker1',
        time: timestamp + 1200000, // 20 minutes from now
        label: 'Important Point',
        color: '#ff0000',
      },
    ],
  },
  viewConfiguration: {
    // Optional: customize view settings
    zoomLevels: [1, 2, 4, 8, 16],
    hideRuler: false,
    showGrid: true,
  },
});

// Initialize with a canvas element
const canvas = document.querySelector('canvas');
if (canvas instanceof HTMLCanvasElement) {
  timeline.init(canvas);
}

// Add event listeners
timeline.on('on-click', (detail) => {
  console.log('Timeline clicked:', detail);
});

timeline.on('on-select-change', (detail) => {
  console.log('Selection changed:', detail);
});

// Clean up when done
timeline.destroy();
```

La clase Timeline proporciona una API completa para administrar la línea de tiempo:

- **Gestión de eventos**:

  ```typescript
  // Add event listener
  timeline.on('eventClick', (detail) => {
    console.log('Event clicked:', detail);
  });

  // Remove event listener
  const handler = (detail) => console.log(detail);
  timeline.on('eventClick', handler);
  timeline.off('eventClick', handler);

  // Emit custom events
  timeline.emit('customEvent', {data: 'custom data'});
  ```

- **Control de cronograma**:

  ```typescript
  // Update timeline data
  timeline.api.setEvents([
    {
      id: 'newEvent',
      start: Date.now(),
      end: Date.now() + 3600000,
      label: 'New Event',
    },
  ]);

  // Update axes
  timeline.api.setAxes([
    {
      id: 'newAxis',
      label: 'New Axis',
      color: '#0000ff',
    },
  ]);

  // Update markers
  timeline.api.setMarkers([
    {
      id: 'newMarker',
      time: Date.now(),
      label: 'New Marker',
      color: '#00ff00',
    },
  ]);
  ```

## Ejemplos en vivo

Explore ejemplos interactivos en nuestro [libro de cuentos](https://preview.gravity-ui.com/timeline/):

- [Cronología básica](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--basic): línea de tiempo simple con eventos y ejes
- [Línea](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--endless-timelines) de tiempo infinita: línea de tiempo infinita con eventos y ejes
- [Marcadores](https://preview.gravity-ui.com/timeline/?path=/story/timeline-markers--basic): línea de tiempo con marcadores y etiquetas verticales
- [Eventos personalizados](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--custom-renderer): cronograma con representación de eventos personalizada

## Desarrollo

### Libro de cuentos

Este proyecto incluye Storybook para el desarrollo y la documentación de los componentes.

Para ejecutar Storybook:

```bash
npm run storybook
```

Esto iniciará el servidor de desarrollo de Storybook en el puerto 6006. Puede acceder a él en http://localhost:6006.

Para crear una versión estática de Storybook para su implementación:

```bash
npm run build-storybook
```

## Licencia

MIT
