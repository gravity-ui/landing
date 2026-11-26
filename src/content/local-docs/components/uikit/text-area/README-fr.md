```tsx
import {TextArea} from '@gravity-ui/uikit';
```

`TextArea` permet aux utilisateurs de saisir du texte dans une interface utilisateur.

## Apparence

L'apparence de `TextArea` est contrôlée par les propriétés `view` et `pin`.

### View

`normal` - est la vue principale de `TextArea` (utilisée par défaut).

GRAVITY_TRANSLATION_BLOCK_1_END

`clear` - peut être utilisé lors de l'utilisation d'un wrapper personnalisé pour `TextArea`.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Pin

Permet de contrôler l'apparence des bords droit et gauche de la bordure de `TextArea`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## États

### Désactivé

L'état de `TextArea` où vous ne souhaitez pas que l'utilisateur puisse interagir avec le composant.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Erreur

L'état de `TextArea` où vous souhaitez afficher une entrée utilisateur incorrecte. Pour modifier l'apparence de `TextArea`, utilisez la propriété `validationState` avec la valeur "invalid".
Un message facultatif peut être ajouté via la propriété `errorMessage`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Taille

`s` – Utilisé lorsque les contrôles standard sont trop grands (tableaux, petites cartes).

`m` – La taille de base, utilisée dans la plupart des composants.

`l` – Utilisé pour les contrôles de base dans l'en-tête d'une page, les fenêtres modales ou les pop-ups.

`xl` – Utilisé sur les pages promotionnelles et les pages de destination.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Gestion des lignes

Le nombre de lignes de `TextArea` est contrôlé par les propriétés `rows`, `minRows` et `maxRows`. La propriété `rows` désactive le calcul automatique de la hauteur.
Pour définir la hauteur souhaitée de `TextArea`, utilisez la propriété `className` ou `style` avec la propriété `rows` définie sur 1.

GRAVITY_TRANSLATION_BLOCK_12_END

## TextArea redimensionnable

Vous pouvez obtenir un comportement redimensionnable en fournissant le style `resize` à la propriété `controlProps`. Assurez-vous de spécifier la propriété `rows` si vous autorisez le redimensionnement de la hauteur de la zone de texte, sinon le redimensionnement entrera en conflit avec le calcul automatique de la hauteur.

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

## Propriétés

| Nom            | Description                                                                                                                       |                        Type                         |     Défaut     |
| :------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------: | :------------: |
| autoComplete    | L'attribut `autocomplete` du contrôle                                                                                            |                 `boolean` `string`                  |                |
| autoFocus       | L'attribut `autofocus` du contrôle                                                                                               |                      `boolean`                      |                |
| className       | Le nom de classe du wrapper du contrôle                                                                                           |                      `string`                       |                |
| controlProps    | Les attributs HTML du contrôle                                                                                                     | `React.TextareaHTMLAttributes<HTMLTextAreaElement>` |                |
| controlRef      | Référence React fournie au contrôle                                                                                                 |          `React.Ref<HTMLTextAreaElement>`           |                |
| defaultValue    | La valeur par défaut du contrôle. Utilisé lorsque le composant n'est pas contrôlé                                                            |                      `string`                       |                |
| disabled        | Indique que l'utilisateur ne peut pas interagir avec le contrôle                                                                          |                      `boolean`                      |     `false`     |
| errorMessage    | Texte d'erreur                                                                                                                        |                      `string`                       |                |
| hasClear        | Affiche l'icône pour effacer la valeur du contrôle                                                                                   |                      `boolean`                      |     `false`     |
| id              | L'attribut `id` du contrôle                                                                                                      |                      `string`                       |                |
| maxRows         | Le nombre maximum de lignes de texte visibles pour le contrôle. Ignoré si `rows` est spécifié                                          |                      `number`                       |                |
| minRows         | Le nombre minimum de lignes de texte visibles pour le contrôle. Ignoré si `rows` est spécifié                                          |                      `number`                       |                |
| name            | L'attribut `name` du contrôle. S'il n'est pas spécifié, il sera généré automatiquement.                                                         |                      `string`                       |                |
| note            | Un élément optionnel affiché sous le coin inférieur droit du contrôle et partageant l'espace avec le conteneur d'erreur             |                  `React.ReactNode`                  |                |
| onBlur          | Se déclenche lorsque le contrôle perd le focus. Fournit l'événement de focus comme argument du callback                                                  |                     `function`                      |                |
| onChange        | Se déclenche lorsque la valeur de l'entrée est modifiée par l'utilisateur. Fournit l'événement de changement comme argument du callback                               |                     `function`                      |                |
| onFocus         | Se déclenche lorsque le contrôle obtient le focus. Fournit l'événement de focus comme argument du callback                                                  |                     `function`                      |                |
| onKeyDown       | Se déclenche lorsqu'une touche est pressée. Fournit l'événement clavier comme argument du callback                                                     |                     `function`                      |                |
| onKeyUp         | Se déclenche lorsqu'une touche est relâchée. Fournit l'événement clavier comme argument du callback                                                    |                     `function`                      |                |
| onUpdate        | Se déclenche lorsque la valeur de l'entrée est modifiée par l'utilisateur. Fournit la nouvelle valeur comme argument du callback                                  |                     `function`                      |                |
| pin             | La vue de bordure du contrôle                                                                                                         |                      `string`                       | `"round-round"` |
| placeholder     | Texte qui apparaît dans le contrôle lorsqu'aucune valeur n'est définie                                                                             |                      `string`                       |                |
| qa              | Attribut d'ID de test (`data-qa`)                                                                                                     |                      `string`                       |                |
| readOnly        | Indique que l'utilisateur ne peut pas modifier la valeur du contrôle                                                                             |                      `boolean`                      |     `false`     |
| rows            | Le nombre de lignes de texte visibles pour le contrôle. S'il n'est pas spécifié, la hauteur sera calculée automatiquement en fonction du contenu                                          |                      `number`                       |                |
| size            | La taille du contrôle                                                                                                                |              `"s"` `"m"` `"l"` `"xl"`               |      `"m"`      |
| tabIndex        | L'attribut `tabindex` du contrôle                                                                                                |                      `string`                       |                |
| type            | Le type du contrôle                                                                                                                |                      `string`                       |                |
| validationState | État de validation                                                                                                                  |                     `"invalid"`                     |                |
| value           | La valeur du contrôle                                                                                                               |                      `string`                       |                |
| view            | La vue du contrôle                                                                                                                |                `"normal"` `"clear"`                 |   `"normal"`    |

## API CSS

| Nom                                     | Description                                         |
| :-------------------------------------- | :-------------------------------------------------- |
| `--g-text-area-text-color`              | Couleur du texte                                    |
| `--g-text-area-placeholder-color`       | Couleur du texte de substitution                    |
| `--g-text-area-background-color`        | Couleur de fond                                     |
| `--g-text-area-border-radius`           | Rayon des bordures                                  |
| `--g-text-area-border-width`            | Épaisseur des bordures                              |
| `--g-text-area-border-color`            | Couleur des bordures                                |
| `--g-text-area-border-color-hover`      | Couleur des bordures en cas de survol               |
| `--g-text-area-border-color-active`     | Couleur des bordures en cas d'activation            |
| `--g-text-area-focus-outline-color`     | Couleur du contour en cas de focus (non présenté par défaut) |