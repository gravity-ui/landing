<!--GITHUB_BLOCK-->

# RangeCalendar

<!--/GITHUB_BLOCK-->

```tsx
import {RangeCalendar} from '@gravity-ui/date-components';
```

`RangeCalendar` est un composant d'interface utilisateur puissant, flexible et convivial conçu pour sélectionner une plage de dates. Construit avec React, il combine les fonctionnalités d'un calendrier et d'un sélecteur de plage de dates, ce qui en fait un choix idéal pour les applications qui nécessitent aux utilisateurs de saisir une date de début et de fin. Il peut être contrôlé si vous définissez la propriété `value`. Ou il peut être non contrôlé si vous ne définissez aucune valeur, mais dans ce cas, vous pouvez gérer l'état initial avec la propriété optionnelle `defaultValue`. Le composant est non contrôlé par défaut.

### Ajout utile

Pour définir les dates dans le bon format, vous pourriez avoir besoin d'inclure des utilitaires supplémentaires de la bibliothèque [Date Utils](https://gravity-ui.com/libraries/date-utils)

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

<!--LANDING_BLOCK

> [!NOTE]
> Row with "Selected range: ..." is not a part of the component. It was added to examples only for clarity.

LANDING_BLOCK-->

## Taille

Pour contrôler la taille de `RangeCalendar`, utilisez la propriété `size`. La taille par défaut est `m`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar size="m" />
<RangeCalendar size="l" />
<RangeCalendar size="xl" />
`}
>
    <DateComponentsExamples.RangeCalendarExample size="m" />
    <DateComponentsExamples.RangeCalendarExample size="l" />
    <DateComponentsExamples.RangeCalendarExample size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar size="m" />
<RangeCalendar size="l" />
<RangeCalendar size="xl" />
```

<!--/GITHUB_BLOCK-->

## Valeur

### Valeur minimale et maximale

La propriété `minValue` vous permet de spécifier la date et l'heure les plus anciennes que l'utilisateur peut saisir. Inversement, la propriété `maxValue` spécifie la date et l'heure les plus récentes que l'utilisateur peut saisir. Toutes les autres valeurs seront désactivées pour l'utilisateur.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar minValue={dateTimeParse('01.01.2024')} maxValue={dateTimeParse('01.01.2025')} />
`}
>
    <DateComponentsExamples.RangeCalendarExample minValue={'01.01.2024'} maxValue={'01.01.2025'}/>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar minValue={dateTimeParse('01.01.2024')} maxValue={dateTimeParse('01.01.2025')} />
```

<!--/GITHUB_BLOCK-->

## Mode

Définit l'intervalle de temps que `RangeCalendar` doit afficher. Avec `mode`, vous pouvez le choisir de manière contrôlée. Pour une utilisation non contrôlée, vous n'avez pas besoin de spécifier de valeur. Vous pouvez également définir le mode initial de manière non contrôlée avec la prop `defaultMode`.

`days` - mode par défaut pour `RangeCalendar`. Il affiche les jours du mois.

`months` - affiche les mois de l'année

`quarters` - affiche les trimestres par année (non disponible comme valeur dans `defaultMode`)

`years` - affiche plusieurs années à sélectionner

Vous pouvez limiter les modes activés en utilisant la prop `modes`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar defaultMode="months"/>
`}
>
    <DateComponentsExamples.RangeCalendarExample defaultMode="months" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar defaultMode="months" />
```

<!--/GITHUB_BLOCK-->

## États

### Désactivé

L'état de `RangeCalendar` où vous ne souhaitez pas que l'utilisateur puisse interagir avec le composant.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar
  disabled={true}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
`}
>
    <DateComponentsExamples.RangeCalendarWithDefaultValueExample disabled={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar
  disabled={true}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
```

<!--/GITHUB_BLOCK-->

### Lecture seule

`readOnly` est un attribut booléen qui, lorsqu'il est défini sur true, rend le composant `RangeCalendar` immuable pour l'utilisateur. Cela signifie que bien que l'entrée affiche sa valeur actuelle, les utilisateurs ne pourront pas la modifier.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar
  readOnly={true}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
`}
>
    <DateComponentsExamples.RangeCalendarWithDefaultValueExample readOnly={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar
  readOnly={true}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
```

<!--/GITHUB_BLOCK-->

## Valeur focalisée

Permet de sélectionner la date sur laquelle la vue `RangeCalendar` est focalisée. Si vous avez besoin qu'elle soit contrôlée, vous devez utiliser la prop `focusedValue`. Vous pouvez définir la valeur focalisée initiale pour un composant non contrôlé avec la prop optionnelle `defaultFocusedValue`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<RangeCalendar
  defaultFocusedValue={dateTimeParse('01.01.2020')} defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
