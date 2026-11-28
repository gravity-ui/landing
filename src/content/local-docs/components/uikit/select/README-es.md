`Select` es un control que proporciona una lista de opciones que un usuario puede seleccionar.

```tsx
import {Select} from '@gravity-ui/uikit';
```

> [!NOTE]
> En la v8, las opciones se extraen de la nueva lista. Lo que cambió para el consumidor se recopila en la
> [guía de migración](https://github.com/gravity-ui/uikit/blob/main/docs/migration-select-v8.md).

## Opciones

Opciones para seleccionar.

### Definición de opciones

Puedes definir opciones como un array de objetos o como hijos de un componente. El primer enfoque es útil para casos en los que las opciones requieren una preparación compleja y, posiblemente, memorización. El segundo es conveniente cuando hay pocas opciones y su configuración no requiere cálculos complejos.

En un componente de servidor de React, `Select.Option` y `Select.OptionGroup` no son accesibles: usa `SelectOption` y `SelectOptionGroup` con nombre en su lugar. Sus tipos de props son `SelectOptionProps` y `SelectOptionGroupProps`.

#### Lista plana

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

#### El texto de una opción

El texto de una opción es lo que el disparador muestra para una opción seleccionada, lo que coincide con el filtro y lo que busca la búsqueda por las primeras letras. Por defecto, es el contenido de la opción cuando esta es una cadena o un número, sus hijos cuando lo son, y su `value` en caso contrario; por lo tanto, una opción que renderiza algo que no sea una cadena simple necesita `getOptionText`, o será buscada y nombrada por su valor.

GRAVITY_TRANSLATION_BLOCK_2_END

`useSelectOptions` toma la misma propiedad: pásala allí también cuando las opciones se filtren
fuera del componente. Define la función fuera del componente o memoízala; forma parte de la
memoización de la lista, y una nueva función en cada renderizado reconstruye las filas.

`getOptionText` reemplaza la propiedad `text` de una opción, que ha desaparecido: el texto de una opción
se solicita en lugar de almacenarse, por lo que una función cubre cada opción en lugar de un campo repetido en cada una de ellas.

El `value` de una opción identifica su fila, por lo que los valores deben ser únicos en toda la lista,
incluidos los grupos (para un [valor no string](#non-string-values) — su clave). El `id` DOM de la fila se
deriva de él, y ese id es lo que `aria-activedescendant` del disparador apunta; léelo de
allí en lugar de construirlo a mano: el escape de un valor pertenece a la lista y no es un
contrato.

#### Lista agrupada

Un encabezado de grupo es un título en lugar de una opción: tiene `role="presentation"`, se mantiene fuera del recorrido del teclado y del recuento de filas `role="option"`, y describe las opciones debajo de él a través de `aria-describedby`. Un grupo cuya `label` está vacío dibuja una línea separadora en lugar de un encabezado; como primera fila de la lista, no tiene nada que separar y no ocupa espacio alguno. Ese es el dibujo por defecto de un grupo: se consultan primero `renderOptionGroup` y `getOptionGroupHeight` y renderizan y miden lo que quieran, con o sin etiqueta vacía.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Almacenamiento de datos en opciones

Puedes definir y almacenar datos únicos en cada opción utilizando la propiedad `option.data`. Esto puede ser útil cuando necesitas enriquecer los datos al usar la devolución de llamada `onUpdate` o, por ejemplo, al dibujar tus opciones con `renderOption`.

### Valores no string

El valor de una opción puede ser de cualquier tipo: el tipo de `value`, `defaultValue` y `onUpdate` sigue
a las opciones. Select conoce un valor por una clave de cadena: el id de su fila, el campo de un formulario y la comparación de dos valores utilizan esta clave. Una cadena es su propia clave, otra primitiva se convierte en una con `String()`, y un objeto necesita `getValueKey`. Los valores con claves iguales son un solo valor: un objeto de una nueva respuesta selecciona la opción que coincide. Define `getValueKey` fuera del componente o memoízala, como `getOptionText`.

GRAVITY_TRANSLATION_BLOCK_5_END

Un valor de objeto no tiene texto propio: dale a la opción un `content` de cadena o pasa `getOptionText`.
Un hijo `Select.Option` toma una cadena a menos que su tipo sea nombrado: `<Select.Option<unknown, number>
value={1}>`; el propio Select toma el tipo de `value` o un `onUpdate` tipado `{(value: number[]) =>
…}`. Un valor seleccionado sin opción se muestra por su clave; mantén su opción en `options` o renderízalo con `renderSelectedOptions`. Un formulario envía claves, no valores. En un tipo de unión, `1`
y `"1"` comparten una clave y son un solo valor.

### Valores nulos

`''`, `null` y `undefined` significan ningún valor a menos que una opción los declare. Sin una opción, dicho valor no tiene texto, botón de limpieza ni recuento; un formulario lo envía como `''`, mientras que `value` y `onUpdate` lo conservan tal cual. `0` y `false` son siempre valores.

GRAVITY_TRANSLATION_BLOCK_6_END

## Selección de múltiples opciones

Para habilitar la selección múltiple, usa la propiedad `multiple`. Su valor por defecto es `false`.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

Shift+click, Shift+↑/↓ y Shift+Espacio seleccionan un rango de opciones, desde la opción elegida por última vez hasta el objetivo.

### Contador

Puedes añadir un contador de los elementos seleccionados al componente usando la propiedad `hasCounter`.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Filtrado de opciones

Para habilitar la sección de filtro, usa la propiedad `filterable`. Su valor por defecto es `false`.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## Búsqueda por las primeras letras

Con el popup abierto y sin filtro en el camino, las teclas de caracteres buscan una opción: la lista mueve la actividad a la primera opción cuyo texto **comienza con** lo que se escribió, el búfer se reinicia un segundo después de la última tecla, y repetir un carácter cicla a través de las opciones que comienzan con él. Un espacio pertenece a la consulta mientras se escribe, por lo que una etiqueta con un espacio en ella es accesible, y no selecciona nada hasta que el búfer esté vacío de nuevo. Un carácter que la lista tomó para su búsqueda no llega a los atajos de teclado de la aplicación circundante.

En un `Select` `filterable`, las teclas van al filtro en su lugar: escribir allí es filtrar.

## Tamaño

Para gestionar el tamaño por defecto del control y de las opciones, usa la propiedad `size`. Su tamaño por defecto es `m`.

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

## Ancho del control

Por defecto, el ancho del control se estira para coincidir con el ancho del contenido de las opciones seleccionadas. Puedes gestionarlo usando la propiedad `width`:

`'max'`: Se estira al ancho completo del padre.

`number`: Aplica el ancho en píxeles.

GRAVITY_TRANSLATION_BLOCK_15_END

## Ancho del popup

Puedes gestionar el ancho del popup con la propiedad `popupWidth`. Los valores disponibles son:

`'fit'`: Aplica el ancho del control.

`number`: Aplica el ancho en píxeles.

Puntos a tener en cuenta sobre el comportamiento por defecto:

- El ancho del popup es igual al ancho de la opción más ancha, pero no más ancho que `90vw`. Esto no se aplica a un `Select` [virtualizado](#virtualized-list).

- Las opciones estrechas se estiran para ajustarse al ancho del control.

GRAVITY_TRANSLATION_BLOCK_16_END

## Lista virtualizada

Una larga lista de opciones se renderiza fila por fila a menos que solicites lo contrario: cada opción es una fila DOM. Para renderizar solo las visibles, envuelve el `Select` en `ListVirtualizer` del punto de entrada `@gravity-ui/uikit/virtualizer`: el wrapper no necesita configuración y el popup sigue funcionando a través del portal. Un par de cientos de opciones es donde empieza a valer la pena; por encima de 150, el `Select` lo indica en una advertencia de desarrollo.

El punto de entrada necesita `@tanstack/react-virtual`: es una dependencia peer opcional del paquete y debe instalarse junto con él.

```tsx
import {Select} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

<ListVirtualizer>
  <Select options={thousandsOfOptions} />
</ListVirtualizer>;
```

El wrapper no tiene que estar al lado del `Select`: un wrapper con `minItemsCount` en la raíz de la aplicación cubre todos los `Select` debajo de él. Un `Select` con menos opciones se renderiza como si no hubiera wrapper: cada opción una fila DOM, el popup tan ancho como la opción más ancha. El `Select` cuenta todas sus opciones, sin los encabezados de grupo y sin el filtro, por lo que escribir no cambia la lista.

```tsx
import {Provider} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

<Provider theme="light">
  <ListVirtualizer minItemsCount={50}>
    <App />
  </ListVirtualizer>
</Provider>;
```

Para cambiar la configuración de un `Select`, coloca un segundo wrapper justo a su alrededor. Solo cambia lo que se le da y toma el resto del de la raíz: `overscan={20}` mantiene el umbral, `minItemsCount={0}` virtualiza ese `Select` sin importar el número de sus opciones, y `minItemsCount={Infinity}` lo mantiene simple.

```tsx
import {Select} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

// Debajo del wrapper en la raíz: este Select se virtualiza sin importar el número de sus opciones
<ListVirtualizer minItemsCount={0}>
  <Select options={options} />
</ListVirtualizer>;
```

El código del virtualizador es un fragmento propio y no se carga para los `Select` más cortos. Un `Select` que va a ser virtualizado comienza a cargarlo al montarse; un popup abierto antes de que llegue muestra sus primeras opciones hasta que la ventana se hace cargo, y luego se desplaza a la seleccionada.

Cosas a tener en cuenta sobre un `Select` virtualizado:

- El ancho del popup ya no se ajusta a la longitud de la opción más larga.

- El ancho mínimo del popup es igual al ancho del control, o `100px` si el control es más corto.

- La altura de una fila antes de ser renderizada se toma de [getOptionHeight](#rendering-options-with-different-heights) y el `size` del `Select`; el `estimateItemSize` del wrapper no se usa, ya que el tipo de una fila de opción no sale del `Select`: pasarlo escribe una advertencia en desarrollo. Las propiedades `measure` y `overscan` del wrapper funcionan como [se describe](https://github.com/gravity-ui/uikit/blob/main/src/components/List/README.md#virtualization) para la `List`.

- Un popup renderizado en el servidor obtiene sus primeras opciones en lugar de la ventana — no hay viewport para medirlo — y la ventana se hace cargo después de la hidratación.

- El wrapper cubre la lista de este `Select`, incluida la que [renderPopup](#rendering-options-list) pone en la página. Una lista dentro de una fila de él, o un `Select` colocado en tal fila, renderiza cada fila propia en su lugar: la virtualización de una lista no llega a lo que sus filas dibujan.

- Define `getOptionHeight` y `renderOption` fuera del componente o memoízalos: una nueva función en cada render hace que el virtualizador reinicie sus mediciones y las filas se vuelvan a renderizar.

GRAVITY_TRANSLATION_BLOCK_18_END

## Nombre accesible

El disparador necesita un nombre: `label`, `aria-label`, `aria-labelledby` o un `<label htmlFor>` que apunte al `id` del `Select`. `label` nombra el disparador y se mantiene fuera de su valor; un placeholder no es un nombre. Con `renderControl`, la etiqueta no se dibuja, así que nombra el control personalizado tú mismo.

## Uso avanzado

Hay muchas maneras de personalizar tu `Select`.

### Renderizar control personalizado

Para renderizar un control personalizado, usa la propiedad `renderControl`.

Pasa `ref` a tu elemento y distribuye `triggerProps` sobre él: abren y cierran el popup, llevan el teclado de la lista y el ARIA del combobox (`role`, `aria-expanded`, `aria-controls`, `aria-activedescendant`). Un control que los mantiene para sí mismo ni abre ni navega. `triggerProps` también contiene `disabled`. Haz un cast del `ref` genérico a un `ref` de botón cuando uses `Button`.

GRAVITY_TRANSLATION_BLOCK_19_END

GRAVITY_TRANSLATION_BLOCK_20_END

### Renderizar sección de filtro personalizada

Para renderizar una sección de filtro personalizada, usa la propiedad `renderFilter` y establece la propiedad `filterable` en `true`.

`inputProps` lleva todo lo que el input de un combobox necesita: el valor, los manejadores, el placeholder y el cableado ARIA — `role`, `aria-label`, `aria-controls`, `aria-activedescendant`, `aria-expanded`, `aria-autocomplete`. También lleva `size: 1`, una pista de ancho en lugar de ARIA: permite que el input se encoja al tamaño del popup en lugar de mantener los veinte caracteres que un `input` pide por defecto. Sin ellos, el filtro no tiene nombre accesible y no nombra ninguna opción activa para un lector de pantalla. Distribúyelo sobre un `input` simple junto con `ref`. Un componente con su propia API — `TextInput`, por ejemplo — toma las props que le pertenecen (`value`, `placeholder`, `onChange`, `onKeyDown`) y pasa el resto al elemento a través de `controlProps`, lo que una línea de desestructuración hace; `onKeyDown` debe estar entre ellas, lleva todo el teclado de la lista.

GRAVITY_TRANSLATION_BLOCK_21_END

GRAVITY_TRANSLATION_BLOCK_22_END

### Renderizar opciones personalizadas

Para renderizar opciones personalizadas, usa la propiedad `renderOption`. Se llama con la opción y con el
estado de su fila: `isItemActive`, si la fila es la activa (la que `Enter` aplica);
`selected`, si la opción está seleccionada; y `itemHeight`, la altura que resulta la fila — la
que [getOptionHeight](#rendering-options-with-different-heights) devolvió o el mínimo del
[size](#size). La fila en sí muestra la selección junto a lo que renderiza: una
marca de verificación en un `Select` [múltiple](#selecting-multiple-options) y un resaltado en uno simple.
Una opción que dibuja su propia indicación — un `Radio` o un `Checkbox` de `selected` — la
desactiva con `selectionStyle="none"`; sin una propia, la selección se vuelve invisible. Tal
control es decoración — la fila selecciona la opción, y no se permite un elemento interactivo
dentro de ella: envuelve el control en un elemento con `inert` (`inert=""` antes de React 19) y
mantén el texto de la opción fuera de él.

`renderOptionGroup` es lo mismo para el encabezado de un grupo: el grupo y `{isItemActive, itemHeight}`.

GRAVITY_TRANSLATION_BLOCK_23_END

GRAVITY_TRANSLATION_BLOCK_24_END

### Renderizar opciones seleccionadas personalizadas

Para renderizar la selección en el control, usa la propiedad `renderSelectedOptions`. Se llama con
todas las opciones seleccionadas en el orden de `value` — un array de uno en un select simple — y solo
cuando hay un valor. Un valor sin opción viene como `{value}`, sin `content`. Da a los elementos
devueltos claves cuando contienen estado. La etiqueta, el placeholder, el contador y el botón de
limpieza permanecen con el `Select`. Sin la propiedad, el control muestra los textos de las opciones
unidos con `, `.

GRAVITY_TRANSLATION_BLOCK_25_END

GRAVITY_TRANSLATION_BLOCK_26_END

### Opciones de renderizado con diferentes alturas

Una fila tiene la altura de su contenido, y no menos que el mínimo de su `size` (24, 28, 36 y 44 píxeles, como el control del mismo tamaño; en móvil, cada fila ocupa los 44 de `xl`) — a menos que establezcas la altura tú mismo. Si necesitas renderizar opciones con diferentes alturas, puedes usar la propiedad `option.data`. Almacenará información sobre qué altura necesitas establecer para las opciones, así como la propiedad `getOptionHeight` para establecer este valor: el número que devuelve se convierte en la altura de la fila y la estimación con la que el [virtualizador](#virtualized-list) posiciona las filas.

GRAVITY_TRANSLATION_BLOCK_27_END

GRAVITY_TRANSLATION_BLOCK_28_END

### Renderizado de contador personalizado

Para renderizar un contador personalizado, usa la propiedad `renderCounter`. El contador solo se muestra cuando la selección múltiple está habilitada (`multiple={true}`) y `hasCounter={true}`.

GRAVITY_TRANSLATION_BLOCK_29_END

GRAVITY_TRANSLATION_BLOCK_30_END

### Renderizado de la lista de opciones

La propiedad `renderPopup` te permite controlar el contenido de la lista de opciones: cambiar el orden de los elementos estándar (filtro, lista), ocultarlos o agregar elementos personalizados entre ellos, antes o después.

GRAVITY_TRANSLATION_BLOCK_31_END

GRAVITY_TRANSLATION_BLOCK_32_END

### Error

Este estado de `Select` es para entradas de usuario incorrectas. Para cambiar la apariencia de `Select`, usa la propiedad `validationState` con el valor `"invalid"`. Opcionalmente, puedes proporcionar un mensaje de error a través de la propiedad `errorMessage`. Por defecto, el texto del mensaje se renderiza fuera del componente.
Puedes cambiar esto con la propiedad `errorPlacement`.

GRAVITY_TRANSLATION_BLOCK_33_END

## Propiedades

| Nombre                                                           | Descripción                                                                                                                                  | Tipo                                     | Predeterminado                                           |
| :--------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------- |
| className                                                        | Controla la clase CSS                                                                                                                        | `string`                                 |                                                          |
| defaultValue                                                     | Valores predeterminados que representan las opciones seleccionadas en caso de usar un estado no controlado                                   | `V[]`                                    |                                                          |
| disabled                                                         | Indica que el usuario no puede interactuar con el control                                                                                    | `boolean`                                | `false`                                                  |
| [filterable](#filtering-options)                                 | Indica que el popup de selección tiene una sección de filtro                                                                                 | `boolean`                                | `false`                                                  |
| filterOption                                                     | Se utiliza para comparar la opción con el filtro                                                                                            | `function`                               |                                                          |
| filterPlaceholder                                                | Texto predeterminado del placeholder del filtro                                                                                              | `string`                                 |                                                          |
| [getOptionText](#the-text-of-an-option)                          | El texto de una opción: el disparador, el filtro y la búsqueda por las primeras letras lo utilizan                                           | `function`                               | contenido de cadena, de lo contrario el valor            |
| [getValueKey](#non-string-values)                                | La clave de cadena de un valor: el id de su fila, el campo del formulario, la igualdad de valores                                            | `(value: V) => string`                   | la cadena misma, `String()` para otro primitivo          |
| [getOptionHeight](#rendering-options-with-different-heights)     | Se utiliza para establecer la altura de las opciones personalizadas del usuario                                                             | `function`                               |                                                          |
| getOptionGroupHeight                                             | Se utiliza para establecer la altura de los grupos de opciones personalizados del usuario                                                     | `function`                               |                                                          |
| hasClear                                                         | Habilita la visualización de un icono para borrar las opciones seleccionadas                                                                 | `boolean`                                | `false`                                                  |
| id                                                               | Atributo `id` de HTML                                                                                                                        | `string`                                 |                                                          |
| label                                                            | Etiqueta del control; en móviles también es el título de la hoja                                                                             | `string`                                 |                                                          |
| loading                                                          | Agrega el elemento de carga al final de la lista de opciones. Funciona como un indicador de carga persistente mientras la lista de opciones está vacía. | `boolean`                                |                                                          |
| [multiple](#selecting-multiple-options)                          | Indica si se pueden seleccionar varias opciones en la lista                                                                                  | `boolean`                                | `false`                                                  |
| name                                                             | Nombre del control                                                                                                                           | `string`                                 |                                                          |
| onBlur                                                           | Manejador que se llama cuando el elemento pierde el foco.                                                                                   | `function`                               |                                                          |
| filter                                                           | Valor del filtro controlado                                                                                                                  | `string`                                 | `''`                                                     |
| onFilterChange                                                   | Se dispara cada vez después de cambiar el filtro                                                                                           | `function`                               |                                                          |
| onFocus                                                          | Manejador que se llama cuando el elemento obtiene el foco                                                                                    | `function`                               |                                                          |
| onLoadMore                                                       | Se dispara cuando el indicador de carga se vuelve visible                                                                                   | `function`                               |                                                          |
| onOpenChange                                                     | Se dispara cada vez después de cambiar la visibilidad del popup                                                                              | `function`                               |                                                          |
| onUpdate                                                         | Se dispara cuando el usuario confirma una alteración en el valor de `Select`                                                               | `function`                               |                                                          |
| [options](#options)                                              | Opciones para seleccionar                                                                                                                    | `SelectOptions`                          |                                                          |
| pin                                                              | Vista del borde del control                                                                                                                  | `string`                                 | `'round-round'`                                          |
| placeholder                                                      | Texto del placeholder                                                                                                                        | `string`                                 |                                                          |
| popupClassName                                                   | `className` del popup con la lista de opciones                                                                                               | `string`                                 |                                                          |
| popupPlacement                                                   | Posicionamiento del popup                                                                                                                    | `PopupPlacement` `Array<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                       | Ancho del popup                                                                                                                              | `number \| 'fit'`                        |                                                          |
| sheetClassName                                                   | `className` de la hoja                                                                                                                       | `string`                                 |                                                          |
| qa                                                               | Atributo `id` de prueba (`data-qa`)                                                                                                          | `string`                                 |                                                          |
| [renderControl](#rendering-custom-control)                       | Se utiliza para renderizar el control del usuario                                                                                            | `function`                               |                                                          |
| [renderCounter](#rendering-custom-counter)                       | Se utiliza para renderizar el contador del usuario. Solo funciona con [hasCounter](#counter).                                               | `function`                               |                                                          |
| renderEmptyOptions                                               | Se utiliza para renderizar un nodo para una lista de opciones vacía                                                                          | `function`                               |                                                          |
| [renderFilter](#rendering-custom-filter-section)                 | Se utiliza para renderizar la sección de filtro del usuario                                                                                  | `function`                               |                                                          |
| [renderOption](#rendering-custom-options)                        | Se utiliza para renderizar las opciones del usuario                                                                                          | `function`                               |                                                          |
| renderOptionGroup                                                | Se utiliza para renderizar los grupos de opciones del usuario                                                                                | `function`                               |                                                          |
| [renderSelectedOptions](#rendering-custom-selected-options)      | Se utiliza para renderizar la selección en el control                                                                                        | `function`                               |                                                          |
| [renderPopup](#rendering-options-list)                           | Se utiliza para renderizar el contenido de la lista de opciones                                                                              | `function`                               |                                                          |
| [selectionStyle](#rendering-custom-options)                      | Cómo una fila muestra que su opción está seleccionada: la marca de verificación o el resaltado (`auto`) o nada (`none`)                     | `'auto' \| 'none'`                       | `'auto'`                                                 |
| [size](#size)                                                    | Tamaño del control / opciones                                                                                                                | `string`                                 | `'m'`                                                    |
| value                                                            | Valores que representan las opciones seleccionadas                                                                                          | `V[]`                                    |                                                          |
| view                                                             | Vista del control                                                                                                                            | `string`                                 | `'normal'`                                               |
| [width](#control-width)                                          | Ancho del control                                                                                                                            | `string \| number`                       | `undefined`                                              |
| errorMessage                                                     | Texto del error                                                                                                                              | `string`                                 |                                                          |
| errorPlacement                                                   | Posición del error                                                                                                                           | `outside` `inside`                       | `outside`                                                |
| validationState                                                  | Estado de validación                                                                                                                         | `"invalid"`                              |                                                          |
| [hasCounter](#counter)                                           | Muestra el recuento de opciones seleccionadas. El contador solo aparece cuando la selección [múltiple](#selecting-multiple-options) está habilitada. | `boolean`                                |                                                          |

## API CSS

Los nombres de clase del marcado no son un contrato público: las filas del popup son renderizadas por la
lista y su vista de fila, y su marcado cambia con el kit. Lo que se soporta:

- las variables a continuación;
- el aspecto de una fila, a través de las variables `--g-list-item-view-*` de la
  [vista de fila](../ListItemView/README.md#css-api): sus colores, y su altura, padding y radio,
  que de lo contrario siguen el [tamaño](#size) del `Select`. Establécelas en `popupClassName` o
  `sheetClassName` — por ejemplo `--g-list-item-view-min-height: 48px` para filas más altas en móvil.
  La estimación del [virtualizador](#virtualized-list) y el `itemHeight` de `renderOption` todavía
  provienen del tamaño: cuando el número exacto importa, usa `getOptionHeight`;
- el contenido de una fila, a través de `renderOption`, `renderOptionGroup` y `renderSelectedOptions`.

| Nombre                             | Descripción                                   |
| :------------------------------- | :-------------------------------------------- |
| `--g-select-focus-outline-color` | Color del contorno si está enfocado (ausente por defecto) |