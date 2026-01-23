# @gravity-ui/dashkit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dashkit)](https://www.npmjs.com/package/@gravity-ui/dashkit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dashkit/.github/workflows/ci.yaml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/dashkit/actions/workflows/ci.yaml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dashkit/)

# DashKit

Una librería para renderizar cuadrículas de dashboards.

## Instalación

```bash
npm i @gravity-ui/dashkit @gravity-ui/uikit
```

## Descripción

La librería se utiliza para alinear widgets en una cuadrícula, redimensionarlos, añadir nuevos y eliminarlos.
El widget es un componente de React. Por ejemplo, texto, gráficos e imágenes.

Los nuevos widgets se añaden a través de un sistema de plugins.

### Plugins

Los plugins son necesarios para crear widgets personalizados.

### Props

```ts
type ItemManipulationCallback = (eventData: {
    layout: Layouts;
    oldItem: Layout;
    newItem: Layout;
    placeholder: Layout;
    e: MouseEvent;
    element: HTMLElement;
}) => void;

interface DashKitProps {
  config: Config;
  editMode: boolean;
  onItemEdit: ({id}: {id: string}) => void;
  onChange: (data: {config: Config; itemsStateAndParams: ItemsStateAndParams}) => void;
  onDrop: (dropProps: ItemDropProps) => void;
  onItemMountChange: (item: ConfigItem, state: {isAsync: boolead; isMounted: boolean}) => void;
  onItemRender: (item: ConfigItem) => void;

  onDragStart?: ItemManipulationCallback;
  onDrag?: ItemManipulationCallback;
  onDragStop?: ItemManipulationCallback;
  onResizeStart?: ItemManipulationCallback;
  onResize?: ItemManipulationCallback;
  onResizeStop?: ItemManipulationCallback;

  defaultGlobalParams: GlobalParams;
  globalParams: GlobalParams;
  itemsStateAndParams: ItemsStateAndParams;
  settings: SettingsProps;
  context: ContextProps;
  overlayControls?: Record<string, OverlayControlItem[]> | null;
  overlayMenuItems?: MenuItems[] | null;
  noOverlay?: boolean;

  focusable?: boolean;
  onItemFocus: (item: ConfigItem) => void;
  onItemBlur: (item: ConfigItem) => void;

  draggableHandleClassName?: string;
  getPreparedCopyItemOptions?: (options: PreparedCopyItemOptions) => PreparedCopyItemOptions;
  onCopyFulfill?: (error: null | Error, data?: PreparedCopyItemOptions) => void;
}
```

