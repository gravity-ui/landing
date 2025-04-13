# @gravity-ui/dashkit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dashkit)](https://www.npmjs.com/package/@gravity-ui/dashkit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dashkit/.github/workflows/ci.yaml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/dashkit/actions/workflows/ci.yaml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dashkit/)

# DashKit

Una biblioteca de representación de cuadrículas de paneles.

## Instalación

```bash
npm i @gravity-ui/dashkit @gravity-ui/uikit
```

## Descripción

La biblioteca se usa para alinear los widgets en una cuadrícula, cambiar su tamaño, agregar otros nuevos y eliminarlos.
El widget es un componente de reacción. Por ejemplo, texto, gráficos e imágenes.

Los nuevos widgets se añaden a través de un sistema de complementos.

### Plugins

Se requieren complementos para crear widgets personalizados.

### utilería

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

- **config**: [config.](#Config)
- **Modo de edición:** Si el modo de edición está activado.
- **Sobre el artículo Editar:** Se llama cuando haces clic para editar un widget.
- **En caso de cambio**: Se llama cuando se cambian la configuración o los [ItemsStateAndParams](#itemsStateAndParams).
- **OnDrop**: Se llama cuando un elemento se cae del ActionPanel usando (#DashKitDnDWrapper)
- **Al cambiar el montaje del artículo:** Se llama cuando cambia el estado del montaje del objeto
- **OnItemRender:** Se llama cuando se completa la renderización del elemento
- **Parámetros globales predeterminados, parámetros globales**: \*\*\*\* [Parámetros](#Params) que afectan a todos los widgets. En DataLens, los parámetros globales `defaultGlobalParams` se establecen en la configuración del tablero. `globalParams` son parámetros globales que se pueden configurar en la URL.
- ** [ItemsStateAndParams: ItemsStateAndParams**.](#itemsStateAndParams)
- **ajustes**: Configuración de DashKit.
- **contexto**: Objeto que aparecerá en todos los widgets.
- **Controles de superposición**: Objeto que anula los controles del widget en el momento de la edición. Si no se transmite, se mostrarán los controles básicos. Si `null` se pasa, solo se mostrará el botón de cierre o el menú personalizado.
- **Elementos del menú superpuesto**: Elementos de menú desplegable personalizados
- **Sin superposición**: Si `true`, la superposición y los controles no se muestran durante la edición.
- **enfocable:** Si `true`, los elementos de la cuadrícula se podrán enfocar.
- **Enfoque en el artículo:** Se llama cuando `focusable` es verdadero y el objeto está enfocado.
- **Sobre el artículo Blur:** Se llama cuando `focusable` es verdadero y el objeto está enfocado.
- **Nombre de clase de DraggableHandle**: Nombre de clase CSS del elemento que hace que el widget se pueda arrastrar.
- **Al arrastrar Start**: Se llama a ReactGridLayout cuando se inicia el arrastre del elemento
- **OnDrag**: Se llama a ReactGridLayout mientras se arrastra el elemento
- **En Dragstop**: Se llama a ReactGridLayout cuando se detiene el arrastre del elemento
- **Al cambiar el tamaño, comience**: Se llama a ReactGridLayout cuando se inicia el cambio de tamaño del elemento
- **Un cambio de tamaño**: Se llama a ReactGridLayout al cambiar el tamaño del elemento
- **En Resize Stop**: Se llama a ReactGridLayout cuando se detiene el cambio de tamaño del elemento
- **Opciones de GetPreparedCopyItem**: Se llama para convertir el elemento copiado en un objeto serializable antes de guardarlo en el almacenamiento local. Debería usarse en lugar del accesorio obsoleto `context.getPreparedCopyItemOptions`
- **En CopyFulfill**: Se llama cuando la copia del elemento finaliza `error=null` y se define `data` una vez finalizada la operación correctamente y `error: Error` sin `data` otra

## Uso

### Configuración de DashKit

Antes de usarlo `DashKit` como componente de reacción, debe configurarse.

- establecer idioma

  ```js
  import {configure, Lang} from '@gravity-ui/uikit';

  configure({lang: Lang.En});
  ```

- Dashkit.Establecer ajustes

  Se utiliza para la configuración global de DashKit (como los márgenes entre los widgets, los tamaños predeterminados de los widgets y el menú de superposición de widgets)

  ```js
  import {DashKit} from '@gravity-ui/dashkit';

  DashKit.setSettings({
    gridLayout: {margin: [8, 8]},
    isMobile: true,
    // menu: [] as Array<MenuItem>,
  });
  ```

- Plugins de registro de Dashkit.Register

  Registro y configuración de complementos

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
  salt: string; // to form a unique id
  counter: number; // to form a unique id, only increases
  items: ConfigItem[]; //  initial widget states
  layout: ConfigLayout[]; // widget position on the grid https://github.com/react-grid-layout
  aliases: ConfigAliases; // aliases for parameters see #Params
  connections: ConfigConnection[]; // links between widgets see #Params
}
```

Ejemplo de configuración:

```ts
import {DashKitProps} from '@gravity-ui/dashkit';

const config: DashKitProps['config'] = {
  salt: '0.46703554571365613',
  counter: 4,
  items: [
    {
      id: 'tT',
      data: {
        size: 'm',
        text: 'Caption',
        showInTOC: true,
      },
      type: 'title',
      namespace: 'default',
      orderId: 1,
    },
    {
      id: 'Ea',
      data: {
        text: 'mode _editActive',
        _editActive: true,
      },
      type: 'text',
      namespace: 'default',
    },
    {
      id: 'zR',
      data: {
        text: '### Text',
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

Agregue un nuevo elemento a la configuración:

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
      text: `Some text`,
    },
    namespace: 'default',
    type: 'text',
    // Optional. If new item needed to be inserted in current layout with predefined dimensions
    layout: { // Current item inseterted before 'Ea'
      h: 6,
      w: 12,
      x: 0,
      y: 2,
    },,
  },
  config: config,
  options: {
    // Optional. New layout values for existing items when new element is dropped from ActionPanel
    updateLayout: newLayout,
  },
});
```

Cambia un elemento existente en la configuración:

```ts
const newConfig = DashKit.setItem({
  item: {
    id: 'tT', // item.id
    data: {
      size: 'm',
      text: `New caption`,
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

`DashKit` genera parámetros de acuerdo con los parámetros predeterminados para widgets, enlaces y alias. Estos parámetros son necesarios para la biblioteca [ChartKit.](https://github.com/gravity-ui/chartkit)

Orden de generación:

1. `defaultGlobalParams`
2. Parámetros predeterminados del widget `item.default`
3. `globalParams`
4. Parámetros de [ItemsStateAndParams](#itemsStateAndParams) según la cola.

### itemsStateAndParams

Objeto que almacena los parámetros y estados del widget, así como una cola de cambios de parámetros.
Tiene un `__meta__` campo para almacenar la cola y la metainformación.

```ts
interface StateAndParamsMeta = {
    __meta__: {
        queue: {id: string}[]; // queue
        version: number; // current version itemsStateAndParams
    };
}
```

Y también los estados y parámetros de los widgets:

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

Puede especificar el menú de superposición de widgets de DashKit personalizado en el modo de edición

```ts
type MenuItem = {
  id: string; // uniq id
  title?: string; // string title
  icon?: ReactNode; // node of icon
  iconSize?: number | string; // icon size in px as number or as string with units
  handler?: (item: ConfigItem) => void; // custom item action handler
  visible?: (item: ConfigItem) => boolean; // optional visibility handler for filtering menu items
  className?: string; // custom class property
};

// use array of menu items in settings
<Dashkit overlayMenuItems={[] as Array<MenuItem> | null} />;

[deprecated];
// overlayMenuItems property has greater priority over setSettings menu
DashKit.setSettings({menu: [] as Array<MenuItem>});
```

### Elementos que se pueden arrastrar desde ActionPanel

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
  onDropDragOver?: (
    draggedItem: DraggedOverItem,
    sharedItem: DraggedOverItem | null,
  ) => void | boolean;
}
```

- **Arrastrar imágenes RC**: Arrastre la vista previa de la imagen, de forma predeterminada se utiliza png base64 transparente de 1 px
- **Al arrastrar Start**: Se llama a una devolución de llamada cuando se arrastra un elemento desde ActionPanel
- **OndraGend:** Se llama a la devolución de llamada cuando se cancela el elemento al soltarlo o arrastrarlo

```ts
type ItemDragProps = {
  type: string; // Plugin type
  layout?: {
    // Optional. Layout item size for preview and init
    w?: number;
    h?: number;
  };
  extra?: any; // Custom user context
};
```

```ts
type ItemDropProps = {
  commit: () => void; // Callback should be called after all config operations are made
  dragProps: ItemDragProps; // Item drag props
  itemLayout: ConfigLayout; // Calculated item layout dimensions
  newLayout: ConfigLayout[]; // New layout after element is dropped
};
```

#### Ejemplo:

```jsx
const overlayMenuItems = [
  {
    id: 'chart',
    icon: <Icon data={ChartColumn} />,
    title: 'Chart',
    qa: 'chart',
    dragProps: {
      // ItemDragProps
      type: 'custom', // Registered plugin type
    },
  },
];

const onDrop = (dropProps: ItemDropProps) => {
  // ... add element to your config
  dropProps.commit();
};

<DashKitDnDWrapper>
  <DashKit editMode={true} config={config} onChange={onChange} onDrop={onDrop} />
  <ActionPanel items={overlayMenuItems} />
</DashKitDnDWrapper>;
```

### API CSS

| Nombre                                         | Descripción                       |
| :--------------------------------------------- | :-------------------------------- |
| Variables del panel de acciones                |                                   |
| `--dashkit-action-panel-color`                 | Color de fondo                    |
| `--dashkit-action-panel-border-color`          | Color del borde                   |
| `--dashkit-action-panel-border-radius`         | Radio de borde                    |
| Variables de elementos del panel de acciones   |                                   |
| `--dashkit-action-panel-item-color`            | Color de fondo                    |
| `--dashkit-action-panel-item-text-color`       | Color del texto                   |
| `--dashkit-action-panel-item-color-hover`      | Color de fondo al pasar el ratón  |
| `--dashkit-action-panel-item-text-color-hover` | Color del texto al pasar el ratón |
| Variables superpuestas                         |                                   |
| `--dashkit-overlay-border-color`               | Color del borde                   |
| `--dashkit-overlay-color`                      | Color de fondo                    |
| `--dashkit-overlay-opacity`                    | Opacidad                          |
| Variables de elementos de cuadrícula           |                                   |
| `--dashkit-grid-item-edit-opacity`             | Opacidad                          |
| `--dashkit-grid-item-border-radius`            | Radio de borde                    |
| Variables de marcador de posición              |                                   |
| `--dashkit-placeholder-color`                  | Color de fondo                    |
| `--dashkit-placeholder-opacity`                | Opacidad                          |

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

### Construye un & reloj

- Construir dependencias `npm ci`
- Construye un proyecto `npm run build`
- Construye un libro de cuentos `npm run start`

De forma predeterminada, el libro de cuentos se ejecuta en `http://localhost:7120/`.
Los nuevos cambios de un proyecto no siempre se detectan cuando se está ejecutando Storybook, por lo que es mejor reconstruir un proyecto manualmente y reiniciar Storybook.

### Ejemplo de una configuración de nginx para el desarrollo en una máquina de desarrollo

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
