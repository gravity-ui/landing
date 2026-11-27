<!--GITHUB_BLOCK-->

# Breadcrumbs

<!--/GITHUB_BLOCK-->

`Breadcrumbs` est un élément de navigation qui indique l'emplacement actuel d'une page dans la hiérarchie d'un site web. Il fournit des liens qui permettent aux utilisateurs de revenir à des niveaux supérieurs dans la hiérarchie, facilitant ainsi la navigation sur un site web comportant plusieurs couches. Les `Breadcrumbs` sont particulièrement utiles pour les grands sites web et les applications avec une structure de pages basée sur la hiérarchie.

```tsx
import {Breadcrumbs} from '@gravity-ui/uikit';
```

## Exemple

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

### Événements

Utilisez la propriété `onAction` comme rappel pour gérer les événements de clic sur les éléments.

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

### Liens

Dans `Breadcrumbs`, cliquer sur un élément déclenche normalement `onAction`. Cependant, vous pouvez également les utiliser comme liens vers d'autres pages ou sites web. Pour ce faire, ajoutez la propriété `href` au composant `<Breadcrumbs.Item>` :

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

### Contexte racine

Pour aider les utilisateurs à comprendre la structure globale, certaines applications affichent toujours le point de départ (élément racine) des `Breadcrumbs`, même lorsque d'autres éléments sont masqués en raison de limitations d'espace.

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

### Séparateur

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

### Breadcrumbs avec icônes

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

### Intégration avec les routeurs

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

### Repères

Lorsque les `Breadcrumbs` sont utilisés comme élément de navigation principal d'une page, ils peuvent être placés dans un [repère de navigation](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html). Les repères aident les utilisateurs de technologies d'assistance à trouver rapidement les sections principales d'une page. Pour créer un repère de navigation, placez les `Breadcrumbs` à l'intérieur d'un élément `<nav>` avec un `aria-label` :

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

### Éléments désactivés

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

### Contenu de fin

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

## Propriétés

| Nom             | Description                                                                  | Type                                       | Défaut |
| :-------------- | :--------------------------------------------------------------------------- | :----------------------------------------- | :----- |
| children        | Éléments du fil d'Ariane                                                     | `React.ReactElement<BreadcrumbsItemProps>` |        |
| disabled        | Détermine si `Breadcrumbs` est désactivé.                                    | `boolean`                                  |        |
| showRoot        | Active ou désactive l'affichage permanent de l'élément racine si les éléments sont réduits. | `boolean`                                  |        |
| popupPlacement  | Style de la fenêtre contextuelle de l'élément réduit.                        | `PopupPlacement`                           |        |
| popupStyle      | Style de la fenêtre contextuelle de l'élément réduit.                        | `"staircase"`                              |        |
| qa              | Attribut HTML `data-qa`, utilisé pour les tests                              | `string`                                   |        |
| separator       | Nœud séparateur personnalisé.                                                 | `React.ReactNode`                          | "/"    |
| action          | Gestionnaire d'événement `click`.                                            | `(id: Key) => void`                        |        |
| id              | ID unique de l'élément.                                                      | `string`                                   |        |
| className       | Nom de la classe CSS pour l'élément.                                         | `string`                                   |        |
| style           | Définit le style en ligne pour l'élément.                                    | `CSSProperties`                            |        |
| aria-label      | Définit une valeur de chaîne qui étiquette l'élément actuel.                 | `string`                                   |        |
| aria-labelledby | Identifie l'élément (ou les éléments) qui étiquette l'élément actuel.        | `string`                                   |        |
| aria-describedby | Identifie l'élément (ou les éléments) qui décrivent l'objet.                | `string`                                   |        |
| endContent      | Nœud de l'utilisateur rendu après le dernier élément du fil d'Ariane.        | `React.ReactNode`                          |        |

### BreadcrumbsItemProps

| Nom        | Description                                                    | Type                              | Défaut |
| :--------- | :------------------------------------------------------------- | :-------------------------------- | :----- |
| children   | Contenu des fil d'Ariane.                                      | `string`                          |        |
| title      | Représentation textuelle du contenu de l'élément.              | `string`                          |        |
| aria-label | Étiquette d'accessibilité pour l'élément.                      | `string`                          |        |
| href       | URL à utiliser pour le lien hypertexte.                        | `string`                          |        |
| target     | Fenêtre cible pour le lien.                                    | `React.HTMLAttributeAnchorTarget` |        |
| rel        | Relation entre la ressource liée et la page actuelle.          | `string`                          |        |
| disabled   | Indique si le BreadcrumbsItem est désactivé.                   | `boolean`                         |        |
