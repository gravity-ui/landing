<!--GITHUB_BLOCK-->

# Radio

<!--/GITHUB_BLOCK-->

Die `Radio`-Komponente ermöglicht es Benutzern, eine einzelne Option aus einer Liste von Auswahlmöglichkeiten auszuwählen.

```tsx
import {Radio} from '@gravity-ui/uikit';
```

## Zustände

`Radio` kann die folgenden Zustände haben:

- Checked: Radio ist ausgewählt.
- Disabled: Radio ist für die Auswahl nicht verfügbar.

<!--SANDBOX
import {Radio} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Radio value="option 1" content="Unchecked" size="l" checked={false} />
            <Radio value="option 2" content="Checked" size="l" checked />
            <Radio value="option 3" content="Disabled" size="l" disabled />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Radio value="option 1" content="Unchecked" size="l" checked={false}/>
<Radio value="option 2" content="Checked" size="l" checked/>
<Radio value="option 3" content="Disabled" size="l" disabled/>
```

<!--/GITHUB_BLOCK-->

## Größe

Um die Größe von `Radio` zu verwalten, verwenden Sie die Eigenschaft `size`. Die Standardgröße ist `m`.

<!--SANDBOX
import {Radio} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Radio value="option 1" content="M Size" size="m" />
            <Radio value="option 2" content="L Size" size="l" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Radio value="option 1" content="M Size" size="m"/>
<Radio value="option 2" content="L Size" size="l"/>
```

<!--/GITHUB_BLOCK-->

## Beschriftung

Sie können einer `Radio`-Schaltfläche eine Beschriftung mit der Eigenschaft `content` zuweisen oder sie als Kind-Eigenschaft bereitstellen.

<!--SANDBOX
import {Box, Radio} from '@gravity-ui/uikit';

export default function () {
    return (
        <div>
            <Radio value="option-1" content="Content" size="l" />
            <Box spacing={{mt: 2}}>
                <Radio value="option-2" size="l">
                    <span>Content as children</span>
                </Radio>
            </Box>
        </div>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div>
  <Radio content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Radio size="l">
      <span>Content as children</span>
    </Radio>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

| Name           | Beschreibung                                                                                             |                     Typ                      | Standard |
| :------------- | :------------------------------------------------------------------------------------------------------- | :------------------------------------------: | :------: |
| children       | Der Inhalt des Radiobuttons (normalerweise ein Label).                                                   |                  `ReactNode`                  |          |
| content        | Der Inhalt des Radiobuttons (Alternative zu `children`).                                                 |                  `ReactNode`                  |          |
| disabled       | Schaltet den `disabled`-Zustand des Radiobuttons um.                                                     |                   `boolean`                   | `false`  |
| checked        | Schaltet den `checked`-Zustand des Radiobuttons um.                                                      |                   `boolean`                   | `false`  |
| defaultChecked | Setzt den anfänglichen `checked`-Zustand, wenn die Komponente gemountet wird.                            |                   `boolean`                   | `false`  |
| onUpdate       | Wird ausgelöst, wenn sich der Zustand des Radiobuttons durch den Benutzer ändert, und übergibt den `checked`-Wert als Callback-Argument. |         `(checked: boolean) => void`          |          |
| onChange       | Wird ausgelöst, wenn sich der Zustand des Radiobuttons durch den Benutzer ändert, und übergibt das `change`-Ereignis als Callback-Argument. |                  `Function`                   |          |
| onFocus        | Event-Handler, der verwendet wird, wenn das Radiobutton-Input-Element den Fokus erhält.                 |                  `Function`                   |          |
| onBlur         | Event-Handler, der verwendet wird, wenn das Radiobutton-Input-Element den Fokus verliert.                |                  `Function`                   |          |
| size           | Legt die Größe des Radiobuttons fest.                                                                    |                    `m` `l`                    |   `m`    |
| id             | `id` HTML-Attribut                                                                                       |                   `string`                    |          |
| qa             | `data-qa` HTML-Attribut, das für Tests verwendet wird.                                                   |                   `string`                    |          |
| style          | `style` HTML-Attribut                                                                                    |             `React.CSSProperties`             |          |
| className      | `class` HTML-Attribut                                                                                    |                   `string`                    |          |
| title          | `title` HTML-Attribut                                                                                    |                   `string`                    |          |
| name           | `name` HTML-Attribut für das Input-Element                                                               |                   `string`                    |          |
| value          | Kontrollwert                                                                                             |                   `string`                    |          |
| indeterminate  | Schaltet den indeterminate Zustand des Radiobuttons um.                                                 |                   `boolean`                   | `false`  |
| controlProps   | Zusätzliche Eigenschaften für das zugrunde liegende Input-Element                                       | `React.InputHTMLAttributes<HTMLInputElement>` |          |
| controlRef     | Ref auf das zugrunde liegende Input-Element                                                              |         `React.Ref<HTMLInputElement>`         |          |
