<!--GITHUB_BLOCK-->

# ClipboardIcon

<!--/GITHUB_BLOCK-->

`ClipboardIcon` est une icône de copie animée qui reflète l'état de la copie (inactif ou succès) ; elle est destinée à être placée à l'intérieur de `CopyToClipboard` ou `ClipboardButton` plutôt qu'à être utilisée seule.

```tsx
import {ClipboardIcon} from '@gravity-ui/uikit';
```

### Statut

En fonction de la propriété `status`, l'icône changera en conséquence :

<!--SANDBOX
import {ClipboardIcon} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <ClipboardIcon size={24} />
            <ClipboardIcon size={24} status="success" />
            <ClipboardIcon size={24} status="error" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<CopyToClipboard text="Some text to copy" timeout={500}>
  {(status) => <ClipboardIcon size={24} status={status} />}
</CopyToClipboard>
```

<!--/GITHUB_BLOCK-->

## Propriétés

| Nom      | Description                                                               | Type     | Défaut |
| :-------- | :------------------------------------------------------------------------ | :------- | :----- |
| className | Attribut HTML `class`                                                     | `string` |        |
| size      | Détermine la taille de l'icône                                            | `number` |        |
| status    | Les valeurs disponibles sont `pending`, `success` et `error`.             | `string` |        |
