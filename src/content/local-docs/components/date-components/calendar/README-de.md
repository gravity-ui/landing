<!--GITHUB_BLOCK-->

# Calendar

<!--/GITHUB_BLOCK-->

```tsx
import {Calendar} from '@gravity-ui/date-components';
```

`Calendar` ist eine flexible, benutzerfreundliche Kalenderkomponente für React-Anwendungen. Sie ermöglicht es Benutzern, Daten einfach anzuzeigen, auszuwählen und zu verwalten. Ideal für die Terminplanung, Buchungssysteme und jede Anwendung, bei der die Datumsauswahl unerlässlich ist. Sie kann gesteuert werden, wenn Sie die `value`-Eigenschaft festlegen. Oder sie kann ungesteuert sein, wenn Sie keinen Wert festlegen. In diesem Fall können Sie den Anfangszustand mit der optionalen Eigenschaft `defaultValue` verwalten. Die Komponente ist standardmäßig ungesteuert.

## Nützliche Ergänzung

Um Daten im richtigen Format festzulegen, benötigen Sie möglicherweise zusätzliche Hilfsprogramme aus der [Date Utils-Bibliothek](https://gravity-ui.com/libraries/date-utils).

```tsx
import {dateTimeParse} from '@gravity-ui/date-utils';
```

## Größe

Um die Größe des `Calendar` zu steuern, verwenden Sie die Eigenschaft `size`. Die Standardgröße ist `m`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar size="m" />
<Calendar size="l" />
<Calendar size="xl" />
`}
>
    <DateComponents.Calendar size="m" />
    <DateComponents.Calendar size="l" />
    <DateComponents.Calendar size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar size="m" />
<Calendar size="l" />
<Calendar size="xl" />
```

<!--/GITHUB_BLOCK-->

## Wert

### Minimaler und maximaler Wert

Die Eigenschaft `minValue` ermöglicht es Ihnen, das früheste Datum und die früheste Uhrzeit anzugeben, die vom Benutzer eingegeben werden können. Umgekehrt gibt die Eigenschaft `maxValue` das späteste Datum und die späteste Uhrzeit an, die vom Benutzer eingegeben werden können. Alle anderen Werte werden für den Benutzer deaktiviert.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar minValue={dateTimeParse('01.01.2024')} maxValue={dateTimeParse('01.01.2025')} />
`}
>
    <DateComponentsExamples.CalendarExample minValue={'01.01.2024'} maxValue={'01.01.2025'}/>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar minValue={dateTimeParse('01.01.2024')} maxValue={dateTimeParse('01.01.2025')} />
```

<!--/GITHUB_BLOCK-->

## Modus

Definiert das Zeitintervall, das `Calendar` anzeigen soll. Mit `mode` können Sie dies gesteuert auswählen. Für die ungesteuerte Variante müssen Sie keinen Wert angeben. Sie können den Anfangsmodus auch ungesteuert mit der `defaultMode`-Eigenschaft festlegen.

`days` - Standardmodus für `Calendar`. Zeigt Tage im Monat an.

`months` - Zeigt Monate im Jahr an.

`quarters` - Zeigt Quartale nach Jahren an (nicht als Wert in `defaultMode` verfügbar).

`years` - Zeigt mehrere Jahre zur Auswahl an.

Sie können aktivierte Modi mit der Eigenschaft `modes` einschränken.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar defaultMode="months"/>
`}
>
    <DateComponents.Calendar defaultMode="months" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar defaultMode="months" />
```

<!--/GITHUB_BLOCK-->

## Zustände

### Deaktiviert

Der Zustand des `Calendar`, in dem der Benutzer nicht mit der Komponente interagieren kann.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar disabled={true} />
`}
>
    <DateComponents.Calendar disabled={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar disabled={true} />
```

<!--/GITHUB_BLOCK-->

### Nur-Lese-Zugriff

`readOnly` ist ein boolesches Attribut, das, wenn es auf true gesetzt ist, die `Calendar`-Komponente für den Benutzer unveränderlich macht. Das bedeutet, dass der Benutzer den Wert zwar anzeigen, aber nicht ändern kann.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar readOnly={true} />
`}
>
    <DateComponents.Calendar readOnly={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar readOnly={true} />
```

<!--/GITHUB_BLOCK-->

## Fokussierter Wert

Ermöglicht die Auswahl des Datums, auf das die Ansicht des `Calendar` fokussiert ist. Wenn Sie dies gesteuert wünschen, sollten Sie die Eigenschaft `focusedValue` verwenden. Sie können den anfänglichen fokussierten Wert für eine ungesteuerte Komponente mit der optionalen Eigenschaft `defaultFocusedValue` festlegen.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Calendar defaultFocusedValue={dateTimeParse('01.01.2020')} />
`}
>
    <DateComponentsExamples.CalendarExample defaultFocusedValue={'01.01.2020'} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Calendar defaultFocusedValue={dateTimeParse('01.01.2020')} />
```

<!--/GITHUB_BLOCK-->

## Zeitzone

`timeZone` ist die Eigenschaft zum Festlegen der Zeitzone des Werts in der Eingabe. [Erfahren Sie mehr über Zeitzonen](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Eigenschaften

| Name                                  | Description                                                                                                          |                               Type                               |                           Default                           |
| :------------------------------------ | :------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------: | :---------------------------------------------------------: |
| aria-describedby                      | Das `aria-describedby`-Attribut des Steuerelements                                                                   |                             `string`                             |                                                             |
| aria-details                          | Das `aria-details`-Attribut des Steuerelements                                                                       |                             `string`                             |                                                             |
| aria-label                            | Das `aria-label`-Attribut des Steuerelements                                                                         |                             `string`                             |                                                             |
| aria-labelledby                       | Das `aria-labelledby`-Attribut des Steuerelements                                                                    |                             `string`                             |                                                             |
| autoFocus                             | Das `autofocus`-Attribut des Steuerelements                                                                          |                            `boolean`                             |                                                             |
| className                             | Der Klassenname des Wrapper-Elements des Steuerelements                                                              |                             `string`                             |                                                             |
| [defaultFocusedValue](#focused-value) | Das Datum, das beim ersten Mounten des Kalenders fokussiert ist (unkontrolliert)                                      |                            `DateTime`                            |                                                             |
| [defaultMode](#mode)                  | Der anfänglich angezeigte Modus im Kalender                                                                          |                `days` `months` `quarters` `years`                |                                                             |
| [defaultValue](#value)                | Legt den Anfangswert für eine unkontrollierte Komponente fest.                                                       |                            `DateTime`                            |                                                             |
| [disabled](#disabled)                 | Zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann                                            |                            `boolean`                             |                           `false`                           |
| [focusedValue](#focused-value)        | Legt die Standardansicht der unkontrollierten Komponente fest, die diesen Wert enthält                               |                        `DateTime` `null`                         |                                                             |
| id                                    | Das `id`-Attribut des Steuerelements                                                                                 |                             `string`                             |                                                             |
| isDateUnavailable                     | Callback, der für jedes Datum im Kalender aufgerufen wird. Wenn er `true` zurückgibt, ist das Datum nicht verfügbar. |                 `((date: DateTime) => boolean)`                  |                                                             |
| isWeekend                             | Callback, der für jedes Datum im Kalender aufgerufen wird. Wenn er `true` zurückgibt, ist das Datum ein Wochenende.   |                 `((date: DateTime) => boolean)`                  |                                                             |
| [maxValue](#min-and-max-value)        | Das maximal zulässige Datum, das ein Benutzer auswählen kann.                                                         |                            `DateTime`                            |                                                             |
| [minValue](#min-and-max-value)        | Das minimal zulässige Datum, das ein Benutzer auswählen kann.                                                         |                            `DateTime`                            |                                                             |
| [mode](#mode)                         | Definiert das Zeitintervall, das der `Calendar` auf kontrollierte Weise anzeigen soll.                               |                `days` `months` `quarters` `years`                |                                                             |
| modes                                 | Für den Benutzer verfügbare Modi                                                                                      |            `Partial<Record<CalendarLayout, boolean>>`            | `{days: true, months: true, quarters: false, years: true }` |
| onBlur                                | Wird ausgelöst, wenn das Steuerelement den Fokus verliert. Stellt das Fokusereignis als Argument des Callbacks bereit |          `((e: FocusEvent<Element, Element>) => void)`           |                                                             |
| onFocus                               | Wird ausgelöst, wenn das Steuerelement den Fokus erhält. Stellt das Fokusereignis als Argument des Callbacks bereit   |          `((e: FocusEvent<Element, Element>) => void)`           |                                                             |
| onFocusUpdate                         | Wird ausgelöst, wenn sich das fokussierte Datum des Steuerelements ändert.                                          |                   `((date: DateTime) => void)`                   |                                                             |
| onUpdate                              | Wird ausgelöst, wenn sich der Wert ändert.                                                                           |                   `((value: DateTime) => void`                   |                                                             |
| onUpdateMode                          | Wird ausgelöst, wenn der Modus geändert wird.                                                                        | `((value: 'days' \| 'months' \| 'quarters' \| 'years' ) => void` |                                                             |
| [readOnly](#readonly)                 | Ob der Kalenderwert unveränderlich ist.                                                                              |                            `boolean`                             |                           `false`                           |
| [size](#size)                         | Die Größe des Steuerelements                                                                                         |                        `"m"` `"l"` `"xl"`                        |                            `"m"`                            |
| style                                 | Legt Inline-Stile für das Element fest.                                                                              |                         `CSSProperties`                          |                                                             |
| [timeZone](#time-zone)                | Legt die Zeitzone fest. [Mehr über Zeitzonen erfahren](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                             `string`                             |                                                             |
| [value](#calendar)                    | Der Wert des Steuerelements                                                                                          |                        `DateTime` `null`                         |                                                             |
