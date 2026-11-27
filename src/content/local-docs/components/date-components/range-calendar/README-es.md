<!--GITHUB_BLOCK-->

# RangeCalendar

<!--/GITHUB_BLOCK-->

```tsx
import {RangeCalendar} from '@gravity-ui/date-components';
```

`RangeCalendar` es un componente de UI potente, flexible y fácil de usar diseñado para seleccionar un rango de fechas. Construido con React, combina la funcionalidad de un calendario y un selector de rango de fechas, lo que lo convierte en una opción ideal para aplicaciones que requieren que los usuarios ingresen una fecha de inicio y fin. Puede ser controlado si establece la propiedad `value`. O puede ser no controlado si no establece ningún valor, pero en este caso puede administrar el estado inicial con la propiedad opcional `defaultValue`. El componente no es controlado por defecto.

### Adición útil

Para establecer fechas en el formato correcto, es posible que necesite incluir ayudantes adicionales de la [biblioteca Date Utils](https://gravity-ui.com/libraries/date-utils)

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

<!--LANDING_BLOCK

> [!NOTE]
> Row with "Selected range: ..." is not a part of the component. It was added to examples only for clarity.

LANDING_BLOCK-->

## Tamaño

Para controlar el tamaño de `RangeCalendar`, use la propiedad `size`. El tamaño predeterminado es `m`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar size="m" />
<RangeCalendar size="l" />
<RangeCalendar size="xl" />
`}
>
    <DateComponentsExamples.RangeCalendarExample size="m" />
    <DateComponentsExamples.RangeCalendarExample size="l" />
    <DateComponentsExamples.RangeCalendarExample size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar size="m" />
<RangeCalendar size="l" />
<RangeCalendar size="xl" />
```

<!--/GITHUB_BLOCK-->

## Valor

### Valor mínimo y máximo

La propiedad `minValue` le permite especificar la fecha y hora más temprana que puede ingresar el usuario. Por el contrario, la propiedad `maxValue` especifica la fecha y hora más tardía que se puede ingresar. Todos los demás valores estarán deshabilitados para el usuario.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar minValue={dateTimeParse('01.01.2024')} maxValue={dateTimeParse('01.01.2025')} />
`}
>
    <DateComponentsExamples.RangeCalendarExample minValue={'01.01.2024'} maxValue={'01.01.2025'}/>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar minValue={dateTimeParse('01.01.2024')} maxValue={dateTimeParse('01.01.2025')} />
```

<!--/GITHUB_BLOCK-->

## Modo

Define el intervalo de tiempo que `RangeCalendar` debe mostrar. Con `mode`, puede elegirlo de forma controlada. Para una forma no controlada, no necesita especificar ningún valor. También puede establecer el modo inicial de forma no controlada con la prop `defaultMode`.

`days` - modo predeterminado para `RangeCalendar`. Muestra los días del mes.

`months` - muestra los meses del año.

`quarters` - muestra los trimestres por año (no disponible como valor en `defaultMode`).

`years` - muestra varios años para seleccionar.

Puede limitar los modos habilitados usando la prop `modes`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar defaultMode="months"/>
`}
>
    <DateComponentsExamples.RangeCalendarExample defaultMode="months" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar defaultMode="months" />
```

<!--/GITHUB_BLOCK-->

## Estados

### Deshabilitado

El estado de `RangeCalendar` en el que no desea que el usuario pueda interactuar con el componente.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar
  disabled={true}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
`}
>
    <DateComponentsExamples.RangeCalendarWithDefaultValueExample disabled={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar
  disabled={true}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
```

<!--/GITHUB_BLOCK-->

### Solo lectura

`readOnly` es un atributo booleano que, cuando se establece en true, hace que el componente `RangeCalendar` sea inmutable para el usuario. Esto significa que, si bien la entrada mostrará su valor actual, los usuarios no podrán cambiarlo.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar
  readOnly={true}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
`}
>
    <DateComponentsExamples.RangeCalendarWithDefaultValueExample readOnly={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar
  readOnly={true}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
```

<!--/GITHUB_BLOCK-->

## Valor enfocado

Permite seleccionar la fecha en la que está enfocado `RangeCalendar`. Si necesita que sea controlado, debe usar la prop `focusedValue`. Puede establecer el valor enfocado inicial para un componente no controlado con la prop opcional `defaultFocusedValue`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar
  defaultFocusedValue={dateTimeParse('01.01.2020')} defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
`}
>
    <DateComponentsExamples.RangeCalendarWithDefaultValueExample defaultFocusedValue={'01.01.2020'} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar
  defaultFocusedValue={dateTimeParse('01.01.2020')}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
```

<!--/GITHUB_BLOCK-->

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
