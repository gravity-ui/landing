<!--GITHUB_BLOCK-->

# Card

<!--/GITHUB_BLOCK-->

`Card` は、カスタマイズ可能なスタイルと機能を備えた、基本的なカードライクなコンテナである再利用可能な React コンポーネントです。情報を視覚的に魅力的で整理された方法で表示するために使用されます。

```tsx
import {Card} from '@gravity-ui/uikit';
```

## 外観

`Card` は、複数のスタイルを組み合わせて表示できます。

- `theme`: `normal`, `info`, `success`, `warning`, `danger`, または `utility`。
- `type`: `selection`, `action`, または `container`。
- `view`: `outlined` または `clear`、あるいは `outlined`, `filled`, `raised` ( `type` パラメータによって異なります)。

## テーマ

このパラメータは、カードのテーマスタイルを指定するために使用されます。カードの配色と外観を決定します。

さまざまなテーマ値を指定することで、`Card` の視覚的な外観を、目的と必要なスタイルに合わせてカスタマイズできます。

- `normal`: カードの標準/デフォルトテーマ。
- `info`: 中立的な情報を表示するためのテーマ。
- `success`: ポジティブまたは肯定的なコンテンツを表示するためのテーマ。
- `warning`: 警告を表示するためのテーマ。
- `danger`: クリティカルな問題やエラーに関連するコンテンツを表示するためのテーマ。
- `utility`: 役立つヒントを表示するためのテーマ。

<!--SANDBOX
import {Card} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const cardStyle: CSSProperties = {
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const gridStyle: CSSProperties = {
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '10px',
};

export default function () {
    return (
        <div style={gridStyle}>
            <Card style={cardStyle} theme="normal" size="l">
                Normal
            </Card>
            <Card style={cardStyle} theme="info" size="l">
                Info
            </Card>
            <Card style={cardStyle} theme="success" size="l">
                Success
            </Card>
            <Card style={cardStyle} theme="warning" size="l">
                Warning
            </Card>
            <Card style={cardStyle} theme="danger" size="l">
                Danger
            </Card>
            <Card style={cardStyle} theme="utility" size="l">
                Utility
            </Card>
        </div>
    );
}
SANDBOX-->

## タイプ

このパラメータは、`Card` コンポーネントのタイプを定義するために使用されます。カードの外観と動作をカスタマイズできます。

- `container`: 他の要素のコンテナとして機能するカード。コンテンツの構造化されたレイアウトを提供します。
- `action`: クリック時にアクションをトリガーするボタンなどのインタラクティブな要素を持つカード。
- `selection`: 特定のアクションを実行するために選択またはクリックできるカード。

<!--SANDBOX
import {Card} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const cardStyle: CSSProperties = {
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const gridStyle: CSSProperties = {
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '10px',
};

export default function () {
    return (
        <div style={gridStyle}>
            <Card style={cardStyle} view="outlined" type="container" size="l">
                Container
            </Card>
            <Card
                style={cardStyle}
                view="outlined"
                type="action"
                onClick={() => alert(':wave: hey')}
                size="l"
            >
                action with onClick
            </Card>
            <Card style={cardStyle} view="outlined" type="selection" size="l">
                Selection
            </Card>
        </div>
    );
}
SANDBOX-->

## 表示

このパラメータは、`Card` の表示またはレイアウトスタイルを指定するために使用されます。カードコンテンツの外観と配置をカスタマイズできます。

- `clear`: スタイルなし。
- `outlined`: カードコンテンツを強調するために細い境界線を適用します。
- `filled`: カードコンテンツを塗りつぶします。
- `raised`: コンテナをわずかに持ち上げるために影を適用します。

<!--SANDBOX
import {Card} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const cardStyle: CSSProperties = {
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const gridStyle: CSSProperties = {
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '10px',
};

export default function () {
    return (
        <div style={gridStyle}>
            <Card style={cardStyle} view="clear" type="container" size="l">
                Clear
            </Card>
            <Card style={cardStyle} view="outlined" type="container" size="l">
                Outlined
            </Card>
            <Card style={cardStyle} view="filled" type="container" size="l">
                Filled
            </Card>
            <Card style={cardStyle} view="raised" type="container" size="l">
                Raised
            </Card>
        </div>
    );
}
SANDBOX-->

## プロパティ

| 名前      | 説明                                                                                       |    タイプ     |    デフォルト    |
| :-------- | :------------------------------------------------------------------------------------------------ | :---------: | :-----------: |
| children  | カードの内容                                                                                      | `ReactNode` |               |
| type      | `Card` のタイプにより、利用可能なプロパティが決まります。                                        |  `string`   | `"container"` |
| view      | このプロパティは `"container"` および `"selection"` の `type` でのみ利用可能です。                  |  `string`   | `"outlined"`  |
| theme     | カードの基本色。このプロパティは `"container"` の `type` でのみ利用可能です。                  |  `string`   |  `"normal"`   |
| size      | `Card` のサイズにより、利用可能なプロパティが決まります。                                        |  `string`   |     `"m"`     |
| className | CSS クラス                                                                                         |  `string`   |               |
| onClick   | カードのクリックハンドラ。このプロパティは `"selection"` および `"action"` の `type` でのみ利用可能です。 | `Function`  |               |
| selected  | 選択されたカード。このプロパティは `"selection"` の `type` でのみ利用可能です。                      |  `Boolean`  |               |
| disabled  | 無効化されたカード。このプロパティは `"selection"` および `"action"` の `type` でのみ利用可能です。      |  `Boolean`  |               |
| qa        | テストに使用される `data-qa` HTML 属性                                                        |  `string`   |               |

## CSS API

| 名前                        | 説明      |
| :-------------------------- | :--------------- |
| `--g-card-background-color` | 背景色 |
| `--g-card-border-width`     | 境界線の幅     |
| `--g-card-border-color`     | 境界線の色     |
| `--g-card-border-radius`    | 角丸     |
| `--g-card-box-shadow`       | 影           |
