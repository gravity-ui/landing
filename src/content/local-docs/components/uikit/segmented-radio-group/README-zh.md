<!--GITHUB_BLOCK-->

# SegmentedRadioGroup

<!--/GITHUB_BLOCK-->

`SegmentedRadioGroup` 组件用于创建一组单选按钮，用户可以从中选择一个选项。

```tsx
import {SegmentedRadioGroup} from '@gravity-ui/uikit';
```

### 禁用状态

<!--SANDBOX
import {SegmentedRadioGroup} from '@gravity-ui/uikit';

export default function () {
    return (
        <SegmentedRadioGroup name="group1" defaultValue="Value 1" disabled>
            <SegmentedRadioGroup.Option value="Value 1">Value 1</SegmentedRadioGroup.Option>
            <SegmentedRadioGroup.Option value="Value 2">Value 2</SegmentedRadioGroup.Option>
            <SegmentedRadioGroup.Option value="Value 3">Value 3</SegmentedRadioGroup.Option>
        </SegmentedRadioGroup>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<SegmentedRadioGroup name="group1" defaultValue="Value 1" disabled>
  <SegmentedRadioGroup.Option value="Value 1">Value 1</SegmentedRadioGroup.Option>
  <SegmentedRadioGroup.Option value="Value 2">Value 2</SegmentedRadioGroup.Option>
  <SegmentedRadioGroup.Option value="Value 3">Value 3</SegmentedRadioGroup.Option>
</SegmentedRadioGroup>
```

<!--/GITHUB_BLOCK-->

### 尺寸

使用 `size` 属性来管理 `SegmentedRadioGroup` 的尺寸。默认尺寸为 `m`。

<!--SANDBOX
import {Flex, SegmentedRadioGroup} from '@gravity-ui/uikit';

const options = [
    <SegmentedRadioGroup.Option key="Value 1" value="Value 1">Value 1</SegmentedRadioGroup.Option>,
    <SegmentedRadioGroup.Option key="Value 2" value="Value 2">Value 2</SegmentedRadioGroup.Option>,
    <SegmentedRadioGroup.Option key="Value 3" value="Value 3">Value 3</SegmentedRadioGroup.Option>,
];

export default function () {
    return (
        <Flex direction="column" alignItems="center" gap={2}>
            <SegmentedRadioGroup name="group1" defaultValue="Value 1" size="s">{options}</SegmentedRadioGroup>
            <SegmentedRadioGroup name="group2" defaultValue="Value 1" size="m">{options}</SegmentedRadioGroup>
            <SegmentedRadioGroup name="group3" defaultValue="Value 1" size="l">{options}</SegmentedRadioGroup>
            <SegmentedRadioGroup name="group4" defaultValue="Value 1" size="xl">{options}</SegmentedRadioGroup>
        </Flex>
    );
}
SANDBOX-->

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

使用 `width` 属性来管理 `SegmentedRadioGroup` 的宽度：

<!--SANDBOX
import {Box, Flex, SegmentedRadioGroup} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width={140} style={{border: '2px dashed gray'}}>
            <Flex direction="column" gap={2}>
                <SegmentedRadioGroup>
                    <SegmentedRadioGroup.Option value="1" content="none" />
                    <SegmentedRadioGroup.Option value="2" content="none********" />
                </SegmentedRadioGroup>
                <SegmentedRadioGroup width="auto">
                    <SegmentedRadioGroup.Option value="1" content="auto" />
                    <SegmentedRadioGroup.Option value="2" content="auto********" />
                </SegmentedRadioGroup>
                <SegmentedRadioGroup width="max">
                    <SegmentedRadioGroup.Option value="1" content="max" />
                    <SegmentedRadioGroup.Option value="2" content="max" />
                </SegmentedRadioGroup>
            </Flex>
        </Box>
    );
}
SANDBOX-->

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

## 属性

| 名称         | 描述                                                                                             |                类型                | 默认值 |
| :----------- | :----------------------------------------------------------------------------------------------- | :--------------------------------: | :-----: |
| children     | 单选按钮的内容。                                                                                 |            `ReactNode`             |         |
| disabled     | 切换单选按钮的 `disabled` 状态。                                                                 |             `boolean`              | `false` |
| options      | 单选按钮的选项。                                                                                 | `SegmentedRadioGroupOptionProps[]` |         |
| defaultValue | 组件挂载时设置初始值状态。                                                                       |              `string`              |         |
| onUpdate     | 当用户更改单选按钮状态时触发，并将新值作为回调参数提供。                                         |     `(value: string) => void`      |         |
| onChange     | 当用户更改单选按钮状态时触发，并将更改事件作为回调参数提供。                                     |             `Function`             |         |
| onFocus      | 当单选输入元素获得焦点时使用的事件处理程序。                                                     |             `Function`             |         |
| onBlur       | 当单选输入元素失去焦点时使用的事件处理程序。                                                     |             `Function`             |         |
| width        | 设置单选按钮的宽度。                                                                             |            `auto - max`            |         |
| size         | 设置单选按钮的尺寸。                                                                             |          `s` `m` `l` `xl`          |   `m`   |
| name         | 输入元素的 `name` HTML 属性。                                                                    |              `string`              |         |
| qa           | `data-qa` HTML 属性，用于测试                                                                    |              `string`              |         |
| style        | `style` HTML 属性                                                                                |       `React.CSSProperties`        |         |
| className    | `class` HTML 属性                                                                                |              `string`              |         |

## SegmentedRadioGroup.Option

`SegmentedRadioGroup` 组件还导出一个嵌套的 `Option` 组件。您可以使用它在 `SegmentedRadioGroup` 中创建单选按钮选项。

<!--SANDBOX
import type {SegmentedRadioGroupOptionProps} from '@gravity-ui/uikit';
import {SegmentedRadioGroup} from '@gravity-ui/uikit';

const options: SegmentedRadioGroupOptionProps[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <SegmentedRadioGroup name="group1" defaultValue={options[0].value}>
            <SegmentedRadioGroup.Option content={options[0].content} value={options[0].value} />
            <SegmentedRadioGroup.Option content={options[1].content} value={options[1].value} />
            <SegmentedRadioGroup.Option content={options[2].content} value={options[2].value} />
        </SegmentedRadioGroup>
    );
}
SANDBOX-->

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

| 名称     | 描述                                         |    类型     | 默认值 |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | radio 的内容（通常是标签）。        | `ReactNode` |         |
| content  | radio 的内容（`children` 的替代项）。 | `ReactNode` |         |
| disabled | 切换 radio 的 `disabled` 状态。          |  `boolean`  | `false` |
| value    | 控件值                                       |  `string`   |         |
