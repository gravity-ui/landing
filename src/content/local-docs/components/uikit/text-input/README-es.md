<!--GITHUB_BLOCK-->

# TextInput

<!--/GITHUB_BLOCK-->

```tsx
import {TextInput} from '@gravity-ui/uikit';
```

TextInput permite a los usuarios introducir texto en una interfaz de usuario.

## Apariencia

La apariencia de `TextInput` se controla mediante las propiedades `view` y `pin`.

### Vista

`normal` - la vista principal de `TextInput` (utilizada por defecto).

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return <TextInput placeholder="Placeholder" />;
}
SANDBOX-->

`clear` - se puede utilizar con un contenedor personalizado para `TextInput`.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return <TextInput view="clear" placeholder="Placeholder" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput view="normal" />
<TextInput view="clear" />
```

<!--/GITHUB_BLOCK-->

### Pin

Permite controlar las vistas de los bordes derecho e izquierdo del borde de `TextInput`.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextInput placeholder="Placeholder" pin="round-brick" />
            <TextInput placeholder="Placeholder" pin="brick-brick" />
            <TextInput placeholder="Placeholder" pin="brick-round" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput pin="round-brick" />
<TextInput pin="brick-brick" />
<TextInput pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## Estados

### Deshabilitado

El estado de `TextInput` en el que no quieres que el usuario pueda interactuar con el componente.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return <TextInput placeholder="Placeholder" disabled />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput disabled />
```

<!--/GITHUB_BLOCK-->

### Error

El estado de `TextInput` en el que quieres indicar una entrada incorrecta del usuario. Para cambiar la apariencia de `TextInput`, utiliza la propiedad `validationState` con el valor `"invalid"`. Se puede añadir un texto de mensaje opcional a través de la propiedad `errorMessage`. Por defecto, el texto del mensaje se renderiza fuera del componente.
Este comportamiento se puede cambiar con la propiedad `errorPlacement`.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextInput
                placeholder="Placeholder"
                errorMessage="Error message"
                validationState="invalid"
            />
            <TextInput
                placeholder="Placeholder"
                errorPlacement="inside"
                errorMessage="Error message"
                validationState="invalid"
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput errorMessage="Error message" validationState="invalid" />
<TextInput errorPlacement="inside" errorMessage="Error message" validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## Tamaño

`s` – Se utiliza cuando los controles estándar son demasiado grandes (tablas, tarjetas pequeñas).

`m` – Tamaño básico, utilizado en la mayoría de los componentes.

`l` – Controles básicos realizados en la cabecera de una página, ventanas modales o pop-ups.

`xl` – Se utiliza en páginas de promoción y landing pages.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextInput placeholder="Placeholder" size="s" />
            <TextInput placeholder="Placeholder" size="m" />
            <TextInput placeholder="Placeholder" size="l" />
            <TextInput placeholder="Placeholder" size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput size="s" />
<TextInput size="m" />
<TextInput size="l" />
<TextInput size="xl" />
```

<!--/GITHUB_BLOCK-->

## Etiqueta

Permite establecer la etiqueta a la izquierda del control.

- La etiqueta ocupa la posición más a la izquierda en relación con el control. Es decir, los elementos añadidos a través de la propiedad `startContent` se ubicarán a la derecha.
- La etiqueta puede ocupar como máximo la mitad del ancho total del espacio de TextInput.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextInput placeholder="Placeholder" label="Label" />
            <TextInput placeholder="Placeholder" label="Very long label with huge amount of symbols" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput label="Label" />
```

<!--/GITHUB_BLOCK-->

## Contenido adicional

### Contenido de inicio

Permite añadir contenido a la izquierda del control (o a la derecha en caso de usar [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL)). Se ubica a la izquierda (o a la derecha en caso de usar rtl) de la etiqueta añadida a través de la propiedad `label`.

