`Table`을 사용하면 행을 선택하고 정렬할 수 있으며, 행에 대한 작업을 수행할 수 있습니다.

```jsx
import {Table} from '@gravity-ui/uikit/legacy';
```

이 컴포넌트는 레거시입니다. 새로운 기능은 [`@gravity-ui/table`](https://github.com/gravity-ui/table)으로 이동하세요. v8 마이그레이션 가이드](../../../../docs/migration-to-v8.md#table-and-tablecolumnsetup)를 참조하세요. `@gravity-ui/uikit/legacy`의 다른 모든 것과 마찬가지로, 이 컴포넌트는 패키지와 함께 `@hello-pangea/dnd`, `react-window`, `react-virtualized-auto-sizer`의 선택적 피어 종속성을 설치해야 합니다. 진입점은 모든 것을 로드하므로 어떤 것을 가져오든 상관없습니다.

GRAVITY_TRANSLATION_BLOCK_0_END

## 속성

| 이름                             | 설명                                                                                                                                                                                   |                                        타입                                        |   기본값   |
| :------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------: | :---------: |
| data                             | 데이터                                                                                                                                                                                   |                                      `any[]`                                       |             |
| columns                          | 컬럼 설정                                                                                                                                                                        |                               `TableColumnConfig[]`                                |             |
| verticalAlign                    | 콘텐츠의 수직 정렬                                                                                                                                                                                         |                                 `"top"` `"middle"`                                 |             |
| getRowDescriptor                 | 행 디스크립터를 가져오는 핸들러                                                                                                                                                      |                   `(item: any, index: number) => DescriptorType`                   |             |
| getRowId                         | 행 선택 및 정렬 시 사용되는 행 ID입니다. 행을 건너뛰면 해당 ID는 컬럼 ID와 이름이 같은 행 데이터 필드의 값이 됩니다.                             |                 `string` `((item: any, index: number) => string)`                  |             |
| getRowClassNames                 | 행 CSS 클래스                                                                                                                                                                        |                      `(item: any, index: number) => string[]`                      |             |
| isRowDisabled                    | 컬럼 비활성화 조건                                                                                                                                                                                       |                      `(item: any, index: number) => boolean`                       |             |
| onRowClick                       | 행 클릭 핸들러                                                                                                                                                                      | `(item: any, index: number, event: React.MouseEvent<HTMLTableRowElement>) => void` |             |
| onRowMouseEnter                  | 행 마우스 진입 핸들러                                                                                                                                                                 | `(item: any, index: number, event: React.MouseEvent<HTMLTableRowElement>) => void` |             |
| onRowMouseLeave                  | 행 마우스 이탈 핸들러                                                                                                                                                                 | `(item: any, index: number, event: React.MouseEvent<HTMLTableRowElement>) => void` |             |
| emptyMessage                     | 데이터가 누락된 경우 메시지 반환                                                                                                                                             |                                      `string`                                      | `"No data"` |
| className                        | 테이블 CSS 클래스                                                                                                                                                                        |                                      `string`                                      |             |
| edgePadding                      | 가장자리 셀에 대한 가로 패딩 추가                                                                                                                                                 |                                     `boolean`                                      |             |
| stickyHorizontalScroll           | 테이블에 가로 고정 스크롤을 추가합니다. 참고: 테이블은 고정된 높이와 고정 스크롤을 동시에 가질 수 없습니다. 테이블에 오버플로우가 있는 경우 고정 스크롤이 작동하지 않습니다. |                                     `boolean`                                      |   `false`   |
| stickyHorizontalScrollBreakpoint | 스크롤을 고정하기 전에 부모 블록이 도달해야 하는 임계값입니다. 이는 콘솔에서 `groupActions` 바가 스크롤을 겹치는 경우와 같이 유용합니다.                         |                                      `number`                                      |     `0`     |

### DescriptorType

| 이름        | 설명                                     |    타입    | 기본값 |
| :---------- | :--------------------------------------- | :--------: | :-----: |
| id          | 행 선택 및 정렬 시 사용되는 행 ID        |  `string`  |         |
| disabled    | 열 비활성화 조건                       | `boolean`  |         |
| interactive | 행 호버 표시                           | `boolean`  |         |
| classNames  | 행 CSS 클래스                          | `string[]` |         |

### TableColumnConfig

| 이름        | 설명                                                                                                        |                            타입                            |                         기본값                         |
| :---------- | :----------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------: | :-----------------------------------------------------: |
| id          | 컬럼 ID                                                                                                          |                          `string`                          |                                                         |
| name        | 컬럼 이름 (헤더)                                                                                               |             `string` `(() => React.ReactNode)`             |                        column ID                        |
| className   | 컬럼의 모든 셀에 추가될 CSS 클래스                                                                                           |                          `string`                          |                                                         |
| placeholder | 셀에 데이터가 없을 때 표시될 자리 표시자                                                                               | `string` `((item: any, index: number) => React.ReactNode)` |                      `— (&mdash;)`                      |
| template    | 셀 내용. 행을 건너뛰면 셀 내용은 이 행과 이름이 같은 필드의 값이 됩니다.                                                               | `string` `((item: any, index: number) => React.ReactNode)` | 컬럼 ID와 이름이 같은 필드의 값 |
| align       | 내용 정렬                                                                                                  |                `"start"` `"center"` `"end"`                |                                                         |
| sticky      | 고정 컬럼                                                                                                      |                     `"start"` `"end"`                      |                                                         |
| primary     | 다른 컬럼과 달리 컬럼을 기본으로 식별합니다.                                                                                              |                         `boolean`                          |                                                         |
| width       | 픽셀 단위의 컬럼 내용 너비                                                                                                                  |                     `number` `string`                      |                                                         |
| meta        | _displayName_: 테이블 설정 위젯에 표시될 이름; HOC 설정 포함 기타 기타 데이터                                                                     |                   `Record<string, any>`                    |                                                         |

## `withTableActions` HOC를 사용한 `Table`

이 HOC는 테이블 열에 액션 전용 열을 추가합니다.

### 속성

| 이름             | 설명                                   |                           타입                           |
| :--------------- | :------------------------------------- | :------------------------------------------------------: |
| getRowActions    | 각 행에 대한 액션 구성 배열            |   `(item: any, index: number) => TableActionConfig[]`    |
| renderRowActions | 액션 셀 렌더링 함수                    | `(props: {item: any; index: number}) => React.ReactNode` |
| rowActionsSize   | 액션 버튼 및 팝업 메뉴 항목의 크기     |                 `"s"` `"m"` `"l"` `"xl"`                 |
| rowActionsIcon   | 액션 셀의 사용자 정의 아이콘           |                    `React.ReactNode`                     |

### CSS API

| 이름                                     | 설명                                                                             |
| :--------------------------------------- | :------------------------------------------------------------------------------- |
| `--g-table-action-popup-menu-max-height` | 액션 팝업 메뉴의 최대 높이. 기본값: `200px`. 제한을 제거하려면 `none`을 사용하세요. |

### TableActionConfig

```ts
type TableActionConfig = TableAction | TableActionGroup;
```

#### TableAction

| 이름     | 설명                                                                 |                 타입                 |  기본값   |
| :------- | :------------------------------------------------------------------- | :----------------------------------: | :--------: |
| text     | 텍스트                                                               |               `string`               |            |
| handler  | 클릭 핸들러                                                          | `(item: any, index: number) => void` |            |
| disabled | 액션 비활성화                                                        |              `boolean`               |            |
| href     | 이 속성을 가진 메뉴 항목은 지정된 위치로 연결되는 링크가 됩니다.     |               `string`               |            |
| target   | `<a>` 태그의 `target` 속성과 동일합니다.                             |               `string`               |            |
| rel      | `<a>` 태그의 `rel` 속성과 동일합니다.                                |               `string`               |            |
| theme    | 테마                                                                 |        `"normal"` `"danger"`         | `"normal"` |
| icon     | 텍스트 옆에 표시할 아이콘                                            |          `React.ReactNode`           |            |

#### TableActionGroup

| 이름  | 설명            |         타입          |
| :---- | :-------------- | :-------------------: |
| title | 액션 그룹 헤더  |       `string`        |
| items | 액션 그룹 항목  | `TableActionConfig[]` |

### 예시

```jsx
import {Table, withTableActions} from '@gravity-ui/uikit/legacy';

const MyTable = withTableActions(Table);
const data = [
  {id: 1, text: 'Hello'},
  {id: 2, text: 'World'},
];
const columns = [{id: 'id'}, {id: 'text'}];
const getRowActions = () => {
  return [
    {
      text: 'Print',
      handler: () => {},
    },
    {
      text: 'Remove',
      handler: () => {},
      theme: 'danger',
    },
  ];
};

const table = <MyTable data={data} columns={columns} getRowActions={getRowActions} />;
```

```jsx
import {Table, withTableActions, RenderRowActionsProps} from '@gravity-ui/uikit/legacy';

const MyTable = withTableActions(Table);
type Item = {id: number; text: string};

const data: Item[] = [
  {id: 1, text: 'Hello'},
  {id: 2, text: 'World'},
];
const columns = [{id: 'id'}, {id: 'text'}];

const RowAction = ({item}: RenderRowActionsProps<Item>) => {
    return <React.Fragment>{`Action for - ${item.text}`}</React.Fragment>;
};
```

```jsx
const table = (
  <MyTable
    data={data}
    columns={columns}
    renderRowActions={RowAction}
  />
);
```

## `Table` 컴포넌트와 `withTableCopy` HOC 사용하기

이 HOC는 셀 또는 다른 텍스트의 내용을 복사할 수 있도록 합니다.

### ColumnMeta

| 이름 | 설명                                                               |                                            Type                                             |
| :--- | :----------------------------------------------------------------- | :-----------------------------------------------------------------------------------------: |
| copy | 복사할 텍스트. 값이 true이면 셀 내용을 복사할 수 있습니다. | `boolean` `((item: any, index: number) => string)` `((item: any, index: number) => number)` |

### 예시

```jsx
import {Table, withTableCopy} from '@gravity-ui/uikit/legacy';

const MyTable = withTableCopy(Table);
const data = [
  {id: 1, text: 'Hello'},
  {id: 2, text: 'World'},
];
const columns = [
  {id: 'id', meta: {copy: ({id}) => `ID #${id}`}},
  {id: 'text', meta: {copy: true}},
];

