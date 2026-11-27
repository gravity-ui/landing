<!--GITHUB_BLOCK-->

# Stepper

<!--/GITHUB_BLOCK-->

`Stepper` führt den Benutzer durch eine Abfolge nummerierter Schritte und zeigt den Fortschritt in einem Assistenten-ähnlichen, mehrstufigen Workflow an.

```tsx
import {Stepper} from '@gravity-ui/uikit';
```

## Beispiel

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item>Step 2</Stepper.Item>
            <Stepper.Item>Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item>Step 2</Stepper.Item>
  <Stepper.Item>Step 3</Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperDefault />

<!--/GITHUB_BLOCK-->

### Interaktive Elemente

Verwenden Sie die Props `onUpdate` und `value` mit benutzerdefiniertem Zustand, um Schritte zu manipulieren.

<!--SANDBOX
import {useState} from 'react';
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    const [value, setValue] = useState(0);

    return (
        <Stepper value={value} onUpdate={setValue}>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item>Step 2</Stepper.Item>
            <Stepper.Item>Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [value, setValue] = React.useState();

return (
  <Stepper value={value} onUpdate={setValue}>
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
    <Stepper.Item>Step 4 with very long title</Stepper.Item>
  </Stepper>
);
```

<!-- Storybook example -->

<StepperInteractiveShowcase />

<!--/GITHUB_BLOCK-->

### Verschiedene Ansichten

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item view="error">Step 2</Stepper.Item>
            <Stepper.Item view="error">Step 3</Stepper.Item>
            <Stepper.Item view="success">Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item view="error">Step 2</Stepper.Item>
  <Stepper.Item view="error">Step 3</Stepper.Item>
  <Stepper.Item view="success">Step 4</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperView/>

<!--/GITHUB_BLOCK-->

### Verschiedene Größen

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper size="l">
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item>Step 2</Stepper.Item>
            <Stepper.Item>Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Flex direction="column" gap={4}>
  <Stepper {...args} size="s">
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
  </Stepper>

  <Stepper {...args} size="m">
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
  </Stepper>

  <Stepper {...args} size="l">
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
  </Stepper>
</Flex>
```

<!-- Storybook example -->

<StepperSize/>

<!--/GITHUB_BLOCK-->

### Deaktivierte Schritte

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item disabled>Step 2</Stepper.Item>
            <Stepper.Item disabled>Step 3</Stepper.Item>
            <Stepper.Item disabled>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item disabled>Step 2</Stepper.Item>
  <Stepper.Item disabled>Step 3</Stepper.Item>
  <Stepper.Item disabled>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperDisabled/>

<!--/GITHUB_BLOCK-->

### Benutzerdefinierte Icons

<!--SANDBOX
import {Cloud, Gear, Hammer, Rocket} from '@gravity-ui/icons';
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item icon={Gear}>Step 1</Stepper.Item>
            <Stepper.Item icon={Rocket}>Step 2</Stepper.Item>
            <Stepper.Item icon={Cloud}>Step 3</Stepper.Item>
            <Stepper.Item icon={Hammer}>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item icon={Gear}>Step 1</Stepper.Item>
  <Stepper.Item view="error" icon={Gear}>
    Step 2
  </Stepper.Item>
  <Stepper.Item view="success" icon={Gear}>
    Step 3
  </Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperCustomIcons/>

<!--/GITHUB_BLOCK-->

### Benutzerdefinierter Schritttrenner

<!--SANDBOX
import {Stepper, Text} from '@gravity-ui/uikit';

const Separator = () => {
    return <Text color="secondary">{'->'}</Text>;
};

export default function () {
    return (
        <Stepper separator={<Separator />}>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item view="error">Step 2</Stepper.Item>
            <Stepper.Item view="success">Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const Separator = () => {
  return <Text color="secondary">{'->'}</Text>;
};

<Stepper {...args} separator={<Separator />}>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item view="error">Step 2</Stepper.Item>
  <Stepper.Item view="success">Step 3</Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>;
```

<!-- Storybook example -->

<StepperCustomSeparator/>

<!--/GITHUB_BLOCK-->

### Schritt mit schwebendem Element

<!--SANDBOX
import {Stepper, Tooltip} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Tooltip content="fancy step with tooltip">
                <Stepper.Item>Step 1</Stepper.Item>
            </Tooltip>
            <Stepper.Item view="error">Step 2</Stepper.Item>
            <Stepper.Item view="success">Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper {...args}>
  <Tooltip content="fancy step with tooltip">
    <Stepper.Item>Step 1</Stepper.Item>
  </Tooltip>
  <Stepper.Item view="error">Step 2</Stepper.Item>
  <Stepper.Item view="success">Step 3</Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperWithFloatingElements/>

<!--/GITHUB_BLOCK-->

## Eigenschaften (Props)

| Name             | Beschreibung                                               |                  Typ                  | Standardwert |
| :--------------- | :-------------------------------------------------------- | :------------------------------------: | :----------: |
| children         | Stepper-Elemente.                                         | `React.ReactElement<StepperItemProps>` |              |
| size             | Legt die Größe des `Step` fest.                           |           `"s"` `"m"` `"l"`            |    `"s"`     |
| value            | Aktuell ausgewählte `Step`-ID.                            |           `number` `string`            |              |
| onUpdate         | Funktion zum Ändern des aktuellen `Step`.                 |               `Function`               |              |
| qa               | `data-qa` HTML-Attribut, wird für Tests verwendet.        |                `string`                |              |
| separator        | Benutzerdefiniertes Trennelement.                          |           `React.ReactNode`            |              |
| className        | CSS-Klassenname für den Stepper-Container.                |                `string`                |              |
| style            | Legt Inline-Stile für den Stepper-Container fest.         |            `CSSProperties`             |              |
| aria-label       | Definiert einen Zeichenkettenwert, der das aktuelle Element beschriftet. |                `string`                |              |
| aria-labelledby  | Identifiziert das/die Element(e), das/die das aktuelle Element beschriftet. |                `string`                |              |
| aria-describedby | Identifiziert das/die Element(e), das/die das Objekt beschreibt. |                `string`                |              |

### StepperItemProps

| Name      | Beschreibung                               |              Typ              | Standardwert |
| :-------- | :----------------------------------------- | :----------------------------: | :----------: |
| id        | Legt die `Step`-ID fest. Standardmäßig der Index des Array-Elements. |       `string` `number`        |              |
| view      | Legt die Ansicht des `Step` fest.          | `"idle"` `"error"` `"success"` |   `"idle"`   |
| children  | Inhalt des `Step`.                         |          `React.Node`          |              |
| disabled  | Bestimmt, ob der `Step` deaktiviert ist.   |           `boolean`            |              |
| icon      | Benutzerdefiniertes Icon-Element.           |         `SVGIconData`          |              |
| onClick   | Klick-Handler für den Schritt.             |   `React.MouseEventHandler`    |              |
| className | CSS-Klassenname für das Element.           |            `string`            |              |

### CSS API

| Name                              | Beschreibung                               |
| :-------------------------------- | :----------------------------------------- |
| `--g-stepper-gap`                 | Abstand zwischen Schritt-Elementen und Trennlinie. |
| `--g-stepper-item-text-max-width` | Maximale Breite des Textes eines Schritt-Elements. |
