<!--GITHUB_BLOCK-->

# Tabs components

<!--/GITHUB_BLOCK-->

Tabs 컴포넌트는 콘텐츠를 탐색, 구성하고 다른 보기 간에 전환하는 데 사용됩니다.

```tsx
import {TabProvider, TabList, Tab, TabPanel} from '@gravity-ui/uikit';
```

<!--SANDBOX
import {useState} from 'react';
import {Tab, TabList, TabPanel, TabProvider} from '@gravity-ui/uikit';

export default function () {
    const [activeTab, setActiveTab] = useState('second');

    return (
        <TabProvider value={activeTab} onUpdate={setActiveTab}>
            <TabList>
                <Tab value="first">First Tab</Tab>
                <Tab value="second">Active Tab</Tab>
                <Tab value="third" disabled>
                    Disabled Tab
                </Tab>
            </TabList>
            <div>
                <TabPanel value="first">First Panel</TabPanel>
                <TabPanel value="second">Second Panel</TabPanel>
                <TabPanel value="third">Third Panel</TabPanel>
            </div>
        </TabProvider>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [activeTab, setActiveTab] = React.useState('second');

return (
  <TabProvider value={activeTab} onUpdate={setActiveTab}>
    <TabList>
      <Tab value="first">First Tab</Tab>
      <Tab value="second">Active Tab</Tab>
      <Tab value="third" disabled>
        Disabled Tab
      </Tab>
    </TabList>
    <div>
      <TabPanel value="first">First Panel</TabPanel>
      <TabPanel value="second">Second Panel</TabPanel>
      <TabPanel value="third">Third Panel</TabPanel>
    </div>
  </TabProvider>
);
```

<!--/GITHUB_BLOCK-->

### 컴포넌트

- [TabProvider](#tabprovider)
- [TabList](#tablist)
- [Tab](#tab)
- [TabPanel](#tabpanel)

## TabProvider

탭 선택 기능을 제공하는 컴포넌트입니다.

## 속성

| 이름     | 설명                                       |           타입            | 기본값 |
| :------- | :----------------------------------------- | :-----------------------: | :----: |
| children | 탭 및 탭 패널 목록, 아마도 일부 래퍼 포함 |     `React.ReactNode`     |        |
| value    | 활성 탭 값                                 |         `string`          |        |
| onUpdate | 탭 업데이트 핸들러                       | `(value: string) => void` |        |

## TabList

`tabs` 세트를 위한 컨테이너 역할을 하는 컴포넌트입니다.

### 크기

`tabs`의 크기를 제어하려면 `size` 속성을 사용하세요. 기본 크기는 `m`입니다.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TabList value="second" size="m">
                <Tab value="first">M Size first</Tab>
                <Tab value="second">M Size second</Tab>
            </TabList>
            <TabList value="second" size="l">
                <Tab value="first">L Size first</Tab>
                <Tab value="second">L Size second</Tab>
            </TabList>
            <TabList value="second" size="xl">
                <Tab value="first">XL Size first</Tab>
                <Tab value="second">v Size second</Tab>
            </TabList>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="second" size="m">
    <Tab value="first">M Size first</Tab>
    <Tab value="second">M Size second</Tab>
</TabList>
<TabList value="second" size="l">
    <Tab value="first">L Size first</Tab>
    <Tab value="second">L Size second</Tab>
</TabList>
<TabList value="second" size="xl">
    <Tab value="first">XL Size first</Tab>
    <Tab value="second">v Size second</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### 속성

`TabList`는 다음 속성 외에 유효한 `div` 요소 속성을 모두 허용합니다.

| 이름            | 설명                                                                            |               타입               | 기본값  |
| :-------------- | :------------------------------------------------------------------------------ | :------------------------------: | :-----: |
| children        | 탭 목록, 아마도 일부 래퍼 포함                                                  |        `React.ReactNode`         |         |
| value           | 활성 탭 값                                                                      |             `string`             |         |
| onUpdate        | 탭 업데이트 핸들러                                                              |    `(value: string) => void`     |         |
| className       | 요소의 CSS 클래스                                                               |             `string`             |         |
| activateOnFocus | 포커스 시 탭 활성화. 패널의 콘텐츠를 즉시 표시할 수 있는 경우에만 사용하세요. |            `boolean`             | `false` |
| size            | 요소 크기                                                                       |        `"m"` `"l"` `"xl"`        |  `"m"`  |
| contentOverflow | 가로로 맞지 않는 항목을 처리하는 방법 (줄 바꿈, 스크롤 또는 **더 보기** 메뉴) | `"wrap"` `"scroll"` `"collapse"` | `"wrap"`|
| moreLabel       | 활성 탭이 목록에 보이는 경우 오버플로 축소 트리거의 레이블                     |        `React.ReactNode`         | `"More"`|
| qa              | 테스트에 사용되는 HTML `data-qa` 속성                                           |             `string`             |         |

## Tab

탭 항목을 렌더링하는 데 사용되는 컴포넌트입니다.

### 아이콘

탭 항목에 아이콘을 표시해야 하는 경우 사용됩니다.

<!--SANDBOX
import {Gear} from '@gravity-ui/icons';
import {Icon, Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" icon={<Icon size={16} data={Gear} />}>
                Tab with icon
            </Tab>
            <Tab value="second">Tab without icon</Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" icon={<Icon size={16} data={GearIcon} />}>
    Tab with icon
  </Tab>
  <Tab value="second">Tab without icon</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### 상태

탭 항목에는 비활성화 플래그가 있습니다.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first">First Tab</Tab>
            <Tab value="second" disabled>
                Disabled Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first">First Tab</Tab>
  <Tab value="second" disabled>
    Disabled Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### 카운터

탭 항목에 숫자를 표시해야 하는 경우 사용됩니다.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" counter={13}>
                First Tab
            </Tab>
            <Tab value="second" counter={3}>
                Second Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" counter={13}>
    First Tab
  </Tab>
  <Tab value="second" counter={3}>
    Second Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### 레이블

탭 항목에 레이블을 표시해야 하는 경우 사용됩니다.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" label={{content: 'Label 1'}}>
                First Tab
            </Tab>
            <Tab value="second" label={{content: 'Label 2'}}>
                Second Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" label={{content: 'Label 1'}}>
    First Tab
  </Tab>
  <Tab value="second" label={{content: 'Label 2'}}>
    Second Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### 콘텐츠 오버플로

탭 항목을 축소해야 하는 경우 사용됩니다.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
    <Tab value="first">First Tab</Tab>
    <Tab value="second">Second Tab</Tab>
    <Tab value="third">Third Tab</Tab>
    <Tab value="fourth">Fourth Tab</Tab>
    <Tab value="fifth">Fifth Tab</Tab>
</TabList>
`}
>
    <UIKit.TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
        <UIKit.Tab value="first">First Tab</UIKit.Tab>
        <UIKit.Tab value="second">Second Tab</UIKit.Tab>
        <UIKit.Tab value="third">Third Tab</UIKit.Tab>
        <UIKit.Tab value="fourth">Fourth Tab</UIKit.Tab>
        <UIKit.Tab value="fifth">Fifth Tab</UIKit.Tab>
    </UIKit.TabList>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
  <Tab value="first">First Tab</Tab>
  <Tab value="second">Second Tab</Tab>
  <Tab value="third">Third Tab</Tab>
  <Tab value="fourth">Fourth Tab</Tab>
  <Tab value="fifth">Fifth Tab</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### 속성

`Tab`은 다음 속성 외에 유효한 `button` 또는 `a` 요소 속성을 모두 허용합니다.

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
| children  | 탭의 콘텐츠                      |  `React.ReactNode`  |         |
| qa        | HTML `data-qa` 속성, 테스트에 사용 |      `string`       |         |

## TabPanel

탭과 관련된 콘텐츠를 위한 컨테이너 요소입니다.

### 속성

`TabPanel`은 다음 속성 외에도 유효한 `div` 요소 속성을 모두 사용할 수 있습니다.

| 이름     | 설명       |       타입        | 기본값 |
| :------- | :--------- | :---------------: | :-----: |
| children | 패널 내용  | `React.ReactNode` |         |
| value    | 활성 탭 값 |     `string`      |         |
| qa       | HTML `data-qa` 속성, 테스트에 사용 |     `string`      |         |

## CSS API

| 이름                             | 설명             |
| :------------------------------- | :--------------- |
| `--g-tabs-border-width`          | 탭 테두리 너비   |
| `--g-tabs-item-height`           | 탭 항목 높이     |
| `--g-tabs-item-border-width`     | 탭 항목 테두리 너비 |
| `--g-tabs-item-gap`              | 탭 간격          |
| `--g-tabs-vertical-item-height`  | 세로 탭 항목 높이 |
| `--g-tabs-vertical-item-padding` | 세로 탭 항목 패딩 |
