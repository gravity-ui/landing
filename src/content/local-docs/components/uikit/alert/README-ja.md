<!--GITHUB_BLOCK-->

# Alert

<!--/GITHUB_BLOCK-->

`Alert`コンポーネントは、ユーザーの注意を重要な情報に引き付けるための目立つメッセージを表示します。

```tsx
import {Alert} from '@gravity-ui/uikit';
```

### Theme

`normal`: メインテーマ（デフォルトで使用）。

`info`: あらゆる種類の通常の情報に使用されます。

`success`: ポジティブな情報に使用されます。

`warning`: 注意が必要な情報に使用されます。

`danger`: 重大なエラーに使用されます。

`utility`: 役立つヒントに使用されます。

`clear`: スタイルなし。他のコンポーネント内での使用に適しています（例: `Popover` の `content` として）。

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert theme="normal" title="Normal" message="Normal theme" />
            <Alert theme="info" title="Info" message="Info theme" />
            <Alert theme="success" title="Success" message="Success theme" />
            <Alert theme="warning" title="Warning" message="Warning theme" />
            <Alert theme="danger" title="Danger" message="Danger theme" />
            <Alert theme="utility" title="Utility" message="Utility theme" />
            <Alert theme="clear" title="Clear" message="Clear theme" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert theme="normal" title="Normal" message="Normal theme"/>
<Alert theme="info" title="Info" message="Info theme"/>
<Alert theme="success" title="Success" message="Success theme"/>
<Alert theme="warning" title="Warning" message="Warning theme"/>
<Alert theme="danger" title="Danger" message="Danger theme"/>
<Alert theme="utility" title="Utility" message="Utility theme"/>
<Alert theme="clear" title="Clear" message="Clear theme"/>
```

<!--/GITHUB_BLOCK-->

### View

`filled`: アラートの背景色を調整するために使用されます（デフォルトで使用）。

`outlined`: アラートの境界線の色を調整するために使用されます。

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert title="Filled" message="Filled view" view="filled" />
            <Alert title="Outlined" message="Outlined theme" view="outlined" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```
<Alert title="Filled" message="Filled view" view="filled" />
<Alert title="Outlined" message="Outlined theme" view="outlined" />
```

<!--/GITHUB_BLOCK-->

### Layout

`vertical`: `actions` プロパティにボタンがある場合に、ユーザーをコンテンツに誘導するために使用されます。テキストの下にボタンを表示できます（デフォルトで使用）。

`horizontal`: `actions` プロパティにボタンがある場合に、ユーザーをコンテンツに誘導するために使用されます。テキストの右側にボタンを表示できます。

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert
                layout="vertical"
                title="Vertical"
                message="Vertical direction"
                actions={<Alert.Action>button</Alert.Action>}
            />
            <Alert
                layout="horizontal"
                title="Horizontal"
                message="Horizontal direction"
                actions={<Alert.Action>button</Alert.Action>}
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert layout="vertical" title="Vertical" message="Vertical direction" actions={<Alert.Action>button</Alert.Action>}/>
<Alert layout="horizontal" title="Horizontal" message="Horizontal direction" actions={<Alert.Action>button</Alert.Action>}/>
```

<!--/GITHUB_BLOCK-->

### Corners

`rounded`: アラートウィンドウの角を丸くします（デフォルトで使用）。

`square`: アラートウィンドウの角を四角くします。

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert title="Rounded" message="Rounded corners" corners="rounded" />
            <Alert title="Square" message="Square corners" corners="square" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert title="Rounded" message="Rounded corners" corners="rounded"/>
<Alert title="Square" message="Square corners" corners="square"/>
```

<!--/GITHUB_BLOCK-->

## Alert title

`title`: アラートのタイトル。`Alert.Title` よりも優先度が低いです。

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return <Alert title={<Alert.Title className={'some-class'} text="some text" />} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert title={<Alert.Title className={'some-class'} text="some text"></Alert.Title>} />
```

<!--/GITHUB_BLOCK-->

## Alert message

`message`: アラートのメッセージ。アラートが何についてのものかを完全に説明するのに十分な意味を持つべきです。

## `onClose`

`onClose`: ユーザーがアラートの閉じるボタンをクリックしたときに呼び出されるコールバック関数。このプロパティが定義されている場合、閉じるボタンが表示されます。

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <Alert
            onClose={() => alert('Close button pressed')}
            title="Alert has close"
            message="Alert has close"
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert
  onClose={() => alert('Close button pressed')}
  title="Alert has close"
  message="Alert has close"
