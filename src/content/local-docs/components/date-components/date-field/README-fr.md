<!--GITHUB_BLOCK-->

# DateField

<!--/GITHUB_BLOCK-->

```tsx
import {DateField} from '@gravity-ui/date-components';
```

Le composant `DateField` est un champ de saisie polyvalent et pratique, spécialement conçu pour la saisie de dates dans les applications React. Avec une interface intuitive et une intégration facile, il est parfait pour tout formulaire nécessitant la saisie de dates ou d'heures, tels que les planificateurs d'événements, les systèmes de réservation ou les rapports basés sur des données. Il peut être contrôlé si vous définissez la propriété `value`. Ou il peut être non contrôlé si vous ne définissez aucune valeur, mais dans ce cas, vous pouvez gérer l'état initial avec la propriété optionnelle `defaultValue`. Le composant est non contrôlé par défaut.

## Ajout utile

Pour définir les dates dans le bon format, vous devrez peut-être inclure des assistants supplémentaires de la bibliothèque [Date Utils](https://gravity-ui.com/libraries/date-utils).

```tsx
import {dateTimeParse} from '@gravity-ui/date-utils';
```

## Apparence

L'apparence de `DateField` est contrôlée par les propriétés `size`, `view` et `pin`.

### Taille

Pour contrôler la taille de `DateField`, utilisez la propriété `size`. La taille par défaut est `m`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField size="s" />
<DateField size="m" />
<DateField size="l" />
<DateField size="xl" />
`}
>
    <DateComponents.DateField size="s" />
    <DateComponents.DateField size="m" />
    <DateComponents.DateField size="l" />
    <DateComponents.DateField size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField size="s" />
<DateField size="m" />
<DateField size="l" />
<DateField size="xl" />
```

<!--/GITHUB_BLOCK-->

### Vue

`normal` - la vue principale de `DateField` (utilisée par défaut).

<!--LANDING_BLOCK
<ExampleBlock code={`<DateField />`}>
    <DateComponents.DateField />
</ExampleBlock>
LANDING_BLOCK-->

`clear` - vue de `DateField` sans bordures visibles (peut être utilisée avec un wrapper personnalisé).

<!--LANDING_BLOCK
<ExampleBlock code={`<DateField view="clear" />`}>
    <DateComponents.DateField view="clear" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField view="normal" />
<DateField view="clear" />
```

<!--/GITHUB_BLOCK-->

### Pin

La propriété `pin` vous permet de contrôler la forme des bords droit et gauche et est généralement utilisée pour combiner plusieurs contrôles en une seule unité.
La valeur de la propriété `pin` se compose des noms de style des bords gauche et droit, séparés par un trait d'union, par exemple, `"round-brick"`.
Les styles de bord sont : `round` (par défaut), `circle`, `brick` et `clear`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField pin="round-brick" />
<DateField pin="brick-brick" />
<DateField pin="brick-round" />
`}
>
    <DateComponents.DateField pin="round-brick" />
    <DateComponents.DateField pin="brick-brick" />
    <DateComponents.DateField pin="brick-round" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField pin="round-brick" />
<DateField pin="brick-brick" />
<DateField pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## Valeur

### Valeur minimale et maximale

La propriété `minValue` vous permet de spécifier la date et l'heure les plus anciennes qui peuvent être saisies par l'utilisateur. Inversement, la propriété `maxValue` spécifie la date et l'heure les plus récentes qui peuvent être saisies. Si vous saisissez une valeur en dehors de ces limites, le composant modifie sa vue, comme dans le cas d'un état de validation invalide.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField minValue={dateTimeParse('01.01.2024')} placeholder={"minValue: '01.01.2024'"}/>
<DateField maxValue={dateTimeParse('01.01.2025')} placeholder={"maxValue: '01.01.2025'"}/>
`}
>
    <DateComponentsExamples.DateFieldExample minValue={'01.01.2024'} placeholder={"minValue: '01.01.2024'"} />
    <DateComponentsExamples.DateFieldExample maxValue={'01.01.2025'} placeholder={"maxValue: '01.01.2025'"} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx

<DateField minValue={dateTimeParse('01.01.2024')} />
<DateField maxValue={dateTimeParse('01.01.2025')} />
```

<!--/GITHUB_BLOCK-->

## États

### Désactivé

L'état de `DateField` où vous ne souhaitez pas que l'utilisateur puisse interagir avec le composant.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField disabled={true} defaultValue={dateTimeParse(new Date())} />
`}
>
    <DateComponentsExamples.DateFieldExample disabled={true} defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField disabled defaultValue={dateTimeParse(new Date())} />
```

<!--/GITHUB_BLOCK-->

### Lecture seule

