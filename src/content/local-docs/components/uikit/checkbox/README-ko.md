`Checkbox` 컴포넌트를 사용하면 사용자가 특정 값을 선택하거나 선택 해제할 수 있습니다.

```tsx
import {Checkbox} from '@gravity-ui/uikit';
```

## 상태

`Checkbox`는 다양한 상태를 가질 수 있습니다.

- 선택됨 (Checked): 체크박스가 선택된 상태입니다.
- 비활성화됨 (Disabled): 체크박스를 사용할 수 없는 상태입니다.
- 불확정 (Indeterminate): 체크박스가 선택됨과 선택 해제됨 사이의 중간 상태입니다.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 크기

`size` 속성을 사용하여 `Checkbox`의 크기를 관리할 수 있습니다. 기본 크기는 `m`입니다.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 라벨

`content` 속성을 사용하거나 자식 속성으로 제공하여 `Checkbox`에 라벨을 지정할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 속성

| 이름           | 설명                                                                                                  |                     타입                      | 기본값 |
| :------------- | :---------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----: |
| children       | 체크박스 내용 (일반적으로 레이블).                                                                    |                  `ReactNode`                  |         |
| content        | 체크박스 내용 (children의 대안).                                                                      |                  `ReactNode`                  |         |
| disabled       | 체크박스의 `disabled` 상태를 토글합니다.                                                              |                   `boolean`                   | `false` |
| checked        | 체크박스의 `checked` 상태를 토글합니다.                                                               |                   `boolean`                   | `false` |
| defaultChecked | 컴포넌트가 마운트될 때 초기 checked 상태를 설정합니다.                                                |                   `boolean`                   | `false` |
| onUpdate       | 사용자가 체크박스 상태를 변경할 때 발생하며, checked 값을 콜백 인수로 제공합니다.                      |         `(checked: boolean) => void`          |         |
| onChange       | 사용자가 체크박스 상태를 변경할 때 발생하며, 변경 이벤트를 콜백 인수로 제공합니다.                      |                  `Function`                   |         |
| onFocus        | 체크박스 입력 요소가 포커스를 받을 때 사용할 이벤트 핸들러입니다.                                      |                  `Function`                   |         |
| onBlur         | 체크박스 입력 요소가 포커스를 잃을 때 사용할 이벤트 핸들러입니다.                                      |                  `Function`                   |         |
| size           | 체크박스 크기를 결정합니다.                                                                           |                    `m` `l`                    |   `m`   |
| id             | `id` HTML 속성                                                                                        |                   `string`                    |         |
| qa             | 테스트에 사용되는 `data-qa` HTML 속성                                                                 |                   `string`                    |         |
| style          | `style` HTML 속성                                                                                     |             `React.CSSProperties`             |         |
| className      | `class` HTML 속성                                                                                     |                   `string`                    |         |
| title          | `title` HTML 속성                                                                                     |                   `string`                    |         |
| name           | 입력 요소의 `name` HTML 속성입니다.                                                                   |                   `string`                    |         |
| value          | 입력 요소의 `value` HTML 속성입니다.                                                                  |                   `string`                    |         |
| indeterminate  | 체크박스의 `indeterminate` 상태를 토글합니다.                                                         |                   `boolean`                   | `false` |
| controlProps   | 기본 입력 요소에 대한 추가 속성입니다.                                                                | `React.InputHTMLAttributes<HTMLInputElement>` |         |
| controlRef     | 기본 입력 요소에 대한 ref입니다.                                                                      |         `React.Ref<HTMLInputElement>`         |         |