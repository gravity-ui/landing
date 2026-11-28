Buttons dienen als Auslöser für bestimmte Aktionen. Obwohl dies ihr Hauptzweck ist, können sie in sehr seltenen Fällen als Links zur Navigation zu anderen Seiten verwendet werden.

```tsx
import {Button} from '@gravity-ui/uikit';
```

## Erscheinungsbild

Es gibt vier `Button`-Typen in Bezug auf das Erscheinungsbild: basic, outlined, flat und contrast.
Das Erscheinungsbild des `Button` wird durch die `view`-Eigenschaft bestimmt.

### Basic

`action`: Der markanteste Typ von `Button`. Er wird für die primäre Aktion auf einem Bildschirm verwendet, die die meiste Aufmerksamkeit erfordert.
Wir empfehlen, nur einen solchen Button pro Seite zu verwenden.

`normal`: Standardtyp von `Button`, der für sekundäre Aktionen oder zur Aufrechterhaltung der Wichtigkeit einer Aktion konzipiert ist, ohne zu viel Aufmerksamkeit darauf zu lenken.

`raised`: Wird über dem Inhalt als schwebendes Element platziert, normalerweise mit einer festen Position.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Outlined

`outlined`: Wird für sekundäre Aktionen verwendet, die weniger Aufmerksamkeit erfordern. Er kann mit oder ohne Hauptbutton verwendet werden; im ersteren Fall muss es sich um einen hervorgehobenen Button handeln.

`outlined-action`: Wird normalerweise als Link zu einer anderen Seite oder einer externen Ressource verwendet.

Dieser Typ hat auch semantische Variationen, die verwendet werden können, wenn zusätzliche Semantik benötigt wird: `outlined-info`, `outlined-success`, `outlined-warning` und `outlined-danger`.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Flat

`flat`: Wird für Hilfsaktionen verwendet, die am wenigsten Aufmerksamkeit erfordern. Er wird oft in einer Liste von Buttons oder Aktionssymbolen (ohne Text) in einem Editor verwendet.

`flat-secondary`: Weniger hervorgehoben als der `flat`-Button. Er wird oft als sekundärer Button in Dialogen und modalen Fenstern verwendet.

`flat-action`: Wird normalerweise als Link zu einer anderen Seite oder einer externen Ressource verwendet.

Er hat auch semantische Variationen, die verwendet werden können, wenn zusätzliche Semantik benötigt wird: `outlined-info`, `outlined-success`, `outlined-warning` und `outlined-danger`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Contrast

`contrast` ist im hellen Thema dunkel und im dunklen Thema hell. `contrast-inverted` kehrt diese Farben um. `contrast-light` bleibt hell und `contrast-dark` bleibt dunkel in beiden Themen.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Icons

Um einem `Button` ein Icon hinzuzufügen, verwenden Sie die Komponente [`Icon`](../Icon), die ein spezieller Wrapper für SVGs ist. Die Icon-Größe wird automatisch entsprechend der `Button`-Größe ausgewählt. Setzen Sie explizit die `Icon`-`size`, `width` oder `height`, um sie zu überschreiben.

Um ein benutzerdefiniertes Icon entsprechend der `Button`-Größe zu skalieren, verwenden Sie die `Button.Icon`-Renderfunktion:

```tsx
<Button size="l">
  <Button.Icon>{({size}) => <CustomIcon size={size} />}</Button.Icon>
  Action
</Button>
```

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Zustände

Ein `Button` kann verschiedene Zustände haben:

`disabled`: Wenn der Button aus irgendeinem Grund nicht verfügbar ist.

`loading`: Wenn im Hintergrund asynchrone Prozesse laufen.

`selected`: Wenn der Benutzer den Button **aktivieren** und **deaktivieren** kann.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Menü-Trigger

Der `Button` ändert automatisch sein Erscheinungsbild, wenn entsprechende Aria-Attribute (`aria-haspopup`, `aria-expanded`) übergeben werden:

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Größe

