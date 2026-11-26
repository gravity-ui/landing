Le composant `RadioGroup` est utilisé pour créer un groupe où les utilisateurs peuvent sélectionner une seule option parmi plusieurs choix.

```tsx
import {RadioGroup} from '@gravity-ui/uikit';
```

### État désactivé

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Taille

Utilisez la propriété `size` pour gérer la taille du `RadioGroup`. La taille par défaut est `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Direction

Utilisez la propriété `direction` pour gérer la direction du `RadioGroup`. La direction par défaut est `horizontal`.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Propriétés

| Nom            | Description                                                                                       |           Type            |    Défaut     |
| :------------- | :------------------------------------------------------------------------------------------------ | :-----------------------: | :------------: |
| children        | Le contenu du groupe de radios.                                                                   |        `ReactNode`        |                |
| disabled        | Active/désactive l'état `disabled` du groupe de radios.                                           |         `boolean`         |    `false`     |
| options         | Options pour le groupe de radios.                                                                 |   `RadioGroupOption[]`    |                |
| optionClassName | Attribut HTML `class` pour les éléments radio enfants.                                            |         `string`          |                |
| direction       | Détermine la direction du groupe de radios.                                                       |  `horizontal - vertical`  | `"horizontal"` |
| defaultValue    | Définit l'état de valeur initial lorsque le composant est monté.                                  |         `string`          |                |
| onUpdate        | Se déclenche lorsque l'utilisateur modifie l'état de la radio et fournit la nouvelle valeur en tant qu'argument de rappel.    | `(value: string) => void` |                |
| onChange        | Se déclenche lorsque l'utilisateur modifie l'état de la radio et fournit l'événement de modification en tant qu'argument de rappel. |        `Function`         |                |
| size            | Détermine la taille du groupe de radios.                                                          |          `m` `l`          |      `m`       |
| qa              | Attribut HTML `data-qa`, utilisé pour les tests                                                   |         `string`          |                |
| style           | Attribut HTML `style`                                                                             |   `React.CSSProperties`   |                |
| className       | Attribut HTML `class`                                                                             |         `string`          |                |

## RadioGroup.Option

Le composant `RadioGroup` exporte également un composant imbriqué `Option` équivalent à `Radio`, qui peut être utilisé pour créer des options de radio au sein du `RadioGroup`.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Propriétés

| Nom     | Description                                         |    Type     | Défaut |
| :------ | :-------------------------------------------------- | :---------: | :-----: |
| children | Le contenu de la radio (généralement, une étiquette).        | `ReactNode` |         |
| content  | Le contenu de la radio (alternative à `children`). | `ReactNode` |         |
| disabled | Active/désactive l'état `disabled` de la radio.          |  `boolean`  | `false` |
| value    | Valeur de contrôle                                       |  `string`   |         |