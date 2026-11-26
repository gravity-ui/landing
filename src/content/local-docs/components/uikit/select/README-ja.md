`Select` は、ユーザーが選択できるオプションのリストを提供するコントロールです。

```tsx
import {Select} from '@gravity-ui/uikit';
```

## Options

選択するオプション。

### Options の定義

オプションは、オブジェクトの配列として、またはコンポーネントの子として定義できます。前者のアプローチは、オプションに複雑な準備が必要で、場合によっては記憶が必要な場合に役立ちます。後者のアプローチは、オプションが少なく、その構成に複雑な計算が必要ない場合に便利です。

#### フラットリスト

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

#### グループ化されたリスト

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Options にデータを格納する

`option.data` プロパティを使用して、各オプションに一意のデータを定義して格納できます。これは、`onUpdate` コールバックを使用する場合や、たとえば `renderOption` でオプションを描画する場合に、データを強化する必要がある場合に役立ちます。

## 複数のオプションを選択する

複数選択を有効にするには、`multiple` プロパティを使用します。デフォルト値は `false` です。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### カウンター

`hasCounter` プロパティを使用して、コンポーネントに選択されたアイテムのカウンターを追加できます。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Options のフィルタリング

フィルターセクションを有効にするには、`filterable` プロパティを使用します。デフォルト値は `false` です。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## サイズ

デフォルトのコントロールとオプションのサイズを管理するには、`size` プロパティを使用します。デフォルトサイズは `m` です。

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## コントロールの幅

デフォルトでは、コントロールの幅は選択されたオプションのコンテンツの幅に合わせて拡張されます。`width` プロパティを使用して管理できます。

`'max'`: 親の全幅に拡張します。

`number`: ピクセル単位で幅を適用します。

GRAVITY_TRANSLATION_BLOCK_12_END

## ポップアップの幅

`popupWidth` プロパティを使用してポップアップの幅を管理できます。利用可能な値は次のとおりです。

`'fit'`: コントロールの幅を適用します。

`number`: ピクセル単位で幅を適用します。

デフォルトの動作に関する注意点:

- ポップアップの幅は、最も幅の広いオプションの幅と同じになりますが、`90vw` より広くはなりません。これは、[仮想化](#virtualized-list) を使用している場合には適用されません。

- 幅の狭いオプションは、コントロールの幅に合わせて拡張されます。

GRAVITY_TRANSLATION_BLOCK_13_END

### 仮想化されたリスト

多数のオプションを最適に表示するために、`Select` には組み込みのリスト仮想化ツールがあります。仮想化は、オプションの数 (`50` がデフォルト) のしきい値を超えると有効になります。この値は `virtualizationThreshold` プロパティを使用して管理できます。

仮想化を使用する場合、ポップアップ要素にはいくつかの制限が適用されます。

- ポップアップの幅は、最も長いオプションの長さに合わせて調整されなくなります。

- ポップアップの最小幅は、コントロールの幅と同じか、コントロールがそれより短い場合は `100px` になります。

GRAVITY_TRANSLATION_BLOCK_14_END

## 高度な使用方法

`Select` をカスタマイズする方法はたくさんあります。

### カスタムコントロールのレンダリング

カスタムコントロールをレンダリングするには、`renderControl` プロパティを使用します。
注意: デフォルトのコントロールを使用する場合と同様に、一貫した動作を有効にするために、すべての引数をノードに転送する必要があります。

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

### カスタムフィルターセクションのレンダリング

カスタムフィルターセクションをレンダリングするには、`renderFilter` プロパティを使用し、`filterable` プロパティを `true` に設定します。
注意: デフォルトの構成を使用する場合と同様に、フィルターが正しく機能するように、すべての引数をノードに転送する必要があります。

GRAVITY_TRANSLATION_BLOCK_17_END

GRAVITY_TRANSLATION_BLOCK_18_END

### カスタムオプションのレンダリング

カスタムオプションをレンダリングするには、`renderOption` プロパティを使用します。

GRAVITY_TRANSLATION_BLOCK_19_END

GRAVITY_TRANSLATION_BLOCK_20_END

### カスタム選択済みオプションのレンダリング

カスタム選択済みオプションをレンダリングするには、`renderSelectedOption` プロパティを使用します。

GRAVITY_TRANSLATION_BLOCK_21_END

GRAVITY_TRANSLATION_BLOCK_22_END

### 高さの異なるオプションのレンダリング

オプションには、`size` プロパティに応じた固定の高さがあります。異なる高さのオプションをレンダリングする必要がある場合は、`option.data` プロパティを使用できます。これにより、オプションに設定する必要がある高さに関する情報と、この値を設定するための `getOptionHeight` プロパティが格納されます。

GRAVITY_TRANSLATION_BLOCK_23_END

GRAVITY_TRANSLATION_BLOCK_24_END

### カスタムカウンターのレンダリング

カスタムカウンターをレンダリングするには、`renderCounter` プロパティを使用します。カウンターは、複数選択が有効 (`multiple={true}`) で `hasCounter={true}` の場合にのみ表示されます。

GRAVITY_TRANSLATION_BLOCK_25_END

GRAVITY_TRANSLATION_BLOCK_26_END

### オプションリストのレンダリング

`renderPopup` プロパティを使用すると、オプションリストのコンテンツを制御できます。標準要素（フィルター、リスト）の順序を変更したり、非表示にしたり、それらの間、前、または後にカスタム要素を追加したりできます。

GRAVITY_TRANSLATION_BLOCK_27_END

GRAVITY_TRANSLATION_BLOCK_28_END

### エラー

この `Select` の状態は、不正なユーザー入力用です。`Select` の外観を変更するには、`validationState` プロパティを `"invalid"` 値で使用します。オプションで、`errorMessage` プロパティを通じてエラーメッセージを提供できます。デフォルトでは、メッセージテキストはコンポーネントの外側にレンダリングされます。
これを `errorPlacement` プロパティで変更できます。

GRAVITY_TRANSLATION_BLOCK_29_END

## Properties

| 名前                                                      | 説明                                                                                                                      | タイプ                                     | デフォルト                                                  |
| :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------- |
| className                                                 | クラス名制御                                                                                                                | `string`                                 |                                                          |
| defaultValue                                              | 未管理状態での選択済みオプションを表すデフォルト値                                                                           | `string[]`                               |                                                          |
| disabled                                                  | ユーザーがコントロールを操作できないことを表示                                                                                 | `boolean`                                | `false`                                                  |
| [filterable](#filtering-options)                          | セレクトポップアップにフィルターセクションがあることを表示                                                                     | `boolean`                                | `false`                                                  |
| filterOption                                              | オプションとフィルターを比較するために使用                                                                                               | `function`                               |                                                          |
| filterPlaceholder                                         | デフォルトのフィルター入力プレースホルダーテキスト                                                                                           | `string`                                 |                                                          |
| [getOptionHeight](#render-options-with-different-heights) | カスタマイズされたユーザーオプションの高さを設定するために使用                                                                                    | `function`                               |                                                          |
| getOptionGroupHeight                                      | カスタマイズされたユーザーオプショングループの高さを設定するために使用                                                                               | `function`                               |                                                          |
| hasClear                                                  | 選択済みオプションをクリアするためのアイコンを表示可能にする                                                                           | `boolean`                                | `false`                                                  |
| id                                                        | `id` HTML属性                                                                                                              | `string`                                 |                                                          |
| label                                                     | コントロールラベル                                                                                                                    | `string`                                 |                                                          |
| loading                                                   | オプションリストの末尾にローディングアイテムを追加します。オプションリストが空の場合の永続的なローディングインジケーターのように機能します。  | `boolean`                                |                                                          |
| [multiple](#selecting-multiple-options)                   | リストで複数のオプションを選択できるかどうかを表示                                                                       | `boolean`                                | `false`                                                  |
| name                                                      | コントロールの名前                                                                                                              | `string`                                 |                                                          |
| onBlur                                                    | 要素がフォーカスを失ったときに呼び出されるハンドラー。                                                                             | `function`                               |                                                          |
| filter                                                    | 管理されたフィルター値                                                                                                          | `string`                                 | `''`                                                     |
| onFilterChange                                            | フィルターを変更するたびに発生します                                                                                       | `function`                               |                                                          |
| onFocus                                                   | 要素がフォーカスを取得したときに呼び出されるハンドラー                                                                               | `function`                               |                                                          |
| onLoadMore                                                | ローディングインジケーターが表示されたときに発生します                                                                                    | `function`                               |                                                          |
| onOpenChange                                              | ポップアップの表示状態を変更するたびに発生します                                                                                 | `function`                               |                                                          |
| onUpdate                                                  | ユーザーによって `Select` の値に変更がコミットされたときに発生します                                                          | `function`                               |                                                          |
| [options](#options)                                       | 選択するオプション                                                                                                                | `(SelectOption \| SelectOptionGroup)[]`  |                                                          |
| pin                                                       | コントロールの境界線の表示                                                                                                             | `string`                                 | `'round-round'`                                          |
| placeholder                                               | プレースホルダーテキスト                                                                                                                 | `string`                                 |                                                          |
| popupClassName                                            | オプションリストのポップアップ `className`                                                                                           | `string`                                 |                                                          |
| popupPlacement                                            | ポップアップの配置                                                                                                                  | `PopupPlacement` `Array<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                | ポップアップの幅                                                                                                                      | `number \| 'fit' \| 'outfit'`            | `'outfit'`                                               |
| qa                                                        | テスト ID 属性 (`data-qa`)                                                                                                    | `string`                                 |                                                          |
| [renderControl](#render-custom-control)                   | ユーザーコントロールのレンダリングに使用                                                                                                     | `function`                               |                                                          |
| [renderCounter](#rendering-custom-counter)                | ユーザーカウンターのレンダリングに使用します。[hasCounter](#counter) のみで機能します。                                                             | `function`                               |                                                          |
| renderEmptyOptions                                        | 空のオプションリストのノードのレンダリングに使用                                                                                   | `function`                               |                                                          |
| [renderFilter](#render-custom-filter-section)             | ユーザーフィルターセクションのレンダリングに使用                                                                                               | `function`                               |                                                          |
| [renderOption](#render-custom-options)                    | ユーザーオプションのレンダリングに使用                                                                                                     | `function`                               |                                                          |
| renderOptionGroup                                         | ユーザーオプショングループのレンダリングに使用                                                                                               | `function`                               |                                                          |
| [renderSelectedOption](#render-custom-selected-options)   | ユーザーの選択済みオプションのレンダリングに使用                                                                                             | `function`                               |                                                          |
| [renderPopup](#rendering-options-list)                    | オプションリストコンテンツのレンダリングに使用                                                                                               | `function`                               |                                                          |
| [size](#size)                                             | コントロール / オプションのサイズ                                                                                                           | `string`                                 | `'m'`                                                    |
| value                                                     | 選択済みオプションを表す値                                                                                                                         | `string[]`                               |                                                          |
| view                                                      | コントロールの表示                                                                                                                     | `string`                                 | `'normal'`                                               |
| [virtualizationThreshold](#virtualized-list)              | バーチャライゼーションが有効になるオプション数のしきい値                                                                     | `number`                                 | `50`                                                     |
| [width](#control-width)                                   | コントロールの幅                                                                                                                    | `string \| number`                       | `undefined`                                              |
| errorMessage                                              | エラーテキスト                                                                                                                       | `string`                                 |                                                          |
| errorPlacement                                            | エラーの位置                                                                                                                   | `outside` `inside`                       | `outside`                                                |
| validationState                                           | 検証状態                                                                                                                 | `"invalid"`                              |                                                          |
| [hasCounter](#counter)                                    | 選択済みオプションの数を表示します。カウンターは、[multiple](#selecting-multiple-options) 選択が有効な場合にのみ表示されます。 | `boolean`                                |                                                          |

## CSS API

| 名前                             | 説明                                   |
| :------------------------------- | :-------------------------------------------- |
| `--g-select-focus-outline-color` | フォーカス時のアウトラインの色（デフォルトでは欠落） |
GRAVITY_TRANSLATION_BLOCK_1_END