const table = <MyTable data={data} columns={columns} />;
```

GRAVITY_TRANSLATION_BLOCK_1_END

## `Table` 컴포넌트와 `withTableSelection` HOC 사용하기

이 HOC는 테이블 행을 선택할 수 있도록 합니다.

### 속성

| 이름              | 설명                 |           Type            |
| :---------------- | :------------------- | :-----------------------: |
| selectedIds       | 선택된 행            |        `string[]`         |
| onSelectionChange | 선택 변경 핸들러     | `(ids: string[]) => void` |

### 예시

```jsx
import {Table, withTableSelection} from '@gravity-ui/uikit/legacy';

const MyTable = withTableSelection(Table);
const data = [
  {id: 1, text: 'Hello'},
  {id: 2, text: 'World'},
];
const columns = [{id: 'id'}, {id: 'text'}];
const getRowId = 'id';

function SelectionTable() {
  const [selectedIds, setSelectedIds] = React.useState([1]);

  return (
    <MyTable
      data={data}
      columns={columns}
      getRowId={getRowId}
      selectedIds={selectedIds}
      onSelectionChange={setSelectedIds}
    />
  );
}
```

GRAVITY_TRANSLATION_BLOCK_2_END

## `Table` 컴포넌트와 `withTableSettings` HOC 사용하기

이 HOC는 테이블 열 설정을 위한 기능을 제공합니다. 두 가지 방법으로 사용할 수 있습니다.

```jsx
import {Table, withTableSettings} from '@gravity-ui/uikit/legacy';

