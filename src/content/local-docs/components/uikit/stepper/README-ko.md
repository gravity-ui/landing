`Stepper`는 마법사 스타일의 다단계 워크플로에서 진행 상황을 보여주며 사용자를 번호가 매겨진 단계 시퀀스를 안내합니다.

```tsx
import {Stepper} from '@gravity-ui/uikit';
```

## 예시

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### 인터랙티브 항목

`onUpdate` 및 `value` 속성을 사용자 지정 상태와 함께 사용하여 단계를 조작합니다.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### 다양한 보기

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### 다양한 크기

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### 비활성화된 단계

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### 사용자 지정 아이콘

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### 사용자 지정 단계 구분 기호

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### 플로팅 요소가 있는 단계

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## 속성

| 이름             | 설명                                               |                  유형                  | 기본값 |
| :--------------- | :-------------------------------------------------------- | :------------------------------------: | :-----: |
| children         | Stepper 항목.                                            | `React.ReactElement<StepperItemProps>` |         |
| size             | `Step` 크기를 설정합니다.                                      |           `"s"` `"m"` `"l"`            |  `"s"`  |
| value            | 현재 선택된 `Step` ID.                               |           `number` `string`            |         |
| onUpdate         | 현재 `Step` 변경을 위한 함수입니다.                       |               `Function`               |         |
| qa               | 테스트에 사용되는 `data-qa` HTML 속성입니다.               |                `string`                |         |
| separator        | 사용자 지정 구분 기호 노드입니다.                                    |           `React.ReactNode`            |         |
| className        | Steps 컨테이너의 CSS 클래스 이름입니다.                   |                `string`                |         |
| style            | Steps 컨테이너의 인라인 스타일을 설정합니다.            |            `CSSProperties`             |         |
| aria-label       | 현재 요소를 레이블링하는 문자열 값을 정의합니다.   |                `string`                |         |
| aria-labelledby  | 현재 요소를 레이블링하는 요소를 식별합니다. |                `string`                |         |
| aria-describedby | 객체를 설명하는 요소를 식별합니다.       |                `string`                |         |

### StepperItemProps

| 이름      | 설명                                       |              유형              | 기본값  |
| :-------- | :------------------------------------------------ | :----------------------------: | :------: |
| id        | `Step` ID를 설정합니다. 배열 요소의 인덱스가 기본값입니다. |       `string` `number`        |          |
| view      | `Step` 보기를 설정합니다.                                  | `"idle"` `"error"` `"success"` | `"idle"` |
| children  | `Step` 내용입니다.                                   |          `React.Node`          |          |
| disabled  | `Step` 비활성화 여부를 결정합니다.             |           `boolean`            |          |
| icon      | 사용자 지정 아이콘 노드입니다.                                 |         `SVGIconData`          |          |
| onClick   | Step 클릭 핸들러입니다.                               |   `React.MouseEventHandler`    |          |
| className | 요소의 CSS 클래스 이름입니다.                   |            `string`            |          |

### CSS API

| 이름                              | 설명                                     |
| :-------------------------------- | :--------------------------------------- |
| `--g-stepper-gap`                 | 스텝 항목과 구분선 사이의 간격입니다. |
| `--g-stepper-item-text-max-width` | 스텝 항목 텍스트의 최대 너비입니다.   |