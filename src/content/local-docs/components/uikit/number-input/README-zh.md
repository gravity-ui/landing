`NumberInput` 是一个用于输入数值的文本字段，可选配步进器控件、最小值/最大值限制和数值格式化。

```tsx
import {NumberInput} from '@gravity-ui/uikit';
```

## 外观

`NumberInput` 的外观由 `view` 和 `pin` 属性控制。

### View

`normal` - `NumberInput` 的主视图（默认使用）。

GRAVITY_TRANSLATION_BLOCK_1_END

`clear` - 可与自定义的 `NumberInput` 包装器一起使用。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Pin

允许您控制 `NumberInput` 边框的右侧和左侧边缘的外观。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## 状态

### Disabled

`NumberInput` 的禁用状态，此时用户无法与组件进行交互。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Error

`NumberInput` 的错误状态，用于指示用户输入不正确。要更改 `NumberInput` 的外观，请使用 `validationState` 属性并将其值设置为 `"invalid"`。可以通过 `errorMessage` 属性添加可选的错误消息文本。默认情况下，消息文本会渲染在组件外部。
此行为可以通过 `errorPlacement` 属性进行更改。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Size

`s` – 当标准控件过大时使用（例如表格、小型卡片）。

`m` – 基本尺寸，在大多数组件中使用。

`l` – 在页面标题、模态窗口或弹出窗口中执行的基本控件。

`xl` – 在促销和登陆页面上使用。

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Label

允许您在控件的左侧设置标签。

- 标签位于通过 `startContent` 属性添加的元素右侧。
- 标签所占空间不能超过 `NumberInput` 总空间宽度的一半。

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Additional content

### Start content

允许您在控件的左侧添加内容。位于通过 `label` 属性添加的标签的左侧。

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

### End content

允许您在控件的右侧添加内容。位于通过 `hasClear` 属性添加的清除按钮和内部错误图标的右侧。

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Controls

可以通过 `hiddenControls` 属性管理组件最右侧的递增/递减箭头控件的可见性。

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

## Behaviour

### Min/max values

允许您设置可以输入到输入框中的最小值和最大值。不在此范围内的值将在失去焦点时被限制到最近的允许值。

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

### Step

允许您设置在组件控件中的箭头按钮或键盘上，输入框中值递增或递减的量。

它还根据以下规则对允许的值进行限制，并在失去焦点时将输入的数字限制到允许的值：

- 如果 `step` 和 `min` 值都定义为整数，则允许的值定义为 `min + (step * n)`，其中 `n` 是一个整数；
- 如果 `step` 是整数而 `min` 值未定义，则允许的值定义为可被 `step` 整除的值；
- 如果 `step` 或 `min` 值是小数，则不适用限制。

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

### Step multiplier

允许您通过定义 `shiftMultiplier` 属性来设置当按下键盘上的 Shift 键时，步进值所乘以的数值。

GRAVITY_TRANSLATION_BLOCK_24_END

GRAVITY_TRANSLATION_BLOCK_25_END

### Decimal values restriction

允许您通过 `allowDecimal` 属性来切换只能输入整数还是也可以输入小数的功能。
当 `allowDecimal={false}` 时，输入框中的小数点将被忽略，粘贴的小数值将被向下取整。

GRAVITY_TRANSLATION_BLOCK_26_END

GRAVITY_TRANSLATION_BLOCK_27_END

## Properties

