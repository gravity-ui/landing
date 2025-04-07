<!--GITHUB_BLOCK-->

# DateField

<!--/GITHUB_BLOCK-->

```tsx
import {DateField} from '@gravity-ui/date-components';
```

`DateField` component es un campo de entrada versátil y conveniente diseñado específicamente para la entrada de fechas en aplicaciones React. Con una interfaz intuitiva y una integración sencilla, es perfecto para cualquier formulario que requiera introducir fecha u hora, como planificadores de eventos, sistemas de reservas o informes basados en datos. Se puede controlar si se establece la `value` propiedad. O puede estar descontrolado si no establece ningún valor, pero en este caso puede administrar el estado inicial con una propiedad `defaultValue` opcional. El componente no está controlado de forma predeterminada.

### Adición útil

Para establecer las fechas en el formato correcto, es posible que deba incluir ayudantes adicionales de la biblioteca de [Date Utils](https://gravity-ui.com/libraries/date-utils).

```tsx
import {dateTimeParse} from '@gravity-ui/date-utils';
```

## Apariencia

La apariencia de `DateField` está controlada por `size` las `pin` propiedades `view` y.

### Tamaño

Para controlar el tamaño del `DateField` uso de la `size` propiedad. El tamaño predeterminado es `m`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField size="s" />
<DateField size="m" />
<DateField size="l" />
<DateField size="xl" />
`}
>
    <DateComponents.DateField size="s" />
    <DateComponents.DateField size="m" />
    <DateComponents.DateField size="l" />
    <DateComponents.DateField size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField size="s" />
<DateField size="m" />
<DateField size="l" />
<DateField size="xl" />
```

<!--/GITHUB_BLOCK-->

### Ver

`normal`- la vista principal de `DateField` (utilizada de forma predeterminada).

<!--LANDING_BLOCK
<ExampleBlock code={`<DateField />`}>
    <DateComponents.DateField />
</ExampleBlock>
LANDING_BLOCK-->

`clear`- vista `DateField` sin bordes visibles (se puede usar con un envoltorio personalizado)

<!--LANDING_BLOCK
<ExampleBlock code={`<DateField view="clear" />`}>
    <DateComponents.DateField view="clear" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField view="normal" />
<DateField view="clear" />
```

<!--/GITHUB_BLOCK-->

### Alfiler

La `pin` propiedad permite controlar la forma de los bordes derecho e izquierdo y, por lo general, se usa para combinar varios controles en una sola unidad.
El valor de la `pin` propiedad consiste en los nombres de los estilos izquierdo y de borde divididos por un guión, `"round-brick"` p. ej.
Los estilos de arista son: `round` (predeterminado) `brick` y `clear`. `circle`

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField pin="round-brick" />
<DateField pin="brick-brick" />
<DateField pin="brick-round" />
`}
>
    <DateComponents.DateField pin="round-brick" />
    <DateComponents.DateField pin="brick-brick" />
    <DateComponents.DateField pin="brick-round" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField pin="round-brick" />
<DateField pin="brick-brick" />
<DateField pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## Valor

### Valor mínimo y máximo

La `minValue` propiedad permite especificar la fecha y la hora más tempranas que puede introducir el usuario. Por el contrario, la `maxValue` propiedad especifica la fecha y la hora más recientes que se pueden introducir. Si ingresas el valor fuera de estos límites, el componente cambia su vista, como en el caso de un estado de validación no válido.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField minValue={dateTimeParse('01.01.2024')} placeholder={"minValue: '01.01.2024'"}/>
<DateField maxValue={dateTimeParse('01.01.2025')} placeholder={"maxValue: '01.01.2025'"}/>
`}
>
    <DateComponentsExamples.DateFieldExample minValue={'01.01.2024'} placeholder={"minValue: '01.01.2024'"} />
    <DateComponentsExamples.DateFieldExample maxValue={'01.01.2025'} placeholder={"maxValue: '01.01.2025'"} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx

<DateField minValue={dateTimeParse('01.01.2024')} />
<DateField maxValue={dateTimeParse('01.01.2025')} />
```

<!--/GITHUB_BLOCK-->

## Estados

### Discapacitado

