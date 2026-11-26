`RadioGroup` 컴포넌트는 여러 옵션 중에서 사용자가 하나의 옵션을 선택할 수 있는 그룹을 만드는 데 사용됩니다.

```tsx
import {RadioGroup} from '@gravity-ui/uikit';
```

### 비활성화 상태

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### 크기

`size` 속성을 사용하여 `RadioGroup`의 크기를 관리합니다. 기본 크기는 `m`입니다.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### 방향

`direction` 속성을 사용하여 `RadioGroup`의 방향을 관리합니다. 기본 방향은 `horizontal`입니다.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## 속성

| 이름            | 설명                                                                                       |           타입            |    기본값     |
| :-------------- | :------------------------------------------------------------------------------------------------ | :-----------------------: | :------------: |
| children        | 라디오 그룹의 내용.                                                                   |        `ReactNode`        |                |
| disabled        | 라디오 그룹의 `disabled` 상태를 토글합니다.                                                  |         `boolean`         |    `false`     |
| options         | 라디오 그룹의 옵션.                                                                          |   `RadioGroupOption[]`    |                |
| optionClassName | 라디오 자식에 대한 `class` HTML 속성.                                                    |         `string`          |                |
| direction       | 라디오 그룹의 방향을 결정합니다.                                                      |  `horizontal - vertical`  | `"horizontal"` |
| defaultValue    | 컴포넌트가 마운트될 때 초기 값 상태를 설정합니다.                                       |         `string`          |                |
| onUpdate        | 사용자가 라디오 상태를 변경할 때 발생하며, 새로운 값을 콜백 인수로 제공합니다.    | `(value: string) => void` |                |
| onChange        | 사용자가 라디오 상태를 변경할 때 발생하며, 변경 이벤트를 콜백 인수로 제공합니다. |        `Function`         |                |
| size            | 라디오 그룹의 크기를 결정합니다.                                                           |          `m` `l`          |      `m`       |
| qa              | 테스트에 사용되는 `data-qa` HTML 속성                                                        |         `string`          |                |
| style           | `style` HTML 속성                                                                            |   `React.CSSProperties`   |                |
| className       | `class` HTML 속성                                                                            |         `string`          |                |

## RadioGroup.Option

`RadioGroup` 컴포넌트는 `Radio`와 동등한 중첩된 `Option` 컴포넌트도 내보내며, 이를 사용하여 `RadioGroup` 내에서 라디오 옵션을 만들 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### 속성

| 이름     | 설명                                         |    타입     | 기본값 |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | 라디오의 내용 (일반적으로 레이블).        | `ReactNode` |         |
| content  | 라디오의 내용 (children의 대안). | `ReactNode` |         |
| disabled | 라디오의 `disabled` 상태를 토글합니다.          |  `boolean`  | `false` |
| value    | 제어 값                                       |  `string`   |         |