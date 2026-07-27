# @gravity-ui/dashkit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dashkit)](https://www.npmjs.com/package/@gravity-ui/dashkit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dashkit/.github/workflows/ci.yaml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/dashkit/actions/workflows/ci.yaml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dashkit/)

# DashKit

ダッシュボードグリッド描画ライブラリです。

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

- **config**: [Config](#Config)です。
- **editMode**: 編集モードが有効かどうか。
- **onItemEdit**: ウィジェットの編集をクリックしたときに呼び出されます。
- **onChange**: configまたは[itemsStateAndParams](#itemsStateAndParams)が変更されたときに呼び出されます。
- **onDrop**: ActionPanelから(#DashKitDnDWrapper)を使用してアイテムがドロップされたときに呼び出されます。
- **onItemMountChange**: アイテムのマウント状態が変更されたときに呼び出されます。
- **onItemRender**: アイテムのレンダリングが完了したときに呼び出されます。
- **defaultGlobalParams**, **globalParams**: すべてのウィジェットに影響を与える[パラメータ](#Params)です。DataLensでは、`defaultGlobalParams`はダッシュボード設定でグローバルに設定されたパラメータです。`globalParams`はURLで設定できるグローバルパラメータです。
- **itemsStateAndParams**: [itemsStateAndParams](#itemsStateAndParams)です。
- **settings**: DashKitの設定です。
- **context**: すべてのウィジェットにプロップとして渡されるオブジェクトです。
- **overlayControls**: 編集時にウィジェットコントロールをオーバーライドするオブジェクトです。指定しない場合は、基本的なコントロールが表示されます。`null`を渡すと、閉じるボタンまたはカスタムメニューのみが表示されます。
- **overlayMenuItems**: カスタムドロップダウンメニュー項目です。
- **noOverlay**: `true`の場合、編集中はオーバーレイとコントロールが表示されません。
- **focusable**: `true`の場合、グリッドアイテムはフォーカス可能になります。
- **onItemFocus**: `focusable`がtrueでアイテムがフォーカスされたときに呼び出されます。
- **onItemBlur**: `focusable`がtrueでアイテムからフォーカスが外れたときに呼び出されます。
- **draggableHandleClassName**: ウィジェットをドラッグ可能にする要素のCSSクラス名です。
- **onDragStart**: アイテムのドラッグが開始されたときにReactGridLayoutによって呼び出されます。
- **onDrag**: アイテムのドラッグ中にReactGridLayoutによって呼び出されます。
- **onDragStop**: アイテムのドラッグが停止したときにReactGridLayoutによって呼び出されます。
- **onResizeStart**: アイテムのリサイズが開始されたときにReactGridLayoutによって呼び出されます。
- **onResize**: アイテムのリサイズ中にReactGridLayoutによって呼び出されます。
- **onResizeStop**: アイテムのリサイズが停止したときにReactGridLayoutによって呼び出されます。
- **getPreparedCopyItemOptions**: ローカルストレージに保存する前に、コピーされたアイテムをシリアライズ可能なオブジェクトに変換するために呼び出されます。非推奨の`context.getPreparedCopyItemOptions`プロップの代わりにこれを使用してください。
- **onCopyFulfill**: アイテムのコピーが完了したときに、成功した場合は`error=null`と`data`が定義され、そうでない場合は`data`なしで`error: Error`とともに呼び出されます。

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
  aliases: ConfigAliases; // パラメータのエイリアス #Params参照
  connections: ConfigConnection[]; // ウィジェット間のリンク #Params参照
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
      text: `Some text`,
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
    // オプション。ActionPanel からドロップされた新しい要素の既存アイテムの新しいレイアウト値
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
2. デフォルトウィジェットパラメータ `item.default`
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

さらに、ウィジェットの状態とパラメータ:

```ts
interface ItemsStateAndParamsBase {
  [itemId: string]: {
    state?: Record<string, any>;
    params?: Params;
  };
}
```

```ts
type ItemsStateAndParams = StateAndParamsMeta & ItemsStateAndParamsBase

`preventDefault()` を `change` イベントハンドラで使用すると、config プロップを再初期化せずにレイアウトの更新を処理できるようになりました。DashKit は内部でベースラインを維持し、パッチをインクリメンタルに計算します。

```tsx
function Dashboard() {
  const [config, setConfig] = useState(

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
Storybook を実行中にプロジェクトの変更が常に反映されるとは限らないため、手動でプロジェクトを再ビルドしてから Storybook を再起動することをお勧めします。

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

プラグインシステムを介して、レスポンシブなグリッドにリサイズ可能でドラッグ可能なウィジェットを配置するダッシュボードグリッドコンポーザーです。個々のチャートやパネルを手作業で配置する代わりに、ユーザーが編集可能なダッシュボードを構築する際に使用してください（ウィジェットの追加/移動/リサイズ/削除）。

### 使用する場面

- ウィジェットがグリッド上に配置、リサイズ、再配置される設定可能なダッシュボードのレンダリング（`react-grid-layout` 上に構築）。
- ユーザー編集可能なレイアウト：アクションパネルからのウィジェットの追加/削除、ドラッグ＆ドロップ、オーバーレイコントロール付きの編集モード。
- プラグインベースのウィジェット：各ウィジェットタイプ（タイトル、テキスト、チャート、カスタム）が一度登録され、`config` によって駆動される。

### 使用しない場面

- 単一の固定されたチャートやパネルには、[`@gravity-ui/charts`](https://gravity-ui.com/charts) または [`@gravity-ui/chartkit`](https://github.com/gravity-ui/chartkit) を直接使用してください。グリッド/プラグインの仕組みは、1つのウィジェットにはオーバーヘッドです。
- ウィジェットダッシュボードではない汎用的なレスポンシブグリッドには、`react-grid-layout` を直接使用してください。
- ChartKit バックエンドのチャートウィジェットを DashKit ダッシュボード内に埋め込む場合、DashKit はシェルであり、実際のチャートのレンダリングには引き続き [`@gravity-ui/chartkit`](https://github.com/gravity-ui/chartkit) に依存します。

### よくある落とし穴

- **コンポーネント `<Dashboard>` の誤認** - エクスポートは `<DashKit>` です（ドラッグ＆ドロップシェルは `<DashKit>` + `<ActionPanel>` をラップする `<DashKitDnDWrapper>` です）。
- **ヘルパーを使用せずに `config` を変更する** - アイテムの追加/変更/削除には、静的ヘルパー `DashKit.setItem({...})` / `DashKit.removeItem({...})` を使用してください。これにより、レイアウトと ID が一貫性を保ちます。
- **`DashKit.setSettings` / `DashKit.registerPlugins` の忘れ** - コンポーネントは、レンダリングされる前に設定（言語、グリッド設定、プラグイン登録）が必要です。そうしないと、ウィジェットは何も表示されません。
- **2つのパラメータプロップの混同** - `defaultGlobalParams`（ダッシュボードレベルのデフォルト）と `global