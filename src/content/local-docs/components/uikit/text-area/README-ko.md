<!--GITHUB_BLOCK-->

# TextArea

<!--/GITHUB_BLOCK-->

```tsx
import {TextArea} from '@gravity-ui/uikit';
```

`TextArea`를 사용하면 UI에 텍스트를 입력할 수 있습니다.

## 모양

`TextArea`의 모양은 `view` 및 `pin` 속성으로 제어됩니다.

### View

`normal` - `TextArea`의 기본 모양입니다 (기본값).

<!--SANDBOX
import {TextArea} from '@gravity-ui/uikit';

export default function () {
    return <TextArea placeholder="Placeholder" />;
}
SANDBOX-->

`clear` - `TextArea`에 대한 사용자 정의 래퍼를 사용할 때 사용할 수 있습니다.

<!--SANDBOX
import {TextArea} from '@gravity-ui/uikit';

export default function () {
    return <TextArea view="clear" placeholder="Placeholder" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea view="normal" />
<TextArea view="clear" />
```

<!--/GITHUB_BLOCK-->

### Pin

`TextArea` 테두리의 오른쪽 및 왼쪽 가장자리 모양을 제어할 수 있습니다.

<!--SANDBOX
import {TextArea} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextArea placeholder="Placeholder" pin="round-brick" />
            <TextArea placeholder="Placeholder" pin="brick-brick" />
            <TextArea placeholder="Placeholder" pin="brick-round" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea pin="round-brick" />
<TextArea pin="brick-brick" />
<TextArea pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## 상태

### Disabled

사용자가 컴포넌트와 상호 작용할 수 없도록 하려는 `TextArea`의 상태입니다.

<!--SANDBOX
import {TextArea} from '@gravity-ui/uikit';

export default function () {
    return <TextArea placeholder="Placeholder" disabled />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea disabled />
```

<!--/GITHUB_BLOCK-->

### Error

잘못된 사용자 입력을 표시하려는 `TextArea`의 상태입니다. `TextArea`의 모양을 변경하려면 `validationState` 속성을 "invalid" 값으로 사용합니다.
`errorMessage` 속성을 통해 선택적 메시지 텍스트를 추가할 수 있습니다.

<!--SANDBOX
import {TextArea} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextArea
                placeholder="Placeholder"
                errorMessage="Error message"
                validationState="invalid"
            />
            <TextArea
                view="clear"
                placeholder="Placeholder"
                errorMessage="Error message"
                validationState="invalid"
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea errorMessage="Error message" validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## 크기

`s` – 표준 컨트롤이 너무 클 때 사용됩니다 (테이블, 작은 카드).

`m` – 대부분의 컴포넌트에서 사용되는 기본 크기입니다.

`l` – 페이지 헤더, 모달 창 또는 팝업의 기본 컨트롤에 사용됩니다.

`xl` – 프로모션 및 랜딩 페이지에 사용됩니다.

<!--SANDBOX
import {TextArea} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextArea placeholder="Placeholder" size="s" />
            <TextArea placeholder="Placeholder" size="m" />
            <TextArea placeholder="Placeholder" size="l" />
            <TextArea placeholder="Placeholder" size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea size="s" />
<TextArea size="m" />
<TextArea size="l" />
<TextArea size="xl" />
```

<!--/GITHUB_BLOCK-->

## 행 관리

`TextArea`의 행 수는 `rows`, `minRows` 및 `maxRows` 속성으로 제어됩니다. `rows` 속성은 자동 높이 계산을 비활성화합니다.
`TextArea`의 원하는 높이를 설정하려면 `rows` 속성을 1로 설정한 `className` 또는 `style` 속성을 사용합니다.

<!--SANDBOX
import {TextArea} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <div>
                rows = 2
                <TextArea placeholder="Placeholder" rows={2} />
            </div>
            <div>
                minRows = 2
                <TextArea placeholder="Placeholder" minRows={2} />
            </div>
            <div>
                maxRows = 2
                <TextArea placeholder="Placeholder" maxRows={2} />
            </div>
            <div>
                height = 200px
                <TextArea placeholder="Placeholder" rows={1} style={{height: 200}} />
            </div>
        </>
    );
}
SANDBOX-->

## 크기 조절 가능한 TextArea

`controlProps` 속성에 `resize` 스타일을 제공하여 크기 조절 가능한 동작을 얻을 수 있습니다. 텍스트 영역 높이를 조절할 수 있도록 허용하는 경우 `rows` 속성을 지정해야 합니다. 그렇지 않으면 크기 조절이 자동 높이 계산과 충돌합니다.

<!--SANDBOX
import {TextArea} from '@gravity-ui/uikit';

export default function () {
    return (
        <TextArea
            rows={4}
            placeholder="Placeholder"
            style={{width: 'auto', maxWidth: '100%'}}
            controlProps={{style: {resize: 'both'}}}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea rows={4} controlProps={{style: {resize: 'both'}}} />
```

<!--/GITHUB_BLOCK-->

## 속성

| 이름            | 설명                                                                                                                              |                        타입                         |     기본값     |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------: | :-------------: |
| autoComplete    | 컨트롤의 `autocomplete` 속성                                                                                                      |                 `boolean` `string`                  |                 |
| autoFocus       | 컨트롤의 `autofocus` 속성                                                                                                         |                      `boolean`                      |                 |
| className       | 컨트롤의 래퍼 클래스 이름                                                                                                         |                      `string`                       |                 |
| controlProps    | 컨트롤의 html 속성                                                                                                                | `React.TextareaHTMLAttributes<HTMLTextAreaElement>` |                 |
| controlRef      | 컨트롤에 제공된 React ref                                                                                                         |          `React.Ref<HTMLTextAreaElement>`           |                 |
| defaultValue    | 컨트롤의 기본값. 컴포넌트가 제어되지 않을 때 사용됩니다.                                                                           |                      `string`                       |                 |
| disabled        | 사용자가 컨트롤과 상호작용할 수 없음을 나타냅니다.                                                                                |                      `boolean`                      |     `false`     |
| errorMessage    | 오류 텍스트                                                                                                                       |                      `string`                       |                 |
| hasClear        | 컨트롤의 값을 지우는 아이콘을 표시합니다.                                                                                         |                      `boolean`                      |     `false`     |
| id              | 컨트롤의 `id` 속성                                                                                                                |                      `string`                       |                 |
| maxRows         | 컨트롤의 최대 표시 줄 수. `rows`가 지정된 경우 무시됩니다.                                                                        |                      `number`                       |                 |
| minRows         | 컨트롤의 최소 표시 줄 수. `rows`가 지정된 경우 무시됩니다.                                                                        |                      `number`                       |                 |
| name            | 컨트롤의 `name` 속성. 지정되지 않으면 자동으로 생성됩니다.                                                                         |                      `string`                       |                 |
| note            | 컨트롤의 오른쪽 하단 모서리 아래에 표시되는 선택적 요소로, 오류 컨테이너와 공간을 공유합니다.                                       |                  `React.ReactNode`                  |                 |
| onBlur          | 컨트롤이 포커스를 잃었을 때 발생합니다. 포커스 이벤트를 콜백의 인수로 제공합니다.                                                  |                     `function`                      |                 |
| onChange        | 사용자가 입력 값를 변경했을 때 발생합니다. 변경 이벤트를 콜백의 인수로 제공합니다.                                                 |                     `function`                      |                 |
| onFocus         | 컨트롤이 포커스를 얻었을 때 발생합니다. 포커스 이벤트를 콜백의 인수로 제공합니다.                                                  |                     `function`                      |                 |
| onKeyDown       | 키가 눌렸을 때 발생합니다. 키보드 이벤트를 콜백의 인수로 제공합니다.                                                               |                     `function`                      |                 |
| onKeyUp         | 키가 릴리스되었을 때 발생합니다. 키보드 이벤트를 콜백의 인수로 제공합니다.                                                        |                     `function`                      |                 |
| onUpdate        | 사용자가 입력 값를 변경했을 때 발생합니다. 새 값을 콜백의 인수로 제공합니다.                                                       |                     `function`                      |                 |
| pin             | 컨트롤의 테두리 보기                                                                                                              |                      `string`                       | `"round-round"` |
| placeholder     | 값이 설정되지 않았을 때 컨트롤에 표시되는 텍스트                                                                                   |                      `string`                       |                 |
| qa              | 테스트 id 속성 (`data-qa`)                                                                                                        |                      `string`                       |                 |
| readOnly        | 사용자가 컨트롤의 값을 변경할 수 없음을 나타냅니다.                                                                               |                      `boolean`                      |     `false`     |
| rows            | 컨트롤의 표시 줄 수. 지정되지 않은 경우 높이는 콘텐츠를 기반으로 자동으로 계산됩니다.                                              |                      `number`                       |                 |
| size            | 컨트롤의 크기                                                                                                                     |              `"s"` `"m"` `"l"` `"xl"`               |      `"m"`      |
| tabIndex        | 컨트롤의 `tabindex` 속성                                                                                                          |                      `string`                       |                 |
| type            | 컨트롤의 타입                                                                                                                     |                      `string`                       |                 |
| validationState | 유효성 검사 상태                                                                                                                  |                     `"invalid"`                     |                 |
| value           | 컨트롤의 값                                                                                                                       |                      `string`                       |                 |
| view            | 컨트롤의 보기                                                                                                                     |                `"normal"` `"clear"`                 |   `"normal"`    |

## CSS API

| 이름                                | 설명                                         |
| :---------------------------------- | :-------------------------------------------------- |
| `--g-text-area-text-color`          | 텍스트 색상                                          |
| `--g-text-area-placeholder-color`   | 플레이스홀더 색상                                   |
| `--g-text-area-background-color`    | 배경 색상                                    |
| `--g-text-area-border-radius`       | 테두리 반경                                       |
| `--g-text-area-border-width`        | 테두리 너비                                       |
| `--g-text-area-border-color`        | 테두리 색상                                        |
| `--g-text-area-border-color-hover`  | 호버 시 테두리 색상                             |
| `--g-text-area-border-color-active` | 활성 시 테두리 색상                              |
| `--g-text-area-focus-outline-color` | 포커스 시 윤곽선 색상 (기본적으로 표시되지 않음) |
