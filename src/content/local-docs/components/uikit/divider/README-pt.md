<!--GITHUB_BLOCK-->

# Divider

<!--/GITHUB_BLOCK-->

O componente `Divider` é usado como uma linha fina para delimitar e agrupar elementos, reforçando a hierarquia visual.

```tsx
import {Divider} from '@gravity-ui/uikit';
```

```tsx
<Divider className="custom-divider" direction="horizontal" />
```

### Orientação

Use a propriedade `direction` para gerenciar a orientação do `Divider`. A orientação padrão é `horizontal`.

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

### Conteúdo personalizado

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

### Alinhamento

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

## Propriedades

| Nome        | Descrição                                      | Tipo                    | Padrão       |
| :---------- | :--------------------------------------------- | :---------------------- | :----------- |
| className   | Atributo `class` HTML                          | `string`                | -            |
| orientation | Determina a direção do divisor                 | `horizontal - vertical` | `horizontal` |
| children    | Conteúdo personalizado dentro do divisor       | `React.ReactNode`       |              |
| align       | Posição do conteúdo personalizado              | `start - center - end`  | `start`      |
| style       | Atributo `style` HTML                          | `React.CSSProperties`   |              |
| qa          | Atributo `data-qa` HTML, usado para testes     | `string`                |              |

### API CSS

| Nome                | Descrição                                                                      |
| :------------------ | :----------------------------------------------------------------------------- |
| `--g-divider-color` | Cor do divisor                                                                 |
| `--g-divider-size`  | Tamanho do divisor (altura para orientação horizontal, largura para vertical) |
