<!--GITHUB_BLOCK-->

# ArrowToggle

<!--/GITHUB_BLOCK-->

`ArrowToggle` は、シェブロンアイコンを表示するためのコンポーネントです。4つの方向に回転でき、ドロップダウンリストやカットコンポーネントなどを表示するために使用できます。

## 外観

`ArrowToggle` には、`top`、`right`、`bottom`、`left` の4つの方向があります。

<!--SANDBOX
import {ArrowToggle} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <ArrowToggle direction="top" /> top
            <ArrowToggle direction="right" /> right
            <ArrowToggle direction="bottom" /> bottom
            <ArrowToggle direction="left" /> left
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<ArrowToggle direction="top" /> top
<ArrowToggle direction="right" /> right
<ArrowToggle direction="bottom" /> bottom
<ArrowToggle direction="left" /> left
```

<!--/GITHUB_BLOCK-->

## サイズ

<!--SANDBOX
import {ArrowToggle} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <ArrowToggle size={10} /> 10
            <ArrowToggle size={20} /> 20
            <ArrowToggle size={30} /> 30
            <ArrowToggle size={40} /> 40
            <ArrowToggle size={50} /> 50
            <ArrowToggle size={100} /> 100
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<ArrowToggle size={10} /> 10
<ArrowToggle size={20} /> 20
<ArrowToggle size={30} /> 30
<ArrowToggle size={40} /> 40
<ArrowToggle size={50} /> 50
<ArrowToggle size={100} /> 100
```

<!--/GITHUB_BLOCK-->

## インタラクティブ要素としての使用

トグルアイコンを使用したArrowToggleの使用例を以下に示します。

<!--SANDBOX
import {useState} from 'react';
import type {ArrowToggleProps} from '@gravity-ui/uikit';
import {ArrowToggle, Button} from '@gravity-ui/uikit';

const directions = ['top', 'left', 'bottom', 'right'] as Array<ArrowToggleProps['direction']>;

export default function () {
    const [directionIndex, setDirectionIndex] = useState(0);
    const direction = directions[directionIndex % directions.length];

    return (
        <Button onClick={() => setDirectionIndex(directionIndex + 1)} view="flat">
            <ArrowToggle direction={direction} /> <span>{direction}</span>
        </Button>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [directionIndex, setDirectionIndex] = React.useState(0);
const directions = ['top', 'left', 'bottom', 'right'] as Array<ArrowToggleProps['direction']>;
const direction = directions[directionIndex % directions.length];

return (
  <Button onClick={() => setDirectionIndex(directionIndex + 1)} view="flat">
    <ArrowToggle {...args} direction={direction} /> <span>{direction}</span>
  </Button>
);
```

<!--/GITHUB_BLOCK-->

## プロパティ

| 名前      | 説明                               |   タイプ   |  デフォルト   |
| :-------- | :--------------------------------- | :--------: | :--------: |
| className | `class` HTML属性                   | `string` |            |
| direction | `arrowToggle`の方向を設定するために使用 | `string` | `"bottom"` |
| size      | `arrowToggle`のサイズ（ピクセル単位） | `number` |    `16`    |
| qa        | テストに使用される`data-qa` HTML属性 | `string` |            |

## CSS API

| 名前                                   | 説明         |
| :------------------------------------- | :----------- |
| `--g-arrow-toggle-transition-duration` | トランジションの期間 |