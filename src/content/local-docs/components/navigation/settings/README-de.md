<!--GITHUB_BLOCK-->

# Settings

<!--/GITHUB_BLOCK-->

Die Komponente `Settings` bietet das Layout für ein Einstellungsfenster mit den folgenden Funktionen.

- ein- und zweistufige Gruppierung von Elementen
- Filterung des Panel-Inhalts nach Elementüberschriften
- Anzeige des Ladezustands und des Inhalts

<!--GITHUB_BLOCK-->

## Usage

One-level settings example:

```tsx
<Settings>
  <Settings.Page title="Appearance">...</Settings.Page>
  <Settings.Page title="Notifications">...</Settings.Page>
</Settings>
```

Two-level settings example:
_Note:_ `Settings` with `view=mobile` groups `Settings.Group` are ignored.

```tsx
<Settings>
  <Settings.Group groupTitle="My service">
    <Settings.Page title="Appearance">...</Settings.Page>
    <Settings.Page title="Notifications">...</Settings.Page>
  </Settings.Group>
  <Settings.Group groupTitle="General">
    <Settings.Page title="Appearance">...</Settings.Page>
    <Settings.Page title="Notifications">...</Settings.Page>
  </Settings.Group>
</Settings>
```

Pages with sections example:

```tsx
<Settings.Page title="Features" icon={'...'}>
  <Settings.Section title="Common">
    <Settings.Item title="Default VCS">...</Settings.Item>
    <Settings.Item title="Search root">...</Settings.Item>
  </Settings.Section>
  <Settings.Section title="Beta functionality">...</Settings.Section>
</Settings.Page>
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

| Name                           | Beschreibung                               | Typ                         | Standardwert       |
| :----------------------------- | :----------------------------------------- | :-------------------------- | :----------------- |
| loading                        | Flag des Ladezustands                      | `boolean`                   |                    |
| renderLoading                  | Inhalt für den Ladezustand                 | `() => React.ReactNode`     |                    |
| renderNotFound                 | Leerer Panel-Inhalt                        | `() => React.ReactNode`     |                    |
| initialPage                    | Initiale Seite im Format `/groupId/pageId` | `string`                    |                    |
| view                           | Ansicht für Mobilgeräte ändern             | `"normal"`, `"mobile"`      | `"normal"`         |
| onPageChange                   | Handler für Seitenwechsel                  | `(newPage?: string) => void` |                    |
| onClose                        | Handler zum Schließen der Einstellungen    | `() => void`                |                    |
| title                          | Seitentitel                                | `string`                    | 'Settings'         |
| filterPlaceholder              | Platzhaltertext für Filter                 | `string`                    | 'Search settings'  |
| emptyPlaceholder               | Text, wenn Filter leer ist                 | `string`                    | 'No results found' |
| enableMobileSettingsTabsScroll | In der mobilen Ansicht werden Tabs mit Scroll statt Zeilenumbruch überlaufen | `boolean`                   |                    |

## Settings.Group

Optionale Ebene zur Organisation zusammengehöriger Seiten, z. B. "Allgemein" vs. "Anwendungsspezifisch".

### Eigenschaften

| Name       | Beschreibung            | Typ      | Standardwert |
| :--------- | :---------------------- | :------- | :----------- |
| id         | Eindeutige ID der Gruppe | `string` |              |
| groupTitle | Überschrift der Gruppe  | `string` |              |

## Settings.Page

Sammlung zusammengehöriger Einstellungsabschnitte, z. B. "Darstellung" in der Gruppe "Allgemein".

### Eigenschaften

| Name  | Beschreibung                         | Typ                                                                                        | Standardwert |
| :---- | :----------------------------------- | :----------------------------------------------------------------------------------------- | :----------- |
| id    | Eindeutige ID der Seite in einer Gruppe | `string`                                                                                   |              |
| title | Titel der Seite                      | `string`                                                                                   |              |
| icon  | Eigenschaften des Seiten-Icons       | [`IconProps`](https://github.com/gravity-ui/uikit/tree/main/src/components/Icon#properties) |              |

## Settings.Section

Kategorie zusammengehöriger Einstellungen, z. B. "Themeneinstellungen" auf der Seite "Darstellung".

### Eigenschaften

| Name      | Beschreibung                                                              | Typ               | Standard |
| :-------- | :------------------------------------------------------------------------ | :---------------- | :------- |
| title     | Titel des Abschnitts                                                      | `string`          |          |
| header    | Kopfzeile des Abschnitts                                                  | `React.ReactNode` |          |
| withBadge | Badge für Abschnitt und Menü anzeigen                                     | `boolean`         |          |
| hideTitle | Abschnittstitel ausblenden. Prop wird benötigt, um Titel in einfachen Einstellungen auf Mobilgeräten auszublenden | `boolean`         |          |

## Settings.Item

Einzelne Einstellung mit Titel und Steuerelement.
⚠️ Wenn nur ein `Settings.Item` in `Settings.Section` vorhanden ist, wird der Titel nicht angezeigt.

### Eigenschaften

| Name                 | Beschreibung                                                              | Typ                                                      | Standard   |
| :------------------- | :------------------------------------------------------------------------ | :------------------------------------------------------- | :--------- |
| title                | Titel des Elements                                                        | `string`                                                 |            |
| renderTitleComponent | Benutzerdefinierte Kopfzeile von                                          | `(highlightedTitle?: React.ReactNode) => React.ReactNode` |            |
| align                | Ausrichtung des Elements                                                  | `"top"`, `"center"`                                      | `"center"` |
| mode                 | Layout für Mobilgeräte. Titel und Steuerelement werden in einer Zeile platziert | `"row"`                                                  |            |
| description          | Beschreibung des Elements                                                 | `React.ReactNode`                                        |            |
