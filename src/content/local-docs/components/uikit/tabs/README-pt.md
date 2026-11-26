Os componentes `Tab` são usados para explorar, organizar conteúdo e alternar entre diferentes visualizações.

```tsx
import {TabProvider, TabList, Tab, TabPanel} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Componentes

- [TabProvider](#tabprovider)
- [TabList](#tablist)
- [Tab](#tab)
- [TabPanel](#tabpanel)

## TabProvider

Um componente que fornece a funcionalidade de seleção de abas.

## Propriedades

| Nome     | Descrição                                              |           Tipo            | Padrão |
| :------- | :------------------------------------------------------- | :-----------------------: | :----: |
| children | Lista de abas e painéis de abas, provavelmente com alguns wrappers |     `React.ReactNode`     |        |
| value    | Valor da aba ativa                                         |         `string`          |        |
| onUpdate | Manipulador de atualização de aba                                       | `(value: string) => void` |        |

## TabList

Componente que serve como contêiner para um conjunto de `tabs`.

### Tamanho

Para controlar o tamanho das `tabs`, use a propriedade `size`. O tamanho padrão é `m`.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Propriedades

`TabList` aceita quaisquer props válidas de elemento `div`, além destas:

| Nome            | Descrição                                                                            |               Tipo               | Padrão  |
| :-------------- | :------------------------------------------------------------------------------------- | :------------------------------: | :-----: |
| children        | Lista de abas, provavelmente com alguns wrappers                                              |        `React.ReactNode`         |         |
| value           | Valor da aba ativa                                         |             `string`             |         |
| onUpdate        | Manipulador de atualização de aba                                       |    `(value: string) => void`     |          |
| className       | Classe CSS do elemento                                                                   |             `string`             |         |
| activateOnFocus | Ativa a aba ao focar. Use isso apenas se o conteúdo do painel puder ser exibido imediatamente   |            `boolean`             | `false`  |
| size            | Tamanho do elemento                                                                    |        `"m"` `"l"` `"xl"`        |  `"m"`   |
| contentOverflow | Como lidar com itens que não cabem horizontalmente (quebrar, rolar ou um menu **Mais**) | `"wrap"` `"scroll"` `"collapse"` | `"wrap"` |
| moreLabel       | Rótulo para o gatilho de overflow de colapso quando a aba ativa está visível na lista     |        `React.ReactNode`         | `"More"` |
| qa              | Atributo HTML `data-qa`, usado em testes                                                |             `string`             |         |

## Tab

Este componente é usado para renderizar itens de aba.

### Ícone

Usado se você precisar exibir um ícone para um item de aba.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Estados

O item de aba tem um sinalizador desativado.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Contador

Usado se você precisar exibir um número para um item de aba.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### Rótulo

Usado se você precisar exibir um rótulo para um item de aba.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Overflow de Conteúdo

Usado se você precisar colapsar um item de aba.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### Propriedades

`Tab` aceita quaisquer props válidas de elemento `button` ou `a`, além destas:

| Nome      | Descrição                             |        Tipo         | Padrão |
| :-------- | --------------------------------------- | :-----------------: | :-----: |
| value     | Valor da aba                               |      `string`       |         |
| title     | Título da aba                               |      `string`       |         |
| icon      | Ícone exibido no início                               |  `React.ReactNode`  |         |
| counter   | Conteúdo exibido no final                               |  `number` `string`  |         |
| href      | Um URL para linkar.                               |      `string `      |         |
| label     | `<Label>` exibido no final                                |  `React.ReactNode`  |         |
| disabled  | Estado inativo                                |      `boolean`      |         |
| component | Substitui o componente raiz                               | `React.ElementType` |         |
| children  | Conteúdo da aba                               |  `React.ReactNode`  |         |
| qa        | Atributo `data-qa` do HTML, usado em testes                                |      `string`       |         |

## TabPanel

É um elemento contêiner para conteúdo associado a uma aba

### Propriedades

`TabPanel` aceita quaisquer props válidas de elemento `div` além destas:

| Nome     | Descrição                             |       Tipo        | Padrão |
| :------- | :-------------------------------------- | :---------------: | :-----: |
| children | Conteúdo do painel                        | `React.ReactNode` |         |
| value    | Valor da aba ativa                        |     `string`      |         |
| qa       | Atributo `data-qa` do HTML, usado em testes                                |     `string`      |         |

## API CSS

| Nome                             | Descrição                |
| :------------------------------- | :------------------------- |
| `--g-tabs-border-width`          | Largura da borda das abas          |
| `--g-tabs-item-height`           | Altura do item das abas           |
| `--g-tabs-item-border-width`     | Largura da borda do item das abas     |
| `--g-tabs-item-gap`              | Distância entre as abas      |
| `--g-tabs-vertical-item-height`  | Altura do item vertical das abas  |
| `--g-tabs-vertical-item-padding` | Preenchimento vertical do item das abas |