<!--GITHUB_BLOCK-->

# Progress

<!--/GITHUB_BLOCK-->

Le composant `Progress` affiche la progression de l'opération en cours. Il peut également être divisé en sections.

```tsx
import {Progress} from '@gravity-ui/uikit';
```

## Thème

Utilisez la propriété `theme` pour spécifier la couleur de l'ensemble de la progression ou de la partie composite :

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress text="default" value={50} />
                <Box height={4} />
                <Progress text="success" theme="success" value={50} />
            </Box>
            <Box width={'30%'}>
                <Progress text="warning" theme="warning" value={50} />
                <Box height={4} />
                <Progress text="danger" theme="danger" value={50} />
            </Box>
            <Box width={'30%'}>
                <Progress text="info" theme="info" value={50} />
                <Box height={4} />
                <Progress text="misc" theme="misc" value={50} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress text="default" value={50} />
<Progress text="warning" theme="warning" value={50} />
<Progress text="info" theme="info" value={50} />
<Progress text="success" theme="success" value={50} />
<Progress text="danger" theme="danger" value={50} />
<Progress text="misc" theme="misc" value={50} />
```

<!--/GITHUB_BLOCK-->

## États

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width={'30%'}>
            <Progress text="Loading" theme="misc" value={60} loading />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress text="Loading" theme="misc" value={60} loading={true} />
```

<!--/GITHUB_BLOCK-->

## Taille

Pour gérer la taille du composant `Progress`, utilisez la propriété `size` qui peut prendre les valeurs suivantes : `"xs"`, `"s"` et `"m"`. La propriété `text` ne fonctionne qu'avec la taille `"m"`.

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress theme="success" value={60} size="xs" />
            </Box>
            <Box width={'30%'}>
                <Progress theme="warning" value={70} size="s" />
            </Box>
            <Box width={'30%'}>
                <Progress theme="danger" value={80} size="m" />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress theme="success" value={60} size="xs" />
<Progress theme="warning" value={70} size="s" />
<Progress theme="danger" value={80} size="m" />
```

<!--/GITHUB_BLOCK-->

## Points de rupture

Utilisez la propriété `colorStops` pour définir les points de rupture du composant `Progress`.

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

const colorStops = [
    {theme: 'danger', stop: 20},
    {theme: 'warning', stop: 50},
    {theme: 'success', stop: 100},
];

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress value={10} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={40} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={60} colorStops={colorStops} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress value={10} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
<Progress value={40} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
<Progress value={60} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
```

<!--/GITHUB_BLOCK-->

Utilisez la propriété optionnelle `color` pour remplacer la couleur du thème :

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

const colorStops = [
    {theme: 'danger', stop: 20, color: '#ff4444'},
    {theme: 'warning', stop: 50, color: '#ffaa00'},
    {theme: 'success', stop: 100, color: '#44ff44'},
];

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress value={10} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={40} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={60} colorStops={colorStops} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress value={10} colorStops={[{theme: 'danger', stop: 20, color: '#ff4444'}, {theme: 'warning', stop: 50, color: '#ffaa00'}, {theme: 'success', stop: 100, color: '#44ff44'}]} />
<Progress value={40} colorStops={[{theme: 'danger', stop: 20, color: '#ff4444'}, {theme: 'warning', stop: 50, color: '#ffaa00'}, {theme: 'success', stop: 100, color: '#44ff44'}]} />
<Progress value={60} colorStops={[{theme: 'danger', stop: 20, color: '#ff4444'}, {theme: 'warning', stop: 50, color: '#ffaa00'}, {theme: 'success', stop: 100, color: '#44ff44'}]} />
```

<!--/GITHUB_BLOCK-->

## Pile

<!--SANDBOX
import type {Stack} from '@gravity-ui/uikit';
import {Box, Progress} from '@gravity-ui/uikit';

const defaultStack: Stack[] = [
    {theme: 'default', content: 'First', value: 25},
    {theme: 'success', content: 'Second', value: 25},
    {theme: 'warning', content: 'Third', value: 25},
    {theme: 'danger', content: 'Fourth', value: 25},
];

const customColorStack: Stack[] = [
    {color: '#6e5d8c', value: 33.333333333333336},
    {color: '#5b785b', value: 33.333333333333336},
    {color: '#956069', value: 33.333333333333336},
];

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress stack={defaultStack} />
            </Box>
            <Box width={'30%'}>
                <Progress text="Progress with custom colors" stack={customColorStack} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress stack={[
  {theme: 'default', content: 'First', value: 25},
  {theme: 'success', content: 'Second', value: 25},
  {theme: 'warning', content: 'Third', value: 25},
  {theme: 'danger', content: 'Fourth', value: 25},
]} />
<Progress text="Progress with custom colors" stack={[
  {color: '#6e5d8c', value: 33.333333333333336},
  {color: '#5b785b', value: 33.333333333333336},
  {color: '#956069', value: 33.333333333333336},
]} />
```

