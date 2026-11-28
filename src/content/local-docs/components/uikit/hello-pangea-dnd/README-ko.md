GRAVITY_TRANSLATION_BLOCK_0_END

`ListHelloPangeaDnd`는 `@hello-pangea/dnd` 라이브러리를 사용하여 [List](../List/README.md)를 재정렬 가능하게 만드는 진입점입니다. 이 라이브러리는 권장되는 드래그 앤 드롭 라이브러리입니다.

```tsx
import {ListHelloPangeaDnd} from '@gravity-ui/uikit/hello-pangea-dnd';
```

이 진입점은 `@hello-pangea/dnd`와 React 18 이상이 필요합니다. 라이브러리를 `@gravity-ui/uikit` 옆에 설치하세요. 코드의 `Draggable` 및 `DragDropContext`는 키트와 동일한 복사본에서 가져와야 합니다.

## 사용법

리스트를 감싸고 `role="grid"`를 부여하세요. 드래그 핸들은 상호작용 가능하며, 그리드 역할 모델에서는 행 내부의 상호작용 가능한 콘텐츠만 유효합니다. 래퍼는 `DragDropContext`와 `Droppable`을 소유하고, 리스트와 동일한 `items`를 받아 재정렬된 배열을 반환합니다.

```tsx
import {List} from '@gravity-ui/uikit';
import {ListHelloPangeaDnd} from '@gravity-ui/uikit/hello-pangea-dnd';

function Playlist() {
  const [tracks, setTracks] = React.useState(initialTracks);

  return (
    <ListHelloPangeaDnd items={tracks} onItemsUpdate={setTracks}>
      <List role="grid" aria-label="Playlist" items={tracks} getItemContent={(t) => t.title} />
    </ListHelloPangeaDnd>
  );
}
```

각 행은 가장 바깥쪽 가장자리에 핸들을 갖습니다. 마우스는 핸들을 사용하여 행을 드래그합니다. 키보드는 `←`/`→`로 핸들에 접근하고, `Space`로 행을 들어 올리고, `↑`/`↓`로 이동시키고, `Space`로 놓습니다 (`Escape`는 취소합니다). 리스트에서 비활성화된 행은 드래그할 수 없으며, `getItemDragDisabled`는 더 많은 행을 고정합니다. 핸들의 이름과 라이브러리가 화면 판독기에게 제공하는 지침은 `configure`로 설정된 언어를 따릅니다 (자체 `DragDropContext` 아래에서 `dragHandleUsageInstructions`를 직접 전달하세요).

`Sheet`, `Dialog` 또는 애니메이션 팝업 내부의 리스트는 동일한 방식으로 드래그됩니다. 키트는 변환된 조상을 보상합니다. 메모리 내 배열이 아닌 데이터의 경우 `onItemsUpdate` 대신 `onDrop`을 사용하세요.

이 키트는 플랫 리스트를 다룹니다. 라이브러리는 연속적인 인덱스가 필요하며, 이는 `items`를 통해 계산됩니다. 섹션은 드래그할 수 없습니다.

래퍼의 자식은 리스트뿐입니다. 어댑터는 가장 가까운 아래쪽 List로 이동하므로, 리스트 옆에 배치된 Select 또는 Menu가 이를 가져갈 수 있습니다. `getItemId` 및 `getItemDragDisabled`는 안정적이어야 합니다. 인라인 함수는 부모 렌더링 시마다 각 행을 다시 렌더링합니다.

### 행의 슬롯

기본 행은 `ListHelloPangeaDnd.Row`입니다. 행 보기를 채우기 위해 `renderItem`에서 이를 렌더링하세요.

```tsx
<List
  role="grid"
  aria-label="Playlist"
  items={tracks}
  getItemContent={(t) => t.title}
  renderItem={(ctx, helpers) => (
    <ListHelloPangeaDnd.Row
      ctx={ctx}
      helpers={helpers}
      description={ctx.item.artist}
      endContent={<Label>{ctx.item.duration}</Label>}
      handlePlacement="end"
    />
  )}
/>
```

### 사용자 정의 마크업

행이 `List.ItemView`가 아닌 경우, `Draggable`을 직접 작성하고 `getHelloPangeaRowProps`에서 연결을 가져오세요. 핸들과 콘텐츠는 각각 셀을 갖습니다. `Draggable`의 인덱스는 `items`에서의 항목 위치입니다.

