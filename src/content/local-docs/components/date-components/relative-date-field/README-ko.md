GRAVITY_TRANSLATION_BLOCK_0_END

```tsx
import {RelativeDateField} from '@gravity-ui/date-components';
```

`RelativeDateField` 컴포넌트는 상대 날짜 입력에만 사용됩니다. "일반" `DateField`로는 사용할 수 없습니다.

## 상대 입력

이 컴포넌트는 특별한 상대 형식으로 값을 가져옵니다. 정확한 날짜를 계산하는 데 도움이 되는 수식으로 값을 설정합니다. Grafana의 상대 시간 필드 형식과 매우 유사하기 때문에 `grafana 스타일 형식`이라고 부를 수 있습니다. Grafana의 상대 시간 값에 대해 자세히 알아보려면 [문서](https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/)를 읽어보세요.

이 모드를 사용하면 소스에서 대상으로 데이터를 전달하고 정확한 값을 필요한 엔드포인트에서 직접 계산할 수 있으며 부정확성을 방지할 수 있습니다.

## 유효한 입력 규칙

- 값은 `now` 키워드로 시작해야 합니다.
- 상대 날짜 표현식은 일반적으로 다음과 같은 형식입니다: `now${operand}${count}${unit}`
- `operand`에 사용할 수 있는 값:
  - `-` - 빼기
  - `+` - 더하기
  - `/` - `unit`의 시작으로 가져오기
- `count`의 유효한 값 - 모든 자연수
- `unit`의 유효한 값:
  - `d` - 일
  - `w` - 주
  - `M` - 월
  - `Q` - 분기
  - `y` - 년
  - `h` - 시간
  - `m` - 분

### 사용 예시

> `now-1d`
>
> `now/w`
>
> `now+10d-5d/M`

## 속성

| 이름             | 설명                                                                                                         |                     타입                      |     기본값     |
| :--------------- | :----------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-------------: |
| aria-describedby | 컨트롤의 `aria-describedby` 속성                                                                             |                   `string`                    |                 |
| aria-details     | 컨트롤의 `aria-details` 속성                                                                                 |                   `string`                    |                 |
| aria-label       | 컨트롤의 `aria-label` 속성                                                                                   |                   `string`                    |                 |
| aria-labelledby  | 컨트롤의 `aria-labelledby` 속성                                                                              |                   `string`                    |                 |
| autoFocus        | 컨트롤의 `autofocus` 속성                                                                                    |                   `boolean`                   |                 |
| className        | 컨트롤의 래퍼 클래스 이름                                                                                      |                   `string`                    |                 |
| defaultValue     | 제어되지 않는 컴포넌트의 초기 값 설정                                                                            |                   `string`                    |                 |
| disabled         | 사용자가 컨트롤과 상호작용할 수 없음을 나타냅니다.                                                               |                   `boolean`                   |     `false`     |
| errorMessage     | 오류 텍스트                                                                                                  |                  `ReactNode`                  |                 |
| hasClear         | 컨트롤 값을 지우는 아이콘 표시                                                                                 |                   `boolean`                   |     `false`     |
| hasTime          | 팝업 값에 시간 필드 표시                                                                                       |                   `boolean`                   |     `false`     |
| id               | 컨트롤의 `id` 속성                                                                                           |                   `string`                    |                 |
| label            | 입력 노드 왼쪽에 렌더링되는 도움말 텍스트                                                                        |                   `string`                    |                 |
| leftContent      | 레이블 및 입력 앞에 렌더링되는 사용자 노드                                                                       |               `React.ReactNode`               |                 |
| onBlur           | 컨트롤이 포커스를 잃을 때 발생합니다. 콜백 인수로 포커스 이벤트 제공                                             | `((e: FocusEvent<Element, Element>) => void)` |                 |
| onFocus          | 컨트롤이 포커스를 얻을 때 발생합니다. 콜백 인수로 포커스 이벤트 제공                                             | `((e: FocusEvent<Element, Element>) => void)` |                 |
| onKeyDown        | 키가 눌릴 때 발생합니다. 콜백 인수로 키보드 이벤트 제공                                                        |    `((e: KeyboardEvent<Element>) => void)`    |                 |
| onKeyUp          | 키가 릴리스될 때 발생합니다. 콜백 인수로 키보드 이벤트 제공                                                      |    `((e: KeyboardEvent<Element>) => void)`    |                 |
| onUpdate         | 사용자가 값을 변경할 때 발생합니다. 콜백 인수로 새 값 제공                                                      |      `((value: string \| null) => void`       |                 |
| pin              | 모서리 둥글게 처리                                                                                             |                   `string`                    | `'round-round'` |
| placeholder      | 값이 설정되지 않았을 때 컨트롤에 나타나는 텍스트                                                                  |                   `string`                    |                 |
| readOnly         | 컴포넌트의 값이 변경 불가능한지 여부                                                                             |                   `boolean`                   |     `false`     |
| rightContent     | 입력 노드 및 지우기 버튼 뒤에 렌더링되는 사용자 노드                                                               |               `React.ReactNode`               |                 |
| size             | 컨트롤의 크기                                                                                                |           `"s"` `"m"` `"l"` `"xl"`            |      `"m"`      |
| style            | 요소에 인라인 스타일 설정                                                                                      |                `CSSProperties`                |                 |
| timeZone         | 시간대 설정. [시간대에 대해 자세히 알아보기](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                   `string`                    |                 |
| validationState  | 유효성 검사 상태                                                                                               |                  `"invalid"`                  |                 |
| value            | 컨트롤의 값                                                                                                  |                `string` `null`                |                 |
| view             | 컨트롤의 보기                                                                                                |             `"normal"` `"clear"`              |   `"normal"`    |