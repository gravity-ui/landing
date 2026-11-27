GRAVITY_TRANSLATION_BLOCK_0_END

Virtualizer는 현재 보이는 행의 창만 렌더링하여 수만 개의 항목이 있는 목록을 효율적으로 처리할 수 있도록 합니다.

```tsx
import {ListVirtualizer, Virtualizer} from '@gravity-ui/uikit/virtualizer';
```

이 진입점에는 `@tanstack/react-virtual`이 필요합니다. 선택적 피어 종속성이므로 `@gravity-ui/uikit` 옆에 설치하세요.

여기에는 두 가지가 있습니다. `Virtualizer`는 엔진으로, 직접 렌더링하는 행의 위치를 지정하고 측정하는 스크롤 컨테이너입니다. `ListVirtualizer`는 [List](../List/README.md)의 가상화 계층으로, `<List>`를 래핑하며, 목록은 다른 변경 없이 엔진을 통해 렌더링됩니다.

## Virtualizer

컴포넌트가 렌더링하는 요소는 스크롤 컨테이너 자체이므로 높이가 제한되어야 합니다. `getItemSize`는 행이 렌더링되기 전에 사용되는 추정치입니다. `measure`가 꺼져 있지 않으면 마운트 후 최상위 행의 측정된 높이가 이를 대체하므로 높이가 가변적인 행은 별도의 구성이 필요하지 않습니다.

```tsx
import {Virtualizer} from '@gravity-ui/uikit/virtualizer';

const ROW_HEIGHT = 32;

function Log({records}) {
  return (
    <Virtualizer
      style={{height: 400}}
      count={records.length}
      getItemSize={() => ROW_HEIGHT}
      getItemKey={(index) => records[index].id}
      renderRow={({index}) => <div style={{height: ROW_HEIGHT}}>{records[index].message}</div>}
    />
  );
}
```

## ListVirtualizer

변경되는 것은 래퍼뿐이며, 내부에 있는 목록은 그대로 유지됩니다. `estimateItemSize`가 없으면 행 높이는 목록의 `size`에서 가져오므로 모든 구성 속성은 선택 사항입니다.

```tsx
import {List} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

function TrackList({tracks}) {
  return (
    <ListVirtualizer estimateItemSize={28}>
      <List
        aria-label="Archive"
        style={{maxHeight: 480}}
        items={tracks}
        getItemContent={(track) => track.title}
      />
    </ListVirtualizer>
  );
}
```

