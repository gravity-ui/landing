Une icône d'aide qui révèle des informations contextuelles dans une bulle au survol ou au clic. Idéal pour afficher des astuces, des explications ou du contenu de support sans prendre d'espace supplémentaire dans l'interface.

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## Exemples

Composant avec HTML brut rendu et fermeture à la sortie de la souris :

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Propriétés

`HelpMark` accepte toutes les propriétés valides d'un élément `button` en plus de celles-ci :

| Nom         | Description                          |           Type           | Défaut |
| :---------- | :----------------------------------- | :----------------------: | :----: |
| iconSize    | Définit la taille de l'icône         | `"s"` `"m"` `"l"` `"xl"` | `"m"`  |
| popoverProps | Remplace les propriétés de `Popover` |      `PopoverProps`      |        |
| children    | Contenu affiché à l'intérieur de la bulle |    `React.ReactNode`     |        |

GRAVITY_TRANSLATION_BLOCK_2_END