# @gravity-ui/graph &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/graph)](https://www.npmjs.com/package/@gravity-ui/graph) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/graph/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/graph/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/graph/)

> [迁移指南：从 0.x 迁移到 1.x →](docs/migration-guides/v0-to-v1.md)

一个图表可视化库，它结合了两种技术的优点：
- **Canvas**：在查看整个图表时提供高**性能**。
- **HTML/React**：在放大时提供丰富的**交互性**。

告别在性能和交互性之间二选一的困境。非常适合大型图表、流程图和基于节点的编辑器。

![preview graph.](docs/_static/graph_preview.png)

## 动机

现代 Web 应用通常需要复杂的可视化和交互性，但现有的解决方案通常只专注于一种渲染技术：

- **Canvas**：为复杂图形提供高**性能**，但在文本处理和交互性方面存在局限。
- **HTML DOM**：方便构建界面，但在复杂图形或大量元素方面**效率较低**。

@gravity-ui/graph 通过根据缩放级别自动在 Canvas 和 HTML 之间切换来解决这个问题：
- **缩小视图**：使用 Canvas 高效渲染整个图表。
- **中等缩放**：显示具有基本交互性的示意图。
- **放大视图**：切换到 HTML/React 组件以实现丰富的交互。

## 工作原理

该库使用智能渲染系统，可自动管理 Canvas 和 React 组件之间的过渡：

1. 在低缩放级别，所有内容都在 Canvas 上渲染以获得性能。
2. 放大到详细视图时，`GraphCanvas` 组件会：
   - 跟踪摄像机的视口和缩放变化。
   - 计算当前视口中可见的块（带有填充以实现平滑滚动）。
   - **仅为可见块渲染 React 组件**。
   - 在滚动或缩放时自动更新列表。
   - 缩小视图时移除 React 组件。

```typescript
// React 组件渲染示例
const MyGraph = () => {
  return (
    <GraphCanvas
      graph={graph}
      renderBlock={(graph, block) => (
        <MyCustomBlockComponent
          graph={graph}
          block={block}
        />
      )}
    />
  );
};
```

