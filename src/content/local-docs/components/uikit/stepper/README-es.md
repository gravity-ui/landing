<!--GITHUB_BLOCK-->

# Stepper

<!--/GITHUB_BLOCK-->

`Stepper` guía a los usuarios a través de una secuencia de pasos numerados, mostrando el progreso en un flujo de trabajo de varios pasos similar a un asistente.

```tsx
import {Stepper} from '@gravity-ui/uikit';
```

## Ejemplo

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item>Step 2</Stepper.Item>
            <Stepper.Item>Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item>Step 2</Stepper.Item>
  <Stepper.Item>Step 3</Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperDefault />

<!--/GITHUB_BLOCK-->

### Elementos interactivos

Utilice las props `onUpdate` y `value` con estado personalizado para manipular los pasos.

<!--SANDBOX
import {useState} from 'react';
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    const [value, setValue] = useState(0);

    return (
        <Stepper value={value} onUpdate={setValue}>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item>Step 2</Stepper.Item>
            <Stepper.Item>Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [value, setValue] = React.useState();

return (
  <Stepper value={value} onUpdate={setValue}>
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
    <Stepper.Item>Step 4 with very long title</Stepper.Item>
  </Stepper>
);
```

<!-- Storybook example -->

<StepperInteractiveShowcase />

<!--/GITHUB_BLOCK-->

### Vistas diferentes

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item view="error">Step 2</Stepper.Item>
            <Stepper.Item view="error">Step 3</Stepper.Item>
            <Stepper.Item view="success">Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item view="error">Step 2</Stepper.Item>
  <Stepper.Item view="error">Step 3</Stepper.Item>
  <Stepper.Item view="success">Step 4</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperView/>

<!--/GITHUB_BLOCK-->

### Tamaños diferentes

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper size="l">
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item>Step 2</Stepper.Item>
            <Stepper.Item>Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Flex direction="column" gap={4}>
  <Stepper {...args} size="s">
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
  </Stepper>

  <Stepper {...args} size="m">
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
  </Stepper>

  <Stepper {...args} size="l">
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
  </Stepper>
</Flex>
```

<!-- Storybook example -->

<StepperSize/>

<!--/GITHUB_BLOCK-->

### Pasos deshabilitados

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item disabled>Step 2</Stepper.Item>
            <Stepper.Item disabled>Step 3</Stepper.Item>
            <Stepper.Item disabled>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item disabled>Step 2</Stepper.Item>
  <Stepper.Item disabled>Step 3</Stepper.Item>
  <Stepper.Item disabled>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperDisabled/>

<!--/GITHUB_BLOCK-->

### Iconos personalizados

<!--SANDBOX
import {Cloud, Gear, Hammer, Rocket} from '@gravity-ui/icons';
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item icon={Gear}>Step 1</Stepper.Item>
            <Stepper.Item icon={Rocket}>Step 2</Stepper.Item>
            <Stepper.Item icon={Cloud}>Step 3</Stepper.Item>
            <Stepper.Item icon={Hammer}>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item icon={Gear}>Step 1</Stepper.Item>
  <Stepper.Item view="error" icon={Gear}>
    Step 2
  </Stepper.Item>
  <Stepper.Item view="success" icon={Gear}>
    Step 3
  </Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperCustomIcons/>

<!--/GITHUB_BLOCK-->

### Separador de pasos personalizado

<!--SANDBOX
import {Stepper, Text} from '@gravity-ui/uikit';

const Separator = () => {
    return <Text color="secondary">{'->'}</Text>;
};

export default function () {
    return (
        <Stepper separator={<Separator />}>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item view="error">Step 2</Stepper.Item>
            <Stepper.Item view="success">Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const Separator = () => {
  return <Text color="secondary">{'->'}</Text>;
};

<Stepper {...args} separator={<Separator />}>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item view="error">Step 2</Stepper.Item>
  <Stepper.Item view="success">Step 3</Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>;
```

<!-- Storybook example -->

<StepperCustomSeparator/>

<!--/GITHUB_BLOCK-->

### Paso con elemento flotante

<!--SANDBOX
import {Stepper, Tooltip} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Tooltip content="fancy step with tooltip">
                <Stepper.Item>Step 1</Stepper.Item>
            </Tooltip>
            <Stepper.Item view="error">Step 2</Stepper.Item>
            <Stepper.Item view="success">Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper {...args}>
  <Tooltip content="fancy step with tooltip">
    <Stepper.Item>Step 1</Stepper.Item>
  </Tooltip>
  <Stepper.Item view="error">Step 2</Stepper.Item>
  <Stepper.Item view="success">Step 3</Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperWithFloatingElements/>

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre             | Descripción                                               |                  Tipo                  | Predeterminado |
| :----------------- | :-------------------------------------------------------- | :------------------------------------: | :------------: |
| children           | Elementos del Stepper.                                    | `React.ReactElement<StepperItemProps>` |                |
| size               | Establece el tamaño del `Step`.                           |           `"s"` `"m"` `"l"`            |     `"s"`      |
| value              | ID del `Step` seleccionado actualmente.                     |           `number` `string`            |                |
| onUpdate           | Función para cambiar el `Step` actual.                    |               `Function`               |                |
| qa                 | Atributo HTML `data-qa`, utilizado para pruebas.          |                `string`                |                |
| separator          | Nodo separador personalizado.                              |           `React.ReactNode`            |                |
| className          | Nombre de clase CSS para el contenedor de Steps.          |                `string`                |                |
| style              | Establece el estilo en línea para el contenedor de Steps. |            `CSSProperties`             |                |
| aria-label         | Define un valor de cadena que etiqueta el elemento actual. |                `string`                |                |
| aria-labelledby    | Identifica el(los) elemento(s) que etiquetan el elemento actual. |                `string`                |                |
| aria-describedby   | Identifica el(los) elemento(s) que describen el objeto.   |                `string`                |                |

### StepperItemProps

| Nombre    | Descripción                                    |              Type              | Predeterminado |
| :-------- | :--------------------------------------------- | :----------------------------: | :------------: |
| id        | Establece el ID del `Step`. Índice del elemento de matriz como predeterminado. |       `string` `number`        |                |
| view      | Establece la vista del `Step`.                 | `"idle"` `"error"` `"success"` |    `"idle"`    |
| children  | Contenido del `Step`.                          |          `React.Node`          |                |
| disabled  | Determina si el `Step` está deshabilitado.     |           `boolean`            |                |
| icon      | Nodo de icono personalizado.                   |         `SVGIconData`          |                |
| onClick   | Manejador de clics del paso.                   |   `React.MouseEventHandler`    |                |
| className | Nombre de clase CSS para el elemento.          |            `string`            |                |

### API CSS

| Nombre                              | Descripción                           |
| :-------------------------------- | :------------------------------------ |
| `--g-stepper-gap`                 | Espacio entre los elementos del paso y el separador. |
| `--g-stepper-item-text-max-width` | Ancho máximo del texto del elemento del paso. |
