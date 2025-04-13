<!--GITHUB_BLOCK-->

# 选择

<!--/GITHUB_BLOCK-->

```tsx
import {Select} from '@gravity-ui/uikit';
```

`Select` 是一个控件，提供用户可以选择的选项列表。

## 选项

可供选择的选项。

### 定义选项

您可以将选项定义为对象数组或组件的子组件。第一种方法对于选项需要复杂准备以及可能需要记忆的情况很有用。当选项很少并且它们的配置不需要复杂的计算时，第二个很方便。

#### 平面清单

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Select
  placeholder="value"
  options={[
    {value: 'val_1', content: 'Value 1'},
    {value: 'val_2', content: 'Value 2'},
    {value: 'val_3', content: 'Value 3'},
    {value: 'val_4', content: 'Value 4'},
  ]}
/>
<Select placeholder="value">
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
`}
>
  <div>
    Array of objects
    <UIKit.Select placeholder="value"
      options={[
        {value: 'val_1', content: 'Value 1'},
        {value: 'val_2', content: 'Value 2'},
        {value: 'val_3', content: 'Value 3'},
        {value: 'val_4', content: 'Value 4'},
      ]}
    />
  </div>
  <div>
    Child nodes
    <UIKit.Select placeholder="value">
      <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
      <UIKit.Select.Option value="val_2">Value 2</UIKit.Select.Option>
      <UIKit.Select.Option value="val_3">Value 3</UIKit.Select.Option>
      <UIKit.Select.Option value="val_4">Value 4</UIKit.Select.Option>
    </UIKit.Select>
  </div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
// Array of objects
<Select
  placeholder="value"
  options={[
    {value: 'val_1', content: 'Value 1'},
    {value: 'val_2', content: 'Value 2'},
    {value: 'val_3', content: 'Value 3'},
    {value: 'val_4', content: 'Value 4'},
  ]}
/>
// Child nodes
<Select placeholder="value">
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
```

<!--/GITHUB_BLOCK-->

#### 分组清单

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Select
  placeholder="value"
  options={[
    {
      label: 'Group 1',
      options: [
        {value: 'val_1', content: 'Value 1'},
        {value: 'val_2', content: 'Value 2'},
      ],
    },
    {
      label: 'Group 2',
      options: [
        {value: 'val_3', content: 'Value 3'},
        {value: 'val_4', content: 'Value 4'},
      ],
    },
  ]}
/>
<Select placeholder="value">
  <Select.OptionGroup label="Group 1">
    <Select.Option value="val_1" content="Value 1" />
    <Select.Option value="val_2" content="Value 2" />
  </Select.OptionGroup>
  <Select.OptionGroup label="Group 2">
    <Select.Option value="val_3" content="Value 3" />
    <Select.Option value="val_4" content="Value 4" />
  </Select.OptionGroup>
</Select>
`}
>
  <div>
    Array of objects
    <UIKit.Select
      placeholder="value"
      options={[
        {
          label: 'Group 1',
          options: [
            {value: 'val_1', content: 'Value 1'},
            {value: 'val_2', content: 'Value 2'},
          ],
        },
        {
          label: 'Group 2',
          options: [
            {value: 'val_3', content: 'Value 3'},
            {value: 'val_4', content: 'Value 4'},
          ],
        },
      ]}
    />
  </div>
  <div>
    Child nodes
    <UIKit.Select placeholder="value">
      <UIKit.Select.OptionGroup label="Group 1">
        <UIKit.Select.Option value="val_1" content="Value 1" />
        <UIKit.Select.Option value="val_2" content="Value 2" />
      </UIKit.Select.OptionGroup>
      <UIKit.Select.OptionGroup label="Group 2">
        <UIKit.Select.Option value="val_3" content="Value 3" />
        <UIKit.Select.Option value="val_4" content="Value 4" />
      </UIKit.Select.OptionGroup>
    </UIKit.Select>
  </div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
// Array of objects
<Select
  placeholder="value"
  options={[
    {
      label: 'Group 1',
      options: [
        {value: 'val_1', content: 'Value 1'},
        {value: 'val_2', content: 'Value 2'},
      ],
    },
    {
      label: 'Group 2',
      options: [
        {value: 'val_3', content: 'Value 3'},
        {value: 'val_4', content: 'Value 4'},
      ],
    },
  ]}
/>
// Child nodes
<Select placeholder="value">
  <Select.OptionGroup label="Group 1">
    <Select.Option value="val_1" content="Value 1" />
    <Select.Option value="val_2" content="Value 2" />
  </Select.OptionGroup>
  <Select.OptionGroup label="Group 2">
    <Select.Option value="val_3" content="Value 3" />
    <Select.Option value="val_4" content="Value 4" />
  </Select.OptionGroup>
</Select>
```

<!--/GITHUB_BLOCK-->

### 将数据存储在选项中

您可以使用该 `option.data` 属性在每个选项中定义和存储唯一数据。当您在使用 `onUpdate` 回调时需要丰富数据时，或者例如，在使用绘制选项时，这可能很有用 `renderOption`。

