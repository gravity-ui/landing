# @gravity-ui/timeline [![npm package](https://img.shields.io/npm/v/@gravity-ui/timeline)](https://www.npmjs.com/package/@gravity-ui/timeline) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/timeline/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/timeline/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/timeline/)

> [Русская версия](./README-ru.md)

A React-based library for building interactive timeline visualizations with canvas rendering.

## Documentation

For details see [Documentation](./docs/docs.md).

## Preview

Basic timeline with events and axes:

![Basic timeline with events](./docs/img/lines.png)

Custom rendering with expandable nested events ([NestedEvents](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--nested-events-story) example):

![Nested events timeline](./docs/img/events.png)

## Features

- Canvas-based rendering for high performance
- Interactive timeline with zoom and pan capabilities
- Flexible wheel and trackpad interactions, including vertical scroll pass-through
- Support for events, markers, sections, axes, and grid
- Background sections for visual organization and time period highlighting
- Smart marker grouping with automatic zoom to group - Click on grouped markers to zoom into their individual components
- Virtualized rendering for improved performance with large datasets (only active when timeline content exceeds the viewport)
- Customizable appearance and behavior
- TypeScript support with full type definitions
- React integration with custom hooks

## Installation

```bash
npm install @gravity-ui/timeline
```

## Usage

The timeline component can be used in React applications with the following basic setup:

```tsx
import { TimelineCanvas, useTimeline } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline, api, start, stop } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000, // 1 hour from now
      axes: [],
      events: [],
      markers: [],
      sections: []
    },
    viewConfiguration: {
      // Optional view configuration
    }
  });

  // timeline - Timeline instance
  // api - CanvasApi instance (same as timeline.api)
  // start - function to initialize timeline with canvas
  // stop - function to destroy timeline

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <TimelineCanvas timeline={timeline} />
    </div>
  );
};
```

### Axis Structure

Each axis has the following structure:

```typescript
type TimelineAxis = {
  id: string;          // Unique axis identifier
  tracksCount: number; // Number of tracks in the axis
  top: number;         // Vertical position (px)
  height: number;      // Height per track (px)
};
```

### Horizontal Axis Lines

Configure horizontal line placement through `viewConfiguration.axes.linePosition`:

- `"center"` (default) draws a line through the center of every track.
- `"between"` draws a line after every track, at its bottom boundary. This is useful for table-style rows with centered event bars.

```typescript
viewConfiguration: {
  axes: {
    linePosition: 'between'
  }
}
```

### Flexible Camera Interactions

`ZoomMode` provides familiar interaction presets, while `camera.interactions` lets you override an individual gesture. This is useful when a timeline lives inside a vertically scrollable page: keep horizontal pan and trackpad zoom, but let normal wheel scrolling reach the parent container.

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

Each interaction accepts `'zoom'`, `'pan'`, or `'pass-through'`. `pinch` represents a browser's Ctrl+wheel trackpad gesture. See the interactive [Camera interactions Storybook example](https://preview.gravity-ui.com/timeline/?path=/story/components-timelinecanvas--interaction-and-focus).

### Section Structure

Each section requires the following structure:

```typescript
type TimelineSection = {
  id: string;               // Unique section identifier
  from: number;             // Start timestamp
  to?: number;              // Optional end timestamp (defaults to timeline end)
  color: string;            // Background color of the section
  hoverColor?: string;      // Optional color when section is hovered
  renderer?: AbstractSectionRenderer; // Optional custom renderer (exported from the package)
};
```

Sections provide background coloring for time periods and help organize timeline content visually:

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
          color: 'rgba(255, 235, 59, 0.3)', // Semi-transparent yellow
          hoverColor: 'rgba(255, 235, 59, 0.4)'
        },
        {
          id: 'afternoon',
          from: Date.now() + 1800000,
          // No 'to' specified - extends to timeline end
          color: 'rgba(76, 175, 80, 0.2)', // Semi-transparent green
          hoverColor: 'rgba(76, 175, 80, 0.3)'
        }
      ]
    },
    viewConfiguration: {
      sections: {
        hitboxPadding: 2 // Hover detection padding
      }
    }
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### Marker Structure

Each marker requires the following structure:

