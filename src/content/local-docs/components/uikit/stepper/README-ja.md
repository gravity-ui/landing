<!--GITHUB_BLOCK-->

# Stepper

<!--/GITHUB_BLOCK-->

`Stepper` は、ウィザードのようなマルチステップワークフローで進行状況を示しながら、ユーザーを番号付きのステップシーケンスに案内します。

```tsx
import {Stepper} from '@gravity-ui/uikit';
```

## 例

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item>Step 2</Stepper.Item>
            <Stepper.Item>Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item>Step 2</Stepper.Item>
  <Stepper.Item>Step 3</Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperDefault />

<!--/GITHUB_BLOCK-->

### インタラクティブなアイテム

`onUpdate` および `value` プロパティをカスタムステートと組み合わせて、ステップを操作します。

<!--SANDBOX
import {useState} from 'react';
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    const [value, setValue] = useState(0);

    return (
        <Stepper value={value} onUpdate={setValue}>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item>Step 2</Stepper.Item>
            <Stepper.Item>Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [value, setValue] = React.useState();

return (
  <Stepper value={value} onUpdate={setValue}>
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
    <Stepper.Item>Step 4 with very long title</Stepper.Item>
  </Stepper>
);
```

<!-- Storybook example -->

<StepperInteractiveShowcase />

<!--/GITHUB_BLOCK-->

### 異なるビュー

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item view="error">Step 2</Stepper.Item>
            <Stepper.Item view="error">Step 3</Stepper.Item>
            <Stepper.Item view="success">Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item view="error">Step 2</Stepper.Item>
  <Stepper.Item view="error">Step 3</Stepper.Item>
  <Stepper.Item view="success">Step 4</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperView/>

<!--/GITHUB_BLOCK-->

### 異なるサイズ

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper size="l">
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item>Step 2</Stepper.Item>
            <Stepper.Item>Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Flex direction="column" gap={4}>
  <Stepper {...args} size="s">
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
  </Stepper>

  <Stepper {...args} size="m">
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
  </Stepper>

  <Stepper {...args} size="l">
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
  </Stepper>
</Flex>
```

<!-- Storybook example -->

<StepperSize/>

<!--/GITHUB_BLOCK-->

### 無効化されたステップ

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item disabled>Step 2</Stepper.Item>
            <Stepper.Item disabled>Step 3</Stepper.Item>
            <Stepper.Item disabled>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item disabled>Step 2</Stepper.Item>
  <Stepper.Item disabled>Step 3</Stepper.Item>
  <Stepper.Item disabled>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperDisabled/>

<!--/GITHUB_BLOCK-->

### カスタムアイコン

<!--SANDBOX
import {Cloud, Gear, Hammer, Rocket} from '@gravity-ui/icons';
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item icon={Gear}>Step 1</Stepper.Item>
            <Stepper.Item icon={Rocket}>Step 2</Stepper.Item>
            <Stepper.Item icon={Cloud}>Step 3</Stepper.Item>
            <Stepper.Item icon={Hammer}>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item icon={Gear}>Step 1</Stepper.Item>
  <Stepper.Item view="error" icon={Gear}>
    Step 2
  </Stepper.Item>
  <Stepper.Item view="success" icon={Gear}>
    Step 3
  </Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperCustomIcons/>

<!--/GITHUB_BLOCK-->

### カスタムステップセパレーター

<!--SANDBOX
import {Stepper, Text} from '@gravity-ui/uikit';

const Separator = () => {
    return <Text color="secondary">{'->'}</Text>;
};

export default function () {
    return (
        <Stepper separator={<Separator />}>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item view="error">Step 2</Stepper.Item>
            <Stepper.Item view="success">Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const Separator = () => {
  return <Text color="secondary">{'->'}</Text>;
};

<Stepper {...args} separator={<Separator />}>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item view="error">Step 2</Stepper.Item>
  <Stepper.Item view="success">Step 3</Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>;
```

<!-- Storybook example -->

<StepperCustomSeparator/>

<!--/GITHUB_BLOCK-->

### フローティング要素を持つステップ

<!--SANDBOX
import {Stepper, Tooltip} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Tooltip content="fancy step with tooltip">
                <Stepper.Item>Step 1</Stepper.Item>
            </Tooltip>
            <Stepper.Item view="error">Step 2</Stepper.Item>
            <Stepper.Item view="success">Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper {...args}>
  <Tooltip content="fancy step with tooltip">
    <Stepper.Item>Step 1</Stepper.Item>
  </Tooltip>
  <Stepper.Item view="error">Step 2</Stepper.Item>
  <Stepper.Item view="success">Step 3</Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperWithFloatingElements/>

<!--/GITHUB_BLOCK-->

## プロパティ

| 名前             | 説明                                               |                  Type                  | デフォルト |
| :--------------- | :-------------------------------------------------------- | :------------------------------------: | :-----: |
| children         | Stepper アイテム。                                            | `React.ReactElement<StepperItemProps>` |         |
| size             | `Step` のサイズを設定します。                                      |           `"s"` `"m"` `"l"`            |  `"s"`  |
| value            | 現在選択されている `Step` の ID。                               |           `number` `string`            |         |
| onUpdate         | 現在の `Step` を変更するための関数。                       |               `Function`               |         |
| qa               | テストに使用される `data-qa` HTML 属性。               |                `string`                |         |
| separator        | カスタムセパレーターノード。                                    |           `React.ReactNode`            |         |
| className        | ステップコンテナの CSS クラス名。                   |                `string`                |         |
| style            | ステップコンテナのインラインスタイルを設定します。            |            `CSSProperties`             |         |
| aria-label       | 現在の要素をラベル付けする文字列値を定義します。   |                `string`                |         |
| aria-labelledby  | 現在の要素をラベル付けする要素を識別します。 |                `string`                |         |
| aria-describedby | オブジェクトを説明する要素を識別します。       |                `string`                |         |

### StepperItemProps

| 名前      | 説明                                       |              Type              | デフォルト  |
| :-------- | :------------------------------------------------ | :----------------------------: | :------: |
| id        | `Step` の ID を設定します。配列要素のインデックスがデフォルトです。 |       `string` `number`        |          |
| view      | `Step` のビューを設定します。                                  | `"idle"` `"error"` `"success"` | `"idle"` |
| children  | `Step` のコンテンツ。                                   |          `React.Node`          |          |
| disabled  | `Step` が無効かどうかを決定します。             |           `boolean`            |          |
| icon      | カスタムアイコンノード。                                 |         `SVGIconData`          |          |
| onClick   | ステップクリックハンドラー。                               |   `React.MouseEventHandler`    |          |
| className | 要素の CSS クラス名。                   |            `string`            |          |

### CSS API

| 名前                              | 説明                                     |
| :-------------------------------- | :--------------------------------------- |
| `--g-stepper-gap`                 | ステップアイテムとセパレーター間のギャップ。 |
| `--g-stepper-item-text-max-width` | ステップアイテムのテキストの最大幅。     |
