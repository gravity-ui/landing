<!--GITHUB_BLOCK-->

# ClipboardButton

<!--/GITHUB_BLOCK-->

`ClipboardButton` 是一个现成的按钮，可将给定文本复制到剪贴板并播放成功动画。它结合了 [`CopyToClipboard`](../CopyToClipboard/README.md)（复制行为）和 [`ClipboardIcon`](../ClipboardIcon/README.md)（动画图标）。

```tsx
import {ClipboardButton} from '@gravity-ui/uikit';
```

<!--SANDBOX
import {ClipboardButton} from '@gravity-ui/uikit';

export default function () {
    return <ClipboardButton text="Some text to copy" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<ClipboardButton text="Some text to copy" />
```

<!--/GITHUB_BLOCK-->

## 属性

`ClipboardButton` 的属性继承自 `Button` [属性](../Button/README.md#properties)。

| 名称               | 描述                                                               |            类型            |   默认值   |
| :----------------- | :------------------------------------------------------------------------ | :------------------------: | :---------: |
| hasTooltip         | 切换工具提示的显示                                            |         `boolean`          |   `true`    |
| onCopy             | 复制后的回调 `(text: string, result: boolean) => void`          |         `Function`         |             |
| text               | 要复制的文本（可以是字符串或返回字符串的函数）        |  `string \| () => string`  |             |
| timeout            | 按钮点击后状态恢复正常之前的时间（毫秒） |          `number`          |   `1000`    |
| tooltipInitialText | 复制前显示的文本                                                 |          `string`          |  `"Copy"`   |
| tooltipSuccessText | 复制后显示的文本                                                  |          `string`          | `"Copied!"` |
| icon               | 自定义图标                                                               |     `React.ReactNode`      |             |
| iconPosition       | 图标位置                                                          | `start          \|    end` |   `start`   |
