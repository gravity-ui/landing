<!--GITHUB_BLOCK-->

# Label

<!--/GITHUB_BLOCK-->

Você pode usar `Label`s para destacar certas informações. Um `Label` com o botão `Close` ou `Copy` pode ser útil para várias ações simples.

`Label`s são mais adequados para exibir informações de texto de uma linha com diferentes códigos de cores que mostram sua importância.

```tsx
import {Label} from '@gravity-ui/uikit';
```

## Aparência

Um `Label` pode ser exibido em vários estilos.

### Tema

Use a propriedade `theme` para aplicar diferentes temas para vários status. Você pode usar os seguintes valores: `normal`, `info`, `success`, `warning`, `danger`, `utility`, `unknown` e `clear`.
O tema padrão é `normal`.

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label theme="normal">Normal</Label>
            <Label theme="info">Info</Label>
            <Label theme="success">Success</Label>
            <Label theme="warning">Warning</Label>
            <Label theme="danger">Danger</Label>
            <Label theme="utility">Utility</Label>
            <Label theme="unknown">Unknown</Label>
            <Label theme="clear">Clear</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label theme="normal">Normal</Label>
<Label theme="info">Info</Label>
<Label theme="success">Success</Label>
<Label theme="warning">Warning</Label>
<Label theme="danger">Danger</Label>
<Label theme="utility">Utility</Label>
<Label theme="unknown">Unknown</Label>
<Label theme="clear">Clear</Label>
```

<!--/GITHUB_BLOCK-->

### Tipo

A propriedade `type` adiciona várias opções a um `Label`:

`copy`: Adiciona um botão de cópia; quando clicado, ele copia o valor da propriedade `copyText`.

`close`: Adiciona um botão de fechar para gerenciar listas de labels.

`info`: Adiciona um ícone de informação ao label.

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label type="default" onClick={() => alert('On click label')} size="s">
                Clickable
            </Label>
            <Label type="close" onCloseClick={() => alert('On click close')} size="s">
                Closable
            </Label>
            <Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">
                Copy
            </Label>
            <Label type="info" size="s">Info</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label type="default" onClick={() => alert('On click label')} size="s">Clickable</Label>
<Label type="close" onCloseClick={() => alert('On click close')} size="s">Closable</Label>
<Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">Copy</Label>
<Label type="info" size="s">Info</Label>
```

<!--/GITHUB_BLOCK-->

### Ícone

Você pode adicionar um ícone com a propriedade `icon`. Para fazer isso, use o componente [`Icon`](../Icon), que é um wrapper especial para SVGs.

<!--SANDBOX
import {Icon, Label} from '@gravity-ui/uikit';
import {Gear} from '@gravity-ui/icons';

export default function () {
    return (
        <>
            <Label icon={<Icon size={16} data={Gear} />}>Icon</Label>
            <Label type="close" icon={<Icon size={16} data={Gear} />}>Icon and close</Label>
            <Label type="copy" icon={<Icon size={16} data={Gear} />}>Icon and copy</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label icon={<Icon size={16} data={GearIcon} />}>Icon</Label>
<Label type="close" icon={<Icon size={16} data={GearIcon} />}>Icon and close</Label>
<Label type="copy" icon={<Icon size={16} data={GearIcon} />}>Icon and copy</Label>
```

<!--/GITHUB_BLOCK-->

## Valor

Você pode usar `Label`s para exibir informações de chave-valor. Para isso, você precisa fornecer a chave para a propriedade `children` e o valor para `value`:

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label theme="normal" value="Value">Key</Label>
            <Label theme="info" value="Value">Key</Label>
            <Label theme="success" value="Value">Key</Label>
            <Label theme="warning" value="Value">Key</Label>
            <Label theme="danger" value="Value">Key</Label>
            <Label theme="utility" value="Value">Key</Label>
            <Label theme="unknown" value="Value">Key</Label>
            <Label theme="clear" value="Value">Key</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label theme="normal" value="Value">Key</Label>
<Label theme="info" value="Value">Key</Label>
<Label theme="success" value="Value">Key</Label>
<Label theme="warning" value="Value">Key</Label>
<Label theme="danger" value="Value">Key</Label>
<Label theme="utility" value="Value">Key</Label>
<Label theme="unknown" value="Value">Key</Label>
<Label theme="clear" value="Value">Key</Label>
```

<!--/GITHUB_BLOCK-->

## Estado

Um `label` pode ter diferentes estados:

- `disabled`: Nenhuma interação permitida.
- `interactive`: Torna o label passível de hover.
- `loading`: Mostra um estado de carregamento.

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label>Default</Label>
            <Label disabled>Disabled</Label>
            <Label interactive>Interactive</Label>
            <Label loading>Loading</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label>Default</Label>
<Label disabled>Disabled</Label>
<Label interactive>Interactive</Label>
<Label loading>Loading</Label>
```

<!--/GITHUB_BLOCK-->

## Tamanho

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label size="xxs">XXS size</Label>
            <Label size="xs">XS size</Label>
            <Label size="s">S size</Label>
            <Label size="m">M size</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label size="xxs">XXS size</Label>
<Label size="xs">XS size</Label>
<Label size="s">S size</Label>
<Label size="m">M size</Label>
```

<!--/GITHUB_BLOCK-->

## Propriedades

| Nome             | Descrição                                     |                  Tipo                   |   Padrão   |
| :--------------- | :---------------------------------------------- | :-------------------------------------: | :---------: |
| children         | Conteúdo                                        |            `React.ReactNode`            |             |
| className        | Atributo `class` do HTML                        |                `string`                 |             |
| closeButtonLabel | `aria-label` do botão de fechar                 |                `string`                 |             |
| copyButtonLabel  | `aria-label` do botão de copiar                 |                `string`                 |             |
| copyText         | Texto para copiar                               |                `string`                 |             |
| disabled         | Estado desabilitado                             |                `boolean`                |             |
| icon             | Ícone do rótulo (à esquerda)                    |            `React.ReactNode`            |             |
| interactive      | Habilita efeito hover                           |                `boolean`                |             |
| loading          | Estado de carregamento                          |                `boolean`                |   `false`   |
| onClick          | Manipulador de evento `click`                   |               `Function`                |             |
| onCloseClick     | Manipulador de evento `click` do botão de fechar |               `Function`                |             |
| onCopy           | Manipulador de evento `copy`                    |               `Function`                |             |
| qa               | Atributo `data-qa` do HTML, usado para testes   |                `string`                 |             |
| size             | Tamanho do rótulo                                |       `"xxs"` `"xs"` `"s"` `"m"`        |   `"xs"`    |
| theme            | Tema do rótulo                                  |                `string`                 | `"normal"`  |
| title            | Atributo `title` do HTML                        |                `string`                 |             |
| type             | Tipo do rótulo                                   | `"default"` `"copy"` `"close"` `"info"` | `"default"` |
| value            | Valor do rótulo (exibido como `"children : value"`) |            `React.ReactNode`            |             |
| width            | Controla como o Rótulo usa o espaço do pai      |                `"auto"`                 |             |
