<!--GITHUB_BLOCK-->

# PinInput

<!--/GITHUB_BLOCK-->

```tsx
import {PinInput} from '@gravity-ui/uikit';
```

`PinInput` 是一组用于快速输入数字或字母数字值序列的输入。它最常见的用例是输入通过短信 (SMS)、电子邮件或身份验证器应用程序收到的 OTP 或确认码。

每个输入一次收集一个字符。当一个值被接受时，焦点将移至下一个输入，直到所有字段都填充完毕。

## 类型

默认情况下，输入仅接受数值。要允许使用字母数字值，请将该 `type` 属性设置为： `"alphanumeric"`

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<PinInput type="alphanumeric" />
`}
>
    <UIKit.PinInput type="alphanumeric" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput type="alphanumeric" />
```

<!--/GITHUB_BLOCK-->

## 大小

该组件有四种尺寸： `s` `m` 、 `l` 、和 `xl`。默认大小为 `m`。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<PinInput size="s" />
<PinInput size="m" />
<PinInput size="l" />
<PinInput size="xl" />
`}
>
    <UIKit.PinInput size="s" />
    <UIKit.PinInput size="m" />
    <UIKit.PinInput size="l" />
    <UIKit.PinInput size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput size="s" />
<PinInput size="m" />
<PinInput size="l" />
<PinInput size="xl" />
```

<!--/GITHUB_BLOCK-->

## 州

如果你不希望用户与组件交互，请设置该 `disabled` 属性：

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<PinInput disabled />
`}
>
    <UIKit.PinInput disabled />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput disabled />
```

<!--/GITHUB_BLOCK-->

要显示组件的无效状态，请使用带有 `"invalid"` 值的 `validationState` 属性。或者，您可以使用以下 `errorMessage` 属性设置错误消息文本：

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<PinInput validationState="invalid" errorMessage="Incorrect PIN" />
`}
>
    <UIKit.PinInput validationState="invalid" errorMessage="Incorrect PIN" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput validationState="invalid" errorMessage="Incorrect PIN" />
```

<!--/GITHUB_BLOCK-->

## 占位符

默认情况下，输入没有占位符。你可以用这个 `placeholder` 属性来设置它：

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<PinInput placeholder="😎" />
`}
>
    <UIKit.PinInput placeholder="😎" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput placeholder="😎" />
```

<!--/GITHUB_BLOCK-->

## 面具

如果需要掩盖输入的值，请使用该 `mask` 属性。它与 `<input type="password"/>` 行为类似。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<PinInput mask />
`}
>
    <UIKit.PinInput mask />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput mask />
```

<!--/GITHUB_BLOCK-->

## OTP

如果你想让浏览器推荐来自外部环境（例如 SMS）的一次性代码，请设置该 `otp` 属性。

## API

- `focus(): void`:将焦点设置为当前活动输入。

## CSS API

| 姓名                       | 描述                                              |
| :------------------------- | :------------------------------------------------ |
| `--g-pin-input-item-width` | 设置每个输入的宽度，除非 `responsive` 是 `true`。 |
| `--g-pin-input-item-gap`   | 设置输入之间的间隔。                              |

## 属性

| 姓名             | 描述                                                                                              |                     类型                     |    默认     |
| :--------------- | :------------------------------------------------------------------------------------------------ | :------------------------------------------: | :---------: |
| apiRef           | 请参阅 [API](#api)。                                                                              |              `React.RefObject`               |             |
| 咏叹调描述者     | `aria-describedby` HTML 属性                                                                      |                   `string`                   |             |
| aria-label       | `aria-label` HTML 属性                                                                            |                   `string`                   |             |
| aria-labelledby  | `aria-labelledby` HTML 属性                                                                       |                   `string`                   |             |
| autoFocus        | 启用或禁用对初始渲染时第一个输入的聚焦。                                                          |                  `boolean`                   |             |
| className        | `class` HTML 属性                                                                                 |                   `string`                   |             |
| defaultValue     | 不受控组件的初始值。                                                                              |                  `string[]`                  |             |
| 残疾的           | 切换 `disabled` 状态                                                                              |                  `boolean`                   |             |
| errorMessage     | 错误文本位于底部起始角下方，与笔记容器共享空间。仅在设置 `validationState` 为时可见 `"invalid"`。 |              `React.ReactNode`               |             |
| id               | `id` 输入的 HTML 属性前缀。生成的 ID 也将包含该 `"-${index}"` 部件。                              |                   `string`                   |             |
| 长度             | 输入字段的数量。                                                                                  |                   `number`                   |     `4`     |
| 面具             | 设置为时 `true` ，输入值将被掩盖为密码字段。                                                      |                  `boolean`                   |             |
| 名称             | `name` 用于输入的 HTML 属性。                                                                     |                   `string`                   |             |
| 表格             | 基础输入元素的关联形式。                                                                          |                   `string`                   |             |
| 便条             | 放置在底角下方的元素，与错误容器共享空间。                                                        |              `React.ReactNode`               |             |
| onUpdate         | 当任何输入发生变化时都会触发回调。                                                                |         `(value: string[]) => void`          |             |
| onUpdateComplete | 当任何输入发生变化且全部填充时，回调就会触发。                                                    |         `(value: string[]) => void`          |             |
| OTP              | 设置为时 `true` ，将 `autocomplete="one-time-code"` 添加到输入中。                                |                  `boolean`                   |             |
| 占位符           | 输入的占位符                                                                                      |                   `string`                   |             |
| qa               | `data-qa` 用于测试目的的 HTML 属性。                                                              |                   `string`                   |             |
| 响应             | 父项的宽度在输入之间均匀分布。                                                                    |                  `boolean`                   |             |
| 尺寸             | 输入字段大小。                                                                                    |                 `"s"` `"xl"`                 |    `"m"`    |
| 风格             | `style` HTML 属性                                                                                 |            `React.CSSProperties`             |             |
| 类型             | 确定允许哪些输入值类型。                                                                          |         `"numeric"` `"alphanumeric"`         | `"numeric"` |
| validationState  | 影响组件外观的验证状态。                                                                          |                 `"invalid"`                  |             |
| 价值             | 受控组件的当前值。                                                                                |                  `string[]`                  |             |
| `onFocus`        | 当组件获得焦点时触发回调。                                                                        | `（活动：react.focusEvent<Element>) = 无效>` |             |
| `onBlur`         | 当组件失去焦点时触发回调。                                                                        | `（活动：react.focusEvent<Element>) = 无效>` |             |
