GRAVITY_TRANSLATION_BLOCK_0_END

이 컴포넌트는 애플리케이션 내에서 탐색 요소, 액션 및 정보 콘텐츠를 표준화된 레이아웃으로 배열하는 유연한 가로 막대입니다. 이는 크럼, 버튼, 드롭다운 메뉴와 같은 UI 요소를 정의된 섹션 및 그룹으로 구성하는 컨테이너 역할을 합니다.

GRAVITY_TRANSLATION_BLOCK_1_END

`ActionBar`는 구조화된 레이아웃을 만들기 위해 함께 작동하는 여러 중첩 컴포넌트를 제공합니다: `ActionBar.Section`, `ActionBar.Group`, `ActionBar.Item`, `ActionBar.Separator`.

## 속성

| 이름       | 설명                               |         유형          | 기본값 |
| :--------- | :--------------------------------- | :-------------------: | :----: |
| aria-label | HTML `aria-label` 속성             |       `string`        |        |
| className  | HTML `class` 속성                  |       `string`        |        |
| style      | HTML `style` 속성                  | `React.CSSProperties` |        |
| qa         | 테스트에 사용되는 `data-qa` HTML 속성 |       `string`        |        |

## ActionBar.Section

탐색의 다른 종류를 시각적으로 구분하는 장식용 컴포넌트입니다.
두 가지 종류의 섹션이 제공됩니다 — `primary`와 `secondary`. 앱은 최소한 `primary` 섹션을 갖는 것이 좋습니다. `secondary`는 더 작은 패딩과 `primary` 섹션과의 가로 구분선으로 강조되어야 하는 앱별 컨트롤에 사용될 수 있습니다.

### 속성

| 이름      | 설명                                       |            유형            |   기본값   |
| :-------- | :----------------------------------------- | :------------------------: | :--------: |
| type      | 섹션의 시각적 스타일을 지정합니다.         | `"primary"`, `"secondary"` | `"primary"` |
| className | HTML `class` 속성                          |          `string`          |            |
| style     | HTML `style` 속성                          |   `React.CSSProperties`    |            |
| qa        | 테스트에 사용되는 `data-qa` HTML 속성       |          `string`          |            |

GRAVITY_TRANSLATION_BLOCK_2_END

## ActionBar.Group

그룹은 섹션 내에서 `ActionBar.Item`을 구성하고 정렬을 제어합니다.

### 속성

| 이름             | 설명                                                       |                                      유형                                       | 기본값 |
| :--------------- | :--------------------------------------------------------- | :-----------------------------------------------------------------------------: | :----: |
| pull             | 그룹의 정렬을 제어합니다.                                  | `"left"`, `"left-grow"`, `"right"`, `"right-grow"`, `"center"`, `"center-grow"` |        |
| stretchContainer | Group에 `flex-grow: 1`을 설정합니다. UIKit@7 Breadcrumbs 지원 필요 |                                    `boolean`                                    |        |
| className        | HTML `class` 속성                                          |                                    `string`                                     |        |
| style            | HTML `style` 속성                                          |                              `React.CSSProperties`                              |        |
| qa               | 테스트에 사용되는 `data-qa` HTML 속성                       |                                    `string`                                     |        |

## ActionBar.Item

버튼, 크럼 또는 `ActionBar.Group`에 있어야 하는 기타 컴포넌트와 같은 UI 요소를 위한 컨테이너입니다. 이 컴포넌트는 항목 사이에 여백을 추가합니다.

### 속성

| 이름      | 설명                         |         유형          | 기본값 |
| :-------- | :--------------------------- | :-------------------: | :----: |
| spacing   | 이전 항목과의 간격 활성화    |       `boolean`       | `true` |
| className | HTML `class` 속성            |       `string`        |        |
| style     | HTML `style` 속성            | `React.CSSProperties` |        |
| qa        | 테스트에 사용되는 `data-qa` HTML 속성 |       `string`        |        |

## ActionBar.Separator

항목 그룹 사이에 시각적으로 구분선을 둘 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_3_END