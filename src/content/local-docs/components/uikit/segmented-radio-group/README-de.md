<!--GITHUB_BLOCK-->

# SegmentedRadioGroup

<!--/GITHUB_BLOCK-->

Die Komponente `SegmentedRadioGroup` wird verwendet, um eine Gruppe von Radiobuttons zu erstellen, bei denen Benutzer eine einzelne Option aus mehreren Auswahlmöglichkeiten auswählen können.

```tsx
import {SegmentedRadioGroup} from '@gravity-ui/uikit';
```

### Deaktivierter Zustand

<!--SANDBOX
import {SegmentedRadioGroup} from '@gravity-ui/uikit';

export default function () {
    return (
        <SegmentedRadioGroup name="group1" defaultValue="Value 1" disabled>
            <SegmentedRadioGroup.Option value="Value 1">Value 1</SegmentedRadioGroup.Option>
            <SegmentedRadioGroup.Option value="Value 2">Value 2</SegmentedRadioGroup.Option>
            <SegmentedRadioGroup.Option value="Value 3">Value 3</SegmentedRadioGroup.Option>
        </SegmentedRadioGroup>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<SegmentedRadioGroup name="group1" defaultValue="Value 1" disabled>
  <SegmentedRadioGroup.Option value="Value 1">Value 1</SegmentedRadioGroup.Option>
  <SegmentedRadioGroup.Option value="Value 2">Value 2</SegmentedRadioGroup.Option>
  <SegmentedRadioGroup.Option value="Value 3">Value 3</SegmentedRadioGroup.Option>
</SegmentedRadioGroup>
```

<!--/GITHUB_BLOCK-->

### Größe

Verwenden Sie die Eigenschaft `size`, um die Größe von `SegmentedRadioGroup` zu verwalten. Die Standardgröße ist `m`.

<!--SANDBOX
import {Flex, SegmentedRadioGroup} from '@gravity-ui/uikit';

const options = [
    <SegmentedRadioGroup.Option key="Value 1" value="Value 1">Value 1</SegmentedRadioGroup.Option>,
    <SegmentedRadioGroup.Option key="Value 2" value="Value 2">Value 2</SegmentedRadioGroup.Option>,
    <SegmentedRadioGroup.Option key="Value 3" value="Value 3">Value 3</SegmentedRadioGroup.Option>,
];

export default function () {
    return (
        <Flex direction="column" alignItems="center" gap={2}>
            <SegmentedRadioGroup name="group1" defaultValue="Value 1" size="s">{options}</SegmentedRadioGroup>
            <SegmentedRadioGroup name="group2" defaultValue="Value 1" size="m">{options}</SegmentedRadioGroup>
            <SegmentedRadioGroup name="group3" defaultValue="Value 1" size="l">{options}</SegmentedRadioGroup>
            <SegmentedRadioGroup name="group4" defaultValue="Value 1" size="xl">{options}</SegmentedRadioGroup>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options = [
    <SegmentedRadioGroup.Option key="Value 1" value="Value 1">Value 1</SegmentedRadioGroup.Option>,
    <SegmentedRadioGroup.Option key="Value 2" value="Value 2">Value 2</SegmentedRadioGroup.Option>,
    <SegmentedRadioGroup.Option key="Value 3" value="Value 3">Value 3</SegmentedRadioGroup.Option>,
];

<SegmentedRadioGroup name="group1" defaultValue="Value 1" size="s">{options}</SegmentedRadioGroup>
<SegmentedRadioGroup name="group2" defaultValue="Value 1" size="m">{options}</SegmentedRadioGroup>
<SegmentedRadioGroup name="group3" defaultValue="Value 1" size="l">{options}</SegmentedRadioGroup>
<SegmentedRadioGroup name="group4" defaultValue="Value 1" size="xl">{options}</SegmentedRadioGroup>
```

<!--/GITHUB_BLOCK-->

### Breite

Verwenden Sie die Eigenschaft `width`, um die Breite von `SegmentedRadioGroup` zu verwalten:

<!--SANDBOX
import {Box, Flex, SegmentedRadioGroup} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width={140} style={{border: '2px dashed gray'}}>
            <Flex direction="column" gap={2}>
                <SegmentedRadioGroup>
                    <SegmentedRadioGroup.Option value="1" content="none" />
                    <SegmentedRadioGroup.Option value="2" content="none********" />
                </SegmentedRadioGroup>
                <SegmentedRadioGroup width="auto">
                    <SegmentedRadioGroup.Option value="1" content="auto" />
                    <SegmentedRadioGroup.Option value="2" content="auto********" />
                </SegmentedRadioGroup>
                <SegmentedRadioGroup width="max">
                    <SegmentedRadioGroup.Option value="1" content="max" />
                    <SegmentedRadioGroup.Option value="2" content="max" />
                </SegmentedRadioGroup>
            </Flex>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div style={{width: 140, border: '2px dashed gray'}}>
  <div style={{marginBottom: 10}}>
    <SegmentedRadioGroup>
      <SegmentedRadioGroup.Option value="1" content="none" />
      <SegmentedRadioGroup.Option value="2" content="none********" />
    </SegmentedRadioGroup>
  </div>
  <div style={{marginBottom: 10}}>
    <SegmentedRadioGroup width="auto">
      <SegmentedRadioGroup.Option value="1" content="auto" />
      <SegmentedRadioGroup.Option value="2" content="auto********" />
    </SegmentedRadioGroup>
  </div>
  <div>
    <SegmentedRadioGroup width="max">
      <SegmentedRadioGroup.Option value="1" content="max" />
      <SegmentedRadioGroup.Option value="2" content="max" />
    </SegmentedRadioGroup>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

| Name         | Beschreibung                                                                                              |                Typ                | Standard |
| :----------- | :-------------------------------------------------------------------------------------------------------- | :-------------------------------: | :------: |
| children     | Inhalt des Radiobuttons.                                                                                  |            `ReactNode`            |          |
| disabled     | Schaltet den `disabled`-Zustand des Radiobuttons um.                                                      |             `boolean`             | `false`  |
| options      | Optionen für den Radiobutton.                                                                             | `SegmentedRadioGroupOptionProps[]` |          |
| defaultValue | Legt den anfänglichen Wertzustand fest, wenn die Komponente gemountet wird.                              |              `string`             |          |
| onUpdate     | Wird ausgelöst, wenn der Benutzer den Zustand des Radiobuttons ändert, und übergibt den neuen Wert als Callback-Argument. |     `(value: string) => void`     |          |
| onChange     | Wird ausgelöst, wenn der Benutzer den Zustand des Radiobuttons ändert, und übergibt das Änderungsereignis als Callback-Argument. |             `Function`            |          |
| onFocus      | Ereignisbehandlungsfunktion, die verwendet wird, wenn das Radio-Input-Element den Fokus erhält.          |             `Function`            |          |
| onBlur       | Ereignisbehandlungsfunktion, die verwendet wird, wenn das Radio-Input-Element den Fokus verliert.        |             `Function`            |          |
| width        | Legt die Breite des Radiobuttons fest.                                                                    |            `auto - max`           |          |
| size         | Legt die Größe des Radiobuttons fest.                                                                     |          `s` `m` `l` `xl`         |   `m`    |
| name         | `name`-HTML-Attribut für das Input-Element.                                                               |              `string`             |          |
| qa           | `data-qa`-HTML-Attribut, das zum Testen verwendet wird                                                     |              `string`             |          |
| style        | `style`-HTML-Attribut                                                                                     |       `React.CSSProperties`       |          |
| className    | `class`-HTML-Attribut                                                                                     |              `string`             |          |

## SegmentedRadioGroup.Option

Die Komponente `SegmentedRadioGroup` exportiert auch eine verschachtelte `Option`-Komponente. Sie können diese verwenden, um Radiobutton-Optionen innerhalb einer `SegmentedRadioGroup` zu erstellen.

<!--SANDBOX
import type {SegmentedRadioGroupOptionProps} from '@gravity-ui/uikit';
import {SegmentedRadioGroup} from '@gravity-ui/uikit';

const options: SegmentedRadioGroupOptionProps[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <SegmentedRadioGroup name="group1" defaultValue={options[0].value}>
            <SegmentedRadioGroup.Option content={options[0].content} value={options[0].value} />
            <SegmentedRadioGroup.Option content={options[1].content} value={options[1].value} />
            <SegmentedRadioGroup.Option content={options[2].content} value={options[2].value} />
        </SegmentedRadioGroup>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: SegmentedRadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<SegmentedRadioGroup name="group1" defaultValue={options[0].value}>
  <SegmentedRadioGroup.Option content={options[0].content} value={options[0].value} />
  <SegmentedRadioGroup.Option content={options[1].content} value={options[1].value} />
  <SegmentedRadioGroup.Option content={options[2].content} value={options[2].value} />
</SegmentedRadioGroup>;
```

<!--/GITHUB_BLOCK-->

### Eigenschaften

| Name     | Beschreibung                                         |    Typ     | Standard |
| :------- | :-------------------------------------------------- | :--------: | :------: |
| children | Der Inhalt des Radiobuttons (normalerweise ein Label). | `ReactNode` |          |
| content  | Der Inhalt des Radiobuttons (Alternative zu children). | `ReactNode` |          |
| disabled | Schaltet den `disabled`-Zustand des Radiobuttons um. |  `boolean`  | `false`  |
| value    | Kontrollwert                                        |  `string`  |          |
