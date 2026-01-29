# @gravity-ui/timeline [![npm package](https://img.shields.io/npm/v/@gravity-ui/timeline)](https://www.npmjs.com/package/@gravity-ui/timeline) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/timeline/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/timeline/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/timeline/)

一个基于 React 的库，用于构建具有 Canvas 渲染的交互式时间线可视化。

## 文档

详细信息请参阅 [文档](./docs/docs.md)。

## 特性

- 基于 Canvas 的渲染，性能高
- 交互式时间线，支持缩放和平移
- 支持事件、标记、区域、轴和网格
- 背景区域，用于视觉组织和时间段高亮
- 智能标记分组，并自动缩放到组 - 点击分组标记可缩放到其单独的组件
- 虚拟化渲染，以提高处理大型数据集时的性能（仅当时间线内容超出视口时激活）
- 可自定义的外观和行为
- 支持 TypeScript，提供完整的类型定义
- React 集成，提供自定义 Hook

## 安装

```bash
npm install @gravity-ui/timeline
```

## 用法

可以在 React 应用中使用时间线组件，基本设置如下：

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
  // api - CanvasApi 实例（与 timeline.api 相同）
  // start - 用于初始化带 Canvas 的时间线的函数
  // stop - 用于销毁时间线的函数

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <TimelineCanvas timeline={timeline} />
    </div>
  );
};
```

### 区域结构

每个区域需要以下结构：

```typescript
type TimelineSection = {
  id: string;               // 唯一的区域标识符
  from: number;             // 开始时间戳
  to?: number;              // 可选的结束时间戳（默认为时间线结束时间）
  color: string;            // 区域的背景颜色
  hoverColor?: string;      // 区域悬停时的可选颜色
  renderer?: AbstractSectionRenderer; // 可选的自定义渲染器
};
```

区域为时间段提供背景着色，并帮助在视觉上组织时间线内容：

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
          // 未指定 'to' - 延伸至时间线结束
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
  time: number;           // 标记位置的时间戳
  color: string;          // 标记线的颜色
  activeColor: string;    // 标记被选中时的颜色（必需）
  hoverColor: string;     // 标记悬停时的颜色（必需）
  lineWidth?: number;     // 可选的标记线宽度
  label?: string;         // 可选的标签文本
  labelColor?: string;    // 可选的标签颜色
  renderer?: AbstractMarkerRenderer; // 可选的自定义渲染器
  nonSelectable?: boolean;// 标记是否可被选中
  group?: boolean;        // 标记是否代表一个组
};
```

### 标记分组和缩放

