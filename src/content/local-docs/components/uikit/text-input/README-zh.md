<!--GITHUB_BLOCK-->

# TextInput

<!--/GITHUB_BLOCK-->

```tsx
import {TextInput} from '@gravity-ui/uikit';
```

TextInput 允许用户在用户界面中输入文本。

## 外观

的 `TextInput` 外观由 `view` 和 `pin` 属性控制。

### 查看

`normal` -的主视图 `TextInput` （默认使用）。

<!--LANDING_BLOCK
<ExampleBlock code={`<TextInput placeholder="Placeholder" />`}>
    <UIKit.TextInput placeholder="Placeholder" />
</ExampleBlock>
LANDING_BLOCK-->

`clear` -可以与自定义包装器一起使用。 `TextInput`

<!--LANDING_BLOCK
<ExampleBlock code={`<TextInput view="clear" placeholder="Placeholder" />`}>
    <UIKit.TextInput view="clear" placeholder="Placeholder" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput view="normal" />
<TextInput view="clear" />
```

<!--/GITHUB_BLOCK-->

### 别针

允许你控制边框左右边缘 `TextInput`的视图。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextInput placeholder="Placeholder" pin="round-brick" />
<TextInput placeholder="Placeholder" pin="brick-brick" />
<TextInput placeholder="Placeholder" pin="brick-round" />
`}
>
    <UIKit.TextInput placeholder="Placeholder" pin="round-brick" />
    <UIKit.TextInput placeholder="Placeholder" pin="brick-brick" />
    <UIKit.TextInput placeholder="Placeholder" pin="brick-round" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput pin="round-brick" />
<TextInput pin="brick-brick" />
<TextInput pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## 国家

### 已禁用

您不希望用户能够与组件交互的状态。 `TextInput`

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextInput placeholder="Placeholder" disabled={true} />
`}
>
    <UIKit.TextInput placeholder="Placeholder" disabled={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput disabled />
```

<!--/GITHUB_BLOCK-->

### 错误

您要指明用户输入错误的状态。 `TextInput`要更改 `TextInput` 外观，请使用带有 `"invalid"` 值的 `validationState` 属性。可以通过该 `errorMessage` 属性添加可选的消息文本。默认情况下，消息文本在组件外部呈现。
可以使用该 `errorPlacement` 属性来更改此行为。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextInput placeholder="Placeholder" errorMessage="Error message" validationState="invalid" />
<TextInput placeholder="Placeholder" errorPlacement="inside" errorMessage="Error message" validationState="invalid" />
`}
>
    <UIKit.TextInput placeholder="Placeholder" errorMessage="Error message" validationState="invalid" />
    <UIKit.TextInput placeholder="Placeholder" errorPlacement="inside" errorMessage="Error message" validationState="invalid" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput errorMessage="Error message" validationState="invalid" />
<TextInput errorPlacement="inside" errorMessage="Error message" validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## 大小

`s`— 当标准控件过大（桌子、小牌）时使用。

`m`— 基本尺寸，用于大多数组件。

`l`— 在页面标题、模态窗口或弹出窗口中执行的基本控件。

`xl`— 用于促销和登陆页面。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextInput placeholder="Placeholder" size="s" />
<TextInput placeholder="Placeholder" size="m" />
<TextInput placeholder="Placeholder" size="l" />
<TextInput placeholder="Placeholder" size="xl" />
`}
>
    <UIKit.TextInput placeholder="Placeholder" size="s" />
    <UIKit.TextInput placeholder="Placeholder" size="m" />
    <UIKit.TextInput placeholder="Placeholder" size="l" />
    <UIKit.TextInput placeholder="Placeholder" size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput size="s" />
<TextInput size="m" />
<TextInput size="l" />
<TextInput size="xl" />
```

<!--/GITHUB_BLOCK-->

## 标签

允许您将标签设置在控件的左侧。

- 标签占据相对于控件的最左侧位置。也就是说，通过 `startContent` 属性添加的元素将位于右侧。
- 标签占用的宽度不能超过整个 TextInput 空间宽度的一半。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextInput placeholder="Placeholder" label="Label" />
<TextInput placeholder="Placeholder" label="Very long label with huge amount of symbols" />
`}
>
    <UIKit.TextInput placeholder="Placeholder" label="Label" />
    <UIKit.TextInput placeholder="Placeholder" label="Very long label with huge amount of symbols" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput label="Label" />
```

<!--/GITHUB_BLOCK-->

## 其他内容

### 开始内容

允许您在控件的左侧（如果使用 [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL)，则向右添加内容）。位于通过 `label` 属性添加的标签的左侧（如果使用 rtl，则位于右侧）。

<!--LANDING_BLOCK
<ExampleBlock
    code={`<TextInput placeholder="Placeholder" label="Label" startContent={<Label size="s">Left</Label>} />`}
>
    <UIKit.TextInput
        placeholder="Search"
        label="Label"
        startContent={<UIKit.Label size="s">Left</UIKit.Label>}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput startContent={<Label>Left</Label>} />
```

