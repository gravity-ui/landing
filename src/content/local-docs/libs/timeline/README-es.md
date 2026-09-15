# @gravity-ui/timeline [![npm package](https://img.shields.io/npm/v/@gravity-ui/timeline)](https://www.npmjs.com/package/@gravity-ui/timeline) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/timeline/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/timeline/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/timeline/)

> [Versión en español](./README.md)

Una biblioteca basada en React para crear visualizaciones interactivas de líneas de tiempo con renderizado en canvas.

## Documentación

Para más detalles, consulta [Documentación](./docs/docs.md).

## Vista Previa

Línea de tiempo básica con eventos y ejes:

![Línea de tiempo básica con eventos](./docs/img/lines.png)

Renderizado personalizado con eventos anidados expandibles (ejemplo de [NestedEvents](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--nested-events-story)):

![Línea de tiempo con eventos anidados](./docs/img/events.png)

## Características

- Renderizado basado en canvas para alto rendimiento
- Línea de tiempo interactiva con capacidades de zoom y desplazamiento (pan)
- Interacciones flexibles con rueda y trackpad, incluyendo el paso del scroll vertical
- Soporte para eventos, marcadores, secciones, ejes y cuadrícula
- Secciones de fondo para organización visual y resaltado de períodos de tiempo
- Agrupación inteligente de marcadores con zoom automático al grupo - Haz clic en marcadores agrupados para hacer zoom en sus componentes individuales
- Renderizado virtualizado para mejorar el rendimiento con grandes conjuntos de datos (solo activo cuando el contenido de la línea de tiempo excede el viewport)
- Apariencia y comportamiento personalizables
- Soporte de TypeScript con definiciones de tipos completas
- Integración con React mediante hooks personalizados

## Instalación

```bash
npm install @gravity-ui/timeline
```

## Uso

El componente de línea de tiempo se puede usar en aplicaciones React con la siguiente configuración básica:

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

### Líneas Horizontales de Ejes

Configura la colocación de las líneas horizontales a través de `viewConfiguration.axes.linePosition`:

- `"center"` (predeterminado) dibuja una línea a través del centro de cada pista.
- `"between"` dibuja una línea después de cada pista, en su límite inferior. Esto es útil para filas de estilo tabla con barras de eventos centradas.

```typescript
viewConfiguration: {
  axes: {
    linePosition: 'between'
  }
}
```

### Interacciones Flexibles de Cámara

`ZoomMode` proporciona preajustes de interacción familiares, mientras que `camera.interactions` te permite anular un gesto individual. Esto es útil cuando una línea de tiempo se encuentra dentro de una página con scroll vertical: mantén el desplazamiento horizontal y el zoom del trackpad, pero permite que el scroll normal de la rueda llegue al contenedor padre.

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

