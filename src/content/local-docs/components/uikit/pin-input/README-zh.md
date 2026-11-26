`PinInput` 是一组用于快速输入数字或字母数字值的输入框。它最常见的用例是输入通过短信 (SMS)、电子邮件或身份验证器应用程序收到的 OTP 或确认码。

每个输入框一次只收集一个字符。当接受一个值时，焦点会移到下一个输入框，直到所有字段都填满。

```tsx
import {PinInput} from '@gravity-ui/uikit';
```

## 类型

默认情况下，输入框只接受数字值。要允许字母数字值，请将 `type` 属性设置为 `"alphanumeric"`：

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## 大小

此组件有四种尺寸：`s`、`m`、`l` 和 `xl`。默认尺寸为 `m`。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## 状态

如果您不希望用户与组件交互，请设置 `disabled` 属性：

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

要显示组件的无效状态，请使用 `validationState` 属性并将其值设置为 `"invalid"`。您还可以选择使用 `errorMessage` 属性设置错误消息文本：

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## 占位符

默认情况下，输入框没有占位符。您可以使用 `placeholder` 属性设置它：

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## 掩码

如果您需要掩盖输入的值，请使用 `mask` 属性。它的行为类似于 `<input type="password"/>`。

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## OTP

如果您希望浏览器从外部上下文（例如短信）建议一次性代码，请设置 `otp` 属性。

## API

- `focus(): void`: 将焦点设置到当前活动的输入框。

## CSS API

| 名称                       | 描述                                                         |
| :------------------------- | :----------------------------------------------------------- |
| `--g-pin-input-item-width` | 设置每个输入框的宽度，除非 `responsive` 为 `true`。         |
| `--g-pin-input-item-gap`   | 设置输入框之间的间距。                                       |

## 属性

| 名称             | 描述                                                                                                                                           |                     类型                     |   默认值   |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: | :---------: |
| apiRef           | [API](#api) 的 Ref。                                                                                                                               |              `React.RefObject`               |             |
| aria-describedby | `aria-describedby` HTML 属性                                                                                                                     |                   `string`                   |             |
| aria-label       | `aria-label` HTML 属性                                                                                                                           |                   `string`                   |             |
| aria-labelledby  | `aria-labelledby` HTML 属性                                                                                                                      |                   `string`                   |             |
| autoFocus        | 在初始渲染时启用或禁用对第一个输入的聚焦。                                                                                                               |                  `boolean`                   |             |
| className        | `class` HTML 属性                                                                                                                                |                   `string`                   |             |
| defaultValue     | 非受控组件的初始值。                                                                                                                                         |                  `string[]`                  |             |
| disabled         | 切换 `disabled` 状态                                                                                                                          |                  `boolean`                   |             |
| errorMessage     | 位于底部开始角下方的错误文本，与 note 容器共享空间。仅当 `validationState` 设置为 `"invalid"` 时可见。                                                                                             |              `React.ReactNode`               |             |
| id               | 输入框的 `id` HTML 属性前缀。生成的 ID 还将包含 `"-${index}"` 部分。                                                                                    |                   `string`                   |             |
| length           | 输入字段的数量。                                                                                                                               |                   `number`                   |     `4`     |
| mask             | 设置为 `true` 时，输入值将被屏蔽为密码字段。                                                                                                           |                  `boolean`                   |             |
| name             | 输入框的 `name` HTML 属性。                                                                                                                      |                   `string`                   |             |
| form             | 底层输入元素的关联表单。                                                                                                                                  |                   `string`                   |             |
| note             | 位于底部结束角下方的元素，与 error 容器共享空间。                                                                                                                           |              `React.ReactNode`               |             |
| onUpdate         | 任何输入更改时触发的回调。                                                                                                                                           |         `(value: string[]) => void`          |             |
| onUpdateComplete | 任何输入更改并且所有输入都已填满时触发的回调。                                                                                                                                       |         `(value: string[]) => void`          |             |
| otp              | 设置为 `true` 时，将 `autocomplete="one-time-code"` 添加到输入框。                                                                                    |                  `boolean`                   |             |
| placeholder      | 输入框的占位符                                                                                                                                |                   `string`                   |             |
| qa               | 用于测试目的的 `data-qa` HTML 属性。                                                                                                                                  |                   `string`                   |             |
| responsive       | 父容器的宽度在输入框之间平均分配。                                                                                                                                    |                  `boolean`                   |             |
| size             | 输入字段的大小。                                                                                                                                     |           `"s"` `"m"` `"l"` `"xl"`           |    `"m"`    |
| style            | `style` HTML 属性                                                                                                                                |            `React.CSSProperties`             |             |
| type             | 确定允许哪些输入值类型。                                                                                                                                      |         `"numeric"` `"alphanumeric"`         | `"numeric"` |
| validationState  | 影响组件外观的验证状态。                                                                                                                              |                 `"invalid"`                  |             |
| value            | 受控组件的当前值。                                                                                                                                          |                  `string[]`                  |             |
| `onFocus`        | 组件获得焦点时触发的回调。                                                                                                                                    | `(event: React.FocusEvent<Element>) => void` |             |
| `onBlur`         | 组件失去焦点时触发的回调。                                                                                                                                       | `(event: React.FocusEvent<Element>) => void` |             |