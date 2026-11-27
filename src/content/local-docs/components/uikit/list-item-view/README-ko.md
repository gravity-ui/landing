`ListItemView`는 목록 행의 보기입니다. 행의 콘텐츠(아이콘, 설명, 마지막 콘텐츠)를 배치하고 소유자가 전달한 상태를 그립니다.

```tsx
import {ListItemView} from '@gravity-ui/uikit';
```

[List](../List/README.md)는 이 보기로 행을 그리고 `List.ItemView`로 노출합니다. 레이아웃의 props만 사용합니다. 목록 외부에서 행을 빌드하려면 `ListItemView` 자체를 사용하세요. 자체 메뉴의 행, 트리 항목 또는 목록이 전달하지 않는 중첩 및 축소 props가 필요한 행입니다.

- [기본 사용법](#basic-usage)
- [크기](#sizes)
- [슬롯](#slots)
- [상태](#states)
- [선택](#selection)
- [중첩 및 축소](#nesting-and-collapsing)
- [드래그 핸들](#drag-handle)
- [다른 요소](#another-element)
- [CSS API](#css-api)
- [속성](#properties)

## 기본 사용법

이 보기는 컨테이너만큼 넓은 블록 요소입니다. 행의 너비는 주변 목록의 너비입니다.

```tsx
import {Envelope} from '@gravity-ui/icons';
import {Icon, ListItemView} from '@gravity-ui/uikit';

function Mailbox() {
  return (
    <ListItemView startContent={<Icon data={Envelope} size={16} />} onClick={openMailbox}>
      Inbox
    </ListItemView>
  );
}
```

<ListItemViewExample />

이 보기는 자체 ARIA 역할을 가지지 않습니다. 행은 속한 목록에서 역할을 얻습니다(리스트박스의 `option`, 그리드의 `row`). `role`은 DOM props의 나머지 부분과 함께 전달될 때 루트 요소에 도달합니다. `<List>` 내부에서는 props가 `getItemProps()`에서 준비되어 제공됩니다.

## 크기

`size` prop은 행의 밀도를 설정합니다. `s`, `m`, `l` 또는 `xl`입니다. 최소 높이, 패딩, 모서리 반경 및 행 컨트롤의 크기를 결정합니다. `xl`은 텍스트를 `body-2`로 전환하기도 합니다. 높이는 컨트롤의 높이(24, 28, 36 및 44px)이며, 컨트롤과 마찬가지로 블록 패딩은 높이에서 나옵니다. 단일 줄은 행을 정확히 채우고, 다음 줄마다 줄 높이가 추가됩니다. 인라인 패딩은 크기에 따라 증가합니다(8, 12, 16 및 16px). `size`가 없는 행은 `m`의 높이, 패딩 및 반경과 기본 보기의 컨트롤을 가집니다. `<List>` 내부에서는 모든 행이 목록의 크기를 가집니다.

<ListItemViewSizes />

## 슬롯

행의 콘텐츠는 자식이며 나머지는 props에 있습니다. 선행 아이콘 또는 아바타의 경우 `startContent`, 두 번째 줄의 경우 `description`, 행을 닫는 내용(레이블, 바로 가기, 작업)의 경우 `endContent`입니다.

<ListItemViewSlots />

```tsx
<ListItemView
  startContent={<Icon data={Star} size={16} />}
  description="Flagged by you"
  endContent={<Label>3</Label>}
>
  Starred
</ListItemView>
```

## 상태

행은 네 가지 상태를 표시하며 각 상태는 prop입니다. 보기는 자체 상태를 유지하지 않습니다.

- `active` — 키보드 커서: 목록은 화살표 키로 이동합니다.
- `hovered` — props에 의해 강제되는 호버 하이라이트. prop이 없으면 행은 `:hover` 시 자체적으로 강조 표시됩니다. `hovered={false}`는 이를 억제하며, 드래그가 진행되는 동안 목록이 수행하는 작업입니다.
- `disabled` — 행이 흐릿해지고 포인터에 대한 반응을 중지합니다. 자체 `onClick`도 포함됩니다.
- `selected` — [선택](#selection) 참조.

<ListItemViewStates />

## 선택

`selectionStyle`은 선택된 행이 표시되는 방식을 나타냅니다. `highlight`는 행을 색조로 표시하고, `check`는 콘텐츠 앞에 체크 표시를 위한 슬롯을 유지하며, `none`은 아무것도 표시하지 않아 선택을 나타냅니다. 이 prop에는 기본값이 없습니다. prop이 없는 `selected` 행은 다른 행과 동일하게 보입니다. `<List>` 내부에서는 목록이 자체적으로 스타일을 선택합니다. 다중 선택의 경우 `check`, 단일 선택의 경우 `highlight`입니다.

<ListItemViewSelection />

체크 슬롯은 선택 여부에 관계없이 목록의 모든 행에 대해 유지되므로 선택이 변경될 때 행의 콘텐츠가 점프하지 않습니다.

## 중첩 및 축소

`nestedLevel`은 트리의 깊이만큼 행을 들여쓰고, `collapsible`은 행에 해당 분기의 토글을 제공합니다. `collapsed`는 해당 상태이고 `onCollapseChange`는 해당 핸들러입니다. 행 자체를 클릭하면 행에 자체 `onClick`이 없는 한 분기가 토글됩니다.

토글은 장식입니다. `aria-hidden`을 전달하고 탭 순서에서 벗어나므로 행 자체는 분기에 접근하는 유일한 방법입니다. 행의 `aria-expanded`는 사용자가 설정해야 합니다.

<ListItemViewNesting />

## 드래그 핸들

`dragHandle`은 들여쓰기, 축소 토글 및 체크 표시 앞에 오는 행의 가장 바깥쪽 슬롯을 채웁니다. 따라서 재정렬 가능한 목록의 핸들은 행이 표시하는 내용에 관계없이 행의 가장자리에 유지됩니다. 이 보기는 드래그 앤 드롭에 대해 아무것도 알지 못합니다. 라이브러리의 props는 전달하는 요소에 있습니다.

<ListItemViewDragHandle />

```tsx
<ListItemView
  dragHandle={
    <span {...dragHandleProps} aria-label="Drag to reorder">
      <Icon data={Grip} size={12} />
    </span>
  }
>
  {track.title}
</ListItemView>
```

## 다른 요소

`component`는 행을 링크, 버튼과 같은 다른 요소로 렌더링하고 `componentProps`는 해당 요소의 props(href, type, 핸들러)입니다. `isContainer`를 사용하면 보기가 아무것도 배치하지 않고 상태와 요소를 유지하면서 행의 마크업을 사용자가 처리하도록 합니다.

<ListItemViewCustomElement />

## CSS API

| 이름                                        | 설명                          |
| :------------------------------------------ | :----------------------------------- |
| `--g-list-item-view-min-height`             | 행의 최소 높이          |
| `--g-list-item-view-border-radius`          | 모서리 반경                    |
| `--g-list-item-view-padding-inline`         | 인라인 패딩                   |
| `--g-list-item-view-padding-block`          | 블록 패딩                    |
| `--g-list-item-view-line-height`            | 콘텐츠의 줄 높이       |
| `--g-list-item-view-controls-gap`           | 슬롯 간 간격            |
| `--g-list-item-view-controls-size`          | 행 컨트롤의 크기          |
| `--g-list-item-view-controls-border-radius` | 컨트롤 모서리 반경    |
| `--g-list-item-view-controls-icon-size`     | 컨트롤 아이콘 크기 |
| `--g-list-item-view-spacer-size`            | 들여쓰기 한 단계 크기      |
| `--g-list-item-view-background-color`       | 행의 배경              |
| `--g-list-item-view-background-color-hover` | 호버된 행의 배경      |
| `--g-list-item-view-text-color`             | 콘텐츠 색상            |
| `--g-list-item-view-description-color`      | 설명 색상        |

이 변수들은 모든 크기의 행에 적용됩니다. `size`는 최소 높이, 반경, 패딩 및 컨트롤에 대한 기본 기하학적 모양만 제공합니다. 설정되지 않은 변수에 대한 기본값입니다. 기본 블록 패딩은 최소 높이와 줄 높이를 따릅니다. `--g-list-item-view-padding-block`은 이를 고정합니다. 목록의 섹션 헤더(`List.SectionHeader`)는 동일한 최소 높이와 인라인 패딩, 포함된 변수를 따르므로 목록의 행과 헤더는 하나의 가장자리를 유지합니다.

## 속성

| 이름             | 설명                                                                                 |                  타입                  | 기본값 |
| :--------------- | :----------------------------------------------------------------------------------- | :------------------------------------: | :-----: |
| children         | 행의 내용                                                                            |           `React.ReactNode`            |         |
| size             | 행의 밀도                                                                            |        `'s'` `'m'` `'l'` `'xl'`        |         |
| startContent     | 선행 콘텐츠: 아이콘, 아바타                                                          |           `React.ReactNode`            |         |
| description      | 행의 두 번째 줄                                                                      |           `React.ReactNode`            |         |
| endContent       | 후행 콘텐츠: 레이블, 바로 가기, 액션                                                 |           `React.ReactNode`            |         |
| dragHandle       | 가장 바깥쪽 슬롯의 콘텐츠: 재정렬 가능한 행의 드래그 핸들                            |           `React.ReactNode`            |         |
| active           | 행의 키보드 커서                                                                     |               `boolean`                |         |
| hovered          | 호버 하이라이트, props에 의해 강제됨 (`false`는 행의 `:hover`를 억제함)              |               `boolean`                |         |
| disabled         | 행이 비활성화되었는지 여부                                                           |               `boolean`                |         |
| selected         | 행이 선택되었는지 여부                                                               |               `boolean`                |         |
| selectionStyle   | 선택된 행이 표시되는 방식                                                            |    `'highlight'` `'check'` `'none'`    |         |
| collapsible      | 행에 해당 분기의 토글이 있는지 여부                                                  |               `boolean`                |         |
| collapsed        | 행의 분기가 축소되었는지 여부                                                        |               `boolean`                |         |
| onCollapseChange | 토글의 핸들러 ( `onClick`이 없는 행 클릭 시에도 분기가 토글됨)                        |     `(collapsed: boolean) => void`     |         |
| nestedLevel      | 트리에서 행의 깊이: 앞에 오는 들여쓰기                                               |                `number`                |   `0`   |
| onClick          | 행 클릭의 핸들러 (포커스 가능한 하위 요소 클릭은 해당되지 않음)                      | `React.MouseEventHandler<HTMLElement>` |         |
| component        | 행이 렌더링되는 요소                                                                 |          `React.ElementType`           | `'div'` |
| componentProps   | 해당 요소의 props                                                                    |   `React.ComponentProps<component>`    |         |
| isContainer      | 슬롯 레이아웃 없이 자식을 그대로 렌더링                                              |               `boolean`                | `false` |
| className        | 행의 CSS 클래스                                                                      |                `string`                |         |
| style            | 행의 인라인 스타일                                                                   |         `React.CSSProperties`          |         |

행의 루트 요소로 전달되는 나머지 props: `role`, `id`, `tabIndex`, `aria-*`, `data-*`, 포인터 및 키보드 핸들러.

GRAVITY_TRANSLATION_BLOCK_1_END

### `Row`

`Row` 컴포넌트는 테이블의 행을 렌더링합니다.

GRAVITY_TRANSLATION_BLOCK_2_END

#### Props

| Prop 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 행의 내용입니다. |
| `className` | `string` | - | 행에 적용할 사용자 정의 CSS 클래스입니다. |
| `style` | `React.CSSProperties` | - | 행에 적용할 사용자 정의 인라인 스타일입니다. |
| `sticky` | `boolean` | `false` | 행을 테이블 헤더와 함께 고정할지 여부를 나타냅니다. |
| `stickyOffset` | `number` | - | `sticky`가 `true`일 때 행의 상단 오프셋을 지정합니다. |
| `stickyBoundary` | `string \| HTMLElement` | - | `sticky`가 `true`일 때 행의 고정 경계를 지정합니다. |
| `onRowClick` | `(event: React.MouseEvent<HTMLDivElement>) => void` | - | 행을 클릭할 때 호출되는 콜백 함수입니다. |
| `onRowDoubleClick` | `(event: React.MouseEvent<HTMLDivElement>) => void` | - | 행을 더블 클릭할 때 호출되는 콜백 함수입니다. |
| `onRowContextMenu` | `(event: React.MouseEvent<HTMLDivElement>) => void` | - | 행에서 컨텍스트 메뉴를 열 때 호출되는 콜백 함수입니다. |
| `onRowMouseEnter` | `(event: React.MouseEvent<HTMLDivElement>) => void` | - | 마우스 포인터가 행 위로 올라갈 때 호출되는 콜백 함수입니다. |
| `onRowMouseLeave` | `(event: React.MouseEvent<HTMLDivElement>) => void` | - | 마우스 포인터가 행에서 벗어날 때 호출되는 콜백 함수입니다. |
| `onRowMouseDown` | `(event: React.MouseEvent<HTMLDivElement>) => void` | - | 행에서 마우스 버튼을 누를 때 호출되는 콜백 함수입니다. |
| `onRowMouseUp` | `(event: React.MouseEvent<HTMLDivElement>) => void` | - | 행에서 마우스 버튼을 놓을 때 호출되는 콜백 함수입니다. |
| `onRowMouseMove` | `(event: React.MouseEvent<HTMLDivElement>) => void` | - | 마우스 포인터가 행 위에서 움직일 때 호출되는 콜백 함수입니다. |
| `onRowKeyDown` | `(event: React.KeyboardEvent<HTMLDivElement>) => void` | - | 행에서 키를 누를 때 호출되는 콜백 함수입니다. |
| `onRowKeyUp` | `(event: React.KeyboardEvent<HTMLDivElement>) => void` | - | 행에서 키를 놓을 때 호출되는 콜백 함수입니다. |
| `onRowKeyPress` | `(event: React.KeyboardEvent<HTMLDivElement>) => void` | - | 행에서 키를 누를 때 호출되는 콜백 함수입니다. |
| `role` | `string` | - | ARIA 역할 속성입니다. |
| `id` | `string` | - | 요소의 고유 식별자입니다. |
| `tabIndex` | `number` | - | 요소의 탭 순서입니다. |
| `aria-*` | `string` | - | ARIA 속성입니다. |
| `data-*` | `any` | - | 사용자 정의 데이터 속성입니다. |

GRAVITY_TRANSLATION_BLOCK_3_END

행의 루트 요소로 전달되는 나머지 props: `role`, `id`, `tabIndex`, `aria-*`, `data-*`, 포인터 및 키보드 핸들러.