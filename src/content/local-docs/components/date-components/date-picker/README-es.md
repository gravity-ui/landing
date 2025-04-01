<!--GITHUB_BLOCK-->

# DatePicker

<!--/GITHUB_BLOCK-->

```tsx
import {DatePicker} from '@gravity-ui/date-components';
```

`DatePicker` es un componente sofisticado, ligero y totalmente personalizable diseñado para proporcionar una funcionalidad intuitiva de selección de fechas en sus aplicaciones React. Creado teniendo en cuenta la experiencia del usuario y la facilidad de integración, se adapta perfectamente a los formularios, modales o cualquier elemento de la interfaz de usuario que requiera la entrada de fecha. Se puede controlar si se establece la `value` propiedad. O puede estar descontrolado si no establece ningún valor, pero en este caso puede administrar el estado inicial con una propiedad `defaultValue` opcional. El componente no está controlado de forma predeterminada.

### Adición útil

Para establecer las fechas en el formato correcto, es posible que deba incluir ayudantes adicionales de la biblioteca de [Date Utils](https://gravity-ui.com/libraries/date-utils).

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

## Apariencia

La apariencia de `DatePicker` está controlada por `size` las `pin` propiedades `view` y.

### Tamaño

Para controlar el tamaño del `DatePicker` uso de la `size` propiedad. El tamaño predeterminado es `m`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker size="s" />
<DatePicker size="m" />
<DatePicker size="l" />
<DatePicker size="xl" />
`}
>
    <DateComponents.DatePicker size="s" />
    <DateComponents.DatePicker size="m" />
    <DateComponents.DatePicker size="l" />
    <DateComponents.DatePicker size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker size="s" />
<DatePicker size="m" />
<DatePicker size="l" />
<DatePicker size="xl" />
```

<!--/GITHUB_BLOCK-->

### Ver

`normal`- la vista principal de `DatePicker` (utilizada de forma predeterminada).

<!--LANDING_BLOCK
<ExampleBlock code={`<DatePicker />`}>
    <DateComponents.DatePicker />
</ExampleBlock>
LANDING_BLOCK-->

`clear`- vista `DatePicker` sin bordes visibles (se puede usar con un envoltorio personalizado)

<!--LANDING_BLOCK
<ExampleBlock code={`<DatePicker view="clear" />`}>
    <DateComponents.DatePicker view="clear" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker view="normal" />
<DatePicker view="clear" />
```

<!--/GITHUB_BLOCK-->

### Alfiler

La `pin` propiedad permite controlar la forma de los bordes derecho e izquierdo y, por lo general, se usa para combinar varios controles en una sola unidad.
El valor de la `pin` propiedad consiste en los nombres de los estilos izquierdo y de borde divididos por un guión, `"round-brick"` p. ej.
Los estilos de arista son: `round` (predeterminado) `brick` y `clear`. `circle`

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker pin="round-brick" />
<DatePicker pin="brick-brick" />
<DatePicker pin="brick-round" />
`}
>
    <DateComponents.DatePicker pin="round-brick" />
    <DateComponents.DatePicker pin="brick-brick" />
    <DateComponents.DatePicker pin="brick-round" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker pin="round-brick" />
<DatePicker pin="brick-brick" />
<DatePicker pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## Valor

### Valor mínimo y máximo

La `minValue` propiedad permite especificar la fecha y la hora más tempranas que puede introducir el usuario. Por el contrario, la `maxValue` propiedad especifica la fecha y la hora más recientes que se pueden introducir. Si ingresas el valor fuera de estos límites, el componente cambia su vista, como en el caso de un estado de validación no válido.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker minValue={dateTimeParse('01.01.2024')} placeholder={"minValue: '01.01.2024'"}/>
<DatePicker maxValue={dateTimeParse('01.01.2025')} placeholder={"maxValue: '01.01.2025'"}/>
`}
>
    <DateComponentsExamples.DatePickerExample minValue={'01.01.2024'} placeholder={"minValue: '01.01.2024'"} />
    <DateComponentsExamples.DatePickerExample maxValue={'01.01.2025'} placeholder={"maxValue: '01.01.2025'"} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx

<DatePicker minValue={dateTimeParse('01.01.2024')} />
<DatePicker maxValue={dateTimeParse('01.01.2025')} />
```

<!--/GITHUB_BLOCK-->

## Estados

