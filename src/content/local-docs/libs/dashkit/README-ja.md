# @gravity-ui/dashkit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dashkit)](https://www.npmjs.com/package/@gravity-ui/dashkit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dashkit/.github/workflows/ci.yaml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/dashkit/actions/workflows/ci.yaml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dashkit/)

# DashKit

ダッシュボードグリッドレンダリングライブラリです。

## インストール

```bash
npm i @gravity-ui/dashkit @gravity-ui/uikit
```

## 説明

このライブラリは、ウィジェットをグリッド上に配置し、リサイズ、追加、削除するために使用されます。
ウィジェットはReactコンポーネントです。例えば、テキスト、グラフィック、画像などです。

新しいウィジェットはプラグインシステムを通じて追加されます。

### プラグイン

カスタムウィジェットを作成するにはプラグインが必要です。

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

- **config**: [config](#Config)を参照してください。
- **editMode**: 編集モードが有効かどうか。
- **onItemEdit**: ウィジェットの編集をクリックしたときに呼び出されます。
- **onChange**: configまたは[itemsStateAndParams](#itemsStateAndParams)が変更されたときに呼び出されます。
- **onDrop**: ActionPanelから(#DashKitDnDWrapper)を使用してアイテムがドロップされたときに呼び出されます。
- **onItemMountChange**: アイテムのマウント状態が変更されたときに呼び出されます。
- **onItemRender**: アイテムのレンダリングが完了したときに呼び出されます。
- **defaultGlobalParams**, **globalParams**: すべてのウィジェットに影響を与える[パラメータ](#Params)です。DataLensでは、`defaultGlobalParams`はダッシュボード設定で設定されたグローバルパラメータです。`globalParams`はURLで設定できるグローバルパラメータです。
- **itemsStateAndParams**: [itemsStateAndParams](#itemsStateAndParams)を参照してください。
- **settings**: DashKitの設定です。
- **context**: すべてのウィジェットにプロップとして渡されるオブジェクトです。
- **overlayControls**: 編集時にウィジェットコントロールをオーバーライドするオブジェクトです。指定しない場合は、基本的なコントロールが表示されます。`null`を渡すと、閉じるボタンまたはカスタムメニューのみが表示されます。
- **overlayMenuItems**: カスタムドロップダウンメニューアイテムです。
- **noOverlay**: `true`の場合、編集中にオーバーレイとコントロールは表示されません。
- **focusable**: `true`の場合、グリッドアイテムはフォーカス可能になります。
- **onItemFocus**: `focusable`が`true`でアイテムがフォーカスされたときに呼び出されます。
- **onItemBlur**: `focusable`が`true`でアイテムからフォーカスが外れたときに呼び出されます。
- **draggableHandleClassName**: ウィジェットをドラッグ可能にする要素のCSSクラス名です。
- **onDragStart**: アイテムのドラッグが開始されたときにReactGridLayoutによって呼び出されます。
- **onDrag**: アイテムのドラッグ中にReactGridLayoutによって呼び出されます。
- **onDragStop**: アイテムのドラッグが停止したときにReactGridLayoutによって呼び出されます。
- **onResizeStart**: アイテムのリサイズが開始されたときにReactGridLayoutによって呼び出されます。
- **onResize**: アイテムのリサイズ中にReactGridLayoutによって呼び出されます。
- **onResizeStop**: アイテムのリサイズが停止したときにReactGridLayoutによって呼び出されます。
- **getPreparedCopyItemOptions**: ローカルストレージに保存する前に、コピーされたアイテムをシリアライズ可能なオブジェクトに変換するために呼び出されます。非推奨の`context.getPreparedCopyItemOptions`プロップの代わりにこれを使用する必要があります。
- **onCopyFulfill**: アイテムのコピーが完了したときに、成功した場合は`error=null`と`data`が定義され、それ以外の場合は`error: Error`と`data`なしで呼び出されます。

## 使用方法

### DashKitの設定

`DashKit`をReactコンポーネントとして使用する前に、設定が必要です。

- 言語設定

  ```js
  import {configure, Lang} from '@gravity-ui/uikit';

  configure({lang: Lang.En});
  ```

- DashKit.setSettings

  グローバルなDashKit設定（ウィジェット間のマージン、デフォルトのウィジェットサイズ、ウィジェットオーバーレイメニューなど）に使用されます。

  ```js
  import {DashKit} from '@gravity-ui/dashkit';

  DashKit.setSettings({
    gridLayout: {margin: [8, 8]},
    isMobile: true,
    // menu: [] as Array<MenuItem>,
  });
  ```

- DashKit.registerPlugins

  プラグインの登録と設定

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
  salt: string; // 一意のIDを形成するためのソルト
  counter: number; // 一意のIDを形成するためのカウンター、増加し続けます
  items: ConfigItem[]; // 初期ウィジェットの状態
  layout: ConfigLayout[]; // グリッド上のウィジェットの位置 https://github.com/react-grid-layout
  aliases: ConfigAliases; // パラメータのエイリアス #Params を参照してください
  connections: ConfigConnection[]; // ウィジェット間のリンク #Params を参照してください
}
```

Configの例:

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
        text: 'キャプション',
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
        text: '### テキスト',
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

configに新しいアイテムを追加する:

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
    // オプション。新しいアイテムを定義済みのディメンションで現在のレイアウトに挿入する必要がある場合
    layout: { // 現在のアイテムは 'Ea' の前に挿入されます
      h: 6,
      w: 12,
      x: 0,
      y: 2,
    },,
  },
  config: config,
  options: {
    // オプション。ActionPanelからドロップされたときに既存のアイテムの新しいレイアウト値
    updateLayout: newLayout,
  },
});
```

config内の既存のアイテムを変更する:

```ts
const newConfig = DashKit.setItem({
  item: {
    id: 'tT', // item.id
    data: {
      size: 'm',
      text: `新しいキャプション`,
    },
    namespace: 'default',
    type: 'title',
  },
  config: config,
});
```

configからアイテムを削除する:

```ts
import {DashKitProps} from '@gravity-ui/dashkit';

const oldItemsStateAndParams: DashKitProps['itemsStateAndParams'] = {};

const {config: newConfig, itemsStateAndParams} = DashKit.removeItem({
  id: 'tT', // item.id
  config: config,
  itemsStateAndParams: this.state.itemsStateAndParams,
});
```

### パラメータ

```ts
type Params = Record<string, string | string[]>;
```

`DashKit` は、ウィジェット、リンク、エイリアスのデフォルトパラメータに従ってパラメータを生成します。これらのパラメータは、[ChartKit](https://github.com/gravity-ui/chartkit) ライブラリに必要です。

生成順序:

1. `defaultGlobalParams`
2. デフォルトのウィジェットパラメータ `item.default`
3. `globalParams`
4. [itemsStateAndParams](#itemsStateAndParams) からのパラメータ（キューに従って）。

### itemsStateAndParams

ウィジェットのパラメータと状態、およびパラメータ変更キューを格納するオブジェクトです。
キューとメタ情報を格納するための `__meta__` フィールドがあります。

```ts
interface StateAndParamsMeta = {
    __meta__: {
        queue: {id: string}[]; // キュー
        version: number; // itemsStateAndParams の現在のバージョン
    };
}
```

およびウィジェットの状態とパラメータ:

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

### メニュー

編集モードでは、カスタムの DashKit ウィジェットオーバーレイメニューを指定できます。

```ts
type MenuItem = {
  id: string; // 一意のID
  title?: string; // 文字列タイトル
  icon?: ReactNode; // アイコンのノード
  iconSize?: number | string; // px単位のアイコンサイズ（数値または単位付き文字列）
  handler?: (item: ConfigItem) => void; // カスタムアイテムアクションハンドラ
  visible?: (item: ConfigItem) => boolean; // メニューアイテムをフィルタリングするためのオプションの表示ハンドラ
  className?: string; // カスタムクラスプロパティ
};

// 設定でメニューアイテムの配列を使用する
<Dashkit overlayMenuItems={[] as Array<MenuItem> | null} />

[非推奨]
// overlayMenuItems プロパティは setSettings メニューよりも優先度が高いです
DashKit.setSettings({menu: [] as Array<MenuItem>});
```

### ActionPanel からのドラッグ可能なアイテム

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

- **dragImageSrc**: ドラッグ画像のプレビュー。デフォルトでは、透明な1px PNGのbase64が使用されます。
- **onDragStart**: ActionPanelから要素がドラッグされたときに呼び出されるコールバック。
- **onDragEnd**: 要素がドロップされたか、ドラッグがキャンセルされたときに呼び出されるコールバック。

```ts
type ItemDragProps = {
    type: string; // プラグインのタイプ
    layout?: { // オプション。プレビューと初期化のためのレイアウトアイテムのサイズ
        w?: number;
        h?: number;
    };
    extra?: any; // カスタムユーザーコンテキスト
};
```

```ts
type ItemDropProps = {
    commit: () => void; // すべての設定操作が完了した後、コールバックを呼び出す必要があります
    dragProps: ItemDragProps; // アイテムのドラッグプロパティ
    itemLayout: ConfigLayout; // 計算されたアイテムのレイアウト寸法
    newLayout: ConfigLayout[]; // 要素がドロップされた後の新しいレイアウト
};
```


#### 例:

```jsx
const overlayMenuItems = [
  {
    id: 'chart',
    icon: <Icon data={ChartColumn} />,
    title: 'Chart',
    qa: 'chart',
    dragProps: { // ItemDragProps
        type: 'custom', // 登録されたプラグインタイプ
    },
  }
]

const onDrop = (dropProps: ItemDropProps) => {
  // ... 要素を構成に追加します
  dropProps.commit();
}

<DashKitDnDWrapper>
  <DashKit editMode={true} config={config} onChange={onChange} onDrop={onDrop} />
  <ActionPanel items={overlayMenuItems} />
</DashKitDnDWrapper>
```

### CSS API

| 名前                                           | 説明           |
| :--------------------------------------------- | :------------- |
| Action panel variables                         |                |
| `--dashkit-action-panel-color`                 | 背景色         |
| `--dashkit-action-panel-border-color`          | ボーダーの色   |
| `--dashkit-action-panel-border-radius`         | ボーダーの半径 |
| Action panel item variables                    |                |
| `--dashkit-action-panel-item-color`            | 背景色         |
| `--dashkit-action-panel-item-text-color`       | テキストの色   |
| `--dashkit-action-panel-item-color-hover`      | ホバー時の背景色 |
| `--dashkit-action-panel-item-text-color-hover` | ホバー時のテキストの色 |
| Overlay variables                              |                |
| `--dashkit-overlay-border-color`               | ボーダーの色   |
| `--dashkit-overlay-color`                      | 背景色         |
| `--dashkit-overlay-opacity`                    | 不透明度       |
| Grid item variables                            |                |
| `--dashkit-grid-item-edit-opacity`             | 不透明度       |
| `--dashkit-grid-item-border-radius`            | ボーダーの半径 |
| Placeholder variables                          |                |
| `--dashkit-placeholder-color`                  | 背景色         |
| `--dashkit-placeholder-opacity`                | 不透明度       |

#### 使用例

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

## 開発

### ビルドと監視

- 依存関係のビルド `npm ci`
- プロジェクトのビルド `npm run build`
- Storybook のビルド `npm run start`

デフォルトでは、Storybook は `http://localhost:7120/` で実行されます。
Storybook を実行中にプロジェクトの変更が常に反映されるとは限らないため、プロジェクトを手動で再ビルドして Storybook を再起動することをお勧めします。


### 開発マシンでの開発用 nginx 設定例

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