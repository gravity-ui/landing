GRAVITY_TRANSLATION_BLOCK_0_END

```tsx
import {DateField} from '@gravity-ui/date-components';
```

El componente `DateField` es un campo de entrada versátil y conveniente diseñado específicamente para la entrada de fechas en aplicaciones React. Con una interfaz intuitiva y una fácil integración, es perfecto para cualquier formulario que requiera la entrada de fecha u hora, como planificadores de eventos, sistemas de reservas o informes basados en datos. Puede ser controlado si establece la propiedad `value`. O puede ser no controlado si no establece ningún valor, pero en este caso puede administrar el estado inicial con la propiedad opcional `defaultValue`. El componente no está controlado por defecto.

## Adición útil

Para establecer fechas en el formato correcto, es posible que necesite incluir ayudantes adicionales de la [biblioteca Date Utils](https://gravity-ui.com/libraries/date-utils)

```tsx
import {dateTimeParse} from '@gravity-ui/date-utils';
```

## Apariencia

La apariencia de `DateField` se controla mediante las propiedades `size`, `view` y `pin`.

### Tamaño

Para controlar el tamaño de `DateField`, use la propiedad `size`. El tamaño predeterminado es `m`.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Vista

`normal` - la vista principal de `DateField` (utilizada por defecto).

GRAVITY_TRANSLATION_BLOCK_3_END

`clear` - vista de `DateField` sin bordes visibles (se puede usar con un contenedor personalizado)

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Pin

La propiedad `pin` le permite controlar la forma de los bordes derecho e izquierdo y se usa generalmente para combinar varios controles en una sola unidad.
El valor de la propiedad `pin` consta de los nombres de estilo del borde izquierdo y derecho divididos por un guion, por ejemplo, `"round-brick"`.
Los estilos de borde son: `round` (predeterminado), `circle`, `brick` y `clear`.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Valor

### Valor mínimo y máximo

La propiedad `minValue` le permite especificar la fecha y hora más temprana que el usuario puede ingresar. Por el contrario, la propiedad `maxValue` especifica la fecha y hora más tardía que el usuario puede ingresar. Si ingresa un valor fuera de estos límites, el componente cambia su vista, como en el caso de un estado de validación inválido.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Estados

### Deshabilitado

El estado de `DateField` en el que no desea que el usuario pueda interactuar con el componente.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Solo lectura

`readOnly` es un atributo booleano que, cuando se establece en verdadero, hace que el componente `DateField` sea inmutable para el usuario. Esto significa que, si bien la entrada mostrará su valor actual, los usuarios no podrán cambiarlo.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### Error

El estado de `DateField` en el que desea indicar una entrada de usuario incorrecta. Para cambiar la apariencia de `DateField`, use la propiedad `validationState` con el valor `"invalid"`. Se puede agregar un mensaje opcional a través de la propiedad `errorMessage`. El texto del mensaje se renderizará debajo del componente.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## Contenido adicional

### Marcador de posición

Esta prop le permite proporcionar una breve indicación que describe el valor esperado del campo de entrada. Esta indicación se muestra dentro del campo de entrada antes de que el usuario ingrese un valor y desaparece al ingresar texto.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Etiqueta

Permite colocar la etiqueta en la parte izquierda del campo. La etiqueta puede ocupar no más de la mitad del ancho total del espacio de `DateField`.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

### Botón de borrar

`hasClear` es una prop booleana que brinda a los usuarios la capacidad de borrar rápidamente el contenido del campo de entrada.

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

### Contenido de inicio

Permite agregar contenido a la parte inicial del campo. Se coloca antes de todos los demás componentes.

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

### Contenido final

Permite agregar contenido a la parte final del campo. Se coloca después de todos los demás componentes.

GRAVITY_TRANSLATION_BLOCK_24_END

GRAVITY_TRANSLATION_BLOCK_25_END

## Formato

La prop `format` es una cadena que define el formato de fecha y hora que el componente `DateField` aceptará y mostrará. Esta prop determina cómo se presentan visualmente la fecha y la hora al usuario y cómo se espera que se formatee la entrada del usuario. [Formatos disponibles](https://day.js.org/docs/en/display/format)

GRAVITY_TRANSLATION_BLOCK_26_END

GRAVITY_TRANSLATION_BLOCK_27_END

### Analizador de fechas personalizado

Puede proporcionar una función de análisis personalizada para manejar cadenas de fechas pegadas a través de la prop `parseDateFromString`. Esto es útil cuando necesita admitir formatos de fecha específicos o lógica de análisis personalizada que difiere del comportamiento predeterminado.

GRAVITY_TRANSLATION_BLOCK_28_END

## Zona horaria

`timeZone` es la propiedad para establecer la zona horaria del valor en la entrada. [Más información sobre zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Propiedades

| Nombre                | Descripción                                                                                                          |                               Tipo                                 |          Predeterminado          |
| :------------------ | :------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------: | :-----------------------: |
| aria-describedby    | El atributo `aria-describedby` del control                                                                           |                               `string`                               |                           |
| aria-details        | El atributo `aria-details` del control                                                                               |                               `string`                               |                           |
| aria-label          | El atributo `aria-label` del control                                                                                 |                               `string`                               |                           |
| aria-labelledby     | El atributo `aria-labelledby` del control                                                                            |                               `string`                               |                           |
| autoFocus           | El atributo `autofocus` del control                                                                                  |                              `boolean`                               |                           |
| className           | El nombre de clase del contenedor del control                                                                                     |                               `string`                               |                           |
| defaultValue        | Establece el valor inicial para un componente no controlado.                                                                   |                              `DateTime`                              |                           |
| disabled            | Indica que el usuario no puede interactuar con el control                                                             |                              `boolean`                               |          `false`          |
| errorMessage        | Texto de error                                                                                                           |                             `ReactNode`                              |                           |
| format              | Formato de la fecha cuando se muestra en el input. [Formatos disponibles](https://day.js.org/docs/en/display/format)        |                               `string`                               |                           |
| hasClear            | Muestra el icono para borrar el valor del control                                                                          |                              `boolean`                               |          `false`          |
| id                  | El atributo `id` del control                                                                                         |                               `string`                               |                           |
| isDateUnavailable   | Función de devolución de llamada que se llama para cada fecha del calendario. Si devuelve `true`, la fecha no está disponible.             |                   `((date: DateTime) => boolean)`                    |                           |
| label               | Texto de ayuda que se muestra a la izquierda del nodo de entrada                                                                     |                               `string`                               |                           |
| startContent        | El nodo del usuario que se muestra antes de la etiqueta y la entrada                                                                      |                          `React.ReactNode`                           |                           |
| maxValue            | La fecha máxima permitida que un usuario puede seleccionar.                                                                     |                              `DateTime`                              |                           |
| minValue            | La fecha mínima permitida que un usuario puede seleccionar.                                                                     |                              `DateTime`                              |                           |
| onBlur              | Se activa cuando el control pierde el foco. Proporciona el evento de foco como argumento de la devolución de llamada                                     |            `((e: FocusEvent<Element, Element>) => void)`             |                           |
| onFocus             | Se activa cuando el control obtiene el foco. Proporciona el evento de foco como argumento de la devolución de llamada                                     |            `((e: FocusEvent<Element, Element>) => void)`             |                           |
| onKeyDown           | Se activa cuando se presiona una tecla. Proporciona el evento de teclado como argumento de la devolución de llamada                                        |               `((e: KeyboardEvent<Element>) => void)`                |                           |
| onKeyUp             | Se activa cuando se suelta una tecla. Proporciona el evento de teclado como argumento de la devolución de llamada                                       |               `((e: KeyboardEvent<Element>) => void)`                |                           |
| onUpdate            | Se activa cuando el valor es cambiado por el usuario. Proporciona el nuevo valor como argumento de la devolución de llamada                            |                 `((value: DateTime \| null) => void`                 |                           |
| parseDateFromString | Función de análisis personalizada para analizar cadenas de fechas pegadas. Si no se proporciona, se utilizará el analizador predeterminado.            | `((dateStr: string, format: string, timeZone?: string) => DateTime)` |                           |
| pin                 | Redondeo de esquinas                                                                                                      |                               `string`                               |      `'round-round'`      |
| placeholder         | Texto que aparece en el control cuando no tiene ningún valor establecido                                                            |                               `string`                               |                           |
| placeholderValue    | Una fecha de marcador de posición que controla los valores predeterminados de cada segmento cuando el usuario interactúa con ellos por primera vez.         |                              `DateTime`                              | `la fecha de hoy a medianoche` |
| readOnly            | Si el valor del componente es inmutable.                                                                          |                              `boolean`                               |          `false`          |
| endContent          | Nodo del usuario que se muestra después del nodo de entrada y el botón de borrado                                                           |                          `React.ReactNode`                           |                           |
| size                | El tamaño del control                                                                                              |                       `"s"` `"m"` `"l"` `"xl"`                       |           `"m"`           |
| style               | Establece el estilo en línea para el elemento.                                                                                   |                           `CSSProperties`                            |                           |
| timeZone            | Establece la zona horaria. [Más información sobre zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                               `string`                               |                           |
| validationState     | Estado de validación                                                                                                     |                             `"invalid"`                              |                           |
| value               | El valor del control                                                                                             |                          `DateTime` `null`                           |                           |
| view                | La vista del control                                                                                              |                         `"normal"` `"clear"`                         |        `"normal"`         |