```tsx
import {Draggable} from '@hello-pangea/dnd';
import {HelloPangeaDragHandle, getHelloPangeaRowProps} from '@gravity-ui/uikit/hello-pangea-dnd';

<List
  role="grid"
  aria-label="Speakers"
  items={people}
  renderItem={(ctx, helpers) => (
    <Draggable draggableId={ctx.id} index={people.indexOf(ctx.item)}>
      {(provided, snapshot) => {
        const {rowProps, handleProps, cellProps} = getHelloPangeaRowProps({
          ctx,
          helpers,
          provided,
          snapshot,
        });
        return (
          <article {...rowProps}>
            <span {...cellProps}>
              <HelloPangeaDragHandle {...handleProps} />
            </span>
            <span {...cellProps}>{ctx.item.name}</span>
          </article>
        );
      }}
    </Draggable>
  )}
/>;
```

라이브러리의 `dragHandleProps` 대신 `handleProps`를 스프레드하세요. 그리드 계약 외에도 가상화 하에서 터치 드래그를 활성 상태로 유지합니다.

`HelloPangeaDragHandle`은 접근 가능한 이름이 있는 그립입니다. 그 자식은 아이콘을 대체합니다.

### 가상화

`ListVirtualizer`를 래퍼 **밖에** 두세요. 래퍼는 리스트의 가상화를 읽고 `Droppable`을 가상 모드로 전환합니다. `minItemsCount` 아래에서는 리스트가 행을 계산하는 방식대로 `items`를 계산하므로, 임계값 아래의 리스트는 표준 모드를 유지합니다.

```tsx
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

<ListVirtualizer estimateItemSize={28}>
  <ListHelloPangeaDnd items={tracks} onItemsUpdate={setTracks}>
    <List
      role="grid"
      aria-label="Archive"
      style={{height: 480}}
      items={tracks}
      getItemContent={(t) => t.title}
    />
  </ListHelloPangeaDnd>
</ListVirtualizer>;
```

드래그되는 행은 복제본, 즉 `Row`의 복사본에 의해 그려집니다. 따라서 사용자 정의 행에는 `renderClone`이 필요합니다. 이 함수는 복제본의 `{item, provided, snapshot}`을 받습니다. 행 높이는 드래그 중에 변경되지 않아야 합니다. 라이브러리는 들어 올릴 때 높이를 측정합니다.

### 여러 리스트

자체 `DragDropContext` 아래에서 여러 리스트를 사용하는 경우, 래퍼는 컨텍스트를 렌더링하지 않습니다. 각 리스트에 `useListHelloPangeaDnd`의 상태와 `droppableId`를 부여하고, 컨텍스트에서 각 상태의 핸들을 호출하세요. 래퍼의 `onItemsUpdate` 및 `onDrop`은 평소와 같이 작동합니다. 상태는 자체 리스트만 재정렬합니다. 한 리스트에서 다른 리스트로의 이동은 `onDragEnd`에서 처리해야 합니다.

```tsx
import {DragDropContext} from '@hello-pangea/dnd';
import {List} from '@gravity-ui/uikit';
import {ListHelloPangeaDnd, useListHelloPangeaDnd} from '@gravity-ui/uikit/hello-pangea-dnd';

const todo = useListHelloPangeaDnd();
const done = useListHelloPangeaDnd();
```

<DragDropContext
  onDragStart={(start) => {
    todo.onDragStart(start);
    done.onDragStart(start);
  }}
  onDragEnd={(result) => {
    todo.onDragEnd(result);
    done.onDragEnd(result);
  }}
>
  <ListHelloPangeaDnd
    items={todoItems}
    onItemsUpdate={setTodoItems}
    state={todo}
    droppableId="todo"
  >
    <List role="grid" aria-label="할 일" items={todoItems} getItemContent={(i) => i.title} />
  </ListHelloPangeaDnd>
  <ListHelloPangeaDnd
    items={doneItems}
    onItemsUpdate={setDoneItems}
    state={done}
    droppableId="done"
  >
    <List role="grid" aria-label="완료" items={doneItems} getItemContent={(i) => i.title} />
  </ListHelloPangeaDnd>
