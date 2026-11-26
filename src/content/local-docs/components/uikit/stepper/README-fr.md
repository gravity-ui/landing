`Stepper` guide les utilisateurs à travers une séquence d'étapes numérotées, montrant la progression dans un flux de travail multi-étapes de type assistant.

```tsx
import {Stepper} from '@gravity-ui/uikit';
```

## Exemple

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Éléments interactifs

Utilisez les props `onUpdate` et `value` avec un état personnalisé pour manipuler les étapes.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Vues différentes

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Tailles différentes

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Étapes désactivées

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### Icônes personnalisées

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Séparateur d'étape personnalisé

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### Étape avec élément flottant

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## Propriétés

| Nom             | Description                                               |                  Type                  | Défaut |
| :-------------- | :-------------------------------------------------------- | :------------------------------------: | :----: |
| children        | Éléments du Stepper.                                      | `React.ReactElement<StepperItemProps>` |        |
| size            | Définit la taille de l'`Step`.                           |           `"s"` `"m"` `"l"`            | `"s"`  |
| value           | ID de l'`Step` actuellement sélectionné.                   |           `number` `string`            |        |
| onUpdate        | Fonction pour changer l'`Step` actuel.                    |               `Function`               |        |
| qa              | Attribut HTML `data-qa`, utilisé pour les tests.          |                `string`                |        |
| separator       | Nœud séparateur personnalisé.                             |           `React.ReactNode`            |        |
| className       | Nom de classe CSS pour le conteneur des Steps.            |                `string`                |        |
| style           | Définit le style en ligne pour le conteneur des Steps.    |            `CSSProperties`             |        |
| aria-label      | Définit une valeur de chaîne qui étiquette l'élément actuel. |                `string`                |        |
| aria-labelledby | Identifie l'élément (ou les éléments) qui étiquette l'élément actuel. |                `string`                |        |
| aria-describedby | Identifie l'élément (ou les éléments) qui décrivent l'objet. |                `string`                |        |

### StepperItemProps

| Nom      | Description                                       |              Type              | Défaut  |
| :------- | :------------------------------------------------ | :----------------------------: | :-----: |
| id       | Définit l'ID de l'`Step`. L'index de l'élément du tableau par défaut. |       `string` `number`        |         |
| view     | Définit la vue de l'`Step`.                       | `"idle"` `"error"` `"success"` | `"idle"` |
| children | Contenu de l'`Step`.                              |          `React.Node`          |         |
| disabled | Détermine si l'`Step` est désactivé.              |           `boolean`            |         |
| icon     | Nœud d'icône personnalisé.                        |         `SVGIconData`          |         |
| onClick  | Gestionnaire de clic de l'étape.                  |   `React.MouseEventHandler`    |         |
| className | Nom de classe CSS pour l'élément.                 |            `string`            |         |

### API CSS

| Nom                              | Description                           |
| :-------------------------------- | :------------------------------------ |
| `--g-stepper-gap`                 | Espacement entre les éléments d'étape et le séparateur. |
| `--g-stepper-item-text-max-width` | Largeur maximale du texte d'un élément d'étape. |