El estado en el `DateField` que no desea que el usuario pueda interactuar con el componente.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField disabled={true} defaultValue={dateTimeParse(new Date())} />
`}
>
    <DateComponentsExamples.DateFieldExample disabled={true} defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField disabled defaultValue={dateTimeParse(new Date())} />
```

<!--/GITHUB_BLOCK-->

### Solo lectura

`readOnly` es un atributo booleano que, cuando se establece en verdadero, hace que el `DateField` componente sea inmutable para el usuario. Esto significa que, si bien la entrada mostrará su valor actual, los usuarios no podrán cambiarla.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField readOnly defaultValue={dateTimeParse(new Date())} />
`}
>
    <DateComponentsExamples.DateFieldExample readOnly defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField readOnly defaultValue={dateTimeParse(new Date())} />
```

<!--/GITHUB_BLOCK-->

### Error

El estado `DateField` en el que desea indicar una entrada de usuario incorrecta. Para cambiar el `DateField` aspecto, utilice la `validationState` propiedad con el `"invalid"` valor. Se puede agregar un texto de mensaje opcional a través de la `errorMessage` propiedad. El texto del mensaje se mostrará en el componente.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField errorMessage="Error message" validationState="invalid" />
<DateField validationState="invalid" />
`}
>
    <DateComponents.DateField errorMessage="Error message" validationState="invalid" />
    <DateComponents.DateField validationState="invalid" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField errorMessage="Error message" validationState="invalid" />
<DateField validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## Contenido adicional

### Marcador de posición

Este accesorio le permite proporcionar una breve sugerencia que describa el valor esperado del campo de entrada. Esta sugerencia se muestra en el campo de entrada antes de que el usuario introduzca un valor y desaparece al introducir el texto.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField placeholder='Placeholder' />
`}
>
    <DateComponents.DateField placeholder='Placeholder' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField placeholder="Placeholder" />
```

<!--/GITHUB_BLOCK-->

### Etiqueta

Le permite colocar la etiqueta en la parte izquierda del campo. La etiqueta no puede ocupar más de la mitad del ancho de todo el espacio de `DateField`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField label="Label" />
<DateField label="Very long label with huge amount of symbols" />
`}
>
    <DateComponents.DateField label="Label" />
    <DateComponents.DateField label="Very long label with huge amount of symbols" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField label="Label" />
```

<!--/GITHUB_BLOCK-->

### Botón Borrar

`hasClear` es un accesorio booleano que brinda a los usuarios la posibilidad de borrar rápidamente el contenido del campo de entrada.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<DateField hasClear />`}
>
    <DateComponents.DateField
        hasClear
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField hasClear />
```

<!--/GITHUB_BLOCK-->

### Iniciar contenido

Le permite agregar contenido a la parte inicial del campo. Se coloca antes que todos los demás componentes.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<DateField label="Label" startContent={<Label size="s">Start content</Label>} />`}
>
    <DateComponents.DateField
        label="Label"
        startContent={<UIKit.Label size="s">Start content</UIKit.Label>}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField label="Label" startContent={<Label>Start content</Label>} />
```

<!--/GITHUB_BLOCK-->

### Contenido final

Le permite agregar contenido a la parte final del campo. Se coloca después de todos los demás componentes.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<DateField endContent={<Label size="s">End content</Label>} hasClear/>`}
>
    <DateComponents.DateField
        hasClear
        endContent={<UIKit.Label size="s">End content</UIKit.Label>}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField hasClear endContent={<Label>End content</Label>} />
```

<!--/GITHUB_BLOCK-->

## Formato

El `format` accesorio es una cadena que define el formato de fecha y hora que el `DateField` componente aceptará y mostrará. Este accesorio determina cómo se presentan visualmente la fecha y la hora al usuario y cómo se espera que se formatee la entrada del usuario. [Formatos disponibles](https://day.js.org/docs/en/display/format)

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField format='LTS' />
`}
>
    <DateComponents.DateField format='LTS' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField format="LTS" />
