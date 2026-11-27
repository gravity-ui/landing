<!--GITHUB_BLOCK-->

# Breadcrumbs

<!--/GITHUB_BLOCK-->

`Breadcrumbs` é um elemento de navegação que mostra a localização atual de uma página na hierarquia de um site. Ele fornece links que permitem aos usuários retornar a níveis superiores na hierarquia, facilitando a navegação em um site com várias camadas. Os Breadcrumbs são especialmente úteis para sites e aplicativos grandes com uma estrutura de páginas baseada em hierarquia.

```tsx
import {Breadcrumbs} from '@gravity-ui/uikit';
```

## Exemplo

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

### Eventos

Use a propriedade `onAction` como um callback para lidar com eventos de clique nos itens.

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

### Links

Em `Breadcrumbs`, clicar em um item normalmente aciona `onAction`. No entanto, você também pode usá-los como links para outras páginas ou sites. Para fazer isso, adicione a propriedade `href` ao componente `<Breadcrumbs.Item>`:

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

### Contexto raiz

Para ajudar os usuários a entender a estrutura geral, alguns aplicativos sempre mostram o ponto de partida (item raiz) dos Breadcrumbs, mesmo quando outros itens estão ocultos devido a limitações de espaço.

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

### Separador

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

### Breadcrumbs com ícones

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

### Integração com roteadores

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

### Marcos (Landmarks)

Quando os breadcrumbs são usados como um elemento de navegação principal para uma página, eles podem ser colocados em um [marco de navegação](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html). Marcos ajudam os usuários de tecnologia assistiva a encontrar rapidamente as principais seções de uma página. Para criar um marco de navegação, coloque os breadcrumbs dentro de um elemento `<nav>` com um `aria-label`:

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

### Itens desativados

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

### Conteúdo final

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

## Propriedades

| Nome             | Descrição                                                                  | Tipo                                       | Padrão |
| :--------------- | :--------------------------------------------------------------------------- | :----------------------------------------- | :------ |
| children         | Itens do Breadcrumb                                                          | `React.ReactElement<BreadcrumbsItemProps>` |         |
| disabled         | Determina se `Breadcrumbs` estão desabilitados.                               | `boolean`                                  |         |
| showRoot         | Habilita ou desabilita a exibição sempre do item raiz se os itens estiverem colapsados. | `boolean`                                  |         |
| popupPlacement   | Estilo do popup do item colapsado.                                           | `PopupPlacement`                           |         |
| popupStyle       | Estilo do popup do item colapsado.                                           | `"staircase"`                              |         |
| qa               | Atributo HTML `data-qa`, usado para testes                                   | `string`                                   |         |
| separator        | Nó separador personalizado.                                                       | `React.ReactNode`                          | "/"     |
| action           | Manipulador de evento `click`.                                                       | `(id: Key) => void`                        |         |
| id               | ID único do elemento.                                                         | `string`                                   |         |
| className        | Nome da classe CSS para o elemento.                                              | `string`                                   |         |
| style            | Define o estilo inline para o elemento.                                       | `CSSProperties`                            |         |
| aria-label       | Define um valor de string que rotula o elemento atual.                      | `string`                                   |         |
| aria-labelledby  | Identifica o(s) elemento(s) que rotulam o elemento atual.                    | `string`                                   |         |
| aria-describedby | Identifica o(s) elemento(s) que descrevem o objeto.                          | `string`                                   |         |
| endContent       | Nó do usuário renderizado após o último item do breadcrumb.                             | `React.ReactNode`                          |         |

### BreadcrumbsItemProps

| Nome       | Descrição                                                      | Tipo                              | Padrão |
| :--------- | :------------------------------------------------------------- | :-------------------------------- | :----- |
| children   | Conteúdo do Breadcrumbs.                                       | `string`                          |        |
| title      | Representação em string do conteúdo do item.                   | `string`                          |        |
| aria-label | Rótulo de acessibilidade para o item.                          | `string`                          |        |
| href       | URL a ser usada para o hyperlink.                              | `string`                          |        |
| target     | Janela de destino para o link.                                 | `React.HTMLAttributeAnchorTarget` |        |
| rel        | Relação entre o recurso vinculado e a página atual.            | `string`                          |        |
| disabled   | Se o BreadcrumbsItem está desabilitado.                        | `boolean`                         |        |

GRAVITY_TRANSLATION_