时间线会自动将靠近的标记分组，并提供缩放功能：

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
        groupZoomEnabled: true,        // 启用点击组进行缩放
        groupZoomPadding: 0.3,        // 组周围的 30% 填充
        groupZoomMaxFactor: 0.3,      // 最大缩放因子
      }
    }
  });

  // 监听组缩放事件
  useTimelineEvent(timeline, 'on-group-marker-click', (data) => {
    console.log('组已缩放:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

## 工作原理

时间线组件基于 React 构建，并提供了一种灵活的方式来创建交互式时间线可视化。其工作原理如下：

### 组件架构

该时间轴实现为一个 React 组件，可以通过两个主要对象进行配置：

1.  **TimelineSettings**: 控制时间轴的核心行为和外观
    *   `start`: 时间轴的开始时间
    *   `end`: 时间轴的结束时间
    *   `axes`: 轴配置数组
    *   `events`: 事件配置数组
    *   `markers`: 标记配置数组
    *   `sections`: 区段配置数组

2.  **ViewConfiguration**: 管理视觉表示和交互设置
    *   控制外观、缩放级别和交互行为
    *   可以自定义或使用默认值

### 事件处理

时间轴组件支持多种交互事件：

*   `on-click`: 点击时间轴时触发
*   `on-context-click`: 右键点击/上下文菜单时触发
*   `on-select-change`: 选择更改时触发
*   `on-hover`: 鼠标悬停在时间轴元素上时触发
*   `on-leave`: 鼠标离开时间轴元素时触发

事件处理示例：

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

### React 集成

该组件使用自定义钩子来管理时间轴：

*   `useTimeline`: 管理时间轴实例及其生命周期
    *   创建并初始化时间轴
    *   处理组件卸载时的清理工作
    *   提供对时间轴实例的访问

*   `useTimelineEvent`: 处理事件订阅和清理
    *   管理事件监听器的生命周期
    *   在组件卸载时自动清理监听器

当组件卸载时，该组件会自动处理时间轴实例的清理和销毁。

### 事件结构

时间轴中的事件遵循以下结构：

```typescript
type TimelineEvent = {
  id: string;             // 唯一标识符
  from: number;           // 开始时间戳
  to?: number;            // 结束时间戳（点事件可选）
  axisId: string;         // 事件所属的轴的 ID
  trackIndex: number;     // 轴轨道中的索引
  renderer?: AbstractEventRenderer; // 可选的自定义渲染器
  color?: string;         // 可选的事件颜色
  selectedColor?: string; // 可选的选中状态颜色
};
```

### 直接 TypeScript 使用

Timeline 类可以直接在 TypeScript 中使用，无需 React。这对于与其它框架或原生 JavaScript 应用程序集成非常有用：

```typescript
import { Timeline } from '@gravity-ui/timeline';

const timestamp = Date.now();

// 创建一个时间轴实例
const timeline = new Timeline({
  settings: {
    start: timestamp,
    end: timestamp + 3600000, // 当前时间起 1 小时
    axes: [
      {
        id: 'main',
        label: '主轴',
        color: '#000000'
      }
    ],
    events: [
      {
        id: 'event1',
        from: timestamp + 1800000, // 当前时间起 30 分钟
        to: timestamp + 2400000,   // 当前时间起 40 分钟
        label: '示例事件',
        axisId: 'main'
      }
    ],
    markers: [
      {
        id: 'marker1',
        time: timestamp + 1200000, // 当前时间起 20 分钟
        label: '重要节点',
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

Timeline 类提供了一个丰富的 API 来管理时间轴：

*   **事件管理**:
    ```typescript
    // 添加事件监听器
    timeline.on('eventClick', (detail) => {
      console.log('Event clicked:', detail);
    });

    // 移除事件监听器
    const handler = (detail) => console.log(detail);
    timeline.on('eventClick', handler);
    timeline.off('eventClick', handler);

    // 发射自定义事件
    timeline.emit('customEvent', { data: 'custom data' });
    ```

*   **时间轴控制**:
    ```typescript
    // 更新时间轴数据
    timeline.api.setEvents([
      {
        id: 'newEvent',
        from: Date.now(),
        to: Date.now() + 3600000,
        label: '新事件',
        axisId: 'main',
        trackIndex: 0
      }
    ]);

    // 更新轴
    timeline.api.setAxes([
      {
        id: 'newAxis',
        label: '新轴',
        color: '#0000ff'
      }
    ]);

    // 更新标记
    timeline.api.setMarkers([
      {
        id: 'newMarker',
        time: Date.now(),
        label: '新标记',
        color: '#00ff00',
        activeColor: '#4caf50',
        hoverColor: '#2e7d32'
      }
    ]);

    // 更新区段
    timeline.api.setSections([
      {
        id: 'newSection',
        from: Date.now(),
        to: Date.now() + 1800000,
        color: 'rgba(255, 193, 7, 0.2)', // 浅琥珀色背景
        hoverColor: 'rgba(255, 193, 7, 0.3)'
      }
    ]);
    ```

## 实时示例

在我们的 [Storybook](https://preview.gravity-ui.com/timeline/) 中探索交互式示例：

- [基础时间线](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--basic) - 带有事件和轴的简单时间线
- [无限时间线](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--endless-timelines) - 带有事件和轴的无限时间线
- [标记](https://preview.gravity-ui.com/timeline/?path=/story/timeline-markers--basic) - 带有垂直标记和标签的时间线
- [自定义事件](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--custom-renderer) - 带有自定义事件渲染的时间线


## 开发

### Storybook

本项目包含 Storybook，用于组件开发和文档编写。

运行 Storybook：

```bash
npm run storybook
```

这将启动 Storybook 开发服务器，端口为 6006。您可以通过 http://localhost:6006 访问它。

构建 Storybook 的静态版本以进行部署：

```bash
npm run build-storybook
```

## 许可证

MIT