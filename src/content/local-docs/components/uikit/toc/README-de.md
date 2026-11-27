<!--GITHUB_BLOCK-->

# Toc

<!--/GITHUB_BLOCK-->

Die Komponente `Toc` ist dafür konzipiert, ein Inhaltsverzeichnis der Seite anzuzeigen, nämlich eine Liste von Elementen mit zwei Hierarchieebenen.

```tsx
import {Toc} from '@gravity-ui/uikit';
```

## Verwendung

Sie können `Toc` auf zwei Arten verwenden:

1. Mit Elementen als Links.
2. Mit Elementen als klickbare Schaltflächen.

Um die erste Option zu verwenden, stellen Sie jedem `Toc`-Element über die Eigenschaft `href` den entsprechenden Link zur Verfügung. Sie können weiterhin einen Klick-Handler verwenden, um das aktive `Toc`-Element zu steuern.

Wenn Sie dies überspringen, verwendet die Komponente die andere Option.

## Eigenschaften

| Name      | Beschreibung                                                                                              |    Typ     | Standard |
| :-------- | :-------------------------------------------------------------------------------------------------------- | :--------: | :------: |
| className | CSS-Klasse                                                                                                |  `string`  |          |
| items     | TOC-Elemente                                                                                              | `TocItem[]` |          |
| value     | Aktuelles aktives Element                                                                                 |  `string`  |          |
| onUpdate  | Klick-Handler für Elemente                                                                                | `Function` |          |
| qa        | Der Wert, der dem `data-qa`-Attribut des `Toc`-Containers zugewiesen werden soll                         |  `string`  |          |

#### TocItem

| Name    | Beschreibung                                                                                                   |        Typ         | Standard |
| :------ | :------------------------------------------------------------------------------------------------------------- | :----------------: | :------: |
| value   | Wert des Elements                                                                                              |      `string`      |          |
| content | Inhalt des Elements, der angezeigt werden soll                                                                 | `React.ReactNode[]` |          |
| href    | Die `href`-Eigenschaft des `<a>`-Elements, in das ein Element konvertiert wird, wenn es bereitgestellt wird |      `string`      |          |
| items   | Kindelemente                                                                                                   |     `TocItem[]`    |          |
