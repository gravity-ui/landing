Tabs 컴포넌트는 콘텐츠를 탐색, 구성하고 다른 보기 간에 전환하는 데 사용됩니다.

```tsx
import {TabProvider, TabList, Tab, TabPanel} from '@gravity-ui/uikit';
```

레거시 `Tabs`에서 마이그레이션하시나요? [마이그레이션 가이드](https://github.com/gravity-ui/uikit/blob/main/docs/migration-from-legacy-tabs.md)를 참조하세요.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### 컴포넌트

- [TabProvider](#tabprovider)
- [TabList](#tablist)
- [Tab](#tab)
- [TabPanel](#tabpanel)

## TabProvider

탭 선택 기능을 제공하는 컴포넌트

## 속성

| 이름     | 설명                                           |           유형            | 기본값 |
| :------- | :--------------------------------------------- | :-----------------------: | :----: |
| children | 탭 및 탭 패널 목록, 아마도 일부 래퍼 포함 |     `React.ReactNode`     |        |
| value    | 활성 탭 값                                     |         `string`          |        |
| onUpdate | 탭 업데이트 핸들러                             | `(value: string) => void` |        |

## TabList

`tabs` 세트의 컨테이너 역할을 하는 컴포넌트

### 크기

`tabs`의 크기를 제어하려면 `size` 속성을 사용하세요. 기본 크기는 `m`입니다.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### 속성

`TabList`는 다음 외에도 유효한 `div` 요소 속성을 모두 허용합니다.

| 이름            | 설명                                                                            |               유형               | 기본값  |
| :-------------- | :------------------------------------------------------------------------------ | :------------------------------: | :-----: |
| children        | 탭 목록, 아마도 일부 래퍼 포함                                                  |        `React.ReactNode`         |         |
| value           | 활성 탭 값                                                                      |             `string`             |         |
| onUpdate        | 탭 업데이트 핸들러                                                              |    `(value: string) => void`     |         |
| className       | 요소의 CSS 클래스                                                               |             `string`             |         |
| activateOnFocus | 포커스 시 탭 활성화. 패널의 콘텐츠를 즉시 표시할 수 있는 경우에만 사용하세요. |            `boolean`             | `false` |
| size            | 요소 크기                                                                       |        `"m"` `"l"` `"xl"`        |  `"m"`  |
| contentOverflow | 가로로 맞지 않는 항목 처리 방법 (줄 바꿈, 스크롤 또는 **더 보기** 메뉴) | `"wrap"` `"scroll"` `"collapse"` | `"wrap"`|
| moreLabel       | 활성 탭이 목록에 표시될 때 오버플로 트리거를 축소하기 위한 레이블             |        `React.ReactNode`         | `"More"`|
| qa              | 테스트에 사용되는 HTML `data-qa` 속성                                           |             `string`             |         |

## Tab

탭 항목을 렌더링하는 데 사용되는 컴포넌트입니다.

### 아이콘

탭 항목에 아이콘을 표시해야 하는 경우 사용합니다.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### 상태

탭 항목에는 비활성화 플래그가 있습니다.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### 카운터

탭 항목에 숫자를 표시해야 하는 경우 사용합니다.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

### 레이블

탭 항목에 레이블을 표시해야 하는 경우 사용합니다.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### 콘텐츠 오버플로

탭 항목을 축소해야 하는 경우 사용합니다.

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

### 속성

`Tab`은 다음 외에도 유효한 `button` 또는 `a` 요소 속성을 모두 허용합니다.

| 이름      | 설명                             |        타입         | 기본값 |
| :-------- | :------------------------------- | :-----------------: | :-----: |
| value     | 탭 값                            |      `string`       |         |
| title     | 탭 제목                          |      `string`       |         |
| icon      | 시작 부분에 표시되는 아이콘        |  `React.ReactNode`  |         |
| counter   | 끝 부분에 표시되는 콘텐츠        |  `number` `string`  |         |
| href      | 링크할 URL                       |      `string `      |         |
| label     | 끝 부분에 표시되는 `<Label>`     |  `React.ReactNode`  |         |
| disabled  | 비활성 상태                      |      `boolean`      |         |
| component | 루트 컴포넌트 재정의             | `React.ElementType` |         |
| children  | 탭의 콘텐츠                    |  `React.ReactNode`  |         |
| qa        | 테스트에 사용되는 HTML `data-qa` 속성 |      `string`       |         |

## TabPanel

탭과 관련된 콘텐츠를 위한 컨테이너 요소입니다.

### 속성

`TabPanel`은 다음 속성 외에도 유효한 `div` 요소 속성을 모두 허용합니다.

| 이름     | 설명         |       타입        | 기본값 |
| :------- | :----------- | :---------------: | :-----: |
| children | 패널의 콘텐츠 | `React.ReactNode` |         |
| value    | 활성 탭 값   |     `string`      |         |
| qa       | 테스트에 사용되는 HTML `data-qa` 속성 |     `string`      |         |

## CSS API

| 이름                         | 설명             |
| :--------------------------- | :--------------- |
| `--g-tabs-border-width`      | 탭 테두리 너비   |
| `--g-tabs-item-height`       | 탭 항목 높이     |
| `--g-tabs-item-border-width` | 탭 항목 테두리 너비 |
| `--g-tabs-item-gap`          | 탭 간 거리       |