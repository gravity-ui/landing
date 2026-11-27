Une icône d'aide qui révèle des informations contextuelles dans une bulle d'aide sur ordinateur et dans une feuille sur mobile. Idéal pour afficher des astuces, des explications ou du contenu de support sans prendre d'espace supplémentaire dans l'interface.

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## Exemples

Composant avec HTML brut rendu et fermeture au départ de la souris :

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Propriétés

`HelpMark` accepte toutes les propriétés valides d'un élément `button` en plus de celles-ci :

| Nom          | Description                                   |           Type           | Défaut |
| :----------- | :-------------------------------------------- | :----------------------: | :----: |
| size         | Définit la taille de l'icône                  | `"s"` `"m"` `"l"` `"xl"` | `"m"`  |
| popoverProps | Remplace les propriétés `Popover` sur ordinateur |      `PopoverProps`      |        |
| sheetProps   | Remplace les propriétés `Sheet` sur mobile     |       `SheetProps`       |        |
| children     | Contenu affiché dans la bulle d'aide ou la feuille |    `React.ReactNode`     |        |

## API CSS

| Nom                 | Description       |
| :------------------ | :---------------- |
| `--g-help-mark-size` | Taille de l'icône en px |