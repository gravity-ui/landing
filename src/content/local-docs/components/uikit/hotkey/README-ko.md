`Hotkey` 컴포넌트를 사용하여 Mac 및 PC 모두에 대한 키보드 단축키를 표시할 수 있습니다.

```tsx
import {Hotkey} from '@gravity-ui/uikit';
```

### 값

키보드 단축키는 `<key>+<key>` 형식으로 설정됩니다. 즉, 더하기 기호로 구분된 여러 키를 지정해야 합니다. 예: `shift+tab`.

키 조합의 순서는 공백으로 구분할 수 있습니다: `<shortcut> <shortcut>`, 예: `ctrl+a ctrl+c ctrl+v`.

`mod`를 Mac의 `cmd` 및 기타 플랫폼의 `ctrl`에 대한 약어로 사용할 수 있습니다. 예를 들어, `mod+v`는 Mac의 경우 ⌘+A, PC의 경우 Ctrl+A로 렌더링됩니다.

### 보기

`light`: 밝은 배경에 컴포넌트가 표시될 때 사용됩니다 (기본값).

`dark`: 어두운 배경에 컴포넌트가 표시될 때 사용됩니다.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### 플랫폼

`pc`: 일반 PC 키보드에 대한 키보드 단축키를 표시하는 데 사용됩니다.

`mac`: Macintosh 키보드에 대한 키보드 단축키를 표시하는 데 사용됩니다.

기본적으로 플랫폼은 자동으로 감지됩니다.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 속성

| 이름      | 설명                                                                    |         유형          |        기본값         |
| :-------- | :---------------------------------------------------------------------- | :-------------------: | :--------------------: |
| view      | 색상 구성표 설정에 사용                                                   |  `"light"` `"dark"`   |       `"light"`        |
| platform  | 키보드 단축키를 표시할 플랫폼 (PC 또는 Macintosh) 선택에 사용                 |    `"pc"` `"mac"`     | 자동으로 감지됨 |
| title     | 키보드 단축키 값                                                        |       `string`        |                        |
| style     | HTML 스타일 속성                                                        | `React.CSSProperties` |                        |
| className | 알림 클래스 이름                                                        |       `string`        |                        |