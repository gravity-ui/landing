# @gravity-ui/dashkit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dashkit)](https://www.npmjs.com/package/@gravity-ui/dashkit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dashkit/.github/workflows/ci.yaml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/dashkit/actions/workflows/ci.yaml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dashkit/)

# DashKit

一个用于渲染仪表盘网格的库。

可选的 `@gravity-ui/uikit/gridstack` 入口点导出了 `DashKitGridStack`，用于支持基于 GridStack 12.6.0 的扁平化和嵌套式保存布局。它与 DashKit 共享插件注册、受控更新、ref、就绪状态和自动高度功能。原生拖拽支持区域和容器之间的转移，包括整个容器的子树。外部调色板拖放预览并应用整个文档，包括被置换的容器。有关支持的 API、[嵌套文档格式](docs/gridstack.md#nested-document-format) 和调色板拖放载荷，请参阅 [GridStack 文档](docs/gridstack.md)。

`DashKitGridStack` 会在渲染前和静态编辑前验证配置。无效的几何形状、重复的 widget/selector ID、孤立的布局条目和嵌套文档会抛出 `DashKitGridStack:` 错误；宿主应验证保存的文档或使用错误边界。没有布局条目的项将保持未挂载状态。受控布局使用配置的紧凑模式；将 `compactType: null` 设置为保留间隙。

两个渲染器都会将已确认的移动/调整大小的几何形状传递给插件 props 和布局上下文。旧版 `DashKit` 在活动拖拽期间会消耗确认信息，并在手势结束时不会重放旧的几何形状。

## 安装

```bash
npm i @gravity-ui/dashkit @gravity-ui/uikit
```

## 描述

该库用于将 widget 排列在网格中，调整它们的大小，添加新的 widget，以及删除它们。
widget 是一个 React 组件。例如，文本、图形和图像。

新 widget 通过插件系统添加。

### 插件

插件是创建自定义 widget 所必需的。

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
- **onItemEdit**: 点击编辑 widget 时调用。
- **onChange**: 当 config 或 [itemsStateAndParams](#itemsStateAndParams) 更改时调用。
- **onDrop**: 当 item 从 ActionPanel 使用 (#DashKitDnDWrapper) 拖放时调用。
- **onItemMountChange**: 当 item 的挂载状态改变时调用。
- **onItemRender**: 当 item 渲染完成时调用。
- **defaultGlobalParams**, **globalParams**: 影响所有 widget 的[参数](#Params)。在 DataLens 中，`defaultGlobalParams` 是在仪表盘设置中设置的全局参数。`globalParams` 是可以在 URL 中设置的全局参数。
- **itemsStateAndParams**: [itemsStateAndParams](#itemsStateAndParams)。
- **settings**: DashKit 设置。可选的 `isolateItemUpdates: true` 会抑制仅由其他 widget 的布局更改引起的渲染器更新。自身的 data、state、params、geometry、settings、context 和 callbacks 仍然会更新；默认情况下会保持完整的布局渲染器更新。在渲染之间对 `settings` 和 `context` 进行 memoization：即使启用了隔离，新的对象引用也会触发渲染器更新。启用隔离后，通过 `layout` 读取同级几何形状的插件可能会观察到过时的同级值。
- **context**: 将被传递给所有 widget 的对象。
- **overlayControls**: 在编辑时覆盖 widget 控件的对象。如果未传递，将显示基本控件。如果传递 `null`，则仅显示关闭按钮或自定义菜单。
- **overlayMenuItems**: 自定义下拉菜单项。
- **noOverlay**: 如果为 `true`，在编辑时不会显示覆盖层和控件。
- **focusable**: 如果为 `true`，网格项将可聚焦。
- **onItemFocus**: 当 `focusable` 为 true 且 item 获得焦点时调用。
- **onItemBlur**: 当 `focusable` 为 true 且 item 失去焦点时调用。
- **draggableHandleClassName**: 使 widget 可拖动的元素的 CSS 类名。
- **onDragStart**: ReactGridLayout 在 item 开始拖拽时调用。
- **onDrag**: ReactGridLayout 在 item 拖拽过程中调用。
- **onDragStop**: ReactGridLayout 在 item 拖拽停止时调用。
- **onResizeStart**: ReactGridLayout 在 item 开始调整大小时调用。
- **onResize**: ReactGridLayout 在 item 调整大小时调用。
- **onResizeStop**: ReactGridLayout 在 item 调整大小停止时调用。
- **getPreparedCopyItemOptions**: 在保存到本地存储之前，用于将复制的 item 转换为可序列化对象的调用。它应该替代已弃用的 `context.getPreparedCopyItemOptions` prop。
- **onCopyFulfill**: 当 item 复制完成时调用，成功操作时 `error=null` 和 `data` 已定义，否则为 `error: Error` 且没有 `data`。

## 用法

### DashKit 配置

在使用 `DashKit` 作为 React 组件之前，必须对其进行配置。

- 设置语言

  ```js
  import {configure, Lang} from '@gravity-ui/uikit';

  configure({lang: Lang.En});
  ```

- DashKit.setSettings

  用于全局 DashKit 设置（例如 widget 之间的边距、默认 widget 大小和 widget 覆盖菜单）。

  ```js
  import {DashKit} from '@gravity-ui/dashkit';

  DashKit.setSettings({
    gridLayout: {margin: [8, 8]},
    isMobile: true,
    // menu: [] as Array<MenuItem>,
  });
  ```

- DashKit.registerPlugins

  注册和配置插件。

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
  ```

```typescript
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
  salt: string; // 用于生成唯一 ID
  counter: number; // 用于生成唯一 ID，仅递增
  items: ConfigItem[]; //  初始 widget 状态
  layout: ConfigLayout[]; // widget 在网格上的位置 https://github.com/react-grid-layout
  aliases: ConfigAliases; // 参数别名，参见 #Params
  connections: ConfigConnection[]; // widget 之间的链接，参见 #Params
}
```

Config 示例：

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

向 config 添加新项：

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
    // 可选。如果需要插入具有预定义尺寸的新项
    layout: { // 当前项插入到 'Ea' 之前
      h: 6,
      w: 12,
      x: 0,
      y: 2,
    },,
  },
  config: config,
  options: {
    // 可选。当从 ActionPanel 拖放新元素时，现有项的新布局值
    updateLayout: newLayout,
  },
});
```

更改 config 中的现有项：

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

从 config 中删除项：

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

`DashKit` 根据 widget、链接和别名的默认参数生成参数。这些参数是 [ChartKit](https://github.com/gravity-ui/chartkit) 库所必需的。

生成顺序：

1. `defaultGlobalParams`
2. 默认 widget 参数 `item.default`
3. `globalParams`
4. 根据队列从 [itemsStateAndParams](#itemsStateAndParams) 中获取的参数。

### itemsStateAndParams

存储 widget 参数和状态以及参数更改队列的对象。
它有一个 `__meta__` 字段用于存储队列和元信息。

```ts
interface StateAndParamsMeta = {
    __meta__: {
        queue: {id: string}[]; // 队列
        version: number; // itemsStateAndParams 的当前版本
    };
}
```

以及 widget 状态和参数：

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

> 实验性：此 API 可能在次要版本中发生更改。

`DashKit` 公开了实验性的实例事件 API。使用组件 ref 并通过 `dashkitRef.current?.on(eventName, handler)` 进行订阅。该方法返回一个取消订阅的回调。

支持的第一个事件是 `change`。当布局发生更改时会发出此事件，在调用 `onChange` 之前。处理程序可以读取完整的下一个和上一个布局，读取布局补丁，或调用 `preventDefault()` 来阻止默认的 `onChange` 调用。

```tsx
import React from 'react';
import {DashKit} from '@gravity-ui/dashkit';
import type {DashKitChangeEvent} from '@gravity-ui/dashkit';

function Dashboard() {
  const dashkitRef = React.useRef<DashKit>(null);
```

```tsx
function Dashboard() {
  const [config, setConfig] = useState(initialConfig);
  const dashkitRef = useRef<DashKit>(null);

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

如果您在 `change` 事件处理程序中使用 `preventDefault()`，现在可以处理布局更新，而无需重新初始化 `config` prop。DashKit 维护一个内部基线并增量计算补丁：

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
      // DashKit 在内部维护视觉状态
    });

    return unsubscribe;
  }, []);

  return <DashKit ref={dashkitRef} config={config} editMode onChange={() => {}} />;
}
```

**重要提示：** 如果您之后从 props 更新 `config.layout`（例如，从服务器同步），DashKit 将重置其内部基线以匹配新的 prop。这确保了对事件驱动和受控工作流的兼容性。

### 菜单

您可以在编辑模式下指定自定义 DashKit 小部件覆盖菜单

```ts
type MenuItem = {
  id: string; // 唯一 ID
  title?: string; // 字符串标题
  icon?: ReactNode; // 图标节点
  iconSize?: number | string; // 图标大小，以像素为单位的数字或带单位的字符串
  handler?: (item: ConfigItem) => void; // 自定义项目操作处理程序
  visible?: (item: ConfigItem) => boolean; // 用于过滤菜单项的可选可见性处理程序
  className?: string; // 自定义类属性
};

// 在设置中使用菜单项数组
<Dashkit overlayMenuItems={[] as Array<MenuItem> | null} />

[已弃用]
// overlayMenuItems 属性的优先级高于 setSettings 菜单
DashKit.setSettings({menu: [] as Array<MenuItem>});
```

### 从 ActionPanel 拖动的项目

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
  dragImageSrc?: string; // 可选的自定义拖动图像。默认情况下，会显示拖动的 ActionPanel 项目作为预览。
  onDragStart?: (dragProps: ItemDragProps) => void; // 当元素从 ActionPanel 拖动时调用的回调
  onDragEnd?: () => void; // 元素放置或拖动取消时调用的回调
  onDropDragOver?: (
    draggedItem: DraggedOverItem,
    sharedItem: DraggedOverItem | null,
  ) => void | boolean;
}
```

- **dragImageSrc**: 可选的自定义拖动图像。默认情况下，拖动的 ActionPanel 项目会显示为预览。
- **onDragStart**: 当元素从 ActionPanel 拖动时调用的回调。
- **onDragEnd**: 元素放置或拖动取消时调用的回调。

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
  commit: () => void; // 在所有配置操作完成后应调用此回调
  dragProps: ItemDragProps; // 项目拖动属性
  itemLayout: ConfigLayout; // 计算出的项目布局尺寸
  newLayout: ConfigLayout[]; // 放置元素后的新布局
};
```

#### 示例：

```jsx
const overlayMenuItems = [
  {
    id: 'chart',
    icon: <Icon data={ChartColumn} />,
    title: 'Chart',
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

| Name                                           | Description           |
| :--------------------------------------------- | :-------------------- |
| Action panel variables                         |                       |
| `--dashkit-action-panel-color`                 | 背景色                |
| `--dashkit-action-panel-border-color`          | 边框颜色              |
| `--dashkit-action-panel-border-radius`         | 边框圆角              |
| Action panel item variables                    |                       |
| `--dashkit-action-panel-item-color`            | 背景色                |
| `--dashkit-action-panel-item-text-color`       | 文字颜色              |
| `--dashkit-action-panel-item-color-hover`      | 悬停背景色            |
| `--dashkit-action-panel-item-color-dragging`   | 拖拽背景色            |
| `--dashkit-action-panel-item-text-color-hover` | 悬停文字颜色          |
| `--dashkit-action-panel-item-text-color-dragging` | 拖拽文字颜色        |
| Overlay variables                              |                       |
| `--dashkit-overlay-border-color`               | 边框颜色              |
| `--dashkit-overlay-color`                      | 背景色                |
| `--dashkit-overlay-opacity`                    | 透明度                |
| Grid item variables                            |                       |
| `--dashkit-grid-item-edit-opacity`             | 透明度                |
| `--dashkit-grid-item-border-radius`            | 边框圆角              |
| Placeholder variables                          |                       |
| `--dashkit-placeholder-color`                  | 背景色                |
| `--dashkit-placeholder-opacity`                | 透明度                |

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

- 构建依赖 `npm ci`
- 构建项目 `npm run build`
- 构建 Storybook `npm run start`

默认情况下，Storybook 运行在 `http://localhost:7120/`。
当 Storybook 运行时，项目中的新更改不一定会被捕获，因此最好手动重新构建项目并重启 Storybook。

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

## 许可

MIT 协议下分发。详情请参阅 [LICENSE](LICENSE)。

## 致 AI 代理

一个仪表盘网格编辑器，通过插件系统实现可调整大小、可拖动的组件在响应式网格中的排列——当您需要构建一个用户可编辑的仪表盘（添加/移动/调整大小/删除组件）时，请使用它，而不是手动放置单个图表或面板。

### 何时使用

- 渲染可配置的仪表盘，其中组件在网格上进行定位、调整大小和重新排列（基于 `react-grid-layout` 构建）。
- 用户可编辑的布局：从操作面板添加/删除组件、拖放、带有覆盖控件的编辑模式。
- 基于插件的组件，每种组件类型（标题、文本、图表、自定义）仅注册一次，并由 `config` 驱动。

### 何时避免使用

- 对于单个、固定的图表或面板，请直接使用 [`@gravity-ui/charts`](https://gravity-ui.com/charts) 或 [`@gravity-ui/chartkit`](https://github.com/gravity-ui/chartkit)——对于单个组件来说，网格/插件机制是额外的开销。
- 对于一个通用的响应式网格，但不是组件仪表盘，请直接使用 `react-grid-layout`。
- 对于在 DashKit 仪表盘中嵌入基于 ChartKit 的图表组件，DashKit 是外壳；它仍然依赖 [`@gravity-ui/chartkit`](https://github.com/gravity-ui/chartkit) 来渲染实际的图表。

### 常见陷阱

- **组件 `<Dashboard>` 幻觉** — 实际导出的是 `<DashKit>`（拖放式外壳是 `<DashKitDnDWrapper>`，它包裹了 `<DashKit>` + `<ActionPanel>`）。
- **直接修改 `config` 而非使用辅助函数** — 请使用静态方法 `DashKit.setItem({...})` / `DashKit.removeItem({...})` 来添加/修改/删除项，以保持布局和 ID 的一致性。
- **忘记调用 `DashKit.setSettings` / `DashKit.registerPlugins`** — 组件在渲染之前必须进行配置（语言、网格设置、插件注册），否则小部件将显示为空。
- **混淆两个参数 props** — `defaultGlobalParams`（仪表板级别的默认值）与 `globalParams`（可被 URL 覆盖的全局参数）；两者都会进入 ChartKit 使用的参数生成队列。
- **在 `change` 事件上手动调用 `onChange`** — 当你在实验性的 `change` 处理程序中调用 `event.preventDefault()` 时，DashKit 会在内部保留视觉状态；从 props 重置 `config.layout` 会重置该基线。

## AI 代理文档

已安装版本的代理可读文档位于 `node_modules/@gravity-ui/dashkit/build/docs/INDEX.md`。