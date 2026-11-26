<!--/GITHUB_BLOCK-->

# Akkordeon

<!--/GITHUB_BLOCK-->

Die Akkordeon-Komponente ermöglicht es Ihnen, kollabierbare Inhaltsbereiche zu erstellen, in denen Benutzer Informationsabschnitte ein- oder ausblenden können. Dies ist nützlich, um große Mengen an Inhalten kompakt zu organisieren.

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## Basisbeispiel

```tsx
<Accordion>
  <Accordion.Item summary="Erster Eintrag">Inhalt des ersten Eintrags</Accordion.Item>
  <Accordion.Item summary="Zweiter Eintrag">Inhalt des zweiten Eintrags</Accordion.Item>
  <Accordion.Item summary="Dritter Eintrag">Inhalt des dritten Eintrags</Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Steuerung des Akkordeon-Zustands

Sie können den Zustand des Akkordeons über die Eigenschaften `value` und `onUpdate` der Stammkomponente oder pro Eintrag steuern.

Beispiel für die Steuerung des Zustands von der Stammkomponente aus:

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [value, setValue] = useState<string | null>('item1');

    return (
        <Accordion value={value} onUpdate={setValue}>
            <Accordion.Item summary="Einstellungen" value="item1">
                Konfigurieren Sie Ihre Anwendungseinstellungen
            </Accordion.Item>
            <Accordion.Item summary="Benachrichtigungen" value="item2">
                Verwalten Sie Ihre Benachrichtigungseinstellungen
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
      <Accordion.Item summary="Einstellungen" value="item1">
        Konfigurieren Sie Ihre Anwendungseinstellungen
      </Accordion.Item>
      <Accordion.Item summary="Benachrichtigungen" value="item2">
        Verwalten Sie Ihre Benachrichtigungseinstellungen
      </Accordion.Item>
    </Accordion>
  );
}
```

<!--/GITHUB_BLOCK-->

Beispiel für die Steuerung des Zustands pro Eintrag über die `expanded`-Eigenschaft:

