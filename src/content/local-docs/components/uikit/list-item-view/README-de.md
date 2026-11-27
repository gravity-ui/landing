GRAVITY_TRANSLATION_BLOCK_0_END

`ListItemView` ist die Ansicht einer Listenzeile: Sie ordnet den Inhalt einer Zeile – das Symbol, die
Beschreibung, den nachgestellten Inhalt – an und zeichnet die Zustände, die ihr Besitzer übergibt.

```tsx
import {ListItemView} from '@gravity-ui/uikit';
```

Die [List](../List/README.md) zeichnet ihre Zeilen mit dieser Ansicht und stellt sie als `List.ItemView`
mit den Props des Layouts bereit. Greifen Sie auf `ListItemView` selbst zurück, um eine Zeile außerhalb
einer Liste zu erstellen – eine Zeile eines eigenen Menüs, ein Element eines Baums – oder wenn eine Zeile
die Verschachtelungs- und Kollapsprops benötigt, die eine Liste nicht übergibt.

- [Grundlegende Verwendung](#basic-usage)
- [Größen](#sizes)
- [Slots](#slots)
- [Zustände](#states)
- [Auswahl](#selection)
- [Verschachtelung und Kollabieren](#nesting-and-collapsing)
- [Drag-Handle](#drag-handle)
- [Anderes Element](#another-element)
- [CSS API](#css-api)
- [Eigenschaften](#properties)

## Grundlegende Verwendung

Die Ansicht ist ein Blockelement, das so breit ist wie sein Container: Die Breite einer Zeile ist die
Breite der Liste um sie herum.

```tsx
import {Envelope} from '@gravity-ui/icons';
import {Icon, ListItemView} from '@gravity-ui/uikit';

function Mailbox() {
  return (
    <ListItemView startContent={<Icon data={Envelope} size={16} />} onClick={openMailbox}>
      Posteingang
    </ListItemView>
  );
}
```

<ListItemViewExample />

Die Ansicht hat keine eigene ARIA-Rolle: Eine Zeile erhält ihre Rolle von der Liste, zu der sie gehört
(`option` in einer Listbox, `row` in einem Grid), und `role` zusammen mit den restlichen DOM-Props
erreicht das Wurzelelement, wie es übergeben wird. Innerhalb einer `<List>` kommen die Props bereit von
`getItemProps()`.

## Größen

Der `size`-Prop setzt die Dichte einer Zeile – `s`, `m`, `l` oder `xl`. Er steuert die minimale Höhe,
die Abstände, den Eckradius und die Größe der Steuerelemente der Zeile; `xl` schaltet auch den Text auf
`body-2` um. Die Höhen sind die der Steuerelemente – 24, 28, 36 und 44px – und wie bei den
Steuerelementen ergeben sich die Blockabstände aus der Höhe: Eine einzelne Zeile füllt die Zeile genau
aus, jede nächste Zeile fügt ihre Zeilenhöhe hinzu. Die Inline-Abstände wachsen mit der Größe – 8, 12, 16
und 16px. Eine Zeile ohne `size` hat die Höhe, die Abstände und den Radius von `m` mit den
Steuerelementen der Basisansicht; innerhalb einer `<List>` erhält jede Zeile die Größe der Liste.

<ListItemViewSizes />

## Slots

Der Inhalt einer Zeile sind ihre Kinder, und der Rest befindet sich in den Props: `startContent` für ein
führendes Symbol oder einen Avatar, `description` für die zweite Zeile, `endContent` für das, was die
Zeile abschließt – eine Beschriftung, eine Tastenkombination, eine Aktion.

<ListItemViewSlots />

```tsx
<ListItemView
  startContent={<Icon data={Star} size={16} />}
  description="Von Ihnen markiert"
  endContent={<Label>3</Label>}
>
  Markiert
</ListItemView>
```

## Zustände

Eine Zeile zeigt vier Zustände, und jeder davon ist ein Prop – die Ansicht behält keinen eigenen Zustand:

- `active` – der Cursor der Tastatur: Eine Liste bewegt ihn mit den Pfeiltasten;
- `hovered` – die Hover-Hervorhebung, erzwungen durch die Props. Ohne den Prop hebt sich die Zeile bei
  `:hover` selbst hervor; `hovered={false}` unterdrückt dies, was eine Liste tut, während ein Drag läuft;
- `disabled` – die Zeile ist gedimmt und reagiert nicht mehr auf den Zeiger, einschließlich ihres
  eigenen `onClick`;
- `selected` – siehe [Auswahl](#selection).

<ListItemViewStates />

## Auswahl

`selectionStyle` gibt an, wie eine ausgewählte Zeile angezeigt wird: `highlight` färbt die Zeile ein,
`check` behält einen Slot für ein Häkchen vor dem Inhalt, `none` zeigt die Auswahl durch nichts an – für
eine Zeile, die dies in ihrem eigenen Inhalt sagt. Der Prop hat keinen Standardwert: Eine `selected`-Zeile
ohne ihn sieht aus wie jede andere. Innerhalb einer `<List>` wählt die Liste den Stil selbst aus –
`check` für eine Mehrfachauswahl, `highlight` für eine einzelne.

<ListItemViewSelection />

Der Check-Slot wird für jede Zeile einer Liste beibehalten, egal ob ausgewählt oder nicht, damit der
Inhalt der Zeilen beim Ändern der Auswahl nicht springt.

## Verschachtelung und Kollabieren

`nestedLevel` rückt eine Zeile um die Tiefe eines Baums ein, und `collapsible` gibt einer Zeile den
Umschalter ihres Zweigs: `collapsed` ist ihr Zustand und `onCollapseChange` ihr Handler. Ein Klick auf
die Zeile selbst schaltet auch den Zweig um, es sei denn, die Zeile hat ein eigenes `onClick`.

Der Umschalter ist Dekoration: Er trägt `aria-hidden` und ist aus der Tabulatorreihenfolge heraus,
sodass die Zeile selbst der einzige Weg zum Zweig ist. Das `aria-expanded` der Zeile liegt in Ihrer
Verantwortung.

<ListItemViewNesting />

## Drag-Handle

`dragHandle` füllt den äußersten Slot einer Zeile, vor dem Einzug, dem Kollaps-Umschalter und dem
Häkchen, sodass der Griff einer neu anordenbaren Liste am Rand der Zeile bleibt, unabhängig davon, was
die Zeile sonst anzeigt. Die Ansicht weiß nichts über Drag and Drop: Die Props der Bibliothek liegen auf
dem Element, das Sie übergeben.

<ListItemViewDragHandle />

```tsx
<ListItemView
  dragHandle={
    <span {...dragHandleProps} aria-label="Zum Neuordnen ziehen">
      <Icon data={Grip} size={12} />
    </span>
  }
>
  {track.title}
</ListItemView>
```

## Anderes Element

`component` rendert die Zeile als ein anderes Element – einen Link, einen Button – und `componentProps`
sind die Props dieses Elements: `href`, `type`, die Handler. Mit `isContainer` rendert die Ansicht nichts
und überlässt Ihnen die Markup der Zeile, wobei die Zustände und das Element beibehalten werden.

<ListItemViewCustomElement />

## CSS API

| Name                                        | Beschreibung                          |
| :------------------------------------------ | :----------------------------------- |
| `--g-list-item-view-min-height`             | Die Mindesthöhe einer Zeile          |
| `--g-list-item-view-border-radius`          | Der Eckradius                    |
| `--g-list-item-view-padding-inline`         | Der Inline-Abstand                   |
| `--g-list-item-view-padding-block`          | Der Block-Abstand                    |
| `--g-list-item-view-line-height`            | Die Zeilenhöhe des Inhalts       |
| `--g-list-item-view-controls-gap`           | Der Abstand zwischen den Slots            |
| `--g-list-item-view-controls-size`          | Die Grösse der Steuerelemente einer Zeile    |
| `--g-list-item-view-controls-border-radius` | Der Eckradius der Steuerelemente    |
| `--g-list-item-view-controls-icon-size`     | Die Grösse der Icons des Steuerelements |
| `--g-list-item-view-spacer-size`            | Der Einzug einer Verschachtelungsebene      |
| `--g-list-item-view-background-color`       | Der Hintergrund einer Zeile              |
| `--g-list-item-view-background-color-hover` | Der Hintergrund einer gehoverten Zeile      |
| `--g-list-item-view-text-color`             | Die Farbe des Inhalts            |
| `--g-list-item-view-description-color`      | Die Farbe der Beschreibung        |

Die Variablen gelten für eine Zeile jeder Grösse: `size` liefert nur die Standardgeometrie — die Mindesthöhe, den Radius, die Abstände und die Steuerelemente — für eine Variable, die nicht gesetzt ist. Der Standard-Block-Abstand folgt der Mindesthöhe und der Zeilenhöhe; `--g-list-item-view-padding-block` setzt ihn fest. Der Abschnittskopf einer Liste (`List.SectionHeader`) folgt der gleichen Mindesthöhe und dem gleichen Inline-Abstand, einschliesslich der Variablen, sodass die Zeilen und die Köpfe einer Liste eine Kante beibehalten.

## Eigenschaften

| Name             | Beschreibung                                                                                 |                  Typ                  | Standard |
| :--------------- | :------------------------------------------------------------------------------------------- | :-----------------------------------: | :------: |
| children         | Der Inhalt der Zeile                                                                         |           `React.ReactNode`           |          |
| size             | Die Dichte der Zeile                                                                         |        `'s'` `'m'` `'l'` `'xl'`        |          |
| startContent     | Der führende Inhalt: ein Icon, ein Avatar                                                   |           `React.ReactNode`           |          |
| description      | Die zweite Zeile der Zeile                                                                   |           `React.ReactNode`           |          |
| endContent       | Der nachfolgende Inhalt: ein Label, eine Verknüpfung, eine Aktion                            |           `React.ReactNode`           |          |
| dragHandle       | Der Inhalt des äußersten Slots: der Drag-Handle einer neu anordenbaren Zeile                |           `React.ReactNode`           |          |
| active           | Der Cursor der Tastatur auf der Zeile                                                        |               `boolean`               |          |
| hovered          | Das Hover-Highlight, erzwungen durch die Props (`false` unterdrückt das `:hover` der Zeile) |               `boolean`               |          |
| disabled         | Ob die Zeile deaktiviert ist                                                                 |               `boolean`               |          |
| selected         | Ob die Zeile ausgewählt ist                                                                  |               `boolean`               |          |
| selectionStyle   | Wie eine ausgewählte Zeile angezeigt wird                                                    |    `'highlight'` `'check'` `'none'`    |          |
| collapsible      | Ob die Zeile den Umschalter ihres Zweigs hat                                                 |               `boolean`               |          |
| collapsed        | Ob der Zweig der Zeile eingeklappt ist                                                       |               `boolean`               |          |
| onCollapseChange | Der Handler des Umschalters (ein Klick auf die Zeile ohne `onClick` klappt den Zweig ebenfalls ein) |     `(collapsed: boolean) => void`     |          |
| nestedLevel      | Die Tiefe der Zeile in einem Baum: der Einzug davor                                          |                `number`               |   `0`    |
| onClick          | Der Handler eines Klicks auf die Zeile (ein Klick auf einen fokussierbaren Nachfahren ist keiner) | `React.MouseEventHandler<HTMLElement>` |          |
| component        | Das Element, als das die Zeile gerendert wird                                                |          `React.ElementType`          | `'div'`  |
| componentProps   | Die Props dieses Elements                                                                    |   `React.ComponentProps<component>`   |          |
| isContainer      | Rendert die Kinder so, wie sie sind, ohne das Layout der Slots                               |               `boolean`               | `false`  |
| className        | Die CSS-Klasse der Zeile                                                                     |                `string`               |          |
| style            | Der Inline-Stil der Zeile                                                                    |         `React.CSSProperties`         |          |

Die restlichen Props erreichen das Root-Element der Zeile: `role`, `id`, `tabIndex`, `aria-*`, `data-*`, die Handler des Zeigers und der Tastatur.