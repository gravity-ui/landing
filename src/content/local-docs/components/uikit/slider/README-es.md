<!--GITHUB_BLOCK-->

# Deslizador

<!--/GITHUB_BLOCK-->

```tsx
import {Slider} from '@gravity-ui/uikit';
```

El control deslizante es un componente de React personalizable y responsivo que permite a los usuarios seleccionar un solo valor o un rango de valores de un conjunto de datos específico.

## Variaciones del control deslizante

### Deslizador único

Se trata de un control deslizante con una manija para seleccionar un solo valor. Se usa de forma predeterminada.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider />
`}
>
    <UIKitExamples.SliderExample />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider />
```

<!--/GITHUB_BLOCK-->

### Control deslizante de rango

Este es un control deslizante con dos asas para seleccionar un rango. Para usarlo, defina `defaultValue` (para un control deslizante no controlado) o `value` (para uno controlado) para la matriz.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider defaultValue={[20, 40]} />
`}
>
    <UIKitExamples.SliderExample defaultValue={[20, 40]} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider defaultValue={[20, 40]} />
```

<!--/GITHUB_BLOCK-->

## Estados

### Discapacitado

Este es un estado en el `Slider` que no desea permitir que el usuario trabaje con este componente.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider disabled={true} />
`}
>
    <UIKitExamples.SliderExample disabled={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider disabled={true} />
```

<!--/GITHUB_BLOCK-->

### Error

Este `Slider` estado se debe a una entrada de usuario incorrecta. Para cambiar el `Slider` aspecto, utilice la `validationState` propiedad con el `"invalid"` valor. Si lo desea, puede proporcionar un mensaje de error a través de la `errorMessage` propiedad. El texto de este mensaje se mostrará debajo del control deslizante.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider validationState={"invalid"} />
<Slider validationState={"invalid"} errorMessage="Error message" />
`}
>
    <UIKitExamples.SliderExample validationState={"invalid"} />
    <UIKitExamples.SliderExample validationState={"invalid"} errorMessage="Error message" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider validationState={"invalid"} />
<Slider validationState={"invalid"} errorMessage="Error message" />
```

<!--/GITHUB_BLOCK-->

## Tamaño

Usa la `size` propiedad para administrar el `Slider` tamaño. El tamaño predeterminado es `m`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider size="s" />
<Slider size="m" />
<Slider size="l" />
<Slider size="xl" />
`}
>
    <UIKitExamples.SliderExample size="s" />
    <UIKitExamples.SliderExample size="m" />
    <UIKitExamples.SliderExample size="l" />
    <UIKitExamples.SliderExample size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

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

`max` Las propiedades `min` y definen los límites del rango que `Slider` pueden manejar. Estas propiedades son esenciales para establecer los límites de los valores seleccionables.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider min={10} />
<Slider max={50} />
<Slider min={20} max={60} />
`}
>
    <UIKitExamples.SliderExample min={10} />
    <UIKitExamples.SliderExample max={50} />
    <UIKitExamples.SliderExample min={20} max={60} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider min={10} />
<Slider max={50} />
<Slider min={20} max={60} />
```

<!--/GITHUB_BLOCK-->

### Paso

La `step` propiedad determina los incrementos dentro del rango de valores mínimo y máximo. Esto significa cuánto cambia el valor con un solo movimiento del cursor.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider step={10} />
`}
>
    <UIKitExamples.SliderExample step={10} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider step={10} />
```

<!--/GITHUB_BLOCK-->

### Marcas

La `marks` propiedad se utiliza en el `Slider` componente para especificar marcadores visuales a lo largo del control deslizante que ayudan a indicar varios puntos entre el valor mínimo y el máximo. Esta propiedad mejora la usabilidad y la interfaz visual del control deslizante, especialmente para indicar intervalos específicos. Por defecto es 2 (`min` y `max` valores). Puedes usarlo de 2 maneras diferentes:

- la cantidad de marcadores visuales a lo largo del control deslizante
<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider marks={11} />
`}
>
    <UIKitExamples.SliderExample marks={11} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={11} />
```

<!--/GITHUB_BLOCK-->

- la matriz de valores de marcadores a lo largo del control deslizante

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider marks={[0, 50, 100]} />
`}
>
    <UIKitExamples.SliderExample marks={[0, 50, 100]} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={[0, 50, 100]} />
```

<!--/GITHUB_BLOCK-->

`0` o un `[]` valor de matriz vacío en la `marks` propiedad oculta todas las marcas `Slider`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider marks={0} />
`}
>
    <UIKitExamples.SliderExample marks={0} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={0} />
```

<!--/GITHUB_BLOCK-->

> El valor de la marca está disponible para su selección, incluso si no coincide con la condición del `step` valor

Puede cambiar el formato de visualización de los valores de las marcas mediante la `marksFormat` propiedad.

#### Definir los valores disponibles

Puede establecer la `step` propiedad `null` para definir un conjunto de valores específicos que el control deslizante pueda gestionar, en lugar de un rango continuo. Esto es particularmente útil cuando solo ciertos valores discretos son válidos para la selección. En ese caso `min`, propiedades `max` y `marks` permite especificar una matriz de números que representan los valores exactos que los usuarios pueden seleccionar mediante `Slider`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider marks={[10, 20, 50, 55, 65, 80]} step={null}/>
`}
>
    <UIKitExamples.SliderExample marks={[10, 20, 50, 55, 65, 80]} step={null}/>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={[10, 20, 50, 55, 65, 80]} step={null} />
