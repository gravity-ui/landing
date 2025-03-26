# @gravity-ui/graph &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/graph)](https://www.npmjs.com/package/@gravity-ui/graph) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/graph/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/graph/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/graph/)

具有比例感知细节的高性能图形渲染器

[Storybook](https://preview.gravity-ui.com/graph/)

## 安装和设置

```bash
npm install @gravity-ui/graph
```

## 示例

- [基础 storybook 示例](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--hundred-blocks)
- [大型基础 storybook 示例](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--five-thousands-blocks)
- [自定义块视图](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--custom-schematic-block)
- [贝塞尔连接](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--one-bezier-connection)
- [自定义连接](https://preview.gravity-ui.com/graph/?path=/story/api-updateconnection--default)

```jsx
import {GraphCanvas, GraphState, TRenderBlockFn, GraphBlock, useGraph} from '@gravity-ui/graph';
import React from 'react';

const config = {};

export function GraphEditor() {
  const {graph, setEntities, start} = useGraph(config);

  useEffect(() => {
    setEntities({
      blocks: [
        {
          is: 'block-action',
          id: 'action_1',
          x: -100,
          y: -450,
          width: 126,
          height: 126,
          selected: true,
          name: 'Block #1',
          anchors: [],
        },
        {
          id: 'action_2',
          is: 'block-action',
          x: 253,
          y: 176,
          width: 126,
          height: 126,
          selected: false,
          name: 'Block #2',
          anchors: [],
        },
      ],
      connections: [
        {
          sourceBlockId: 'action_1',
          targetBlockId: 'action_2',
        },
      ],
    });
  });

  const renderBlockFn = (graph, block) => {
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
      onStateChanged={({state}) => {
        if (state === GraphState.ATTACHED) {
          start();
          graph.zoomTo('center', {padding: 300});
        }
      }}
    />
  );
}
```

### 文档

- [公共 API](docs/public_api.md)
- [图形事件](docs/events.md)
- [图层](docs/layers.md)
- [分组](docs/groups.md)
