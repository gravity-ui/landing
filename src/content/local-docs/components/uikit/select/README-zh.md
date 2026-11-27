<!--GITHUB_BLOCK-->

# Select

<!--/GITHUB_BLOCK-->

`Select` 是一个控件，它提供了一个用户可以选择的选项列表。

```tsx
import {Select} from '@gravity-ui/uikit';
```

## 选项

要选择的选项。

### 定义选项

您可以将选项定义为对象数组或组件的子项。第一种方法适用于需要复杂准备和可能需要记忆的选项。第二种方法在选项很少且其配置不需要复杂计算时很方便。

#### 扁平列表

<!--SANDBOX
import {Flex, Select} from '@gravity-ui/uikit';

const options = [
    {value: 'val_1', content: 'Value 1'},
    {value: 'val_2', content: 'Value 2'},
    {value: 'val_3', content: 'Value 3'},
    {value: 'val_4', content: 'Value 4'},
];

export default function () {
    return (
        <>
            <Flex gap={1} alignItems="center">
                Array of objects
                <Select placeholder="value" options={options} />
            </Flex>
            <Flex gap={1} alignItems="center">
                Child nodes
                <Select placeholder="value">
                    <Select.Option value="val_1">Value 1</Select.Option>
                    <Select.Option value="val_2">Value 2</Select.Option>
                    <Select.Option value="val_3">Value 3</Select.Option>
                    <Select.Option value="val_4">Value 4</Select.Option>
                </Select>
            </Flex>
        </>
    );
}
SANDBOX-->

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

#### 分组列表

<!--SANDBOX
import {Flex, Select} from '@gravity-ui/uikit';

const groupedOptions = [
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
];

export default function () {
    return (
        <>
            <Flex gap={1} alignItems="center">
                Array of objects
                <Select placeholder="value" options={groupedOptions} />
            </Flex>
            <Flex gap={1} alignItems="center">
                Child nodes
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
            </Flex>
        </>
    );
}
SANDBOX-->

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

### 在选项中存储数据

您可以使用 `option.data` 属性在每个选项中定义和存储唯一数据。当您需要在 `onUpdate` 回调中使用时，或者例如在使用 `renderOption` 绘制选项时，这可能很有用。

## 选择多个选项

要启用多选，请使用 `multiple` 属性。其默认值为 `false`。

<!--SANDBOX
import {Select} from '@gravity-ui/uikit';

export default function () {
    return (
        <Select multiple placeholder="values">
            <Select.Option value="val_1">Value 1</Select.Option>
            <Select.Option value="val_2">Value 2</Select.Option>
            <Select.Option value="val_3">Value 3</Select.Option>
            <Select.Option value="val_4">Value 4</Select.Option>
        </Select>
    );
}
SANDBOX-->

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

您可以使用 `hasCounter` 属性向组件添加已选项目的计数器。

<!--SANDBOX
import {Select} from '@gravity-ui/uikit';

export default function () {
    return (
        <Select multiple hasCounter placeholder="values">
            <Select.Option value="val_1">Value 1</Select.Option>
            <Select.Option value="val_2">Value 2</Select.Option>
            <Select.Option value="val_3">Value 3</Select.Option>
            <Select.Option value="val_4">Value 4</Select.Option>
        </Select>
    );
}
SANDBOX-->

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

## 过滤选项

要启用过滤器部分，请使用 `filterable` 属性。其默认值为 `false`。

<!--SANDBOX
import {Select} from '@gravity-ui/uikit';

export default function () {
    return (
        <Select filterable placeholder="Filterable">
            <Select.Option value="val_1">Value 1</Select.Option>
            <Select.Option value="val_2">Value 2</Select.Option>
            <Select.Option value="val_3">Value 3</Select.Option>
            <Select.Option value="val_4">Value 4</Select.Option>
        </Select>
    );
}
SANDBOX-->

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

要管理默认控件和选项的大小，请使用 `size` 属性。其默认大小为 `m`。

<!--SANDBOX
import {Select} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
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
        </>
    );
}
SANDBOX-->

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

## 控件宽度

默认情况下，控件宽度会拉伸以匹配所选选项内容的最大宽度。您可以使用 `width` 属性进行管理：

`'max'`: 拉伸以占据父级的全部宽度。

`number`: 以像素为单位应用宽度。

<!--SANDBOX
import {Select, SelectProps} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const containerStyle: CSSProperties = {
    width: 150,
    border: '2px dashed gray',
    textAlign: 'center',
};

