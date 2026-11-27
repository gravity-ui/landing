<!--GITHUB_BLOCK-->

# Divider

<!--/GITHUB_BLOCK-->

`Divider` 组件用作分隔和分组元素的细线，以增强视觉层次结构。

```tsx
import {Divider} from '@gravity-ui/uikit';
```

```tsx
<Divider className="custom-divider" direction="horizontal" />
```

### 方向

使用 `direction` 属性来管理 `Divider` 的方向。默认方向是 `horizontal`。

#### 水平

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

#### 垂直

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

### 自定义内容

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

### 对齐

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

## 属性

| 名称        | 描述                               | 类型                    | 默认值       |
| :---------- | :--------------------------------- | :---------------------- | :----------- |
| className   | `class` HTML 属性                  | `string`                | -            |
| orientation | 确定分隔线方向                     | `horizontal - vertical` | `horizontal` |
| children    | 分隔线内的自定义内容               | `React.ReactNode`       |              |
| align       | 自定义内容位置                     | `start - center - end`  | `start`      |
| style       | `style` HTML 属性                  | `React.CSSProperties`   |              |
| qa          | `data-qa` HTML 属性，用于测试      | `string`                |              |

### CSS API

| 名称                | 描述                                                                      |
| :------------------ | :------------------------------------------------------------------------ |
| `--g-divider-color` | 分隔线颜色                                                                |
| `--g-divider-size`  | 分隔线尺寸（水平方向为高度，垂直方向为宽度）                                |