Cada interacción acepta `'zoom'`, `'pan'` o `'pass-through'`. `pinch` representa el gesto de Ctrl+rueda del trackpad del navegador. Consulta el ejemplo interactivo de [Interacciones de Cámara en Storybook](https://preview.gravity-ui.com/timeline/?path=/story/components-timelinecanvas--interaction-and-focus).

### Estructura de Secciones

Cada sección requiere la siguiente estructura:

```typescript
type TimelineSection = {
  id: string;               // Identificador único de la sección
  from: number;             // Marca de tiempo de inicio
  to?: number;              // Marca de tiempo de fin opcional (por defecto, el final de la línea de tiempo)
  color: string;            // Color de fondo de la sección
  hoverColor?: string;      // Color opcional al pasar el ratón sobre la sección
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
  hoverColor: string;     // Color cuando el marcador está al pasar el ratón por encima (requerido)
  lineWidth?: number;     // Ancho opcional de la línea del marcador
  label?: string;         // Texto de etiqueta opcional
  labelColor?: string;    // Color de etiqueta opcional
  renderer?: AbstractMarkerRenderer; // Renderizador personalizado opcional
  nonSelectable?: boolean;// Si el marcador se puede seleccionar
  group?: boolean;        // Si el marcador representa un grupo
};
```

### Agrupación y Zoom de Marcadores

La línea de tiempo agrupa automáticamente los marcadores que están juntos y proporciona funcionalidad de zoom:

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
        collapseMinDistance: 8,        // Agrupa marcadores a una distancia mínima de 8 píxeles
        groupZoomEnabled: true,        // Habilita el zoom al hacer clic en un grupo
        groupZoomPadding: 0.3,        // Relleno del 30% alrededor del grupo
        groupZoomMaxFactor: 0.3,      // Factor de zoom máximo
      }
    }
  });

  // Escucha eventos de zoom de grupo
  useTimelineEvent(timeline, 'on-group-marker-click', (data) => {
    console.log('Grupo ampliado:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

## Cómo Funciona

El componente de línea de tiempo está construido con React y ofrece una forma flexible de crear visualizaciones interactivas de línea de tiempo. Así es como funciona:

### Arquitectura del Componente

La línea de tiempo se implementa como un componente de React que se puede configurar a través de dos objetos principales:

1. **TimelineSettings**: Controla el comportamiento y la apariencia principal de la línea de tiempo
   - `start`: Hora de inicio de la línea de tiempo
   - `end`: Hora de fin de la línea de tiempo
   - `axes`: Matriz de configuraciones de ejes (ver estructura a continuación)
   - `events`: Matriz de configuraciones de eventos
   - `markers`: Matriz de configuraciones de marcadores
   - `sections`: Matriz de configuraciones de secciones

2. **ViewConfiguration**: Gestiona la representación visual y la configuración de interacción
   - Controla la apariencia, los niveles de zoom y el comportamiento de interacción
   - Se puede personalizar o usar valores predeterminados

### Manejo de Eventos

El componente de línea de tiempo admite varios eventos interactivos:

- `on-click`: Se activa al hacer clic en la línea de tiempo
- `on-context-click`: Se activa al hacer clic derecho/menú contextual
- `on-select-change`: Se dispara cuando cambia la selección
- `on-hover`: Se activa al pasar el ratón por encima de elementos de la línea de tiempo
- `on-leave`: Se dispara cuando el ratón sale de los elementos de la línea de tiempo

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

- `useTimeline`: Gestiona la instancia de la línea de tiempo y su ciclo de vida
  - Crea e inicializa la línea de tiempo
  - Maneja la limpieza al desmontar el componente
  - Proporciona acceso a la instancia de la línea de tiempo

- `useTimelineEvent`: Maneja la suscripción a eventos y la limpieza
  - Gestiona el ciclo de vida del oyente de eventos
  - Limpia automáticamente los oyentes al desmontar

El componente maneja automáticamente la limpieza y destrucción de la instancia de la línea de tiempo cuando se desmonta.

### Ventana emergente de eventos

Instala `@gravity-ui/uikit` y sus estilos para mostrar detalles de eventos sin
suscribirte a eventos de `hover` o calcular coordenadas tú mismo:

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

`EventPopup` se abre después de 150 ms y se cierra 200 ms después de que el puntero sale del
evento. Establece `openDelay`, `closeDelay`, `placement`, `offset`, `className` o
`aria-label` cuando sea necesario. La ventana emergente permanece abierta mientras su contenido tenga el puntero
o el foco, se cierra al presionar Escape o al hacer clic fuera, y utiliza el último evento en orden de datos
cuando los eventos se superponen. `hoverColor` e `isHovered` controlan el dibujo del evento;
`EventPopup` controla su interfaz de detalles.

### Estructura de Eventos

Los eventos en la línea de tiempo siguen esta estructura:

```typescript
type TimelineEvent = {
  id: string;             // Identificador único
  from: number;           // Marca de tiempo de inicio
  to?: number;            // Marca de tiempo de fin (opcional para eventos puntuales)
  axisId: string;         // ID del eje al que pertenece este evento
  trackIndex: number;     // Índice en la pista del eje
  renderer?: AbstractEventRenderer; // Renderizador personalizado opcional
  color?: string;         // Color opcional del evento
  hoverColor?: string;    // Color opcional del estado al pasar el ratón por encima
  selectedColor?: string; // Color opcional del estado seleccionado
};
```

### Colores de Gravity UI

El lienzo no puede resolver las propiedades personalizadas de CSS por sí solo. La línea de tiempo resuelve un valor completo `var(--token)` contra su elemento de lienzo, por lo que los tokens semánticos de Gravity UI funcionan para eventos, marcadores, secciones, ejes, cuadrícula y regla integrados.

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

`GravityTimelineCanvas` se redibuja automáticamente cuando cambia el tema efectivo de Gravity UI. Para un token faltante, usa un fallback de CSS como `var(--app-event-color, transparent)` o llama a `timeline.api.resolveColor(color, fallback)` desde un renderizador personalizado.

Para los eventos, `color` se usa normalmente, `hoverColor` al pasar el puntero por encima, y `selectedColor` después de la selección:

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

Los renderizadores de eventos personalizados reciben `resolveColor` como su argumento opcional final; los renderizadores de marcadores y secciones personalizados lo reciben en sus datos de renderizado.

### Uso Directo de TypeScript

La clase `Timeline` se puede usar directamente en TypeScript sin React. Esto es útil para integrarse con otros frameworks o aplicaciones JavaScript puras:

```typescript
import { Timeline } from '@gravity-ui/timeline';

const timestamp = Date.now();

// Crear una instancia de timeline
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
        label: 'Evento de Ejemplo',
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

// Añadir listeners de eventos
timeline.on('on-click', (detail) => {
  console.log('Timeline clickeado:', detail);
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
  // Añadir listener de eventos
  timeline.on('eventClick', (detail) => {
    console.log('Evento clickeado:', detail);
  });

  // Eliminar listener de eventos
  const handler = (detail) => console.log(detail);
  timeline.on('eventClick', handler);
  timeline.off('eventClick', handler);

  // Emitir eventos personalizados
  timeline.emit('customEvent', { data: 'datos personalizados' });
  ```

- **Control de la Línea de Tiempo**:
  ```typescript
  // Actualizar datos de la línea de tiempo
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

## Ejemplos en Vivo

Explora ejemplos interactivos en nuestro [Storybook](https://preview.gravity-ui.com/timeline/):

- [Línea de Tiempo Básica](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--basic) - Línea de tiempo simple con eventos y ejes
- [Línea de Tiempo Infinita](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--endless-timelines) - Línea de tiempo infinita con eventos y ejes
- [Marcadores](https://preview.gravity-ui.com/timeline/?path=/story/timeline-markers--basic) - Línea de tiempo con marcadores verticales y etiquetas
- [Interacciones de Cámara](https://preview.gravity-ui.com/timeline/?path=/story/components-timelinecanvas--interaction-and-focus) - Configura el comportamiento de la rueda, el desplazamiento horizontal y el pellizco del trackpad
- [Eventos Personalizados](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--custom-renderer) - Línea de tiempo con renderizado de eventos personalizado
- [Integraciones](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--timeline-ruler) - RangeDateSelection, DragHandler, NestedEvents, Popup, List


## Desarrollo

### Storybook

Este proyecto incluye Storybook para el desarrollo y la documentación de componentes.

Para ejecutar Storybook:

```bash
npm run storybook
```

Esto iniciará el servidor de desarrollo de Storybook en el puerto 6006. Puedes acceder a él en http://localhost:6006.

Para construir una versión estática de Storybook para su despliegue:

```bash
npm run build-storybook
```

## Licencia

MIT