<!--GITHUB_BLOCK-->

# Select

<!--/GITHUB_BLOCK-->

`Select` ist eine Steuerung, die eine Liste von Optionen bereitstellt, aus denen ein Benutzer auswählen kann.

```tsx
import {Select} from '@gravity-ui/uikit';
```

## Optionen

Optionen zur Auswahl.

### Optionen definieren

Sie können Optionen als Array von Objekten oder als Kinder einer Komponente definieren. Der erste Ansatz ist nützlich für Fälle, in denen Optionen eine komplexe Vorbereitung und möglicherweise eine Zwischenspeicherung erfordern. Der zweite ist praktisch, wenn es wenige Optionen gibt und ihre Konfiguration keine komplexen Berechnungen erfordert.

#### Flache Liste

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

#### Gruppierte Liste

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

### Daten in Optionen speichern

Sie können eindeutige Daten in jeder Option definieren und speichern, indem Sie die Eigenschaft `option.data` verwenden. Dies kann nützlich sein, wenn Sie die Daten beim Verwenden des `onUpdate`-Callbacks anreichern müssen oder beispielsweise beim Rendern Ihrer Optionen mit `renderOption`.

## Mehrere Optionen auswählen

Um die Mehrfachauswahl zu aktivieren, verwenden Sie die Eigenschaft `multiple`. Ihr Standardwert ist `false`.

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

### Zähler

Sie können dem Steuerelement mit der Eigenschaft `hasCounter` einen Zähler der ausgewählten Elemente hinzufügen.

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

## Optionen filtern

Um den Filterbereich zu aktivieren, verwenden Sie die Eigenschaft `filterable`. Ihr Standardwert ist `false`.

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

## Größe

Um die Standardgröße des Steuerelements und der Optionen zu verwalten, verwenden Sie die Eigenschaft `size`. Ihre Standardgröße ist `m`.

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

## Steuerelementbreite

Standardmäßig dehnt sich die Breite des Steuerelements aus, um der Breite des Inhalts der ausgewählten Optionen zu entsprechen. Sie können sie mit der Eigenschaft `width` verwalten:

`'max'`: Dehnt sich auf die volle Breite des übergeordneten Elements aus.

`number`: Wendet die Breite in Pixeln an.

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

## Popup-Breite

Sie können die Popup-Breite mit der Eigenschaft `popupWidth` verwalten. Die verfügbaren Werte sind:

`'fit'`: Wendet die Steuerelementbreite an.

`number`: Wendet die Breite in Pixeln an.

Hinweise zum Standardverhalten:

