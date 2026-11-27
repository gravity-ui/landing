# Menü

Die `Menu`-Komponente zeigt eine Liste von Auswahlmöglichkeiten im `Popup` an, wenn mit ihrem Trigger interagiert wird, typischerweise einem Button.

Es gibt eine Sammlung verwandter Komponenten:

- `Menu` - der Container des Menüs
- `MenuItem` - eine Option zur Auswahl aus dem Menü
- `MenuDivider` - ein Trennzeichen zum Gruppieren von Optionen
- `MenuTrigger` - ein integrierter Standard-Trigger, `Button` mit Ellipsen-Icon

## Grundlegende Verwendung

```jsx
import {Menu, MenuItem, MenuDivider, MenuTrigger} from '@gravity-ui/uikit';

function BasicMenu() {
  return (
    <Menu trigger={<MenuTrigger />}>
      <MenuItem>Kopieren</MenuItem>
      <MenuItem>Verschieben</MenuItem>
      <MenuDivider />
      <MenuItem theme="danger">Löschen</MenuItem>
    </Menu>
  );
}
```

## Benutzerdefinierter Trigger

Sie können jede Art von Komponente als Trigger rendern, wenn sie grundlegende HTML-Attribute als Props und eine Referenz für HTMLElement akzeptiert.
Für komplexere Komponenten können Sie eine Funktionsvariante der `trigger`-Prop verwenden, die `triggerProps` als erstes Argument und `triggerRef` als zweites Argument hat, das Sie an Ihre Komponente übergeben sollten.

## Kontextmenü

Um das Kontextmenü-Muster zu implementieren, sollten Sie ein "virtuelles Element" als Trigger verwenden:

```jsx
import {Menu, MenuItem, MenuDivider, MenuTrigger} from '@gravity-ui/uikit';

function ContextMenu() {
  const [trigger, setTrigger] = React.useState(null);

  React.useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
      setTrigger({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: event.clientX,
            y: event.clientY,
            top: event.clientY,
            right: event.clientX,
            bottom: event.clientY,
            left: event.clientX,
          };
        },
      });
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <Menu trigger={trigger}>
      <MenuItem>Kopieren</MenuItem>
      <MenuItem>Verschieben</MenuItem>
      <MenuDivider />
      <MenuItem theme="danger">Löschen</MenuItem>
    </Menu>
  );
}
```

## Inline-Modus

Standardmäßig wird `Menu` innerhalb des `Popup` gerendert. Sie können es jedoch mit der `inline`-Prop in Ihrem eigenen Container inline rendern.

## Eigenschaften

| Name            | Beschreibung                                     |                                              Typ                                               |     Standard      |
| :-------------- | :---------------------------------------------- | :---------------------------------------------------------------------------------------------: | :--------------: |
| className       | HTML `class`-Attribut                          |                                            `string`                                             |                  |
| style           | HTML `style`-Attribut                          |                                      `React.CSSProperties`                                      |                  |
| aria-label      | Zugänglicher Name für das Menü                    |                                            `string`                                             |                  |
| aria-labelledby | ID eines Elements, das das Menü benennt            |                                            `string`                                             |                  |
| qa              | Test-ID (`data-qa`-Attribut)                   |                                            `string`                                             |                  |
| open            | Gesteuerter Zustand für `open`                     |                                            `boolean`                                            |                  |
| defaultOpen     | Ungesteuerter Zustand für `open`                   |                                            `boolean`                                            |                  |
| children        | Menübezogene Komponenten (Elemente, Trennlinien usw.) |                                        `React.ReactNode`                                        |                  |
| disabled        | Deaktivierter Zustand                                  |                                            `boolean`                                            |     `false`      |
| inline          | Rendert das Menü inline                         |                                            `boolean`                                            |     `false`      |
| trigger         | Auslöser-Element, das das Menü öffnet            | `React.ReactElement` `(triggerProps, triggerRef) => React.ReactElement` `VirtualElement` `null` |                  |
| placement       | Position des Popups                            |                                        `PopupPlacement`                                         | `"bottom-start"` |
| onOpenChange    | Callback für Zustandsänderung von `open`                |                `(open: boolean, event: Event, reason: OpenChangeReason) => void`                |                  |
| size            | Die Größe des `Menu`                                 |                                    `"s"` `"m"` `"l"` `"xl"`                                     |      `"m"`       |

### MenuItem

Wenn ein `Icon` ohne explizite Größe an die `icon`-Eigenschaft übergeben wird, wird seine Größe automatisch entsprechend der `Menu`-Größe ausgewählt. Setzen Sie `size`, `width` oder `height` des `Icon` explizit, um dies zu überschreiben.

`MenuItem` akzeptiert zusätzlich zu diesen alle gültigen `button`- oder `a`-Element-Props:

| Name      | Beschreibung                         |                                Type                                |  Default   |
| :-------- | :---------------------------------- | :----------------------------------------------------------------: | :--------: |
| qa        | Test-ID (`data-qa`-Attribut)        |                              `string`                              |            |
| theme     | Das `MenuItem`-Theme                | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` | `"normal"` |
| selected  | Ausgewählter Zustand (`menuitemcheckbox`) |                             `boolean`                              |            |
| disabled  | Deaktivierter Zustand               |                             `boolean`                              |  `false`   |
| icon      | Render-Slot für ein Icon            |                        `React.ReactElement`                        |            |
| arrow     | Render-Slot für einen verschachtelten Menüpfeil |                        `React.ReactElement`                        |            |
| children  | Inhalt                              |                         `React.ReactNode`                          |            |
| component | Benutzerdefinierte Root-Komponente  |                        `React.ElementType`                         |            |

### MenuTrigger

`MenuTrigger` akzeptiert zusätzlich zu diesen alle `Button`-Komponenten-Props:

| Name | Beschreibung             |            Type             |    Default     |
| :--- | :---------------------- | :-------------------------: | :------------: |
| icon | Art des anzuzeigenden Icons | `"horizontal"` `"vertical"` | `"horizontal"` |