Verwenden Sie die `size`-Eigenschaft, um die `Button`-Größe zu verwalten. Die Standardgröße ist `m`.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## Breite

Verwenden Sie die `width`-Eigenschaft, um das Verhalten des `Button` innerhalb des Containers zu steuern:

`auto`: Begrenzt die maximale Breite des `Button`, indem überlaufender Inhalt mit einer Ellipse ausgeblendet wird.

`max`: Passt die Breite des `Button` an die Breite des übergeordneten Containers an und blendet ebenfalls überlaufenden Inhalt mit einer Ellipse aus.

GRAVITY_TRANSLATION_BLOCK_16_END

## Pin

Die `pin`-Eigenschaft ermöglicht die Steuerung der Form der _Start_- und _End_-Kanten und wird normalerweise verwendet, um mehrere Buttons zu einer einzigen Einheit zu kombinieren.
Der Wert der `pin`-Eigenschaft besteht aus den Namen der _Start_- und _End_-Stile, getrennt durch einen Bindestrich, z. B. `round-brick`.
Die Kantenstile sind: `round` (Standard), `circle`, `brick` und `clear`.

GRAVITY_TRANSLATION_BLOCK_17_END

GRAVITY_TRANSLATION_BLOCK_18_END

## Eigenschaften

`Button` akzeptiert alle gültigen `button`- oder `a`-Element-Props zusätzlich zu diesen:

| Name      | Beschreibung                                                              |              Typ               |     Standard     |
| :-------- | :------------------------------------------------------------------------ | :----------------------------: | :--------------: |
| children  | `Button`-Inhalt. Sie können sowohl Text als auch die `<Icon/>`-Komponente verwenden. |        `React.ReactNode`        |                  |
| component | Überschreibt die Root-Komponente                                          |       `React.ElementType`       |                  |
| disabled  | Schaltet den `disabled`-Zustand um                                        |            `boolean`            |     `false`     |
| href      | Übergeben Sie dies, um die Root-Komponente zu einem Link zu machen        |            `string`             |                  |
| loading   | Schaltet den `loading`-Zustand um                                         |            `boolean`            |     `false`     |
| pin       | Legt den `Button`-Kantenstil fest                                         |            `string`             | `"round-round"` |
| qa        | `data-qa`-HTML-Attribut, das zum Testen verwendet wird                    |            `string`             |                  |
| selected  | Schaltet den `selected`-Zustand um                                        |            `boolean`            |                  |
| size      | Legt die `Button`-Größe fest                                              | `"xs"` `"s"` `"m"` `"l"` `"xl"` |      `"m"`      |
| view      | Legt das Erscheinungsbild des `Button` fest                               |          `ButtonView`           |   `"normal"`    |
| width     | Steuert, wie der `Button` den Platz des Elternteils nutzt                 |        `"auto"` `"max"`         |                  |

## CSS API

| Name                                | Beschreibung               |
| :---------------------------------- | :------------------------- |
| `--g-button-text-color`             | Textfarbe                 |
| `--g-button-text-color-hover`       | Textfarbe beim Hover      |
| `--g-button-background-color`       | Hintergrundfarbe          |
| `--g-button-background-color-hover` | Hintergrundfarbe beim Hover |
| `--g-button-border-width`           | Randbreite                |
| `--g-button-border-color`           | Randfarbe                 |
| `--g-button-border-style`           | Randstil                  |
| `--g-button-focus-outline-width`    | Fokus-Umrissbreite        |
| `--g-button-focus-outline-color`    | Fokus-Umrissfarbe         |
| `--g-button-focus-outline-style`    | Fokus-Umrissstil          |
| `--g-button-focus-outline-offset`   | Fokus-Umrissabstand       |
| `--g-button-height`                 | Höhe (Zeilenhöhe)         |
| `--g-button-padding`                | Seitenabstände            |
| `--g-button-border-radius`          | Randradius                |
| `--g-button-font-size`              | Text-Schriftgröße         |
| `--g-button-icon-space`             | Verfügbarer Platz für Icons |
| `--g-button-icon-offset`            | Icon-Abstand              |