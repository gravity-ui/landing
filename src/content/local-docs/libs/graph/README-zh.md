# @gravity-ui/graph &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/graph)](https://www.npmjs.com/package/@gravity-ui/graph) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/graph/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/graph/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/graph/)

> [从 0.x 迁移到 1.x 的指南 →](docs/migration-guides/v0-to-v1.md)

一个图形可视化库，结合了两种最佳方案：
- **Canvas**：在查看整个图形时提供高**性能**
- **HTML/React**：在缩放时提供丰富的**交互性**

告别在性能和交互性之间二选一的困境。非常适合大型图表、流程图和节点式编辑器。

## 动机

现代 Web 应用通常需要复杂的可视化和交互性，但现有的解决方案通常只专注于一种渲染技术：

- **Canvas**：为复杂图形提供高**性能**，但在文本处理和交互性方面受限。
- **HTML DOM**：方便构建界面，但在处理复杂图形或大量元素时**效率较低**。

@gravity-ui/graph 通过根据缩放级别**自动切换 Canvas 和 HTML** 来解决这个问题：
- **缩放较远时**：使用 Canvas 高效渲染整个图形
- **中等缩放时**：显示具有基本交互性的示意图
- **缩放较近时**：切换到 HTML/React 组件以实现丰富的交互

## 工作原理

该库使用智能渲染系统，可自动管理 Canvas 和 React 组件之间的过渡：

1. 在低缩放级别，所有内容都在 Canvas 上渲染以获得性能。
2. 放大到详细视图时，`GraphCanvas` 组件会：
   - 跟踪摄像机的视口和缩放变化
   - 计算当前视口中可见的块（带有填充以实现平滑滚动）
   - **仅为可见块渲染 React 组件**
   - 在滚动或缩放时自动更新列表
   - 缩放时移除 React 组件

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

## 示例

### React 示例

[详细的 React 组件文档](docs/react/usage.md)

```typescript
import { EAnchorType, Graph, GraphState } from "@gravity-ui/graph";
import { GraphCanvas, GraphBlock, useGraph } from "@gravity-ui/graph/react";
import React from "react";

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
              index: 0
            }
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
              index: 0
            }
          ],
        }
      ],
      connections: [
        {
          sourceBlockId: "action_1",
          sourceAnchorId: "out1",
          targetBlockId: "action_2",
          targetAnchorId: "in1",
        }
      ]
    });
  }, [setEntities]);

  const renderBlockFn = (graph, block) => {
    return <GraphBlock graph={graph} block={block}>{block.id}</GraphBlock>;
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

```html
<div class="language-selector">
  <a href="/en/README.md">English</a>
  <a href="/zh/README.md">中文</a>
</div>
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
            name: "节点 #1",
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
            name: "节点 #2",
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
- [自定义节点视图](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--custom-schematic-block)
- [贝塞尔曲线连接](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--one-bezier-connection)
- [连接自定义](https://preview.gravity-ui.com/graph/?path=/story/api-updateconnection--default)

## 文档

### 目录

1. 系统
   - [组件生命周期](docs/system/component-lifecycle.md)
   - [事件](docs/system/events.md)
   - [图设置](docs/system/graph-settings.md)
   - [公共 API](docs/system/public_api.md)
   - [调度器系统](docs/system/scheduler-system.md)

2. 组件
   - [Canvas Graph 组件](docs/components/canvas-graph-component.md)
   - [节点组件](docs/components/block-component.md)
   - [锚点](docs/components/anchors.md)

3. 渲染
   - [渲染机制](docs/rendering/rendering-mechanism.md)
   - [图层](docs/rendering/layers.md)

4. 节点和连接
   - [节点分组](docs/blocks/groups.md)
   - [Canvas 连接系统](docs/connections/canvas-connection-system.md)