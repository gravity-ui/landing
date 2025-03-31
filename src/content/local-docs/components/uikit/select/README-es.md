<!--GITHUB_BLOCK-->

# Seleccione

<!--/GITHUB_BLOCK-->

```tsx
import {Select} from '@gravity-ui/uikit';
```

`Select` es un control que proporciona una lista de opciones que un usuario puede seleccionar.

## Opciones

Opciones para seleccionar.

### Definir opciones

Puede definir las opciones como una matriz de objetos o como elementos secundarios de un componente. El primer enfoque es útil para los casos en que las opciones requieren una preparación compleja y, posiblemente, la memorización. El segundo es conveniente cuando hay pocas opciones y su configuración no requiere cálculos complejos.

#### Lista plana

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

#### Lista agrupada

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

### Almacenamiento de datos en opciones

Puede definir y almacenar datos únicos en cada opción mediante la `option.data` propiedad. Esto puede resultar útil cuando necesitas enriquecer los datos al usar la `onUpdate` devolución de llamada o, por ejemplo, al dibujar tus opciones con `renderOption` ella.

## Selección de varias opciones

Para habilitar la selección múltiple, utilice la `multiple` propiedad. Su valor predeterminado es `false`.

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

### Contador

Puede añadir un contador de los elementos seleccionados al componente mediante la `hasCounter` propiedad.

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

## Opciones de filtrado

Para habilitar la sección de filtro, utilice la `filterable` propiedad. Su valor predeterminado es `false`.

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

## Tamaño

Para administrar el tamaño predeterminado de los controles y las opciones, utilice la `size` propiedad. Su tamaño predeterminado es `m`.

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

## Ancho de control

De forma predeterminada, el ancho del control se amplía para que coincida con el ancho del contenido de las opciones seleccionadas. Puede administrarlo utilizando la `width` propiedad:

`'max'`: Se extiende a todo el ancho del padre.

`number`: Aplica el ancho en píxeles.

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

## Anchura de la ventana emergente

Puede gestionar el ancho de la ventana emergente con la `popupWidth` propiedad. Los valores disponibles son:

`'fit'`: Aplica el ancho de control.

`number`: Aplica el ancho en píxeles.

Puntos a tener en cuenta sobre el comportamiento predeterminado:

