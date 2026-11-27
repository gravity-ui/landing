<!--GITHUB_BLOCK-->

# DatePicker

<!--/GITHUB_BLOCK-->

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

### Vista

`normal` - la vista principal de `DatePicker` (utilizada por defecto).

<!--LANDING_BLOCK
<ExampleBlock code={`<DatePicker />`}>
    <DateComponents.DatePicker />
</ExampleBlock>
LANDING_BLOCK-->

`clear` - vista de `DatePicker` sin bordes visibles (se puede usar con un contenedor personalizado)

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

### Pin

La propiedad `pin` te permite controlar la forma de los bordes derecho e izquierdo y se utiliza normalmente para combinar varios controles en una sola unidad.
El valor de la propiedad `pin` consta de nombres de estilo de borde izquierdo y derecho divididos por un guion, por ejemplo, `"round-brick"`.
Los estilos de borde son: `round` (predeterminado), `circle`, `brick` y `clear`.

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

La propiedad `minValue` te permite especificar la fecha y hora más temprana que puede introducir el usuario. Por el contrario, la propiedad `maxValue` especifica la fecha y hora más tardía que se puede introducir. Si introduces un valor fuera de estos límites, el componente cambia su vista, como en el caso de un estado de validación inválido.

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

### Deshabilitado

El estado de `DatePicker` en el que no quieres que el usuario pueda interactuar con el componente.

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

`readOnly` es un atributo booleano que, cuando se establece en `true`, hace que el componente `DatePicker` sea inmutable para el usuario. Esto significa que, aunque la entrada mostrará su valor actual, los usuarios no podrán cambiarlo.

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

El estado de `DatePicker` en el que deseas indicar una entrada incorrecta del usuario. Para cambiar la apariencia de `DatePicker`, utiliza la propiedad `validationState` con el valor `"invalid"`. Se puede añadir un texto de mensaje opcional a través de la propiedad `errorMessage`. El texto del mensaje se renderizará debajo del componente.

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

Esta prop te permite proporcionar una breve indicación que describe el valor esperado del campo de entrada. Esta indicación se muestra dentro del campo de entrada antes de que el usuario introduzca un valor y desaparece al introducir texto.

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

Permite colocar la etiqueta en la parte izquierda del campo. La etiqueta puede ocupar como máximo la mitad del ancho total del espacio de `DatePicker`.

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

### Botón de borrar

`hasClear` es una prop booleana que proporciona a los usuarios la capacidad de borrar rápidamente el contenido del campo de entrada.

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

La prop `format` es una cadena que define el formato de fecha y hora que el componente `DatePicker` aceptará y mostrará. Esta prop determina cómo se presentan visualmente la fecha y la hora al usuario y cómo se espera que se formatee la entrada del usuario. [Formatos disponibles](https://day.js.org/docs/en/display/format)

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

### Analizador de fechas personalizado

Puedes proporcionar una función de análisis personalizada para manejar cadenas de fechas pegadas a través de la prop `parseDateFromString`. Esto es útil cuando necesitas admitir formatos de fecha específicos o una lógica de análisis personalizada que difiere del comportamiento predeterminado.

<!--GITHUB_BLOCK-->

```tsx
import {dateTime} from '@gravity-ui/date-utils';

const customParser = (dateStr: string, format: string, timeZone?: string) => {
  // Custom parsing logic
  // For example, handle DD/MM/YYYY format specifically
  if (dateStr.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
    const [day, month, year] = dateStr.split('/');
    return dateTime({input: `${year}-${month}-${day}`, timeZone});
  }
  // Fallback to default parsing
  return dateTime({input: dateStr, format, timeZone});
};

<DatePicker parseDateFromString={customParser} />;
```

<!--/GITHUB_BLOCK-->

## Zona horaria

`timeZone` es la propiedad para establecer la zona horaria del valor en la entrada. [Más información sobre zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Personalización

Si deseas utilizar un componente de calendario personalizado dentro de `DatePicker`, puedes pasarlo como `children` con props similares a las de un calendario.

<!--LANDING_BLOCK
[Learn more about calendar](https://gravity-ui.com/components/date-components/calendar)
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about calendar](https://github.com/gravity-ui/date-components/blob/main/src/components/Calendar/README.md)

<!--/GITHUB_BLOCK-->

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