`List`의 루트가 스크롤 컨테이너가 되므로 높이를 제한하는 것은 사용자의 몫입니다. 그렇지 않으면 창이 전체 목록으로 축소됩니다. 계층의 자세한 내용은 List의 [가상화](../List/README.md#virtualization) 섹션에 있습니다.

### 앱 전체를 위한 하나의 래퍼

래퍼는 컨텍스트 제공자입니다. 아래의 모든 `List` 및 `Select`와 `Select`의 팝업을 포함합니다. `minItemsCount`를 사용하면 테마 `Provider` 옆에 한 번만 배치하고 긴 목록만 가상화할 수 있습니다. 행이 적은 목록은 래퍼가 없는 것처럼 렌더링되며 모든 행이 DOM에 표시됩니다.

```tsx
import {Provider} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

root.render(
  <Provider theme="light">
    <ListVirtualizer minItemsCount={50}>
      <App />
    </ListVirtualizer>
  </Provider>,
);
```

`List`는 섹션 헤더를 포함하여 행 수를 계산합니다. `Select`는 그룹 헤더와 필터를 제외한 옵션 수를 계산하므로 필터에 입력해도 목록이 다른 모드로 전환되지 않습니다.

내부 래퍼는 제공된 것만 변경하고 위쪽의 래퍼에서 나머지를 가져옵니다. 중첩된 테마 `Provider`와 같은 방식입니다. 루트 래퍼 아래의 단일 목록 주위:

- `<ListVirtualizer overscan={20}>`는 루트의 임계값을 유지하고 버퍼를 변경합니다.
- `<ListVirtualizer minItemsCount={0}>`는 목록 크기에 관계없이 목록을 가상화합니다.
- `<ListVirtualizer minItemsCount={Infinity}>`는 목록을 그대로 유지하고 청크가 로드되지 않습니다.

### 온디맨드 로딩

창의 코드(`@tanstack/react-virtual` 포함)는 자체 청크입니다. `ListVirtualizer`를 가져오는 것은 앱의 번들에 포함되지 않습니다. `minItemsCount`에 충분히 긴 첫 번째 목록이 렌더링될 때 청크가 로드되며, 가상화될 `Select`는 팝업이 열리기 전에 마운트 시 로드하기 시작합니다. 청크가 도착할 때까지 목록은 동일한 루트에서 첫 번째 행을 표시합니다. 페이지가 비어 있지 않으며 창은 렌더링될 수 있는 즉시 해당 행으로 스크롤되어 목록이 표시하던 활성 행으로 이동합니다. 청크 로드에 실패하면 오류가 목록의 가장 가까운 오류 경계로 전달됩니다.

> [!NOTE]
> 서버 렌더링된 HTML에서 가상화된 목록에는 첫 번째 행이 있습니다. 창을 측정할 뷰포트가 없으므로 창은 하이드레이션 후에 제어권을 가져옵니다. 나머지 행은 마크업에 없습니다. 모든 콘텐츠가 있어야 하는 경우 목록을 가상화하지 않은 상태로 두십시오.

## 속성

### Virtualizer

나머지 속성은 스크롤 컨테이너 요소로 전달됩니다.

| 이름                  | 설명                                                                                             |                          타입                          | 기본값 |
| :-------------------- | :----------------------------------------------------------------------------------------------- | :----------------------------------------------------: | :-----: |
| count                 | 목록의 최상위 항목 수                                                                            |                        `number`                        |         |
| getItemSize           | 항목의 높이 (자식 포함); 자식은 `parentKey`와 함께 도착합니다.                                       |            `(index, parentKey?) => number`             |         |
| getItemKey            | 항목의 키; 자식은 `parentKey`와 함께 도착합니다.                                                   |              `(index, parentKey?) => Key`              |         |
| renderRow             | 행을 렌더링합니다: 항목, 부모의 키, 자식을 렌더링하는 콜백                                            | `(item, parentKey, renderChildren) => React.ReactNode` |         |
| measure               | `getItemSize`를 신뢰하는 대신 마운트 후 최상위 행의 실제 높이를 측정합니다.                            |                       `boolean`                        | `true`  |
| overscan              | 보이는 창 위아래에 렌더링되는 행 수                                                              |                        `number`                        |   `0`   |
| disableVirtualization | 모든 행을 렌더링합니다. 목록이 작다고 알려진 경우 유용합니다.                                        |                       `boolean`                        |         |
| persistedIndexes      | 스크롤되어 창에서 벗어난 경우에도 창에 유지되는 행; 각 항목은 계층 구조에서 인덱스의 경로입니다. |                   `Array<number[]>`                    |         |
| loading               | 더 많은 항목을 로드 중인지 여부: `false`로 돌아갈 때까지 `onLoadMore`가 다시 호출되지 않습니다.      |                       `boolean`                        |         |
| onLoadMore            | 스크롤이 끝에 가까워지면 호출됩니다.                                                               |                      `() => void`                      |         |
| apiRef                | 명령형 API에 대한 Ref: `scrollToIndex`, `scrollToOffset`, `scrollOffset`, `scrollRect`             |              `React.Ref<VirtualizerApi>`               |         |
| containerRef          | 스크롤 컨테이너 요소에 대한 Ref                                                                  |                `React.Ref<HTMLElement>`                |         |

### ListVirtualizer

| 이름             | 설명                                                                                                                               |            타입             |          기본값          |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------: | :-----------------------: |
| children         | `<List>` 내부                                                                                                                       |         `ReactNode`         |                           |
| estimateItemSize | 렌더링되기 전 행의 높이 추정값 — 상수 또는 행 컨텍스트의 함수                                          | `number \| (ctx) => number` | 리스트의 `size`에 의해 결정 |
| measure          | 마운트 후 행의 실제 높이를 측정합니다 (가변 높이 행은 기본적으로 지원되지 않음)                                               |          `boolean`          |          `true`           |
| minItemsCount    | 행 수가 적은 리스트는 래퍼가 없는 것처럼 렌더링됩니다. `Select`는 그룹 헤더와 필터 없이 옵션 수를 셉니다. |          `number`           |            `0`            |
| overscan         | 보이는 창 외부의 행 버퍼                                                                                                                         |          `number`           |            `5`            |

다른 래퍼 안에 있는 래퍼는 제공되지 않은 props를 위쪽 래퍼에서 가져옵니다. 테이블의 기본값은 가장 바깥쪽 래퍼의 기본값입니다.