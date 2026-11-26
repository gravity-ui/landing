`Breadcrumbs` ist ein Navigationselement, das den aktuellen Speicherort einer Seite in der Hierarchie einer Website anzeigt. Es bietet Links, die es Benutzern ermöglichen, zu höheren Ebenen in der Hierarchie zurückzukehren, was die Navigation durch eine Website mit mehreren Ebenen erleichtert. Breadcrumbs sind besonders nützlich für große Websites und Anwendungen mit einer hierarchischen Seitenstruktur.

```tsx
import {Breadcrumbs} from '@gravity-ui/uikit';
```

## Beispiel

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Ereignisse

Verwenden Sie die `onAction`-Eigenschaft als Callback, um Klickereignisse auf Elementen zu behandeln.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Links

In `Breadcrumbs` löst das Klicken auf ein Element normalerweise `onAction` aus. Sie können sie jedoch auch als Links zu anderen Seiten oder Websites verwenden. Fügen Sie dazu die `href`-Eigenschaft zur `<Breadcrumbs.Item>`-Komponente hinzu:

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Root-Kontext

Um Benutzern das Verständnis der Gesamtstruktur zu erleichtern, zeigen einige Anwendungen immer den Startpunkt (Root-Element) der Breadcrumbs an, auch wenn andere Elemente aufgrund von Platzbeschränkungen ausgeblendet sind.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Trennzeichen

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### Breadcrumbs mit Icons

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Integration mit Routern

GRAVITY_TRANSLATION_BLOCK_12_END

### Landmarks

Wenn Breadcrumbs als Hauptelement für die Navigation einer Seite verwendet werden, können sie in einem [Navigation Landmark](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html) platziert werden. Landmarks helfen Benutzern von assistiven Technologien, wichtige Abschnitte einer Seite schnell zu finden. Um ein Navigation Landmark zu erstellen, platzieren Sie Breadcrumbs innerhalb eines `<nav>`-Elements mit einem `aria-label`:

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

### Deaktivierte Elemente

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

### Endinhalt

GRAVITY_TRANSLATION_BLOCK_17_END

GRAVITY_TRANSLATION_BLOCK_18_END

## Eigenschaften

| Name             | Beschreibung                                                                  | Typ                                        | Standard |
| :--------------- | :--------------------------------------------------------------------------- | :----------------------------------------- | :------- |
| children         | Breadcrumb-Elemente                                                          | `React.ReactElement<BreadcrumbsItemProps>` |          |
| disabled         | Bestimmt, ob `Breadcrumbs` deaktiviert sind.                                 | `boolean`                                  |          |
| showRoot         | Aktiviert oder deaktiviert die immerwährende Anzeige des Root-Elements, wenn die Elemente eingeklappt sind. | `boolean`                                  |          |
| popupPlacement   | Stil des Popups für eingeklappte Elemente.                                   | `PopupPlacement`                           |          |
| popupStyle       | Stil des Popups für eingeklappte Elemente.                                   | `"staircase"`                              |          |
| qa               | `data-qa` HTML-Attribut, das für Tests verwendet wird                        | `string`                                   |          |
| separator        | Benutzerdefinierter Trennknoten.                                             | `React.ReactNode`                          | "/"      |
| action           | `click`-Ereignisbehandlungsroutine.                                          | `(id: Key) => void`                        |          |
| id               | Eindeutige ID des Elements.                                                  | `string`                                   |          |
| className        | CSS-Klassenname für das Element.                                             | `string`                                   |          |
| style            | Legt den Inline-Stil für das Element fest.                                   | `CSSProperties`                            |          |
| aria-label       | Definiert einen Zeichenkettenwert, der das aktuelle Element beschriftet.    | `string`                                   |          |
| aria-labelledby  | Identifiziert das Element (die Elemente), das (die) das aktuelle Element beschriftet (beschriften). | `string`                                   |          |
| aria-describedby | Identifiziert das Element (die Elemente), das (die) das Objekt beschreibt (beschreiben). | `string`                                   |          |
| endContent       | Vom Benutzer gerendertes Element nach dem letzten Breadcrumb-Element.         | `React.ReactNode`                          |          |

### BreadcrumbsItemProps

| Name       | Beschreibung                                                              | Typ                               | Standardwert |
| :--------- | :------------------------------------------------------------------------ | :-------------------------------- | :----------- |
| children   | Inhalt der Breadcrumbs.                                                   | `string`                          |              |
| title      | String-Darstellung des Inhalts des Elements.                              | `string`                          |              |
| aria-label | Barrierefreiheits-Label für das Element.                                  | `string`                          |              |
| href       | URL, die für den Hyperlink verwendet werden soll.                         | `string`                          |              |
| target     | Zielfenster für den Link.                                                 | `React.HTMLAttributeAnchorTarget` |              |
| rel        | Beziehung zwischen der verknüpften Ressource und der aktuellen Seite.     | `string`                          |              |
| disabled   | Ob das BreadcrumbsItem deaktiviert ist.                                   | `boolean`                         |              |