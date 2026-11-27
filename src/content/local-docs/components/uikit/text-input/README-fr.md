<!--GITHUB_BLOCK-->

# TextInput

<!--/GITHUB_BLOCK-->

```tsx
import {TextInput} from '@gravity-ui/uikit';
```

TextInput permet aux utilisateurs de saisir du texte dans une interface utilisateur.

## Apparence

L'apparence de `TextInput` est contrôlée par les propriétés `view` et `pin`.

### Vue

`normal` - la vue principale de `TextInput` (utilisée par défaut).

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return <TextInput placeholder="Placeholder" />;
}
SANDBOX-->

`clear` - peut être utilisé avec un wrapper personnalisé pour `TextInput`.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return <TextInput view="clear" placeholder="Placeholder" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput view="normal" />
<TextInput view="clear" />
```

<!--/GITHUB_BLOCK-->

### Pin

Permet de contrôler la vue des bords droit et gauche de la bordure de `TextInput`.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextInput placeholder="Placeholder" pin="round-brick" />
            <TextInput placeholder="Placeholder" pin="brick-brick" />
            <TextInput placeholder="Placeholder" pin="brick-round" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput pin="round-brick" />
<TextInput pin="brick-brick" />
<TextInput pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## États

### Désactivé

L'état de `TextInput` où vous ne souhaitez pas que l'utilisateur puisse interagir avec le composant.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return <TextInput placeholder="Placeholder" disabled />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput disabled />
```

<!--/GITHUB_BLOCK-->

### Erreur

L'état de `TextInput` dans lequel vous souhaitez indiquer une saisie incorrecte de l'utilisateur. Pour modifier l'apparence de `TextInput`, utilisez la propriété `validationState` avec la valeur `"invalid"`. Un message facultatif peut être ajouté via la propriété `errorMessage`. Par défaut, le texte du message est rendu à l'extérieur du composant.
Ce comportement peut être modifié avec la propriété `errorPlacement`.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextInput
                placeholder="Placeholder"
                errorMessage="Error message"
                validationState="invalid"
            />
            <TextInput
                placeholder="Placeholder"
                errorPlacement="inside"
                errorMessage="Error message"
                validationState="invalid"
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput errorMessage="Error message" validationState="invalid" />
<TextInput errorPlacement="inside" errorMessage="Error message" validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## Taille

`s` – Utilisé lorsque les contrôles standard sont trop grands (tableaux, petites cartes).

`m` – Taille de base, utilisée dans la plupart des composants.

`l` – Contrôles de base effectués dans l'en-tête d'une page, les fenêtres modales ou les pop-ups.

`xl` – Utilisé sur les pages promotionnelles et de destination.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextInput placeholder="Placeholder" size="s" />
            <TextInput placeholder="Placeholder" size="m" />
            <TextInput placeholder="Placeholder" size="l" />
            <TextInput placeholder="Placeholder" size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput size="s" />
<TextInput size="m" />
<TextInput size="l" />
<TextInput size="xl" />
```

<!--/GITHUB_BLOCK-->

## Libellé

Permet de définir le libellé à gauche du contrôle.

- le libellé occupe la position la plus à gauche par rapport au contrôle. C'est-à-dire que les éléments ajoutés via la propriété `startContent` seront situés à droite.
- le libellé ne peut pas occuper plus de la moitié de la largeur totale de l'espace de `TextInput`.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextInput placeholder="Placeholder" label="Label" />
            <TextInput placeholder="Placeholder" label="Very long label with huge amount of symbols" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput label="Label" />
```

<!--/GITHUB_BLOCK-->

## Contenu supplémentaire

### Contenu de début

