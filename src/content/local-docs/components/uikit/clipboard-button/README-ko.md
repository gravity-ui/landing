`ClipboardButton`은 주어진 텍스트를 클립보드에 복사하고 성공 애니메이션을 재생하는 즉시 사용 가능한 버튼입니다. [`CopyToClipboard`](../CopyToClipboard/README.md)(복사 동작)와 [`ClipboardIcon`](../ClipboardIcon/README.md)(애니메이션 아이콘)을 결합합니다.

```tsx
import {ClipboardButton} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 툴팁

`tooltipProps`를 사용하여 기본 [`ActionTooltip`](../ActionTooltip/README.md)을 구성할 수 있습니다. 예를 들어, 배치 또는 포털 동작을 설정할 수 있습니다.

```tsx
<ClipboardButton text="Some text to copy" tooltipProps={{placement: 'top', disablePortal: true}} />
```

지원되는 속성은 `onOpenChange`, `strategy`, `placement`, `offset`, `disabled`, `container`, `disablePortal` 및 `DOMProps`(`className`, `style`) 및 `QAProps`(`qa`) 속성입니다.

툴팁을 비활성화하려면 `tooltipProps.disabled`를 `true`로 설정합니다. `hasTooltip={false}` 및 복사 피드백 시간 초과도 `tooltipProps.disabled`가 `false`인 경우에도 툴팁을 비활성화합니다. 복사 피드백을 구성하려면 `tooltipInitialText`, `tooltipSuccessText` 및 `timeout`을 사용합니다.

## 속성

`ClipboardButton` 속성은 `Button` [속성](../Button/README.md#properties)에서 상속됩니다.

| 이름               | 설명                                                               |            유형            |   기본값   |
| :----------------- | :------------------------------------------------------------------------ | :------------------------: | :---------: |
| hasTooltip         | 툴팁 표시를 전환합니다.                                            |         `boolean`          |   `true`    |
| onCopy             | 복사 후 콜백 `(text: string, result: boolean) => void`          |         `Function`         |             |
| text               | 복사할 텍스트 (문자열 또는 문자열을 반환하는 함수일 수 있습니다)        |  `string \| () => string`  |             |
| timeout            | 버튼을 클릭한 후 상태가 정상으로 돌아오기까지의 시간 |          `number`          |   `1000`    |
| tooltipInitialText | 복사하기 전에 표시되는 텍스트                                                 |          `string`          |  `"Copy"`   |
| tooltipSuccessText | 복사 후에 표시되는 텍스트                                                  |          `string`          | `"Copied!"` |
| tooltipProps       | 툴팁 구성. [지원되는 속성](#tooltip)을 참조하세요.              |          `object`          |             |
| icon               | 사용자 정의 아이콘                                                               |     `React.ReactNode`      |             |
| iconPosition       | 아이콘 위치                                                          | `start          \|    end` |   `start`   |