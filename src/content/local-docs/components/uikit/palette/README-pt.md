<!--GITHUB_BLOCK-->

# Palette

<!--/GITHUB_BLOCK-->

O componente `Palette` é usado para exibir uma grade de ícones, emojis, reações e símbolos que você pode selecionar ou desmarcar.

```tsx
import {Palette} from '@gravity-ui/uikit';
```

### Estado desativado

Você pode desativar todas as opções usando a propriedade `disabled`. Se você quiser desativar apenas certas opções, pode alterar a propriedade `disabled` dessas `options` (`PaletteOption[]`).

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

const disabledOptions: PaletteOption[] = [{...options[0], disabled: true}, options[1]];

export default function () {
    return (
        <>
            <Palette options={disabledOptions} />
            <Palette options={options} disabled />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  // disable a single item
  {content: '😎', value: 'ID-cool', disabled: true},
  {content: '🥴', value: 'ID-woozy'},
];
// or disable all of them
<Palette options={options} disabled={true} />;
```

<!--/GITHUB_BLOCK-->

### Tamanho

Use a propriedade `size` para gerenciar o tamanho do `Palette`. O tamanho padrão é `s`.

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return (
        <>
            <Palette options={options} size="xs" />
            <Palette options={options} size="s" />
            <Palette options={options} size="m" />
            <Palette options={options} size="l" />
            <Palette options={options} size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} size={"xs"} />
<Palette options={options} size={"s"} />
<Palette options={options} size={"m"} />
<Palette options={options} size={"l"} />
<Palette options={options} size={"xl"} />
```

<!--/GITHUB_BLOCK-->

### Colunas

Você pode alterar o número de colunas na grade alterando a propriedade `columns` (o valor padrão é `6`).

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return <Palette options={options} columns={1} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  {content: '😎', value: 'ID-cool'},
  {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />;
```

<!--/GITHUB_BLOCK-->

### Múltiplos

Por padrão, você pode selecionar e desmarcar várias opções. Caso você queira apenas tornar uma única opção selecionável, pode desativar a propriedade `multiple`.

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return <Palette options={options} multiple={false} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  {content: '😎', value: 'ID-cool'},
  {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />;
```

<!--/GITHUB_BLOCK-->

## Propriedades

`PaletteProps`:

| Nome            | Descrição                                                                             |                          Tipo                          | Padrão |
| :-------------- | :------------------------------------------------------------------------------------ | :----------------------------------------------------: | :----: |
| aria-label      | Atributo HTML `aria-label`                                                            |                        `string`                        |        |
| aria-labelledby | ID do elemento de legenda visível do `Palette`                                        |                        `string`                        |        |
| className       | Atributo HTML `class`                                                                 |                        `string`                        |        |
| columns         | Número de elementos por linha                                                         |                        `number`                        |  `6`   |
| defaultValue    | Define o estado de valor inicial quando o componente é montado                        |                       `string[]`                       |        |
| disabled        | Desabilita as opções                                                                  |                       `boolean`                        | `false` |
| multiple        | Habilita a seleção de múltiplas opções                                                |                       `boolean`                        | `true`  |
| onBlur          | Manipulador de evento `onBlur`                                                        | `(event: React.FocusEvent<HTMLButtonElement>) => void` |        |
| onFocus         | Manipulador de evento `onFocus`                                                       | `(event: React.FocusEvent<HTMLButtonElement>) => void` |        |
| onUpdate        | Dispara quando o usuário altera o estado. Fornece o novo valor como argumento do callback |              `(value: string[]) => void`               |        |
| optionClassName | Atributo HTML `class` para o botão da paleta                                          |                        `string`                        |        |
| options         | Lista de opções (elementos da paleta)                                                 |                   `PaletteOption[]`                    |  `[]`  |
| qa              | Atributo HTML `data-qa`, usado para testes                                            |                        `string`                        |        |
| rowClassName    | Atributo HTML `class` para uma linha da paleta                                        |                        `string`                        |        |
| size            | Define o tamanho dos elementos                                                        |                 `xs` `s` `m` `l` `xl`                  |  `m`   |
| style           | Atributo HTML `style`                                                                 |                 `React.CSSProperties`                  |        |
| value           | Valor atual para o uso controlado do componente                                       |                       `string[]`                       |        |

`PaletteOption`:

| Nome     | Descrição              |    Tipo     | Padrão |
| :------- | :--------------------- | :---------: | :-----: |
| content  | Atributo `class` HTML  | `ReactNode` |         |
| disabled | Desabilita o botão     |  `boolean`  | `false` |
| title    | Atributo `title` HTML  |  `string`   |         |
| value    | Valor do controle      |  `string`   |         |
