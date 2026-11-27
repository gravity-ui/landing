<!--GITHUB_BLOCK-->

# Tabs components

<!--/GITHUB_BLOCK-->

Die Tabs-Komponente wird verwendet, um Inhalte zu erkunden, zu organisieren und zwischen verschiedenen Ansichten zu wechseln.

```tsx
import {TabProvider, TabList, Tab, TabPanel} from '@gravity-ui/uikit';
```

<!--SANDBOX
import {useState} from 'react';
import {Tab, TabList, TabPanel, TabProvider} from '@gravity-ui/uikit';

export default function () {
    const [activeTab, setActiveTab] = useState('second');

    return (
        <TabProvider value={activeTab} onUpdate={setActiveTab}>
            <TabList>
                <Tab value="first">First Tab</Tab>
                <Tab value="second">Active Tab</Tab>
                <Tab value="third" disabled>
                    Disabled Tab
                </Tab>
            </TabList>
            <div>
                <TabPanel value="first">First Panel</TabPanel>
                <TabPanel value="second">Second Panel</TabPanel>
                <TabPanel value="third">Third Panel</TabPanel>
            </div>
        </TabProvider>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [activeTab, setActiveTab] = React.useState('second');

return (
  <TabProvider value={activeTab} onUpdate={setActiveTab}>
    <TabList>
      <Tab value="first">First Tab</Tab>
      <Tab value="second">Active Tab</Tab>
      <Tab value="third" disabled>
        Disabled Tab
      </Tab>
    </TabList>
    <div>
      <TabPanel value="first">First Panel</TabPanel>
      <TabPanel value="second">Second Panel</TabPanel>
      <TabPanel value="third">Third Panel</TabPanel>
    </div>
  </TabProvider>
);
```

<!--/GITHUB_BLOCK-->

### Komponenten

- [TabProvider](#tabprovider)
- [TabList](#tablist)
- [Tab](#tab)
- [TabPanel](#tabpanel)

## TabProvider

Eine Komponente, die die Funktionalität zur Auswahl von Tabs bereitstellt.

## Eigenschaften

| Name     | Beschreibung                                                    |      Typ       | Standard |
| :------- | :-------------------------------------------------------------- | :------------: | :------: |
| children | Liste von Tabs und Tab-Panels, wahrscheinlich mit einigen Wrappern | `React.ReactNode` |          |
| value    | Aktueller Tab-Wert                                              |    `string`    |          |
| onUpdate | Handler zum Aktualisieren des Tabs                              | `(value: string) => void` |          |

## TabList

Komponente, die als Container für eine Reihe von `tabs` dient.

### Größe

Um die Größe der `tabs` zu steuern, verwenden Sie die Eigenschaft `size`. Die Standardgröße ist `m`.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TabList value="second" size="m">
                <Tab value="first">M Size first</Tab>
                <Tab value="second">M Size second</Tab>
            </TabList>
            <TabList value="second" size="l">
                <Tab value="first">L Size first</Tab>
                <Tab value="second">L Size second</Tab>
            </TabList>
            <TabList value="second" size="xl">
                <Tab value="first">XL Size first</Tab>
                <Tab value="second">v Size second</Tab>
            </TabList>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="second" size="m">
    <Tab value="first">M Size first</Tab>
    <Tab value="second">M Size second</Tab>
</TabList>
<TabList value="second" size="l">
    <Tab value="first">L Size first</Tab>
    <Tab value="second">L Size second</Tab>
</TabList>
<TabList value="second" size="xl">
    <Tab value="first">XL Size first</Tab>
    <Tab value="second">v Size second</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Eigenschaften

`TabList` akzeptiert zusätzlich zu diesen alle gültigen `div`-Element-Eigenschaften:

| Name            | Beschreibung                                                                            |               Typ               | Standard |
| :-------------- | :-------------------------------------------------------------------------------------- | :-----------------------------: | :------: |
| children        | Liste von Tabs, wahrscheinlich mit einigen Wrappern                                      |        `React.ReactNode`        |          |
| value           | Aktueller Tab-Wert                                                                      |             `string`            |          |
| onUpdate        | Handler zum Aktualisieren des Tabs                                                      |    `(value: string) => void`    |          |
| className       | CSS-Klasse des Elements                                                                 |             `string`            |          |
| activateOnFocus | Tab beim Fokus aktivieren. Verwenden Sie dies nur, wenn der Inhalt des Panels sofort angezeigt werden kann. |           `boolean`           | `false`  |
| size            | Elementgröße                                                                            |     `"m"` `"l"` `"xl"`      |  `"m"`   |
| contentOverflow | Wie mit Elementen umgegangen wird, die horizontal nicht passen (umbruch, scrollen oder ein **Mehr**-Menü) | `"wrap"` `"scroll"` `"collapse"` | `"wrap"` |
| moreLabel       | Beschriftung für den Trigger zur Umbruch-Überlaufanzeige, wenn der aktive Tab in der Liste sichtbar ist |        `React.ReactNode`        | `"More"` |
| qa              | HTML `data-qa`-Attribut, verwendet in Tests                                             |             `string`            |          |

## Tab

Diese Komponente wird zum Rendern von Tab-Elementen verwendet.

### Icon

Wird verwendet, wenn Sie ein Symbol für ein Tab-Element anzeigen möchten.

<!--SANDBOX
import {Gear} from '@gravity-ui/icons';
import {Icon, Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" icon={<Icon size={16} data={Gear} />}>
                Tab with icon
            </Tab>
            <Tab value="second">Tab without icon</Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" icon={<Icon size={16} data={GearIcon} />}>
    Tab with icon
  </Tab>
  <Tab value="second">Tab without icon</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Zustände

Das Tab-Element hat eine Deaktivierungsflagge.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first">First Tab</Tab>
            <Tab value="second" disabled>
                Disabled Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first">First Tab</Tab>
  <Tab value="second" disabled>
    Disabled Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Zähler

Wird verwendet, wenn Sie eine Zahl für ein Tab-Element anzeigen möchten.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" counter={13}>
                First Tab
            </Tab>
            <Tab value="second" counter={3}>
                Second Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" counter={13}>
    First Tab
  </Tab>
  <Tab value="second" counter={3}>
    Second Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Beschriftung

Wird verwendet, wenn Sie eine Beschriftung für ein Tab-Element anzeigen möchten.

<!--SANDBOX
import {Tab, TabList} from '@gravity-ui/uikit';

export default function () {
    return (
        <TabList value="first">
            <Tab value="first" label={{content: 'Label 1'}}>
                First Tab
            </Tab>
            <Tab value="second" label={{content: 'Label 2'}}>
                Second Tab
            </Tab>
        </TabList>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" label={{content: 'Label 1'}}>
    First Tab
  </Tab>
  <Tab value="second" label={{content: 'Label 2'}}>
    Second Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Überlauf des Inhalts

Wird verwendet, wenn Sie Tab-Elemente einklappen möchten.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
    <Tab value="first">First Tab</Tab>
    <Tab value="second">Second Tab</Tab>
    <Tab value="third">Third Tab</Tab>
    <Tab value="fourth">Fourth Tab</Tab>
    <Tab value="fifth">Fifth Tab</Tab>
</TabList>
`}
>
    <UIKit.TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
        <UIKit.Tab value="first">First Tab</UIKit.Tab>
        <UIKit.Tab value="second">Second Tab</UIKit.Tab>
        <UIKit.Tab value="third">Third Tab</UIKit.Tab>
        <UIKit.Tab value="fourth">Fourth Tab</UIKit.Tab>
        <UIKit.Tab value="fifth">Fifth Tab</UIKit.Tab>
    </UIKit.TabList>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first" contentOverflow="collapse" style={{maxWidth: 320}}>
  <Tab value="first">First Tab</Tab>
  <Tab value="second">Second Tab</Tab>
  <Tab value="third">Third Tab</Tab>
  <Tab value="fourth">Fourth Tab</Tab>
  <Tab value="fifth">Fifth Tab</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### Eigenschaften

`Tab` akzeptiert zusätzlich zu diesen alle gültigen `button`- oder `a`-Element-Eigenschaften:

| Name      | Beschreibung                             |        Typ          | Standard |
| :-------- | :--------------------------------------- | :-----------------: | :------: |
| value     | Tab-Wert                                 |      `string`       |          |
| title     | Tab-Titel                                |      `string`       |          |
| icon      | Symbol, das am Anfang angezeigt wird     |  `React.ReactNode`  |          |
| counter   | Inhalt, der am Ende angezeigt wird      |  `number` `string`  |          |
| href      | Eine URL, zu der verlinkt werden soll.   |      `string `      |          |
| label     | `<Label>`, das am Ende angezeigt wird    |  `React.ReactNode`  |          |
| disabled  | Inaktiver Zustand                        |      `boolean`      |          |
| component | Überschreibt die Root-Komponente         | `React.ElementType` |          |
| children  | Inhalt des Tabs                          |  `React.ReactNode`  |          |
| qa        | HTML `data-qa`-Attribut, verwendet in Tests |      `string`       |          |

## TabPanel

Ist ein Container-Element für Inhalte, die einem Tab zugeordnet sind.

### Eigenschaften

`TabPanel` akzeptiert alle gültigen `div`-Element-Eigenschaften zusätzlich zu diesen:

| Name     | Beschreibung           |       Typ        | Standard |
| :------- | :--------------------- | :--------------: | :------: |
| children | Inhalt des Panels      | `React.ReactNode` |          |
| value    | Aktiver Tab-Wert       |     `string`     |          |
| qa       | HTML `data-qa`-Attribut, verwendet in Tests |     `string`     |          |

## CSS API

| Name                             | Beschreibung               |
| :------------------------------- | :------------------------- |
| `--g-tabs-border-width`          | Tabs-Randbreite            |
| `--g-tabs-item-height`           | Tabs-Element-Höhe          |
| `--g-tabs-item-border-width`     | Tabs-Element-Randbreite    |
| `--g-tabs-item-gap`              | Abstand zwischen Tabs      |
| `--g-tabs-vertical-item-height`  | Vertikale Tabs-Element-Höhe |
| `--g-tabs-vertical-item-padding` | Vertikale Tabs-Element-Abstand |
