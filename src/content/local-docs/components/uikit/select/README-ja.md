`Select` は、ユーザーが選択できるオプションのリストを提供するコントロールです。

```tsx
import {Select} from '@gravity-ui/uikit';
```

> [!NOTE]
> v8 では、オプションは新しいリストによって描画されます。コンシューマーにとって何が変わったかは、[移行ガイド](https://github.com/gravity-ui/uikit/blob/main/docs/migration-select-v8.md)にまとめられています。

## Options

選択するオプション。

### Defining options

オプションは、オブジェクトの配列として定義することも、コンポーネントの子として定義することもできます。前者のアプローチは、オプションに複雑な準備と、場合によっては記憶が必要な場合に役立ちます。後者は、オプションが少なく、その構成に複雑な計算が必要ない場合に便利です。

React Server Component では `Select.Option` および `Select.OptionGroup` にはアクセスできません。代わりに名前付きの `SelectOption` および `SelectOptionGroup` を使用してください。それらのプロパティタイプは `SelectOptionProps` および `SelectOptionGroupProps` です。

#### Flat list

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

#### The text of an option

オプションのテキストは、トリガーが選択されたオプションに対して表示するもの、フィルターが一致するもの、および最初の文字による検索がルックアップするものです。デフォルトでは、オプションが文字列または数値の場合のそのコンテンツ、それらが子の場合のそれらの子、それ以外の場合は `value` です。したがって、プレーンな文字列以外のものをレンダリングするオプションは `getOptionText` が必要です。そうしないと、値によって検索および名前が付けられます。

GRAVITY_TRANSLATION_BLOCK_3_END

`useSelectOptions` は同じプロパティを受け取ります。オプションがコンポーネントの外部でフィルターされる場合は、そこにも渡してください。関数をコンポーネントの外で定義するか、メモ化してください。リストのメモ化に参加しており、レンダリングごとに新しい関数が行を再構築します。

`getOptionText` はオプションの `text` プロパティを置き換えます。これは削除されました。オプションのテキストは格納されるのではなく要求されるため、1 つの関数が各オプションに繰り返されるフィールドの代わりにすべてのオプションをカバーします。

オプションの `value` はその行を一意に識別するため、値はリスト全体で一意である必要があります（グループを含む）。（[非文字列値](#non-string-values)の場合は、そのキー）。行の DOM `id` はそこから派生し、その id がトリガーの `aria-activedescendant` が指すものです。手動で構築するのではなく、そこから読み取ってください。値のエスケープはリストに属しており、契約ではありません。

#### Grouped list

グループヘッダーはオプションではなく、キャプションです。`role="presentation"` を持ち、キーボードウォークや `role="option"` 行のカウントから除外され、`aria-describedby` を介して下のオプションを説明します。`label` が空のグループは、ヘッダーの代わりに区切り線を描画します。リストの最初の行として、分離するものがなく、まったくスペースを取りません。これはグループのデフォルトの描画です。`renderOptionGroup` および `getOptionGroupHeight` が最初に呼び出され、空のラベルであっても、好きなようにレンダリングおよび測定します。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Storing data in options

`option.data` プロパティを使用して、各オプションに一意のデータを定義および保存できます。これは、`onUpdate` コールバックを使用する場合にデータを強化する必要がある場合や、たとえば `renderOption` でオプションを描画する場合に役立ちます。

### Non-string values

オプションの値は任意の型にすることができます。`value`、`defaultValue`、および `onUpdate` の型はオプションに従います。Select は文字列キーによって値を認識します。その行の id、フォームのフィールド、および 2 つの値の比較はすべてそれを使用します。文字列はそれ自体のキーであり、別のプリミティブは `String()` でキーに変換され、オブジェクトは `getValueKey` を必要とします。キーが等しい値は 1 つの値です。新しい応答からのオブジェクトは、一致するオプションを選択します。コンポーネントの外で `getValueKey` を定義するか、メモ化してください。これは `getOptionText` と同様です。

GRAVITY_TRANSLATION_BLOCK_6_END

オブジェクト値には独自のテキストはありません。オプションに文字列の `content` を指定するか、`getOptionText` を渡してください。`Select.Option` 子は、型が名前付けされていない限り文字列を受け取ります: `<Select.Option<unknown, number> value={1}>`。Select 自体は、`value` または型付けされた `onUpdate={(value: number[]) => …}` から型を取得します。オプションのない選択された値は、そのキーによって表示されます。オプションを `options` に保持するか、`renderSelectedOptions` でレンダリングしてください。フォームは値ではなくキーを送信します。ユニオン型では、`1` と `"1"` はキーを共有し、1 つの値です。

### Nullable values

`''`、`null`、および `undefined` は、オプションがそれらを宣言しない限り、値がないことを意味します。オプションがない場合、そのような値にはテキスト、クリアボタン、またはカウントがなく、フォームはそれを `''` として送信しますが、`value` および `onUpdate` はそれをそのまま保持します。`0` および `false` は常に値です。

GRAVITY_TRANSLATION_BLOCK_7_END

## Selecting multiple options

複数選択を有効にするには、`multiple` プロパティを使用します。デフォルト値は `false` です。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

Shift+クリック、Shift+↑/↓、Shift+Space は、最後に選択されたオプションからターゲットまでのオプションの範囲を選択します。

### Counter

`hasCounter` プロパティを使用して、コンポーネントに選択された項目のカウンターを追加できます。

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Filtering options

フィルターセクションを有効にするには、`filterable` プロパティを使用します。デフォルト値は `false` です。

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## The search by the first letters

ポップアップが開いていてフィルターがない場合、文字キーはオプションをルックアップします。リストは、入力されたもので始まる最初のオプションにアクティビティを移動させ、バッファは最後のキーの 1 秒後にリセットされ、1 文字を繰り返すと、それらで始まるオプションをサイクルします。スペースは入力中にクエリに属するため、スペースを含むラベルにアクセスできます。そして、バッファが再び空になるまで何も選択しません。リストが検索に使用した文字は、周囲のアプリケーションのホットキーには到達しません。

`filterable` Select では、キーはフィルターに入力されます。そこでの入力はフィルター処理です。

## Size

デフォルトのコントロールとオプションのサイズを管理するには、`size` プロパティを使用します。デフォルトサイズは `m` です。

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## Control width

デフォルトでは、コントロールの幅は選択されたオプションのコンテンツの幅に合わせて拡張されます。`width` プロパティを使用して管理できます。

`'max'`: 親の全幅に拡張します。

`number`: ピクセル単位で幅を適用します。

GRAVITY_TRANSLATION_BLOCK_16_END

## Popup width

`popupWidth` プロパティを使用してポップアップの幅を管理できます。利用可能な値は次のとおりです。

`'fit'`: コントロールの幅を適用します。

`number`: ピクセル単位で幅を適用します。

デフォルトの動作に関する注意点：

- ポップアップの幅は、最も幅の広いオプションの幅と同じですが、`90vw` より広くはありません。これは[仮想化された](#virtualized-list) `Select` には適用されません。

- 幅の狭いオプションは、コントロールの幅に合わせて拡張されます。

GRAVITY_TRANSLATION_BLOCK_17_END

## Virtualized list

多数のオプションは、指定しない限り行ごとにレンダリングされます。各オプションが行になります。表示されているものだけをレンダリングするには、`@gravity-ui/uikit/virtualizer` エントリポイントの `ListVirtualizer` で `Select` をラップしてください。このラッパーには設定は不要で、ポップアップはポータルを通じて引き続き機能します。数百個のオプションがある場合に効果が出始めます。150個を超えると、`Select` は開発者向け警告でその旨を示します。

エントリポイントには `@tanstack/react-virtual` が必要です。これはパッケージのオプションのピア依存関係であり、一緒にインストールする必要があります。

```tsx
import {Select} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

<ListVirtualizer>
  <Select options={thousandsOfOptions} />
</ListVirtualizer>;
```

ラッパーは `Select` の隣にある必要はありません。アプリのルートにある1つのラッパーと `minItemsCount` は、その下にあるすべての `Select` をカバーします。オプションが少ない `Select` は、ラッパーがない場合と同じようにレンダリングされます。各オプションが行になり、ポップアップは最も幅の広いオプションと同じ幅になります。`Select` は、グループヘッダーやフィルターを含まずに、すべてのオプションをカウントします。そのため、入力してもリストは切り替わりません。

```tsx
import {Provider} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

<Provider theme="light">
  <ListVirtualizer minItemsCount={50}>
    <App />
  </ListVirtualizer>
</Provider>;
```

特定の `Select` の設定を変更するには、その周りに2番目のラッパーを配置します。これは、指定されたものだけを変更し、残りはルートのラッパーから取得します。`overscan={20}` はしきい値を維持し、`minItemsCount={0}` はオプションの数に関係なくその `Select` を仮想化し、`minItemsCount={Infinity}` はプレーンなままにします。

```tsx
import {Select} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

// ルートのラッパーの下: この Select はオプションの数に関係なく仮想化されます
<ListVirtualizer minItemsCount={0}>
  <Select options={options} />
</ListVirtualizer>;
```

仮想化ツールのコードは独自のチャンクであり、短い `Select` にはロードされません。仮想化される予定の `Select` は、マウント時にロードを開始します。それが到着する前に開かれたポップアップは、ウィンドウが引き継ぐまで最初のオプションを表示し、その後選択されたオプションにスクロールします。

仮想化された `Select` に関して留意すべき点：

- ポップアップの幅は、最も長いオプションの長さに合わせて調整されなくなります。

- ポップアップの最小幅は、コントロールの幅、またはコントロールが短い場合は `100px` に等しくなります。

- レンダリング前の行の高さは、[getOptionHeight](#rendering-options-with-different-heights) と `Select` の `size` から取得されます。ラッパーの `estimateItemSize` は使用されません。オプション行のタイプは `Select` から離れないため、渡すと開発中に警告が表示されます。ラッパーの `measure` および `overscan` プロパティは、[List の仮想化](https://github.com/gravity-ui/uikit/blob/main/src/components/List/README.md#virtualization) で説明されているように機能します。

- サーバーでレンダリングされたポップアップは、ウィンドウの代わりに最初のオプションを取得します。測定対象のビューポートがないため、ハイドレーション後にウィンドウが引き継ぎます。

- ラッパーは、この `Select` のリストと、[renderPopup](#rendering-options-list) がページに配置するものをカバーします。その行内のリスト、またはそのような行に配置された `Select` は、それぞれ独自の行をレンダリングします。リストの仮想化は、その行が描画するものには到達しません。

- `getOptionHeight` と `renderOption` はコンポーネントの外で定義するか、メモ化してください。レンダリングごとに新しい関数を作成すると、仮想化ツールが測定をやり直し、行が再レンダリングされます。

GRAVITY_TRANSLATION_BLOCK_18_END

## アクセシブル名

トリガーには名前が必要です。`label`、`aria-label`、`aria-labelledby`、または `Select` の `id` を指す `<label htmlFor>` です。`label` はトリガーに名前を付け、その値には含まれません。プレースホルダーは名前ではありません。`renderControl` を使用するとラベルは描画されないため、カスタムコントロールに自分で名前を付けてください。

## 高度な使い方

`Select` をカスタマイズする方法はたくさんあります。

### カスタムコントロールのレンダリング

カスタムコントロールをレンダリングするには、`renderControl` プロパティを使用します。

`ref` を要素に渡し、`triggerProps` をそれにスプレッドしてください。これらはポップアップを開閉し、リストのキーボードとコンボボックスの ARIA (`role`、`aria-expanded`、`aria-controls`、`aria-activedescendant`) を運びます。これらを保持しないコントロールは、ポップアップを開いたりナビゲートしたりしません。`triggerProps` には `disabled` も含まれます。ジェネリック `ref` を `Button` を使用する場合はボタンの `ref` にキャストしてください。

GRAVITY_TRANSLATION_BLOCK_19_END

GRAVITY_TRANSLATION_BLOCK_20_END

### カスタムフィルターセクションのレンダリング

カスタムフィルターセクションをレンダリングするには、`renderFilter` プロパティを使用し、`filterable` プロパティを `true` に設定します。

`inputProps` は、コンボボックスの入力に必要なすべてを運びます。値、ハンドラー、プレースホルダー、および ARIA の配線 (`role`、`aria-label`、`aria-controls`、`aria-activedescendant`、`aria-expanded`、`aria-autocomplete`) です。また、`size: 1` も運びます。これは ARIA ではなく幅のヒントです。これにより、入力はデフォルトで `input` が要求する 20 文字を保持するのではなく、ポップアップに合わせて縮小できます。これらがないと、フィルターにはアクセシブルな名前がなく、スクリーンリーダーのアクティブなオプションの名前もありません。`ref` と一緒にプレーンな `input` にスプレッドしてください。独自の API を持つコンポーネント（例: `TextInput`）は、所有するプロパティ（`value`、`placeholder`、`onChange`、`onKeyDown`）を取得し、残りを `controlProps` を介して要素に渡します。これは1行の分割代入で実行できます。`onKeyDown` はその中に含まれている必要があります。これはリスト全体のキーボードを運びます。

GRAVITY_TRANSLATION_BLOCK_21_END

GRAVITY_TRANSLATION_BLOCK_22_END

### カスタムオプションのレンダリング

カスタムオプションをレンダリングするには、`renderOption` プロパティを使用します。これは、オプションと、その行の状態とともに呼び出されます。`isItemActive` は、行がアクティブな行（`Enter` が適用されるもの）であるかどうか。`selected` は、オプションが選択されているかどうか。`itemHeight` は、行の高さ（[getOptionHeight](#rendering-options-with-different-heights) が返した値または [size](#size) の最小値）。行自体は、選択状態を示します。これは、[複数の](#selecting-multiple-options) `Select` のチェックマークや、単一の `Select` のハイライトです。独自の表示（`selected` からの `Radio` または `Checkbox`）を描画するオプションは、`selectionStyle="none"` でそれをオフにします。独自の表示がない場合、選択は非表示になります。そのようなコントロールは装飾です。行がオプションを選択し、インタラクティブな要素をその中に配置することは許可されていません。`inert` を持つ要素（React 19 より前は `inert=""`）でコントロールをラップし、オプションのテキストをその外に配置してください。

`renderOptionGroup` は、グループヘッダーについても同様です。グループと `{isItemActive, itemHeight}` です。

GRAVITY_TRANSLATION_BLOCK_23_END

GRAVITY_TRANSLATION_BLOCK_24_END

### カスタム選択済みオプションのレンダリング

コントロール内の選択状態をレンダリングするには、`renderSelectedOptions` プロパティを使用します。これは、`value` の順序で選択されたすべてのオプション（単一選択の場合は1つの配列）とともに、値がある場合にのみ呼び出されます。オプションのない値は `{value}` として表示され、`content` はありません。返された要素に状態が含まれる場合は、キーを付けます。ラベル、プレースホルダー、カウンター、クリアボタンは `Select` に残ります。プロパティがない場合、コントロールはオプションのテキストを `, ` で結合して表示します。

GRAVITY_TRANSLATION_BLOCK_25_END

GRAVITY_TRANSLATION_BLOCK_26_END

### 異なる高さのオプションのレンダリング

行の高さはコンテンツの高さに依存しますが、`size`（コントロールと同じサイズで、24、28、36、44ピクセル。モバイルではすべての行が`xl`の44ピクセルになります）の最小値よりも低くなることはありません。ただし、自分で高さを設定した場合は除きます。異なる高さのオプションをレンダリングする必要がある場合は、`option.data`プロパティを使用できます。このプロパティは、オプションに設定する必要がある高さに関する情報と、この値を設定するための`getOptionHeight`プロパティを格納します。このプロパティが返す数値が、行の高さとなり、[virtualizer](#virtualized-list)が行を配置する際の推定値となります。

GRAVITY_TRANSLATION_BLOCK_27_END

GRAVITY_TRANSLATION_BLOCK_28_END

### カスタムカウンターのレンダリング

カスタムカウンターをレンダリングするには、`renderCounter`プロパティを使用します。カウンターは、複数選択が有効（`multiple={true}`）で`hasCounter={true}`の場合にのみ表示されます。

GRAVITY_TRANSLATION_BLOCK_29_END

GRAVITY_TRANSLATION_BLOCK_30_END

### オプションリストのレンダリング

`renderPopup`プロパティを使用すると、オプションリストのコンテンツを制御できます。標準要素（フィルター、リスト）の順序を変更したり、非表示にしたり、それらの間、前、または後にカスタム要素を追加したりできます。

GRAVITY_TRANSLATION_BLOCK_31_END

GRAVITY_TRANSLATION_BLOCK_32_END

### エラー

この`Select`の状態は、ユーザーの不正な入力用です。`Select`の外観を変更するには、`validationState`プロパティに`"invalid"`値を設定します。オプションで、`errorMessage`プロパティを通じてエラーメッセージを提供できます。デフォルトでは、メッセージテキストはコンポーネントの外側にレンダリングされます。
これを変更するには、`errorPlacement`プロパティを使用します。

GRAVITY_TRANSLATION_BLOCK_33_END

## プロパティ

| Name                                                         | Description                                                                                                                      | Type                                     | Default                                                  |
| :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------- |
| className                                                    | コントロールのクラス名                                                                                                           | `string`                                 |                                                          |
| defaultValue                                                 | 未管理の状態を使用する場合の選択済みオプションを表すデフォルト値                                                                     | `V[]`                                    |                                                          |
| disabled                                                     | ユーザーがコントロールを操作できないことを示します                                                                               | `boolean`                                | `false`                                                  |
| [filterable](#filtering-options)                             | セレクトポップアップにフィルターセクションがあることを示します                                                                     | `boolean`                                | `false`                                                  |
| filterOption                                                 | オプションとフィルターを比較するために使用されます                                                                               | `function`                               |                                                          |
| filterPlaceholder                                            | デフォルトのフィルター入力プレースホルダーテキスト                                                                             | `string`                                 |                                                          |
| [getOptionText](#the-text-of-an-option)                      | オプションのテキスト: トリガー、フィルター、最初の文字による検索がこれを使用します                                                 | `function`                               | 文字列コンテンツ、それ以外の場合は値                     |
| [getValueKey](#non-string-values)                            | 値の文字列キー: 行のID、フォームフィールド、値の等価性                                                                         | `(value: V) => string`                   | 文字列自体、それ以外の場合は `String()`                  |
| [getOptionHeight](#rendering-options-with-different-heights) | カスタマイズされたユーザーオプションの高さを設定するために使用されます                                                           | `function`                               |                                                          |
| getOptionGroupHeight                                         | カスタマイズされたユーザーオプショングループの高さを設定するために使用されます                                                   | `function`                               |                                                          |
| hasClear                                                     | 選択されたオプションをクリアするためのアイコンを表示します                                                                         | `boolean`                                | `false`                                                  |
| id                                                           | `id` HTML属性                                                                                                                    | `string`                                 |                                                          |
| label                                                        | コントロールラベル。モバイルではシートのタイトルでもあります                                                                     | `string`                                 |                                                          |
| loading                                                      | オプションリストの末尾にローディングアイテムを追加します。オプションリストが空の間、永続的なローディングインジケーターのように機能します。 | `boolean`                                |                                                          |
| [multiple](#selecting-multiple-options)                      | リストで複数のオプションを選択できるかどうかを示します                                                                           | `boolean`                                | `false`                                                  |
| name                                                         | コントロールの名前                                                                                                               | `string`                                 |                                                          |
| onBlur                                                       | 要素がフォーカスを失ったときに呼び出されるハンドラー                                                                             | `function`                               |                                                          |
| filter                                                       | 管理されたフィルター値                                                                                                           | `string`                                 | `''`                                                     |
| onFilterChange                                               | フィルターを変更するたびに発生します                                                                                             | `function`                               |                                                          |
| onFocus                                                      | 要素がフォーカスを取得したときに呼び出されるハンドラー                                                                           | `function`                               |                                                          |
| onLoadMore                                                   | ローディングインジケーターが表示されたときに発生します                                                                           | `function`                               |                                                          |
| onOpenChange                                                 | ポップアップの表示状態を変更するたびに発生します                                                                                 | `function`                               |                                                          |
| onUpdate                                                     | ユーザーによって `Select` 値の変更がコミットされたときに発生します                                                               | `function`                               |                                                          |
| [options](#options)                                          | 選択するオプション                                                                                                               | `SelectOptions`                          |                                                          |
| pin                                                          | コントロールの境界線の表示                                                                                                       | `string`                                 | `'round-round'`                                          |
| placeholder                                                  | プレースホルダーテキスト                                                                                                         | `string`                                 |                                                          |
| popupClassName                                               | オプションリストのポップアップ `className`                                                                                       | `string`                                 |                                                          |
| popupPlacement                                               | ポップアップの配置                                                                                                               | `PopupPlacement` `Array<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                   | ポップアップの幅                                                                                                                 | `number \| 'fit'`                        |                                                          |
| sheetClassName                                               | シートの `className`                                                                                                             | `string`                                 |                                                          |
| qa                                                           | テストID属性 (`data-qa`)                                                                                                         | `string`                                 |                                                          |
| [renderControl](#rendering-custom-control)                   | ユーザーコントロールのレンダリングに使用されます                                                                               | `function`                               |                                                          |
| [renderCounter](#rendering-custom-counter)                   | ユーザーカウンターのレンダリングに使用されます。[hasCounter](#counter) と一緒にのみ機能します。                                     | `function`                               |                                                          |
| renderEmptyOptions                                           | 空のオプションリストのノードをレンダリングするために使用されます                                                                 | `function`                               |                                                          |
| [renderFilter](#rendering-custom-filter-section)             | ユーザーフィルターセクションのレンダリングに使用されます                                                                         | `function`                               |                                                          |
| [renderOption](#rendering-custom-options)                    | ユーザーオプションのレンダリングに使用されます                                                                                 | `function`                               |                                                          |
| renderOptionGroup                                            | ユーザーオプショングループのレンダリングに使用されます                                                                           | `function`                               |                                                          |
| [renderSelectedOptions](#rendering-custom-selected-options)  | コントロール内の選択のレンダリングに使用されます                                                                                 | `function`                               |                                                          |
| [renderPopup](#rendering-options-list)                       | オプションリストの内容のレンダリングに使用されます                                                                               | `function`                               |                                                          |
| [selectionStyle](#rendering-custom-options)                  | オプションの行が選択されていることをどのように表示するか: チェックマークまたはハイライト (`auto`) または何もなし (`none`)         | `'auto' \| 'none'`                       | `'auto'`                                                 |
| [size](#size)                                                | コントロール / オプションのサイズ                                                                                                | `string`                                 | `'m'`                                                    |
| value                                                        | 選択されたオプションを表す値                                                                                                     | `V[]`                                    |                                                          |
| view                                                         | コントロールの表示                                                                                                               | `string`                                 | `'normal'`                                               |
| [width](#control-width)                                      | コントロールの幅                                                                                                                 | `string \| number`                       | `undefined`                                              |
| errorMessage                                                 | エラーテキスト                                                                                                                   | `string`                                 |                                                          |
| errorPlacement                                               | エラーの位置                                                                                                                     | `outside` `inside`                       | `outside`                                                |
| validationState                                              | 検証状態                                                                                                                         | `"invalid"`                              |                                                          |
| [hasCounter](#counter)                                       | 選択されたオプションの数を表示します。カウンターは、[multiple](#selecting-multiple-options) 選択が有効な場合にのみ表示されます。 | `boolean`                                |                                                          |

## CSS API

マークアップのクラス名は公開契約ではありません — ポップアップの行はリストとその行ビューによってレンダリングされ、そのマークアップはキットによって変更されます。サポートされているのは以下の通りです。

- 以下の変数。
- 行の外観。`Select` の [size](#size) に従う `--g-list-item-view-*` 変数（色、高さ、パディング、半径）を通じて。これらは `popupClassName` または `sheetClassName` で設定します — 例えば、モバイルでより背の高い行にするには `--g-list-item-view-min-height: 48px` のように。
  [virtualizer](#virtualized-list) の推定値と `renderOption` の `itemHeight` は依然としてサイズから取得されます。正確な数値が必要な場合は、`getOptionHeight` を使用してください。
- 行の内容。`renderOption`、`renderOptionGroup`、`renderSelectedOptions` を通じて。

| 名前                             | 説明                                   |
| :------------------------------- | :-------------------------------------------- |
| `--g-select-focus-outline-color` | フォーカス時のアウトラインの色（デフォルトではなし） |