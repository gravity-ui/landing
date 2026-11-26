```tsx
import {TextInput} from '@gravity-ui/uikit';
```

TextInput permite a los usuarios introducir texto en una interfaz de usuario.

## Apariencia

La apariencia de `TextInput` se controla mediante las propiedades `view` y `pin`.

### Vista

`normal` - la vista principal de `TextInput` (utilizada por defecto).

GRAVITY_TRANSLATION_BLOCK_1_END

`clear` - se puede utilizar con un contenedor personalizado para `TextInput`.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Pin

Permite controlar las vistas de los bordes derecho e izquierdo del borde de `TextInput`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Estados

### Deshabilitado

El estado de `TextInput` en el que no quieres que el usuario pueda interactuar con el componente.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Error

El estado de `TextInput` en el que quieres indicar una entrada incorrecta del usuario. Para cambiar la apariencia de `TextInput`, utiliza la propiedad `validationState` con el valor `"invalid"`. Se puede añadir un texto de mensaje opcional a través de la propiedad `errorMessage`. Por defecto, el texto del mensaje se renderiza fuera del componente.
Este comportamiento se puede cambiar con la propiedad `errorPlacement`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Tamaño

`s` – Se utiliza cuando los controles estándar son demasiado grandes (tablas, tarjetas pequeñas).

`m` – Tamaño básico, utilizado en la mayoría de los componentes.

`l` – Controles básicos realizados en la cabecera de una página, ventanas modales o pop-ups.

`xl` – Se utiliza en páginas de promoción y landing pages.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Etiqueta

Permite establecer la etiqueta a la izquierda del control.

- La etiqueta ocupa la posición más a la izquierda en relación con el control. Es decir, los elementos añadidos a través de la propiedad `startContent` se ubicarán a la derecha.
- La etiqueta puede ocupar como máximo la mitad del ancho total del espacio de TextInput.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Contenido adicional

### Contenido de inicio

Permite añadir contenido a la izquierda del control (o a la derecha en caso de usar [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL)). Se ubica a la izquierda (o a la derecha en caso de usar rtl) de la etiqueta añadida a través de la propiedad `label`.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

### Contenido final

Permite añadir contenido a la derecha (o a la izquierda en caso de usar [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL)) del control. Se ubica a la derecha (o a la izquierda en caso de usar rtl) del botón de borrar añadido a través de la propiedad `hasClear`.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

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