# @gravity-ui/timeline [![npm package](https://img.shields.io/npm/v/@gravity-ui/timeline) (https://www.npmjs.com/package/@gravity-ui/timeline) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/timeline/release.yml?branch=main&label=Release) (https://github.com/gravity-ui/timeline/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685) (https://preview.gravity-ui.com/timeline/)

一个基于 React 的库，用于使用画布渲染来构建交互式时间轴可视化。

## 文档

有关详细信息，请参阅 [文档](./docs/docs.md)。

## 特征

- 基于画布的渲染可实现高性能
- 具有缩放和平移功能的交互式时间轴
- 支持事件、标记、轴和网格
- 智能标记分组，可自动缩放到分组-单击分组标记可放大其各个组件
- 虚拟化渲染可提高大型数据集的性能（仅在时间轴内容超过视口时才处于活动状态）
- 可自定义的外观和行为
- TypeScript 支持完整类型定义
- React 与自定义挂钩集成

## 安装

```bash
npm install @gravity-ui/timeline
```

## 用法

时间轴组件可以通过以下基本设置在 React 应用程序中使用：

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

### 标记分组和缩放

时间轴会自动对距离很近的标记进行分组，并提供缩放功能：

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

## 它是如何运作的

时间轴组件使用 React 构建，为创建交互式时间轴可视化提供了一种灵活的方式。Here's how it works:

### 组件架构

时间轴作为 React 组件实现，可以通过两个主要对象进行配置：

1.**时间轴设置**：控制核心时间轴行为和外观

- `start`:时间轴的开始时间
- `end`:时间轴的结束时间
- `axes`:轴配置数组
- `events`:事件配置数组
- `markers`:标记配置数组

2.**ViewConfiguration**:管理视觉表现和交互设置

- 控制外观、缩放级别和交互行为
- 可以自定义或使用默认值

### 事件处理

时间轴组件支持多个交互式事件：

- `on-click`:点击时间轴时触发
- `on-context-click`:在右键单击/上下文菜单时触发
- `on-select-change`:当选择发生变化时触发
- `on-hover`:将鼠标悬停在时间轴元素上时触发
- `on-leave`:当鼠标离开时间轴元素时触发

事件处理示例：

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

### React 集成

该组件使用自定义挂钩进行时间表管理：

- `useTimeline`:管理时间轴实例及其生命周期

  - 创建和初始化时间轴
  - 在卸载组件时处理清理
  - 提供对时间轴实例的访问权限

- `useTimelineEvent`:处理事件订阅和清理
  - 管理事件侦听器生命周期
  - 卸载时自动清理监听器

卸载后，该组件会自动处理时间轴实例的清理和销毁。

### 直接使用打字稿

Timeline 类可以在没有 React 的情况下直接在 TypeScript 中使用。这对于与其他框架或原版 JavaScript 应用程序集成很有用：

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

时间轴类为管理时间表提供了丰富的 API：

- **活动管理**：

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

- **时间轴控制**：

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

## 直播示例

在我们的 [故事手册](https://preview.gravity-ui.com/timeline/)中浏览互动示例：

- [基本时间轴](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--basic) -带有事件和轴的简单时间轴
- [无尽的时间轴](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--endless-timelines) -带有事件和轴的无尽时间轴
- [标记](https://preview.gravity-ui.com/timeline/?path=/story/timeline-markers--basic) -带有垂直标记和标签的时间轴
- [自定义事件](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--custom-renderer) -带有自定义事件渲染的时间轴

## 发展

### 故事书

该项目包括用于组件开发和文档编写的 Storybook。

要运行故事书，请执行以下操作：

```bash
npm run storybook
```

这将在端口 6006 上启动 Storybook 开发服务器。你可以通过 http://localhost:6006 访问它。

To build a static version of Storybook for deployment:

```bash
npm run build-storybook
```

## 执照

理工学院