<!--/GITHUB_BLOCK-->

### 结束内容

允许您在控件的右侧（如果使用 [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL) ，则向左添加内容）。位于通过 `hasClear` 属性添加的清除按钮的右侧（如果使用 rtl，则位于左侧）。

<!--LANDING_BLOCK
<ExampleBlock
    code={`<TextInput placeholder="Placeholder" endContent={<Label size="s">Right</Label>} hasClear/>`}
>
    <UIKit.TextInput
        hasClear
        placeholder="Placeholder"
        endContent={<UIKit.Label size="s">Right</UIKit.Label>}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput endContent={<Label>Right</Label>} />
```

<!--/GITHUB_BLOCK-->

## 属性

| 姓名            | 描述                                                     |                     类型                     |      默认       |
| :-------------- | :------------------------------------------------------- | :------------------------------------------: | :-------------: |
| autoComplete    | 控件的 `autocomplete` 属性                               |              `boolean` `string`              |                 |
| autoFocus       | 控件的 `autofocus` 属性                                  |                  `boolean`                   |                 |
| className       | 控件的包装器类名                                         |                   `string`                   |                 |
| controlProps    | 控件的 html 属性                                         | `react.inputhtmlAtributes<HTMLInputElement>` |                 |
| controlRef      | 向控件提供了 React ref                                   |        `React.Ref<HTMLInputElement>`         |                 |
| defaultValue    | 控件的默认值，在组件不受控制时使用                       |                   `string`                   |                 |
| 残疾的          | 表示用户无法与控件进行交互                               |              `React.ReactNode`               |                 |
| endContent      | 在输入节`点、清除按钮和错误图标之后呈现的用户节点        |                   `string`                   |                 |
| errorMessage    | 错误文本                                                 |                   `string`                   |                 |
| errorPlacement  | 放置错误                                                 |              `outside` `inside`              |    `outside`    |
| hasClear        | 显示用于清除控件值的图标                                 |                  `boolean`                   |     `false`     |
| id              | 控件的 `id` 属性                                         |                   `string`                   |                 |
| 标签            | 在输入节点左侧呈现的帮助文本                             |                   `string`                   |                 |
| 名称            | 控件的 `name` 属性。如果未指定，则如果未指定，则自动生成 |                   `string`                   |                 |
| 便条            | 显示在控件右下角的可选元素，与错误容器共享一个空间       |              `React.ReactNode`               |                 |
| onBlur          | 当控件失去对焦时触发。提供焦点事件作为回调的参数         |                  `function`                  |                 |
| onChange        | 当用户更改输入值时触发。提供变更事件作为回调的参数       |                  `function`                  |                 |
| onFocus         | 当控件获得焦点时触发。提供焦点事件作为回调的参数         |                  `function`                  |                 |
| onKeyDown       | 按下按键时触发。提供键盘事件作为回调的参数               |                  `function`                  |                 |
| onKeyUp         | 释放密钥时触发。提供键盘事件作为回调的参数               |                  `function`                  |                 |
| onUpdate        | 当用户更改输入值时触发。提供新值作为回调的参数           |                  `function`                  |                 |
| 大头针          | 控件的边框视图                                           |                   `string`                   | `'round-round'` |
| 占位符          | 未设置值时在控件中显示的文本                             |                   `string`                   |                 |
| qa              | 测试 ID 属性 (`data-qa`)                                 |                   `string`                   |
| readOnly        | 表示用户无法更改控件的值                                 |                  `boolean`                   |     `false`     |
| 尺寸            | 控件的大小                                               |                 `"s"` `"xl"`                 |      `"m"`      |
| startContent    | 在标签和输入节点之前呈现的用户`节点                      |              `React.ReactNode`               |                 |
| tabIndex        | 控件的 `tabindex` 属性                                   |                   `string`                   |                 |
| 类型            | 控件的类型                                               |              `"email"` `"url"`               |                 |
| validationState | 验证状态                                                 |                 `"invalid"`                  |                 |
| 价值            | 控件的价值                                               |                   `string`                   |                 |
| 观点            | 控件视图                                                 |             `"normal"` `"clear"`             |   `"normal"`    |

## CSS API

| 姓名                                 | 描述                                 |
| :----------------------------------- | :----------------------------------- |
| `--g-text-input-text-color`          | 文字颜色                             |
| `--g-text-input-label-color`         | 标签颜色                             |
| `--g-text-input-placeholder-color`   | 占位符颜色                           |
| `--g-text-input-background-color`    | 背景颜色                             |
| `--g-text-input-border-radius`       | 边框半径                             |
| `--g-text-input-border-width`        | 边框宽度                             |
| `--g-text-input-border-color`        | 边框颜色                             |
| `--g-text-input-border-color-hover`  | 悬停时的边框颜色                     |
| `--g-text-input-border-color-active` | 边框颜色（如果处于活动状态）         |
| `--g-text-input-focus-outline-color` | 聚焦时的轮廓颜色（默认情况下不显示） |
