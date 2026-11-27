<!--GITHUB_BLOCK-->

# Palette

<!--/GITHUB_BLOCK-->

`Palette` 组件用于显示图标、表情符号、反应和符号的网格，您可以选择或取消选择它们。

```tsx
import {Palette} from '@gravity-ui/uikit';
```

### 禁用状态

您可以使用 `disabled` 属性禁用所有选项。如果您只想禁用某些选项，可以更改这些 `options` (`PaletteOption[]`) 的 `disabled` 属性。

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

const disabledOptions: PaletteOption[] = [{...options[0], disabled: true}, options[1]];

export default function () {
    return (
        <>
            <Palette options={disabledOptions} />
            <Palette options={options} disabled />
        </>
    );
}
SANDBOX-->

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

### 尺寸

使用 `size` 属性来管理 `Palette` 的尺寸。默认尺寸为 `s`。

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return (
        <>
            <Palette options={options} size="xs" />
            <Palette options={options} size="s" />
            <Palette options={options} size="m" />
            <Palette options={options} size="l" />
            <Palette options={options} size="xl" />
        </>
    );
}
SANDBOX-->

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

### 列数

您可以通过更改 `columns` 属性来更改网格中的列数（默认值为 `6`）。

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return <Palette options={options} columns={1} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  {content: '😎', value: 'ID-cool'},
  {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />;
```

<!--/GITHUB_BLOCK-->

### 多选

默认情况下，您可以选择和取消选择多个选项。如果您只想使单个选项可选择，可以禁用 `multiple` 属性。

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return <Palette options={options} multiple={false} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  {content: '😎', value: 'ID-cool'},
  {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />;
```

<!--/GITHUB_BLOCK-->

## 属性

`PaletteProps`:

| 名称            | 描述                                                                           |                          类型                          | 默认值 |
| :-------------- | :----------------------------------------------------------------------------- | :----------------------------------------------------: | :-----: |
| aria-label      | `aria-label` HTML 属性                                                         |                        `string`                        |         |
| aria-labelledby | 可见 `Palette` 标题元素的 ID                                                   |                        `string`                        |         |
| className       | `class` HTML 属性                                                              |                        `string`                        |         |
| columns         | 每行元素的数量                                                                 |                        `number`                        |   `6`   |
| defaultValue    | 组件挂载时设置初始值状态                                                       |                       `string[]`                       |         |
| disabled        | 禁用选项                                                                       |                       `boolean`                        | `false` |
| multiple        | 启用多选                                                                       |                       `boolean`                        | `true`  |
| onBlur          | `onBlur` 事件处理程序                                                          | `(event: React.FocusEvent<HTMLButtonElement>) => void` |         |
| onFocus         | `onFocus` 事件处理程序                                                         | `(event: React.FocusEvent<HTMLButtonElement>) => void` |         |
| onUpdate        | 用户更改状态时触发。将新值作为回调参数提供                                   |              `(value: string[]) => void`               |         |
| optionClassName | 调色板按钮的 `class` HTML 属性                                                 |                        `string`                        |         |
| options         | 选项列表（调色板元素）                                                         |                   `PaletteOption[]`                    |  `[]`   |
| qa              | `data-qa` HTML 属性，用于测试                                                  |                        `string`                        |         |
| rowClassName    | 调色板行的 `class` HTML 属性                                                   |                        `string`                        |         |
| size            | 设置元素的大小                                                                 |                 `xs` `s` `m` `l` `xl`                  |   `m`   |
| style           | `style` HTML 属性                                                              |                 `React.CSSProperties`                  |         |
| value           | 组件受控使用的当前值                                                           |                       `string[]`                       |         |

`PaletteOption`:

| 名称     | 描述            |    类型     | 默认值 |
| :------- | :-------------- | :---------: | :-----: |
| content  | `class` HTML 属性 | `ReactNode` |         |
| disabled | 禁用按钮        |  `boolean`  | `false` |
| title    | `title` HTML 属性 |  `string`   |         |
| value    | 控件值          |  `string`   |         |
