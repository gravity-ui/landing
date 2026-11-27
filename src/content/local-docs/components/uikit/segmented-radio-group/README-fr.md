Le composant `SegmentedRadioGroup` est utilisé pour créer un groupe de boutons radio où les utilisateurs peuvent sélectionner une seule option parmi plusieurs choix.

```tsx
import {SegmentedRadioGroup} from '@gravity-ui/uikit';
```

### État désactivé

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Taille

Utilisez la propriété `size` pour gérer la taille du `SegmentedRadioGroup`. La taille par défaut est `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Largeur

Utilisez la propriété `width` pour gérer la largeur du `SegmentedRadioGroup` :

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Propriétés

| Nom         | Description                                                                                              |                Type                | Défaut |
| :---------- | :------------------------------------------------------------------------------------------------------- | :--------------------------------: | :----: |
| children     | Contenu du bouton radio.                                                                             |            `ReactNode`             |        |
| disabled     | Active/désactive l'état `disabled` du bouton radio.                                                        |             `boolean`              | `false` |
| options      | Options pour le bouton radio.                                                                                | `SegmentedRadioGroupOptionProps[]` |        |
| defaultValue | Définit l'état de valeur initial lorsque le composant est monté.                                              |              `string`              |        |
| onUpdate     | Se déclenche lorsque l'utilisateur modifie l'état du bouton radio et fournit la nouvelle valeur comme argument de rappel.    |     `(value: string) => void`      |        |
| onChange     | Se déclenche lorsque l'utilisateur modifie l'état du bouton radio et fournit l'événement de changement comme argument de rappel. |             `Function`             |        |
| onFocus      | Gestionnaire d'événement à utiliser lorsque l'élément d'entrée radio reçoit le focus.                                        |             `Function`             |        |
| onBlur       | Gestionnaire d'événement à utiliser lorsque l'élément d'entrée radio perd le focus.                                           |             `Function`             |        |
| width        | Définit la largeur du bouton radio.                                                                      |            `auto - max`            |        |
| size         | Définit la taille du bouton radio.                                                                       |          `s` `m` `l` `xl`          |   `m`   |
| name         | Attribut HTML `name` pour l'élément d'entrée.                                                             |              `string`              |        |
| qa           | Attribut HTML `data-qa`, utilisé pour les tests                                                               |              `string`              |        |
| style        | Attribut HTML `style`                                                                                   |       `React.CSSProperties`        |        |
| className    | Attribut HTML `class`                                                                                   |              `string`              |        |

## SegmentedRadioGroup.Option

Le composant `SegmentedRadioGroup` exporte également un composant `Option` imbriqué. Vous pouvez l'utiliser pour créer des options de boutons radio au sein d'un `SegmentedRadioGroup`.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Propriétés

| Nom     | Description                                         |    Type     | Défaut |
| :------ | :-------------------------------------------------- | :---------: | :-----: |
| children | Le contenu de la radio (généralement, une étiquette). | `ReactNode` |         |
| content  | Le contenu de la radio (alternative à children). | `ReactNode` |         |
| disabled | Active ou désactive l'état `disabled` de la radio. |  `boolean`  | `false` |
| value    | Valeur du contrôle                                  |  `string`   |         |

GRAVITY_TRANSLATION_BLOCK_1_END

## Radio

Le composant `Radio` est utilisé pour permettre à l'utilisateur de sélectionner une option parmi un ensemble d'options mutuellement exclusives.

GRAVITY_TRANSLATION_BLOCK_2_END

### Importation

```javascript
import { Radio } from '@your-ui-library/react';
```

GRAVITY_TRANSLATION_BLOCK_3_END

### Utilisation

```jsx
<Radio name="gender" value="male">Male</Radio>
<Radio name="gender" value="female">Female</Radio>
```

GRAVITY_TRANSLATION_BLOCK_4_END

### Props

Le composant `Radio` accepte les props suivantes :

GRAVITY_TRANSLATION_BLOCK_5_END

| Nom     | Description                                         |    Type     | Défaut |
| :------ | :-------------------------------------------------- | :---------: | :-----: |
| children | Le contenu de la radio (généralement, une étiquette). | `ReactNode` |         |
| content  | Le contenu de la radio (alternative à children). | `ReactNode` |         |
| disabled | Active ou désactive l'état `disabled` de la radio. |  `boolean`  | `false` |
| value    | Valeur du contrôle                                  |  `string`   |         |

GRAVITY_TRANSLATION_BLOCK_6_END

### Exemple avec état désactivé

```jsx
<Radio name="options" value="option1" disabled>Option 1 (Désactivé)</Radio>
<Radio name="options" value="option2">Option 2</Radio>
```

GRAVITY_TRANSLATION_BLOCK_7_END

### Exemple avec `content` prop

```jsx
<Radio name="colors" value="red" content={<span>Rouge</span>} />
<Radio name="colors" value="blue" content={<span>Bleu</span>} />
```

GRAVITY_TRANSLATION_BLOCK_8_END