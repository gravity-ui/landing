Un panel de navegación para la documentación de atajos de teclado.
El panel muestra un conjunto de atajos de teclado para su aplicación con una descripción de su propósito.

```ts
import {HotkeysPanel} from '@gravity-ui/navigation';
```

## Propiedades
GRAVITY_TRANSLATION_BLOCK_0_END

| Propiedad                | Tipo            | Requerido | Predeterminado | Descripción                                                                  |
| :---------------------- | :-------------- | :-------: | :------------- | :--------------------------------------------------------------------------- |
| hotkeys                 | `Array`         |    sí     |                | Lista de grupos de atajos de teclado                                         |
| title                   | `ReactNode`     |           |                | El título del panel                                                          |
| togglePanelHotkey       | `String`        |           |                | El atajo de teclado para abrir el panel                                      |
| open                    | `Boolean`       |    sí     |                | Si el cajón está abierto o no                                                |
| onClose                 | `Function`      |           |                | Manejador para cerrar el cajón                                               |
| filterable              | `Boolean`       |           | true           | Si mostrar o no el campo de búsqueda                                         |
| filterPlaceholder       | `String`        |           |                | Marcador de posición para el campo de búsqueda                               |
| filterClassName         | `String`        |           |                | Nombre de clase para el campo de búsqueda                                    |
| leftOffset              | `Number/String` |           |                | Desplazamiento izquierdo del cajón                                           |
| topOffset               | `Number/String` |           |                | Desplazamiento superior del cajón                                            |
| emptyState              | `ReactNode`     |           |                | Marcador de posición para cuando no hay resultados de búsqueda               |
| className               | `String`        |           |                | Nombre de clase para el cajón                                                |
| drawerItemClassName     | `String`        |           |                | Nombre de clase para los elementos del cajón                                 |
| titleClassName          | `String`        |           |                | Nombre de clase para el título                                               |
| itemContentClassName    | `String`        |           |                | Nombre de clase para el contenido de los elementos de la lista               |
| listClassName           | `String`        |           |                | Nombre de clase para la lista                                                |
| platform                | `'pc'`/`'mac'`  |           | auto           | Plataforma para el formato de visualización de atajos de teclado             |
| drawerProps             | `DrawerProps`   |           |                | Propiedades adicionales para el componente `Drawer` (style, container, hideVeil, etc.) |
| disableNavigationOffset | `Boolean`       |           | false          | Si deshabilitar el desplazamiento izquierdo automático basado en el tamaño de `AsideHeader` |

## API CSS

| Nombre                                 | Descripción                       | Por defecto |
| :----------------------------------- | :-------------------------------- | :---------: |
| `--hotkeys-panel-width`              | El ancho del panel            | `400px` |
| `--hotkeys-panel-vertical-padding`   | El padding superior e inferior del panel | `18px`  |
| `--hotkeys-panel-horizontal-padding` | El padding izquierdo y derecho del panel | `24px`  |

### Uso

Ver ejemplo de storybook `src/components/HotkeysPanel/__stories__/HotkeysPanelShowcase`.