<!--GITHUB_BLOCK-->

# NumberInput

<!--/GITHUB_BLOCK-->

`NumberInput` es un campo de texto para introducir valores numéricos, con controles de paso opcionales, límites mínimo/máximo y formato de valor.

```tsx
import {NumberInput} from '@gravity-ui/uikit';
```

## Apariencia

La apariencia de `NumberInput` se controla mediante las propiedades `view` y `pin`.

### Vista

`normal` - la vista principal de `NumberInput` (utilizada por defecto).

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput placeholder="Placeholder" />;
}
SANDBOX-->

`clear` - se puede utilizar con un envoltorio personalizado para `NumberInput`.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput view="clear" placeholder="Placeholder" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput view="normal" />
<NumberInput view="clear" />
```

<!--/GITHUB_BLOCK-->

### Pin

Permite controlar la vista de los bordes derecho e izquierdo del borde de `NumberInput`.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput placeholder="Placeholder" pin="round-brick" />
            <NumberInput placeholder="Placeholder" pin="brick-brick" />
            <NumberInput placeholder="Placeholder" pin="brick-round" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput pin="round-brick" />
<NumberInput pin="brick-brick" />
<NumberInput pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## Estados

### Deshabilitado

El estado de `NumberInput` en el que no quieres que el usuario pueda interactuar con el componente.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput placeholder="Placeholder" disabled />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput disabled />
```

<!--/GITHUB_BLOCK-->

### Error

El estado de `NumberInput` en el que quieres indicar una entrada de usuario incorrecta. Para cambiar la apariencia de `NumberInput`, utiliza la propiedad `validationState` con el valor `"invalid"`. Se puede añadir un mensaje opcional a través de la propiedad `errorMessage`. Por defecto, el texto del mensaje se renderiza fuera del componente.
Este comportamiento se puede cambiar con la propiedad `errorPlacement`.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput
                placeholder="Placeholder"
                errorMessage="Error message"
                validationState="invalid"
            />
            <NumberInput
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
<NumberInput errorMessage="Error message" validationState="invalid" />
<NumberInput errorPlacement="inside" errorMessage="Error message" validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## Tamaño

`s` – Se utiliza cuando los controles estándar son demasiado grandes (tablas, tarjetas pequeñas).

`m` – Tamaño básico, utilizado en la mayoría de los componentes.

`l` – Controles básicos realizados en la cabecera de una página, ventanas modales o pop-ups.

`xl` – Se utiliza en páginas de promoción y landing pages.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput placeholder="Placeholder" size="s" />
            <NumberInput placeholder="Placeholder" size="m" />
            <NumberInput placeholder="Placeholder" size="l" />
            <NumberInput placeholder="Placeholder" size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput size="s" />
<NumberInput size="m" />
<NumberInput size="l" />
<NumberInput size="xl" />
```

<!--/GITHUB_BLOCK-->

## Etiqueta

Permite establecer la etiqueta a la izquierda del control.

- la etiqueta se encuentra a la derecha de los elementos añadidos a través de la propiedad `startContent`.
- la etiqueta no puede ocupar más de la mitad del ancho total del espacio de `NumberInput`.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput placeholder="Placeholder" label="Label" />
            <NumberInput
                placeholder="Placeholder"
                label="Very long label with huge amount of symbols"
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput label="Label" />
```

<!--/GITHUB_BLOCK-->

## Contenido adicional

### Contenido de inicio

Permite añadir contenido a la izquierda del control. Se encuentra a la izquierda de la etiqueta añadida a través de la propiedad `label`.

