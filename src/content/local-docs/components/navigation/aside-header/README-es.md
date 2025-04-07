<!--GITHUB_BLOCK-->

# AsideHeader

<!--/GITHUB_BLOCK-->

`AsideHeader` proporciona una experiencia de navegación flexible y personalizable dentro de su aplicación.
Los usuarios pueden personalizar fácilmente la apariencia de la barra lateral para que coincida con los colores de su marca y también agregar enlaces personalizados, íconos que se adapten específicamente a la funcionalidad de su aplicación.

El componente ofrece una solución sólida para crear sistemas de navegación intuitivos y visualmente atractivos, lo que mejora la experiencia del usuario y proporciona la flexibilidad necesaria para adaptarse a varios casos de uso.

```ts
import {AsideHeader} from '@gravity-ui/navigation';
```

<!--GITHUB_BLOCK-->

## Apariencia

<!--/GITHUB_BLOCK-->

### Estado

El componente tiene dos estados posibles: contraído, expandido.
Puedes gestionar entre estados usando `compact` `onChangeCompact` accesorios y también con el botón para ocultar. `hideCollapseButton`

### Decoración superior

La navegación resalta la sección superior con elementos de logotipo y subencabezado con `headerDecoration` accesorios.

### Fondo personalizado

El componente admite casos de tematización específicos, por ejemplo, imagen sobre fondo o división de secciones por color `customBackground`, `customBackgroundClassName` utilizando accesorios.

## Secciones

La navegación incluye 3 partes: la superior, la central y la inferior. Estas secciones son similares con algunas variaciones de posibilidades según la frecuencia de los casos de usuario.
**Nota importante**: Un usuario administra el estado de los elementos.

### La cima

La sección normalmente contiene elementos generales para todas las páginas del sitio e incluye el logotipo y los elementos que se encuentran debajo de él. El logotipo en el que se puede hacer clic puede resultar útil para navegar rápidamente a la página de inicio; si es necesario, el elemento (por ejemplo, búsqueda, catálogo) se coloca debajo de él.

Los elementos tienen acceso a la información sobre herramientas, ventanas emergentes y cajones, basta con seleccionar el comportamiento deseado al configurar esta sección.

### The Middle (elementos del menú)

La sección principal generalmente depende del contexto de la página, uno de los ejemplos que utilizan la navegación en sitios de varias páginas.
Los elementos se contraerán en tres puntos si no hay espacio vertical por defecto.

Los elementos de navegación pueden estar en uno de dos estados: contraído (isCollapsed), donde solo está visible el icono, y expandidos. Hay espacio para la personalización de todo el artículo a través de un envoltorio.

Con una configuración adicional, `AllPages` los usuarios pueden personalizar aún más el menú según sus preferencias ocultando los elementos innecesarios. Esto trae un nuevo estado para los objetos: anclados u ocultos. Si el elemento está anclado, siempre se mostrará en la sección.

La `onMenuItemsChanged` devolución de llamada es necesaria para agregar un componente adicional `All Pages` que muestra un panel para editar la lista de elementos del menú visibles.

**Nota importante**: Un usuario administra una lista modificada de los elementos del menú que recibe de la devolución de llamada y proporciona el nuevo estado de los elementos a `AsideHeader`.

### La parte inferior

El pie de página mejora la experiencia del usuario al ofrecer un fácil acceso a los elementos y recursos complementarios. Brinda la oportunidad de conectarse con el soporte y agregar información personalizada para asegurarse de que el usuario no se pierda.

Pueden tener sus propios componentes en el interior, o también puedes usarlos `FooterItem`.

#### Elemento resaltante

Resaltar un elemento en las ventanas modales puede resultar útil cuando un usuario quiere informar de un error a través de un formulario de comentarios y el formulario con el error se abre en una ventana modal.

En el `FooterItem` componente, puede pasar un `bringForward` accesorio, que muestra el icono por encima de las ventanas modales. Además, debe pasar una función a la `AsideHeader` que se notifique la apertura de ventanas modales.

## Renderizar contenido

La parte derecha, cerca de AideHeader, es el lugar para el contenido de la página principal.
Al expandir y contraer la navegación, la navegación `size` cambiará. Este conocimiento puede resultar útil, por ejemplo, para volver a calcular el diseño en algunos componentes.
La variable CSS `--gn-aside-header-size` contiene el tamaño de navegación real.

Consulte a continuación la ruta alternativa para renderizar el contenido.

### Optimización de renderizado

Si el contenido de tu aplicación necesita renderizarse más rápido que pasándolo, lanza `AsideHeader` accesorios,
es posible que deba cambiar el uso `AsideHeader` a un estilo avanzado con `PageLayout`.

