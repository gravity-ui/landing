`Radio` 컴포넌트를 사용하면 사용자는 여러 옵션 중에서 하나만 선택할 수 있습니다.

```tsx
import {Radio} from '@gravity-ui/uikit';
```

## 상태

`Radio`는 다음과 같은 상태를 가질 수 있습니다.

- 선택됨 (Checked): 라디오 버튼이 선택된 상태입니다.
- 비활성화됨 (Disabled): 라디오 버튼을 선택할 수 없는 상태입니다.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 크기

`Radio`의 크기를 관리하려면 `size` 속성을 사용하세요. 기본 크기는 `m`입니다.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 라벨

`content` 속성을 사용하여 `Radio`에 라벨을 지정하거나 자식 속성으로 제공할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 속성

| 이름           | 설명                                                                                                     |                     타입                      | 기본값 |
| :------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----: |
| children       | 라디오의 내용 (일반적으로 레이블).                                                                       |                  `ReactNode`                  |         |
| content        | 라디오의 내용 (children의 대안).                                                                         |                  `ReactNode`                  |         |
| disabled       | 라디오의 `disabled` 상태를 토글합니다.                                                                   |                   `boolean`                   | `false` |
| checked        | 라디오의 `checked` 상태를 토글합니다.                                                                    |                   `boolean`                   | `false` |
| defaultChecked | 컴포넌트가 마운트될 때 초기 checked 상태를 설정합니다.                                                   |                   `boolean`                   | `false` |
| onUpdate       | 사용자가 라디오 상태를 변경할 때 발생하며, checked 값을 콜백 인수로 제공합니다.                           |         `(checked: boolean) => void`          |         |
| onChange       | 사용자가 라디오 상태를 변경할 때 발생하며, 변경 이벤트를 콜백 인수로 제공합니다.                           |                  `Function`                   |         |
| onFocus        | 라디오 입력 요소에 포커스가 맞춰질 때 사용할 이벤트 핸들러입니다.                                        |                  `Function`                   |         |
| onBlur         | 라디오 입력 요소에서 포커스가 벗어날 때 사용할 이벤트 핸들러입니다.                                      |                  `Function`                   |         |
| size           | 라디오의 크기를 설정합니다.                                                                              |                    `m` `l`                    |   `m`   |
| id             | `id` HTML 속성                                                                                           |                   `string`                    |         |
| qa             | `data-qa` HTML 속성, 테스트에 사용됩니다.                                                                |                   `string`                    |         |
| style          | `style` HTML 속성                                                                                        |             `React.CSSProperties`             |         |
| className      | `class` HTML 속성                                                                                        |                   `string`                    |         |
| title          | `title` HTML 속성                                                                                        |                   `string`                    |         |
| name           | 입력 요소의 `name` HTML 속성                                                                             |                   `string`                    |         |
| value          | 제어 값                                                                                                  |                   `string`                    |         |
| indeterminate  | 라디오의 indeterminate 상태를 토글합니다.                                                                |                   `boolean`                   | `false` |
| controlProps   | 기본 input 요소에 대한 추가 속성                                                                         | `React.InputHTMLAttributes<HTMLInputElement>` |         |
| controlRef     | 기본 input 요소에 대한 ref                                                                               |         `React.Ref<HTMLInputElement>`         |         |