- El ancho de la ventana emergente es igual al ancho de la opción más ancha, pero no más ancho que `90vw`. Esto no se aplica en caso de que utilice [la virtualización](#virtualized-list).

- Las opciones limitadas se amplían para ajustarse al ancho del control.

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

### Lista virtualizada

Para una visualización óptima de una gran cantidad de opciones, `Select` tiene una herramienta de virtualización de listas incorporada. La virtualización se habilita después de superar el umbral del número de opciones (de forma`50` predeterminada). Puede administrar este valor mediante la `virtualizationThreshold` propiedad.

Cuando se utiliza la virtualización, se aplican algunas restricciones al elemento emergente:

- El ancho de la ventana emergente ya no se ajusta a la longitud de la opción más larga.

- El ancho mínimo de la ventana emergente es igual al ancho del control o `100px` si el control es más corto.

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

## Uso avanzado

Hay muchas formas de personalizar tu `Select`.

### Representación del control personalizado

Para renderizar un control personalizado, utilice la `renderControl` propiedad.
Nota: Debes reenviar todos los argumentos a tu nodo para permitir un comportamiento coherente, igual que cuando usas el control predeterminado.

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

### Modelización de la sección de filtros personalizados

Para renderizar una sección de filtro personalizada, utilice la `renderFilter` propiedad y establezca la `filterable` propiedad en `true`.
Nota: Debes reenviar todos los argumentos a tu nodo para habilitar un filtro que funcione correctamente, igual que cuando usas la configuración predeterminada.

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

### Opciones personalizadas de renderizado

Para renderizar opciones personalizadas, utilice la `renderOption` propiedad:

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

### Modelizar las opciones seleccionadas personalizadas

Para renderizar las opciones seleccionadas personalizadas, utilice la `renderSelectedOption` propiedad:

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

### Opciones de renderizado con diferentes alturas

Las opciones tienen una altura fija según la `size` propiedad. Si necesita renderizar opciones con alturas diferentes, puede usar la `option.data` propiedad. Almacenará información sobre la altura que necesita establecer para las opciones, así como la `getOptionHeight` propiedad para establecer este valor.

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

### Representación de una ventana emergente personalizada

Para representar una ventana emergente personalizada, utilice la `renderPopup` propiedad.

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

### Error

Este `Select` estado se debe a una entrada de usuario incorrecta. Para cambiar el `Select` aspecto, utilice la `validationState` propiedad con el `"invalid"` valor. Si lo desea, puede proporcionar un mensaje de error a través de la `errorMessage` propiedad. De forma predeterminada, el texto del mensaje se representa fuera del componente.
Puede cambiarlo con la `errorPlacement` propiedad.

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

## Propiedades

| Nombre                                                    | Descripción                                                                                                                                            | Tipo                                                         | Predeterminado                                           |
| :-------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------- | :------------------------------------------------------- |
| className                                                 | Nombre de clase de control                                                                                                                             | `string`                                                     |                                                          |
| defaultValue                                              | Valores predeterminados que representan las opciones seleccionadas en caso de usar un estado no controlado                                             | `string[]`                                                   |                                                          |
| inhabilitado                                              | Muestra que el usuario no puede trabajar con el control                                                                                                | `boolean`                                                    | `false`                                                  |
| [filtrable](#filtering-options)                           | Muestra que la ventana emergente de selección tiene una sección de filtro                                                                              | `boolean`                                                    | `false`                                                  |
| filterOption                                              | Se usa para comparar la opción con el filtro                                                                                                           | `function`                                                   |                                                          |
| filterPlaceholder                                         | Texto de marcador de posición de entrada de filtro predeterminado                                                                                      | `string`                                                     |                                                          |
| [getOptionHeight](#render-options-with-different-heights) | Se utiliza para establecer la altura de las opciones de usuario personalizadas                                                                         | `function`                                                   |                                                          |
| getOptionGroupHeight                                      | Se utiliza para establecer la altura del grupo de opciones de usuario personalizado                                                                    | `function`                                                   |                                                          |
| hasClear                                                  | Activa la visualización del icono para borrar las opciones seleccionadas                                                                               | `boolean`                                                    | `false`                                                  |
| identificación                                            | `id` Atributo HTML                                                                                                                                     | `string`                                                     |                                                          |
| etiqueta                                                  | Etiqueta de control                                                                                                                                    | `string`                                                     |                                                          |
| cargando                                                  | Añade el elemento de carga al final de la lista de opciones. Funciona como un indicador de carga persistente mientras la lista de opciones está vacía. | `boolean`                                                    |                                                          |
| [múltiple](#selecting-multiple-options)                   | Muestra si se pueden seleccionar varias opciones en la lista                                                                                           | `boolean`                                                    | `false`                                                  |
| nombre                                                    | Nombre del control                                                                                                                                     | `string`                                                     |                                                          |
| onBlur                                                    | Controlador que se invoca cuando el elemento pierde el foco.                                                                                           | `function`                                                   |                                                          |
| filtrar                                                   | Valor de filtro controlado                                                                                                                             | `string`                                                     | `''`                                                     |
| onFilterChange                                            | Se dispara cada vez que se cambia el filtro                                                                                                            | `function`                                                   |                                                          |
| onFocus                                                   | Controlador que se llama cuando el elemento se enfoca                                                                                                  | `function`                                                   |                                                          |
| onLoadMore                                                | Se activa cuando el indicador de carga se hace visible                                                                                                 | `function`                                                   |                                                          |
| onOpenChange                                              | Se activa cada vez que se cambia la visibilidad de la ventana emergente                                                                                | `function`                                                   |                                                          |
| onUpdate                                                  | Se activa cuando el usuario comete una modificación del `Select` valor                                                                                 | `function`                                                   |                                                          |
| [opciones](#options)                                      | Opciones para seleccionar                                                                                                                              | `(Seleccione la opción\| [Seleccione el grupo de opciones)]` |                                                          |
| alfiler                                                   | Controlar la vista de la frontera                                                                                                                      | `string`                                                     | `'round-round'`                                          |
| marcador de posición                                      | Texto de marcador de posición                                                                                                                          | `string`                                                     |                                                          |
| popupClassName                                            | Ventana emergente con la lista de opciones `className`                                                                                                 | `string`                                                     |                                                          |
| popupPlacement                                            | Colocación de ventanas emergentes                                                                                                                      | `PopupPlacement` `Matriz<PopupPlacement>`                    | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                | Anchura de la ventana emergente                                                                                                                        | `número\| 'ajustado'\| 'atuendo'`                            | `'outfit'`                                               |
| qa                                                        | Atributo de identificación de prueba (`data-qa`)                                                                                                       | `string`                                                     |                                                          |
| [renderControl](#render-custom-control)                   | Se usa para renderizar el control del usuario                                                                                                          | `function`                                                   |                                                          |
| renderEmptyOptions                                        | Se usa para representar un nodo para una lista de opciones vacía                                                                                       | `function`                                                   |                                                          |
| [renderFilter](#render-custom-filter-section)             | Se usa para renderizar la sección de filtro de usuario                                                                                                 | `function`                                                   |                                                          |
| [renderOption](#render-custom-options)                    | Se usa para representar las opciones de usuario                                                                                                        | `function`                                                   |                                                          |
| renderOptionGroup                                         | Se usa para representar grupos de opciones de usuario                                                                                                  | `function`                                                   |                                                          |
| [renderSelectedOption](#render-custom-selected-options)   | Se usa para representar las opciones seleccionadas por el usuario                                                                                      | `function`                                                   |                                                          |
| [renderPopup](#render-custom-popup)                       | Se utiliza para representar el contenido emergente del usuario                                                                                         | `function`                                                   |                                                          |
| [tamaño](#size)                                           | Tamaño de control/ opciones                                                                                                                            | `string`                                                     | `'m'`                                                    |
| valor                                                     | Valores que representan las opciones seleccionadas                                                                                                     | `string[]`                                                   |                                                          |
| vista                                                     | Vista de control                                                                                                                                       | `string`                                                     | `'normal'`                                               |
| [virtualizationThreshold](#virtualized-list)              | Umbral de recuento de opciones tras el cual se habilita la virtualización                                                                              | `number`                                                     | `50`                                                     |
| [anchura](#control-width)                                 | Ancho de control                                                                                                                                       | `cadena\| número`                                            | `undefined`                                              |
| errorMessage                                              | Texto de error                                                                                                                                         | `string`                                                     |                                                          |
| errorPlacement                                            | Posición de error                                                                                                                                      | `outside` `inside`                                           | `outside`                                                |
| validationState                                           | Estado de validación                                                                                                                                   | `"invalid"`                                                  |                                                          |
| [hasCounter](#counter)                                    | Muestra el recuento de opciones seleccionadas. El contador solo aparece cuando la selección [múltiple](#selecting-multiple-options) está habilitada.   | `boolean`                                                    |

## API CSS

| Nombre                           | Descripción                                                         |
| :------------------------------- | :------------------------------------------------------------------ |
| `--g-select-focus-outline-color` | Color del contorno si está enfocado (falta de forma predeterminada) |
