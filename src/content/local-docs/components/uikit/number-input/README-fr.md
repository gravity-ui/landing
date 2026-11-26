`NumberInput` est un champ de texte pour saisir des valeurs numériques, avec des contrôles de pas optionnels, des limites min/max et un formatage de valeur.

```tsx
import {NumberInput} from '@gravity-ui/uikit';
```

## Apparence

L'apparence de `NumberInput` est contrôlée par les propriétés `view` et `pin`.

### Vue

`normal` - la vue principale de `NumberInput` (utilisée par défaut).

GRAVITY_TRANSLATION_BLOCK_1_END

`clear` - peut être utilisé avec un wrapper personnalisé pour `NumberInput`.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Pin

Permet de contrôler la vue des bords droit et gauche de la bordure de `NumberInput`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## États

### Désactivé

L'état de `NumberInput` où vous ne souhaitez pas que l'utilisateur puisse interagir avec le composant.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Erreur

L'état de `NumberInput` dans lequel vous souhaitez indiquer une saisie utilisateur incorrecte. Pour modifier l'apparence de `NumberInput`, utilisez la propriété `validationState` avec la valeur `"invalid"`. Un message facultatif peut être ajouté via la propriété `errorMessage`. Par défaut, le texte du message est rendu à l'extérieur du composant.
Ce comportement peut être modifié avec la propriété `errorPlacement`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Taille

`s` – Utilisé lorsque les contrôles standard sont trop grands (tableaux, petites cartes).

`m` – Taille de base, utilisée dans la plupart des composants.

`l` – Contrôles de base effectués dans l'en-tête d'une page, les fenêtres modales ou les pop-ups.

`xl` – Utilisé sur les pages promotionnelles et les pages de destination.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Étiquette

Permet de définir une étiquette à gauche du contrôle.

- L'étiquette est située à droite des éléments ajoutés via la propriété `startContent`.
- L'étiquette ne peut pas occuper plus de la moitié de la largeur totale de l'espace de `NumberInput`.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Contenu supplémentaire

### Contenu de début

Permet d'ajouter du contenu à gauche du contrôle. Situé à gauche de l'étiquette ajoutée via la propriété `label`.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

### Contenu de fin

Permet d'ajouter du contenu à droite du contrôle. Situé à droite du bouton de suppression ajouté via la propriété `hasClear` et de l'icône d'erreur placée à l'intérieur.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Contrôles

La visibilité des contrôles fléchés d'incrémentation/décrémentation à la position la plus à droite du composant peut être gérée par la propriété `hiddenControls`.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

## Comportement

### Valeurs min/max

Permet de définir les valeurs minimale et maximale qui peuvent être saisies dans le champ. Les valeurs qui ne rentrent pas dans la plage définie seront limitées à la valeur autorisée la plus proche lors de la perte de focus.

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

### Pas

Permet de définir le montant par lequel la valeur dans le champ est incrémentée ou décrémentée avec les boutons fléchés des contrôles du composant ou au clavier.

Il ajoute également des restrictions sur les valeurs autorisées et active le plafonnement du nombre saisi lors de la perte de focus aux valeurs autorisées selon les règles suivantes :

- si le pas et la valeur minimale sont définis avec des valeurs entières, alors les valeurs autorisées sont définies comme `min + (step * n)`, où `n` est un nombre entier ;
- si le pas est un nombre entier et que la valeur minimale n'est pas définie, alors les valeurs autorisées sont définies comme étant divisibles par le pas ;
- si le pas ou les valeurs minimales sont décimaux, alors le plafonnement n'est pas applicable

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

### Multiplicateur de pas

Permet de définir la valeur par laquelle la valeur du pas est multipliée lorsque la touche Maj du clavier est enfoncée en définissant la propriété `shiftMultiplier`.

GRAVITY_TRANSLATION_BLOCK_24_END

GRAVITY_TRANSLATION_BLOCK_25_END

### Restriction des valeurs décimales

Permet de basculer la capacité de saisir uniquement des valeurs entières ou également des valeurs décimales via la propriété `allowDecimal`.
Avec la propriété `allowDecimal={false}`, un point saisi dans le champ sera ignoré et les valeurs décimales collées seront arrondies à l'inférieur.

GRAVITY_TRANSLATION_BLOCK_26_END

GRAVITY_TRANSLATION_BLOCK_27_END

## Propriétés

