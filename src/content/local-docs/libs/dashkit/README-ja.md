# @gravity-ui/dashkit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dashkit)](https://www.npmjs.com/package/@gravity-ui/dashkit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dashkit/.github/workflows/ci.yaml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/dashkit/actions/workflows/ci.yaml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dashkit/)

# DashKit

ダッシュボードグリッドレンダリングライブラリです。

## インストール

```bash
npm i @gravity-ui/dashkit @gravity-ui/uikit
```

## 説明

このライブラリは、ウィジェットをグリッド上に配置し、サイズ変更、追加、削除するために使用されます。
ウィジェットはReactコンポーネントです。例えば、テキスト、グラフィック、画像などです。

新しいウィジェットはプラグインシステムを通じて追加されます。

### プラグイン

カスタムウィジェットを作成するにはプラグインが必要です。

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

- **config**: [config](#Config)を参照してください。
- **editMode**: 編集モードが有効かどうか。
- **onItemEdit**: ウィジェットの編集をクリックしたときに呼び出されます。
- **onChange**: configまたは[itemsStateAndParams](#itemsStateAndParams)が変更されたときに呼び出されます。
- **onDrop**: ActionPanelから(#DashKitDnDWrapper)を使用してアイテムがドロップされたときに呼び出されます。
- **onItemMountChange**: アイテムのマウント状態が変更されたときに呼び出されます。
- **onItemRender**: アイテムのレンダリングが完了したときに呼び出されます。
- **defaultGlobalParams**, **globalParams**: すべてのウィジェットに影響を与える[パラメータ](#Params)です。DataLensでは、`defaultGlobalParams`はダッシュボード設定で設定されたグローバルパラメータです。`globalParams`はURLで設定できるグローバルパラメータです。
- **itemsStateAndParams**: [itemsStateAndParams](#itemsStateAndParams)を参照してください。
- **settings**: DashKitの設定です。オプションの`isolateItemUpdates: true`は、他のウィジェットのレイアウト変更のみによって引き起こされるレンダラーの更新を抑制します。独自のデータ、状態、パラメータ、ジオメトリ、設定、コンテキスト、およびコールバックは引き続き更新されます。デフォルトでは、完全なレイアウトレンダラーの更新が維持されます。`settings`と`context`をレンダリング間でメモ化してください。新しいオブジェクト参照は、分離が有効な場合でもレンダラーの更新をトリガーします。分離が有効な場合、`layout`を介して兄弟のジオメトリを読み取るプラグインは、古い兄弟の値を確認する可能性があります。
- **context**: すべてのウィジェットにプロップとして渡されるオブジェクトです。
- **overlayControls**: 編集時にウィジェットコントロールをオーバーライドするオブジェクトです。送信されない場合は、基本的なコントロールが表示されます。`null`を渡した場合、閉じるボタンまたはカスタムメニューのみが表示されます。
- **overlayMenuItems**: カスタムドロップダウンメニュー項目です。
- **noOverlay**: `true`の場合、編集中はオーバーレイとコントロールが表示されません。
- **focusable**: `true`の場合、グリッドアイテムはフォーカス可能になります。
- **onItemFocus**: `focusable`が`true`でアイテムがフォーカスされたときに呼び出されます。
- **onItemBlur**: `focusable`が`true`でアイテムからフォーカスが外れたときに呼び出されます。
- **draggableHandleClassName**: ウィジェットをドラッグ可能にする要素のCSSクラス名です。
- **onDragStart**: アイテムのドラッグが開始されたときに呼び出されるReactGridLayoutです。
- **onDrag**: アイテムのドラッグ中に呼び出されるReactGridLayoutです。
- **onDragStop**: アイテムのドラッグが停止したときに呼び出されるReactGridLayoutです。
- **onResizeStart**: アイテムのリサイズが開始されたときに呼び出されるReactGridLayoutです。
- **onResize**: アイテムのリサイズ中に呼び出されるReactGridLayoutです。
- **onResizeStop**: アイテムのリサイズが停止したときに呼び出されるReactGridLayoutです。
- **getPreparedCopyItemOptions**: ローカルストレージに保存する前に、コピーされたアイテムをシリアライズ可能なオブジェクトに変換するために呼び出されます。これは、非推奨の`context.getPreparedCopyItemOptions`プロップの代わりに使用する必要があります。
- **onCopyFulfill**: アイテムのコピーが完了したときに、成功した操作の場合は`error=null`と定義された`data`で、それ以外の場合は`error: Error`なしで`data`なしで呼び出されます。

## 使用方法

### DashKitの設定

`DashKit`をReactコンポーネントとして使用する前に、設定する必要があります。

- 言語を設定する

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
  salt: string; // 一意のIDを形成するため
  counter: number; // 一意のIDを形成するため、増加し続けます
  items: ConfigItem[]; // 初期ウィジェットの状態
  layout: ConfigLayout[]; // グリッド上のウィジェットの位置 https://github.com/react-grid-layout
  aliases: ConfigAliases; // パラメータのエイリアス #Paramsを参照してください
  connections: ConfigConnection[]; // ウィジェット間のリンク #Paramsを参照してください
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

新しいアイテムをコンフィグに追加する:

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
      text: `いくつかのテキスト`,
    },
    namespace: 'default',
    type: 'text',
    // オプション。新しいアイテムを定義済みのサイズで現在のレイアウトに挿入する必要がある場合
    layout: { // 現在のアイテムは 'Ea' の前に挿入されます
      h: 6,
      w: 12,
      x: 0,
      y: 2,
    },,
  },
  config: config,
  options: {
    // オプション。新しい要素が ActionPanel からドロップされたときに、既存のアイテムの新しいレイアウト値
    updateLayout: newLayout,
  },
});
```

既存のアイテムをコンフィグで変更する:

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

コンフィグからアイテムを削除する:

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
4. キューに従って、[itemsStateAndParams](#itemsStateAndParams) からのパラメータ。

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

また、ウィジェットの状態とパラメータも含まれます:

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

### 実験的な DashKit イベント

> 実験的: この API はマイナーリリースで変更される可能性があります。

`DashKit` は、実験的なインスタンスイベント API を公開します。コンポーネントの ref を使用し、`dashkitRef.current?.on(eventName, handler)` で購読します。このメソッドは、アンサブスクライブコールバックを返します。

最初にサポートされるイベントは `change` です。これは、レイアウトが変更され、`onChange` が呼び出される前に発行されます。ハンドラは、完全な次のレイアウトと前のレイアウトを読み取ったり、レイアウトパッチを読み取ったり、`preventDefault()` を呼び出してデフォルトの `onChange` 呼び出しを停止したりできます。

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

#### イベント駆動型レイアウト更新

`preventDefault()` を `change` イベントハンドラで使用すると、config プロップを再初期化せずにレイアウトの更新を処理できるようになりました。DashKit は内部的にベースラインを維持し、パッチを段階的に計算します。

```tsx
function Dashboard() {
  const [config, setConfig] = useState(initialConfig);
  const dashkitRef = useRef<DashKit>(null);

  useEffect(() => {
    const unsubscribe = dashkitRef.current?.on('change', (event) => {
      event.preventDefault(); // onChange を呼び出さない

      // インクリメンタルなパッチのみをバックエンドに送信
      sendPatches(event.patches);

      // setConfig({ ...config, layout: event.layout }) を呼び出す必要はありません
      // DashKit はビジュアル状態を内部で管理します
    });

    return unsubscribe;
  }, []);

  return <DashKit ref={dashkitRef} config={config} editMode onChange={() => {}} />;
}
```

**重要:** 後でプロップから `config.layout` を更新した場合（例: サーバー同期から）、DashKit は新しいプロップと一致するように内部ベースラインをリセットします。これにより、イベント駆動型ワークフローと制御型ワークフローの両方との互換性が確保されます。

### メニュー

編集モードでカスタム DashKit ウィジェットオーバーレイメニューを指定できます。

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

// 設定でメニューアイテムの配列を使用
<Dashkit overlayMenuItems={[] as Array<MenuItem> | null} />

[非推奨]
// overlayMenuItems プロパティは setSettings のメニューよりも優先されます
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
  dragImageSrc?: string; // オプションのカスタムドラッグ画像。デフォルトでは、ドラッグされたActionPanelアイテムがプレビューとして表示されます。
  onDragStart?: (dragProps: ItemDragProps) => void; // ActionPanelから要素がドラッグされたときに呼び出されるコールバック
  onDragEnd?: () => void; // 要素がドロップされたり、ドラッグがキャンセルされたときに呼び出されるコールバック
  onDropDragOver?: (
    draggedItem: DraggedOverItem,
    sharedItem: DraggedOverItem | null,
  ) => void | boolean;
}
```

- **dragImageSrc**: オプションのカスタムドラッグ画像。デフォルトでは、ドラッグされたActionPanelアイテムがプレビューとして表示されます。
- **onDragStart**: ActionPanelから要素がドラッグされたときに呼び出されるコールバック。
- **onDragEnd**: 要素がドロップされたり、ドラッグがキャンセルされたときに呼び出されるコールバック。

```ts
type ItemDragProps = {
  type: string; // プラグインタイプ
  layout?: {
    // オプション。プレビューと初期化のためのレイアウトアイテムサイズ
    w?: number;
    h?: number;
  };
  extra?: any; // カスタムユーザーコンテキスト
};
```

```ts
type ItemDropProps = {
  commit: () => void; // すべての設定操作が完了した後、呼び出す必要があるコールバック
  dragProps: ItemDragProps; // アイテムドラッグプロップ
  itemLayout: ConfigLayout; // 計算されたアイテムレイアウトの寸法
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
        type: 'custom', // 登録済みのプラグインタイプ
    },
  }
]

const onDrop = (dropProps: ItemDropProps) => {
  // ... 要素をconfigに追加
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
| `--dashkit-action-panel-border-color`          | 境界線の色     |
| `--dashkit-action-panel-border-radius`         | 境界線の半径   |
| Action panel item variables                    |                |
| `--dashkit-action-panel-item-color`            | 背景色         |
| `--dashkit-action-panel-item-text-color`       | テキストの色   |
| `--dashkit-action-panel-item-color-hover`      | ホバー時の背景色 |
| `--dashkit-action-panel-item-color-dragging`   | ドラッグ時の背景色 |
| `--dashkit-action-panel-item-text-color-hover` | ホバー時のテキスト色 |
| `--dashkit-action-panel-item-text-color-dragging` | ドラッグ時のテキスト色 |
| Overlay variables                              |                |
| `--dashkit-overlay-border-color`               | 境界線の色     |
| `--dashkit-overlay-color`                      | 背景色         |
| `--dashkit-overlay-opacity`                    | 不透明度       |
| Grid item variables                            |                |
| `--dashkit-grid-item-edit-opacity`             | 不透明度       |
| `--dashkit-grid-item-border-radius`            | 境界線の半径   |
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

### ビルドとウォッチ

- 依存関係のビルド `npm ci`
- プロジェクトのビルド `npm run build`
- Storybook のビルド `npm run start`

デフォルトでは、Storybook は `http://localhost:7120/` で実行されます。
Storybook を実行している場合、プロジェクトの変更が常に反映されるとは限らないため、手動でプロジェクトを再ビルドしてから Storybook を再起動することをお勧めします。

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

## ライセンス

MIT ライセンスの下で配布されています。詳細は [LICENSE](LICENSE) を参照してください。

## AI エージェント向け

プラグインシステムを介して、リサイズ可能でドラッグ可能なウィジェットをレスポンシブなグリッドに配置するダッシュボードグリッドコンポーザーです。個々のチャートやパネルを手作業で配置する代わりに、ユーザーが編集可能なダッシュボードを構築する際に使用してください（ウィジェットの追加/移動/リサイズ/削除）。

### 使用する場面

- ウィジェットがグリッド上に配置、リサイズ、再配置される設定可能なダッシュボードのレンダリング（`react-grid-layout` 上に構築）。
- ユーザー編集可能なレイアウト：アクションパネルからのウィジェットの追加/削除、ドラッグ＆ドロップ、オーバーレイコントロール付きの編集モード。
- プラグインベースのウィジェット：各ウィジェットタイプ（タイトル、テキスト、チャート、カスタム）が一度登録され、`config` によって駆動される。

### 使用しない場面

- 単一の固定されたチャートやパネルの場合は、[`@gravity-ui/charts`](https://gravity-ui.com/charts) または [`@gravity-ui/chartkit`](https://github.com/gravity-ui/chartkit) を直接使用してください。グリッド/プラグインの仕組みは、1つのウィジェットにはオーバーヘッドが大きすぎます。
- ウィジェットダッシュボードではない汎用的なレスポンシブグリッドの場合は、`react-grid-layout` を直接使用してください。
- ChartKit ベースのチャートウィジェットを DashKit ダッシュボード内に埋め込む場合、DashKit はシェルとして機能します。実際のチャートのレンダリングには、引き続き [`@gravity-ui/chartkit`](https://github.com/gravity-ui/chartkit) が使用されます。

### よくある落とし穴

- **コンポーネント `<Dashboard>` の誤認** - エクスポートされるのは `<DashKit>` です（ドラッグ＆ドロップシェルは `<DashKit>` + `<ActionPanel>` をラップする `<DashKitDnDWrapper>` です）。
- **ヘルパーを使わずに `config` を変更する** - アイテムの追加/変更/削除には、静的メソッド `DashKit.setItem({...})` / `DashKit.removeItem({...})` を使用してください。これにより、レイアウトと ID が一貫性を保ちます。
- **`DashKit.setSettings` / `DashKit.registerPlugins` の忘れ** - コンポーネントはレンダリング前に設定（言語、グリッド設定、プラグイン登録）されている必要があります。そうでないと、ウィジェットは何も表示されません。
- **2つのパラメータプロップの混同** - `defaultGlobalParams`（ダッシュボードレベルのデフォルト）と `globalParams`（URL で上書き可能なグローバル）。どちらも ChartKit が消費するパラメータ生成キューに渡されます。
- **`onChange` を `change` イベントで手動で呼び出す** - 実験的な `change` ハンドラーで `event.preventDefault()` を使用すると、DashKit は内部でビジュアル状態を維持します。`config.layout` を props から再設定すると、そのベースラインがリセットされます。

## AI エージェント向けドキュメント

インストールされているバージョンのエージェント読み取り可能なドキュメントは、`node_modules/@gravity-ui/dashkit/build/docs/INDEX.md` にあります。