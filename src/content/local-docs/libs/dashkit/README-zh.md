# @gravity-ui/dashkit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dashkit)](https://www.npmjs.com/package/@gravity-ui/dashkit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dashkit/.github/workflows/ci.yaml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/dashkit/actions/workflows/ci.yaml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dashkit/)

# DashKit

一个用于渲染仪表盘网格的库。

## 安装

```bash
npm i @gravity-ui/dashkit @gravity-ui/uikit
```

## 描述

该库用于在网格中排列小部件、调整它们的大小、添加新小部件以及删除它们。
小部件是一个 React 组件。例如，文本、图形和图像。

新小部件通过插件系统添加。

### 插件

插件是创建自定义小部件所必需的。

### Props

```ts
type ItemManipulationCallback = (eventData: {
  layout: Layout[];
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

- **config**: [配置](#Config)。
- **editMode**: 是否启用编辑模式。
- **onItemEdit**: 点击编辑小部件时调用。
- **onChange**: 配置或 [itemsStateAndParams](#itemsStateAndParams) 更改时调用。
- **onDrop**: 使用 (#DashKitDnDWrapper) 从 ActionPanel 拖放项目时调用
- **onItemMountChange**: 项目挂载状态更改时调用
- **onItemRender**: 项目渲染完成时调用
- **defaultGlobalParams**, **globalParams**: 影响所有小部件的[参数](#Params)。在 DataLens 中，`defaultGlobalParams` 是在仪表盘设置中设置的全局参数。`globalParams` 是可以在 URL 中设置的全局参数。
- **itemsStateAndParams**: [itemsStateAndParams](#itemsStateAndParams)。
- **settings**: DashKit 设置。
- **context**: 将被传递给所有小部件的对象。
- **overlayControls**: 在编辑时覆盖小部件控件的对象。如果未传递，将显示基本控件。如果传递 `null`，则仅显示关闭按钮或自定义菜单。
- **overlayMenuItems**: 自定义下拉菜单项
- **noOverlay**: 如果为 `true`，则在编辑时不会显示覆盖层和控件。
- **focusable**: 如果为 `true`，则网格项将可聚焦。
- **onItemFocus**: 当 `focusable` 为 true 且项目获得焦点时调用。
- **onItemBlur**: 当 `focusable` 为 true 且项目失去焦点时调用。
- **draggableHandleClassName**: 使小部件可拖动的元素的 CSS 类名。
- **onDragStart**: ReactGridLayout 在项目拖动开始时调用
- **onDrag**: ReactGridLayout 在项目拖动过程中调用
- **onDragStop**: ReactGridLayout 在项目拖动停止时调用
- **onResizeStart**: ReactGridLayout 在项目调整大小开始时调用
- **onResize**: ReactGridLayout 在项目调整大小时调用
- **onResizeStop**: ReactGridLayout 在项目调整大小停止时调用
- **getPreparedCopyItemOptions**: 在保存到本地存储之前，用于将复制的项目转换为可序列化对象时调用。它应该替代已弃用的 `context.getPreparedCopyItemOptions` prop
- **onCopyFulfill**: 在项目复制成功完成时（`error=null` 且 `data` 已定义）调用，否则以 `error: Error` 而不带 `data` 调用

## 用法

### DashKit 配置

在使用 `DashKit` 作为 React 组件之前，必须对其进行配置。

- 设置语言

  ```js
  import {configure, Lang} from '@gravity-ui/uikit';

  configure({lang: Lang.En});
  ```

- DashKit.setSettings

  用于全局 DashKit 设置（例如小部件之间的边距、默认小部件大小和小部件覆盖菜单）

  ```js
  import {DashKit} from '@gravity-ui/dashkit';

  DashKit.setSettings({
    gridLayout: {margin: [8, 8]},
    isMobile: true,
    // menu: [] as Array<MenuItem>,
  });
  ```

- DashKit.registerPlugins

  注册和配置插件

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
  salt: string; // 用于形成唯一 ID
  counter: number; // 用于形成唯一 ID，仅递增
  items: ConfigItem[]; //  初始小部件状态
  layout: ConfigLayout[]; // 网格上的小部件位置 https://github.com/react-grid-layout
  aliases: ConfigAliases; // 参数的别名，参见 #Params
  connections: ConfigConnection[]; // 小部件之间的链接，参见 #Params
}
```

Config 示例：

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

