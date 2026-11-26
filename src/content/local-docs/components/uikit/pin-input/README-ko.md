`PinInput`은 숫자 또는 영숫자 값의 시퀀스를 빠르게 입력하기 위한 입력 필드 그룹입니다. 가장 일반적인 사용 사례는 문자 메시지(SMS), 이메일 또는 인증 앱을 통해 받은 OTP 또는 확인 코드를 입력하는 것입니다.

각 입력 필드는 한 번에 한 문자씩 수집합니다. 값이 입력되면 모든 필드가 채워질 때까지 포커스가 다음 입력 필드로 이동합니다.

```tsx
import {PinInput} from '@gravity-ui/uikit';
```

## 타입

기본적으로 입력 필드는 숫자 값만 허용합니다. 영숫자 값을 허용하려면 `type` 속성을 `"alphanumeric"`으로 설정하세요.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 크기

이 컴포넌트는 `s`, `m`, `l`, `xl`의 네 가지 크기로 제공됩니다. 기본 크기는 `m`입니다.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 상태

사용자가 컴포넌트와 상호 작용하지 못하게 하려면 `disabled` 속성을 설정하세요.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

컴포넌트의 유효하지 않은 상태를 표시하려면 `validationState` 속성을 `"invalid"` 값으로 사용하세요. 선택적으로 `errorMessage` 속성을 사용하여 오류 메시지 텍스트를 설정할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## 플레이스홀더

기본적으로 입력 필드에는 플레이스홀더가 없습니다. `placeholder` 속성을 사용하여 설정할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## 마스크

입력된 값을 마스킹해야 하는 경우 `mask` 속성을 사용하세요. 이는 `<input type="password"/>` 동작과 유사합니다.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## OTP

브라우저가 외부 컨텍스트(예: SMS)에서 일회용 코드를 제안하도록 하려면 `otp` 속성을 설정하세요.

## API

- `focus(): void`: 현재 활성화된 입력 필드에 포커스를 설정합니다.

## CSS API

| 이름                       | 설명                                                              |
| :------------------------- | :---------------------------------------------------------------- |
| `--g-pin-input-item-width` | `responsive`이 `true`가 아닌 경우 각 입력 필드의 너비를 설정합니다. |
| `--g-pin-input-item-gap`   | 입력 필드 간의 간격을 설정합니다.                                  |

## 속성

| 이름             | 설명                                                                                                                                                  |                     타입                     |   기본값   |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: | :---------: |
| apiRef           | [API](#api)에 대한 Ref입니다.                                                                                                                          |              `React.RefObject`               |             |
| aria-describedby | `aria-describedby` HTML 속성                                                                                                                          |                   `string`                   |             |
| aria-label       | `aria-label` HTML 속성                                                                                                                                |                   `string`                   |             |
| aria-labelledby  | `aria-labelledby` HTML 속성                                                                                                                           |                   `string`                   |             |
| autoFocus        | 초기 렌더링 시 첫 번째 입력 필드에 포커스를 활성화하거나 비활성화합니다.                                                                                |                  `boolean`                   |             |
| className        | `class` HTML 속성                                                                                                                                     |                   `string`                   |             |
| defaultValue     | 제어되지 않는 컴포넌트의 초기 값입니다.                                                                                                               |                  `string[]`                  |             |
| disabled         | `disabled` 상태를 토글합니다.                                                                                                                         |                  `boolean`                   |             |
| errorMessage     | 참고 컨테이너와 공간을 공유하는 하단 시작 모서리 아래에 배치되는 오류 텍스트입니다. `validationState`가 `"invalid"`로 설정된 경우에만 표시됩니다. |              `React.ReactNode`               |             |
| id               | 입력 필드에 대한 `id` HTML 속성 접두사입니다. 결과 ID에는 `"-${index}"` 부분이 포함됩니다.                                                              |                   `string`                   |             |
| length           | 입력 필드의 수입니다.                                                                                                                                 |                   `number`                   |     `4`     |
| mask             | `true`로 설정하면 입력 값이 비밀번호 필드처럼 마스킹됩니다.                                                                                             |                  `boolean`                   |             |
| name             | 입력 필드에 대한 `name` HTML 속성입니다.                                                                                                              |                   `string`                   |             |
| form             | 기본 입력 요소의 연관된 폼입니다.                                                                                                                     |                   `string`                   |             |
| note             | 오류 컨테이너와 공간을 공유하는 하단 끝 모서리 아래에 배치되는 요소입니다.                                                                               |              `React.ReactNode`               |             |
| onUpdate         | 입력 필드 중 하나라도 변경될 때 호출되는 콜백입니다.                                                                                                  |         `(value: string[]) => void`          |             |
| onUpdateComplete | 입력 필드 중 하나라도 변경되고 모두 채워졌을 때 호출되는 콜백입니다.                                                                                   |         `(value: string[]) => void`          |             |
| otp              | `true`로 설정하면 입력 필드에 `autocomplete="one-time-code"`가 추가됩니다.                                                                              |                  `boolean`                   |             |
| placeholder      | 입력 필드의 플레이스홀더입니다.                                                                                                                       |                   `string`                   |             |
| qa               | 테스트 목적으로 사용되는 `data-qa` HTML 속성입니다.                                                                                                   |                   `string`                   |             |
| responsive       | 부모의 너비가 입력 필드 간에 균등하게 분배됩니다.                                                                                                     |                  `boolean`                   |             |
| size             | 입력 필드의 크기입니다.                                                                                                                               |           `"s"` `"m"` `"l"` `"xl"`           |    `"m"`    |
| style            | `style` HTML 속성                                                                                                                                     |            `React.CSSProperties`             |             |
| type             | 허용되는 입력 값 유형을 결정합니다.                                                                                                                   |         `"numeric"` `"alphanumeric"`         | `"numeric"` |
| validationState  | 컴포넌트의 모양에 영향을 미치는 유효성 검사 상태입니다.                                                                                               |                 `"invalid"`                  |             |
| value            | 제어되는 컴포넌트의 현재 값입니다.                                                                                                                    |                  `string[]`                  |             |
| `onFocus`        | 컴포넌트가 포커스를 받을 때 호출되는 콜백입니다.                                                                                                      | `(event: React.FocusEvent<Element>) => void` |             |
| `onBlur`         | 컴포넌트가 포커스를 잃을 때 호출되는 콜백입니다.                                                                                                      | `(event: React.FocusEvent<Element>) => void` |             |