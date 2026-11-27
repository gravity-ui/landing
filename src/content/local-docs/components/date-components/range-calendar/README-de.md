<!--GITHUB_BLOCK-->

# RangeCalendar

<!--/GITHUB_BLOCK-->

```tsx
import {RangeCalendar} from '@gravity-ui/date-components';
```

`RangeCalendar` ist eine leistungsstarke, flexible und benutzerfreundliche UI-Komponente zur Auswahl eines Datumsbereichs. Sie wurde mit React entwickelt und kombiniert die Funktionalität eines Kalenders und eines Datumsbereichs-Auswahlfelds, was sie zur idealen Wahl für Anwendungen macht, bei denen Benutzer ein Start- und Enddatum eingeben müssen. Sie kann gesteuert werden, wenn Sie die Eigenschaft `value` festlegen. Oder sie kann ungesteuert sein, wenn Sie keinen Wert festlegen. In diesem Fall können Sie den Anfangszustand mit der optionalen Eigenschaft `defaultValue` verwalten. Die Komponente ist standardmäßig ungesteuert.

### Nützliche Ergänzung

Um Daten im richtigen Format festzulegen, benötigen Sie möglicherweise zusätzliche Hilfsprogramme aus der [Date Utils-Bibliothek](https://gravity-ui.com/libraries/date-utils).

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

<!--LANDING_BLOCK

> [!NOTE]
> Row with "Selected range: ..." is not a part of the component. It was added to examples only for clarity.

LANDING_BLOCK-->

## Größe

Verwenden Sie die Eigenschaft `size`, um die Größe von `RangeCalendar` zu steuern. Die Standardgröße ist `m`.

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

## Wert

### Minimaler und maximaler Wert

Die Eigenschaft `minValue` ermöglicht es Ihnen, das früheste Datum und die früheste Uhrzeit anzugeben, die vom Benutzer eingegeben werden können. Umgekehrt gibt die Eigenschaft `maxValue` das späteste Datum und die späteste Uhrzeit an, die eingegeben werden können. Alle anderen Werte werden für den Benutzer deaktiviert.

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

## Modus

Definiert das Zeitintervall, das `RangeCalendar` anzeigen soll. Mit `mode` können Sie dies gesteuert auswählen. Für die ungesteuerte Verwendung müssen Sie keinen Wert angeben. Sie können den Anfangsmodus auch ungesteuert mit der `defaultMode`-Eigenschaft festlegen.

`days` - Standardmodus für `RangeCalendar`. Zeigt Tage im Monat an.

`months` - Zeigt Monate im Jahr an.

`quarters` - Zeigt Quartale nach Jahren an (nicht als Wert in `defaultMode` verfügbar).

`years` - Zeigt mehrere Jahre zur Auswahl an.

Sie können die aktivierten Modi mit der Eigenschaft `modes` einschränken.

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

## Zustände

### Deaktiviert

Der Zustand von `RangeCalendar`, bei dem der Benutzer nicht mit der Komponente interagieren kann.

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

### Nur-Lese-Zugriff

`readOnly` ist ein boolesches Attribut, das, wenn es auf true gesetzt ist, die `RangeCalendar`-Komponente für den Benutzer unveränderlich macht. Das bedeutet, dass die Eingabe zwar ihren aktuellen Wert anzeigt, Benutzer sie jedoch nicht ändern können.

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

## Fokussierter Wert

Ermöglicht die Auswahl des Datums, auf das die Ansicht von `RangeCalendar` fokussiert ist. Wenn Sie dies gesteuert wünschen, sollten Sie die Eigenschaft `focusedValue` verwenden. Sie können den anfänglichen fokussierten Wert für eine ungesteuerte Komponente mit der optionalen Eigenschaft `defaultFocusedValue` festlegen.

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
| [defaultMode](#mode)                  | Anfangsmodus, der im Kalender angezeigt wird                                                                        |                `days` `months` `quarters` `years`                |                                                             |
| [defaultValue](#value)                | Legt den Anfangswert für eine unkontrollierte Komponente fest.                                                       |                      `RangeValue<DateTime>`                      |                                                             |
| [disabled](#disabled)                 | Zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann                                            |                            `boolean`                             |                           `false`                           |
| [focusedValue](#focused-value)        | Legt die Standardansicht der unkontrollierten Komponente fest, die diesen Wert enthält                               |                        `DateTime` `null`                         |                                                             |
| id                                    | Das `id`-Attribut des Steuerelements                                                                                 |                             `string`                             |                                                             |
| isDateUnavailable                     | Callback, der für jedes Datum im Kalender aufgerufen wird. Wenn er `true` zurückgibt, ist das Datum nicht verfügbar. |                 `((date: DateTime) => boolean)`                  |                                                             |
| isWeekend                             | Callback, der für jedes Datum im Kalender aufgerufen wird. Wenn er `true` zurückgibt, ist das Datum ein Wochenende.  |                 `((date: DateTime) => boolean)`                  |                                                             |
| [maxValue](#min-and-max-value)        | Das maximal zulässige Datum, das ein Benutzer auswählen kann.                                                         |                            `DateTime`                            |                                                             |
| [minValue](#min-and-max-value)        | Das minimal zulässige Datum, das ein Benutzer auswählen kann.                                                         |                            `DateTime`                            |                                                             |
| [mode](#mode)                         | Definiert das Zeitintervall, das `RangeCalendar` auf kontrollierte Weise anzeigen soll.                              |                `days` `months` `quarters` `years`                |                                                             |
| modes                                 | Für den Benutzer verfügbare Modi                                                                                      |         `Partial<Record<RangeCalendarLayout, boolean>>`          | `{days: true, months: true, quarters: false, years: true }` |
| onBlur                                | Wird ausgelöst, wenn das Steuerelement den Fokus verliert. Stellt das Fokusereignis als Argument des Callbacks bereit |          `((e: FocusEvent<Element, Element>) => void)`           |                                                             |
| onFocus                               | Wird ausgelöst, wenn das Steuerelement den Fokus erhält. Stellt das Fokusereignis als Argument des Callbacks bereit   |          `((e: FocusEvent<Element, Element>) => void)`           |                                                             |
| onFocusUpdate                         | Wird ausgelöst, wenn sich das fokussierte Datum des Steuerelements ändert.                                           |                   `((date: DateTime) => void)`                   |                                                             |
| onUpdate                              | Wird ausgelöst, wenn sich der Wert ändert.                                                                           |                   `((value: DateTime) => void`                   |                                                             |
| onUpdateMode                          | Wird ausgelöst, wenn der Modus geändert wird.                                                                        | `((value: 'days' \| 'months' \| 'quarters' \| 'years' ) => void` |                                                             |
| [readOnly](#readonly)                 | Ob der Wert des Kalenders unveränderlich ist.                                                                        |                            `boolean`                             |                           `false`                           |
| [size](#size)                         | Die Größe des Steuerelements                                                                                         |                        `"m"` `"l"` `"xl"`                        |                            `"m"`                            |
| style                                 | Setzt Inline-Stile für das Element.                                                                                  |                         `CSSProperties`                          |                                                             |
| [timeZone](#time-zone)                | Legt die Zeitzone fest. [Mehr über Zeitzonen erfahren](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                             `string`                             |                                                             |
| [value](#calendar)                    | Der Wert des Steuerelements                                                                                          |                  `RangeValue<DateTime>` `null`                   |                                                             |
