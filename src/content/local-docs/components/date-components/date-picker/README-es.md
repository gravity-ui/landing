GRAVITY_TRANSLATION_BLOCK_0_END

```tsx
import {DatePicker} from '@gravity-ui/date-components';
```

`DatePicker` es un componente sofisticado, ligero y totalmente personalizable diseñado para proporcionar una funcionalidad intuitiva de selección de fechas en tus aplicaciones React. Creado teniendo en cuenta la experiencia del usuario y la facilidad de integración, se adapta perfectamente a formularios, modales o cualquier elemento de interfaz de usuario que requiera la entrada de fechas. Puede ser controlado si estableces la propiedad `value`. O puede ser no controlado si no estableces ningún valor, pero en este caso puedes gestionar el estado inicial con la propiedad opcional `defaultValue`. El componente no está controlado por defecto.

### Adición útil

Para establecer fechas en el formato correcto, es posible que necesites incluir ayudantes adicionales de la [biblioteca Date Utils](https://gravity-ui.com/libraries/date-utils)

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

## Apariencia

La apariencia de `DatePicker` se controla mediante las propiedades `size`, `view` y `pin`.

### Tamaño

Para controlar el tamaño de `DatePicker`, utiliza la propiedad `size`. El tamaño predeterminado es `m`.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Vista

`normal` - la vista principal de `DatePicker` (utilizada por defecto).

GRAVITY_TRANSLATION_BLOCK_3_END

`clear` - vista de `DatePicker` sin bordes visibles (se puede usar con un contenedor personalizado)

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Pin

La propiedad `pin` te permite controlar la forma de los bordes derecho e izquierdo y se utiliza normalmente para combinar varios controles en una sola unidad.
El valor de la propiedad `pin` consta de nombres de estilo de borde izquierdo y derecho divididos por un guion, por ejemplo, `"round-brick"`.
Los estilos de borde son: `round` (predeterminado), `circle`, `brick` y `clear`.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Valor

### Valor mínimo y máximo

La propiedad `minValue` te permite especificar la fecha y hora más temprana que puede introducir el usuario. Por el contrario, la propiedad `maxValue` especifica la fecha y hora más tardía que se puede introducir. Si introduces un valor fuera de estos límites, el componente cambia su vista, como en el caso de un estado de validación inválido.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Estados

### Deshabilitado

El estado de `DatePicker` en el que no quieres que el usuario pueda interactuar con el componente.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Solo lectura

`readOnly` es un atributo booleano que, cuando se establece en `true`, hace que el componente `DatePicker` sea inmutable para el usuario. Esto significa que, aunque la entrada mostrará su valor actual, los usuarios no podrán cambiarlo.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### Error

El estado de `DatePicker` en el que deseas indicar una entrada incorrecta del usuario. Para cambiar la apariencia de `DatePicker`, utiliza la propiedad `validationState` con el valor `"invalid"`. Se puede añadir un texto de mensaje opcional a través de la propiedad `errorMessage`. El texto del mensaje se renderizará debajo del componente.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## Contenido adicional

### Marcador de posición

Esta prop te permite proporcionar una breve indicación que describe el valor esperado del campo de entrada. Esta indicación se muestra dentro del campo de entrada antes de que el usuario introduzca un valor y desaparece al introducir texto.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Etiqueta

Permite colocar la etiqueta en la parte izquierda del campo. La etiqueta puede ocupar como máximo la mitad del ancho total del espacio de `DatePicker`.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

### Botón de borrar

`hasClear` es una prop booleana que proporciona a los usuarios la capacidad de borrar rápidamente el contenido del campo de entrada.

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

## Formato

La prop `format` es una cadena que define el formato de fecha y hora que el componente `DatePicker` aceptará y mostrará. Esta prop determina cómo se presentan visualmente la fecha y la hora al usuario y cómo se espera que se formatee la entrada del usuario. [Formatos disponibles](https://day.js.org/docs/en/display/format)

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

### Analizador de fechas personalizado

Puedes proporcionar una función de análisis personalizada para manejar cadenas de fechas pegadas a través de la prop `parseDateFromString`. Esto es útil cuando necesitas admitir formatos de fecha específicos o una lógica de análisis personalizada que difiere del comportamiento predeterminado.

GRAVITY_TRANSLATION_BLOCK_24_END

## Zona horaria

`timeZone` es la propiedad para establecer la zona horaria del valor en la entrada. [Más información sobre zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Personalización

Si deseas utilizar un componente de calendario personalizado dentro de `DatePicker`, puedes pasarlo como `children` con props similares a las de un calendario.

GRAVITY_TRANSLATION_BLOCK_25_END

GRAVITY_TRANSLATION_BLOCK_26_END

## Propiedades

| Nombre                           | Descripción                                                                                                                                |                               Tipo                                 |          Predeterminado          |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------: | :-----------------------: |
| aria-describedby               | El `aria-describedby` del control. Identifica el elemento (o elementos) que describe el objeto. atributo                                |                               `string`                               |                           |
| aria-details                   | El `aria-details` del control. Identifica el elemento (o elementos) que proporcionan una descripción detallada y extendida del objeto. atributo |                               `string`                               |                           |
| aria-label                     | El `aria-label` del control. Define un valor de cadena que etiqueta el elemento actual. atributo                                              |                               `string`                               |                           |
| aria-labelledby                | El `aria-labelledby` del control. Identifica el elemento (o elementos) que etiqueta el elemento actual. atributo                           |                               `string`                               |                           |
| autoFocus                      | El `autofocus` del control. Si el elemento debe recibir el foco al renderizar. atributo                                                   |                              `boolean`                               |                           |
| className                      | El nombre de clase del contenedor del control                                                                                                           |                               `string`                               |                           |
| [defaultValue](#datepicker)    | Establece el valor inicial para el componente no controlado.                                                                                         |                              `DateTime`                              |                           |
| [disabled](#disabled)          | Indica que el usuario no puede interactuar con el control                                                                                   |                              `boolean`                               |          `false`          |
| [errorMessage](#error)         | Texto de error                                                                                                                                 |                             `ReactNode`                              |                           |
| [format](#format)              | Formato de la fecha cuando se muestra en la entrada. [Formatos disponibles](https://day.js.org/docs/en/display/format)                              |                               `string`                               |                           |
| [hasClear](#clear-button)      | Muestra el icono para borrar el valor del control                                                                                                |                              `boolean`                               |          `false`          |
| id                             | El atributo `id` del control                                                                                                               |                               `string`                               |                           |
| isDateUnavailable              | Función de devolución de llamada que se llama para cada fecha del calendario. Si devuelve `true`, la fecha no está disponible.                                   |                   `((date: DateTime) => boolean)`                    |                           |
| [label](#label)                | Texto de ayuda renderizado a la izquierda del nodo de entrada                                                                                           |                               `string`                               |                           |
| [maxValue](#min-and-max-value) | La fecha máxima permitida que un usuario puede seleccionar.                                                                                           |                              `DateTime`                              |                           |
| [minValue](#min-and-max-value) | La fecha mínima permitida que un usuario puede seleccionar.                                                                                           |                              `DateTime`                              |                           |
| onBlur                         | Se activa cuando el control pierde el foco. Proporciona el evento de foco como argumento de la función de devolución de llamada                                                           |            `((e: FocusEvent<Element, Element>) => void)`             |                           |
| onFocus                        | Se activa cuando el control obtiene el foco. Proporciona el evento de foco como argumento de la función de devolución de llamada                                                           |            `((e: FocusEvent<Element, Element>) => void)`             |                           |
| onKeyDown                      | Se activa cuando se presiona una tecla. Proporciona el evento del teclado como argumento de la función de devolución de llamada                                                              |               `((e: KeyboardEvent<Element>) => void)`                |                           |
| onKeyUp                        | Se activa cuando se suelta una tecla. Proporciona el evento del teclado como argumento de la función de devolución de llamada                                                              |               `((e: KeyboardEvent<Element>) => void)`                |                           |
| onUpdate                       | Se activa cuando el valor es cambiado por el usuario. Proporciona el nuevo valor como argumento de la función de devolución de llamada                                                  |                 `((value: DateTime \| null) => void`                 |                           |
| parseDateFromString            | Función de análisis personalizada para analizar cadenas de fechas pegadas. Si no se proporciona, se utilizará el analizador predeterminado.                                  | `((dateStr: string, format: string, timeZone?: string) => DateTime)` |                           |
| [pin](#pin)                    | Redondeo de esquinas                                                                                                                            |                            `TextInputPin`                            |      `'round-round'`      |
| [placeholder](#placeholder)    | Texto que aparece en el control cuando no tiene ningún valor establecido                                                                                  |                               `string`                               |                           |
| placeholderValue               | Una fecha de marcador de posición que controla los valores predeterminados de cada segmento cuando el usuario interactúa con ellos por primera vez.                               |                              `DateTime`                              | `la fecha de hoy a medianoche` |
| [readOnly](#readonly)          | Si el valor del componente es inmutable.                                                                                                |                              `boolean`                               |          `false`          |
| [size](#size)                  | El tamaño del control                                                                                                                    |                       `"s"` `"m"` `"l"` `"xl"`                       |           `"m"`           |
| style                          | Establece el estilo en línea para el elemento.                                                                                                         |                           `CSSProperties`                            |                           |
| [timeZone](#time-zone)         | Establece la zona horaria. [Más información sobre zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)                       |                               `string`                               |                           |
| [validationState](#error)      | Estado de validación                                                                                                                           |                             `"invalid"`                              |                           |
| [value](#datepicker)           | El valor del control                                                                                                                   |                          `DateTime` `null`                           |                           |
| [view](#view)                  | La vista del control                                                                                                                    |                         `"normal"` `"clear"`                         |        `"normal"`         |