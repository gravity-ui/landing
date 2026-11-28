<!--GITHUB_BLOCK-->

# DatePicker

<!--/GITHUB_BLOCK-->

```tsx
import {DatePicker} from '@gravity-ui/date-components';
```

`DatePicker`는 React 애플리케이션에서 직관적인 날짜 선택 기능을 제공하도록 설계된 정교하고 가벼우며 완벽하게 사용자 정의 가능한 컴포넌트입니다. 사용자 경험과 통합 용이성을 염두에 두고 구축되었으며, 폼, 모달 또는 날짜 입력을 필요로 하는 모든 UI 요소에 완벽하게 통합됩니다. `value` 속성을 설정하면 제어 가능합니다. 또는 값을 설정하지 않으면 제어되지 않지만, 이 경우 선택적 속성인 `defaultValue`로 초기 상태를 관리할 수 있습니다. 컴포넌트는 기본적으로 제어되지 않습니다.

### 유용한 추가 기능

올바른 형식으로 날짜를 설정하려면 [Date Utils 라이브러리](https://gravity-ui.com/libraries/date-utils)에서 추가 도우미를 포함해야 할 수 있습니다.

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

## 모양

`DatePicker`의 모양은 `size`, `view`, `pin` 속성으로 제어됩니다.

### 크기

`DatePicker`의 크기를 제어하려면 `size` 속성을 사용하십시오. 기본 크기는 `m`입니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker size="s" />
<DatePicker size="m" />
<DatePicker size="l" />
<DatePicker size="xl" />
`}
>
    <DateComponents.DatePicker size="s" />
    <DateComponents.DatePicker size="m" />
    <DateComponents.DatePicker size="l" />
    <DateComponents.DatePicker size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker size="s" />
<DatePicker size="m" />
<DatePicker size="l" />
<DatePicker size="xl" />
```

<!--/GITHUB_BLOCK-->

### 보기

`normal` - `DatePicker`의 기본 보기 (기본값).

<!--LANDING_BLOCK
<ExampleBlock code={`<DatePicker />`}>
    <DateComponents.DatePicker />
</ExampleBlock>
LANDING_BLOCK-->

`clear` - 테두리가 보이지 않는 `DatePicker` 보기 (사용자 정의 래퍼와 함께 사용할 수 있음)

<!--LANDING_BLOCK
<ExampleBlock code={`<DatePicker view="clear" />`}>
    <DateComponents.DatePicker view="clear" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker view="normal" />
<DatePicker view="clear" />
```

<!--/GITHUB_BLOCK-->

### 핀

`pin` 속성을 사용하면 오른쪽 및 왼쪽 가장자리의 모양을 제어할 수 있으며 일반적으로 여러 컨트롤을 단일 단위로 결합하는 데 사용됩니다.
`pin` 속성의 값은 대시로 구분된 왼쪽 및 가장자리 스타일 이름으로 구성됩니다. 예: `"round-brick"`.
가장자리 스타일은 `round` (기본값), `circle`, `brick`, `clear`입니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker pin="round-brick" />
<DatePicker pin="brick-brick" />
<DatePicker pin="brick-round" />
`}
>
    <DateComponents.DatePicker pin="round-brick" />
    <DateComponents.DatePicker pin="brick-brick" />
    <DateComponents.DatePicker pin="brick-round" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker pin="round-brick" />
<DatePicker pin="brick-brick" />
<DatePicker pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## 값

### 최소 및 최대 값

`minValue` 속성을 사용하면 사용자가 입력할 수 있는 가장 빠른 날짜와 시간을 지정할 수 있습니다. 반대로 `maxValue` 속성은 입력할 수 있는 가장 늦은 날짜와 시간을 지정합니다. 이 범위 밖의 값을 입력하면 컴포넌트의 보기가 잘못된 유효성 검사 상태와 같이 변경됩니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker minValue={dateTimeParse('01.01.2024')} placeholder={"minValue: '01.01.2024'"}/>
<DatePicker maxValue={dateTimeParse('01.01.2025')} placeholder={"maxValue: '01.01.2025'"}/>
`}
>
    <DateComponentsExamples.DatePickerExample minValue={'01.01.2024'} placeholder={"minValue: '01.01.2024'"} />
    <DateComponentsExamples.DatePickerExample maxValue={'01.01.2025'} placeholder={"maxValue: '01.01.2025'"} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx

<DatePicker minValue={dateTimeParse('01.01.2024')} />
<DatePicker maxValue={dateTimeParse('01.01.2025')} />
```

<!--/GITHUB_BLOCK-->

## 상태

### 비활성화됨

사용자가 컴포넌트와 상호 작용할 수 없도록 하려는 `DatePicker`의 상태입니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker disabled={true} defaultValue={dateTime()} />
`}
>
    <DateComponentsExamples.DatePickerExample disabled={true} defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker disabled defaultValue={dateTime()} />
```

<!--/GITHUB_BLOCK-->

### 읽기 전용

