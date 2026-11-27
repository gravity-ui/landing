<!--GITHUB_BLOCK-->

# Slider

<!--/GITHUB_BLOCK-->

El slider es un componente React personalizable y adaptable que permite a los usuarios seleccionar un único valor o un rango de valores de un conjunto de datos especificado.

```tsx
import {Slider} from '@gravity-ui/uikit';
```

## Variaciones de Slider

### Slider único

Este es un slider con un control deslizante para seleccionar un único valor. Se utiliza por defecto.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider />
```

<!--/GITHUB_BLOCK-->

### Slider de rango

Este es un slider con dos controles deslizantes para seleccionar un rango. Para usarlo, establezca `defaultValue` (para un slider no controlado) o `value` (para uno controlado) para la matriz.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider defaultValue={[20, 40]} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider defaultValue={[20, 40]} />
```

<!--/GITHUB_BLOCK-->

## Estados

### Deshabilitado

Este es un estado de un `Slider` en el que no desea permitir que el usuario interactúe con este componente.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider disabled />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider disabled={true} />
```

<!--/GITHUB_BLOCK-->

### Error

Este estado de `Slider` es para la entrada incorrecta del usuario. Para cambiar la apariencia del `Slider`, utilice la propiedad `validationState` con el valor `"invalid"`. Opcionalmente, puede proporcionar un mensaje de error a través de la propiedad `errorMessage`. El texto de este mensaje se mostrará debajo del slider.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider validationState="invalid" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider validationState="invalid" errorMessage="Error message" />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider validationState={"invalid"} />
<Slider validationState={"invalid"} errorMessage="Error message" />
```

<!--/GITHUB_BLOCK-->

## Tamaño

Utilice la propiedad `size` para gestionar el tamaño del `Slider`. El tamaño predeterminado es `m`.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider size="s" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="m" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="l" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="xl" />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider size="s" />
<Slider size="m" />
<Slider size="l" />
<Slider size="xl" />
```

<!--/GITHUB_BLOCK-->

## Valor

### Valor mínimo y máximo

Las propiedades `min` y `max` definen los límites del rango que puede manejar el `Slider`. Estas propiedades son esenciales para establecer los límites de los valores seleccionables.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider min={10} />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider max={50} />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider min={20} max={60} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider min={10} />
<Slider max={50} />
<Slider min={20} max={60} />
```

<!--/GITHUB_BLOCK-->

### Paso

La propiedad `step` determina los incrementos dentro del rango de valor mínimo y máximo. Esto significa cuánto cambia el valor con un solo movimiento del slider.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider step={10} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider step={10} />
```

<!--/GITHUB_BLOCK-->

### Marcas

La propiedad `marks` se utiliza en el componente `Slider` para especificar marcadores visuales a lo largo del slider que ayudan a indicar varios puntos entre el valor mínimo y máximo. Esta propiedad mejora la usabilidad y la interfaz visual del slider, especialmente para denotar intervalos específicos. Por defecto son 2 (valores `min` y `max`). Puede usarla de 2 maneras diferentes:

- la cantidad de marcadores visuales a lo largo del slider

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={11} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={11} />
```

<!--/GITHUB_BLOCK-->

- la matriz de valores de marcadores a lo largo del slider

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={[0, 50, 100]} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={[0, 50, 100]} />
```

<!--/GITHUB_BLOCK-->

El valor `0` o la matriz vacía `[]` en la propiedad `marks` ocultan todas las marcas del `Slider`.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={0} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={0} />
```

<!--/GITHUB_BLOCK-->

> El valor de la marca está disponible para su selección, incluso si no coincide con la condición del valor `step`.

Puede cambiar el formato de visualización de los valores de las marcas utilizando la propiedad `marksFormat`.

#### Definir valores disponibles

Puede establecer la propiedad `step` a `null` para definir un conjunto de valores específicos que el slider puede manejar, en lugar de un rango continuo. Esto es particularmente útil cuando solo ciertos valores discretos son válidos para la selección. En ese caso, las propiedades `min`, `max` y `marks` permiten especificar una matriz de números que representan los valores exactos que los usuarios pueden seleccionar utilizando el `Slider`.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={[10, 20, 50, 55, 65, 80]} step={null} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={[10, 20, 50, 55, 65, 80]} step={null} />
```

<!--/GITHUB_BLOCK-->

## Punto de inicio

La propiedad `startPoint` le permite establecer el punto de inicio de la pista. Utiliza el valor mínimo del `Slider` por defecto. Se ignorará si utiliza el `Slider` con valores de rango o si establece la propiedad `inverted`.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider startPoint={50} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider startPoint={50} />
```

<!--/GITHUB_BLOCK-->

## Invertido

