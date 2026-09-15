# @gravity-ui/timeline [![npm package](https://img.shields.io/npm/v/@gravity-ui/timeline)](https://www.npmjs.com/package/@gravity-ui/timeline) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/timeline/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/timeline/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/timeline/)

> [English version](./README.md)

一个基于 React 的库，用于构建具有 Canvas 渲染的交互式时间轴可视化。

## 文档

详情请参阅 [文档](./docs/docs.md)。

## 预览

带有事件和轴的基本时间轴：

![Basic timeline with events](./docs/img/lines.png)

带有可展开嵌套事件的自定义渲染（[NestedEvents](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--nested-events-story) 示例）：

![Nested events timeline](./docs/img/events.png)

## 特性

- 基于 Canvas 的渲染，性能高
- 交互式时间轴，支持缩放和平移
- 灵活的滚轮和触控板交互，包括垂直滚动穿透
- 支持事件、标记、区域、轴和网格
- 背景区域用于视觉组织和时间段高亮
- 智能标记分组，自动缩放到组 - 点击分组标记可缩放到其独立组件
- 虚拟化渲染，提升大型数据集的性能（仅当时间轴内容超出视口时激活）
- 可自定义的外观和行为
- TypeScript 支持，提供完整的类型定义
- React 集成，提供自定义 Hook

## 安装

```bash
npm install @gravity-ui/timeline
```

## 用法

可以在 React 应用中使用时间轴组件，基本设置如下：

```tsx
import { TimelineCanvas, useTimeline } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline, api, start, stop } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000, // 1 小时后
      axes: [],
      events: [],
      markers: [],
      sections: []
    },
    viewConfiguration: {
      // 可选的视图配置
    }
  });

  // timeline - Timeline 实例
  // api - CanvasApi 实例 (与 timeline.api 相同)
  // start - 初始化时间轴的函数
  // stop - 销毁时间轴的函数

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <TimelineCanvas timeline={timeline} />
    </div>
  );
};
```

### 轴结构

每个轴具有以下结构：

```typescript
type TimelineAxis = {
  id: string;          // 唯一的轴标识符
  tracksCount: number; // 轴中的轨道数量
  top: number;         // 垂直位置 (px)
  height: number;      // 每条轨道的くださ (px)
};
```

### 水平轴线

通过 `viewConfiguration.axes.linePosition` 配置水平线的位置：

- `"center"` (默认) 在每条轨道的中心绘制一条线。
- `"between"` 在每条轨道之后绘制一条线，位于其底部边界。这对于带有居中事件条的表格样式行很有用。

```typescript
viewConfiguration: {
  axes: {
    linePosition: 'between'
  }
}
```

### 灵活的相机交互

`ZoomMode` 提供了熟悉的交互预设，而 `camera.interactions` 则允许您覆盖单个手势。当时间轴位于可垂直滚动的页面中时，这非常有用：保留水平平移和触控板缩放，但允许正常的滚轮滚动到达父容器。

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

每个交互都可以接受 `'zoom'`、`'pan'` 或 `'pass-through'`。`pinch` 代表浏览器按住 Ctrl 键的滚轮触控板手势。请参阅交互式 [Camera interactions Storybook 示例](https://preview.gravity-ui.com/timeline/?path=/story/components-timelinecanvas--interaction-and-focus)。

### 区域结构

每个区域需要以下结构：

```typescript
type TimelineSection = {
  id: string;               // 唯一的区域标识符
  from: number;             // 开始时间戳
  to?: number;              // 可选的结束时间戳 (默认为时间轴结束时间)
  color: string;            // 区域的背景颜色
  hoverColor?: string;      // 区域悬停时的可选颜色
  renderer?: AbstractSectionRenderer; // 可选的自定义渲染器 (从包中导出)
};
```

区域为时间段提供背景着色，并帮助在视觉上组织时间轴内容：

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
          to: Date.now() + 1800000, // 30 分钟
          color: 'rgba(255, 235, 59, 0.3)', // 半透明黄色
          hoverColor: 'rgba(255, 235, 59, 0.4)'
        },
        {
          id: 'afternoon',
          from: Date.now() + 1800000,
          // 未指定 'to' - 延伸至时间轴结束
          color: 'rgba(76, 175, 80, 0.2)', // 半透明绿色
          hoverColor: 'rgba(76, 175, 80, 0.3)'
        }
      ]
    },
    viewConfiguration: {
      sections: {
        hitboxPadding: 2 // 悬停检测填充区域
      }
    }
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### 标记结构

每个标记需要以下结构：

