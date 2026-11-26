`Card` est un composant React réutilisable qui est essentiellement un conteneur de type carte avec des styles et des fonctionnalités personnalisables. Il est utilisé pour afficher des informations ou du contenu de manière visuellement attrayante et bien organisée.

```tsx
import {Card} from '@gravity-ui/uikit';
```

## Apparence

`Card` peut être affiché avec plusieurs combinaisons de styles :

- `theme`: `normal`, `info`, `success`, `warning`, `danger`, ou `utility`.
- `type`: `selection`, `action`, ou `container`.
- `view`: `outlined` ou `clear`, ou `outlined`, `filled`, ou `raised` (en fonction du paramètre `type`).

## Thème

Ce paramètre est utilisé pour spécifier le style du thème de la carte. Il détermine le schéma de couleurs et l'apparence de la carte.

En spécifiant différentes valeurs de thème, vous pouvez personnaliser l'apparence visuelle de `Card` pour qu'elle corresponde à votre objectif et au style dont vous avez besoin.

- `normal`: Thème normal/par défaut de la carte.
- `info`: Thème pour afficher des informations neutres.
- `success`: Thème pour afficher du contenu positif ou affirmatif.
- `warning`: Thème pour afficher des avertissements.
- `danger`: Thème pour afficher du contenu lié à des problèmes critiques ou des erreurs.
- `utility`: Thème pour afficher des astuces utiles.

GRAVITY_TRANSLATION_BLOCK_1_END

## Type

Ce paramètre est utilisé pour définir le type du composant `Card`. Il vous permet de personnaliser l'apparence et le comportement de la carte.

- `container`: Carte qui agit comme un conteneur pour d'autres éléments. Elle fournit une mise en page structurée pour le contenu.
- `action`: Carte avec un élément interactif, tel qu'un bouton, qui déclenche une action lorsqu'elle est cliquée.
- `selection`: Carte qui peut être sélectionnée ou cliquée pour effectuer une action spécifique.

GRAVITY_TRANSLATION_BLOCK_2_END

## Vue

Ce paramètre est utilisé pour spécifier la vue ou le style de mise en page de `Card`. Il vous permet de personnaliser l'apparence et l'agencement du contenu de la carte.

- `clear`: Aucun style.
- `outlined`: Applique une bordure fine pour mettre en évidence le contenu de la carte.
- `filled`: Remplit le contenu de la carte.
- `raised`: Applique une ombre pour soulever légèrement le conteneur.

GRAVITY_TRANSLATION_BLOCK_3_END

## Propriétés

| Nom      | Description                                                                                             |    Type     |    Défaut    |
| :------- | :------------------------------------------------------------------------------------------------------ | :---------: | :----------: |
| children | Contenu de la carte                                                                                     | `ReactNode` |              |
| type     | Le type de `Card` détermine les propriétés disponibles.                                                  |  `string`   | `"container"` |
| view     | Cette propriété n'est disponible que pour les types `"container"` et `"selection"`.                       |  `string`   | `"outlined"`  |
| theme    | Couleur de base de la carte. Cette propriété n'est disponible que pour le type `"container"`.             |  `string`   |  `"normal"`   |
| size     | La taille de `Card` détermine les propriétés disponibles.                                                |  `string`   |     `"m"`     |
| className | Classe CSS                                                                                              |  `string`   |              |
| onClick  | Gestionnaire de clic de la carte. Cette propriété n'est disponible que pour les types `"selection"` et `"action"`. | `Function`  |              |
| selected | Carte sélectionnée. Cette propriété n'est disponible que pour le type `"selection"`.                       |  `Boolean`  |              |
| disabled | Carte désactivée. Cette propriété n'est disponible que pour les types `"selection"` et `"action"`.         |  `Boolean`  |              |
| qa       | Attribut HTML `data-qa`, utilisé pour les tests                                                         |  `string`   |              |

## API CSS

| Nom                        | Description      |
| :------------------------- | :--------------- |
| `--g-card-background-color` | Couleur de fond  |
| `--g-card-border-width`     | Largeur de bordure |
| `--g-card-border-color`     | Couleur de bordure |
| `--g-card-border-radius`    | Rayon de bordure |
| `--g-card-box-shadow`       | Ombre            |