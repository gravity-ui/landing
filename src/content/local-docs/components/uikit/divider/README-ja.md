<!--GITHUB_BLOCK-->

# Divider

<!--/GITHUB_BLOCK-->

`Divider` コンポーネントは、視覚的な階層を強化するために、要素を区切り、グループ化するための細い線として使用されます。

```tsx
import {Divider} from '@gravity-ui/uikit';
```

```tsx
<Divider className="custom-divider" direction="horizontal" />
```

### 方向

`direction` プロパティを使用して、`Divider` の方向を管理します。デフォルトの方向は `horizontal` です。

#### Horizontal

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

#### Vertical

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

### カスタムコンテンツ

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

### 配置

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

## プロパティ

| 名前        | 説明                               | タイプ                    | デフォルト   |
| :---------- | :--------------------------------- | :---------------------- | :----------- |
| className   | `class` HTML 属性                  | `string`                | -            |
| orientation | 区切り線の方向を決定します         | `horizontal - vertical` | `horizontal` |
| children    | 区切り線内のカスタムコンテンツ   | `React.ReactNode`       |              |
| align       | カスタムコンテンツの位置           | `start - center - end`  | `start`      |
| style       | `style` HTML 属性                  | `React.CSSProperties`   |              |
| qa          | `data-qa` HTML 属性、テストに使用  | `string`                |              |

### CSS API

| 名前                | 説明                                                                      |
| :------------------ | :------------------------------------------------------------------------ |
| `--g-divider-color` | 区切り線の色                                                              |
| `--g-divider-size`  | 区切り線のサイズ（水平方向の場合は高さ、垂直方向の場合は幅）                  |
