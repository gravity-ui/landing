<!--GITHUB_BLOCK-->

# DatePicker

<!--/GITHUB_BLOCK-->

```tsx
import {DatePicker} from '@gravity-ui/date-components';
```

`DatePicker` est un composant sophistiqué, léger et entièrement personnalisable, conçu pour offrir une fonctionnalité intuitive de sélection de date dans vos applications React. Conçu en tenant compte de l'expérience utilisateur et de la facilité d'intégration, il s'intègre parfaitement dans les formulaires, les modales ou tout autre élément d'interface utilisateur nécessitant une saisie de date. Il peut être contrôlé si vous définissez la propriété `value`. Ou il peut être non contrôlé si vous ne définissez aucune valeur, mais dans ce cas, vous pouvez gérer l'état initial avec la propriété optionnelle `defaultValue`. Le composant est non contrôlé par défaut.

### Addition utile

Pour définir les dates dans le bon format, vous devrez peut-être inclure des utilitaires supplémentaires de la bibliothèque [Date Utils](https://gravity-ui.com/libraries/date-utils)

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

## Apparence

L'apparence de `DatePicker` est contrôlée par les propriétés `size`, `view` et `pin`.

### Taille

Pour contrôler la taille de `DatePicker`, utilisez la propriété `size`. La taille par défaut est `m`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker size="s" />
<DatePicker size="m" />
<DatePicker size="l" />
<DatePicker size="xl" />
`}
>
    <DateComponents.DatePicker size="s" />
    <DateComponents.DatePicker size="m" />
    <DateComponents.DatePicker size="l" />
    <DateComponents.DatePicker size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker size="s" />
<DatePicker size="m" />
<DatePicker size="l" />
<DatePicker size="xl" />
```

<!--/GITHUB_BLOCK-->

### Vue

`normal` - la vue principale de `DatePicker` (utilisée par défaut).

<!--LANDING_BLOCK
<ExampleBlock code={`<DatePicker />`}>
    <DateComponents.DatePicker />
</ExampleBlock>
LANDING_BLOCK-->

`clear` - vue de `DatePicker` sans bordures visibles (peut être utilisée avec un wrapper personnalisé)

<!--LANDING_BLOCK
<ExampleBlock code={`<DatePicker view="clear" />`}>
    <DateComponents.DatePicker view="clear" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker view="normal" />
<DatePicker view="clear" />
```

<!--/GITHUB_BLOCK-->

### Pin

La propriété `pin` vous permet de contrôler la forme des bords droit et gauche et est généralement utilisée pour combiner plusieurs contrôles en une seule unité.
La valeur de la propriété `pin` se compose des noms de style des bords gauche et droit, séparés par un tiret, par exemple `"round-brick"`.
Les styles de bord sont : `round` (par défaut), `circle`, `brick` et `clear`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker pin="round-brick" />
<DatePicker pin="brick-brick" />
<DatePicker pin="brick-round" />
`}
>
    <DateComponents.DatePicker pin="round-brick" />
    <DateComponents.DatePicker pin="brick-brick" />
    <DateComponents.DatePicker pin="brick-round" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker pin="round-brick" />
<DatePicker pin="brick-brick" />
<DatePicker pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## Valeur

### Valeur minimale et maximale

La propriété `minValue` vous permet de spécifier la date et l'heure les plus anciennes qui peuvent être saisies par l'utilisateur. Inversement, la propriété `maxValue` spécifie la date et l'heure les plus récentes qui peuvent être saisies. Si vous saisissez une valeur en dehors de ces limites, le composant modifie sa vue, comme dans le cas d'un état de validation invalide.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker minValue={dateTimeParse('01.01.2024')} placeholder={"minValue: '01.01.2024'"}/>
<DatePicker maxValue={dateTimeParse('01.01.2025')} placeholder={"maxValue: '01.01.2025'"}/>
`}
>
    <DateComponentsExamples.DatePickerExample minValue={'01.01.2024'} placeholder={"minValue: '01.01.2024'"} />
    <DateComponentsExamples.DatePickerExample maxValue={'01.01.2025'} placeholder={"maxValue: '01.01.2025'"} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx

<DatePicker minValue={dateTimeParse('01.01.2024')} />
<DatePicker maxValue={dateTimeParse('01.01.2025')} />
```

<!--/GITHUB_BLOCK-->

## États

### Désactivé

L'état de `DatePicker` où vous ne souhaitez pas que l'utilisateur puisse interagir avec le composant.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker disabled={true} defaultValue={dateTime()} />
`}
>
    <DateComponentsExamples.DatePickerExample disabled={true} defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker disabled defaultValue={dateTime()} />
```

<!--/GITHUB_BLOCK-->

