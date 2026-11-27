<!--GITHUB_BLOCK-->

# Menu

<!--/GITHUB_BLOCK-->

`Menu` 컴포넌트를 사용하면 액션 목록에 대한 뷰를 쉽게 만들 수 있습니다.

```tsx
import {Menu} from '@gravity-ui/uikit';
```

항목(`Menu.Item`) 및 그룹(`Menu.Group`)에 대한 전용 컴포넌트가 있습니다. 이들을 조합하여 더 복잡한 메뉴를 만들 수 있습니다.

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item>First</Menu.Item>
            <Menu.Item>Second</Menu.Item>
            <Menu.Group label="Group">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item>First</Menu.Item>
  <Menu.Item>Second</Menu.Item>
  <Menu.Group label="Group">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
</Menu>
```

<!--/GITHUB_BLOCK-->

### 크기

이 속성은 메뉴 크기를 선택하는 데 사용됩니다. 기본값은 `m`입니다.

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Menu size="s">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
            <Menu size="m">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
            <Menu size="l">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
            <Menu size="xl">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu size="s">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>

<Menu size="m">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>

<Menu size="l">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>

<Menu size="xl">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

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

<!--SANDBOX
import {Gear, TriangleExclamation} from '@gravity-ui/icons';
import {Icon, Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Menu>
                <Menu.Item iconStart={<Icon size={16} data={Gear} />}>Item with icon</Menu.Item>
                <Menu.Item>Item without icon</Menu.Item>
            </Menu>
            <Menu>
                <Menu.Item iconEnd={<Icon size={16} data={TriangleExclamation} />}>
                    Item with icon
                </Menu.Item>
                <Menu.Item>Item without icon</Menu.Item>
            </Menu>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item iconStart={<Icon size={16} data={GearIcon} />}>Item with icon</Menu.Item>
  <Menu.Item>Item without icon</Menu.Item>
</Menu>
```

```tsx
<Menu>
  <Menu.Item iconEnd={<Icon size={16} data={TriangleExclamation} />}>Item with icon</Menu.Item>
  <Menu.Item>Item without icon</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### 상태

이 속성을 사용하여 특정 메뉴 항목을 활성화하거나 비활성화(회색으로 표시)할 수 있습니다.

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item disabled>First</Menu.Item>
            <Menu.Item>Second</Menu.Item>
            <Menu.Item selected>Third</Menu.Item>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item disabled>First</Menu.Item>
  <Menu.Item>Second</Menu.Item>
  <Menu.Item selected>Third</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### 테마

이를 통해 메뉴 항목 테마를 변경할 수 있습니다. 기본 테마는 `normal`입니다.

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item theme="danger">First</Menu.Item>
            <Menu.Item theme="normal">Second</Menu.Item>
            <Menu.Item>Third</Menu.Item>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item theme="danger">First</Menu.Item>
  <Menu.Item theme="normal">Second</Menu.Item>
  <Menu.Item>Third</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

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

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item>First</Menu.Item>
            <Menu.Group label="Group One">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
            <Menu.Group label="Group Two">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
            <Menu.Item>Middle</Menu.Item>
            <Menu.Group label="Group Three">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
            <Menu.Item>Last</Menu.Item>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item>First</Menu.Item>
  <Menu.Group label="Group One">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
  <Menu.Group label="Group Two">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
  <Menu.Item>Middle</Menu.Item>
  <Menu.Group label="Group Three">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
  <Menu.Item>Last</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### 속성

| 이름      | 설명                     |         타입          | 기본값 |
| :-------- | :----------------------- | :-------------------: | :----: |
| label     | 메뉴 그룹 레이블         |       `string`        |        |
| children  | 자식 요소                |   `React.ReactNode`   |        |
| className | `class` HTML 속성        |       `string`        |        |
| style     | `style` HTML 속성        | `React.CSSProperties` |        |
| qa        | 테스트에 사용되는 `data-qa` HTML 속성 |       `string`        |        |
