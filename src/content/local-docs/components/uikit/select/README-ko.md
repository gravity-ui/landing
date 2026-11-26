`Select`는 사용자가 선택할 수 있는 옵션 목록을 제공하는 컨트롤입니다.

```tsx
import {Select} from '@gravity-ui/uikit';
```

## 옵션

선택할 옵션입니다.

### 옵션 정의

옵션을 객체 배열로 정의하거나 컴포넌트의 자식으로 정의할 수 있습니다. 첫 번째 접근 방식은 옵션에 복잡한 준비와 잠재적인 기억이 필요한 경우에 유용합니다. 두 번째 접근 방식은 옵션이 적고 구성에 복잡한 계산이 필요하지 않은 경우에 편리합니다.

#### 플랫 목록

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

#### 그룹화된 목록

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### 옵션에 데이터 저장

`option.data` 속성을 사용하여 각 옵션에 고유한 데이터를 정의하고 저장할 수 있습니다. 이는 `onUpdate` 콜백을 사용할 때 데이터를 보강해야 하거나, 예를 들어 `renderOption`으로 옵션을 그릴 때 유용할 수 있습니다.

## 여러 옵션 선택

다중 선택을 활성화하려면 `multiple` 속성을 사용하십시오. 기본값은 `false`입니다.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### 카운터

`hasCounter` 속성을 사용하여 선택한 항목의 카운터를 컴포넌트에 추가할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## 옵션 필터링

필터 섹션을 활성화하려면 `filterable` 속성을 사용하십시오. 기본값은 `false`입니다.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## 크기

기본 컨트롤 및 옵션 크기를 관리하려면 `size` 속성을 사용하십시오. 기본 크기는 `m`입니다.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## 컨트롤 너비

기본적으로 컨트롤 너비는 선택한 옵션의 콘텐츠 너비에 맞춰 늘어납니다. `width` 속성을 사용하여 관리할 수 있습니다.

`'max'`: 부모의 전체 너비로 늘어납니다.

`number`: 픽셀 단위로 너비를 적용합니다.

GRAVITY_TRANSLATION_BLOCK_13_END

## 팝업 너비

`popupWidth` 속성을 사용하여 팝업 너비를 관리할 수 있습니다. 사용 가능한 값은 다음과 같습니다.

`'fit'`: 컨트롤 너비를 적용합니다.

`number`: 픽셀 단위로 너비를 적용합니다.

기본 동작에 대한 참고 사항:

- 팝업 너비는 가장 넓은 옵션의 너비와 같지만 `90vw`보다 넓지 않습니다. 이는 [가상화](#virtualized-list)를 사용하는 경우에는 적용되지 않습니다.

- 좁은 옵션은 컨트롤 너비에 맞게 늘어납니다.

GRAVITY_TRANSLATION_BLOCK_14_END

### 가상화된 목록

많은 수의 옵션을 최적으로 표시하기 위해 `Select`에는 내장된 목록 가상화 도구가 있습니다. 가상화는 옵션 수의 임계값(`50`개 기본값)을 초과한 후에 활성화됩니다. 이 값은 `virtualizationThreshold` 속성을 사용하여 관리할 수 있습니다.

가상화를 사용할 때 팝업 요소에는 몇 가지 제한 사항이 적용됩니다.

- 팝업 너비는 더 이상 가장 긴 옵션의 길이에 맞춰 조정되지 않습니다.

- 팝업의 최소 너비는 컨트롤의 너비와 같거나, 컨트롤이 더 짧은 경우 `100px`입니다.

GRAVITY_TRANSLATION_BLOCK_15_END

## 고급 사용법

`Select`를 사용자 정의하는 데는 여러 가지 방법이 있습니다.

### 사용자 정의 컨트롤 렌더링

사용자 정의 컨트롤을 렌더링하려면 `renderControl` 속성을 사용하십시오.
참고: 기본 컨트롤을 사용할 때와 마찬가지로 일관된 동작을 활성화하려면 모든 인수를 노드로 전달해야 합니다.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### 사용자 정의 필터 섹션 렌더링

사용자 정의 필터 섹션을 렌더링하려면 `renderFilter` 속성을 사용하고 `filterable` 속성을 `true`로 설정하십시오.
참고: 기본 구성을 사용할 때와 마찬가지로 올바르게 작동하는 필터를 활성화하려면 모든 인수를 노드로 전달해야 합니다.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

### 사용자 정의 옵션 렌더링

사용자 정의 옵션을 렌더링하려면 `renderOption` 속성을 사용하십시오.

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

### 사용자 정의 선택된 옵션 렌더링

사용자 정의 선택된 옵션을 렌더링하려면 `renderSelectedOption` 속성을 사용하십시오.

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

### 높이가 다른 옵션 렌더링

옵션은 `size` 속성에 따라 고정 높이를 가집니다. 높이가 다른 옵션을 렌더링해야 하는 경우 `option.data` 속성을 사용할 수 있습니다. 이 속성은 옵션에 설정해야 하는 높이에 대한 정보를 저장하고, `getOptionHeight` 속성을 사용하여 이 값을 설정합니다.

GRAVITY_TRANSLATION_BLOCK_24_END

GRAVITY_TRANSLATION_BLOCK_25_END

### 사용자 정의 카운터 렌더링

사용자 정의 카운터를 렌더링하려면 `renderCounter` 속성을 사용하십시오. 카운터는 다중 선택이 활성화(`multiple={true}`)되고 `hasCounter={true}`일 때만 표시됩니다.

GRAVITY_TRANSLATION_BLOCK_26_END

GRAVITY_TRANSLATION_BLOCK_27_END

### 옵션 목록 렌더링

`renderPopup` 속성을 사용하면 옵션 목록의 콘텐츠를 제어할 수 있습니다. 표준 요소(필터, 목록)의 순서를 변경하거나, 숨기거나, 요소 사이에 사용자 정의 요소를 추가하거나, 앞에 또는 뒤에 추가할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_28_END

GRAVITY_TRANSLATION_BLOCK_29_END

### 오류

이 `Select` 상태는 잘못된 사용자 입력에 대한 것입니다. `Select` 모양을 변경하려면 `"invalid"` 값으로 `validationState` 속성을 사용하십시오. 선택적으로 `errorMessage` 속성을 통해 오류 메시지를 제공할 수 있습니다. 기본적으로 메시지 텍스트는 컴포넌트 외부에서 렌더링됩니다.
`errorPlacement` 속성을 사용하여 이를 변경할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_30_END

## 속성

| 이름                                                      | 설명                                                                                                                      | 타입                                     | 기본값                                                  |
| :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------- |
| className                                                 | 클래스 이름 제어                                                                                                                | `string`                                 |                                                          |
| defaultValue                                              | 제어되지 않는 상태에서 선택된 옵션을 나타내는 기본값                                                                           | `string[]`                               |                                                          |
| disabled                                                  | 사용자가 컨트롤을 사용할 수 없음을 표시                                                                                                                | `boolean`                                | `false`                                                  |
| [filterable](#filtering-options)                          | 선택 팝업에 필터 섹션이 있음을 표시                                                                                                    | `boolean`                                | `false`                                                  |
| filterOption                                              | 옵션과 필터를 비교하는 데 사용                                                                                               | `function`                               |                                                          |
| filterPlaceholder                                         | 기본 필터 입력 자리 표시자 텍스트                                                                                               | `string`                                 |                                                          |
| [getOptionHeight](#render-options-with-different-heights) | 사용자 정의 옵션의 높이를 설정하는 데 사용                                                                                    | `function`                               |                                                          |
| getOptionGroupHeight                                      | 사용자 정의 옵션 그룹의 높이를 설정하는 데 사용                                                                               | `function`                               |                                                          |
| hasClear                                                  | 선택된 옵션을 지우는 아이콘 표시를 활성화                                                                                                           | `boolean`                                | `false`                                                  |
| id                                                        | `id` HTML 속성                                                                                                              | `string`                                 |                                                          |
| label                                                     | 컨트롤 레이블                                                                                                                    | `string`                                 |                                                          |
| loading                                                   | 옵션 목록 끝에 로딩 항목을 추가합니다. 옵션 목록이 비어 있는 동안 지속적인 로딩 표시기처럼 작동합니다.  | `boolean`                                |                                                          |
| [multiple](#selecting-multiple-options)                   | 목록에서 여러 옵션을 선택할 수 있는지 여부를 표시                                                                       | `boolean`                                | `false`                                                  |
| name                                                      | 컨트롤 이름                                                                                                              | `string`                                 |                                                          |
| onBlur                                                    | 요소가 포커스를 잃을 때 호출되는 핸들러                                                                                                            | `function`                               |                                                          |
| filter                                                    | 제어된 필터 값                                                                                                          | `string`                                 | `''`                                                     |
| onFilterChange                                            | 필터 변경 후 매번 발생하는 이벤트                                                                                       | `function`                               |                                                          |
| onFocus                                                   | 요소가 포커스를 얻을 때 호출되는 핸들러                                                                                                              | `function`                               |                                                          |
| onLoadMore                                                | 로딩 표시기가 보일 때 발생하는 이벤트                                                                                    | `function`                               |                                                          |
| onOpenChange                                              | 팝업 표시 변경 후 매번 발생하는 이벤트                                                                                 | `function`                               |                                                          |
| onUpdate                                                  | 사용자가 `Select` 값을 변경하여 확정했을 때 발생하는 이벤트                                                          | `function`                               |                                                          |
| [options](#options)                                       | 선택할 옵션                                                                                                                | `(SelectOption \| SelectOptionGroup)[]`  |                                                          |
| pin                                                       | 컨트롤 테두리 보기                                                                                                              | `string`                                 | `'round-round'`                                          |
| placeholder                                               | 자리 표시자 텍스트                                                                                                                 | `string`                                 |                                                          |
| popupClassName                                            | 옵션 목록이 있는 팝업의 `className`                                                                                           | `string`                                 |                                                          |
| popupPlacement                                            | 팝업 배치                                                                                                                  | `PopupPlacement` `Array<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                | 팝업 너비                                                                                                                      | `number \| 'fit' \| 'outfit'`            | `'outfit'`                                               |
| qa                                                        | 테스트 ID 속성 (`data-qa`)                                                                                                    | `string`                                 |                                                          |
| [renderControl](#render-custom-control)                   | 사용자 정의 컨트롤 렌더링에 사용                                                                                                      | `function`                               |                                                          |
| [renderCounter](#rendering-custom-counter)                | 사용자 정의 카운터 렌더링에 사용. [hasCounter](#counter)와 함께 작동합니다.                                                             | `function`                               |                                                          |
| renderEmptyOptions                                        | 빈 옵션 목록에 대한 노드를 렌더링하는 데 사용                                                                                   | `function`                               |                                                          |
| [renderFilter](#render-custom-filter-section)             | 사용자 정의 필터 섹션 렌더링에 사용                                                                                               | `function`                               |                                                          |
| [renderOption](#render-custom-options)                    | 사용자 정의 옵션 렌더링에 사용                                                                                                      | `function`                               |                                                          |
| renderOptionGroup                                         | 사용자 정의 옵션 그룹 렌더링에 사용                                                                                                | `function`                               |                                                          |
| [renderSelectedOption](#render-custom-selected-options)   | 사용자 정의 선택된 옵션 렌더링에 사용                                                                                             | `function`                               |                                                          |
| [renderPopup](#rendering-options-list)                    | 옵션 목록 콘텐츠 렌더링에 사용                                                                                              | `function`                               |                                                          |
| [size](#size)                                             | 컨트롤 / 옵션 크기                                                                                                           | `string`                                 | `'m'`                                                    |
| value                                                     | 선택된 옵션을 나타내는 값                                                                                                                          | `string[]`                               |                                                          |
| view                                                      | 컨트롤 보기                                                                                                                     | `string`                                 | `'normal'`                                               |
| [virtualizationThreshold](#virtualized-list)              | 가상화가 활성화되는 옵션 수 임계값                                                                                                    | `number`                                 | `50`                                                     |
| [width](#control-width)                                   | 컨트롤 너비                                                                                                                    | `string \| number`                       | `undefined`                                              |
| errorMessage                                              | 오류 텍스트                                                                                                                       | `string`                                 |                                                          |
| errorPlacement                                            | 오류 위치                                                                                                                   | `outside` `inside`                       | `outside`                                                |
| validationState                                           | 유효성 검사 상태                                                                                                                 | `"invalid"`                              |                                                          |
| [hasCounter](#counter)                                    | 선택된 옵션 수를 표시합니다. 카운터는 [multiple](#selecting-multiple-options) 선택이 활성화된 경우에만 나타납니다. | `boolean`                                |                                                          |

## CSS API

| 이름                             | 설명                                   |
| :------------------------------- | :-------------------------------------------- |
| `--g-select-focus-outline-color` | 포커스 시 윤곽선 색상 (기본값 없음) |