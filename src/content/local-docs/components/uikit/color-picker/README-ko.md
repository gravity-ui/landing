# ColorPicker

`ColorPicker` 컴포넌트를 사용하면 HEX/RGB 입력 모드와 선택적 알파 채널 지원을 갖춘 대화형 색상 선택기 인터페이스를 통해 색상을 선택할 수 있습니다.

선택기는 색상 견본을 표시하며, 이 견본을 클릭하면 팝업이 열립니다. 팝업에는 다음이 포함됩니다.

- 채도 및 밝기 선택기
- 색조 슬라이더
- 알파 슬라이더 (활성화된 경우)
- 색상 입력 필드 (HEX 또는 RGB 모드)

## 기본 사용법

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function BasicColorPicker() {
  const [color, setColor] = React.useState('#ff0000');

  return <ColorPicker value={color} onUpdate={(newColor) => setColor(newColor)} />;
}
```

## 알파 채널 포함

`ColorPicker`는 `withAlpha`가 활성화된 경우 알파 투명도를 지원합니다. 이렇게 하면 투명도 슬라이더가 추가되고 HEXA/RGBA 색상 형식으로 전환됩니다.

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function ColorPickerWithAlpha() {
  const [color, setColor] = React.useState('#ff0000ff');

  return <ColorPicker value={color} onUpdate={(newColor) => setColor(newColor)} withAlpha={true} />;
}
```

## 컴팩트 모드

공간이 제한된 레이아웃의 경우 색상 값 텍스트를 표시하지 않고 색상 견본만 렌더링할 수 있습니다.

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

## 제어 및 비제어 상태

`ColorPicker`는 제어 및 비제어 사용 패턴을 모두 지원합니다.

```jsx
// 비제어
<ColorPicker
  defaultValue="#ffbe5c"
  onUpdate={(color) => console.log('Color changed:', color)}
/>

// 제어
<ColorPicker
  value={color}
  onUpdate={setColor}
/>
```

선택기 팝업의 열린 상태도 제어할 수 있습니다.

```jsx
// 제어된 열린 상태
<ColorPicker value={color} open={isOpen} onOpenChange={setIsOpen} onUpdate={setColor} />
```

## 속성

| 이름           | 설명                                                                 |           타입            |                                      기본값                                       |
| :------------- | :------------------------------------------------------------------- | :-----------------------: | :--------------------------------------------------------------------------------: |
| size           | `ColorPicker`의 크기                                                 | `"s"` `"m"` `"l"` `"xl"`  |                                       `"m"`                                        |
| value          | 제어된 상태의 색상 값 (HEX 또는 HEXA 문자열)                          |         `string`          |                                                                                    |
| defaultValue   | 제어되지 않은 상태의 기본 색상 값                                    |         `string`          |                                    `"#000000"`                                     |
| onUpdate       | 사용자가 색상을 업데이트할 때 콜백. HEX(A) 문자열을 받습니다.         | `(value: string) => void` |                                                                                    |
| popupPlacement | 팝업의 배치                                                          |     `PopupPlacement`      | `['bottom-start', 'bottom-end', 'left-start', 'left-end', 'top-start', 'top-end']` |
| open           | 팝업 열기/닫기 제어 상태                                             |         `boolean`         |                                                                                    |
| defaultOpen    | 팝업 열기/닫기 기본 상태                                             |         `boolean`         |                                      `false`                                       |
| onOpenChange   | 팝업 열기/닫기 상태 변경 콜백                                        | `(open: boolean) => void` |                                                                                    |
| withAlpha      | HEXA/RGBA 모드 및 투명도 슬라이더에 대한 알파 채널 지원 활성화       |         `boolean`         |                                      `false`                                       |
| compact        | 색상 값 텍스트를 표시하지 않고 피커 버튼만 렌더링합니다.             |         `boolean`         |                                      `false`                                       |

## 색상 형식

ColorPicker는 항상 HEX 형식으로 색상 값을 반환합니다.

- `withAlpha={false}`일 때: 6자리 HEX (예: `#ff0000`)를 반환합니다.
- `withAlpha={true}`일 때: 8자리 HEXA (예: `#ff0000ff`)를 반환합니다.

피커 팝업 내에서 사용자는 선호하는 형식으로 색상을 입력하기 위해 HEX 및 RGB 입력 모드 간에 전환할 수 있습니다.