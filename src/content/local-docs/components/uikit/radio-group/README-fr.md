<!--GITHUB_BLOCK-->

# RadioGroup

<!--/GITHUB_BLOCK-->

Le composant `RadioGroup` est utilisé pour créer un groupe où les utilisateurs peuvent sélectionner une seule option parmi plusieurs choix.

```tsx
import {RadioGroup} from '@gravity-ui/uikit';
```

### État désactivé

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

### Taille

Utilisez la propriété `size` pour gérer la taille du `RadioGroup`. La taille par défaut est `m`.

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

### Direction

Utilisez la propriété `direction` pour gérer la direction du `RadioGroup`. La direction par défaut est `horizontal`.

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

## Propriétés

| Nom            | Description                                                                                       |           Type            |    Défaut     |
| :------------- | :------------------------------------------------------------------------------------------------ | :-----------------------: | :------------: |
| children        | Le contenu du groupe de radios.                                                                   |        `ReactNode`        |                |
| disabled        | Active/désactive l'état `disabled` du groupe de radios.                                           |         `boolean`         |    `false`     |
| options         | Options pour le groupe de radios.                                                                 |   `RadioGroupOption[]`    |                |
| optionClassName | Attribut HTML `class` pour les éléments radio enfants.                                            |         `string`          |                |
| direction       | Détermine la direction du groupe de radios.                                                       |  `horizontal - vertical`  | `"horizontal"` |
| defaultValue    | Définit l'état de valeur initial lorsque le composant est monté.                                  |         `string`          |                |
| onUpdate        | Se déclenche lorsque l'utilisateur modifie l'état de la radio et fournit la nouvelle valeur en tant qu'argument de rappel.    | `(value: string) => void` |                |
| onChange        | Se déclenche lorsque l'utilisateur modifie l'état de la radio et fournit l'événement de modification en tant qu'argument de rappel. |        `Function`         |                |
| size            | Détermine la taille du groupe de radios.                                                          |          `m` `l`          |      `m`       |
| qa              | Attribut HTML `data-qa`, utilisé pour les tests                                                   |         `string`          |                |
| style           | Attribut HTML `style`                                                                             |   `React.CSSProperties`   |                |
| className       | Attribut HTML `class`                                                                             |         `string`          |                |

## RadioGroup.Option

Le composant `RadioGroup` exporte également un composant imbriqué `Option` équivalent à `Radio`, qui peut être utilisé pour créer des options de radio au sein du `RadioGroup`.

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

### Propriétés

| Nom     | Description                                         |    Type     | Défaut |
| :------ | :-------------------------------------------------- | :---------: | :-----: |
| children | Le contenu de la radio (généralement, une étiquette).        | `ReactNode` |         |
| content  | Le contenu de la radio (alternative à `children`). | `ReactNode` |         |
| disabled | Active/désactive l'état `disabled` de la radio.          |  `boolean`  | `false` |
| value    | Valeur de contrôle                                       |  `string`   |         |
