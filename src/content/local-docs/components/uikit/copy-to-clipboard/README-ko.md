`CopyToClipboard`는 클립보드로 텍스트를 복사하고 복사 상태를 자식에게 노출하는 렌더-프롭 래퍼입니다. 이를 통해 자체 트리거를 렌더링할 수 있습니다. 바로 사용할 수 있는 버튼은 `ClipboardButton`을 사용하세요.

```tsx
import {CopyToClipboard} from '@gravity-ui/uikit';
```

### 자식 (렌더 함수)

이것은 자식 속성으로 제공되는 렌더 함수입니다. 렌더 함수에 첫 번째 인수로 반환되는 상태에 따라 콘텐츠를 업데이트할 수 있습니다.
세 가지 상태를 사용할 수 있습니다: `pending`, `success`, `error`.

`pending`: 중립적인 경우 렌더 함수에 반환되는 초기 상태입니다.

`success`: 성공적인 경우 렌더 함수에 반환되는 결과 상태입니다.

`error`: 오류인 경우 렌더 함수에 반환되는 결과 상태입니다.

`timeout` 옵션은 결과 상태(`success` 또는 `error`) 중 하나 이후 초기(`pending`) 상태로 복원되는 시간을 밀리초 단위로 설정합니다.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 속성

| 이름     | 설명                                                                    |           유형           | 기본값 |
| :------- | :---------------------------------------------------------------------- | :----------------------: | :-----: |
| children | `(status: CopyToClipboardStatus) => React.ReactElement` 렌더 함수 |        `Function`        |         |
| onCopy   | `copy` 이벤트 핸들러                                                    |        `Function`        |         |
| text     | 복사할 텍스트 (문자열 또는 문자열을 반환하는 함수일 수 있습니다)      | `string \| () => string` |         |
| timeout  | 초기 상태로 복원되는 시간 (밀리초)                                      |         `number`         |         |