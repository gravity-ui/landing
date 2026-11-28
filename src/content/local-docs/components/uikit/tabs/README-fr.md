<!--GITHUB_BLOCK-->

# Tabs components

<!--/GITHUB_BLOCK-->

Les composants `Tabs` sont utilisés pour explorer, organiser le contenu et basculer entre différentes vues.

```tsx
import {TabProvider, TabList, Tab, TabPanel} from '@gravity-ui/uikit';
```

<!--SANDBOX
import {useState} from 'react';
import {Tab, TabList, TabPanel, TabProvider} from '@gravity-ui/uikit';

export default function () {
    const [activeTab, setActiveTab] = useState('second');

    return (
        <TabProvider value={activeTab} onUpdate={setActiveTab}>
            <TabList>
                <Tab value="first">First Tab</Tab>
                <Tab value="second">Active Tab</Tab>
                <Tab value="third" disabled>
                    Disabled Tab
                </Tab>
            </TabList>
            <div>
                <TabPanel value="first">First Panel</TabPanel>
                <TabPanel value="second">Second Panel</TabPanel>
                <TabPanel value="third">Third Panel</TabPanel>
            </div>
        </TabProvider>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [activeTab, setActiveTab] = React.useState('second');

return (
  <TabProvider value={activeTab} onUpdate={setActiveTab}>
    <TabList>
      <Tab value="first">First Tab</Tab>
      <Tab value="second">Active Tab</Tab>
      <Tab value="third" disabled>
        Disabled Tab
      </Tab>
    </TabList>
    <div>
      <TabPanel value="first">First Panel</TabPanel>
      <TabPanel value="second">Second Panel</TabPanel>
      <TabPanel value="third">Third Panel</TabPanel>
    </div>
  </TabProvider>
);
```

<!--/GITHUB_BLOCK-->

### Composants

- [TabProvider](#tabprovider)
- [TabList](#tablist)
- [Tab](#tab)
- [TabPanel](#tabpanel)

## TabProvider

Un composant qui fournit la fonctionnalité de sélection d'onglet.

## Propriétés

| Nom     | Description                                                              |           Type            | Défaut |
| :------ | :----------------------------------------------------------------------- | :-----------------------: | :----: |
| children | Liste des onglets et des panneaux d'onglets, probablement avec des wrappers |     `React.ReactNode`     |        |
| value    | Valeur de l'onglet actif                                                |         `string`          |        |
| onUpdate | Gestionnaire de mise à jour de l'onglet                                  | `(value: string) => void` |        |

## TabList

Composant qui sert de conteneur pour un ensemble d'onglets (`tabs`).

### Taille

Pour contrôler la taille des onglets (`tabs`), utilisez la propriété `size`. La taille par défaut est `m`.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TabList value="second" size="m">
                <Tab value="first">M Size first</Tab>
                <Tab value="second">M Size second</Tab>
            </TabList>
            <TabList value="second" size="l">
                <Tab value="first">L Size first</Tab>
                <Tab value="second">L Size second</Tab>
            </TabList>
            <TabList value="second" size="xl">
                <Tab value="first">XL Size first</Tab>
                <Tab value="second">v Size second</Tab>
            </TabList>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="second" size="m">
    <Tab value="first">M Size first</Tab>
    <Tab value="second">M Size second</Tab>
</TabList>
<TabList value="second" size="l">
    <Tab value="first">L Size first</Tab>
    <Tab value="second">L Size second</Tab>
</TabList>
<TabList value="second" size="xl">
    <Tab value="first">XL Size first</Tab>
    <Tab value="second">v Size second</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Propriétés

`TabList` accepte toutes les propriétés valides d'un élément `div` en plus de celles-ci :

| Nom             | Description                                                                                                |               Type               | Défaut  |
| :-------------- | :--------------------------------------------------------------------------------------------------------- | :------------------------------: | :-----: |
| children        | Liste des onglets, probablement avec des wrappers                                                          |        `React.ReactNode`         |         |
| value           | Valeur de l'onglet actif                                                                                  |             `string`             |         |
| onUpdate        | Gestionnaire de mise à jour de l'onglet                                                                     |    `(value: string) => void`     |         |
| className       | Classe CSS de l'élément                                                                                    |             `string`             |         |
| activateOnFocus | Active l'onglet au focus. Utilisez ceci uniquement si le contenu du panneau peut être affiché immédiatement. |            `boolean`             | `false` |
| size            | Taille de l'élément                                                                                        |        `"m"` `"l"` `"xl"`        |  `"m"`  |
| contentOverflow | Comment gérer les éléments qui ne rentrent pas horizontalement (retour à la ligne, défilement ou menu **Plus**) | `"wrap"` `"scroll"` `"collapse"` | `"wrap"` |
| moreLabel       | Libellé du déclencheur de dépassement de contenu lorsque l'onglet actif est visible dans la liste           |        `React.ReactNode`         | `"More"` |
| qa              | Attribut HTML `data-qa`, utilisé dans les tests                                                            |             `string`             |         |

## Tab

Ce composant est utilisé pour rendre les éléments d'onglet.

### Icône

Utilisé si vous avez besoin d'afficher une icône pour un élément d'onglet.

<!--SANDBOX
import {Gear} from '@gravity-ui/icons';
import {Icon, Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" icon={<Icon size={16} data={Gear} />}>
                Tab with icon
            </Tab>
            <Tab value="second">Tab without icon</Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" icon={<Icon size={16} data={GearIcon} />}>
    Tab with icon
  </Tab>
  <Tab value="second">Tab without icon</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### États

L'élément d'onglet a un indicateur désactivé.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first">First Tab</Tab>
            <Tab value="second" disabled>
                Disabled Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first">First Tab</Tab>
  <Tab value="second" disabled>
    Disabled Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Compteur

Utilisé si vous avez besoin d'afficher un nombre pour un élément d'onglets.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" counter={13}>
                First Tab
            </Tab>
            <Tab value="second" counter={3}>
                Second Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" counter={13}>
    First Tab
  </Tab>
  <Tab value="second" counter={3}>
    Second Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Libellé

Utilisé si vous avez besoin d'afficher un libellé pour un élément d'onglets.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" label={{content: 'Label 1'}}>
                First Tab
            </Tab>
            <Tab value="second" label={{content: 'Label 2'}}>
                Second Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" label={{content: 'Label 1'}}>
    First Tab
  </Tab>
  <Tab value="second" label={{content: 'Label 2'}}>
    Second Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Dépassement de contenu

Utilisé si vous avez besoin de réduire les éléments d'onglets.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
    <Tab value="first">First Tab</Tab>
    <Tab value="second">Second Tab</Tab>
    <Tab value="third">Third Tab</Tab>
    <Tab value="fourth">Fourth Tab</Tab>
    <Tab value="fifth">Fifth Tab</Tab>
</TabList>
`}
>
    <UIKit.TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
        <UIKit.Tab value="first">First Tab</UIKit.Tab>
        <UIKit.Tab value="second">Second Tab</UIKit.Tab>
        <UIKit.Tab value="third">Third Tab</UIKit.Tab>
        <UIKit.Tab value="fourth">Fourth Tab</UIKit.Tab>
        <UIKit.Tab value="fifth">Fifth Tab</UIKit.Tab>
    </UIKit.TabList>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
  <Tab value="first">First Tab</Tab>
  <Tab value="second">Second Tab</Tab>
  <Tab value="third">Third Tab</Tab>
  <Tab value="fourth">Fourth Tab</Tab>
  <Tab value="fifth">Fifth Tab</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Propriétés

`Tab` accepte toutes les propriétés valides d'un élément `button` ou `a` en plus de celles-ci :

| Nom      | Description                             |        Type         | Défaut |
| :------- | :-------------------------------------- | :-----------------: | :----: |
| value    | Valeur de l'onglet                     |      `string`       |        |
| title    | Titre de l'onglet                      |      `string`       |        |
| icon     | Icône affichée au début               |  `React.ReactNode`  |        |
| counter  | Contenu affiché à la fin               |  `number` `string`  |        |
| href     | Une URL vers laquelle lier.             |      `string `      |        |
| label    | `<Label>` affiché à la fin              |  `React.ReactNode`  |        |
| disabled | État inactif                          |      `boolean`      |        |
| component | Remplace le composant racine          | `React.ElementType` |        |
| children | Contenu de l'onglet                   |  `React.ReactNode`  |        |
| qa       | Attribut HTML `data-qa`, utilisé dans les tests |      `string`       |        |

## TabPanel

Est un élément conteneur pour le contenu associé à un onglet

### Propriétés

`TabPanel` accepte toutes les propriétés valides d'un élément `div` en plus de celles-ci :

| Nom     | Description           |       Type        | Défaut |
| :------ | :-------------------- | :---------------: | :----: |
| children | Contenu du panneau    | `React.ReactNode` |        |
| value   | Valeur de l'onglet actif |     `string`      |        |
| qa      | Attribut HTML `data-qa`, utilisé dans les tests |     `string`      |        |

## API CSS

| Nom                             | Description                |
| :------------------------------- | :------------------------- |
| `--g-tabs-border-width`          | Largeur de la bordure des onglets |
| `--g-tabs-item-height`           | Hauteur des éléments d'onglet |
| `--g-tabs-item-border-width`     | Largeur de la bordure des éléments d'onglet |
| `--g-tabs-item-gap`              | Espacement entre les onglets |
| `--g-tabs-vertical-item-height`  | Hauteur des éléments d'onglet verticaux |
| `--g-tabs-vertical-item-padding` | Rembourrage des éléments d'onglet verticaux |
