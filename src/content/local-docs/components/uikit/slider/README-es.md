El slider es un componente React personalizable y responsivo que permite a los usuarios seleccionar un único valor o un rango de valores de un conjunto de datos especificado.

```tsx
import {Slider} from '@gravity-ui/uikit';
```

## Variaciones de Slider

### Slider único

Este es un slider con un control deslizante para seleccionar un único valor. Se utiliza por defecto.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Slider de rango

Este es un slider con dos controles deslizantes para seleccionar un rango. Para usarlo, establezca `defaultValue` (para un slider no controlado) o `value` (para uno controlado) para la matriz.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Estados

### Deshabilitado

Este es un estado de un `Slider` en el que no desea permitir que el usuario interactúe con este componente.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Error

Este estado de `Slider` es para entradas de usuario incorrectas. Para cambiar la apariencia del `Slider`, use la propiedad `validationState` con el valor `"invalid"`. Opcionalmente, puede proporcionar un mensaje de error a través de la propiedad `errorMessage`. El texto de este mensaje se renderizará debajo del slider.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Tamaño

Use la propiedad `size` para administrar el tamaño del `Slider`. El tamaño predeterminado es `m`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Valor

### Valor mínimo y máximo

Las propiedades `min` y `max` definen los límites del rango que el `Slider` puede manejar. Estas propiedades son esenciales para establecer los límites de los valores seleccionables.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Paso

La propiedad `step` determina los incrementos dentro del rango de valor mínimo y máximo. Esto significa cuánto cambia el valor con un solo movimiento del slider.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### Marcas

La propiedad `marks` se utiliza en el componente `Slider` para especificar marcadores visuales a lo largo del slider que ayudan a indicar varios puntos entre el valor mínimo y máximo. Esta propiedad mejora la usabilidad y la interfaz visual del slider, especialmente para denotar intervalos específicos. Por defecto son 2 (valores `min` y `max`). Puede usarla de 2 maneras diferentes:

- la cantidad de marcadores visuales a lo largo del slider

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

- la matriz de valores de marcadores a lo largo del slider

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

El valor `0` o la matriz vacía `[]` en la propiedad `marks` ocultan todas las marcas del `Slider`.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

> El valor de la marca está disponible para su selección, incluso si no coincide con la condición del valor `step`.

Puede cambiar el formato de visualización de los valores de las marcas utilizando la propiedad `marksFormat`.

#### Definir valores disponibles

Puede establecer la propiedad `step` en `null` para definir un conjunto de valores específicos que el slider puede manejar, en lugar de un rango continuo. Esto es particularmente útil cuando solo ciertos valores discretos son válidos para la selección. En ese caso, las propiedades `min`, `max` y `marks` permiten especificar una matriz de números que representan los valores exactos que los usuarios pueden seleccionar usando el `Slider`.

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

## Punto de inicio

La propiedad `startPoint` le permite establecer el punto de inicio de la pista. Utiliza el valor mínimo del `Slider` por defecto. Se ignorará si utiliza `Slider` con valores de rango o si establece la propiedad `inverted`.

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

## Invertido

La propiedad `inverted` le permite establecer la vista invertida de la pista del `Slider`.
Por defecto (de `false`), el `Slider` muestra el intervalo de `min` al control deslizante.
Si es `true`, indica el intervalo desde el control deslizante hasta `max`.
Solo para `Slider` único. La propiedad `startPoint` se ignorará.

GRAVITY_TRANSLATION_BLOCK_24_END

GRAVITY_TRANSLATION_BLOCK_25_END

## Tooltip

La propiedad `tooltipDisplay` se utiliza en el componente `Slider` para controlar el comportamiento de visualización de un tooltip que muestra el valor actual mientras el usuario interactúa con el slider. El valor `auto` muestra el tooltip solo cuando el cursor se cierne o enfoca los controles deslizantes del `Slider`.

GRAVITY_TRANSLATION_BLOCK_26_END

GRAVITY_TRANSLATION_BLOCK_27_END

