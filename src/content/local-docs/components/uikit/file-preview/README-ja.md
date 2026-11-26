`FilePreview` は、サムネイルまたはファイルタイプのアイコン、ファイル名、およびオプションのアクションを表示する、単一ファイルのコンパクトなプレビューカードです。

```tsx
import {FilePreview} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Properties

| Name                | Description                                                                                                      | Type                  | Required | Default   |
| :------------------ | :--------------------------------------------------------------------------------------------------------------- | :-------------------- | :------: | :-------- |
| file                | File インターフェースは、ファイルに関する情報を提供し、ウェブページ内の JavaScript がそのコンテンツにアクセスできるようにします。 | `File`                |    ✓     |           |
| imageSrc            | 画像プレビューのソース                                                                                           | `string`              |          |           |
| description         | ファイル名の下に表示される説明                                                                                   | `string`              |          |           |
| selected            | 選択されたスタイルを有効または無効にする                                                                         | `boolean`             |          | `false`   |
| className           | ファイルコンテナのクラス名                                                                                       | `string`              |          |           |
| onClick             | ファイルコンテナのクリックハンドラー                                                                             | `function`            |          |           |
| [actions](#actions) | インタラクティブなアクションの配列                                                                               | `FilePreviewAction[]` |          | `[]`      |
| view                | ファイルプレビューの表示モード (`compact` ビューではテキストは表示されません)                                      | `default`, `compact`  |          | `default` |

#### Actions

ファイルに対して、ホバー時に表示されるアクションを指定できます。

| 名前              | 説明                     | タイプ                                                                                                                                                       | 必須 | デフォルト |
| ----------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ------- |
| id                | アクションID                       | `String`                                                                                                                                                   |          |         |
| icon              | アクションアイコン                     | `React.ReactNode`                                                                                                                                          |    ✓     |         |
| title             | ホバー時のアクションヒント            | `String`                                                                                                                                                   |    ✓     |         |
| onClick           | アクションクリックハンドラー            | デフォルトビューの場合は `React.MouseEventHandler<HTMLElement>`、コンパクトビューの場合は `(event: React.MouseEvent<HTMLElement, MouseEvent> or KeyboardEvent) => void` |          |         |
| href              | アクションボタンのhref              | `String`                                                                                                                                                   |          |         |
| disabled          | アクション無効化                 | `boolean`                                                                                                                                                  |          |         |
| extraProps        | 追加のアクションボタンプロップス  | `ButtonButtonProps or ButtonLinkProps` (デフォルトのデスクトップビューでのみ機能します)                                                                           |          |         |
| tooltipExtraProps | 追加のアクションツールチッププロップス | `Omit<ActionTooltipProps, 'title' or 'children'>` (デフォルトのデスクトップビューでのみ機能します)                                                                |          |         |