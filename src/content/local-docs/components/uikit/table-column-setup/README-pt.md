O componente `TableColumnSetup` fornece uma interface de usuário para configurar a visibilidade e a ordem das colunas da tabela. Ele exibe um botão que abre um popup com uma lista de colunas disponíveis, permitindo que os usuários mostrem/ocultem colunas e, opcionalmente, as reordenem por meio de arrastar e soltar.

```tsx
import {TableColumnSetup} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Colunas ordenáveis

Ative a funcionalidade de arrastar e soltar para permitir que os usuários reordenem as colunas definindo a propriedade `sortable` como `true`.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Modos de aplicação

Controle quando as alterações são aplicadas usando a propriedade `hideApplyButton`:

- `true` - As alterações são aplicadas imediatamente quando o usuário alterna as colunas
- `false` - As alterações são aplicadas somente quando o usuário clica no botão Aplicar

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Exibição de status

Mostre a contagem de colunas selecionadas no botão do switcher ativando a propriedade `showStatus`.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Switcher personalizado

Personalize o botão de gatilho usando a propriedade `renderSwitcher`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Propriedades

| Nome            | Descrição                                                     |                            Tipo                             | Padrão |
| :-------------- | :-------------------------------------------------------------- | :---------------------------------------------------------: | :----: |
| items           | Matriz de itens de configuração de coluna                             |                  `TableColumnSetupItem[]`                   |        |
| onUpdate        | Callback acionado quando a configuração da coluna muda                |          `(items: TableColumnSetupItem[]) => void`          |        |
| disabled        | Desabilita o botão do switcher                                    |                          `boolean`                          | `false` |
| sortable        | Habilita a ordenação de colunas por arrastar e soltar                        |                          `boolean`                          | `true`  |
| hideApplyButton | Quando aplicar as alterações: imediatamente ou manualmente via botão Aplicar |                          `boolean`                          | `false` |
| showStatus      | Mostra a contagem de colunas selecionadas/totais no botão do switcher           |                          `boolean`                          | `false` |
| popupWidth      | Largura do popup                                              |                      `number \| 'fit'`                      |        |
| popupPlacement  | Posicionamento do popup em relação ao gatilho                             |      [`PopupPlacement`](../Popup/README.md#properties)      |        |
| renderSwitcher  | Função de renderização personalizada para o botão do switcher                  | `(props: SwitcherProps) => React.ReactElement \| undefined` |        |
| switcher        | **Obsoleto.** Use `renderSwitcher` em vez disso                    |              `React.ReactElement \| undefined`              |        |
| getItemTitle    | Função para obter o título do item                                      |      `(item: TableColumnSetupItem) => React.ReactNode`      |        |
| className       | Classe CSS personalizada para o elemento raiz                           |                          `string`                           |        |

### TableColumnSetupItem

| Nome     | Descrição                                       |        Tipo         | Padrão |
| :------- | :------------------------------------------------ | :-----------------: | :----: |
| id       | Identificador exclusivo para a coluna                  |      `string`       |        |
| title    | Título de exibição para a coluna                      |  `React.ReactNode`  |        |
| selected | Se a coluna está atualmente visível                   |      `boolean`      |        |
| required | Se a coluna é obrigatória (não pode ser ocultada) |      `boolean`      |        |
| sticky   | Posicionamento fixo para a coluna                 |      `'left' \| 'right'`      |        |

### SwitcherProps
GRAVITY_TRANSLATION_BLOCK_10_END

| Nome      | Descrição                               |                   Tipo                    |
| :-------- | :-------------------------------------- | :---------------------------------------: |
| onClick   | Manipulador de evento de clique para o switcher |  `React.MouseEventHandler<HTMLElement>`   |
| onKeyDown | Manipulador de evento de pressionamento de tecla para o switcher | `React.KeyboardEventHandler<HTMLElement>` |
GRAVITY_TRANSLATION_BLOCK_1_END
## Switch

O componente `Switch` é um controle de alternância que permite aos usuários selecionar entre dois estados possíveis, geralmente ligado/desligado ou ativado/desativado.

GRAVITY_TRANSLATION_BLOCK_2_END
### Importação

```jsx
import { Switch } from '@your-ui-library/components';
```

GRAVITY_TRANSLATION_BLOCK_3_END
### Uso Básico

```jsx
<Switch />
```

GRAVITY_TRANSLATION_BLOCK_4_END
### Propriedades

O componente `Switch` aceita as seguintes propriedades:

GRAVITY_TRANSLATION_BLOCK_5_END
| Nome      | Descrição                               |                   Tipo                    |
| :-------- | :-------------------------------------- | :---------------------------------------: |
| checked   | Se o switch está marcado ou não.        |                  `boolean`                  |
| disabled  | Se o switch está desabilitado.          |                  `boolean`                  |
| onChange  | Callback chamado quando o estado muda.  | `(checked: boolean) => void` |
| onClick   | Click event handler for the switcher   |  `React.MouseEventHandler<HTMLElement>`   |
| onKeyDown | KeyDown event handler for the switcher | `React.KeyboardEventHandler<HTMLElement>` |

GRAVITY_TRANSLATION_BLOCK_6_END
### Exemplo com `checked` e `onChange`

```jsx
import React, { useState } from 'react';
import { Switch } from '@your-ui-library/components';

function MyComponent() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked) => {
    setIsChecked(checked);
  };

  return (
    <Switch checked={isChecked} onChange={handleChange} />
  );
}
```

GRAVITY_TRANSLATION_BLOCK_7_END
### Exemplo com `disabled`

```jsx
<Switch disabled />
```

GRAVITY_TRANSLATION_BLOCK_8_END
### Acessibilidade

O componente `Switch` é projetado com acessibilidade em mente. Ele usa os atributos ARIA apropriados para garantir que seja utilizável por leitores de tela e outros dispositivos de tecnologia assistiva.

GRAVITY_TRANSLATION_BLOCK_9_END
*   **`role="switch"`**: Indica que o elemento atua como um switch.
*   **`aria-checked`**: Reflete o estado atual do switch (true ou false).
*   **`tabIndex="0"`**: Permite que o switch receba foco do teclado.

GRAVITY_TRANSLATION_BLOCK_10_END
Você pode interagir com o switch usando a tecla `Espaço` para alternar entre os estados.

GRAVITY_TRANSLATION_BLOCK_11_END