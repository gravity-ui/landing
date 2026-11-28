<!--GITHUB_BLOCK-->

# RelativeDatePicker

<!--/GITHUB_BLOCK-->

```tsx
import {RelativeDatePicker} from '@gravity-ui/date-components';
```

`RelativeDatePicker`는 `DatePicker` 컴포넌트와 거의 동일하지만 상대 날짜를 사용할 수 있는 기능이 있습니다.

## `DatePicker`와의 차이점

`RelativeDatePicker`는 `absolute`와 `relative` 두 가지 모드로 작동할 수 있습니다. `f(x)` 버튼을 클릭하여 대화형으로 전환하거나, `value` 또는 `defaultValue` 객체에서 `type` 필드를 설정할 수 있습니다.

### Absolute (절대)

`RelativeDatePicker`의 `absolute` 모드에서의 동작은 일반 `DatePicker`와 매우 유사합니다.

<!--LANDING_BLOCK

[Learn more about DatePicker](/components/date-components/date-picker)

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about DatePicker](/src/components/DatePicker)

<!--/GITHUB_BLOCK-->

### Relative (상대)

이 모드에서 `RelativeDatePicker`는 특별한 상대 형식으로 값을 가져오고 반환합니다.

<!--LANDING_BLOCK

[Learn more about rules of relative formulas](/components/date-components/relative-date-field#relative-input)

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about rules of relative formulas](/src/components/RelativeDateField#relative-input)

<!--/GITHUB_BLOCK-->

## 속성

| 이름              | 설명                                                                                                                                |                     타입                      |          기본값          |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----------------------: |
| aria-describedby  | 컨트롤의 `aria-describedby`. 객체를 설명하는 요소(들)를 식별합니다. 속성