- Die Popup-Breite entspricht der Breite der breitesten Option, aber nicht breiter als `90vw`. Dies gilt nicht, wenn Sie [Virtualisierung](#virtualisierte-liste) verwenden.

- Schmale Optionen werden auf die Breite des Steuerelements gestreckt.

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

### Virtualisierte Liste

Für eine optimale Anzeige einer großen Anzahl von Optionen verfügt `Select` über ein integriertes Virtualisierungstool für Listen. Die Virtualisierung wird nach Überschreiten des Schwellenwerts für die Anzahl der Optionen (standardmäßig `50`) aktiviert. Sie können diesen Wert mit der Eigenschaft `virtualizationThreshold` verwalten.

Bei Verwendung der Virtualisierung gelten einige Einschränkungen für das Popup-Element:

- Die Popup-Breite wird nicht mehr an die Länge der längsten Option angepasst.

- Die Mindestbreite des Popups entspricht der Breite des Steuerelements oder `100px`, wenn das Steuerelement kürzer ist.

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

## Erweiterte Nutzung

Es gibt viele Möglichkeiten, Ihr `Select` anzupassen.

### Benutzerdefiniertes Steuerelement rendern

Um ein benutzerdefiniertes Steuerelement zu rendern, verwenden Sie die Eigenschaft `renderControl`.
Hinweis: Sie sollten alle Argumente an Ihren Knoten weiterleiten, um ein konsistentes Verhalten zu ermöglichen, genau wie bei der Verwendung des Standardsteuerelements.

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

### Benutzerdefinierten Filterbereich rendern

Um einen benutzerdefinierten Filterbereich zu rendern, verwenden Sie die Eigenschaft `renderFilter` und setzen Sie die Eigenschaft `filterable` auf `true`.
Hinweis: Sie müssen alle Argumente an Ihren Knoten weiterleiten, um einen ordnungsgemäß funktionierenden Filter zu ermöglichen, genau wie bei der Verwendung der Standardkonfiguration.

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

### Benutzerdefinierte Optionen rendern

Um benutzerdefinierte Optionen zu rendern, verwenden Sie die Eigenschaft `renderOption`:

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

### Benutzerdefinierte ausgewählte Optionen rendern

Um benutzerdefinierte ausgewählte Optionen zu rendern, verwenden Sie die Eigenschaft `renderSelectedOption`:

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

### Optionen mit unterschiedlichen Höhen rendern

Optionen haben eine feste Höhe gemäß der Eigenschaft `size`. Wenn Sie Optionen mit unterschiedlichen Höhen rendern müssen, können Sie die Eigenschaft `option.data` verwenden. Sie speichert Informationen darüber, welche Höhe Sie für die Optionen festlegen müssen, sowie die Eigenschaft `getOptionHeight`, um diesen Wert festzulegen.

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

### Benutzerdefinierten Zähler rendern

Um einen benutzerdefinierten Zähler zu rendern, verwenden Sie die Eigenschaft `renderCounter`. Der Zähler wird nur angezeigt, wenn die Mehrfachauswahl aktiviert ist (`multiple={true}`) und `hasCounter={true}`.

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

### Optionsliste rendern

Die Eigenschaft `renderPopup` ermöglicht es Ihnen, den Inhalt der Optionsliste zu steuern: Ändern Sie die Reihenfolge der Standardelemente (Filter, Liste), blenden Sie sie aus oder fügen Sie benutzerdefinierte Elemente dazwischen, davor oder danach ein.

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

### Fehler

Dieser `Select`-Zustand ist für eine fehlerhafte Benutzereingabe. Um das Erscheinungsbild von `Select` zu ändern, verwenden Sie die Eigenschaft `validationState` mit dem Wert `"invalid"`. Optional können Sie eine Fehlermeldung über die Eigenschaft `errorMessage` bereitstellen. Standardmäßig wird der Meldungstext außerhalb der Komponente gerendert.
Sie können dies mit der Eigenschaft `errorPlacement` ändern.

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

## Eigenschaften

| Name                                                      | Description                                                                                                                      | Typ                                      | Standardwert                                             |
| :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------- |
| className                                                 | Steuert die Klasse des Elements                                                                                                  | `string`                                 |                                                          |
| defaultValue                                              | Standardwerte, die ausgewählte Optionen darstellen, falls ein unkontrollierter Zustand verwendet wird                            | `string[]`                               |                                                          |
| disabled                                                  | Zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann                                                        | `boolean`                                | `false`                                                  |
| [filterable](#filtering-options)                          | Zeigt an, dass das Auswahl-Popup einen Filterbereich hat                                                                         | `boolean`                                | `false`                                                  |
| filterOption                                              | Wird verwendet, um eine Option mit dem Filter zu vergleichen                                                                     | `function`                               |                                                          |
| filterPlaceholder                                         | Standardtext für den Platzhalter des Filterfelds                                                                                 | `string`                                 |                                                          |
| [getOptionHeight](#render-options-with-different-heights) | Wird verwendet, um die Höhe von benutzerdefinierten Optionen festzulegen                                                         | `function`                               |                                                          |
| getOptionGroupHeight                                      | Wird verwendet, um die Höhe von benutzerdefinierten Optionsgruppen festzulegen                                                   | `function`                               |                                                          |
| hasClear                                                  | Ermöglicht die Anzeige eines Symbols zum Löschen ausgewählter Optionen                                                           | `boolean`                                | `false`                                                  |
| id                                                        | `id` HTML-Attribut                                                                                                               | `string`                                 |                                                          |
| label                                                     | Beschriftung des Steuerelements                                                                                                  | `string`                                 |                                                          |
| loading                                                   | Fügt das Ladeelement am Ende der Optionsliste hinzu. Funktioniert wie eine permanente Ladeanzeige, während die Optionsliste leer ist. | `boolean`                                |                                                          |
| [multiple](#selecting-multiple-options)                   | Zeigt an, ob mehrere Optionen in der Liste ausgewählt werden können                                                               | `boolean`                                | `false`                                                  |
| name                                                      | Name des Steuerelements                                                                                                          | `string`                                 |                                                          |
| onBlur                                                    | Handler, der aufgerufen wird, wenn das Element den Fokus verliert.                                                               | `function`                               |                                                          |
| filter                                                    | Gesteuerter Filterwert                                                                                                           | `string`                                 | `''`                                                     |
| onFilterChange                                            | Wird jedes Mal nach der Änderung des Filters ausgelöst                                                                          | `function`                               |                                                          |
| onFocus                                                   | Handler, der aufgerufen wird, wenn das Element den Fokus erhält                                                                  | `function`                               |                                                          |
| onLoadMore                                                | Wird ausgelöst, wenn die Ladeanzeige sichtbar wird                                                                              | `function`                               |                                                          |
| onOpenChange                                              | Wird jedes Mal nach der Änderung der Sichtbarkeit des Popups ausgelöst                                                          | `function`                               |                                                          |
| onUpdate                                                  | Wird ausgelöst, wenn eine Änderung am `Select`-Wert vom Benutzer bestätigt wird                                                  | `function`                               |                                                          |
| [options](#options)                                       | Optionen zur Auswahl                                                                                                             | `(SelectOption \| SelectOptionGroup)[]`  |                                                          |
| pin                                                       | Ansicht des Steuerelementrahmens                                                                                                 | `string`                                 | `'round-round'`                                          |
| placeholder                                               | Platzhaltertext                                                                                                                  | `string`                                 |                                                          |
| popupClassName                                            | Klasse des Popups mit der Optionsliste                                                                                           | `string`                                 |                                                          |
| popupPlacement                                            | Platzierung des Popups                                                                                                           | `PopupPlacement` `Array<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                | Breite des Popups                                                                                                                | `number \| 'fit' \| 'outfit'`            | `'outfit'`                                               |
| qa                                                        | Test-ID-Attribut (`data-qa`)                                                                                                     | `string`                                 |                                                          |
| [renderControl](#render-custom-control)                   | Wird zum Rendern eines benutzerdefinierten Steuerelements verwendet                                                              | `function`                               |                                                          |
| [renderCounter](#rendering-custom-counter)                | Wird zum Rendern eines benutzerdefinierten Zählers verwendet. Funktioniert nur mit [hasCounter](#counter).                        | `function`                               |                                                          |
| renderEmptyOptions                                        | Wird zum Rendern eines Knotens für eine leere Optionsliste verwendet                                                             | `function`                               |                                                          |
| [renderFilter](#render-custom-filter-section)             | Wird zum Rendern eines benutzerdefinierten Filterbereichs verwendet                                                               | `function`                               |                                                          |
| [renderOption](#render-custom-options)                    | Wird zum Rendern von benutzerdefinierten Optionen verwendet                                                                       | `function`                               |                                                          |
| renderOptionGroup                                         | Wird zum Rendern von benutzerdefinierten Optionsgruppen verwendet                                                                | `function`                               |                                                          |
| [renderSelectedOption](#render-custom-selected-options)   | Wird zum Rendern von benutzerdefinierten ausgewählten Optionen verwendet                                                          | `function`                               |                                                          |
| [renderPopup](#rendering-options-list)                    | Wird zum Rendern des Inhalts der Optionsliste verwendet                                                                          | `function`                               |                                                          |
| [size](#size)                                             | Größe des Steuerelements / der Optionen                                                                                          | `string`                                 | `'m'`                                                    |
| value                                                     | Werte, die ausgewählte Optionen darstellen                                                                                      | `string[]`                               |                                                          |
| view                                                      | Ansicht des Steuerelements                                                                                                       | `string`                                 | `'normal'`                                               |
| [virtualizationThreshold](#virtualized-list)              | Schwellenwert für die Anzahl der Optionen, nach dem die Virtualisierung aktiviert wird                                          | `number`                                 | `50`                                                     |
| [width](#control-width)                                   | Breite des Steuerelements                                                                                                        | `string \| number`                       | `undefined`                                              |
| errorMessage                                              | Fehlermeldungstext                                                                                                               | `string`                                 |                                                          |
| errorPlacement                                            | Position des Fehlers                                                                                                             | `outside` `inside`                       | `outside`                                                |
| validationState                                           | Validierungsstatus                                                                                                               | `"invalid"`                              |                                                          |
| [hasCounter](#counter)                                    | Zeigt die Anzahl der ausgewählten Optionen an. Der Zähler erscheint nur, wenn die Mehrfachauswahl [multiple](#selecting-multiple-options) aktiviert ist. | `boolean`                                |                                                          |

## CSS API

| Name                             | Beschreibung                                   |
| :------------------------------- | :-------------------------------------------- |
| `--g-select-focus-outline-color` | Umrissfarbe bei Fokus (standardmäßig fehlt) |
