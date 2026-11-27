<!--GITHUB_BLOCK-->

# Switch

<!--/GITHUB_BLOCK-->

O componente `Switch` é usado para alternar entre dois estados: tipicamente, entre **ligado** e **desligigado**, ou **habilitado** e **desabilitado**.

```tsx
import {Switch} from '@gravity-ui/uikit';
```

## Estados

Um `Switch` pode ter diferentes estados:

- Marcado: Quando o switch está no estado **Ligado**.
- Desabilitado: Quando o switch está indisponível.

<!--SANDBOX
import {Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Switch size="l" checked={false}>
                Unchecked
            </Switch>
            <Switch size="l" checked>
                Checked
            </Switch>
            <Switch size="l" disabled>
                Disabled
            </Switch>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Switch size="l" checked={false}>Unchecked</Switch>
<Switch size="l" checked>Checked</Switch>
<Switch size="l" disabled>Disabled</Switch>
```

<!--/GITHUB_BLOCK-->

## Tamanho

Use a propriedade `size` para gerenciar o tamanho do `Switch`. O tamanho padrão é `m`.

<!--SANDBOX
import {Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Switch size="s">S Size</Switch>
            <Switch size="m">M Size</Switch>
            <Switch size="l">L Size</Switch>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Switch size="s">S Size</Switch>
<Switch size="m">M Size</Switch>
<Switch size="l">L Size</Switch>
```

<!--/GITHUB_BLOCK-->

## Rótulo

Você pode atribuir um rótulo a um `Switch` usando a propriedade `content` ou fornecê-lo como uma propriedade filho.

<!--SANDBOX
import {Box, Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <div>
            <Switch content="Content" size="l" />
            <Box spacing={{mt: 2}}>
                <Switch size="l">
                    <span>Content as children</span>
                </Switch>
            </Box>
        </div>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div>
  <Switch content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Switch size="l">
      <span>Content as children</span>
    </Switch>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## Propriedades

| Nome           | Descrição                                                                                              |                     Tipo                      | Padrão |
| :------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----: |
| children       | O conteúdo do switch (geralmente, um rótulo)                                                             |                  `ReactNode`                  |         |
| content        | O conteúdo do switch (alternativa a `children`)                                                      |                  `ReactNode`                  |         |
| disabled       | Alterna o estado `disabled` do switch                                                                |                   `boolean`                   | `false` |
| loading        | Alterna o estado `loading` do switch                                                                |                   `boolean`                   | `false` |
| checked        | Alterna o estado `checked` do switch                                                                |                   `boolean`                   | `false` |
| defaultChecked | Define o estado inicial marcado quando o componente é montado                                             |                   `boolean`                   | `false` |
| onUpdate       | Dispara quando o estado do switch é alterado pelo usuário e fornece o valor marcado como um argumento de callback |         `(checked: boolean) => void`          |         |
| onChange       | Dispara quando o estado do switch é alterado pelo usuário e fornece o evento de alteração como um argumento de callback  |                  `Function`                   |         |
| onFocus        | Manipulador de evento para usar quando o elemento de entrada do switch recebe foco                                        |                  `Function`                   |         |
| onBlur         | Manipulador de evento para usar quando o elemento de entrada do switch perde o foco                                           |                  `Function`                   |         |
| size           | Define o tamanho do switch                                                                              |                  `s` `m` `l`                  |   `m`   |
| id             | Atributo HTML `id`                                                                                      |                   `string`                    |         |
| qa             | Atributo HTML `data-qa`, usado para testes                                                               |                   `string`                    |         |
| style          | Atributo HTML `style`                                                                                   |             `React.CSSProperties`             |         |
| className      | Atributo HTML `class`                                                                                   |                   `string`                    |         |
| title          | Atributo HTML `title`                                                                                   |                   `string`                    |         |
| name           | Atributo HTML `name` para o elemento de entrada                                                              |                   `string`                    |         |
| value          | Atributo HTML `value` para o elemento de entrada                                                             |                   `string`                    |         |
| indeterminate  | Alterna o estado indeterminado do switch                                                            |                   `boolean`                   | `false` |
| controlProps   | Propriedades adicionais para o elemento de entrada subjacente                                                    | `React.InputHTMLAttributes<HTMLInputElement>` |         |
| controlRef     | Ref para o elemento de entrada subjacente                                                                      |         `React.Ref<HTMLInputElement>`         |         |
