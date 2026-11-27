<!--GITHUB_BLOCK-->

# Slider

<!--/GITHUB_BLOCK-->

スライダーは、指定されたデータセットから単一の値または値の範囲を選択できる、カスタマイズ可能でレスポンシブなReactコンポーネントです。

```tsx
import {Slider} from '@gravity-ui/uikit';
```

## スライダーのバリエーション

### シングルスライダー

これは、単一の値を選択するための1つのハンドルを持つスライダーです。デフォルトで使用されます。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider />
```

<!--/GITHUB_BLOCK-->

### レンジスライダー

これは、範囲を選択するための2つのハンドルを持つスライダーです。これを使用するには、配列に対して `defaultValue`（制御されていないスライダーの場合）または `value`（制御されているスライダーの場合）を設定します。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider defaultValue={[20, 40]} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider defaultValue={[20, 40]} />
```

<!--/GITHUB_BLOCK-->

## ステート

### 無効

これは、ユーザーがこのコンポーネントを操作できないようにしたい `Slider` のステートです。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider disabled />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider disabled={true} />
```

<!--/GITHUB_BLOCK-->

### エラー

この `Slider` ステートは、ユーザーの不正な入力用です。 `Slider` の外観を変更するには、 `validationState` プロパティを `"invalid"` 値で設定します。オプションで、 `errorMessage` プロパティを通じてエラーメッセージを提供できます。このメッセージテキストはスライダーの下にレンダリングされます。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider validationState="invalid" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider validationState="invalid" errorMessage="Error message" />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider validationState={"invalid"} />
<Slider validationState={"invalid"} errorMessage="Error message" />
```

<!--/GITHUB_BLOCK-->

## サイズ

`size` プロパティを使用して `Slider` のサイズを管理します。デフォルトのサイズは `m` です。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider size="s" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="m" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="l" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="xl" />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider size="s" />
<Slider size="m" />
<Slider size="l" />
<Slider size="xl" />
```

<!--/GITHUB_BLOCK-->

## 値

### 最小値と最大値

`min` および `max` プロパティは、 `Slider` が処理できる範囲の制限を定義します。これらのプロパティは、選択可能な値の境界を設定するために不可欠です。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider min={10} />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider max={50} />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider min={20} max={60} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider min={10} />
<Slider max={50} />
<Slider min={20} max={60} />
```

<!--/GITHUB_BLOCK-->

### ステップ

`step` プロパティは、最小値と最大値の範囲内のインクリメントを決定します。これは、スライダーを1回動かすたびに値がどれだけ変化するかを示します。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider step={10} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider step={10} />
```

<!--/GITHUB_BLOCK-->

### マーカー

`marks` プロパティは、 `Slider` コンポーネントで使用され、最小値と最大値の間のさまざまなポイントを示すのに役立つスライダー上の視覚的なマーカーを指定します。このプロパティは、特に特定の区間を示す場合に、スライダーのユーザビリティと視覚的なインターフェースを向上させます。デフォルトでは、マーカーは2つ（ `min` と `max` の値）です。次の2つの方法で使用できます。

- スライダー上の視覚的なマーカーの数

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={11} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={11} />
```

<!--/GITHUB_BLOCK-->

- スライダー上のマーカー値の配列

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={[0, 50, 100]} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={[0, 50, 100]} />
```

<!--/GITHUB_BLOCK-->

`marks` プロパティの値が `0` または空の配列 `[]` の場合、 `Slider` からすべてのマーカーが非表示になります。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={0} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={0} />
```

<!--/GITHUB_BLOCK-->

> マーカーの値は、 `step` 値の条件に一致しない場合でも選択可能です。

`marksFormat` プロパティを使用して、マーカー値の表示形式を変更できます。

#### 利用可能な値の定義

`step` プロパティを `null` に設定することで、連続的な範囲ではなく、スライダーが処理できる特定の値のセットを定義できます。これは、特定の離散値のみが選択可能である場合に特に役立ちます。その場合、 `min`、 `max`、および `marks` プロパティは、ユーザーが `Slider` を使用して選択できる正確な値を示す数値の配列を指定できます。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={[10, 20, 50, 55, 65, 80]} step={null} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={[10, 20, 50, 55, 65, 80]} step={null} />
```

<!--/GITHUB_BLOCK-->

## 開始点

`startPoint` プロパティを使用すると、トラックの開始点を設定できます。デフォルトでは、最小の `Slider` 値が使用されます。範囲の値を持つ `Slider` を使用している場合や、 `inverted` プロパティを設定している場合は無視されます。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider startPoint={50} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider startPoint={50} />
```

<!--/GITHUB_BLOCK-->

## 反転