<!--/GITHUB_BLOCK-->

## Propriétés

| Nom            | Description                                                                                                                            |                          Type                          |   Défaut   |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------: | :--------: |
| className      | Attribut `class` HTML                                                                                                                  |                        `string`                        |            |
| colorStops     | Définit les points d'arrêt avec des thèmes                                                                                             | `Array<{theme: string; stop: number; color?: string}>` |            |
| colorStopsValue | Définit la valeur pour choisir l'arrêt actuel ou une valeur alternative pour `colorStops`. La plage disponible est de 0 à 100.          |                        `number`                        |            |
| loading        | Active/désactive l'état `loading`                                                                                                      |                       `boolean`                        |   `false`  |
| size           | Définit la taille de la barre de progression. Le texte de la barre de progression ne peut être affiché qu'en taille `"m"`.              |                        `string`                        |    `"m"`   |
| stack          | Configuration de la barre de progression composite. Non requis si une valeur `value` est fournie.                                        |                     `Array<Stack>`                     |            |
| stackClassName | Attribut `class` HTML de la pile                                                                                                       |                        `string`                        |            |
| text           | Texte à l'intérieur de la barre de progression                                                                                         |                      `ReactNode`                       |            |
| theme          | Définit la couleur de la progression                                                                                                   |                        `string`                        | `"default"`|
| value          | Valeur de progression actuelle. La plage disponible est de 0 à 100. L'utilisation de la valeur de la propriété `stack` est facultative et est utilisée comme `maxValue`. |                        `number`                        |            |

### `Stack`

| Nom      | Description                                                                                                                            |    Type     |   Défaut   |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------- | :---------: | :---------: |
| className | Attribut HTML `class` de l'élément stack                                                                                               |  `string`   |             |
| color     | Définit la couleur d'arrière-plan pour l'attribut HTML `style`                                                                         |  `string`   |             |
| content   | Contenu de l'élément stack                                                                                                             | `ReactNode` |             |
| title     | Attribut HTML `title`                                                                                                                  |  `string`   |             |
| theme     | Définit la couleur de l'élément stack                                                                                                  |  `string`   | `"default"` |
| value     | Valeur de progression actuelle. La plage disponible est de 0 à 100. L'utilisation de la valeur de la propriété `stack` est facultative et est utilisée comme `maxValue`. |  `number`   |             |
| qa        | Attribut HTML `data-qa`, utilisé pour les tests                                                                                        |  `string`   |             |

## API CSS

| Nom                                   | Description                        |
| :------------------------------------- | :--------------------------------- |
| `--g-progress-empty-text-color`        | Couleur du texte `Progress` vide   |
| `--g-progress-filled-text-color`       | Couleur du texte `Progress` rempli |
| `--g-progress-empty-background-color`  | Couleur de fond `Progress` vide    |
| `--g-progress-filled-background-color` | Couleur de fond `Progress` rempli  |
