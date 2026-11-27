<!--GITHUB_BLOCK-->

# Button

<!--/GITHUB_BLOCK-->

Les boutons servent de déclencheur pour certaines actions. Bien que ce soit leur objectif principal, dans de très rares cas, ils peuvent être utilisés comme liens pour naviguer vers d'autres pages.

```tsx
import {Button} from '@gravity-ui/uikit';
```

## Apparence

Il existe quatre types de `Button` en termes d'apparence : basique, contourné, plat et contrasté.
L'apparence du `Button` est déterminée par la propriété `view`.

### Basique

`action` : Le type de `Button` le plus distinctif. Il est utilisé pour l'action principale d'un écran qui nécessite le plus d'attention.
Nous recommandons d'utiliser un seul bouton de ce type par page.

`normal` : Type de `Button` par défaut conçu pour les actions secondaires ou pour maintenir l'importance d'une action sans attirer trop l'attention sur elle.

`raised` : Placé au-dessus du contenu comme un élément flottant, généralement avec un emplacement fixe.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit'

export default function () {
    return (
        <>
            <Button view="action" size="l">Action</Button>
            <Button view="normal" size="l">Normal</Button>
            <Button view="raised" size="l">Raised</Button>
        </>
    )
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="action" size="l">Action</Button>
<Button view="normal" size="l">Normal</Button>
<Button view="raised" size="l">Raised</Button>
```

<!--/GITHUB_BLOCK-->

### Contourné

`outlined` : Utilisé pour les actions secondaires qui nécessitent moins d'attention. Il peut être utilisé avec ou sans bouton principal ; dans ce dernier cas, il doit être mis en évidence.

`outlined-action` : Généralement utilisé comme lien vers une autre page ou une ressource externe.

Ce type a également des variations sémantiques qui peuvent être utilisées lorsque des sémantiques supplémentaires sont nécessaires : `outlined-info`, `outlined-success`, `outlined-warning` et `outlined-danger`.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button view="outlined" size="l">Outlined</Button>
            <Button view="outlined-action" size="l">Outlined Action</Button>
            <Button view="outlined-info" size="l">Outlined Info</Button>
            <Button view="outlined-success" size="l">Outlined Success</Button>
            <Button view="outlined-warning" size="l">Outlined Warning</Button>
            <Button view="outlined-danger" size="l">Outlined Danger</Button>
            <Button view="outlined-utility" size="l">Outlined Utility</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="outlined" size="l">Outlined</Button>
<Button view="outlined-action" size="l">Outlined Action</Button>
<Button view="outlined-info" size="l">Outlined Info</Button>
<Button view="outlined-success" size="l">Outlined Success</Button>
<Button view="outlined-warning" size="l">Outlined Warning</Button>
<Button view="outlined-danger" size="l">Outlined Danger</Button>
<Button view="outlined-utility" size="l">Outlined Utility</Button>
```

<!--/GITHUB_BLOCK-->

### Plat

`flat` : Utilisé pour les actions auxiliaires qui nécessitent le moins d'attention. Il est souvent utilisé dans une liste de boutons ou d'icônes d'action (sans texte) dans un éditeur.

`flat-secondary` : Moins mis en évidence que le bouton `flat`. Il est souvent utilisé comme bouton secondaire dans les boîtes de dialogue et les fenêtres modales.

`flat-action` : Généralement utilisé comme lien vers une autre page ou une ressource externe.

Il a également des variations sémantiques qui peuvent être utilisées lorsque des sémantiques supplémentaires sont nécessaires : `outlined-info`, `outlined-success`, `outlined-warning` et `outlined-danger`.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button view="flat" size="l">Flat</Button>
            <Button view="flat-action" size="l">Flat Action</Button>
            <Button view="flat-info" size="l">Flat Info</Button>
            <Button view="flat-success" size="l">Flat Success</Button>
            <Button view="flat-warning" size="l">Flat Warning</Button>
            <Button view="flat-danger" size="l">Flat Danger</Button>
            <Button view="flat-utility" size="l">Flat Utility</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="flat" size="l">Flat</Button>
<Button view="flat-secondary" size="l">Flat Secondary</Button>
<Button view="flat-action" size="l">Flat Action</Button>
<Button view="flat-info" size="l">Flat Info</Button>
<Button view="flat-success" size="l">Flat Success</Button>
<Button view="flat-warning" size="l">Flat Warning</Button>
<Button view="flat-danger" size="l">Flat Danger</Button>
<Button view="flat-utility" size="l">Flat Utility</Button>
```

<!--/GITHUB_BLOCK-->

### Contrasté

Les boutons `normal-contrast`, `outline-contrast` et `flat-contrast` mettent en évidence les actions sur un arrière-plan complexe, par exemple dans une bannière, ou sur un arrière-plan inversé.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit'
import {type CSSProperties} from 'react';

const containerStyle: CSSProperties = {
    display: 'flex',
    gap: 16,
    backgroundColor: 'rgb(68, 38, 204)',
    padding: '20px',
    borderRadius: '8px'
}

export default function () {
    return (
        <div style={containerStyle}>
            <Button view="normal-contrast" size="l">Normal Contrast</Button>
            <Button view="outlined-contrast" size="l">Outlined Contrast</Button>
            <Button view="flat-contrast" size="l">Flat Contrast</Button>
        </div>
    )
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="normal-contrast" size="l">Normal Contrast</Button>
<Button view="outlined-contrast" size="l">Outlined Contrast</Button>
<Button view="flat-contrast" size="l">Flat Contrast</Button>
```

<!--/GITHUB_BLOCK-->

## Icônes

Pour ajouter une icône à un `Button`, utilisez le composant [`Icon`](../Icon), qui est un wrapper spécial pour les SVGs.

<!--SANDBOX
import {Gear} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button view="outlined" size="l">
                <Icon data={Gear} size={18} />
                Start
            </Button>
            <Button view="outlined" size="l">
                End
                <Icon data={Gear} size={18} />
            </Button>
            <Button view="outlined" size="l">
                <Icon data={Gear} size={18} />
                Both
                <Icon data={Gear} size={18} />
            </Button>
            <Button view="outlined" size="l">
                <Icon data={Gear} size={18} />
            </Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="outlined" size="l">
    <Icon data={Gear} size={18} />
    Start
</Button>
<Button view="outlined" size="l">
    End
    <Icon data={Gear} size={18} />
</Button>
<Button view="outlined" size="l">
    <Icon data={Gear} size={18} />
    Both
    <Icon data={Gear} size={18} />
</Button>
<Button view="outlined" size="l">
    No text:
    <Icon data={Gear} size={18} />
</Button>
```

<!--/GITHUB_BLOCK-->

## États

Un `Button` peut avoir différents états :

`disabled` : Lorsque le bouton n'est pas disponible pour une raison quelconque.

`loading` : Lorsque des processus asynchrones sont en cours d'exécution en arrière-plan.

`selected` : Lorsque l'utilisateur peut **activer** et **désactiver** le bouton.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button size="l" disabled>Disabled</Button>
            <Button size="l" loading>Loading</Button>
            <Button size="l" selected>Selected</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button size="l" disabled>Disabled</Button>
<Button size="l" loading>Loading</Button>
<Button size="l" selected>Selected</Button>
```

<!--/GITHUB_BLOCK-->

### Déclencheur de menu

Le `Button` modifie automatiquement son apparence lorsque les attributs aria correspondants (`aria-haspopup`, `aria-expanded`) sont passés :

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button aria-haspopup="menu" aria-expanded="true">Menu</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button aria-haspopup="menu" aria-expanded="true">
  Menu
</Button>
```

<!--/GITHUB_BLOCK-->

## Taille

Utilisez la propriété `size` pour gérer la taille du `Button`. La taille par défaut est `m`.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button size="xs">XS Size</Button>
            <Button size="s">S Size</Button>
            <Button size="m">M Size</Button>
            <Button size="l">L Size</Button>
            <Button size="xl">XL Size</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button size="xs">XS Size</Button>
<Button size="s">S Size</Button>
<Button size="m">M Size</Button>
<Button size="l">L Size</Button>
<Button size="xl">XL Size</Button>
```

<!--/GITHUB_BLOCK-->

## Largeur

Utilisez la propriété `width` pour gérer la façon dont le `Button` se comporte à l'intérieur du conteneur :

`auto` : Limite la largeur maximale du `Button` en masquant le contenu qui dépasse avec des points de suspension.

`max` : Fait correspondre la largeur du `Button` à la largeur du conteneur parent, en masquant également le contenu qui dépasse avec des points de suspension.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const containerStyle: CSSProperties = {
    width: 100,
    border: '2px dashed gray',
};

const titleStyle: CSSProperties = {
    textAlign: 'center',
};

export default function () {
    return (
        <>
            <div style={containerStyle}>
                <h4 style={titleStyle}>Default</h4>
                <p>
                    <Button>Text</Button>
                </p>
                <p>
                    <Button>Very Long Text</Button>
                </p>
            </div>
            <div style={containerStyle}>
                <h4 style={titleStyle}>Auto</h4>
                <p>
                    <Button width="auto">Text</Button>
                </p>
                <p>
                    <Button width="auto">Very Long Text</Button>
                </p>
            </div>
            <div style={containerStyle}>
                <h4 style={titleStyle}>Max</h4>
                <p>
                    <Button width="max">Text</Button>
                </p>
                <p>
                    <Button width="max">Very Long Text</Button>
                </p>
            </div>
        </>
    );
}
SANDBOX-->

## Broche

La propriété `pin` vous permet de gérer la forme des bords _début_ et _fin_ et est généralement utilisée pour combiner plusieurs boutons en une seule unité.
La valeur de la propriété `pin` se compose des noms de style _début_ et _fin_ séparés par un trait d'union, par exemple `round-brick`.
Les styles de bord sont : `round` (par défaut), `circle`, `brick` et `clear`.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <div>
                <Button view="action" size="l" pin="round-clear">Create</Button>
                <Button view="action" size="l" pin="brick-round">...</Button>
            </div>
            <div>
                <Button view="normal" size="l" pin="circle-clear">Start</Button>
                <Button view="normal" size="l" pin="brick-brick" selected>Center</Button>
                <Button view="normal" size="l" pin="clear-circle">End</Button>
            </div>
            <div>
                <Button view="outlined" pin="brick-clear">1</Button>
                <Button view="outlined" pin="clear-clear">2</Button>
                <Button view="outlined" pin="clear-clear">3</Button>
                <Button view="outlined" pin="clear-brick">4</Button>
            </div>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div>
    <Button view="action" size="l" pin="round-brick">Create</Button>
    <Button view="action" size="l" pin="brick-round">...</Button>
</div>
<div>
    <Button view="normal" size="l" pin="circle-clear">Start</Button>
    <Button view="normal" size="l" pin="brick-brick" selected>Center</Button>
    <Button view="normal" size="l" pin="clear-circle">End</Button>
</div>
<div>
    <Button view="outlined" pin="brick-clear">1</Button>
    <Button view="outlined" pin="clear-clear">2</Button>
    <Button view="outlined" pin="clear-clear">3</Button>
    <Button view="outlined" pin="clear-brick">4</Button>
</div>
```

<!--/GITHUB_BLOCK-->

## Propriétés

Le `Button` accepte toutes les propriétés valides des éléments `button` ou `a` en plus de celles-ci :

| Nom      | Description                                                          |              Type               |     Défaut     |
| :------- | :------------------------------------------------------------------- | :-----------------------------: | :------------: |
| children | Contenu du `Button`. Vous pouvez utiliser du texte et le composant `<Icon/>`. |        `React.ReactNode`        |                |
| component | Remplace le composant racine                                         |       `React.ElementType`       |                |
| disabled  | Active/désactive l'état `disabled`                                   |            `boolean`            |     `false`     |
| href      | Passez ceci pour faire du composant racine un lien                   |            `string`             |                |
| loading   | Active/désactive l'état `loading`                                    |            `boolean`            |     `false`     |
| pin       | Définit le style du bord du `Button`                                 |            `string`             | `"round-round"` |
| qa        | Attribut HTML `data-qa`, utilisé pour les tests                      |            `string`             |                |
| selected  | Active/désactive l'état `selected`                                   |            `boolean`            |                |
| size      | Définit la taille du `Button`                                        | `"xs"` `"s"` `"m"` `"l"` `"xl"` |      `"m"`      |
| view      | Définit l'apparence du `Button`                                      |          `ButtonView`           |   `"normal"`    |
| width     | Contrôle comment le `Button` utilise l'espace parent                 |        `"auto"` `"max"`         |                |

## API CSS

| Nom                                | Description               |
| :---------------------------------- | :------------------------ |
| `--g-button-text-color`             | Couleur du texte          |
| `--g-button-text-color-hover`       | Couleur du texte au survol |
| `--g-button-background-color`       | Couleur de fond           |
| `--g-button-background-color-hover` | Couleur de fond au survol |
| `--g-button-border-width`           | Épaisseur de la bordure   |
| `--g-button-border-color`           | Couleur de la bordure     |
| `--g-button-border-style`           | Style de la bordure       |
| `--g-button-focus-outline-width`    | Épaisseur du contour de focus |
| `--g-button-focus-outline-color`    | Couleur du contour de focus |
| `--g-button-focus-outline-style`    | Style du contour de focus |
| `--g-button-focus-outline-offset`   | Décalage du contour de focus |
| `--g-button-height`                 | Hauteur (hauteur de ligne) |
| `--g-button-padding`                | Paddings latéraux         |
| `--g-button-border-radius`          | Rayon de la bordure       |
| `--g-button-font-size`              | Taille de la police du texte |
| `--g-button-icon-space`             | Espace disponible pour l'icône |
| `--g-button-icon-offset`            | Décalage de l'icône       |