La propiedad `inverted` le permite establecer la vista invertida de la pista del `Slider`.
Por defecto (de `false`), el `Slider` muestra el intervalo de `min` al control deslizante.
Si es `true`, indica el intervalo desde el pin hasta `max`.
Solo para `Slider` único. La propiedad `startPoint` se ignorará.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider inverted />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider inverted />
```

<!--/GITHUB_BLOCK-->

## Tooltip

La propiedad `tooltipDisplay` se utiliza en el componente `Slider` para controlar el comportamiento de visualización de un tooltip que muestra el valor actual mientras el usuario interactúa con el slider. El valor `auto` muestra el tooltip solo cuando el cursor se cierne o enfoca los controles deslizantes del `Slider`.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider tooltipDisplay="on" />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider tooltipDisplay="on" />
```

<!--/GITHUB_BLOCK-->

Puede cambiar el formato de visualización del valor del tooltip utilizando la propiedad `tooltipFormat`. Si no especifica `tooltipformat`, se utilizará `marksFormat` para mostrar el valor en el tooltip.

## Propiedades

| Nombre                             | Descripción                                                                                                                                                                              |                         Tipo                         | Por defecto |
| :------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------: | :-----: |
| apiRef                           | Ref a las props del componente Slider para foco y desenfoque                                                                                                                             |                `RefObject<SliderRef>`                |         |
| autoFocus                        | El atributo `autofocus` del control                                                                                                                                                      |                      `boolean`                       |         |
| className                        | El nombre de clase del contenedor del control                                                                                                                                            |                       `string`                       |         |
| [defaultValue](#slider-variants) | El valor por defecto del control, usado cuando el componente no está controlado. Usa el valor mínimo de `Slider` por defecto.                                                                   |             `number` `[number, number]`              |         |
| [disabled](#disabled)            | Indica que el usuario no puede interactuar con el control                                                                                                                                 |                      `boolean`                       | `false` |
| [errorMessage](#error)           | Texto de un error a mostrar                                                                                                                                                              |                       `string`                       |         |
| [marks](#marks)                  | Marcas de texto debajo del slider. Podría establecerse a la cantidad de marcas del slider, o podría establecerse a un array de valores que deberían tener marcas. El valor `0` o un array vacío oculta todas las marcas. |                 `number` `number[]`                  |   `2`   |
| [marksFormat](#marks)            | Formateador para el valor mostrado de la marca                                                                                                                                            |             `(value: number) => string`              |         |
| [max](#min-and-max-value)        | El valor máximo del componente.                                                                                                                                                      |                       `number`                       |  `100`  |
| [min](#min-and-max-value)        | El valor mínimo del componente.                                                                                                                                                      |                       `number`                       |   `0`   |
| onBlur                           | Se dispara cuando el control pierde el foco. Proporciona el evento de foco como argumento de la callback                                                                                                         | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |         |
| onUpdate                         | Se dispara cuando el valor del slider es cambiado por el usuario. Proporciona el evento de cambio como argumento de la callback                                                                                    |   `((value: number \| [number, number]) => void)`    |         |
| onUpdateComplete                 | Se dispara cuando se activa ontouchend o onmouseup. Proporciona el evento de cambio como argumento de la callback                                                                                         |   `((value: number \| [number, number]) => void)`    |         |
| onFocus                          | Se dispara cuando el control obtiene el foco. Proporciona el evento de foco como argumento de la callback                                                                                                         | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |         |
| [size](#size)                    | El tamaño del control                                                                                                                                                                  |               `"s"` `"m"` `"l"` `"xl"`               |  `"m"`  |
| [step](#step)                    | Valor a sumar o restar en cada paso que da el slider. Puede establecerse a `null` para usar las `marks` como pasos.                                                                            |                   `number` `null`                    |   `1`   |
| [startPoint](#start-point)       | Punto de inicio de la pista. Ignorado para sliders de rango y para sliders invertidos.                                                                                                              |                       `number`                       |         |
| [inverted](#inverted)            | Slider con pista invertida (desde el manejador hasta `max`).                                                                                                                                       |                      `boolean`                       |         |
| tabIndex                         | El atributo `tabIndex` del control                                                                                                                                                       |             `number` `[number, number]`              |         |
| [tooltipDisplay](#tooltip)       | El comportamiento de visualización del tooltip                                                                                                                                                          |                  `off` `on` `auto`                   |  `off`  |
| [tooltipFormat](#tooltip)        | Formateador para el valor mostrado del tooltip. Usa `marksFormat` si no se establece                                                                                                               |             `(value: number) => string`              |         |
| [validationState](#error)        | Estado de validación                                                                                                                                                                 |                     `"invalid"`                      |         |
| [value](#slider-variants)        | El valor del control                                                                                                                                                                 |             `number` `[number, number]`              |         |
