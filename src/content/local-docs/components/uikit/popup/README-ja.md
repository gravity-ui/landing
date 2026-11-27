<!--GITHUB_BLOCK-->

# Popup

<!--/GITHUB_BLOCK-->

`Popup` は、ツールチップ、ポップオーバー、メニューの基盤となる低レベルのプリミティブであり、[Floating UI](https://floating-ui.com) 上に構築されています。浮動コンテンツをページの上に配置し、参照要素にアンカーします。その可視性は `open` プロパティで制御され、`disablePortal` プロパティを設定しない限り、子要素は [`Portal`](../Portal) コンポーネント内でレンダリングされます。

```tsx
import {Popup} from '@gravity-ui/uikit';
```

## Anchor

浮動要素のアンカーを指定するには、`anchorElement` プロパティを使用できます。

<!--SANDBOX
import {useState} from 'react';
import {Button, Popup} from '@gravity-ui/uikit';

export default function () {
    const [buttonElement, setButtonElement] = useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button ref={setButtonElement} onClick={() => setOpen((prevOpen) => !prevOpen)}>
                Toggle Popup
            </Button>
            <Popup anchorElement={buttonElement} open={open} placement="bottom">
                <div style={{padding: 5}}>
                    Content
                </div>
            </Popup>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [buttonElement, setButtonElement] = React.useState(null);
const [open, setOpen] = React.useState(false);

<Button ref={setButtonElement} onClick={() => setOpen((prevOpen) => !prevOpen)}>
  Toggle Popup
</Button>
<Popup anchorElement={buttonElement} open={open} placement="bottom">
  Content
</Popup>
```

<!--/GITHUB_BLOCK-->

## Placement

`placement` プロパティを使用して、アンカー要素の周りの `Popup` の位置を管理します。
デフォルトでは、`Popup` はオーバーフローを防ぐために [flip middleware](https://floating-ui.com/docs/flip) を使用します。
プロパティが配列に設定されている場合、最初の要素がデフォルトの配置値として使用され、残りは [fallback placements](https://floating-ui.com/docs/flip#fallbackplacements) として使用されます。
`auto`、`auto-start`、`auto-end` の値を使用して、flip の代わりに [autoPlacement middleware](https://floating-ui.com/docs/autoPlacement) を使用することもできます。

<!--SANDBOX
import {Popup, PopupProps} from '@gravity-ui/uikit';
import {CSSProperties, useState} from 'react';

const anchorStyles: CSSProperties = {
    margin: '40px 100px',
    width: 320,
    height: 140,
    border: '2px dashed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5em',
};

function PopupInstance({children, ...props}: PopupProps) {
    return (
        <Popup open disablePortal {...props}>
            <div style={{padding: 5}}>{children}</div>
        </Popup>
    );
}

export default function () {
    const [anchorElement, setAnchorElement] = useState<HTMLDivElement | null>(null);

    return (
        <div>
            <div ref={setAnchorElement} style={anchorStyles}>
                Anchor
            </div>
            <PopupInstance anchorElement={anchorElement} placement="top-start">
                Top Start
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="top">
                Top
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="top-end">
                Top End
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="right-start">
                Right Start
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="right">
                Right
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="right-end">
                Right End
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="bottom-end">
                Bottom End
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="bottom">
                Bottom
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="bottom-start">
                Bottom Start
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="left-end">
                Left End
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="left">
                Left
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="left-start">
                Left Start
            </PopupInstance>
        </div>
    );
};
SANDBOX-->

## Properties

| 名前                    | 説明                                                                                |                             タイプ                              |     デフォルト     |
| :---------------------- | :----------------------------------------------------------------------------------------- | :-----------------------------------------------------------: | :-------------: |
| anchorElement           | アンカー要素。`VirtualElement` も指定可能です                                             |                     `PopupAnchorElement`                      |                 |
| aria-describedby        | `aria-describedby` 属性。ラベルと説明ノードの両方がある場合に使用します。          |                           `string`                            |                 |
| aria-label              | `aria-label` 属性。表示可能なキャプションがない場合のみ使用します。                 |                           `string`                            |                 |
| aria-labelledby         | `aria-labelledby` 属性。表示可能なキャプションがある場合に推奨されます。                        |                           `string`                            |                 |
| children                | すべての React コンテンツ                                                                          |                       `React.ReactNode`                       |                 |
| className               | ルートノードの `class` HTML 属性                                                   |                           `string`                            |                 |
| container               | `Portal` を介してコンポーネントがマウントされる DOM 要素                                     |                         `HTMLElement`                         | `document.body` |
| disableEscapeKeyDown    | `Esc` キーによるクローズを無効にします                                                         |                           `boolean`                           |     `false`     |
| disableFocusOut         | フォーカスアウトによるクローズを無効にします                                                      |                           `boolean`                           |     `false`     |
| disableOutsideClick     | 外側のクリックによるクローズを無効にします                                                |                           `boolean`                           |     `false`     |
| disablePortal           | `Portal` の使用を無効にします                                                                    |                           `boolean`                           |     `false`     |
| disableTransition       | ポップアップの表示/非表示のアニメーションを無効にします                                         |                           `boolean`                           |     `false`     |
| floatingClassName       | `Floating UI` 要素に適用する追加のクラス                                     |                           `string`                            |                 |
| floatingContext         | インタラクションを提供するための `Floating UI` コンテキスト                                              |                     `FloatingRootContext`                     |                 |
| floatingInteractions    | `Floating UI` インタラクションをオーバーライドします                                                        |                     `Array<ElementProps>`                     |                 |
| floatingMiddlewares     | `Floating UI` ミドルウェア。設定されている場合、デフォルトのミドルウェアを完全に上書きします。 |                      `Array<Middleware>`                      |                 |
| floatingStyles          | `Floating UI` 要素に適用するスタイル                                               |                     `React.CSSProperties`                     |                 |
| focusOrder              | フォーカスサークルの順序                                                            |        `Array<'reference' \| 'floating' \| 'content'>`        |  `['content']`  |
| hasArrow                | アンカーを指す矢印をレンダリングします                                                       |                           `boolean`                           |     `false`     |
| id                      | `id` HTML 属性                                                                        |                           `string`                            |                 |
| initialFocus            | 初期フォーカス要素。正の数はタブ可能な要素のインデックスです。           |               `number` `React.Ref<HTMLElement>`               |                 |
| keepMounted             | 非表示時に `Popup` が DOM から削除されないようにします                                       |                           `boolean`                           |     `false`     |
| modal                   | フォーカストラップ動作を有効にします                                                           |                           `boolean`                           |     `false`     |
| offset                  | `Floating UI` オフセット値                                                                 |                         `PopupOffset`                         |       `4`       |
| onOpenChange            | `Popup` の開閉状態変更イベントを処理します                                                          |                          `Function`                           |                 |
| onTransitionIn          | ポップアップを開くアニメーションの開始時                                                              |                          `Function`                           |                 |
| onTransitionInComplete  | ポップアップを開くアニメーションの完了時                                                             |                          `Function`                           |                 |
| onTransitionOut         | ポップアップを閉じるアニメーションの開始時                                                             |                          `Function`                           |                 |
| onTransitionOutComplete | ポップアップを閉じるアニメーションの完了時                                                            |                          `Function`                           |                 |
| open                    | `Popup` の可視性を管理します                                                                 |                           `boolean`                           |     `false`     |
| placement               | `Floating UI` の配置                                                                    | `Placement` `Array<Placement>` `auto` `auto-start` `auto-end` |                 |
| qa                      | テスト属性 (`data-qa`)                                                                 |                           `string`                            |                 |
| returnFocus             | クローズ時にフォーカスを戻す要素                                                           |              `boolean` `React.Ref<HTMLElement>`               |     `true`      |
| role                    | ポップアップのアクセシビリティロール                                                               |                           `string`                            |                 |
| strategy                | `Floating UI` のポジショニング戦略                                                         |                      `absolute` `fixed`                       |   `absolute`    |
| style                   | ルートノードの `style` HTML 属性                                                       |                     `React.CSSProperties`                     |                 |

## CSS API

| 名前                         | 説明      |
| :--------------------------- | :--------------- |
| `--g-popup-background-color` | 背景色 |
| `--g-popup-border-color`     | 境界線の色     |
| `--g-popup-border-radius`    | 境界線の半径    |
| `--g-popup-border-width`     | 境界線の幅     |
