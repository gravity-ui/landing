<!--GITHUB_BLOCK-->

# Breadcrumbs

<!--/GITHUB_BLOCK-->

`Breadcrumbs`는 웹사이트 계층 구조 내에서 페이지의 현재 위치를 보여주는 탐색 요소입니다. 사용자가 계층 구조의 상위 수준으로 돌아갈 수 있는 링크를 제공하여 여러 계층이 있는 웹사이트를 더 쉽게 탐색할 수 있도록 합니다. Breadcrumbs는 특히 대규모 웹사이트와 계층 기반 구조의 페이지가 있는 애플리케이션에 유용합니다.

```tsx
import {Breadcrumbs} from '@gravity-ui/uikit';
```

## 예시

<!--SANDBOX
import {Box, Breadcrumbs} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%">
            <Breadcrumbs>
                <Breadcrumbs.Item>Region</Breadcrumbs.Item>
                <Breadcrumbs.Item>Country</Breadcrumbs.Item>
                <Breadcrumbs.Item>City</Breadcrumbs.Item>
                <Breadcrumbs.Item>District</Breadcrumbs.Item>
                <Breadcrumbs.Item>Street</Breadcrumbs.Item>
            </Breadcrumbs>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
<Breadcrumbs>
  <Breadcrumbs.Item>Region</Breadcrumbs.Item>
  <Breadcrumbs.Item>Country</Breadcrumbs.Item>
  <Breadcrumbs.Item>City</Breadcrumbs.Item>
  <Breadcrumbs.Item>District</Breadcrumbs.Item>
  <Breadcrumbs.Item>Street</Breadcrumbs.Item>
</Breadcrumbs>
```

<!-- Storybook example -->

<BreadcrumbsExample />

<!--/GITHUB_BLOCK-->

### 이벤트

`onAction` 속성을 콜백으로 사용하여 항목 클릭 이벤트를 처리합니다.

<!--SANDBOX
import {Box, Breadcrumbs} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%">
            <Breadcrumbs onAction={(id) => alert(id)}>
                <Breadcrumbs.Item>Region</Breadcrumbs.Item>
                <Breadcrumbs.Item>Country</Breadcrumbs.Item>
                <Breadcrumbs.Item>City</Breadcrumbs.Item>
                <Breadcrumbs.Item>District</Breadcrumbs.Item>
                <Breadcrumbs.Item>Street</Breadcrumbs.Item>
            </Breadcrumbs>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
const [currentId, setCurrentId] = React.useState();
const items = [
    {id: 1, label: 'Region'},
    {id: 2, label: 'Country'},
    {id: 3, label: 'City'},
    {id: 4, label: 'District'},
    {id: 5, label: 'Street'},
]
<div>
    <Breadcrumbs onAction={setCurrentId}>
        {items.map((i) => <Breadcrumbs.Item key={i.id}>{i.label}</Breadcrumbs.Item>)}
    </Breadcrumbs>
    <p>You clicked item ID: {currentId}</p>
</div>
```

<!-- Storybook example -->

<BreadcrumbsEvents />

<!--/GITHUB_BLOCK-->

### 링크

`Breadcrumbs`에서 항목을 클릭하면 일반적으로 `onAction`이 트리거됩니다. 그러나 다른 페이지나 웹사이트에 대한 링크로 사용할 수도 있습니다. 이를 위해 `<Breadcrumbs.Item>` 컴포넌트에 `href` 속성을 추가합니다.

<!--SANDBOX
import {Box, Breadcrumbs} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%">
            <Breadcrumbs>
                <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
                <Breadcrumbs.Item href="/components">Components</Breadcrumbs.Item>
                <Breadcrumbs.Item href="/components/uikit/breadcrumbs">Breadcrumbs</Breadcrumbs.Item>
            </Breadcrumbs>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
<Breadcrumbs>
  <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
  <Breadcrumbs.Item href="/components">Components</Breadcrumbs.Item>
  <Breadcrumbs.Item href="/components/uikit/breadcrumbs">Breadcrumbs</Breadcrumbs.Item>