/>
```

<!--/GITHUB_BLOCK-->

### Align

`Alert` コンポーネント内のコンテンツがどのように垂直方向に配置されるかを決定します。

`baseline`: デフォルトの配置。

`center`: コンテンツは `Alert` コンポーネント内で垂直方向に中央揃えされます。アクションがテキストよりも多くのスペースを占める場合や、アイコンをコンテンツの中央に配置する必要がある場合に役立ちます。

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert
                align="baseline"
                theme="info"
                title="Baseline"
                message="Baseline align"
                actions={<Alert.Action>button</Alert.Action>}
            />
            <Alert
                align="center"
                theme="info"
                title="Center"
                message="Center align"
                actions={<Alert.Action>button</Alert.Action>}
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert align="vertical" title="Vertical" message="Vertical direction" actions={<Alert.Action>button</Alert.Action>}/>
<Alert align="horizontal" title="Horizontal" message="Horizontal direction" actions={<Alert.Action>button</Alert.Action>}/>
```

<!--/GITHUB_BLOCK-->

## Properties

`Alert` コンポーネントは、以下のプロパティをサポートしています。

| 名前 | 説明 | タイプ | デフォルト |
|---|---|---|---|
| `align` | アラートのコンテンツの配置を指定します。 | `'vertical' | 'horizontal' | 'baseline' | 'center'` | `'vertical'` |
| `theme` | アラートのテーマを指定します。 | `'info' | 'success' | 'warning' | 'danger'` | `'info'` |
| `title` | アラートのタイトルを指定します。 | `React.ReactNode` | - |
| `message` | アラートのメッセージを指定します。 | `React.ReactNode` | - |
| `actions` | アラートのアクションを指定します。 | `React.ReactNode` | - |
| `closable` | アラートを閉じるボタンを表示するかどうかを指定します。 | `boolean` | `false` |
| `onClose` | アラートが閉じられたときに呼び出されるコールバック関数を指定します。 | `() => void` | - |
| `className` | 追加のCSSクラスを指定します。 | `string` | - |
| `style` | 追加のインラインスタイルを指定します。 | `React.CSSProperties` | - |

| 名前          | 説明                                                                 |                                     タイプ                                     |   デフォルト    |
| :------------ | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------: | :----------: |
| theme         | アラートの外観                                                            | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` `"clear"` |  `"normal"`  |
| size          | アラートのサイズ                                                                  |                              `"s"` `"m"` `"l"`                               |    `"m"`     |
| view          | アラートの背景色の有効/無効を切り替えます                                |                           `"filled"` `"outlined"`                            |  `"filled"`  |
| layout        | `actions` プロパティにボタンがある場合に、ユーザーをコンテンツに誘導するために使用されます |                         `"vertical"` `"horizontal"`                          | `"vertical"` |
| actionsLayout | アクションボタンの方向を制御するために使用されます。                        |                         `"vertical"` `"horizontal"`                          | `"vertical"` |
| corners       | アラートウィンドウの丸角/角丸に使用されます                           |                            `"rounded"` `"square"`                            | `"rounded"`  |
| title         | アラートのタイトル                                                          |                                   `string`                                   |              |
| message       | アラートのメッセージ                                                        |                              `React.ReactNode`                               |              |
| onClose       | ユーザーがアラートの閉じるボタンをクリックしたときに呼び出されるコールバック関数    |                                  `Function`                                  |              |
| actions       | ボタンまたは完全なカスタムコンポーネントの配列                                  |                      `React.ReactNode` `"AlertAction"`                       |              |
| align         | Alert コンポーネント内のコンテンツの垂直方向の配置を決定します     |                           `"center"` `"baseline"`                            | `"baseline"` |
| style         | HTML の style 属性                                                        |                            `React.CSSProperties`                             |              |
| className     | アラートクラスの名前                                                         |                                   `string`                                   |              |
| icon          | デフォルトアイコンをオーバーライドします                                        |                              `React.ReactNode`                               |              |
| qa            | テストに使用される HTML の `data-qa` 属性。                                    |                                   `string`                                   |              |

## CSS API

| Name                               | Description                                                                    |
| :--------------------------------- | :----------------------------------------------------------------------------- |
| `--g-alert-padding`                | サイドパディング。                                                               |
| `--g-alert-border-radius`          | ボーダーラディウス。                                                             |
| `--g-alert-icon-margin-inline-end` | アイコンとコンテンツ部分（テキストコンテンツ + アクション）の間のインデント         |
| `--g-alert-close-btn-margin`       | コンテンツ部分（テキストコンテンツ + アクション）と閉じるボタンの間のインデント |
| `--g-alert-actions-margin`         | テキストコンテンツとアクションの間のギャップ。                                   |
| `--g-alert-message-title-indent`   | タイトルとメッセージの間のギャップ。                                             |
| `--g-alert-actions-gap`            | アクションボタン間のギャップ。                                                   |
| `--g-alert-title-text-color`       | タイトルの色。                                                                 |
| `--g-alert-title-font-size`        | タイトルのフォントサイズ。                                                       |
| `--g-alert-title-line-height`      | タイトルの行の高さ。                                                             |
| `--g-alert-message-text-color`     | メッセージの色。                                                               |
| `--g-alert-message-font-size`      | メッセージのフォントサイズ。                                                     |
| `--g-alert-message-font-weight`    | メッセージのフォントの太さ。                                                     |
| `--g-alert-message-line-height`    | メッセージの行の高さ。                                                           |