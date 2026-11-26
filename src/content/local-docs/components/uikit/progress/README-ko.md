`Progress` 컴포넌트는 현재 작업 진행률을 표시합니다. 섹션으로 나눌 수도 있습니다.

```tsx
import {Progress} from '@gravity-ui/uikit';
```

## 테마

`theme` 속성을 사용하여 전체 진행률 또는 복합 부분의 색상을 지정합니다.

GRAVITY_TRANSLATION_BLOCK_0_END

`theme` 속성은 다음 값을 가질 수 있습니다: `"default"`, `"success"`, `"warning"`, `"danger"`.

## 상태

GRAVITY_TRANSLATION_BLOCK_1_END

`Progress` 컴포넌트는 다음 상태를 지원합니다: `"default"`, `"loading"`, `"finished"`, `"error"`.

GRAVITY_TRANSLATION_BLOCK_2_END

## 크기

`Progress` 컴포넌트의 크기를 관리하려면 `"xs"`, `"s"`, `"m"` 값을 가질 수 있는 `size` 속성을 사용합니다. `text` 속성은 `"m"` 크기에서만 작동합니다.

GRAVITY_TRANSLATION_BLOCK_3_END

`size` 속성은 다음 값을 가질 수 있습니다: `"xs"`, `"s"`, `"m"`.

GRAVITY_TRANSLATION_BLOCK_4_END

## 중단점

`colorStops` 속성을 사용하여 `Progress` 컴포넌트의 중단점을 설정합니다.

GRAVITY_TRANSLATION_BLOCK_5_END

`colorStops`는 `Progress` 컴포넌트의 색상 변경 지점을 정의하는 배열입니다. 각 요소는 백분율 값과 해당 색상을 나타내는 객체입니다.

GRAVITY_TRANSLATION_BLOCK_6_END

선택적 `color` 속성을 사용하여 테마 색상을 재정의합니다.

GRAVITY_TRANSLATION_BLOCK_7_END

`color` 속성은 문자열로, `Progress` 컴포넌트의 색상을 직접 지정합니다.

GRAVITY_TRANSLATION_BLOCK_8_END

## 스택

GRAVITY_TRANSLATION_BLOCK_9_END

`Stack` 컴포넌트는 여러 `Progress` 컴포넌트를 수직으로 쌓는 데 사용됩니다.

GRAVITY_TRANSLATION_BLOCK_10_END

## 속성

GRAVITY_TRANSLATION_BLOCK_11_END

| 속성 | 설명 | 타입 | 기본값 |
|---|---|---|---|
| `value` | 진행률 값 (0-100) | `number` | `0` |
| `theme` | 진행률의 테마 색상 | `"default"`, `"success"`, `"warning"`, `"danger"` | `"default"` |
| `size` | 진행률 컴포넌트의 크기 | `"xs"`, `"s"`, `"m"` | `"m"` |
| `text` | 진행률 텍스트 (size="m"에서만 작동) | `string` | `undefined` |
| `colorStops` | 색상 중단점 배열 | `{ value: number; color: string }[]` | `undefined` |
| `color` | 테마 색상 재정의 | `string` | `undefined` |
| `states` | 진행률 컴포넌트의 상태 | `"default"`, `"loading"`, `"finished"`, `"error"` | `"default"` |

GRAVITY_TRANSLATION_BLOCK_12_END

| 이름            | 설명                                                                                                                            |                          타입                          | 기본값 |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------: | :----: |
| className       | HTML `class` 속성                                                                                                               |                        `string`                        |        |
| colorStops      | 테마로 중단점을 설정합니다.                                                                                                     | `Array<{theme: string; stop: number; color?: string}>` |        |
| colorStopsValue | `colorStops`에 대한 현재 중단점 또는 대체 값을 선택하는 값을 설정합니다. 사용 가능한 범위는 0에서 100까지입니다.                     |                        `number`                        |        |
| loading         | `loading` 상태를 토글합니다.                                                                                                    |                       `boolean`                        | `false` |
| size            | 진행률 표시줄 크기를 설정합니다. 진행률 표시줄 텍스트는 `"m"` 크기에서만 표시할 수 있습니다.                                       |                        `string`                        |  `"m"`  |
| stack           | 복합 진행률 표시줄의 구성입니다. `value`가 제공되면 필요하지 않습니다.                                                            |                     `Array<Stack>`                     |        |
| stackClassName  | 스택의 HTML `class` 속성                                                                                                        |                        `string`                        |        |
| text            | 진행률 표시줄 내부의 텍스트                                                                                                     |                      `ReactNode`                       |        |
| theme           | 진행률 색상을 설정합니다.                                                                                                       |                        `string`                        | `"default"` |
| value           | 현재 진행률 값입니다. 사용 가능한 범위는 0에서 100까지입니다. `stack` 속성 값을 사용하는 것은 선택 사항이며 `maxValue`로 사용됩니다. |                        `number`                        |        |

### `Stack`

| 이름      | 설명                                                                                                                            |    타입     |   기본값   |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------ | :---------: | :---------: |
| className | 스택 요소의 `class` HTML 속성                                                                                                   |  `string`   |             |
| color     | `style` HTML 속성의 배경색 설정                                                                                                 |  `string`   |             |
| content   | 스택 요소 내용                                                                                                                  | `ReactNode` |             |
| title     | `title` HTML 속성                                                                                                               |  `string`   |             |
| theme     | 스택 요소 색상 설정                                                                                                             |  `string`   | `"default"` |
| value     | 현재 진행률 값. 사용 가능한 범위는 0에서 100까지입니다. `stack` 속성 값 사용은 선택 사항이며 `maxValue`로 사용됩니다. |  `number`   |             |
| qa        | 테스트에 사용되는 `data-qa` HTML 속성                                                                                           |  `string`   |             |

## CSS API

| 이름                                   | 설명                        |
| :------------------------------------- | :-------------------------- |
| `--g-progress-empty-text-color`        | 빈 `Progress` 텍스트 색상   |
| `--g-progress-filled-text-color`       | 채워진 `Progress` 텍스트 색상 |
| `--g-progress-empty-background-color`  | 빈 `Progress` 배경색        |
| `--g-progress-filled-background-color` | 채워진 `Progress` 배경색    |