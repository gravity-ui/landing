<!--GITHUB_BLOCK-->

# TextArea

<!--/GITHUB_BLOCK-->

```tsx
import {TextArea} from '@gravity-ui/uikit';
```

`TextArea` 允许用户在 UI 中输入文本。

## 外观

`TextArea`的外观由 `view` 和 `pin` 属性控制。

### 查看

`normal` -是的主视图 `TextArea` （默认使用）。

<!--LANDING_BLOCK
<ExampleBlock code={`<TextArea placeholder="Placeholder" />`}>
    <UIKit.TextArea placeholder="Placeholder" />
</ExampleBlock>
LANDING_BLOCK-->

`clear` -可以在使用自定义包装器时使用。 `TextArea`

<!--LANDING_BLOCK
<ExampleBlock code={`<TextArea view="clear" placeholder="Placeholder" />`}>
    <UIKit.TextArea view="clear" placeholder="Placeholder" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea view="normal" />
<TextArea view="clear" />
```

<!--/GITHUB_BLOCK-->

### 别针

允许您控制边框左右边缘 `TextArea`的外观。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextArea placeholder="Placeholder" pin="round-brick" />
<TextArea placeholder="Placeholder" pin="brick-brick" />
<TextArea placeholder="Placeholder" pin="brick-round" />
`}
>
    <UIKit.TextArea placeholder="Placeholder" pin="round-brick" />
    <UIKit.TextArea placeholder="Placeholder" pin="brick-brick" />
    <UIKit.TextArea placeholder="Placeholder" pin="brick-round" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea pin="round-brick" />
<TextArea pin="brick-brick" />
<TextArea pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## 国家

### 已禁用

您不希望用户能够与组件交互的状态。 `TextArea`

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextArea placeholder="Placeholder" disabled={true} />
`}
>
    <UIKit.TextArea placeholder="Placeholder" disabled={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea disabled />
```

<!--/GITHUB_BLOCK-->

### 错误

您要显示错误用户输入的 `TextArea` 位置的状态。要更改的外观 `TextArea` ，请使用值为 “无效” 的 `validationState` 属性。
可以通过该 `errorMessage` 属性添加可选的消息文本。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextArea placeholder="Placeholder" errorMessage="Error message" validationState="invalid" />
<TextArea view="clear" placeholder="Placeholder" errorMessage="Error message" validationState="invalid" />
`}
>
    <UIKit.TextArea placeholder="Placeholder" errorMessage="Error message" validationState="invalid" />
    <UIKit.TextArea view="clear" placeholder="Placeholder" errorMessage="Error message" validationState="invalid" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea errorMessage="Error message" validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## 大小

`s`— 当标准控件过大（桌子、小牌）时使用。

`m`— 基本尺寸，用于大多数组件。

`l`— 用于页面标题、模态窗口或弹出窗口中的基本控件。

`xl`— 用于促销和登陆页面。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextArea placeholder="Placeholder" size="s" />
<TextArea placeholder="Placeholder" size="m" />
<TextArea placeholder="Placeholder" size="l" />
<TextArea placeholder="Placeholder" size="xl" />
`}
>
    <UIKit.TextArea placeholder="Placeholder" size="s" />
    <UIKit.TextArea placeholder="Placeholder" size="m" />
    <UIKit.TextArea placeholder="Placeholder" size="l" />
    <UIKit.TextArea placeholder="Placeholder" size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea size="s" />
<TextArea size="m" />
<TextArea size="l" />
<TextArea size="xl" />
```

<!--/GITHUB_BLOCK-->

## 行管理

的行 `TextArea` 数由 `rows` 、 `minRows` 和 `maxRows` 属性控制。该 `rows` 属性禁用自动高度计算。
要设置所需的高度 `TextArea` ，请使用 `className` 或 `style` 属性，并将该 `rows` 属性设置为 1。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextArea placeholder="Placeholder" size="s" />
`}
>
    <div>
        rows = 2
        <UIKit.TextArea placeholder="Placeholder" rows={2} />
    </div>
    <div>
        minRows = 2
        <UIKit.TextArea placeholder="Placeholder" minRows={2} />
    </div>
    <div>
        maxRows = 2
        <UIKit.TextArea placeholder="Placeholder" maxRows={2} />
    </div>
    <div>
        height = 200px
        <UIKit.TextArea placeholder="Placeholder" rows={1} style={{height: 200px}}/>
    </div>
</ExampleBlock>
LANDING_BLOCK-->

## 可调整大小的 TextArea

你可以通过为属性提供 `resize` 样式来 `controlProps` 获得可调整大小的行为。如果您允许调整文本区域的高度，请务必指定该 `rows` 属性，否则调整大小将与自动高度计算相冲突。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TextArea
    rows={4}
    placeholder="Placeholder"
    style={{width: "auto", maxWidth: "100%"}}
    controlProps={{style: {resize: "both"}}}
