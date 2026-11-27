<!--GITHUB_BLOCK-->

# Checkbox

<!--/GITHUB_BLOCK-->

O componente `Checkbox` permite ao usuário selecionar ou desmarcar um valor específico.

```tsx
import {Checkbox} from '@gravity-ui/uikit';
```

## Estados

Um `Checkbox` pode ter diferentes estados:

- Marcado: A caixa de seleção está marcada.
- Desabilitado: A caixa de seleção está indisponível.
- Indeterminado: A caixa de seleção está em um estado intermediário entre marcada e desmarcada.

<!--SANDBOX
import {Checkbox} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Checkbox size="l" checked={false}>Unchecked</Checkbox>
            <Checkbox size="l" checked>Checked</Checkbox>
            <Checkbox size="l" disabled>Disabled</Checkbox>
            <Checkbox size="l" indeterminate>Indeterminate</Checkbox>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Checkbox size="l" checked={false}>Unchecked</Checkbox>
<Checkbox size="l" checked>Checked</Checkbox>
<Checkbox size="l" disabled>Disabled</Checkbox>
<Checkbox size="l" indeterminate>Indeterminate</Checkbox>
```

<!--/GITHUB_BLOCK-->

## Tamanho

Use a propriedade `size` para gerenciar o tamanho do `Checkbox`. O tamanho padrão é `m`.

<!--SANDBOX
import {Checkbox} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Checkbox size="m">M Size</Checkbox>
            <Checkbox size="l">L Size</Checkbox>
            <Checkbox size="xl">XL Size</Checkbox>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Checkbox size="m">M Size</Checkbox>
<Checkbox size="l">L Size</Checkbox>
<Checkbox size="xl">XL Size</Checkbox>
```

<!--/GITHUB_BLOCK-->

## Rótulo

Você pode atribuir um rótulo a um `Checkbox` usando a propriedade `content` ou fornecê-lo como uma propriedade filho.

<!--SANDBOX
import {Checkbox} from '@gravity-ui/uikit';

export default function () {
    return (
        <div>
            <Checkbox content="Content" size="l" />
            <div style={{marginTop: 10}}>
                <Checkbox size="l">
                    <span>Content as children</span>
                </Checkbox>
            </div>
        </div>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div>
  <Checkbox content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Checkbox size="l">
      <span>Content as children</span>
    </Checkbox>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## Propriedades

| Nome           | Descrição                                                                                             |                     Tipo                      | Padrão |
| :------------- | :---------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----: |
| children       | Conteúdo da caixa de seleção (geralmente, um rótulo).                                                 |                  `ReactNode`                  |         |
| content        | Conteúdo da caixa de seleção (alternativa a `children`).                                              |                  `ReactNode`                  |         |
| disabled       | Alterna o estado `disabled` da caixa de seleção.                                                      |                   `boolean`                   | `false` |
| checked        | Alterna o estado `checked` da caixa de seleção.                                                       |                   `boolean`                   | `false` |
| defaultChecked | Define o estado inicial de seleção quando o componente é montado.                                     |                   `boolean`                   | `false` |
| onUpdate       | Dispara quando o usuário altera o estado da caixa de seleção e fornece o valor de seleção como um argumento de callback. |         `(checked: boolean) => void`          |         |
| onChange       | Dispara quando o usuário altera o estado da caixa de seleção e fornece o evento de alteração como um argumento de callback. |                  `Function`                   |         |
| onFocus        | Manipulador de eventos para usar quando o elemento de entrada da caixa de seleção recebe foco.        |                  `Function`                   |         |
| onBlur         | Manipulador de eventos para usar quando o elemento de entrada da caixa de seleção perde o foco.       |                  `Function`                   |         |
| size           | Determina o tamanho da caixa de seleção.                                                              |                    `m` `l`                    |   `m`   |
| id             | Atributo `id` do HTML                                                                                 |                   `string`                    |         |
| qa             | Atributo `data-qa` do HTML, usado para testes                                                         |                   `string`                    |         |
| style          | Atributo `style` do HTML                                                                              |             `React.CSSProperties`             |         |
| className      | Atributo `class` do HTML                                                                              |                   `string`                    |         |
| title          | Atributo `title` do HTML                                                                              |                   `string`                    |         |
| name           | Atributo `name` do HTML para o elemento de entrada.                                                   |                   `string`                    |         |
| value          | Atributo `value` do HTML para o elemento de entrada.                                                  |                   `string`                    |         |
| indeterminate  | Alterna o estado `indeterminate` da caixa de seleção.                                                 |                   `boolean`                   | `false` |
| controlProps   | Propriedades adicionais para o elemento de entrada subjacente.                                        | `React.InputHTMLAttributes<HTMLInputElement>` |         |
| controlRef     | Ref para o elemento de entrada subjacente.                                                            |         `React.Ref<HTMLInputElement>`         |         |
