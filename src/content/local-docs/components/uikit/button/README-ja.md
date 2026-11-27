<!--GITHUB_BLOCK-->

# Button

<!--/GITHUB_BLOCK-->

ボタンは、特定の操作のトリガーとして機能します。これが主な目的ですが、非常にまれなケースでは、他のページに移動するためのリンクとして使用することもできます。

```tsx
import {Button} from '@gravity-ui/uikit';
```

## 外観

外観に関して、`Button` には4つのタイプがあります：ベーシック、アウトライン、フラット、コントラスト。
`Button` の外観は、`view` プロパティによって決定されます。

### ベーシック

`action`: 最も特徴的な `Button` タイプです。画面上で最も注意を引く必要がある主要な操作に使用されます。
ページごとに1つだけこのようなボタンを使用することをお勧めします。

`normal`: デフォルトの `Button` タイプで、二次的な操作や、あまり注意を引かずに操作の重要性を維持するために設計されています。

`raised`: コンテンツの上に浮動要素として配置され、通常は固定位置にあります。

<!--SANDBOX
import {Button} from '@gravity-ui/uikit'

export default function () {
    return (
        <>
            <Button view="action" size="l">Action</Button>
            <Button view="normal" size="l">Normal</Button>
            <Button view="raised" size="l">Raised</Button>
        </>
    )
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="action" size="l">Action</Button>
<Button view="normal" size="l">Normal</Button>
<Button view="raised" size="l">Raised</Button>
```

<!--/GITHUB_BLOCK-->

### アウトライン

`outlined`: 注意をあまり必要としない二次的な操作に使用されます。メインボタンと併用することも、単独で使用することもできます。併用する場合は、強調されたボタンである必要があります。

`outlined-action`: 通常、別のページや外部リソースへのリンクとして使用されます。

このタイプには、追加のセマンティクスが必要な場合に使用できるセマンティックバリエーションもあります：`outlined-info`、`outlined-success`、`outlined-warning`、`outlined-danger`。

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button view="outlined" size="l">Outlined</Button>
            <Button view="outlined-action" size="l">Outlined Action</Button>
            <Button view="outlined-info" size="l">Outlined Info</Button>
            <Button view="outlined-success" size="l">Outlined Success</Button>
            <Button view="outlined-warning" size="l">Outlined Warning</Button>
            <Button view="outlined-danger" size="l">Outlined Danger</Button>
            <Button view="outlined-utility" size="l">Outlined Utility</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="outlined" size="l">Outlined</Button>
<Button view="outlined-action" size="l">Outlined Action</Button>
<Button view="outlined-info" size="l">Outlined Info</Button>
<Button view="outlined-success" size="l">Outlined Success</Button>
<Button view="outlined-warning" size="l">Outlined Warning</Button>
<Button view="outlined-danger" size="l">Outlined Danger</Button>
<Button view="outlined-utility" size="l">Outlined Utility</Button>
```

<!--/GITHUB_BLOCK-->

### フラット

`flat`: 最も注意を引く必要のない補助的な操作に使用されます。ボタンのリストやエディタ内のアクションアイコン（テキストなし）でよく使用されます。

`flat-secondary`: `flat` ボタンよりも強調度が低いです。ダイアログボックスやモーダルウィンドウで二次ボタンとしてよく使用されます。

`flat-action`: 通常、別のページや外部リソースへのリンクとして使用されます。

追加のセマンティクスが必要な場合に使用できるセマンティックバリエーションもあります：`outlined-info`、`outlined-success`、`outlined-warning`、`outlined-danger`。

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button view="flat" size="l">Flat</Button>
            <Button view="flat-action" size="l">Flat Action</Button>
            <Button view="flat-info" size="l">Flat Info</Button>
            <Button view="flat-success" size="l">Flat Success</Button>
            <Button view="flat-warning" size="l">Flat Warning</Button>
            <Button view="flat-danger" size="l">Flat Danger</Button>
            <Button view="flat-utility" size="l">Flat Utility</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="flat" size="l">Flat</Button>
<Button view="flat-secondary" size="l">Flat Secondary</Button>
<Button view="flat-action" size="l">Flat Action</Button>
<Button view="flat-info" size="l">Flat Info</Button>
<Button view="flat-success" size="l">Flat Success</Button>
<Button view="flat-warning" size="l">Flat Warning</Button>
<Button view="flat-danger" size="l">Flat Danger</Button>
<Button view="flat-utility" size="l">Flat Utility</Button>
```

<!--/GITHUB_BLOCK-->

### コントラスト

`normal-contrast`、`outline-contrast`、`flat-contrast` ボタンは、バナー内や逆背景など、複雑な背景に対してアクションを際立たせます。

<!--SANDBOX
import {Button} from '@gravity-ui/uikit'
import {type CSSProperties} from 'react';

const containerStyle: CSSProperties = {
    display: 'flex',
    gap: 16,
    backgroundColor: 'rgb(68, 38, 204)',
    padding: '20px',
    borderRadius: '8px'
}

export default function () {
    return (
        <div style={containerStyle}>
            <Button view="normal-contrast" size="l">Normal Contrast</Button>
            <Button view="outlined-contrast" size="l">Outlined Contrast</Button>
            <Button view="flat-contrast" size="l">Flat Contrast</Button>
        </div>
    )
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="normal-contrast" size="l">Normal Contrast</Button>
<Button view="outlined-contrast" size="l">Outlined Contrast</Button>
<Button view="flat-contrast" size="l">Flat Contrast</Button>
```

<!--/GITHUB_BLOCK-->

## アイコン

`Button` にアイコンを追加するには、SVGの特別なラッパーである [`Icon`](../Icon) コンポーネントを使用します。

<!--SANDBOX
import {Gear} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button view="outlined" size="l">
                <Icon data={Gear} size={18} />
                Start
            </Button>
            <Button view="outlined" size="l">
                End
                <Icon data={Gear} size={18} />
            </Button>
            <Button view="outlined" size="l">
                <Icon data={Gear} size={18} />
                Both
                <Icon data={Gear} size={18} />
            </Button>
            <Button view="outlined" size="l">
                <Icon data={Gear} size={18} />
            </Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="outlined" size="l">
    <Icon data={Gear} size={18} />
    Start
</Button>
<Button view="outlined" size="l">
    End
    <Icon data={Gear} size={18} />
</Button>
<Button view="outlined" size="l">
    <Icon data={Gear} size={18} />
    Both
    <Icon data={Gear} size={18} />
</Button>
<Button view="outlined" size="l">
    No text:
    <Icon data={Gear} size={18} />
</Button>
```

<!--/GITHUB_BLOCK-->

## ステート

`Button` にはさまざまなステートがあります：

`disabled`: ボタンが何らかの理由で利用できない場合。

`loading`: バックグラウンドで非同期プロセスが実行されている場合。

`selected`: ユーザーがボタンを**有効**および**無効**にできる場合。

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button size="l" disabled>Disabled</Button>
            <Button size="l" loading>Loading</Button>
            <Button size="l" selected>Selected</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button size="l" disabled>Disabled</Button>
<Button size="l" loading>Loading</Button>
<Button size="l" selected>Selected</Button>
```

<!--/GITHUB_BLOCK-->

### メニュー トリガー

`Button` は、対応する aria属性（`aria-haspopup`、`aria-expanded`）が渡されると、自動的に外観が変化します：

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button aria-haspopup="menu" aria-expanded="true">Menu</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button aria-haspopup="menu" aria-expanded="true">
  Menu
</Button>
```

<!--/GITHUB_BLOCK-->

## サイズ

`Button` のサイズを管理するには、`size` プロパティを使用します。デフォルトのサイズは `m` です。

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button size="xs">XS Size</Button>
            <Button size="s">S Size</Button>
            <Button size="m">M Size</Button>
            <Button size="l">L Size</Button>
            <Button size="xl">XL Size</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button size="xs">XS Size</Button>
<Button size="s">S Size</Button>
<Button size="m">M Size</Button>
<Button size="l">L Size</Button>
<Button size="xl">XL Size</Button>
```

<!--/GITHUB_BLOCK-->

## 幅

コンテナ内での `Button` の動作方法を管理するには、`width` プロパティを使用します：

`auto`: 省略記号でオーバーフローするコンテンツを非表示にすることで、`Button` の最大幅を制限します。

`max`: `Button` の幅を親コンテナの幅に合わせ、オーバーフローするコンテンツを省略記号で非表示にします。

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const containerStyle: CSSProperties = {
    width: 100,
    border: '2px dashed gray',
};

const titleStyle: CSSProperties = {
    textAlign: 'center',
};

export default function () {
    return (
        <>
            <div style={containerStyle}>
                <h4 style={titleStyle}>Default</h4>
                <p>
                    <Button>Text</Button>
                </p>
                <p>
                    <Button>Very Long Text</Button>
                </p>
            </div>
            <div style={containerStyle}>
                <h4 style={titleStyle}>Auto</h4>
                <p>
                    <Button width="auto">Text</Button>
                </p>
                <p>
                    <Button width="auto">Very Long Text</Button>
                </p>
            </div>
            <div style={containerStyle}>
                <h4 style={titleStyle}>Max</h4>
                <p>
                    <Button width="max">Text</Button>
                </p>
                <p>
                    <Button width="max">Very Long Text</Button>
                </p>
            </div>
        </>
    );
}
SANDBOX-->

## ピン

`pin` プロパティを使用すると、**開始**エッジと**終了**エッジの形状を管理できます。通常、複数のボタンを単一のユニットとして結合する場合に使用されます。
`pin` プロパティの値は、ハイフンで区切られた **開始** と **終了** のスタイル名で構成されます。例：`round-brick`。
エッジのスタイルは、`round`（デフォルト）、`circle`、`brick`、`clear` です。

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <div>
                <Button view="action" size="l" pin="round-clear">Create</Button>
                <Button view="action" size="l" pin="brick-round">...</Button>
            </div>
            <div>
                <Button view="normal" size="l" pin="circle-clear">Start</Button>
                <Button view="normal" size="l" pin="brick-brick" selected>Center</Button>
                <Button view="normal" size="l" pin="clear-circle">End</Button>
            </div>
            <div>
                <Button view="outlined" pin="brick-clear">1</Button>
                <Button view="outlined" pin="clear-clear">2</Button>
                <Button view="outlined" pin="clear-clear">3</Button>
                <Button view="outlined" pin="clear-brick">4</Button>
            </div>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div>
    <Button view="action" size="l" pin="round-brick">Create</Button>
    <Button view="action" size="l" pin="brick-round">...</Button>
</div>
<div>
    <Button view="normal" size="l" pin="circle-clear">Start</Button>
    <Button view="normal" size="l" pin="brick-brick" selected>Center</Button>
    <Button view="normal" size="l" pin="clear-circle">End</Button>
</div>
<div>
    <Button view="outlined" pin="brick-clear">1</Button>
    <Button view="outlined" pin="clear-clear">2</Button>
    <Button view="outlined" pin="clear-clear">3</Button>
    <Button view="outlined" pin="clear-brick">4</Button>
</div>
```

<!--/GITHUB_BLOCK-->

## プロパティ

`Button` は、これらのプロパティに加えて、有効な `button` または `a` 要素のプロパティをすべて受け入れます：

| 名前      | 説明                                                              |              タイプ               |     デフォルト     |
| :-------- | :---------------------------------------------------------------- | :-----------------------------: | :-------------: |
| children  | `Button` のコンテンツ。テキストと `<Icon/>` コンポーネントの両方を使用できます。 |        `React.ReactNode`        |                 |
| component | ルートコンポーネントをオーバーライドします。                               |       `React.ElementType`       |                 |
| disabled  | `disabled` 状態を切り替えます。                                         |            `boolean`            |     `false`     |
| href      | ルートコンポーネントをリンクにするために渡します。                               |            `string`             |                 |
| loading   | `loading` 状態を切り替えます。                                          |            `boolean`            |     `false`     |
| pin       | `Button` のエッジスタイルを設定します。                                     |            `string`             | `"round-round"` |
| qa        | テストに使用される `data-qa` HTML 属性。                                   |            `string`             |                 |
| selected  | `selected` 状態を切り替えます。                                         |            `boolean`            |                 |
| size      | `Button` のサイズを設定します。                                          | `"xs"` `"s"` `"m"` `"l"` `"xl"` |      `"m"`      |
| view      | `Button` の外観を設定します。                                           |          `ButtonView`           |   `"normal"`    |
| width     | `Button` が親のスペースをどのように使用するかを制御します。                               |        `"auto"` `"max"`         |                 |

## CSS API

| 名前                                | 説明               |
| :---------------------------------- | :----------------- |
| `--g-button-text-color`             | テキストの色       |
| `--g-button-text-color-hover`       | ホバー時のテキストの色 |
| `--g-button-background-color`       | 背景色             |
| `--g-button-background-color-hover` | ホバー時の背景色   |
| `--g-button-border-width`           | 境界線の幅         |
| `--g-button-border-color`           | 境界線の色         |
| `--g-button-border-style`           | 境界線のスタイル   |
| `--g-button-focus-outline-width`    | フォーカスアウトラインの幅 |
| `--g-button-focus-outline-color`    | フォーカスアウトラインの色 |
| `--g-button-focus-outline-style`    | フォーカスアウトラインのスタイル |
| `--g-button-focus-outline-offset`   | フォーカスアウトラインのオフセット |
| `--g-button-height`                 | 高さ (行の高さ)    |
| `--g-button-padding`                | サイドのパディング |
| `--g-button-border-radius`          | 角丸               |
| `--g-button-font-size`              | テキストのフォントサイズ |
| `--g-button-icon-space`             | アイコンの利用可能スペース |
| `--g-button-icon-offset`            | アイコンのオフセット |
