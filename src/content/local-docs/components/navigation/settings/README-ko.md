GRAVITY_TRANSLATION_BLOCK_0_END

`Settings` 컴포넌트는 다음과 같은 기능을 갖춘 설정 패널의 레이아웃을 제공합니다.

- 항목의 단일 레벨 및 2단계 그룹화
- 항목 헤더별 패널 콘텐츠 필터링
- 로딩 상태 및 콘텐츠 표시

GRAVITY_TRANSLATION_BLOCK_1_END

## 속성

| 이름                           | 설명                                       | 타입                         | 기본값            |
| :----------------------------- | :----------------------------------------- | :--------------------------- | :---------------- |
| loading                        | 로딩 상태 플래그                           | `boolean`                    |                   |
| renderLoading                  | 로딩 상태 콘텐츠                           | `() => React.ReactNode`      |                   |
| renderNotFound                 | 빈 패널 콘텐츠                             | `() => React.ReactNode`      |                   |
| initialPage                    | `/groupId/pageId` 형식의 초기 페이지       | `string`                     |                   |
| view                           | 모바일 보기 변경                           | `"normal"`, `"mobile"`       | `"normal"`        |
| onPageChange                   | 페이지 변경 핸들러                         | `(newPage?: string) => void` |                   |
| onClose                        | 설정 닫기 핸들러                           | `() => void`                 |                   |
| title                          | 페이지 제목                                | `string`                     | 'Settings'        |
| filterPlaceholder              | 필터 자리 표시자 텍스트                    | `string`                     | 'Search settings' |
| emptyPlaceholder               | 필터 비어 있을 때 텍스트                 | `string`                     | 'No results found'|
| enableMobileSettingsTabsScroll | 모바일 보기에서 탭이 줄 바꿈 대신 스크롤되도록 함 | `boolean`                    |                   |

## Settings.Group

관련 페이지를 구성하기 위한 선택적 레벨입니다. 예: "General" 대 "Application specific".

### 속성

| 이름       | 설명             | 타입     | 기본값 |
| :--------- | :--------------- | :------- | :----- |
| id         | 그룹의 고유 ID   | `string` |        |
| groupTitle | 그룹의 헤더      | `string` |        |

## Settings.Page

관련 설정 섹션의 컬렉션입니다. 예: General 그룹의 "Appearance".

### 속성

| 이름  | 설명                 | 타입                                                                                        | 기본값 |
| :---- | :------------------- | :------------------------------------------------------------------------------------------ | :----- |
| id    | 그룹 내 페이지의 고유 ID | `string`                                                                                    |        |
| title | 페이지 제목          | `string`                                                                                    |        |
| icon  | 페이지 아이콘 속성   | [`IconProps`](https://github.com/gravity-ui/uikit/tree/main/src/components/Icon#properties) |        |

## Settings.Section

관련 설정의 범주입니다. 예: Appearance 페이지의 "Theme settings".

### 속성

| 이름      | 설명                                                                  | 타입              | 기본값 |
| :-------- | :-------------------------------------------------------------------- | :---------------- | :----- |
| title     | 섹션 제목                                                             | `string`          |        |
| header    | 섹션 헤더                                                             | `React.ReactNode` |        |
| withBadge | 섹션 및 메뉴에 배지 표시                                              | `boolean`         |        |
| hideTitle | 섹션 제목 숨기기. 모바일의 간단한 설정에서 제목을 숨기기 위해 필요한 속성 | `boolean`         |        |

## Settings.Item

제목과 제어 컴포넌트가 있는 개별 설정입니다.
⚠️ `Settings.Section`에 `Settings.Item`이 하나만 있는 경우 제목이 표시되지 않습니다.

### 속성

| 이름                 | 설명                                                               | 타입                                                      | 기본값     |
| :------------------- | :----------------------------------------------------------------- | :-------------------------------------------------------- | :--------- |
| title                | 항목 제목                                                          | `string`                                                  |            |
| renderTitleComponent | 사용자 정의 헤더                                                   | `(highlightedTitle?: React.ReactNode) => React.ReactNode` |            |
| align                | 항목 정렬                                                          | `"top"`, `"center"`                                       | `"center"` |
| mode                 | 모바일 레이아웃. 제목과 제어는 행에 배치됩니다.                    | `"row"`                                                   |            |
| description          | 항목 설명                                                          | `React.ReactNode`                                         |            |