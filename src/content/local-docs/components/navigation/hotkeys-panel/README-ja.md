ホットキーのドキュメント用のナビゲーションパネル。
このパネルは、アプリケーションのホットキーのセットと、その目的の説明を表示します。

```ts
import {HotkeysPanel} from '@gravity-ui/navigation';
```

## Properties

| プロパティ                | タイプ            | 必須 | デフォルト | 説明                                                                  |
| :---------------------- | :-------------- | :------: | :------ | :--------------------------------------------------------------------------- |
| hotkeys                 | `Array`         |   はい    |         | ホットキーグループのリスト                                                        |
| title                   | `ReactNode`     |          |         | パネルのタイトル                                                              |
| togglePanelHotkey       | `String`        |          |         | パネルを開くホットキー                                                        |
| open                    | `Boolean`       |   はい    |         | ドロワーが開いているかどうか                                                   |
| onClose                 | `Function`      |          |         | ドロワーを閉じるハンドラー                                                         |
| filterable              | `Boolean`       |          | true    | 検索入力フィールドを表示するかどうか                                             |
| filterPlaceholder       | `String`        |          |         | 検索入力フィールドのプレースホルダー                                                     |
| filterClassName         | `String`        |          |         | 検索入力フィールドのクラス名                                                      |
| leftOffset              | `Number/String` |          |         | ドロワーの左オフセット                                                           |
| topOffset               | `Number/String` |          |         | ドロワーの上オフセット                                                            |
| emptyState              | `ReactNode`     |          |         | 検索結果がない場合のプレースホルダー                                                |
| className               | `String`        |          |         | ドロワーのクラス名                                                            |
| drawerItemClassName     | `String`        |          |         | ドロワーアイテムのクラス名                                                       |
| titleClassName          | `String`        |          |         | タイトルのクラス名                                                             |
| itemContentClassName    | `String`        |          |         | リストアイテムコンテンツのクラス名                                                 |
| listClassName           | `String`        |          |         | リストのクラス名                                                              |
| platform                | `'pc'`/`'mac'`  |          | auto    | ホットキー表示形式のプラットフォーム                                           |
| drawerProps             | `DrawerProps`   |          |         | Drawerコンポーネントに追加のプロパティ (style, container, hideVeilなど) |
| disableNavigationOffset | `Boolean`       |          | false   | AsideHeaderのサイズに基づく自動左オフセットを無効にするかどうか           |

## CSS API

| 名前                                 | 説明                       | デフォルト |
| :----------------------------------- | :-------------------------------- | :-----: |
| `--hotkeys-panel-width`              | パネルの幅            | `400px` |
| `--hotkeys-panel-vertical-padding`   | パネルの上部と下部のパディング | `18px`  |
| `--hotkeys-panel-horizontal-padding` | パネルの左部と右部のパディング | `24px`  |

### 使用方法

storybookの例 `src/components/HotkeysPanel/__stories__/HotkeysPanelShowcase` を参照してください。