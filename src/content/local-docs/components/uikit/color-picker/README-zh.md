# ColorPicker

`ColorPicker` 组件允许用户通过交互式颜色选择器界面选择颜色，该界面支持 HEX/RGB 输入模式，并可选支持 Alpha 通道。

选择器会显示一个颜色样本，点击后会打开一个弹出窗口，其中包含：

- 饱和度和亮度选择器
- 色相滑块
- Alpha 滑块（启用时）
- 颜色输入字段（HEX 或 RGB 模式）

## 基本用法

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function BasicColorPicker() {
  const [color, setColor] = React.useState('#ff0000');

  return <ColorPicker value={color} onUpdate={(newColor) => setColor(newColor)} />;
}
```

## 带 Alpha 通道

当启用 `withAlpha` 时，`ColorPicker` 支持 Alpha 透明度。这将添加一个透明度滑块，并将颜色格式切换为 HEXA/RGBA：

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function ColorPickerWithAlpha() {
  const [color, setColor] = React.useState('#ff0000ff');

  return <ColorPicker value={color} onUpdate={(newColor) => setColor(newColor)} withAlpha={true} />;
}
```

## 紧凑模式

对于空间受限的布局，您可以仅渲染颜色样本而不显示颜色值文本：

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

## 受控和非受控状态

`ColorPicker` 支持受控和非受控的使用模式：

```jsx
// 非受控
<ColorPicker
  defaultValue="#ffbe5c"
  onUpdate={(color) => console.log('Color changed:', color)}
/>

// 受控
<ColorPicker
  value={color}
  onUpdate={setColor}
/>
```

您还可以控制选择器弹出窗口的打开状态：

```jsx
// 受控的打开状态
<ColorPicker value={color} open={isOpen} onOpenChange={setIsOpen} onUpdate={setColor} />
```

## 属性

| 名称           | 描述                                                                 |           类型            |                                      默认值                                       |
| :------------- | :------------------------------------------------------------------- | :-----------------------: | :--------------------------------------------------------------------------------: |
| size           | `ColorPicker` 的大小                                                 | `"s"` `"m"` `"l"` `"xl"`  |                                       `"m"`                                        |
| value          | 受控状态的颜色值 (HEX 或 HEXA 字符串)                                 |         `string`          |                                                                                    |
| defaultValue   | 非受控状态的默认颜色值                                               |         `string`          |                                    `"#000000"`                                     |
| onUpdate       | 用户更新颜色时的回调。接收一个 HEX(A) 字符串。                       | `(value: string) => void` |                                                                                    |
| popupPlacement | 弹出窗口的放置位置                                                   |     `PopupPlacement`      | `['bottom-start', 'bottom-end', 'left-start', 'left-end', 'top-start', 'top-end']` |
| open           | 控制弹出窗口打开/关闭的状态                                          |         `boolean`         |                                                                                    |
| defaultOpen    | 弹出窗口打开/关闭的默认状态                                          |         `boolean`         |                                      `false`                                       |
| onOpenChange   | 弹出窗口打开/关闭状态更改的回调                                      | `(open: boolean) => void` |                                                                                    |
| withAlpha      | 为 HEXA/RGBA 模式和透明度滑块启用 alpha 通道支持                     |         `boolean`         |                                      `false`                                       |
| compact        | 仅渲染拾色器按钮，不显示颜色值文本                                   |         `boolean`         |                                      `false`                                       |

## 颜色格式

ColorPicker 始终以 HEX 格式返回颜色值：

- 当 `withAlpha={false}` 时：返回 6 位 HEX (例如，`#ff0000`)
- 当 `withAlpha={true}` 时：返回 8 位 HEXA (例如，`#ff0000ff`)

在拾色器弹出窗口内部，用户可以在 HEX 和 RGB 输入模式之间切换，以他们喜欢的格式输入颜色。