## 选择多个选项

要启用多项选择，请使用该 `multiple` 属性。它的默认值是 `false`。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Select multiple={true} placeholder="values">
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
`}
>
  <UIKit.Select multiple={true} placeholder="values">
    <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
    <UIKit.Select.Option value="val_2">Value 2</UIKit.Select.Option>
    <UIKit.Select.Option value="val_3">Value 3</UIKit.Select.Option>
    <UIKit.Select.Option value="val_4">Value 4</UIKit.Select.Option>
  </UIKit.Select>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Select multiple={true} placeholder="values">
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
```

<!--/GITHUB_BLOCK-->

### 计数器

您可以使用该 `hasCounter` 属性将所选项目的计数器添加到组件中。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Select multiple={true} hasCounter={true} placeholder="values">
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
`}
>
  <UIKit.Select multiple={true} hasCounter={true} placeholder="values">
    <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
    <UIKit.Select.Option value="val_2">Value 2</UIKit.Select.Option>
    <UIKit.Select.Option value="val_3">Value 3</UIKit.Select.Option>
    <UIKit.Select.Option value="val_4">Value 4</UIKit.Select.Option>
  </UIKit.Select>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Select multiple={true} hasCounter={true} placeholder="values">
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
```

<!--/GITHUB_BLOCK-->

## 筛选选项

要启用筛选分区，请使用该 `filterable` 属性。它的默认值是 `false`。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Select filterable={true} placeholder="Filterable">
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
`}
>
  <UIKit.Select filterable={true} placeholder="Filterable">
    <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
    <UIKit.Select.Option value="val_2">Value 2</UIKit.Select.Option>
    <UIKit.Select.Option value="val_3">Value 3</UIKit.Select.Option>
    <UIKit.Select.Option value="val_4">Value 4</UIKit.Select.Option>
  </UIKit.Select>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Select filterable={true} placeholder="Filterable">
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
```

<!--/GITHUB_BLOCK-->

## 大小

要管理默认控件和选项大小，请使用该 `size` 属性。它的默认大小是 `m`。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Select size="s" placeholder="S Size">
  <Select.Option value="val_1">Value 1</Select.Option>
</Select>
<Select size="m" placeholder="M Size">
  <Select.Option value="val_1">Value 1</Select.Option>
</Select>
<Select size="l" placeholder="L Size">
  <Select.Option value="val_1">Value 1</Select.Option>
</Select>
<Select size="xl" placeholder="XL Size">
  <Select.Option value="val_1">Value 1</Select.Option>
</Select>
`}
>
  <UIKit.Select size="s" placeholder="S Size">
    <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
  </UIKit.Select>
  <UIKit.Select size="m" placeholder="M Size">
    <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
  </UIKit.Select>
  <UIKit.Select size="l" placeholder="L Size">
    <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
  </UIKit.Select>
  <UIKit.Select size="xl" placeholder="XL Size">
    <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
  </UIKit.Select>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Select size="s" placeholder="S Size">
  <Select.Option value="val_1">Value 1</Select.Option>
</Select>
<Select size="m" placeholder="M Size">
  <Select.Option value="val_1">Value 1</Select.Option>
</Select>
<Select size="l" placeholder="L Size">
  <Select.Option value="val_1">Value 1</Select.Option>
</Select>
<Select size="xl" placeholder="XL Size">
  <Select.Option value="val_1">Value 1</Select.Option>
</Select>
```

<!--/GITHUB_BLOCK-->

## 控制宽度

默认情况下，控件宽度会拉伸以匹配所选选项内容的宽度。您可以使用以下 `width` 属性对其进行管理：

`'max'`:拉伸到父项的全宽。

`number`:应用以像素为单位的宽度。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Select>
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
<Select width="max">
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
<Select width={150}>
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
`}
>
  <div style={{width: 150, border: '2px dashed gray', textAlign: 'center'}}>
    <h4 style={{textAlign: 'center'}}>Default</h4>
    <UIKit.Select multiple={true}>
      <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
      <UIKit.Select.Option value="val_2">Value 2</UIKit.Select.Option>
      <UIKit.Select.Option value="val_3">Value 3</UIKit.Select.Option>
      <UIKit.Select.Option value="val_4">Value 4</UIKit.Select.Option>
    </UIKit.Select>
  </div>
  <div style={{width: 150, border: '2px dashed gray', textAlign: 'center'}}>
    <h4 style={{textAlign: 'center'}}>Max</h4>
    <UIKit.Select width="max" multiple={true}>
      <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
      <UIKit.Select.Option value="val_2">Value 2</UIKit.Select.Option>
      <UIKit.Select.Option value="val_3">Value 3</UIKit.Select.Option>
      <UIKit.Select.Option value="val_4">Value 4</UIKit.Select.Option>
    </UIKit.Select>
  </div>
  <div style={{width: 150, border: '2px dashed gray', textAlign: 'center'}}>
    <h4 style={{textAlign: 'center'}}>In pixels</h4>
    <UIKit.Select width={110} multiple={true}>
      <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
      <UIKit.Select.Option value="val_2">Value 2</UIKit.Select.Option>
      <UIKit.Select.Option value="val_3">Value 3</UIKit.Select.Option>
      <UIKit.Select.Option value="val_4">Value 4</UIKit.Select.Option>
    </UIKit.Select>
  </div>
</ExampleBlock>

LANDING_BLOCK-->

## 弹出窗口宽度

您可以使用该 `popupWidth` 属性管理弹出窗口的宽度。可用值为：

`'fit'`:应用控制宽度。

`number`:应用以像素为单位的宽度。

关于默认行为的注意事项：

- 弹出窗口的宽度等于最宽选项的宽度，但不超过 `90vw`。这不适用于您使用 [虚拟化的](#virtualized-list)情况。

- 缩小选项会被拉伸以适应控件的宽度。

<!--LANDING_BLOCK

### Non-virtualized list

A regular list when all the elements are in the dom tree at once.

<ExampleBlock
    code={`
