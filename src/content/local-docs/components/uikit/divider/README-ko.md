<!--GITHUB_BLOCK-->

# Divider

<!--/GITHUB_BLOCK-->

`Divider` 컴포넌트는 시각적 계층 구조를 강화하기 위해 요소를 구분하고 그룹화하는 얇은 선으로 사용됩니다.

```tsx
import {Divider} from '@gravity-ui/uikit';
```

```tsx
<Divider className="custom-divider" direction="horizontal" />
```

### 방향

`direction` 속성을 사용하여 `Divider`의 방향을 관리합니다. 기본 방향은 `horizontal`입니다.

#### 가로

<!--SANDBOX
import {Container, Divider, Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <Container>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit
                minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit?
                Maiores sed pariatur aliquid commodi atque sunt officiis natus?
            </Text>
            <Divider orientation="horizontal" />
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit
                minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit?
                Maiores sed pariatur aliquid commodi atque sunt officiis natus?
            </Text>
        </Container>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
import {Container, Text, Divider} from '@gravity-ui/uikit';

<Container>
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
    perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
    aliquid commodi atque sunt officiis natus?
  </Text>
  <Divider orientation="horizontal" />
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
    perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
    aliquid commodi atque sunt officiis natus?
  </Text>
</Container>;
```

<!--/GITHUB_BLOCK-->

#### 세로

<!--SANDBOX
import {Container, Divider, Flex, Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <Container>
            <Flex gap={3}>
                <Label>Label</Label>
                <Divider orientation="vertical" />
                <Label>Label</Label>
                <Divider orientation="vertical" />
                <Label>Label</Label>
                <Divider orientation="vertical" />
                <Label>Label</Label>
            </Flex>
        </Container>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
import {Flex, Label, Divider} from '@gravity-ui/uikit';

<Container>
  <Flex gap={3}>
    <Label>Label</Label>
    <Divider orientation="vertical" />
    <Label>Label</Label>
    <Divider orientation="vertical" />
    <Label>Label</Label>
    <Divider orientation="vertical" />
    <Label>Label</Label>
  </Flex>
</Container>;
```

<!--/GITHUB_BLOCK-->

### 사용자 정의 콘텐츠

<!--SANDBOX
import {Container, Divider, Flex} from '@gravity-ui/uikit';

export default function () {
    return (
        <Container>
            <Flex gap={3}>
                <Divider>Custom content</Divider>
                <Divider align="center">
                    <span>OK</span>
                </Divider>
            </Flex>
        </Container>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
import {Divider, Flex, Container, Icon} from '@gravity-ui/uikit';
import {CheckIcon} from '@gravity-ui/icons';

<Container>
  <Flex gap={3}>
    <Divider>Custom content</Divider>
    <Divider>
      <Icon data={CheckIcon} size={16} />
    </Divider>
  </Flex>
</Container>;
```

<!--/GITHUB_BLOCK-->

### 정렬

<!--SANDBOX
import {Container, Divider, Flex} from '@gravity-ui/uikit';

export default function () {
    return (
        <Container>
            <Flex gap={3}>
                <Divider align="start">Start content</Divider>
                <Divider align="center">Center content</Divider>
                <Divider align="end">End content</Divider>
            </Flex>
        </Container>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
import {Divider, Flex, Container} from '@gravity-ui/uikit';

<Container>
  <Flex gap={3}>
    <Divider align="start">Start content</Divider>
    <Divider align="center">Center content</Divider>
    <Divider align="end">End content</Divider>
  </Flex>
</Container>;
```

<!--/GITHUB_BLOCK-->

## 속성

| 이름        | 설명                                     | 타입                    | 기본값   |
| :---------- | :--------------------------------------- | :---------------------- | :------- |
| className   | `class` HTML 속성                        | `string`                | -        |
| orientation | 구분선의 방향을 결정합니다.              | `horizontal - vertical` | `horizontal` |
| children    | 구분선 안의 사용자 정의 콘텐츠           | `React.ReactNode`       |          |
| align       | 사용자 정의 콘텐츠의 위치                | `start - center - end`  | `start`  |
| style       | `style` HTML 속성                        | `React.CSSProperties`   |          |
| qa          | 테스트에 사용되는 `data-qa` HTML 속성    | `string`                |          |

### CSS API

| 이름                | 설명                                                                      |
| :------------------ | :------------------------------------------------------------------------ |
| `--g-divider-color` | 구분선의 색상                                                             |
| `--g-divider-size`  | 구분선의 크기 (가로 방향일 경우 높이, 세로 방향일 경우 너비) |
