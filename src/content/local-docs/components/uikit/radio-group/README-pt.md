<!--GITHUB_BLOCK-->

# RadioGroup

<!--/GITHUB_BLOCK-->

O componente `RadioGroup` é usado para criar um grupo onde os usuários podem selecionar uma única opção entre várias escolhas.

```tsx
import {RadioGroup} from '@gravity-ui/uikit';
```

### Estado desativado

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

### Tamanho

Use a propriedade `size` para gerenciar o tamanho do `RadioGroup`. O tamanho padrão é `m`.

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

### Direção

Use a propriedade `direction` para gerenciar a direção do `RadioGroup`. A direção padrão é `horizontal`.

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

## Propriedades

| Nome            | Descrição                                                                                       |           Tipo            |    Padrão     |
| :-------------- | :---------------------------------------------------------------------------------------------- | :-----------------------: | :-----------: |
| children        | O conteúdo do grupo de rádio.                                                                   |        `ReactNode`        |               |
| disabled        | Alterna o estado `disabled` do grupo de rádio.                                                  |         `boolean`         |    `false`    |
| options         | Opções para o grupo de rádio.                                                                   |   `RadioGroupOption[]`    |               |
| optionClassName | Atributo `class` HTML para os filhos do rádio.                                                  |         `string`          |               |
| direction       | Determina a direção do grupo de rádio.                                                          |  `horizontal - vertical`  | `"horizontal"` |
| defaultValue    | Define o estado de valor inicial quando o componente é montado.                                 |         `string`          |               |
| onUpdate        | Dispara quando o usuário altera o estado do rádio e fornece o novo valor como argumento de callback. | `(value: string) => void` |               |
| onChange        | Dispara quando o usuário altera o estado do rádio e fornece o evento de alteração como argumento de callback. |        `Function`         |               |
| size            | Determina o tamanho do grupo de rádio.                                                          |          `m` `l`          |      `m`      |
| qa              | Atributo `data-qa` HTML, usado para testes                                                      |         `string`          |               |
| style           | Atributo `style` HTML                                                                           |   `React.CSSProperties`   |               |
| className       | Atributo `class` HTML                                                                           |         `string`          |               |

## RadioGroup.Option

O componente `RadioGroup` também exporta um componente `Option` aninhado, equivalente a `Radio`, que pode ser usado para criar opções de rádio dentro do `RadioGroup`.

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

### Propriedades

| Nome     | Descrição                                         |    Tipo     | Padrão |
| :------- | :------------------------------------------------ | :---------: | :----: |
| children | O conteúdo do rádio (geralmente, um rótulo).        | `ReactNode` |        |
| content  | O conteúdo do rádio (alternativa a `children`). | `ReactNode` |        |
| disabled | Alterna o estado `disabled` do rádio.             |  `boolean`  | `false` |
| value    | Valor de controle                                 |  `string`   |        |
