`Select` ist eine Steuereinheit, die eine Liste von Optionen bereitstellt, aus denen ein Benutzer auswählen kann.

```tsx
import {Select} from '@gravity-ui/uikit';
```

> [!NOTE]
> In v8 werden die Optionen von der neuen Liste gezeichnet. Was sich für den Verbraucher geändert hat, ist im [Migrationsleitfaden](https://github.com/gravity-ui/uikit/blob/main/docs/migration-select-v8.md) gesammelt.

## Optionen

Optionen zur Auswahl.

### Optionen definieren

Sie können Optionen als Array von Objekten oder als Kinder einer Komponente definieren. Der erste Ansatz ist nützlich für Fälle, in denen Optionen eine komplexe Vorbereitung und möglicherweise eine Speicherung erfordern. Der zweite ist praktisch, wenn es wenige Optionen gibt und ihre Konfiguration keine komplexen Berechnungen erfordert.

In einer React Server Component sind `Select.Option` und `Select.OptionGroup` nicht erreichbar: Verwenden Sie stattdessen die benannten `SelectOption` und `SelectOptionGroup`. Ihre Props-Typen sind `SelectOptionProps` und `SelectOptionGroupProps`.

#### Flache Liste

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

#### Der Text einer Option

Der Text einer Option ist das, was der Trigger für eine ausgewählte Option anzeigt, womit der Filter übereinstimmt und wonach die Suche nach den ersten Buchstaben sucht. Standardmäßig ist dies der Inhalt der Option, wenn dieser eine Zeichenkette oder eine Zahl ist, ihre Kinder, wenn diese es sind, und andernfalls ihr `value` — eine Option, die etwas anderes als eine einfache Zeichenkette rendert, benötigt `getOptionText`, andernfalls wird sie nach ihrem Wert gesucht und benannt.

GRAVITY_TRANSLATION_BLOCK_3_END

`useSelectOptions` nimmt dieselbe Eigenschaft: übergeben Sie sie auch dort, wenn die Optionen außerhalb der Komponente gefiltert werden. Definieren Sie die Funktion außerhalb der Komponente oder memoizen Sie sie — sie nimmt an der Memoization der Liste teil, und eine neue Funktion bei jedem Rendern baut die Zeilen neu auf.

`getOptionText` ersetzt die `text`-Eigenschaft einer Option, die nicht mehr vorhanden ist: Der Text einer Option wird abgefragt und nicht gespeichert, sodass eine Funktion jede Option abdeckt, anstatt ein Feld, das auf jeder von ihnen wiederholt wird.

Der `value` einer Option identifiziert ihre Zeile, daher müssen die Werte über die gesamte Liste, einschließlich Gruppen, eindeutig sein (für einen [nicht-Zeichenkettenwert](#non-string-values) — sein Schlüssel). Die DOM `id` der Zeile wird daraus abgeleitet, und diese ID ist es, auf die `aria-activedescendant` des Triggers zeigt — lesen Sie sie von dort, anstatt sie von Hand zu erstellen: das Escaping eines Wertes gehört zur Liste und ist kein Vertrag.

#### Gruppierte Liste

Eine Gruppenüberschrift ist eine Beschriftung und keine Option: Sie trägt `role="presentation"`, bleibt aus dem Tastatur-Walk und aus der Zählung von `role="option"`-Zeilen heraus und beschreibt die darunter liegenden Optionen über `aria-describedby`. Eine Gruppe, deren `label` leer ist, zeichnet eine Trennlinie anstelle einer Überschrift — da sie die erste Zeile der Liste ist, hat sie nichts zu trennen und nimmt keinen Platz ein. Dies ist die Standarddarstellung einer Gruppe: `renderOptionGroup` und `getOptionGroupHeight` werden zuerst abgefragt und rendern und messen, was sie wollen, mit oder ohne leeres Label.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Daten in Optionen speichern

Sie können eindeutige Daten in jeder Option definieren und speichern, indem Sie die Eigenschaft `option.data` verwenden. Dies kann nützlich sein, wenn Sie Daten beim Verwenden des `onUpdate`-Callbacks anreichern müssen oder beispielsweise beim Rendern Ihrer Optionen mit `renderOption`.

### Nicht-Zeichenkettenwerte

Der Wert einer Option kann von jedem Typ sein: Der Typ von `value`, `defaultValue` und `onUpdate` folgt den Optionen. Select kennt einen Wert anhand eines Zeichenketten-Schlüssels — die ID seiner Zeile, das Feld eines Formulars und der Vergleich zweier Werte verwenden ihn. Eine Zeichenkette ist ihr eigener Schlüssel, ein anderer primitiver Wert wird mit `String()` in einen umgewandelt, und ein Objekt benötigt `getValueKey`. Werte mit gleichen Schlüsseln sind ein Wert: Ein Objekt aus einer neuen Antwort wählt die Option aus, der es entspricht. Definieren Sie `getValueKey` außerhalb der Komponente oder memoizen Sie es, wie `getOptionText`.

GRAVITY_TRANSLATION_BLOCK_6_END

Ein Objektwert hat keinen eigenen Text: Geben Sie der Option einen Zeichenketten-`content` oder übergeben Sie `getOptionText`. Ein `Select.Option`-Kind nimmt eine Zeichenkette, es sei denn, sein Typ ist benannt: `<Select.Option<unknown, number> value={1}>`; Select selbst nimmt den Typ von `value` oder ein typisiertes `onUpdate={(value: number[]) => …}`. Ein ausgewählter Wert ohne Option wird durch seinen Schlüssel angezeigt; behalten Sie seine Option in `options` oder rendern Sie sie mit `renderSelectedOptions`. Ein Formular sendet Schlüssel, keine Werte. In einem Union-Typ teilen sich `1` und `"1"` einen Schlüssel und sind ein Wert.

### Nullbare Werte

`''`, `null` und `undefined` bedeuten keinen Wert, es sei denn, eine Option deklariert sie. Ohne eine Option hat ein solcher Wert keinen Text, keine Löschtaste oder keine Anzahl, ein Formular sendet ihn als `''`, während `value` und `onUpdate` ihn unverändert lassen. `0` und `false` sind immer Werte.

GRAVITY_TRANSLATION_BLOCK_7_END

## Mehrere Optionen auswählen

Um die Mehrfachauswahl zu aktivieren, verwenden Sie die Eigenschaft `multiple`. Ihr Standardwert ist `false`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

Shift+Klick, Shift+↑/↓ und Shift+Leertaste wählen einen Bereich von Optionen aus, von der zuletzt ausgewählten bis zur Zieloption.

### Zähler

Sie können dem Komponenten eine Zählung der ausgewählten Elemente mit der Eigenschaft `hasCounter` hinzufügen.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Optionen filtern

Um den Filterbereich zu aktivieren, verwenden Sie die Eigenschaft `filterable`. Ihr Standardwert ist `false`.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Suche nach den ersten Buchstaben

Wenn das Popup geöffnet ist und kein Filter im Weg ist, suchen die Zeichentasten nach einer Option: Die Liste verschiebt die Aktivität zur ersten Option, deren Text **mit** dem Getippten beginnt, der Puffer wird eine Sekunde nach der letzten Taste zurückgesetzt, und das Wiederholen eines Zeichens durchläuft die Optionen, die damit beginnen. Ein Leerzeichen gehört zur Abfrage, während sie getippt wird, sodass eine Beschriftung mit einem Leerzeichen erreichbar ist — und sie wählt nichts aus, bis der Puffer wieder leer ist. Ein Zeichen, das die Liste für ihre Suche verwendet hat, erreicht nicht die Hotkeys der umgebenden Anwendung.

In einem `filterable` Select gehen die Tasten stattdessen in den Filter: Das Tippen dort filtert.

## Größe

Um die Standardgröße der Steuereinheit und der Optionen zu verwalten, verwenden Sie die Eigenschaft `size`. Ihre Standardgröße ist `m`.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## Breite der Steuereinheit

Standardmäßig dehnt sich die Breite der Steuereinheit, um dem Inhalt der ausgewählten Optionen zu entsprechen. Sie können sie mit der Eigenschaft `width` verwalten:

`'max'`: Dehnt sich auf die volle Breite des Elternelements aus.

`number`: Wendet die Breite in Pixeln an.

GRAVITY_TRANSLATION_BLOCK_16_END

## Breite des Popups

Sie können die Breite des Popups mit der Eigenschaft `popupWidth` verwalten. Die verfügbaren Werte sind:

`'fit'`: Wendet die Breite der Steuereinheit an.

`number`: Wendet die Breite in Pixeln an.

Hinweise zum Standardverhalten:

- Die Popup-Breite entspricht der Breite der breitesten Option, aber nicht breiter als `90vw`. Dies gilt nicht für eine [virtualisierte](#virtualized-list) `Select`.

- Schmale Optionen werden auf die Breite der Steuereinheit gestreckt.

GRAVITY_TRANSLATION_BLOCK_17_END

## Virtualisierte Liste

Eine lange Liste von Optionen wird zeilenweise gerendert, es sei denn, Sie bitten um etwas anderes: jede Option ist eine DOM-Zeile. Um nur die sichtbaren zu rendern, umschließen Sie `Select` mit `ListVirtualizer` aus dem `@gravity-ui/uikit/virtualizer`-Einstiegspunkt — der Wrapper benötigt keine Konfiguration, und das Popup funktioniert weiterhin über das Portal. Ein paar hundert Optionen sind der Punkt, an dem es sich auszuzahlen beginnt; über 150 gibt `Select` dies in einer Entwicklungswarnung aus.

Der Einstiegspunkt benötigt `@tanstack/react-virtual`: es ist eine optionale Peer-Abhängigkeit des Pakets und muss zusammen damit installiert werden.

```tsx
import {Select} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

<ListVirtualizer>
  <Select options={thousandsOfOptions} />
</ListVirtualizer>;
```

Der Wrapper muss nicht neben dem `Select` stehen: ein Wrapper mit `minItemsCount` am Stamm der Anwendung deckt jeden `Select` darunter ab. Ein `Select` mit weniger Optionen wird gerendert, als ob kein Wrapper vorhanden wäre — jede Option eine DOM-Zeile, das Popup so breit wie die breiteste Option. Der `Select` zählt alle seine Optionen, ohne die Gruppenüberschriften und ohne den Filter, sodass das Tippen die Liste nicht umschaltet.

```tsx
import {Provider} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

<Provider theme="light">
  <ListVirtualizer minItemsCount={50}>
    <App />
  </ListVirtualizer>
</Provider>;
```

Um die Einstellungen für einen einzelnen `Select` zu ändern, platzieren Sie einen zweiten Wrapper direkt darum. Er ändert nur das, was ihm übergeben wird, und übernimmt den Rest von dem am Stamm: `overscan={20}` behält den Schwellenwert bei, `minItemsCount={0}` virtualisiert diesen `Select` unabhängig von der Anzahl seiner Optionen, und `minItemsCount={Infinity}` behält ihn unverändert bei.

```tsx
import {Select} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

// Unter dem Wrapper am Stamm: dieser Select wird unabhängig von der Anzahl seiner Optionen virtualisiert
<ListVirtualizer minItemsCount={0}>
  <Select options={options} />
</ListVirtualizer>;
```

Der Code des Virtualizers ist ein eigener Block und wird für kürzere `Select`s nicht geladen. Ein `Select`, der virtualisiert werden soll, beginnt mit dem Laden beim Mounten; ein Popup, das geöffnet wird, bevor es ankommt, zeigt seine ersten Optionen an, bis das Fenster übernimmt, und scrollt dann zur ausgewählten Option.

Dinge, die man bei einem virtualisierten `Select` beachten sollte:

- Die Popup-Breite wird nicht mehr an die Länge der längsten Option angepasst.

- Die minimale Breite des Popups entspricht der Breite des Steuerelements oder `100px`, wenn das Steuerelement kürzer ist.

- Die Höhe einer Zeile vor dem Rendern wird von [getOptionHeight](#rendering-options-with-different-heights) und der `size` des `Select` übernommen; die `estimateItemSize` des Wrappers wird nicht verwendet, da der Typ einer Optionszeile den `Select` nicht verlässt — die Übergabe führt zu einer Warnung in der Entwicklung. Die Eigenschaften `measure` und `overscan` des Wrappers funktionieren wie [beschrieben](https://github.com/gravity-ui/uikit/blob/main/src/components/List/README.md#virtualization) für die `List`.

- Ein auf dem Server gerendertes Popup erhält seine ersten Optionen anstelle des Fensters — es gibt kein Viewport, gegen das es gemessen werden kann — und das Fenster übernimmt nach der Hydration.

- Der Wrapper deckt die Liste dieses `Select` ab, auch die, die [renderPopup](#rendering-options-list) auf der Seite platziert. Eine Liste innerhalb einer Zeile davon oder ein `Select`, der in einer solchen Zeile platziert ist, rendert jeweils seine eigenen Zeilen: die Virtualisierung einer Liste erreicht nicht, was ihre Zeilen zeichnen.

- Definieren Sie `getOptionHeight` und `renderOption` außerhalb der Komponente oder memoïsieren Sie sie: eine neue Funktion bei jedem Rendern lässt den Virtualizer seine Messungen neu starten und die Zeilen neu rendern.

GRAVITY_TRANSLATION_BLOCK_18_END

## Zugänglicher Name

Der Trigger benötigt einen Namen: `label`, `aria-label`, `aria-labelledby` oder ein `<label htmlFor>`, das auf die `id` des `Select` verweist. `label` benennt den Trigger und bleibt außerhalb seines Werts; ein Platzhalter ist kein Name. Mit `renderControl` wird das Label nicht gezeichnet, benennen Sie also das benutzerdefinierte Steuerelement selbst.

## Fortgeschrittene Nutzung

Es gibt viele Möglichkeiten, Ihren `Select` anzupassen.

### Rendern eines benutzerdefinierten Steuerelements

Um ein benutzerdefiniertes Steuerelement zu rendern, verwenden Sie die Eigenschaft `renderControl`.

Übergeben Sie `ref` an Ihr Element und verteilen Sie `triggerProps` darauf: sie öffnen und schließen das Popup, tragen die Tastatur der Liste und die ARIA des Combobox (`role`, `aria-expanded`, `aria-controls`, `aria-activedescendant`). Ein Steuerelement, das diese für sich behält, öffnet sich nicht und navigiert nicht. `triggerProps` enthält auch `disabled`. Gießen Sie den generischen `ref` in einen Button-Ref, wenn Sie `Button` verwenden.

GRAVITY_TRANSLATION_BLOCK_19_END

GRAVITY_TRANSLATION_BLOCK_20_END

### Rendern eines benutzerdefinierten Filterbereichs

Um einen benutzerdefinierten Filterbereich zu rendern, verwenden Sie die Eigenschaft `renderFilter` und setzen Sie die Eigenschaft `filterable` auf `true`.

`inputProps` trägt alles, was das Eingabefeld eines Combobox benötigt: den Wert, die Handler, den Platzhalter und die ARIA-Verbindung — `role`, `aria-label`, `aria-controls`, `aria-activedescendant`, `aria-expanded`, `aria-autocomplete`. Es trägt auch `size: 1`, einen Hinweis auf die Breite anstelle von ARIA: es ermöglicht dem Eingabefeld, sich an das Popup anzupassen, anstatt die zwanzig Zeichen zu behalten, die ein `input` standardmäßig benötigt. Ohne sie hat der Filter keinen zugänglichen Namen und benennt keine aktive Option für einen Screenreader. Verteilen Sie ihn auf ein einfaches `input` zusammen mit `ref`. Eine Komponente mit einer eigenen API — sagen wir `TextInput` — nimmt die Eigenschaften, die sie besitzt (`value`, `placeholder`, `onChange`, `onKeyDown`), und übergibt den Rest über `controlProps` an das Element, was eine Zeile der Destrukturierung erledigt; `onKeyDown` muss darunter sein, es trägt die gesamte Tastatur der Liste.

GRAVITY_TRANSLATION_BLOCK_21_END

GRAVITY_TRANSLATION_BLOCK_22_END

### Rendern benutzerdefinierter Optionen

Um benutzerdefinierte Optionen zu rendern, verwenden Sie die Eigenschaft `renderOption`. Sie wird mit der Option und dem Zustand ihrer Zeile aufgerufen: `isItemActive`, ob die Zeile die aktive ist (die, auf die `Enter` angewendet wird); `selected`, ob die Option ausgewählt ist; und `itemHeight`, die Höhe, die die Zeile hat — die, die [getOptionHeight](#rendering-options-with-different-heights) zurückgegeben hat, oder das Minimum der [size](#size). Die Zeile selbst zeigt die Auswahl neben dem, was diese rendert: ein Häkchen in einem [mehrfachen](#selecting-multiple-options) `Select` und eine Hervorhebung in einem einzelnen. Eine Option, die ihre eigene Anzeige zeichnet — ein `Radio` oder ein `Checkbox` von `selected` — schaltet diese mit `selectionStyle="none"` aus; ohne eine eigene wird die Auswahl unsichtbar. Ein solches Steuerelement ist Dekoration — die Zeile wählt die Option aus, und ein interaktives Element ist darin nicht erlaubt: umschließen Sie das Steuerelement mit `inert` (`inert=""` vor React 19) und halten Sie den Text der Option außerhalb davon.

`renderOptionGroup` ist dasselbe für die Überschrift einer Gruppe: die Gruppe und `{isItemActive, itemHeight}`.

GRAVITY_TRANSLATION_BLOCK_23_END

GRAVITY_TRANSLATION_BLOCK_24_END

### Rendern ausgewählter benutzerdefinierter Optionen

Um die Auswahl im Steuerelement zu rendern, verwenden Sie die Eigenschaft `renderSelectedOptions`. Sie wird mit allen ausgewählten Optionen in der Reihenfolge von `value` aufgerufen — ein Array mit einem Element in einem einzelnen Select — und nur, wenn ein Wert vorhanden ist. Ein Wert ohne Option wird als `{value}` übergeben, ohne `content`. Geben Sie den zurückgegebenen Elementen Schlüssel, wenn sie Zustand enthalten. Das Label, der Platzhalter, der Zähler und die Schaltfläche zum Löschen bleiben beim `Select`. Ohne die Eigenschaft zeigt das Steuerelement die Texte der Optionen, verbunden mit `, `.

GRAVITY_TRANSLATION_BLOCK_25_END

GRAVITY_TRANSLATION_BLOCK_26_END

### Rendering options with different heights

Eine Zeile ist so hoch wie ihr Inhalt und nicht kürzer als das Minimum ihres `size` (24, 28, 36 und 44 Pixel, wie die Steuerelemente der gleichen Größe; auf Mobilgeräten nimmt jede Zeile die 44 von `xl` ein) – es sei denn, Sie legen die Höhe selbst fest. Wenn Sie Optionen mit unterschiedlichen Höhen rendern müssen, können Sie die `option.data`-Eigenschaft verwenden. Sie speichert Informationen darüber, welche Höhe Sie für die Optionen festlegen müssen, sowie die `getOptionHeight`-Eigenschaft, um diesen Wert festzulegen: Die von ihr zurückgegebene Zahl wird zur Höhe der Zeile und zur Schätzung, mit der der [Virtualizer](#virtualized-list) die Zeilen positioniert.

GRAVITY_TRANSLATION_BLOCK_27_END

GRAVITY_TRANSLATION_BLOCK_28_END

### Rendering custom counter

Um einen benutzerdefinierten Zähler zu rendern, verwenden Sie die `renderCounter`-Eigenschaft. Der Zähler wird nur angezeigt, wenn die Mehrfachauswahl aktiviert ist (`multiple={true}`) und `hasCounter={true}`.

GRAVITY_TRANSLATION_BLOCK_29_END

GRAVITY_TRANSLATION_BLOCK_30_END

### Rendering options list

Die `renderPopup`-Eigenschaft ermöglicht es Ihnen, den Inhalt der Optionsliste zu steuern: Ändern Sie die Reihenfolge der Standardelemente (Filter, Liste), blenden Sie sie aus oder fügen Sie benutzerdefinierte Elemente dazwischen, davor oder danach ein.

GRAVITY_TRANSLATION_BLOCK_31_END

GRAVITY_TRANSLATION_BLOCK_32_END

### Error

Dieser `Select`-Status ist für falsche Benutzereingaben. Um das Erscheinungsbild von `Select` zu ändern, verwenden Sie die `validationState`-Eigenschaft mit dem Wert `"invalid"`. Optional können Sie eine Fehlermeldung über die `errorMessage`-Eigenschaft angeben. Standardmäßig wird der Nachrichtentext außerhalb der Komponente gerendert.
Sie können dies mit der `errorPlacement`-Eigenschaft ändern.

GRAVITY_TRANSLATION_BLOCK_33_END

## Properties

| Name                                                         | Beschreibung                                                                                                                     | Typ                                      | Standardwert                                             |
| :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------- |
| className                                                    | Steuert die `className`                                                                                                          | `string`                                 |                                                          |
| defaultValue                                                 | Standardwerte, die ausgewählte Optionen darstellen, falls ein unkontrollierter Zustand verwendet wird                           | `V[]`                                    |                                                          |
| disabled                                                     | Zeigt an, dass der Benutzer nicht mit der Steuerung interagieren kann                                                            | `boolean`                                | `false`                                                  |
| [filterable](#filtering-options)                             | Zeigt an, dass das Auswahl-Popup einen Filterbereich hat                                                                         | `boolean`                                | `false`                                                  |
| filterOption                                                 | Wird verwendet, um Optionen für den Filter zu vergleichen                                                                        | `function`                               |                                                          |
| filterPlaceholder                                            | Standardtext für den Platzhalter des Filter-Eingabefelds                                                                         | `string`                                 |                                                          |
| [getOptionText](#the-text-of-an-option)                      | Der Text einer Option: der Trigger, der Filter und die Suche nach den ersten Buchstaben verwenden ihn                               | `function`                               | Zeichenketteninhalt, andernfalls der Wert                |
| [getValueKey](#non-string-values)                            | Der Zeichenketten-Schlüssel eines Wertes: die ID seiner Zeile, das Formularfeld, die Gleichheit von Werten                       | `(value: V) => string`                   | die Zeichenkette selbst, `String()` für andere primitive |
| [getOptionHeight](#rendering-options-with-different-heights) | Wird verwendet, um die Höhe von benutzerdefinierten Optionen festzulegen                                                         | `function`                               |                                                          |
| getOptionGroupHeight                                         | Wird verwendet, um die Höhe von benutzerdefinierten Optionsgruppen festzulegen                                                   | `function`                               |                                                          |
| hasClear                                                     | Ermöglicht die Anzeige eines Symbols zum Löschen ausgewählter Optionen                                                           | `boolean`                                | `false`                                                  |
| id                                                           | `id` HTML-Attribut                                                                                                               | `string`                                 |                                                          |
| label                                                        | Beschriftung der Steuerung; auf Mobilgeräten auch der Titel des Blattes                                                          | `string`                                 |                                                          |
| loading                                                      | Fügt das Ladeelement am Ende der Optionsliste hinzu. Funktioniert wie eine permanente Ladeanzeige, während die Optionsliste leer ist. | `boolean`                                |                                                          |
| [multiple](#selecting-multiple-options)                      | Zeigt an, ob mehrere Optionen in der Liste ausgewählt werden können                                                               | `boolean`                                | `false`                                                  |
| name                                                         | Name der Steuerung                                                                                                               | `string`                                 |                                                          |
| onBlur                                                       | Handler, der aufgerufen wird, wenn das Element den Fokus verliert.                                                               | `function`                               |                                                          |
| filter                                                       | Gesteuerter Filterwert                                                                                                           | `string`                                 | `''`                                                     |
| onFilterChange                                               | Wird jedes Mal nach Änderung des Filters ausgelöst                                                                              | `function`                               |                                                          |
| onFocus                                                      | Handler, der aufgerufen wird, wenn das Element den Fokus erhält                                                                  | `function`                               |                                                          |
| onLoadMore                                                   | Wird ausgelöst, wenn die Ladeanzeige sichtbar wird                                                                              | `function`                               |                                                          |
| onOpenChange                                                 | Wird jedes Mal nach Änderung der Popup-Sichtbarkeit ausgelöst                                                                    | `function`                               |                                                          |
| onUpdate                                                     | Wird ausgelöst, wenn eine Änderung des `Select`-Wertes vom Benutzer bestätigt wird                                               | `function`                               |                                                          |
| [options](#options)                                          | Zu wählende Optionen                                                                                                             | `SelectOptions`                          |                                                          |
| pin                                                          | Steuerung der Randansicht                                                                                                        | `string`                                 | `'round-round'`                                          |
| placeholder                                                  | Platzhaltertext                                                                                                                  | `string`                                 |                                                          |
| popupClassName                                               | `className` des Popups mit der Optionsliste                                                                                      | `string`                                 |                                                          |
| popupPlacement                                               | Popup-Platzierung                                                                                                                | `PopupPlacement` `Array<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                   | Popup-Breite                                                                                                                     | `number \| 'fit'`                        |                                                          |
| sheetClassName                                               | `className` des Blattes                                                                                                          | `string`                                 |                                                          |
| qa                                                           | Test-ID-Attribut (`data-qa`)                                                                                                     | `string`                                 |                                                          |
| [renderControl](#rendering-custom-control)                   | Wird verwendet, um die Benutzersteuerung zu rendern                                                                              | `function`                               |                                                          |
| [renderCounter](#rendering-custom-counter)                   | Wird verwendet, um den Benutzercounter zu rendern. Funktioniert nur mit [hasCounter](#counter).                                  | `function`                               |                                                          |
| renderEmptyOptions                                           | Wird verwendet, um einen Knoten für eine leere Optionsliste zu rendern                                                            | `function`                               |                                                          |
| [renderFilter](#rendering-custom-filter-section)             | Wird verwendet, um den Benutzerfilterbereich zu rendern                                                                          | `function`                               |                                                          |
| [renderOption](#rendering-custom-options)                    | Wird verwendet, um Benutzereoptionen zu rendern                                                                                  | `function`                               |                                                          |
| renderOptionGroup                                            | Wird verwendet, um Benutzereoptionsgruppen zu rendern                                                                            | `function`                               |                                                          |
| [renderSelectedOptions](#rendering-custom-selected-options)  | Wird verwendet, um die Auswahl in der Steuerung zu rendern                                                                       | `function`                               |                                                          |
| [renderPopup](#rendering-options-list)                       | Wird verwendet, um den Inhalt der Optionsliste zu rendern                                                                        | `function`                               |                                                          |
| [selectionStyle](#rendering-custom-options)                  | Wie eine Zeile anzeigt, dass ihre Option ausgewählt ist: das Häkchen oder die Hervorhebung (`auto`) oder nichts (`none`)        | `'auto' \| 'none'`                       | `'auto'`                                                 |
| [size](#size)                                                | Steuerung / Optionsgröße                                                                                                         | `string`                                 | `'m'`                                                    |
| value                                                        | Werte, die ausgewählte Optionen darstellen                                                                                      | `V[]`                                    |                                                          |
| view                                                         | Steuerung der Ansicht                                                                                                            | `string`                                 | `'normal'`                                               |
| [width](#control-width)                                      | Steuerung der Breite                                                                                                             | `string \| number`                       | `undefined`                                              |
| errorMessage                                                 | Fehlermeldung                                                                                                                    | `string`                                 |                                                          |
| errorPlacement                                               | Fehlerposition                                                                                                                   | `outside` `inside`                       | `outside`                                                |
| validationState                                              | Validierungsstatus                                                                                                               | `"invalid"`                              |                                                          |
| [hasCounter](#counter)                                       | Zeigt die Anzahl der ausgewählten Optionen an. Der Zähler erscheint nur, wenn die [multiple](#selecting-multiple-options)-Auswahl aktiviert ist. | `boolean`                                |                                                          |

## CSS API

Die Klassennamen des Markup sind kein öffentlicher Vertrag – die Zeilen des Popups werden von der
Liste und ihrer Zeilenansicht gerendert, und ihr Markup ändert sich mit dem Kit. Was unterstützt wird:

- die untenstehenden Variablen;
- das Aussehen einer Zeile, über die `--g-list-item-view-*` Variablen der
  [Zeilenansicht](../ListItemView/README.md#css-api): ihre Farben, ihre Höhe, ihr Padding und ihr Radius,
  die ansonsten der [Größe](#size) des `Select` folgen. Setzen Sie sie auf `popupClassName` oder
  `sheetClassName` – zum Beispiel `--g-list-item-view-min-height: 48px` für höhere Zeilen auf Mobilgeräten.
  Die Schätzung des [Virtualizers](#virtualized-list) und die `itemHeight` von `renderOption` stammen immer noch
  von der Größe: wenn die genaue Anzahl wichtig ist, verwenden Sie `getOptionHeight`;
- der Inhalt einer Zeile, über `renderOption`, `renderOptionGroup` und `renderSelectedOptions`.

| Name                             | Beschreibung                                   |
| :------------------------------- | :-------------------------------------------- |
| `--g-select-focus-outline-color` | Umrissfarbe bei Fokus (standardmäßig fehlt) |