### Discapacitado

El estado en el `DatePicker` que no desea que el usuario pueda interactuar con el componente.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker disabled={true} defaultValue={dateTime()} />
`}
>
    <DateComponentsExamples.DatePickerExample disabled={true} defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker disabled defaultValue={dateTime()} />
```

<!--/GITHUB_BLOCK-->

### Solo lectura

`readOnly` es un atributo booleano que, cuando se establece en verdadero, hace que el `DatePicker` componente sea inmutable para el usuario. Esto significa que, si bien la entrada mostrará su valor actual, los usuarios no podrán cambiarla.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker readOnly defaultValue={dateTimeParse(new Date())} />
`}
>
    <DateComponentsExamples.DatePickerExample readOnly defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker readOnly defaultValue={dateTime()} />
```

<!--/GITHUB_BLOCK-->

### Error

El estado `DatePicker` en el que desea indicar una entrada de usuario incorrecta. Para cambiar el `DatePicker` aspecto, utilice la `validationState` propiedad con el `"invalid"` valor. Se puede agregar un texto de mensaje opcional a través de la `errorMessage` propiedad. El texto del mensaje se mostrará en el componente.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker errorMessage="Error message" validationState="invalid" />
<DatePicker validationState="invalid" />
`}
>
    <DateComponents.DatePicker errorMessage="Error message" validationState="invalid" />
    <DateComponents.DatePicker validationState="invalid" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker errorMessage="Error message" validationState="invalid" />
<DatePicker validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## Contenido adicional

### Marcador de posición

Este accesorio le permite proporcionar una breve sugerencia que describa el valor esperado del campo de entrada. Esta sugerencia se muestra en el campo de entrada antes de que el usuario introduzca un valor y desaparece al introducir el texto.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker placeholder="Placeholder" />
`}
>
    <DateComponents.DatePicker placeholder='Placeholder' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker placeholder="Placeholder" />
```

<!--/GITHUB_BLOCK-->

### Etiqueta

Le permite colocar la etiqueta en la parte izquierda del campo. La etiqueta no puede ocupar más de la mitad del ancho de todo el espacio de `DatePicker`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker label="Label" />
<DatePicker label="Very long label with huge amount of symbols" />
`}
>
    <DateComponents.DatePicker label="Label" />
    <DateComponents.DatePicker label="Very long label with huge amount of symbols" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker label="Label" />
```

<!--/GITHUB_BLOCK-->

### Botón Borrar

`hasClear` es un accesorio booleano que brinda a los usuarios la posibilidad de borrar rápidamente el contenido del campo de entrada.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<DatePicker hasClear />`}
>
    <DateComponents.DatePicker
        hasClear
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker hasClear />
```

<!--/GITHUB_BLOCK-->

## Formato

El `format` accesorio es una cadena que define el formato de fecha y hora que el `DatePicker` componente aceptará y mostrará. Este accesorio determina cómo se presentan visualmente la fecha y la hora al usuario y cómo se espera que se formatee la entrada del usuario. [Formatos disponibles](https://day.js.org/docs/en/display/format)

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker format='LL' />
`}
>
    <DateComponents.DatePicker format='LL' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker format="LL" />
