# UserLabel

`UserLabel` est une puce compacte avec l'avatar et le nom ou l'e-mail d'un utilisateur, adaptée aux mentions et listes en ligne (utilisez `User` pour un bloc de profil plus grand et `Avatar` pour l'image seule).

## Type

Utilisé pour gérer l'apparence de l'avatar. Utilisez `"person"` pour une entité personnalisée et `"email"`, pour une adresse e-mail. Si vous n'avez pas besoin d'avatar, utilisez `"empty"`.

<!--SANDBOX
import {UserLabel} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <UserLabel type="person" text="Charles Darwin" />
            <UserLabel type="email" text="email@example.com" />
            <UserLabel type="empty" text="Alan Turing" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<UserLabel type="person" text="Charles Darwin (person)" />
<UserLabel type="email" text="email@example.com (email)" />
<UserLabel type="empty" text="Alan Turing (empty)" />
```

<!--/GITHUB_BLOCK-->

## Avatar

Ce composant peut être utilisé avec un avatar personnalisé. Il ne fonctionne qu'avec `type: 'person'`. Vous pouvez fournir une image, une propriété du composant [Avatar](../Avatar/README.md) ou un nœud React personnalisé.

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {UserLabel} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <UserLabel
                type="person"
                avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg/193px-Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg"
                text="Charles Darwin"
            />
            <UserLabel type="person" avatar={{icon: GraduationCap}} text="Charles Darwin" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
import {GraduationCap} from '@gravity-ui/icons';

<UserLabel type="person" avatar="<url>" text="Charles Darwin" />
<UserLabel type="person" avatar={{icon: GraduationCap}} text="Charles Darwin" />
```

<!--/GITHUB_BLOCK-->

## Interactivité

Ce composant est également interactif : il peut être cliquable ou fermable.

<!--SANDBOX
import {UserLabel} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <UserLabel text="Charles Darwin" onClick={() => alert('onClick triggered')} />
            <UserLabel text="Charles Darwin" onCloseClick={() => alert('onCloseClick triggered')} />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<UserLabel text="Charles Darwin" onClick={() => alert('onClick triggered')} />
<UserLabel text="Charles Darwin" onCloseClick={() => alert('onCloseClick triggered')} />
```

<!--/GITHUB_BLOCK-->

## Propriétés

| Nom         | Description                                     |                                    Type                                     |   Défaut    |
| :----------- | :---------------------------------------------- | :-------------------------------------------------------------------------: | :---------: |
| type         | Apparence de l'avatar                           |                       `'person'` `'email'` `'empty'`                        |  `'person'`  |
| view         | Vue de `UserLabel`                              |                           `'outlined'` `'clear'`                            | `'outlined'` |
| size         | Taille de l'avatar                              |               `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'`               |    `'s'`     |
| avatar       | Avatar de l'utilisateur                         | [AvatarProps](../Avatar/README.md#properties) `string` `React.ReactElement` |             |
| text         | Texte visible                                   |                              `React.ReactNode`                              |             |
| description  | Description de l'utilisateur                    |                              `React.ReactNode`                              |             |
| onClick      | Gestionnaire d'événement `click` pour le composant |                                 `Function`                                  |             |
| onCloseClick | Gestionnaire d'événement `click` pour le bouton croix |                                 `Function`                                  |             |
| className    | Classe CSS personnalisée pour l'élément racine |                                  `string`                                   |             |
| style        | Attribut de style HTML                          |                            `React.CSSProperties`                            |             |
| qa           | Attribut `data-qa` HTML, utilisé pour les tests |                                  `string`                                   |             |

## API CSS

| Nom                                          | Description                                                              |
| :------------------------------------------- | :----------------------------------------------------------------------- |
| `--g-user-label-size`                        | Taille de l'avatar (largeur et hauteur) et hauteur du label              |
| `--g-user-label-border-radius`               | Rayon des bords du label                                                 |
| `--g-user-label-padding`                     | Rembourrage horizontal du label                                          |
| `--g-user-label-gap`                         | Espacement entre les éléments (avatar, texte, icône de fermeture)        |
| `--g-user-label-text-font-weight`            | Graisse de la police du texte                                            |
| `--g-user-label-text-font-size`              | Taille de la police du texte                                             |
| `--g-user-label-text-line-height`            | Hauteur de ligne du texte                                                |
| `--g-user-label-description-font-weight`     | Graisse de la police de la description                                   |
| `--g-user-label-description-font-size`       | Taille de la police de la description                                    |
| `--g-user-label-description-line-height`     | Hauteur de ligne de la description                                       |
