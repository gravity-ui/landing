GRAVITY_TRANSLATION_BLOCK_0_END

`Drawer` コンポーネントは、画面の端からスライドして表示されるパネルを提供する、汎用的なインターフェイス要素です。このパネルには、ナビゲーション、ツール、または追加コンテンツを配置できます。このコンポーネントは、React と CSS トランジションを使用してスムーズなアニメーションを実現しています。

```tsx
import {Drawer} from '@gravity-ui/uikit';
```

## 使用方法

`Drawer` コンポーネントの使用方法の簡単な例を以下に示します。

```tsx
import React from 'react';
import {Drawer} from '@gravity-ui/uikit';

const App = () => {
  const [isVisible, setVisible] = React.useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Open Drawer</button>
      <Drawer onOpenChange={setVisible} open={isVisible}>
        <p>Content of the drawer</p>
      </Drawer>
    </div>
  );
};

export default App;
```

## 配置

`Drawer` の配置を制御するには、`placement` プロップを渡します。可能な値は `left`、`right`、`top`、`bottom` です。

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} placement="left">
  <p>Content of the drawer</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="right">
  <p>Content of the drawer</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="top">
  <p>Content of the drawer</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="bottom">
  <p>Content of the drawer</p>
</Drawer>
```

## アニメーション

デフォルトでは、`Drawer` はトランジションとともにスライドインおよびスライドアウトします。すぐに表示または非表示にするには、`disableTransition` プロップを渡します。

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} disableTransition>
  <p>Content of the drawer</p>
</Drawer>
```

## リサイズ可能

`Drawer` は、`resizable` プロップを渡すことでリサイズ可能になります。

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} resizable>
  <p>Content of the drawer</p>
</Drawer>
```

さらに、`size` プロップを使用して `Drawer` のサイズを制御し、`onResize` ハンドラーを渡してリサイズされた値を保存できます。

```tsx
const [size, setSize] = useState(500);

<Drawer onOpenChange={setVisible} open={isVisible} resizable size={size} onResize={setSize}>
  <p>Content of the drawer</p>
</Drawer>;
```

## プロパティ

| 名前                    | 説明                                                                                                                            |                タイプ                |     デフォルト     |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------: | :-------------: |
| className               | ルートノードの `class` HTML属性                                                                                                 |              `string`              |                 |
| qa                      | テスト属性 (`data-qa`)                                                                                                          |              `string`              |                 |
| style                   | ルートノードの `style` HTML属性                                                                                                 |       `React.CSSProperties`        |                 |
| aria-label              | `Drawer` を説明するための `aria-label` HTML属性                                                                                 |              `string`              |                 |
| aria-labelledby         | 表示されている `Drawer` キャプション要素のID                                                                                    |              `string`              |                 |
| aria-describedby        | `Drawer` 要素の `aria-describedby`                                                                                              |              `string`              |                 |
| aria-details            | ユーザー `Drawer` 要素の `aria-details`                                                                                         |              `string`              |                 |
| returnFocus             | クローズ時にフォーカスされる要素                                                                                                | `boolean` `React.Ref<HTMLElement>` |     `true`      |
| initialFocus            | 初期フォーカス要素。正の数は、タブ可能な要素のインデックスです。                                                                  | `number` `React.Ref<HTMLElement>`  |                 |
| placement               | ドロワーがスライドインするサイドを指定します                                                                                    |              `string`              |     `left`      |
| contentClassName        | コンテンツノードの `class` HTML属性                                                                                             |              `string`              |                 |
| children                | 任意のReactコンテンツ                                                                                                           |         `React.ReactNode`          |                 |
| container               | `Portal` を介してコンポーネントがマウントされるDOM要素                                                                          |           `HTMLElement`            | `document.body` |
| contentOverflow         | `Drawer` が内部に独自のスクロールインジケーターを持つかどうかを決定します。デフォルトでは持っていません。                                |          `visible` `auto`          |    `visible`    |
| disableBodyScrollLock   | 開いている間のスクロールロックを無効にします                                                                                    |             `boolean`              |     `false`     |
| disableEscapeKeyDown    | `Esc` キーでのクローズを無効にします                                                                                            |             `boolean`              |     `false`     |
| disableOutsideClick     | 外側のクリックでのクローズを無効にします                                                                                        |             `boolean`              |     `false`     |
| disableTransition       | ドロワーのアニメーションを無効にします                                                                                          |             `boolean`              |     `false`     |
| disableModal            | モーダルフォーカス管理を無効にします                                                                                            |             `boolean`              |     `false`     |
| disableLayer            | レイヤーマネージャーへの `Drawer` の登録を無効にします                                                                            |             `boolean`              |     `true`      |
| disablePortal           | `Portal` の使用を無効にします                                                                                                   |             `boolean`              |     `false`     |
| keepMounted             | 非表示時に `Drawer` はDOMから削除されません                                                                                    |             `boolean`              |     `false`     |
| resizable               | ポインターによるドロワーのリサイズを有効にします                                                                                |             `boolean`              |     `false`     |
| open                    | `Drawer` の可視性を管理します                                                                                                   |             `boolean`              |     `false`     |
| hideVeil                | 外側のクリック処理を変更せずに、`Drawer` のベールを削除します                                                                   |             `boolean`              |     `false`     |
| onOpenChange            | 開いている状態が変更された瞬間に呼び出されるコールバック                                                                        |             `Function`             |                 |
| onTransitionIn          | トランジション "in" 開始時に呼び出されるコールバック                                                                             |             `Function`             |                 |
| onTransitionInComplete  | トランジション "in" 完了時に呼び出されるコールバック                                                                            |             `Function`             |                 |
| onTransitionOut         | トランジション "out" 開始時に呼び出されるコールバック                                                                           |             `Function`             |                 |
| onTransitionOutComplete | トランジション "out" 完了時に呼び出されるコールバック                                                                           |             `Function`             |                 |
| onResizeEnd             | リサイズ終了時に呼び出されるコールバック                                                                                        |             `Function`             |                 |
| onResize                | ドロワーがリサイズされているときに呼び出されるコールバック                                                                      |             `Function`             |                 |
| onResizeStart           | リサイズ開始時に呼び出されるコールバック                                                                                        |             `Function`             |                 |
| maxSize                 | ドロワーの最大幅または高さ（ピクセル単位）                                                                                      |              `number`              |                 |
| minSize                 | ドロワーの最小幅または高さ（ピクセル単位）                                                                                      |              `number`              |                 |
| size                    | ドロワーの幅または高さ（ピクセル単位）。`auto` オプションが渡された場合、`Drawer` の幅または高さはコンテンツに合わせて調整されます。 |         `number \| 'auto'`         |                 |