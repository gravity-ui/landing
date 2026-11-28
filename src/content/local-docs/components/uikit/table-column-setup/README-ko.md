`TableColumnSetup` 컴포넌트는 테이블 열의 표시 여부와 순서를 구성하기 위한 사용자 인터페이스를 제공합니다. 이 컴포넌트는 버튼을 표시하며, 이 버튼을 클릭하면 사용 가능한 열 목록이 있는 팝업이 열립니다. 사용자는 이 팝업에서 열을 표시하거나 숨길 수 있으며, 드래그 앤 드롭을 통해 열 순서를 변경할 수도 있습니다.

```tsx
import {TableColumnSetup} from '@gravity-ui/uikit/legacy';
```

이 컴포넌트는 레거시입니다. 새로운 기능은 [`@gravity-ui/table`](https://github.com/gravity-ui/table)을 사용하세요. v8 마이그레이션 가이드의 [테이블 및 TableColumnSetup 섹션](../../../../docs/migration-to-v8.md#table-and-tablecolumnsetup)을 참조하세요. `@gravity-ui/uikit/legacy`의 다른 모든 것과 마찬가지로, 이 컴포넌트도 패키지와 함께 다음의 선택적 피어 종속성을 설치해야 합니다: `@hello-pangea/dnd`, `react-window`, `react-virtualized-auto-sizer`. 엔트리 포인트는 이 모든 것을 로드하므로, 어떤 것을 가져오든 상관없습니다.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 정렬 가능한 열

`sortable` 속성을 `true`로 설정하여 드래그 앤 드롭 기능을 활성화하면 사용자가 열 순서를 변경할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 적용 모드

`hideApplyButton` 속성을 사용하여 변경 사항이 적용되는 시점을 제어합니다:

- `true` - 사용자가 열을 토글할 때 변경 사항이 즉시 적용됩니다.
- `false` - 사용자가 "적용" 버튼을 클릭할 때만 변경 사항이 적용됩니다.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 상태 표시

`showStatus` 속성을 활성화하여 스위처 버튼에 선택된 열 수를 표시합니다.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## 사용자 정의 스위처

`renderSwitcher` 속성을 사용하여 트리거 버튼을 사용자 정의합니다.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## 속성

| 이름            | 설명                                                     |                            타입                             | 기본값 |
| :-------------- | :-------------------------------------------------------------- | :---------------------------------------------------------: | :-----: |
| items           | 열 구성 항목 배열                             |                  `TableColumnSetupItem[]`                   |         |
| onUpdate        | 열 구성이 변경될 때 호출되는 콜백                |          `(items: TableColumnSetupItem[]) => void`          |         |
| disabled        | 스위처 버튼을 비활성화합니다                                    |                          `boolean`                          | `false` |
| sortable        | 열의 드래그 앤 드롭 정렬을 활성화합니다                        |                          `boolean`                          | `true`  |
| hideApplyButton | 변경 사항 적용 시점: 즉시 또는 "적용" 버튼을 통한 수동 적용 |                          `boolean`                          | `false` |
| showStatus      | 스위처 버튼에 선택된/총 열 수를 표시합니다           |                          `boolean`                          | `false` |
| popupWidth      | 팝업의 너비                                              |                      `number \| 'fit'`                      |         |
| popupPlacement  | 트리거에 상대적인 팝업 배치                                |    [`PopupPlacement`](../../Popup/README.md#properties)     |         |
| renderSwitcher  | 스위처 버튼에 대한 사용자 정의 렌더링 함수                  | `(props: SwitcherProps) => React.ReactElement \| undefined` |         |
| switcher        | **사용 중단됨.** 대신 `renderSwitcher`를 사용하세요.                    |              `React.ReactElement \| undefined`              |         |
| getItemTitle    | 항목 제목을 가져오는 함수                                      |      `(item: TableColumnSetupItem) => React.ReactNode`      |         |
| className       | 루트 요소에 대한 사용자 정의 CSS 클래스                           |                          `string`                           |         |

### TableColumnSetupItem

| 이름     | 설명                                       |        타입         | 기본값 |
| :------- | :------------------------------------------------ | :---------------------------------: | :-----: |
| id       | 컬럼의 고유 식별자                  |      `string`       |         |
| title    | 컬럼의 표시 제목                      |  `React.ReactNode`  |         |
| selected | 컬럼이 현재 표시되는지 여부           |      `boolean`      |         |
| required | 컬럼이 필수인지 여부 (숨길 수 없음) |      `boolean`      |         |
| sticky   | 컬럼의 고정 위치                 | `'left' \| 'right'` |         |

### SwitcherProps

| 이름      | 설명                            |                   타입                    |
| :-------- | :------------------------------------- | :---------------------------------------: |
| onClick   | 스위처의 클릭 이벤트 핸들러   |  `React.MouseEventHandler<HTMLElement>`   |
| onKeyDown | 스위처의 KeyDown 이벤트 핸들러 | `React.KeyboardEventHandler<HTMLElement>` |