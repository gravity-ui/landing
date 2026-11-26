`SegmentedRadioGroup` 컴포넌트는 사용자가 여러 옵션 중에서 하나를 선택할 수 있는 라디오 버튼 그룹을 만드는 데 사용됩니다.

```tsx
import {SegmentedRadioGroup} from '@gravity-ui/uikit';
```

### 비활성화 상태

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### 크기

`size` 속성을 사용하여 `SegmentedRadioGroup`의 크기를 관리합니다. 기본 크기는 `m`입니다.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### 너비

`width` 속성을 사용하여 `SegmentedRadioGroup`의 너비를 관리합니다.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 속성

| 이름         | 설명                                                                                             |                유형                | 기본값 |
| :----------- | :----------------------------------------------------------------------------------------------- | :--------------------------------: | :-----: |
| children     | 라디오 버튼의 내용입니다.                                                                        |            `ReactNode`             |         |
| disabled     | 라디오 버튼의 `disabled` 상태를 토글합니다.                                                      |             `boolean`              | `false` |
| options      | 라디오 버튼의 옵션입니다.                                                                        | `SegmentedRadioGroupOptionProps[]` |         |
| defaultValue | 컴포넌트가 마운트될 때 초기 값 상태를 설정합니다.                                                |              `string`              |         |
| onUpdate     | 사용자가 라디오 버튼 상태를 변경할 때 발생하며, 콜백 인수로 새 값을 제공합니다.                  |     `(value: string) => void`      |         |
| onChange     | 사용자가 라디오 버튼 상태를 변경할 때 발생하며, 콜백 인수로 변경 이벤트를 제공합니다.            |             `Function`             |         |
| onFocus      | 라디오 입력 요소가 포커스를 받을 때 사용할 이벤트 핸들러입니다.                                  |             `Function`             |         |
| onBlur       | 라디오 입력 요소가 포커스를 잃을 때 사용할 이벤트 핸들러입니다.                                  |             `Function`             |         |
| width        | 라디오 버튼의 너비를 설정합니다.                                                                 |            `auto - max`            |         |
| size         | 라디오 버튼의 크기를 설정합니다.                                                                 |          `s` `m` `l` `xl`          |   `m`   |
| name         | 입력 요소의 `name` HTML 속성입니다.                                                              |              `string`              |         |
| qa           | 테스트에 사용되는 `data-qa` HTML 속성입니다.                                                     |              `string`              |         |
| style        | `style` HTML 속성입니다.                                                                         |       `React.CSSProperties`        |         |
| className    | `class` HTML 속성입니다.                                                                         |              `string`              |         |

## SegmentedRadioGroup.Option

`SegmentedRadioGroup` 컴포넌트는 중첩된 `Option` 컴포넌트도 내보냅니다. 이를 사용하여 `SegmentedRadioGroup` 내에서 라디오 버튼 옵션을 만들 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### 속성

| 이름     | 설명                                         |    타입     | 기본값 |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | 라디오의 내용 (일반적으로 레이블).        | `ReactNode` |         |
| content  | 라디오의 내용 (children 대신 사용 가능). | `ReactNode` |         |
| disabled | 라디오의 `disabled` 상태를 토글합니다.          |  `boolean`  | `false` |
| value    | 컨트롤 값                                       |  `string`   |         |