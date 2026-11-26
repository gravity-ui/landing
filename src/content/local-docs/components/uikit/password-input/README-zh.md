GRAVITY_TRANSLATION_BLOCK_0_END

```tsx
import {PasswordInput} from '@gravity-ui/uikit';
```

`PasswordInput` 用于输入密码和其他敏感信息。它可以渲染复制和显示按钮，以提供更便捷的使用体验。

### 复制按钮

此按钮允许用户轻松地将输入值复制到剪贴板。您可以使用 `hideCopyButton` 布尔属性来隐藏此按钮。

GRAVITY_TRANSLATION_BLOCK_1_END

### 显示/隐藏按钮

`hideRevealButton` 属性允许用户切换密码的可见性。

GRAVITY_TRANSLATION_BLOCK_2_END

### 属性

`PasswordInput` 的 [属性](https://github.com/gravity-ui/uikit/blob/main/src/components/controls/TextInput/README.md#properties)，但有一些例外和补充：

- `type` 被省略；

| 名称                | 描述                                                               |    类型    | 默认值 |
| :------------------ | :----------------------------------------------------------------- | :--------: | :-----: |
| hideCopyButton      | 显示复制按钮                                                       | `boolean`  | `false` |
| hideRevealButton    | 显示显示/隐藏按钮                                                  | `boolean`  | `false` |
| showCopyTooltip     | 确定是否显示复制按钮的工具提示                                     | `boolean`  | `false` |
| showRevealTooltip   | 确定是否显示显示/隐藏按钮的工具提示                                | `boolean`  | `false` |
| revealValue         | 确定密码输入字段的可见状态                                         | `boolean`  | `false` |
| onRevealValueUpdate | 每当 `revealValue` 状态发生变化时调用的回调函数                  | `function` |         |

GRAVITY_TRANSLATION_BLOCK_3_END