<Select>
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
<Select>
  <Select.Option value="val_1">Loooooooooooooooooooong Value 1</Select.Option>
  <Select.Option value="val_2">Loooooooooooooooooooong Value 2</Select.Option>
  <Select.Option value="val_3">Loooooooooooooooooooong Value 3</Select.Option>
  <Select.Option value="val_4">Loooooooooooooooooooong Value 4</Select.Option>
</Select>
<Select popupWidth="fit">
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
<Select popupWidth="fit">
  <Select.Option value="val_1">Loooooooooooooooooooong Value 1</Select.Option>
  <Select.Option value="val_2">Loooooooooooooooooooong Value 2</Select.Option>
  <Select.Option value="val_3">Loooooooooooooooooooong Value 3</Select.Option>
  <Select.Option value="val_4">Loooooooooooooooooooong Value 4</Select.Option>
</Select>
<Select popupWidth={80}>
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
<Select popupWidth={80}>
  <Select.Option value="val_1">Loooooooooooooooooooong Value 1</Select.Option>
  <Select.Option value="val_2">Loooooooooooooooooooong Value 2</Select.Option>
  <Select.Option value="val_3">Loooooooooooooooooooong Value 3</Select.Option>
  <Select.Option value="val_4">Loooooooooooooooooooong Value 4</Select.Option>