<!--SANDBOX
import {Label, NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <NumberInput
            placeholder="Search"
            label="Label"
            startContent={<Label size="s">Left</Label>}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput startContent={<Label>Left</Label>} />
```

<!--/GITHUB_BLOCK-->

### Contenido final

Permite añadir contenido a la derecha del control. Se encuentra a la derecha del botón de borrar añadido a través de la propiedad `hasClear` y del icono de error colocado en el interior.

<!--SANDBOX
import {Label, NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <NumberInput
            hasClear
            placeholder="Placeholder"
            endContent={<Label size="s">Right</Label>}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput endContent={<Label>Right</Label>} />
```

<!--/GITHUB_BLOCK-->

### Controles

La visibilidad de los controles de flecha de incremento/decremento en la posición más a la derecha del componente se puede gestionar mediante la propiedad `hiddenControls`.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput />
            <NumberInput hiddenControls />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput />
<NumberInput hiddenControls />
```

<!--/GITHUB_BLOCK-->

## Comportamiento

### Valores Mínimo/Máximo

Permiten establecer los valores mínimo y máximo que se pueden introducir en el campo. Los valores que no se ajusten al rango definido se limitarán al salir del campo al valor permitido más cercano.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput min={-100} max={100} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput min={-100} max={100} />
```

<!--/GITHUB_BLOCK-->

### Paso

Permite establecer la cantidad en la que se incrementa o decrementa el valor en el campo con los botones de flecha en los controles del componente o con el teclado.

También añade restricciones a los valores permitidos y habilita la limitación del número introducido al salir del campo a los valores permitidos según las siguientes reglas:

- si el paso y el valor mínimo se definen con valores enteros, entonces los valores permitidos se definen como `min + (step * n)`, donde `n` es un número entero;
- si el paso es un número entero y el valor mínimo no está definido, entonces los valores permitidos se definen como divisibles por el paso;
- si el paso o los valores mínimos son decimales, entonces la limitación no es aplicable

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput min={-10} step={4} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput min={-10} step={4} />
```

<!--/GITHUB_BLOCK-->

### Multiplicador de paso

Permite establecer el valor por el cual se multiplica el valor del paso cuando se presiona la tecla Shift en el teclado, definiendo la propiedad `shiftMultiplier`.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput shiftMultiplier={50} />
            <NumberInput shiftMultiplier={8} step={4} />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput shiftMultiplier={50} />
<NumberInput shiftMultiplier={8} step={4} />
```

<!--/GITHUB_BLOCK-->

### Restricción de valores decimales

Permite alternar la capacidad de introducir solo valores enteros o también decimales mediante la propiedad `allowDecimal`.
Con la propiedad `allowDecimal={false}`, un punto introducido en el campo se ignoraría y los valores decimales pegados se redondearían hacia abajo.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput allowDecimal />
            <NumberInput allowDecimal={false} />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput allowDecimal />
<NumberInput allowDecimal={false} />
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre            | Descripción                                                                                                             |                     Tipo                      |      Predeterminado       |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----------------------: |
| allowDecimal    | Permite la entrada de números decimales                                                                                 |                   `boolean`                   |         `false`         |
| autoComplete    | Atributo `autocomplete` del control                                                                                     |              `boolean` `string`               |                           |
| autoFocus       | Atributo `autofocus` del control                                                                                        |                   `boolean`                   |                           |
| className       | Nombre de clase del contenedor del control                                                                              |                   `string`                    |                           |
| controlProps    | Atributos HTML del control                                                                                              | `React.InputHTMLAttributes<HTMLInputElement>` |                           |
| controlRef      | Ref de React proporcionada al control                                                                                   |         `React.Ref<HTMLInputElement>`         |                           |
| defaultValue    | Valor predeterminado del control, utilizado cuando el componente no está controlado                                     |             `number` `undefined`              |                           |
| disabled        | Indica que el usuario no puede interactuar con el control                                                               |                   `boolean`                   |         `false`         |
| endContent      | Nodo del usuario renderizado después del nodo de entrada, el botón de limpieza y dentro del icono de error              |               `React.ReactNode`               |                           |
| errorMessage    | Texto de error                                                                                                          |                   `string`                    |                           |
| errorPlacement  | Ubicación del error                                                                                                     |              `outside` `inside`               |        `outside`        |
| hasClear        | Muestra el icono para limpiar el valor del control                                                                      |                   `boolean`                   |         `false`         |
| hiddenControls  | Oculta los botones de incremento/decremento al final del control                                                        |                   `boolean`                   |                           |
| id              | Atributo `id` del control                                                                                               |                   `string`                    |                           |
| label           | Texto de ayuda renderizado a la izquierda del nodo de entrada                                                           |                   `string`                    |                           |
| max             | Valor máximo permitido. Se utiliza para limitar el valor introducido al rango permitido                                 |                   `number`                    | `MAX_SAFE_INTEGER` |
| min             | Valor mínimo permitido. Se utiliza para limitar el valor introducido al rango permitido                                 |                   `number`                    | `MIN_SAFE_INTEGER` |
| name            | Atributo `name` del control. Si no se especifica, se generará automáticamente si no se especifica                       |                   `string`                    |                           |
| note            | Un elemento opcional que se muestra debajo de la esquina inferior derecha del control y comparte espacio con el contenedor de error |               `React.ReactNode`               |                           |
| onBlur          | Se activa cuando el control pierde el foco. Proporciona el evento de foco como argumento de la función de devolución de llamada |                  `function`                   |                           |
| onChange        | Se activa cuando el valor de la entrada cambia por el usuario. Proporciona el evento de cambio como argumento de la función de devolución de llamada |                  `function`                   |                           |
| onFocus         | Se activa cuando el control obtiene el foco. Proporciona el evento de foco como argumento de la función de devolución de llamada |                  `function`                   |                           |
| onKeyDown       | Se activa cuando se presiona una tecla. Proporciona el evento del teclado como argumento de la función de devolución de llamada |                  `function`                   |                           |
| onKeyUp         | Se activa cuando se suelta una tecla. Proporciona el evento del teclado como argumento de la función de devolución de llamada |                  `function`                   |                           |
| onUpdate        | Se activa cuando el valor de la entrada cambia por el usuario. Proporciona el nuevo valor como argumento de la función de devolución de llamada |                  `function`                   |                           |
| pin             | Vista del borde del control                                                                                             |                   `string`                    |      `'round-round'`      |
| placeholder     | Texto que aparece en el control cuando no tiene ningún valor establecido                                               |                   `string`                    |                           |
| qa              | Atributo de ID de prueba (`data-qa`)                                                                                    |                   `string`                    |                           |
| readonly        | Indica que el usuario no puede cambiar el valor del control                                                             |                   `boolean`                   |         `false`         |
| shiftMultiplier | Multiplicador de paso cuando se presiona la tecla Shift                                                                 |                   `number`                    |           `10`          |
| size            | El tamaño del control                                                                                                   |           `"s"` `"m"` `"l"` `"xl"`            |          `"m"`          |
| step            | Delta para incrementar/decrementar el valor introducido con las teclas de flecha del teclado o los controles del componente |                   `number`                    |           `1`           |
| startContent    | Nodo del usuario renderizado antes de la etiqueta y la entrada                                                           |               `React.ReactNode`               |                           |
| tabIndex        | Atributo `tabindex` del control                                                                                         |                   `string`                    |                           |
| validationState | Estado de validación                                                                                                    |                  `"invalid"`                  |                           |
| value           | El valor del control                                                                                                    |             `number` `undefined`              |                           |
| view            | La vista del control                                                                                                    |             `"normal"` `"clear"`              |        `"normal"`       |

## API CSS

El componente no tiene su propia API CSS, pero extiende la API del componente TextInput padre.
