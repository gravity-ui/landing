GRAVITY_TRANSLATION_BLOCK_0_END

Ein einfacher Text-Tipp, der seinen Kindknoten als Anker verwendet. Diese Komponente akzeptiert nur Textinhalt und kann eine ausgezeichnete
Alternative zum `title`-Attribut des Browsers sein, mit ihrer geringen Größe und der langen Verzögerung beim Erscheinen.

## Verwendung

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Inhalt">
  <div tabIndex={0}>Anker</div>
</Tooltip>;
```

## Anker

Damit `Tooltip` funktioniert, müssen Sie ein gültiges `ReactElement` als Kind übergeben, das die `ref`-Eigenschaft für `HTMLElement`
und andere Eigenschaften für `HTMLElement` akzeptiert.

Alternativ können Sie eine Funktion als Kind übergeben, um `ref` und `props` manuell an Ihre zugrunde liegenden Komponenten zu übergeben:

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Inhalt">
  {(props, ref) => <MyCustomButton buttonProps={props} buttonRef={ref} />}
</Tooltip>;
```

## Gesteuerter Zustand

Standardmäßig öffnet und schließt sich `Tooltip` beim Überfahren des Ankers mit der Maus. Sie können dieses Verhalten ändern, um den geöffneten Zustand manuell festzulegen.
Übergeben Sie Ihren Zustand an die `open`-Eigenschaft und ändern Sie ihn über den `onOpenChange`-Callback.
Der `onOpenChange`-Callback hat die folgende Signatur: `(open: boolean, event?: Event, reason: 'hover' | 'focus') => void`.

## Rolle

`Tooltip` akzeptiert die `role`-Eigenschaft, die seine Zugänglichkeit beeinflusst.
Die Rolle `tooltip` sollte verwendet werden, wenn der Anker seinen eigenen Text hat, und die Rolle `label` andernfalls (z. B. bei einem Icon-Button).

## Verzögerungsgruppe

Alle Tooltips, die unter `Provider` gerendert werden, teilen sich die Öffnungsverzögerung. Der erste Tooltip zahlt seine eigene `openDelay`,
sodass eine versehentliche Mausbewegung immer noch nichts öffnet. Solange die Gruppe "warm" ist – ein Tooltip ist geöffnet oder wurde vor weniger als `skipDelay` geschlossen – öffnet sich der nächste angefahrene Tooltip sofort, und es ist nicht mehr als ein Tooltip gleichzeitig geöffnet. Dies eignet sich für Symbolleisten und Reihen von Icon-Buttons, bei denen das Warten auf die Verzögerung bei jedem Button langsam erscheint.
Das Öffnen per Fokus ist mit oder ohne Gruppe sofort möglich, sodass die Tastatur nicht beeinträchtigt wird.

`skipDelay` (standardmäßig 300 ms) wird mit `defaultProps` von `Provider` konfiguriert:

```tsx
import {Provider} from '@gravity-ui/uikit';

<Provider defaultProps={{TooltipDelayGroup: {skipDelay: 500}}}>{/* ... */}</Provider>;
```

## Eigenschaften

| Name          | Beschreibung                                                                                     |                       Typ                       |     Standard     |
| :------------ | :----------------------------------------------------------------------------------------------- | :---------------------------------------------: | :------------: |
| children      | Anker-Element für den `Tooltip`                                                                |         `React.ReactElement` `Function`          |                |
| className     | `class` HTML-Attribut                                                                          |                     `string`                     |                |
| closeDelay    | Anzahl der Millisekunden, die das Ausblenden des `Tooltip` nach dem Ende des Hoverens verzögert |                     `number`                     |      `0`       |
| container     | DOM-Element, an das die Komponente über `Portal` angehängt wird                                  |                  `HTMLElement`                   | `document.body` |
| content       | Inhalt, der im `Tooltip` angezeigt wird                                                          |                `React.ReactNode`                 |                |
| disablePortal | Deaktiviert die Verwendung von `Portal`                                                          |                    `boolean`                     |     `false`     |
| disabled      | Verhindert das Öffnen des `Tooltip`                                                              |                    `boolean`                     |                |
| offset        | `Tooltip`-Abstand vom Anker                                                                      |                     `number`                     |      `4`       |
| onOpenChange  | Callback zur Behandlung von Änderungen des Öffnungszustands                                      |                    `Function`                    |                |
| open          | Gesteuerter Öffnungszustand                                                                      |                    `boolean`                     |                |
| openDelay     | Anzahl der Millisekunden, die das Anzeigen des `Tooltip` nach Beginn des Hoverens verzögert      |                     `number`                     |     `1000`      |
| placement     | Position des `Tooltip` relativ zum Anker                                                         | [`PopupPlacement`](../Popup/README.md#placement) |    `bottom`    |
| qa            | `data-qa` HTML-Attribut, verwendet für Tests                                                     |                     `string`                     |                |
| rest          | Wie viel Zeit in ms der Cursor ruhen muss, bevor er geöffnet wird.                                |                     `number`                     |      `0`       |
| role          | Die Rolle, für die der `Tooltip` verwendet wird                                                  |              `"tooltip"` `"label"`               |   `"tooltip"`   |
| strategy      | Der Typ der CSS-Positionierungseigenschaft, die verwendet werden soll.                           |                `absolute` `fixed`                |   `absolute`    |
| style         | `style` HTML-Attribut                                                                          |              `React.CSSProperties`               |                |
| trigger       | Ereignistyp, der das Öffnen auslösen soll. Der Standardwert `all` bezieht sich auf `hover` und `focus`. |                `"all"` `"focus"`                 |     `"all"`     |

## CSS API

| Name                           | Beschreibung      |
| :----------------------------- | :---------------- |
| `--g-tooltip-text-color`       | Textfarbe         |
| `--g-tooltip-background-color` | Hintergrundfarbe  |
| `--g-tooltip-padding`          | Innenabstand      |
| `--g-tooltip-border-radius`    | Radius der Ecken  |
| `--g-tooltip-box-shadow`       | Schatten          |