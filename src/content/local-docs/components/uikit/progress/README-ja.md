<!--GITHUB_BLOCK-->

# Progress

<!--/GITHUB_BLOCK-->

`Progress` コンポーネントは、現在の操作の進捗状況を表示します。セクションに分割することもできます。

```tsx
import {Progress} from '@gravity-ui/uikit';
```

## Theme

`theme` プロパティを使用して、プログレス全体または複合部分の色を指定します。

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress text="default" value={50} />
                <Box height={4} />
                <Progress text="success" theme="success" value={50} />
            </Box>
            <Box width={'30%'}>
                <Progress text="warning" theme="warning" value={50} />
                <Box height={4} />
                <Progress text="danger" theme="danger" value={50} />
            </Box>
            <Box width={'30%'}>
                <Progress text="info" theme="info" value={50} />
                <Box height={4} />
                <Progress text="misc" theme="misc" value={50} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress text="default" value={50} />
<Progress text="warning" theme="warning" value={50} />
<Progress text="info" theme="info" value={50} />
<Progress text="success" theme="success" value={50} />
<Progress text="danger" theme="danger" value={50} />
<Progress text="misc" theme="misc" value={50} />
```

<!--/GITHUB_BLOCK-->

## States

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width={'30%'}>
            <Progress text="Loading" theme="misc" value={60} loading />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress text="Loading" theme="misc" value={60} loading={true} />
```

<!--/GITHUB_BLOCK-->

## Size

`Progress` コンポーネントのサイズを管理するには、`"xs"`、`"s"`、`"m"` の値を取ることができる `size` プロパティを使用します。`text` プロパティは `"m"` サイズでのみ機能します。

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress theme="success" value={60} size="xs" />
            </Box>
            <Box width={'30%'}>
                <Progress theme="warning" value={70} size="s" />
            </Box>
            <Box width={'30%'}>
                <Progress theme="danger" value={80} size="m" />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress theme="success" value={60} size="xs" />
<Progress theme="warning" value={70} size="s" />
<Progress theme="danger" value={80} size="m" />
```

<!--/GITHUB_BLOCK-->

## Breakpoints

`Progress` コンポーネントのブレークポイントを設定するには、`colorStops` プロパティを使用します。

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

const colorStops = [
    {theme: 'danger', stop: 20},
    {theme: 'warning', stop: 50},
    {theme: 'success', stop: 100},
];

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress value={10} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={40} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={60} colorStops={colorStops} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress value={10} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
<Progress value={40} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
<Progress value={60} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
```

<!--/GITHUB_BLOCK-->

オプションの `color` プロパティを使用して、テーマの色を上書きします。

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

const colorStops = [
    {theme: 'danger', stop: 20, color: '#ff4444'},
    {theme: 'warning', stop: 50, color: '#ffaa00'},
    {theme: 'success', stop: 100, color: '#44ff44'},
];

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress value={10} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={40} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={60} colorStops={colorStops} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress value={10} colorStops={[{theme: 'danger', stop: 20, color: '#ff4444'}, {theme: 'warning', stop: 50, color: '#ffaa00'}, {theme: 'success', stop: 100, color: '#44ff44'}]} />
<Progress value={40} colorStops={[{theme: 'danger', stop: 20, color: '#ff4444'}, {theme: 'warning', stop: 50, color: '#ffaa00'}, {theme: 'success', stop: 100, color: '#44ff44'}]} />
<Progress value={60} colorStops={[{theme: 'danger', stop: 20, color: '#ff4444'}, {theme: 'warning', stop: 50, color: '#ffaa00'}, {theme: 'success', stop: 100, color: '#44ff44'}]} />
```

<!--/GITHUB_BLOCK-->

## Stack

<!--SANDBOX
import type {Stack} from '@gravity-ui/uikit';
import {Box, Progress} from '@gravity-ui/uikit';

const defaultStack: Stack[] = [
    {theme: 'default', content: 'First', value: 25},
    {theme: 'success', content: 'Second', value: 25},
    {theme: 'warning', content: 'Third', value: 25},
    {theme: 'danger', content: 'Fourth', value: 25},
];

const customColorStack: Stack[] = [
    {color: '#6e5d8c', value: 33.333333333333336},
    {color: '#5b785b', value: 33.333333333333336},
    {color: '#956069', value: 33.333333333333336},
];

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress stack={defaultStack} />
            </Box>
            <Box width={'30%'}>
                <Progress text="Progress with custom colors" stack={customColorStack} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress stack={[
  {theme: 'default', content: 'First', value: 25},
  {theme: 'success', content: 'Second', value: 25},
  {theme: 'warning', content: 'Third', value: 25},
  {theme: 'danger', content: 'Fourth', value: 25},
]} />
<Progress text="Progress with custom colors" stack={[
  {color: '#6e5d8c', value: 33.333333333333336},
  {color: '#5b785b', value: 33.333333333333336},
  {color: '#956069', value: 33.333333333333336},
]} />
```

