`Dialog` は、タイトル、本文、フッターのアクションを持つモーダルウィンドウで、確認、フォーム、プロンプトに使用されます。`Modal` の上に構築されています。

```tsx
import {Dialog} from '@gravity-ui/uikit';
```

## 使用方法

```tsx
const [open, setOpen] = useState(false);
const dialogTitleId = 'app-confirmation-dialog-title';

<Dialog onOpenChange={setOpen} open={open} aria-labelledby={dialogTitleId}>
  <Dialog.Header caption="キャプション" id={dialogTitleId} />
  <Dialog.Body>Dialog.Body</Dialog.Body>
  <Dialog.Footer
    onClickButtonCancel={() => setOpen(false)}
    onClickButtonApply={() => alert('onApply')}
    textButtonApply="適用"
    textButtonCancel="キャンセル"
  />
</Dialog>;
```

## プロパティ
GRAVITY_TRANSLATION_BLOCK_0_END

| 名前                  | 説明                                                                                             | タイプ                                                                | デフォルト     |
| :-------------------- | :----------------------------------------------------------------------------------------------- | :------------------------------------------------------------------ | :---------- |
| open                  | 現在のダイアログの状態                                                                           | `boolean`                                                           |             |
| onOpenChange          | ダイアログの開閉状態の変更を処理します                                                               | `(open: boolean, event?: Event, reason?: OpenChangeReason) => void` |             |
| initialFocus          | 初期フォーカスターゲット。フッターの `cancel` または `apply` ボタンを含む                             | `ModalProps['initialFocus'] \| 'cancel' \| 'apply'`                 |             |
| returnFocus           | フォーカスが戻る場所を制御します                                                                   | `ModalProps['returnFocus']`                                         |             |
| className             | ダイアログコンテンツラッパーの `className`                                                       | `string`                                                            |             |
| modalClassName        | ダイアログが埋め込まれているモーダルボックスの `className`                                         | `string`                                                            |             |
| maxWidth              | ダイアログコンテンツの最大幅                                                                     | `'s'` `'m'` `'l'`                                                   |             |
| fullWidth             | `true` の場合、コンテンツは `maxWidth` まで拡張されます                                             | `boolean`                                                           |             |
| disableBodyScrollLock | ボディのスクロールロックを切り替えます                                                             | `boolean`                                                           | `false`     |
| disableTransition     | `true` の場合、開閉アニメーションをスキップします                                                  | `boolean`                                                           | `false`     |
| disableEscapeKeyDown  | Escape キーダウンを無効にするかどうかを切り替えます                                                | `boolean`                                                           | `false`     |
| disableOutsideClick   | 外側のクリックを無効にするかどうかを切り替えます                                                   | `boolean`                                                           | `false`     |
| keepMounted           | ダイアログをマウントされた状態に保つかどうかを切り替えます                                           | `boolean`                                                           | `false`     |
| hasCloseButton        | ダイアログの右上隅に閉じるアイコンがあるかどうかを切り替えます                                       | `boolean`                                                           | `true`      |
| aria-labelledby       | `<Dialog/>` キャプションの ID。キャプションの ID を設定するには、`<Dialog.Header/>` の `id` プロパティを使用します | `string`                                                            |             |
| aria-label            | a11y 用のダイアログラベル。キャプションがユーザーに表示される場合は `aria-labelledby` を設定してください | `string`                                                            |             |
| container             | ダイアログボックスのコンテナ要素                                                                 | `HTMLElement`                                                       |             |
| qa                    | ダイアログが埋め込まれているモーダルボックスの `data-qa` 属性値                                    | `string`                                                            |             |
| contentOverflow       | `Dialog` に内部スクロールインジケーターがあるか、コンテンツとともに大きくなるかを決定します            | `'visible'` `'auto'`                                                | `'visible'` |

`onOpenChange` は、Escape キーを押した場合は `escape-key`、外部クリックの場合は `outside-press`、閉じるボタンの場合は `click`、スクリーンリーダーの dismiss ボタンの場合は `undefined` を受け取ります。`open` が `false` になった場合は、理由に関わらず閉じます。

GRAVITY_TRANSLATION_BLOCK_1_END