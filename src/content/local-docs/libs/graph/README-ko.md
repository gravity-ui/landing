# @gravity-ui/graph &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/graph)](https://www.npmjs.com/package/@gravity-ui/graph) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/graph/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/graph/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/graph/)

> [0.x에서 1.x로 마이그레이션 가이드 →](docs/migration-guides/v0-to-v1.md)

두 세계의 장점을 결합한 그래프 시각화 라이브러리입니다.
- 전체 그래프를 볼 때 높은 성능을 위한 Canvas
- 확대 시 풍부한 상호 작용을 위한 HTML/React

성능과 상호 작용성 사이에서 더 이상 선택할 필요가 없습니다. 대규모 다이어그램, 순서도 및 노드 기반 편집기에 완벽합니다.

## 동기

현대 웹 애플리케이션은 복잡한 시각화 및 상호 작용을 자주 요구하지만, 기존 솔루션은 일반적으로 단일 렌더링 기술에 집중합니다.

- **Canvas**는 복잡한 그래픽에 대해 높은 성능을 제공하지만 텍스트 처리 및 상호 작용에는 제한이 있습니다.
- **HTML DOM**은 인터페이스에 편리하지만 복잡한 그래픽이나 많은 수의 요소에는 효율성이 떨어집니다.

@gravity-ui/graph는 줌 레벨에 따라 Canvas와 HTML 간에 자동으로 전환하여 이를 해결합니다.
- **축소 시**: 전체 그래프를 효율적으로 렌더링하기 위해 Canvas 사용
- **중간 줌**: 기본 상호 작용이 있는 개략적인 보기 표시
- **확대 시**: 풍부한 상호 작용을 위해 HTML/React 구성 요소로 전환

## 작동 방식

이 라이브러리는 Canvas와 React 구성 요소 간의 전환을 자동으로 관리하는 스마트 렌더링 시스템을 사용합니다.

1. 낮은 줌 레벨에서는 성능을 위해 모든 것이 Canvas에 렌더링됩니다.
2. 상세 보기로 확대하면 `GraphCanvas` 구성 요소가 다음을 수행합니다.
   - 카메라 뷰포트 및 스케일 변경 추적
   - 현재 뷰포트에서 보이는 블록 계산 (부드러운 스크롤을 위한 패딩 포함)
   - 보이는 블록에 대해서만 React 구성 요소 렌더링
   - 스크롤 또는 확대/축소 시 목록 자동 업데이트
   - 축소 시 React 구성 요소 제거

```typescript
// React 구성 요소 렌더링 예시
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

## 설치

```bash
npm install @gravity-ui/graph
```

## 예제

### React 예제

[상세 React 구성 요소 문서](docs/react/usage.md)

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

### Vanilla JavaScript 예제

```javascript
import { Graph } from "@gravity-ui/graph";

// 컨테이너 요소 생성
const container = document.createElement('div');
container.style.width = '100vw';
container.style.height = '100vh';
container.style.overflow = 'hidden';
document.body.appendChild(container);

// 구성으로 그래프 초기화
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
  <a href="/en/README.md" class="language-link">English</a>
  <a href="/ko/README.md" class="language-link">한국어</a>
</div>
```

# @gravity/graph

**@gravity/graph**는 복잡한 그래프를 시각화하고 상호 작용할 수 있는 강력하고 유연한 JavaScript 라이브러리입니다. 이 라이브러리를 사용하면 노드와 연결로 구성된 다이어그램을 쉽게 생성하고 관리할 수 있습니다.

## 설치

```bash
npm install @gravity/graph
# 또는
yarn add @gravity/graph
```

## 사용법

```javascript
import { Graph } from "@gravity/graph";

// DOM 요소 가져오기
const container = document.getElementById("graph-container");

// 그래프 인스턴스 생성
const graph = new Graph(container);

// 블록 및 연결 추가
graph.setEntities({
    blocks: [
        {
            is: "block-action",
            id: "block1",
            x: 100,
            y: 100,
            width: 120,
            height: 120,
            name: "블록 #1",
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
            name: "블록 #2",
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

// 렌더링 시작
graph.start();

// 뷰 중앙 정렬
graph.zoomTo("center", { padding: 100 });
```

## 라이브 예제

- [기본 예제](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--hundred-blocks)
- [대규모 예제](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--five-thousands-blocks)
- [사용자 정의 블록 보기](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--custom-schematic-block)
- [베지어 곡선 연결](https://preview.gravity-ui.com/graph/?path=/story/stories-main-grapheditor--one-bezier-connection)
- [연결 사용자 정의](https://preview.gravity-ui.com/graph/?path=/story/api-updateconnection--default)

## 문서

### 목차

1. 시스템
   - [컴포넌트 생명 주기](docs/system/component-lifecycle.md)
   - [이벤트](docs/system/events.md)
   - [그래프 설정](docs/system/graph-settings.md)
   - [공개 API](docs/system/public_api.md)
   - [스케줄러 시스템](docs/system/scheduler-system.md)

2. 컴포넌트
   - [캔버스 그래프 컴포넌트](docs/components/canvas-graph-component.md)
   - [블록 컴포넌트](docs/components/block-component.md)
   - [앵커](docs/components/anchors.md)

3. 렌더링
   - [렌더링 메커니즘](docs/rendering/rendering-mechanism.md)
   - [레이어](docs/rendering/layers.md)

4. 블록 및 연결
   - [블록 그룹](docs/blocks/groups.md)
   - [캔버스 연결 시스템](docs/connections/canvas-connection-system.md)