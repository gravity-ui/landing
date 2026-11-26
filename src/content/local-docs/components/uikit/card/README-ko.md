`Card`는 사용자 정의 스타일과 기능을 갖춘 카드 모양의 컨테이너인 재사용 가능한 React 컴포넌트입니다. 정보를 시각적으로 매력적이고 잘 구성된 방식으로 표시하는 데 사용됩니다.

```tsx
import {Card} from '@gravity-ui/uikit';
```

## 모양

`Card`는 여러 스타일 조합으로 표시될 수 있습니다.

- `theme`: `normal`, `info`, `success`, `warning`, `danger` 또는 `utility`.
- `type`: `selection`, `action` 또는 `container`.
- `view`: `outlined` 또는 `clear`, 또는 `outlined`, `filled`, `raised` (`type` 매개변수에 따라 다름).

## 테마

이 매개변수는 카드의 테마 스타일을 지정하는 데 사용됩니다. 카드의 색상 구성표와 모양을 결정합니다.

다양한 테마 값을 지정하여 `Card`의 시각적 모양을 목적과 필요한 스타일에 맞게 사용자 정의할 수 있습니다.

- `normal`: 카드의 일반/기본 테마입니다.
- `info`: 중립적인 정보를 표시하기 위한 테마입니다.
- `success`: 긍정적이거나 긍정적인 콘텐츠를 표시하기 위한 테마입니다.
- `warning`: 경고를 표시하기 위한 테마입니다.
- `danger`: 중요한 문제 또는 오류와 관련된 콘텐츠를 표시하기 위한 테마입니다.
- `utility`: 유용한 팁을 표시하기 위한 테마입니다.

GRAVITY_TRANSLATION_BLOCK_0_END

## 타입

이 매개변수는 `Card` 컴포넌트의 유형을 정의하는 데 사용됩니다. 카드의 모양과 동작을 사용자 정의할 수 있습니다.

- `container`: 다른 요소를 위한 컨테이너 역할을 하는 카드입니다. 콘텐츠에 대한 구조화된 레이아웃을 제공합니다.
- `action`: 클릭 시 동작을 트리거하는 버튼과 같은 대화형 요소가 있는 카드입니다.
- `selection`: 특정 작업을 수행하기 위해 선택하거나 클릭할 수 있는 카드입니다.

GRAVITY_TRANSLATION_BLOCK_1_END

## 뷰

이 매개변수는 `Card`의 뷰 또는 레이아웃 스타일을 지정하는 데 사용됩니다. 카드의 모양과 콘텐츠 배열을 사용자 정의할 수 있습니다.

- `clear`: 스타일 없음.
- `outlined`: 카드 콘텐츠를 강조하기 위해 얇은 테두리를 적용합니다.
- `filled`: 카드 콘텐츠를 채웁니다.
- `raised`: 컨테이너를 약간 들어 올리기 위해 그림자를 적용합니다.

GRAVITY_TRANSLATION_BLOCK_2_END

## 속성

| 이름      | 설명                                                                                       |    타입     |    기본값    |
| :-------- | :------------------------------------------------------------------------------------------------ | :---------: | :-----------: |
| children  | 카드 콘텐츠                                                                                      | `ReactNode` |               |
| type      | `Card` 타입은 사용 가능한 속성을 결정합니다.                                        |  `string`   | `"container"` |
| view      | 이 속성은 `"container"` 및 `"selection"` `type`에만 사용할 수 있습니다.                  |  `string`   | `"outlined"`  |
| theme     | 카드의 기본 색상입니다. 이 속성은 `"container"` `type`에만 사용할 수 있습니다.                  |  `string`   |  `"normal"`   |
| size      | `Card` 크기는 사용 가능한 속성을 결정합니다.                                        |  `string`   |     `"m"`     |
| className | CSS 클래스                                                                                         |  `string`   |               |
| onClick   | 카드 클릭 핸들러입니다. 이 속성은 `"selection"` 및 `"action"` `type`에만 사용할 수 있습니다. | `Function`  |               |
| selected  | 선택된 카드입니다. 이 속성은 `"selection"` `type`에만 사용할 수 있습니다.                      |  `Boolean`  |               |
| disabled  | 비활성화된 카드입니다. 이 속성은 `"selection"` 및 `"action"` `type`에만 사용할 수 있습니다.      |  `Boolean`  |               |
| qa        | 테스트에 사용되는 `data-qa` HTML 속성                                                        |  `string`   |               |

## CSS API

| 이름                        | 설명      |
| :-------------------------- | :--------------- |
| `--g-card-background-color` | 배경색 |
| `--g-card-border-width`     | 테두리 두께     |
| `--g-card-border-color`     | 테두리 색상     |
| `--g-card-border-radius`    | 테두리 반경    |
| `--g-card-box-shadow`       | 그림자           |

GRAVITY_TRANSLATION_BLOCK_3_END