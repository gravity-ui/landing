`CopyToClipboard` est un wrapper de type render-prop qui copie du texte dans le presse-papiers et expose le statut de la copie à son enfant, vous permettant de rendre votre propre déclencheur ; pour un bouton prêt à l'emploi, utilisez `ClipboardButton`.

```tsx
import {CopyToClipboard} from '@gravity-ui/uikit';
```

### Enfants (fonction de rendu)

Il s'agit d'une fonction de rendu fournie comme propriété d'enfants. Elle peut mettre à jour son contenu en fonction du statut renvoyé comme premier argument dans la fonction de rendu.
Il existe trois statuts disponibles : `pending`, `success` et `error`.

`pending` : Statut initial renvoyé dans la fonction de rendu dans le cas neutre.

`success` : Statut de résultat renvoyé dans la fonction de rendu en cas de succès.

`error` : Statut de résultat renvoyé dans la fonction de rendu en cas d'erreur.

L'option `timeout` définit le temps en ms pour restaurer le statut initial (`pending`) après l'un des statuts de résultat (`success` ou `error`).

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Propriétés

| Nom      | Description                                                              |           Type           | Défaut |
| :------- | :----------------------------------------------------------------------- | :----------------------: | :----: |
| children | Fonction de rendu `(status: CopyToClipboardStatus) => React.ReactElement` |        `Function`        |        |
| onCopy   | Gestionnaire d'événement `copy`                                          |        `Function`        |        |
| text     | Texte à copier (peut être une chaîne de caractères ou une fonction renvoyant une chaîne) | `string \| () => string` |        |
| timeout  | Temps en ms pour restaurer le statut initial                             |         `number`         |        |