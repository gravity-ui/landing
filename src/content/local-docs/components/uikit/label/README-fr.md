<!--GITHUB_BLOCK-->

# Label

<!--/GITHUB_BLOCK-->

Vous pouvez utiliser des `Label`s pour mettre en évidence certaines informations. Un `Label` avec un bouton `Close` ou `Copy` peut être utile pour diverses actions simples.

Les `Label`s sont les plus adaptés pour afficher des informations textuelles sur une seule ligne avec différents codes couleur qui indiquent leur importance.

```tsx
import {Label} from '@gravity-ui/uikit';
```

## Apparence

Un `Label` peut être affiché dans plusieurs styles.

### Thème

Utilisez la propriété `theme` pour appliquer différents thèmes pour divers statuts. Vous pouvez utiliser les valeurs suivantes : `normal`, `info`, `success`, `warning`, `danger`, `utility`, `unknown` et `clear`.
Le thème par défaut est `normal`.

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label theme="normal">Normal</Label>
            <Label theme="info">Info</Label>
            <Label theme="success">Success</Label>
            <Label theme="warning">Warning</Label>
            <Label theme="danger">Danger</Label>
            <Label theme="utility">Utility</Label>
            <Label theme="unknown">Unknown</Label>
            <Label theme="clear">Clear</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label theme="normal">Normal</Label>
<Label theme="info">Info</Label>
<Label theme="success">Success</Label>
<Label theme="warning">Warning</Label>
<Label theme="danger">Danger</Label>
<Label theme="utility">Utility</Label>
<Label theme="unknown">Unknown</Label>
<Label theme="clear">Clear</Label>
```

<!--/GITHUB_BLOCK-->

### Type

La propriété `type` ajoute diverses options à un `Label` :

`copy` : Ajoute un bouton de copie ; lorsqu'il est cliqué, il copie la valeur de la propriété `copyText`.

`close` : Ajoute un bouton de fermeture pour gérer les listes de labels.

`info` : Ajoute une icône d'information au label.

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label type="default" onClick={() => alert('On click label')} size="s">
                Clickable
            </Label>
            <Label type="close" onCloseClick={() => alert('On click close')} size="s">
                Closable
            </Label>
            <Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">
                Copy
            </Label>
            <Label type="info" size="s">Info</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label type="default" onClick={() => alert('On click label')} size="s">Clickable</Label>
<Label type="close" onCloseClick={() => alert('On click close')} size="s">Closable</Label>
<Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">Copy</Label>
<Label type="info" size="s">Info</Label>
```

<!--/GITHUB_BLOCK-->

### Icône

Vous pouvez ajouter une icône avec la propriété `icon`. Pour ce faire, utilisez le composant [`Icon`](../Icon), qui est un wrapper spécial pour les SVGs.

<!--SANDBOX
import {Icon, Label} from '@gravity-ui/uikit';
import {Gear} from '@gravity-ui/icons';

export default function () {
    return (
        <>
            <Label icon={<Icon size={16} data={Gear} />}>Icon</Label>
            <Label type="close" icon={<Icon size={16} data={Gear} />}>Icon and close</Label>
            <Label type="copy" icon={<Icon size={16} data={Gear} />}>Icon and copy</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label icon={<Icon size={16} data={GearIcon} />}>Icon</Label>
<Label type="close" icon={<Icon size={16} data={GearIcon} />}>Icon and close</Label>
<Label type="copy" icon={<Icon size={16} data={GearIcon} />}>Icon and copy</Label>
```

<!--/GITHUB_BLOCK-->

## Valeur

Vous pouvez utiliser des `Label`s pour afficher des informations clé-valeur. Pour cela, vous devez fournir la clé à la propriété `children`, et la valeur à `value` :

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label theme="normal" value="Value">Key</Label>
            <Label theme="info" value="Value">Key</Label>
            <Label theme="success" value="Value">Key</Label>
            <Label theme="warning" value="Value">Key</Label>
            <Label theme="danger" value="Value">Key</Label>
            <Label theme="utility" value="Value">Key</Label>
            <Label theme="unknown" value="Value">Key</Label>
            <Label theme="clear" value="Value">Key</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label theme="normal" value="Value">Key</Label>
<Label theme="info" value="Value">Key</Label>
<Label theme="success" value="Value">Key</Label>
<Label theme="warning" value="Value">Key</Label>
<Label theme="danger" value="Value">Key</Label>
<Label theme="utility" value="Value">Key</Label>
<Label theme="unknown" value="Value">Key</Label>
<Label theme="clear" value="Value">Key</Label>
```

<!--/GITHUB_BLOCK-->

## État

Un `label` peut avoir différents états :

- `disabled` : Aucune interaction n'est autorisée.
- `interactive` : Rend le label survolable.
- `loading` : Affiche un état de chargement.

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label>Default</Label>
            <Label disabled>Disabled</Label>
            <Label interactive>Interactive</Label>
            <Label loading>Loading</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label>Default</Label>
<Label disabled>Disabled</Label>
<Label interactive>Interactive</Label>
<Label loading>Loading</Label>
```

<!--/GITHUB_BLOCK-->

## Taille

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label size="xxs">XXS size</Label>
            <Label size="xs">XS size</Label>
            <Label size="s">S size</Label>
            <Label size="m">M size</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label size="xxs">XXS size</Label>
<Label size="xs">XS size</Label>
<Label size="s">S size</Label>
<Label size="m">M size</Label>
```

<!--/GITHUB_BLOCK-->

## Propriétés

| Nom             | Description                                     |                  Type                   |   Défaut   |
| :-------------- | :---------------------------------------------- | :-------------------------------------: | :---------: |
| children        | Contenu                                         |            `React.ReactNode`            |             |
| className       | Attribut `class` HTML                           |                `string`                 |             |
| closeButtonLabel | `aria-label` du bouton de fermeture             |                `string`                 |             |
| copyButtonLabel  | `aria-label` du bouton de copie                 |                `string`                 |             |
| copyText        | Texte à copier                                  |                `string`                 |             |
| disabled        | État désactivé                                  |                `boolean`                |             |
| icon            | Icône de l'étiquette (à gauche)                 |            `React.ReactNode`            |             |
| interactive     | Active l'effet de survol                        |                `boolean`                |             |
| loading         | État de chargement                              |                `boolean`                |   `false`   |
| onClick         | Gestionnaire d'événement `click`                |               `Function`                |             |
| onCloseClick    | Gestionnaire d'événement `click` du bouton de fermeture |               `Function`                |             |
| onCopy          | Gestionnaire d'événement `copy`                 |               `Function`                |             |
| qa              | Attribut `data-qa` HTML, utilisé pour les tests |                `string`                 |             |
| size            | Taille de l'étiquette                           |       `"xxs"` `"xs"` `"s"` `"m"`        |   `"xs"`    |
| theme           | Thème de l'étiquette                            |                `string`                 | `"normal"`  |
| title           | Attribut `title` HTML                           |                `string`                 |             |
| type            | Type d'étiquette                                | `"default"` `"copy"` `"close"` `"info"` | `"default"` |
| value           | Valeur de l'étiquette (affichée comme `"children : value"`) |            `React.ReactNode`            |             |
| width           | Contrôle comment l'étiquette utilise l'espace du parent |                `"auto"`                 |             |
