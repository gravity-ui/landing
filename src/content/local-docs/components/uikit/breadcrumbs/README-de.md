`Breadcrumbs` ist ein Navigationselement, das den aktuellen Speicherort einer Seite in der Hierarchie einer Website anzeigt. Es bietet Links, die es Benutzern ermöglichen, zu höheren Ebenen in der Hierarchie zurückzukehren, was die Navigation durch eine Website mit mehreren Ebenen erleichtert. Breadcrumbs sind besonders nützlich für große Websites und Anwendungen mit einer hierarchischen Seitenstruktur.

```tsx
import {Breadcrumbs} from '@gravity-ui/uikit';
```

Migration von älteren `Breadcrumbs`? Sehen Sie sich die [Migrationsanleitung](https://github.com/gravity-ui/uikit/blob/main/docs/migration-from-legacy-breadcrumbs.md) an.

## Beispiel

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Ereignisse

Verwenden Sie die Eigenschaft `onAction` als Callback, um Klickereignisse auf Elementen zu behandeln.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Links

In `Breadcrumbs` löst das Klicken auf ein Element normalerweise `onAction` aus. Sie können sie jedoch auch als Links zu anderen Seiten oder Websites verwenden. Fügen Sie dazu die Eigenschaft `href` zur Komponente `<Breadcrumbs.Item>` hinzu:

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Root-Kontext

Um Benutzern das Verständnis der Gesamtstruktur zu erleichtern, zeigen einige Anwendungen immer den Startpunkt (Root-Element) der Breadcrumbs an, auch wenn andere Elemente aufgrund von Platzbeschränkungen ausgeblendet sind.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Trennzeichen

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

### Breadcrumbs mit Icons

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### Integration mit Routern

GRAVITY_TRANSLATION_BLOCK_13_END

### Landmarks

Wenn Breadcrumbs als Hauptelement für die Navigation einer Seite verwendet werden, können sie in einem [Navigation Landmark](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html) platziert werden. Landmarks helfen Benutzern von assistiven Technologien, wichtige Abschnitte einer Seite schnell zu finden. Um ein Navigation Landmark zu erstellen, platzieren Sie Breadcrumbs innerhalb eines `<nav>`-Elements mit einem `aria-label`:

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

### Deaktivierte Elemente

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Endinhalt

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

## Eigenschaften

| Name             | Beschreibung                                                                  | Typ                 | Standardwert |
| :--------------- | :--------------------------------------------------------------------------- | :------------------ | :----------- |
| children         | Breadcrumb-Elemente                                                          | `React.ReactNode`   |              |
| disabled         | Bestimmt, ob `Breadcrumbs` deaktiviert sind.                                  | `boolean`           |              |
| showRoot         | Aktiviert oder deaktiviert die immerwährende Anzeige des Root-Elements, wenn die Elemente eingeklappt sind. | `boolean`           |              |
| maxItems         | Maximale Anzahl sichtbarer Elemente, einschließlich des Einklapp-Steuerelements. | `number`            |              |
| itemComponent    | Komponente, die zum Rendern von Elementen verwendet wird.                     | `React.ElementType` |              |
| popupPlacement   | Stil des Popup-Fensters für eingeklappte Elemente.                            | `PopupPlacement`    |              |
| popupStyle       | Stil des Popup-Fensters für eingeklappte Elemente.                            | `"staircase"`       |              |
| qa               | `data-qa` HTML-Attribut, das für Tests verwendet wird.                        | `string`            |              |
| separator        | Benutzerdefinierter Trennerknoten.                                           | `React.ReactNode`   | "/"          |
| onAction         | Handler, der mit dem Schlüssel des angeklickten Elements aufgerufen wird.     | `(key: Key) => void`|              |
| id               | Eindeutige ID des Elements.                                                  | `string`            |              |
| className        | CSS-Klassenname für das Element.                                             | `string`            |              |
| style            | Legt den Inline-Stil für das Element fest.                                   | `CSSProperties`     |              |
| aria-label       | Definiert einen Zeichenkettenwert, der das aktuelle Element beschriftet.     | `string`            |              |
| aria-labelledby  | Identifiziert die Elemente, die das aktuelle Element beschriften.             | `string`            |              |
| aria-describedby | Identifiziert die Elemente, die das Objekt beschreiben.                      | `string`            |              |
| endContent       | Benutzerknoten, der nach dem letzten Breadcrumb-Element gerendert wird.      | `React.ReactNode`   |              |

### BreadcrumbsItemProps

| Name       | Beschreibung                                                              | Typ                               | Standard |
| :--------- | :------------------------------------------------------------------------ | :-------------------------------- | :------- |
| children   | Inhalt der Breadcrumbs.                                                   | `React.ReactNode`                 |          |
| title      | String-Repräsentation des Inhalts des Elements.                           | `string`                          |          |
| aria-label | Barrierefreiheits-Label für das Element.                                  | `string`                          |          |
| href       | URL, die für den Hyperlink verwendet werden soll.                         | `string`                          |          |
| onClick    | Klick-Handler für das Element.                                            | `React.MouseEventHandler`         |          |
| target     | Zielfenster für den Link.                                                 | `React.HTMLAttributeAnchorTarget` |          |
| rel        | Beziehung zwischen der verknüpften Ressource und der aktuellen Seite.     | `string`                          |          |
| disabled   | Ob das BreadcrumbsItem deaktiviert ist.                                   | `boolean`                         |          |