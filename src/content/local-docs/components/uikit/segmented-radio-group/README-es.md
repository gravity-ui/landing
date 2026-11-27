<!--GITHUB_BLOCK-->

# SegmentedRadioGroup

<!--/GITHUB_BLOCK-->

```tsx
import {SegmentedRadioGroup} from '@gravity-ui/uikit';
```

El `SegmentedRadioGroup` componente se usa para crear un grupo de botones de radio donde los usuarios pueden seleccionar una sola opción entre varias opciones.

### Estado desactivado

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

### Tamaño

Usa la `size` propiedad para administrar el `SegmentedRadioGroup` tamaño. El tamaño predeterminado es `m`.

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

### Anchura

Utilice la `width` propiedad para gestionar el `SegmentedRadioGroup` ancho:

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

### Propiedades

| Nombre       | Descripción                                                                                                                                 |                Tipo                | Predeterminado |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------: | :------------: |
| niños        | Contenido del botón de radio.                                                                                                               |            `ReactNode`             |                |
| inhabilitado | Cambia el `disabled` estado del botón de radio.                                                                                             |             `boolean`              |    `false`     |
| opciones     | Opciones para el botón de radio.                                                                                                            | `SegmentedRadioGroupOptionProps[]` |                |
| defaultValue | Establece el estado del valor inicial cuando se monta el componente.                                                                        |              `string`              |                |
| onUpdate     | Se activa cuando el usuario cambia el estado del botón de opción y proporciona el nuevo valor como argumento de devolución de llamada.      |     `(value: string) => void`      |                |
| onChange     | Se activa cuando el usuario cambia el estado del botón de opción y proporciona el evento de cambio como argumento de devolución de llamada. |             `Function`             |                |
| onFocus      | Controlador de eventos para usar cuando el elemento de entrada de radio recibe el foco.                                                     |             `Function`             |                |
| onBlur       | Controlador de eventos para usar cuando el elemento de entrada de radio pierde el foco.                                                     |             `Function`             |                |
| anchura      | Establece el ancho del botón de radio.                                                                                                      |            `auto - max`            |                |
| tamaño       | Establece el tamaño del botón de radio.                                                                                                     |              `s` `xl`              |      `m`       |
| nombre       | `name` Atributo HTML para el elemento de entrada.                                                                                           |              `string`              |                |
| qa           | `data-qa` Atributo HTML, usado para realizar pruebas                                                                                        |              `string`              |                |
| estilo       | `style` Atributo HTML                                                                                                                       |       `React.CSSProperties`        |                |
| className    | `class` Atributo HTML                                                                                                                       |              `string`              |                |

## Grupo de radio segmentado. Opción

El `SegmentedRadioGroup` componente también exporta un `Option` componente anidado. Puede usarlo para crear opciones de botones de radio dentro de un `SegmentedRadioGroup`.

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

### Propiedades

| Nombre       | Descripción                                           |    Tipo     | Predeterminado |
| :----------- | :---------------------------------------------------- | :---------: | :------------: |
| niños        | El contenido de la radio (normalmente, una etiqueta). | `ReactNode` |                |
| contenido    | El contenido de la radio (alternativa a los niños).   | `ReactNode` |                |
| inhabilitado | Cambia el `disabled` estado de la radio.              |  `boolean`  |    `false`     |
| valor        | Valor de control                                      |  `string`   |                |
