GRAVITY_TRANSLATION_BLOCK_0_END

```tsx
import {RangeCalendar} from '@gravity-ui/date-components';
```

`RangeCalendar` es un componente de UI potente, flexible y fácil de usar diseñado para seleccionar un rango de fechas. Construido con React, combina la funcionalidad de un calendario y un selector de rango de fechas, lo que lo convierte en una opción ideal para aplicaciones que requieren que los usuarios ingresen una fecha de inicio y fin. Puede ser controlado si establece la propiedad `value`. O puede ser no controlado si no establece ningún valor, pero en este caso puede administrar el estado inicial con la propiedad opcional `defaultValue`. El componente no es controlado por defecto.

### Adición útil

Para establecer fechas en el formato correcto, es posible que necesite incluir ayudantes adicionales de la [biblioteca Date Utils](https://gravity-ui.com/libraries/date-utils)

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

GRAVITY_TRANSLATION_BLOCK_1_END

## Tamaño

Para controlar el tamaño de `RangeCalendar`, use la propiedad `size`. El tamaño predeterminado es `m`.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Valor

### Valor mínimo y máximo

La propiedad `minValue` le permite especificar la fecha y hora más temprana que puede ingresar el usuario. Por el contrario, la propiedad `maxValue` especifica la fecha y hora más tardía que se puede ingresar. Todos los demás valores estarán deshabilitados para el usuario.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Modo

Define el intervalo de tiempo que `RangeCalendar` debe mostrar. Con `mode`, puede elegirlo de forma controlada. Para una forma no controlada, no necesita especificar ningún valor. También puede establecer el modo inicial de forma no controlada con la prop `defaultMode`.

`days` - modo predeterminado para `RangeCalendar`. Muestra los días del mes.

`months` - muestra los meses del año.

`quarters` - muestra los trimestres por año (no disponible como valor en `defaultMode`).

`years` - muestra varios años para seleccionar.

Puede limitar los modos habilitados usando la prop `modes`.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Estados

### Deshabilitado

El estado de `RangeCalendar` en el que no desea que el usuario pueda interactuar con el componente.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### Solo lectura

`readOnly` es un atributo booleano que, cuando se establece en true, hace que el componente `RangeCalendar` sea inmutable para el usuario. Esto significa que, si bien la entrada mostrará su valor actual, los usuarios no podrán cambiarlo.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Valor enfocado

Permite seleccionar la fecha en la que está enfocado `RangeCalendar`. Si necesita que sea controlado, debe usar la prop `focusedValue`. Puede establecer el valor enfocado inicial para un componente no controlado con la prop opcional `defaultFocusedValue`.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Zona horaria

`timeZone` es la propiedad para establecer la zona horaria del valor en la entrada. [Más información sobre zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Propiedades

| Nombre                                | Descripción                                                                                                                            | Tipo                                      | Predeterminado                               |
| :------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------: | :------------------------------------------: |
| aria-describedby                      | El atributo `aria-describedby` del control                                                                                            |                 `string`                  |                                              |
| aria-details                          | El atributo `aria-details` del control                                                                                                |                 `string`                  |                                              |
| aria-label                            | El atributo `aria-label` del control                                                                                                  |                 `string`                  |                                              |
| aria-labelledby                       | El atributo `aria-labelledby` del control                                                                                             |                 `string`                  |                                              |
| autoFocus                             | El atributo `autofocus` del control                                                                                                   |                 `boolean`                 |                                              |
| className                             | El nombre de clase del contenedor del control                                                                                          |                 `string`                  |                                              |
| [defaultFocusedValue](#focused-value) | La fecha en la que se enfoca el calendario al montarse (no controlado)                                                                 |                 `DateTime`                  |                                              |
| [defaultMode](#mode)                  | Modo inicial para mostrar en el calendario                                                                                             |        `days` `months` `quarters` `years`         |                                              |
| [defaultValue](#value)                | Establece el valor inicial para el componente no controlado.                                                                           |              `RangeValue<DateTime>`               |                                              |
| [disabled](#disabled)                 | Indica que el usuario no puede interactuar con el control                                                                              |                 `boolean`                 |                   `false`                    |
| [focusedValue](#focused-value)        | Establece la vista predeterminada del componente no controlado que incluye este valor                                                  |              `DateTime` `null`              |                                              |
| id                                    | El atributo `id` del control                                                                                                           |                 `string`                  |                                              |
| isDateUnavailable                     | Función de devolución de llamada que se llama para cada fecha del calendario. Si devuelve `true`, la fecha no está disponible.          |         `((date: DateTime) => boolean)`         |                                              |
| isWeekend                             | Función de devolución de llamada que se llama para cada fecha del calendario. Si devuelve `true`, la fecha es fin de semana.            |         `((date: DateTime) => boolean)`         |                                              |
| [maxValue](#min-and-max-value)        | La fecha máxima permitida que un usuario puede seleccionar.                                                                            |                 `DateTime`                  |                                              |
| [minValue](#min-and-max-value)        | La fecha mínima permitida que un usuario puede seleccionar.                                                                            |                 `DateTime`                  |                                              |
| [mode](#mode)                         | Define el intervalo de tiempo que `RangeCalendar` debe mostrar de forma controlada.                                                    |        `days` `months` `quarters` `years`         |                                              |
| modes                                 | Modos disponibles para el usuario                                                                                                      |    `Partial<Record<RangeCalendarLayout, boolean>>`    | `{days: true, months: true, quarters: false, years: true }` |
| onBlur                                | Se activa cuando el control pierde el foco. Proporciona el evento de foco como argumento de la función de devolución de llamada.       |      `((e: FocusEvent<Element, Element>) => void)`      |                                              |
| onFocus                               | Se activa cuando el control obtiene el foco. Proporciona el evento de foco como argumento de la función de devolución de llamada.       |      `((e: FocusEvent<Element, Element>) => void)`      |                                              |
| onFocusUpdate                         | Se activa cuando cambia la fecha en la que se enfoca el control.                                                                       |            `((date: DateTime) => void)`            |                                              |
| onUpdate                              | Se activa cuando cambia el valor.                                                                                                      |            `((value: DateTime) => void`            |                                              |
| onUpdateMode                          | Se activa cuando cambia el modo.                                                                                                       | `((value: 'days' \| 'months' \| 'quarters' \| 'years' ) => void` |                                              |
| [readOnly](#readonly)                 | Si el valor del calendario es inmutable.                                                                                               |                 `boolean`                 |                   `false`                    |
| [size](#size)                         | El tamaño del control                                                                                                                  |              `"m"` `"l"` `"xl"`               |                            `"m"`                             |
| style                                 | Establece el estilo en línea para el elemento.                                                                                         |                 `CSSProperties`                 |                                              |
| [timeZone](#time-zone)                | Establece la zona horaria. [Más información sobre zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                 `string`                  |                                              |
| [value](#calendar)                    | El valor del control                                                                                                                   |              `RangeValue<DateTime>` `null`              |                                              |