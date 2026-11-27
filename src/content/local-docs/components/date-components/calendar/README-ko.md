<!--GITHUB_BLOCK-->

# Calendar

<!--/GITHUB_BLOCK-->

```tsx
import {Calendar} from '@gravity-ui/date-components';
```

`Calendar`는 React 애플리케이션을 위한 유연하고 사용자 친화적인 달력 컴포넌트입니다. 사용자가 날짜를 쉽게 보고, 선택하고, 관리할 수 있도록 합니다. 이벤트 예약, 예약 시스템 및 날짜 선택이 필수적인 모든 애플리케이션에 이상적입니다. `value` 속성을 설정하면 제어할 수 있습니다. 또는 값을 설정하지 않으면 제어되지 않지만, 이 경우 선택적 속성인 `defaultValue`로 초기 상태를 관리할 수 있습니다. 컴포넌트는 기본적으로 제어되지 않습니다.

## 유용한 추가 기능

날짜를 올바른 형식으로 설정하려면 [Date Utils 라이브러리](https://gravity-ui.com/libraries/date-utils)에서 추가 도우미를 포함해야 할 수 있습니다.

```tsx
import {dateTimeParse} from '@gravity-ui/date-utils';
```

## 크기

`Calendar`의 크기를 제어하려면 `size` 속성을 사용하세요. 기본 크기는 `m`입니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar size="m" />
<Calendar size="l" />
<Calendar size="xl" />
`}
>
    <DateComponents.Calendar size="m" />
    <DateComponents.Calendar size="l" />
    <DateComponents.Calendar size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar size="m" />
<Calendar size="l" />
<Calendar size="xl" />
```

<!--/GITHUB_BLOCK-->

## 값

### 최소 및 최대 값

`minValue` 속성을 사용하면 사용자가 입력할 수 있는 가장 빠른 날짜와 시간을 지정할 수 있습니다. 반대로 `maxValue` 속성은 입력할 수 있는 가장 늦은 날짜와 시간을 지정합니다. 다른 모든 값은 사용자에게 비활성화됩니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar minValue={dateTimeParse('01.01.2024')} maxValue={dateTimeParse('01.01.2025')} />
`}
>
    <DateComponentsExamples.CalendarExample minValue={'01.01.2024'} maxValue={'01.01.2025'}/>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar minValue={dateTimeParse('01.01.2024')} maxValue={dateTimeParse('01.01.2025')} />
```

<!--/GITHUB_BLOCK-->

## 모드

`Calendar`가 표시해야 하는 시간 간격을 정의합니다. `mode`를 사용하면 제어된 방식으로 선택할 수 있습니다. 제어되지 않는 방식의 경우 값을 지정할 필요가 없습니다. 또한 `defaultMode` prop을 사용하여 제어되지 않는 방식으로 초기 모드를 설정할 수 있습니다.

`days` - `Calendar`의 기본 모드입니다. 월별 날짜를 표시합니다.

`months` - 연별 월을 표시합니다.

`quarters` - 연별 분기를 표시합니다 ( `defaultMode`의 값으로는 사용할 수 없음).

`years` - 선택을 위해 여러 연도를 표시합니다.

`modes` prop을 사용하여 활성화된 모드를 제한할 수 있습니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar defaultMode="months"/>
`}
>
    <DateComponents.Calendar defaultMode="months" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar defaultMode="months" />
```

<!--/GITHUB_BLOCK-->

## 상태

### 비활성화됨

사용자가 컴포넌트와 상호 작용할 수 없도록 하려는 `Calendar`의 상태입니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar disabled={true} />
`}
>
    <DateComponents.Calendar disabled={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar disabled={true} />
```

<!--/GITHUB_BLOCK-->

### 읽기 전용

`readOnly`는 부울 속성이며, true로 설정하면 `Calendar` 컴포넌트가 사용자에게 변경 불가능하게 됩니다. 즉, 입력란은 현재 값을 표시하지만 사용자는 이를 변경할 수 없습니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar readOnly={true} />
`}
>
    <DateComponents.Calendar readOnly={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar readOnly={true} />
```

<!--/GITHUB_BLOCK-->

## 포커스된 값

`Calendar` 보기가 포커스된 날짜를 선택할 수 있도록 합니다. 제어하려는 경우 `focusedValue` prop을 사용해야 합니다. 제어되지 않는 컴포넌트의 경우 선택적 prop인 `defaultFocusedValue`로 초기 포커스된 값을 설정할 수 있습니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar defaultFocusedValue={dateTimeParse('01.01.2020')} />
`}
>
    <DateComponentsExamples.CalendarExample defaultFocusedValue={'01.01.2020'} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar defaultFocusedValue={dateTimeParse('01.01.2020')} />
```

<!--/GITHUB_BLOCK-->

## 시간대

`timeZone`은 입력란의 값에 대한 시간대를 설정하는 속성입니다. [시간대에 대해 자세히 알아보기](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## 속성

| 이름                                  | 설명                                                                                                         | 타입                                             | 기본값                                    |
| :------------------------------------ | :----------------------------------------------------------------------------------------------------------- | :-----------------------------------------------: | :----------------------------------------: |
| aria-describedby                      | 컨트롤의 `aria-describedby` 속성                                                                             |                      `string`                       |                                            |
| aria-details                          | 컨트롤의 `aria-details` 속성                                                                                 |                      `string`                       |                                            |
| aria-label                            | 컨트롤의 `aria-label` 속성                                                                                   |                      `string`                       |                                            |
| aria-labelledby                       | 컨트롤의 `aria-labelledby` 속성                                                                              |                      `string`                       |                                            |
| autoFocus                             | 컨트롤의 `autofocus` 속성                                                                                    |                     `boolean`                     |                                            |
| className                             | 컨트롤의 래퍼 클래스 이름                                                                                    |                      `string`                       |                                            |
| [defaultFocusedValue](#focused-value) | 캘린더가 처음 마운트될 때 포커스되는 날짜 (uncontrolled)                                                      |                     `DateTime`                      |                                            |
| [defaultMode](#mode)                  | 캘린더에 표시될 초기 모드                                                                                    |           `days` `months` `quarters` `years`            |                                            |
| [defaultValue](#value)                | uncontrolled 컴포넌트의 초기 값을 설정합니다.                                                                |                     `DateTime`                      |                                            |
| [disabled](#disabled)                 | 사용자가 컨트롤과 상호작용할 수 없음을 나타냅니다.                                                           |                     `boolean`                     |                  `false`                   |
| [focusedValue](#focused-value)        | 이 값을 포함하는 uncontrolled 컴포넌트의 기본 보기를 설정합니다.                                              |                   `DateTime` `null`                   |                                            |
| id                                    | 컨트롤의 `id` 속성                                                                                           |                      `string`                       |                                            |
| isDateUnavailable                     | 캘린더의 각 날짜에 대해 호출되는 콜백입니다. true를 반환하면 해당 날짜를 사용할 수 없습니다.                   |             `((date: DateTime) => boolean)`             |                                            |
| isWeekend                             | 캘린더의 각 날짜에 대해 호출되는 콜백입니다. true를 반환하면 해당 날짜는 주말입니다.                           |             `((date: DateTime) => boolean)`             |                                            |
| [maxValue](#min-and-max-value)        | 사용자가 선택할 수 있는 최대 허용 날짜입니다.                                                                |                     `DateTime`                      |                                            |
| [minValue](#min-and-max-value)        | 사용자가 선택할 수 있는 최소 허용 날짜입니다.                                                                |                     `DateTime`                      |                                            |
| [mode](#mode)                         | `Calendar`가 controlled 방식으로 표시해야 하는 시간 간격을 정의합니다.                                       |           `days` `months` `quarters` `years`            |                                            |
| modes                                 | 사용자에게 제공되는 모드                                                                                     |           `Partial<Record<CalendarLayout, boolean>>`            | `{days: true, months: true, quarters: false, years: true }` |
| onBlur                                | 컨트롤이 포커스를 잃으면 발생합니다. 포커스 이벤트를 콜백의 인수로 제공합니다.                               |             `((e: FocusEvent<Element, Element>) => void)`             |                                            |
| onFocus                               | 컨트롤이 포커스를 얻으면 발생합니다. 포커스 이벤트를 콜백의 인수로 제공합니다.                               |             `((e: FocusEvent<Element, Element>) => void)`             |                                            |
| onFocusUpdate                         | 컨트롤의 포커스 날짜가 변경되면 발생합니다.                                                                 |                   `((date: DateTime) => void)`                    |                                            |
| onUpdate                              | 값이 변경되면 발생합니다.                                                                                    |                   `((value: DateTime) => void`                   |                                            |
| onUpdateMode                          | 모드가 변경되면 발생합니다.                                                                                  | `((value: 'days' \| 'months' \| 'quarters' \| 'years' ) => void` |                                            |
| [readOnly](#readonly)                 | 캘린더 값이 변경 불가능한지 여부입니다.                                                                      |                     `boolean`                     |                  `false`                   |
| [size](#size)                         | 컨트롤의 크기                                                                                                |                      `"m"` `"l"` `"xl"`                       |                            `"m"`                             |
| style                                 | 요소에 대한 인라인 스타일을 설정합니다.                                                                      |                         `CSSProperties`                         |                                            |
| [timeZone](#time-zone)                | 시간대를 설정합니다. [시간대에 대해 자세히 알아보기](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                      `string`                       |                                            |
| [value](#calendar)                    | 컨트롤의 값                                                                                                  |                   `DateTime` `null`                   |                                            |

GRAVITY_TRANSLATION