<!--GITHUB_BLOCK-->

```diff
--- Main.tsx
+++ Main.tsx
-import {AsideHeader} from './AsideHeader'
+import {PageLayout, AsideFallback} from '@gravity-ui/navigation';
+const Aside = React.lazy(() =>
+    import('./Aside').then(({Aside}) => ({ default: Aside }))
+);

-    <AsideHeader renderContent={renderContent} {...restProps} />
+    <PageLayout>
+        <Suspense fallback={<AsideFallback />}>
+           <Aside />
+        </Suspense>
+
+        <PageLayout.Content>
+            <ContentExample />
+        </PageLayout.Content>
+    </PageLayout>
--- Aside.tsx
+++ Aside.tsx
-import {AsideHeader} from '@gravity-ui/navigation';
+import {PageLayoutAside} from '@gravity-ui/navigation';

export const Aside: FC = () => {
    return (
-        <AsideHeader {...props}>
+        <PageLayoutAside {...props}/>
    );
};
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre                    | Descripción                                                                                                                            |                                                       Tipo                                                        |      Predeterminado       |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------: | :-----------------------: |
| className                 | `class` Atributo HTML del logotipo                                                                                                     |                                                     `string`                                                      |                           |
| collapseTitle             | `CollapseButton` título para la navegación contraída                                                                                   |                                                     `string`                                                      | `"Свернуть"` `"Collapse"` |
| compacto                  | Estado visual de navegación                                                                                                            |                                                     `boolean`                                                     |          `false`          |
| customBackground          | `AsideHeader` fondo                                                                                                                    |                                                 `React.ReactNode`                                                 |                           |
| customBackgroundClassName | Anular los estilos del contenedor de fondo predeterminado                                                                              |                                                     `string`                                                      |                           |
| expandTitle               | `CollapseButton` título para ampliar la navegación                                                                                     |                                                     `string`                                                      | `"Развернуть"` `"Expand"` |
| headerDecoration          | Fondo de color de la sección superior con logotipo y elementos de subencabezado                                                        |                                                     `boolean`                                                     |          `false`          |
| hideCollapseButton        | Escondiéndose `CollapseButton`. Use `compact` prop para configurar el estado de navegación predeterminado                              |                                                     `boolean`                                                     |          `false`          |
| logotipo                  | El contenedor de logotipos incluye el icono, el título y la gestión de los clics                                                       |          [`Logo`](https://github.com/gravity-ui/navigation/blob/main/src/components/Logo/Readme.md#logo)          |                           |
| menuItems                 | Elementos de la sección central de navegación                                                                                          |                                                `Matriz<MenuItem>`                                                 |           `[]`            |
| menuMoreTitle             | Título de elemento adicional de MenuItems si los elementos no caben                                                                    |                                                     `string`                                                      |     `"Ещё"` `"More"`      |
| multipleTooltip           | Muestre la información sobre herramientas múltiple colocando el puntero del ratón sobre los elementos de MenuItems en estado contraído |                                                     `boolean`                                                     |          `false`          |
| onChangeCompact           | La llamada se llamará al cambiar el estado visual de la navegación                                                                     |                                           `(compact: boolean) => void;`                                           |                           |
| onClosePanel              | La llamada se llamará al cerrar el panel. Puede agregar paneles a través de `PanelItems` accesorios                                    |                                                   `() => void;`                                                   |                           |
| onMenuItemsChanged        | Se llamará a la devolución de llamada al actualizar la lista de elementos del menú en `AllPagesPanel`                                  |                                     `(artículos: Matriz<MenuItem>) => vacío`                                      |                           |
| onMenuMoreClick           | La llamada se llamará cuando algunos artículos no quepan y se haga clic en el botón «más»                                              |                                                   `() => void;`                                                   |                           |
| onAllPagesClick           | La llamada se llamará cuando se haga clic en el botón «Todas las páginas»                                                              |                                                   `() => void;`                                                   |                           |
| openModalSubscriber       | La función notifica los cambios `AsideHeader` de visibilidad de los modales                                                            |                                       `( (open: boolean) => void) => void`                                        |                           |
| panelItems                | Artículos para el `Drawer` componente. Se utiliza para mostrar información adicional sobre el contenido principal                      | [`Matriz<DrawerItem>`](https://github.com/gravity-ui/navigation/tree/main/src/components/Drawer#draweritem-props) |           `[]`            |
| renderContent             | Función que representa el contenido principal a la derecha del `AsideHeader`                                                           |                                    `(data: {size: number}) => React.ReactNode`                                    |                           |
| renderFooter              | Función que representa la sección inferior de navegación                                                                               |                                    `(data: {size: number}) => React.ReactNode`                                    |                           |
| árbitro                   | `ref` apuntar al ancla emergente                                                                                                       |                           `Reaccionar. Reenviar Ref<HTMLDivElement, AsideHeaderProps>`                            |                           |
| subheaderItems            | Elementos de la sección superior de navegación, bajo Logotipo                                                                          |                    `Matriz<{item: MenuItem; enableTooltip?: boolean; bringForward?: boolean}>`                    |           `[]`            |
| topAlert                  | El contenedor sobre la navegación basada en el componente uikit `Alert`                                                                |                                                    `TopAlert`                                                     |                           |
| qa                        | El valor que se va a pasar al `data-qa` atributo del `AsideHeader` contenedor                                                          |                                                     `string`                                                      |                           |

### `MenuItem`

| Nombre             | Descripción                                                                                                                      |                                                                  Tipo                                                                   |       Predeterminado        |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------: |
| afterMoreButton    | El elemento del menú se colocará al final, incluso si el elemento no cabe                                                        |                                                                `boolean`                                                                |                             |
| categoría          | La categoría a la que pertenece el elemento del menú. Necesidad de agrupar todas las páginas en el modo de visualización/edición |                                                                `string`                                                                 | `"Остальное"` `"All other"` |
| corriente          | El elemento actual/seleccionado                                                                                                  |                                                                `boolean`                                                                |           `false`           |
| escondido          | Elemento de visibilidad en el menú                                                                                               |                                                                `boolean`                                                                |           `false`           |
| icono              | Icono de menú basado en el componente uikit `Icon`                                                                               |                   [`IconProps['data']`](https://github.com/gravity-ui/uikit/tree/main/src/components/Icon#properties)                   |                             |
| iconSize           | Tamaño del icono del menú                                                                                                        |                                                            `number` `string`                                                            |            `18`             |
| iconQa             | El valor que se va a pasar al `data-qa` atributo del `Icon` contenedor                                                           |                                                                `string`                                                                 |                             |
| identificación     | El identificador del elemento del menú                                                                                           |                                                                `string`                                                                 |                             |
| itemWrapper        | El envoltorio de los elementos del menú                                                                                          | [`ItemWrapper`](https://github.com/gravity-ui/navigation/blob/b8367cf343fc20304bc3c8d9a337d9f7d803a9b3/src/components/types.ts#L32-L41) |                             |
| eslabón            | Atributo href HTML                                                                                                               |                                                                `string`                                                                 |                             |
| onItemClick        | La llamada se llamará al hacer clic en el elemento                                                                               |              `(artículo: MenuItem, colapsado: booleano, evento: <HTMLDivElement, MouseEvent> React.mouseEvent () = nulo>`               |                             |
| onItemClickCapture | La llamada se llamará al hacer clic en el elemento                                                                               |                                                ` (event: React.SyntheticEvent) => void`                                                 |                             |
| pedido             | Determine el orden de visualización en la navegación                                                                             |                                                                `number`                                                                 |                             |
| fijado             | El parámetro restringe la ocultación del elemento del menú en `AllPagesPanel`                                                    |                                                                `boolean`                                                                |           `false`           |
| rightAdornment     | Personaliza el lado derecho del elemento del menú                                                                                |                                                            `React.ReactNode`                                                            |                             |
| título             | El título del elemento del menú                                                                                                  |                                                            `React.ReactNode`                                                            |                             |
| tooltipText        | Contenido de la información sobre herramientas                                                                                   |                                                            `React.ReactNode`                                                            |                             |
| tipo               | El tipo de elemento del menú cambia de apariencia: `"regular"`, `"action"`, `"divider"`                                          |                                                                `string`                                                                 |         `"regular"`         |
| qa                 | El valor que se va a pasar al `data-qa` atributo                                                                                 |                                                                `string`                                                                 |                             |

### `TopAlert`

Top Alert puede resultar útil para mostrar información importante que los usuarios deben conocer. Esta alerta suele aparecer en todas las páginas, como llamadas a la acción o advertencias.

Puede personalizar el contenido interno y hacer que la alerta se pueda cerrar si es necesario. Para leer la altura de la alerta máxima, consulte el valor de la variable CSS `--gn-top-alert-height`.

| Nombre          | Descripción                                                                     |                                                Tipo                                                | Predeterminado |
| :-------------- | :------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------: | :------------: |
| acciones        | Conjunto de botones o componentes totalmente personalizados                     |  [`AlertActions`](https://github.com/gravity-ui/uikit/tree/main/src/components/Alert#properties)   |                |
| centrada        | Centrar todo el contenido                                                       |                                             `boolean`                                              |    `false`     |
| alinear         | Determina cómo se alinea verticalmente el contenido del componente de alerta    |      [`AlertAlign`](https://github.com/gravity-ui/uikit/tree/main/src/components/Alert#align)      |  `"baseline"`  |
| se puede cerrar | Mostrar el botón de cierre y hacer posible pasar el `onCloseTopAlert` accesorio |                                             `boolean`                                              |    `false`     |
| denso           | Agregue los acolchados superiores e inferiores al contenedor `TopAlert`         |                                             `boolean`                                              |    `false`     |
| icono           | Anular el icono predeterminado                                                  |    [`AlertIcon`](https://github.com/gravity-ui/uikit/tree/main/src/components/Alert#properties)    |                |
| mensaje         | Mensaje de la alerta                                                            | [`AlertMessage`](https://github.com/gravity-ui/uikit/tree/main/src/components/Alert#alert-message) |                |
| onCloseTopAlert | La llamada se llamará al hacer clic en el botón de cierre                       |                                            `() => void`                                            |                |
| título          | Título de la alerta                                                             |   [`AlertTitle`](https://github.com/gravity-ui/uikit/tree/main/src/components/Alert#alert-title)   |                |
| canción         | Apariencia de alertas                                                           |      [`AlertTheme`](https://github.com/gravity-ui/uikit/tree/main/src/components/Alert#theme)      |  `"warning"`   |
| vista           | Activar/desactivar el color de fondo de la alerta                               |       [`AlertView`](https://github.com/gravity-ui/uikit/tree/main/src/components/Alert#view)       |   `"filled"`   |

## API CSS

| Nombre                                                    | Descripción                                                                                                        |
| :-------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| `--gn-aside-header-decoration-collapsed-background-color` | Color de decoración para navegación contraída                                                                      |
| `--gn-aside-header-decoration-expanded-background-color`  | Color de decoración para una navegación ampliada                                                                   |
| `--gn-aside-header-background-color`                      | Color de fondo de navegación                                                                                       |
| `--gn-aside-header-collapsed-background-color`            | Color de fondo de navegación contraído                                                                             |
| `--gn-aside-header-expanded-background-color`             | Color de fondo de navegación ampliado                                                                              |
| `--gn-aside-header-divider-horizontal-color`              | Todo el color de la línea divisoria horizontal                                                                     |
| `--gn-aside-header-divider-vertical-color`                | Línea divisoria vertical, color entre `AsideHeader` y contenido                                                    |
| `--gn-top-alert-height`                                   | **Solo lectura**.`AsideHeader` altura máxima de alerta                                                             |
| `--gn-aside-header-padding-top`                           | Acolchado superior de navegación. Puede resultar útil cuando se ocultan los elementos del logotipo y del subtítulo |
| Artículo                                                  |                                                                                                                    |
| `--gn-aside-header-general-item-icon-color`               | Color del icono para los elementos de subencabezado y pie de página                                                |
| `--gn-aside-header-item-icon-color`                       | Color del icono para los elementos de CompositeBar                                                                 |
| `--gn-aside-header-item-text-color`                       | Color del elemento de texto                                                                                        |
| `--gn-aside-header-item-background-color-hover`           | Color del texto al pasar el ratón                                                                                  |
| Artículo actual                                           |                                                                                                                    |
| `--gn-aside-header-item-current-background-color`         | Color de fondo del elemento actual                                                                                 |
| `--gn-aside-header-item-current-icon-color`               | Color del icono del elemento actual                                                                                |
| `--gn-aside-header-item-current-text-color`               | Color del texto del elemento actual                                                                                |
| `--gn-aside-header-item-current-background-color-hover`   | El color del icono del elemento actual al pasar el ratón                                                           |
| `--gn-aside-header-item-collapsed-radius`                 | Radio del borde del artículo para navegación contraída                                                             |
| `--gn-aside-header-item-expanded-radius`                  | Radio del borde del artículo para una navegación ampliada                                                          |
| índices z                                                 |                                                                                                                    |
| `--gn-aside-header-z-index`                               | Índice z del encabezado lateral                                                                                    |
| `--gn-aside-header-panel-z-index`                         | Índice z del panel de cabecera lateral (componente de cajón)                                                       |
| `--gn-aside-header-pane-top-z-index`                      | Índice z del panel superior                                                                                        |
| `--gn-aside-header-content-z-index`                       | Índice z de contenido (parte derecha)                                                                              |