```typescript
type TimelineMarker = {
  time: number;           // Timestamp for the marker position
  color: string;          // Color of the marker line
  activeColor: string;    // Color when marker is selected (required)
  hoverColor: string;     // Color when marker is hovered (required)
  lineWidth?: number;     // Optional width of the marker line
  label?: string;         // Optional label text
  labelColor?: string;    // Optional label color
  renderer?: AbstractMarkerRenderer; // Optional custom renderer
  nonSelectable?: boolean;// Whether marker can be selected
  group?: boolean;        // Whether marker represents a group
};
```

### Marker Grouping and Zoom

The timeline automatically groups markers that are close together and provides zoom functionality:

```tsx
const MyTimelineComponent = () => {
  const { timeline } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000,
      axes: [],
      events: [],
      markers: [
        // These markers will be grouped together
        { time: Date.now(), color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Event 1' },
        { time: Date.now() + 1000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Event 2' },
        { time: Date.now() + 2000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Event 3' },
      ]
    },
    viewConfiguration: {
      markers: {
        collapseMinDistance: 8,        // Group markers within 8 pixels
        groupZoomEnabled: true,        // Enable zoom on group click
        groupZoomPadding: 0.3,        // 30% padding around group
        groupZoomMaxFactor: 0.3,      // Max zoom factor
      }
    }
  });

  // Listen for group zoom events
  useTimelineEvent(timeline, 'on-group-marker-click', (data) => {
    console.log('Group zoomed:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

## How It Works

The timeline component is built using React and provides a flexible way to create interactive timeline visualizations. Here's how it works:

### Component Architecture

The timeline is implemented as a React component that can be configured through two main objects:

1. **TimelineSettings**: Controls the core timeline behavior and appearance
   - `start`: Start time of the timeline
   - `end`: End time of the timeline
   - `axes`: Array of axis configurations (see structure below)
   - `events`: Array of event configurations
   - `markers`: Array of marker configurations
   - `sections`: Array of section configurations

2. **ViewConfiguration**: Manages the visual representation and interaction settings
   - Controls appearance, zoom levels, and interaction behavior
   - Can be customized or use default values

### Event Handling

The timeline component supports several interactive events:

- `on-click`: Triggered when clicking on the timeline
- `on-context-click`: Triggered on right-click/context menu
- `on-select-change`: Fired when the selection changes
- `on-hover`: Triggered when hovering over timeline elements
- `on-leave`: Fired when the mouse leaves timeline elements

Example of event handling:

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

### React Integration

The component uses custom hooks for timeline management:

- `useTimeline`: Manages the timeline instance and its lifecycle
  - Creates and initializes the timeline
  - Handles cleanup on component unmount
  - Provides access to the timeline instance

- `useTimelineEvent`: Handles event subscriptions and cleanup
  - Manages event listener lifecycle
  - Automatically cleans up listeners on unmount

The component automatically handles cleanup and destruction of the timeline instance when unmounted.

### Event popup

Install `@gravity-ui/uikit` and its styles to display event details without
subscribing to hover events or calculating coordinates yourself:

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

`EventPopup` opens after 150 ms and closes 200 ms after the pointer leaves the
event. Set `openDelay`, `closeDelay`, `placement`, `offset`, `className`, or
`aria-label` when needed. The popup remains open while its content has pointer
or focus, closes on Escape or outside click, and uses the last event in data
order when events overlap. `hoverColor` and `isHovered` control event drawing;
`EventPopup` controls its details UI.

### Event Structure

Events in the timeline follow this structure:

```typescript
type TimelineEvent = {
  id: string;             // Unique identifier
  from: number;           // Start timestamp
  to?: number;            // End timestamp (optional for point events)
  axisId: string;         // ID of the axis this event belongs to
  trackIndex: number;     // Index in the axis track
  renderer?: AbstractEventRenderer; // Optional custom renderer
  color?: string;         // Optional event color
  hoverColor?: string;    // Optional hovered state color
  selectedColor?: string; // Optional selected state color
};
```

### Gravity UI colors

Canvas cannot resolve CSS custom properties by itself. Timeline resolves a
whole-value `var(--token)` against its canvas element, so Gravity UI semantic
tokens work for built-in events, markers, sections, axes, grid, and ruler.

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

Pass tokens directly in any color field, for example
`color: 'var(--g-color-base-positive-medium)'`. `GravityTimelineCanvas`
automatically redraws when the effective Gravity UI theme changes. For a
missing token, use a CSS fallback such as `var(--app-event-color, transparent)`
or call `timeline.api.resolveColor(color, fallback)` from a custom renderer.

For events, `color` is used normally, `hoverColor` on pointer hover, and
`selectedColor` after selection:

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

Custom event renderers receive `resolveColor` as their final optional argument;
custom marker and section renderers receive it in their render data.

### Direct TypeScript Usage

The Timeline class can be used directly in TypeScript without React. This is useful for integrating with other frameworks or vanilla JavaScript applications:

```typescript
import { Timeline } from '@gravity-ui/timeline';

