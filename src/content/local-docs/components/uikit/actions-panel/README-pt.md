Use um `ActionsPanel` para renderizar vários botões em uma linha.
Quando não houver espaço suficiente, os botões que não couberem serão adicionados a um menu de overflow.

## Exemplo

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Ícones de ação

Use as propriedades `Button` ou `DropdownMenu` para definir ícones.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Nota

Use a propriedade `renderNote` para renderizar uma nota.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Grupos no menu suspenso

Use `action.dropdown.group` para agrupar ações no menu suspenso.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Submenu de ação e menu suspenso aninhado

Veja o exemplo `actions` abaixo e a documentação sobre o componente `DropdownMenu`.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Propriedades

| Nome          | Descrição                                               |          Tipo           | Padrão |
| :------------ | :-------------------------------------------------------- | :---------------------: | :----: |
| actions       | Matriz de ações                                          |  `ActionsPanelItem[]`   |        |
| onClose       | Manipulador de clique opcional do botão fechar                       |      `() => void`       |        |
| renderNote    | Render-prop opcional para exibir o conteúdo de uma nota | `() => React.ReactNode` |        |
| className     | Atributo `class` HTML opcional                           |        `string`         |        |
| noteClassName | Atributo `class` HTML opcional                           |        `string`         |        |
| maxRowActions | Número máximo de ações em uma linha                        |        `number`         |  `4`   |

## ActionsPanelItem:

| Nome      | Descrição                                   |                    Tipo                    | Padrão |
| :-------- | :-------------------------------------------- | :----------------------------------------: | :----: |
| id        | ID de ação exclusivo                              |                  `string`                  |        |
| dropdown  | Configurações para ação de menu suspenso no menu de overflow | `{item: DropdownMenuItem; group?: string}` |        |
| button    | Configurações para ação de botão                    |           `{props: ButtonProps}`           |        |
| collapsed | Se verdadeiro, o item fica sempre dentro do menu suspenso |                 `boolean`                  |        |