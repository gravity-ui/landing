# ColorPicker

`ColorPicker` コンポーネントを使用すると、HEX/RGB 入力モードとオプションのアルファチャンネルサポートを備えたインタラクティブなカラーピッカーインターフェイスで色を選択できます。

ピッカーにはカラー スウォッチが表示され、クリックするとポップアップが開きます。ポップアップには以下が含まれます。

- 彩度と明度セレクター
- 色相スライダー
- アルファスライダー（有効な場合）
- カラー入力フィールド（HEX または RGB モード）

## 基本的な使い方

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function BasicColorPicker() {
  const [color, setColor] = React.useState('#ff0000');

  return <ColorPicker value={color} onUpdate={(newColor) => setColor(newColor)} />;
}
```

## アルファチャンネル付き

`ColorPicker` は、`withAlpha` が有効な場合にアルファ透明度をサポートします。これにより、透明度スライダーが追加され、HEXA/RGBA カラー形式に切り替わります。

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function ColorPickerWithAlpha() {
  const [color, setColor] = React.useState('#ff0000ff');

  return <ColorPicker value={color} onUpdate={(newColor) => setColor(newColor)} withAlpha={true} />;
}
```

## コンパクトモード

スペースが限られているレイアウトでは、カラー値のテキストを表示せずに、カラー スウォッチのみをレンダリングできます。

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function CompactColorPicker() {
  return (
    <ColorPicker
      defaultValue="#00ff00"
      compact={true}
      onUpdate={(newColor) => console.log('New color:', newColor)}
    />
  );
}
```

## 制御された状態と制御されていない状態

`ColorPicker` は、制御された使用パターンと制御されていない使用パターンの両方をサポートします。

```jsx
// 制御されていない状態
<ColorPicker
  defaultValue="#ffbe5c"
  onUpdate={(color) => console.log('Color changed:', color)}
/>

// 制御された状態
<ColorPicker
  value={color}
  onUpdate={setColor}
/>
```

ピッカーポップアップの開いた状態も制御できます。

```jsx
// 制御された開いた状態
<ColorPicker value={color} open={isOpen} onOpenChange={setIsOpen} onUpdate={setColor} />
```

## プロパティ

| 名前           | 説明                                                               |           型            |                                      デフォルト                                       |
| :------------- | :----------------------------------------------------------------------- | :-----------------------: | :--------------------------------------------------------------------------------: |
| size           | `ColorPicker` のサイズ                                                   | `"s"` `"m"` `"l"` `"xl"`  |                                       `"m"`                                        |
| value          | コントロールされた状態の色値 (HEX または HEXA 文字列)                    |         `string`          |                                                                                    |
| defaultValue   | アンコントロールされた状態のデフォルトの色値                               |         `string`          |                                    `"#000000"`                                     |
| onUpdate       | ユーザーが色を更新したときのコールバック。HEX(A) 文字列を受け取ります。          | `(value: string) => void` |                                                                                    |
| popupPlacement | ポップアップの配置                                                   |     `PopupPlacement`      | `['bottom-start', 'bottom-end', 'left-start', 'left-end', 'top-start', 'top-end']` |
| open           | ポップアップの開閉状態をコントロール                                    |         `boolean`         |                                                                                    |
| defaultOpen    | ポップアップのデフォルトの開閉状態                                       |         `boolean`         |                                      `false`                                       |
| onOpenChange   | ポップアップの開閉状態変更のコールバック                               | `(open: boolean) => void` |                                                                                    |
| withAlpha      | HEXA/RGBA モードと透明度スライダーのアルファチャンネルサポートを有効にします |         `boolean`         |                                      `false`                                       |
| compact        | 色の値のテキストを表示せずに、ピッカーボタンのみをレンダリングします   |         `boolean`         |                                      `false`                                       |

## 色の形式

ColorPicker は常に色値を HEX 形式で返します。

- `withAlpha={false}` の場合: 6 桁の HEX (例: `#ff0000`) を返します。
- `withAlpha={true}` の場合: 8 桁の HEXA (例: `#ff0000ff`) を返します。

ピッカーポップアップ内では、ユーザーは HEX と RGB の入力モードを切り替えて、好みの形式で色を入力できます。