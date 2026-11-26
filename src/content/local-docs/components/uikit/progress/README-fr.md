Le composant `Progress` affiche la progression de l'opération en cours. Il peut également être divisé en sections.

```tsx
import {Progress} from '@gravity-ui/uikit';
```

## Thème

Utilisez la propriété `theme` pour spécifier la couleur de l'ensemble de la progression ou de la partie composite :

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## États

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Taille

Pour gérer la taille du composant `Progress`, utilisez la propriété `size` qui peut prendre les valeurs suivantes : `"xs"`, `"s"` et `"m"`. La propriété `text` ne fonctionne qu'avec la taille `"m"`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Points de rupture

Utilisez la propriété `colorStops` pour définir les points de rupture du composant `Progress`.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

Utilisez la propriété optionnelle `color` pour remplacer la couleur du thème :

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Pile

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

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