<!--GITHUB_BLOCK-->

# Text

<!--/GITHUB_BLOCK-->

Le composant `Text` applique des styles typographiques tels que le variant de police, la couleur et la gestion du dépassement de texte à son contenu.

```tsx
import {Text} from '@gravity-ui/uikit';
```

## Variant

Ce sont les polices par défaut qui peuvent être remplacées dans le projet. Vous pouvez voir une liste de toutes les polices disponibles [ici](https://preview.gravity-ui.com/uikit/?path=/story/typography--variants).

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text variant="body-1">some text</Text>
            <Text variant="caption-2">some text</Text>
            <Text variant="display-3">some text</Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text variant="body-1">some text</Text>
<Text variant="caption-2">some text</Text>
<Text variant="display-3">some text</Text>
```

<!--/GITHUB_BLOCK-->

### Ellipsis

Cette propriété vous permet de masquer le texte qui dépasse :

`false` : Utilisé par défaut.

`true` : Le contenu masqué par dépassement sera remplacé par des points de suspension (`…`).

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text ellipsis={false}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
            <Text ellipsis>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text ellipsis={false}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab
    rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente
    exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
<Text ellipsis={true}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab
    rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente
    exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
```

<!--/GITHUB_BLOCK-->

### White Space

Ceci représente la propriété CSS `white-space`. Il peut s'agir de `nowrap` ou de `break-spaces`.

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
            <Text whiteSpace="nowrap">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
            <Text whiteSpace="break-spaces">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
<Text whiteSpace={"nowrap"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
<Text whiteSpace={"break-spaces"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
```

<!--/GITHUB_BLOCK-->

### Word Break

Ceci représente la propriété CSS `word-break`. La seule valeur disponible est `break-all`. | `break-word`.

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
            <Text wordBreak="break-all">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab rerum harum hic
    delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente exercitationem aperiam
    quibusdam libero ipsa veritatis quisquam!</Text>
<Text wordBreak="break-all">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
    est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente
    exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
```

<!--/GITHUB_BLOCK-->

### Color

Spécifie la couleur du texte. Les couleurs disponibles sont :
`primary`, `complementary`, `secondary`, `hint`, `info`, `info-heavy`, `positive`, `positive-heavy`, `warning`, `warning-heavy`, `danger`, `danger-heavy`, `utility`, `utility-heavy`, `misc`, `misc-heavy`, `brand`, `link`, `link-hover`, `link-visited`, `link-visited-hover`, `dark-primary`, `dark-complementary`, `dark-secondary`, `light-primary`, `light-complementary`, `light-secondary`, `light-hint`, `inverted-primary`, `inverted-complementary`, `inverted-secondary`, et `inverted-hint`.

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text color="info">some text</Text>
            <Text color="positive">some text</Text>
            <Text color="warning">some text</Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text color="info">some text</Text>
<Text color="positive">some text</Text>
<Text color="warning">some text</Text>
```

<!--/GITHUB_BLOCK-->

## Propriétés

| Nom          | Description                                                               |                        Type                        |  Défaut   |
| :----------- | :------------------------------------------------------------------------ | :------------------------------------------------: | :--------: |
| children     | Contenu textuel                                                           |                 `React.ReactNode`                  |            |
| className    | Attribut HTML `class`                                                     |                      `string`                      |            |
| id           | Attribut HTML `id`                                                        |                      `string`                      |            |
| as           | Permet de remplacer la balise HTML par défaut                             |              `React.ElementType<any>`              |            |
| style        | Attribut HTML `style`                                                     |               `React.CSSProperties`                |            |
| variant      | Police de caractères du texte                                             |                      `string`                      | `"body-1"` |
| ellipsis     | Le contenu masqué par le dépassement sera remplacé par des points de suspension |                     `boolean`                      |            |
| ellipsisLines | Le nombre de lignes de texte entières après lesquelles le contenu sera coupé |                      `number`                      |            |
| whiteSpace   | Propriété CSS `white-space`                                               |            `"nowrap"` `"break-spaces"`             |            |
| wordBreak    | Propriété CSS `word-break`                                                |            `"break-all"` `"break-word"`            |            |
| color        | Couleur du texte                                                          | `string` (voir les valeurs dans la section **Color**) |            |
| qa           | Attribut HTML `data-qa`, utilisé pour les tests                           |                      `string`                      |            |