Puede cambiar el formato de visualización del valor del tooltip utilizando la propiedad `tooltipFormat`. Si no especifica `tooltipformat`, se utilizará `marksFormat` para mostrar el valor en el tooltip.

## Propiedades

| Nombre                               | Descripción                                                                                                                                                                              |                         Tipo                         | Por defecto |
| :--------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------: | :-----: |
| apiRef                             | Ref a las props del componente Slider para foco y desenfoque                                                                                                                             |                `RefObject<SliderRef>`                |         |
| autoFocus                          | El atributo `autofocus` del control                                                                                                                                                      |                      `boolean`                       |         |
| className                          | El nombre de clase del contenedor del control                                                                                                                                            |                       `string`                       |         |
| [defaultValue](#slider-variations) | El valor por defecto del control, usado cuando el componente no está controlado. Usa el valor mínimo de `Slider` por defecto.                                                              |             `number` `[number, number]`              |         |
| [disabled](#disabled)              | Indica que el usuario no puede interactuar con el control                                                                                                                                |                      `boolean`                       | `false` |
| [errorMessage](#error)             | Texto de un error a mostrar                                                                                                                                                              |                       `string`                       |         |
| [marks](#marks)                    | Marcas de texto debajo del slider. Puede configurarse con la cantidad de marcas del slider, o con un array de valores que deben tener marcas. El valor `0` o un array vacío oculta todas las marcas. |                 `number` `number[]`                  |   `2`   |
| [marksFormat](#marks)              | Formateador para el valor mostrado de la marca                                                                                                                                            |             `(value: number) => string`              |         |
| [max](#minimum-and-maximum-value)  | El valor máximo del componente.                                                                                                                                                          |                       `number`                       |  `100`  |
| [min](#minimum-and-maximum-value)  | El valor mínimo del componente.                                                                                                                                                          |                       `number`                       |   `0`   |
| onBlur                             | Se dispara cuando el control pierde el foco. Proporciona el evento de foco como argumento de la callback.                                                                               | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |         |
| onUpdate                           | Se dispara cuando el valor del slider es cambiado por el usuario. Proporciona el evento de cambio como argumento de la callback.                                                         |   `((value: number \| [number, number]) => void)`    |         |
| onUpdateComplete                   | Se dispara cuando se activa `ontouchend` o `onmouseup`. Proporciona el evento de cambio como argumento de la callback.                                                                 |   `((value: number \| [number, number]) => void)`    |         |
| onFocus                            | Se dispara cuando el control obtiene el foco. Proporciona el evento de foco como argumento de la callback.                                                                               | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |         |
| [size](#size)                      | El tamaño del control                                                                                                                                                                    |               `"s"` `"m"` `"l"` `"xl"`               |  `"m"`  |
| [step](#step)                      | Valor a sumar o restar en cada paso que da el slider. Puede configurarse a `null` para usar las `marks` como pasos.                                                                     |                   `number` `null`                    |   `1`   |
| [startPoint](#start-point)         | Punto de inicio de la barra. Ignorado para sliders de rango y para sliders invertidos.                                                                                                   |                       `number`                       |         |
| [inverted](#inverted)              | Slider con barra invertida (desde el manejador hasta `max`).                                                                                                                             |                      `boolean`                       |         |
| tabIndex                           | El atributo `tabIndex` del control                                                                                                                                                       |             `number` `[number, number]`              |         |
| [tooltipDisplay](#tooltip)         | El comportamiento de visualización del tooltip                                                                                                                                           |                  `off` `on` `auto`                   |  `off`  |
| [tooltipFormat](#tooltip)          | Formateador para el valor mostrado del tooltip. Usa `marksFormat` si no está configurado.                                                                                                 |             `(value: number) => string`              |         |
| [validationState](#error)          | Estado de validación                                                                                                                                                                     |                     `"invalid"`                      |         |
| [value](#slider-variations)        | El valor del control                                                                                                                                                                     |             `number` `[number, number]`              |         |