向配置中添加新项：

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
    // 可选。如果需要将新项插入到当前布局中并预定义尺寸
    layout: { // 当前项插入到 'Ea' 之前
      h: 6,
      w: 12,
      x: 0,
      y: 2,
    },,
  },
  config: config,
  options: {
    // 可选。当新元素从 ActionPanel 拖放时，现有项的新布局值
    updateLayout: newLayout,
  },
});
```

更改配置中的现有项：

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

从配置中删除一项：

```ts
import {DashKitProps} from '@gravity-ui/dashkit';

const oldItemsStateAndParams: DashKitProps['itemsStateAndParams'] = {};

const {config: newConfig, itemsStateAndParams} = DashKit.removeItem({
  id: 'tT', // item.id
  config: config,
  itemsStateAndParams: this.state.itemsStateAndParams,
});
```

### Params

```ts
type Params = Record<string, string | string[]>;
```

`DashKit` 根据小部件、链接和别名的默认参数生成参数。这些参数是 [ChartKit](https://github.com/gravity-ui/chartkit) 库所必需的。

生成顺序：

1. `defaultGlobalParams`
2. 默认小部件参数 `item.default`
3. `globalParams`
4. 来自 [itemsStateAndParams](#itemsStateAndParams) 的参数，按队列顺序。

### itemsStateAndParams

存储小部件参数和状态以及参数更改队列的对象。
它有一个 `__meta__` 字段，用于存储队列和元信息。

```ts
interface StateAndParamsMeta = {
    __meta__: {
        queue: {id: string}[]; // 队列
        version: number; // itemsStateAndParams 的当前版本
    };
}
```

以及小部件状态和参数：

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

### 实验性 DashKit 事件

> 实验性：此 API 可能会在次要版本中发生更改。

`DashKit` 公开了一个实验性的实例事件 API。使用组件 ref 并通过 `dashkitRef.current?.on(eventName, handler)` 进行订阅。该方法返回一个取消订阅的回调函数。

支持的第一个事件是 `change`。当布局发生更改时会发出此事件，在调用 `onChange` 之前。处理程序可以读取完整的下一个和上一个布局，读取布局补丁，或调用 `preventDefault()` 来阻止默认的 `onChange` 调用。

```tsx
import React from 'react';
import {DashKit} from '@gravity-ui/dashkit';
import type {DashKitChangeEvent} from '@gravity-ui/dashkit';

function Dashboard() {
  const dashkitRef = React.useRef<DashKit>(null);

  React.useEffect(() => {
    const unsubscribe = dashkitRef.current?.on('change', (event: DashKitChangeEvent) => {
      console.log(event.patches);

      if (event.patches.length > 0) {
        event.preventDefault();
      }
    });

    return () => unsubscribe?.();
  }, []);

  return <DashKit ref={dashkitRef} config={config} editMode={true} onChange={onChange} />;
}
```

```ts
type DashKitLayoutPatch = Pick<ConfigLayout, 'i'> &
  Partial<Pick<ConfigLayout, 'x' | 'y' | 'w' | 'h' | 'parent'>>;

type DashKitChangeEvent = {
  patches: DashKitLayoutPatch[];
  layout: ConfigLayout[];
  previousLayout: ConfigLayout[];
  preventDefault: () => void;
  readonly defaultPrevented: boolean;
};
```

#### 事件驱动的布局更新

如果您在 `change` 事件处理程序中使用了 `preventDefault()`，现在您可以处理布局更新而无需重新初始化 `config` prop。DashKit 会维护一个内部基线并逐步计算补丁：

```tsx
function Dashboard() {
  const [config, setConfig] = useState(initialConfig);
  const dashkitRef = useRef<DashKit>(null);

  useEffect(() => {
    const unsubscribe = dashkitRef.current?.on('change', (event) => {
      event.preventDefault(); // 不调用 onChange

      // 只将增量补丁发送到您的后端
      sendPatches(event.patches);

      // 无需调用 setConfig({ ...config, layout: event.layout })
      // DashKit 会在内部维护视觉状态
    });

    return unsubscribe;
  }, []);

  return <DashKit ref={dashkitRef} config={config} editMode onChange={() => {}} />;
}
```

**重要提示：** 如果您之后从 props 更新 `config.layout`（例如，从服务器同步），DashKit 会重置其内部基线以匹配新的 prop。这确保了与事件驱动和受控工作流的兼容性。

### 菜单

您可以在编辑模式下为 DashKit 指定自定义的 widget 覆盖菜单。

```ts
type MenuItem = {
  id: string; // 唯一 ID
  title?: string; // 字符串标题
  icon?: ReactNode; // 图标节点
  iconSize?: number | string; // 图标大小，以 px 为单位的数字或带单位的字符串
  handler?: (item: ConfigItem) => void; // 自定义菜单项操作处理程序
  visible?: (item: ConfigItem) => boolean; // 用于过滤菜单项的可选可见性处理程序
  className?: string; // 自定义类属性
};