| Nom            | Description                                                                                                             |                     Type                      |      Défaut       |
| :------------- | :---------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :----------------: |
| allowDecimal    | Permet la saisie de nombres décimaux                                                                                    |                   `boolean`                   |      `false`       |
| autoComplete    | L'attribut `autocomplete` du contrôle                                                                                   |              `boolean` `string`               |                    |
| autoFocus       | L'attribut `autofocus` du contrôle                                                                                      |                   `boolean`                   |                    |
| className       | Le nom de classe du wrapper du contrôle                                                                                 |                   `string`                    |                    |
| controlProps    | Les attributs HTML du contrôle                                                                                          | `React.InputHTMLAttributes<HTMLInputElement>` |                    |
| controlRef      | Référence React fournie au contrôle                                                                                     |         `React.Ref<HTMLInputElement>`         |                    |
| defaultValue    | La valeur par défaut du contrôle, utilisée lorsque le composant n'est pas contrôlé                                      |             `number` `undefined`              |                    |
| disabled        | Indique que l'utilisateur ne peut pas interagir avec le contrôle                                                        |                   `boolean`                   |      `false`       |
| endContent      | Nœud utilisateur rendu après le nœud d'entrée, le bouton de réinitialisation et à l'intérieur de l'icône d'erreur         |               `React.ReactNode`               |                    |
| errorMessage    | Texte d'erreur                                                                                                          |                   `string`                    |                    |
| errorPlacement  | Placement de l'erreur                                                                                                   |              `outside` `inside`               |     `outside`      |
| hasClear        | Affiche l'icône pour effacer la valeur du contrôle                                                                      |                   `boolean`                   |      `false`       |
| hiddenControls  | Masque les boutons d'incrémentation/décrémentation à la fin du contrôle                                                 |                   `boolean`                   |                    |
| id              | L'attribut `id` du contrôle                                                                                             |                   `string`                    |                    |
| label           | Texte d'aide rendu à gauche du nœud d'entrée                                                                            |                   `string`                    |                    |
| max             | Valeur maximale autorisée. Utilisée pour contraindre la valeur saisie à la plage autorisée                             |                   `number`                    | `MAX_SAFE_INTEGER` |
| min             | Valeur minimale autorisée. Utilisée pour contraindre la valeur saisie à la plage autorisée                             |                   `number`                    | `MIN_SAFE_INTEGER` |
| name            | L'attribut `name` du contrôle. S'il n'est pas spécifié, il sera généré automatiquement s'il n'est pas spécifié            |                   `string`                    |                    |
| note            | Un élément optionnel affiché sous le coin inférieur droit du contrôle, partageant un espace avec le conteneur d'erreur |               `React.ReactNode`               |                    |
| onBlur          | Se déclenche lorsque le contrôle perd le focus. Fournit l'événement de focus comme argument du callback                  |                  `function`                   |                    |
| onChange        | Se déclenche lorsque la valeur de l'entrée est modifiée par l'utilisateur. Fournit l'événement de modification comme argument du callback |                  `function`                   |                    |
| onFocus         | Se déclenche lorsque le contrôle obtient le focus. Fournit l'événement de focus comme argument du callback               |                  `function`                   |                    |
| onKeyDown       | Se déclenche lorsqu'une touche est enfoncée. Fournit l'événement clavier comme argument du callback                      |                  `function`                   |                    |
| onKeyUp         | Se déclenche lorsqu'une touche est relâchée. Fournit l'événement clavier comme argument du callback                      |                  `function`                   |                    |
| onUpdate        | Se déclenche lorsque la valeur de l'entrée est modifiée par l'utilisateur. Fournit la nouvelle valeur comme argument du callback |                  `function`                   |                    |
| pin             | La vue de bordure du contrôle                                                                                            |                   `string`                    |  `'round-round'`   |
| placeholder     | Texte qui apparaît dans le contrôle lorsqu'il n'a pas de valeur définie                                                 |                   `string`                    |                    |
| qa              | Attribut de test ID (`data-qa`)                                                                                         |                   `string`                    |                    |
| readonly        | Indique que l'utilisateur ne peut pas modifier la valeur du contrôle                                                    |                   `boolean`                   |      `false`       |
| shiftMultiplier | Multiplicateur de pas lorsque la touche Maj est enfoncée                                                                |                   `number`                    |        `10`        |
| size            | La taille du contrôle                                                                                                   |           `"s"` `"m"` `"l"` `"xl"`            |       `"m"`        |
| step            | Delta pour incrémenter/décrémenter la valeur saisie avec les touches fléchées du clavier ou les contrôles du composant   |                   `number`                    |        `1`         |
| startContent    | Le nœud utilisateur rendu avant le label et l'entrée                                                                    |               `React.ReactNode`               |                    |
| tabIndex        | L'attribut `tabindex` du contrôle                                                                                       |                   `string`                    |                    |
| validationState | État de validation                                                                                                      |                  `"invalid"`                  |                    |
| value           | La valeur du contrôle                                                                                                   |             `number` `undefined`              |                    |
| view            | La vue du contrôle                                                                                                     |             `"normal"` `"clear"`              |     `"normal"`     |

## API CSS

Le composant n'a pas son propre API CSS, mais il étend l'API du composant parent TextInput.

GRAVITY_TRANSLATION_BLOCK_1_END