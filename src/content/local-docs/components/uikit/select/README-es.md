<!--GITHUB_BLOCK-->

# Select

<!--/GITHUB_BLOCK-->

`Select` es un control que proporciona una lista de opciones que un usuario puede seleccionar.

```tsx
import {Select} from '@gravity-ui/uikit';
```

## Opciones

Opciones para seleccionar.

### Definición de opciones

Puedes definir opciones como un array de objetos o como los hijos de un componente. El primer enfoque es útil para casos donde las opciones requieren una preparación compleja y, posiblemente, memorización. El segundo es conveniente cuando hay pocas opciones y su configuración no requiere cálculos complejos.

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

### Almacenamiento de datos en opciones

Puedes definir y almacenar datos únicos en cada opción utilizando la propiedad `option.data`. Esto puede ser útil cuando necesitas enriquecer los datos al usar la devolución de llamada `onUpdate` o, por ejemplo, al dibujar tus opciones con `renderOption`.

## Selección de múltiples opciones

Para habilitar la selección múltiple, usa la propiedad `multiple`. Su valor predeterminado es `false`.

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

Puedes agregar un contador de los elementos seleccionados al componente usando la propiedad `hasCounter`.

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

## Filtrado de opciones

Para habilitar la sección de filtro, usa la propiedad `filterable`. Su valor predeterminado es `false`.

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

## Tamaño

Para gestionar el tamaño predeterminado del control y las opciones, usa la propiedad `size`. Su tamaño predeterminado es `m`.

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

## Ancho del control

Por defecto, el ancho del control se estira para coincidir con el ancho del contenido de las opciones seleccionadas. Puedes gestionarlo usando la propiedad `width`:

`'max'`: Se estira al ancho completo del padre.

`number`: Aplica el ancho en píxeles.

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

## Ancho del popup

Puedes gestionar el ancho del popup con la propiedad `popupWidth`. Los valores disponibles son:

`'fit'`: Aplica el ancho del control.

`number`: Aplica el ancho en píxeles.

Puntos a tener en cuenta sobre el comportamiento predeterminado:

- El ancho del popup es igual al ancho de la opción más ancha, pero no más ancho que `90vw`. Esto no se aplica en caso de que uses [virtualización](#virtualized-list).

- Las opciones estrechas se estiran para ajustarse al ancho del control.

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

Para una visualización óptima de un gran número de opciones, `Select` tiene una herramienta de virtualización de listas incorporada. La virtualización se habilita al superar el umbral del número de opciones (`50` por defecto). Puedes gestionar este valor usando la propiedad `virtualizationThreshold`.

Al usar la virtualización, se aplican algunas restricciones al elemento popup:

- El ancho del popup ya no se ajusta a la longitud de la opción más larga.

- El ancho mínimo del popup es igual al ancho del control, o `100px` si el control es más corto.

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

## Uso avanzado

Hay muchas maneras de personalizar tu `Select`.

### Renderizado de control personalizado

Para renderizar un control personalizado, usa la propiedad `renderControl`.
Nota: Debes reenviar todos los argumentos a tu nodo para habilitar un comportamiento consistente, al igual que al usar el control predeterminado.

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

### Renderizado de sección de filtro personalizada

Para renderizar una sección de filtro personalizada, usa la propiedad `renderFilter` y establece la propiedad `filterable` en `true`.
Nota: Necesitas reenviar todos los argumentos a tu nodo para habilitar un filtro que funcione correctamente, al igual que al usar la configuración predeterminada.

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

### Renderizado de opciones personalizadas

Para renderizar opciones personalizadas, usa la propiedad `renderOption`:

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

### Renderizado de opciones seleccionadas personalizadas

Para renderizar opciones seleccionadas personalizadas, usa la propiedad `renderSelectedOption`:

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

### Renderizado de opciones con diferentes alturas

Las opciones tienen una altura fija según la propiedad `size`. Si necesitas renderizar opciones con diferentes alturas, puedes usar la propiedad `option.data`. Almacenará información sobre qué altura necesitas establecer para las opciones, así como la propiedad `getOptionHeight` para establecer este valor.

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

### Renderizado de contador personalizado

Para renderizar un contador personalizado, usa la propiedad `renderCounter`. El contador solo se muestra cuando la selección múltiple está habilitada (`multiple={true}`) y `hasCounter={true}`.

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

### Renderizado de lista de opciones

La propiedad `renderPopup` te permite controlar el contenido de la lista de opciones: cambiar el orden de los elementos estándar (filtro, lista), ocultarlos o agregar elementos personalizados entre, antes o después de ellos.

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

### Error

Este estado de `Select` es para entradas de usuario incorrectas. Para cambiar la apariencia de `Select`, usa la propiedad `validationState` con el valor `"invalid"`. Opcionalmente, puedes proporcionar un mensaje de error a través de la propiedad `errorMessage`. Por defecto, el texto del mensaje se renderiza fuera del componente.
Puedes cambiar esto con la propiedad `errorPlacement`.

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

## Propiedades

| Nombre                                                      | Descripción                                                                                                                      | Tipo                                     | Predeterminado                                           |
| :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------- |
| className                                                 | Controla la clase CSS                                                                                                            | `string`                                 |                                                          |
| defaultValue                                              | Valores predeterminados que representan las opciones seleccionadas en caso de usar un estado no controlado                      | `string[]`                               |                                                          |
| disabled                                                  | Indica que el usuario no puede interactuar con el control                                                                        | `boolean`                                | `false`                                                  |
| [filterable](#filtering-options)                          | Indica que el popup de selección tiene una sección de filtro                                                                     | `boolean`                                | `false`                                                  |
| filterOption                                              | Se utiliza para comparar una opción con el filtro                                                                                | `function`                               |                                                          |
| filterPlaceholder                                         | Texto predeterminado para el placeholder del input de filtro                                                                     | `string`                                 |                                                          |
| [getOptionHeight](#render-options-with-different-heights) | Se utiliza para establecer la altura de las opciones personalizadas del usuario                                                  | `function`                               |                                                          |
| getOptionGroupHeight                                      | Se utiliza para establecer la altura de los grupos de opciones personalizadas del usuario                                       | `function`                               |                                                          |
| hasClear                                                  | Habilita la visualización de un icono para borrar las opciones seleccionadas                                                     | `boolean`                                | `false`                                                  |
| id                                                        | Atributo `id` de HTML                                                                                                            | `string`                                 |                                                          |
| label                                                     | Etiqueta del control                                                                                                             | `string`                                 |                                                          |
| loading                                                   | Agrega el elemento de carga al final de la lista de opciones. Funciona como un indicador de carga persistente mientras la lista de opciones está vacía. | `boolean`                                |                                                          |
| [multiple](#selecting-multiple-options)                   | Indica si se pueden seleccionar múltiples opciones en la lista                                                                    | `boolean`                                | `false`                                                  |
| name                                                      | Nombre del control                                                                                                               | `string`                                 |                                                          |
| onBlur                                                    | Manejador que se llama cuando el elemento pierde el foco.                                                                        | `function`                               |                                                          |
| filter                                                    | Valor del filtro controlado                                                                                                      | `string`                                 | `''`                                                     |
| onFilterChange                                            | Se dispara cada vez después de cambiar el filtro                                                                                | `function`                               |                                                          |
| onFocus                                                   | Manejador que se llama cuando el elemento obtiene el foco                                                                        | `function`                               |                                                          |
| onLoadMore                                                | Se dispara cuando el indicador de carga se vuelve visible                                                                       | `function`                               |                                                          |
| onOpenChange                                              | Se dispara cada vez después de cambiar la visibilidad del popup                                                                  | `function`                               |                                                          |
| onUpdate                                                  | Se dispara cuando el usuario confirma una alteración en el valor de `Select`                                                     | `function`                               |                                                          |
| [options](#options)                                       | Opciones para seleccionar                                                                                                        | `(SelectOption \| SelectOptionGroup)[]`  |                                                          |
| pin                                                       | Vista del borde del control                                                                                                      | `string`                                 | `'round-round'`                                          |
| placeholder                                               | Texto del placeholder                                                                                                            | `string`                                 |                                                          |
| popupClassName                                            | Clase CSS del popup con la lista de opciones                                                                                     | `string`                                 |                                                          |
| popupPlacement                                            | Posicionamiento del popup                                                                                                        | `PopupPlacement` `Array<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                | Ancho del popup                                                                                                                  | `number \| 'fit' \| 'outfit'`            | `'outfit'`                                               |
| qa                                                        | Atributo de ID de prueba (`data-qa`)                                                                                             | `string`                                 |                                                          |
| [renderControl](#render-custom-control)                   | Se utiliza para renderizar el control del usuario                                                                                | `function`                               |                                                          |
| [renderCounter](#rendering-custom-counter)                | Se utiliza para renderizar el contador del usuario. Solo funciona con [hasCounter](#counter).                                    | `function`                               |                                                          |
| renderEmptyOptions                                        | Se utiliza para renderizar un nodo para una lista de opciones vacía                                                              | `function`                               |                                                          |
| [renderFilter](#render-custom-filter-section)             | Se utiliza para renderizar la sección de filtro del usuario                                                                      | `function`                               |                                                          |
| [renderOption](#render-custom-options)                    | Se utiliza para renderizar las opciones del usuario                                                                              | `function`                               |                                                          |
| renderOptionGroup                                         | Se utiliza para renderizar los grupos de opciones del usuario                                                                    | `function`                               |                                                          |
| [renderSelectedOption](#render-custom-selected-options)   | Se utiliza para renderizar las opciones seleccionadas del usuario                                                                | `function`                               |                                                          |
| [renderPopup](#rendering-options-list)                    | Se utiliza para renderizar el contenido de la lista de opciones                                                                  | `function`                               |                                                          |
| [size](#size)                                             | Tamaño del control / opciones                                                                                                    | `string`                                 | `'m'`                                                    |
| value                                                     | Valores que representan las opciones seleccionadas                                                                               | `string[]`                               |                                                          |
| view                                                      | Vista del control                                                                                                                | `string`                                 | `'normal'`                                               |
| [virtualizationThreshold](#virtualized-list)              | Umbral de recuento de opciones después del cual se habilita la virtualización                                                    | `number`                                 | `50`                                                     |
| [width](#control-width)                                   | Ancho del control                                                                                                                | `string \| number`                       | `undefined`                                              |
| errorMessage                                              | Texto del error                                                                                                                  | `string`                                 |                                                          |
| errorPlacement                                            | Posición del error                                                                                                               | `outside` `inside`                       | `outside`                                                |
| validationState                                           | Estado de validación                                                                                                             | `"invalid"`                              |                                                          |
| [hasCounter](#counter)                                    | Muestra el recuento de opciones seleccionadas. El contador solo aparece cuando la selección [multiple](#selecting-multiple-options) está habilitada. | `boolean`                                |                                                          |

## API CSS

| Nombre                             | Descripción                                   |
| :------------------------------- | :-------------------------------------------- |
| `--g-select-focus-outline-color` | Color del contorno si está enfocado (falta por defecto) |
