<!--GITHUB_BLOCK-->

# RadioGroup

<!--/GITHUB_BLOCK-->

```tsx
import {RadioGroup} from '@gravity-ui/uikit';
```

该 `RadioGroup` 组件用于创建群组，用户可以在其中从多个选项中选择一个选项。

### 禁用状态

<!--LANDING_BLOCK

<ExampleBlock
  code={`
const options: RadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<RadioGroup name="group2" defaultValue={options[0].value} options={options} disabled/>
`}
>
  <UIKit.RadioGroup name="group2" defaultValue="Value 1" options={
    [
      {value: 'Value 1', content: 'Value 1'},
      {value: 'Value 2', content: 'Value 2'},
      {value: 'Value 3', content: 'Value 3'},
    ]
  } disabled/>
</ExampleBlock>

LANDING_BLOCK-->

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

### 大小

使用该 `size` 属性来管理大 `RadioGroup` 小。默认大小为 `m`。

<!--LANDING_BLOCK

<ExampleBlock
  code={`
const options: RadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<RadioGroup name="group1" defaultValue={options[0].value} options={options} size="m"/>
<RadioGroup name="group2" defaultValue={options[0].value} options={options} size="l"/>
`}
>
  <UIKit.RadioGroup name="group1" defaultValue="Value 1" options={
    [
      {value: 'Value 1', content: 'Value 1'},
      {value: 'Value 2', content: 'Value 2'},
      {value: 'Value 3', content: 'Value 3'},
    ]
  } size="m"/>
  <UIKit.RadioGroup name="group2" defaultValue="Value 1" options={
    [
      {value: 'Value 1', content: 'Value 1'},
      {value: 'Value 2', content: 'Value 2'},
      {value: 'Value 3', content: 'Value 3'},
    ]
  } size="l"/>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
  const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
  ];
  <RadioGroup name="group1" defaultValue={options[0].value} options={options} size="m"/>
  <RadioGroup name="group2" defaultValue={options[0].value} options={options} size="l"/>
```

<!--/GITHUB_BLOCK-->

### 方向

使用该 `direction` 属性来管理方 `RadioGroup` 向。默认方向是 `horizontal`。

<!--LANDING_BLOCK

<ExampleBlock
  code={`
const options: RadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<RadioGroup name="group1" defaultValue={options[0].value} options={options} direction="horizontal"/>
<RadioGroup name="group2" defaultValue={options[0].value} options={options} direction="vertical"/>
`}
>
  <UIKit.RadioGroup name="group1" defaultValue="Value 1" options={
    [
      {value: 'Value 1', content: 'Value 1'},
      {value: 'Value 2', content: 'Value 2'},
      {value: 'Value 3', content: 'Value 3'},
    ]
  } direction="horizontal"/>
  <UIKit.RadioGroup name="group2" defaultValue="Value 1" options={
    [
      {value: 'Value 1', content: 'Value 1'},
      {value: 'Value 2', content: 'Value 2'},
      {value: 'Value 3', content: 'Value 3'},
    ]
  } direction="vertical"/>
</ExampleBlock>

LANDING_BLOCK-->

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

### 属性

| 姓名            | 描述                                                 |           类型            |      默认      |
| :-------------- | :--------------------------------------------------- | :-----------------------: | :------------: |
| 儿童            | 广播组的内容。                                       |        `ReactNode`        |                |
| 残疾的          | 切换无线电组的 `disabled` 状态。                     |         `boolean`         |    `false`     |
| 选项            | 广播组的选项。                                       |   `RadioGroupOption[]`    |                |
| optionClassName | `class` 电台儿童的 HTML 属性。                       |         `string`          |                |
| 方向            | 确定无线电组的方向。                                 |  `horizontal - vertical`  | `"horizontal"` |
| defaultValue    | 设置组件挂载时的初始值状态。                         |         `string`          |                |
| onUpdate        | 当用户更改无线电状态并将新值作为回调参数提供时触发。 | `(value: string) => void` |                |
| onChange        | 当用户更改无线电状态并将更改事件作为回调参数时触发。 |        `Function`         |                |
| 尺寸            | 确定无线电组的大小。                                 |          `m` `l`          |      `m`       |
| qa              | `data-qa` HTML 属性，用于测试                        |         `string`          |                |
| 风格            | `style` HTML 属性                                    |   `React.CSSProperties`   |                |
| className       | `class` HTML 属性                                    |         `string`          |                |

## 无线电组选项

该 `RadioGroup` 组件还导出等效的嵌套 `Option` 组件 `Radio` ，该组件可用于在中创建单选选项 `RadioGroup`。

<!--LANDING_BLOCK

<ExampleBlock
  code={`
const options: RadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<RadioGroup name="group1" defaultValue={options[0].value}>
  <RadioGroup.Option content={options[0].content} value={options[0].value} />
  <RadioGroup.Option content={options[1].content} value={options[1].value} />
  <RadioGroup.Option content={options[2].content} value={options[2].value} />
</RadioGroup>
`}
>
<UIKit.RadioGroup name="group1" defaultValue="Value 1">
  <UIKit.RadioGroup.Option content="Value 1" value="Value 1" />
  <UIKit.RadioGroup.Option content="Value 2" value="Value 2" />
  <UIKit.RadioGroup.Option content="Value 3" value="Value 3" />
</UIKit.RadioGroup>
</ExampleBlock>

LANDING_BLOCK-->

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

### 属性

| 姓名   | 描述                           |    类型     |  默认   |
| :----- | :----------------------------- | :---------: | :-----: |
| 儿童   | 电台的内容（通常是标签）。     | `ReactNode` |         |
| 内容   | 电台的内容（儿童替代品）。     | `ReactNode` |         |
| 残疾的 | 切换无线电的 `disabled` 状态。 |  `boolean`  | `false` |
| 价值   | 控制值                         |  `string`   |         |
