`ArrowToggle` est un composant pour afficher l'icône en forme de chevron. Il peut pivoter dans quatre directions et être utilisé pour afficher des listes déroulantes, des composants coupés, etc.

## Apparence

`ArrowToggle` a quatre directions possibles : `top`, `right`, `bottom` et `left`.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Taille

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Utilisation comme élément interactif

Voici un exemple d'utilisation d'ArrowToggle avec une icône basculante :

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Propriétés

| Nom      | Description                                |   Type   |  Défaut   |
| :-------- | :----------------------------------------- | :------: | :--------: |
| className | Attribut HTML `class`                     | `string` |            |
| direction | Utilisé pour définir la direction de `arrowToggle` | `string` | `"bottom"` |
| size      | Taille de `arrowToggle` (en pixels)             | `number` |    `16`    |
| qa        | Attribut HTML `data-qa`, utilisé pour les tests | `string` |            |

## API CSS

| Nom                                   | Description         |
| :------------------------------------- | :------------------ |
| `--g-arrow-toggle-transition-duration` | Durée de transition |