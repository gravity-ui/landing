`ClipboardButton`은 주어진 텍스트를 클립보드에 복사하고 성공 애니메이션을 재생하는 즉시 사용 가능한 버튼입니다. [`CopyToClipboard`](../CopyToClipboard/README.md) (복사 동작)와 [`ClipboardIcon`](../ClipboardIcon/README.md) (애니메이션 아이콘)을 결합합니다.

```tsx
import {ClipboardButton} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 속성

`ClipboardButton`의 속성은 `Button` [속성](../Button/README.md#properties)에서 상속됩니다.

| 이름               | 설명                                                               |            타입            |   기본값   |
| :----------------- | :------------------------------------------------------------------------ | :------------------------: | :---------: |
| hasTooltip         | 툴팁 표시 토글                                            |         `boolean`          |   `true`    |
| onCopy             | 복사 후 콜백 `(text: string, result: boolean) => void`          |         `Function`         |             |
| text               | 복사할 텍스트 (문자열 또는 문자열을 반환하는 함수일 수 있습니다)        |  `string \| () => string`  |             |
| timeout            | 버튼 클릭 후 정상 상태로 돌아가기 전 시간 (밀리초) |          `number`          |   `1000`    |
| tooltipInitialText | 복사하기 전에 표시되는 텍스트                                                 |          `string`          |  `"Copy"`   |
| tooltipSuccessText | 복사 후에 표시되는 텍스트                                                  |          `string`          | `"Copied!"` |
| icon               | 사용자 정의 아이콘                                                               |     `React.ReactNode`      |             |
| iconPosition       | 아이콘 위치                                                          | `start          \|    end` |   `start`   |