// 在设置中使用菜单项数组
<Dashkit overlayMenuItems={[] as Array<MenuItem> | null} />

[已弃用]
// overlayMenuItems 属性的优先级高于 setSettings 的 menu
DashKit.setSettings({menu: [] as Array<MenuItem>});
```

### 从 ActionPanel 拖拽项目

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
  dragImageSrc?: string; // 拖拽图像预览，默认使用透明的 1px png base64
  onDragStart?: (dragProps: ItemDragProps) => void; // 当元素从 ActionPanel 拖拽时调用的回调
  onDragEnd?: () => void; // 当元素被放置或拖拽取消时调用的回调
  onDropDragOver?: (
    draggedItem: DraggedOverItem,
    sharedItem: DraggedOverItem | null,
  ) => void | boolean;
}
```

- **dragImageSrc**: 拖拽图像预览，默认使用透明的 1px png base64。
- **onDragStart**: 当元素从 ActionPanel 拖拽时调用的回调。
- **onDragEnd**: 当元素被放置或拖拽取消时调用的回调。

```ts
type ItemDragProps = {
  type: string; // 插件类型
  layout?: {
    // 可选。用于预览和初始化的布局项大小
    w?: number;
    h?: number;
  };
  extra?: any; // 自定义用户上下文
};
```

```ts
type ItemDropProps = {
  commit: () => void; // 在所有配置操作完成后应调用的回调
  dragProps: ItemDragProps; // 项目拖拽属性
  itemLayout: ConfigLayout; // 计算出的项目布局尺寸
  newLayout: ConfigLayout[]; // 元素被放置后的新布局
};
```

#### 示例：

```jsx
const overlayMenuItems = [
  {
    id: 'chart',
    icon: <Icon data={ChartColumn} />,
    title: '图表',
    qa: 'chart',
    dragProps: { // ItemDragProps
        type: 'custom', // 已注册的插件类型
    },
  }
]

const onDrop = (dropProps: ItemDropProps) => {
  // ... 将元素添加到您的配置中
  dropProps.commit();
}

<DashKitDnDWrapper>
  <DashKit editMode={true} config={config} onChange={onChange} onDrop={onDrop} />
  <ActionPanel items={overlayMenuItems} />
</DashKitDnDWrapper>
```

### CSS API

| 名称                                           | 描述           |
| :--------------------------------------------- | :------------- |
| Action panel 变量                              |                |
| `--dashkit-action-panel-color`                 | 背景颜色       |
| `--dashkit-action-panel-border-color`          | 边框颜色       |
| `--dashkit-action-panel-border-radius`         | 边框圆角       |
| Action panel item 变量                         |                |
| `--dashkit-action-panel-item-color`            | 背景颜色       |
| `--dashkit-action-panel-item-text-color`       | 文本颜色       |
| `--dashkit-action-panel-item-color-hover`      | 鼠标悬停时的背景颜色 |
| `--dashkit-action-panel-item-text-color-hover` | 鼠标悬停时的文本颜色 |
| Overlay 变量                                   |                |
| `--dashkit-overlay-border-color`               | 边框颜色       |
| `--dashkit-overlay-color`                      | 背景颜色       |
| `--dashkit-overlay-opacity`                    | 不透明度       |
| Grid item 变量                                 |                |
| `--dashkit-grid-item-edit-opacity`             | 不透明度       |
| `--dashkit-grid-item-border-radius`            | 边框圆角       |
| Placeholder 变量                               |                |
| `--dashkit-placeholder-color`                  | 背景颜色       |
| `--dashkit-placeholder-opacity`                | 不透明度       |

#### 使用示例

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

## 开发

### 构建与监听

- 安装依赖 `npm ci`
- 构建项目 `npm run build`
- 构建 Storybook `npm run start`

默认情况下，Storybook 运行在 `http://localhost:7120/`。
当 Storybook 运行时，项目中的新更改不一定会被立即捕获，因此最好手动重新构建项目并重启 Storybook。

### 开发环境下 Nginx 配置示例

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