const timestamp = Date.now();

// Create a timeline instance
const timeline = new Timeline({
  settings: {
    start: timestamp,
    end: timestamp + 3600000, // 1 hour from now
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
        from: timestamp + 1800000, // 30 minutes from now
        to: timestamp + 2400000,   // 40 minutes from now
        label: 'Sample Event',
        axisId: 'main'
      }
    ],
    markers: [
      {
        id: 'marker1',
        time: timestamp + 1200000, // 20 minutes from now
        label: 'Important Point',
        color: '#ff0000',
        activeColor: '#ff5252',
        hoverColor: '#ff1744'
      }
    ],
    sections: [
      {
        id: 'section1',
        from: timestamp,
        to: timestamp + 1800000, // First 30 minutes
        color: 'rgba(33, 150, 243, 0.2)', // Light blue background
        hoverColor: 'rgba(33, 150, 243, 0.3)'
      }
    ]
  },
  viewConfiguration: {
    // Optional: customize view settings
    zoomLevels: [1, 2, 4, 8, 16],
    hideRuler: false,
    showGrid: true
  }
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

The Timeline class provides a rich API for managing the timeline:

- **Event Management**:
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
  timeline.emit('customEvent', { data: 'custom data' });
  ```

- **Timeline Control**:
  ```typescript
  // Update timeline data
  timeline.api.setEvents([
    {
      id: 'newEvent',
      from: Date.now(),
      to: Date.now() + 3600000,
      label: 'New Event',
      axisId: 'main',
      trackIndex: 0
    }
  ]);

  // Update axes
  timeline.api.setAxes([
    {
      id: 'newAxis',
      tracksCount: 2,
      top: 0,
      height: 80
    }
  ]);

  // Update markers
  timeline.api.setMarkers([
    {
      id: 'newMarker',
      time: Date.now(),
      label: 'New Marker',
      color: '#00ff00',
      activeColor: '#4caf50',
      hoverColor: '#2e7d32'
    }
  ]);

  // Update sections
  timeline.api.setSections([
    {
      id: 'newSection',
      from: Date.now(),
      to: Date.now() + 1800000,
      color: 'rgba(255, 193, 7, 0.2)', // Light amber background
      hoverColor: 'rgba(255, 193, 7, 0.3)'
    }
  ]);

  // Update view configuration (merges with current config)
  timeline.api.setViewConfiguration({ hideRuler: true });
  ```

## Live Examples

Explore interactive examples in our [Storybook](https://preview.gravity-ui.com/timeline/):

- [Basic Timeline](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--basic) - Simple timeline with events and axes
- [Endless Timeline](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--endless-timelines) - Endless timeline with events and axes
- [Markers](https://preview.gravity-ui.com/timeline/?path=/story/timeline-markers--basic) - Timeline with vertical markers and labels
- [Camera interactions](https://preview.gravity-ui.com/timeline/?path=/story/components-timelinecanvas--interaction-and-focus) - Configure wheel, horizontal scroll, and trackpad pinch behavior
- [Custom Events](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--custom-renderer) - Timeline with custom event rendering
- [Integrations](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--timeline-ruler) - RangeDateSelection, DragHandler, NestedEvents, Popup, List


## Development

### Storybook

This project includes Storybook for component development and documentation.

To run Storybook:

```bash
npm run storybook
```

This will start the Storybook development server on port 6006. You can access it at http://localhost:6006.

To build a static version of Storybook for deployment:

```bash
npm run build-storybook
```

## License

MIT