Permet d'ajouter du contenu à gauche du contrôle (ou à droite en cas d'utilisation de [rtl](https://developer.mozilla.org/fr.wikipedia.org/wiki/RTL)). Situé à gauche (ou à droite en cas d'utilisation de rtl) du libellé ajouté via la propriété `label`.

<!--SANDBOX
import {Label, TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <TextInput
            placeholder="Search"
            label="Label"
            startContent={<Label size="s">Left</Label>}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput startContent={<Label>Left</Label>} />
```

<!--/GITHUB_BLOCK-->

### Contenu de fin

Permet d'ajouter du contenu à droite (ou à gauche en cas d'utilisation de [rtl](https://developer.mozilla.org/fr.wikipedia.org/wiki/RTL)) du contrôle. Situé à droite (ou à gauche en cas d'utilisation de rtl) du bouton de suppression ajouté via la propriété `hasClear`.

<!--SANDBOX
import {Label, TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <TextInput
            hasClear
            placeholder="Placeholder"
            endContent={<Label size="s">Right</Label>}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput endContent={<Label>Right</Label>} />
```

<!--/GITHUB_BLOCK-->

## Propriétés

| Nom            | Description                                                                                                             |                               Type                                  |     Défaut     |
| :------------- | :---------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------: | :------------: |
| autoComplete    | L'attribut `autocomplete` du contrôle                                                                                  |                          `boolean` `string`                           |                |
| autoFocus       | L'attribut `autofocus` du contrôle                                                                                     |                               `boolean`                               |                |
| className       | Le nom de classe du wrapper du contrôle                                                                                        |                               `string`                                |                |
| controlProps    | Les attributs html du contrôle                                                                                           |             `React.InputHTMLAttributes<HTMLInputElement>`             |                |
| controlRef      | Référence React fournie au contrôle                                                                                       |                     `React.Ref<HTMLInputElement>`                     |                |
| defaultValue    | La valeur par défaut du contrôle, utilisée lorsque le composant n'est pas contrôlé                                                  |                               `string`                                |                |
| disabled        | Indique que l'utilisateur ne peut pas interagir avec le contrôle                                                                |                           `React.ReactNode`                           |                |
| endContent      | Le nœud de l'utilisateur rendu après le nœud d'entrée, le bouton de suppression et l'icône d'erreur                                                      |                               `string`                                |                |
| errorMessage    | Texte d'erreur                                                                                                              |                               `string`                                |                |
| errorPlacement  | Placement de l'erreur                                                                                                         |                          `outside` `inside`                           |    `outside`    |
| hasClear        | Affiche l'icône pour effacer la valeur du contrôle                                                                             |                               `boolean`                               |     `false`     |
| id              | L'attribut `id` du contrôle                                                                                            |                               `string`                                |                |
| label           | Texte d'aide rendu à gauche du nœud d'entrée                                                                        |                               `string`                                |                |
| name            | L'attribut `name` du contrôle. S'il n'est pas spécifié, il sera généré automatiquement s'il n'est pas spécifié                          |                               `string`                                |                |
| note            | Un élément optionnel affiché sous le coin inférieur droit du contrôle, partageant un espace avec le conteneur d'erreur |                           `React.ReactNode`                           |                |
| onBlur          | Se déclenche lorsque le contrôle perd le focus. Fournit l'événement de focus comme argument du callback                                        |                              `function`                               |                |
| onChange        | Se déclenche lorsque la valeur de l'entrée est modifiée par l'utilisateur. Fournit l'événement de changement comme argument du callback                    |                              `function`                               |                |
| onFocus         | Se déclenche lorsque le contrôle obtient le focus. Fournit l'événement de focus comme argument du callback                                        |                              `function`                               |                |
| onKeyDown       | Se déclenche lorsqu'une touche est enfoncée. Fournit l'événement clavier comme argument du callback                                           |                              `function`                               |                |
| onKeyUp         | Se déclenche lorsqu'une touche est relâchée. Fournit l'événement clavier comme argument du callback                                          |                              `function`                               |                |
| onUpdate        | Se déclenche lorsque la valeur de l'entrée est modifiée par l'utilisateur. Fournit la nouvelle valeur comme argument du callback                       |                              `function`                               |                |
| pin             | La vue de la bordure du contrôle                                                                                               |                               `string`                                | `'round-round'` |
| placeholder     | Texte qui apparaît dans le contrôle lorsqu'il n'a pas de valeur définie                                                               |                               `string`                                |                |
| qa              | Attribut de test ID (`data-qa`)                                                                                           |                               `string`                                |
| readOnly        | Indique que l'utilisateur ne peut pas modifier la valeur du contrôle                                                                   |                               `boolean`                               |     `false`     |
| size            | La taille du contrôle                                                                                                 |                       `"s"` `"m"` `"l"` `"xl"`                        |      `"m"`      |
| startContent    | Le nœud de l'utilisateur rendu avant le label et le nœud d'entrée                                                                        |                           `React.ReactNode`                           |                |
| tabIndex        | L'attribut `tabindex` du contrôle                                                                                 |                               `string`                                |                |
| type            | Le type de contrôle                                                                                                 | `"email"` `"number"` `"password"` `"search"` `"tel"` `"text"` `"url"` |                |
| validationState | État de validation                                                                                                        |                              `"invalid"`                              |                 |
| value           | La valeur du contrôle                                                                                                |                               `string`                                |                |
| view            | La vue du contrôle                                                                                                 |                         `"normal"` `"clear"`                          |   `"normal"`    |

## API CSS

| Nom                                  | Description                                         |
| :----------------------------------- | :-------------------------------------------------- |
| `--g-text-input-text-color`          | Couleur du texte                                    |
| `--g-text-input-label-color`         | Couleur du label                                    |
| `--g-text-input-placeholder-color`   | Couleur du placeholder                              |
| `--g-text-input-background-color`    | Couleur de fond                                     |
| `--g-text-input-border-radius`       | Rayon des bords                                     |
| `--g-text-input-border-width`        | Épaisseur des bords                                 |
| `--g-text-input-border-color`        | Couleur des bords                                   |
| `--g-text-input-border-color-hover`  | Couleur des bords si survolé                        |
| `--g-text-input-border-color-active` | Couleur des bords si actif                          |
| `--g-text-input-focus-outline-color` | Couleur du contour si focalisé (par défaut non présenté) |
