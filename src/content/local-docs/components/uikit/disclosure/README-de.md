<!--GITHUB_BLOCK-->

# Disclosure

<!--/GITHUB_BLOCK-->

`Disclosure` ist eine aufklappbare Komponente, die es ermöglicht, ihren verschachtelten Inhalt anzuzeigen und auszublenden.

```tsx
import {Disclosure} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## Base example

```tsx
<Disclosure summary="Summary">Content</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Steuerung des Erweiterungszustands

Sie können den Erweiterungszustand mit den Eigenschaften `expanded` und `onUpdate` steuern.

Beispiel für eine gesteuerte Komponente:

<!--SANDBOX
import {Disclosure} from '@gravity-ui/uikit';

export default function () {
    return (
        <Disclosure summary="Summary" defaultExpanded>
            Content
        </Disclosure>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledDisclosure() {
  const [expanded, setExpanded] = React.useState(true);

  return (
    <Disclosure summary="Summary" expanded={expanded} onUpdate={setExpanded}>
      Content
    </Disclosure>
  );
}
```

<!--/GITHUB_BLOCK-->

## Größe

Verwenden Sie die Eigenschaft `size`, um die Größe von `Disclosure` zu steuern. Die Standardgröße ist `m`.

<!--SANDBOX
import {Disclosure, Flex} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure summary="Middle size" size="m">
                Content
            </Disclosure>
            <Disclosure summary="Large size" size="l">
                Content
            </Disclosure>
            <Disclosure summary="Extra large size" size="xl">
                Content
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Middle size" size="m">
  Content
</Disclosure>
<Disclosure summary="Large size" size="l">
  Content
</Disclosure>
<Disclosure summary="Extra large size" size="xl">
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Pfeilposition

`start`: Der Pfeil wird am Anfang des Headers positioniert (Standard).

`end`: Der Pfeil wird am Ende des Headers positioniert.

<!--SANDBOX
import {Disclosure, Flex} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure summary="Summary with start arrow" arrowPosition="start">
                Content
            </Disclosure>
            <Disclosure summary="Summary with end arrow" arrowPosition="end">
                Content
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Summary with start arrow" arrowPosition="start">
  Content
</Disclosure>
<Disclosure summary="Summary with end arrow" arrowPosition="end">
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Benutzerdefinierter Inhalt

Verwenden Sie die Komponente `Disclosure.Summary`, um eine benutzerdefinierte Kopfzeile zu erstellen, und `Disclosure.Details`, um benutzerdefinierten Inhalt bereitzustellen.

<!--SANDBOX
import {Check} from '@gravity-ui/icons';
import {Button, Disclosure, Flex, Icon} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure>
                <Disclosure.Summary>
                    {(props) => (
                        <Button {...props}>
                            <Icon data={Check} size={14} />
                            Custom summary
                            <Icon data={Check} size={14} />
                        </Button>
                    )}
                </Disclosure.Summary>
                <div>Custom details</div>
                <div>More custom details</div>
            </Disclosure>
            <Disclosure summary="Summary">
                <Disclosure.Summary>
                    {(_props, defaultButton) => (
                        <Flex gap={4}>
                            {defaultButton}
                            <Icon data={Check} size={14} />
                        </Flex>
                    )}
                </Disclosure.Summary>
                <Disclosure.Details>Custom Details</Disclosure.Details>
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure>
  <Disclosure.Summary>
    {(props) => (
      <Button {...props}>
        <Icon data={Check} size={14} />
        Custom summary
        <Icon data={Check} size={14} />
      </Button>
    )}
  </Disclosure.Summary>
  <div>Custom details</div>
  <div>More custom details</div>
</Disclosure>
```

```tsx
<Disclosure>
  <Disclosure.Summary>
    {(_props, defaultButton) => (
      <Flex gap={4}>
        {defaultButton}
        <Icon data={Check} size={14} />
      </Flex>
    )}
  </Disclosure.Summary>
  <Disclosure.Details>Custom Details</Disclosure.Details>
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Deaktivierter Zustand

`Disclosure` kann mit der Eigenschaft `disabled` deaktiviert werden.

<!--SANDBOX
import {Disclosure} from '@gravity-ui/uikit';

export default function () {
    return (
        <Disclosure summary="Summary" disabled>
            Content
        </Disclosure>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Summary" disabled>
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

### Disclosure

| Name             | Beschreibung                                                              | Typ                                                  | Standardwert |
| :--------------- | :------------------------------------------------------------------------ | :--------------------------------------------------- | :----------- |
| size             | Komponentengröße                                                          | `"m"` `"l"` `"xl"`                                   | `"m"`        |
| className        | CSS-Klassenname des Root-Elements                                         | `string`                                             |              |
| disabled         | Deaktivierter Zustand                                                     | `boolean`                                            | `false`      |
| defaultExpanded  | Standard-Öffnungszustand                                                  | `boolean`                                            | `false`      |
| expanded         | Gesteuerter Öffnungszustand                                               | `boolean`                                            |              |
| arrowPosition    | Steuerung der Position                                                    | `"start"` `"end"`                                    | `"start"`    |
| summary          | Zusammenfassung des Inhalts                                               | `React.ReactNode`                                    |              |
| keepMounted      | Inhalt auch im eingeklappten Zustand im DOM behalten                      | `boolean`                                            | `true`       |
| onUpdate         | Callback, der ausgelöst wird, wenn sich der Erweiterungs-/Einklappzustand ändert. | `(expanded: boolean) => void`                        |              |
| onSummaryKeyDown | Callback, der bei Tastaturereignissen ausgelöst wird, wenn die Zusammenfassung fokussiert ist. | `(e: React.KeyboardEvent<HTMLButtonElement>) => void` |              |
| children         | Inhalt                                                                    | `React.ReactNode`                                    |              |
| qa               | Test-Identifikator                                                        | `string`                                             |              |

### Disclosure.Summary

| Name     | Beschreibung                                | Typ                                            | Standardwert         |
| :------- | :------------------------------------------ | :--------------------------------------------- | :------------------- |
| children | Render-Funktion                             | `(props, defaultSummary) => React.ReactElement` |                      |
| qa       | Test-Identifikator                          | `string`                                       | `disclosure-summary` |

### Disclosure.Details

| Name     | Beschreibung                               | Typ               | Standardwert             |
| :------- | :----------------------------------------- | :---------------- | :----------------------- |
| children | Inhalt                                     | `React.ReactNode` |                          |
| qa       | Test-Identifikator                         | `string`          | `disclosure-details`     |

## CSS API

| Name                                 | Beschreibung                                             |
| :----------------------------------- | :------------------------------------------------------- |
| `--g-disclosure-text-color`          | Textfarbe für die Inhaltszusammenfassung                 |
| `--g-disclosure-text-color-disabled` | Textfarbe für die Inhaltszusammenfassung im deaktivierten Zustand |
