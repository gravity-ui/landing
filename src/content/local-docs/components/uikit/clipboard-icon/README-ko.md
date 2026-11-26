`ClipboardIcon`은 복사 상태(대기 또는 성공)를 반영하는 애니메이션 복사 아이콘으로, 단독으로 사용하기보다는 `CopyToClipboard` 또는 `ClipboardButton` 내부에 사용하도록 설계되었습니다.

```tsx
import {ClipboardIcon} from '@gravity-ui/uikit';
```

### 상태

`status` 속성에 따라 아이콘이 변경됩니다.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## 속성

| 이름      | 설명                                       | 타입     | 기본값 |
| :-------- | :----------------------------------------- | :------- | :----- |
| className | `class` HTML 속성                          | `string` |        |
| size      | 아이콘 크기를 결정합니다.                  | `number` |        |
| status    | 사용 가능한 값은 `pending`, `success`, `error`입니다. | `string` |        |

GRAVITY_TRANSLATION_BLOCK_2_END