### Lecture seule

`readOnly` est un attribut booléen qui, lorsqu'il est défini sur true, rend le composant `DatePicker` immuable pour l'utilisateur. Cela signifie que bien que l'entrée affiche sa valeur actuelle, les utilisateurs ne pourront pas la modifier.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker readOnly defaultValue={dateTimeParse(new Date())} />
`}
>
    <DateComponentsExamples.DatePickerExample readOnly defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker readOnly defaultValue={dateTime()} />
```

<!--/GITHUB_BLOCK-->

### Erreur

L'état de `DatePicker` dans lequel vous souhaitez indiquer une saisie utilisateur incorrecte. Pour modifier l'apparence de `DatePicker`, utilisez la propriété `validationState` avec la valeur `"invalid"`. Un message facultatif peut être ajouté via la propriété `errorMessage`. Le texte du message sera rendu sous le composant.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker errorMessage="Error message" validationState="invalid" />
<DatePicker validationState="invalid" />
`}
>
    <DateComponents.DatePicker errorMessage="Error message" validationState="invalid" />
    <DateComponents.DatePicker validationState="invalid" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker errorMessage="Error message" validationState="invalid" />
<DatePicker validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## Contenu supplémentaire

### Placeholder

Cette prop vous permet de fournir un court indice décrivant la valeur attendue du champ de saisie. Cet indice s'affiche dans le champ de saisie avant que l'utilisateur n'entre une valeur et disparaît lors de la saisie de texte.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker placeholder="Placeholder" />
`}
>
    <DateComponents.DatePicker placeholder='Placeholder' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker placeholder="Placeholder" />
```

<!--/GITHUB_BLOCK-->

### Libellé

Permet de placer le libellé dans la partie gauche du champ. Le libellé ne peut pas occuper plus de la moitié de la largeur totale de l'espace de `DatePicker`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker label="Label" />
<DatePicker label="Very long label with huge amount of symbols" />
`}
>
    <DateComponents.DatePicker label="Label" />
    <DateComponents.DatePicker label="Very long label with huge amount of symbols" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker label="Label" />
```

<!--/GITHUB_BLOCK-->

### Bouton Effacer

`hasClear` est une prop booléenne qui offre aux utilisateurs la possibilité d'effacer rapidement le contenu du champ de saisie.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<DatePicker hasClear />`}
>
    <DateComponents.DatePicker
        hasClear
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker hasClear />
```

<!--/GITHUB_BLOCK-->

## Format

La prop `format` est une chaîne de caractères qui définit le format de date et d'heure que le composant `DatePicker` acceptera et affichera. Cette prop détermine comment la date et l'heure sont présentées visuellement à l'utilisateur et comment la saisie de l'utilisateur doit être formatée. [Formats disponibles](https://day.js.org/docs/en/display/format)

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker format='LL' />
`}
>
    <DateComponents.DatePicker format='LL' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker format="LL" />
```

<!--/GITHUB_BLOCK-->

### Analyseur de date personnalisé

Vous pouvez fournir une fonction d'analyse personnalisée pour gérer les chaînes de date collées via la prop `parseDateFromString`. Ceci est utile lorsque vous devez prendre en charge des formats de date spécifiques ou une logique d'analyse personnalisée différente du comportement par défaut.

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

<DatePicker parseDateFromString={customParser} />;
```

<!--/GITHUB_BLOCK-->

## Fuseau horaire

`timeZone` est la propriété pour définir le fuseau horaire de la valeur dans l'entrée. [En savoir plus sur les fuseaux horaires](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Personnalisation

Si vous souhaitez utiliser un composant calendrier personnalisé à l'intérieur de `DatePicker`, vous pouvez le passer comme `children` avec des props similaires à celles d'un calendrier.

