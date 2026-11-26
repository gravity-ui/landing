GRAVITY_TRANSLATION_BLOCK_0_END

`Portal` はユーティリティコンポーネントです。基本的に、React の [`createPortal`](https://react.dev/reference/react-dom/createPortal) のシンプルなラッパーであり、子要素を親コンポーネント外の DOM ノードにレンダリングできます。

```tsx
import {Portal} from '@gravity-ui/uikit';
```

## コンテナ

デフォルトでは、`Portal` は子要素を `document.body` にレンダリングしますが、`container` プロパティでこれを変更できます。
さらに、`PortalProvider` コンポーネントを使用して、React サブツリー内のすべての `Portal` にコンテナを提供できます。

```tsx
import {Portal, PortalProvider} from '@gravity-ui/uikit'

const myRoot = document.getElementById('my-root');

<Portal>これは document.body の中にレンダリングされます</Portal>
<Portal container={myRoot}>これは #my-root ノードの中にレンダリングされます</Portal>
<PortalProvider container={myRoot}>
    <Portal>これも #my-root の中にレンダリングされます</Portal>
</PortalProvider>
```

## プロパティ

| 名前          | 説明                                                               |       タイプ        |     デフォルト     |
| :------------ | :----------------------------------------------------------------- | :---------------: | :-------------: |
| children      | 任意の React コンテンツ                                            | `React.ReactNode` |                 |
| container     | 子要素をマウントする DOM 要素                                      |   `HTMLElement`   | `document.body` |
| disablePortal | true の場合、子要素を通常の DOM ヒエラルキー内でレンダリングします。 |     `boolean`     |                 |