</Breadcrumbs>
```

<!-- Storybook example -->

<BreadcrumbsLinks />

<!--/GITHUB_BLOCK-->

### 루트 컨텍스트

사용자가 전체 구조를 이해하도록 돕기 위해 일부 애플리케이션은 다른 항목이 공간 제약으로 인해 숨겨진 경우에도 항상 Breadcrumbs의 시작점(루트 항목)을 표시합니다.

<!--SANDBOX
import {Box, Breadcrumbs} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%">
            <Box overflow="hidden" width={200}>
                <Breadcrumbs showRoot>
                    <Breadcrumbs.Item key="home">Home</Breadcrumbs.Item>
                    <Breadcrumbs.Item key="trendy">Trendy</Breadcrumbs.Item>
                    <Breadcrumbs.Item key="2020 assets">March 2020 Assets</Breadcrumbs.Item>
                    <Breadcrumbs.Item key="winter">Winter</Breadcrumbs.Item>
                    <Breadcrumbs.Item key="holiday">Holiday</Breadcrumbs.Item>
                </Breadcrumbs>
            </Box>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
<Box overflow="hidden" width={200}>
  <Breadcrumbs showRoot>
    <Breadcrumbs.Item key="home">Home</Breadcrumbs.Item>
    <Breadcrumbs.Item key="trendy">Trendy</Breadcrumbs.Item>
    <Breadcrumbs.Item key="2020 assets">March 2020 Assets</Breadcrumbs.Item>
    <Breadcrumbs.Item key="winter">Winter</Breadcrumbs.Item>
    <Breadcrumbs.Item key="holiday">Holiday</Breadcrumbs.Item>
  </Breadcrumbs>
</Box>
```

<!-- Storybook example -->

<BreadcrumbsRootContext />

<!--/GITHUB_BLOCK-->

### 구분 기호

<!--SANDBOX
import {ChevronRight} from '@gravity-ui/icons';
import {Box, Breadcrumbs, Icon} from '@gravity-ui/uikit';

const breadcrumbsItems = [
    <Breadcrumbs.Item key="region">Region</Breadcrumbs.Item>,
    <Breadcrumbs.Item key="country">Country</Breadcrumbs.Item>,
    <Breadcrumbs.Item key="city">City</Breadcrumbs.Item>,
    <Breadcrumbs.Item key="district">District</Breadcrumbs.Item>,
    <Breadcrumbs.Item key="street">Street</Breadcrumbs.Item>,
];