`inverted` プロパティを使用すると、 `Slider` のトラックを反転したビューを設定できます。
デフォルト（ `false` ）では、 `Slider` は `min` からハンドルまでの間隔を表示します。
`true` の場合、ピンから `max` までの間隔を示します。
シングル `Slider` のみ。 `startPoint` プロパティは無視されます。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider inverted />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider inverted />
```

<!--/GITHUB_BLOCK-->

## ツールチップ

`tooltipDisplay` プロパティは、 `Slider` コンポーネントで使用され、スライダーを操作しているユーザーに現在の値を示すツールチップの表示動作を制御します。 `auto` 値は、 `Slider` のハンドルがカーソルでホバーされたりフォーカスされたりした場合にのみツールチップを表示します。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider tooltipDisplay="on" />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider tooltipDisplay="on" />
```

<!--/GITHUB_BLOCK-->

`tooltipFormat` プロパティを使用して、ツールチップの値の表示形式を変更できます。 `tooltipformat` を指定しない場合、ツールチップの値の表示には `marksFormat` が使用されます。

## プロパティ

| 名前                             | 説明                                                                                                                                                                              |                         タイプ                         | デフォルト |
| :------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------: | :-----: |
| apiRef                           | フォーカスとブラーのSliderコンポーネントプロップへの参照                                                                                                                                        |                `RefObject<SliderRef>`                |         |
| autoFocus                        | コントロールの `autofocus` 属性                                                                                                                                                      |                      `boolean`                       |         |
| className                        | コントロールのラッパークラス名                                                                                                                                                         |                       `string`                       |         |
| [defaultValue](#slider-variants) | コントロールのデフォルト値。コンポーネントが制御されていない場合に使用されます。デフォルトでは最小の `Slider` 値を使用します。                                                                   |             `number` `[number, number]`              |         |
| [disabled](#disabled)            | ユーザーがコントロールを操作できないことを示します                                                                                                                                 |                      `boolean`                       | `false` |
| [errorMessage](#error)           | 表示するエラーのテキスト                                                                                                                                                                 |                       `string`                       |         |
| [marks](#marks)                  | スライダーの下のテキストマーク。スライダーのマークの数に設定することも、マークが必要な値の配列に設定することもできます。`0` または空の配列の値は、すべてのマークを非表示にします。                                                                               |                 `number` `number[]`                  |   `2`   |
| [marksFormat](#marks)            | マークの表示値のフォーマッタ                                                                                                                                                 |             `(value: number) => string`              |         |
| [max](#min-and-max-value)        | コンポーネントの最大値                                                                                                                                                                                     |                       `number`                       |  `100`  |
| [min](#min-and-max-value)        | コンポーネントの最小値                                                                                                                                                                                     |                       `number`                       |   `0`   |
| onBlur                           | コントロールがフォーカスを失ったときに発生します。フォーカスイベントをコールバックの引数として提供します                                                                                                         | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |         |
| onUpdate                         | ユーザーによってスライダーの値が変更されたときに発生します。変更イベントをコールバックの引数として提供します                                                                                                                   |   `((value: number \| [number, number]) => void)`    |         |
| onUpdateComplete                 | ontouchend または onmouseup がトリガーされたときに発生します。変更イベントをコールバックの引数として提供します                                                                                                                        |   `((value: number \| [number, number]) => void)`    |         |
| onFocus                          | コントロールがフォーカスを取得したときに発生します。フォーカスイベントをコールバックの引数として提供します                                                                                                         | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |         |
| [size](#size)                    | コントロールのサイズ                                                                                                                                                                  |               `"s"` `"m"` `"l"` `"xl"`               |  `"m"`  |
| [step](#step)                    | スライダーが移動する各ステップで加算または減算される値。`marks` をステップとして使用するには `null` に設定できます。                                                                                                           |                   `number` `null`                    |   `1`   |
| [startPoint](#start-point)       | トラックの開始点。範囲スライダーおよび反転スライダーでは無視されます。                                                                                                                                             |                       `number`                       |         |
| [inverted](#inverted)            | 反転されたトラックを持つスライダー（ハンドルから `max` まで）。                                                                                                                                       |                      `boolean`                       |         |
| tabIndex                         | コントロールの `tabIndex` 属性                                                                                                                                                       |             `number` `[number, number]`              |         |
| [tooltipDisplay](#tooltip)       | ツールチップの表示動作                                                                                                                                                                 |                  `off` `on` `auto`                   |  `off`  |
| [tooltipFormat](#tooltip)        | ツールチップの表示値のフォーマッタ。設定されていない場合は `marksFormat` を使用します                                                                                                               |             `(value: number) => string`              |         |
| [validationState](#error)        | 検証状態                                                                                                                                                                 |                     `"invalid"`                      |         |
| [value](#slider-variants)        | コントロールの値                                                                                                                                                                 |             `number` `[number, number]`              |         |
