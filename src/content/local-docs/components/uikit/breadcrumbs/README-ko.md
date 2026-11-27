`Breadcrumbs`는 웹사이트 계층 구조 내에서 페이지의 현재 위치를 보여주는 탐색 요소입니다. 계층 구조의 상위 수준으로 돌아갈 수 있는 링크를 제공하여 여러 계층이 있는 웹사이트를 더 쉽게 탐색할 수 있도록 합니다. Breadcrumbs는 특히 계층 기반 구조의 페이지가 많은 대규모 웹사이트 및 애플리케이션에 유용합니다.

```tsx
import {Breadcrumbs} from '@gravity-ui/uikit';
```

기존 `Breadcrumbs`에서 마이그레이션하시나요? [마이그레이션 가이드](https://github.com/gravity-ui/uikit/blob/main/docs/migration-from-legacy-breadcrumbs.md)를 참조하세요.

## 예시

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### 이벤트

`onAction` 속성을 콜백으로 사용하여 항목 클릭 이벤트를 처리하세요.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### 링크

`Breadcrumbs`에서 항목을 클릭하면 일반적으로 `onAction`이 트리거됩니다. 하지만 다른 페이지나 웹사이트의 링크로 사용할 수도 있습니다. 이를 위해 `<Breadcrumbs.Item>` 컴포넌트에 `href` 속성을 추가하세요:

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### 루트 컨텍스트

사용자가 전체 구조를 이해하도록 돕기 위해 일부 애플리케이션은 다른 항목이 공간 제약으로 인해 숨겨진 경우에도 항상 Breadcrumbs의 시작점(루트 항목)을 표시합니다.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### 구분 기호

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### 아이콘이 있는 Breadcrumbs

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### 라우터와의 통합

GRAVITY_TRANSLATION_BLOCK_12_END

### 랜드마크

Breadcrumbs가 페이지의 주요 탐색 요소로 사용될 때 [탐색 랜드마크](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html)에 배치할 수 있습니다. 랜드마크는 보조 기술 사용자가 페이지의 주요 섹션을 빠르게 찾는 데 도움이 됩니다. 탐색 랜드마크를 만들려면 `aria-label`이 있는 `<nav>` 요소 안에 Breadcrumbs를 배치하세요:

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

### 비활성화된 항목

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

### 마지막 콘텐츠

GRAVITY_TRANSLATION_BLOCK_17_END

GRAVITY_TRANSLATION_BLOCK_18_END

## 속성

| 이름             | 설명                                                                  | 타입                 | 기본값 |
| :--------------- | :--------------------------------------------------------------------------- | :------------------- | :------ |
| children         | Breadcrumb 항목                                                             | `React.ReactNode`    |         |
| disabled         | `Breadcrumbs` 비활성화 여부를 결정합니다.                               | `boolean`            |         |
| showRoot         | 항목이 축소되었을 때 루트 항목을 항상 표시할지 여부를 활성화/비활성화합니다. | `boolean`            |         |
| maxItems         | 축소 제어 장치를 포함한 최대 표시 항목 수입니다.             | `number`             |         |
| itemComponent    | 항목 렌더링에 사용되는 컴포넌트입니다.                                              | `React.ElementType`  |         |
| popupPlacement   | 축소된 항목 팝업의 스타일입니다.                                           | `PopupPlacement`     |         |
| popupStyle       | 축소된 항목 팝업의 스타일입니다.                                           | `"staircase"`        |         |
| qa               | 테스트에 사용되는 `data-qa` HTML 속성입니다.                                   | `string`             |         |
| separator        | 사용자 정의 구분 기호 노드입니다.                                                       | `React.ReactNode`    | "/"     |
| onAction         | 클릭된 항목의 키와 함께 호출되는 핸들러입니다.                                  | `(key: Key) => void` |         |
| id               | 요소의 고유 ID입니다.                                                         | `string`             |         |
| className        | 요소의 CSS 클래스 이름입니다.                                              | `string`             |         |
| style            | 요소의 인라인 스타일을 설정합니다.                                       | `CSSProperties`      |         |
| aria-label       | 현재 요소를 레이블링하는 문자열 값을 정의합니다.                      | `string`             |         |
| aria-labelledby  | 현재 요소를 레이블링하는 요소(들)를 식별합니다.                    | `string`             |         |
| aria-describedby | 객체를 설명하는 요소(들)를 식별합니다.                          | `string`             |         |
| endContent       | 마지막 breadcrumb 항목 뒤에 렌더링되는 사용자 노드입니다.                             | `React.ReactNode`    |         |

### BreadcrumbsItemProps

| 이름       | 설명                                                           | 타입                              | 기본값 |
| :--------- | :------------------------------------------------------------- | :-------------------------------- | :----- |
| children   | Breadcrumbs 콘텐츠.                                            | `React.ReactNode`                 |        |
| title      | 항목 콘텐츠의 문자열 표현.                                     | `string`                          |        |
| aria-label | 항목에 대한 접근성 레이블.                                     | `string`                          |        |
| href       | 하이퍼링크에 사용할 URL.                                       | `string`                          |        |
| onClick    | 항목 클릭 핸들러.                                              | `React.MouseEventHandler`         |        |
| target     | 링크의 대상 창.                                                | `React.HTMLAttributeAnchorTarget` |        |
| rel        | 연결된 리소스와 현재 페이지 간의 관계.                         | `string`                          |        |
| disabled   | BreadcrumbsItem이 비활성화되었는지 여부.                       | `boolean`                         |        |