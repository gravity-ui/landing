`DateField` 컴포넌트는 React 애플리케이션에서 날짜 입력을 위해 특별히 설계된 다재다능하고 편리한 입력 필드입니다. 직관적인 인터페이스와 쉬운 통합으로 이벤트 스케줄러, 예약 시스템 또는 데이터 기반 보고서와 같이 날짜 또는 시간 입력이 필요한 모든 양식에 적합합니다. `value` 속성을 설정하면 제어 가능합니다. 또는 값을 설정하지 않으면 제어되지 않지만, 이 경우 `defaultValue` 속성을 사용하여 초기 상태를 관리할 수 있습니다. 기본적으로 컴포넌트는 제어되지 않습니다.

## 유용한 추가 기능

올바른 형식으로 날짜를 설정하려면 [Date Utils 라이브러리](https://gravity-ui.com/libraries/date-utils)에서 추가 도우미를 포함해야 할 수 있습니다.

```tsx
import {dateTimeParse} from '@gravity-ui/date-utils';
```

## 모양

`DateField`의 모양은 `size`, `view` 및 `pin` 속성으로 제어됩니다.

### 크기

`DateField`의 크기를 제어하려면 `size` 속성을 사용하십시오. 기본 크기는 `m`입니다.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### 보기

`normal` - `DateField`의 기본 보기 (기본값).

GRAVITY_TRANSLATION_BLOCK_2_END

`clear` - 테두리가 보이지 않는 `DateField` 보기 (사용자 정의 래퍼와 함께 사용할 수 있음)

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### 핀

`pin` 속성을 사용하면 오른쪽 및 왼쪽 가장자리의 모양을 제어할 수 있으며 일반적으로 여러 컨트롤을 단일 단위로 결합하는 데 사용됩니다.
`pin` 속성의 값은 대시로 구분된 왼쪽 및 오른쪽 가장자리 스타일 이름으로 구성됩니다. 예: `"round-brick"`.
가장자리 스타일은 다음과 같습니다: `round` (기본값), `circle`, `brick`, `clear`.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 값

### 최소 및 최대 값

`minValue` 속성을 사용하면 사용자가 입력할 수 있는 가장 이른 날짜와 시간을 지정할 수 있습니다. 반대로 `maxValue` 속성은 입력할 수 있는 가장 늦은 날짜와 시간을 지정합니다. 이 범위를 벗어나는 값을 입력하면 컴포넌트의 보기가 잘못된 유효성 검사 상태와 같이 변경됩니다.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## 상태

### 비활성화됨

사용자가 컴포넌트와 상호 작용할 수 없도록 하려는 `DateField`의 상태입니다.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

### 읽기 전용

`readOnly`는 true로 설정하면 `DateField` 컴포넌트를 사용자가 수정할 수 없도록 만드는 부울 속성입니다. 즉, 입력은 현재 값을 표시하지만 사용자는 이를 변경할 수 없습니다.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### 오류

사용자 입력이 잘못되었음을 나타내려는 `DateField`의 상태입니다. `DateField` 모양을 변경하려면 `"invalid"` 값을 가진 `validationState` 속성을 사용하십시오. 선택적 메시지 텍스트는 `errorMessage` 속성을 통해 추가할 수 있습니다. 메시지 텍스트는 컴포넌트 아래에 렌더링됩니다.

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

## 추가 콘텐츠

### 자리 표시자

이 속성을 사용하면 입력 필드에 예상되는 값을 설명하는 짧은 힌트를 제공할 수 있습니다. 이 힌트는 사용자가 값을 입력하기 전에 입력 필드 내에 표시되며 텍스트 입력 시 사라집니다.

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

### 레이블

필드의 왼쪽 부분에 레이블을 배치할 수 있습니다. 레이블은 `DateField` 전체 공간의 절반 이상을 차지할 수 없습니다.

GRAVITY_TRANSLATION_BLOCK_17_END

GRAVITY_TRANSLATION_BLOCK_18_END

### 지우기 버튼

`hasClear`는 부울 속성으로, 사용자에게 입력 필드의 내용을 빠르게 지울 수 있는 기능을 제공합니다.

GRAVITY_TRANSLATION_BLOCK_19_END

GRAVITY_TRANSLATION_BLOCK_20_END

### 시작 콘텐츠

필드의 시작 부분에 콘텐츠를 추가할 수 있습니다. 모든 다른 컴포넌트 앞에 배치됩니다.

GRAVITY_TRANSLATION_BLOCK_21_END

GRAVITY_TRANSLATION_BLOCK_22_END

### 끝 콘텐츠

필드의 끝 부분에 콘텐츠를 추가할 수 있습니다. 모든 다른 컴포넌트 뒤에 배치됩니다.

GRAVITY_TRANSLATION_BLOCK_23_END

GRAVITY_TRANSLATION_BLOCK_24_END

## 형식

`format` 속성은 `DateField` 컴포넌트가 수락하고 표시할 날짜 및 시간 형식을 정의하는 문자열입니다. 이 속성은 날짜 및 시간이 사용자에게 시각적으로 표시되는 방식과 사용자의 입력 형식이 어떻게 예상되는지를 결정합니다. [사용 가능한 형식](https://day.js.org/docs/en/display/format)

GRAVITY_TRANSLATION_BLOCK_25_END

GRAVITY_TRANSLATION_BLOCK_26_END

### 사용자 정의 날짜 파서

`parseDateFromString` 속성을 통해 붙여넣은 날짜 문자열을 처리하기 위한 사용자 정의 파서 함수를 제공할 수 있습니다. 이는 기본 동작과 다른 특정 날짜 형식 또는 사용자 정의 파싱 로직을 지원해야 하는 경우 유용합니다.

GRAVITY_TRANSLATION_BLOCK_27_END

## 시간대

`timeZone`은 입력 값의 시간대를 설정하는 속성입니다. [시간대에 대해 자세히 알아보기](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## 속성

| 이름                | 설명                                                                                                                 | 타입                                       | 기본값           |
| :------------------ | :------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------: | :---------------: |
| aria-describedby    | 컨트롤의 `aria-describedby` 속성                                                                                     |                   `string`                    |                   |
| aria-details        | 컨트롤의 `aria-details` 속성                                                                                         |                   `string`                    |                   |
| aria-label          | 컨트롤의 `aria-label` 속성                                                                                           |                   `string`                    |                   |
| aria-labelledby     | 컨트롤의 `aria-labelledby` 속성                                                                                      |                   `string`                    |                   |
| autoFocus           | 컨트롤의 `autofocus` 속성                                                                                            |                  `boolean`                  |                   |
| className           | 컨트롤의 래퍼 클래스 이름                                                                                            |                   `string`                    |                   |
| defaultValue        | 제어되지 않는 컴포넌트의 초기 값을 설정합니다.                                                                         |                  `DateTime`                   |                   |
| disabled            | 사용자가 컨트롤과 상호 작용할 수 없음을 나타냅니다.                                                                    |                  `boolean`                  |       `false`       |
| errorMessage        | 오류 텍스트                                                                                                          |                 `ReactNode`                 |                   |
| format              | 입력 필드에 표시될 날짜 형식. [사용 가능한 형식](https://day.js.org/docs/en/display/format)                             |                   `string`                    |                   |
| hasClear            | 컨트롤의 값을 지우는 아이콘을 표시합니다.                                                                             |                  `boolean`                  |       `false`       |
| id                  | 컨트롤의 `id` 속성                                                                                                   |                   `string`                    |                   |
| isDateUnavailable   | 달력의 각 날짜에 대해 호출되는 콜백입니다. true를 반환하면 해당 날짜를 사용할 수 없습니다.                               |             `((date: DateTime) => boolean)`             |                   |
| label               | 입력 노드 왼쪽에 렌더링되는 도움말 텍스트                                                                               |                   `string`                    |                   |
| startContent        | 레이블과 입력 앞에 렌더링되는 사용자 노드                                                                               |               `React.ReactNode`               |                   |
| maxValue            | 사용자가 선택할 수 있는 최대 허용 날짜입니다.                                                                          |                  `DateTime`                   |                   |
| minValue            | 사용자가 선택할 수 있는 최소 허용 날짜입니다.                                                                          |                  `DateTime`                   |                   |
| onBlur              | 컨트롤이 포커스를 잃었을 때 발생합니다. 포커스 이벤트를 콜백 인수로 제공합니다.                                         |       `((e: FocusEvent<Element, Element>) => void)`       |                   |
| onFocus             | 컨트롤이 포커스를 얻었을 때 발생합니다. 포커스 이벤트를 콜백 인수로 제공합니다.                                         |       `((e: FocusEvent<Element, Element>) => void)`       |                   |
| onKeyDown           | 키가 눌렸을 때 발생합니다. 키보드 이벤트를 콜백 인수로 제공합니다.                                                     |            `((e: KeyboardEvent<Element>) => void)`            |                   |
| onKeyUp             | 키가 릴리스되었을 때 발생합니다. 키보드 이벤트를 콜백 인수로 제공합니다.                                                 |            `((e: KeyboardEvent<Element>) => void)`            |                   |
| onUpdate            | 사용자가 값을 변경했을 때 발생합니다. 새 값을 콜백 인수로 제공합니다.                                                  |             `((value: DateTime \| null) => void`             |                   |
| parseDateFromString | 붙여넣은 날짜 문자열을 파싱하기 위한 사용자 지정 파서 함수입니다. 제공되지 않으면 기본 파서가 사용됩니다.                   | `((dateStr: string, format: string, timeZone?: string) => DateTime)` |                   |
| pin                 | 모서리 둥글기                                                                                                        |                   `string`                    |     `'round-round'`     |
| placeholder         | 값이 설정되지 않았을 때 컨트롤에 나타나는 텍스트                                                                        |                   `string`                    |                   |
| placeholderValue    | 사용자가 처음 상호 작용할 때 각 세그먼트의 기본값을 제어하는 자리 표시자 날짜입니다.                                     |                  `DateTime`                   | `오늘 날짜 자정` |
| readOnly            | 컴포넌트의 값이 변경 불가능한지 여부입니다.                                                                            |                  `boolean`                  |       `false`       |
| endContent          | 입력 노드와 지우기 버튼 뒤에 렌더링되는 사용자 노드                                                                      |               `React.ReactNode`               |                   |
| size                | 컨트롤의 크기                                                                                                        |                 `"s"` `"m"` `"l"` `"xl"`                  |        `"m"`        |
| style               | 요소에 인라인 스타일을 설정합니다.                                                                                   |                 `CSSProperties`                 |                   |
| timeZone            | 시간대를 설정합니다. [시간대에 대해 자세히 알아보기](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                   `string`                    |                   |
| validationState     | 유효성 검사 상태                                                                                                     |                 `"invalid"`                 |                   |
| value               | 컨트롤의 값                                                                                                          |               `DateTime` `null`               |                   |
| view                | 컨트롤의 보기                                                                                                        |                `"normal"` `"clear"`                 |      `"normal"`       |