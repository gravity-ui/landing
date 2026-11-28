<!--GITHUB_BLOCK-->

# Select

<!--/GITHUB_BLOCK-->

`Select` é um controle que fornece uma lista de opções que um usuário pode selecionar.

```tsx
import {Select} from '@gravity-ui/uikit';
```

## Opções

Opções para selecionar.

### Definindo opções

Você pode definir opções como um array de objetos ou como filhos de um componente. A primeira abordagem é útil para casos em que as opções exigem preparação complexa e, possivelmente, memorização. A segunda é conveniente quando há poucas opções e sua configuração não requer cálculos complexos.

#### Lista plana

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

#### Lista agrupada

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

### Armazenando dados em opções

Você pode definir e armazenar dados exclusivos em cada opção usando a propriedade `option.data`. Isso pode ser útil quando você precisa enriquecer os dados ao usar o callback `onUpdate` ou, por exemplo, ao renderizar suas opções com `renderOption`.

## Selecionando múltiplas opções

Para habilitar a seleção múltipla, use a propriedade `multiple`. Seu valor padrão é `false`.

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

### Contador

Você pode adicionar um contador de itens selecionados ao componente usando a propriedade `hasCounter`.

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

## Filtrando opções

Para habilitar a seção de filtro, use a propriedade `filterable`. Seu valor padrão é `false`.

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

## Tamanho

Para gerenciar o tamanho padrão do controle e das opções, use a propriedade `size`. Seu tamanho padrão é `m`.

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

## Largura do controle

Por padrão, a largura do controle se estende para corresponder à largura do conteúdo das opções selecionadas. Você pode gerenciá-la usando a propriedade `width`:

`'max'`: Estende para a largura total do pai.

`number`: Aplica a largura em pixels.

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

## Largura do popup

Você pode gerenciar a largura do popup com a propriedade `popupWidth`. Os valores disponíveis são:

`'fit'`: Aplica a largura do controle.

`number`: Aplica a largura em pixels.

Pontos a serem observados sobre o comportamento padrão:

- A largura do popup é igual à largura da opção mais larga, mas não superior a `90vw`. Isso não se aplica caso você use [virtualização](#virtualized-list).

- Opções estreitas são estendidas para caber na largura do controle.

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

### Lista virtualizada

Para uma exibição ideal de um grande número de opções, `Select` possui uma ferramenta de virtualização de lista integrada. A virtualização é habilitada após superar o limite do número de opções (`50` por padrão). Você pode gerenciar esse valor usando a propriedade `virtualizationThreshold`.

Ao usar a virtualização, algumas restrições se aplicam ao elemento popup:

- A largura do popup não é mais ajustada ao comprimento da opção mais longa.

- A largura mínima do popup é igual à largura do controle, ou `100px` se o controle for mais curto.

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

## Uso avançado

Existem muitas maneiras de personalizar seu `Select`.

### Renderizando controle personalizado

Para renderizar um controle personalizado, use a propriedade `renderControl`.
Observação: Você deve encaminhar todos os argumentos para o seu nó para habilitar um comportamento consistente, assim como ao usar o controle padrão.

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

### Renderizando seção de filtro personalizada

Para renderizar uma seção de filtro personalizada, use a propriedade `renderFilter` e defina a propriedade `filterable` como `true`.
Observação: Você precisa encaminhar todos os argumentos para o seu nó para habilitar um filtro que funcione corretamente, assim como ao usar a configuração padrão.

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

### Renderizando opções personalizadas

Para renderizar opções personalizadas, use a propriedade `renderOption`:

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

### Renderizando opções selecionadas personalizadas

Para renderizar opções selecionadas personalizadas, use a propriedade `renderSelectedOption`:

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

### Renderizando opções com alturas diferentes

As opções têm uma altura fixa de acordo com a propriedade `size`. Se você precisar renderizar opções com alturas diferentes, pode usar a propriedade `option.data`. Ela armazenará informações sobre qual altura você precisa definir para as opções, bem como a propriedade `getOptionHeight` para definir esse valor.

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

### Renderizando contador personalizado

Para renderizar um contador personalizado, use a propriedade `renderCounter`. O contador só é exibido quando a seleção múltipla está habilitada (`multiple={true}`) e `hasCounter={true}`.

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

### Renderizando lista de opções

A propriedade `renderPopup` permite controlar o conteúdo da lista de opções: alterar a ordem dos elementos padrão (filtro, lista), ocultá-los ou adicionar elementos personalizados entre, antes ou depois deles.

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

### Erro

Este estado do `Select` é para entrada incorreta do usuário. Para alterar a aparência do `Select`, use a propriedade `validationState` com o valor `"invalid"`. Opcionalmente, você pode fornecer uma mensagem de erro através da propriedade `errorMessage`. Por padrão, o texto da mensagem é renderizado fora do componente.
Você pode alterar isso com a propriedade `errorPlacement`.

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

## Propriedades

| Nome                                                      | Descrição                                                                                                                      | Tipo                                     | Padrão                                                   |
| :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------- |
| className                                                 | Controla a classe CSS                                                                                                            | `string`                                 |                                                          |
| defaultValue                                              | Valores padrão que representam opções selecionadas em caso de uso de estado não controlado                                       | `string[]`                               |                                                          |
| disabled                                                  | Indica que o controle não pode ser manipulado pelo usuário                                                                        | `boolean`                                | `false`                                                  |
| [filterable](#filtering-options)                          | Indica que o popup de seleção possui uma seção de filtro                                                                        | `boolean`                                | `false`                                                  |
| filterOption                                              | Usado para comparar a opção com o filtro                                                                                         | `function`                               |                                                          |
| filterPlaceholder                                         | Texto padrão do placeholder da entrada de filtro                                                                                 | `string`                                 |                                                          |
| [getOptionHeight](#render-options-with-different-heights) | Usado para definir a altura de opções personalizadas do usuário                                                                  | `function`                               |                                                          |
| getOptionGroupHeight                                      | Usado para definir a altura de grupos de opções personalizados do usuário                                                        | `function`                               |                                                          |
| hasClear                                                  | Habilita a exibição de um ícone para limpar as opções selecionadas                                                               | `boolean`                                | `false`                                                  |
| id                                                        | Atributo `id` do HTML                                                                                                            | `string`                                 |                                                          |
| label                                                     | Rótulo do controle                                                                                                               | `string`                                 |                                                          |
| loading                                                   | Adiciona o item de carregamento ao final da lista de opções. Funciona como um indicador de carregamento persistente enquanto a lista de opções está vazia. | `boolean`                                |                                                          |
| [multiple](#selecting-multiple-options)                   | Indica se várias opções podem ser selecionadas na lista                                                                          | `boolean`                                | `false`                                                  |
| name                                                      | Nome do controle                                                                                                                 | `string`                                 |                                                          |
| onBlur                                                    | Handler chamado quando o elemento perde o foco.                                                                                  | `function`                               |                                                          |
| filter                                                    | Valor controlado do filtro                                                                                                       | `string`                                 | `''`                                                     |
| onFilterChange                                            | Dispara a cada alteração do filtro                                                                                               | `function`                               |                                                          |
| onFocus                                                   | Handler chamado quando o elemento ganha foco                                                                                     | `function`                               |                                                          |
| onLoadMore                                                | Dispara quando o indicador de carregamento fica visível                                                                          | `function`                               |                                                          |
| onOpenChange                                              | Dispara a cada alteração da visibilidade do popup                                                                                | `function`                               |                                                          |
| onUpdate                                                  | Dispara quando uma alteração no valor do `Select` é confirmada pelo usuário                                                     | `function`                               |                                                          |
| [options](#options)                                       | Opções para selecionar                                                                                                           | `(SelectOption \| SelectOptionGroup)[]`  |                                                          |
| pin                                                       | Vista da borda do controle                                                                                                       | `string`                                 | `'round-round'`                                          |
| placeholder                                               | Texto do placeholder                                                                                                             | `string`                                 |                                                          |
| popupClassName                                            | Classe CSS do popup com a lista de opções                                                                                        | `string`                                 |                                                          |
| popupPlacement                                            | Posicionamento do popup                                                                                                          | `PopupPlacement` `Array<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                | Largura do popup                                                                                                                 | `number \| 'fit' \| 'outfit'`            | `'outfit'`                                               |
| qa                                                        | Atributo de ID de teste (`data-qa`)                                                                                              | `string`                                 |                                                          |
| [renderControl](#render-custom-control)                   | Usado para renderizar o controle do usuário                                                                                      | `function`                               |                                                          |
| [renderCounter](#rendering-custom-counter)                | Usado para renderizar o contador do usuário. Funciona apenas com [hasCounter](#counter).                                         | `function`                               |                                                          |
| renderEmptyOptions                                        | Usado para renderizar um nó para uma lista de opções vazia                                                                       | `function`                               |                                                          |
| [renderFilter](#render-custom-filter-section)             | Usado para renderizar a seção de filtro do usuário                                                                               | `function`                               |                                                          |
| [renderOption](#render-custom-options)                    | Usado para renderizar as opções do usuário                                                                                       | `function`                               |                                                          |
| renderOptionGroup                                         | Usado para renderizar grupos de opções do usuário                                                                                | `function`                               |                                                          |
| [renderSelectedOption](#render-custom-selected-options)   | Usado para renderizar as opções selecionadas do usuário                                                                          | `function`                               |                                                          |
| [renderPopup](#rendering-options-list)                    | Usado para renderizar o conteúdo da lista de opções                                                                              | `function`                               |                                                          |
| [size](#size)                                             | Tamanho do controle / opções                                                                                                     | `string`                                 | `'m'`                                                    |
| value                                                     | Valores que representam opções selecionadas                                                                                      | `string[]`                               |                                                          |
| view                                                      | Vista do controle                                                                                                                | `string`                                 | `'normal'`                                               |
| [virtualizationThreshold](#virtualized-list)              | Limite de contagem de opções após o qual a virtualização é habilitada                                                            | `number`                                 | `50`                                                     |
| [width](#control-width)                                   | Largura do controle                                                                                                              | `string \| number`                       | `undefined`                                              |
| errorMessage                                              | Texto de erro                                                                                                                    | `string`                                 |                                                          |
| errorPlacement                                            | Posição do erro                                                                                                                  | `outside` `inside`                       | `outside`                                                |
| validationState                                           | Estado de validação                                                                                                              | `"invalid"`                              |                                                          |
| [hasCounter](#counter)                                    | Mostra a contagem de opções selecionadas. O contador aparece apenas quando a seleção [multiple](#selecting-multiple-options) está habilitada. | `boolean`                                |                                                          |

## API CSS

| Nome                             | Descrição                                   |
| :------------------------------- | :-------------------------------------------- |
| `--g-select-focus-outline-color` | Cor do contorno se focado (ausente por padrão) |
