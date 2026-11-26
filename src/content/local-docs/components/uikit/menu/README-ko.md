`Menu` 컴포넌트를 사용하면 액션 목록에 대한 뷰를 쉽게 만들 수 있습니다.

```tsx
import {Menu} from '@gravity-ui/uikit';
```

항목(`Menu.Item`) 및 그룹(`Menu.Group`)에 대한 전용 컴포넌트가 있습니다. 이들을 조합하여 더 복잡한 메뉴를 만들 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### 크기

이 속성은 메뉴 크기를 선택하는 데 사용됩니다. 기본값은 `m`입니다.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 속성

| 이름      | 설명                                       |           타입           | 기본값 |
| :-------- | :----------------------------------------- | :----------------------: | :-----: |
| size      | 메뉴 크기                                  | `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| children  | 자식 요소                                  |    `React.ReactNode`     |         |
| className | `class` HTML 속성                          |         `string`         |         |
| style     | `style` HTML 속성                          |  `React.CSSProperties`   |         |
| qa        | `data-qa` HTML 속성, 테스트에 사용됨       |         `string`         |         |

## Menu.Item

이 속성은 메뉴 항목을 렌더링하는 데 사용됩니다.

### 아이콘

`iconStart` 또는 `iconEnd` 속성을 사용하여 메뉴 항목의 시작 또는 끝에 아이콘을 표시할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### 상태

이 속성을 사용하여 특정 메뉴 항목을 활성화하거나 비활성화(회색으로 표시)할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### 테마

이를 통해 메뉴 항목 테마를 변경할 수 있습니다. 기본 테마는 `normal`입니다.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

### 속성

| 이름             | 설명                                     |           타입            |  기본값   |
| :--------------- | :--------------------------------------- | :-----------------------: | :--------: |
| iconStart        | 메뉴 항목 텍스트 앞의 아이콘             |        `ReactNode`        |            |
| iconEnd          | 메뉴 항목 텍스트 뒤의 아이콘             |        `ReactNode`        |            |
| selected         | 메뉴 항목 선택 플래그                    |         `boolean`         |  `false`   |
| disabled         | 메뉴 항목 비활성화 플래그                |         `boolean`         |  `false`   |
| active           | 메뉴 항목 활성 플래그                    |         `boolean`         |  `false`   |
| href             | URL                                      |         `string`          |            |
| title            | Title 속성                               |         `string`          |            |
| target           | Target 속성                              |         `string`          |            |
| rel              | Rel 속성                                 |         `string`          |            |
| onClick          | onclick 이벤트 핸들러                    | `React.MouseEventHandler` |            |
| theme            | 메뉴 항목 테마                           |   `"normal"` `"danger"`   | `"normal"` |
| children         | 자식 요소                                |     `React.ReactNode`     |            |
| className        | 루트 요소의 `class` HTML 속성            |         `string`          |            |
| contentClassName | 콘텐츠 요소의 `class` HTML 속성          |         `string`          |            |
| style            | `style` HTML 속성                        |   `React.CSSProperties`   |            |
| qa               | 테스트에 사용되는 `data-qa` HTML 속성    |         `string`          |            |
| extraProps       | 추가 HTML 속성                           |         `Record`          |            |

## Menu.Group

단일 메뉴 내에서 항목을 주제별로 그룹화할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### 속성

| 이름      | 설명                     |         타입          | 기본값 |
| :-------- | :----------------------- | :-------------------: | :----: |
| label     | 메뉴 그룹 레이블         |       `string`        |        |
| children  | 자식 요소                |   `React.ReactNode`   |        |
| className | `class` HTML 속성        |       `string`        |        |
| style     | `style` HTML 속성        | `React.CSSProperties` |        |
| qa        | 테스트에 사용되는 `data-qa` HTML 속성 |       `string`        |        |