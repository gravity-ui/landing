# @gravity-ui/graph &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/graph)](https://www.npmjs.com/package/@gravity-ui/graph) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/graph/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/graph/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/graph/)

> [0.x에서 1.x로 마이그레이션 가이드 →](docs/migration-guides/v0-to-v1.md)

두 세계의 장점을 결합한 그래프 시각화 라이브러리입니다.
- 전체 그래프를 볼 때 높은 성능을 위한 Canvas
- 확대 시 풍부한 상호작용을 위한 HTML/React

성능과 상호작용성 사이에서 더 이상 선택할 필요가 없습니다. 대규모 다이어그램, 순서도 및 노드 기반 편집기에 완벽합니다.

![preview graph.](docs/_static/graph_preview.png)

## 동기

현대 웹 애플리케이션은 종종 복잡한 시각화 및 상호작용을 요구하지만, 기존 솔루션은 일반적으로 단일 렌더링 기술에 집중합니다.

- **Canvas**는 복잡한 그래픽에 대해 높은 성능을 제공하지만, 텍스트 처리 및 상호작용에는 제한이 있습니다.
- **HTML DOM**은 인터페이스에 편리하지만, 복잡한 그래픽이나 많은 수의 요소에는 효율성이 떨어집니다.

@gravity-ui/graph는 확대/축소 수준에 따라 Canvas와 HTML 간에 자동으로 전환하여 이 문제를 해결합니다.
- **축소 시**: 전체 그래프를 효율적으로 렌더링하기 위해 Canvas 사용
- **중간 확대 시**: 기본 상호작용을 갖춘 개략적인 보기 표시
- **확대 시**: 풍부한 상호작용을 위해 HTML/React 컴포넌트로 전환

## 작동 방식

이 라이브러리는 Canvas와 React 컴포넌트 간의 전환을 자동으로 관리하는 스마트 렌더링 시스템을 사용합니다.

1. 낮은 확대/축소 수준에서는 성능을 위해 모든 것이 Canvas에 렌더링됩니다.
2. 상세 보기로 확대할 때 `GraphCanvas` 컴포넌트는 다음을 수행합니다.
   - 카메라 뷰포트 및 확대/축소 변경 사항을 추적합니다.
   - 현재 뷰포트에서 보이는 블록을 계산합니다 (부드러운 스크롤을 위한 패딩 포함).
   - 보이는 블록에 대해서만 React 컴포넌트를 렌더링합니다.
   - 스크롤 또는 확대/축소 시 목록을 자동으로 업데이트합니다.
   - 축소 시 React 컴포넌트를 제거합니다.

```typescript
// React 컴포넌트 렌더링 예시
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

## 사용법

### React 예제

[자세한 React 컴포넌트 문서](docs/react/usage.md)

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

### 일반 JavaScript 예제

```javascript
import { Graph } from "@gravity-ui/graph";

// 컨테이너 요소 생성
const container = document.createElement('div');
container.style.width = '100vw';
container.style.height = '100vh';
container.style.overflow = 'hidden';
document.body.appendChild(container);

// 설정으로 그래프 초기화
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

5. 테스트
   - [Playwright 페이지 객체](docs/testing/playwright.md)

## 라이선스

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참조하십시오.

## AI 에이전트용

노드 기반 다이어그램을 위한 하이브리드 Canvas/React 그래프 편집기 — 플로우차트, 노드 편집기 또는 Canvas가 낮은 줌 레벨에서 성능을 제공하고 React 컴포넌트가 높은 줌 레벨에서 풍부한 상호 작용을 제공하는 대규모 대화형 다이어그램을 구축하는 데 사용하세요.

### 언제 사용해야 할까요?

- 수백/수천 개의 노드와 연결이 있는 노드 기반 편집기(플로우차트, 파이프라인, 시각적 빌더).
- 혼합 렌더링: 전체 그래프 개요는 Canvas로, 뷰포트에 보이는 블록은 높은 줌 레벨에서 React 컴포넌트로 렌더링합니다.
- Vanilla JS 또는 React 사용자 — 핵심 `Graph` 클래스는 프레임워크에 독립적이며, `@gravity-ui/graph/react`는 React 바인딩을 제공합니다.

### 언제 사용하지 않아야 할까요?

- 숫자 데이터 시리즈(선/막대/산점도 차트)를 플로팅하려면 [`@gravity-ui/charts`](https://gravity-ui.com/charts) 또는 [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr)를 사용하세요. 그래프는 노드/엣지 다이어그램 편집기이며 데이터 차트가 아닙니다.
- 노드가 적은 정적이고 편집 불가능한 다이어그램의 경우, SVG 또는 더 간단한 다이어그램 라이브러리가 Canvas/React 뷰포트 메커니즘 없이도 충분할 수 있습니다.

### 일반적인 함정

- **`GraphEditor` 잘못 가져오기** — React 컴포넌트는 `@gravity-ui/graph/react`에서 가져오는 `GraphCanvas`, `GraphBlock`, `useGraph` 훅이며, 핵심 클래스는 `@gravity-ui/graph`에서 가져오는 `Graph`입니다.
- **`ATTACHED` 상태 이전에 그래프 메서드 호출** — 마운트 시가 아니라 `onStateChanged` 콜백 내에서 `state === GraphState.ATTACHED`일 때 `start()`/`zoomTo(...)`를 호출하세요.
- **`setEntities` 누락** — `useGraph`는 `graph`, `setEntities`, `start`를 반환하며, 데이터는 `setEntities({blocks, connections})` 후에만 나타납니다.
- **앵커 유형 혼합** — 연결은 소스 및 대상 블록에서 일치하는 `EAnchorType` (`IN`/`OUT`)을 가진 기존 앵커 ID를 참조해야 합니다.

## AI 에이전트용 문서

설치된 버전에 대한 에이전트 읽기 가능 문서는 `node_modules/@gravity-ui/graph/build/docs/INDEX.md`에 있습니다.