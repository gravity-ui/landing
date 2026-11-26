ホバーまたはクリック時にポップオーバーでコンテキスト情報が表示されるヘルプアイコン。インターフェイスの追加スペースを取らずに、ヒント、説明、またはサポートコンテンツを表示するのに理想的です。

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## 例

レンダリングされた生のHTMLとマウスリーブで閉じるコンポーネント：

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## プロパティ

`HelpMark` は、これらのプロパティに加えて、有効な `button` 要素のプロパティをすべて受け入れます。

| 名前         | 説明                               |           型           | デフォルト |
| :----------- | :----------------------------------- | :----------------------: | :-----: |
| iconSize     | アイコンサイズを設定します               | `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| popoverProps | `Popover` のプロパティをオーバーライドします |      `PopoverProps`      |         |
| children     | ポップオーバー内に表示されるコンテンツ     |    `React.ReactNode`     |         |
GRAVITY_TRANSLATION_BLOCK_2_END