`readOnly`는 true로 설정하면 `DatePicker` 컴포넌트를 사용자가 수정할 수 없게 만드는 부울 속성입니다. 즉, 입력란은 현재 값을 표시하지만 사용자는 이를 변경할 수 없습니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker readOnly defaultValue={dateTimeParse(new Date())} />
`}
>
    <DateComponentsExamples.DatePickerExample readOnly defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker readOnly defaultValue={dateTime()} />
```

<!--/GITHUB_BLOCK-->

### 오류

사용자 입력이 잘못되었음을 나타내려는 `DatePicker`의 상태입니다. `DatePicker` 모양을 변경하려면 `"invalid"` 값을 가진 `validationState` 속성을 사용하십시오. 선택적 메시지 텍스트는 `errorMessage` 속성을 통해 추가할 수 있습니다. 메시지 텍스트는 컴포넌트 아래에 렌더링됩니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker errorMessage="Error message" validationState="invalid" />
<DatePicker validationState="invalid" />
`}
>
    <DateComponents.DatePicker errorMessage="Error message" validationState="invalid" />
    <DateComponents.DatePicker validationState="invalid" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker errorMessage="Error message" validationState="invalid" />
<DatePicker validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## 추가 콘텐츠

### 자리 표시자

이 속성을 사용하면 입력 필드에 예상되는 값에 대한 간략한 힌트를 제공할 수 있습니다. 이 힌트는 사용자가 값을 입력하기 전에 입력 필드 내에 표시되며, 텍스트가 입력되면 사라집니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker placeholder="Placeholder" />
`}
>
    <DateComponents.DatePicker placeholder='Placeholder' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker placeholder="Placeholder" />
```

<!--/GITHUB_BLOCK-->

### 레이블

필드의 왼쪽 부분에 레이블을 배치할 수 있습니다. 레이블은 `DatePicker` 전체 공간의 절반 이상을 차지할 수 없습니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker label="Label" />
<DatePicker label="Very long label with huge amount of symbols" />
`}
>
    <DateComponents.DatePicker label="Label" />
    <DateComponents.DatePicker label="Very long label with huge amount of symbols" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker label="Label" />
```

<!--/GITHUB_BLOCK-->

### 지우기 버튼

`hasClear`는 부울 속성으로, 사용자에게 입력 필드의 내용을 빠르게 지울 수 있는 기능을 제공합니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<DatePicker hasClear />`}
>
    <DateComponents.DatePicker
        hasClear
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker hasClear />
```

<!--/GITHUB_BLOCK-->

## 형식

`format` 속성은 `DatePicker` 컴포넌트가 수락하고 표시할 날짜 및 시간 형식을 정의하는 문자열입니다. 이 속성은 날짜 및 시간이 사용자에게 시각적으로 표시되는 방식과 사용자의 입력이 어떻게 형식화되어야 하는지를 결정합니다. [사용 가능한 형식](https://day.js.org/docs/en/display/format)

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker format='LL' />
`}
>
    <DateComponents.DatePicker format='LL' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker format="LL" />
```

<!--/GITHUB_BLOCK-->

### 사용자 정의 날짜 파서

`parseDateFromString` 속성을 통해 사용자 정의 파서 함수를 제공하여 붙여넣은 날짜 문자열을 처리할 수 있습니다. 이는 특정 날짜 형식을 지원하거나 기본 동작과 다른 사용자 정의 파싱 로직이 필요할 때 유용합니다.

<!--GITHUB_BLOCK-->

```tsx
import {dateTime} from '@gravity-ui/date-utils';

const customParser = (dateStr: string, format: string, timeZone?: string) => {
  // Custom parsing logic
  // For example, handle DD/MM/YYYY format specifically
  if (dateStr.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
    const [day, month, year] = dateStr.split('/');
    return dateTime({input: `${year}-${month}-${day}`, timeZone});
  }
  // Fallback to default parsing
  return dateTime({input: dateStr, format, timeZone});
};

