`Select` es un control que proporciona una lista de opciones que un usuario puede seleccionar.

```tsx
import {Select} from '@gravity-ui/uikit';
```

## Opciones

Opciones para seleccionar.

### Definición de opciones

Puedes definir opciones como un array de objetos o como los hijos de un componente. El primer enfoque es útil para casos donde las opciones requieren una preparación compleja y, posiblemente, memorización. El segundo es conveniente cuando hay pocas opciones y su configuración no requiere cálculos complejos.

#### Lista plana

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

#### Lista agrupada

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Almacenamiento de datos en opciones

Puedes definir y almacenar datos únicos en cada opción utilizando la propiedad `option.data`. Esto puede ser útil cuando necesitas enriquecer los datos al usar la devolución de llamada `onUpdate` o, por ejemplo, al dibujar tus opciones con `renderOption`.

## Selección de múltiples opciones

Para habilitar la selección múltiple, usa la propiedad `multiple`. Su valor predeterminado es `false`.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Contador

Puedes agregar un contador de los elementos seleccionados al componente usando la propiedad `hasCounter`.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Filtrado de opciones

Para habilitar la sección de filtro, usa la propiedad `filterable`. Su valor predeterminado es `false`.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Tamaño

Para gestionar el tamaño predeterminado del control y las opciones, usa la propiedad `size`. Su tamaño predeterminado es `m`.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## Ancho del control

Por defecto, el ancho del control se estira para coincidir con el ancho del contenido de las opciones seleccionadas. Puedes gestionarlo usando la propiedad `width`:

`'max'`: Se estira al ancho completo del padre.

`number`: Aplica el ancho en píxeles.

GRAVITY_TRANSLATION_BLOCK_13_END

## Ancho del popup

Puedes gestionar el ancho del popup con la propiedad `popupWidth`. Los valores disponibles son:

`'fit'`: Aplica el ancho del control.

`number`: Aplica el ancho en píxeles.

Puntos a tener en cuenta sobre el comportamiento predeterminado:

- El ancho del popup es igual al ancho de la opción más ancha, pero no más ancho que `90vw`. Esto no se aplica en caso de que uses [virtualización](#virtualized-list).

- Las opciones estrechas se estiran para ajustarse al ancho del control.

GRAVITY_TRANSLATION_BLOCK_14_END

### Lista virtualizada

Para una visualización óptima de un gran número de opciones, `Select` tiene una herramienta de virtualización de listas incorporada. La virtualización se habilita al superar el umbral del número de opciones (`50` por defecto). Puedes gestionar este valor usando la propiedad `virtualizationThreshold`.

Al usar la virtualización, se aplican algunas restricciones al elemento popup:

- El ancho del popup ya no se ajusta a la longitud de la opción más larga.

- El ancho mínimo del popup es igual al ancho del control, o `100px` si el control es más corto.

GRAVITY_TRANSLATION_BLOCK_15_END

## Uso avanzado

Hay muchas maneras de personalizar tu `Select`.

### Renderizado de control personalizado

Para renderizar un control personalizado, usa la propiedad `renderControl`.
Nota: Debes reenviar todos los argumentos a tu nodo para habilitar un comportamiento consistente, al igual que al usar el control predeterminado.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Renderizado de sección de filtro personalizada

Para renderizar una sección de filtro personalizada, usa la propiedad `renderFilter` y establece la propiedad `filterable` en `true`.
Nota: Necesitas reenviar todos los argumentos a tu nodo para habilitar un filtro que funcione correctamente, al igual que al usar la configuración predeterminada.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

### Renderizado de opciones personalizadas

Para renderizar opciones personalizadas, usa la propiedad `renderOption`:

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

### Renderizado de opciones seleccionadas personalizadas

Para renderizar opciones seleccionadas personalizadas, usa la propiedad `renderSelectedOption`:

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

### Renderizado de opciones con diferentes alturas

Las opciones tienen una altura fija según la propiedad `size`. Si necesitas renderizar opciones con diferentes alturas, puedes usar la propiedad `option.data`. Almacenará información sobre qué altura necesitas establecer para las opciones, así como la propiedad `getOptionHeight` para establecer este valor.

GRAVITY_TRANSLATION_BLOCK_24_END

GRAVITY_TRANSLATION_BLOCK_25_END

### Renderizado de contador personalizado

Para renderizar un contador personalizado, usa la propiedad `renderCounter`. El contador solo se muestra cuando la selección múltiple está habilitada (`multiple={true}`) y `hasCounter={true}`.

GRAVITY_TRANSLATION_BLOCK_26_END

GRAVITY_TRANSLATION_BLOCK_27_END

### Renderizado de lista de opciones

La propiedad `renderPopup` te permite controlar el contenido de la lista de opciones: cambiar el orden de los elementos estándar (filtro, lista), ocultarlos o agregar elementos personalizados entre, antes o después de ellos.

GRAVITY_TRANSLATION_BLOCK_28_END

GRAVITY_TRANSLATION_BLOCK_29_END

### Error

Este estado de `Select` es para entradas de usuario incorrectas. Para cambiar la apariencia de `Select`, usa la propiedad `validationState` con el valor `"invalid"`. Opcionalmente, puedes proporcionar un mensaje de error a través de la propiedad `errorMessage`. Por defecto, el texto del mensaje se renderiza fuera del componente.
Puedes cambiar esto con la propiedad `errorPlacement`.

GRAVITY_TRANSLATION_BLOCK_30_END

## Propiedades

| Nombre                                                      | Descripción                                                                                                                      | Tipo                                     | Predeterminado                                           |
| :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------- |
| className                                                 | Controla la clase CSS                                                                                                            | `string`                                 |                                                          |
| defaultValue                                              | Valores predeterminados que representan las opciones seleccionadas en caso de usar un estado no controlado                      | `string[]`                               |                                                          |
| disabled                                                  | Indica que el usuario no puede interactuar con el control                                                                        | `boolean`                                | `false`                                                  |
| [filterable](#filtering-options)                          | Indica que el popup de selección tiene una sección de filtro                                                                     | `boolean`                                | `false`                                                  |
| filterOption                                              | Se utiliza para comparar una opción con el filtro                                                                                | `function`                               |                                                          |
| filterPlaceholder                                         | Texto predeterminado para el placeholder del input de filtro                                                                     | `string`                                 |                                                          |
| [getOptionHeight](#render-options-with-different-heights) | Se utiliza para establecer la altura de las opciones personalizadas del usuario                                                  | `function`                               |                                                          |
| getOptionGroupHeight                                      | Se utiliza para establecer la altura de los grupos de opciones personalizadas del usuario                                       | `function`                               |                                                          |
| hasClear                                                  | Habilita la visualización de un icono para borrar las opciones seleccionadas                                                     | `boolean`                                | `false`                                                  |
| id                                                        | Atributo `id` de HTML                                                                                                            | `string`                                 |                                                          |
| label                                                     | Etiqueta del control                                                                                                             | `string`                                 |                                                          |
| loading                                                   | Agrega el elemento de carga al final de la lista de opciones. Funciona como un indicador de carga persistente mientras la lista de opciones está vacía. | `boolean`                                |                                                          |
| [multiple](#selecting-multiple-options)                   | Indica si se pueden seleccionar múltiples opciones en la lista                                                                    | `boolean`                                | `false`                                                  |
| name                                                      | Nombre del control                                                                                                               | `string`                                 |                                                          |
| onBlur                                                    | Manejador que se llama cuando el elemento pierde el foco.                                                                        | `function`                               |                                                          |
| filter                                                    | Valor del filtro controlado                                                                                                      | `string`                                 | `''`                                                     |
| onFilterChange                                            | Se dispara cada vez después de cambiar el filtro                                                                                | `function`                               |                                                          |
| onFocus                                                   | Manejador que se llama cuando el elemento obtiene el foco                                                                        | `function`                               |                                                          |
| onLoadMore                                                | Se dispara cuando el indicador de carga se vuelve visible                                                                       | `function`                               |                                                          |
| onOpenChange                                              | Se dispara cada vez después de cambiar la visibilidad del popup                                                                  | `function`                               |                                                          |
| onUpdate                                                  | Se dispara cuando el usuario confirma una alteración en el valor de `Select`                                                     | `function`                               |                                                          |
| [options](#options)                                       | Opciones para seleccionar                                                                                                        | `(SelectOption \| SelectOptionGroup)[]`  |                                                          |
| pin                                                       | Vista del borde del control                                                                                                      | `string`                                 | `'round-round'`                                          |
| placeholder                                               | Texto del placeholder                                                                                                            | `string`                                 |                                                          |
| popupClassName                                            | Clase CSS del popup con la lista de opciones                                                                                     | `string`                                 |                                                          |
| popupPlacement                                            | Posicionamiento del popup                                                                                                        | `PopupPlacement` `Array<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                | Ancho del popup                                                                                                                  | `number \| 'fit' \| 'outfit'`            | `'outfit'`                                               |
| qa                                                        | Atributo de ID de prueba (`data-qa`)                                                                                             | `string`                                 |                                                          |
| [renderControl](#render-custom-control)                   | Se utiliza para renderizar el control del usuario                                                                                | `function`                               |                                                          |
| [renderCounter](#rendering-custom-counter)                | Se utiliza para renderizar el contador del usuario. Solo funciona con [hasCounter](#counter).                                    | `function`                               |                                                          |
| renderEmptyOptions                                        | Se utiliza para renderizar un nodo para una lista de opciones vacía                                                              | `function`                               |                                                          |
| [renderFilter](#render-custom-filter-section)             | Se utiliza para renderizar la sección de filtro del usuario                                                                      | `function`                               |                                                          |
| [renderOption](#render-custom-options)                    | Se utiliza para renderizar las opciones del usuario                                                                              | `function`                               |                                                          |
| renderOptionGroup                                         | Se utiliza para renderizar los grupos de opciones del usuario                                                                    | `function`                               |                                                          |
| [renderSelectedOption](#render-custom-selected-options)   | Se utiliza para renderizar las opciones seleccionadas del usuario                                                                | `function`                               |                                                          |
| [renderPopup](#rendering-options-list)                    | Se utiliza para renderizar el contenido de la lista de opciones                                                                  | `function`                               |                                                          |
| [size](#size)                                             | Tamaño del control / opciones                                                                                                    | `string`                                 | `'m'`                                                    |
| value                                                     | Valores que representan las opciones seleccionadas                                                                               | `string[]`                               |                                                          |
| view                                                      | Vista del control                                                                                                                | `string`                                 | `'normal'`                                               |
| [virtualizationThreshold](#virtualized-list)              | Umbral de recuento de opciones después del cual se habilita la virtualización                                                    | `number`                                 | `50`                                                     |
| [width](#control-width)                                   | Ancho del control                                                                                                                | `string \| number`                       | `undefined`                                              |
| errorMessage                                              | Texto del error                                                                                                                  | `string`                                 |                                                          |
| errorPlacement                                            | Posición del error                                                                                                               | `outside` `inside`                       | `outside`                                                |
| validationState                                           | Estado de validación                                                                                                             | `"invalid"`                              |                                                          |
| [hasCounter](#counter)                                    | Muestra el recuento de opciones seleccionadas. El contador solo aparece cuando la selección [multiple](#selecting-multiple-options) está habilitada. | `boolean`                                |                                                          |

## API CSS

| Nombre                             | Descripción                                   |
| :------------------------------- | :-------------------------------------------- |
| `--g-select-focus-outline-color` | Color del contorno si está enfocado (falta por defecto) |