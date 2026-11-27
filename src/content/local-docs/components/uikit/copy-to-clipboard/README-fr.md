<!--GITHUB_BLOCK-->

# CopyToClipboard

<!--/GITHUB_BLOCK-->

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

<!--SANDBOX
import {Button, CopyToClipboard} from '@gravity-ui/uikit';

const buttonText = {
    pending: 'Click Me',
    success: 'Copied!',
    error: "Couldn't copy...",
};

export default function () {
    return (
        <CopyToClipboard text="Some text to copy" timeout={500}>
            {(status) => (
                <Button view="normal" size="l">
                    {buttonText[status]}
                </Button>
            )}
        </CopyToClipboard>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const buttonText = {
  pending: 'Click Me',
  success: 'Copied!',
  error: "Couldn't copy...",
};

<CopyToClipboard text="Some text to copy" timeout={500}>
  {(status) => <button>{buttonText[status]}</button>}
</CopyToClipboard>;
```

<!--/GITHUB_BLOCK-->

## Propriétés

| Nom      | Description                                                              |           Type           | Défaut |
| :------- | :----------------------------------------------------------------------- | :----------------------: | :----: |
| children | Fonction de rendu `(status: CopyToClipboardStatus) => React.ReactElement` |        `Function`        |        |
| onCopy   | Gestionnaire d'événement `copy`                                          |        `Function`        |        |
| text     | Texte à copier (peut être une chaîne de caractères ou une fonction renvoyant une chaîne) | `string \| () => string` |        |
| timeout  | Temps en ms pour restaurer le statut initial                             |         `number`         |        |