```

<!--/GITHUB_BLOCK-->

## Zona horaria

`timeZone` es la propiedad para establecer la zona horaria del valor de la entrada. [Más información sobre las zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Personalización

Si desea utilizar un componente de calendario personalizado en su interior, `DatePicker` puede pasarlo como si fuera `children` un calendario con accesorios similares.

<!--LANDING_BLOCK
[Learn more about calendar](https://gravity-ui.com/components/date-components/calendar)
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Más información sobre el calendario](https://github.com/gravity-ui/date-components/blob/main/src/components/Calendar/README.md)

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre                               | Descripción                                                                                                                                       |                      Tipo                       |      Predeterminado       |
| :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------: | :-----------------------: |
| aria, descrita por                   | Los controles `aria-describedby`. Identifica el elemento (o los elementos) que describe el objeto. atributo                                       |                    `string`                     |                           |
| detalles de aria                     | Los controles `aria-details`. Identifica el elemento (o los elementos) que proporcionan una descripción detallada y ampliada del objeto. atributo |                    `string`                     |                           |
| etiqueta aria                        | Los controles `aria-label`. Define un valor de cadena que etiqueta el elemento actual. attribute                                                  |                    `string`                     |                           |
| aria - etiquetada por                | Los controles `aria-labelledby`. Identifica el elemento (o los elementos) que etiquetan el elemento actual. atributo                              |                    `string`                     |                           |
| autoFocus                            | Los controles `autofocus`. Si el elemento debe centrarse en el atributo render.                                                                   |                    `boolean`                    |                           |
| className                            | El nombre de la clase contenedora del control                                                                                                     |                    `string`                     |                           |
| [defaultValue](#datepicker)          | Establece el valor inicial del componente no controlado.                                                                                          |                   `DateTime`                    |                           |
| [discapacitado](#disabled)           | Indica que el usuario no puede interactuar con el control                                                                                         |                    `boolean`                    |          `false`          |
| [errorMessage](#error)               | Texto de error                                                                                                                                    |                   `ReactNode`                   |                           |
| [formato](#format)                   | Formato de la fecha cuando se representa en la entrada. [Formatos disponibles](https://day.js.org/docs/en/display/format)                         |                    `string`                     |                           |
| [hasClear](#clear-button)            | Muestra el icono para borrar el valor del control                                                                                                 |                    `boolean`                    |          `false`          |
| identificación                       | El `id` atributo del control                                                                                                                      |                    `string`                     |                           |
| isDateUnavailable                    | Llamada que se solicita para cada fecha del calendario. Si se devuelve verdadero, significa que la fecha no está disponible.                      |         `((date: DateTime) => boolean)`         |                           |
| [etiqueta](#label)                   | Texto de ayuda representado a la izquierda del nodo de entrada                                                                                    |                    `string`                     |                           |
| [maxValue](#min-and-max-value)       | La fecha máxima permitida que puede seleccionar un usuario.                                                                                       |                   `DateTime`                    |                           |
| [minValue](#min-and-max-value)       | La fecha mínima permitida que un usuario puede seleccionar.                                                                                       |                   `DateTime`                    |                           |
| onBlur                               | Se dispara cuando el control pierde el foco. Proporciona un evento de enfoque como argumento de devolución de llamada                             | `(e: focusEvent<Element, Element> () => vacío)` |                           |
| onFocus                              | Se dispara cuando el control se enfoca. Proporciona un evento de enfoque como argumento de devolución de llamada                                  | `(e: focusEvent<Element, Element> () => vacío)` |                           |
| onKeyDown                            | Se dispara cuando se pulsa una tecla. Proporciona un evento de teclado como argumento de devolución de llamada                                    |     `(e: KeyboardEvent<Element>) = nulo)>`      |                           |
| onKeyUp                              | Se dispara cuando se suelta una tecla. Proporciona un evento de teclado como argumento de devolución de llamada                                   |     `(e: KeyboardEvent<Element>) = nulo)>`      |                           |
| onUpdate                             | Se activa cuando el usuario cambia el valor. Proporciona un nuevo valor como argumento de devolución de llamada                                   |      `(valor: Fecha/hora\| nulo) => nulo`       |                           |
| [alfiler](#pin)                      | Redondeo de esquinas                                                                                                                              |                 `TextInputPin`                  |      `'round-round'`      |
| [marcador de posición](#placeholder) | Texto que aparece en el control cuando no tiene ningún valor establecido                                                                          |                    `string`                     |                           |
| placeholderValue                     | Un marcador de fecha que controla los valores predeterminados de cada segmento cuando el usuario interactúa con ellos por primera vez.            |                   `DateTime`                    | `today's date at midnigh` |
| [readOnly](#readonly)                | Si el valor del componente es inmutable.                                                                                                          |                    `boolean`                    |          `false`          |
| [tamaño](#size)                      | El tamaño del control                                                                                                                             |                  `"s"` `"xl"`                   |           `"m"`           |
| estilo                               | Establece el estilo en línea del elemento.                                                                                                        |                 `CSSProperties`                 |                           |
| [timeZone](#time-zone)               | Establece la zona horaria. [Más información sobre las zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)          |                    `string`                     |                           |
| [validationState](#error)            | Estado de validación                                                                                                                              |                   `"invalid"`                   |                           |
| [valor](#datepicker)                 | El valor del control                                                                                                                              |                `DateTime` `null`                |                           |
| [vista](#view)                       | La vista del control                                                                                                                              |              `"normal"` `"clear"`               |        `"normal"`         |