</Select>
`}
>
  <div style={{width: 200, border: '2px dashed gray', textAlign: 'center'}}>
    <h4 style={{textAlign: 'center'}}>Default</h4>
    <p>
      <UIKit.Select placeholder="Short value">
        <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
        <UIKit.Select.Option value="val_2">Value 2</UIKit.Select.Option>
        <UIKit.Select.Option value="val_3">Value 3</UIKit.Select.Option>
        <UIKit.Select.Option value="val_4">Value 4</UIKit.Select.Option>
      </UIKit.Select>
    </p>
    <p>
      <UIKit.Select placeholder="Long value">
        <UIKit.Select.Option value="val_1">Loooooooooooooooooooong Value 1</UIKit.Select.Option>
        <UIKit.Select.Option value="val_2">Loooooooooooooooooooong Value 2</UIKit.Select.Option>
        <UIKit.Select.Option value="val_3">Loooooooooooooooooooong Value 3</UIKit.Select.Option>
        <UIKit.Select.Option value="val_4">Loooooooooooooooooooong Value 4</UIKit.Select.Option>
      </UIKit.Select>
    </p>
  </div>
  <div style={{width: 200, border: '2px dashed gray', textAlign: 'center'}}>
    <h4 style={{textAlign: 'center'}}>Fit</h4>
    <p>
      <UIKit.Select placeholder="Short value" popupWidth="fit">
        <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
        <UIKit.Select.Option value="val_2">Value 2</UIKit.Select.Option>
        <UIKit.Select.Option value="val_3">Value 3</UIKit.Select.Option>
        <UIKit.Select.Option value="val_4">Value 4</UIKit.Select.Option>
      </UIKit.Select>
    </p>
    <p>
      <UIKit.Select placeholder="Long value" popupWidth="fit">
        <UIKit.Select.Option value="val_1">Loooooooooooooooooooong Value 1</UIKit.Select.Option>
        <UIKit.Select.Option value="val_2">Loooooooooooooooooooong Value 2</UIKit.Select.Option>
        <UIKit.Select.Option value="val_3">Loooooooooooooooooooong Value 3</UIKit.Select.Option>
        <UIKit.Select.Option value="val_4">Loooooooooooooooooooong Value 4</UIKit.Select.Option>
      </UIKit.Select>
    </p>
  </div>
  <div style={{width: 200, border: '2px dashed gray', textAlign: 'center'}}>
    <h4 style={{textAlign: 'center'}}>In pixels</h4>
    <p>
      <UIKit.Select placeholder="Short value" popupWidth={80}>
        <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
        <UIKit.Select.Option value="val_2">Value 2</UIKit.Select.Option>
        <UIKit.Select.Option value="val_3">Value 3</UIKit.Select.Option>
        <UIKit.Select.Option value="val_4">Value 4</UIKit.Select.Option>
      </UIKit.Select>
    </p>
    <p>
      <UIKit.Select placeholder="Long value" popupWidth={80}>
        <UIKit.Select.Option value="val_1">Loooooooooooooooooooong Value 1</UIKit.Select.Option>
        <UIKit.Select.Option value="val_2">Loooooooooooooooooooong Value 2</UIKit.Select.Option>
        <UIKit.Select.Option value="val_3">Loooooooooooooooooooong Value 3</UIKit.Select.Option>
        <UIKit.Select.Option value="val_4">Loooooooooooooooooooong Value 4</UIKit.Select.Option>
      </UIKit.Select>
    </p>
  </div>
</ExampleBlock>

LANDING_BLOCK-->

### 虚拟化列表

为了以最佳方式显示大量选项， `Select` 内置列表虚拟化工具。在超过选项数量的阈值（`50` 默认情况下）后，将启用虚拟化。您可以使用该 `virtualizationThreshold` 属性管理此值。

使用虚拟化时，一些限制适用于弹出式元素：

- 弹出窗口的宽度不再调整为最长选项的长度。

- 弹出窗口的最小宽度等于控件的宽度，或者 `100px` 如果控件较短。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Select>
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
<Select>
  <Select.Option value="val_1">Loooooooooooooooooooong Value 1</Select.Option>
  <Select.Option value="val_2">Loooooooooooooooooooong Value 2</Select.Option>
  <Select.Option value="val_3">Loooooooooooooooooooong Value 3</Select.Option>
  <Select.Option value="val_4">Loooooooooooooooooooong Value 4</Select.Option>
</Select>
<Select popupWidth="fit">
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
<Select popupWidth="fit">
  <Select.Option value="val_1">Loooooooooooooooooooong Value 1</Select.Option>
  <Select.Option value="val_2">Loooooooooooooooooooong Value 2</Select.Option>
  <Select.Option value="val_3">Loooooooooooooooooooong Value 3</Select.Option>
  <Select.Option value="val_4">Loooooooooooooooooooong Value 4</Select.Option>
</Select>
<Select popupWidth={80}>
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
<Select popupWidth={80}>
  <Select.Option value="val_1">Loooooooooooooooooooong Value 1</Select.Option>
  <Select.Option value="val_2">Loooooooooooooooooooong Value 2</Select.Option>
  <Select.Option value="val_3">Loooooooooooooooooooong Value 3</Select.Option>
  <Select.Option value="val_4">Loooooooooooooooooooong Value 4</Select.Option>
</Select>
`}
>
  <div style={{width: 200, border: '2px dashed gray', textAlign: 'center'}}>
    <h4 style={{textAlign: 'center'}}>Default</h4>
    <p>
      <UIKit.Select placeholder="Short value">
        {Array.from({length: 1000}, (_, index) => index)
          .map((value) => <UIKit.Select.Option value={value}>{`Value ${value}`}</UIKit.Select.Option>)
        }
      </UIKit.Select>
    </p>
    <p>
      <UIKit.Select placeholder="Long value">
        {Array.from({length: 1000}, (_, index) => index)
          .map((value) => <UIKit.Select.Option value={value}>{`Loooooooooooooooooooong Value ${value}`}</UIKit.Select.Option>)
        }
      </UIKit.Select>
    </p>
  </div>
  <div style={{width: 200, border: '2px dashed gray', textAlign: 'center'}}>
    <h4 style={{textAlign: 'center'}}>In pixels</h4>
    <p>
      <UIKit.Select placeholder="Short value" popupWidth={80}>
        {Array.from({length: 1000}, (_, index) => index)
          .map((value) => <UIKit.Select.Option value={value}>{`Value ${value}`}</UIKit.Select.Option>)
        }
      </UIKit.Select>
    </p>
    <p>
      <UIKit.Select placeholder="Long value" popupWidth={80}>
        {Array.from({length: 1000}, (_, index) => index)
          .map((value) => <UIKit.Select.Option value={value}>{`Loooooooooooooooooooong Value ${value}`}</UIKit.Select.Option>)
        }
      </UIKit.Select>
    </p>
  </div>
</ExampleBlock>

LANDING_BLOCK-->

## 高级用法

有很多方法可以自定义 `Select`.

### 渲染自定义控件

要呈现自定义控件，请使用该 `renderControl` 属性。
注意：你应该将所有参数转发到你的节点，以启用一致的行为，就像使用默认控件时一样。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Select
  renderControl={({onClick, onKeyDown, ref}) => {
    return <button ref={ref} onClick={onClick} extraProps={{onKeyDown}}>Custom control</button>
  }}
>
  <Select.Option value="val_1">Value 1</Select.Option>
  <Select.Option value="val_2">Value 2</Select.Option>
  <Select.Option value="val_3">Value 3</Select.Option>
  <Select.Option value="val_4">Value 4</Select.Option>
