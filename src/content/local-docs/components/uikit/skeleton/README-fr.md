Le composant Skeleton affiche un aperçu de contenu temporaire avant le chargement des données. Cet aperçu est affiché afin de réduire la frustration liée au temps de chargement.

```tsx
import {Skeleton} from '@gravity-ui/uikit';
```

## Animation

Utilisez la prop `animation` pour contrôler l'animation de chargement. La valeur par défaut est `'gradient'`.

| Valeur       | Description                                |
| :----------- | :----------------------------------------- |
| `'gradient'` | Effet de scintillement avec dégradé glissant — **par défaut** |
| `'pulse'`    | Pulsation d'opacité                        |
| `'none'`     | Aucune animation                           |

## Variante

Utilisez la prop `variant` pour choisir une apparence prédéfinie. La valeur par défaut est `'rect'`.

| Valeur     | Description                                                                               |
| :--------- | :---------------------------------------------------------------------------------------- |
| `'rect'`   | Coins arrondis utilisant un token de `border-radius` adapté à la taille — **par défaut** |
| `'circle'` | Entièrement circulaire (`border-radius: 50%`, `aspect-ratio: 1`)                         |
| `'square'` | Ratio d'aspect carré (`aspect-ratio: 1`) avec le même arrondi que `'rect'`                |
| `'text'`   | Espace réservé pour une ligne de texte — la hauteur hérite de `font-size` et `line-height` du contexte parent |

## Taille

Utilisez la prop `size` pour définir une hauteur prédéfinie pour le squelette (et une largeur pour les variantes `'circle'` / `'square'`). Chaque taille ajuste également le token de `border-radius` utilisé par les variantes `'rect'` et `'square'`. Lorsque `size` est omis, définissez les dimensions avec `width` et `height` à la place.

| Valeur | Description   |
| :----- | :------------ |
| `'xs'` | Extra petite  |
| `'s'`  | Petite        |
| `'m'`  | Moyenne       |
| `'l'`  | Grande        |
| `'xl'` | Extra large   |

GRAVITY_TRANSLATION_BLOCK_1_END

## Espace réservé pour le texte

Utilisez `variant="text"` pour afficher un squelette qui hérite de `font-size` et `line-height` du contexte parent. Placez plusieurs squelettes à l'intérieur d'un élément `<Text variant="...">` pour des espaces réservés multilignes.

GRAVITY_TRANSLATION_BLOCK_2_END

## Propriétés

| Nom        | Description                                                                                                                  |                       Type                       |  Défaut   |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------: | :--------: |
| `style`     | Propriétés CSS personnalisées pour l'élément racine                                                                                   |              `React.CSSProperties`               |            |
| `className` | Classe CSS personnalisée pour l'élément racine                                                                                        |                     `string`                     |            |
| `qa`        | Attribut HTML `data-qa`, utilisé pour les tests                                                                                   |                     `string`                     |            |
| `animation` | Type d'animation à appliquer au squelette                                                                                      |      `'gradient'` \| `'pulse'` \| `'none'`       | `gradient` |
| `variant`   | Apparence prédéfinie. `'circle'` et `'square'` forcent `aspect-ratio: 1`. `'text'` hérite de la typographie du contexte parent.    | `'rect'` \| `'square'` \| `'circle'` \| `'text'` |   `rect`   |
| `size`      | Hauteur prédéfinie (et largeur pour les variantes `'circle'`/`'square'`). Contrôle également le token `border-radius` pour `'rect'`/`'square'`. |   `'xs'` \| `'s'` \| `'m'` \| `'l'` \| `'xl'`    |            |
| `width`     | Largeur personnalisée. Alias pour `style.width`                                                                                        |               `number` \| `string`               |            |
| `height`    | Hauteur personnalisée. Alias pour `style.height`                                                                                      |               `number` \| `string`               |            |

## API CSS

| Nom                            | Description                                                                         |
| :------------------------------ | :---------------------------------------------------------------------------------- |
| `--g-skeleton-background-color` | Couleur de fond du squelette, également utilisée comme couleur de fin de l'animation `'gradient'` |