<!--/GITHUB_BLOCK-->

## Properties

| 名前            | 説明                                                                                                                            |                          型                          |   デフォルト   |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------: | :---------: |
| className       | HTML `class` 属性                                                                                                               |                        `string`                        |             |
| colorStops      | テーマ付きのブレークポイントを設定します                                                                                              | `Array<{theme: string; stop: number; color?: string}>` |             |
| colorStopsValue | `colorStops` の現在のストップまたは代替値を選択するための値を設定します。利用可能な範囲は 0 から 100 です。                               |                        `number`                        |             |
| loading         | `loading` 状態を切り替えます                                                                                                    |                       `boolean`                        |   `false`   |
| size            | プログレスバーのサイズを設定します。プログレスバーのテキストは `"m"` サイズでのみ表示できます。                                         |                        `string`                        |    `"m"`    |
| stack           | コンポジットプログレスバーの設定。`value` が提供されている場合は不要です。                                                              |                     `Array<Stack>`                     |             |
| stackClassName  | スタックの HTML `class` 属性                                                                                                    |                        `string`                        |             |
| text            | プログレスバー内のテキスト                                                                                                      |                      `ReactNode`                       |             |
| theme           | プログレスの色を設定します                                                                                                      |                        `string`                        | `"default"` |
| value           | 現在のプログレス値。利用可能な範囲は 0 から 100 です。`stack` プロパティの値を使用することはオプションであり、`maxValue` として使用されます。 |                        `number`                        |             |

### `Stack`

| 名前      | 説明                                                                                                                            |    タイプ     |   デフォルト   |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------ | :---------: | :---------: |
| className | スタック要素の `class` HTML属性                                                                                                 |  `string`   |             |
| color     | `style` HTML属性の背景色を設定します                                                                                            |  `string`   |             |
| content   | スタック要素のコンテンツ                                                                                                        | `ReactNode` |             |
| title     | `title` HTML属性                                                                                                                |  `string`   |             |
| theme     | スタック要素の色を設定します                                                                                                    |  `string`   | `"default"` |
| value     | 現在の進捗値。利用可能な範囲は0から100です。`stack` プロパティの値を使用することはオプションであり、`maxValue` として使用されます。 |  `number`   |             |
| qa        | テストに使用される `data-qa` HTML属性                                                                                           |  `string`   |             |

## CSS API

| 名前                                   | 説明                        |
| :------------------------------------- | :-------------------------- |
| `--g-progress-empty-text-color`        | 空の `Progress` テキストの色 |
| `--g-progress-filled-text-color`       | 塗りつぶされた `Progress` テキストの色 |
| `--g-progress-empty-background-color`  | 空の `Progress` の背景色   |
| `--g-progress-filled-background-color` | 塗りつぶされた `Progress` の背景色 |