</Select>
`}
>
  <UIKit.Select renderControl={({onClick, onKeyDown, ref}) => {
    return <button ref={ref} onClick={onClick} extraProps={{onKeyDown}}>Custom control</button>
  }}>
    <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
    <UIKit.Select.Option value="val_2">Value 2</UIKit.Select.Option>
    <UIKit.Select.Option value="val_3">Value 3</UIKit.Select.Option>
    <UIKit.Select.Option value="val_4">Value 4</UIKit.Select.Option>
  </UIKit.Select>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
import {Button} from '@gravity-ui/uikit';

const MyComponent = () => {
  const renderControl: SelectProps['renderControl'] = ({onClick, onKeyDown, ref}) => {
    return (
      <Button
        ref={ref}
        onClick={onClick}
        extraProps={{
          onKeyDown,
        }}
      >
        Your control
      </Button>
    );
  };

  return <Select renderControl={renderControl}>/* Your options here */</Select>;
};
```

<!--/GITHUB_BLOCK-->

### 渲染自定义过滤器分区

要呈现自定义滤镜部分，请使用该 `renderFilter` 属性并将该 `filterable` 属性设置为 `true`。
注意：您需要将所有参数转发到您的节点才能启用正常运行的过滤器，就像使用默认配置一样。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Select
  placeholder="Custom filter"
  filterable={true}
  renderFilter={({onChange, onKeyDown, ref, value}) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <input
          ref={ref}
          value={value}
          size="1"
          onKeyDown={onKeyDown}
          onChange={(e) => onChange(e.target.value)}
        />
        <button>Do smth</button>
      </div>
    );
  }}
>
  <Select.Option value="val_1">Value 1</Select.Option>
</Select>
`}
>
  <UIKit.Select
    placeholder="Custom filter"
    filterable={true}
    renderFilter={({onChange, onKeyDown, ref, value}) => {
      return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <input
            ref={ref}
            value={value}
            size="1"
            onKeyDown={onKeyDown}
            onChange={(e) => onChange(e.target.value)}
          />
          <button>Do smth</button>
        </div>
      );
    }}
  >
    <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
    <UIKit.Select.Option value="val_2">Value 2</UIKit.Select.Option>
    <UIKit.Select.Option value="val_3">Value 3</UIKit.Select.Option>
    <UIKit.Select.Option value="val_4">Value 4</UIKit.Select.Option>
  </UIKit.Select>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
import {Button, TextInput} from '@gravity-ui/uikit';
import type {SelectProps} from '@gravity-ui/uikit';

const MyComponent = () => {
  const renderFilter: SelectProps['renderFilter'] = (props) => {
    const {value, ref, onChange, onKeyDown} = props;

    return (
      <div>
        <TextInput
          controlRef={ref}
          controlProps={{size: 1}}
          value={value}
          onUpdate={onChange}
          onKeyDown={onKeyDown}
        />
        <Button>Do smth</Button>
      </div>
    );
  };

  return (
    <Select filterable={true} renderFilter={renderFilter}>
      /* Your options here */
    </Select>
  );
};
```

<!--/GITHUB_BLOCK-->

### 呈现自定义选项

要呈现自定义选项，请使用以下 `renderOption` 属性：

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Select
  renderOption={(option) => {
    return (
      <div style={{color: option.data.color}}>
        {option.children}
      </div>
    );
  }}
>
  <Select.Option value="val_1" data={{color: '#8FE1A1'}}>Value 1</Select.Option>
  <Select.Option value="val_2" data={{color: '#38C0A8'}}>Value 2</Select.Option>
  <Select.Option value="val_3" data={{color: '#3A7AC3'}}>Value 3</Select.Option>
  <Select.Option value="val_4" data={{color: '#534581'}}>Value 4</Select.Option>
</Select>
`}
>
  <UIKit.Select
    placeholder="Custom options"
    renderOption={(option) => {
      return (
        <div style={{color: option.data.color}}>
          {option.children}
        </div>
      );
    }}
  >
    <UIKit.Select.Option value="val_1" data={{color: '#8FE1A1'}}>Value 1</UIKit.Select.Option>
    <UIKit.Select.Option value="val_2" data={{color: '#38C0A8'}}>Value 2</UIKit.Select.Option>
    <UIKit.Select.Option value="val_3" data={{color: '#3A7AC3'}}>Value 3</UIKit.Select.Option>
    <UIKit.Select.Option value="val_4" data={{color: '#534581'}}>Value 4</UIKit.Select.Option>
  </UIKit.Select>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
import type {SelectProps} from '@gravity-ui/uikit';

const MyComponent = () => {
  const renderOption: SelectProps['renderOption'] = (option) => {
    return <div style={{color: option.data.color}}>{option.children}</div>;
  };

  return (
    <Select renderOption={renderOption}>
      <Select.Option value="val_1" data={{color: '#8FE1A1'}}>
        Value 1
      </Select.Option>
      <Select.Option value="val_2" data={{color: '#38C0A8'}}>
        Value 2
      </Select.Option>
      <Select.Option value="val_3" data={{color: '#3A7AC3'}}>
        Value 3
      </Select.Option>
      <Select.Option value="val_4" data={{color: '#534581'}}>
        Value 4
      </Select.Option>
    </Select>
  );
};
```

