`Popover` zeigt schwebende, optional interaktive Inhalte (Text, Links oder Schaltflächen) an, die an ein untergeordnetes Element angeheftet sind und beim Hovern oder Klicken geöffnet werden. Es umschließt [`Popup`](../Popup/README.md) mit integrierter Trigger-Interaktivität und verwendet das über die `children`-Eigenschaft übergebene `ReactElement` als Trigger.

```tsx
import {Popover} from '@gravity-ui/uikit';
```

## Verwendung

Umschließen Sie ein HTML-Element oder eine beliebige Komponente, die native DOM-Handler und ARIA-Attribute in Eigenschaften akzeptiert (z. B. `Button`), mit der `Popover`-Komponente. Platzieren Sie Ihre Inhalte in der `content`-Eigenschaft.

```jsx
import {Button, Popover} from '@gravity-ui/uikit';

<Popover content="Inhalt">
  <Button>Klicken oder Hovern Sie mich</Button>
</Popover>;
```

## Eigenschaften

| Name                 | Beschreibung                                                                                                   |                                Typ                                 |     Standard     |
| :------------------- | :------------------------------------------------------------------------------------------------------------ | :-----------------------------------------------------------------: | :-------------: |
| children             | `ReactNode`, der DOM-Handler akzeptiert                                                                        |                          `React.ReactNode`                          |                 |
| className            | HTML `class`-Attribut für das Root-Element                                                                    |                              `string`                               |                 |
| container            | DOM-Element, an das die Komponente über `Portal` angehängt wird                                               |                            `HTMLElement`                            | `document.body` |
| content              | Beliebiger Inhalt, der innerhalb des `Popover` gerendert werden soll                                            |                          `React.ReactNode`                          |                 |
| contentClassName     | HTML `class`-Attribut für das Inhalts-Element                                                                 |                              `string`                               |                 |
| delay                | Wartezeit in Millisekunden, bevor der `open`-Status geändert wird                                              |             `number` `{open?: number; close?: number}`              |                 |
| disableEscapeKeyDown | Nicht schließen bei `Esc`-Tastendruck                                                                          |                              `boolean`                              |     `false`     |
| disableLayer         | Verwende `LayerManager` nicht für gestapelte schwebende Elemente                                              |                              `boolean`                              |     `false`     |
| disableOutsideClick  | Nicht schließen bei Klick außerhalb                                                                            |                              `boolean`                              |     `false`     |
| disablePortal        | Deaktiviert die Verwendung von `Portal`                                                                       |                              `boolean`                              |     `false`     |
| disabled             | Nicht bei irgendeinem Ereignis öffnen                                                                         |                              `boolean`                              |     `false`     |
| enableSafePolygon    | Verwende einen dynamischen Polygonbereich, wenn der Zeiger vom Trigger zum `Popover`-Inhalt bewegt wird, um ein Schließen zu verhindern |                              `boolean`                              |     `false`     |
| hasArrow             | Rendere einen Pfeil, der auf den Trigger zeigt                                                                |                              `boolean`                              |     `false`     |
| keepMounted          | `Popover` wird beim Ausblenden nicht aus dem DOM entfernt                                                       |                              `boolean`                              |     `false`     |
| middlewares          | `Floating UI`-Middlewares. Wenn gesetzt, überschreiben sie die Standard-Middlewares vollständig.               |                         `Array<Middleware>`                         |                 |
| modal                | Aktiviert das Fokus-Trapping-Verhalten                                                                        |                              `boolean`                              |     `false`     |
| offset               | `Floating UI`-Offset-Wert                                                                                     |                           `PopoverOffset`                           |       `4`       |
| onOpenChange         | Funktion, die aufgerufen wird, wenn sich der `open`-Status ändert                                             |                             `Function`                              |                 |
| open                 | Steuere den `open`-Status manuell                                                                             |                              `boolean`                              |                 |
| placement            | `Floating UI`-Platzierung                                                                                     | `Placement` `Array<Placement>` `"auto"` `"auto-start"` `"auto-end"` |     `"top"`     |
| qa                   | Testattribut (`data-qa`)                                                                                      |                              `string`                               |                 |
| rest                 | Wie lange (in ms) der Cursor ruhen muss, bevor er geöffnet wird.                                              |                              `number`                               |       `0`       |
| strategy             | `Floating UI`-Positionierungsstrategie                                                                        |                       `"absolute"` `"fixed"`                        |  `"absolute"`   |
| style                | HTML `style`-Attribut für das Root-Element                                                                    |                              `string`                               |                 |
| toggle               | Ob der `open`-Status bei wiederholten Klicks umgeschaltet werden soll                                         |                              `boolean`                              |     `true`      |
| trigger              | Welches Ereignis den `Popover` öffnen soll. Der Standardwert `all` bezieht sich sowohl auf `hover` als auch auf `click` |                          `"all"` `"click"`                          |     `"all"`     |