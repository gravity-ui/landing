`TableColumnSetup` 컴포넌트는 테이블 컬럼의 표시 여부와 순서를 설정하는 사용자 인터페이스를 제공합니다. 이 컴포넌트는 버튼을 표시하며, 이 버튼을 클릭하면 사용자가 컬럼을 표시/숨기거나 드래그 앤 드롭으로 순서를 변경할 수 있는 사용 가능한 컬럼 목록이 있는 팝업이 열립니다.

```tsx
import {TableColumnSetup} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## 정렬 가능한 컬럼

`sortable` 속성을 `true`로 설정하여 드래그 앤 드롭 기능을 활성화하면 사용자가 컬럼 순서를 재정렬할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## 적용 모드

`hideApplyButton` 속성을 사용하여 변경 사항이 적용되는 시점을 제어합니다.

- `true` - 사용자가 컬럼을 토글할 때 변경 사항이 즉시 적용됩니다.
- `false` - 사용자가 '적용' 버튼을 클릭할 때만 변경 사항이 적용됩니다.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## 상태 표시

`showStatus` 속성을 활성화하여 스위처 버튼에 선택된 컬럼 수를 표시합니다.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## 사용자 정의 스위처

`renderSwitcher` 속성을 사용하여 트리거 버튼을 사용자 정의합니다.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## 속성

| 이름            | 설명                                                     |                            타입                             | 기본값 |
| :-------------- | :-------------------------------------------------------------- | :---------------------------------------------------------: | :-----: |
| items           | 컬럼 설정 항목 배열                                                            |                  `TableColumnSetupItem[]`                   |         |
| onUpdate        | 컬럼 설정이 변경될 때 호출되는 콜백                                               |          `(items: TableColumnSetupItem[]) => void`          |         |
| disabled        | 스위처 버튼을 비활성화합니다.                                                    |                          `boolean`                          | `false` |
| sortable        | 컬럼의 드래그 앤 드롭 정렬을 활성화합니다.                                             |                          `boolean`                          | `true`  |
| hideApplyButton | 변경 사항 적용 시점: 즉시 또는 '적용' 버튼을 통한 수동 적용                                |                          `boolean`                          | `false` |
| showStatus      | 스위처 버튼에 선택된/총 컬럼 수를 표시합니다.                                           |                          `boolean`                          | `false` |
| popupWidth      | 팝업의 너비                                                              |                      `number \| 'fit'`                      |         |
| popupPlacement  | 트리거에 대한 팝업 배치                                                          |      [`PopupPlacement`](../Popup/README.md#properties)      |         |
| renderSwitcher  | 스위처 버튼에 대한 사용자 정의 렌더링 함수                                                 | `(props: SwitcherProps) => React.ReactElement \| undefined` |         |
| switcher        | **사용 중단됨.** `renderSwitcher`를 대신 사용하세요.                                     |              `React.ReactElement \| undefined`              |         |
| getItemTitle    | 항목 제목을 가져오는 함수                                                          |      `(item: TableColumnSetupItem) => React.ReactNode`      |         |
| className       | 루트 요소에 대한 사용자 정의 CSS 클래스                                                  |                          `string`                           |         |

### TableColumnSetupItem

| 이름     | 설명                                       |        타입         | 기본값 |
| :------- | :------------------------------------------------ | :-----------------: | :-----: |
| id       | 컬럼의 고유 식별자                                        |      `string`       |         |
| title    | 컬럼의 표시 제목                                        |  `React.ReactNode`  |         |
| selected | 컬럼이 현재 표시되는지 여부                                      |      `boolean`      |         |
| required | 컬럼이 필수인지 여부 (숨길 수 없음)                                   |      `boolean`      |         |
| sticky   | 컬럼의 고정 위치                                        |      `'left' \| 'right'`      |         |

### SwitcherProps
GRAVITY_TRANSLATION_BLOCK_10_END

| 이름      | 설명                                   |                   타입                    |
| :-------- | :------------------------------------- | :---------------------------------------: |
| onClick   | 스위치에 대한 클릭 이벤트 핸들러       |  `React.MouseEventHandler<HTMLElement>`   |
| onKeyDown | 스위치에 대한 KeyDown 이벤트 핸들러    | `React.KeyboardEventHandler<HTMLElement>` |