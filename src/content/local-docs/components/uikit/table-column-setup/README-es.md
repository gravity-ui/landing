El componente `TableColumnSetup` proporciona una interfaz de usuario para configurar la visibilidad y el orden de las columnas de una tabla. Muestra un botón que abre una ventana emergente con una lista de columnas disponibles, lo que permite a los usuarios mostrar/ocultar columnas y, opcionalmente, reordenarlas mediante arrastrar y soltar.

```tsx
import {TableColumnSetup} from '@gravity-ui/uikit/legacy';
```

Este componente es obsoleto: las nuevas funcionalidades van a [`@gravity-ui/table`](https://github.com/gravity-ui/table), consulta la [guía de migración a v8](../../../../docs/migration-to-v8.md#table-and-tablecolumnsetup). Como todo en `@gravity-ui/uikit/legacy`, necesita las dependencias opcionales peer `@hello-pangea/dnd`, `react-window` y `react-virtualized-auto-sizer` instaladas junto con el paquete: el punto de entrada carga todas ellas, independientemente de lo que importes.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Columnas ordenables

Habilita la funcionalidad de arrastrar y soltar para permitir a los usuarios reordenar columnas estableciendo la propiedad `sortable` en `true`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Modos de aplicación

Controla cuándo se aplican los cambios utilizando la propiedad `hideApplyButton`:

- `true` - Los cambios se aplican inmediatamente cuando el usuario cambia la visibilidad de las columnas.
- `false` - Los cambios se aplican solo cuando el usuario hace clic en el botón Aplicar.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Visualización de estado

Muestra el recuento de columnas seleccionadas en el botón del selector habilitando la propiedad `showStatus`.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Selector personalizado

Personaliza el botón de activación utilizando la propiedad `renderSwitcher`.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Propiedades

| Nombre            | Descripción                                                     |                            Tipo                             | Predeterminado |
| :---------------- | :-------------------------------------------------------------- | :---------------------------------------------------------: | :------------: |
| items           | Matriz de elementos de configuración de columna                             |                  `TableColumnSetupItem[]`                   |                |
| onUpdate        | Callback que se activa cuando cambian la configuración de la columna                |          `(items: TableColumnSetupItem[]) => void`          |                |
| disabled        | Deshabilita el botón del selector                                    |                          `boolean`                          |     `false`    |
| sortable        | Habilita la ordenación de columnas mediante arrastrar y soltar                        |                          `boolean`                          |     `true`     |
| hideApplyButton | Cuándo aplicar los cambios: inmediatamente o manualmente a través del botón Aplicar |                          `boolean`                          |     `false`    |
| showStatus      | Muestra el recuento de columnas seleccionadas/totales en el botón del selector           |                          `boolean`                          |     `false`    |
| popupWidth      | Ancho de la ventana emergente                                              |                      `number \| 'fit'`                      |                |
| popupPlacement  | Posicionamiento de la ventana emergente en relación con el activador                             |    [`PopupPlacement`](../../Popup/README.md#properties)     |                |
| renderSwitcher  | Función de renderizado personalizada para el botón del selector                  | `(props: SwitcherProps) => React.ReactElement \| undefined` |                |
| switcher        | **Obsoleto.** Usa `renderSwitcher` en su lugar                                |              `React.ReactElement \| undefined`              |                |
| getItemTitle    | Función para obtener el título del elemento                                      |      `(item: TableColumnSetupItem) => React.ReactNode`      |                |
| className       | Clase CSS personalizada para el elemento raíz                                  |                          `string`                           |                |

### TableColumnSetupItem

| Nombre     | Descripción                                       |        Tipo         | Por defecto |
| :--------- | :------------------------------------------------ | :-----------------: | :---------: |
| id       | Identificador único para la columna                  |      `string`       |         |
| title    | Título a mostrar para la columna                      |  `React.ReactNode`  |         |
| selected | Si la columna es visible actualmente           |      `boolean`      |         |
| required | Si la columna es obligatoria (no se puede ocultar) |      `boolean`      |         |
| sticky   | Posicionamiento fijo para la columna                 | `'left' \| 'right'` |         |

### SwitcherProps

| Nombre      | Descripción                            |                   Tipo                    |
| :-------- | :------------------------------------- | :---------------------------------------: |
| onClick   | Manejador de evento click para el selector   |  `React.MouseEventHandler<HTMLElement>`   |
| onKeyDown | Manejador de evento keydown para el selector | `React.KeyboardEventHandler<HTMLElement>` |