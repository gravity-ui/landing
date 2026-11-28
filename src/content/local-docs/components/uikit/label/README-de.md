Sie können `Label`s zur Hervorhebung bestimmter Informationen verwenden. Ein `Label` mit der Schaltfläche `Close` oder `Copy` kann für verschiedene einfache Aktionen nützlich sein.

`Label`s eignen sich am besten zur Anzeige einzeiliger Textinformationen mit unterschiedlichen Farbcodes, die deren Wichtigkeit anzeigen.

```tsx
import {Label} from '@gravity-ui/uikit';
```

## Erscheinungsbild

Ein `Label` kann in verschiedenen Stilen angezeigt werden.

### Thema

Verwenden Sie die Eigenschaft `theme`, um verschiedene Themen für verschiedene Status anzuwenden. Sie können die folgenden Werte verwenden: `normal`, `info`, `success`, `warning`, `danger`, `utility`, `unknown` und `clear`.
Das Standardthema ist `normal`.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Typ

Die Eigenschaft `type` fügt einem `Label` verschiedene Optionen hinzu:

`copy`: Fügt eine Kopierschaltfläche hinzu; beim Klicken kopiert sie den Wert der Eigenschaft `copyText`.

`close`: Fügt eine Schließschaltfläche zur Verwaltung von Label-Listen hinzu.

`info`: Fügt dem Label ein Info-Symbol hinzu.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Symbol

Sie können ein Symbol mit der Eigenschaft `icon` hinzufügen. Verwenden Sie dazu die Komponente [`Icon`](../Icon), die ein spezieller Wrapper für SVGs ist.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Wert

Sie können `Label`s zur Anzeige von Schlüssel-Wert-Informationen verwenden. Dazu müssen Sie den Schlüssel der Eigenschaft `children` und den Wert `value` zuweisen:

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Status

Ein `label` kann verschiedene Status haben:

- `disabled`: Keine Interaktionen erlaubt.
- `interactive`: Macht das Label hoverbar.
- `loading`: Zeigt einen Ladezustand an.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Größe

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## Eigenschaften

| Name             | Beschreibung                                                                    |                  Typ                   |   Standard   |
| :--------------- | :------------------------------------------------------------------------------ | :------------------------------------: | :----------: |
| children         | Inhalt                                                                          |            `React.ReactNode`            |              |
| className        | `class` HTML-Attribut                                                           |                `string`                 |              |
| closeButtonLabel | `aria-label` des Schließen-Buttons                                              |                `string`                 |              |
| copyButtonLabel  | `aria-label` des Kopieren-Buttons                                               |                `string`                 |              |
| copyText         | Zu kopierender Text                                                             |                `string`                 |              |
| disabled         | Deaktivierter Zustand                                                           |                `boolean`                |              |
| icon             | Symbol (links)                                                                  |            `React.ReactNode`            |              |
| interactive      | Aktiviert den Hover-Effekt. Hinweis: kann für `copy`- und `info`-Labels nicht deaktiviert werden. |                `boolean`                |              |
| loading          | Ladezustand                                                                     |                `boolean`                |   `false`    |
| onClick          | `click`-Ereignisbehandlungsroutine                                              |               `Function`                |              |
| onCloseClick     | `click`-Ereignisbehandlungsroutine des Schließen-Buttons                         |               `Function`                |              |
| onCopy           | `copy`-Ereignisbehandlungsroutine                                               |               `Function`                |              |
| qa               | `data-qa` HTML-Attribut, wird für Tests verwendet                               |                `string`                 |              |
| size             | Label-Größe                                                                     |       `"2xs"` `"xs"` `"s"` `"m"`        |   `"xs"`     |
| theme            | Label-Thema                                                                     |                `string`                 | `"normal"`   |
| title            | `title` HTML-Attribut                                                           |                `string`                 |              |
| type             | Label-Typ                                                                       | `"default"` `"copy"` `"close"` `"info"` | `"default"`  |
| value            | Label-Wert (angezeigt als `"children : value"`)                                 |            `React.ReactNode`            |              |
| width            | Steuert, wie das Label den Platz des Elternelements nutzt                       |                `"auto"`                 |              |