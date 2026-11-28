<!--GITHUB_BLOCK-->

# RangeCalendar

<!--/GITHUB_BLOCK-->

```tsx
import {RangeCalendar} from '@gravity-ui/date-components';
```

`RangeCalendar`는 날짜 범위를 선택하기 위해 설계된 강력하고 유연하며 사용자 친화적인 UI 컴포넌트입니다. React로 구축되었으며, 달력과 날짜 범위 선택기의 기능을 결합하여 사용자가 시작 날짜와 종료 날짜를 입력해야 하는 애플리케이션에 이상적인 선택입니다. `value` 속성을 설정하면 제어될 수 있습니다. 또는 아무 값도 설정하지 않으면 제어되지 않지만, 이 경우 선택적 속성인 `defaultValue`로 초기 상태를 관리할 수 있습니다. 컴포넌트는 기본적으로 제어되지 않습니다.

### 유용한 추가 기능

올바른 형식으로 날짜를 설정하려면 [Date Utils 라이브러리](https://gravity-ui.com/libraries/date-utils)에서 추가 도우미를 포함해야 할 수 있습니다.

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

<!--LANDING_BLOCK

> [!NOTE]
> Row with "Selected range: ..." is not a part of the component. It was added to examples only for clarity.

LANDING_BLOCK-->

## 크기

`RangeCalendar`의 크기를 제어하려면 `size` 속성을 사용하십시오. 기본 크기는 `m`입니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar size="m" />
<RangeCalendar size="l" />
<RangeCalendar size="xl" />
`}
>
    <DateComponentsExamples.RangeCalendarExample size="m" />
    <DateComponentsExamples.RangeCalendarExample size="l" />
    <DateComponentsExamples.RangeCalendarExample size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar size="m" />
<RangeCalendar size="l" />
<RangeCalendar size="xl" />
```

<!--/GITHUB_BLOCK-->

## 값

### 최소 및 최대 값

`minValue` 속성을 사용하면 사용자가 입력할 수 있는 가장 빠른 날짜와 시간을 지정할 수 있습니다. 반대로 `maxValue` 속성은 입력할 수 있는 가장 늦은 날짜와 시간을 지정합니다. 다른 모든 값은 사용자에게 비활성화됩니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar minValue={dateTimeParse('01.01.2024')} maxValue={dateTimeParse('01.01.2025')} />
`}
>
    <DateComponentsExamples.RangeCalendarExample minValue={'01.01.2024'} maxValue={'01.01.2025'}/>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar minValue={dateTimeParse('01.01.2024')} maxValue={dateTimeParse('01.01.2025')} />
```

<!--/GITHUB_BLOCK-->

## 모드

`RangeCalendar`가 표시해야 하는 시간 간격을 정의합니다. `mode`를 사용하면 제어된 방식으로 선택할 수 있습니다. 제어되지 않는 방식의 경우 값을 지정할 필요가 없습니다. 또한 `defaultMode` prop을 사용하여 제어되지 않는 방식으로 초기 모드를 설정할 수 있습니다.

`days` - `RangeCalendar`의 기본 모드입니다. 월별로 날짜를 표시합니다.

`months` - 연별로 월을 표시합니다.

`quarters` - 연별 분기를 표시합니다 ( `defaultMode`의 값으로는 사용할 수 없음).

`years` - 선택할 여러 연도를 표시합니다.

`modes` prop을 사용하여 활성화된 모드를 제한할 수 있습니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar defaultMode="months"/>
`}
>
    <DateComponentsExamples.RangeCalendarExample defaultMode="months" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar defaultMode="months" />
```

<!--/GITHUB_BLOCK-->

## 상태

### 비활성화됨

사용자가 컴포넌트와 상호 작용할 수 없도록 하려는 `RangeCalendar`의 상태입니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar
  disabled={true}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
`}
>
    <DateComponentsExamples.RangeCalendarWithDefaultValueExample disabled={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar
  disabled={true}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
```

<!--/GITHUB_BLOCK-->

### 읽기 전용

`readOnly`는 true로 설정하면 `RangeCalendar` 컴포넌트를 사용자에게 변경할 수 없도록 만드는 부울 속성입니다. 즉, 입력은 현재 값을 표시하지만 사용자는 이를 변경할 수 없습니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar
  readOnly={true}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
`}
>
    <DateComponentsExamples.RangeCalendarWithDefaultValueExample readOnly={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar
  readOnly={true}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
```

<!--/GITHUB_BLOCK-->

## 포커스된 값

`RangeCalendar` 보기가 포커스된 날짜를 선택할 수 있습니다. 제어하려면 `focusedValue` prop을 사용해야 합니다. 선택적 prop인 `defaultFocusedValue`를 사용하여 제어되지 않는 컴포넌트의 초기 포커스 값을 설정할 수 있습니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar
  defaultFocusedValue={dateTimeParse('01.01.2020')} defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
`}
>
    <DateComponentsExamples.RangeCalendarWithDefaultValueExample defaultFocusedValue={'01.01.2020'} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar
  defaultFocusedValue={dateTimeParse('01.01.2020')}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
```

<!--/GITHUB_BLOCK-->

## 시간대

`timeZone`은 입력의 값에 대한 시간대를 설정하는 속성입니다. [시간대에 대해 자세히 알아보기](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## 속성

| 이름                                  | 설명                                                                                                         | 타입                                                | 기본값                               |
| :------------------------------------ | :----------------------------------------------------------------------------------------------------------- | :--------------------------------------------------: | :-----------------------------------: |
| aria-describedby                      | 컨트롤의 `aria-describedby` 속성                                                                             |                       `string`                       |                                       |
| aria-details                          | 컨트롤의 `aria-details` 속성                                                                                 |                       `string`                       |                                       |
| aria-label                            | 컨트롤의 `aria-label` 속성                                                                                   |                       `string`                       |                                       |
| aria-labelledby                       | 컨트롤의 `aria-labelledby` 속성                                                                              |                       `string`                       |                                       |
| autoFocus                             | 컨트롤의 `autofocus` 속성                                                                                    |                      `boolean`                       |                                       |
| className                             | 컨트롤의 래퍼 클래스 이름                                                                                    |                       `string`                       |                                       |
| [defaultFocusedValue](#focused-value) | 달력이 처음 마운트될 때 포커스되는 날짜 (uncontrolled)                                                        |                      `DateTime`                      |                                       |
| [defaultMode](#mode)                  | 달력에 표시될 초기 모드                                                                                      |             `days` `months` `quarters` `years`             |                                       |
| [defaultValue](#value)                | uncontrolled 컴포넌트의 초기 값을 설정합니다.                                                                |                   `RangeValue<DateTime>`                   |                                       |
| [disabled](#disabled)                 | 사용자가 컨트롤과 상호 작용할 수 없음을 나타냅니다.                                                            |                      `boolean`                       |                       `false`                       |
| [focusedValue](#focused-value)        | 이 값을 포함하는 uncontrolled 컴포넌트의 기본 보기를 설정합니다.                                               |                   `DateTime` `null`                    |                                       |
| id                                    | 컨트롤의 `id` 속성                                                                                           |                       `string`                       |                                       |
| isDateUnavailable                     | 달력의 각 날짜에 대해 호출되는 콜백입니다. true를 반환하면 해당 날짜를 사용할 수 없습니다.                     |                 `((date: DateTime) => boolean)`                  |                                       |
| isWeekend                             | 달력의 각 날짜에 대해 호출되는 콜백입니다. true를 반환하면 해당 날짜는 주말입니다.                             |                 `((date: DateTime) => boolean)`                  |                                       |
| [maxValue](#min-and-max-value)        | 사용자가 선택할 수 있는 최대 허용 날짜입니다.                                                                |                      `DateTime`                      |                                       |
| [minValue](#min-and-max-value)        | 사용자가 선택할 수 있는 최소 허용 날짜입니다.                                                                |                      `DateTime`                      |                                       |
| [mode](#mode)                         | `RangeCalendar`가 제어된 방식으로 표시해야 하는 시간 간격을 정의합니다.                                       |             `days` `months` `quarters` `years`             |                                       |
| modes                                 | 사용자에게 제공되는 모드                                                                                     |             `Partial<Record<RangeCalendarLayout, boolean>>`              | `{days: true, months: true, quarters: false, years: true }` |
| onBlur                                | 컨트롤이 포커스를 잃으면 발생합니다. 포커스 이벤트를 콜백의 인수로 제공합니다.                                |          `((e: FocusEvent<Element, Element>) => void)`           |                                       |
| onFocus                               | 컨트롤이 포커스를 얻으면 발생합니다. 포커스 이벤트를 콜백의 인수로 제공합니다.                                |          `((e: FocusEvent<Element, Element>) => void)`           |                                       |
| onFocusUpdate                         | 컨트롤의 포커스 날짜가 변경되면 발생합니다.                                                                 |                   `((date: DateTime) => void)`                   |                                       |
| onUpdate                              | 값이 변경되면 발생합니다.                                                                                    |                   `((value: DateTime) => void`                   |                                       |
| onUpdateMode                          | 모드가 변경되면 발생합니다.                                                                                  | `((value: 'days' \| 'months' \| 'quarters' \| 'years' ) => void` |                                       |
| [readOnly](#readonly)                 | 달력 값이 변경 불가능한지 여부입니다.                                                                        |                      `boolean`                       |                       `false`                       |
| [size](#size)                         | 컨트롤의 크기                                                                                                |                        `"m"` `"l"` `"xl"`                        |                            `"m"`                            |
| style                                 | 요소에 인라인 스타일을 설정합니다.                                                                           |                         `CSSProperties`                          |                                       |
| [timeZone](#time-zone)                | 시간대를 설정합니다. [시간대에 대해 자세히 알아보기](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                       `string`                       |                                       |
| [value](#calendar)                    | 컨트롤의 값                                                                                                  |                  `RangeValue<DateTime>` `null`                   |                                       |