```typescript
type TimelineMarker = {
  time: number;           // 标记点的时间戳
  color: string;          // 标记线颜色
  activeColor: string;    // 选中时标记线颜色 (必填)
  hoverColor: string;     // 鼠标悬停时标记线颜色 (必填)
  lineWidth?: number;     // 标记线宽度 (可选)
  label?: string;         // 标签文本 (可选)
  labelColor?: string;    // 标签颜色 (可选)
  renderer?: AbstractMarkerRenderer; // 自定义渲染器 (可选)
  nonSelectable?: boolean;// 标记是否可选中
  group?: boolean;        // 标记是否代表一个分组
};
```

### 标记分组与缩放

时间轴会自动将距离较近的标记进行分组，并提供缩放功能：

```tsx
const MyTimelineComponent = () => {
  const { timeline } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000,
      axes: [],
      events: [],
      markers: [
        // 这些标记将被分组在一起
        { time: Date.now(), color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: '事件 1' },
        { time: Date.now() + 1000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: '事件 2' },
        { time: Date.now() + 2000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: '事件 3' },
      ]
    },
    viewConfiguration: {
      markers: {
        collapseMinDistance: 8,        // 将相距 8 像素内的标记分组
        groupZoomEnabled: true,        // 启用点击分组进行缩放
        groupZoomPadding: 0.3,        // 分组周围的填充比例 (30%)
        groupZoomMaxFactor: 0.3,      // 最大缩放因子
      }
    }
  });

  // 监听分组点击事件
  useTimelineEvent(timeline, 'on-group-marker-click', (data) => {
    console.log('分组已缩放:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

## 工作原理

时间轴组件基于 React 构建，提供了一种灵活的方式来创建交互式时间轴可视化。其工作原理如下：

### 组件架构

时间轴实现为一个 React 组件，可以通过两个主要对象进行配置：

1. **TimelineSettings**: 控制时间轴的核心行为和外观
   - `start`: 时间轴的开始时间
   - `end`: 时间轴的结束时间
   - `axes`: 轴配置数组 (结构见下文)
   - `events`: 事件配置数组
   - `markers`: 标记配置数组
   - `sections`: 区段配置数组

2. **ViewConfiguration**: 管理视觉表示和交互设置
   - 控制外观、缩放级别和交互行为
   - 可自定义或使用默认值

### 事件处理

时间轴组件支持多种交互事件：

- `on-click`: 点击时间轴时触发
- `on-context-click`: 右键点击/上下文菜单时触发
- `on-select-change`: 选择发生变化时触发
- `on-hover`: 鼠标悬停在时间轴元素上时触发
- `on-leave`: 鼠标离开时间轴元素时触发

事件处理示例：

```tsx
import { useTimelineEvent } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline } = useTimeline({ /* ... */ });

  useTimelineEvent(timeline, 'on-click', (data) => {
    console.log('时间轴被点击:', data);
  });

  useTimelineEvent(timeline, 'on-select-change', (data) => {
    console.log('选择已更改:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### React 集成

组件使用自定义 Hook 来管理时间轴：

- `useTimeline`: 管理时间轴实例及其生命周期
  - 创建并初始化时间轴
  - 在组件卸载时处理清理工作
  - 提供对时间轴实例的访问

- `useTimelineEvent`: 处理事件订阅和清理
  - 管理事件监听器的生命周期
  - 在组件卸载时自动清理监听器

组件在卸载时会自动处理时间轴实例的清理和销毁。

### 事件弹出框

安装 `@gravity-ui/uikit` 及其样式，即可显示事件详情，无需手动订阅悬停事件或计算坐标：

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

`EventPopup` 在 150 毫秒后打开，并在指针离开事件 200 毫秒后关闭。如有需要，可设置 `openDelay`、`closeDelay`、`placement`、`offset`、`className` 或 `aria-label`。当弹出框内容具有指针或焦点时，弹出框将保持打开状态，按 Escape 键或点击外部区域时关闭。当事件重叠时，将使用数据顺序中的最后一个事件。`hoverColor` 和 `isHovered` 控制事件的绘制；`EventPopup` 控制其详情 UI。

### 事件结构

时间轴中的事件遵循以下结构：

```typescript
type TimelineEvent = {
  id: string;             // 唯一标识符
  from: number;           // 开始时间戳
  to?: number;            // 结束时间戳 (点事件可选)
  axisId: string;         // 事件所属的轴 ID
  trackIndex: number;     // 轴轨道中的索引
  renderer?: AbstractEventRenderer; // 自定义渲染器 (可选)
  color?: string;         // 事件颜色 (可选)
  hoverColor?: string;    // 鼠标悬停时颜色 (可选)
  selectedColor?: string; // 选中时颜色 (可选)
};
```

### Gravity UI 颜色

Canvas 本身无法解析 CSS 自定义属性。时间轴会针对其 Canvas 元素解析完整的 `var(--token)` 值，因此 Gravity UI 的语义化 token 可用于内置事件、标记、区段、轴、网格和标尺。

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

`GravityTimelineCanvas` 会在 Gravity UI 主题生效时自动重绘。如果缺少某个 token，请使用 CSS 回退值，例如 `var(--app-event-color, transparent)`，或者从自定义渲染器调用 `timeline.api.resolveColor(color, fallback)`。

对于事件，`color` 用于正常显示，`hoverColor` 用于鼠标悬停时，`selectedColor` 用于选中后：

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

自定义事件渲染器会将 `resolveColor` 作为最后一个可选参数接收；自定义标记和区域渲染器则在它们的渲染数据中接收。

### 直接使用 TypeScript

`Timeline` 类可以直接在 TypeScript 中使用，无需 React。这对于与其他框架或原生 JavaScript 应用集成非常有用：

```typescript
import { Timeline } from '@gravity-ui/timeline';

const timestamp = Date.now();

// 创建一个 timeline 实例
const timeline = new Timeline({
  settings: {
    start: timestamp,
    end: timestamp + 3600000, // 1 小时后
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
        from: timestamp + 1800000, // 30 分钟后
        to: timestamp + 2400000,   // 40 分钟后
        label: 'Sample Event',
        axisId: 'main'
      }
    ],
    markers: [
      {
        id: 'marker1',
        time: timestamp + 1200000, // 20 分钟后
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
        to: timestamp + 1800000, // 前 30 分钟
        color: 'rgba(33, 150, 243, 0.2)', // 浅蓝色背景
        hoverColor: 'rgba(33, 150, 243, 0.3)'
      }
    ]
  },
  viewConfiguration: {
    // 可选：自定义视图设置
    zoomLevels: [1, 2, 4, 8, 16],
    hideRuler: false,
    showGrid: true
  }
});

// 使用 canvas 元素初始化
const canvas = document.querySelector('canvas');
if (canvas instanceof HTMLCanvasElement) {
  timeline.init(canvas);
}

// 添加事件监听器
timeline.on('on-click', (detail) => {
  console.log('Timeline clicked:', detail);
});

timeline.on('on-select-change', (detail) => {
  console.log('Selection changed:', detail);
});

// 完成后清理
timeline.destroy();
```

`Timeline` 类提供了丰富的 API 来管理时间轴：

- **事件管理**:
  ```typescript
  // 添加事件监听器
  timeline.on('eventClick', (detail) => {
    console.log('Event clicked:', detail);
  });

  // 移除事件监听器
  const handler = (detail) => console.log(detail);
  timeline.on('eventClick', handler);
  timeline.off('eventClick', handler);

  // 触发自定义事件
  timeline.emit('customEvent', { data: 'custom data' });
  ```

- **时间轴控制**:
  ```typescript
  // 更新时间轴数据
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

  // 更新轴
  timeline.api.setAxes([
    {
      id: 'newAxis',
      tracksCount: 2,
      top: 0,
      height: 80
    }
  ]);

  // 更新标记
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

  // 更新区域
  timeline.api.setSections([
    {
      id: 'newSection',
      from: Date.now(),
      to: Date.now() + 1800000,
      color: 'rgba(255, 193, 7, 0.2)', // 浅琥珀色背景
      hoverColor: 'rgba(255, 193, 7, 0.3)'
    }
  ]);

  // 更新视图配置（会与当前配置合并）
  timeline.api.setViewConfiguration({ hideRuler: true });
  ```

## 实时示例

在我们的 [Storybook](https://preview.gravity-ui.com/timeline/) 中探索交互式示例：

- [基础时间轴](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--basic) - 带有事件和轴的简单时间轴
- [无限时间轴](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--endless-timelines) - 带有事件和轴的无限时间轴
- [标记](https://preview.gravity-ui.com/timeline/?path=/story/timeline-markers--basic) - 带有垂直标记和标签的时间轴
- [相机交互](https://preview.gravity-ui.com/timeline/?path=/story/components-timelinecanvas--interaction-and-focus) - 配置滚轮、水平滚动和触控板捏合行为
- [自定义事件](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--custom-renderer) - 带有自定义事件渲染的时间轴
- [集成](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--timeline-ruler) - RangeDateSelection、DragHandler、NestedEvents、Popup、List

## 开发

### Storybook

本项目包含 Storybook，用于组件开发和文档。

运行 Storybook：

```bash
npm run storybook
```

这将启动 Storybook 开发服务器，端口为 6006。您可以在 http://localhost:6006 访问它。

构建 Storybook 的静态版本以进行部署：

```bash
npm run build-storybook
```

## 许可证

MIT