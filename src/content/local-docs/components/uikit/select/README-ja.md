<!--GITHUB_BLOCK-->

# Select

<!--/GITHUB_BLOCK-->

`Select` は、ユーザーが選択できるオプションのリストを提供するコントロールです。

```tsx
import {Select} from '@gravity-ui/uikit';
```

## Options

選択するオプション。

### Options の定義

オプションは、オブジェクトの配列として、またはコンポーネントの子として定義できます。前者のアプローチは、オプションに複雑な準備が必要で、場合によっては記憶が必要な場合に役立ちます。後者のアプローチは、オプションが少なく、その構成に複雑な計算が必要ない場合に便利です。

#### フラットリスト

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

#### グループ化されたリスト

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

### Options にデータを格納する

`option.data` プロパティを使用して、各オプションに一意のデータを定義して格納できます。これは、`onUpdate` コールバックを使用する場合や、たとえば `renderOption` でオプションを描画する場合に、データを強化する必要がある場合に役立ちます。

## 複数のオプションを選択する

複数選択を有効にするには、`multiple` プロパティを使用します。デフォルト値は `false` です。

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

### カウンター

`hasCounter` プロパティを使用して、コンポーネントに選択されたアイテムのカウンターを追加できます。

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

## Options のフィルタリング

フィルターセクションを有効にするには、`filterable` プロパティを使用します。デフォルト値は `false` です。

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

## サイズ

デフォルトのコントロールとオプションのサイズを管理するには、`size` プロパティを使用します。デフォルトサイズは `m` です。

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

## コントロールの幅

デフォルトでは、コントロールの幅は選択されたオプションのコンテンツの幅に合わせて拡張されます。`width` プロパティを使用して管理できます。

`'max'`: 親の全幅に拡張します。

`number`: ピクセル単位で幅を適用します。

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

## ポップアップの幅

`popupWidth` プロパティを使用してポップアップの幅を管理できます。利用可能な値は次のとおりです。

`'fit'`: コントロールの幅を適用します。

`number`: ピクセル単位で幅を適用します。

デフォルトの動作に関する注意点:

