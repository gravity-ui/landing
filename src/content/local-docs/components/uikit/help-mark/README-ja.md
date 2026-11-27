<!--GITHUB_BLOCK-->

# HelpMark

<!--/GITHUB_BLOCK-->

ホバーまたはクリック時にポップオーバーでコンテキスト情報が表示されるヘルプアイコン。インターフェイスの追加スペースを取らずに、ヒント、説明、またはサポートコンテンツを表示するのに理想的です。

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## 例

レンダリングされた生のHTMLとマウスリーブで閉じるコンポーネント：

<!--SANDBOX
import {HelpMark} from '@gravity-ui/uikit';

export default function () {
    return (
        <HelpMark onClick={() => console.log('just action happened')}>
            <b>Lorem ipsum</b> dolor sit{' '}
            <a href="https://example.com" target="_blank" rel="noreferrer">
                amet
            </a>
            , at scelerisque suspendisse
        </HelpMark>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<HelpMark onClick={() => console.log('just action happened')}>
  <b>Lorem ipsum</b> dolor sit{' '}
  <a href="https://example.com" target="_blank" rel="noreferrer">
    amet
  </a>
  , at scelerisque suspendisse
</HelpMark>
```

<!--/GITHUB_BLOCK-->

## プロパティ

`HelpMark` は、これらのプロパティに加えて、有効な `button` 要素のプロパティをすべて受け入れます。

| 名前         | 説明                               |           型           | デフォルト |
| :----------- | :----------------------------------- | :----------------------: | :-----: |
| iconSize     | アイコンサイズを設定します               | `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| popoverProps | `Popover` のプロパティをオーバーライドします |      `PopoverProps`      |         |
| children     | ポップオーバー内に表示されるコンテンツ     |    `React.ReactNode`     |         |
