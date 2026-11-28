`Stepper` は、ウィザードのようなマルチステップワークフローで進行状況を示しながら、ユーザーを番号付きのステップシーケンスに案内します。

```tsx
import {Stepper} from '@gravity-ui/uikit';
```

## 例

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### インタラクティブなアイテム

`onUpdate` および `value` プロパティをカスタムステートと組み合わせて、ステップを操作します。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### 異なるビュー

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### 異なるサイズ

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### 無効化されたステップ

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### カスタムアイコン

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### カスタムステップセパレーター

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### フロート要素を持つステップ

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

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

| 名前                              | 説明                                 |
| :-------------------------------- | :----------------------------------- |
| `--g-stepper-gap`                 | ステップアイテムとセパレータ間のギャップ。 |
| `--g-stepper-item-text-max-width` | ステップアイテムのテキストの最大幅。     |