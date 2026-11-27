O componente `TableColumnSetup` fornece uma interface de usuário para configurar a visibilidade e a ordem das colunas da tabela. Ele exibe um botão que abre um popup com uma lista de colunas disponíveis, permitindo que os usuários mostrem/ocultem colunas e, opcionalmente, as reordenem por meio de arrastar e soltar.

```tsx
import {TableColumnSetup} from '@gravity-ui/uikit/legacy';
```

Este componente é legado: novos recursos devem ser direcionados para [`@gravity-ui/table`](https://github.com/gravity-ui/table), consulte o [guia de migração para v8](../../../../docs/migration-to-v8.md#table-and-tablecolumnsetup). Assim como tudo em `@gravity-ui/uikit/legacy`, ele requer as dependências opcionais peer `@hello-pangea/dnd`, `react-window` e `react-virtualized-auto-sizer` instaladas junto com o pacote: o ponto de entrada carrega todas elas, independentemente do que você importar dele.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Colunas ordenáveis

Ative a funcionalidade de arrastar e soltar para permitir que os usuários reordenem as colunas definindo a propriedade `sortable` como `true`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Modos de aplicação

Controle quando as alterações são aplicadas usando a propriedade `hideApplyButton`:

- `true` - As alterações são aplicadas imediatamente quando o usuário alterna as colunas
- `false` - As alterações são aplicadas somente quando o usuário clica no botão Aplicar

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Exibição de status

Mostre a contagem de colunas selecionadas no botão do seletor ativando a propriedade `showStatus`.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Seletor personalizado

Personalize o botão de gatilho usando a propriedade `renderSwitcher`.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Propriedades

| Nome            | Descrição                                                     |                            Tipo                             | Padrão |
| :-------------- | :-------------------------------------------------------------- | :---------------------------------------------------------: | :----: |
| items           | Matriz de itens de configuração de coluna                             |                  `TableColumnSetupItem[]`                   |        |
| onUpdate        | Callback acionado quando a configuração da coluna muda                |          `(items: TableColumnSetupItem[]) => void`          |        |
| disabled        | Desabilita o botão do seletor                                   |                          `boolean`                          | `false` |
| sortable        | Habilita a ordenação de colunas por arrastar e soltar                 |                          `boolean`                          | `true`  |
| hideApplyButton | Quando aplicar as alterações: imediatamente ou manualmente via botão Aplicar |                          `boolean`                          | `false` |
| showStatus      | Mostra a contagem de colunas selecionadas/totais no botão do seletor           |                          `boolean`                          | `false` |
| popupWidth      | Largura do popup                                              |                      `number \| 'fit'`                      |        |
| popupPlacement  | Posicionamento do popup em relação ao gatilho                             |    [`PopupPlacement`](../../Popup/README.md#properties)     |        |
| renderSwitcher  | Função de renderização personalizada para o botão do seletor                  | `(props: SwitcherProps) => React.ReactElement \| undefined` |        |
| switcher        | **Obsoleto.** Use `renderSwitcher` em vez disso                    |              `React.ReactElement \| undefined`              |        |
| getItemTitle    | Função para obter o título do item                                  |      `(item: TableColumnSetupItem) => React.ReactNode`      |        |
| className       | Classe CSS personalizada para o elemento raiz                           |                          `string`                           |        |

### TableColumnSetupItem

| Nome     | Descrição                                       |        Tipo         | Padrão |
| :------- | :------------------------------------------------ | :-----------------: | :-----: |
| id       | Identificador único para a coluna                  |      `string`       |         |
| title    | Título de exibição para a coluna                      |  `React.ReactNode`  |         |
| selected | Se a coluna está atualmente visível           |      `boolean`      |         |
| required | Se a coluna é obrigatória (não pode ser ocultada) |      `boolean`      |         |
| sticky   | Posicionamento fixo para a coluna                 | `'left' \| 'right'` |         |

### SwitcherProps

| Nome      | Descrição                            |                   Tipo                    |
| :-------- | :------------------------------------- | :---------------------------------------: |
| onClick   | Manipulador de evento de clique para o switcher   |  `React.MouseEventHandler<HTMLElement>`   |
| onKeyDown | Manipulador de evento KeyDown para o switcher | `React.KeyboardEventHandler<HTMLElement>` |