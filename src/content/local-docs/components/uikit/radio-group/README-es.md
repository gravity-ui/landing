<!--GITHUB_BLOCK-->

# RadioGroup

<!--/GITHUB_BLOCK-->

El componente `RadioGroup` se utiliza para crear un grupo donde los usuarios pueden seleccionar una única opción entre varias.

```tsx
import {RadioGroup} from '@gravity-ui/uikit';
```

### Estado deshabilitado

<!--SANDBOX
import type {RadioGroupOption} from '@gravity-ui/uikit';
import {RadioGroup} from '@gravity-ui/uikit';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <RadioGroup name="group2" defaultValue={options[0].value} options={options} disabled />
    );
}
SANDBOX-->

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

Utilice la propiedad `size` para gestionar el tamaño de `RadioGroup`. El tamaño predeterminado es `m`.

<!--SANDBOX
import type {RadioGroupOption} from '@gravity-ui/uikit';
import {RadioGroup} from '@gravity-ui/uikit';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <>
            <RadioGroup name="group1" defaultValue={options[0].value} options={options} size="m" />
            <RadioGroup name="group2" defaultValue={options[0].value} options={options} size="l" />
            <RadioGroup name="group3" defaultValue={options[0].value} options={options} size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
  const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
  ];
  <RadioGroup name="group1" defaultValue={options[0].value} options={options} size="m"/>
  <RadioGroup name="group2" defaultValue={options[0].value} options={options} size="l"/>
  <RadioGroup name="group3" defaultValue={options[0].value} options={options} size="xl"/>
```

<!--/GITHUB_BLOCK-->

### Dirección

Utilice la propiedad `direction` para gestionar la dirección de `RadioGroup`. La dirección predeterminada es `horizontal`.

<!--SANDBOX
import type {RadioGroupOption} from '@gravity-ui/uikit';
import {RadioGroup} from '@gravity-ui/uikit';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <>
            <RadioGroup
                name="group1"
                defaultValue={options[0].value}
                options={options}
                direction="horizontal"
            />
            <RadioGroup
                name="group2"
                defaultValue={options[0].value}
                options={options}
                direction="vertical"
            />
        </>
    );
}
SANDBOX-->

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

## Propiedades

| Nombre            | Descripción                                                                                       |           Type            |    Default     |
| :---------------- | :------------------------------------------------------------------------------------------------ | :-----------------------: | :------------: |
| children        | El contenido del grupo de radio.                                                                   |        `ReactNode`        |                |
| disabled        | Activa/desactiva el estado `disabled` del grupo de radio.                                                  |         `boolean`         |    `false`     |
| options         | Opciones para el grupo de radio.                                                                          |   `RadioGroupOption[]`    |                |
| optionClassName | Atributo `class` HTML para los hijos de radio.                                                    |         `string`          |                |
| direction       | Determina la dirección del grupo de radio.                                                      |  `horizontal - vertical`  | `"horizontal"` |
| defaultValue    | Establece el estado del valor inicial cuando el componente se monta.                                       |         `string`          |                |
| onUpdate        | Se activa cuando el usuario cambia el estado de la radio y proporciona el nuevo valor como argumento de callback.    | `(value: string) => void` |                |
| onChange        | Se activa cuando el usuario cambia el estado de la radio y proporciona el evento de cambio como argumento de callback. |        `Function`         |                |
| size            | Determina el tamaño del grupo de radio.                                                           |          `m` `l`          |      `m`       |
| qa              | Atributo `data-qa` HTML, utilizado para pruebas                                                        |         `string`          |                |
| style           | Atributo `style` HTML                                                                            |   `React.CSSProperties`   |                |
| className       | Atributo `class` HTML                                                                            |         `string`          |                |

## RadioGroup.Option

El componente `RadioGroup` también exporta un componente `Option` anidado equivalente a `Radio`, que se puede utilizar para crear opciones de radio dentro de `RadioGroup`.

<!--SANDBOX
import type {RadioGroupOption} from '@gravity-ui/uikit';
import {RadioGroup} from '@gravity-ui/uikit';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <RadioGroup name="group1" defaultValue={options[0].value}>
            <RadioGroup.Option content={options[0].content} value={options[0].value} />
            <RadioGroup.Option content={options[1].content} value={options[1].value} />
            <RadioGroup.Option content={options[2].content} value={options[2].value} />
        </RadioGroup>
    );
}
SANDBOX-->

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

| Nombre     | Description                                         |    Type     | Default |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | El contenido de la radio (generalmente, una etiqueta).        | `ReactNode` |         |
| content  | El contenido de la radio (alternativa a `children`). | `ReactNode` |         |
| disabled | Activa/desactiva el estado `disabled` de la radio.          |  `boolean`  | `false` |
| value    | Valor de control                                       |  `string`   |         |
