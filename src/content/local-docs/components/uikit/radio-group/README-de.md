Die `RadioGroup`-Komponente wird verwendet, um eine Gruppe zu erstellen, in der Benutzer eine einzelne Option aus mehreren Auswahlmöglichkeiten auswählen können.

```tsx
import {RadioGroup} from '@gravity-ui/uikit';
```

### Deaktivierter Zustand

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Größe

Verwenden Sie die Eigenschaft `size`, um die Größe der `RadioGroup` zu verwalten. Die Standardgröße ist `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Ausrichtung

Verwenden Sie die Eigenschaft `direction`, um die Ausrichtung der `RadioGroup` zu verwalten. Die Standardausrichtung ist `horizontal`.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Eigenschaften

| Name            | Beschreibung                                                                                       |           Typ            |    Standard     |
| :-------------- | :------------------------------------------------------------------------------------------------- | :----------------------: | :-------------: |
| children        | Der Inhalt der Radio-Gruppe.                                                                       |        `ReactNode`       |                 |
| disabled        | Schaltet den `disabled`-Zustand der Radio-Gruppe um.                                               |        `boolean`         |     `false`     |
| options         | Optionen für die Radio-Gruppe.                                                                     |  `RadioGroupOption[]`    |                 |
| optionClassName | `class` HTML-Attribut für die Radio-Kinder.                                                        |        `string`          |                 |
| direction       | Bestimmt die Ausrichtung der Radio-Gruppe.                                                         | `horizontal - vertical`  | `"horizontal"`  |
| defaultValue    | Legt den anfänglichen Wertzustand fest, wenn die Komponente gemountet wird.                       |        `string`          |                 |
| onUpdate        | Wird ausgelöst, wenn der Benutzer den Radio-Zustand ändert, und übergibt den neuen Wert als Callback-Argument. | `(value: string) => void` |                 |
| onChange        | Wird ausgelöst, wenn der Benutzer den Radio-Zustand ändert, und übergibt das Änderungsereignis als Callback-Argument. |       `Function`         |                 |
| size            | Bestimmt die Größe der Radio-Gruppe.                                                               |         `m` `l`          |       `m`       |
| qa              | `data-qa` HTML-Attribut, verwendet für Tests                                                       |        `string`          |                 |
| style           | `style` HTML-Attribut                                                                              | `React.CSSProperties`    |                 |
| className       | `class` HTML-Attribut                                                                              |        `string`          |                 |

## RadioGroup.Option

Die `RadioGroup`-Komponente exportiert auch eine verschachtelte `Option`-Komponente, die `Radio` entspricht und verwendet werden kann, um Radio-Optionen innerhalb der `RadioGroup` zu erstellen.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Eigenschaften

| Name     | Beschreibung                                  |    Typ     | Standard |
| :------- | :-------------------------------------------- | :--------: | :------: |
| children | Der Inhalt des Radios (normalerweise eine Beschriftung). | `ReactNode` |          |
| content  | Der Inhalt des Radios (Alternative zu children). | `ReactNode` |          |
| disabled | Schaltet den `disabled`-Zustand des Radios um.  | `boolean`  | `false`  |
| value    | Steuerwert                                    |  `string`  |          |