<!--GITHUB_BLOCK-->

# Menu

<!--/GITHUB_BLOCK-->

Le composant `Menu` permet de créer facilement des vues pour des listes d'actions.

```tsx
import {Menu} from '@gravity-ui/uikit';
```

Il dispose de composants dédiés pour les éléments (`Menu.Item`) et les groupes (`Menu.Group`). Vous pouvez les combiner pour créer des menus plus complexes.

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

### Taille

Cette propriété est utilisée pour sélectionner la taille du menu. La valeur par défaut est `m`.

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

## Propriétés

| Nom      | Description                                |           Type           | Défaut |
| :-------- | :----------------------------------------- | :----------------------: | :-----: |
| size      | Taille du menu                             | `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| children  | Élément enfant                             |    `React.ReactNode`     |         |
| className | Attribut HTML `class`                      |         `string`         |         |
| style     | Attribut HTML `style`                      |  `React.CSSProperties`   |         |
| qa        | Attribut HTML `data-qa`, utilisé pour les tests |         `string`         |         |

## Menu.Item

Cette propriété est utilisée pour rendre les éléments du menu.

### Icône

Utilisez la propriété `iconStart` ou `iconEnd` pour afficher une icône au début ou à la fin d'un élément de menu :

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

### États

En utilisant cette propriété, vous pouvez activer ou désactiver (griser) des éléments de menu spécifiques :

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

### Thème

Cela vous permet de changer le thème de l'élément de menu. Le thème par défaut est `normal`.

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

### Propriétés

| Nom             | Description                                    |           Type            |  Défaut   |
| :-------------- | :--------------------------------------------- | :-----------------------: | :--------: |
| iconStart       | Icône de menu avant le texte de l'élément      |        `ReactNode`        |            |
| iconEnd         | Icône de menu après le texte de l'élément      |        `ReactNode`        |            |
| selected        | Indicateur de sélection de l'élément de menu   |         `boolean`         |  `false`   |
| disabled        | Indicateur de désactivation de l'élément de menu |         `boolean`         |  `false`   |
| active          | Indicateur d'activité de l'élément de menu     |         `boolean`         |  `false`   |
| href            | URL                                            |         `string`          |            |
| title           | Attribut title                                 |         `string`          |            |
| target          | Attribut target                                |         `string`          |            |
| rel             | Attribut rel                                   |         `string`          |            |
| onClick         | Gestionnaire de l'événement onclick              | `React.MouseEventHandler` |            |
| theme           | Thème de l'élément de menu                     |   `"normal"` `"danger"`   | `"normal"` |
| children        | Élément enfant                                 |     `React.ReactNode`     |            |
| className       | Attribut HTML `class` pour l'élément racine    |         `string`          |            |
| contentClassName | Attribut HTML `class` pour l'élément de contenu |         `string`          |            |
| style           | Attribut HTML `style`                          |   `React.CSSProperties`   |            |
| qa              | Attribut HTML `data-qa`, utilisé pour les tests |         `string`          |            |
| extraProps      | Attributs HTML supplémentaires                 |         `Record`          |            |

## Menu.Group

Vous pouvez regrouper des éléments par thèmes au sein d'un même menu :

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

### Propriétés

| Nom       | Description                                |         Type          | Défaut |
| :-------- | :----------------------------------------- | :-------------------: | :----: |
| label     | Libellé du groupe de menu                  |       `string`        |        |
| children  | Élément enfant                             |   `React.ReactNode`   |        |
| className | Attribut HTML `class`                      |       `string`        |        |
| style     | Attribut HTML `style`                      | `React.CSSProperties` |        |
| qa        | Attribut HTML `data-qa`, utilisé pour les tests |       `string`        |        |
