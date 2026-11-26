GRAVITY_TRANSLATION_BLOCK_0_END

```tsx
import {RelativeDateField} from '@gravity-ui/date-components';
```

El componente `RelativeDateField` se utiliza únicamente para introducir fechas relativas. No se puede usar como un `DateField` "normal".

## Entrada relativa

El componente recibe valores en un formato relativo especial. Estableces valores como fórmulas que te ayudarán a calcular la fecha exacta. Podemos llamarlo `formato tipo Grafana` porque es muy similar al formato de los campos de tiempo relativo de Grafana. Para saber más sobre los valores de tiempo relativo en Grafana, lee [la documentación](https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/).

Usando este modo puedes entregar tus datos desde el origen al destino y calcular el valor exacto directamente en el endpoint necesario sin imprecisiones.

## Reglas de entrada válidas

- un valor debe comenzar con la palabra clave `now`
- la expresión de fecha relativa en común se ve así: `now${operador}${cantidad}${unidad}`
- valores disponibles para `operador`:
  - `-` - resta
  - `+` - suma
  - `/` - llevar al inicio de la `unidad`
- valores válidos de `cantidad` - cualquier número natural
- valores válidos de `unidad`:
  - `d` - día
  - `w` - semana
  - `M` - mes
  - `Q` - trimestre
  - `y` - año
  - `h` - hora
  - `m` - minuto

### Ejemplos de uso

> `now-1d`
>
> `now/w`
>
> `now+10d-5d/M`

## Propiedades

| Nombre             | Descripción                                                                                                          |                     Tipo                      |     Predeterminado     |
| :----------------- | :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :--------------------: |
| aria-describedby | El atributo `aria-describedby` del control                                                                           |                   `string`                    |                        |
| aria-details     | El atributo `aria-details` del control                                                                               |                   `string`                    |                        |
| aria-label       | El atributo `aria-label` del control                                                                                 |                   `string`                    |                        |
| aria-labelledby  | El atributo `aria-labelledby` del control                                                                            |                   `string`                    |                        |
| autoFocus        | El atributo `autofocus` del control                                                                                  |                   `boolean`                   |                        |
| className        | El nombre de clase del contenedor del control                                                                                     |                   `string`                    |                        |
| defaultValue     | Establece el valor inicial para el componente no controlado.                                                                   |                   `string`                    |                        |
| disabled         | Indica que el usuario no puede interactuar con el control                                                             |                   `boolean`                   |        `false`         |
| errorMessage     | Texto de error                                                                                                           |                  `ReactNode`                  |                        |
| hasClear         | Muestra el icono para borrar el valor del control                                                                          |                   `boolean`                   |        `false`         |
| hasTime          | Muestra el campo de hora en el valor emergente                                                                                        |                   `boolean`                   |        `false`         |
| id               | El atributo `id` del control                                                                                         |                   `string`                    |                        |
| label            | Texto de ayuda mostrado a la izquierda del nodo de entrada                                                                     |                   `string`                    |                        |
| leftContent      | El nodo del usuario mostrado antes de la etiqueta y la entrada                                                                      |               `React.ReactNode`               |                        |
| onBlur           | Se activa cuando el control pierde el foco. Proporciona el evento de foco como argumento de la función de devolución de llamada                                     | `((e: FocusEvent<Element, Element>) => void)` |                        |
| onFocus          | Se activa cuando el control obtiene el foco. Proporciona el evento de foco como argumento de la función de devolución de llamada                                     | `((e: FocusEvent<Element, Element>) => void)` |                        |
| onKeyDown        | Se activa cuando se presiona una tecla. Proporciona el evento del teclado como argumento de la función de devolución de llamada                                        |    `((e: KeyboardEvent<Element>) => void)`    |                        |
| onKeyUp          | Se activa cuando se suelta una tecla. Proporciona el evento del teclado como argumento de la función de devolución de llamada                                       |    `((e: KeyboardEvent<Element>) => void)`    |                        |
| onUpdate         | Se activa cuando el valor es cambiado por el usuario. Proporciona el nuevo valor como argumento de la función de devolución de llamada                            |      `((value: string \| null) => void`       |                        |
| pin              | Redondeo de esquinas                                                                                                      |                   `string`                    |     `'round-round'`    |
| placeholder      | Texto que aparece en el control cuando no tiene ningún valor establecido                                                            |                   `string`                    |                        |
| readOnly         | Si el valor del componente es inmutable.                                                                          |                   `boolean`                   |        `false`         |
| rightContent     | Nodo del usuario mostrado después del nodo de entrada y el botón de borrar                                                           |               `React.ReactNode`               |                        |
| size             | El tamaño del control                                                                                              |           `"s"` `"m"` `"l"` `"xl"`            |         `"m"`          |
| style            | Establece el estilo en línea para el elemento.                                                                                   |                `CSSProperties`                |                        |
| timeZone         | Establece la zona horaria. [Más información sobre zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                   `string`                    |                        |
| validationState  | Estado de validación                                                                                                     |                  `"invalid"`                  |                        |
| value            | El valor del control                                                                                             |                `string` `null`                |                        |
| view             | La vista del control                                                                                              |             `"normal"` `"clear"`              |       `"normal"`       |