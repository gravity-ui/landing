# @gravity-ui/icons &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/icons)](https://www.npmjs.com/package/@gravity-ui/icons) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/icons/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/icons/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/icons/)

Gravity UI アイコンパックです。アイコンは SVG と React の両方のソースを持っています。 [ショーケース](https://preview.gravity-ui.com/icons/) ページをご覧ください。

## インストール

```shell
npm install --save-dev @gravity-ui/icons
```

## 使用方法

### React

```js
import Cloud from '@gravity-ui/icons/Cloud';
```

または

```js
import {Cloud} from '@gravity-ui/icons';
```

### SVG

> これには適切なローダーが必要になる場合があります

```js
import cloudIcon from '@gravity-ui/icons/svgs/cloud.svg';
```

## ライセンス

MIT ライセンスで配布されます。詳細は [LICENSE](LICENSE) を参照してください。

## AI エージェント向け

Gravity UI の公式 SVG アイコンセットで、React コンポーネントと `@gravity-ui/uikit` の `Icon` レンダラーで使用できる生の `.svg` ファイルの両方として提供されます。

### 使用する場合

- Gravity UI アプリ内でアイコンが必要で、一貫性のある既製のセットを使用したい場合。
- uikit を介してアイコンをレンダリングする場合: ここでアイコンコンポーネントをインポートし、`Icon` の `data` プロップを通じて uikit の `Icon` に渡します。
- 生の `.svg` アセットが必要な場合 (例: CSS の `background-image` やビルド時の SVG ローダー用) で、React コンポーネントではない場合。

### 使用しない場合

- 画面上にアイコンをレンダリングする場合 — このパッケージはグリフのみを提供します。実際のレンダラー (サイズ、色、a11y) は [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) の `Icon` コンポーネントです。
- カスタムまたはブランドのアイコンが必要で、セットに含まれていない場合 — 独自の SVG をインポートし、uikit の `Icon` に渡します。ここに配置されることを期待しないでください。

### よくある落とし穴

- **アイコンは名前ではなくデータとして渡されます。** `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} />` のようにしてください。`<Icon name="gear" />` のような API はなく、このパッケージ自体は `<Icon>` コンポーネントをエクスポートしません。
- **ツリーシェイキングにはインポートパスが重要です。** `import Cloud from '@gravity-ui/icons/Cloud'` は単一のアイコンをプルします。`import {Cloud} from '@gravity-ui/icons'` も機能しますが、バンドラーがバレルをツリーシェイクすることに依存します。
- **SVG のインポートにはローダーが必要です。** `import icon from '@gravity-ui/icons/svgs/cloud.svg'` は、バンドラーが `.svg` ファイルを処理するように構成されている場合にのみ機能します。
- **サイズと色はレンダラーから取得されます。** uikit の `Icon` で `size` を設定し、`color`/CSS の `currentColor` で色を制御します。SVG 自体には固定の色はありません。