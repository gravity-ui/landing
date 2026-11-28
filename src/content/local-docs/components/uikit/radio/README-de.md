Die `Radio`-Komponente ermöglicht es Benutzern, eine einzelne Option aus einer Liste von Auswahlmöglichkeiten auszuwählen.

```tsx
import {Radio} from '@gravity-ui/uikit';
```

## Zustände

`Radio` kann die folgenden Zustände haben:

- Checked: Radio ist ausgewählt.
- Disabled: Radio ist für die Auswahl nicht verfügbar.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Größe

Um die Größe von `Radio` zu verwalten, verwenden Sie die Eigenschaft `size`. Die Standardgröße ist `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Beschriftung

Sie können einer `Radio`-Schaltfläche eine Beschriftung mit der Eigenschaft `content` zuweisen oder sie als Kind-Eigenschaft bereitstellen.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

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