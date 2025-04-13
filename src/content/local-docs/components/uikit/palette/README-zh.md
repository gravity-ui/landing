<!--GITHUB_BLOCK-->

# 调色板

<!--/GITHUB_BLOCK-->

```tsx
import {Palette} from '@gravity-ui/uikit';
```

该 `Palette` 组件用于显示图标、表情符号、反应和符号的网格，您可以选择或取消选择这些图标、表情符号、反应和符号。

### 禁用状态

您可以使用该 `disabled` 属性禁用所有选项。如果您只想禁用某些选项，则可以更改这些选项 `options` （`PaletteOption[]`）的 `disabled` 属性。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];
// disable the first item
<Palette options={[{ ...options[0], disabled: true }, options[1]]} disabled={true} />
// or disable all of them
<Palette options={options} disabled={true} />
`}
>
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool', disabled: true},
            {content: '🥴', value: 'ID-woozy'},
        ]}
    />
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool'},
            {content: '🥴', value: 'ID-woozy'},
        ]}
        disabled={true}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  // disable a single item
  {content: '😎', value: 'ID-cool', disabled: true},
  {content: '🥴', value: 'ID-woozy'},
];
// or disable all of them
<Palette options={options} disabled={true} />;
```

<!--/GITHUB_BLOCK-->

### 大小

使用该 `size` 属性来管理大 `Palette` 小。默认大小为 `s`。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} size={"xs"} />
<Palette options={options} size={"s"} />
<Palette options={options} size={"m"} />
<Palette options={options} size={"l"} />
<Palette options={options} size={"xl"} />
`}
>
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool'},
            {content: '🥴', value: 'ID-woozy'},
        ]}
        size="xs"
    />
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool'},
            {content: '🥴', value: 'ID-woozy'},
        ]}
        size="s"
    />
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool'},
            {content: '🥴', value: 'ID-woozy'},
        ]}
        size="m"
    />
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool'},
            {content: '🥴', value: 'ID-woozy'},
        ]}
        size="l"
    />
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool'},
            {content: '🥴', value: 'ID-woozy'},
        ]}
        size="xl"
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} size={"xs"} />
<Palette options={options} size={"s"} />
<Palette options={options} size={"m"} />
<Palette options={options} size={"l"} />
<Palette options={options} size={"xl"} />
```

<!--/GITHUB_BLOCK-->

### 专栏

您可以通过更改 `columns` 属性来更改网格中的列数（默认值为 `6`）。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />
`}
>
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool'},
            {content: '🥴', value: 'ID-woozy'},
        ]}
        columns={1}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  {content: '😎', value: 'ID-cool'},
  {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />;
```

<!--/GITHUB_BLOCK-->

### 多个

默认情况下，您可以选择和取消选择多个选项。如果您只想使单个选项可选，则可以禁用该 `multiple` 属性。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} multiple={false} />
`}
>
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool'},
            {content: '🥴', value: 'ID-woozy'},
        ]}
        multiple={false}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  {content: '😎', value: 'ID-cool'},
  {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />;
```

<!--/GITHUB_BLOCK-->

### 属性

`PaletteProps`:

| 姓名            | 描述                                       |                          类型                          |  默认   |
| :-------------- | :----------------------------------------- | :----------------------------------------------------: | :-----: |
| aria-label      | `aria-label` HTML 属性                     |                        `string`                        |         |
| aria-labelledby | 可见标 `Palette` 题元素的 ID               |                        `string`                        |         |
| className       | `class` HTML 属性                          |                        `string`                        |         |
| 列              | 每行的元素数                               |                        `number`                        |   `6`   |
| defaultValue    | 设置组件挂载时的初始值状态                 |                       `string[]`                       |         |
| 残疾的          | 禁用选项                                   |                       `boolean`                        | `false` |
| 多个            | 允许选择多个选项                           |                       `boolean`                        | `true`  |
| onBlur          | `onBlur` 事件处理器                        | `（活动：react.focusEvent<HTMLButtonElement>) = 无效>` |         |
| onFocus         | `onFocus` 事件处理器                       | `（活动：react.focusEvent<HTMLButtonElement>) = 无效>` |         |
| onUpdate        | 当用户更改状态时触发提供新值作为回调的参数 |              `(value: string[]) => void`               |         |
| optionClassName | `class` 调色板按钮的 HTML 属性             |                        `string`                        |         |
| 选项            | 选项列表（调色板元素）                     |                   `PaletteOption[]`                    |  `[]`   |
| qa              | `data-qa` HTML 属性，用于测试              |                        `string`                        |         |
| rowClassName    | `class` 调色板行的 HTML 属性               |                        `string`                        |         |
| 尺寸            | 设置元素的大小                             |                       `xs` `xl`                        |   `m`   |
| 风格            | `style` HTML 属性                          |                 `React.CSSProperties`                  |         |
| 价值            | 组件受控使用的当前值                       |                       `string[]`                       |         |

`PaletteOption`:

| 姓名   | 描述              |    类型     |  默认   |
| :----- | :---------------- | :---------: | :-----: |
| 内容   | `class` HTML 属性 | `ReactNode` |         |
| 残疾的 | 禁用按钮          |  `boolean`  | `false` |
| 标题   | `title` HTML 属性 |  `string`   |         |
| 价值   | 控制值            |  `string`   |         |
