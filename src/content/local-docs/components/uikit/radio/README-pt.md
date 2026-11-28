<!--GITHUB_BLOCK-->

# Radio

<!--/GITHUB_BLOCK-->

O componente `Radio` permite que os usuários selecionem uma única opção de uma lista de escolhas.

```tsx
import {Radio} from '@gravity-ui/uikit';
```

## Estados

O `Radio` pode ter os seguintes estados:

- Marcado: O rádio está selecionado.
- Desabilitado: O rádio não está disponível para seleção.

<!--SANDBOX
import {Radio} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Radio value="option 1" content="Unchecked" size="l" checked={false} />
            <Radio value="option 2" content="Checked" size="l" checked />
            <Radio value="option 3" content="Disabled" size="l" disabled />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Radio value="option 1" content="Unchecked" size="l" checked={false}/>
<Radio value="option 2" content="Checked" size="l" checked/>
<Radio value="option 3" content="Disabled" size="l" disabled/>
```

<!--/GITHUB_BLOCK-->

## Tamanho

Para gerenciar o tamanho do `Radio`, use a propriedade `size`. O tamanho padrão é `m`.

<!--SANDBOX
import {Radio} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Radio value="option 1" content="M Size" size="m" />
            <Radio value="option 2" content="L Size" size="l" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Radio value="option 1" content="M Size" size="m"/>
<Radio value="option 2" content="L Size" size="l"/>
```

<!--/GITHUB_BLOCK-->

## Rótulo

Você pode atribuir um rótulo a um `Radio` usando a propriedade `content` ou fornecê-lo como uma propriedade filho.

<!--SANDBOX
import {Box, Radio} from '@gravity-ui/uikit';

export default function () {
    return (
        <div>
            <Radio value="option-1" content="Content" size="l" />
            <Box spacing={{mt: 2}}>
                <Radio value="option-2" size="l">
                    <span>Content as children</span>
                </Radio>
            </Box>
        </div>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div>
  <Radio content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Radio size="l">
      <span>Content as children</span>
    </Radio>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## Propriedades

| Nome           | Descrição                                                                                                |                     Tipo                      | Padrão |
| :------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----: |
| children       | O conteúdo do rádio (geralmente, um rótulo).                                                             |                  `ReactNode`                  |         |
| content        | O conteúdo do rádio (alternativa a `children`).                                                          |                  `ReactNode`                  |         |
| disabled       | Alterna o estado `disabled` do rádio.                                                                    |                   `boolean`                   | `false` |
| checked        | Alterna o estado `checked` do rádio.                                                                     |                   `boolean`                   | `false` |
| defaultChecked | Define o estado inicial marcado quando o componente é montado                                            |                   `boolean`                   | `false` |
| onUpdate       | Dispara quando o estado do rádio é alterado pelo usuário e fornece o valor marcado como argumento de callback. |         `(checked: boolean) => void`          |         |
| onChange       | Dispara quando o estado do rádio é alterado pelo usuário e fornece o evento de alteração como argumento de callback.  |                  `Function`                   |         |
| onFocus        | Manipulador de evento para usar quando o elemento de entrada do rádio recebe foco.                         |                  `Function`                   |         |
| onBlur         | Manipulador de evento para usar quando o elemento de entrada do rádio perde o foco.                        |                  `Function`                   |         |
| size           | Define o tamanho do rádio.                                                                               |                    `m` `l`                    |   `m`   |
| id             | Atributo `id` do HTML                                                                                    |                   `string`                    |         |
| qa             | Atributo `data-qa` do HTML, usado para testes.                                                           |                   `string`                    |         |
| style          | Atributo `style` do HTML                                                                                 |             `React.CSSProperties`             |         |
| className      | Atributo `class` do HTML                                                                                 |                   `string`                    |         |
| title          | Atributo `title` do HTML                                                                                 |                   `string`                    |         |
| name           | Atributo `name` do HTML para o elemento de entrada                                                       |                   `string`                    |         |
| value          | Valor de controle                                                                                        |                   `string`                    |         |
| indeterminate  | Alterna o estado indeterminado do rádio.                                                                 |                   `boolean`                   | `false` |
| controlProps   | Propriedades adicionais para o elemento de entrada subjacente                                            | `React.InputHTMLAttributes<HTMLInputElement>` |         |
| controlRef     | Ref para o elemento de entrada subjacente                                                                |         `React.Ref<HTMLInputElement>`         |         |
