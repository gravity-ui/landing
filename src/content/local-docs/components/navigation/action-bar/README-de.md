GRAVITY_TRANSLATION_BLOCK_0_END

Die Komponente ist eine flexible horizontale Leiste, die ein standardisiertes Layout für die Anordnung von Navigationselementen, Aktionen und informativen Inhalten innerhalb einer Anwendung bietet. Sie dient als Container zur Organisation von UI-Elementen wie Breadcrumbs, Schaltflächen und Dropdown-Menüs in definierten Abschnitten und Gruppen.

GRAVITY_TRANSLATION_BLOCK_1_END

Der `ActionBar` bietet mehrere verschachtelte Komponenten, die zusammenarbeiten, um ein strukturiertes Layout zu erstellen: `ActionBar.Section`, `ActionBar.Group`, `ActionBar.Item`, `ActionBar.Separator`.

## Eigenschaften

| Name       | Beschreibung                               |         Typ          | Standard |
| :--------- | :----------------------------------------- | :------------------: | :------: |
| aria-label | HTML `aria-label`-Attribut                 |       `string`       |          |
| className  | HTML `class`-Attribut                      |       `string`       |          |
| style      | HTML `style`-Attribut                      | `React.CSSProperties` |          |
| qa         | `data-qa` HTML-Attribut, für Tests verwendet |       `string`       |          |

## ActionBar.Section

Dekorative Komponente zur visuellen Trennung verschiedener Arten von Navigation.
Es werden zwei Arten von Abschnitten präsentiert: `primary` und `secondary`. Wir empfehlen, dass eine App mindestens einen `primary`-Abschnitt hat.
`secondary` kann für app-spezifische Steuerelemente verwendet werden, die mit kleineren Abständen und einer horizontalen Trennlinie vom `primary`-Abschnitt hervorgehoben werden sollten.

### Eigenschaften

| Name      | Beschreibung                                      |            Typ            |   Standard   |
| :-------- | :------------------------------------------------ | :-----------------------: | :----------: |
| type      | Der Typ gibt das visuelle Styling des Abschnitts an | `"primary"`, `"secondary"` | `"primary"` |
| className | HTML `class`-Attribut                             |          `string`          |              |
| style     | HTML `style`-Attribut                             |   `React.CSSProperties`    |              |
| qa        | `data-qa` HTML-Attribut, für Tests verwendet      |          `string`          |              |

GRAVITY_TRANSLATION_BLOCK_2_END

## ActionBar.Group

Gruppen organisieren `ActionBar.Item` innerhalb eines Abschnitts und steuern deren Ausrichtung.

### Eigenschaften

| Name             | Beschreibung                                                       |                                      Typ                                       | Standard |
| :--------------- | :----------------------------------------------------------------- | :-----------------------------------------------------------------------------: | :------: |
| pull             | Steuert die Ausrichtung der Gruppe                                 | `"left"`, `"left-grow"`, `"right"`, `"right-grow"`, `"center"`, `"center-grow"` |          |
| stretchContainer | Setzt `flex-grow: 1` für Group. Muss UIKit@7 Breadcrumbs unterstützen |                                    `boolean`                                    |          |
| className        | HTML `class`-Attribut                                              |                                    `string`                                     |          |
| style            | HTML `style`-Attribut                                              |                              `React.CSSProperties`                              |          |
| qa               | `data-qa` HTML-Attribut, für Tests verwendet                       |                                    `string`                                     |          |

## ActionBar.Item

Container für UI-Elemente wie Schaltflächen, Breadcrumbs oder andere Komponenten, die sich in `ActionBar.Group` befinden müssen. Die Komponente fügt Abstände zwischen den Elementen hinzu.

### Eigenschaften

| Name      | Beschreibung                         |         Typ          | Standard |
| :-------- | :----------------------------------- | :------------------: | :------: |
| spacing   | Aktiviert Abstände zum vorherigen Element |       `boolean`       | `true`   |
| className | HTML `class`-Attribut                |       `string`       |          |
| style     | HTML `style`-Attribut                | `React.CSSProperties` |          |
| qa        | `data-qa` HTML-Attribut, für Tests verwendet |       `string`       |          |

## ActionBar.Separator

Visuelle Trennlinie, die zwischen Elementen einer Gruppe platziert werden kann, um sie visuell zu trennen.

GRAVITY_TRANSLATION_BLOCK_3_END