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

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Contourné

`outlined` : Utilisé pour les actions secondaires qui nécessitent moins d'attention. Il peut être utilisé avec ou sans bouton principal ; dans ce dernier cas, il doit être mis en évidence.

`outlined-action` : Généralement utilisé comme lien vers une autre page ou une ressource externe.

Ce type a également des variations sémantiques qui peuvent être utilisées lorsque des sémantiques supplémentaires sont nécessaires : `outlined-info`, `outlined-success`, `outlined-warning` et `outlined-danger`.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Plat

`flat` : Utilisé pour les actions auxiliaires qui nécessitent le moins d'attention. Il est souvent utilisé dans une liste de boutons ou d'icônes d'action (sans texte) dans un éditeur.

`flat-secondary` : Moins mis en évidence que le bouton `flat`. Il est souvent utilisé comme bouton secondaire dans les boîtes de dialogue et les fenêtres modales.

`flat-action` : Généralement utilisé comme lien vers une autre page ou une ressource externe.

Il a également des variations sémantiques qui peuvent être utilisées lorsque des sémantiques supplémentaires sont nécessaires : `outlined-info`, `outlined-success`, `outlined-warning` et `outlined-danger`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Contrasté

`contrast` est sombre dans le thème clair et clair dans le thème sombre. `contrast-inverted` inverse ces couleurs. `contrast-light` reste clair et `contrast-dark` reste sombre dans les deux thèmes.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Icônes

Pour ajouter une icône à un `Button`, utilisez le composant [`Icon`](../Icon), qui est un wrapper spécial pour les SVGs. La taille de l'icône est sélectionnée automatiquement en fonction de la taille du `Button`. Définissez explicitement la `size`, `width` ou `height` de l'`Icon` pour la remplacer.

Pour dimensionner une icône personnalisée en fonction de la taille du `Button`, utilisez la fonction de rendu `Button.Icon` :

```tsx
<Button size="l">
  <Button.Icon>{({size}) => <CustomIcon size={size} />}</Button.Icon>
  Action
</Button>
```

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## États

Un `Button` peut avoir différents états :

`disabled` : Lorsque le bouton n'est pas disponible pour une raison quelconque.

`loading` : Lorsque des processus asynchrones sont en cours d'exécution en arrière-plan.

`selected` : Lorsque l'utilisateur peut activer et désactiver le bouton.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Déclencheur de menu

Le `Button` modifie automatiquement son apparence lorsque les attributs aria correspondants (`aria-haspopup`, `aria-expanded`) sont passés :

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Taille

Utilisez la propriété `size` pour gérer la taille du `Button`. La taille par défaut est `m`.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## Largeur

Utilisez la propriété `width` pour gérer la façon dont le `Button` se comporte à l'intérieur du conteneur :

`auto` : Limite la largeur maximale du `Button` en masquant le contenu qui dépasse avec une ellipse.

`max` : Fait correspondre la largeur du `Button` à la largeur du conteneur parent, en masquant également le contenu qui dépasse avec une ellipse.

GRAVITY_TRANSLATION_BLOCK_16_END

## Broche

La propriété `pin` vous permet de gérer la forme des bords _début_ et _fin_ et est généralement utilisée pour combiner plusieurs boutons en une seule unité.
La valeur de la propriété `pin` se compose des noms de style _début_ et _fin_ séparés par un trait d'union, par exemple, `round-brick`.
Les styles de bord sont : `round` (par défaut), `circle`, `brick` et `clear`.

GRAVITY_TRANSLATION_BLOCK_17_END

GRAVITY_TRANSLATION_BLOCK_18_END

## Propriétés

`Button` accepte toutes les propriétés valides des éléments `button` ou `a` en plus de celles-ci :

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