// 옵션 없이 사용
const MyTable1 = withTableSettings(Table);
// 또는 옵션과 함께 사용
const MyTable1 = withTableSettings({sortable: false})(Table);
```

### 옵션

| 이름       | 설명                               |       Type       | 기본값 |
| :--------- | :--------------------------------- | :--------------: | :-----: |
| width      | 설정 팝업 너비                     | `number` `"fit"` |         |
| sortable   | 정렬 설정 항목 활성화/비활성화     |    `boolean`     | `true`  |
| filterable | 필터링 설정 항목 활성화/비활성화   |    `boolean`     | `false` |

### ColumnMeta

| 이름              | 설명                                                               |   Type    | 기본값 |
| :---------------- | :----------------------------------------------------------------- | :-------: | :-----: |
| selectedByDefault | 설정에 열이 없는 경우 기본적으로 선택할지 여부                    | `boolean` | `true`  |
| selectedAlways    | 열을 항상 선택되도록 합니다. 가시성을 변경할 수 없습니다.       | `boolean` | `false` |

### 속성
GRAVITY_TRANSLATION_BLOCK_3_END

| 이름                       | 설명                                     |                           타입                           |
| :------------------------- | :--------------------------------------- | :------------------------------------------------------: |
| settingsPopupWidth         | `TableColumnSetup` 팝업 너비             |                     `number` `"fit"`                     |
| settings                   | 현재 설정                                |                   `TableSettingsData`                    |
| updateSettings             | 설정 업데이트 핸들러                     |       `(data: TableSettingsData) => Promise<void>`       |
| renderControls             | 사용자 정의 액션 렌더링 활성화           |                     `RenderControls`                     |
| settingsFilterPlaceholder  | 검색 값이 설정되지 않았을 때 컨트롤에 표시되는 텍스트 |                         `string`                         |
| settingsFilterEmptyMessage | 항목을 찾을 수 없을 때 표시되는 텍스트     |                         `string`                         |
| filterSettings             | 항목 필터링 함수                         | `(value: string, item: TableColumnSetupItem) => boolean` |

### TableSettingsData

```ts
type TableSettingsData = Array<{
  id: string;
  isSelected?: boolean;
}>;
```

### RenderControls

```ts
type RenderControls = (params: {
  DefaultApplyButton: React.ComponentType;
  onApply: () => void;
}) => React.ReactNode;
```

### 예시

```jsx
import {Table, withTableSettings} from '@gravity-ui/uikit/legacy';

