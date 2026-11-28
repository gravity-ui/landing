<!--GITHUB_BLOCK-->

# Menu

<!--/GITHUB_BLOCK-->

Der `Menu`-Komponente ermöglicht die einfache Erstellung von Ansichten für Aktionslisten.

```tsx
import {Menu} from '@gravity-ui/uikit';
```

Sie verfügt über dedizierte Komponenten für Elemente (`Menu.Item`) und Gruppen (`Menu.Group`). Sie können diese kombinieren, um komplexere Menüs zu erstellen.

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item>First</Menu.Item>
            <Menu.Item>Second</Menu.Item>
            <Menu.Group label="Group">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item>First</Menu.Item>
  <Menu.Item>Second</Menu.Item>
  <Menu.Group label="Group">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
</Menu>
```

<!--/GITHUB_BLOCK-->

### Größe

Diese Eigenschaft wird verwendet, um die Menügröße auszuwählen. Der Standardwert ist `m`.

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Menu size="s">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
            <Menu size="m">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
            <Menu size="l">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
            <Menu size="xl">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu size="s">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>

<Menu size="m">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>

<Menu size="l">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>

<Menu size="xl">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

| Name      | Beschreibung                                |           Typ           | Standard |
| :-------- | :------------------------------------------ | :---------------------: | :------: |
| size      | Menügröße                                   | `"s"` `"m"` `"l"` `"xl"` |  `"m"`   |
| children  | Kindelement                                 |    `React.ReactNode`    |          |
| className | `class`-HTML-Attribut                       |        `string`         |          |
| style     | `style`-HTML-Attribut                       |  `React.CSSProperties`  |          |
| qa        | `data-qa`-HTML-Attribut, für Tests verwendet |        `string`         |          |

## Menu.Item

Diese Eigenschaft wird zum Rendern von Menüelementen verwendet.

### Symbol

Verwenden Sie die Eigenschaft `iconStart` oder `iconEnd`, um ein Symbol am Anfang oder Ende eines Menüelements anzuzeigen:

<!--SANDBOX
import {Gear, TriangleExclamation} from '@gravity-ui/icons';
import {Icon, Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Menu>
                <Menu.Item iconStart={<Icon size={16} data={Gear} />}>Item with icon</Menu.Item>
                <Menu.Item>Item without icon</Menu.Item>
            </Menu>
            <Menu>
                <Menu.Item iconEnd={<Icon size={16} data={TriangleExclamation} />}>
                    Item with icon
                </Menu.Item>
                <Menu.Item>Item without icon</Menu.Item>
            </Menu>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item iconStart={<Icon size={16} data={GearIcon} />}>Item with icon</Menu.Item>
  <Menu.Item>Item without icon</Menu.Item>
</Menu>
```

```tsx
<Menu>
  <Menu.Item iconEnd={<Icon size={16} data={TriangleExclamation} />}>Item with icon</Menu.Item>
  <Menu.Item>Item without icon</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### Zustände

Mit dieser Eigenschaft können Sie bestimmte Menüelemente aktivieren oder deaktivieren (ausgrauen):

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item disabled>First</Menu.Item>
            <Menu.Item>Second</Menu.Item>
            <Menu.Item selected>Third</Menu.Item>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item disabled>First</Menu.Item>
  <Menu.Item>Second</Menu.Item>
  <Menu.Item selected>Third</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### Thema

Dies ermöglicht es Ihnen, das Thema des Menüelements zu ändern. Das Standardthema ist `normal`.

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item theme="danger">First</Menu.Item>
            <Menu.Item theme="normal">Second</Menu.Item>
            <Menu.Item>Third</Menu.Item>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item theme="danger">First</Menu.Item>
  <Menu.Item theme="normal">Second</Menu.Item>
  <Menu.Item>Third</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### Eigenschaften

| Name             | Beschreibung                                       |           Typ            |  Standardwert  |
| :--------------- | :------------------------------------------------- | :----------------------: | :------------: |
| iconStart        | Menü-Icon vor dem Elementtext                      |        `ReactNode`       |                |
| iconEnd          | Menü-Icon nach dem Elementtext                     |        `ReactNode`       |                |
| selected         | Flag für ausgewähltes Menüelement                  |         `boolean`        |    `false`     |
| disabled         | Flag für deaktiviertes Menüelement                 |         `boolean`        |    `false`     |
| active           | Flag für aktives Menüelement                       |         `boolean`        |    `false`     |
| href             | URL                                                |         `string`         |                |
| title            | Titel-Attribut                                     |         `string`         |                |
| target           | Target-Attribut                                    |         `string`         |                |
| rel              | Rel-Attribut                                       |         `string`         |                |
| onClick          | Handler für das onclick-Ereignis                   | `React.MouseEventHandler` |                |
| theme            | Thema des Menüelements                             |   `"normal"` `"danger"`  |   `"normal"`   |
| children         | Kindelement                                        |     `React.ReactNode`    |                |
| className        | `class`-HTML-Attribut für das Root-Element        |         `string`         |                |
| contentClassName | `class`-HTML-Attribut für das Content-Element     |         `string`         |                |
| style            | `style`-HTML-Attribut                              |   `React.CSSProperties`  |                |
| qa               | `data-qa`-HTML-Attribut, für Tests verwendet       |         `string`         |                |
| extraProps       | Zusätzliche HTML-Attribute                         |         `Record`         |                |

## Menu.Group

Sie können Elemente nach Themen innerhalb eines einzelnen Menüs gruppieren:

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item>First</Menu.Item>
            <Menu.Group label="Group One">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
            <Menu.Group label="Group Two">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
            <Menu.Item>Middle</Menu.Item>
            <Menu.Group label="Group Three">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
            <Menu.Item>Last</Menu.Item>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item>First</Menu.Item>
  <Menu.Group label="Group One">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
  <Menu.Group label="Group Two">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
  <Menu.Item>Middle</Menu.Item>
  <Menu.Group label="Group Three">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
  <Menu.Item>Last</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### Eigenschaften

| Name      | Beschreibung                               |         Typ          | Standardwert |
| :-------- | :----------------------------------------- | :------------------: | :----------: |
| label     | Bezeichnung der Menügruppe                 |       `string`       |              |
| children  | Kindelement                                |   `React.ReactNode`  |              |
| className | `class`-HTML-Attribut                      |       `string`       |              |
| style     | `style`-HTML-Attribut                      | `React.CSSProperties`|              |
| qa        | `data-qa`-HTML-Attribut, für Tests verwendet |       `string`       |              |