[Storybook](https://preview.gravity-ui.com/graph/)

## 安装

```bash
npm install @gravity-ui/graph
```

## 用法

### React 示例

[详细的 React 组件文档](docs/react/usage.md)

```typescript
import React, { useEffect } from "react";
import type { Graph, TBlock } from "@gravity-ui/graph";
import { EAnchorType, GraphState } from "@gravity-ui/graph";
import { GraphCanvas, GraphBlock, useGraph } from "@gravity-ui/graph/react";

const config = {};

export function GraphEditor() {
  const { graph, setEntities, start } = useGraph(config);

  useEffect(() => {
    setEntities({
      blocks: [
        {
          is: "block-action",
          id: "action_1",
          x: -100,
          y: -450,
          width: 126,
          height: 126,
          selected: true,
          name: "Block #1",
          anchors: [
            {
              id: "out1",
              blockId: "action_1",
              type: EAnchorType.OUT,
              index: 0,
            },
          ],
        },
        {
          id: "action_2",
          is: "block-action",
          x: 253,
          y: 176,
          width: 126,
          height: 126,
          selected: false,
          name: "Block #2",
          anchors: [
            {
              id: "in1",
              blockId: "action_2",
              type: EAnchorType.IN,
              index: 0,
            },
          ],
        },
      ],
      connections: [
        {
          sourceBlockId: "action_1",
          sourceAnchorId: "out1",
          targetBlockId: "action_2",
          targetAnchorId: "in1",
        },
      ],
    });
  }, [setEntities]);

  const renderBlockFn = (graph: Graph, block: TBlock) => {
    return (
      <GraphBlock graph={graph} block={block}>
        {block.id}
      </GraphBlock>
    );
  };

  return (
    <GraphCanvas
      graph={graph}
      renderBlock={renderBlockFn}
      onStateChanged={({ state }) => {
        if (state === GraphState.ATTACHED) {
          start();
          graph.zoomTo("center", { padding: 300 });
        }
      }}
    />
  );
}

```

### 原生 JavaScript 示例

```javascript
import { Graph } from "@gravity-ui/graph";

// 创建容器元素
const container = document.createElement('div');
container.style.width = '100vw';
container.style.height = '100vh';
container.style.overflow = 'hidden';
document.body.appendChild(container);

// 使用配置初始化图表
const graph = new Graph({
    configurationName: "example",
    blocks: [],
    connections: [],
    settings: {
        canDragCamera: true,
        canZoomCamera: true,
        useBezierConnections: true,
        showConnectionArrows: true
    }
}, container);
```

// 添加节点和连接
graph.setEntities({
    blocks: [
        {
            is: "block-action",
            id: "block1",
            x: 100,
            y: 100,
            width: 120,
            height: 120,
            name: "块 #1",
            anchors: [
                {
                    id: "out1",
                    blockId: "block1",
                    type: EAnchorType.OUT,
                    index: 0
                }
            ]
        },
        {
            is: "block-action",
            id: "block2",
            x: 300,
            y: 300,
            width: 120,
            height: 120,
            name: "块 #2",
            anchors: [
                {
                    id: "in1",
                    blockId: "block2",
                    type: EAnchorType.IN,
                    index: 0
                }
            ]
        }
    ],
    connections: [
        {
            sourceBlockId: "block1",
            sourceAnchorId: "out1",
            targetBlockId: "block2",
            targetAnchorId: "in1"
        }
    ]
});

// 开始渲染
graph.start();

// 居中视图
graph.zoomTo("center", { padding: 100 });
```

## 实时示例

- [基础示例](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--hundred-blocks)
- [大规模示例](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--five-thousands-blocks)
- [自定义块视图](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--custom-schematic-block)
- [贝塞尔曲线连接](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--one-bezier-connection)
- [连接自定义](https://preview.gravity-ui.com/graph/?path=/story/api-updateconnection--default)

## 文档

### 目录

1. 系统
   - [组件生命周期](docs/system/component-lifecycle.md)
   - [事件](docs/system/events.md)
   - [图表设置](docs/system/graph-settings.md)
   - [公共 API](docs/system/public_api.md)
   - [调度器系统](docs/system/scheduler-system.md)

2. 组件
   - [Canvas 图表组件](docs/components/canvas-graph-component.md)
   - [块组件](docs/components/block-component.md)
   - [锚点](docs/components/anchors.md)

3. 渲染
   - [渲染机制](docs/rendering/rendering-mechanism.md)
   - [图层](docs/rendering/layers.md)

4. 块和连接
   - [块组](docs/blocks/groups.md)
   - [Canvas 连接系统](docs/connections/canvas-connection-system.md)

## 许可证

MIT 许可证。详情请参阅 [LICENSE](LICENSE)。

## 面向 AI 代理

一个混合了 Canvas 和 React 的图形编辑器，用于节点式图表——适用于构建流程图、节点编辑器或大型交互式图表，其中 Canvas 在低缩放级别提供高性能，而 React 组件在放大时提供丰富的交互性。

### 何时使用

- 具有数百/数千个节点和连接的节点式编辑器（流程图、管道、可视化构建器）。
- 混合渲染：Canvas 用于全局概览，React 组件用于视口内可见的块（高缩放时）。
- Vanilla JS 或 React 用户——核心 `Graph` 类与框架无关；`@gravity-ui/graph/react` 提供了 React 绑定。

### 何时避免使用

- 要绘制数值数据系列（折线图/柱状图/散点图），请使用 [`@gravity-ui/charts`](https://gravity-ui.com/charts) 或 [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr)——graph 是一个节点/边图表编辑器，而不是数据图表。
- 对于静态、不可编辑且节点很少的图表，SVG 或更简单的图表库可能就足够了，无需 Canvas/React 视口机制。

### 常见陷阱

- **错误的导入 `GraphEditor`**——React 组件是 `GraphCanvas`、`GraphBlock` 和 `useGraph` hook，它们从 `@gravity-ui/graph/react` 导入；核心类是 `Graph`，从 `@gravity-ui/graph` 导入。
- **在 `ATTACHED` 状态之前调用图表方法**——在 `onStateChanged` 回调中调用 `start()`/`zoomTo(...)`，当 `state === GraphState.ATTACHED` 时，而不是在挂载时。
- **忘记 `setEntities`**——`useGraph` 返回 `graph`、`setEntities`、`start`；数据仅在调用 `setEntities({blocks, connections})` 后才会出现。
- **混合锚点类型**——连接必须引用现有的锚点 ID，并且源块和目标块上的锚点类型（`EAnchorType.IN`/`EAnchorType.OUT`）必须匹配。

## 面向 AI 代理的文档

已安装版本的代理可读文档位于 `node_modules/@gravity-ui/graph/build/docs/INDEX.md`。