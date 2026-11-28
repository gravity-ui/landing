# ColorPicker

Die `ColorPicker`-Komponente ermöglicht es Benutzern, Farben über eine interaktive Farbauswahl mit HEX/RGB-Eingabemodi und optionaler Alpha-Kanalunterstützung auszuwählen.

Die Auswahl zeigt eine Farbfeld an, das ein Popup öffnet mit:

- Sättigungs- und Helligkeitsauswahl
- Farbton-Schieberegler
- Alpha-Schieberegler (wenn aktiviert)
- Farbeingabefelder (HEX- oder RGB-Modi)

## Grundlegende Verwendung

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function BasicColorPicker() {
  const [color, setColor] = React.useState('#ff0000');

  return <ColorPicker value={color} onUpdate={(newColor) => setColor(newColor)} />;
}
```

GRAVITY_TRANSLATION_BLOCK_1_END

## Mit Alpha-Kanal

Der ColorPicker unterstützt Alpha-Transparenz, wenn `withAlpha` aktiviert ist. Dies fügt einen Transparenz-Schieberegler hinzu und wechselt zu HEXA/RGBA-Farbformaten:

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function ColorPickerWithAlpha() {
  const [color, setColor] = React.useState('#ff0000ff');

  return <ColorPicker value={color} onUpdate={(newColor) => setColor(newColor)} withAlpha={true} />;
}
```

GRAVITY_TRANSLATION_BLOCK_2_END

## Kompakter Modus

Für platzbeschränkte Layouts können Sie nur das Farbfeld rendern, ohne den Farbwerttext anzuzeigen:

```jsx
import {ColorPicker} from '@gravity-ui/uikit';

function CompactColorPicker() {
  return (
    <ColorPicker
      defaultValue="#00ff00"
      compact={true}
      onUpdate={(newColor) => console.log('Neue Farbe:', newColor)}
    />
  );
}
```

GRAVITY_TRANSLATION_BLOCK_3_END

## Gesteuerte und ungesteuerte Zustände

Der ColorPicker unterstützt sowohl gesteuerte als auch ungesteuerte Nutzungsmuster:

```jsx
// Ungesteuert
<ColorPicker
  defaultValue="#ffbe5c"
  onUpdate={(color) => console.log('Farbe geändert:', color)}
/>

// Gesteuert
<ColorPicker
  value={color}
  onUpdate={setColor}
/>
```

GRAVITY_TRANSLATION_BLOCK_4_END

Sie können auch den geöffneten Zustand des Auswahl-Popups steuern:

```jsx
// Gesteuerter geöffneter Zustand
<ColorPicker value={color} open={isOpen} onOpenChange={setIsOpen} onUpdate={setColor} />
```

GRAVITY_TRANSLATION_BLOCK_5_END

## Eigenschaften

| Name           | Beschreibung                                                              |           Typ            |                                      Standard                                       |
| :------------- | :------------------------------------------------------------------------ | :----------------------: | :--------------------------------------------------------------------------------: |
| size           | Die Größe des `ColorPicker`                                               | `"s"` `"m"` `"l"` `"xl"`  |                                       `"m"`                                        |
| value          | Farbwert für gesteuerten Zustand (HEX- oder HEXA-String)                  |         `string`         |                                                                                    |
| defaultValue   | Standard-Farbwert für ungesteuerten Zustand                               |         `string`         |                                    `"#000000"`                                     |
| onUpdate       | Callback, wenn der Benutzer die Farbe aktualisiert. Empfängt einen HEX(A)-String. | `(value: string) => void` |                                                                                    |
| popupPlacement | Platzierung des Popups                                                    |     `PopupPlacement`     | `['bottom-start', 'bottom-end', 'left-start', 'left-end', 'top-start', 'top-end']` |
| open           | Gesteuerter Zustand für das Öffnen/Schließen des Popups                   |         `boolean`        |                                                                                    |
| defaultOpen    | Standardzustand für das Öffnen/Schließen des Popups                       |         `boolean`        |                                      `false`                                       |
| onOpenChange   | Callback für Zustandsänderungen beim Öffnen/Schließen des Popups          | `(open: boolean) => void` |                                                                                    |
| withAlpha      | Aktiviert die Unterstützung für den Alpha-Kanal im HEXA/RGBA-Modus und den Transparenz-Schieberegler |         `boolean`        |                                      `false`                                       |
| compact        | Rendert nur den Picker-Button, ohne den Farbwert-Text anzuzeigen           |         `boolean`        |                                      `false`                                       |

## Farbformate

Der ColorPicker gibt Farbwerte immer im HEX-Format zurück:

- Wenn `withAlpha={false}`: Gibt 6-stellige HEX-Werte zurück (z. B. `#ff0000`)
- Wenn `withAlpha={true}`: Gibt 8-stellige HEXA-Werte zurück (z. B. `#ff0000ff`)

Innerhalb des Picker-Popups können Benutzer zwischen den HEX- und RGB-Eingabemodi wechseln, um Farben in ihrem bevorzugten Format einzugeben.