- **config**: [Config](#Config).
- **editMode**: Indica si el modo de edición está activado.
- **onItemEdit**: Se llama al hacer clic para editar un widget.
- **onChange**: Se llama cuando cambian la configuración o [itemsStateAndParams](#itemsStateAndParams).
- **onDrop**: Se llama cuando un elemento se suelta desde ActionPanel usando (#DashKitDnDWrapper)
- **onItemMountChange**: Se llama cuando cambia el estado de montaje de un elemento.
- **onItemRender**: Se llama cuando finaliza el renderizado de un elemento.
- **defaultGlobalParams**, **globalParams**: [Parámetros](#Params) que afectan a todos los widgets. En DataLens, `defaultGlobalParams` son parámetros globales establecidos en la configuración del dashboard. `globalParams` son parámetros globales que se pueden establecer en la URL.
- **itemsStateAndParams**: [itemsStateAndParams](#itemsStateAndParams).
- **settings**: Configuración de DashKit.
- **context**: Objeto que se pasará a todos los widgets.
- **overlayControls**: Objeto que reemplaza los controles del widget durante la edición. Si no se transmite, se mostrarán los controles básicos. Si se pasa `null`, solo se mostrará el botón de cierre o un menú personalizado.
- **overlayMenuItems**: Elementos de menú desplegable personalizados.
- **noOverlay**: Si es `true`, la superposición y los controles no se mostrarán durante la edición.
- **focusable**: Si es `true`, los elementos de la cuadrícula serán enfocables.
- **onItemFocus**: Se llama cuando `focusable` es true y un elemento recibe el foco.
- **onItemBlur**: Se llama cuando `focusable` es true y un elemento pierde el foco.
- **draggableHandleClassName**: Nombre de la clase CSS del elemento que hace que el widget sea arrastrable.
- **onDragStart**: Llamado por ReactGridLayout cuando comienza a arrastrar un elemento.
- **onDrag**: Llamado por ReactGridLayout mientras se arrastra un elemento.
- **onDragStop**: Llamado por ReactGridLayout cuando se detiene el arrastre de un elemento.
- **onResizeStart**: Llamado por ReactGridLayout cuando comienza a redimensionar un elemento.
- **onResize**: Llamado por ReactGridLayout mientras se redimensiona un elemento.
- **onResizeStop**: Llamado por ReactGridLayout cuando se detiene el redimensionamiento de un elemento.
- **getPreparedCopyItemOptions**: Se llama para convertir un elemento copiado en un objeto serializable antes de guardarlo en el localStorage. Debe usarse en lugar de la prop obsoleta `context.getPreparedCopyItemOptions`.
- **onCopyFulfill**: Se llama cuando la copia de un elemento finaliza con `error=null` y `data` definido en caso de éxito, y con `error: Error` sin `data` en caso contrario.

## Uso

### Configuración de DashKit

Antes de usar `DashKit` como un componente de React, debe configurarse.

- Establecer idioma

  ```js
  import {configure, Lang} from '@gravity-ui/uikit';

  configure({lang: Lang.En});
  ```

- DashKit.setSettings

  Se utiliza para la configuración global de DashKit (como márgenes entre widgets, tamaños predeterminados de widgets y menú de superposición de widgets).

  ```js
  import {DashKit} from '@gravity-ui/dashkit';

  DashKit.setSettings({
    gridLayout: {margin: [8, 8]},
    isMobile: true,
    // menu: [] as Array<MenuItem>,
  });
  ```

- DashKit.registerPlugins

  Registro y configuración de plugins.

  ```js
  import {DashKit} from '@gravity-ui/dashkit';
  import {pluginTitle, pluginText} from '@gravity-ui/dashkit';

  DashKit.registerPlugins(
    pluginTitle,
    pluginText.setSettings({
      apiHandler({text}) {
        return api.getMarkdown(text);
      },
    }),
  );

  DashKit.registerPlugins({
    type: 'custom',
    defaultLayout: {
      w: 10,
      h: 8,
    },
    renderer: function CustomPlugin() {
      return <div>Custom widget with custom controls</div>;
    },
  });
  ```

### Config

```ts
export interface Config {
  salt: string; // para formar un ID único
  counter: number; // para formar un ID único, solo aumenta
  items: ConfigItem[]; // estados iniciales de los widgets
  layout: ConfigLayout[]; // posición del widget en la cuadrícula https://github.com/react-grid-layout
  aliases: ConfigAliases; // alias para parámetros ver #Params
  connections: ConfigConnection[]; // enlaces entre widgets ver #Params
}
```

Ejemplo de configuración:

```ts
import {DashKitProps} from '@gravity-ui/dashkit';
```

```ts
const config: DashKitProps['config'] = {
  salt: '0.46703554571365613',
  counter: 4,
  items: [
    {
      id: 'tT',
      data: {
        size: 'm',
        text: 'Título',
        showInTOC: true,
      },
      type: 'title',
      namespace: 'default',
      orderId: 1,
    },
    {
      id: 'Ea',
      data: {
        text: 'modo _editActive',
        _editActive: true,
      },
      type: 'text',
      namespace: 'default',
    },
    {
      id: 'zR',
      data: {
        text: '### Texto',
      },
      type: 'text',
      namespace: 'default',
      orderId: 0,
    },
    {
      id: 'Dk',
      data: {
        foo: 'bar',
      },
      type: 'custom',
      namespace: 'default',
      orderId: 5,
    },
  ],
  layout: [
    {
      h: 2,
      i: 'tT',
      w: 36,
      x: 0,
      y: 0,
    },
    {
      h: 6,
      i: 'Ea',
      w: 12,
      x: 0,
      y: 2,
    },
    {
      h: 6,
      i: 'zR',
      w: 12,
      x: 12,
      y: 2,
    },
    {
      h: 4,
      i: 'Dk',
      w: 8,
      x: 0,
      y: 8,
    },
  ],
  aliases: {},
  connections: [],
};
```

Añadir un nuevo elemento a la configuración:

```ts
const newLayout = updateLayout: [
  {
    h: 6,
    i: 'Ea',
    w: 12,
    x: 0,
    y: 6,
  },
  {
    h: 4,
    i: 'Dk',
    w: 8,
    x: 0,
    y: 12,
  },
];

const newConfig = DashKit.setItem({
  item: {
    data: {
      text: `Algún texto`,
    },
    namespace: 'default',
    type: 'text',
    // Opcional. Si se necesita insertar un nuevo elemento en el layout actual con dimensiones predefinidas
    layout: { // El elemento actual se inserta antes de 'Ea'
      h: 6,
      w: 12,
      x: 0,
      y: 2,
    },,
  },
  config: config,
  options: {
    // Opcional. Nuevos valores de layout para elementos existentes cuando se suelta un nuevo elemento desde ActionPanel
    updateLayout: newLayout,
  },
});
```

Cambiar un elemento existente en la configuración:

```ts
const newConfig = DashKit.setItem({
  item: {
    id: 'tT', // item.id
    data: {
      size: 'm',
      text: `Nuevo título`,
    },
    namespace: 'default',
    type: 'title',
  },
  config: config,
});
```

Eliminar un elemento de la configuración:

```ts
import {DashKitProps} from '@gravity-ui/dashkit';

const oldItemsStateAndParams: DashKitProps['itemsStateAndParams'] = {};

const {config: newConfig, itemsStateAndParams} = DashKit.removeItem({
  id: 'tT', // item.id
  config: config,
  itemsStateAndParams: this.state.itemsStateAndParams,
});
```

### Parámetros

```ts
type Params = Record<string, string | string[]>;
```

`DashKit` genera parámetros según los parámetros predeterminados para widgets, enlaces y alias. Estos parámetros son necesarios para la biblioteca [ChartKit](https://github.com/gravity-ui/chartkit).

Orden de generación:

1. `defaultGlobalParams`
2. Parámetros predeterminados del widget `item.default`
3. `globalParams`
4. Parámetros de [itemsStateAndParams](#itemsStateAndParams) según la cola.

### itemsStateAndParams

Objeto que almacena los parámetros y estados de los widgets, así como una cola de cambios de parámetros.
Tiene un campo `__meta__` para almacenar la cola e información meta.

```ts
interface StateAndParamsMeta = {
    __meta__: {
        queue: {id: string}[]; // cola
        version: number; // versión actual de itemsStateAndParams
    };
}
```

Y también estados y parámetros de widgets:

```ts
interface ItemsStateAndParamsBase {
  [itemId: string]: {
    state?: Record<string, any>;
    params?: Params;
  };
}
```

```ts
type ItemsStateAndParams = StateAndParamsMeta & ItemsStateAndParamsBase;
```

### Menú

Puedes especificar un menú superpuesto personalizado para los widgets de DashKit en modo de edición.

```ts
type MenuItem = {
  id: string; // id único
  title?: string; // título de texto
  icon?: ReactNode; // nodo de icono
  iconSize?: number | string; // tamaño del icono en px como número o como cadena con unidades
  handler?: (item: ConfigItem) => void; // manejador de acción personalizado del elemento
  visible?: (item: ConfigItem) => boolean; // manejador de visibilidad opcional para filtrar elementos del menú
  className?: string; // propiedad de clase personalizada
};

// usar un array de elementos de menú en la configuración
<Dashkit overlayMenuItems={[] as Array<MenuItem> | null} />

[obsoleto]
// la propiedad overlayMenuItems tiene mayor prioridad que el menú setSettings
DashKit.setSettings({menu: [] as Array<MenuItem>});
```

### Elementos arrastrables desde ActionPanel

#### DashKitDnDWrapper

```ts
type DraggedOverItem = {
  h: number;
  w: number;
  type: string;
  parent: string;
  i?: number;
};

interface DashKitDnDWrapperProps {
  dragImageSrc?: string;
  onDragStart?: (dragProps: ItemDragProps) => void;
  onDragEnd?: () => void;
  onDropDragOver?: (draggedItem: DraggedOverItem, sharedItem: DraggedOverItem | null) => void | boolean;
}
```

- **dragImageSrc**: Vista previa de la imagen de arrastre, por defecto se utiliza un png transparente de 1px en base64.
- **onDragStart**: Callback que se llama cuando un elemento se arrastra desde ActionPanel.
- **onDragEnd**: Callback que se llama cuando se suelta el elemento o se cancela el arrastre.

```ts
type ItemDragProps = {
    type: string; // Tipo de plugin
    layout?: { // Opcional. Tamaño del elemento de diseño para vista previa e inicialización
        w?: number;
        h?: number;
    };
    extra?: any; // Contexto personalizado del usuario
};
```

```ts
type ItemDropProps = {
    commit: () => void; // La función de callback debe llamarse después de que se realicen todas las operaciones de configuración
    dragProps: ItemDragProps; // Propiedades de arrastre del elemento
    itemLayout: ConfigLayout; // Dimensiones de diseño del elemento calculadas
    newLayout: ConfigLayout[]; // Nuevo diseño después de soltar el elemento
};
```


#### Ejemplo:

```jsx
const overlayMenuItems = [
  {
    id: 'chart',
    icon: <Icon data={ChartColumn} />,
    title: 'Gráfico',
    qa: 'chart',
    dragProps: { // ItemDragProps
        type: 'custom', // Tipo de plugin registrado
    },
  }
]

const onDrop = (dropProps: ItemDropProps) => {
  // ... añadir elemento a tu configuración
  dropProps.commit();
}

<DashKitDnDWrapper>
  <DashKit editMode={true} config={config} onChange={onChange} onDrop={onDrop} />
  <ActionPanel items={overlayMenuItems} />
</DashKitDnDWrapper>
```

### API CSS

| Nombre                                           | Descripción           |
| :--------------------------------------------- | :-------------------- |
| Variables del panel de acciones                         |                       |
| `--dashkit-action-panel-color`                 | Color de fondo      |
| `--dashkit-action-panel-border-color`          | Color del borde          |
| `--dashkit-action-panel-border-radius`         | Radio del borde         |
| Variables de los elementos del panel de acciones                    |                       |
| `--dashkit-action-panel-item-color`            | Color de fondo       |
| `--dashkit-action-panel-item-text-color`       | Color del texto      |
| `--dashkit-action-panel-item-color-hover`      | Color de fondo al pasar el ratón |
| `--dashkit-action-panel-item-text-color-hover` | Color del texto al pasar el ratón      |
| Variables de la superposición                             |                       |
| `--dashkit-overlay-border-color`               | Color del borde          |
| `--dashkit-overlay-color`                      | Color de fondo      |
| `--dashkit-overlay-opacity`                    | Opacidad               |
| Variables de los elementos de la cuadrícula                            |                       |
| `--dashkit-grid-item-edit-opacity`             | Opacidad               |
| `--dashkit-grid-item-border-radius`            | Radio del borde            |
| Variables del marcador de posición                          |                       |
| `--dashkit-placeholder-color`                  | Color de fondo      |
| `--dashkit-placeholder-opacity`                | Opacidad               |

#### Ejemplo de uso

```css
.custom-theme-wrapper {
  --dashkit-grid-item-edit-opacit: 1;
  --dashkit-overlay-color: var(--g-color-base-float);
  --dashkit-overlay-border-color: var(--g-color-base-float);
  --dashkit-overlay-opacity: 0.5;

  --dashkit-action-panel-border-color: var(--g-color-line-info);
  --dashkit-action-panel-color: var(--g-color-base-float-accent);
  --dashkit-action-panel-border-radius: var(--g-border-radius-xxl);
}
```

```tsx
// ....

const CustomThemeWrapper = (props: {
  dashkitProps: DashkitProps;
  actionPanelProps: ActionPanelProps;
}) => {
  return (
    <div className="custom-theme-wrapper">
      <Dashkit {...props.dashkitProps} />
      <ActionPanel {...props.actionPanelProps} />
    </div>
  );
};
```

## Desarrollo

### Compilar y observar

- Compilar dependencias `npm ci`
- Compilar proyecto `npm run build`
- Compilar storybook `npm run start`

Por defecto, storybook se ejecuta en `http://localhost:7120/`.
Los nuevos cambios de un proyecto no siempre se detectan cuando storybook está en ejecución, por lo que es mejor recompilar el proyecto manualmente y reiniciar storybook.


### Ejemplo de configuración de nginx para desarrollo en una máquina de desarrollo

```bash
server {
    server_name dashkit.username.ru;

    include common/ssl;

    access_log /home/username/logs/common.access.log;
    error_log /home/username/logs/common.error.log;

    root /home/username/projects/dashkit;

    location / {
        try_files $uri @node;
    }

    location @node {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://127.0.0.1:7120;
        proxy_redirect off;
    }
}

```