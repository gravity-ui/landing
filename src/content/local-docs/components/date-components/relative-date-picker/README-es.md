GRAVITY_TRANSLATION_BLOCK_0_END

```tsx
import {RelativeDatePicker} from '@gravity-ui/date-components';
```

`RelativeDatePicker` es casi el mismo componente que `DatePicker`, pero tiene la capacidad de usar fechas relativas.

## Diferencia con `DatePicker`

`RelativeDatePicker` puede funcionar en dos modos: `absolute` y `relative`. Puedes cambiarlo interactivamente haciendo clic en el botón `f(x)`. O puedes establecer el campo `type` en el objeto `value` o `defaultValue`.

### Absoluto

El comportamiento de `RelativeDatePicker` en modo `absolute` es muy similar al de un `DatePicker` simple.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Relativo

En este modo, `RelativeDatePicker` obtiene y devuelve valores en un formato relativo especial.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Propiedades

| Nombre              | Descripción                                                                                                                                |                     Tipo                      |          Predeterminado          |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----------------------: |
| aria-describedby  | El `aria-describedby` del control. Identifica el elemento (o elementos) que describe el objeto. atributo                                |                   `string`                    |                           |
| aria-details      | El `aria-details` del control. Identifica el elemento (o elementos) que proporcionan una descripción detallada y extendida del objeto. atributo |                   `string`                    |                           |
| aria-label        | El `aria-label` del control. Define un valor de cadena que etiqueta el elemento actual. atributo                                              |                   `string`                    |                           |
| aria-labelledby   | El `aria-labelledby` del control. Identifica el elemento (o elementos) que etiqueta el elemento actual. atributo                           |                   `string`                    |                           |
| autoFocus         | El `autofocus` del control. Si el elemento debe recibir el foco al renderizarse. atributo                                                   |                   `boolean`                   |                           |
| className         | El nombre de la clase del contenedor del control                                                                                                           |                   `string`                    |                           |
| defaultValue      | Establece el valor inicial para un componente no controlado.                                                                                         |                    `Value`                    |                           |
| disabled          | Indica que el usuario no puede interactuar con el control                                                                                   |                   `boolean`                   |          `false`          |
| errorMessage      | Texto de error                                                                                                                                 |                  `ReactNode`                  |                           |
| format            | Formato de la fecha cuando se renderiza en la entrada. [Formatos disponibles](https://day.js.org/docs/en/display/format)                              |                   `string`                    |                           |
| hasClear          | Muestra el icono para borrar el valor del control                                                                                                |                   `boolean`                   |          `false`          |
| id                | El atributo `id` del control                                                                                                               |                   `string`                    |                           |
| isDateUnavailable | Callback que se llama para cada fecha del calendario. Si devuelve `true`, entonces la fecha no está disponible.                                   |        `((date: DateTime) => boolean)`        |                           |
| label             | Texto de ayuda renderizado a la izquierda del nodo de entrada                                                                                           |                   `string`                    |                           |
| maxValue          | La fecha máxima permitida que un usuario puede seleccionar.                                                                                           |                  `DateTime`                   |                           |
| minValue          | La fecha mínima permitida que un usuario puede seleccionar.                                                                                           |                  `DateTime`                   |                           |
| onBlur            | Se dispara cuando el control pierde el foco. Proporciona el evento de foco como argumento de la callback                                                           | `((e: FocusEvent<Element, Element>) => void)` |                           |
| onFocus           | Se dispara cuando el control obtiene el foco. Proporciona el evento de foco como argumento de la callback                                                           | `((e: FocusEvent<Element, Element>) => void)` |                           |
| onKeyDown         | Se dispara cuando se presiona una tecla. Proporciona el evento del teclado como argumento de la callback                                                              |    `((e: KeyboardEvent<Element>) => void)`    |                           |
| onKeyUp           | Se dispara cuando se suelta una tecla. Proporciona el evento del teclado como argumento de la callback                                                             |    `((e: KeyboardEvent<Element>) => void)`    |                           |
| onUpdate          | Se dispara cuando el valor es cambiado por el usuario. Proporciona el nuevo valor como argumento de la callback                                                  |       `((value: Value \| null) => void`       |                           |
| pin               | Redondeo de esquinas                                                                                                                            |                `TextInputPin`                 |      `'round-round'`      |
| placeholder       | Texto que aparece en el control cuando no tiene ningún valor establecido                                                                                  |                   `string`                    |                           |
| placeholderValue  | Una fecha de marcador de posición que controla los valores predeterminados de cada segmento cuando el usuario interactúa con ellos por primera vez.                               |                  `DateTime`                   | `la fecha de hoy a medianoche` |
| readOnly          | Si el valor del componente es inmutable.                                                                                                |                   `boolean`                   |          `false`          |
| size              | El tamaño del control                                                                                                                    |           `"s"` `"m"` `"l"` `"xl"`            |           `"m"`           |
| style             | Establece el estilo en línea para el elemento.                                                                                                         |                `CSSProperties`                |                           |
| timeZone          | Establece la zona horaria. [Más información sobre zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)                       |                   `string`                    |                           |
| validationState   | Estado de validación                                                                                                                           |                  `"invalid"`                  |                           |
| value             | El valor del control                                                                                                                   |                `Value` `null`                 |                           |
| view              | La vista del control                                                                                                                    |             `"normal"` `"clear"`              |        `"normal"`         |