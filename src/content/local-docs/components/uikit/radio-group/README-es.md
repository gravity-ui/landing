<!--GITHUB_BLOCK-->

# RadioGroup

<!--/GITHUB_BLOCK-->

```tsx
import {RadioGroup} from '@gravity-ui/uikit';
```

El `RadioGroup` componente se usa para crear un grupo en el que los usuarios pueden seleccionar una sola opción entre varias opciones.

### Estado desactivado

<!--LANDING_BLOCK

<ExampleBlock
  code={`
const options: RadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<RadioGroup name="group2" defaultValue={options[0].value} options={options} disabled/>
`}
>
  <UIKit.RadioGroup name="group2" defaultValue="Value 1" options={
    [
      {value: 'Value 1', content: 'Value 1'},
      {value: 'Value 2', content: 'Value 2'},
      {value: 'Value 3', content: 'Value 3'},
    ]
  } disabled/>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
const options: RadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<RadioGroup name="group2" defaultValue={options[0].value} options={options} disabled />;
```

<!--/GITHUB_BLOCK-->

### Tamaño

Usa la `size` propiedad para administrar el `RadioGroup` tamaño. El tamaño predeterminado es `m`.

<!--LANDING_BLOCK

<ExampleBlock
  code={`
const options: RadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<RadioGroup name="group1" defaultValue={options[0].value} options={options} size="m"/>
<RadioGroup name="group2" defaultValue={options[0].value} options={options} size="l"/>
`}
>
  <UIKit.RadioGroup name="group1" defaultValue="Value 1" options={
    [
      {value: 'Value 1', content: 'Value 1'},
      {value: 'Value 2', content: 'Value 2'},
      {value: 'Value 3', content: 'Value 3'},
    ]
  } size="m"/>
  <UIKit.RadioGroup name="group2" defaultValue="Value 1" options={
    [
      {value: 'Value 1', content: 'Value 1'},
      {value: 'Value 2', content: 'Value 2'},
      {value: 'Value 3', content: 'Value 3'},
    ]
  } size="l"/>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
  const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
  ];
  <RadioGroup name="group1" defaultValue={options[0].value} options={options} size="m"/>
  <RadioGroup name="group2" defaultValue={options[0].value} options={options} size="l"/>
```

<!--/GITHUB_BLOCK-->

### Dirección

Usa la `direction` propiedad para administrar la `RadioGroup` dirección. La dirección por defecto es `horizontal`.

<!--LANDING_BLOCK

<ExampleBlock
  code={`
const options: RadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<RadioGroup name="group1" defaultValue={options[0].value} options={options} direction="horizontal"/>
<RadioGroup name="group2" defaultValue={options[0].value} options={options} direction="vertical"/>
`}
>
  <UIKit.RadioGroup name="group1" defaultValue="Value 1" options={
    [
      {value: 'Value 1', content: 'Value 1'},
      {value: 'Value 2', content: 'Value 2'},
      {value: 'Value 3', content: 'Value 3'},
    ]
  } direction="horizontal"/>
  <UIKit.RadioGroup name="group2" defaultValue="Value 1" options={
    [
      {value: 'Value 1', content: 'Value 1'},
      {value: 'Value 2', content: 'Value 2'},
      {value: 'Value 3', content: 'Value 3'},
    ]
  } direction="vertical"/>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
  const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
  ];
  <RadioGroup name="group1" defaultValue={options[0].value} options={options} direction="horizontal"/>
  <RadioGroup name="group2" defaultValue={options[0].value} options={options} direction="vertical"/>
```

<!--/GITHUB_BLOCK-->

### Propiedades

| Nombre          | Descripción                                                                                                                         |           Tipo            | Predeterminado |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------------------- | :-----------------------: | :------------: |
| niños           | El contenido del grupo de radio.                                                                                                    |        `ReactNode`        |                |
| inhabilitado    | Cambia el `disabled` estado del grupo de radio.                                                                                     |         `boolean`         |    `false`     |
| opciones        | Opciones para el grupo de radio.                                                                                                    |   `RadioGroupOption[]`    |                |
| optionClassName | `class` Atributo HTML para los niños de la radio.                                                                                   |         `string`          |                |
| dirección       | Determina la dirección del grupo de radios.                                                                                         |  `horizontal - vertical`  | `"horizontal"` |
| defaultValue    | Establece el estado del valor inicial cuando se monta el componente.                                                                |         `string`          |                |
| onUpdate        | Se activa cuando el usuario cambia el estado de la radio y proporciona el nuevo valor como argumento de devolución de llamada.      | `(value: string) => void` |                |
| onChange        | Se activa cuando el usuario cambia el estado de la radio y proporciona el evento de cambio como argumento de devolución de llamada. |        `Function`         |                |
| tamaño          | Determina el tamaño del grupo de radios.                                                                                            |          `m` `l`          |      `m`       |
| qa              | `data-qa` Atributo HTML, usado para realizar pruebas                                                                                |         `string`          |                |
| estilo          | `style` Atributo HTML                                                                                                               |   `React.CSSProperties`   |                |
| className       | `class` Atributo HTML                                                                                                               |         `string`          |                |

## Grupo de radio. Opción

El `RadioGroup` componente también exporta un `Option` componente anidado equivalente a `Radio`, que se puede utilizar para crear opciones de radio dentro del `RadioGroup`.

<!--LANDING_BLOCK

<ExampleBlock
  code={`
const options: RadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<RadioGroup name="group1" defaultValue={options[0].value}>
  <RadioGroup.Option content={options[0].content} value={options[0].value} />
  <RadioGroup.Option content={options[1].content} value={options[1].value} />
  <RadioGroup.Option content={options[2].content} value={options[2].value} />
</RadioGroup>
`}
>
<UIKit.RadioGroup name="group1" defaultValue="Value 1">
  <UIKit.RadioGroup.Option content="Value 1" value="Value 1" />
  <UIKit.RadioGroup.Option content="Value 2" value="Value 2" />
  <UIKit.RadioGroup.Option content="Value 3" value="Value 3" />
</UIKit.RadioGroup>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
const options: RadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<RadioGroup name="group1" defaultValue={options[0].value}>
  <RadioGroup.Option content={options[0].content} value={options[0].value} />
  <RadioGroup.Option content={options[1].content} value={options[1].value} />
  <RadioGroup.Option content={options[2].content} value={options[2].value} />
</RadioGroup>;
```

<!--/GITHUB_BLOCK-->

### Propiedades

| Nombre       | Descripción                                           |    Tipo     | Predeterminado |
| :----------- | :---------------------------------------------------- | :---------: | :------------: |
| niños        | El contenido de la radio (normalmente, una etiqueta). | `ReactNode` |                |
| contenido    | El contenido de la radio (alternativa a los niños).   | `ReactNode` |                |
| inhabilitado | Cambia el `disabled` estado de la radio.              |  `boolean`  |    `false`     |
| valor        | Valor de control                                      |  `string`   |                |