<!--/GITHUB_BLOCK-->

### 呈现自定义选定选项

要呈现自定义选定选项，请使用以下 `renderSelectedOption` 属性：

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Select
  renderSelectedOption={(option) => {
    return (
      <div style={{color: option.data.color}}>
        {option.children}
      </div>
    );
  }}
>
  <Select.Option value="val_1" data={{color: '#8FE1A1'}}>Value 1</Select.Option>
  <Select.Option value="val_2" data={{color: '#38C0A8'}}>Value 2</Select.Option>
  <Select.Option value="val_3" data={{color: '#3A7AC3'}}>Value 3</Select.Option>
  <Select.Option value="val_4" data={{color: '#534581'}}>Value 4</Select.Option>
</Select>
`}
>
  <UIKit.Select
    placeholder="Custom selected options"
    renderSelectedOption={(option) => {
      return (
        <div style={{color: option.data.color}}>
          {option.children}
        </div>
      );
    }}
  >
    <UIKit.Select.Option value="val_1" data={{color: '#8FE1A1'}}>Value 1</UIKit.Select.Option>
    <UIKit.Select.Option value="val_2" data={{color: '#38C0A8'}}>Value 2</UIKit.Select.Option>
    <UIKit.Select.Option value="val_3" data={{color: '#3A7AC3'}}>Value 3</UIKit.Select.Option>
    <UIKit.Select.Option value="val_4" data={{color: '#534581'}}>Value 4</UIKit.Select.Option>
  </UIKit.Select>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
import type {SelectProps} from '@gravity-ui/uikit';

const MyComponent = () => {
  const renderSelectedOption: SelectProps['renderSelectedOption'] = (option) => {
    return <div style={{color: option.data.color}}>{option.children}</div>;
  };

  return (
    <Select renderSelectedOption={renderSelectedOption}>
      <Select.Option value="val_1" data={{color: '#8FE1A1'}}>
        Value 1
      </Select.Option>
      <Select.Option value="val_2" data={{color: '#38C0A8'}}>
        Value 2
      </Select.Option>
      <Select.Option value="val_3" data={{color: '#3A7AC3'}}>
        Value 3
      </Select.Option>
      <Select.Option value="val_4" data={{color: '#534581'}}>
        Value 4
      </Select.Option>
    </Select>
  );
};
```

<!--/GITHUB_BLOCK-->

### 不同高度的渲染选项

根据 `size` 属性，期权的高度是固定的。如果需要渲染不同高度的选项，则可以使用该 `option.data` 属性。它将存储有关您需要为选项设置的高度以及设置此值的 `getOptionHeight` 属性的信息。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Select
  getOptionHeight={(option) => option.data.height}
>
  <Select.Option value="val_1" data={{height: 20}}>Value 1</Select.Option>
  <Select.Option value="val_2" data={{height: 40}}>Value 2</Select.Option>
  <Select.Option value="val_3" data={{height: 60}}>Value 3</Select.Option>
  <Select.Option value="val_4" data={{height: 80}}>Value 4</Select.Option>
</Select>
`}
>
  <UIKit.Select
    placeholder="Different heights"
    getOptionHeight={(option) => option.data.height}
  >
    <UIKit.Select.Option value="val_1" data={{height: 20}}>Value 1</UIKit.Select.Option>
    <UIKit.Select.Option value="val_2" data={{height: 40}}>Value 2</UIKit.Select.Option>
    <UIKit.Select.Option value="val_3" data={{height: 60}}>Value 3</UIKit.Select.Option>
    <UIKit.Select.Option value="val_4" data={{height: 80}}>Value 4</UIKit.Select.Option>
  </UIKit.Select>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
import type {SelectProps} from '@gravity-ui/uikit';

const MyComponent = () => {
  const getOptionHeight: SelectProps['getOptionHeight'] = (option) => option.data.height;

  return (
    <Select getOptionHeight={getOptionHeight}>
      <Select.Option value="val_1" data={{height: 20}}>
        Value 1
      </Select.Option>
      <Select.Option value="val_2" data={{height: 40}}>
        Value 2
      </Select.Option>
      <Select.Option value="val_3" data={{height: 60}}>
        Value 3
      </Select.Option>
      <Select.Option value="val_4" data={{height: 80}}>
        Value 4
      </Select.Option>
    </Select>
  );
};
```

<!--/GITHUB_BLOCK-->

### 呈现自定义弹出窗口

