<!--GITHUB_BLOCK-->

## HotkeysPanel

<!--/GITHUB_BLOCK-->

Un panel de navegación para la documentación sobre las teclas rápidas.
El panel muestra un conjunto de teclas rápidas para su aplicación con una descripción de su propósito.

```ts
import {HotkeysPanel} from '@gravity-ui/navigation';
```

### PropTypes

| Propiedad               | Tipo            | Necesario | Predeterminado | Descripción                                                    |
| :---------------------- | :-------------- | :-------: | :------------- | :------------------------------------------------------------- |
| teclas de acceso rápido | `Array`         |    sí     |                | Lista de grupos de teclas rápidas                              |
| título                  | `Array`         |           |                | El título del panel                                            |
| visible                 | `Boolean`       |    sí     |                | Ya sea que el cajón esté visible o no                          |
| onClose                 | `Function`      |           |                | Cerrar el manipulador de cajones                               |
| filtrable               | `Boolean`       |           | cierto         | Mostrar o no la entrada de búsqueda                            |
| filterPlaceholder       | `String`        |           |                | Marcador de posición de entrada de búsqueda                    |
| filterClassName         | `String`        |           |                | Nombre de clase de entrada de búsqueda                         |
| leftOffset              | `Number/String` |           | 0              | Cajón desplazado a la izquierda                                |
| topOffset               | `Number/String` |           | 0              | Parte superior del cajón desplazada                            |
| emptyState              | `ReactNode`     |           |                | No hay marcador de posición para los resultados de la búsqueda |
| className               | `String`        |           |                | Nombre de la clase de cajón                                    |
| drawerItemClassName     | `String`        |           |                | Nombre de la clase de artículo de cajón                        |
| titleClassName          | `String`        |           |                | Nombre de la clase de título                                   |
| itemContentClassName    | `String`        |           |                | Nombre de la clase de contenido del elemento de la lista       |
| listClassName           | `String`        |           |                | Nombre de clase de lista                                       |

[Y todos los `List` PropTypes, pero no `items` los accesorios de filtro (los puedes encontrar aquí)](https://github.com/gravity-ui/uikit/blob/main/src/components/List/README.md)

## API CSS

| Nombre                               | Descripción                                  | Predeterminado |
| :----------------------------------- | :------------------------------------------- | :------------: |
| `--hotkeys-panel-width`              | El ancho del panel                           |    `400px`     |
| `--hotkeys-panel-vertical-padding`   | Los acolchados superior e inferior del panel |     `18px`     |
| `--hotkeys-panel-horizontal-padding` | Los acolchados izquierdo y derecho del panel |     `24px`     |

### Uso

Vea el ejemplo `src/components/HotkeysPanel/__stories__/HotkeysPanelShowcase` de un libro de cuentos.
