O componente `SegmentedRadioGroup` é usado para criar um grupo de botões de rádio onde os usuários podem selecionar uma única opção entre várias escolhas.

```tsx
import {SegmentedRadioGroup} from '@gravity-ui/uikit';
```

### Estado desabilitado

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Tamanho

Use a propriedade `size` para gerenciar o tamanho do `SegmentedRadioGroup`. O tamanho padrão é `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Largura

Use a propriedade `width` para gerenciar a largura do `SegmentedRadioGroup`:

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Propriedades

| Nome         | Descrição                                                                                              |                Tipo                | Padrão |
| :----------- | :------------------------------------------------------------------------------------------------------- | :--------------------------------: | :----: |
| children     | Conteúdo do botão de rádio.                                                                              |            `ReactNode`             |        |
| disabled     | Alterna o estado `disabled` do botão de rádio.                                                           |             `boolean`              | `false` |
| options      | Opções para o botão de rádio.                                                                            | `SegmentedRadioGroupOptionProps[]` |        |
| defaultValue | Define o estado do valor inicial quando o componente é montado.                                          |              `string`              |        |
| onUpdate     | Dispara quando o usuário altera o estado do botão de rádio e fornece o novo valor como um argumento de callback. |     `(value: string) => void`      |        |
| onChange     | Dispara quando o usuário altera o estado do botão de rádio e fornece o evento de alteração como um argumento de callback. |             `Function`             |        |
| onFocus      | Manipulador de eventos para usar quando o elemento de entrada de rádio recebe foco.                      |             `Function`             |        |
| onBlur       | Manipulador de eventos para usar quando o elemento de entrada de rádio perde o foco.                     |             `Function`             |        |
| width        | Define a largura do botão de rádio.                                                                      |            `auto - max`            |        |
| size         | Define o tamanho do botão de rádio.                                                                      |          `s` `m` `l` `xl`          |   `m`   |
| name         | Atributo HTML `name` para o elemento de entrada.                                                         |              `string`              |        |
| qa           | Atributo HTML `data-qa`, usado para testes                                                               |              `string`              |        |
| style        | Atributo HTML `style`                                                                                    |       `React.CSSProperties`        |        |
| className    | Atributo HTML `class`                                                                                    |              `string`              |        |

## SegmentedRadioGroup.Option

O componente `SegmentedRadioGroup` também exporta um componente `Option` aninhado. Você pode usá-lo para criar opções de botões de rádio dentro de um `SegmentedRadioGroup`.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Propriedades

| Nome     | Descrição                                           |    Tipo     | Padrão |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | O conteúdo do rádio (geralmente, um rótulo).         | `ReactNode` |         |
| content  | O conteúdo do rádio (alternativa a `children`).     | `ReactNode` |         |
| disabled | Alterna o estado `disabled` do rádio.               |  `boolean`  | `false` |
| value    | Valor do controle                                   |  `string`   |         |

GRAVITY_TRANSLATION_BLOCK_1_END

## Radio

O componente `Radio` é usado para permitir que o usuário selecione uma opção de um conjunto de opções mutuamente exclusivas.

GRAVITY_TRANSLATION_BLOCK_2_END

### Importação

```jsx
import { Radio } from '@gravity-ui/react';
```

GRAVITY_TRANSLATION_BLOCK_3_END

### Uso

```jsx
import React from 'react';
import { Radio } from '@gravity-ui/react';

function App() {
  const [value, setValue] = React.useState('option1');

  return (
    <div>
      <Radio
        value="option1"
        checked={value === 'option1'}
        onChange={() => setValue('option1')}
      >
        Opção 1
      </Radio>
      <Radio
        value="option2"
        checked={value === 'option2'}
        onChange={() => setValue('option2')}
      >
        Opção 2
      </Radio>
    </div>
  );
}
```

GRAVITY_TRANSLATION_BLOCK_4_END

### Props

A tabela a seguir descreve as props disponíveis para o componente `Radio`.

GRAVITY_TRANSLATION_BLOCK_5_END

| Nome     | Descrição                                           |    Tipo     | Padrão |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | O conteúdo do rádio (geralmente, um rótulo).         | `ReactNode` |         |
| content  | O conteúdo do rádio (alternativa a `children`).     | `ReactNode` |         |
| disabled | Alterna o estado `disabled` do rádio.               |  `boolean`  | `false` |
| value    | Valor do controle                                   |  `string`   |         |

GRAVITY_TRANSLATION_BLOCK_6_END