const MyTable = withTableSettings({width: 100, sortable: false})(Table);
const data = [
  {id: 1, text: 'Hello'},
  {id: 2, text: 'World'},
];
const columns = [{id: 'id'}, {id: 'text'}];
const initialSettings = [
  {id: 'id', isSelected: false},
  {id: 'text', isSelected: true},
];

function SelectionTable() {
  const [settings, setSettings] = React.useState(initialSettings);

  return (
    <MyTable
      data={data}
      columns={columns}
      settings={settings}
      updateSettings={(settings) => {
        setSettings(settings);
        return Promise.resolve();
      }}
      renderControls={({DefaultApplyButton, onApply}) => (
        <Flex rowGap="spacing-1" direction="column">
          <Button
            view="outlined-warning"
            onClick={() => {
              onApply();
              setSettings(initialSettings);
            }}
          >
            Reset
          </Button>
          <DefaultApplyButton />
        </Flex>
      )}
    />
  );
}
```

## `withTableSorting` HOC와 함께 `Table` 사용하기

이 HOC는 열 정렬을 활성화합니다.

### ColumnMeta

| 이름             | 설명                                                                                                                                                    |                       타입                       | 기본값 |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------: | :-----: |
| defaultSortOrder | 기본 정렬 순서 설정                                                                                                                                     |                 `"asc"` `"desc"`                 |  `asc`  |
| sort             | 정렬 함수. 오름차순 정렬 값을 반환해야 합니다. `true`로 설정하면 셀 값이 비교되어 오름차순으로 정렬됩니다.                                                               | `boolean` `((itemA: any, itemB: any) => number)` |         |

### 속성

| 이름               | 설명                                                              |                 타입                  |
| :----------------- | :---------------------------------------------------------------- | :-----------------------------------: |
| defaultSortState   | 제어되지 않는 컴포넌트의 기본 정렬 상태                               |           `TableSortState`            |
| sortState          | 정렬 상태                                                           |           `TableSortState`            |
| onSortStateChange  | 정렬 상태 변경 핸들러                                               | `(sortState: TableSortState) => void` |
| disableDataSorting | 데이터 정렬을 비활성화합니다. `sortState` 및 `onSortStateChange`가 전달되면 기본값은 `true`입니다. |               `boolean`               |

`sortState` 및 `onSortStateChange` 속성이 누락된 경우, 정렬 상태는 컴포넌트 자체에 저장됩니다.

### TableSortState

```ts
type TableSortState = Array<{
  column: string;
  order: 'asc' | 'desc';
}>;
```

### 예시

```jsx
import {Table, withTableSorting} from '@gravity-ui/uikit/legacy';

const MyTable = withTableSorting(Table);
const data = [
  {id: 1, text: 'Hello', date: '2016-10-25'},
  {id: 2, text: 'World', date: '2020-08-15'},
];
const columns = [
  {id: 'id', meta: {sort: true}},
  {
    id: 'text',
    meta: {defaultSortOrder: 'desc', sort: (a, b) => Date.parse(a.date) - Date.parse(b.date)},
  },
];

const table = <MyTable data={data} columns={columns} />;
```