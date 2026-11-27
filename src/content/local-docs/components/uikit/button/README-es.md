Los botones actúan como un disparador para ciertas acciones. Si bien este es su propósito principal, en casos muy raros, se pueden usar como enlaces para navegar a otras páginas.

```tsx
import {Button} from '@gravity-ui/uikit';
```

## Apariencia

Hay cuatro tipos de `Button` en términos de apariencia: básico, contorneado, plano y de contraste.
La apariencia del `Button` está determinada por la propiedad `view`.

### Básico

`action`: El tipo de `Button` más distintivo. Se utiliza para la acción principal en una pantalla que requiere la mayor atención.
Recomendamos usar solo un botón de este tipo por página.

`normal`: Tipo predeterminado de `Button` diseñado para acciones secundarias o para mantener la importancia de una acción sin llamar demasiado la atención sobre ella.

`raised`: Colocado sobre el contenido como un elemento flotante, generalmente con una ubicación fija.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Contorneado

`outlined`: Se utiliza para acciones secundarias que requieren menos atención. Se puede usar con o sin un botón principal; en el primer caso, debe ser uno enfatizado.

`outlined-action`: Generalmente se usa como un enlace a otra página o recurso externo.

Este tipo también tiene variaciones semánticas que se pueden usar cuando se necesita semántica adicional: `outlined-info`, `outlined-success`, `outlined-warning` y `outlined-danger`.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Plano

`flat`: Se utiliza para acciones auxiliares que requieren la menor atención. A menudo se usa en una lista de botones o iconos de acción (sin texto) en un editor.

`flat-secondary`: Menos enfatizado que el botón `flat`. A menudo se usa como un botón secundario en cuadros de diálogo y ventanas modales.

`flat-action`: Generalmente se usa como un enlace a otra página o recurso externo.

También tiene variaciones semánticas que se pueden usar cuando se necesita semántica adicional: `outlined-info`, `outlined-success`, `outlined-warning` y `outlined-danger`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Contraste

`contrast` es oscuro en el tema claro y claro en el tema oscuro. `contrast-inverted` invierte esos colores. `contrast-light` permanece claro y `contrast-dark` permanece oscuro en ambos temas.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Iconos

Para agregar un icono a un `Button`, use el componente [`Icon`](../Icon), que es un envoltorio especial para SVGs. El tamaño del icono se selecciona automáticamente según el tamaño del `Button`. Establezca explícitamente el `size`, `width` o `height` del `Icon` para anularlo.

Para dimensionar un icono personalizado según el tamaño del `Button`, use la función de renderizado `Button.Icon`:

```tsx
<Button size="l">
  <Button.Icon>{({size}) => <CustomIcon size={size} />}</Button.Icon>
  Action
</Button>
```

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Estados

Un `Button` puede tener diferentes estados:

`disabled`: Cuando el botón no está disponible por alguna razón.

`loading`: Cuando se están ejecutando procesos asíncronos en segundo plano.

`selected`: Cuando el usuario puede **Habilitar** y **Deshabilitar** el botón.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Disparador de menú

El `Button` cambia automáticamente su apariencia cuando se pasan los atributos aria correspondientes (`aria-haspopup`, `aria-expanded`):

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Tamaño

Use la propiedad `size` para administrar el tamaño del `Button`. El tamaño predeterminado es `m`.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## Ancho

Use la propiedad `width` para administrar cómo se comporta el `Button` dentro del contenedor:

`auto`: Limita el ancho máximo del `Button` ocultando el contenido que se desborda con puntos suspensivos.

`max`: Hace coincidir el ancho del `Button` con el ancho del contenedor padre, ocultando también el contenido que se desborda con puntos suspensivos.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

## Pin

La propiedad `pin` le permite administrar la forma de los bordes _inicial_ y _final_ y generalmente se usa para combinar varios botones en una sola unidad.
El valor de la propiedad `pin` consta de los nombres de estilo _inicial_ y _final_ separados por un guion, por ejemplo, `round-brick`.
Los estilos de borde son: `round` (predeterminado), `circle`, `brick` y `clear`.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

## Propiedades

`Button` acepta cualquier prop válido de elemento `button` o `a` además de estas:

| Nombre      | Descripción                                                          |              Tipo               |     Predeterminado     |
| :---------- | :------------------------------------------------------------------- | :-----------------------------: | :--------------------: |
| children  | Contenido de `Button`. Puedes usar texto y el componente `<Icon/>`. |        `React.ReactNode`        |                        |
| component | Sobrescribe el componente raíz                                         |       `React.ElementType`       |                        |
| disabled  | Activa/desactiva el estado `disabled`                                |            `boolean`            |         `false`        |
| href      | Pasa esto para hacer que el componente raíz sea un enlace            |            `string`             |                        |
| loading   | Activa/desactiva el estado `loading`                                 |            `boolean`            |         `false`        |
| pin       | Establece el estilo del borde de `Button`                            |            `string`             |     `"round-round"`    |
| qa        | Atributo HTML `data-qa`, usado para pruebas                          |            `string`             |                        |
| selected  | Activa/desactiva el estado `selected`                                |            `boolean`            |                        |
| size      | Establece el tamaño de `Button`                                      | `"xs"` `"s"` `"m"` `"l"` `"xl"` |         `"m"`          |
| view      | Establece la apariencia de `Button`                                  |          `ButtonView`           |      `"normal"`      |
| width     | Controla cómo `Button` usa el espacio del padre                      |        `"auto"` `"max"`         |                        |

## API CSS

| Nombre                                | Descripción               |
| :---------------------------------- | :------------------------ |
| `--g-button-text-color`             | Color del texto           |
| `--g-button-text-color-hover`       | Color del texto al pasar el ratón por encima |
| `--g-button-background-color`       | Color de fondo            |
| `--g-button-background-color-hover` | Color de fondo al pasar el ratón por encima |
| `--g-button-border-width`           | Ancho del borde           |
| `--g-button-border-color`           | Color del borde           |
| `--g-button-border-style`           | Estilo del borde          |
| `--g-button-focus-outline-width`    | Ancho del contorno de foco |
| `--g-button-focus-outline-color`    | Color del contorno de foco |
| `--g-button-focus-outline-style`    | Estilo del contorno de foco |
| `--g-button-focus-outline-offset`   | Desplazamiento del contorno de foco |
| `--g-button-height`                 | Altura (altura de línea)  |
| `--g-button-padding`                | Rellenos laterales        |
| `--g-button-border-radius`          | Radio del borde           |
| `--g-button-font-size`              | Tamaño de fuente del texto |
| `--g-button-icon-space`             | Espacio disponible para el icono |
| `--g-button-icon-offset`            | Desplazamiento del icono  |