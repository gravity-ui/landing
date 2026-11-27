Use um `ActionsPanel` para renderizar vários botões em uma linha.
Quando não houver espaço suficiente, os botões que não couberem serão adicionados a um menu de overflow.
O overflow usa `Menu`; `menu.item` aceita `MenuItemProps`.

## Exemplo

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Ícones de ação

Use as propriedades `Button` ou `menu.item` para definir ícones.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Nota

Use a propriedade `renderNote` para renderizar uma nota.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Grupos no menu de overflow

Use `action.menu.group` para agrupar ações no menu de overflow.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Submenu de ação e menu aninhado

Passe um `Menu` como filho direto de `menu.item.children` para adicionar um submenu. Um botão de ação visível usa o mesmo submenu.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Propriedades

| Nome          | Descrição                                               |          Tipo           | Padrão |
| :------------ | :-------------------------------------------------------- | :---------------------: | :----: |
| actions       | Array de ações                                          |  `ActionsPanelItem[]`   |        |
| onClose       | Manipulador de clique opcional do botão de fechar                       |      `() => void`       |        |
| renderNote    | Render-prop opcional para exibir o conteúdo de uma nota | `() => React.ReactNode` |        |
| className     | Atributo `class` HTML opcional                           |        `string`         |        |
| noteClassName | Atributo `class` HTML opcional                           |        `string`         |        |
| maxRowActions | Número máximo de ações em uma linha                        |        `number`         |   `4`  |

## ActionsPanelItem

| Nome      | Descrição                                        |                  Tipo                   | Padrão |
| :-------- | :------------------------------------------------- | :-------------------------------------: | :----: |
| id        | ID de ação exclusivo                                   |                `string`                 |        |
| menu      | Configurações para ação no menu de overflow               | `{item: MenuItemProps; group?: string}` |        |
| button    | Configurações para ação de botão                         |         `{props: ButtonProps}`          |        |
| collapsed | Se verdadeiro, o item estará sempre no menu de overflow |                `boolean`                |        |