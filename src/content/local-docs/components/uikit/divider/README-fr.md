<!--GITHUB_BLOCK-->

# Divider

<!--/GITHUB_BLOCK-->

Le composant `Divider` est utilisé comme une ligne fine pour délimiter et regrouper des éléments afin de renforcer la hiérarchie visuelle.

```tsx
import {Divider} from '@gravity-ui/uikit';
```

```tsx
<Divider className="custom-divider" direction="horizontal" />
```

### Orientation

Utilisez la propriété `direction` pour gérer l'orientation du `Divider`. L'orientation par défaut est `horizontal`.

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

### Contenu personnalisé

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

### Alignement

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

## Propriétés

| Nom        | Description                                | Type                    | Défaut       |
| :---------- | :----------------------------------------- | :---------------------- | :----------- |
| className   | Attribut HTML `class`                      | `string`                | -            |
| orientation | Détermine la direction du séparateur       | `horizontal - vertical` | `horizontal` |
| children    | Contenu personnalisé à l'intérieur du séparateur | `React.ReactNode`       |              |
| align       | Position du contenu personnalisé           | `start - center - end`  | `start`      |
| style       | Attribut HTML `style`                      | `React.CSSProperties`   |              |
| qa          | Attribut HTML `data-qa`, utilisé pour les tests | `string`                |              |

### API CSS

| Nom                | Description                                                                      |
| :------------------ | :------------------------------------------------------------------------------- |
| `--g-divider-color` | Couleur du séparateur                                                            |
| `--g-divider-size`  | Taille du séparateur (hauteur pour l'orientation horizontale, largeur pour l'orientation verticale) |