<DatePicker parseDateFromString={customParser} />;
```

<!--/GITHUB_BLOCK-->

## 시간대

`timeZone`은 입력란의 값에 대한 시간대를 설정하는 속성입니다. [시간대에 대해 자세히 알아보기](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## 사용자 정의

`DatePicker` 내부에 사용자 정의 달력 컴포넌트를 사용하려면 달력과 유사한 속성을 가진 `children`으로 전달할 수 있습니다.

<!--LANDING_BLOCK
[Learn more about calendar](https://gravity-ui.com/components/date-components/calendar)
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about calendar](https://github.com/gravity-ui/date-components/blob/main/src/components/Calendar/README.md)

<!--/GITHUB_BLOCK-->

## 속성

| 이름                           | 설명                                                                                                                                       |                               타입                               |          기본값          |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------: | :-----------------------: |
| aria-describedby               | 컨트롤의 `aria-describedby`. 객체를 설명하는 요소(들)를 식별합니다. 속성                                                                    |                               `string`                               |                           |
| aria-details                   | 컨트롤의 `aria-details`. 객체에 대한 상세하고 확장된 설명을 제공하는 요소(들)를 식별합니다. 속성                                                 |                               `string`                               |                           |
| aria-label                     | 컨트롤의 `aria-label`. 현재 요소를 레이블링하는 문자열 값을 정의합니다. 속성                                                                   |                               `string`                               |                           |
| aria-labelledby                | 컨트롤의 `aria-labelledby`. 현재 요소를 레이블링하는 요소(들)를 식별합니다. 속성                                                               |                               `string`                               |                           |
| autoFocus                      | 컨트롤의 `autofocus`. 요소가 렌더링 시 포커스를 받아야 하는지 여부입니다. 속성                                                                  |                              `boolean`                               |                           |
| className                      | 컨트롤의 래퍼 클래스 이름                                                                                                                  |                               `string`                               |                           |
| [defaultValue](#datepicker)    | 제어되지 않는 컴포넌트의 초기 값을 설정합니다.                                                                                             |                              `DateTime`                              |                           |
| [disabled](#disabled)          | 사용자가 컨트롤과 상호작용할 수 없음을 나타냅니다.                                                                                             |                              `boolean`                               |          `false`          |
| [errorMessage](#error)         | 오류 텍스트                                                                                                                                |                             `ReactNode`                              |                           |
| [format](#format)              | 입력 필드에 렌더링될 때 날짜의 형식입니다. [사용 가능한 형식](https://day.js.org/docs/en/display/format)                                        |                               `string`                               |                           |
| [hasClear](#clear-button)      | 컨트롤 값을 지우는 아이콘을 표시합니다.                                                                                                    |                              `boolean`                               |          `false`          |
| id                             | 컨트롤의 `id` 속성                                                                                                                         |                               `string`                               |                           |
| isDateUnavailable              | 달력의 각 날짜에 대해 호출되는 콜백입니다. true를 반환하면 해당 날짜를 사용할 수 없습니다.                                                       |                   `((date: DateTime) => boolean)`                    |                           |
| [label](#label)                | 입력 노드 왼쪽에 렌더링되는 도움말 텍스트                                                                                                   |                               `string`                               |                           |
| [maxValue](#min-and-max-value) | 사용자가 선택할 수 있는 최대 허용 날짜입니다.                                                                                                |                              `DateTime`                              |                           |
| [minValue](#min-and-max-value) | 사용자가 선택할 수 있는 최소 허용 날짜입니다.                                                                                                |                              `DateTime`                              |                           |
| onBlur                         | 컨트롤이 포커스를 잃었을 때 발생합니다. 포커스 이벤트를 콜백의 인수로 제공합니다.                                                              |            `((e: FocusEvent<Element, Element>) => void)`             |                           |
| onFocus                        | 컨트롤이 포커스를 얻었을 때 발생합니다. 포커스 이벤트를 콜백의 인수로 제공합니다.                                                              |            `((e: FocusEvent<Element, Element>) => void)`             |                           |
| onKeyDown                      | 키가 눌렸을 때 발생합니다. 키보드 이벤트를 콜백의 인수로 제공합니다.                                                                          |               `((e: KeyboardEvent<Element>) => void)`                |                           |
| onKeyUp                        | 키가 떼어졌을 때 발생합니다. 키보드 이벤트를 콜백의 인수로 제공합니다.                                                                        |               `((e: KeyboardEvent<Element>) => void)`                |                           |
| onUpdate                       | 사용자가 값을 변경했을 때 발생합니다. 새 값을 콜백의 인수로 제공합니다.                                                                       |                 `((value: DateTime \| null) => void`                 |                           |
| parseDateFromString            | 붙여넣은 날짜 문자열을 파싱하기 위한 사용자 지정 파서 함수입니다. 제공되지 않으면 기본 파서가 사용됩니다.                                           | `((dateStr: string, format: string, timeZone?: string) => DateTime)` |                           |
| [pin](#pin)                    | 모서리 둥글기                                                                                                                              |                            `TextInputPin`                            |      `'round-round'`      |
| [placeholder](#placeholder)    | 값이 설정되지 않았을 때 컨트롤에 나타나는 텍스트                                                                                              |                               `string`                               |                           |
| placeholderValue               | 사용자가 처음 상호작용할 때 각 세그먼트의 기본값을 제어하는 자리 표시자 날짜입니다.                                                              |                              `DateTime`                              | `today's date at midnigh` |
| [readOnly](#readonly)          | 컴포넌트의 값이 변경 불가능한지 여부입니다.                                                                                                |                              `boolean`                               |          `false`          |
| [size](#size)                  | 컨트롤의 크기                                                                                                                              |                       `"s"` `"m"` `"l"` `"xl"`                       |           `"m"`           |
| style                          | 요소에 인라인 스타일을 설정합니다.                                                                                                         |                           `CSSProperties`                            |                           |
| [timeZone](#time-zone)         | 시간대를 설정합니다. [시간대에 대해 자세히 알아보기](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)                       |                               `string`                               |                           |
| [validationState](#error)      | 유효성 검사 상태                                                                                                                           |                             `"invalid"`                              |                           |
| [value](#datepicker)           | 컨트롤의 값                                                                                                                                |                          `DateTime` `null`                           |                           |
| [view](#view)                  | 컨트롤의 보기                                                                                                                              |                         `"normal"` `"clear"`                         |        `"normal"`         |
