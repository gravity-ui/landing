Accordion 컴포넌트를 사용하면 사용자가 정보 섹션을 표시하거나 숨길 수 있는 접이식 콘텐츠 패널을 만들 수 있습니다. 이는 많은 양의 콘텐츠를 간결하게 구성하는 데 유용합니다.

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

## 아코디언 상태 제어

루트 컴포넌트의 `value` 및 `onUpdate` 속성 또는 각 항목별로 아코디언 상태를 제어할 수 있습니다.

루트 컴포넌트에서 상태를 제어하는 예시:

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

`expanded` 속성을 사용하여 각 항목별로 상태를 제어하는 예시:

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 크기

`size` 속성을 사용하여 `Accordion` 크기를 제어합니다. 기본 크기는 `m`입니다.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 보기

`solid`: 배경이 있는 메인 보기 (기본값).

`top-bottom`: 상단 및 하단 테두리가 있는 보기.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## 화살표 위치

`end`: 헤더 끝에 화살표가 위치합니다 (기본값).

`start`: 헤더 시작에 화살표가 위치합니다.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## 여러 개

`multiple` 속성을 사용하면 여러 아코디언 항목을 동시에 확장할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## 사용자 정의 요약

`Accordion.Summary` 컴포넌트를 사용하여 사용자 정의 헤더를 만듭니다.

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

## 비활성화 상태

`disabled` 속성을 사용하여 개별 아코디언 항목을 비활성화할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

## 속성

### Accordion

| 이름          | 설명                                        |            타입            |  기본값  |
| :------------ | :------------------------------------------ | :------------------------: | :-------: |
| size          | 아코디언 크기                               |     `"m"` `"l"` `"xl"`     |   `"m"`   |
| view          | 아코디언 모양                               |  `"solid"` `"top-bottom"`  | `"solid"` |
| multiple      | 여러 항목을 동시에 확장할 수 있는지 여부     |         `boolean`          |  `false`  |
| arrowPosition | 화살표 표시 위치                            |     `"start"` `"end"`      |  `"end"`  |
| defaultValue  | 제어되지 않는 상태의 기본값                   | `string` `string[]` `null` |           |
| value         | 제어되는 상태의 현재 값                       | `string` `string[]` `null` |           |
| onUpdate      | 상태 변경 시 호출되는 콜백 함수             |         `Function`         |           |
| ariaLevel     | 접근성을 위한 헤딩 레벨                     |          `number`          |    `3`    |
| className     | CSS 클래스 이름                             |          `string`          |           |
| qa            | 테스트에 사용되는 HTML `data-qa` 속성       |          `string`          |           |

### Accordion.Item

| 이름            | 설명                                      |       타입        | 기본값 |
| :-------------- | :---------------------------------------- | :---------------: | :-----: |
| value           | 항목의 고유 식별자                        |     `string`      |         |
| summary         | 아코디언 항목 헤더                        | `React.ReactNode` |         |
| expanded        | 제어되는 확장 상태                        |     `boolean`     |         |
| defaultExpanded | 기본 확장 상태                            |     `boolean`     |         |
| disabled        | 아코디언 항목 비활성화                    |     `boolean`     | `false` |
| keepMounted     | 접혀 있을 때도 콘텐츠를 DOM에 유지        |     `boolean`     |         |
| onUpdate        | 항목 상태 변경 시 호출되는 콜백 함수      |    `Function`     |         |
| className       | CSS 클래스 이름                           |     `string`      |         |
| qa              | 테스트에 사용되는 HTML `data-qa` 속성     |     `string`      |         |

### Accordion.Summary
GRAVITY_TRANSLATION_BLOCK_17_END

| 이름     | 설명                                                                             |                      타입                       |                                          기본값                                          |
| :------- | :-------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | 사용자 정의 요약 렌더링 함수                                                          | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | 테스트에 사용되는 HTML `data-qa` 속성입니다. `Accordion.Item`에 `qa`가 전달된 경우에만 작동합니다. |                    `string`                     | `Accordion.Item`에 `qa`가 전달된 경우 `${accordion-item}-summary`, 그렇지 않은 경우 `disclosure-summary` |

## CSS API

| 이름                           | 설명                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | 아코디언의 인라인(가로) 패딩 |