function SelectExample(props: SelectProps) {
    return (
        <Select {...props}>
            <Select.Option value="val_1">Value 1</Select.Option>
            <Select.Option value="val_2">Value 2</Select.Option>
            <Select.Option value="val_3">Value 3</Select.Option>
            <Select.Option value="val_4">Value 4</Select.Option>
        </Select>
    );
}

export default function () {
    return (
        <>
            <div style={containerStyle}>
                <h4>Default</h4>
                <SelectExample multiple />
            </div>
            <div style={containerStyle}>
                <h4>Max</h4>
                <SelectExample width="max" multiple />
            </div>
            <div style={containerStyle}>
                <h4>In pixels</h4>
                <SelectExample width={110} multiple />
            </div>
        </>
    );
}
SANDBOX-->

## 弹出窗口宽度

您可以使用 `popupWidth` 属性管理弹出窗口的宽度。可用值如下：

`'fit'`: 应用控件宽度。

`number`: 以像素为单位应用宽度。

关于默认行为的注意事项：

- 弹出窗口的宽度等于最宽选项的宽度，但不能超过 `90vw`。如果您使用 [虚拟化](#virtualized-list)，则此规则不适用。

- 较窄的选项会拉伸以适应控件的宽度。

<!--SANDBOX
import {Box, Select, SelectProps} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const containerStyle: CSSProperties = {
    width: 200,
    border: '2px dashed gray',
    textAlign: 'center',
};

function ShortValueSelect(props: SelectProps) {
    return (
        <Select placeholder="Short value" {...props}>
            <Select.Option value="val_1">Value 1</Select.Option>
            <Select.Option value="val_2">Value 2</Select.Option>
            <Select.Option value="val_3">Value 3</Select.Option>
            <Select.Option value="val_4">Value 4</Select.Option>
        </Select>
    );
}

function LongValueSelect(props: SelectProps) {
    return (
        <Select placeholder="Long value" {...props}>
            <Select.Option value="val_1">Loooooooooooooooooooong Value 1</Select.Option>
            <Select.Option value="val_2">Loooooooooooooooooooong Value 2</Select.Option>
            <Select.Option value="val_3">Loooooooooooooooooooong Value 3</Select.Option>
            <Select.Option value="val_4">Loooooooooooooooooooong Value 4</Select.Option>
        </Select>
    );
}

export default function () {
    return (
        <>
            <div style={containerStyle}>
                <h4>Default</h4>
                <Box spacing={{my: 3}}>
                    <ShortValueSelect />
                </Box>
                <Box spacing={{my: 3}}>
                    <LongValueSelect />
                </Box>
            </div>
            <div style={containerStyle}>
                <h4>Fit</h4>
                <Box spacing={{my: 3}}>
                    <ShortValueSelect popupWidth="fit" />
                </Box>
                <Box spacing={{my: 3}}>
                    <LongValueSelect popupWidth="fit" />
                </Box>
            </div>
            <div style={containerStyle}>
                <h4>In pixels</h4>
                <Box spacing={{my: 3}}>
                    <ShortValueSelect popupWidth={80} />
                </Box>
                <Box spacing={{my: 3}}>
                    <LongValueSelect popupWidth={80} />
                </Box>
            </div>
        </>
    );
}
SANDBOX-->

### 虚拟化列表

为了最佳地显示大量选项，`Select` 具有内置的列表虚拟化工具。当选项数量超过阈值（默认为 `50`）时，将启用虚拟化。您可以使用 `virtualizationThreshold` 属性管理此值。

使用虚拟化时，弹出窗口元素会受到一些限制：

- 弹出窗口的宽度不再根据最长选项的长度进行调整。

- 弹出窗口的最小宽度等于控件的宽度，如果控件较短，则为 `100px`。

<!--SANDBOX
import {Box, Select} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const containerStyle: CSSProperties = {
    width: 200,
    border: '2px dashed gray',
    textAlign: 'center',
};

const shortOptions = Array.from({length: 1000}, (_, index) => ({
    value: String(index),
    content: `Value ${index}`,
}));

const longOptions = Array.from({length: 1000}, (_, index) => ({
    value: String(index),
    content: `Loooooooooooooooooooong Value ${index}`,
}));

export default function () {
    return (
        <>
            <div style={containerStyle}>
                <h4>Default</h4>
                <Box spacing={{my: 3}}>
                    <Select placeholder="Short value" options={shortOptions} />
                </Box>
                <Box spacing={{my: 3}}>
                    <Select placeholder="Long value" options={longOptions} />
                </Box>
            </div>
            <div style={containerStyle}>
                <h4>In pixels</h4>
                <Box spacing={{my: 3}}>
                    <Select placeholder="Short value" popupWidth={80} options={shortOptions} />
                </Box>
                <Box spacing={{my: 3}}>
                    <Select placeholder="Long value" popupWidth={80} options={longOptions} />
                </Box>
            </div>
        </>
    );
}
SANDBOX-->

## 高级用法

有许多方法可以自定义您的 `Select`。

### 渲染自定义控件

要渲染自定义控件，请使用 `renderControl` 属性。
注意：您应该将所有参数转发到您的节点，以启用一致的行为，就像使用默认控件一样。

<!--SANDBOX
import {Button, Select} from '@gravity-ui/uikit';

export default function () {
    return (
        <Select
            renderControl={({onClick, onKeyDown, ref}) => (
                <Button ref={ref} onClick={onClick} extraProps={{onKeyDown}}>
                    Custom control
                </Button>
            )}
        >
            <Select.Option value="val_1">Value 1</Select.Option>
            <Select.Option value="val_2">Value 2</Select.Option>
            <Select.Option value="val_3">Value 3</Select.Option>
            <Select.Option value="val_4">Value 4</Select.Option>
        </Select>
    );
}
SANDBOX-->

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

### 渲染自定义过滤器部分

要渲染自定义过滤器部分，请使用 `renderFilter` 属性并将 `filterable` 属性设置为 `true`。
注意：您需要将所有参数转发到您的节点，以启用正常工作的过滤器，就像使用默认配置一样。

<!--SANDBOX
import type {SelectProps} from '@gravity-ui/uikit';
import {Button, Flex, Select, TextInput} from '@gravity-ui/uikit';

const renderFilter: SelectProps['renderFilter'] = (props) => {
    const {value, ref, onChange, onKeyDown} = props;

    return (
        <Flex direction="column" gap={1}>
            <TextInput
                controlRef={ref}
                controlProps={{size: 1}}
                value={value}
                onUpdate={onChange}
                onKeyDown={onKeyDown}
            />
            <Button size="xs">Do smth</Button>
        </Flex>
    );
};

export default function () {
    return (
        <Select placeholder="Custom filter" filterable renderFilter={renderFilter}>
            <Select.Option value="val_1">Value 1</Select.Option>
            <Select.Option value="val_2">Value 2</Select.Option>
            <Select.Option value="val_3">Value 3</Select.Option>
            <Select.Option value="val_4">Value 4</Select.Option>
        </Select>
    );
}
SANDBOX-->

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

### 渲染自定义选项

要渲染自定义选项，请使用 `renderOption` 属性：

<!--SANDBOX
import type {SelectProps} from '@gravity-ui/uikit';
import {Select} from '@gravity-ui/uikit';

const renderOption: SelectProps['renderOption'] = (option) => {
    return <div style={{color: option.data.color}}>{option.children}</div>;
};

export default function () {
    return (
        <Select placeholder="Custom options" renderOption={renderOption}>
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
}
SANDBOX-->

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

### 渲染自定义已选选项

要渲染自定义已选选项，请使用 `renderSelectedOption` 属性：

<!--SANDBOX
import type {SelectProps} from '@gravity-ui/uikit';
import {Select} from '@gravity-ui/uikit';

const renderSelectedOption: SelectProps['renderSelectedOption'] = (option) => {
    return <div style={{color: option.data.color}}>{option.children}</div>;
};

export default function () {
    return (
        <Select placeholder="Custom selected options" renderSelectedOption={renderSelectedOption}>
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
}
SANDBOX-->

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

### 渲染具有不同高度的选项

选项具有根据 `size` 属性设置的固定高度。如果您需要渲染具有不同高度的选项，可以使用 `option.data` 属性。它将存储有关您需要为选项设置的高度的信息，以及用于设置此值的 `getOptionHeight` 属性。

<!--SANDBOX
import type {SelectProps} from '@gravity-ui/uikit';
import {Select} from '@gravity-ui/uikit';

const getOptionHeight: SelectProps['getOptionHeight'] = (option) => option.data.height;

export default function () {
    return (
        <Select placeholder="Different heights" getOptionHeight={getOptionHeight}>
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
}
SANDBOX-->

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

### 渲染自定义计数器

要渲染自定义计数器，请使用 `renderCounter` 属性。仅当启用了多选（`multiple={true}`）且 `hasCounter={true}` 时，才会显示计数器。

<!--SANDBOX
import type {SelectProps} from '@gravity-ui/uikit';
import {Select} from '@gravity-ui/uikit';

const renderCounter: SelectProps['renderCounter'] = (_, {count, disabled}) => {
    if (count === 0) {
        return null;
    }

    if (count >= 2) {
        return (
            <div
                style={{
                    padding: '0 8px',
                    color: disabled ? '#999' : '#027bf3',
                    fontWeight: 'bold',
                }}
            >
                +{count}
            </div>
        );
    }

    return count;
};

export default function () {
    return (
        <Select multiple hasCounter renderCounter={renderCounter}>
            <Select.Option value="val_1">Value 1</Select.Option>
            <Select.Option value="val_2">Value 2</Select.Option>
            <Select.Option value="val_3">Value 3</Select.Option>
            <Select.Option value="val_4">Value 4</Select.Option>
        </Select>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
import type {SelectProps} from '@gravity-ui/uikit';

const MyComponent = () => {
  const renderCounter: SelectProps['renderCounter'] = (_, {count, disabled}) => {
    if (count === 0) {
      return null;
    }
    if (count >= 2) {
      return (
        <div
          style={{
            padding: '0 8px',
            color: disabled ? '#999' : '#027bf3',
            fontWeight: 'bold',
          }}
        >
          +{count}
        </div>
      );
    }
    return count;
  };

  return (
    <Select multiple={true} hasCounter={true} renderCounter={renderCounter}>
      <Select.Option value="val_1">Value 1</Select.Option>
      <Select.Option value="val_2">Value 2</Select.Option>
      <Select.Option value="val_3">Value 3</Select.Option>
      <Select.Option value="val_4">Value 4</Select.Option>
    </Select>
  );
};
```

<!--/GITHUB_BLOCK-->

### 渲染选项列表

`renderPopup` 属性允许您控制选项列表的内容：更改标准元素（过滤器、列表）的顺序、隐藏它们，或在它们之间、之前或之后添加自定义元素。

<!--SANDBOX
import type {SelectProps} from '@gravity-ui/uikit';
import {Select} from '@gravity-ui/uikit';

const renderPopup: SelectProps['renderPopup'] = ({renderList, renderFilter}) => {
    return (
        <>
            {renderFilter()}
            <div style={{width: '100%', height: 20, backgroundColor: 'tomato'}} />
            {renderList()}
        </>
    );
};

export default function () {
    return (
        <Select filterable placeholder="Custom popup" renderPopup={renderPopup}>
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
}
SANDBOX-->

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

此 `Select` 状态用于不正确的用户输入。要更改 `Select` 的外观，请使用 `validationState` 属性并将其值设置为 `"invalid"`。您还可以通过 `errorMessage` 属性提供错误消息。默认情况下，消息文本在组件外部渲染。
您可以使用 `errorPlacement` 属性更改此行为。

<!--SANDBOX
import {Select} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Select placeholder="Placeholder" errorMessage="Error message" validationState="invalid">
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
        </>
    );
}
SANDBOX-->

## 属性

| 名称                                                      | 描述                                                                                                                             | 类型                                     | 默认值                                                  |
| :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------- |
| className                                                 | 控制类名                                                                                                                       | `string`                                 |                                                          |
| defaultValue                                              | 在使用非受控状态时，表示所选选项的默认值                                                                                         | `string[]`                               |                                                          |
| disabled                                                  | 表明用户无法与控件交互                                                                                                           | `boolean`                                | `false`                                                  |
| [filterable](#filtering-options)                          | 表明选择弹出窗口具有过滤部分                                                                                                     | `boolean`                                | `false`                                                  |
| filterOption                                              | 用于将选项与过滤器进行比较                                                                                                       | `function`                               |                                                          |
| filterPlaceholder                                         | 默认过滤器输入占位符文本                                                                                                         | `string`                                 |                                                          |
| [getOptionHeight](#render-options-with-different-heights) | 用于设置自定义用户选项的高度                                                                                                     | `function`                               |                                                          |
| getOptionGroupHeight                                      | 用于设置自定义用户选项组的高度                                                                                                   | `function`                               |                                                          |
| hasClear                                                  | 启用显示用于清除所选选项的图标                                                                                                   | `boolean`                                | `false`                                                  |
| id                                                        | `id` HTML 属性                                                                                                                   | `string`                                 |                                                          |
| label                                                     | 控件标签                                                                                                                         | `string`                                 |                                                          |
| loading                                                   | 将加载项添加到选项列表的末尾。当选项列表为空时，它就像一个持久的加载指示器。                                                     | `boolean`                                |                                                          |
| [multiple](#selecting-multiple-options)                   | 表明列表中是否可以选择多个选项                                                                                                   | `boolean`                                | `false`                                                  |
| name                                                      | 控件名称                                                                                                                         | `string`                                 |                                                          |
| onBlur                                                    | 元素失去焦点时调用的处理程序                                                                                                     | `function`                               |                                                          |
| filter                                                    | 受控过滤器值                                                                                                                   | `string`                                 | `''`                                                     |
| onFilterChange                                            | 每次更改过滤器后触发                                                                                                           | `function`                               |                                                          |
| onFocus                                                   | 元素获得焦点时调用的处理程序                                                                                                     | `function`                               |                                                          |
| onLoadMore                                                | 加载指示器可见时触发                                                                                                             | `function`                               |                                                          |
| onOpenChange                                              | 每次更改弹出窗口可见性后触发                                                                                                     | `function`                               |                                                          |
| onUpdate                                                  | 用户提交对 `Select` 值的更改时触发                                                                                               | `function`                               |                                                          |
| [options](#options)                                       | 要选择的选项                                                                                                                     | `(SelectOption \| SelectOptionGroup)[]`  |                                                          |
| pin                                                       | 控件边框视图                                                                                                                     | `string`                                 | `'round-round'`                                          |
| placeholder                                               | 占位符文本                                                                                                                       | `string`                                 |                                                          |
| popupClassName                                            | 带有选项列表的弹出窗口 `className`                                                                                               | `string`                                 |                                                          |
| popupPlacement                                            | 弹出窗口位置                                                                                                                     | `PopupPlacement` `Array<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                | 弹出窗口宽度                                                                                                                     | `number \| 'fit' \| 'outfit'`            | `'outfit'`                                               |
| qa                                                        | 测试 ID 属性 (`data-qa`)                                                                                                         | `string`                                 |                                                          |
| [renderControl](#render-custom-control)                   | 用于渲染用户控件                                                                                                                 | `function`                               |                                                          |
| [renderCounter](#rendering-custom-counter)                | 用于渲染用户计数器。仅在启用 [hasCounter](#counter) 时有效。                                                                     | `function`                               |                                                          |
| renderEmptyOptions                                        | 用于渲染空选项列表的节点                                                                                                         | `function`                               |                                                          |
| [renderFilter](#render-custom-filter-section)             | 用于渲染用户过滤器部分                                                                                                           | `function`                               |                                                          |
| [renderOption](#render-custom-options)                    | 用于渲染用户选项                                                                                                                 | `function`                               |                                                          |
| renderOptionGroup                                         | 用于渲染用户选项组                                                                                                               | `function`                               |                                                          |
| [renderSelectedOption](#render-custom-selected-options)   | 用于渲染用户选定的选项                                                                                                           | `function`                               |                                                          |
| [renderPopup](#rendering-options-list)                    | 用于渲染选项列表内容                                                                                                             | `function`                               |                                                          |
| [size](#size)                                             | 控件 / 选项大小                                                                                                                  | `string`                                 | `'m'`                                                    |
| value                                                     | 表示所选选项的值                                                                                                                 | `string[]`                               |                                                          |
| view                                                      | 控件视图                                                                                                                         | `string`                                 | `'normal'`                                               |
| [virtualizationThreshold](#virtualized-list)              | 启用虚拟化之前的选项计数阈值                                                                                                     | `number`                                 | `50`                                                     |
| [width](#control-width)                                   | 控件宽度                                                                                                                         | `string \| number`                       | `undefined`                                              |
| errorMessage                                              | 错误文本                                                                                                                         | `string`                                 |                                                          |
| errorPlacement                                            | 错误位置                                                                                                                         | `outside` `inside`                       | `outside`                                                |
| validationState                                           | 验证状态                                                                                                                         | `"invalid"`                              |                                                          |
| [hasCounter](#counter)                                    | 显示所选选项计数。仅在启用 [multiple](#selecting-multiple-options) 选择时显示计数器。                                           | `boolean`                                |                                                          |

## CSS API

| 名称                             | 描述                                   |
| :------------------------------- | :-------------------------------------------- |
| `--g-select-focus-outline-color` | 聚焦时的轮廓颜色（默认缺失） |
