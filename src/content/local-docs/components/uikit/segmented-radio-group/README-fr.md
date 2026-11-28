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

The `Radio` component is a simple radio button.

GRAVITY_TRANSLATION_BLOCK_2_END

## Props

The `Radio` component accepts the following props:

GRAVITY_TRANSLATION_BLOCK_3_END

### `children`

GRAVITY_TRANSLATION_BLOCK_4_END

The content of the radio (usually, a label).

GRAVITY_TRANSLATION_BLOCK_5_END

### `content`

GRAVITY_TRANSLATION_BLOCK_6_END

The content of the radio (alternative to `children`).

GRAVITY_TRANSLATION_BLOCK_7_END

### `disabled`

GRAVITY_TRANSLATION_BLOCK_8_END

Toggles the `disabled` state of the radio.

GRAVITY_TRANSLATION_BLOCK_9_END

### `value`

GRAVITY_TRANSLATION_BLOCK_10_END

Control value.

GRAVITY_TRANSLATION_BLOCK_11_END

## Example

```jsx
import { Radio } from 'gravity-ui';

function App() {
  return (
    <Radio value="1">Option 1</Radio>
  );
}
```

GRAVITY_TRANSLATION_BLOCK_12_END