`readOnly` est un attribut booléen qui, lorsqu'il est défini sur true, rend le composant `DateField` immuable pour l'utilisateur. Cela signifie que bien que l'entrée affiche sa valeur actuelle, les utilisateurs ne pourront pas la modifier.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField readOnly defaultValue={dateTimeParse(new Date())} />
`}
>
    <DateComponentsExamples.DateFieldExample readOnly defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField readOnly defaultValue={dateTimeParse(new Date())} />
```

<!--/GITHUB_BLOCK-->

### Erreur

L'état de `DateField` dans lequel vous souhaitez indiquer une saisie incorrecte de l'utilisateur. Pour modifier l'apparence de `DateField`, utilisez la propriété `validationState` avec la valeur `"invalid"`. Un message facultatif peut être ajouté via la propriété `errorMessage`. Le texte du message sera rendu sous le composant.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField errorMessage="Error message" validationState="invalid" />
<DateField validationState="invalid" />
`}
>
    <DateComponents.DateField errorMessage="Error message" validationState="invalid" />
    <DateComponents.DateField validationState="invalid" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField errorMessage="Error message" validationState="invalid" />
<DateField validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## Contenu supplémentaire

### Placeholder

Cette prop vous permet de fournir un court indice décrivant la valeur attendue du champ de saisie. Cet indice s'affiche dans le champ de saisie avant que l'utilisateur n'entre une valeur et disparaît lors de la saisie de texte.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField placeholder='Placeholder' />
`}
>
    <DateComponents.DateField placeholder='Placeholder' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField placeholder="Placeholder" />
```

<!--/GITHUB_BLOCK-->

### Libellé

Permet de placer le libellé dans la partie gauche du champ. Le libellé ne peut pas occuper plus de la moitié de la largeur totale de l'espace de `DateField`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField label="Label" />
<DateField label="Very long label with huge amount of symbols" />
`}
>
    <DateComponents.DateField label="Label" />
    <DateComponents.DateField label="Very long label with huge amount of symbols" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField label="Label" />
```

<!--/GITHUB_BLOCK-->

### Bouton de suppression

`hasClear` est une prop booléenne qui offre aux utilisateurs la possibilité de supprimer rapidement le contenu du champ de saisie.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<DateField hasClear />`}
>
    <DateComponents.DateField
        hasClear
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField hasClear />
```

<!--/GITHUB_BLOCK-->

### Contenu de début

Permet d'ajouter du contenu à la partie de début du champ. Il est placé avant tous les autres composants.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<DateField label="Label" startContent={<Label size="s">Start content</Label>} />`}
>
    <DateComponents.DateField
        label="Label"
        startContent={<UIKit.Label size="s">Start content</UIKit.Label>}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField label="Label" startContent={<Label>Start content</Label>} />
```

<!--/GITHUB_BLOCK-->

### Contenu de fin

Permet d'ajouter du contenu à la partie de fin du champ. Il est placé après tous les autres composants.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<DateField endContent={<Label size="s">End content</Label>} hasClear/>`}
>
    <DateComponents.DateField
        hasClear
        endContent={<UIKit.Label size="s">End content</UIKit.Label>}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField hasClear endContent={<Label>End content</Label>} />
```

<!--/GITHUB_BLOCK-->

## Format

La prop `format` est une chaîne de caractères qui définit le format de date et d'heure que le composant `DateField` acceptera et affichera. Cette prop détermine comment la date et l'heure sont présentées visuellement à l'utilisateur et comment la saisie de l'utilisateur doit être formatée. [Formats disponibles](https://day.js.org/docs/en/display/format)

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField format='LTS' />
`}
>
    <DateComponents.DateField format='LTS' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField format="LTS" />
```

<!--/GITHUB_BLOCK-->

### Analyseur de date personnalisé

Vous pouvez fournir une fonction d'analyse personnalisée pour gérer les chaînes de dates collées via la prop `parseDateFromString`. Ceci est utile lorsque vous devez prendre en charge des formats de date spécifiques ou une logique d'analyse personnalisée différente du comportement par défaut.

<!--GITHUB_BLOCK-->

```tsx
import {dateTime} from '@gravity-ui/date-utils';

const customParser = (dateStr: string, format: string, timeZone?: string) => {
  // Custom parsing logic
  // For example, handle DD/MM/YYYY format specifically
  if (dateStr.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
    const [day, month, year] = dateStr.split('/');
    return dateTime({input: `${year}-${month}-${day}`, timeZone});
  }
  // Fallback to default parsing
  return dateTime({input: dateStr, format, timeZone});
};