export default function () {
    return (
        <Box width="100%">
            <Breadcrumbs separator=">">{breadcrumbsItems}</Breadcrumbs>
            <Breadcrumbs separator="—">{breadcrumbsItems}</Breadcrumbs>
            <Breadcrumbs separator={<Icon data={ChevronRight} size={16} />}>
                {breadcrumbsItems}
            </Breadcrumbs>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
const breadcrumbsItems = [
  <Breadcrumbs.Item key="region">Region</Breadcrumbs.Item>,
  <Breadcrumbs.Item key="country">Country</Breadcrumbs.Item>,
  <Breadcrumbs.Item key="city">City</Breadcrumbs.Item>,
  <Breadcrumbs.Item key="district">District</Breadcrumbs.Item>,
  <Breadcrumbs.Item key="street">Street</Breadcrumbs.Item>,
];

<Breadcrumbs separator="›">{breadcrumbsItems}</Breadcrumbs>
<Breadcrumbs separator="—">{breadcrumbsItems}</Breadcrumbs>
<Breadcrumbs separator={<ChevronRight />}>{breadcrumbsItems}</Breadcrumbs>
```

<!-- Storybook example -->

<BreadcrumbsSeparator />

<!--/GITHUB_BLOCK-->

### 아이콘이 있는 Breadcrumbs

<!--SANDBOX
import {Flame, House, Rocket} from '@gravity-ui/icons';
import {Box, Breadcrumbs, Flex, Icon, Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%">
            <Breadcrumbs>
                <Breadcrumbs.Item>
                    <Flex alignItems="center" gap={1}>
                        <Icon data={House} size={16} />
                        uikit
                    </Flex>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Flex alignItems="center" gap={1}>
                        <Icon data={Flame} size={16} />
                        components
                    </Flex>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Flex alignItems="center" gap={1}>
                        <Icon data={Rocket} size={16} style={{minWidth: 16}} />
                        <Text ellipsis variant="inherit">
                            Breadcrumbs
                        </Text>
                    </Flex>
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
<Breadcrumbs>
  <Breadcrumbs.Item>
    <Flex alignItems="center" gap={1}>
      <House /> uikit
    </Flex>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item>
    <Flex alignItems="center" gap={1}>
      <Flame /> components
    </Flex>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item>
    <Flex alignItems="center" gap={1}>
      <Rocket style={{minWidth: 16}} />
      <Text ellipsis variant="inherit">
        Breadcrumbs
      </Text>
    </Flex>
  </Breadcrumbs.Item>
</Breadcrumbs>
```

<!-- Storybook example -->

<BreadcrumbsWithIcons />

<!--/GITHUB_BLOCK-->

### 라우터와의 통합

<!--GITHUB_BLOCK-->

#### React Router

```jsx
import {useLinkClickHandler, useHref} from 'react-router';
import {Breadcrumbs, BreadcrumbsItem} from '@gravity-ui/uikit';

function RouterLink({to, ...rest}) {
  const href = useHref(to);
  const onClick = useLinkClickHandler(to);
  return <BreadcrumbsItem {...rest} href={href} onClick={onClick} />;
}

function Navigation() {
  return (
    <Breadcrumbs itemComponent={RouterLink}>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/components">Components</RouterLink>
      <RouterLink to="/components/breadcrumbs">Breadcrumbs</RouterLink>
    </Breadcrumbs>
  );
}
```

#### Next.js

```jsx
import Link from 'next/link';
import {Breadcrumbs, BreadcrumbsItem} from '@gravity-ui/uikit';

function RouterLink({href, ...rest}) {
  return (
    <Link href={href} passHref legacyBehavior>
      <BreadcrumbsItem {...rest} />;
    </Link>
  );
}

function Navigation() {
  return (
    <Breadcrumbs itemComponent={RouterLink}>
      <RouterLink href="/">Home</RouterLink>
      <RouterLink href="/components">Components</RouterLink>
      <RouterLink href="/components/breadcrumbs">Breadcrumbs</RouterLink>
    </Breadcrumbs>
  );
}
```

#### Tanstack Router

```jsx
import {createLink} from '@tanstack/react-router';
import {Breadcrumbs, BreadcrumbsItem} from '@gravity-ui/uikit';

const RouterLink = createLink(BreadcrumbsItem);

function Navigation() {
  return (
    <Breadcrumbs itemComponent={RouterLink}>
      <RouterLink href="/">Home</RouterLink>
      <RouterLink href="/components">Components</RouterLink>
      <RouterLink href="/components/breadcrumbs">Breadcrumbs</RouterLink>
    </Breadcrumbs>
  );
}
```

<!-- Storybook example -->

<BreadcrumbsClientNavigation />

<!--/GITHUB_BLOCK-->

### 랜드마크

브레드크럼이 페이지의 주요 탐색 요소로 사용될 때 [탐색 랜드마크](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html)에 배치할 수 있습니다. 랜드마크는 보조 기술 사용자가 페이지의 주요 섹션을 빠르게 찾도록 도와줍니다. 탐색 랜드마크를 만들려면 브레드크럼을 `aria-label`이 있는 `<nav>` 요소 안에 배치합니다.

<!--SANDBOX
import {Box, Breadcrumbs} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%">
            <nav aria-label="Breadcrumbs">
                <Breadcrumbs>
                    <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
                    <Breadcrumbs.Item href="/components">Components</Breadcrumbs.Item>
                    <Breadcrumbs.Item href="/components/uikit/breadcrumbs">Breadcrumbs</Breadcrumbs.Item>
                </Breadcrumbs>
            </nav>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
<nav aria-label="Breadcrumbs">
  <Breadcrumbs>
    <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
    <Breadcrumbs.Item href="/components">Components</Breadcrumbs.Item>
    <Breadcrumbs.Item href="/components/uikit/breadcrumbs">Breadcrumbs</Breadcrumbs.Item>
  </Breadcrumbs>
</nav>
```

<!-- Storybook example -->

<BreadcrumbsLinks />

<!--/GITHUB_BLOCK-->

### 비활성화된 항목

<!--SANDBOX
import {Box, Breadcrumbs} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%">
            <Breadcrumbs>
                <Breadcrumbs.Item href="#Region">Region</Breadcrumbs.Item>
                <Breadcrumbs.Item href="#Country" disabled>
                    Country
                </Breadcrumbs.Item>
                <Breadcrumbs.Item href="#City">City</Breadcrumbs.Item>
                <Breadcrumbs.Item href="#District">District</Breadcrumbs.Item>
                <Breadcrumbs.Item href="#Street" disabled>
                    Street
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
<Breadcrumbs>
  <Breadcrumbs.Item href="#Region">Region</Breadcrumbs.Item>
  <Breadcrumbs.Item href="#Country" disabled>
    Country
  </Breadcrumbs.Item>
  <Breadcrumbs.Item href="#City">City</Breadcrumbs.Item>
  <Breadcrumbs.Item href="#District">District</Breadcrumbs.Item>
  <Breadcrumbs.Item href="#Street" disabled>
    Street
  </Breadcrumbs.Item>
</Breadcrumbs>
```

<!-- Storybook example -->

<BreadcrumbsDisabledItems />

<!--/GITHUB_BLOCK-->

### 마지막 콘텐츠

<!--SANDBOX
import {Box, Breadcrumbs, Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%">
            <Breadcrumbs endContent={<div style={{paddingInlineStart: 4}}><Button>Push</Button></div>}>
                <Breadcrumbs.Item>Region</Breadcrumbs.Item>
                <Breadcrumbs.Item>Country</Breadcrumbs.Item>
                <Breadcrumbs.Item>City</Breadcrumbs.Item>
                <Breadcrumbs.Item>District</Breadcrumbs.Item>
                <Breadcrumbs.Item>Street</Breadcrumbs.Item>
            </Breadcrumbs>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```jsx
<Breadcrumbs
  endContent={
    <Flex gap={1} spacing={{pl: 1}}>
      <Button>Test1</Button>
      <Button>Test2</Button>
    </Flex>
  }
>
  <Breadcrumbs.Item>Region</Breadcrumbs.Item>
  <Breadcrumbs.Item>Country</Breadcrumbs.Item>
  <Breadcrumbs.Item>City</Breadcrumbs.Item>
  <Breadcrumbs.Item>District</Breadcrumbs.Item>
  <Breadcrumbs.Item>Street</Breadcrumbs.Item>
</Breadcrumbs>
```

<!-- Storybook example -->

<BreadcrumbsEndContent />

<!--/GITHUB_BLOCK-->

## 속성

| 이름             | 설명                                                                  | 타입                                       | 기본값 |
| :--------------- | :--------------------------------------------------------------------------- | :----------------------------------------- | :------ |
| children         | Breadcrumb 항목                                                             | `React.ReactElement<BreadcrumbsItemProps>` |         |
| disabled         | `Breadcrumbs` 비활성화 여부를 결정합니다.                               | `boolean`                                  |         |
| showRoot         | 항목이 축소된 경우 루트 항목을 항상 표시할지 여부를 활성화/비활성화합니다. | `boolean`                                  |         |
| popupPlacement   | 축소된 항목 팝업의 스타일입니다.                                           | `PopupPlacement`                           |         |
| popupStyle       | 축소된 항목 팝업의 스타일입니다.                                           | `"staircase"`                              |         |
| qa               | 테스트에 사용되는 `data-qa` HTML 속성                                   | `string`                                   |         |
| separator        | 사용자 정의 구분 기호 노드입니다.                                                       | `React.ReactNode`                          | "/"     |
| action           | `click` 이벤트 핸들러입니다.                                                       | `(id: Key) => void`                        |         |
| id               | 요소의 고유 ID입니다.                                                         | `string`                                   |         |
| className        | 요소의 CSS 클래스 이름입니다.                                              | `string`                                   |         |
| style            | 요소의 인라인 스타일을 설정합니다.                                       | `CSSProperties`                            |         |
| aria-label       | 현재 요소를 레이블링하는 문자열 값을 정의합니다.                      | `string`                                   |         |
| aria-labelledby  | 현재 요소를 레이블링하는 요소를 식별합니다.                    | `string`                                   |         |
| aria-describedby | 객체를 설명하는 요소를 식별합니다.                          | `string`                                   |         |
| endContent       | 마지막 breadcrumb 항목 뒤에 렌더링되는 사용자 노드입니다.                             | `React.ReactNode`                          |         |

### BreadcrumbsItemProps

| 이름       | 설명                                                     | 타입                              | 기본값 |
| :--------- | :------------------------------------------------------- | :-------------------------------- | :----- |
| children   | Breadcrumbs 콘텐츠.                                      | `string`                          |        |
| title      | 항목 콘텐츠의 문자열 표현.                               | `string`                          |        |
| aria-label | 항목에 대한 접근성 레이블.                               | `string`                          |        |
| href       | 하이퍼링크에 사용할 URL.                                 | `string`                          |        |
| target     | 링크의 대상 창.                                          | `React.HTMLAttributeAnchorTarget` |        |
| rel        | 연결된 리소스와 현재 페이지 간의 관계.                   | `string`                          |        |
| disabled   | BreadcrumbsItem이 비활성화되었는지 여부.                 | `boolean`                         |        |
