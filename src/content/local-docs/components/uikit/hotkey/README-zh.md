您可以使用 `Hotkey` 组件来显示 Mac 和 PC 的键盘快捷键。

```tsx
import {Hotkey} from '@gravity-ui/uikit';
```

### Value

键盘快捷键以 `<key>+<key>` 格式设置，这意味着您需要指定多个用加号分隔的键，例如 `shift+tab`。

按键组合的序列可以用空格分隔：`<shortcut> <shortcut>`，例如 `ctrl+a ctrl+c ctrl+v`。

您可以使用 `mod` 作为 Mac 上的 `cmd` 和其他平台上的 `ctrl` 的简写。例如，`mod+v` 在 Mac 上显示为 ⌘+A，在 PC 上显示为 Ctrl+A。

### View

`light`: 当组件显示在浅色背景上时使用（默认使用）。

`dark`: 当组件显示在深色背景上时使用。

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Platform

`pc`: 用于显示普通 PC 键盘的键盘快捷键。

`mac`: 用于显示 Macintosh 键盘的键盘快捷键。

默认情况下，平台会自动检测。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Properties

| Name      | Description                                                                    |         Type          |        Default         |
| :-------- | :----------------------------------------------------------------------------- | :-------------------: | :--------------------: |
| view      | 用于设置配色方案                                                               |  `"light"` `"dark"`   |       `"light"`        |
| platform  | 用于选择平台（PC 或 Macintosh）以显示键盘快捷键                                 |    `"pc"` `"mac"`     | 自动检测 |
| title     | 键盘快捷键值                                                                   |       `string`        |                        |
| style     | HTML style 属性                                                                | `React.CSSProperties` |                        |
| className | 警告类名                                                                       |       `string`        |                        |