<DateField parseDateFromString={customParser} />;
```

<!--/GITHUB_BLOCK-->

## Fuseau horaire

`timeZone` est la propriété pour définir le fuseau horaire de la valeur dans l'entrée. [En savoir plus sur les fuseaux horaires](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Propriétés

| Nom                 | Description                                                                                                          |                               Type                                 |          Défaut          |
| :------------------ | :------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------: | :-----------------------: |
| aria-describedby    | L'attribut `aria-describedby` du contrôle                                                                            |                               `string`                               |                           |
| aria-details        | L'attribut `aria-details` du contrôle                                                                                |                               `string`                               |                           |
| aria-label          | L'attribut `aria-label` du contrôle                                                                                  |                               `string`                               |                           |
| aria-labelledby     | L'attribut `aria-labelledby` du contrôle                                                                             |                               `string`                               |                           |
| autoFocus           | L'attribut `autofocus` du contrôle                                                                                   |                              `boolean`                               |                           |
| className           | Le nom de classe du wrapper du contrôle                                                                              |                               `string`                               |                           |
| defaultValue        | Définit la valeur initiale pour un composant non contrôlé.                                                           |                              `DateTime`                              |                           |
| disabled            | Indique que l'utilisateur ne peut pas interagir avec le contrôle                                                     |                              `boolean`                               |          `false`          |
| errorMessage        | Texte d'erreur                                                                                                       |                             `ReactNode`                              |                           |
| format              | Format de la date lorsqu'elle est affichée dans le champ de saisie. [Formats disponibles](https://day.js.org/docs/en/display/format) |                               `string`                               |                           |
| hasClear            | Affiche l'icône pour effacer la valeur du contrôle                                                                   |                              `boolean`                               |          `false`          |
| id                  | L'attribut `id` du contrôle                                                                                          |                               `string`                               |                           |
| isDateUnavailable   | Callback appelé pour chaque date du calendrier. S'il renvoie `true`, la date n'est pas disponible.             |                   `((date: DateTime) => boolean)`                    |                           |
| label               | Texte d'aide affiché à gauche du nœud de saisie                                                                      |                               `string`                               |                           |
| startContent        | Le nœud de l'utilisateur rendu avant le label et le champ de saisie                                                  |                          `React.ReactNode`                           |                           |
| maxValue            | La date maximale autorisée qu'un utilisateur peut sélectionner.                                                       |                              `DateTime`                              |                           |
| minValue            | La date minimale autorisée qu'un utilisateur peut sélectionner.                                                       |                              `DateTime`                              |                           |
| onBlur              | Se déclenche lorsque le contrôle perd le focus. Fournit l'événement de focus comme argument du callback.             |            `((e: FocusEvent<Element, Element>) => void)`             |                           |
| onFocus             | Se déclenche lorsque le contrôle obtient le focus. Fournit l'événement de focus comme argument du callback.          |            `((e: FocusEvent<Element, Element>) => void)`             |                           |
| onKeyDown           | Se déclenche lorsqu'une touche est enfoncée. Fournit l'événement clavier comme argument du callback.                 |               `((e: KeyboardEvent<Element>) => void)`                |                           |
| onKeyUp             | Se déclenche lorsqu'une touche est relâchée. Fournit l'événement clavier comme argument du callback.                 |               `((e: KeyboardEvent<Element>) => void)`                |                           |
| onUpdate            | Se déclenche lorsque la valeur est modifiée par l'utilisateur. Fournit la nouvelle valeur comme argument du callback. |                 `((value: DateTime \| null) => void`                 |                           |
| parseDateFromString | Fonction de parsing personnalisée pour analyser les chaînes de dates collées. Si non fournie, le parser par défaut sera utilisé. | `((dateStr: string, format: string, timeZone?: string) => DateTime)` |                           |
| pin                 | Arrondi des coins                                                                                                    |                               `string`                               |      `'round-round'`      |
| placeholder         | Texte qui apparaît dans le contrôle lorsqu'aucune valeur n'est définie                                               |                               `string`                               |                           |
| placeholderValue    | Une date de remplacement qui contrôle les valeurs par défaut de chaque segment lorsque l'utilisateur interagit avec eux pour la première fois. |                              `DateTime`                              | `today's date at midnigh` |
| readOnly            | Indique si la valeur du composant est immuable.                                                                      |                              `boolean`                               |          `false`          |
| endContent          | Nœud de l'utilisateur rendu après le champ de saisie et le bouton d'effacement                                       |                          `React.ReactNode`                           |                           |
| size                | La taille du contrôle                                                                                                |                       `"s"` `"m"` `"l"` `"xl"`                       |           `"m"`           |
| style               | Définit le style en ligne pour l'élément.                                                                            |                           `CSSProperties`                            |                           |
| timeZone            | Définit le fuseau horaire. [En savoir plus sur les fuseaux horaires](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                               `string`                               |                           |
| validationState     | État de validation                                                                                                   |                             `"invalid"`                              |                           |
| value               | La valeur du contrôle                                                                                                |                          `DateTime` `null`                           |                           |
| view                | La vue du contrôle                                                                                                    |                         `"normal"` `"clear"`                         |        `"normal"`         |