```

<!--/GITHUB_BLOCK-->

## Zona horaria

`timeZone` es la propiedad para establecer la zona horaria del valor de la entrada. [Más información sobre las zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Propiedades

| Nombre                | Descripción                                                                                                                              |                      Tipo                       |      Predeterminado       |
| :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------: | :-----------------------: |
| aria, descrita por    | El `aria-describedby` atributo del control                                                                                               |                    `string`                     |                           |
| detalles de aria      | El `aria-details` atributo del control                                                                                                   |                    `string`                     |                           |
| etiqueta aria         | El `aria-label` atributo del control                                                                                                     |                    `string`                     |                           |
| aria - etiquetada por | El `aria-labelledby` atributo del control                                                                                                |                    `string`                     |                           |
| autoFocus             | El `autofocus` atributo del control                                                                                                      |                    `boolean`                    |                           |
| className             | El nombre de la clase contenedora del control                                                                                            |                    `string`                     |                           |
| defaultValue          | Establece el valor inicial del componente no controlado.                                                                                 |                   `DateTime`                    |                           |
| inhabilitado          | Indica que el usuario no puede interactuar con el control                                                                                |                    `boolean`                    |          `false`          |
| errorMessage          | Texto de error                                                                                                                           |                   `ReactNode`                   |                           |
| formato               | Formato de la fecha cuando se representa en la entrada. [Formatos disponibles](https://day.js.org/docs/en/display/format)                |                    `string`                     |                           |
| hasClear              | Muestra el icono para borrar el valor del control                                                                                        |                    `boolean`                    |          `false`          |
| identificación        | El `id` atributo del control                                                                                                             |                    `string`                     |                           |
| isDateUnavailable     | Llamada que se solicita para cada fecha del calendario. Si se devuelve verdadero, significa que la fecha no está disponible.             |         `((date: DateTime) => boolean)`         |                           |
| etiqueta              | Texto de ayuda representado a la izquierda del nodo de entrada                                                                           |                    `string`                     |                           |
| startContent          | El nodo del usuario`renderizado antes de la etiqueta y la entrada                                                                        |                `React.ReactNode`                |                           |
| maxValue              | La fecha máxima permitida que puede seleccionar un usuario.                                                                              |                   `DateTime`                    |                           |
| minValue              | La fecha mínima permitida que un usuario puede seleccionar.                                                                              |                   `DateTime`                    |                           |
| onBlur                | Se dispara cuando el control pierde el foco. Proporciona un evento de enfoque como argumento de devolución de llamada                    | `(e: focusEvent<Element, Element> () => vacío)` |                           |
| onFocus               | Se dispara cuando el control se enfoca. Proporciona un evento de enfoque como argumento de devolución de llamada                         | `(e: focusEvent<Element, Element> () => vacío)` |                           |
| onKeyDown             | Se dispara cuando se pulsa una tecla. Proporciona un evento de teclado como argumento de devolución de llamada                           |     `(e: KeyboardEvent<Element>) = nulo)>`      |                           |
| onKeyUp               | Se dispara cuando se suelta una tecla. Proporciona un evento de teclado como argumento de devolución de llamada                          |     `(e: KeyboardEvent<Element>) = nulo)>`      |                           |
| onUpdate              | Se activa cuando el usuario cambia el valor. Proporciona un nuevo valor como argumento de devolución de llamada                          |      `(valor: Fecha/hora\| nulo) => nulo`       |                           |
| alfiler               | Redondeo de esquinas                                                                                                                     |                    `string`                     |      `'round-round'`      |
| marcador de posición  | Texto que aparece en el control cuando no tiene ningún valor establecido                                                                 |                    `string`                     |                           |
| placeholderValue      | Un marcador de fecha que controla los valores predeterminados de cada segmento cuando el usuario interactúa con ellos por primera vez.   |                   `DateTime`                    | `today's date at midnigh` |
| readOnly              | Si el valor del componente es inmutable.                                                                                                 |                    `boolean`                    |          `false`          |
| endContent            | El nodo del usuario`se representa después del nodo de entrada y el botón de borrar                                                       |                `React.ReactNode`                |                           |
| tamaño                | El tamaño del control                                                                                                                    |                  `"s"` `"xl"`                   |           `"m"`           |
| estilo                | Establece el estilo en línea del elemento.                                                                                               |                 `CSSProperties`                 |                           |
| timeZone              | Establece la zona horaria. [Más información sobre las zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                    `string`                     |                           |
| validationState       | Estado de validación                                                                                                                     |                   `"invalid"`                   |                           |
| valor                 | El valor del control                                                                                                                     |                `DateTime` `null`                |                           |
| vista                 | La vista del control                                                                                                                     |              `"normal"` `"clear"`               |        `"normal"`         |
