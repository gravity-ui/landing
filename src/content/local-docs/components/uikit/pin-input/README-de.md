<!--GITHUB_BLOCK-->

# PinInput

<!--/GITHUB_BLOCK-->

`PinInput` ist eine Gruppe von Eingabefeldern zur schnellen Eingabe einer Sequenz von numerischen oder alphanumerischen Werten. Der häufigste Anwendungsfall ist die Eingabe von OTP- oder Bestätigungscodes, die per SMS, E-Mail oder Authenticator-Apps empfangen werden.

Jede Eingabe erfasst ein Zeichen auf einmal. Wenn ein Wert akzeptiert wird, wird der Fokus auf die nächste Eingabe verschoben, bis alle Felder ausgefüllt sind.

```tsx
import {PinInput} from '@gravity-ui/uikit';
```

## Typ

Standardmäßig akzeptieren die Eingabefelder nur numerische Werte. Um alphanumerische Werte zuzulassen, setzen Sie die Eigenschaft `type` auf `"alphanumeric"`:

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return <PinInput type="alphanumeric" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput type="alphanumeric" />
```

<!--/GITHUB_BLOCK-->

## Größe

Diese Komponente ist in vier Größen erhältlich: `s`, `m`, `l` und `xl`. Die Standardgröße ist `m`.

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <PinInput size="s" />
            <PinInput size="m" />
            <PinInput size="l" />
            <PinInput size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput size="s" />
<PinInput size="m" />
<PinInput size="l" />
<PinInput size="xl" />
```

<!--/GITHUB_BLOCK-->

## Zustand

Wenn Sie nicht möchten, dass der Benutzer mit der Komponente interagiert, setzen Sie die Eigenschaft `disabled`:

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return <PinInput disabled />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput disabled />
```

<!--/GITHUB_BLOCK-->

Um einen ungültigen Zustand der Komponente anzuzeigen, verwenden Sie die Eigenschaft `validationState` mit dem Wert `"invalid"`. Optional können Sie einen Fehlermeldungstext mit der Eigenschaft `errorMessage` festlegen:

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return <PinInput validationState="invalid" errorMessage="Incorrect PIN" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput validationState="invalid" errorMessage="Incorrect PIN" />
```

<!--/GITHUB_BLOCK-->

## Platzhalter

Standardmäßig gibt es keinen Platzhalter für die Eingabefelder. Sie können ihn mit der Eigenschaft `placeholder` festlegen:

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return <PinInput placeholder="😎" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput placeholder="😎" />
```

<!--/GITHUB_BLOCK-->

## Maskierung

Wenn Sie eingegebene Werte maskieren müssen, verwenden Sie die Eigenschaft `mask`. Sie ähnelt dem Verhalten von `<input type="password"/>`.

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return <PinInput mask />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput mask />
```

<!--/GITHUB_BLOCK-->

## OTP

Wenn Sie möchten, dass der Browser Einmalcodes aus dem äußeren Kontext (z. B. SMS) vorschlägt, setzen Sie die Eigenschaft `otp`.

## API

- `focus(): void`: Setzt den Fokus auf die aktuell aktive Eingabe.

## CSS API

| Name                       | Beschreibung                                                              |
| :------------------------- | :------------------------------------------------------------------------ |
| `--g-pin-input-item-width` | Legt die Breite jeder Eingabe fest, es sei denn, `responsive` ist `true`. |
| `--g-pin-input-item-gap`   | Legt einen Abstand zwischen den Eingaben fest.                            |

## Eigenschaften

| Name             | Beschreibung                                                                                                                                                           |                     Typ                     |   Standard   |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------: | :----------: |
| apiRef           | Ref zum [API](#api).                                                                                                                                                   |              `React.RefObject`              |              |
| aria-describedby | `aria-describedby` HTML-Attribut                                                                                                                                       |                   `string`                  |              |
| aria-label       | `aria-label` HTML-Attribut                                                                                                                                             |                   `string`                  |              |
| aria-labelledby  | `aria-labelledby` HTML-Attribut                                                                                                                                        |                   `string`                  |              |
| autoFocus        | Aktiviert oder deaktiviert den Fokus auf das erste Eingabefeld beim anfänglichen Rendern.                                                                             |                  `boolean`                  |              |
| className        | `class` HTML-Attribut                                                                                                                                                  |                   `string`                  |              |
| defaultValue     | Anfangswert für eine unkontrollierte Komponente.                                                                                                                       |                  `string[]`                 |              |
| disabled         | Schaltet den `disabled`-Zustand um.                                                                                                                                    |                  `boolean`                  |              |
| errorMessage     | Fehlermeldungstext unter der unteren linken Ecke, der sich den Platz mit dem Notizcontainer teilt. Nur sichtbar, wenn `validationState` auf `"invalid"` gesetzt ist. |              `React.ReactNode`              |              |
| id               | `id` HTML-Attribut-Präfix für Eingabefelder. Die resultierende ID enthält auch den Teil `"-${index}"`.                                                                  |                   `string`                  |              |
| length           | Anzahl der Eingabefelder.                                                                                                                                              |                   `number`                  |     `4`      |
| mask             | Wenn auf `true` gesetzt, werden die Eingabewerte wie bei einem Passwortfeld maskiert.                                                                                  |                  `boolean`                  |              |
| name             | `name` HTML-Attribut für Eingabefelder.                                                                                                                                |                   `string`                  |              |
| form             | Das zugehörige Formular des zugrunde liegenden Eingabeelements.                                                                                                        |                   `string`                  |              |
| note             | Ein Element unter der unteren rechten Ecke, das sich den Platz mit dem Fehlercontainer teilt.                                                                         |              `React.ReactNode`              |              |
| onUpdate         | Callback, der aufgerufen wird, wenn sich eines der Eingabefelder ändert.                                                                                              |         `(value: string[]) => void`         |              |
| onUpdateComplete | Callback, der aufgerufen wird, wenn sich eines der Eingabefelder ändert und alle gefüllt sind.                                                                        |         `(value: string[]) => void`         |              |
| otp              | Wenn auf `true` gesetzt, wird `autocomplete="one-time-code"` zu den Eingabefeldern hinzugefügt.                                                                      |                  `boolean`                  |              |
| placeholder      | Platzhalter für Eingabefelder.                                                                                                                                         |                   `string`                  |              |
| qa               | `data-qa` HTML-Attribut für Testzwecke.                                                                                                                                |                   `string`                  |              |
| responsive       | Die Breite des übergeordneten Elements wird gleichmäßig auf die Eingabefelder verteilt.                                                                               |                  `boolean`                  |              |
| size             | Größe des Eingabefeldes.                                                                                                                                               |           `"s"` `"m"` `"l"` `"xl"`          |    `"m"`     |
| style            | `style` HTML-Attribut                                                                                                                                                  |            `React.CSSProperties`            |              |
| type             | Bestimmt, welche Eingabewertetypen zulässig sind.                                                                                                                     |         `"numeric"` `"alphanumeric"`        | `"numeric"`  |
| validationState  | Validierungsstatus, der das Erscheinungsbild der Komponente beeinflusst.                                                                                               |                 `"invalid"`                 |              |
| value            | Aktueller Wert für die kontrollierte Komponente.                                                                                                                       |                  `string[]`                 |              |
| `onFocus`        | Callback, der aufgerufen wird, wenn die Komponente den Fokus erhält.                                                                                                  | `(event: React.FocusEvent<Element>) => void` |              |
| `onBlur`         | Callback, der aufgerufen wird, wenn die Komponente den Fokus verliert.                                                                                                | `(event: React.FocusEvent<Element>) => void` |              |
