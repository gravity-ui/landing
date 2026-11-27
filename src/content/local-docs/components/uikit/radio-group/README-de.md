<!--GITHUB_BLOCK-->

# RadioGroup

<!--/GITHUB_BLOCK-->

Die `RadioGroup`-Komponente wird verwendet, um eine Gruppe zu erstellen, in der Benutzer eine einzelne Option aus mehreren Auswahlmöglichkeiten auswählen können.

```tsx
import {RadioGroup} from '@gravity-ui/uikit';
```

### Deaktivierter Zustand

<!--SANDBOX
import type {RadioGroupOption} from '@gravity-ui/uikit';
import {RadioGroup} from '@gravity-ui/uikit';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <RadioGroup name="group2" defaultValue={options[0].value} options={options} disabled />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: RadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<RadioGroup name="group2" defaultValue={options[0].value} options={options} disabled />;
```

<!--/GITHUB_BLOCK-->

### Größe

Verwenden Sie die Eigenschaft `size`, um die Größe der `RadioGroup` zu verwalten. Die Standardgröße ist `m`.

<!--SANDBOX
import type {RadioGroupOption} from '@gravity-ui/uikit';
import {RadioGroup} from '@gravity-ui/uikit';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <>
            <RadioGroup name="group1" defaultValue={options[0].value} options={options} size="m" />
            <RadioGroup name="group2" defaultValue={options[0].value} options={options} size="l" />
            <RadioGroup name="group3" defaultValue={options[0].value} options={options} size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
  const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
  ];
  <RadioGroup name="group1" defaultValue={options[0].value} options={options} size="m"/>
  <RadioGroup name="group2" defaultValue={options[0].value} options={options} size="l"/>
  <RadioGroup name="group3" defaultValue={options[0].value} options={options} size="xl"/>
```

<!--/GITHUB_BLOCK-->

### Ausrichtung

Verwenden Sie die Eigenschaft `direction`, um die Ausrichtung der `RadioGroup` zu verwalten. Die Standardausrichtung ist `horizontal`.

<!--SANDBOX
import type {RadioGroupOption} from '@gravity-ui/uikit';
import {RadioGroup} from '@gravity-ui/uikit';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <>
            <RadioGroup
                name="group1"
                defaultValue={options[0].value}
                options={options}
                direction="horizontal"
            />
            <RadioGroup
                name="group2"
                defaultValue={options[0].value}
                options={options}
                direction="vertical"
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
  const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
  ];
  <RadioGroup name="group1" defaultValue={options[0].value} options={options} direction="horizontal"/>
  <RadioGroup name="group2" defaultValue={options[0].value} options={options} direction="vertical"/>
```

<!--/GITHUB_BLOCK-->

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

<!--SANDBOX
import type {RadioGroupOption} from '@gravity-ui/uikit';
import {RadioGroup} from '@gravity-ui/uikit';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <RadioGroup name="group1" defaultValue={options[0].value}>
            <RadioGroup.Option content={options[0].content} value={options[0].value} />
            <RadioGroup.Option content={options[1].content} value={options[1].value} />
            <RadioGroup.Option content={options[2].content} value={options[2].value} />
        </RadioGroup>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: RadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<RadioGroup name="group1" defaultValue={options[0].value}>
  <RadioGroup.Option content={options[0].content} value={options[0].value} />
  <RadioGroup.Option content={options[1].content} value={options[1].value} />
  <RadioGroup.Option content={options[2].content} value={options[2].value} />
</RadioGroup>;
```

<!--/GITHUB_BLOCK-->

### Eigenschaften

| Name     | Beschreibung                                  |    Typ     | Standard |
| :------- | :-------------------------------------------- | :--------: | :------: |
| children | Der Inhalt des Radios (normalerweise eine Beschriftung). | `ReactNode` |          |
| content  | Der Inhalt des Radios (Alternative zu children). | `ReactNode` |          |
| disabled | Schaltet den `disabled`-Zustand des Radios um.  | `boolean`  | `false`  |
| value    | Steuerwert                                    |  `string`  |          |
