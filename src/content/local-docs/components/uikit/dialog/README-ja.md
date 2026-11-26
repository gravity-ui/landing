`Dialog` は、タイトル、本文、フッターのアクションを持つモーダルウィンドウで、確認、フォーム、プロンプトに使用されます。`Modal` の上に構築されています。

```tsx
import {Dialog} from '@gravity-ui/uikit';
```

## 使用方法

```tsx
const [open, setOpen] = useState(false);
const dialogTitleId = 'app-confirmation-dialog-title';

<Dialog
  onClose={() => setOpen(false)}
  open={open}
  onEnterKeyDown={() => {
    alert('onEnterKeyDown');
  }}
  aria-labelledby={dialogTitleId}
>
  <Dialog.Header caption="Caption" id={dialogTitleId} />
  <Dialog.Body>Dialog.Body</Dialog.Body>
  <Dialog.Footer
    onClickButtonCancel={() => setOpen(false)}
    onClickButtonApply={() => alert('onApply')}
    textButtonApply="Apply"
    textButtonCancel="Cancel"
  />
</Dialog>;
```

## プロパティ
GRAVITY_TRANSLATION_BLOCK_0_END

| 名前                  | 説明                                                                                             | タイプ                                                                                             | デフォルト     |
| :-------------------- | :----------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- | :---------- |
| open                  | 現在のダイアログの状態                                                                           | `boolean`                                                                                        |             |
| onEscapeKeyDown       | Escape キー押下時のイベントハンドラ                                                              | `(event: KeyboardEvent) => void`                                                                 |             |
| onEnterKeyDown        | Enter キー押下時のイベントハンドラ                                                               | `(event: KeyboardEvent) => void`                                                                 |             |
| onOutsideClick        | ダイアログの外側をクリックしたときのイベントハンドラ                                               | `(event: MouseEvent) => void`                                                                    |             |
| onClose               | ダイアログが閉じられたときのイベントハンドラ                                                     | `(event: MouseEvent or KeyboardEvent,` `reason: ModalCloseReason or "closeButtonClick") => void` |             |
| className             | ダイアログコンテンツラッパーの `className`                                                       | `string`                                                                                         |             |
| modalClassName        | ダイアログが埋め込まれるモーダルボックスの `className`                                           | `string`                                                                                         |             |
| size                  | ダイアログのサイズ。非推奨。同じ結果を得るには `maxWidth` + `fullWidth` を使用してください。 | `'s'` `'m'` `'l'`                                                                                |             |
| maxWidth              | ダイアログコンテンツの最大幅                                                                     | `'s'` `'m'` `'l'`                                                                                |             |
| fullWidth             | `true` の場合、コンテンツは `maxWidth` まで拡張されます                                           | `boolean`                                                                                        |             |
| disableBodyScrollLock | ボディのスクロールロックを切り替えます                                                           | `boolean`                                                                                        | `false`     |
| disableEscapeKeyDown  | Escape キー押下を無効にするかどうかを切り替えます                                                | `boolean`                                                                                        | `false`     |
| disableOutsideClick   | 外側クリックを無効にするかどうかを切り替えます                                                   | `boolean`                                                                                        | `false`     |
| keepMounted           | ダイアログをマウントされた状態に保つかどうかを切り替えます                                       | `boolean`                                                                                        | `false`     |
| hasCloseButton        | ダイアログの右上隅に閉じるアイコンがあるかどうかを切り替えます                                   | `boolean`                                                                                        | `true`      |
| aria-labelledby       | `<Dialog/>` キャプションの ID。キャプションの ID を設定するには `<Dialog.Header/>` の `id` プロパティを使用してください。 | `string`                                                                                         |             |
| aria-label            | a11y 用のダイアログラベル。キャプションがユーザーに表示される場合は `aria-labelledby` を設定してください。 | `string`                                                                                         |             |
| container             | ダイアログボックスのコンテナ要素                                                                 | `HTMLElement`                                                                                    |             |
| qa                    | ダイアログが埋め込まれるモーダルボックスの `data-qa` 属性値                                      | `string`                                                                                         |             |
| contentOverflow       | `Dialog` に内部スクロールインジケーターがあるか、コンテンツとともに大きくなるかを決定します        | `'visible'` `'auto'`                                                                             | `'visible'` |