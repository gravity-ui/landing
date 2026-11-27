GRAVITY_TRANSLATION_BLOCK_0_END

デスクトップではポップオーバー、モバイルではシートでコンテキスト情報が表示されるヘルプアイコンです。インターフェースの追加スペースを取らずに、ヒント、説明、またはサポートコンテンツを表示するのに理想的です。

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## 例

レンダリングされた生のHTMLとマウスリーブで閉じるコンポーネント：

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## プロパティ

`HelpMark` は、これらのプロパティに加えて、有効な `button` 要素のプロパティをすべて受け入れます。

| 名前         | 説明                                    |           型           | デフォルト |
| :----------- | :-------------------------------------- | :--------------------: | :-------: |
| size         | アイコンサイズを設定します              | `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| popoverProps | デスクトップの `Popover` プロパティを上書きします |      `PopoverProps`      |           |
| sheetProps   | モバイルの `Sheet` プロパティを上書きします   |       `SheetProps`       |           |
| children     | ポップオーバーまたはシート内に表示されるコンテンツ |    `React.ReactNode`     |           |

## CSS API

| 名前                 | 説明         |
| :------------------- | :----------- |
| `--g-help-mark-size` | アイコンサイズ（px） |