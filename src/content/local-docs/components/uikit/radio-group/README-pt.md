O componente `RadioGroup` é usado para criar um grupo onde os usuários podem selecionar uma única opção entre várias escolhas.

```tsx
import {RadioGroup} from '@gravity-ui/uikit';
```

### Estado desativado

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Tamanho

Use a propriedade `size` para gerenciar o tamanho do `RadioGroup`. O tamanho padrão é `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Direção

Use a propriedade `direction` para gerenciar a direção do `RadioGroup`. A direção padrão é `horizontal`.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

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

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Propriedades

| Nome     | Descrição                                         |    Tipo     | Padrão |
| :------- | :------------------------------------------------ | :---------: | :----: |
| children | O conteúdo do rádio (geralmente, um rótulo).        | `ReactNode` |        |
| content  | O conteúdo do rádio (alternativa a `children`). | `ReactNode` |        |
| disabled | Alterna o estado `disabled` do rádio.             |  `boolean`  | `false` |
| value    | Valor de controle                                 |  `string`   |        |