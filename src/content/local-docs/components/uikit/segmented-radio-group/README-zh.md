<!--GITHUB_BLOCK-->

# SegmentedRadioGroup

<!--/GITHUB_BLOCK-->

```tsx
import {SegmentedRadioGroup} from '@gravity-ui/uikit';
```

该 `SegmentedRadioGroup` 组件用于创建一组单选按钮，用户可以在其中从多个选项中选择一个选项。

### 禁用状态

<!--LANDING_BLOCK

<ExampleBlock
  code={`
<SegmentedRadioGroup name="group1" defaultValue="Value 1" disabled>
    <SegmentedRadioGroup.Option value="Value 1">Value 1</SegmentedRadioGroup.Option>
    <SegmentedRadioGroup.Option value="Value 2">Value 2</SegmentedRadioGroup.Option>
    <SegmentedRadioGroup.Option value="Value 3">Value 3</SegmentedRadioGroup.Option>
</SegmentedRadioGroup>;
`}
>
  <UIKit.SegmentedRadioGroup name="group1" defaultValue="Value 1" disabled>
    <UIKit.SegmentedRadioGroup.Option value="Value 1">Value 1</UIKit.SegmentedRadioGroup.Option>
    <UIKit.SegmentedRadioGroup.Option value="Value 2">Value 2</UIKit.SegmentedRadioGroup.Option>
    <UIKit.SegmentedRadioGroup.Option value="Value 3">Value 3</UIKit.SegmentedRadioGroup.Option>
  </UIKit.SegmentedRadioGroup>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<SegmentedRadioGroup name="group1" defaultValue="Value 1" disabled>
  <SegmentedRadioGroup.Option value="Value 1">Value 1</SegmentedRadioGroup.Option>
  <SegmentedRadioGroup.Option value="Value 2">Value 2</SegmentedRadioGroup.Option>
  <SegmentedRadioGroup.Option value="Value 3">Value 3</SegmentedRadioGroup.Option>
</SegmentedRadioGroup>
```

<!--/GITHUB_BLOCK-->

### 大小

使用该 `size` 属性来管理大 `SegmentedRadioGroup` 小。默认大小为 `m`。

<!--LANDING_BLOCK

<ExampleBlock
  code={`
const options = [
<SegmentedRadioGroup.Option key="Value 1" value="Value 1">Value 1</SegmentedRadioGroup.Option>,
<SegmentedRadioGroup.Option key="Value 2" value="Value 2">Value 2</SegmentedRadioGroup.Option>,
<SegmentedRadioGroup.Option key="Value 3" value="Value 3">Value 3</SegmentedRadioGroup.Option>,
];