<!--SANDBOX
import {useState} from 'react';
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);

    return (
        <Accordion>
            <Accordion.Item
                summary="Einstellungen"
                onUpdate={setItem1}
                value="item1"
                expanded={item1}
            >
                Konfigurieren Sie Ihre Anwendungseinstellungen
            </Accordion.Item>
            <Accordion.Item
                summary="Benachrichtigungen"
                onUpdate={setItem2}
                value="item2"
                expanded={item2}
            >
                Verwalten Sie Ihre Benachrichtigungseinstellungen
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
      <Accordion.Item summary="Einstellungen" onUpdate={setItem1} value="item1" expanded={item1}>
        Konfigurieren Sie Ihre Anwendungseinstellungen
      </Accordion.Item>
      <Accordion.Item summary="Benachrichtigungen" onUpdate={setItem2} value="item2" expanded={item2}>
        Verwalten Sie Ihre Benachrichtigungseinstellungen
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
                <Accordion.Item summary="Mittlere Größe">Inhalt für mittleres Akkordeon</Accordion.Item>
            </Accordion>
            <Accordion size="l">
                <Accordion.Item summary="Große Größe">Inhalt für großes Akkordeon</Accordion.Item>
            </Accordion>
            <Accordion size="xl">
                <Accordion.Item summary="Extra große Größe">
                    Inhalt für extra großes Akkordeon
                </Accordion.Item>
            </Accordion>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion size="m">
    <Accordion.Item summary="Mittlere Größe">
        Inhalt für mittleres Akkordeon
    </Accordion.Item>
</Accordion>
<Accordion size="l">
    <Accordion.Item summary="Große Größe">
        Inhalt für großes Akkordeon
    </Accordion.Item>
</Accordion>
<Accordion size="xl">
    <Accordion.Item summary="Extra große Größe">
        Inhalt für extra großes Akkordeon
    </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Ansicht

`solid`: Hauptansicht mit Hintergrund (Standard).

`top-bottom`: Ansicht mit oberen und unteren Rändern.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion view="solid">
                <Accordion.Item summary="Solid View">Inhalt mit solidem Hintergrund</Accordion.Item>
                <Accordion.Item summary="Another Item">Mehr Inhalt</Accordion.Item>
            </Accordion>
            <Accordion view="top-bottom">
                <Accordion.Item summary="Top-Bottom View">
                    Inhalt mit oberen und unteren Rändern
                </Accordion.Item>
                <Accordion.Item summary="Another Item">Mehr Inhalt</Accordion.Item>
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

`end`: Der Pfeil wird am Ende des Headers positioniert (Standard).

`start`: Der Pfeil wird am Anfang des Headers positioniert.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Accordion arrowPosition="end">
                <Accordion.Item summary="Pfeil am Ende">Inhalt mit Pfeil am Ende</Accordion.Item>
            </Accordion>
            <Accordion arrowPosition="start">
                <Accordion.Item summary="Pfeil am Anfang">
                    Inhalt mit Pfeil am Anfang
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

Die Eigenschaft `multiple` ermöglicht es, mehrere Akkordeon-Elemente gleichzeitig zu erweitern.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

export default function () {
    return (
        <Accordion multiple>
            <Accordion.Item summary="Erstes Element">Inhalt des ersten Elements</Accordion.Item>
            <Accordion.Item summary="Zweites Element">Inhalt des zweiten Elements</Accordion.Item>
            <Accordion.Item summary="Drittes Element">Inhalt des dritten Elements</Accordion.Item>
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
                            Benutzerdefinierter Zusammenfassungsbutton
                        </Button>
                    )}
                </Accordion.Summary>
                Inhalt mit benutzerdefinierter Zusammenfassungskomponente
            </Accordion.Item>
            <Accordion.Item summary="Reguläre Zusammenfassung">
                Inhalt mit regulärer Zusammenfassungs-Prop
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

Einzelne Akkordeon-Elemente können mit der Eigenschaft `disabled` deaktiviert werden.

<!--SANDBOX
import {Accordion} from '@gravity-ui/uikit';

```jsx
export default function () {
    return (
        <Accordion>
            <Accordion.Item summary="Aktiver Eintrag">
                Dieser Eintrag ist aktiv und kann erweitert werden
            </Accordion.Item>
            <Accordion.Item summary="Deaktivierter Eintrag" disabled>
                Dieser Eintrag ist deaktiviert und kann nicht erweitert werden
            </Accordion.Item>
        </Accordion>
    );
}
```
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Accordion>
  <Accordion.Item summary="Aktiver Eintrag">Dieser Eintrag ist aktiv und kann erweitert werden</Accordion.Item>
  <Accordion.Item summary="Deaktivierter Eintrag" disabled>
    Dieser Eintrag ist deaktiviert und kann nicht erweitert werden
  </Accordion.Item>
</Accordion>
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

### Accordion

| Name          | Beschreibung                               |            Typ            |  Standardwert  |
| :------------ | :----------------------------------------- | :-----------------------: | :------------: |
| size          | Accordion-Größe                            |     `"m"` `"l"` `"xl"`     |     `"m"`      |
| view          | Accordion-Darstellung                      |  `"solid"` `"top-bottom"`  |   `"solid"`    |
| multiple      | Ermöglicht gleichzeitige Erweiterung mehrerer Einträge |         `boolean`         |     `false`    |
| arrowPosition | Position des Pfeilsymbols                  |     `"start"` `"end"`      |     `"end"`    |
| defaultValue  | Standardwert für unkontrollierten Zustand  | `string` `string[]` `null` |                |
| value         | Aktueller Wert für kontrollierten Zustand  | `string` `string[]` `null` |                |
| onUpdate      | Callback-Funktion, die bei Zustandsänderung aufgerufen wird |         `Function`         |                |
| ariaLevel     | Überschriftenebene für Barrierefreiheit  |          `number`          |      `3`       |
| className     | CSS-Klassenname                            |          `string`          |                |
| qa            | HTML `data-qa`-Attribut, verwendet für Tests |          `string`          |                |

### Accordion.Item

| Name            | Beschreibung                               |       Typ        | Standardwert |
| :-------------- | :----------------------------------------- | :--------------: | :----------: |
| value           | Eindeutige Kennung des Eintrags            |     `string`     |              |
| summary         | Kopfzeile des Accordion-Eintrags           | `React.ReactNode` |              |
| expanded        | Kontrollierter erweiterter Zustand         |     `boolean`    |              |
| defaultExpanded | Standardmäßiger erweiterter Zustand        |     `boolean`    |              |
| disabled        | Deaktiviert den Accordion-Eintrag          |     `boolean`    |    `false`   |
| keepMounted     | Inhalt auch im eingeklappten Zustand im DOM belassen |     `boolean`    |              |
| onUpdate        | Callback-Funktion, die bei Zustandsänderung des Eintrags aufgerufen wird |    `Function`    |              |
| className       | CSS-Klassenname                            |     `string`     |              |
| qa              | HTML `data-qa`-Attribut, verwendet für Tests |     `string`     |              |

### Accordion.Summary

| Name     | Beschreibung                                                                             |                      Typ                       |                                          Standard                                          |
| :------- | :-------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | Benutzerdefinierte Renderfunktion für die Zusammenfassung                                  | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | HTML `data-qa`-Attribut, das für Tests verwendet wird. Funktioniert nur, wenn `qa` in Accordion.Item übergeben wird |                    `string`                     | `${accordion-item}-summary` wenn `qa` in Accordion.Item übergeben wird, `disclosure-summary` wenn nicht |

## CSS API

| Name                           | Beschreibung                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | Inline-Padding (horizontal) für das Akkordeon |