要呈现自定义弹出窗口，请使用该 `renderPopup` 属性。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Select
  filterable
  placeholder="Custom popup"
  renderPopup={({renderList, renderFilter}) => {
    return (
      <React.Fragment>
        {renderFilter()}
        <div style={{width: "100%", height: "20px", backgroundColor: "tomato"}} />
        {renderList()}
      </React.Fragment>
    );
  }}
>
  <Select.Option value="val_1" data={{color: '#8FE1A1'}}>Value 1</Select.Option>
  <Select.Option value="val_2" data={{color: '#38C0A8'}}>Value 2</Select.Option>
  <Select.Option value="val_3" data={{color: '#3A7AC3'}}>Value 3</Select.Option>
  <Select.Option value="val_4" data={{color: '#534581'}}>Value 4</Select.Option>
</Select>
`}
>
  <UIKit.Select
    filterable
    placeholder="Custom popup"
    renderPopup={({renderList, renderFilter}) => {
      return (
        <React.Fragment>
          {renderFilter()}
          <div style={{width: "100%", height: "20px", backgroundColor: "tomato"}} />
          {renderList()}
        </React.Fragment>
  );
}}
  >
    <UIKit.Select.Option value="val_1" data={{color: '#8FE1A1'}}>Value 1</UIKit.Select.Option>
    <UIKit.Select.Option value="val_2" data={{color: '#38C0A8'}}>Value 2</UIKit.Select.Option>
    <UIKit.Select.Option value="val_3" data={{color: '#3A7AC3'}}>Value 3</UIKit.Select.Option>
    <UIKit.Select.Option value="val_4" data={{color: '#534581'}}>Value 4</UIKit.Select.Option>
  </UIKit.Select>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
import type {SelectProps} from '@gravity-ui/uikit';

const renderPopup: SelectProps['renderPopup'] = ({renderList, renderFilter}) => {
  return (
    <React.Fragment>
      {renderFilter()}
      <div className="CustomElement" />
      {renderList()}
    </React.Fragment>
  );
};

const MyComponent = () => {
  return (
    <Select filterable renderPopup={renderPopup}>
      <Select.Option value="val_1" data={{color: '#8FE1A1'}}>
        Value 1
      </Select.Option>
      <Select.Option value="val_2" data={{color: '#38C0A8'}}>
        Value 2
      </Select.Option>
      <Select.Option value="val_3" data={{color: '#3A7AC3'}}>
        Value 3
      </Select.Option>
      <Select.Option value="val_4" data={{color: '#534581'}}>
        Value 4
      </Select.Option>
    </Select>
  );
};
```

<!--/GITHUB_BLOCK-->

### 错误

此 `Select` 状态适用于不正确的用户输入。要更改外 `Select` 观，请使用带有 `"invalid"` 值的 `validationState` 属性。或者，您可以通过该 `errorMessage` 属性提供错误消息。默认情况下，消息文本在组件外部呈现。
您可以使用该 `errorPlacement` 属性对其进行更改。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Select
    placeholder="Placeholder"
    errorMessage="Error message"
    validationState="invalid"
>
    <Select.Option value="val_1">Value 1</Select.Option>
    <Select.Option value="val_2">Value 2</Select.Option>
    <Select.Option value="val_3">Value 3</Select.Option>
    <Select.Option value="val_4">Value 4</Select.Option>
</Select>
<Select
    placeholder="Placeholder"
    errorPlacement="inside"
    errorMessage="Error message"
    validationState="invalid"
>
    <Select.Option value="val_1">Value 1</Select.Option>
    <Select.Option value="val_2">Value 2</Select.Option>
    <Select.Option value="val_3">Value 3</Select.Option>
    <Select.Option value="val_4">Value 4</Select.Option>