```

<!--/GITHUB_BLOCK-->

## Información sobre herramientas

La `tooltipDisplay` propiedad se usa en el `Slider` componente para controlar el comportamiento de visualización de una información sobre herramientas que muestra el valor actual a medida que el usuario interactúa con el control deslizante. `auto` El valor muestra la información sobre herramientas solo cuando el cursor coloca el cursor sobre `Slider`el mango o está enfocado.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider tooltipDisplay="on" />
`}
>
    <UIKitExamples.SliderExample tooltipDisplay="on" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider tooltipDisplay="on" />
```

<!--/GITHUB_BLOCK-->

Puede cambiar el formato de visualización del valor de la información sobre herramientas mediante la `tooltipFormat` propiedad. Si no lo especifica `tooltipformat`, se usará `marksFormat` para mostrar el valor en la información sobre herramientas.

## Propiedades

| Nombre                           | Descripción                                                                                                                                                                                                                                         |                          Tipo                          | Predeterminado |
| :------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------: | :------------: |
| apiRef                           | Refiérase a los accesorios componentes de enfoque y desenfoque de Slider                                                                                                                                                                            |                 `RefObject<SliderRef>`                 |                |
| autoFocus                        | El `autofocus` atributo del control                                                                                                                                                                                                                 |                       `boolean`                        |                |
| className                        | El nombre de la clase contenedora del control                                                                                                                                                                                                       |                        `string`                        |                |
| [defaultValue](#slider-variants) | El valor predeterminado del control, que se usa cuando el componente no está controlado                                                                                                                                                             |              `number` `[number, number]`               |      `0`       |
| [discapacitado](#disabled)       | Indica que el usuario no puede interactuar con el control                                                                                                                                                                                           |                       `boolean`                        |    `false`     |
| [errorMessage](#error)           | Texto de un error para mostrar                                                                                                                                                                                                                      |                        `string`                        |                |
| [marcas](#marks)                 | Marcas de texto debajo del control deslizante. Se puede establecer en la cantidad de marcas del control deslizante o se puede establecer en la matriz de valores que deberían tener marcas. `0` o un valor de matriz vacío oculta todas las marcas. |                  `number` `number[]`                   |      `2`       |
| [marksFormat](#marks)            | Formateador para el valor mostrado de la marca                                                                                                                                                                                                      |              `(value: number) => string`               |                |
| [máximo](#min-and-max-value)     | El valor máximo del componente.                                                                                                                                                                                                                     |                        `number`                        |     `100`      |
| [min](#min-and-max-value)        | El valor mínimo del componente.                                                                                                                                                                                                                     |                        `number`                        |      `0`       |
| onBlur                           | Se dispara cuando el control pierde el foco. Proporciona un evento de enfoque como argumento de devolución de llamada                                                                                                                               | `(e: focusEvent<HTMLDivElement, Element> () => vacío)` |                |
| onUpdate                         | Se activa cuando el usuario cambia el valor del control deslizante. Proporciona un evento de cambio como argumento de devolución de llamada                                                                                                         |     `(valor: número\| [número, número]) => nulo)`      |                |
| onUpdateComplete                 | Se dispara cuando se activa ontouchend o onmouseup. Proporciona un evento de cambio como argumento de devolución de llamada                                                                                                                         |     `(valor: número\| [número, número]) => nulo)`      |                |
| onFocus                          | Se dispara cuando el control se enfoca. Proporciona un evento de enfoque como argumento de devolución de llamada                                                                                                                                    | `(e: focusEvent<HTMLDivElement, Element> () => vacío)` |                |
| [tamaño](#size)                  | El tamaño del control                                                                                                                                                                                                                               |                      `"s"` `"xl"`                      |     `"m"`      |
| [paso](#step)                    | Valor que se sumará o restará en cada paso que realice el control deslizante. Se puede configurar `null` para hacer `marks` como pasos.                                                                                                             |                    `number` `null`                     |      `1`       |
| tabIndex                         | El `tabIndex` atributo del control                                                                                                                                                                                                                  |              `number` `[number, number]`               |                |
| [tooltipDisplay](#tooltip)       | El comportamiento de visualización de la información sobre herramientas                                                                                                                                                                             |                      `off` `auto`                      |     `off`      |
| [tooltipFormat](#tooltip)        | Formateador del valor mostrado en la información sobre herramientas. Se usa `marksFormat` si no está configurado                                                                                                                                    |              `(value: number) => string`               |                |
| [validationState](#error)        | Estado de validación                                                                                                                                                                                                                                |                      `"invalid"`                       |                |
| [valor](#slider-variants)        | El valor del control                                                                                                                                                                                                                                |              `number` `[number, number]`               |                |
