`CopyToClipboard` 是一个渲染函数包装器，用于将文本复制到剪贴板并将复制状态暴露给其子组件，允许您渲染自己的触发器；现成的按钮请使用 `ClipboardButton`。

```tsx
import {CopyToClipboard} from '@gravity-ui/uikit';
```

### 子组件（渲染函数）

这是作为 `children` 属性提供的渲染函数。它可以根据作为渲染函数第一个参数返回的状态来更新其内容。
有三种可用状态：`pending`、`success` 和 `error`。

`pending`：在正常情况下返回给渲染函数的初始状态。

`success`：成功时返回给渲染函数的成功状态。

`error`：出错时返回给渲染函数的错误状态。

`timeout` 选项设置在其中一个结果状态（`success` 或 `error`）之后恢复初始状态（`pending`）的毫秒数。

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 属性

| 名称     | 描述                                                             |           类型           | 默认值 |
| :------- | :--------------------------------------------------------------- | :----------------------: | :-----: |
| children | `(status: CopyToClipboardStatus) => React.ReactElement` 渲染函数 |        `Function`        |         |
| onCopy   | `copy` 事件处理程序                                              |        `Function`        |         |
| text     | 要复制的文本（可以是字符串或返回字符串的函数）                     | `string \| () => string` |         |
| timeout  | 恢复初始状态的毫秒数                                               |         `number`         |         |