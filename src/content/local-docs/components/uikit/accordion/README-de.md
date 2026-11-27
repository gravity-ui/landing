<!--GITHUB_BLOCK-->

# Accordion

<!--/GITHUB_BLOCK-->

Die Accordion-Komponente ermöglicht es Ihnen, ausklappbare Inhaltsbereiche zu erstellen, in denen Benutzer Informationen ein- oder ausblenden können. Dies ist nützlich, um große Mengen an Inhalten kompakt zu organisieren.

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## Base example

```tsx
<Accordion>
  <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
  <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
  <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Steuerung des Zustands des Akkordeons

Sie können den Zustand des Akkordeons über die Eigenschaften `value` und `onUpdate` der Stammkomponente oder pro Element steuern.

Beispiel für die Steuerung des Zustands von der Stammkomponente aus:

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [value, setValue] = useState<string | null>('item1');

    return (
        <Accordion value={value} onUpdate={setValue}>
            <Accordion.Item summary="Settings" value="item1">
                Configure your application settings
            </Accordion.Item>
            <Accordion.Item summary="Notifications" value="item2">
                Manage notification preferences
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledAccordion() {
  const [value, setValue] = React.useState('item1');

  return (
    <Accordion value={value} onUpdate={setValue}>
      <Accordion.Item summary="Settings" value="item1">
        Configure your application settings
      </Accordion.Item>
      <Accordion.Item summary="Notifications" value="item2">
        Manage notification preferences
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

Beispiel für die Steuerung des Zustands pro Element über die `expanded`-Eigenschaft:

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);

    return (
        <Accordion>
            <Accordion.Item
                summary="Settings"
                onUpdate={setItem1}
                value="item1"
                expanded={item1}
            >
                Configure your application settings
            </Accordion.Item>
            <Accordion.Item
                summary="Notifications"
                onUpdate={setItem2}
                value="item2"
                expanded={item2}
            >
                Manage notification preferences
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledAccordion() {
  const [item1, setItem1] = React.useState(true);
  const [item2, setItem2] = React.useState(false);
  return (
    <Accordion>
      <Accordion.Item summary="Settings" onUpdate={setItem1} value="item1" expanded={item1}>
        Configure your application settings
      </Accordion.Item>
      <Accordion.Item summary="Notifications" onUpdate={setItem2} value="item2" expanded={item2}>
        Manage notification preferences
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

## Größe

Verwenden Sie die Eigenschaft `size`, um die Größe des `Accordion` zu steuern. Die Standardgröße ist `m`.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion size="m">
                <Accordion.Item summary="Medium Size">Content for medium accordion</Accordion.Item>
            </Accordion>
            <Accordion size="l">
                <Accordion.Item summary="Large Size">Content for large accordion</Accordion.Item>
            </Accordion>
            <Accordion size="xl">
                <Accordion.Item summary="Extra Large Size">
                    Content for extra large accordion
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion size="m">
    <Accordion.Item summary="Medium Size">
        Content for medium accordion
    </Accordion.Item>
</Accordion>
<Accordion size="l">
    <Accordion.Item summary="Large Size">
        Content for large accordion
    </Accordion.Item>
</Accordion>
<Accordion size="xl">
    <Accordion.Item summary="Extra Large Size">
        Content for extra large accordion
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Ansicht

`solid`: Hauptansicht mit Hintergrund (Standard).

`top-bottom`: Ansicht mit oberem und unterem Rand.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion view="solid">
                <Accordion.Item summary="Solid View">Content with solid background</Accordion.Item>
                <Accordion.Item summary="Another Item">More content</Accordion.Item>
            </Accordion>
            <Accordion view="top-bottom">
                <Accordion.Item summary="Top-Bottom View">
                    Content with top-bottom borders
                </Accordion.Item>
                <Accordion.Item summary="Another Item">More content</Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion view="solid">
    <Accordion.Item summary="Solid View">
        Content with solid background
    </Accordion.Item>
    <Accordion.Item summary="Another Item">
        More content
    </Accordion.Item>
</Accordion>
<Accordion view="top-bottom">
    <Accordion.Item summary="Top-Bottom View">
        Content with top-bottom borders
    </Accordion.Item>
    <Accordion.Item summary="Another Item">
        More content
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Pfeilposition

`end`: Der Pfeil ist am Ende des Headers positioniert (Standard).

`start`: Der Pfeil ist am Anfang des Headers positioniert.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion arrowPosition="end">
                <Accordion.Item summary="Arrow at End">Content with arrow at the end</Accordion.Item>
            </Accordion>
            <Accordion arrowPosition="start">
                <Accordion.Item summary="Arrow at Start">
                    Content with arrow at the start
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion arrowPosition="end">
    <Accordion.Item summary="Arrow at End">
        Content with arrow at the end
    </Accordion.Item>
</Accordion>
<Accordion arrowPosition="start">
    <Accordion.Item summary="Arrow at Start">
        Content with arrow at the start
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Mehrere

Die Eigenschaft `multiple` ermöglicht es, dass mehrere Akkordeon-Elemente gleichzeitig erweitert werden können.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion multiple>
            <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
            <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
            <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion multiple>
  <Accordion.Item summary="First Item">Content of the first item</Accordion.Item>
  <Accordion.Item summary="Second Item">Content of the second item</Accordion.Item>
  <Accordion.Item summary="Third Item">Content of the third item</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Benutzerdefinierte Zusammenfassung

Verwenden Sie die Komponente `Accordion.Summary`, um eine benutzerdefinierte Kopfzeile zu erstellen.

<!--SANDBOX
import {Accordion, Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion>
            <Accordion.Item value="custom">
                <Accordion.Summary>
                    {(props) => (
                        <Button {...props} view="flat" width="max">
                            Custom Summary Button
                        </Button>
                    )}
                </Accordion.Summary>
                Content with custom summary component
            </Accordion.Item>
            <Accordion.Item summary="Regular Summary">
                Content with regular summary prop
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item value="custom">
    <Accordion.Summary>
      {(props) => (
        <Button {...props} view="flat" width="max">
          <Icon data={Settings} size={16} />
          Custom Summary Button
        </Button>
      )}
    </Accordion.Summary>
    Content with custom summary component
  </Accordion.Item>
  <Accordion.Item summary="Regular Summary">Content with regular summary prop</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Deaktivierter Zustand

Einzelne Akkordeon-Elemente können über die Eigenschaft `disabled` deaktiviert werden.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion>
            <Accordion.Item summary="Active Item">
                This item is active and can be expanded
            </Accordion.Item>
            <Accordion.Item summary="Disabled Item" disabled>
                This item is disabled and cannot be expanded
            </Accordion.Item>
        </Accordion>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item summary="Active Item">This item is active and can be expanded</Accordion.Item>
  <Accordion.Item summary="Disabled Item" disabled>
    This item is disabled and cannot be expanded
  </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

### Accordion

| Name          | Beschreibung                                        |            Typ            |  Standard  |
| :------------ | :------------------------------------------------- | :------------------------: | :-------: |
| size          | Akkordeon-Größe                                    |     `"m"` `"l"` `"xl"`     |   `"m"`   |
| view          | Akkordeon-Erscheinungsbild                         |  `"solid"` `"top-bottom"`  | `"solid"` |
| multiple      | Ermöglicht das gleichzeitige Erweitern mehrerer Elemente |         `boolean`          |  `false`  |
| arrowPosition | Position des Pfeilindikators                       |     `"start"` `"end"`      |  `"end"`  |
| defaultValue  | Standardwert für ungesteuerten Zustand             | `string` `string[]` `null` |           |
| value         | Aktueller Wert für gesteuerten Zustand             | `string` `string[]` `null` |           |
| onUpdate      | Callback-Funktion, die aufgerufen wird, wenn sich der Zustand ändert |         `Function`         |           |
| ariaLevel     | Überschriftenebene für Barrierefreiheit            |          `number`          |    `3`    |
| className     | CSS-Klassenname                                    |          `string`          |           |
| qa            | HTML `data-qa`-Attribut, verwendet für Tests       |          `string`          |           |

### Accordion.Item

| Name            | Beschreibung                                      |       Type        | Standard |
| :-------------- | :----------------------------------------------- | :---------------: | :------: |
| value           | Eindeutiger Bezeichner für das Element            |     `string`      |          |
| summary         | Kopfzeile des Akkordeon-Elements                  | `React.ReactNode` |          |
| expanded        | Gesteuerter erweiterter Zustand                   |     `boolean`     |          |
| defaultExpanded | Standardmäßiger erweiterter Zustand               |     `boolean`     |          |
| disabled        | Deaktiviert das Akkordeon-Element                 |     `boolean`     | `false`  |
| keepMounted     | Inhalt im DOM behalten, auch wenn eingeklappt     |     `boolean`     |          |
| onUpdate        | Callback-Funktion, die aufgerufen wird, wenn sich der Zustand des Elements ändert |    `Function`     |          |
| className       | CSS-Klassenname                                   |     `string`      |          |
| qa              | HTML `data-qa`-Attribut, verwendet für Tests      |     `string`      |          |

### Accordion.Summary

| Name     | Beschreibung                                                                             |                      Typ                       |                                          Standard                                          |
| :------- | :--------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | Benutzerdefinierte Renderfunktion für die Zusammenfassung                                | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | HTML `data-qa`-Attribut, das für Tests verwendet wird. Funktioniert nur, wenn `qa` in Accordion.Item übergeben wird |                    `string`                     | `${accordion-item}-summary` wenn `qa` in Accordion.Item übergeben wird, `disclosure-summary` wenn nicht |

## CSS API

| Name                           | Beschreibung                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | Inline (horizontale) Polsterung für das Akkordeon |
