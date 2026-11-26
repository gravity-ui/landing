```tsx
import {PasswordInput} from '@gravity-ui/uikit';
```

`PasswordInput` pour la saisie de mots de passe et d'autres informations sensibles. Il peut être rendu avec des boutons de copie et de révélation pour une utilisation plus pratique.

### Bouton de copie

Ce bouton permet aux utilisateurs de copier facilement la valeur de l'entrée dans leur presse-papiers. Vous pouvez masquer ce bouton avec la prop booléenne `hideCopyButton`.

GRAVITY_TRANSLATION_BLOCK_1_END

### Bouton de révélation

La prop `hideRevealButton` permet aux utilisateurs d'activer ou de désactiver la visibilité du mot de passe.

GRAVITY_TRANSLATION_BLOCK_2_END

### Propriétés

`PasswordInput` [propriétés](https://github.com/gravity-ui/uikit/blob/main/src/components/controls/TextInput/README.md#properties), avec quelques exceptions et ajouts :

- `type` est omis ;

| Nom                | Description                                                                |    Type    | Défaut |
| :------------------ | :------------------------------------------------------------------------- | :--------: | :-----: |
| hideCopyButton      | Afficher le bouton de copie                                                | `boolean`  | `false` |
| hideRevealButton    | Afficher le bouton de révélation                                           | `boolean`  | `false` |
| showCopyTooltip     | Détermine s'il faut afficher l'infobulle pour le bouton de copie           | `boolean`  | `false` |
| showRevealTooltip   | Détermine s'il faut afficher l'infobulle pour le bouton de révélation      | `boolean`  | `false` |
| revealValue         | Détermine l'état de visibilité du champ de saisie du mot de passe          | `boolean`  | `false` |
| onRevealValueUpdate | Une fonction de rappel qui est appelée chaque fois que l'état de revealValue change | `function` |         |

GRAVITY_TRANSLATION_BLOCK_3_END