<!--GITHUB_BLOCK-->

# TableColumnSetup

<!--/GITHUB_BLOCK-->

Le composant `TableColumnSetup` fournit une interface utilisateur pour configurer la visibilité et l'ordre des colonnes d'un tableau. Il affiche un bouton qui ouvre une popup avec une liste des colonnes disponibles, permettant aux utilisateurs de montrer/masquer les colonnes et éventuellement de les réorganiser par glisser-déposer.

```tsx
import {TableColumnSetup} from '@gravity-ui/uikit';
```

<!--SANDBOX
import {TableColumnSetup} from '@gravity-ui/uikit';

const items = [
    {id: 'name', title: 'Name', selected: true, required: true},
    {id: 'email', title: 'Email', selected: true},
    {id: 'phone', title: 'Phone', selected: false},
];

export default function () {
    return <TableColumnSetup items={items} onUpdate={(updatedItems) => console.log(updatedItems)} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const items = [
  {id: 'name', title: 'Name', selected: true, required: true},
  {id: 'email', title: 'Email', selected: true},
  {id: 'phone', title: 'Phone', selected: false},
];

<TableColumnSetup items={items} onUpdate={(updatedItems) => console.log(updatedItems)} />;
```

<!--/GITHUB_BLOCK-->

## Colonnes triables

Activez la fonctionnalité de glisser-déposer pour permettre aux utilisateurs de réorganiser les colonnes en définissant la propriété `sortable` sur `true`.

<!--SANDBOX
import {TableColumnSetup} from '@gravity-ui/uikit';

const items = [
    {id: 'name', title: 'Name', selected: true, required: true},
    {id: 'email', title: 'Email', selected: true},
    {id: 'phone', title: 'Phone', selected: false},
];

export default function () {
    return (
        <TableColumnSetup
            items={items}
            sortable
            onUpdate={(updatedItems) => console.log(updatedItems)}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TableColumnSetup items={items} sortable onUpdate={(updatedItems) => console.log(updatedItems)} />
```

<!--/GITHUB_BLOCK-->

## Modes d'application

Contrôlez quand les modifications sont appliquées en utilisant la propriété `hideApplyButton` :

- `true` - Les modifications sont appliquées immédiatement lorsque l'utilisateur bascule les colonnes
- `false` - Les modifications sont appliquées uniquement lorsque l'utilisateur clique sur le bouton Appliquer

<!--SANDBOX
import {TableColumnSetup} from '@gravity-ui/uikit';

const items = [
    {id: 'name', title: 'Name', selected: true, required: true},
    {id: 'email', title: 'Email', selected: true},
    {id: 'phone', title: 'Phone', selected: false},
];

export default function () {
    return (
        <TableColumnSetup
            items={items}
            hideApplyButton
            onUpdate={(updatedItems) => console.log(updatedItems)}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TableColumnSetup
  items={items}
  hideApplyButton
  onUpdate={(updatedItems) => console.log(updatedItems)}
/>
```

<!--/GITHUB_BLOCK-->

## Affichage du statut

Affichez le nombre de colonnes sélectionnées dans le bouton du sélecteur en activant la propriété `showStatus`.

<!--SANDBOX
import {TableColumnSetup} from '@gravity-ui/uikit';

const items = [
    {id: 'name', title: 'Name', selected: true, required: true},
    {id: 'email', title: 'Email', selected: true},
    {id: 'phone', title: 'Phone', selected: false},
];

export default function () {
    return <TableColumnSetup items={items} showStatus onUpdate={(updatedItems) => console.log(updatedItems)} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TableColumnSetup
  items={items}
  showStatus={true}
  onUpdate={(updatedItems) => console.log(updatedItems)}
/>
```

<!--/GITHUB_BLOCK-->

## Sélecteur personnalisé

Personnalisez le bouton de déclenchement en utilisant la propriété `renderSwitcher`.

<!--SANDBOX
import {Button, TableColumnSetup} from '@gravity-ui/uikit';

const items = [
    {id: 'name', title: 'Name', selected: true, required: true},
    {id: 'email', title: 'Email', selected: true},
    {id: 'phone', title: 'Phone', selected: false},
];

export default function () {
    return (
        <TableColumnSetup
            items={items}
            renderSwitcher={({onClick, onKeyDown}) => (
                <Button onClick={onClick} onKeyDown={onKeyDown} view="outlined">
                    Configure Columns
                </Button>
            )}
            onUpdate={(updatedItems) => console.log(updatedItems)}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TableColumnSetup
  items={items}
  renderSwitcher={({onClick, onKeyDown}) => (
    <Button onClick={onClick} onKeyDown={onKeyDown} view="outlined">
      Configure Columns
    </Button>
  )}
  onUpdate={(updatedItems) => console.log(updatedItems)}
/>
```

<!--/GITHUB_BLOCK-->

## Propriétés

| Nom            | Description                                                     |                            Type                             | Défaut |
| :------------- | :-------------------------------------------------------------- | :---------------------------------------------------------: | :----: |
| items           | Tableau d'éléments de configuration de colonne                  |                  `TableColumnSetupItem[]`                   |        |
| onUpdate        | Callback déclenché lorsque la configuration des colonnes change |          `(items: TableColumnSetupItem[]) => void`          |        |
| disabled        | Désactive le bouton du sélecteur                                |                          `boolean`                          | `false` |
| sortable        | Active le tri des colonnes par glisser-déposer                  |                          `boolean`                          | `true`  |
| hideApplyButton | Quand appliquer les modifications : immédiatement ou manuellement via le bouton Appliquer |                          `boolean`                          | `false` |
| showStatus      | Affiche le nombre de colonnes sélectionnées/total dans le bouton du sélecteur |                          `boolean`                          | `false` |
| popupWidth      | Largeur de la popup                                             |                      `number \| 'fit'`                      |        |
| popupPlacement  | Placement de la popup par rapport au déclencheur                |      [`PopupPlacement`](../Popup/README.md#properties)      |        |
| renderSwitcher  | Fonction de rendu personnalisée pour le bouton du sélecteur     | `(props: SwitcherProps) => React.ReactElement \| undefined` |        |
| switcher        | **Obsolète.** Utilisez `renderSwitcher` à la place             |              `React.ReactElement \| undefined`              |        |
| getItemTitle    | Fonction pour obtenir le titre de l'élément                     |      `(item: TableColumnSetupItem) => React.ReactNode`      |        |
| className       | Classe CSS personnalisée pour l'élément racine                 |                          `string`                           |        |

### TableColumnSetupItem

| Nom     | Description                                       |        Type         | Défaut |
| :------ | :------------------------------------------------ | :-----------------: | :----: |
| id       | Identifiant unique de la colonne                  |      `string`       |        |
| title    | Titre d'affichage de la colonne                   |  `React.ReactNode`  |        |
| selected | Indique si la colonne est actuellement visible     |      `boolean`      |        |
| required | Indique si la colonne est obligatoire (ne peut être masquée) |      `boolean`      |        |
| sticky   | Positionnement fixe de la colonne                 | `'left' \| 'right'` |        |

### SwitcherProps

| Nom      | Description                            |                   Type                    |
| :------- | :------------------------------------- | :---------------------------------------: |
| onClick  | Gestionnaire d'événement de clic pour le sélecteur |  `React.MouseEventHandler<HTMLElement>`   |
| onKeyDown | Gestionnaire d'événement de touche enfoncée pour le sélecteur | `React.KeyboardEventHandler<HTMLElement>` |
