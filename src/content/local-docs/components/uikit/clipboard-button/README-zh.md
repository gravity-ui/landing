GRAVITY_TRANSLATION_BLOCK_0_END

`ClipboardButton` 是一个现成的按钮，可将给定文本复制到剪贴板并播放成功动画。它结合了 [`CopyToClipboard`](../CopyToClipboard/README.md)（复制行为）和 [`ClipboardIcon`](../ClipboardIcon/README.md)（动画图标）。

```tsx
import {ClipboardButton} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Tooltip

使用 `tooltipProps` 配置底层的 [`ActionTooltip`](../ActionTooltip/README.md)，
例如其放置或 portal 行为：

```tsx
<ClipboardButton text="Some text to copy" tooltipProps={{placement: 'top', disablePortal: true}} />
```

支持的属性有 `onOpenChange`、`strategy`、`placement`、`offset`、`disabled`、
`container`、`disablePortal` 以及 `DOMProps`（`className`、`style`）和 `QAProps`（`qa`）属性。

将 `tooltipProps.disabled` 设置为 `true` 可禁用 tooltip。`hasTooltip={false}` 和复制
反馈超时也会禁用它，即使 `tooltipProps.disabled` 为 `false`。使用
`tooltipInitialText`、`tooltipSuccessText` 和 `timeout` 配置复制反馈。

## Properties

`ClipboardButton` 的属性继承自 `Button` 的[属性](../Button/README.md#properties)。

| Name               | Description                                                               |            Type            |   Default   |
| :----------------- | :------------------------------------------------------------------------ | :------------------------: | :---------: |
| hasTooltip         | 切换 tooltip 的显示                                                       |         `boolean`          |   `true`    |
| onCopy             | 复制后的回调 `(text: string, result: boolean) => void`                   |         `Function`         |             |
| text               | 要复制的文本（可以是字符串或返回字符串的函数）                                |  `string \| () => string`  |             |
| timeout            | 按钮被点击后状态恢复正常之前的时间                                        |          `number`          |   `1000`    |
| tooltipInitialText | 复制前显示的文本                                                          |          `string`          |  `"Copy"`   |
| tooltipSuccessText | 复制后显示的文本                                                          |          `string`          | `"Copied!"` |
| tooltipProps       | Tooltip 配置。请参阅[支持的属性](#tooltip)。                               |          `object`          |             |
| icon               | 自定义图标                                                                |     `React.ReactNode`      |             |
| iconPosition       | 图标位置                                                                  | `start          \|    end` |   `start`   |