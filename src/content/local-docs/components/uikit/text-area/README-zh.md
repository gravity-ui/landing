`TextArea` 允许用户在 UI 中输入文本。

## 外观

`TextArea` 的外观由 `view` 和 `pin` 属性控制。

### View

`normal` - `TextArea` 的主要视图（默认使用）。

GRAVITY_TRANSLATION_BLOCK_1_END

`clear` - 当使用自定义包装器时，可以为 `TextArea` 使用此选项。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Pin

允许您控制 `TextArea` 边框的右边缘和左边缘的外观。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## 状态

### Disabled

`TextArea` 的状态，您不希望用户能够与组件进行交互。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Error

`TextArea` 的状态，您想显示用户输入不正确。要更改 `TextArea` 的外观，请使用 `validationState` 属性并将其值设置为 "invalid"。
可以通过 `errorMessage` 属性添加可选的消息文本。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Size

`s` – 当标准控件太大时使用（表格、小卡片）。

`m` – 基本尺寸，在大多数组件中使用。

`l` – 在页面标题、模态窗口或弹出窗口的基本控件中使用。

`xl` – 在促销和登陆页面中使用。

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## 行管理

`TextArea` 的行数由 `rows`、`minRows` 和 `maxRows` 属性控制。`rows` 属性禁用自动高度计算。
要设置 `TextArea` 的所需高度，请使用 `className` 或 `style` 属性，并将 `rows` 属性设置为 1。

GRAVITY_TRANSLATION_BLOCK_12_END

## 可调整大小的 TextArea

通过为 `controlProps` 属性提供 `resize` 样式，可以获得可调整大小的行为。如果您允许文本区域高度可调整，请务必指定 `rows` 属性，否则调整大小将与自动高度计算冲突。

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

## Properties

| 名称            | 描述                                                                                                                       |                        类型                         |     默认值     |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------: | :-------------: |
| autoComplete    | 控件的 `autocomplete` 属性                                                                                            |                 `boolean` `string`                  |                 |
| autoFocus       | 控件的 `autofocus` 属性                                                                                               |                      `boolean`                      |                 |
| className       | 控件的包装器类名                                                                                                  |                      `string`                       |                 |
| controlProps    | 控件的 html 属性                                                                                                     | `React.TextareaHTMLAttributes<HTMLTextAreaElement>` |                 |
| controlRef      | 提供给控件的 React ref                                                                                                 |          `React.Ref<HTMLTextAreaElement>`           |                 |
| defaultValue    | 控件的默认值。在组件未受控时使用                                                            |                      `string`                       |                 |
| disabled        | 指示用户无法与控件交互                                                                          |                      `boolean`                      |     `false`     |
| errorMessage    | 错误文本                                                                                                                        |                      `string`                       |                 |
| hasClear        | 显示用于清除控件值的图标                                                                                   |                      `boolean`                      |     `false`     |
| id              | 控件的 `id` 属性                                                                                                      |                      `string`                       |                 |
| maxRows         | 控件可见的文本行数上限。如果指定了 `rows`，则忽略                                          |                      `number`                       |                 |
| minRows         | 控件可见的文本行数下限。如果指定了 `rows`，则忽略                                          |                      `number`                       |                 |
| name            | 控件的 `name` 属性。如果未指定，将自动生成。                                                         |                      `string`                       |                 |
| note            | 显示在控件右下角的可选元素，并与错误容器共享空间                                            |                  `React.ReactNode`                  |                 |
| onBlur          | 控件失去焦点时触发。将焦点事件作为回调参数提供                                                  |                     `function`                      |                 |
| onChange        | 用户更改输入值时触发。将更改事件作为回调参数提供                                |                     `function`                      |                 |
| onFocus         | 控件获得焦点时触发。将焦点事件作为回调参数提供                                                  |                     `function`                      |                 |
| onKeyDown       | 按下按键时触发。将键盘事件作为回调参数提供                                                     |                     `function`                      |                 |
| onKeyUp         | 释放按键时触发。将键盘事件作为回调参数提供                                                    |                     `function`                      |                 |
| onUpdate        | 用户更改输入值时触发。将新值作为回调参数提供                                  |                     `function`                      |                 |
| pin             | 控件的边框视图                                                                                                         |                      `string`                       | `"round-round"` |
| placeholder     | 在未设置值时显示在控件中的文本                                                                             |                      `string`                       |                 |
| qa              | 测试 id 属性 (`data-qa`)                                                                                                     |                      `string`                       |                 |
| readOnly        | 指示用户无法更改控件的值                                                                             |                      `boolean`                      |     `false`     |
| rows            | 控件可见的文本行数。如果未指定，高度将根据内容自动计算                                |                      `number`                       |                 |
| size            | 控件的大小                                                                                                                |              `"s"` `"m"` `"l"` `"xl"`               |      `"m"`      |
| tabIndex        | 控件的 `tabindex` 属性                                                                                                |                      `string`                       |                 |
| type            | 控件的类型                                                                                                                |                      `string`                       |                 |
| validationState | 验证状态                                                                                                                  |                     `"invalid"`                     |                 |
| value           | 控件的值                                                                                                               |                      `string`                       |                 |
| view            | 控件的视图                                                                                                                |                `"normal"` `"clear"`                 |   `"normal"`    |

## CSS API

| 名称                                | 描述                                         |
| :---------------------------------- | :-------------------------------------------------- |
| `--g-text-area-text-color`          | 文本颜色                                          |
| `--g-text-area-placeholder-color`   | 占位符颜色                                   |
| `--g-text-area-background-color`    | 背景颜色                                    |
| `--g-text-area-border-radius`       | 边框圆角                                       |
| `--g-text-area-border-width`        | 边框宽度                                        |
| `--g-text-area-border-color`        | 边框颜色                                        |
| `--g-text-area-border-color-hover`  | 悬停时的边框颜色                             |
| `--g-text-area-border-color-active` | 活动时的边框颜色                              |
| `--g-text-area-focus-outline-color` | 聚焦时的轮廓颜色（默认不显示） |