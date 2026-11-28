`ActionsPanel`을 사용하여 여러 버튼을 한 줄에 렌더링합니다.
공간이 충분하지 않으면, 맞지 않는 버튼은 오버플로 메뉴에 추가됩니다.
오버플로는 `Menu`를 사용하며, `menu.item`은 `MenuItemProps`를 허용합니다.

## 예시

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## 액션 아이콘

아이콘을 설정하려면 `Button` 또는 `menu.item` 속성을 사용합니다.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## 참고

`renderNote` 속성을 사용하여 노트를 렌더링합니다.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## 오버플로 메뉴의 그룹

오버플로 메뉴에서 액션을 그룹화하려면 `action.menu.group`을 사용합니다.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## 액션 하위 메뉴 및 중첩 메뉴

`menu.item.children`의 직접적인 자식으로 `Menu`를 전달하여 하위 메뉴를 추가합니다. 표시되는 액션 버튼은 동일한 하위 메뉴를 사용합니다.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## 속성

| 이름          | 설명                                               |          Type           | 기본값 |
| :------------ | :------------------------------------------------- | :---------------------: | :----: |
| actions       | 액션 배열                                          |  `ActionsPanelItem[]`   |        |
| onClose       | 선택적 닫기 버튼 클릭 핸들러                       |      `() => void`       |        |
| renderNote    | 노트 내용을 표시하기 위한 선택적 렌더 함수         | `() => React.ReactNode` |        |
| className     | 선택적 HTML `class` 속성                           |        `string`         |        |
| noteClassName | 선택적 HTML `class` 속성                           |        `string`         |        |
| maxRowActions | 한 줄의 최대 액션 수                               |        `number`         |   `4`  |

## ActionsPanelItem

| 이름      | 설명                                       |                  Type                   | 기본값 |
| :-------- | :----------------------------------------- | :-------------------------------------: | :----: |
| id        | 고유 액션 ID                               |                `string`                 |        |
| menu      | 오버플로 메뉴에서의 액션 설정              | `{item: MenuItemProps; group?: string}` |        |
| button    | 액션 버튼 설정                             |         `{props: ButtonProps}`          |        |
| collapsed | true이면, 해당 항목은 항상 오버플로 메뉴에 포함 |                `boolean`                |        |