| 名称            | 描述                                                                                                           |                     类型                      |      默认值       |
| :-------------- | :------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :----------------: |
| allowDecimal    | 允许输入小数                                                                                                   |                   `boolean`                   |      `false`       |
| autoComplete    | 该控件的 `autocomplete` 属性                                                                                   |              `boolean` `string`               |                    |
| autoFocus       | 该控件的 `autofocus` 属性                                                                                      |                   `boolean`                   |                    |
| className       | 该控件的包装器类名                                                                                             |                   `string`                    |                    |
| controlProps    | 该控件的 html 属性                                                                                             | `React.InputHTMLAttributes<HTMLInputElement>` |                    |
| controlRef      | 提供给该控件的 React ref                                                                                       |         `React.Ref<HTMLInputElement>`         |                    |
| defaultValue    | 该控件的默认值，在组件未受控时使用                                                                             |             `number` `undefined`              |                    |
| disabled        | 表明用户无法与该控件交互                                                                                       |                   `boolean`                   |      `false`       |
| endContent      | 用户在输入节点、清除按钮和错误图标内部渲染的节点                                                               |               `React.ReactNode`               |                    |
| errorMessage    | 错误文本                                                                                                       |                   `string`                    |                    |
| errorPlacement  | 错误放置位置                                                                                                   |              `outside` `inside`               |     `outside`      |
| hasClear        | 显示用于清除控件值的图标                                                                                       |                   `boolean`                   |      `false`       |
| hiddenControls  | 隐藏控件末尾的递增/递减按钮                                                                                    |                   `boolean`                   |                    |
| id              | 该控件的 `id` 属性                                                                                             |                   `string`                    |                    |
| label           | 渲染在输入节点左侧的帮助文本                                                                                   |                   `string`                    |                    |
| max             | 允许的最大值。用于将输入值限制在允许的范围内                                                                   |                   `number`                    | `MAX_SAFE_INTEGER` |
| min             | 允许的最小值。用于将输入值限制在允许的范围内                                                                   |                   `number`                    | `MIN_SAFE_INTEGER` |
| name            | 该控件的 `name` 属性。如果未指定，则在未指定时会自动生成                                                         |                   `string`                    |                    |
| note            | 显示在控件右下角下方的一个可选元素，与错误容器共享空间                                                         |               `React.ReactNode`               |                    |
| onBlur          | 当控件失去焦点时触发。将焦点事件作为回调参数提供                                                               |                  `function`                   |                    |
| onChange        | 当用户更改输入值时触发。将更改事件作为回调参数提供                                                             |                  `function`                   |                    |
| onFocus         | 当控件获得焦点时触发。将焦点事件作为回调参数提供                                                               |                  `function`                   |                    |
| onKeyDown       | 按下按键时触发。将键盘事件作为回调参数提供                                                                     |                  `function`                   |                    |
| onKeyUp         | 释放按键时触发。将键盘事件作为回调参数提供                                                                     |                  `function`                   |                    |
| onUpdate        | 当用户更改输入值时触发。将新值作为回调参数提供                                                                 |                  `function`                   |                    |
| pin             | 该控件的边框视图                                                                                               |                   `string`                    |  `'round-round'`   |
| placeholder     | 当控件没有设置值时显示的文本                                                                                   |                   `string`                    |                    |
| qa              | 测试 ID 属性 (`data-qa`)                                                                                       |                   `string`                    |                    |
| readonly        | 表明用户无法更改控件的值                                                                                       |                   `boolean`                   |      `false`       |
| shiftMultiplier | 按下 shift 键时的步长乘数                                                                                      |                   `number`                    |        `10`        |
| size            | 该控件的大小                                                                                                   |           `"s"` `"m"` `"l"` `"xl"`            |       `"m"`        |
| step            | 使用箭头键盘按钮或组件控件递增/递减输入值时的增量                                                              |                   `number`                    |        `1`         |
| startContent    | 用户在标签和输入之前渲染的节点                                                                                 |               `React.ReactNode`               |                    |
| tabIndex        | 该控件的 `tabindex` 属性                                                                                       |                   `string`                    |                    |
| validationState | 验证状态                                                                                                       |                  `"invalid"`                  |                    |
| value           | 该控件的值                                                                                                     |             `number` `undefined`              |                    |
| view            | 该控件的视图                                                                                                   |             `"normal"` `"clear"`              |     `"normal"`     |

## CSS API

该组件没有自己的 CSS API，但它继承了父组件 TextInput 的 API。

GRAVITY_TRANSLATION_BLOCK_1_END