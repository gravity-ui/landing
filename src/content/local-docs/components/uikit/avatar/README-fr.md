<!--GITHUB_BLOCK-->

# Avatar

<!--/GITHUB_BLOCK-->

Ce composant est destiné au rendu des avatars. Il existe trois types d'avatars de base : image, icône et texte (initiales du nom). Tous ces types ont des propriétés spéciales pour configurer le comportement et l'apparence.

```tsx
import {Avatar} from '@gravity-ui/uikit';
```

## Types

### Image

Ce composant peut être utilisé pour rendre des avatars à l'aide d'images. Pour fournir une image, utilisez la propriété `imgUrl`.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return <Avatar imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352" size="l" />;
}
SANDBOX-->

Vous pouvez également fournir la propriété `srcSet` pour charger des images de différentes tailles.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <Avatar
            imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352"
            srcSet="https://loremflickr.com/57/43/cats?lock=2879400393572352 1x, https://loremflickr.com/131/98/cats?lock=4373954936438784 2x, https://loremflickr.com/164/123/cats?lock=3007328513163264 3x, https://loremflickr.com/225/169/cats?lock=8243879964835840 4x"
            size="l"
        />
    );
}
SANDBOX-->

Le composant `Avatar` possède la propriété `fallbackImgUrl` qui vous permet de fournir l'image affichée en cas d'erreur de chargement d'image (erreur CSP ou absence d'image d'origine).

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <Avatar
            imgUrl="random_link"
            fallbackImgUrl="https://loremflickr.com/640/480/cats?lock=3552647338524672"
            size="l"
        />
    );
}
SANDBOX-->

### Icône

Ce composant peut être utilisé pour rendre des avatars à l'aide d'icônes. Utilisez la propriété `icon` pour fournir une icône, comme vous le feriez pour le composant `Icon`.

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return <Avatar icon={GraduationCap} size="l" />;
}
SANDBOX-->

### Texte

Ce composant peut être utilisé pour rendre des avatars à l'aide de texte. Utilisez la propriété `text` à cet effet. Le texte est rendu sous forme d'initiales (premières lettres de deux mots) ou simplement des deux premières lettres d'un seul mot.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" size="l" />
            <Avatar text="Guardian" size="l" />
        </>
    );
}
SANDBOX-->

## Apparence

### Thème et vue

Le composant `Avatar` a des thèmes prédéfinis (`normal`, `brand`) et des vues (`filled`, `outlined`).

Le thème par défaut est `normal` et la vue par défaut est `filled`.

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar icon={GraduationCap} size="l" theme="normal" view="filled" />
            <Avatar icon={GraduationCap} size="l" theme="brand" view="filled" />
            <Avatar icon={GraduationCap} size="l" theme="normal" view="outlined" />
            <Avatar icon={GraduationCap} size="l" theme="brand" view="outlined" />
        </>
    );
}
SANDBOX-->

### Couleurs personnalisées

Vous pouvez également fournir des couleurs personnalisées via les propriétés `backgroundColor`, `borderColor` et `color` (cette dernière ne fonctionne que pour les avatars icônes et texte). Ces couleurs ont une priorité plus élevée que les couleurs du thème.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar
                text="Charles Darwin"
                size="l"
                backgroundColor="var(--g-color-base-danger-medium)"
                color="var(--g-color-text-primary)"
            />
            <Avatar text="Charles Darwin" size="l" borderColor="var(--g-color-line-misc)" />
        </>
    );
}
SANDBOX-->

### Taille

Utilisez la propriété `size` pour gérer la taille de l'`Avatar`. La taille par défaut est `m`. Les valeurs possibles sont `3xs`, `2xs`, `xs`, `s`, `m`, `l` et `xl`.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" theme="brand" size="3xs" />
            <Avatar text="Charles Darwin" theme="brand" size="2xs" />
            <Avatar text="Charles Darwin" theme="brand" size="xs" />
            <Avatar text="Charles Darwin" theme="brand" size="s" />
            <Avatar text="Charles Darwin" theme="brand" size="m" />
            <Avatar text="Charles Darwin" theme="brand" size="l" />
            <Avatar text="Charles Darwin" theme="brand" size="xl" />
        </>
    );
}
SANDBOX-->

### Forme

Utilisez la propriété `shape` pour gérer la forme de l'`Avatar`. La forme par défaut est `circle`. Les valeurs possibles sont `circle` et `square`.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" theme="brand" shape="circle" />
            <Avatar text="Charles Darwin" theme="brand" shape="square" />
        </>
    );
}
SANDBOX-->

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
| aria-label      | `aria-label` pour la section de l'avatar   |                    `string`                     |          |
| aria-labelledby | `aria-labelledby` pour la section de l'avatar |                    `string`                     |          |
| aria-describedby| `aria-describedby` pour le bloc avatar     |                    `string`                     |          |
| aria-details    | `aria-details` pour le bloc avatar         |                    `string`                     |          |
| className       | Classe CSS personnalisée pour l'élément racine |                    `string`                     |          |
| style           | Attribut HTML `style`                      |              `React.CSSProperties`              |          |
| qa              | Attribut HTML `data-qa`, utilisé pour les tests |                    `string`                     |          |

### Spécifique à l'image

| Nom             | Description                               |        Type        |   Défaut   |
| :-------------- | :---------------------------------------- | :----------------: | :--------: |
| imgUrl          | Attribut HTML `src` de l'image            |      `string`      |            |
| fallbackImgUrl  | Image de secours affichée en cas d'erreur |      `string`      |            |
| sizes           | Attribut HTML `sizes` de l'image          |      `string`      |            |
| srcSet          | Attribut HTML `srcSet` de l'image         |      `string`      |            |
| alt             | Attribut HTML `alt` de l'image            |      `string`      | props.title |
| loading         | Attribut HTML `loading` de l'image        | `'eager'` `'lazy'` |            |
| withImageBorder | Ajoute une bordure par défaut à l'image   |     `boolean`      |            |

### Spécifique à l'icône

| Nom   | Description              |    Type    | Défaut |
| :---- | :----------------------- | :--------: | :----: |
| icon  | Source de l'icône SVG    | `IconData` |        |
| color | Couleur personnalisée de l'icône |  `string`  |        |

### Spécifique au texte

| Nom   | Description         |   Type   | Défaut |
| :---- | :------------------ | :------: | :----: |
| text  | Texte de l'avatar   | `string` |        |
| color | Couleur personnalisée du texte | `string` |        |

## API CSS

| Nom                            | Description             |
| :------------------------------ | :---------------------- |
| `--g-avatar-size`               | Taille (largeur et hauteur) |
| `--g-avatar-border-width`       | Épaisseur de la bordure            |
| `--g-avatar-inner-border-width` | Épaisseur de la bordure intérieure      |
| `--g-avatar-border-color`       | Couleur de la bordure            |
| `--g-avatar-background-color`   | Couleur de fond        |
| `--g-avatar-text-color`         | Couleur de l'icône et du texte     |
| `--g-avatar-font-weight`        | Graisse de la police du texte        |
| `--g-avatar-font-size`          | Taille de la police du texte          |
| `--g-avatar-line-height`        | Hauteur de ligne du texte        |