```tsx
import {TextInput} from '@gravity-ui/uikit';
```

TextInput позволяет пользователю вводить текст в интерфейс.

## Внешний вид

Внешний вид `TextInput` управляется свойствами `view` и `pin`.

### View

`normal` - основной вид `TextInput` (используется по умолчанию).

GRAVITY_TRANSLATION_BLOCK_1_END

`clear` - может использоваться с пользовательским обертыванием для `TextInput`.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Pin

Позволяет управлять видом правого и левого краев границы `TextInput`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Состояния

### Disabled

Состояние `TextInput`, при котором пользователь не может взаимодействовать с компонентом.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Error

Состояние `TextInput`, в котором вы хотите указать на некорректный ввод пользователя. Чтобы изменить внешний вид `TextInput`, используйте свойство `validationState` со значением `"invalid"`. Дополнительный текст сообщения можно добавить через свойство `errorMessage`. По умолчанию текст сообщения отображается вне компонента.
Это поведение можно изменить с помощью свойства `errorPlacement`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Размер

`s` – используется, когда стандартные элементы управления слишком велики (таблицы, небольшие карточки).

`m` – базовый размер, используется в большинстве компонентов.

`l` – базовые элементы управления, используемые в заголовке страницы, модальных окнах или всплывающих окнах.

`xl` – используется на промо-страницах и лендингах.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Метка

Позволяет установить метку слева от элемента управления.

- Метка занимает крайнее левое положение относительно элемента управления. То есть элементы, добавленные через свойство `startContent`, будут расположены справа.
- Метка может занимать не более половины ширины всего пространства `TextInput`.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Дополнительный контент

### Start content

Позволяет добавить контент слева от элемента управления (или справа при использовании [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL)). Располагается слева (или справа при использовании rtl) от метки, добавленной через свойство `label`.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

### End content

Позволяет добавить контент справа от элемента управления (или слева при использовании [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL)). Располагается справа (или слева при использовании rtl) от кнопки очистки, добавленной через свойство `hasClear`.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

## Свойства

| 이름            | 설명                                                                                                             |     타입      | 기본값 |
| :-------------- | :--------------------------------------------------------------------------------------------------------------- | :-----------: | :----: |
| autoComplete    | 컨트롤의 `autocomplete` 속성                                                                                    | `boolean` `string` |        |
| autoFocus       | 컨트롤의 `autofocus` 속성                                                                                       |   `boolean`   |        |
| className       | 컨트롤의 래퍼 클래스 이름                                                                                        |   `string`    |        |
| controlProps    | 컨트롤의 html 속성                                                                                               | `React.InputHTMLAttributes<HTMLInputElement>` |        |
| controlRef      | 컨트롤에 제공된 React ref                                                                                        | `React.Ref<HTMLInputElement>` |        |
| defaultValue    | 컨트롤의 기본값, 컴포넌트가 제어되지 않을 때 사용                                                                |   `string`    |        |
| disabled        | 사용자가 컨트롤과 상호작용할 수 없음을 나타냅니다.                                                               | `React.ReactNode` |        |
| endContent      | 입력 노드, 지우기 버튼 및 오류 아이콘 뒤에 렌더링되는 사용자 노드                                                  |   `string`    |        |
| errorMessage    | 오류 텍스트                                                                                                      |   `string`    |        |
| errorPlacement  | 오류 배치                                                                                                        | `outside` `inside` | `outside` |
| hasClear        | 컨트롤 값 지우기 아이콘 표시                                                                                     |   `boolean`   | `false` |
| id              | 컨트롤의 `id` 속성                                                                                               |   `string`    |        |
| label           | 입력 노드 왼쪽에 렌더링되는 도움말 텍스트                                                                        |   `string`    |        |
| name            | 컨트롤의 `name` 속성. 지정되지 않은 경우, 지정되지 않으면 자동으로 생성됩니다.                                     |   `string`    |        |
| note            | 오류 컨테이너와 공간을 공유하는 컨트롤의 오른쪽 하단 모서리 아래에 표시되는 선택적 요소                           | `React.ReactNode` |        |
| onBlur          | 컨트롤이 포커스를 잃을 때 발생합니다. 콜백의 인수로 포커스 이벤트를 제공합니다.                                  |   `function`  |        |
| onChange        | 사용자가 입력 값을 변경할 때 발생합니다. 콜백의 인수로 변경 이벤트를 제공합니다.                                  |   `function`  |        |
| onFocus         | 컨트롤이 포커스를 얻을 때 발생합니다. 콜백의 인수로 포커스 이벤트를 제공합니다.                                    |   `function`  |        |
| onKeyDown       | 키가 눌릴 때 발생합니다. 콜백의 인수로 키보드 이벤트를 제공합니다.                                                |   `function`  |        |
| onKeyUp         | 키가 릴리스될 때 발생합니다. 콜백의 인수로 키보드 이벤트를 제공합니다.                                            |   `function`  |        |
| onUpdate        | 사용자가 입력 값을 변경할 때 발생합니다. 콜백의 인수로 새 값을 제공합니다.                                        |   `function`  |        |
| pin             | 컨트롤의 테두리 보기                                                                                             |   `string`    | `'round-round'` |
| placeholder     | 값이 설정되지 않았을 때 컨트롤에 나타나는 텍스트                                                                  |   `string`    |        |
| qa              | 테스트 ID 속성 (`data-qa`)                                                                                       |   `string`    |        |
| readOnly        | 사용자가 컨트롤 값을 변경할 수 없음을 나타냅니다.                                                                |   `boolean`   | `false` |
| size            | 컨트롤의 크기                                                                                                    | `"s"` `"m"` `"l"` `"xl"` | `"m"` |
| startContent    | 레이블 및 입력 노드 앞에 렌더링되는 사용자 노드                                                                    | `React.ReactNode` |        |
| tabIndex        | 컨트롤의 `tabindex` 속성                                                                                         |   `string`    |        |
| type            | 컨트롤의 타입                                                                                                    | `"email"` `"number"` `"password"` `"search"` `"tel"` `"text"` `"url"` |        |
| validationState | 유효성 검사 상태                                                                                                 | `"invalid"`   |        |
| value           | 컨트롤의 값                                                                                                      |   `string`    |        |
| view            | 컨트롤의 보기                                                                                                    | `"normal"` `"clear"` | `"normal"` |

## CSS API

| 이름                                 | 설명                                         |
| :----------------------------------- | :-------------------------------------------------- |
| `--g-text-input-text-color`          | 텍스트 색상                                          |
| `--g-text-input-label-color`         | 레이블 색상                                        |
| `--g-text-input-placeholder-color`   | 플레이스홀더 색상                                   |
| `--g-text-input-background-color`    | 배경 색상                                    |
| `--g-text-input-border-radius`       | 테두리 반경                                       |
| `--g-text-input-border-width`        | 테두리 너비                                        |
| `--g-text-input-border-color`        | 테두리 색상                                        |
| `--g-text-input-border-color-hover`  | 호버 시 테두리 색상                             |
| `--g-text-input-border-color-active` | 활성 시 테두리 색상                              |
| `--g-text-input-focus-outline-color` | 포커스 시 윤곽선 색상 (기본적으로 표시되지 않음) |