</DragDropContext>;
```

`state` 없이 각 래퍼는 자체 `DragDropContext`를 렌더링하며, 중첩된 컨텍스트는 라이브러리의 센서를 복제합니다.

## 속성

### ListHelloPangeaDnd

| 이름                | 설명                                                                                        |                                      타입                                       |        기본값        |
| :------------------ | :------------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------: | :-------------------: |
| items               | 목록의 항목들, 동일한 순서로                                                    |                                 `readonly T[]`                                  |                       |
| getItemId           | 항목의 ID; `List`의 `getItemId`와 동일하게 유지                                    |                              `(item: T) => string`                              | `List`의 ID |
| onItemsUpdate       | 재정렬된 배열, `moveItem`이 이미 적용됨                                                    |                             `(items: T[]) => void`                              |                       |
| onDrop              | ID와 엣지를 포함한 드롭 이벤트                                                                        |     `(fromId: string, toId: string, position: 'before' \| 'after') => void`     |                       |
| droppableId         | `Droppable`의 ID                                                                          |                                    `string`                                     |      자동 생성 ID       |
| getItemDragDisabled | 드래그할 수 없는 행, 비활성화된 행 외에 추가                                      |                             `(item: T) => boolean`                              |                       |
| renderClone         | 가상 모드: 드래그된 행의 복사본, 사용자 정의 행에 필요                                                                 |                `({item, provided, snapshot}) => React.ReactNode`                |  `Row`의 복사본  |
| state               | 자체 `DragDropContext`를 위한 `useListHelloPangeaDnd` 상태 — [여러 목록](#several-lists) 참조 |                          `UseListHelloPangeaDndResult`                          |                       |
| droppableProps      | `Droppable`에 전달됨                                                                          | `Pick<DroppableProps, 'isDropDisabled' \| 'ignoreContainerClipping' \| 'type'>` |                       |
| children            | `List`, `role="grid"` 포함                                                                     |                                   `ReactNode`                                   |                       |

### ListHelloPangeaDnd.Row

| 이름            | 설명                                                               |         타입          |      기본값      |
| :-------------- | :----------------------------------------------------------------- | :-------------------: | :--------------: |
| ctx             | `renderItem`의 첫 번째 인자                                        |   `ListItemContext`   |                  |
| helpers         | `renderItem`의 두 번째 인자                                        |   `ListItemHelpers`   |                  |
| children        | 행의 내용                                                          |      `ReactNode`      |   `ctx.content`  |
| startContent    | 뷰의 시작 슬롯                                                     |      `ReactNode`      |                  |
| description     | 뷰의 두 번째 줄                                                    |      `ReactNode`      |                  |
| endContent      | 뷰의 끝 슬롯                                                       |      `ReactNode`      |                  |
| handleLabel     | 핸들의 접근 가능한 이름                                            |       `string`        | "Drag to reorder" |
| handlePlacement | 핸들의 가장자리: 가장 바깥쪽 슬롯 또는 `endContent` 다음           |  `'start' \| 'end'`   |     `'start'`     |
| className       | 행의 CSS 클래스                                                    |       `string`        |                  |
| style           | 행의 인라인 스타일                                                 | `React.CSSProperties` |                  |
| qa              | 행의 `data-qa` 속성                                                |       `string`        |                  |

### getHelloPangeaRowProps

`{ctx, helpers, provided, snapshot, handleLabel?}` — `renderItem`의 인자와 `Draggable`의 렌더 함수 인자를 받아 다음을 반환합니다:

| 이름        | 설명                                                                                             |            타입             |
| :---------- | :----------------------------------------------------------------------------------------------- | :-------------------------: |
| rowProps    | 행의 props: 리스트의 props에 드래그 가능한 props와 라이브러리의 ref가 포함됩니다.                  |     `ListItemDOMProps`      |
| handleProps | 핸들의 props: `dragHandleProps`, `tabIndex={-1}` 및 이름; 비활성화 시 장식용입니다.             | `HelloPangeaHandleDOMProps` |
| cellProps   | 셀의 props                                                                                       |     `ListCellDOMProps`      |

### HelloPangeaDragHandle

`span`의 props ( `tabIndex` 제외)와 다음을 받습니다:

| 이름       | 설명                               |    타입     |      기본값      |
| :--------- | :--------------------------------- | :---------: | :--------------: |
| aria-label | 핸들의 접근 가능한 이름            |  `string`   | "Drag to reorder" |
| qa         | `data-qa` 속성                     |  `string`   |                  |
| children   | 그립 대신 사용할 내용              | `ReactNode` |   그립 아이콘    |

### useListHelloPangeaDnd

자체 `DragDropContext`의 드래그 상태 — 래퍼의 `state` (props 불필요) 또는 수동으로 연결된 리스트의 `dnd` prop. 모든 props는 선택 사항입니다:

| 이름   | 설명                                                                                             |                                  타입                                   |
| :----- | :----------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------: |
| ids    | 목록 순서대로 행의 ID; 기본값 — 상태가 주어진 `ListHelloPangeaDnd`의 ID                          |                           `readonly string[]`                           |
| onDrop | 드롭 — `moveItem(items, fromId, toId, position)`과 함께 사용; `ListHelloPangeaDnd` 아래에서 선택 사항 | `(fromId: string, toId: string, position: 'before' \| 'after') => void` |

반환 값:

| 이름        | 설명                                               |              타입              |
| :---------- | :------------------------------------------------- | :----------------------------: |
| draggingId  | 드래그 중인 항목 — 목록의 어댑터로 들어갑니다. |        `string \| null`        |
| onDragStart | `DragDropContext`용                                |  `(start: DragStart) => void`  |
| onDragEnd   | `DragDropContext`용; 실제 이동 시 `onDrop` 호출     | `(result: DropResult) => void` |