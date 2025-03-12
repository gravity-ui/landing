# @gravity-ui/dashkit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dashkit)](https://www.npmjs.com/package/@gravity-ui/dashkit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dashkit/.github/workflows/ci.yaml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/dashkit/actions/workflows/ci.yaml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dashkit/)

# DashKit

Библиотека для рендеринга сетки дашборда.

## Установка

```bash
npm i @gravity-ui/dashkit @gravity-ui/uikit
```

## Описание

Библиотека позволяет выстраивать виджеты в сетку, изменять их размеры, добавлять новые и удалять их.
Виджет представляет из себя react-компонент – к примеру, текст, график, картинка и т.п.

Добавление новых виджетов осуществляется через систему плагинов.

### Плагины

Плагины нужны для создания собственных виджетов.

### Свойства

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

- `config`: [кофигурация](#Config).
- `editMode`: включает или отключает режим редактирования.
- `onItemEdit`: вызывается по клику для редактирования виджета.
- `onChange`: вызывается при изменении значения `config` или [`itemsStateAndParams`](#itemsstateandparams).
- `onDrop`: вызывается, когда элемент перетаскивается из `ActionPanel` (панели действий) с помощью `(#DashKitDnDWrapper)`.
- `onItemMountChange`: вызывается при изменении состояния монтирования элемента.
- `onItemRender`: вызывается по завершении рендеринга элемента.
- `defaultGlobalParams`, `globalParams`: [параметры](#Params), которые влияют на все виджеты. В DataLens `defaultGlobalParams` — глобальные параметры, заданные в настройках дашборда, а `globalParams` — глобальные параметры, которые можно задать в URL.
- `itemsStateAndParams`: [itemsStateAndParams](#itemsstateandparams).
- `settings`: настройки `DashKit`.
- `context`: объект, который пробросится в виде свойства во все виджеты.
- `overlayControls`: объект, который переопределяет дефолтные контролы виджета, отображаемые в режиме редактирования. Если он не передан, будут отображаться базовые контролы. При передаче `null` будет отображаться только кнопка закрытия или пользовательское меню.
- `overlayMenuItems`: пользовательские элементы выпадающего меню, отображаемое в режиме редактирования.
- `noOverlay`: если установлено значение `true`, оверлей и контролы не отображаются при редактировании.
- `focusable`: если установлено значение `true`, элементы сетки будут доступны для фокуса.
- `onItemFocus`: Вызывается когда значение `focusable` true при фокусе элемента.
- `onItemBlur`: Вызывается когда значение `focusable` true при снятии фокуса с элемента.
- `draggableHandleClassName`: имя CSS-класса элемента, который позволяет перетаскивать виджет.
- `onDragStart`: вызывается при начале перетаскивания элемента в библиотеке `ReactGridLayout`.
- `onDrag`: вызывается во время перетаскивания элемента в библиотеке `ReactGridLayout`.
- `onDragStop`: вызывается по завершении перетаскивания элемента в библиотеке `ReactGridLayout`.
- `onResizeStart`: вызывается при начале изменения размера элемента в библиотеке ReactGridLayout.
- `onResize`: вызывается в процессе изменения размера элемента в библиотеке `ReactGridLayout`.
- `onResizeStop`: вызывается по завершении изменения размера элемента в библиотеке `ReactGridLayout`.
- `getPreparedCopyItemOptions`: вызывается для преобразования скопированного элемента в сериализуемый объект перед его сохранением в локальное хранилище. Используется вместо устаревшего свойства `context.getPreparedCopyItemOptions`.
- `onCopyFulfill`: вызывается при завершении копирования элемента. При успешном копировании передается `error=null` и определенное значение `data`, при неудачном копировании — `error: Error` без `data`.

## Использование

### Конфигурирование DashKit

Перед использованием `DashKit` в качестве React-компонента необходимо его настроить.

- Установка языка:

  ```js
  import {configure, Lang} from '@gravity-ui/uikit';

  configure({lang: Lang.En});
  ```

- `DashKit.setSettings`

  Используется для глобальных настроек `DashKit` (отступы между виджетами, размеры виджетов по умолчанию и меню оверлея виджета).

  ```js
  import {DashKit} from '@gravity-ui/dashkit';

  DashKit.setSettings({
    gridLayout: {margin: [8, 8]},
    isMobile: true,
    // menu: [] as Array<MenuItem>,
  });
  ```

- `DashKit.registerPlugins`

  Регистрация и конфигурация плагинов:

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

### Конфигурация

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

Пример конфигурации:

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

Добавление нового объекта в кофигурацию:

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

Изменение существующего объекта в кофигурации:

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

Удаление объекта из кофигурации:

```ts
import {DashKitProps} from '@gravity-ui/dashkit';

const oldItemsStateAndParams: DashKitProps['itemsStateAndParams'] = {};

const {config: newConfig, itemsStateAndParams} = DashKit.removeItem({
  id: 'tT', // item.id
  config: config,
  itemsStateAndParams: this.state.itemsStateAndParams,
});
```

### Параметры

```ts
type Params = Record<string, string | string[]>;
```

`DashKit` формирует параметры на основе параметров по умолчанию для виджетов, ссылок и алиасов. Эти параметры необходимы для библиотеки [ChartKit](https://github.com/gravity-ui/chartkit).

Порядок формирования:

1. `defaultGlobalParams`.
2. Параметры виджета, используемые по умолчанию, — `item.default`.
3. `globalParams`.
4. Параметры из [`itemsStateAndParams`](#itemsstateandparams), согласно очереди.

### `itemsStateAndParams`

Объект, который хранит параметры и состояния виджетов, а также очередь изменения параметров.
У него есть поле `__meta__` для хранения очереди и метаинформации.

```ts
interface StateAndParamsMeta = {
    __meta__: {
        queue: {id: string}[]; // queue
        version: number; // current version itemsStateAndParams
    };
}
```

В нем также хранятся состояния и параметры виджетов:

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

### Меню

Можно задать пользовательские элементы выпадающего меню оверлея `DashKit` виджета, которое отображается в режиме редактирования.

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

### Перетаскиваемые элементы из `ActionPanel`

#### `DashKitDnDWrapper`

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

- `dragImageSrc` — изображение для предпросмотра при перетаскивании элемента. По умолчанию используется прозрачный PNG-файл размером 1 пиксель в формате `base64`.
- `onDragStart` — обратный вызов, срабатывающий при начале перетаскивания элемента из `ActionPanel`.
- `onDragEnd` — обратный вызов, срабатывающий при завершении перетаскивания элемента или его отмене.

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

#### Например

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

| Имя                                            | Описание                   |
| :--------------------------------------------- | :------------------------- |
| Переменные панели действий                     |                            |
| `--dashkit-action-panel-color`                 | Цвет фона.                 |
| `--dashkit-action-panel-border-color`          | Цвет границы.              |
| `--dashkit-action-panel-border-radius`         | Радиус скругления углов.   |
| Переменные элементов панели действий           |                            |
| `--dashkit-action-panel-item-color`            | Цвет фона.                 |
| `--dashkit-action-panel-item-text-color`       | Цвет текста.               |
| `--dashkit-action-panel-item-color-hover`      | Цвет фона при наведении.   |
| `--dashkit-action-panel-item-text-color-hover` | Цвет текста при наведении. |
| Переменные оверлея                             |                            |
| `--dashkit-overlay-border-color`               | Цвет границы.              |
| `--dashkit-overlay-color`                      | Цвет фона.                 |
| `--dashkit-overlay-opacity`                    | Непрозрачность.            |
| Переменные элементов сетки                     |                            |
| `--dashkit-grid-item-edit-opacity`             | Непрозрачность.            |
| `--dashkit-grid-item-border-radius`            | Радиус скругления углов.   |
| Переменные-заполнители                         |                            |
| `--dashkit-placeholder-color`                  | Цвет фона.                 |
| `--dashkit-placeholder-opacity`                | Непрозрачность.            |

#### Пример использования

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

## Разработка

### Сборка и отслеживание изменений

- Установите зависимости: `npm ci`.
- Выполните сборку проекта: `npm run build`.
- Запустите Storybook: `npm run start`.

По умолчанию Storybook запускается на `http://localhost:7120/`.
В некоторых случаях при запущенном storybook свежие изменения из проекта могут не примениться. В таких ситуациях следует пересобрать проект вручную и перезапустить Storybook.

### Пример конфигурации nginx для разработки на dev-машине

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
