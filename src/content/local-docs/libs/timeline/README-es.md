# @gravity-ui/timeline [![npm package](https://img.shields.io/npm/v/@gravity-ui/timeline)](https://www.npmjs.com/package/@gravity-ui/timeline) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/timeline/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/timeline/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/timeline/)

Una biblioteca basada en React para crear visualizaciones interactivas de líneas de tiempo con renderizado en canvas.

## Documentación

Para más detalles, consulta [Documentación](./docs/docs.md).

## Características

- Renderizado basado en canvas para alto rendimiento
- Línea de tiempo interactiva con capacidades de zoom y desplazamiento (pan)
- Soporte para eventos, marcadores, secciones, ejes y cuadrícula
- Secciones de fondo para organización visual y resaltado de períodos de tiempo
- Agrupación inteligente de marcadores con zoom automático al grupo - Haz clic en marcadores agrupados para hacer zoom en sus componentes individuales
- Renderizado virtualizado para mejorar el rendimiento con grandes conjuntos de datos (solo activo cuando el contenido de la línea de tiempo excede la ventana gráfica)
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

### Estructura de Sección

Cada sección requiere la siguiente estructura:

```typescript
type TimelineSection = {
  id: string;               // Identificador único de la sección
  from: number;             // Marca de tiempo de inicio
  to?: number;              // Marca de tiempo de fin opcional (por defecto, el final de la línea de tiempo)
  color: string;            // Color de fondo de la sección
  hoverColor?: string;      // Color opcional al pasar el ratón por encima de la sección
  renderer?: AbstractSectionRenderer; // Renderizador personalizado opcional
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

### Estructura de Marcador

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
        collapseMinDistance: 8,        // Agrupar marcadores a menos de 8 píxeles
        groupZoomEnabled: true,        // Habilitar zoom al hacer clic en el grupo
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

El componente de línea de tiempo está construido con React y proporciona una forma flexible de crear visualizaciones interactivas de líneas de tiempo. Así es como funciona:

### Arquitectura del Componente

La línea de tiempo se implementa como un componente de React que se puede configurar a través de dos objetos principales:

1. **TimelineSettings**: Controla el comportamiento y la apariencia principal de la línea de tiempo
   - `start`: Hora de inicio de la línea de tiempo
   - `end`: Hora de fin de la línea de tiempo
   - `axes`: Matriz de configuraciones de ejes
   - `events`: Matriz de configuraciones de eventos
   - `markers`: Matriz de configuraciones de marcadores
   - `sections`: Matriz de configuraciones de secciones

2. **ViewConfiguration**: Gestiona la representación visual y la configuración de interacción
   - Controla la apariencia, los niveles de zoom y el comportamiento de interacción
   - Se puede personalizar o usar valores predeterminados

### Manejo de eventos

El componente de línea de tiempo admite varios eventos interactivos:

- `on-click`: Se activa al hacer clic en la línea de tiempo
- `on-context-click`: Se activa al hacer clic derecho/menú contextual
- `on-select-change`: Se dispara cuando cambia la selección
- `on-hover`: Se activa al pasar el ratón por encima de los elementos de la línea de tiempo
- `on-leave`: Se dispara cuando el ratón sale de los elementos de la línea de tiempo

Ejemplo de manejo de eventos:

```tsx
import { useTimelineEvent } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline } = useTimeline({ /* ... */ });

  useTimelineEvent(timeline, 'on-click', (data) => {
    console.log('Timeline clicked:', data);
  });

  useTimelineEvent(timeline, 'on-select-change', (data) => {
    console.log('Selection changed:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### Integración con React

El componente utiliza hooks personalizados para la gestión de la línea de tiempo:

- `useTimeline`: Gestiona la instancia de la línea de tiempo y su ciclo de vida
  - Crea e inicializa la línea de tiempo
  - Maneja la limpieza al desmontar el componente
  - Proporciona acceso a la instancia de la línea de tiempo

- `useTimelineEvent`: Maneja la suscripción a eventos y la limpieza
  - Gestiona el ciclo de vida del oyente de eventos
  - Limpia automáticamente los oyentes al desmontar

El componente maneja automáticamente la limpieza y la destrucción de la instancia de la línea de tiempo cuando se desmonta.

### Estructura de eventos

Los eventos en la línea de tiempo siguen esta estructura:

```typescript
type TimelineEvent = {
  id: string;             // Identificador único
  from: number;           // Marca de tiempo de inicio
  to?: number;            // Marca de tiempo de fin (opcional para eventos puntuales)
  axisId: string;         // ID del eje al que pertenece este evento
  trackIndex: number;     // Índice en la pista del eje
  renderer?: AbstractEventRenderer; // Renderizador personalizado opcional
  color?: string;         // Color del evento opcional
  selectedColor?: string; // Color del estado seleccionado opcional
};
```

### Uso directo de TypeScript

La clase `Timeline` se puede usar directamente en TypeScript sin React. Esto es útil para integrarse con otros frameworks o aplicaciones JavaScript puras:

```typescript
import { Timeline } from '@gravityui/timeline';

const timestamp = Date.now();

// Crear una instancia de línea de tiempo
const timeline = new Timeline({
  settings: {
    start: timestamp,
    end: timestamp + 3600000, // 1 hora a partir de ahora
    axes: [
      {
        id: 'main',
        label: 'Eje Principal',
        color: '#000000'
      }
    ],
    events: [
      {
        id: 'event1',
        from: timestamp + 1800000, // 30 minutos a partir de ahora
        to: timestamp + 2400000,   // 40 minutos a partir de ahora
        label: 'Evento de ejemplo',
        axisId: 'main'
      }
    ],
    markers: [
      {
        id: 'marker1',
        time: timestamp + 1200000, // 20 minutos a partir de ahora
        label: 'Punto importante',
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

// Añadir oyentes de eventos
timeline.on('on-click', (detail) => {
  console.log('Timeline clicked:', detail);
});

timeline.on('on-select-change', (detail) => {
  console.log('Selection changed:', detail);
});

// Limpiar cuando se termine
timeline.destroy();
```

La clase `Timeline` proporciona una API completa para gestionar la línea de tiempo:

- **Gestión de eventos**:
  ```typescript
  // Añadir oyente de eventos
  timeline.on('eventClick', (detail) => {
    console.log('Event clicked:', detail);
  });

  // Eliminar oyente de eventos
  const handler = (detail) => console.log(detail);
  timeline.on('eventClick', handler);
  timeline.off('eventClick', handler);

  // Emitir eventos personalizados
  timeline.emit('customEvent', { data: 'datos personalizados' });
  ```

- **Control de la línea de tiempo**:
  ```typescript
  // Actualizar datos de la línea de tiempo
  timeline.api.setEvents([
    {
      id: 'newEvent',
      from: Date.now(),
      to: Date.now() + 3600000,
      label: 'Nuevo evento',
      axisId: 'main',
      trackIndex: 0
    }
  ]);

  // Actualizar ejes
  timeline.api.setAxes([
    {
      id: 'newAxis',
      label: 'Nuevo eje',
      color: '#0000ff'
    }
  ]);

  // Actualizar marcadores
  timeline.api.setMarkers([
    {
      id: 'newMarker',
      time: Date.now(),
      label: 'Nuevo marcador',
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
  ```

## Ejemplos en vivo

Explore ejemplos interactivos en nuestro [Storybook](https://preview.gravity-ui.com/timeline/):

- [Línea de tiempo básica](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--basic) - Línea de tiempo simple con eventos y ejes
- [Línea de tiempo infinita](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--endless-timelines) - Línea de tiempo infinita con eventos y ejes
- [Marcadores](https://preview.gravity-ui.com/timeline/?path=/story/timeline-markers--basic) - Línea de tiempo con marcadores verticales y etiquetas
- [Eventos personalizados](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--custom-renderer) - Línea de tiempo con renderizado de eventos personalizado


## Desarrollo

### Storybook

Este proyecto incluye Storybook para el desarrollo y la documentación de componentes.

Para ejecutar Storybook:

```bash
npm run storybook
```

Esto iniciará el servidor de desarrollo de Storybook en el puerto 6006. Puedes acceder a él en http://localhost:6006.

Para compilar una versión estática de Storybook para su despliegue:

```bash
npm run build-storybook
```

## Licencia

MIT