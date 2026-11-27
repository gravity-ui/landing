<!--GITHUB_BLOCK-->

# NumberInput

<!--/GITHUB_BLOCK-->

`NumberInput` est un champ de texte pour saisir des valeurs numériques, avec des contrôles de pas optionnels, des limites min/max et un formatage de valeur.

```tsx
import {NumberInput} from '@gravity-ui/uikit';
```

## Apparence

L'apparence de `NumberInput` est contrôlée par les propriétés `view` et `pin`.

### Vue

`normal` - la vue principale de `NumberInput` (utilisée par défaut).

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput placeholder="Placeholder" />;
}
SANDBOX-->

`clear` - peut être utilisé avec un wrapper personnalisé pour `NumberInput`.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput view="clear" placeholder="Placeholder" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput view="normal" />
<NumberInput view="clear" />
```

<!--/GITHUB_BLOCK-->

### Pin

Permet de contrôler la vue des bords droit et gauche de la bordure de `NumberInput`.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput placeholder="Placeholder" pin="round-brick" />
            <NumberInput placeholder="Placeholder" pin="brick-brick" />
            <NumberInput placeholder="Placeholder" pin="brick-round" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput pin="round-brick" />
<NumberInput pin="brick-brick" />
<NumberInput pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## États

### Désactivé

L'état de `NumberInput` où vous ne souhaitez pas que l'utilisateur puisse interagir avec le composant.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput placeholder="Placeholder" disabled />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput disabled />
```

<!--/GITHUB_BLOCK-->

### Erreur

L'état de `NumberInput` dans lequel vous souhaitez indiquer une saisie utilisateur incorrecte. Pour modifier l'apparence de `NumberInput`, utilisez la propriété `validationState` avec la valeur `"invalid"`. Un message facultatif peut être ajouté via la propriété `errorMessage`. Par défaut, le texte du message est rendu à l'extérieur du composant.
Ce comportement peut être modifié avec la propriété `errorPlacement`.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput
                placeholder="Placeholder"
                errorMessage="Error message"
                validationState="invalid"
            />
            <NumberInput
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
<NumberInput errorMessage="Error message" validationState="invalid" />
<NumberInput errorPlacement="inside" errorMessage="Error message" validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## Taille

`s` – Utilisé lorsque les contrôles standard sont trop grands (tableaux, petites cartes).

`m` – Taille de base, utilisée dans la plupart des composants.

`l` – Contrôles de base effectués dans l'en-tête d'une page, les fenêtres modales ou les pop-ups.

`xl` – Utilisé sur les pages promotionnelles et les pages de destination.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput placeholder="Placeholder" size="s" />
            <NumberInput placeholder="Placeholder" size="m" />
            <NumberInput placeholder="Placeholder" size="l" />
            <NumberInput placeholder="Placeholder" size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput size="s" />
<NumberInput size="m" />
<NumberInput size="l" />
<NumberInput size="xl" />
```

<!--/GITHUB_BLOCK-->

## Étiquette

Permet de définir une étiquette à gauche du contrôle.

- L'étiquette est située à droite des éléments ajoutés via la propriété `startContent`.
- L'étiquette ne peut pas occuper plus de la moitié de la largeur totale de l'espace de `NumberInput`.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput placeholder="Placeholder" label="Label" />
            <NumberInput
                placeholder="Placeholder"
                label="Very long label with huge amount of symbols"
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput label="Label" />
```

<!--/GITHUB_BLOCK-->

## Contenu supplémentaire

### Contenu de début

Permet d'ajouter du contenu à gauche du contrôle. Situé à gauche de l'étiquette ajoutée via la propriété `label`.

<!--SANDBOX
import {Label, NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <NumberInput
            placeholder="Search"
            label="Label"
            startContent={<Label size="s">Left</Label>}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput startContent={<Label>Left</Label>} />
```

<!--/GITHUB_BLOCK-->

### Contenu de fin

Permet d'ajouter du contenu à droite du contrôle. Situé à droite du bouton de suppression ajouté via la propriété `hasClear` et de l'icône d'erreur placée à l'intérieur.

<!--SANDBOX
import {Label, NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <NumberInput
            hasClear
            placeholder="Placeholder"
            endContent={<Label size="s">Right</Label>}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput endContent={<Label>Right</Label>} />
```

<!--/GITHUB_BLOCK-->

### Contrôles

La visibilité des contrôles fléchés d'incrémentation/décrémentation à la position la plus à droite du composant peut être gérée par la propriété `hiddenControls`.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput />
            <NumberInput hiddenControls />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput />
<NumberInput hiddenControls />
```

<!--/GITHUB_BLOCK-->

## Comportement

### Valeurs min/max

Permet de définir les valeurs minimale et maximale qui peuvent être saisies dans le champ. Les valeurs qui ne rentrent pas dans la plage définie seront limitées à la valeur autorisée la plus proche lors de la perte de focus.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput min={-100} max={100} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput min={-100} max={100} />
```

<!--/GITHUB_BLOCK-->

### Pas

Permet de définir le montant par lequel la valeur dans le champ est incrémentée ou décrémentée avec les boutons fléchés des contrôles du composant ou au clavier.

Il ajoute également des restrictions sur les valeurs autorisées et active le plafonnement du nombre saisi lors de la perte de focus aux valeurs autorisées selon les règles suivantes :

- si le pas et la valeur minimale sont définis avec des valeurs entières, alors les valeurs autorisées sont définies comme `min + (step * n)`, où `n` est un nombre entier ;
- si le pas est un nombre entier et que la valeur minimale n'est pas définie, alors les valeurs autorisées sont définies comme étant divisibles par le pas ;
- si le pas ou les valeurs minimales sont décimaux, alors le plafonnement n'est pas applicable

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput min={-10} step={4} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput min={-10} step={4} />
```

<!--/GITHUB_BLOCK-->

### Multiplicateur de pas

Permet de définir la valeur par laquelle la valeur du pas est multipliée lorsque la touche Maj du clavier est enfoncée en définissant la propriété `shiftMultiplier`.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput shiftMultiplier={50} />
            <NumberInput shiftMultiplier={8} step={4} />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput shiftMultiplier={50} />
<NumberInput shiftMultiplier={8} step={4} />
```

<!--/GITHUB_BLOCK-->

### Restriction des valeurs décimales

Permet de basculer la capacité de saisir uniquement des valeurs entières ou également des valeurs décimales via la propriété `allowDecimal`.
Avec la propriété `allowDecimal={false}`, un point saisi dans le champ sera ignoré et les valeurs décimales collées seront arrondies à l'inférieur.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput allowDecimal />
            <NumberInput allowDecimal={false} />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput allowDecimal />
<NumberInput allowDecimal={false} />
```

<!--/GITHUB_BLOCK-->

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