<!--LANDING_BLOCK
[Learn more about calendar](https://gravity-ui.com/components/date-components/calendar)
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about calendar](https://github.com/gravity-ui/date-components/blob/main/src/components/Calendar/README.md)

<!--/GITHUB_BLOCK-->

## Propriétés

| Nom                           | Description                                                                                                                                |                               Type                                 |          Défaut          |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------: | :-----------------------: |
| aria-describedby               | L'attribut `aria-describedby` du contrôle. Identifie l'élément (ou les éléments) qui décrit l'objet.                                      |                               `string`                               |                           |
| aria-details                   | L'attribut `aria-details` du contrôle. Identifie l'élément (ou les éléments) qui fournissent une description détaillée et étendue de l'objet. |                               `string`                               |                           |
| aria-label                     | L'attribut `aria-label` du contrôle. Définit une valeur de chaîne qui étiquette l'élément actuel.                                           |                               `string`                               |                           |
| aria-labelledby                | L'attribut `aria-labelledby` du contrôle. Identifie l'élément (ou les éléments) qui étiquettent l'élément actuel.                           |                               `string`                               |                           |
| autoFocus                      | L'attribut `autofocus` du contrôle. Indique si l'élément doit recevoir le focus lors du rendu.                                             |                              `boolean`                               |                           |
| className                      | Le nom de classe du wrapper du contrôle                                                                                                    |                               `string`                               |                           |
| [defaultValue](#datepicker)    | Définit la valeur initiale pour un composant non contrôlé.                                                                                 |                              `DateTime`                              |                           |
| [disabled](#disabled)          | Indique que l'utilisateur ne peut pas interagir avec le contrôle                                                                           |                              `boolean`                               |          `false`          |
| [errorMessage](#error)         | Texte d'erreur                                                                                                                             |                             `ReactNode`                              |                           |
| [format](#format)              | Format de la date lors du rendu dans le champ de saisie. [Formats disponibles](https://day.js.org/docs/en/display/format)                  |                               `string`                               |                           |
| [hasClear](#clear-button)      | Affiche l'icône pour effacer la valeur du contrôle                                                                                         |                              `boolean`                               |          `false`          |
| id                             | L'attribut `id` du contrôle                                                                                                                |                               `string`                               |                           |
| isDateUnavailable              | Callback appelé pour chaque date du calendrier. S'il renvoie `true`, la date n'est pas disponible.                                         |                   `((date: DateTime) => boolean)`                    |                           |
| [label](#label)                | Texte d'aide rendu à gauche du nœud de saisie                                                                                              |                               `string`                               |                           |
| [maxValue](#min-and-max-value) | La date maximale autorisée qu'un utilisateur peut sélectionner.                                                                             |                              `DateTime`                              |                           |
| [minValue](#min-and-max-value) | La date minimale autorisée qu'un utilisateur peut sélectionner.                                                                             |                              `DateTime`                              |                           |
| onBlur                         | Se déclenche lorsque le contrôle perd le focus. Fournit l'événement de focus comme argument du callback.                                   |            `((e: FocusEvent<Element, Element>) => void)`             |                           |
| onFocus                        | Se déclenche lorsque le contrôle obtient le focus. Fournit l'événement de focus comme argument du callback.                                |            `((e: FocusEvent<Element, Element>) => void)`             |                           |
| onKeyDown                      | Se déclenche lorsqu'une touche est enfoncée. Fournit l'événement clavier comme argument du callback.                                       |               `((e: KeyboardEvent<Element>) => void)`                |                           |
| onKeyUp                        | Se déclenche lorsqu'une touche est relâchée. Fournit l'événement clavier comme argument du callback.                                       |               `((e: KeyboardEvent<Element>) => void)`                |                           |
| onUpdate                       | Se déclenche lorsque la valeur est modifiée par l'utilisateur. Fournit la nouvelle valeur comme argument du callback.                       |                 `((value: DateTime \| null) => void`                 |                           |
| parseDateFromString            | Fonction de parsing personnalisée pour analyser les chaînes de dates collées. Si elle n'est pas fournie, le parser par défaut sera utilisé. | `((dateStr: string, format: string, timeZone?: string) => DateTime)` |                           |
| [pin](#pin)                    | Arrondi des coins                                                                                                                          |                            `TextInputPin`                            |      `'round-round'`      |
| [placeholder](#placeholder)    | Texte qui apparaît dans le contrôle lorsqu'aucune valeur n'est définie                                                                      |                               `string`                               |                           |
| placeholderValue               | Une date de substitution qui contrôle les valeurs par défaut de chaque segment lorsque l'utilisateur interagit avec eux pour la première fois. |                              `DateTime`                              | `today's date at midnigh` |
| [readOnly](#readonly)          | Indique si la valeur du composant est immuable.                                                                                            |                              `boolean`                               |          `false`          |
| [size](#size)                  | La taille du contrôle                                                                                                                      |                       `"s"` `"m"` `"l"` `"xl"`                       |           `"m"`           |
| style                          | Définit le style en ligne pour l'élément.                                                                                                  |                           `CSSProperties`                            |                           |
| [timeZone](#time-zone)         | Définit le fuseau horaire. [En savoir plus sur les fuseaux horaires](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)       |                               `string`                               |                           |
| [validationState](#error)      | État de validation                                                                                                                         |                             `"invalid"`                              |                           |
| [value](#datepicker)           | La valeur du contrôle                                                                                                                      |                          `DateTime` `null`                           |                           |
| [view](#view)                  | La vue du contrôle                                                                                                                        |                         `"normal"` `"clear"`                         |        `"normal"`         |