<SegmentedRadioGroup name="group1" defaultValue="Value 1" size="s">{options}</SegmentedRadioGroup>
<SegmentedRadioGroup name="group2" defaultValue="Value 1" size="m">{options}</SegmentedRadioGroup>
<SegmentedRadioGroup name="group3" defaultValue="Value 1" size="l">{options}</SegmentedRadioGroup>
<SegmentedRadioGroup name="group4" defaultValue="Value 1" size="xl">{options}</SegmentedRadioGroup>
`}
>
  <div style={{display: 'grid', justifyItems: 'center', gap: 10}}>
    <UIKit.SegmentedRadioGroup name="group1" defaultValue="Value 1" size="s">
      <UIKit.SegmentedRadioGroup.Option value="Value 1">Value 1</UIKit.SegmentedRadioGroup.Option>
      <UIKit.SegmentedRadioGroup.Option value="Value 2">Value 2</UIKit.SegmentedRadioGroup.Option>
      <UIKit.SegmentedRadioGroup.Option value="Value 3">Value 3</UIKit.SegmentedRadioGroup.Option>
    </UIKit.SegmentedRadioGroup>
    <UIKit.SegmentedRadioGroup name="group2" defaultValue="Value 1" size="m">
      <UIKit.SegmentedRadioGroup.Option value="Value 1">Value 1</UIKit.SegmentedRadioGroup.Option>
      <UIKit.SegmentedRadioGroup.Option value="Value 2">Value 2</UIKit.SegmentedRadioGroup.Option>
      <UIKit.SegmentedRadioGroup.Option value="Value 3">Value 3</UIKit.SegmentedRadioGroup.Option>
    </UIKit.SegmentedRadioGroup>
    <UIKit.SegmentedRadioGroup name="group3" defaultValue="Value 1" size="l">
      <UIKit.SegmentedRadioGroup.Option value="Value 1">Value 1</UIKit.SegmentedRadioGroup.Option>
      <UIKit.SegmentedRadioGroup.Option value="Value 2">Value 2</UIKit.SegmentedRadioGroup.Option>
      <UIKit.SegmentedRadioGroup.Option value="Value 3">Value 3</UIKit.SegmentedRadioGroup.Option>
    </UIKit.SegmentedRadioGroup>
    <UIKit.SegmentedRadioGroup name="group4" defaultValue="Value 1" size="xl">
      <UIKit.SegmentedRadioGroup.Option value="Value 1">Value 1</UIKit.SegmentedRadioGroup.Option>
      <UIKit.SegmentedRadioGroup.Option value="Value 2">Value 2</UIKit.SegmentedRadioGroup.Option>
      <UIKit.SegmentedRadioGroup.Option value="Value 3">Value 3</UIKit.SegmentedRadioGroup.Option>
    </UIKit.SegmentedRadioGroup>
  </div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
const options = [
    <SegmentedRadioGroup.Option key="Value 1" value="Value 1">Value 1</SegmentedRadioGroup.Option>,
    <SegmentedRadioGroup.Option key="Value 2" value="Value 2">Value 2</SegmentedRadioGroup.Option>,
    <SegmentedRadioGroup.Option key="Value 3" value="Value 3">Value 3</SegmentedRadioGroup.Option>,
];

<SegmentedRadioGroup name="group1" defaultValue="Value 1" size="s">{options}</SegmentedRadioGroup>
<SegmentedRadioGroup name="group2" defaultValue="Value 1" size="m">{options}</SegmentedRadioGroup>
<SegmentedRadioGroup name="group3" defaultValue="Value 1" size="l">{options}</SegmentedRadioGroup>
<SegmentedRadioGroup name="group4" defaultValue="Value 1" size="xl">{options}</SegmentedRadioGroup>
```

<!--/GITHUB_BLOCK-->

### 宽度

使用该 `width` 属性来管理 `SegmentedRadioGroup` 宽度：

<!--LANDING_BLOCK

<ExampleBlock
  code={`
<div style={{width: 140, border: '2px dashed gray'}}>
  <div style={{marginBottom: 10}}>
    <SegmentedRadioGroup>
      <SegmentedRadioGroup.Option value="1" content="none" />
      <SegmentedRadioGroup.Option value="2" content="none********" />
    </SegmentedRadioGroup>
  </div>
  <div style={{marginBottom: 10}}>
    <SegmentedRadioGroup width="auto">
      <SegmentedRadioGroup.Option value="1" content="auto" />
      <SegmentedRadioGroup.Option value="2" content="auto********" />
    </SegmentedRadioGroup>
  </div>
  <div>
    <SegmentedRadioGroup width="max">
      <SegmentedRadioGroup.Option value="1" content="max" />
      <SegmentedRadioGroup.Option value="2" content="max" />
    </SegmentedRadioGroup>
  </div>
</div>
`}
>
<div style={{width: 140, border: '2px dashed gray'}}>
 <div style={{marginBottom: 10}}>
    <UIKit.SegmentedRadioGroup>
      <UIKit.SegmentedRadioGroup.Option value="1" content="none" />
      <UIKit.SegmentedRadioGroup.Option value="2" content="none********" />
    </UIKit.SegmentedRadioGroup>
  </div>
  <div style={{marginBottom: 10}}>
    <UIKit.SegmentedRadioGroup width="auto">
      <UIKit.SegmentedRadioGroup.Option value="1" content="auto" />
      <UIKit.SegmentedRadioGroup.Option value="2" content="auto********" />
    </UIKit.SegmentedRadioGroup>
  </div>
  <div>
    <UIKit.SegmentedRadioGroup width="max">
      <UIKit.SegmentedRadioGroup.Option value="1" content="max" />
      <UIKit.SegmentedRadioGroup.Option value="2" content="max" />
    </UIKit.SegmentedRadioGroup>
  </div>
