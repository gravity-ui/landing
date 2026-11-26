GRAVITY_TRANSLATION_BLOCK_0_END

Ceci est un composant général pour afficher un avatar d'utilisateur avec un bloc d'informations. Il utilise le composant [Avatar](../Avatar/README.md) pour rendre l'avatar. Il peut également accepter un nœud React personnalisé comme avatar.

```tsx
import {User} from '@gravity-ui/uikit';
```

## Nom et description

Le composant `User` possède les propriétés `name` et `description` pour afficher un bloc d'informations.

GRAVITY_TRANSLATION_BLOCK_1_END

## Taille

Utilisez la propriété `size` pour gérer la taille de l'`User`. La taille par défaut est `m`. Les valeurs possibles sont `3xs`, `2xs`, `xs`, `s`, `m`, `l` et `xl`.

Cette propriété est également fournie au composant `Avatar` interne.

GRAVITY_TRANSLATION_BLOCK_2_END

## Propriétés

| Nom             | Description                                |                                    Type                                     | Défaut |
| :-------------- | :----------------------------------------- | :-------------------------------------------------------------------------: | :----: |
| avatar          | Avatar de l'utilisateur                    | [AvatarProps](../Avatar/README.md#properties) `string` `React.ReactElement` |        |
| name            | Nom de l'utilisateur                       |                              `React.ReactNode`                              |        |
| description     | Description de l'utilisateur               |                              `React.ReactNode`                              |        |
| size            | Taille de la section utilisateur           |               `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'`               |  `m`   |
| aria-label      | `aria-label` pour la section utilisateur   |                                  `string`                                   |        |
| aria-labelledby | `aria-labelledby` pour la section utilisateur |                                  `string`                                   |        |
| aria-describedby| `aria-describedby` pour la section utilisateur|                                  `string`                                   |        |
| aria-details    | `aria-details` pour la section utilisateur  |                                  `string`                                   |        |
| className       | Classe CSS personnalisée pour l'élément racine |                                  `string`                                   |        |
| style           | Attribut de style HTML                     |                            `React.CSSProperties`                            |        |
| qa              | Attribut HTML `data-qa`, utilisé pour les tests |                                  `string`                                   |        |

## API CSS

| Nom                               | Description                       |
| :--------------------------------- | :-------------------------------- |
| `--g-user-avatar-offset`           | Espacement entre l'avatar et le bloc de texte |
| `--g-user-name-font-weight`        | Poids de la police du nom         |
| `--g-user-name-font-size`          | Taille de la police du nom        |
| `--g-user-name-line-height`        | Hauteur de ligne du nom           |
| `--g-user-description-font-weight` | Poids de la police de la description |
| `--g-user-description-font-size`   | Taille de la police de la description |
| `--g-user-description-line-height` | Hauteur de ligne de la description |