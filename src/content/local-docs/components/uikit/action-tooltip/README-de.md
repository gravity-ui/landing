<!--GITHUB_BLOCK-->

# ActionTooltip

<!--/GITHUB_BLOCK-->

[`Tooltip`](../Tooltip/README.md) zur Beschriftung von Aktionsschaltflächen ohne beschreibenden Text (z. B. Symbolschaltflächen).

## Verwendung

```tsx
import {ActionTooltip} from '@gravity-ui/uikit';

<ActionTooltip title="Action">
  <div tabIndex={0}>Anchor</div>
</ActionTooltip>;
```

## Anker

Damit `ActionTooltip` funktioniert, müssen Sie ein gültiges `ReactElement` als Kind übergeben, das die `ref`-Eigenschaft für `HTMLElement`
und andere Eigenschaften für `HTMLElement` akzeptiert.

Alternativ können Sie eine Funktion als Kind übergeben, um `ref` und `props` manuell an Ihre zugrunde liegenden Komponenten zu übergeben:

```tsx
import {ActionTooltip} from '@gravity-ui/uikit';

<ActionTooltip title="Action">
  {(props, ref) => <MyCustomButton buttonProps={props} buttonRef={ref} />}
</ActionTooltip>;
```

## Gesteuerter Zustand

Standardmäßig öffnet und schließt sich `ActionTooltip` beim Überfahren des Ankers mit der Maus. Sie können dieses Verhalten ändern, um den Öffnungszustand manuell festzulegen.
Übergeben Sie Ihren Zustand an die `open`-Eigenschaft und ändern Sie ihn über den `onOpenChange`-Callback.
Der `onOpenChange`-Callback hat die folgende Signatur: `(open: boolean, event?: Event, reason: 'hover' | 'focus') => void`.

## Eigenschaften

| Name          | Beschreibung                                                                                     |                       Typ                       |     Standard     |
| :------------ | :----------------------------------------------------------------------------------------------- | :----------------------------------------------: | :-------------: |
| children      | Anker-Element für den `ActionTooltip`                                                          |         `React.ReactElement` `Function`          |                 |
| className     | `class` HTML-Attribut                                                                          |                     `string`                     |                 |
| closeDelay    | Anzahl der Millisekunden, die das Ausblenden des `ActionTooltip` nach Ende des Hoverens verzögert werden |                     `number`                     |       `0`       |
| container     | DOM-Element, an dem die Komponente über `Portal` angehängt wird                                  |                  `HTMLElement`                   | `document.body` |
| description   | Beschreibungsinhalt                                                                             |                `React.ReactNode`                 |                 |
| disablePortal | Deaktiviert die Verwendung von `Portal`                                                          |                    `boolean`                     |     `false`     |
| disabled      | Verhindert das Öffnen des `ActionTooltip`                                                        |                    `boolean`                     |                 |
| hotkey        | `Hotkey`-Wert, der in der oberen rechten Ecke angezeigt werden soll                                |   [`Hotkey`-Wert](../Hotkey/README.md#value)    |                 |
| offset        | Abstand des `ActionTooltip` vom Anker                                                          |                     `number`                     |       `4`       |
| onOpenChange  | Callback zur Behandlung von Änderungen des Öffnungszustands                                     |                    `Function`                    |                 |
| open          | Gesteuerter Öffnungszustand                                                                     |                    `boolean`                     |                 |
| openDelay     | Anzahl der Millisekunden, die das Anzeigen des `ActionTooltip` nach Beginn des Hoverens verzögert werden |                     `number`                     |     `1000`      |
| placement     | Position des `ActionTooltip` relativ zum Anker                                                 | [`PopupPlacement`](../Popup/README.md#placement) |    `bottom`     |
| qa            | `data-qa` HTML-Attribut, das zum Testen verwendet wird                                           |                     `string`                     |                 |
| rest          | Wie viel Zeit in ms der Cursor ruhen muss, bevor er geöffnet wird.                                |                     `number`                     |       `0`       |
| strategy      | Die Art der zu verwendenden CSS-Positionierungseigenschaft.                                      |                `absolute` `fixed`                |   `absolute`    |
| style         | `style` HTML-Attribut                                                                          |              `React.CSSProperties`               |                 |
| title         | Titelinhalt                                                                                   |                     `string`                     |                 |
| trigger       | Ereignistyp, der das Öffnen auslösen soll. Der Standardwert `all` bezieht sich auf `hover` und `focus`. |                `"all"` `"focus"`                 |     `"all"`     |
