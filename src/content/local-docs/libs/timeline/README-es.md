# @gravity-ui/timeline [![npm package](https://img.shields.io/npm/v/@gravity-ui/timeline)](https://www.npmjs.com/package/@gravity-ui/timeline) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/timeline/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/timeline/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/timeline/)

> [English version](./README.md)

Una biblioteca basada en React para crear visualizaciones interactivas de líneas de tiempo con renderizado en canvas.

## Documentación

Para más detalles, consulta [Documentación](./docs/docs.md).

## Vista Previa

Línea de tiempo básica con eventos y ejes:

![Línea de tiempo básica con eventos](./docs/img/lines.png)

Renderizado personalizado con eventos anidados expandibles (ejemplo de [NestedEvents](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--nested-events-story)):

![Línea de tiempo de eventos anidados](./docs/img/events.png)

## Características

- Renderizado basado en canvas para alto rendimiento
- Línea de tiempo interactiva con capacidades de zoom y desplazamiento (pan)
- Soporte para eventos, marcadores, secciones, ejes y cuadrícula
- Secciones de fondo para organización visual y resaltado de períodos de tiempo
- Agrupación inteligente de marcadores con zoom automático al grupo - Haz clic en los marcadores agrupados para hacer zoom en sus componentes individuales
- Renderizado virtualizado para mejorar el rendimiento con grandes conjuntos de datos (solo activo cuando el contenido de la línea de tiempo excede el viewport)
- Apariencia y comportamiento personalizables
- Soporte de TypeScript con definiciones de tipos completas
- Integración con React mediante hooks personalizados

## Instalación

```bash
npm install @gravity-ui/timeline
```

## Uso

El componente de línea de tiempo se puede utilizar en aplicaciones React con la siguiente configuración básica:

```tsx
import { TimelineCanvas, useTimeline } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline, api, start, stop } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000, // 1 hora a partir de ahora
      axes: [],
      events: [],
      markers: [],
      sections: []
    },
    viewConfiguration: {
      // Configuración de vista opcional
    }
  });

  // timeline - Instancia de Timeline
  // api - Instancia de CanvasApi (igual que timeline.api)
  // start - función para inicializar la línea de tiempo con el canvas
  // stop - función para destruir la línea de tiempo

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <TimelineCanvas timeline={timeline} />
    </div>
  );
};
```

### Estructura de Ejes

Cada eje tiene la siguiente estructura:

```typescript
type TimelineAxis = {
  id: string;          // Identificador único del eje
  tracksCount: number; // Número de pistas en el eje
  top: number;         // Posición vertical (px)
  height: number;      // Altura por pista (px)
};
```

### Estructura de Secciones

Cada sección requiere la siguiente estructura:

```typescript
type TimelineSection = {
  id: string;               // Identificador único de la sección
  from: number;             // Marca de tiempo de inicio
  to?: number;              // Marca de tiempo de fin opcional (por defecto, el final de la línea de tiempo)
  color: string;            // Color de fondo de la sección
  hoverColor?: string;      // Color opcional al pasar el ratón por encima de la sección
  renderer?: AbstractSectionRenderer; // Renderizador personalizado opcional (exportado del paquete)
};
```

Las secciones proporcionan color de fondo para períodos de tiempo y ayudan a organizar visualmente el contenido de la línea de tiempo:

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
          to: Date.now() + 1800000, // 30 minutos
          color: 'rgba(255, 235, 59, 0.3)', // Amarillo semitransparente
          hoverColor: 'rgba(255, 235, 59, 0.4)'
        },
        {
          id: 'afternoon',
          from: Date.now() + 1800000,
          // No se especifica 'to' - se extiende hasta el final de la línea de tiempo
          color: 'rgba(76, 175, 80, 0.2)', // Verde semitransparente
          hoverColor: 'rgba(76, 175, 80, 0.3)'
        }
      ]
    },
    viewConfiguration: {
      sections: {
        hitboxPadding: 2 // Relleno para la detección de hover
      }
    }
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### Estructura de Marcadores

Cada marcador requiere la siguiente estructura:

```typescript
type TimelineMarker = {
  time: number;           // Marca de tiempo para la posición del marcador
  color: string;          // Color de la línea del marcador
  activeColor: string;    // Color cuando el marcador está seleccionado (requerido)
  hoverColor: string;     // Color al pasar el ratón por encima del marcador (requerido)
  lineWidth?: number;     // Ancho opcional de la línea del marcador
  label?: string;         // Texto de etiqueta opcional
  labelColor?: string;    // Color de etiqueta opcional
  renderer?: AbstractMarkerRenderer; // Renderizador personalizado opcional
  nonSelectable?: boolean;// Si el marcador se puede seleccionar
  group?: boolean;        // Si el marcador representa un grupo
};
```

### Agrupación y Zoom de Marcadores

La línea de tiempo agrupa automáticamente los marcadores que están cerca y proporciona funcionalidad de zoom:

```tsx
const MyTimelineComponent = () => {
  const { timeline } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000,
      axes: [],
      events: [],
      markers: [
        // Estos marcadores se agruparán
        { time: Date.now(), color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Evento 1' },
        { time: Date.now() + 1000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Evento 2' },
        { time: Date.now() + 2000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Evento 3' },
      ]
    },
    viewConfiguration: {
      markers: {
        collapseMinDistance: 8,        // Agrupar marcadores a una distancia mínima de 8 píxeles
        groupZoomEnabled: true,        // Habilitar zoom al hacer clic en un grupo
        groupZoomPadding: 0.3,        // Relleno del 30% alrededor del grupo
        groupZoomMaxFactor: 0.3,      // Factor de zoom máximo
      }
    }
  });

  // Escuchar eventos de zoom de grupo
  useTimelineEvent(timeline, 'on-group-marker-click', (data) => {
    console.log('Grupo ampliado:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

## Cómo Funciona

El componente de línea de tiempo está construido con React y proporciona una forma flexible de crear visualizaciones de línea de tiempo interactivas. Así es como funciona:

### Arquitectura del Componente

La línea de tiempo se implementa como un componente de React que se puede configurar a través de dos objetos principales:

1. **TimelineSettings**: Controla el comportamiento y la apariencia principal de la línea de tiempo.
   - `start`: Hora de inicio de la línea de tiempo.
   - `end`: Hora de finalización de la línea de tiempo.
   - `axes`: Matriz de configuraciones de ejes (ver estructura a continuación).
   - `events`: Matriz de configuraciones de eventos.
   - `markers`: Matriz de configuraciones de marcadores.
   - `sections`: Matriz de configuraciones de secciones.

2. **ViewConfiguration**: Gestiona la representación visual y la configuración de interacción.
   - Controla la apariencia, los niveles de zoom y el comportamiento de interacción.
   - Se puede personalizar o usar valores predeterminados.

### Manejo de Eventos

El componente de línea de tiempo admite varios eventos interactivos:

- `on-click`: Se activa al hacer clic en la línea de tiempo.
- `on-context-click`: Se activa al hacer clic derecho/menú contextual.
- `on-select-change`: Se dispara cuando cambia la selección.
- `on-hover`: Se activa al pasar el ratón por encima de los elementos de la línea de tiempo.
- `on-leave`: Se activa cuando el ratón sale de los elementos de la línea de tiempo.

Ejemplo de manejo de eventos:

```tsx
import { useTimelineEvent } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline } = useTimeline({ /* ... */ });

  useTimelineEvent(timeline, 'on-click', (data) => {
    console.log('Línea de tiempo clickeada:', data);
  });

  useTimelineEvent(timeline, 'on-select-change', (data) => {
    console.log('Selección cambiada:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### Integración con React

El componente utiliza hooks personalizados para la gestión de la línea de tiempo:

- `useTimeline`: Gestiona la instancia de la línea de tiempo y su ciclo de vida.
  - Crea e inicializa la línea de tiempo.
  - Maneja la limpieza al desmontar el componente.
  - Proporciona acceso a la instancia de la línea de tiempo.

- `useTimelineEvent`: Maneja la suscripción a eventos y la limpieza.
  - Gestiona el ciclo de vida del oyente de eventos.
  - Limpia automáticamente los oyentes al desmontar.

El componente maneja automáticamente la limpieza y destrucción de la instancia de la línea de tiempo cuando se desmonta.

### Estructura de Eventos

Los eventos en la línea de tiempo siguen esta estructura:

```typescript
type TimelineEvent = {
  id: string;             // Identificador único
  from: number;           // Marca de tiempo de inicio
  to?: number;            // Marca de tiempo de finalización (opcional para eventos puntuales)
  axisId: string;         // ID del eje al que pertenece este evento
  trackIndex: number;     // Índice en la pista del eje
  renderer?: AbstractEventRenderer; // Renderizador personalizado opcional
  color?: string;         // Color del evento opcional
  selectedColor?: string; // Color del estado seleccionado opcional
};
```

### Uso Directo de TypeScript

La clase `Timeline` se puede usar directamente en TypeScript sin React. Esto es útil para integrarse con otros frameworks o aplicaciones JavaScript puras:

```typescript
import { Timeline } from '@gravity-ui/timeline';

const timestamp = Date.now();

// Crear una instancia de línea de tiempo
const timeline = new Timeline({
  settings: {
    start: timestamp,
    end: timestamp + 3600000, // 1 hora a partir de ahora
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
        from: timestamp + 1800000, // 30 minutos a partir de ahora
        to: timestamp + 2400000,   // 40 minutos a partir de ahora
        label: 'Evento de Muestra',
        axisId: 'main'
      }
    ],
    markers: [
      {
        id: 'marker1',
        time: timestamp + 1200000, // 20 minutos a partir de ahora
        label: 'Punto Importante',
        color: '#ff0000',
        activeColor: '#ff5252',
        hoverColor: '#ff1744'
      }
    ],
    sections: [
      {
        id: 'section1',
        from: timestamp,
        to: timestamp + 1800000, // Primeros 30 minutos
        color: 'rgba(33, 150, 243, 0.2)', // Fondo azul claro
        hoverColor: 'rgba(33, 150, 243, 0.3)'
      }
    ]
  },
  viewConfiguration: {
    // Opcional: personalizar la configuración de vista
    zoomLevels: [1, 2, 4, 8, 16],
    hideRuler: false,
    showGrid: true
  }
});

// Inicializar con un elemento canvas
const canvas = document.querySelector('canvas');
if (canvas instanceof HTMLCanvasElement) {
  timeline.init(canvas);
}

// Agregar oyentes de eventos
timeline.on('on-click', (detail) => {
  console.log('Línea de tiempo clickeada:', detail);
});

timeline.on('on-select-change', (detail) => {
  console.log('Selección cambiada:', detail);
});

// Limpiar cuando se termine
timeline.destroy();
```

La clase `Timeline` proporciona una API rica para gestionar la línea de tiempo:

- **Gestión de Eventos**:
  ```typescript
  // Agregar oyente de eventos
  timeline.on('eventClick', (detail) => {
    console.log('Evento clickeado:', detail);
  });
```

```markdown
# @gravity-ui/timeline

Una biblioteca de componentes de línea de tiempo interactiva y personalizable para React.

## Instalación

```bash
npm install @gravity-ui/timeline
# o
yarn add @gravity-ui/timeline
```

## Uso

### Componente básico

```jsx
import React from 'react';
import { Timeline } from '@gravity-ui/timeline';

const App = () => {
  const events = [
    {
      id: 'event1',
      from: new Date(2023, 10, 15, 10, 0, 0),
      to: new Date(2023, 10, 15, 12, 0, 0),
      label: 'Meeting',
      axisId: 'main',
      trackIndex: 0,
    },
    {
      id: 'event2',
      from: new Date(2023, 10, 15, 14, 0, 0),
      to: new Date(2023, 10, 15, 15, 30, 0),
      label: 'Presentation',
      axisId: 'main',
      trackIndex: 1,
    },
  ];

  const axes = [
    {
      id: 'main',
      tracksCount: 2,
      top: 0,
      height: 80,
    },
  ];

  return <Timeline events={events} axes={axes} />;
};

export default App;
```

### Personalización

El componente `Timeline` acepta varias propiedades para personalizar su apariencia y comportamiento:

- `events`: Una matriz de objetos de eventos. Cada evento debe tener las siguientes propiedades:
  - `id`: Identificador único del evento.
  - `from`: Fecha y hora de inicio del evento.
  - `to`: Fecha y hora de finalización del evento.
  - `label`: Etiqueta que se muestra para el evento.
  - `axisId`: El ID del eje al que pertenece el evento.
  - `trackIndex`: El índice de la pista dentro del eje.
  - `color` (opcional): Color de fondo del evento.
  - `textColor` (opcional): Color del texto del evento.
  - `hoverColor` (opcional): Color de fondo del evento al pasar el ratón por encima.
  - `onClick` (opcional): Función de devolución de llamada que se llama cuando se hace clic en el evento.
  - `onHover` (opcional): Función de devolución de llamada que se llama cuando el ratón pasa por encima del evento.
  - `render` (opcional): Una función de renderizado personalizada para el evento.

- `axes`: Una matriz de objetos de ejes. Cada eje debe tener las siguientes propiedades:
  - `id`: Identificador único del eje.
  - `tracksCount`: El número de pistas en el eje.
  - `top`: La posición superior del eje.
  - `height`: La altura del eje.
  - `label` (opcional): Etiqueta para el eje.
  - `color` (opcional): Color de fondo del eje.

- `markers`: Una matriz de objetos de marcadores. Cada marcador debe tener las siguientes propiedades:
  - `id`: Identificador único del marcador.
  - `time`: La hora a la que se mostrará el marcador.
  - `label` (opcional): Etiqueta para el marcador.
  - `color` (opcional): Color de la línea del marcador.
  - `activeColor` (opcional): Color de la línea del marcador cuando está activo.
  - `hoverColor` (opcional): Color de la línea del marcador al pasar el ratón por encima.

- `sections`: Una matriz de objetos de secciones. Cada sección debe tener las siguientes propiedades:
  - `id`: Identificador único de la sección.
  - `from`: Fecha y hora de inicio de la sección.
  - `to`: Fecha y hora de finalización de la sección.
  - `color` (opcional): Color de fondo de la sección.
  - `hoverColor` (opcional): Color de fondo de la sección al pasar el ratón por encima.

- `currentTime` (opcional): La hora actual que se mostrará como una línea vertical.

- `onEventClick` (opcional): Función de devolución de llamada que se llama cuando se hace clic en un evento.

- `onMarkerClick` (opcional): Función de devolución de llamada que se llama cuando se hace clic en un marcador.

- `onSectionClick` (opcional): Función de devolución de llamada que se llama cuando se hace clic en una sección.

- `onRangeChange` (opcional): Función de devolución de llamada que se llama cuando cambia el rango visible de la línea de tiempo.

- `onTimeChange` (opcional): Función de devolución de llamada que se llama cuando cambia la hora actual.

### API

El componente `Timeline` expone una API para controlar la línea de tiempo de forma programática. Puede acceder a la API a través de la prop `apiRef`.

```jsx
import React, { useRef } from 'react';
import { Timeline, TimelineApi } from '@gravity-ui/timeline';

const App = () => {
  const timelineRef = useRef<TimelineApi>(null);

  const handleClick = () => {
    if (timelineRef.current) {
      // Add a new event
      timelineRef.current.addEvent({
        id: 'newEvent',
        from: new Date(),
        to: new Date(Date.now() + 3600000),
        label: 'New Event',
        axisId: 'main',
        trackIndex: 0,
      });
    }
  };

  return (
    <div>
      <Timeline ref={timelineRef} />
      <button onClick={handleClick}>Add Event</button>
    </div>
  );
};

export default App;
```

La API proporciona los siguientes métodos:

- `addEvent(event)`: Agrega un nuevo evento a la línea de tiempo.
- `removeEvent(eventId)`: Elimina un evento de la línea de tiempo.
- `updateEvent(event)`: Actualiza un evento existente en la línea de tiempo.
- `addAxis(axis)`: Agrega un nuevo eje a la línea de tiempo.
- `removeAxis(axisId)`: Elimina un eje de la línea de tiempo.
- `updateAxis(axis)`: Actualiza un eje existente en la línea de tiempo.
- `addMarker(marker)`: Agrega un nuevo marcador a la línea de tiempo.
- `removeMarker(markerId)`: Elimina un marcador de la línea de tiempo.
- `updateMarker(marker)`: Actualiza un marcador existente en la línea de tiempo.
- `addSection(section)`: Agrega una nueva sección a la línea de tiempo.
- `removeSection(sectionId)`: Elimina una sección de la línea de tiempo.
- `updateSection(section)`: Actualiza una sección existente en la línea de tiempo.
- `scrollToTime(time)`: Desplaza la línea de tiempo a una hora específica.
- `zoomIn()`: Acerca la línea de tiempo.
- `zoomOut()`: Aleja la línea de tiempo.
- `setEvents(events)`: Establece todos los eventos en la línea de tiempo.
- `setAxes(axes)`: Establece todos los ejes en la línea de tiempo.
- `setMarkers(markers)`: Establece todos los marcadores en la línea de tiempo.
- `setSections(sections)`: Establece todas las secciones en la línea de tiempo.
- `setViewConfiguration(config)`: Actualiza la configuración de la vista de la línea de tiempo.

### Manejo de eventos

Puede escuchar eventos personalizados de la línea de tiempo utilizando el método `on`.

```typescript
// Escuchar eventos
const handler = (detail) => console.log(detail);
timeline.on('eventClick', handler);

// Eliminar el listener de eventos
timeline.off('eventClick', handler);

// Emitir eventos personalizados
timeline.emit('customEvent', { data: 'datos personalizados' });
```

### Control de la línea de tiempo

Puede controlar la línea de tiempo mediante la API.

```typescript
// Actualizar datos de eventos
timeline.api.setEvents([
  {
    id: 'newEvent',
    from: Date.now(),
    to: Date.now() + 3600000,
    label: 'Nuevo Evento',
    axisId: 'main',
    trackIndex: 0
  }
]);

// Actualizar ejes
timeline.api.setAxes([
  {
    id: 'newAxis',
    tracksCount: 2,
    top: 0,
    height: 80
  }
]);

// Actualizar marcadores
timeline.api.setMarkers([
  {
    id: 'newMarker',
    time: Date.now(),
    label: 'Nuevo Marcador',
    color: '#00ff00',
    activeColor: '#4caf50',
    hoverColor: '#2e7d32'
  }
]);

// Actualizar secciones
timeline.api.setSections([
  {
    id: 'newSection',
    from: Date.now(),
    to: Date.now() + 1800000,
    color: 'rgba(255, 193, 7, 0.2)', // Fondo ámbar claro
    hoverColor: 'rgba(255, 193, 7, 0.3)'
  }
]);

// Actualizar configuración de vista (se fusiona con la configuración actual)
timeline.api.setViewConfiguration({ hideRuler: true });
```

## Ejemplos en vivo

Explore ejemplos interactivos en nuestro [Storybook](https://preview.gravity-ui.com/timeline/):

- [Línea de tiempo básica](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--basic) - Línea de tiempo simple con eventos y ejes
- [Línea de tiempo infinita](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--endless-timelines) - Línea de tiempo infinita con eventos y ejes
- [Marcadores](https://preview.gravity-ui.com/timeline/?path=/story/timeline-markers--basic) - Línea de tiempo con marcadores verticales y etiquetas
- [Eventos personalizados](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--custom-renderer) - Línea de tiempo con renderizado de eventos personalizado
- [Integraciones](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--timeline-ruler) - RangeDateSelection, DragHandler, NestedEvents, Popup, List

## Desarrollo

### Storybook

Este proyecto incluye Storybook para el desarrollo y la documentación de componentes.

Para ejecutar Storybook:

```bash
npm run storybook
```

Esto iniciará el servidor de desarrollo de Storybook en el puerto 6006. Puede acceder a él en http://localhost:6006.

Para compilar una versión estática de Storybook para su implementación:

```bash
npm run build-storybook
```

## Licencia

MIT
```