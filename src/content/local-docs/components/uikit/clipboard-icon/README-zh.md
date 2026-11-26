`ClipboardIcon` 是一个动画复制图标，可以反映复制状态（空闲或成功）；它应该放在 `CopyToClipboard` 或 `ClipboardButton` 中使用，而不是单独使用。

```tsx
import {ClipboardIcon} from '@gravity-ui/uikit';
```

### 状态

根据 `status` 属性，图标会相应地改变：

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## 属性

| 名称      | 描述                                       | 类型     | 默认值 |
| :-------- | :----------------------------------------- | :------- | :----- |
| className | `class` HTML 属性                          | `string` |        |
| size      | 确定图标大小                               | `number` |        |
| status    | 可用值包括 `pending`、`success` 和 `error`。 | `string` |        |

GRAVITY_TRANSLATION_BLOCK_2_END