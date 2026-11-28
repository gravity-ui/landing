Ce composant est destiné au rendu des avatars. Il existe trois types d'avatars de base : image, icône et texte (initiales du nom). Tous ces types ont des propriétés spéciales pour configurer le comportement et l'apparence.

```tsx
import {Avatar} from '@gravity-ui/uikit';
```

## Types

### Image

Ce composant peut être utilisé pour rendre des avatars à l'aide d'images. Pour fournir une image, utilisez la propriété `imgUrl`.

GRAVITY_TRANSLATION_BLOCK_1_END

Vous pouvez également fournir la propriété `srcSet` pour charger des images de différentes tailles.

GRAVITY_TRANSLATION_BLOCK_2_END

Le composant `Avatar` possède la propriété `fallbackImgUrl` qui vous permet de fournir l'image affichée en cas d'erreur de chargement d'image, via le lien `imgUrl` (erreur CSP ou pas d'image d'origine).

GRAVITY_TRANSLATION_BLOCK_3_END

### Icône

Ce composant peut être utilisé pour rendre des avatars à l'aide d'icônes. Utilisez la propriété `icon` pour fournir une icône, comme vous le feriez pour le composant `Icon`.

GRAVITY_TRANSLATION_BLOCK_4_END

### Texte

Ce composant peut être utilisé pour rendre des avatars à l'aide de texte. Utilisez la propriété `text` à cet effet. Le texte est rendu sous forme d'initiales (premières lettres de deux mots) ou simplement des deux premières lettres d'un seul mot.

GRAVITY_TRANSLATION_BLOCK_5_END

## Apparence

### Thème et vue

Le composant `Avatar` a des thèmes prédéfinis (`normal`, `brand`) et des vues (`filled`, `outlined`).

Le thème par défaut est `normal` et la vue par défaut est `filled`.

GRAVITY_TRANSLATION_BLOCK_6_END

### Couleurs personnalisées

Vous pouvez également fournir des couleurs personnalisées via les propriétés `backgroundColor`, `borderColor` et `color` (cette dernière ne fonctionne que pour les avatars icônes et texte). Ces couleurs ont une priorité plus élevée que les couleurs du thème.

GRAVITY_TRANSLATION_BLOCK_7_END

### Taille

Utilisez la propriété `size` pour gérer la taille de l'`Avatar`. La taille par défaut est `m`. Les valeurs possibles sont `3xs`, `2xs`, `xs`, `s`, `m`, `l` et `xl`.

GRAVITY_TRANSLATION_BLOCK_8_END

### Forme

Utilisez la propriété `shape` pour gérer la forme de l'`Avatar`. La forme par défaut est `circle`. Les valeurs possibles sont `circle` et `square`.

GRAVITY_TRANSLATION_BLOCK_9_END

## Propriétés

### Communes

| Nom             | Description                                |                      Type                       | Défaut  |
| :-------------- | :----------------------------------------- | :---------------------------------------------: | :------: |
| size            | Taille de l'avatar                         | `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'` |   `m`    |
| theme           | Thème de l'avatar                          |              `'normal'` `'brand'`               | `normal` |
| view            | Options de remplissage et de contour de l'avatar |             `'filled'` `'outlined'`             | `filled` |
| shape           | Forme de l'avatar                          |              `'circle'` `'square'`              | `circle` |
| backgroundColor | Couleur de fond personnalisée              |                    `string`                     |          |
| borderColor     | Couleur de bordure personnalisée           |                    `string`                     |          |
| title           | Attribut HTML `title`                      |                    `string`                     |          |
| aria-label      | `aria-label` pour la section avatar        |                    `string`                     |          |
| aria-labelledby | `aria-labelledby` pour la section avatar   |                    `string`                     |          |
| aria-describedby | `aria-describedby` pour le bloc avatar     |                    `string`                     |          |
| aria-details    | `aria-details` pour le bloc avatar         |                    `string`                     |          |
| className       | Classe CSS personnalisée pour l'élément racine |                    `string`                     |          |
| style           | Attribut HTML `style`                      |              `React.CSSProperties`              |          |
| qa              | Attribut HTML `data-qa`, utilisé pour les tests |                    `string`                     |          |

### Spécifiques à l'image

| Nom            | Description                               |        Type        | Défaut |
| :------------- | :---------------------------------------- | :----------------: | :----: |
| imgUrl         | Attribut HTML `src` de `img`              |      `string`      |        |
| fallbackImgUrl | Image de secours affichée en cas d'erreur |      `string`      |        |
| sizes          | Attribut HTML `sizes` de `img`            |      `string`      |        |
| srcSet         | Attribut HTML `srcSet` de `img`           |      `string`      |        |
| loading        | Attribut HTML `loading` de `img`          | `'eager'` `'lazy'` |        |
| withImageBorder | Ajoute une bordure par défaut à l'image   |     `boolean`      |        |

### Spécifique à l'icône

| Nom   | Description         |    Type    | Défaut |
| :---- | :------------------ | :--------: | :----: |
| icon  | Source de l'icône SVG | `IconData` |        |
| color | Couleur personnalisée de l'icône |  `string`  |        |

### Spécifique au texte

| Nom   | Description         |   Type   | Défaut |
| :---- | :------------------ | :------: | :----: |
| text  | Texte de l'avatar   | `string` |        |
| color | Couleur personnalisée du texte | `string` |        |

## API CSS

| Nom                            | Description             |
| :----------------------------- | :---------------------- |
| `--g-avatar-size`              | Taille (largeur et hauteur) |
| `--g-avatar-border-width`      | Largeur de la bordure   |
| `--g-avatar-inner-border-width` | Largeur de la bordure intérieure |
| `--g-avatar-border-color`      | Couleur de la bordure   |
| `--g-avatar-background-color`  | Couleur de fond         |
| `--g-avatar-text-color`        | Couleur de l'icône et du texte |
| `--g-avatar-font-weight`       | Graisse de la police du texte |
| `--g-avatar-font-size`         | Taille de la police du texte |
| `--g-avatar-line-height`       | Hauteur de ligne du texte |