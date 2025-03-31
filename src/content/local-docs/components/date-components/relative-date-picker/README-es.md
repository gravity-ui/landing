<!--GITHUB_BLOCK-->

# RelativeDatePicker

<!--/GITHUB_BLOCK-->

```tsx
import {RelativeDatePicker} from '@gravity-ui/date-components';
```

`RelativeDatePicker` es casi el mismo componente que `DatePicker`, pero tiene la capacidad de usar fechas relativas.

## Diferencia con `DatePicker`

`RelativeDatePicker` puede funcionar en dos modos: `absolute` y `relative`. Puede cambiarlo de forma interactiva haciendo clic en el `f(x)` botón. O puede establecer un campo `type` en `value` u `defaultValue` objeto.

### Absoluto

`RelativeDatePicker`Su comportamiento en `absolute` el modo es muy similar al simple `DatePicker`.

<!--LANDING_BLOCK

[Learn more about DatePicker](/components/date-components/date-picker)

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Obtenga más información sobre DatePicker](/src/components/DatePicker)

<!--/GITHUB_BLOCK-->

### Relativo

En este modo, `RelativeDatePicker` obtenga y devuelva valores en un formato relativo especial.

<!--LANDING_BLOCK

[Learn more about rules of relative formulas](/components/date-components/relative-date-field#relative-input)

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Más información sobre las reglas de las fórmulas relativas](/src/components/RelativeDateField#relative-input)

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre                | Descripción                                                                                                                                       |                      Tipo                       |      Predeterminado       |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------: | :-----------------------: |
| aria, descrita por    | Los controles `aria-describedby`. Identifica el elemento (o los elementos) que describe el objeto. atributo                                       |                    `string`                     |                           |
| detalles de aria      | Los controles `aria-details`. Identifica el elemento (o los elementos) que proporcionan una descripción detallada y ampliada del objeto. atributo |                    `string`                     |                           |
| etiqueta aria         | Los controles `aria-label`. Define un valor de cadena que etiqueta el elemento actual. attribute                                                  |                    `string`                     |                           |
| aria - etiquetada por | Los controles `aria-labelledby`. Identifica el elemento (o los elementos) que etiquetan el elemento actual. atributo                              |                    `string`                     |                           |
| autoFocus             | Los controles `autofocus`. Si el elemento debe centrarse en el atributo render.                                                                   |                    `boolean`                    |                           |
| className             | El nombre de la clase contenedora del control                                                                                                     |                    `string`                     |                           |
| defaultValue          | Establece el valor inicial del componente no controlado.                                                                                          |                     `Value`                     |                           |
| inhabilitado          | Indica que el usuario no puede interactuar con el control                                                                                         |                    `boolean`                    |          `false`          |
| errorMessage          | Texto de error                                                                                                                                    |                   `ReactNode`                   |                           |
| formato               | Formato de la fecha cuando se representa en la entrada. [Formatos disponibles](https://day.js.org/docs/en/display/format)                         |                    `string`                     |                           |
| hasClear              | Muestra el icono para borrar el valor del control                                                                                                 |                    `boolean`                    |          `false`          |
| identificación        | El `id` atributo del control                                                                                                                      |                    `string`                     |                           |
| isDateUnavailable     | Llamada que se solicita para cada fecha del calendario. Si se devuelve verdadero, significa que la fecha no está disponible.                      |         `((date: DateTime) => boolean)`         |                           |
| etiqueta              | Texto de ayuda representado a la izquierda del nodo de entrada                                                                                    |                    `string`                     |                           |
| maxValue              | La fecha máxima permitida que puede seleccionar un usuario.                                                                                       |                   `DateTime`                    |                           |
| minValue              | La fecha mínima permitida que un usuario puede seleccionar.                                                                                       |                   `DateTime`                    |                           |
| onBlur                | Se dispara cuando el control pierde el foco. Proporciona un evento de enfoque como argumento de devolución de llamada                             | `(e: focusEvent<Element, Element> () => vacío)` |                           |
| onFocus               | Se dispara cuando el control se enfoca. Proporciona un evento de enfoque como argumento de devolución de llamada                                  | `(e: focusEvent<Element, Element> () => vacío)` |                           |
| onKeyDown             | Se dispara cuando se pulsa una tecla. Proporciona un evento de teclado como argumento de devolución de llamada                                    |     `(e: KeyboardEvent<Element>) = nulo)>`      |                           |
| onKeyUp               | Se dispara cuando se suelta una tecla. Proporciona un evento de teclado como argumento de devolución de llamada                                   |     `(e: KeyboardEvent<Element>) = nulo)>`      |                           |
| onUpdate              | Se activa cuando el usuario cambia el valor. Proporciona un nuevo valor como argumento de devolución de llamada                                   |         `(valor: Valor\| nulo) => nulo`         |                           |
| alfiler               | Redondeo de esquinas                                                                                                                              |                 `TextInputPin`                  |      `'round-round'`      |
| marcador de posición  | Texto que aparece en el control cuando no tiene ningún valor establecido                                                                          |                    `string`                     |                           |
| placeholderValue      | Un marcador de fecha que controla los valores predeterminados de cada segmento cuando el usuario interactúa con ellos por primera vez.            |                   `DateTime`                    | `today's date at midnigh` |
| readOnly              | Si el valor del componente es inmutable.                                                                                                          |                    `boolean`                    |          `false`          |
| tamaño                | El tamaño del control                                                                                                                             |                  `"s"` `"xl"`                   |           `"m"`           |
| estilo                | Establece el estilo en línea del elemento.                                                                                                        |                 `CSSProperties`                 |                           |
| timeZone              | Establece la zona horaria. [Más información sobre las zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)          |                    `string`                     |                           |
| validationState       | Estado de validación                                                                                                                              |                   `"invalid"`                   |                           |
| valor                 | El valor del control                                                                                                                              |                 `Value` `null`                  |                           |
| vista                 | La vista del control                                                                                                                              |              `"normal"` `"clear"`               |        `"normal"`         |