</Select>
`}
>
    <UIKit.Select placeholder="Placeholder" errorMessage="Error message" validationState="invalid">
        <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
        <UIKit.Select.Option value="val_2">Value 2</UIKit.Select.Option>
        <UIKit.Select.Option value="val_3">Value 3</UIKit.Select.Option>
        <UIKit.Select.Option value="val_4">Value 4</UIKit.Select.Option>
    </UIKit.Select>
    <UIKit.Select placeholder="Placeholder" errorPlacement="inside" errorMessage="Error message" validationState="invalid">
        <UIKit.Select.Option value="val_1">Value 1</UIKit.Select.Option>
        <UIKit.Select.Option value="val_2">Value 2</UIKit.Select.Option>
        <UIKit.Select.Option value="val_3">Value 3</UIKit.Select.Option>
        <UIKit.Select.Option value="val_4">Value 4</UIKit.Select.Option>
    </UIKit.Select>
</ExampleBlock>
LANDING_BLOCK-->

## 属性

| 姓名                                                      | 描述                                                                              | 类型                                    | 默认                                                     |
| :-------------------------------------------------------- | :-------------------------------------------------------------------------------- | :-------------------------------------- | :------------------------------------------------------- |
| className                                                 | 控制类名                                                                          | `string`                                |                                                          |
| defaultValue                                              | 在使用不受控制状态时代表所选选项的默认值                                          | `string[]`                              |                                                          |
| 残疾的                                                    | 表明用户无法使用该控件                                                            | `boolean`                               | `false`                                                  |
| [可过滤](#filtering-options)                              | 显示选择弹出窗口有过滤器部分                                                      | `boolean`                               | `false`                                                  |
| filterOption                                              | 用于比较选项和过滤器                                                              | `function`                              |                                                          |
| filterPlaceholder                                         | 默认过滤器输入占位符文本                                                          | `string`                                |                                                          |
| [getOptionHeight](#render-options-with-different-heights) | 用于设置自定义用户选项的高度                                                      | `function`                              |                                                          |
| getOptionGroupHeight                                      | 用于设置自定义用户选项组的高度                                                    | `function`                              |                                                          |
| hasClear                                                  | 启用显示用于清除所选选项的图标                                                    | `boolean`                               | `false`                                                  |
| id                                                        | `id` HTML 属性                                                                    | `string`                                |                                                          |
| 标签                                                      | 控制标签                                                                          | `string`                                |                                                          |
| 加载中                                                    | 将加载项添加到选项列表的末尾。选项列表为空时，其工作原理类似于永久加载指示器。    | `boolean`                               |                                                          |
| [多个](#selecting-multiple-options)                       | 显示是否可以在列表中选择多个选项                                                  | `boolean`                               | `false`                                                  |
| 名称                                                      | 控件的名称                                                                        | `string`                                |                                                          |
| onBlur                                                    | 元素失去焦点时调用的处理程序。                                                    | `function`                              |                                                          |
| 过滤                                                      | 受控的过滤器值                                                                    | `string`                                | `''`                                                     |
| onFilterChange                                            | 每次更换过滤器后都会触发                                                          | `function`                              |                                                          |
| onFocus                                                   | 元素获得焦点时调用的处理程序                                                      | `function`                              |                                                          |
| onLoadMore                                                | 加载指示器可见时触发                                                              | `function`                              |                                                          |
| onOpenChange                                              | 每次更改弹出窗口可见性后都会触发                                                  | `function`                              |                                                          |
| onUpdate                                                  | 当用户提交对 `Select` 值的更改时触发                                              | `function`                              |                                                          |
| [选项](#options)                                          | 可供选择的选项                                                                    | `（选择选项\| [选择选项组)]`            |                                                          |
| 大头针                                                    | 控制边框视图                                                                      | `string`                                | `'round-round'`                                          |
| 占位符                                                    | 占位符文本                                                                        | `string`                                |                                                          |
| popupClassName                                            | 带有选项列表的弹出窗口 `className`                                                | `string`                                |                                                          |
| popupPlacement                                            | 弹出窗口放置                                                                      | `PopupPlacement` `数组<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                | 弹出窗口宽度                                                                      | `数字\| '适合'\| '服装'`                | `'outfit'`                                               |
| qa                                                        | 测试 ID 属性 (`data-qa`)                                                          | `string`                                |                                                          |
| [renderControl](#render-custom-control)                   | 用于呈现用户控件                                                                  | `function`                              |                                                          |
| renderEmptyOptions                                        | 用于为空选项列表渲染节点                                                          | `function`                              |                                                          |
| [renderFilter](#render-custom-filter-section)             | 用于渲染用户筛选器部分                                                            | `function`                              |                                                          |
| [renderOption](#render-custom-options)                    | 用于呈现用户选项                                                                  | `function`                              |                                                          |
| renderOptionGroup                                         | 用于呈现用户选项组                                                                | `function`                              |                                                          |
| [renderSelectedOption](#render-custom-selected-options)   | 用于呈现用户选择的选项                                                            | `function`                              |                                                          |
| [renderPopup](#render-custom-popup)                       | 用于呈现用户弹出内容                                                              | `function`                              |                                                          |
| [大小](#size)                                             | 控件/选项大小                                                                     | `string`                                | `'m'`                                                    |
| 价值                                                      | 代表所选选项的值                                                                  | `string[]`                              |                                                          |
| 观点                                                      | 控制视图                                                                          | `string`                                | `'normal'`                                               |
| [virtualizationThreshold](#virtualized-list)              | 选项数阈值，超过该阈值后将启用虚拟化                                              | `number`                                | `50`                                                     |
| [宽度](#control-width)                                    | 控制宽度                                                                          | `字符串\| 数字`                         | `undefined`                                              |
| errorMessage                                              | 错误文本                                                                          | `string`                                |                                                          |
| errorPlacement                                            | 错误位置                                                                          | `outside` `inside`                      | `outside`                                                |
| validationState                                           | 验证状态                                                                          | `"invalid"`                             |                                                          |
| [hasCounter](#counter)                                    | 显示所选选项数。仅当启用 [多](#selecting-multiple-options) 选时，计数器才会出现。 | `boolean`                               |

## CSS API

| 姓名                             | 描述                               |
| :------------------------------- | :--------------------------------- |
| `--g-select-focus-outline-color` | 聚焦时的轮廓颜色（默认情况下缺失） |
