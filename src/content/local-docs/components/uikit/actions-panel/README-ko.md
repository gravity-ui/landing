GRAVITY_TRANSLATION_BLOCK_0_END

`ActionsPanel`을 사용하여 여러 버튼을 한 줄에 렌더링합니다.
공간이 충분하지 않으면, 맞지 않는 버튼은 오버플로 메뉴에 추가됩니다.

## 예시

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 액션 아이콘

`Button` 또는 `DropdownMenu` 속성을 사용하여 아이콘을 설정합니다.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 참고

`renderNote` 속성을 사용하여 노트를 렌더링합니다.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 드롭다운 메뉴의 그룹

드롭다운 메뉴에서 액션을 그룹화하려면 `action.dropdown.group`을 사용합니다.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## 액션 하위 메뉴 및 중첩된 드롭다운 메뉴

아래 `actions` 예시와 `DropdownMenu` 컴포넌트에 대한 문서를 참조하세요.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## 속성

| 이름          | 설명                                       |          타입           | 기본값 |
| :------------ | :----------------------------------------- | :---------------------: | :----: |
| actions       | 액션 배열                                  |  `ActionsPanelItem[]`   |        |
| onClose       | 선택적 닫기 버튼 클릭 핸들러               |      `() => void`       |        |
| renderNote    | 노트 내용을 표시하기 위한 선택적 렌더 함수 | `() => React.ReactNode` |        |
| className     | 선택적 HTML `class` 속성                   |        `string`         |        |
| noteClassName | 선택적 HTML `class` 속성                   |        `string`         |        |
| maxRowActions | 한 줄에 표시할 최대 액션 수                |        `number`         |   `4`  |

## ActionsPanelItem:

| 이름      | 설명                                   |                    타입                    | 기본값 |
| :-------- | :------------------------------------- | :----------------------------------------: | :----: |
| id        | 고유 액션 ID                           |                  `string`                  |        |
| dropdown  | 오버플로 메뉴의 드롭다운 액션 설정     | `{item: DropdownMenuItem; group?: string}` |        |
| button    | 버튼 액션 설정                         |           `{props: ButtonProps}`           |        |
| collapsed | true이면, 해당 항목은 항상 드롭다운 안에 포함 |                 `boolean`                  |        |