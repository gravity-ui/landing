`Breadcrumbs` は、ウェブサイトの階層における現在のページの位置を示すナビゲーション要素です。階層の上位レベルに戻るためのリンクを提供し、複数の階層を持つウェブサイトでのナビゲーションを容易にします。Breadcrumbs は、特に大規模なウェブサイトや階層ベースのページ構造を持つアプリケーションで役立ちます。

```tsx
import {Breadcrumbs} from '@gravity-ui/uikit';
```

従来の `Breadcrumbs` から移行しますか？ [移行ガイド](https://github.com/gravity-ui/uikit/blob/main/docs/migration-from-legacy-breadcrumbs.md) を参照してください。

## 例

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### イベント

アイテムのクリックイベントを処理するコールバックとして `onAction` プロパティを使用します。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### リンク

`Breadcrumbs` では、通常、アイテムをクリックすると `onAction` がトリガーされます。ただし、他のページやウェブサイトへのリンクとしても使用できます。これを行うには、`<Breadcrumbs.Item>` コンポーネントに `href` プロパティを追加します。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### ルートコンテキスト

ユーザーが全体的な構造を理解できるように、一部のアプリケーションでは、他のアイテムがスペースの制限で非表示になっている場合でも、Breadcrumbs の開始点（ルートアイテム）を常に表示します。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### 区切り文字

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### アイコン付き Breadcrumbs

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### ルーターとの統合

GRAVITY_TRANSLATION_BLOCK_12_END

### ランドマーク

パンくずリストがページの主要なナビゲーション要素として使用される場合、[ナビゲーションランドマーク](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html) に配置できます。ランドマークは、支援技術ユーザーがページの主要なセクションをすばやく見つけるのに役立ちます。ナビゲーションランドマークを作成するには、パンくずリストを `aria-label` を持つ `<nav>` 要素内に配置します。

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

### 無効なアイテム

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

### 末尾コンテンツ

GRAVITY_TRANSLATION_BLOCK_17_END

GRAVITY_TRANSLATION_BLOCK_18_END

## プロパティ

| 名前             | 説明                                                               | タイプ                 | デフォルト |
| :--------------- | :----------------------------------------------------------------- | :------------------- | :------ |
| children         | パンくずリストのアイテム                                           | `React.ReactNode`    |         |
| disabled         | `Breadcrumbs` が無効かどうかを決定します。                         | `boolean`            |         |
| showRoot         | アイテムが折りたたまれた場合にルートアイテムを常に表示するかどうかを有効/無効にします。 | `boolean`            |         |
| maxItems         | 折りたたみコントロールを含む、表示されるアイテムの最大数。         | `number`             |         |
| itemComponent    | アイテムのレンダリングに使用されるコンポーネント。                 | `React.ElementType`  |         |
| popupPlacement   | 折りたたまれたアイテムのポップアップのスタイル。                 | `PopupPlacement`     |         |
| popupStyle       | 折りたたまれたアイテムのポップアップのスタイル。                 | `"staircase"`        |         |
| qa               | テストに使用される `data-qa` HTML 属性                             | `string`             |         |
| separator        | カスタムセパレータノード。                                         | `React.ReactNode`    | "/"     |
| onAction         | クリックされたアイテムのキーで呼び出されるハンドラ。               | `(key: Key) => void` |         |
| id               | 要素の一意の ID。                                                  | `string`             |         |
| className        | 要素の CSS クラス名。                                              | `string`             |         |
| style            | 要素のインラインスタイルを設定します。                             | `CSSProperties`      |         |
| aria-label       | 現在の要素をラベル付けする文字列値を定義します。                   | `string`             |         |
| aria-labelledby  | 現在の要素をラベル付けする要素を識別します。                       | `string`             |         |
| aria-describedby | オブジェクトを説明する要素を識別します。                           | `string`             |         |
| endContent       | 最後のパンくずリストアイテムの後にレンダリングされるユーザーノード。 | `React.ReactNode`    |         |

### BreadcrumbsItemProps

| 名前       | 説明                                       | タイプ                              | デフォルト |
| :--------- | :----------------------------------------- | :-------------------------------- | :------ |
| children   | パンくずリストの内容。                     | `React.ReactNode`                 |         |
| title      | アイテムの内容の文字列表現。               | `string`                          |         |
| aria-label | アイテムのアクセシビリティラベル。         | `string`                          |         |
| href       | ハイパーリンクに使用するURL。              | `string`                          |         |
| onClick    | アイテムのクリックハンドラー。             | `React.MouseEventHandler`         |         |
| target     | リンクのターゲットウィンドウ。             | `React.HTMLAttributeAnchorTarget` |         |
| rel        | リンクされたリソースと現在のページの関係。 | `string`                          |         |
| disabled   | BreadcrumbsItemが無効かどうか。            | `boolean`                         |         |