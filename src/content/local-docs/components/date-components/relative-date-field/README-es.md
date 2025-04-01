<!--GITHUB_BLOCK-->

# RelativeDateField

<!--/GITHUB_BLOCK-->

```tsx
import {RelativeDateField} from '@gravity-ui/date-components';
```

`RelativeDateField` el componente se usa solo para introducir fechas relativas. No se puede usar como «normal» `DateField`.

## Entrada relativa

El componente obtiene los valores en un formato relativo especial. Establece valores como fórmulas que le ayudarán a calcular la fecha exacta. Podemos llamarlo `grafana-like format` porque es muy similar al formato de los campos de tiempo relativo de Grafana. Para obtener más información sobre los valores de tiempo relativo en Grafana, lea [los documentos](https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/).

Con este modo, puede entregar los datos del origen al destino y calcular el valor exacto directamente en el punto final necesario sin imprecisiones.

## Reglas de entrada válidas

- un valor debe partir de una palabra clave `now`
- la expresión de fecha relativa en común se ve así: `now${operand}${count}${unit}`
- valores disponibles para `operand`:
  - `-`- resta
  - `+`- adición
  - `/`- llevando al inicio de la `unit`
- valores válidos de `count` - cualquier número natural
- valores válidos de `unit`:
  - `d`- día
  - `w`- semana
  - `M`- mes
  - `Q`- cuarto
  - `y`- año
  - `h`- hora
  - `m`- minuto

### Ejemplos de uso

> `now-1d`
>
> `now/w`
>
> `now+10d-5d/M`

## Propiedades

| Nombre                | Descripción                                                                                                                              |                      Tipo                       | Predeterminado  |
| :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------: | :-------------: |
| aria, descrita por    | El `aria-describedby` atributo del control                                                                                               |                    `string`                     |                 |
| detalles de aria      | El `aria-details` atributo del control                                                                                                   |                    `string`                     |                 |
| etiqueta aria         | El `aria-label` atributo del control                                                                                                     |                    `string`                     |                 |
| aria - etiquetada por | El `aria-labelledby` atributo del control                                                                                                |                    `string`                     |                 |
| autoFocus             | El `autofocus` atributo del control                                                                                                      |                    `boolean`                    |                 |
| className             | El nombre de la clase contenedora del control                                                                                            |                    `string`                     |                 |
| defaultValue          | Establece el valor inicial del componente no controlado.                                                                                 |                    `string`                     |                 |
| inhabilitado          | Indica que el usuario no puede interactuar con el control                                                                                |                    `boolean`                    |     `false`     |
| errorMessage          | Texto de error                                                                                                                           |                   `ReactNode`                   |                 |
| hasClear              | Muestra el icono para borrar el valor del control                                                                                        |                    `boolean`                    |     `false`     |
| hasTime               | Mostrar campo de tiempo en popupvalue                                                                                                    |                    `boolean`                    |     `false`     |
| identificación        | El `id` atributo del control                                                                                                             |                    `string`                     |                 |
| etiqueta              | Texto de ayuda representado a la izquierda del nodo de entrada                                                                           |                    `string`                     |                 |
| leftContent           | El nodo del usuario`renderizado antes de la etiqueta y la entrada                                                                        |                `React.ReactNode`                |                 |
| onBlur                | Se dispara cuando el control pierde el foco. Proporciona un evento de enfoque como argumento de devolución de llamada                    | `(e: focusEvent<Element, Element> () => vacío)` |                 |
| onFocus               | Se dispara cuando el control se enfoca. Proporciona un evento de enfoque como argumento de devolución de llamada                         | `(e: focusEvent<Element, Element> () => vacío)` |                 |
| onKeyDown             | Se dispara cuando se pulsa una tecla. Proporciona un evento de teclado como argumento de devolución de llamada                           |     `(e: KeyboardEvent<Element>) = nulo)>`      |                 |
| onKeyUp               | Se dispara cuando se suelta una tecla. Proporciona un evento de teclado como argumento de devolución de llamada                          |     `(e: KeyboardEvent<Element>) = nulo)>`      |                 |
| onUpdate              | Se activa cuando el usuario cambia el valor. Proporciona un nuevo valor como argumento de devolución de llamada                          |        `(valor: cadena\| nulo) => nulo`         |                 |
| alfiler               | Redondeo de esquinas                                                                                                                     |                    `string`                     | `'round-round'` |
| marcador de posición  | Texto que aparece en el control cuando no tiene ningún valor establecido                                                                 |                    `string`                     |                 |
| readOnly              | Si el valor del componente es inmutable.                                                                                                 |                    `boolean`                    |     `false`     |
| rightContent          | El nodo del usuario`se representa después del nodo de entrada y el botón de borrar                                                       |                `React.ReactNode`                |                 |
| tamaño                | El tamaño del control                                                                                                                    |                  `"s"` `"xl"`                   |      `"m"`      |
| estilo                | Establece el estilo en línea del elemento.                                                                                               |                 `CSSProperties`                 |                 |
| timeZone              | Establece la zona horaria. [Más información sobre las zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                    `string`                     |                 |
| validationState       | Estado de validación                                                                                                                     |                   `"invalid"`                   |                 |
| valor                 | El valor del control                                                                                                                     |                 `string` `null`                 |                 |
| vista                 | La vista del control                                                                                                                     |              `"normal"` `"clear"`               |   `"normal"`    |