`}
>
    <DateComponentsExamples.RangeCalendarWithDefaultValueExample defaultFocusedValue={'01.01.2020'} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<RangeCalendar
  defaultFocusedValue={dateTimeParse('01.01.2020')}
  defaultValue={{start: dateTime().add({days: 2}), end: dateTime().subtract({days: 2})}}
/>
```

<!--/GITHUB_BLOCK-->

## Fuseau horaire

`timeZone` est la propriété pour définir le fuseau horaire de la valeur dans l'entrée. [En savoir plus sur les fuseaux horaires](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Propriétés

| Nom                                   | Description                                                                                                          |                               Type                               |                           Défaut                           |
| :------------------------------------ | :------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------: | :---------------------------------------------------------: |
| aria-describedby                      | L'attribut `aria-describedby` du contrôle                                                                            |                             `string`                             |                                                             |
| aria-details                          | L'attribut `aria-details` du contrôle                                                                                |                             `string`                             |                                                             |
| aria-label                            | L'attribut `aria-label` du contrôle                                                                                  |                             `string`                             |                                                             |
| aria-labelledby                       | L'attribut `aria-labelledby` du contrôle                                                                             |                             `string`                             |                                                             |
| autoFocus                             | L'attribut `autofocus` du contrôle                                                                                   |                            `boolean`                             |                                                             |
| className                             | Le nom de classe du wrapper du contrôle                                                                              |                             `string`                             |                                                             |
| [defaultFocusedValue](#focused-value) | La date qui est mise en focus lorsque le calendrier est monté pour la première fois (non contrôlé)                   |                            `DateTime`                            |                                                             |
| [defaultMode](#mode)                  | Le mode initial à afficher dans le calendrier                                                                        |                `days` `months` `quarters` `years`                |                                                             |
| [defaultValue](#value)                | Définit la valeur initiale pour le composant non contrôlé.                                                           |                      `RangeValue<DateTime>`                      |                                                             |
| [disabled](#disabled)                 | Indique que l'utilisateur ne peut pas interagir avec le contrôle                                                     |                            `boolean`                             |                           `false`                           |
| [focusedValue](#focused-value)        | Définit la vue par défaut du composant non contrôlé qui inclut cette valeur                                          |                        `DateTime` `null`                         |                                                             |
| id                                    | L'attribut `id` du contrôle                                                                                          |                             `string`                             |                                                             |
| isDateUnavailable                     | Callback qui est appelé pour chaque date du calendrier. S'il renvoie `true`, la date est indisponible.               |                 `((date: DateTime) => boolean)`                  |                                                             |
| isWeekend                             | Callback qui est appelé pour chaque date du calendrier. S'il renvoie `true`, la date est un week-end.                 |                 `((date: DateTime) => boolean)`                  |                                                             |
| [maxValue](#min-and-max-value)        | La date maximale autorisée qu'un utilisateur peut sélectionner.                                                       |                            `DateTime`                            |                                                             |
| [minValue](#min-and-max-value)        | La date minimale autorisée qu'un utilisateur peut sélectionner.                                                       |                            `DateTime`                            |                                                             |
| [mode](#mode)                         | Définit l'intervalle de temps que `RangeCalendar` doit afficher de manière contrôlée.                                 |                `days` `months` `quarters` `years`                |                                                             |
| modes                                 | Modes disponibles pour l'utilisateur                                                                                 |         `Partial<Record<RangeCalendarLayout, boolean>>`          | `{days: true, months: true, quarters: false, years: true }` |
| onBlur                                | Se déclenche lorsque le contrôle perd le focus. Fournit l'événement de focus comme argument du callback.             |          `((e: FocusEvent<Element, Element>) => void)`           |                                                             |
| onFocus                               | Se déclenche lorsque le contrôle obtient le focus. Fournit l'événement de focus comme argument du callback.          |          `((e: FocusEvent<Element, Element>) => void)`           |                                                             |
| onFocusUpdate                         | Se déclenche lorsque la date mise en focus du contrôle change.                                                        |                   `((date: DateTime) => void)`                   |                                                             |
| onUpdate                              | Se déclenche lorsque la valeur est modifiée.                                                                         |                   `((value: DateTime) => void`                   |                                                             |
| onUpdateMode                          | Se déclenche lorsque le mode est modifié.                                                                            | `((value: 'days' \| 'months' \| 'quarters' \| 'years' ) => void` |                                                             |
| [readOnly](#readonly)                 | Si la valeur du calendrier est immuable.                                                                             |                            `boolean`                             |                           `false`                           |
| [size](#size)                         | La taille du contrôle                                                                                                |                        `"m"` `"l"` `"xl"`                        |                            `"m"`                            |
| style                                 | Définit le style en ligne pour l'élément.                                                                            |                         `CSSProperties`                          |                                                             |
| [timeZone](#time-zone)                | Définit le fuseau horaire. [En savoir plus sur les fuseaux horaires](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                             `string`                             |                                                             |
| [value](#calendar)                    | La valeur du contrôle                                                                                                |                  `RangeValue<DateTime>` `null`                   |                                                             |
