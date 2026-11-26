O componente é uma barra horizontal flexível que fornece um layout padronizado para organizar elementos de navegação, ações e conteúdo informativo dentro de um aplicativo. Ele serve como um contêiner para organizar elementos de UI como breadcrumbs, botões e menus suspensos em seções e grupos definidos.

GRAVITY_TRANSLATION_BLOCK_0_END

O `ActionBar` fornece vários componentes aninhados que trabalham juntos para criar um layout estruturado: `ActionBar.Section`, `ActionBar.Group`, `ActionBar.Item`, `ActionBar.Separator`.

## Propriedades

| Nome       | Descrição                               |         Tipo          | Padrão |
| :--------- | :-------------------------------------- | :-------------------: | :----: |
| aria-label | Atributo `aria-label` do HTML           |       `string`        |        |
| className  | Atributo `class` do HTML                |       `string`        |        |
| style      | Atributo `style` do HTML                | `React.CSSProperties` |        |
| qa         | Atributo `data-qa` do HTML, usado para testes |       `string`        |        |

## ActionBar.Section

Componente decorativo para separar visualmente diferentes tipos de navegação.
Existem dois tipos de seções apresentados — `primary` e `secondary`. Recomendamos que um aplicativo tenha pelo menos a seção `primary`. A seção `secondary` pode ser usada para controles específicos do aplicativo, que devem ser acentuados com preenchimentos menores e um separador horizontal da seção `primary`.

### Propriedades

| Nome      | Descrição                                     |            Tipo            |   Padrão   |
| :-------- | :-------------------------------------------- | :------------------------: | :--------: |
| type      | O tipo especifica o estilo visual da seção    | `"primary"`, `"secondary"` | `"primary"` |
| className | Atributo `class` do HTML                      |          `string`          |            |
| style     | Atributo `style` do HTML                      |   `React.CSSProperties`    |            |
| qa        | Atributo `data-qa` do HTML, usado para testes |          `string`          |            |

GRAVITY_TRANSLATION_BLOCK_2_END

## ActionBar.Group

Os grupos organizam `ActionBar.Item` dentro de uma seção e controlam seu alinhamento.

### Propriedades

| Nome             | Descrição                                                              |                                      Type                                       | Padrão |
| :--------------- | :--------------------------------------------------------------------- | :-----------------------------------------------------------------------------: | :----: |
| pull             | Controla o alinhamento do grupo                                        | `"left"`, `"left-grow"`, `"right"`, `"right-grow"`, `"center"`, `"center-grow"` |        |
| stretchContainer | Define `flex-grow: 1` para Group. Necessário para suportar UIKit@7 Breadcrumbs |                                    `boolean`                                    |        |
| className        | Atributo `class` do HTML                                               |                                    `string`                                     |        |
| style            | Atributo `style` do HTML                                               |                              `React.CSSProperties`                              |        |
| qa               | Atributo `data-qa` do HTML, usado para testes                          |                                    `string`                                     |        |

## ActionBar.Item

Contêiner para elementos de UI como botões, breadcrumbs ou outros componentes deve estar em `ActionBar.Group`. O componente adiciona margens entre os itens.

### Propriedades

| Nome      | Descrição                               |         Tipo          | Padrão |
| :-------- | :-------------------------------------- | :-------------------: | :----: |
| spacing   | Habilita espaçamento com o item anterior |       `boolean`       | `true` |
| className | Atributo `class` do HTML                |       `string`        |        |
| style     | Atributo `style` do HTML                | `React.CSSProperties` |        |
| qa        | Atributo `data-qa` do HTML, usado para testes |       `string`        |        |

## ActionBar.Separator

Divisor visual que pode ser colocado entre itens em um grupo para separá-los visualmente.

GRAVITY_TRANSLATION_BLOCK_3_END