GRAVITY_TRANSLATION_BLOCK_0_END

`Modal` コンポーネントは、ページ上の他のコンテンツの上に配置されるバックドロップ付きのポップアップウィンドウを作成するためのベースとして機能します。
開いている間はスクロールを無効にし、コンテンツのフォーカスを管理します。`Modal` の子コンポーネントは、[`Portal`](../Portal) コンポーネント内でレンダリングされます。
`Modal` を使用すると、ダイアログ、アラート、確認メッセージなどを実装できます。

```tsx
import {Modal} from '@gravity-ui/uikit';
```

## 使用方法

```tsx
import {useState} from 'react';
import {Button, Modal} from '@gravity-ui/uikit';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>モーダルを開く</Button>
<Modal open={open} onOpenChange={setOpen}>
    コンテンツ
</Modal>
```

## プロパティ

| 名前                         | 説明                                                                                         |                    タイプ                     |     デフォルト     |
| :--------------------------- | :------------------------------------------------------------------------------------------- | :-----------------------------------------: | :-------------: |
| children                     | 任意の React コンテンツ                                                                       |              `React.ReactNode`              |                 |
| className                    | ルートノードの `class` HTML 属性                                                             |                  `string`                   |                 |
| container                    | `Portal` を介してコンポーネントがマウントされる DOM 要素                                       |                `HTMLElement`                | `document.body` |
| contentClassName             | コンテンツノードの `class` HTML 属性                                                         |                  `string`                   |                 |
| disableBodyScrollLock        | 開いている間のスクロールロックを無効にします                                                 |                  `boolean`                  |     `false`     |
| disableTransition            | `true` の場合、開閉アニメーションをスキップします。                                          |                  `boolean`                  |     `false`     |
| disableEscapeKeyDown         | `Esc` キーでのクローズを無効にします                                                         |                  `boolean`                  |     `false`     |
| disableOutsideClick          | 外側のクリックでのクローズを無効にします                                                     |                  `boolean`                  |     `false`     |
| disablePortal                | `Portal` の使用を無効にします                                                                |                  `boolean`                  |     `false`     |
| keepMounted                  | 非表示時に `Modal` が DOM から削除されないようにします                                       |                  `boolean`                  |     `false`     |
| initialFocus                 | 初期フォーカスターゲット。デフォルトはコンテンツノードです                                     | `FloatingFocusManagerProps['initialFocus']` |                 |
| returnFocus                  | クローズ後にフォーカスが戻る場所を制御します                                                 | `FloatingFocusManagerProps['returnFocus']`  |                 |
| disableVisuallyHiddenDismiss | スクリーンリーダー用のディスミスボタンを削除します                                           |                  `boolean`                  |     `false`     |
| floatingRef                  | モーダルコンテンツノードへの参照                                                             |  `React.RefObject<HTMLDivElement \| null>`  |                 |
| onOpenChange                 | `Modal` の開閉状態の変更を処理します                                                         |                 `Function`                  |                 |
| onTransitionIn               | 開くトランジション開始イベントハンドラ                                                       |                 `Function`                  |                 |
| onTransitionOut              | 閉じるトランジション開始イベントハンドラ                                                     |                 `Function`                  |                 |
| onTransitionInComplete       | 開くトランジション終了イベントハンドラ                                                       |                 `Function`                  |                 |
| onTransitionOutComplete      | 閉じるトランジション終了イベントハンドラ                                                     |                 `Function`                  |                 |
| open                         | `Modal` の表示を管理します                                                                   |                  `boolean`                  |     `false`     |
| qa                           | テスト属性 (`data-qa`)                                                                       |                  `string`                   |                 |
| style                        | ルートノードの `style` HTML 属性                                                             |                  `string`                   |                 |
| aria-label                   | `Modal` を説明するための `aria-label` HTML 属性                                              |                  `string`                   |                 |
| aria-labelledby              | 表示されている `Modal` キャプション要素の ID                                                 |                  `string`                   |                 |
| contentOverflow              | `Modal` に内部スクロールインジケーターがあるか、コンテンツとともに大きくなるかを決定します       |              `visible` `auto`               |    `visible`    |

`onOpenChange` は、Escape キーの場合は `escape-key`、外部クリックの場合は `outside-press`、スクリーンリーダーの dismiss ボタンの場合は `undefined` を受け取ります。`open` が `false` になると、理由に関わらず閉じます。

## CSS API

| 名前                      | 説明                       |
| :------------------------ | :------------------------- |
| `--g-modal-margin`        | `Modal` コンテンツ周りのマージン |
| `--g-modal-border-radius` | `Modal` コンテンツの角丸     |
| `--g-modal-width`         | `Modal` コンテンツの幅       |
| `--g-modal-min-width`     | `Modal` コンテンツの最小幅   |
| `--g-modal-max-width`     | `Modal` コンテンツの最大幅   |
| `--g-modal-height`        | `Modal` コンテンツの高さ     |
| `--g-modal-min-height`    | `Modal` コンテンツの最小高さ |
| `--g-modal-max-height`    | `Modal` コンテンツの最大高さ |