Die Komponente `Checkbox` ermöglicht es dem Benutzer, einen bestimmten Wert auszuwählen oder abzuwählen.

```tsx
import {Checkbox} from '@gravity-ui/uikit';
```

## Zustände

Eine `Checkbox` kann verschiedene Zustände haben:

- Checked: Die Checkbox ist angehakt.
- Disabled: Die Checkbox ist nicht verfügbar.
- Indeterminate: Die Checkbox befindet sich in einem Zwischenzustand zwischen angehakt und nicht angehakt.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Größe

Verwenden Sie die Eigenschaft `size`, um die Größe der `Checkbox` zu verwalten. Die Standardgröße ist `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Beschriftung

Sie können einer `Checkbox` eine Beschriftung mit der Eigenschaft `content` zuweisen oder sie als Kind-Eigenschaft bereitstellen.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Eigenschaften

| Name           | Beschreibung                                                                                                    |                     Typ                      | Standard |
| :------------- | :-------------------------------------------------------------------------------------------------------------- | :------------------------------------------: | :------: |
| children       | Inhalt der Checkbox (normalerweise ein Label).                                                                  |                  `ReactNode`                  |          |
| content        | Inhalt der Checkbox (Alternative zu children).                                                                  |                  `ReactNode`                  |          |
| disabled       | Schaltet den `disabled`-Zustand der Checkbox um.                                                                |                   `boolean`                   | `false`  |
| checked        | Schaltet den `checked`-Zustand der Checkbox um.                                                                 |                   `boolean`                   | `false`  |
| defaultChecked | Setzt den anfänglichen `checked`-Zustand, wenn die Komponente gemountet wird.                                  |                   `boolean`                   | `false`  |
| onUpdate       | Wird ausgelöst, wenn der Benutzer den Zustand der Checkbox ändert, und übergibt den `checked`-Wert als Callback-Argument. |         `(checked: boolean) => void`          |          |
| onChange       | Wird ausgelöst, wenn der Benutzer den Zustand der Checkbox ändert, und übergibt das Änderungsereignis als Callback-Argument. |                  `Function`                   |          |
| onFocus        | Event-Handler, der verwendet wird, wenn das Checkbox-Input-Element den Fokus erhält.                          |                  `Function`                   |          |
| onBlur         | Event-Handler, der verwendet wird, wenn das Checkbox-Input-Element den Fokus verliert.                        |                  `Function`                   |          |
| size           | Bestimmt die Größe der Checkbox.                                                                                |                    `m` `l`                    |   `m`    |
| id             | `id`-HTML-Attribut                                                                                              |                   `string`                    |          |
| qa             | `data-qa`-HTML-Attribut, das für Tests verwendet wird                                                           |                   `string`                    |          |
| style          | `style`-HTML-Attribut                                                                                           |             `React.CSSProperties`             |          |
| className      | `class`-HTML-Attribut                                                                                           |                   `string`                    |          |
| title          | `title`-HTML-Attribut                                                                                           |                   `string`                    |          |
| name           | `name`-HTML-Attribut für das Input-Element.                                                                     |                   `string`                    |          |
| value          | `value`-HTML-Attribut für das Input-Element.                                                                    |                   `string`                    |          |
| indeterminate  | Schaltet den `indeterminate`-Zustand der Checkbox um.                                                           |                   `boolean`                   | `false`  |
| controlProps   | Zusätzliche Eigenschaften für das zugrunde liegende Input-Element.                                              | `React.InputHTMLAttributes<HTMLInputElement>` |          |
| controlRef     | Ref auf das zugrunde liegende Input-Element.                                                                    |         `React.Ref<HTMLInputElement>`         |          |