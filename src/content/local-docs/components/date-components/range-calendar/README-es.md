<!--GITHUB_BLOCK-->

# RangeCalendar

<!--/GITHUB_BLOCK-->

```tsx
import {RangeCalendar} from '@gravity-ui/date-components';
```

`RangeCalendar` es un componente de interfaz de usuario potente, flexible y fácil de usar diseñado para seleccionar un rango de fechas. Creado con React, combina la funcionalidad de un calendario y un selector de rango de fechas, lo que lo convierte en una opción ideal para las aplicaciones que requieren que los usuarios ingresen una fecha de inicio y finalización. Se puede controlar si se establece la `value` propiedad. O puede estar descontrolado si no establece ningún valor, pero en este caso puede administrar el estado inicial con una propiedad `defaultValue` opcional. El componente no está controlado de forma predeterminada.

### Adición útil

Para establecer las fechas en el formato correcto, es posible que deba incluir ayudantes adicionales de la biblioteca de [Date Utils](https://gravity-ui.com/libraries/date-utils).

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

<!--LANDING_BLOCK

> [!NOTE]
> Row with "Selected range: ..." is not a part of the component. It was added to examples only for clarity.

LANDING_BLOCK-->

## Tamaño

Para controlar el tamaño del `RangeCalendar` uso de la `size` propiedad. El tamaño predeterminado es `m`.

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

La `minValue` propiedad permite especificar la fecha y la hora más tempranas que puede introducir el usuario. Por el contrario, la `maxValue` propiedad especifica la fecha y la hora más recientes que se pueden introducir. Todos los demás valores se deshabilitarán para el usuario.

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

Define el intervalo de tiempo que `RangeCalendar` debe mostrarse. Con `mode` usted puede elegirlo de forma controlada. De forma descontrolada, no es necesario especificar ningún valor. También puedes configurar el modo inicial de forma descontrolada con `defaultMode` prop.

`days`- modo predeterminado para `RangeCalendar`. Muestra los días del mes.

`months`- muestra los meses del año

`quarters`- muestra trimestres por años (no está disponible como valor en `defaultMode`)

`years`- muestra varios años para seleccionar

Puedes limitar los modos habilitados mediante el uso de prop. `modes`

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

### Discapacitado

El estado en el `RangeCalendar` que no desea que el usuario pueda interactuar con el componente.

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

`readOnly` es un atributo booleano que, cuando se establece en verdadero, hace que el `RangeCalendar` componente sea inmutable para el usuario. Esto significa que, si bien la entrada mostrará su valor actual, los usuarios no podrán cambiarla.

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

Permite seleccionar la fecha en la que se centra la `RangeCalendar` vista. Si necesita controlarlo, debe usar `focusedValue` utilería. Puede establecer el valor de enfoque inicial para un componente no controlado con un accesorio `defaultFocusedValue` opcional.

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

`timeZone` es la propiedad para establecer la zona horaria del valor de la entrada. [Más información sobre las zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Propiedades

| Nombre                                | Descripción                                                                                                                              |                            Tipo                            |                       Predeterminado                        |
| :------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------: | :---------------------------------------------------------: |
| aria, descrita por                    | El `aria-describedby` atributo del control                                                                                               |                          `string`                          |                                                             |
| detalles de aria                      | El `aria-details` atributo del control                                                                                                   |                          `string`                          |                                                             |
| etiqueta aria                         | El `aria-label` atributo del control                                                                                                     |                          `string`                          |                                                             |
| aria - etiquetada por                 | El `aria-labelledby` atributo del control                                                                                                |                          `string`                          |                                                             |
| autoFocus                             | El `autofocus` atributo del control                                                                                                      |                         `boolean`                          |                                                             |
| className                             | El nombre de la clase contenedora del control                                                                                            |                          `string`                          |                                                             |
| [defaultFocusedValue](#focused-value) | La fecha en la que se centra cuando el calendario se monta por primera vez (sin control)                                                 |                         `DateTime`                         |                                                             |
| [defaultMode](#mode)                  | Modo inicial para mostrar en el calendario                                                                                               |                       `days` `years`                       |                                                             |
| [defaultValue](#value)                | Establece el valor inicial del componente no controlado.                                                                                 |                   `RangeValue<DateTime>`                   |                                                             |
| [discapacitado](#disabled)            | Indica que el usuario no puede interactuar con el control                                                                                |                         `boolean`                          |                           `false`                           |
| [focusedValue](#focused-value)        | Establezca la vista predeterminada del componente no controlado que incluye este valor                                                   |                     `DateTime` `null`                      |                                                             |
| identificación                        | El `id` atributo del control                                                                                                             |                          `string`                          |                                                             |
| isDateUnavailable                     | Llamada que se solicita para cada fecha del calendario. Si se devuelve verdadero, significa que la fecha no está disponible.             |              `((date: DateTime) => boolean)`               |                                                             |
| isWeekend                             | Llamada que se solicita para cada fecha del calendario. Si vuelve a ser cierto, entonces la fecha es fin de semana.                      |              `((date: DateTime) => boolean)`               |                                                             |
| [maxValue](#min-and-max-value)        | La fecha máxima permitida que puede seleccionar un usuario.                                                                              |                         `DateTime`                         |                                                             |
| [minValue](#min-and-max-value)        | La fecha mínima permitida que un usuario puede seleccionar.                                                                              |                         `DateTime`                         |                                                             |
| [modo](#mode)                         | Define el intervalo de tiempo que `RangeCalendar` debe mostrarse de forma controlada.                                                    |                       `days` `years`                       |                                                             |
| modos                                 | Modos disponibles para el usuario                                                                                                        |      `Parcial<Record<RangeCalendarLayout, boolean>>`       | `{days: true, months: true, quarters: false, years: true }` |
| onBlur                                | Se dispara cuando el control pierde el foco. Proporciona un evento de enfoque como argumento de devolución de llamada                    |      `(e: focusEvent<Element, Element> () => vacío)`       |                                                             |
| onFocus                               | Se dispara cuando el control se enfoca. Proporciona un evento de enfoque como argumento de devolución de llamada                         |      `(e: focusEvent<Element, Element> () => vacío)`       |                                                             |
| onFocusUpdate                         | Se activa cuando cambia la fecha de enfoque del control.                                                                                 |                `((date: DateTime) => void)`                |                                                             |
| onUpdate                              | Se activa cuando se cambia el valor.                                                                                                     |                `((value: DateTime) => void`                |                                                             |
| onUpdateMode                          | Se dispara cuando se cambia el modo.                                                                                                     | `(valor: 'días'\| 'meses'\| 'trimestre'\| «años») => nulo` |                                                             |
| [readOnly](#readonly)                 | Si el valor del calendario es inmutable.                                                                                                 |                         `boolean`                          |                           `false`                           |
| [tamaño](#size)                       | El tamaño del control                                                                                                                    |                        `"m"` `"xl"`                        |                            `"m"`                            |
| estilo                                | Establece el estilo en línea del elemento.                                                                                               |                      `CSSProperties`                       |                                                             |
| [timeZone](#time-zone)                | Establece la zona horaria. [Más información sobre las zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                          `string`                          |                                                             |
| [valor](#calendar)                    | El valor del control                                                                                                                     |                      `RangeValuenull`                      |                                                             |
