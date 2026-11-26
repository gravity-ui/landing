버튼은 특정 동작을 트리거하는 역할을 합니다. 이것이 주된 목적이지만, 매우 드문 경우 다른 페이지로 이동하는 링크로 사용될 수도 있습니다.

```tsx
import {Button} from '@gravity-ui/uikit';
```

## 모양

`Button`에는 모양에 따라 기본, 외곽선, 플랫, 대비의 네 가지 유형이 있습니다.
`Button`의 모양은 `view` 속성으로 결정됩니다.

### 기본

`action`: 가장 눈에 띄는 `Button` 유형입니다. 화면에서 가장 많은 주의를 요구하는 주요 동작에 사용됩니다.
페이지당 이러한 버튼은 하나만 사용하는 것이 좋습니다.

`normal`: 보조 동작을 위해 설계되었거나 너무 많은 주의를 끌지 않고 동작의 중요성을 유지하기 위한 기본 `Button` 유형입니다.

`raised`: 고정된 위치에 있는 플로팅 요소로 콘텐츠 위에 배치됩니다.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### 외곽선

`outlined`: 주의를 덜 요구하는 보조 동작에 사용됩니다. 메인 버튼과 함께 또는 없이 사용할 수 있으며, 전자의 경우 강조된 버튼이어야 합니다.

`outlined-action`: 일반적으로 다른 페이지나 외부 리소스로 연결되는 링크로 사용됩니다.

이 유형에는 추가적인 의미가 필요할 때 사용할 수 있는 의미론적 변형도 있습니다: `outlined-info`, `outlined-success`, `outlined-warning`, `outlined-danger`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### 플랫

`flat`: 가장 적은 주의를 요구하는 보조 동작에 사용됩니다. 종종 버튼 목록이나 편집기의 액션 아이콘(텍스트 없음)에 사용됩니다.

`flat-secondary`: `flat` 버튼보다 덜 강조됩니다. 종종 대화 상자 및 모달 창에서 보조 버튼으로 사용됩니다.

`flat-action`: 일반적으로 다른 페이지나 외부 리소스로 연결되는 링크로 사용됩니다.

추가적인 의미가 필요할 때 사용할 수 있는 의미론적 변형도 있습니다: `outlined-info`, `outlined-success`, `outlined-warning`, `outlined-danger`.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### 대비

`normal-contrast`, `outline-contrast`, `flat-contrast` 버튼은 배너와 같이 복잡한 배경이나 반전된 배경에서 동작을 강조합니다.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## 아이콘

`Button`에 아이콘을 추가하려면 SVG를 위한 특수 래퍼인 [`Icon`](../Icon) 컴포넌트를 사용합니다.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## 상태

`Button`은 다양한 상태를 가질 수 있습니다.

`disabled`: 버튼이 어떤 이유로든 사용할 수 없을 때.

`loading`: 백그라운드에서 비동기 프로세스가 실행 중일 때.

`selected`: 사용자가 버튼을 **활성화** 및 **비활성화**할 수 있을 때.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### 메뉴 트리거

`Button`은 해당 aria-속성(`aria-haspopup`, `aria-expanded`)이 전달될 때 자동으로 모양이 변경됩니다.

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

## 크기

`size` 속성을 사용하여 `Button`의 크기를 관리합니다. 기본 크기는 `m`입니다.

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

## 너비

`width` 속성을 사용하여 컨테이너 내에서 `Button`의 동작 방식을 관리합니다.

`auto`: 말줄임표로 오버플로우되는 콘텐츠를 숨겨 `Button`의 최대 너비를 제한합니다.

`max`: `Button`의 너비를 부모 컨테이너의 너비와 일치시키고, 오버플로우되는 콘텐츠를 말줄임표로 숨깁니다.

GRAVITY_TRANSLATION_BLOCK_17_END

## 핀

`pin` 속성을 사용하면 _시작_ 및 _끝_ 가장자리의 모양을 관리할 수 있으며, 일반적으로 여러 버튼을 하나의 단위로 결합하는 데 사용됩니다.
`pin` 속성 값은 하이픈으로 구분된 _시작_ 및 _끝_ 스타일 이름으로 구성됩니다. 예: `round-brick`.
가장자리 스타일은 `round`(기본값), `circle`, `brick`, `clear`입니다.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

## 속성

`Button`은 다음 외에도 유효한 `button` 또는 `a` 요소 속성을 모두 허용합니다.

| 이름      | 설명                                                              |              타입               |     기본값     |
| :-------- | :---------------------------------------------------------------- | :-----------------------------: | :------------: |
| children  | `Button`의 내용물. 텍스트와 `<Icon/>` 컴포넌트 모두 사용할 수 있습니다. |        `React.ReactNode`        |                |
| component | 루트 컴포넌트를 재정의합니다.                                     |       `React.ElementType`       |                |
| disabled  | `disabled` 상태를 토글합니다.                                     |            `boolean`            |     `false`    |
| href      | 루트 컴포넌트를 링크로 만들려면 이 속성을 전달하세요.              |            `string`             |                |
| loading   | `loading` 상태를 토글합니다.                                      |            `boolean`            |     `false`    |
| pin       | `Button`의 가장자리 스타일을 설정합니다.                           |            `string`             | `"round-round"` |
| qa        | 테스트에 사용되는 `data-qa` HTML 속성입니다.                       |            `string`             |                |
| selected  | `selected` 상태를 토글합니다.                                     |            `boolean`            |                |
| size      | `Button`의 크기를 설정합니다.                                     | `"xs"` `"s"` `"m"` `"l"` `"xl"` |      `"m"`     |
| view      | `Button`의 모양을 설정합니다.                                     |          `ButtonView`           |   `"normal"`   |
| width     | `Button`이 부모의 공간을 사용하는 방식을 제어합니다.                |        `"auto"` `"max"`         |                |

## CSS API

| 이름                                | 설명                |
| :---------------------------------- | :------------------ |
| `--g-button-text-color`             | 텍스트 색상         |
| `--g-button-text-color-hover`       | 호버 시 텍스트 색상 |
| `--g-button-background-color`       | 배경 색상           |
| `--g-button-background-color-hover` | 호버 시 배경 색상   |
| `--g-button-border-width`           | 테두리 너비         |
| `--g-button-border-color`           | 테두리 색상         |
| `--g-button-border-style`           | 테두리 스타일       |
| `--g-button-focus-outline-width`    | 포커스 아웃라인 너비 |
| `--g-button-focus-outline-color`    | 포커스 아웃라인 색상 |
| `--g-button-focus-outline-style`    | 포커스 아웃라인 스타일 |
| `--g-button-focus-outline-offset`   | 포커스 아웃라인 오프셋 |
| `--g-button-height`                 | 높이 (줄 높이)      |
| `--g-button-padding`                | 좌우 패딩           |
| `--g-button-border-radius`          | 테두리 반경         |
| `--g-button-font-size`              | 텍스트 글꼴 크기    |
| `--g-button-icon-space`             | 아이콘 사용 가능 공간 |
| `--g-button-icon-offset`            | 아이콘 오프셋       |