- ポップアップの幅は、最も幅の広いオプションの幅と同じになりますが、`90vw` より広くはなりません。これは、[仮想化](#virtualized-list) を使用している場合には適用されません。

- 幅の狭いオプションは、コントロールの幅に合わせて拡張されます。

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

### 仮想化されたリスト

多数のオプションを最適に表示するために、`Select` には組み込みのリスト仮想化ツールがあります。仮想化は、オプションの数 (`50` がデフォルト) のしきい値を超えると有効になります。この値は `virtualizationThreshold` プロパティを使用して管理できます。

仮想化を使用する場合、ポップアップ要素にはいくつかの制限が適用されます。

- ポップアップの幅は、最も長いオプションの長さに合わせて調整されなくなります。

- ポップアップの最小幅は、コントロールの幅と同じか、コントロールがそれより短い場合は `100px` になります。

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

## 高度な使用方法

`Select` をカスタマイズする方法はたくさんあります。

### カスタムコントロールのレンダリング

カスタムコントロールをレンダリングするには、`renderControl` プロパティを使用します。
注意: デフォルトのコントロールを使用する場合と同様に、一貫した動作を有効にするために、すべての引数をノードに転送する必要があります。

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

### カスタムフィルターセクションのレンダリング

カスタムフィルターセクションをレンダリングするには、`renderFilter` プロパティを使用し、`filterable` プロパティを `true` に設定します。
注意: デフォルトの構成を使用する場合と同様に、フィルターが正しく機能するように、すべての引数をノードに転送する必要があります。

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

### カスタムオプションのレンダリング

カスタムオプションをレンダリングするには、`renderOption` プロパティを使用します。

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

### カスタム選択済みオプションのレンダリング

カスタム選択済みオプションをレンダリングするには、`renderSelectedOption` プロパティを使用します。

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

### 高さの異なるオプションのレンダリング

オプションには、`size` プロパティに応じた固定の高さがあります。異なる高さのオプションをレンダリングする必要がある場合は、`option.data` プロパティを使用できます。これにより、オプションに設定する必要がある高さに関する情報と、この値を設定するための `getOptionHeight` プロパティが格納されます。

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

### カスタムカウンターのレンダリング

カスタムカウンターをレンダリングするには、`renderCounter` プロパティを使用します。カウンターは、複数選択が有効 (`multiple={true}`) で `hasCounter={true}` の場合にのみ表示されます。

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

### オプションリストのレンダリング

`renderPopup` プロパティを使用すると、オプションリストのコンテンツを制御できます。標準要素（フィルター、リスト）の順序を変更したり、非表示にしたり、それらの間、前、または後にカスタム要素を追加したりできます。

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

### エラー

この `Select` の状態は、不正なユーザー入力用です。`Select` の外観を変更するには、`validationState` プロパティを `"invalid"` 値で使用します。オプションで、`errorMessage` プロパティを通じてエラーメッセージを提供できます。デフォルトでは、メッセージテキストはコンポーネントの外側にレンダリングされます。
これを `errorPlacement` プロパティで変更できます。

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

## Properties

| 名前                                                      | 説明                                                                                                                      | タイプ                                     | デフォルト                                                  |
| :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------- |
| className                                                 | クラス名制御                                                                                                                | `string`                                 |                                                          |
| defaultValue                                              | 未管理状態での選択済みオプションを表すデフォルト値                                                                           | `string[]`                               |                                                          |
| disabled                                                  | ユーザーがコントロールを操作できないことを表示                                                                                 | `boolean`                                | `false`                                                  |
| [filterable](#filtering-options)                          | セレクトポップアップにフィルターセクションがあることを表示                                                                     | `boolean`                                | `false`                                                  |
| filterOption                                              | オプションとフィルターを比較するために使用                                                                                               | `function`                               |                                                          |
| filterPlaceholder                                         | デフォルトのフィルター入力プレースホルダーテキスト                                                                                           | `string`                                 |                                                          |
| [getOptionHeight](#render-options-with-different-heights) | カスタマイズされたユーザーオプションの高さを設定するために使用                                                                                    | `function`                               |                                                          |
| getOptionGroupHeight                                      | カスタマイズされたユーザーオプショングループの高さを設定するために使用                                                                               | `function`                               |                                                          |
| hasClear                                                  | 選択済みオプションをクリアするためのアイコンを表示可能にする                                                                           | `boolean`                                | `false`                                                  |
| id                                                        | `id` HTML属性                                                                                                              | `string`                                 |                                                          |
| label                                                     | コントロールラベル                                                                                                                    | `string`                                 |                                                          |
| loading                                                   | オプションリストの末尾にローディングアイテムを追加します。オプションリストが空の場合の永続的なローディングインジケーターのように機能します。  | `boolean`                                |                                                          |
| [multiple](#selecting-multiple-options)                   | リストで複数のオプションを選択できるかどうかを表示                                                                       | `boolean`                                | `false`                                                  |
| name                                                      | コントロールの名前                                                                                                              | `string`                                 |                                                          |
| onBlur                                                    | 要素がフォーカスを失ったときに呼び出されるハンドラー。                                                                             | `function`                               |                                                          |
| filter                                                    | 管理されたフィルター値                                                                                                          | `string`                                 | `''`                                                     |
| onFilterChange                                            | フィルターを変更するたびに発生します                                                                                       | `function`                               |                                                          |
| onFocus                                                   | 要素がフォーカスを取得したときに呼び出されるハンドラー                                                                               | `function`                               |                                                          |
| onLoadMore                                                | ローディングインジケーターが表示されたときに発生します                                                                                    | `function`                               |                                                          |
| onOpenChange                                              | ポップアップの表示状態を変更するたびに発生します                                                                                 | `function`                               |                                                          |
| onUpdate                                                  | ユーザーによって `Select` の値に変更がコミットされたときに発生します                                                          | `function`                               |                                                          |
| [options](#options)                                       | 選択するオプション                                                                                                                | `(SelectOption \| SelectOptionGroup)[]`  |                                                          |
| pin                                                       | コントロールの境界線の表示                                                                                                             | `string`                                 | `'round-round'`                                          |
| placeholder                                               | プレースホルダーテキスト                                                                                                                 | `string`                                 |                                                          |
| popupClassName                                            | オプションリストのポップアップ `className`                                                                                           | `string`                                 |                                                          |
| popupPlacement                                            | ポップアップの配置                                                                                                                  | `PopupPlacement` `Array<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                | ポップアップの幅                                                                                                                      | `number \| 'fit' \| 'outfit'`            | `'outfit'`                                               |
| qa                                                        | テスト ID 属性 (`data-qa`)                                                                                                    | `string`                                 |                                                          |
| [renderControl](#render-custom-control)                   | ユーザーコントロールのレンダリングに使用                                                                                                     | `function`                               |                                                          |
| [renderCounter](#rendering-custom-counter)                | ユーザーカウンターのレンダリングに使用します。[hasCounter](#counter) のみで機能します。                                                             | `function`                               |                                                          |
| renderEmptyOptions                                        | 空のオプションリストのノードのレンダリングに使用                                                                                   | `function`                               |                                                          |
| [renderFilter](#render-custom-filter-section)             | ユーザーフィルターセクションのレンダリングに使用                                                                                               | `function`                               |                                                          |
| [renderOption](#render-custom-options)                    | ユーザーオプションのレンダリングに使用                                                                                                     | `function`                               |                                                          |
| renderOptionGroup                                         | ユーザーオプショングループのレンダリングに使用                                                                                               | `function`                               |                                                          |
| [renderSelectedOption](#render-custom-selected-options)   | ユーザーの選択済みオプションのレンダリングに使用                                                                                             | `function`                               |                                                          |
| [renderPopup](#rendering-options-list)                    | オプションリストコンテンツのレンダリングに使用                                                                                               | `function`                               |                                                          |
| [size](#size)                                             | コントロール / オプションのサイズ                                                                                                           | `string`                                 | `'m'`                                                    |
| value                                                     | 選択済みオプションを表す値                                                                                                                         | `string[]`                               |                                                          |
| view                                                      | コントロールの表示                                                                                                                     | `string`                                 | `'normal'`                                               |
| [virtualizationThreshold](#virtualized-list)              | バーチャライゼーションが有効になるオプション数のしきい値                                                                     | `number`                                 | `50`                                                     |
| [width](#control-width)                                   | コントロールの幅                                                                                                                    | `string \| number`                       | `undefined`                                              |
| errorMessage                                              | エラーテキスト                                                                                                                       | `string`                                 |                                                          |
| errorPlacement                                            | エラーの位置                                                                                                                   | `outside` `inside`                       | `outside`                                                |
| validationState                                           | 検証状態                                                                                                                 | `"invalid"`                              |                                                          |
| [hasCounter](#counter)                                    | 選択済みオプションの数を表示します。カウンターは、[multiple](#selecting-multiple-options) 選択が有効な場合にのみ表示されます。 | `boolean`                                |                                                          |

## CSS API

| 名前                             | 説明                                   |
| :------------------------------- | :-------------------------------------------- |
| `--g-select-focus-outline-color` | フォーカス時のアウトラインの色（デフォルトでは欠落） |
