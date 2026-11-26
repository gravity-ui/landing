Le composant `Text` applique des styles typographiques tels que le variant de police, la couleur et la gestion du dépassement de texte à son contenu.

```tsx
import {Text} from '@gravity-ui/uikit';
```

## Variant

Ce sont les polices par défaut qui peuvent être remplacées dans le projet. Vous pouvez voir une liste de toutes les polices disponibles [ici](https://preview.gravity-ui.com/uikit/?path=/story/typography--variants).

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Ellipsis

Cette propriété vous permet de masquer le texte qui dépasse :

`false` : Utilisé par défaut.

`true` : Le contenu masqué par dépassement sera remplacé par des points de suspension (`…`).

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### White Space

Ceci représente la propriété CSS `white-space`. Il peut s'agir de `nowrap` ou de `break-spaces`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Word Break

Ceci représente la propriété CSS `word-break`. La seule valeur disponible est `break-all`. | `break-word`.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Color

Spécifie la couleur du texte. Les couleurs disponibles sont :
`primary`, `complementary`, `secondary`, `hint`, `info`, `info-heavy`, `positive`, `positive-heavy`, `warning`, `warning-heavy`, `danger`, `danger-heavy`, `utility`, `utility-heavy`, `misc`, `misc-heavy`, `brand`, `link`, `link-hover`, `link-visited`, `link-visited-hover`, `dark-primary`, `dark-complementary`, `dark-secondary`, `light-primary`, `light-complementary`, `light-secondary`, `light-hint`, `inverted-primary`, `inverted-complementary`, `inverted-secondary`, et `inverted-hint`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

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