<!--SANDBOX
import {Label, TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <TextInput
            placeholder="Search"
            label="Label"
            startContent={<Label size="s">Left</Label>}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput startContent={<Label>Left</Label>} />
```

<!--/GITHUB_BLOCK-->

### Contenido final

Permite añadir contenido a la derecha (o a la izquierda en caso de usar [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL)) del control. Se ubica a la derecha (o a la izquierda en caso de usar rtl) del botón de borrar añadido a través de la propiedad `hasClear`.

<!--SANDBOX
import {Label, TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <TextInput
            hasClear
            placeholder="Placeholder"
            endContent={<Label size="s">Right</Label>}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput endContent={<Label>Right</Label>} />
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre            | Descripción                                                                                                             |                               Tipo                                  |     Predeterminado     |
| :---------------- | :---------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------: | :--------------------: |
| autoComplete    | Atributo `autocomplete` del control                                                                                     |                          `boolean` `string`                           |                        |
| autoFocus       | Atributo `autofocus` del control                                                                                        |                               `boolean`                               |                        |
| className       | Nombre de clase del contenedor del control                                                                              |                               `string`                                |                        |
| controlProps    | Atributos HTML del control                                                                                              |             `React.InputHTMLAttributes<HTMLInputElement>`             |                        |
| controlRef      | Ref de React proporcionada al control                                                                                   |                     `React.Ref<HTMLInputElement>`                     |                        |
| defaultValue    | Valor predeterminado del control, usado cuando el componente no está controlado                                         |                               `string`                                |                        |
| disabled        | Indica que el usuario no puede interactuar con el control                                                               |                           `React.ReactNode`                           |                        |
| endContent      | Nodo del usuario renderizado después del nodo de entrada, botón de limpieza e icono de error                               |                               `string`                                |                        |
| errorMessage    | Texto de error                                                                                                          |                               `string`                                |                        |
| errorPlacement  | Colocación del error                                                                                                    |                          `outside` `inside`                           |      `outside`       |
| hasClear        | Muestra el icono para limpiar el valor del control                                                                      |                               `boolean`                               |        `false`         |
| id              | Atributo `id` del control                                                                                               |                               `string`                                |                        |
| label           | Texto de ayuda renderizado a la izquierda del nodo de entrada                                                           |                               `string`                                |                        |
| name            | Atributo `name` del control. Si no se especifica, se generará automáticamente si no se especifica                       |                               `string`                                |                        |
| note            | Un elemento opcional mostrado debajo de la esquina inferior derecha del control que comparte espacio con el contenedor de error |                           `React.ReactNode`                           |                        |
| onBlur          | Se activa cuando el control pierde el foco. Proporciona el evento de foco como argumento de la devolución de llamada     |                              `function`                               |                        |
| onChange        | Se activa cuando el valor de la entrada cambia por el usuario. Proporciona el evento de cambio como argumento de la devolución de llamada |                              `function`                               |                        |
| onFocus         | Se activa cuando el control obtiene el foco. Proporciona el evento de foco como argumento de la devolución de llamada     |                              `function`                               |                        |
| onKeyDown       | Se activa cuando se presiona una tecla. Proporciona el evento del teclado como argumento de la devolución de llamada     |                              `function`                               |                        |
| onKeyUp         | Se activa cuando se suelta una tecla. Proporciona el evento del teclado como argumento de la devolución de llamada       |                              `function`                               |                        |
| onUpdate        | Se activa cuando el valor de la entrada cambia por el usuario. Proporciona el nuevo valor como argumento de la devolución de llamada |                              `function`                               |                        |
| pin             | Vista del borde del control                                                                                             |                               `string`                                |     `'round-round'`    |
| placeholder     | Texto que aparece en el control cuando no tiene ningún valor establecido                                               |                               `string`                                |                        |
| qa              | Atributo de ID de prueba (`data-qa`)                                                                                    |                               `string`                                |                        |
| readOnly        | Indica que el usuario no puede cambiar el valor del control                                                             |                               `boolean`                               |        `false`         |
| size            | El tamaño del control                                                                                                   |                       `"s"` `"m"` `"l"` `"xl"`                        |         `"m"`          |
| startContent    | Nodo del usuario renderizado antes de la etiqueta y el nodo de entrada                                                  |                           `React.ReactNode`                           |                        |
| tabIndex        | Atributo `tabindex` del control                                                                                         |                               `string`                                |                        |
| type            | El tipo de control                                                                                                      | `"email"` `"number"` `"password"` `"search"` `"tel"` `"text"` `"url"` |                        |
| validationState | Estado de validación                                                                                                    |                              `"invalid"`                              |                        |
| value           | El valor del control                                                                                                    |                               `string`                                |                        |
| view            | La vista del control                                                                                                    |                         `"normal"` `"clear"`                          |      `"normal"`      |

## API CSS

| Nombre                                 | Descripción                                         |
| :----------------------------------- | :-------------------------------------------------- |
| `--g-text-input-text-color`          | Color del texto                                     |
| `--g-text-input-label-color`         | Color de la etiqueta                                |
| `--g-text-input-placeholder-color`   | Color del marcador de posición                      |
| `--g-text-input-background-color`    | Color de fondo                                      |
| `--g-text-input-border-radius`       | Radio del borde                                     |
| `--g-text-input-border-width`        | Ancho del borde                                     |
| `--g-text-input-border-color`        | Color del borde                                     |
| `--g-text-input-border-color-hover`  | Color del borde si está en modo hover               |
| `--g-text-input-border-color-active` | Color del borde si está activo                      |
| `--g-text-input-focus-outline-color` | Color del contorno si está enfocado (por defecto no se presenta) |