/>
`}
>
    <UIKit.TextArea
        rows={4}
        placeholder="Placeholder"
        style={{width: "auto", maxWidth: "100%"}}
        controlProps={{style: {resize: "both"}}}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TextArea rows={4} controlProps={{style: {resize: 'both'}}} />
```

<!--/GITHUB_BLOCK-->

## 属性

| 姓名            | 描述                                                     |                         类型                          |      默认       |
| :-------------- | :------------------------------------------------------- | :---------------------------------------------------: | :-------------: |
| autoComplete    | 控件的 `autocomplete` 属性                               |                  `boolean` `string`                   |                 |
| autoFocus       | 控件的 `autofocus` 属性                                  |                       `boolean`                       |                 |
| className       | 控件的包装器类名                                         |                       `string`                        |                 |
| controlProps    | 控件的 html 属性                                         | `react.textareAreahtmlAtributes<HTMLTextAreaElement>` |                 |
| controlRef      | 向控件提供了 React ref                                   |           `React.Ref<HTMLTextAreaElement>`            |                 |
| defaultValue    | 控件的默认值。在组件不受控制时使用                       |                       `string`                        |                 |
| 残疾的          | 表示用户无法与控件进行交互                               |                       `boolean`                       |     `false`     |
| errorMessage    | 错误文本                                                 |                       `string`                        |                 |
| hasClear        | 显示用于清除控件值的图标                                 |                       `boolean`                       |     `false`     |
| id              | 控件的 `id` 属性                                         |                       `string`                        |                 |
| maxRows         | 控件的最大可见文本行数。如果 `rows` 已指定，则忽略       |                       `number`                        |                 |
| minRows         | 控件的最小可见文本行数。如果 `rows` 已指定，则忽略       |                       `number`                        |                 |
| 名称            | 控件的 `name` 属性。如果未指定，它将自动生成。           |                       `string`                        |                 |
| 便条            | 显示在控件右下角的可选元素，与错误容器共享空间           |                   `React.ReactNode`                   |                 |
| onBlur          | 当控件失去对焦时触发。提供焦点事件作为回调的参数         |                      `function`                       |                 |
| onChange        | 当用户更改输入值时触发。提供变更事件作为回调的参数       |                      `function`                       |                 |
| onFocus         | 当控件获得焦点时触发。提供焦点事件作为回调的参数         |                      `function`                       |                 |
| onKeyDown       | 按下按键时触发。提供键盘事件作为回调的参数               |                      `function`                       |                 |
| onKeyUp         | 释放密钥时触发。提供键盘事件作为回调的参数               |                      `function`                       |                 |
| onUpdate        | 当用户更改输入值时触发。提供新值作为回调的参数           |                      `function`                       |                 |
| 大头针          | 控件的边框视图                                           |                       `string`                        | `"round-round"` |
| 占位符          | 未设置值时显示在控件中的文本                             |                       `string`                        |                 |
| qa              | 测试 ID 属性 (`data-qa`)                                 |                       `string`                        |                 |
| readOnly        | 表示用户无法更改控件的值                                 |                       `boolean`                       |     `false`     |
| 行              | 控件的可见文本行数。如果未指定，则将根据内容自动计算夜晚 |                       `number`                        |                 |
| 尺寸            | 控件的大小                                               |                     `"s"` `"xl"`                      |      `"m"`      |
| tabIndex        | 控件的 `tabindex` 属性                                   |                       `string`                        |                 |
| 类型            | 控件的类型                                               |                       `string`                        |                 |
| validationState | 验证状态                                                 |                      `"invalid"`                      |                 |
| 价值            | 控件的值                                                 |                       `string`                        |                 |
| 观点            | 控件的视图                                               |                 `"normal"` `"clear"`                  |   `"normal"`    |

## CSS API

| 姓名                                | 描述                                 |
| :---------------------------------- | :----------------------------------- |
| `--g-text-area-text-color`          | 文字颜色                             |
| `--g-text-area-placeholder-color`   | 占位符颜色                           |
| `--g-text-area-background-color`    | 背景颜色                             |
| `--g-text-area-border-radius`       | 边框半径                             |
| `--g-text-area-border-width`        | 边框宽度                             |
| `--g-text-area-border-color`        | 边框颜色                             |
| `--g-text-area-border-color-hover`  | 悬停时的边框颜色                     |
| `--g-text-area-border-color-active` | 边框颜色（如果处于活动状态）         |
| `--g-text-area-focus-outline-color` | 聚焦时的轮廓颜色（默认情况下不显示） |