</div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<div style={{width: 140, border: '2px dashed gray'}}>
  <div style={{marginBottom: 10}}>
    <SegmentedRadioGroup>
      <SegmentedRadioGroup.Option value="1" content="none" />
      <SegmentedRadioGroup.Option value="2" content="none********" />
    </SegmentedRadioGroup>
  </div>
  <div style={{marginBottom: 10}}>
    <SegmentedRadioGroup width="auto">
      <SegmentedRadioGroup.Option value="1" content="auto" />
      <SegmentedRadioGroup.Option value="2" content="auto********" />
    </SegmentedRadioGroup>
  </div>
  <div>
    <SegmentedRadioGroup width="max">
      <SegmentedRadioGroup.Option value="1" content="max" />
      <SegmentedRadioGroup.Option value="2" content="max" />
    </SegmentedRadioGroup>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

### 属性

| 姓名         | 描述                                                   |                类型                |  默认   |
| :----------- | :----------------------------------------------------- | :--------------------------------: | :-----: |
| 儿童         | 单选按钮的内容。                                       |            `ReactNode`             |         |
| 残疾的       | 切换单选按钮的 `disabled` 状态。                       |             `boolean`              | `false` |
| 选项         | 单选按钮的选项。                                       | `SegmentedRadioGroupOptionProps[]` |         |
| defaultValue | 设置组件挂载时的初始值状态。                           |              `string`              |         |
| onUpdate     | 当用户更改单选按钮状态并将新值作为回调参数提供时触发。 |     `(value: string) => void`      |         |
| onChange     | 当用户更改单选按钮状态并将更改事件作为回调参数时触发。 |             `Function`             |         |
| onFocus      | 无线电输入元素获得焦点时使用的事件处理程序。           |             `Function`             |         |
| onBlur       | 无线电输入元素失去焦点时使用的事件处理程序。           |             `Function`             |         |
| 宽度         | 设置单选按钮的宽度。                                   |            `auto - max`            |         |
| 尺寸         | 设置单选按钮的大小。                                   |              `s` `xl`              |   `m`   |
| 名称         | `name` 输入元素的 HTML 属性。                          |              `string`              |         |
| qa           | `data-qa` HTML 属性，用于测试                          |              `string`              |         |
| 风格         | `style` HTML 属性                                      |       `React.CSSProperties`        |         |
| className    | `class` HTML 属性                                      |              `string`              |         |

## SegmentedRadioGroup.Option

该 `SegmentedRadioGroup` 组件还导出嵌套 `Option` 组件。您可以使用它在中创建单选按钮选项 `SegmentedRadioGroup`。

<!--LANDING_BLOCK

<ExampleBlock
  code={`
const options: SegmentedRadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<SegmentedRadioGroup name="group1" defaultValue={options[0].value}>
  <SegmentedRadioGroup.Option content={options[0].content} value={options[0].value} />
  <SegmentedRadioGroup.Option content={options[1].content} value={options[1].value} />
  <SegmentedRadioGroup.Option content={options[2].content} value={options[2].value} />
</RadioGroup>
`}
>
<UIKit.SegmentedRadioGroup name="group1" defaultValue="Value 1">
  <UIKit.SegmentedRadioGroup.Option content="Value 1" value="Value 1" />
  <UIKit.SegmentedRadioGroup.Option content="Value 2" value="Value 2" />
  <UIKit.SegmentedRadioGroup.Option content="Value 3" value="Value 3" />
</UIKit.SegmentedRadioGroup>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
const options: SegmentedRadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<SegmentedRadioGroup name="group1" defaultValue={options[0].value}>
  <SegmentedRadioGroup.Option content={options[0].content} value={options[0].value} />
  <SegmentedRadioGroup.Option content={options[1].content} value={options[1].value} />
  <SegmentedRadioGroup.Option content={options[2].content} value={options[2].value} />
</SegmentedRadioGroup>;
```

<!--/GITHUB_BLOCK-->

### 属性

| 姓名   | 描述                           |    类型     |  默认   |
| :----- | :----------------------------- | :---------: | :-----: |
| 儿童   | 电台的内容（通常是标签）。     | `ReactNode` |         |
| 内容   | 电台的内容（儿童替代品）。     | `ReactNode` |         |
| 残疾的 | 切换无线电的 `disabled` 状态。 |  `boolean`  | `false` |
| 价值   | 控制值                         |  `string`   |         |
