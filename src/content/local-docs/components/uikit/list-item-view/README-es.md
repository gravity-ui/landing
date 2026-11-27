GRAVITY_TRANSLATION_BLOCK_0_END

`ListItemView` es la vista de una fila de lista: organiza el contenido de una fila — el icono, la
descripción, el contenido final — y dibuja los estados que su propietario le pasa.

```tsx
import {ListItemView} from '@gravity-ui/uikit';
```

El [List](../List/README.md) dibuja sus filas con esta vista y la expone como `List.ItemView`, con
solo las props del layout. Utiliza `ListItemView` directamente para construir una fila fuera de una
lista — una fila de un menú propio, un elemento de un árbol — o cuando una fila necesita las props
de anidamiento y colapso que una lista no pasa.

- [Uso básico](#basic-usage)
- [Tamaños](#sizes)
- [Slots](#slots)
- [Estados](#states)
- [Selección](#selection)
- [Anidamiento y colapso](#nesting-and-collapsing)
- [Controlador de arrastre](#drag-handle)
- [Otro elemento](#another-element)
- [API CSS](#css-api)
- [Propiedades](#properties)

## Uso básico

La vista es un elemento de bloque tan ancho como su contenedor: el ancho de una fila es el ancho de la
lista que la rodea.

```tsx
import {Envelope} from '@gravity-ui/icons';
import {Icon, ListItemView} from '@gravity-ui/uikit';

function Mailbox() {
  return (
    <ListItemView startContent={<Icon data={Envelope} size={16} />} onClick={openMailbox}>
      Inbox
    </ListItemView>
  );
}
```

<ListItemViewExample />

La vista no tiene un rol ARIA propio: una fila obtiene su rol de la lista a la que pertenece (`option`
en un listbox, `row` en una cuadrícula), y `role` junto con el resto de las props DOM llegan al
elemento raíz tal como se pasan. Dentro de un `<List>` las props vienen listas desde `getItemProps()`.

## Tamaños

La prop `size` establece la densidad de una fila — `s`, `m`, `l` o `xl`. Controla la altura mínima,
los rellenos, el radio de la esquina y el tamaño de los controles de la fila; `xl` también cambia el
texto a `body-2`. Las alturas son las de los controles — 24, 28, 36 y 44px — y, como en los
controles, los rellenos del bloque provienen de la altura: una sola línea llena la fila exactamente,
cada línea siguiente añade su altura de línea. Los rellenos en línea crecen con el tamaño — 8, 12, 16
y 16px. Una fila sin `size` tiene la altura, los rellenos y el radio de `m` con los controles de la
vista base; dentro de un `<List>` cada fila obtiene el tamaño de la lista.

<ListItemViewSizes />

## Slots

El contenido de una fila son sus hijos, y el resto está en las props: `startContent` para un icono
inicial o un avatar, `description` para la segunda línea, `endContent` para lo que cierra la fila —
una etiqueta, un atajo, una acción.

<ListItemViewSlots />

```tsx
<ListItemView
  startContent={<Icon data={Star} size={16} />}
  description="Flagged by you"
  endContent={<Label>3</Label>}
>
  Starred
</ListItemView>
```

## Estados

Una fila muestra cuatro estados, y cada uno de ellos es una prop — la vista no mantiene ningún estado
propio:

- `active` — el cursor del teclado: una lista lo mueve con las teclas de flecha;
- `hovered` — el resaltado al pasar el ratón, forzado por las props. Sin la prop, la fila se resalta
  en `:hover`; `hovered={false}` suprime eso, que es lo que hace una lista mientras se está
  arrastrando;
- `disabled` — la fila se atenúa y deja de reaccionar al puntero, incluido su propio `onClick`;
- `selected` — ver [Selección](#selection).

<ListItemViewStates />

## Selección

`selectionStyle` indica cómo se muestra una fila seleccionada: `highlight` tiñe la fila, `check`
reserva un espacio para una marca de verificación delante del contenido, `none` muestra la selección
sin nada — para una fila que lo indica en su propio contenido. La prop no tiene valor predeterminado:
una fila `selected` sin ella se ve como cualquier otra. Dentro de un `<List>` la lista elige el
estilo: `check` para una selección múltiple, `highlight` para una única.

<ListItemViewSelection />

El espacio de la marca de verificación se reserva para cada fila de una lista, seleccionada o no, para
que el contenido de las filas no salte al cambiar la selección.

## Anidamiento y colapso

`nestedLevel` indenta una fila según la profundidad de un árbol, y `collapsible` le da a la fila el
controlador de su rama: `collapsed` es su estado y `onCollapseChange` su manejador. Un clic en la
fila misma también alterna la rama, a menos que la fila tenga su propio `onClick`.

El controlador es una decoración: lleva `aria-hidden` y está fuera del orden de tabulación, por lo que
la fila misma es la única forma de acceder a la rama. El `aria-expanded` de la fila es tuyo para
establecerlo.

<ListItemViewNesting />

## Controlador de arrastre

`dragHandle` llena el slot más externo de una fila, delante de la indentación, el controlador de
colapso y la marca de verificación, para que el controlador de una lista reorganizable permanezca en
el borde de la fila sin importar lo que la fila muestre. La vista no sabe nada sobre arrastrar y
soltar: las props de la biblioteca viven en el elemento que pasas.

<ListItemViewDragHandle />

```tsx
<ListItemView
  dragHandle={
    <span {...dragHandleProps} aria-label="Drag to reorder">
      <Icon data={Grip} size={12} />
    </span>
  }
>
  {track.title}
</ListItemView>
```

## Otro elemento

`component` renderiza la fila como otro elemento — un enlace, un botón — y `componentProps` son las
props de ese elemento: `href`, `type`, los manejadores. Con `isContainer`, la vista no organiza nada
y deja el marcado de la fila para ti, manteniendo los estados y el elemento.

<ListItemViewCustomElement />

## API CSS

| Nombre                                        | Descripción                          |
| :------------------------------------------ | :----------------------------------- |
| `--g-list-item-view-min-height`             | La altura mínima de una fila          |
| `--g-list-item-view-border-radius`          | El radio de la esquina                |
| `--g-list-item-view-padding-inline`         | El relleno en línea                   |
| `--g-list-item-view-padding-block`          | El relleno en bloque                  |
| `--g-list-item-view-line-height`            | La altura de línea del contenido       |
| `--g-list-item-view-controls-gap`           | El espacio entre las ranuras          |
| `--g-list-item-view-controls-size`          | El tamaño de los controles de una fila    |
| `--g-list-item-view-controls-border-radius` | El radio de la esquina de los controles    |
| `--g-list-item-view-controls-icon-size`     | El tamaño de los iconos del control |
| `--g-list-item-view-spacer-size`            | La sangría de un nivel de anidamiento      |
| `--g-list-item-view-background-color`       | El fondo de una fila              |
| `--g-list-item-view-background-color-hover` | El fondo de una fila al pasar el ratón por encima      |
| `--g-list-item-view-text-color`             | El color del contenido            |
| `--g-list-item-view-description-color`      | El color de la descripción        |

Las variables se aplican a una fila de cualquier tamaño: `size` solo proporciona la geometría predeterminada — la altura mínima, el radio, los rellenos y los controles — para una variable que no está establecida. El relleno en bloque predeterminado sigue la altura mínima y la altura de línea; `--g-list-item-view-padding-block` lo fija. El encabezado de sección de una lista (`List.SectionHeader`) sigue la misma altura mínima y relleno en línea, incluidas las variables, de modo que las filas y los encabezados de una lista mantengan un borde.

## Propiedades

| Nombre             | Descripción                                                                                 |                  Tipo                  | Por defecto |
| :---------------- | :------------------------------------------------------------------------------------------ | :------------------------------------: | :-----: |
| children         | El contenido de la fila                                                                      |           `React.ReactNode`            |         |
| size             | La densidad de la fila                                                                      |        `'s'` `'m'` `'l'` `'xl'`        |         |
| startContent     | El contenido inicial: un icono, un avatar                                                     |           `React.ReactNode`            |         |
| description      | La segunda línea de la fila                                                                  |           `React.ReactNode`            |         |
| endContent       | El contenido final: una etiqueta, un atajo, una acción                                        |           `React.ReactNode`            |         |
| dragHandle       | El contenido de la ranura más externa: el manejador de arrastre de una fila reorganizable                     |           `React.ReactNode`            |         |
| active           | El cursor del teclado en la fila                                                       |               `boolean`                |         |
| hovered          | El resaltado al pasar el ratón, forzado por las props (`false` suprime el `:hover` de la fila)       |               `boolean`                |         |
| disabled         | Si la fila está deshabilitada                                                                 |               `boolean`                |         |
| selected         | Si la fila está seleccionada                                                                 |               `boolean`                |         |
| selectionStyle   | Cómo se muestra una fila seleccionada                                                                 |    `'highlight'` `'check'` `'none'`    |         |
| collapsible      | Si la fila tiene el interruptor de su rama                                                |               `boolean`                |         |
| collapsed        | Si la rama de la fila está colapsada                                                  |               `boolean`                |         |
| onCollapseChange | El manejador del interruptor (un clic en la fila sin `onClick` también alterna la rama) |     `(collapsed: boolean) => void`     |         |
| nestedLevel      | La profundidad de la fila en un árbol: la sangría delante de ella                                   |                `number`                |   `0`   |
| onClick          | El manejador de un clic en la fila (un clic en un descendiente enfocable no es uno)            | `React.MouseEventHandler<HTMLElement>` |         |
| component        | El elemento que la fila renderiza                                                          |          `React.ElementType`           | `'div'` |
| componentProps   | Las props de ese elemento                                                                   |   `React.ComponentProps<component>`    |         |
| isContainer      | Renderiza los hijos tal cual, sin el diseño de las ranuras                           |               `boolean`                | `false` |
| className        | La clase CSS de la fila                                                                    |                `string`                |         |
| style            | El estilo en línea de la fila                                                                 |         `React.CSSProperties`          |         |

La documentación de Markdown se traduce a es.
Se conservan los nombres de los componentes, los identificadores de la API, los enlaces y los bloques de código.
Copie cada marcador GRAVITY_TRANSLATION_BLOCK_<number>_END verbatim en su propia línea, en el orden original. Mantenga los marcadores fuera de las cercas de código de Markdown.
Traduzca la prosa circundante y las descripciones de las tablas. Devuelva Markdown sin una cerca de código externa.
El resto de las props llegan al elemento raíz de la fila: `role`, `id`, `tabIndex`, `aria-*`, `data-*`, los manejadores del puntero y del teclado.

GRAVITY_TRANSLATION_BLOCK_1_END

## Componentes

GRAVITY_TRANSLATION_BLOCK_2_END

### `Table`

GRAVITY_TRANSLATION_BLOCK_3_END

El componente `Table` es un contenedor para la tabla.

GRAVITY_TRANSLATION_BLOCK_4_END

### `Table.Head`

GRAVITY_TRANSLATION_BLOCK_5_END

El componente `Table.Head` es un contenedor para el encabezado de la tabla.

GRAVITY_TRANSLATION_BLOCK_6_END

### `Table.Body`

GRAVITY_TRANSLATION_BLOCK_7_END

El componente `Table.Body` es un contenedor para el cuerpo de la tabla.

GRAVITY_TRANSLATION_BLOCK_8_END

### `Table.Row`

GRAVITY_TRANSLATION_BLOCK_9_END

El componente `Table.Row` es un contenedor para una fila de la tabla.

GRAVITY_TRANSLATION_BLOCK_10_END

### `Table.Cell`

GRAVITY_TRANSLATION_BLOCK_11_END

El componente `Table.Cell` es un contenedor para una celda de la tabla.

GRAVITY_TRANSLATION_BLOCK_12_END

### `Table.CheckboxCell`

GRAVITY_TRANSLATION_BLOCK_13_END

El componente `Table.CheckboxCell` es un contenedor para una celda de la tabla que contiene una casilla de verificación.

GRAVITY_TRANSLATION_BLOCK_14_END

### `Table.Column`

GRAVITY_TRANSLATION_BLOCK_15_END

El componente `Table.Column` es un contenedor para una columna de la tabla.

GRAVITY_TRANSLATION_BLOCK_16_END

### `Table.Header`

GRAVITY_TRANSLATION_BLOCK_17_END

El componente `Table.Header` es un contenedor para el encabezado de una columna de la tabla.

GRAVITY_TRANSLATION_BLOCK_18_END

### `Table.SortableHeader`

GRAVITY_TRANSLATION_BLOCK_19_END

El componente `Table.SortableHeader` es un contenedor para el encabezado de una columna de la tabla que se puede ordenar.

GRAVITY_TRANSLATION_BLOCK_20_END

### `Table.Filter`

GRAVITY_TRANSLATION_BLOCK_21_END

El componente `Table.Filter` es un contenedor para el filtro de una columna de la tabla.

GRAVITY_TRANSLATION_BLOCK_22_END

### `Table.Pagination`

GRAVITY_TRANSLATION_BLOCK_23_END

El componente `Table.Pagination` es un contenedor para la paginación de la tabla.

GRAVITY_TRANSLATION_BLOCK_24_END

## Props

GRAVITY_TRANSLATION_BLOCK_25_END

### `Table`

GRAVITY_TRANSLATION_BLOCK_26_END

| Prop | Tipo | Descripción | Valor predeterminado |
|---|---|---|---|
| `children` | `React.ReactNode` | El contenido de la tabla. | `null` |
| `density` | `'compact' \| 'comfortable'` | La densidad de la tabla. | `'comfortable'` |
| `variant` | `'default' \| 'subtle'` | La variante de la tabla. | `'default'` |
| `withPagination` | `boolean` | Indica si la tabla debe tener paginación. | `false` |
| `withSorting` | `boolean` | Indica si la tabla debe tener ordenación. | `false` |
| `withFiltering` | `boolean` | Indica si la tabla debe tener filtrado. | `false` |
| `withSelection` | `boolean` | Indica si la tabla debe tener selección. | `false` |
| `withRowSelection` | `boolean` | Indica si la tabla debe tener selección de filas. | `false` |
| `withColumnVisibility` | `boolean` | Indica si la tabla debe tener visibilidad de columnas. | `false` |
| `withColumnReordering` | `boolean` | Indica si la tabla debe tener reordenación de columnas. | `false` |
| `withColumnResizing` | `boolean` | Indica si la tabla debe tener redimensionamiento de columnas. | `false` |
| `withColumnFiltering` | `boolean` | Indica si la tabla debe tener filtrado de columnas. | `false` |
| `withColumnSorting` | `boolean` | Indica si la tabla debe tener ordenación de columnas. | `false` |
| `withColumnHiding` | `boolean` | Indica si la tabla debe tener ocultación de columnas. | `false` |
| `withColumnPinning` | `boolean` | Indica si la tabla debe tener fijación de columnas. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la tabla debe tener agrupación de columnas. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la tabla debe tener resúmenes de columnas. | `false` |
| `withColumnTotals` | `boolean` | Indica si la tabla debe tener totales de columnas. | `false` |
| `withColumnAverages` | `boolean` | Indica si la tabla debe tener promedios de columnas. | `false` |
| `withColumnMedians` | `boolean` | Indica si la tabla debe tener medianas de columnas. | `false` |
| `withColumnModes` | `boolean` | Indica si la tabla debe tener modos de columna. | `false` |
| `withColumnTypes` | `boolean` | Indica si la tabla debe tener tipos de columna. | `false` |
| `withColumnFormats` | `boolean` | Indica si la tabla debe tener formatos de columna. | `false` |
| `withColumnValidation` | `boolean` | Indica si la tabla debe tener validación de columna. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la tabla debe tener restricciones de columna. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la tabla debe tener valores predeterminados de columna. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene tipos. | `false` |
| `withColumnFormats` | `boolean` | Indica si la columna de la tabla tiene formatos. | `false` |
| `withColumnValidation` | `boolean` | Indica si la columna de la tabla tiene validación. | `false` |
| `withColumnConstraints` | `boolean` | Indica si la columna de la tabla tiene restricciones. | `false` |
| `withColumnDefaults` | `boolean` | Indica si la columna de la tabla tiene valores predeterminados. | `false` |
| `withColumnRequired` | `boolean` | Indica si la columna de la tabla es obligatoria. | `false` |
| `withColumnOptional` | `boolean` | Indica si la columna de la tabla es opcional. | `false` |
| `withColumnUnique` | `boolean` | Indica si la columna de la tabla es única. | `false` |
| `withColumnNullable` | `boolean` | Indica si la columna de la tabla es anulable. | `false` |
| `withColumnReadonly` | `boolean` | Indica si la columna de la tabla es de solo lectura. | `false` |
| `withColumnEditable` | `boolean` | Indica si la columna de la tabla es editable. | `false` |
| `withColumnSearchable` | `boolean` | Indica si la columna de la tabla es buscable. | `false` |
| `withColumnSortable` | `boolean` | Indica si la columna de la tabla es ordenable. | `false` |
| `withColumnFilterable` | `boolean` | Indica si la columna de la tabla es filtrable. | `false` |
| `withColumnHidden` | `boolean` | Indica si la columna de la tabla está oculta. | `false` |
| `withColumnResizable` | `boolean` | Indica si la columna de la tabla es redimensionable. | `false` |
| `withColumnReorderable` | `boolean` | Indica si la columna de la tabla es reordenable. | `false` |
| `withColumnPinning` | `boolean` | Indica si la columna de la tabla está fijada. | `false` |
| `withColumnGrouping` | `boolean` | Indica si la columna de la tabla está agrupada. | `false` |
| `withColumnSummaries` | `boolean` | Indica si la columna de la tabla tiene resúmenes. | `false` |
| `withColumnTotals` | `boolean` | Indica si la columna de la tabla tiene totales. | `false` |
| `withColumnAverages` | `boolean` | Indica si la columna de la tabla tiene promedios. | `false` |
| `withColumnMedians` | `boolean` | Indica si la columna de la tabla tiene medianas. | `false` |
| `withColumnModes` | `boolean` | Indica si la columna de la tabla tiene modos. | `false` |
| `withColumnTypes` | `boolean` | Indica si la columna de la tabla tiene