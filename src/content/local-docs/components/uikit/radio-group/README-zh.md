<!--GITHUB_BLOCK-->

# RadioGroup

<!--/GITHUB_BLOCK-->

`RadioGroup` 组件用于创建一个分组，用户可以从中选择一个选项。

```tsx
import {RadioGroup} from '@gravity-ui/uikit';
```

### 禁用状态

<!--SANDBOX
import type {RadioGroupOption} from '@gravity-ui/uikit';
import {RadioGroup} from '@gravity-ui/uikit';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <RadioGroup name="group2" defaultValue={options[0].value} options={options} disabled />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: RadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<RadioGroup name="group2" defaultValue={options[0].value} options={options} disabled />;
```

<!--/GITHUB_BLOCK-->

### Size

使用 `size` 属性来管理 `RadioGroup` 的大小。默认大小为 `m`。

<!--SANDBOX
import type {RadioGroupOption} from '@gravity-ui/uikit';
import {RadioGroup} from '@gravity-ui/uikit';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <>
            <RadioGroup name="group1" defaultValue={options[0].value} options={options} size="m" />
            <RadioGroup name="group2" defaultValue={options[0].value} options={options} size="l" />
            <RadioGroup name="group3" defaultValue={options[0].value} options={options} size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
  const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
  ];
  <RadioGroup name="group1" defaultValue={options[0].value} options={options} size="m"/>
  <RadioGroup name="group2" defaultValue={options[0].value} options={options} size="l"/>
  <RadioGroup name="group3" defaultValue={options[0].value} options={options} size="xl"/>
```

<!--/GITHUB_BLOCK-->

### Direction

使用 `direction` 属性来管理 `RadioGroup` 的方向。默认方向为 `horizontal`。

<!--SANDBOX
import type {RadioGroupOption} from '@gravity-ui/uikit';
import {RadioGroup} from '@gravity-ui/uikit';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <>
            <RadioGroup
                name="group1"
                defaultValue={options[0].value}
                options={options}
                direction="horizontal"
            />
            <RadioGroup
                name="group2"
                defaultValue={options[0].value}
                options={options}
                direction="vertical"
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
  const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
  ];
  <RadioGroup name="group1" defaultValue={options[0].value} options={options} direction="horizontal"/>
  <RadioGroup name="group2" defaultValue={options[0].value} options={options} direction="vertical"/>
```

<!--/GITHUB_BLOCK-->

## Properties

| Name            | Description                                                                                       |           Type            |    Default     |
| :-------------- | :------------------------------------------------------------------------------------------------ | :-----------------------: | :------------: |
| children        | The content of the radio group.                                                                   |        `ReactNode`        |                |
| disabled        | Toggles the `disabled` state of the radio group.                                                  |         `boolean`         |    `false`     |
| options         | Options for radio group.                                                                          |   `RadioGroupOption[]`    |                |
| optionClassName | `class` HTML attribute for the radio children.                                                    |         `string`          |                |
| direction       | Determines the direction of the radio group.                                                      |  `horizontal - vertical`  | `"horizontal"` |
| defaultValue    | Sets the initial value state when the component is mounted.                                       |         `string`          |                |
| onUpdate        | Fires when the user changes the radio state and provides the new value as a callback argument.    | `(value: string) => void` |                |
| onChange        | Fires when the user changes the radio state and provides the change event as a callback argument. |        `Function`         |                |
| size            | Determines the size of the radio group.                                                           |          `m` `l`          |      `m`       |
| qa              | `data-qa` HTML attribute, used for testing                                                        |         `string`          |                |
| style           | `style` HTML attribute                                                                            |   `React.CSSProperties`   |                |
| className       | `class` HTML attribute                                                                            |         `string`          |                |

## RadioGroup.Option

`RadioGroup` 组件还导出一个嵌套的 `Option` 组件，它等同于 `Radio`，可用于在 `RadioGroup` 中创建单选按钮选项。

<!--SANDBOX
import type {RadioGroupOption} from '@gravity-ui/uikit';
import {RadioGroup} from '@gravity-ui/uikit';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <RadioGroup name="group1" defaultValue={options[0].value}>
            <RadioGroup.Option content={options[0].content} value={options[0].value} />
            <RadioGroup.Option content={options[1].content} value={options[1].value} />
            <RadioGroup.Option content={options[2].content} value={options[2].value} />
        </RadioGroup>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: RadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<RadioGroup name="group1" defaultValue={options[0].value}>
  <RadioGroup.Option content={options[0].content} value={options[0].value} />
  <RadioGroup.Option content={options[1].content} value={options[1].value} />
  <RadioGroup.Option content={options[2].content} value={options[2].value} />
</RadioGroup>;
```

<!--/GITHUB_BLOCK-->

### Properties

| Name     | Description                                         |    Type     | Default |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | The content of the radio (usually, a label).        | `ReactNode` |         |
| content  | The content of the radio (alternative to children). | `ReactNode` |         |
| disabled | Toggles the `disabled` state of the radio.          |  `boolean`  | `false` |
| value    | Control value                                       |  `string`   |         |
