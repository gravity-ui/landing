`Breadcrumbs` は、ウェブサイトの階層における現在のページの位置を示すナビゲーション要素です。階層の上位レベルに戻るためのリンクを提供し、複数の階層を持つウェブサイトでのナビゲーションを容易にします。Breadcrumbs は、特に大規模なウェブサイトや階層ベースのページ構造を持つアプリケーションで役立ちます。

```tsx
import {Breadcrumbs} from '@gravity-ui/uikit';
```

## 例

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### イベント

`onAction` プロパティをコールバックとして使用し、アイテムのクリックイベントを処理します。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### リンク

`Breadcrumbs` では、通常、アイテムをクリックすると `onAction` がトリガーされます。しかし、他のページやウェブサイトへのリンクとしても使用できます。これを行うには、`<Breadcrumbs.Item>` コンポーネントに `href` プロパティを追加します。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### ルートコンテキスト

全体的な構造をユーザーが理解できるように、一部のアプリケーションでは、他のアイテムがスペースの制限で非表示になっている場合でも、Breadcrumbs の開始点（ルートアイテム）を常に表示します。

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

パンくずリストがページのメインナビゲーション要素として使用される場合、[ナビゲーションランドマーク](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html) に配置できます。ランドマークは、支援技術のユーザーがページの主要なセクションをすばやく見つけるのに役立ちます。ナビゲーションランドマークを作成するには、パンくずリストを `aria-label` を持つ `<nav>` 要素内に配置します。

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

### 無効なアイテム

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

### 末尾コンテンツ

GRAVITY_TRANSLATION_BLOCK_17_END

GRAVITY_TRANSLATION_BLOCK_18_END

## プロパティ

| 名前             | 説明                                                                  | タイプ                                       | デフォルト |
| :--------------- | :--------------------------------------------------------------------------- | :----------------------------------------- | :------ |
| children         | パンくずリストのアイテム                                                             | `React.ReactElement<BreadcrumbsItemProps>` |         |
| disabled         | `Breadcrumbs` が無効かどうかを決定します。                               | `boolean`                                  |         |
| showRoot         | アイテムが折りたたまれた場合に、常にルートアイテムを表示するかどうかを有効または無効にします。 | `boolean`                                  |         |
| popupPlacement   | 折りたたまれたアイテムのポップアップのスタイル。                                           | `PopupPlacement`                           |         |
| popupStyle       | 折りたたまれたアイテムのポップアップのスタイル。                                           | `"staircase"`                              |         |
| qa               | `data-qa` HTML 属性、テストに使用されます                                   | `string`                                   |         |
| separator        | カスタムセパレーターノード。                                                       | `React.ReactNode`                          | "/"     |
| action           | `click` イベントハンドラー。                                                       | `(id: Key) => void`                        |         |
| id               | 要素の一意の ID。                                                         | `string`                                   |         |
| className        | 要素の CSS クラス名。                                              | `string`                                   |         |
| style            | 要素のインラインスタイルを設定します。                                       | `CSSProperties`                            |         |
| aria-label       | 現在の要素をラベル付けする文字列値を定義します。                      | `string`                                   |         |
| aria-labelledby  | 現在の要素をラベル付けする要素を識別します。                    | `string`                                   |         |
| aria-describedby | オブジェクトを説明する要素を識別します。                          | `string`                                   |         |
| endContent       | 最後のパンくずリストアイテムの後にレンダリングされるユーザーのノード。                             | `React.ReactNode`                          |         |

### BreadcrumbsItemProps

| 名前       | 説明                                                           | タイプ                              | デフォルト |
| :--------- | :------------------------------------------------------------- | :-------------------------------- | :------ |
| children   | パンくずリストの内容。                                         | `string`                          |         |
| title      | アイテムの内容の文字列表現。                                   | `string`                          |         |
| aria-label | アイテムのアクセシビリティラベル。                             | `string`                          |         |
| href       | ハイパーリンクに使用するURL。                                  | `string`                          |         |
| target     | リンクのターゲットウィンドウ。                                 | `React.HTMLAttributeAnchorTarget` |         |
| rel        | リンクされたリソースと現在のページの関係。                     | `string`                          |         |
| disabled   | BreadcrumbsItemが無効かどうか。                                | `boolean`                         |         |