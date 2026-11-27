<!--GITHUB_BLOCK-->

# Modal

<!--/GITHUB_BLOCK-->

`Modal` コンポーネントは、ページ上の他のコンテンツの上に背景を表示するポップアップウィンドウを作成するためのベースとして機能します。
開いている間はスクロールを無効にし、コンテンツのフォーカスを管理します。`Modal` の子コンポーネントは、[`Portal`](../Portal) コンポーネント内でレンダリングされます。
`Modal` を使用すると、ダイアログ、アラート、確認ダイアログなどを実装できます。

```tsx
import {Modal} from '@gravity-ui/uikit';
```

## 使用方法

```tsx
import {useState} from 'react';
import {Button, Modal} from '@gravity-ui/uikit';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>
<Modal open={open} onClose={() => setOpen(false)}>
    Content
</Modal>
```

## プロパティ

| 名前                  | 説明                                                                                         |       タイプ        |     デフォルト     |
| :-------------------- | :------------------------------------------------------------------------------------------- | :---------------: | :-------------: |
| autoFocus             | 開いている間、フォーカスはコンテンツ内の最初のインタラクティブ要素に設定されます。                               |     `boolean`     |     `true`      |
| children              | すべてのReactコンテンツ                                                                      | `React.ReactNode` |                 |
| className             | ルートノードの `class` HTML属性                                                              |     `string`      |                 |
| container             | `Portal` を介してコンポーネントがマウントされるDOM要素                                           |   `HTMLElement`   | `document.body` |
| contentClassName      | コンテンツノードの `class` HTML属性                                                          |     `string`      |                 |
| disableBodyScrollLock | 開いている間のスクロールロックを無効にします                                                     |     `boolean`     |     `false`     |
| disableEscapeKeyDown  | `Esc` でのクローズを無効にします                                                               |     `boolean`     |     `false`     |
| disableOutsideClick   | 外側のクリックでのクローズを無効にします                                                       |     `boolean`     |     `false`     |
| disablePortal         | `Portal` の使用を無効にします                                                                  |     `boolean`     |     `false`     |
| focusTrap             | フォーカストラップ動作を有効にします                                                             |     `boolean`     |     `true`      |
| keepMounted           | `Modal` は非表示時にDOMから削除されません                                                      |     `boolean`     |     `false`     |
| onClose               | `Modal` のクローズイベントを処理します                                                          |    `Function`     |                 |
| onEnterKeyDown        | `Enter` キープレスイベントハンドラ                                                               |    `Function`     |                 |
| onEscapeKeyDown       | `Esc` キープレスイベントハンドラ                                                                 |    `Function`     |                 |
| onTransitionEnter     | オープントランジション開始イベントハンドラ                                                       |    `Function`     |                 |
| onTransitionExit      | クローズトランジション開始イベントハンドラ                                                       |    `Function`     |                 |
| onTransitionEntered   | オープントランジション終了イベントハンドラ                                                       |    `Function`     |                 |
| onTransitionExited    | クローズトランジション終了イベントハンドラ                                                       |    `Function`     |                 |
| onOutsideClick        | 外側のクリックイベントハンドラ                                                                 |    `Function`     |                 |
| open                  | `Modal` の可視性を管理します                                                                   |     `boolean`     |     `false`     |
| qa                    | テスト属性 (`data-qa`)                                                                       |     `string`      |                 |
| restoreFocusRef       | フォーカスが復元される要素                                                                     | `React.RefObject` |                 |
| style                 | ルートノードの `style` HTML属性                                                                |     `string`      |                 |
| aria-label            | `Modal` を説明するための `aria-label` HTML属性                                                 |     `string`      |                 |
| aria-labelledby       | 表示されている `Modal` キャプション要素のID                                                    |     `string`      |                 |
| contentOverflow       | `Modal` にスクロールインジケーターがあるか、コンテンツとともに大きくなるかを決定します。                     | `visible` `auto`  |    `visible`    |

## CSS API

| 名前                      | 説明                       |
| :------------------------ | :------------------------- |
| `--g-modal-margin`        | `Modal` コンテンツの周囲のマージン |
| `--g-modal-border-radius` | `Modal` コンテンツの角丸     |
| `--g-modal-width`         | `Modal` コンテンツの幅       |
| `--g-modal-max-width`     | `Modal` コンテンツの最大幅   |
| `--g-modal-height`        | `Modal` コンテンツの高さ     |
| `--g-modal-max-height`    | `Modal` コンテンツの最大高さ |
