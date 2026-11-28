Die Komponente `Switch` wird verwendet, um zwischen zwei Zuständen umzuschalten: typischerweise zwischen **an** und **aus** oder **aktiviert** und **deaktiviert**.

```tsx
import {Switch} from '@gravity-ui/uikit';
```

## Zustände

Ein `Switch` kann verschiedene Zustände haben:

- Checked: Wenn der Schalter den Zustand **An** hat.
- Disabled: Wenn der Schalter nicht verfügbar ist.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Größe

Verwenden Sie die Eigenschaft `size`, um die Größe des `Switch` zu verwalten. Die Standardgröße ist `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Beschriftung

Sie können einem `Switch` eine Beschriftung mit der Eigenschaft `content` zuweisen oder sie als Kind-Eigenschaft bereitstellen.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Eigenschaften

| Name           | Beschreibung                                                                                             |                     Typ                      | Standard |
| :------------- | :------------------------------------------------------------------------------------------------------- | :------------------------------------------: | :------: |
| children       | Der Inhalt des Schalters (normalerweise eine Beschriftung)                                               |                  `ReactNode`                  |          |
| content        | Der Inhalt des Schalters (Alternative zu children)                                                       |                  `ReactNode`                  |          |
| disabled       | Schaltet den `disabled`-Zustand des Schalters um                                                         |                   `boolean`                   | `false`  |
| loading        | Schaltet den `loading`-Zustand des Schalters um                                                          |                   `boolean`                   | `false`  |
| checked        | Schaltet den `checked`-Zustand des Schalters um                                                          |                   `boolean`                   | `false`  |
| defaultChecked | Setzt den anfänglichen `checked`-Zustand, wenn die Komponente gemountet wird                            |                   `boolean`                   | `false`  |
| onUpdate       | Wird ausgelöst, wenn der Zustand des Schalters vom Benutzer geändert wird, und übergibt den `checked`-Wert als Callback-Argument |         `(checked: boolean) => void`          |          |
| onChange       | Wird ausgelöst, wenn der Zustand des Schalters vom Benutzer geändert wird, und übergibt das `change`-Ereignis als Callback-Argument |                  `Function`                   |          |
| onFocus        | Event-Handler, der verwendet wird, wenn das Eingabeelement des Schalters den Fokus erhält                |                  `Function`                   |          |
| onBlur         | Event-Handler, der verwendet wird, wenn das Eingabeelement des Schalters den Fokus verliert              |                  `Function`                   |          |
| size           | Legt die Größe des Schalters fest                                                                        |                  `s` `m` `l`                  |   `m`    |
| id             | `id`-HTML-Attribut                                                                                       |                   `string`                    |          |
| qa             | `data-qa`-HTML-Attribut, das zum Testen verwendet wird                                                   |                   `string`                    |          |
| style          | `style`-HTML-Attribut                                                                                    |             `React.CSSProperties`             |          |
| className      | `class`-HTML-Attribut                                                                                    |                   `string`                    |          |
| title          | `title`-HTML-Attribut                                                                                    |                   `string`                    |          |
| name           | `name`-HTML-Attribut für das Eingabeelement                                                              |                   `string`                    |          |
| value          | `value`-HTML-Attribut für das Eingabeelement                                                             |                   `string`                    |          |
| indeterminate  | Schaltet den indeterminate Zustand des Schalters um                                                      |                   `boolean`                   | `false`  |
| controlProps   | Zusätzliche Eigenschaften für das zugrunde liegende Eingabeelement                                      | `React.InputHTMLAttributes<HTMLInputElement>` |          |
| controlRef     | Ref auf das zugrunde liegende Eingabeelement                                                             |         `React.Ref<HTMLInputElement>`         |          |