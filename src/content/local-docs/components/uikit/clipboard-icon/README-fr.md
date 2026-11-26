`ClipboardIcon` est une icône de copie animée qui reflète l'état de la copie (inactif ou succès) ; elle est destinée à être placée à l'intérieur de `CopyToClipboard` ou `ClipboardButton` plutôt qu'à être utilisée seule.

```tsx
import {ClipboardIcon} from '@gravity-ui/uikit';
```

### Statut

En fonction de la propriété `status`, l'icône changera en conséquence :

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Propriétés

| Nom      | Description                                                               | Type     | Défaut |
| :-------- | :------------------------------------------------------------------------ | :------- | :----- |
| className | Attribut HTML `class`                                                     | `string` |        |
| size      | Détermine la taille de l'icône                                            | `number` |        |
| status    | Les valeurs disponibles sont `pending`, `success` et `error`.             | `string` |        |

GRAVITY_TRANSLATION_BLOCK_2_END