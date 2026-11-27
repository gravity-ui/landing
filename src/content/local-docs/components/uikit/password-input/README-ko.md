<!--GITHUB_BLOCK-->

## Password Input

<!--/GITHUB_BLOCK-->

```tsx
import {PasswordInput} from '@gravity-ui/uikit';
```

`PasswordInput`는 비밀번호 및 기타 민감한 정보를 입력하기 위한 컴포넌트입니다. 복사 및 보기 버튼을 렌더링하여 더욱 편리하게 사용할 수 있습니다.

### 복사 버튼

이 버튼을 사용하면 사용자는 입력 값을 쉽게 클립보드로 복사할 수 있습니다. `hideCopyButton` 불리언 속성을 사용하여 이 버튼을 숨길 수 있습니다.

<!--SANDBOX
import {PasswordInput} from '@gravity-ui/uikit';

export default function () {
    return <PasswordInput hideCopyButton />;
}
SANDBOX-->

### 보기 버튼

`hideRevealButton` 속성을 사용하면 사용자는 비밀번호의 표시 여부를 전환할 수 있습니다.

<!--SANDBOX
import {PasswordInput} from '@gravity-ui/uikit';

export default function () {
    return <PasswordInput hideRevealButton />;
}
SANDBOX-->

### 속성

`PasswordInput`의 [속성](https://github.com/gravity-ui/uikit/blob/main/src/components/controls/TextInput/README.md#properties)은 다음과 같으며, 일부 예외 및 추가 사항이 있습니다.

- `type`은 생략됩니다.

| 이름                | 설명                                                                |    타입    | 기본값 |
| :------------------ | :------------------------------------------------------------------------- | :--------: | :-----: |
| hideCopyButton      | 복사 버튼 표시 여부                                                           | `boolean`  | `false` |
| hideRevealButton    | 보기 버튼 표시 여부                                                         | `boolean`  | `false` |
| showCopyTooltip     | 복사 버튼 툴팁 표시 여부 결정                                             | `boolean`  | `false` |
| showRevealTooltip   | 보기 버튼 툴팁 표시 여부 결정                                           | `boolean`  | `false` |
| revealValue         | 비밀번호 입력 필드의 표시 상태 결정                                               | `boolean`  | `false` |
| onRevealValueUpdate | `revealValue` 상태가 변경될 때마다 호출되는 콜백 함수                                | `function` |         |

<!--GITHUB_BLOCK-->

#### Usage example

```tsx
function MyComponent() {
  const [value, setValue] = React.useState('');

  return <PasswordInput onUpdate={setValue} value={value} />;
}
```

<!--/GITHUB_BLOCK-->
