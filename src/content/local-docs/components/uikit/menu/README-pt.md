O componente `Menu` permite criar facilmente visualizações para listas de ações.

```tsx
import {Menu} from '@gravity-ui/uikit';
```

Ele possui componentes dedicados para itens (`Menu.Item`) e grupos (`Menu.Group`). Você pode combiná-los para criar menus mais complexos.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Tamanho

Esta propriedade é usada para selecionar o tamanho do menu. O valor padrão é `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Propriedades

| Nome      | Descrição                                  |           Tipo           | Padrão |
| :-------- | :----------------------------------------- | :----------------------: | :-----: |
| size      | Tamanho do menu                            | `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| children  | Elemento filho                             |    `React.ReactNode`     |         |
| className | Atributo `class` HTML                      |         `string`         |         |
| style     | Atributo `style` HTML                      |  `React.CSSProperties`   |         |
| qa        | Atributo `data-qa` HTML, usado para testes |         `string`         |         |

## Menu.Item

Esta propriedade é usada para renderizar itens de menu.

### Ícone

Use a propriedade `iconStart` ou `iconEnd` para exibir um ícone no início ou no final de um item de menu:

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Estados

Usando esta propriedade, você pode habilitar ou desabilitar (esmaecer) itens de menu específicos:

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Tema

Isso permite que você altere o tema do item do menu. O tema padrão é `normal`.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

### Propriedades

| Nome             | Descrição                                    |           Tipo            |  Padrão   |
| :--------------- | :--------------------------------------------- | :-----------------------: | :--------: |
| iconStart        | Ícone do menu antes do texto do item                     |        `ReactNode`        |            |
| iconEnd          | Ícone do menu após o texto do item                      |        `ReactNode`        |            |
| selected         | Sinalizador de item de menu selecionado                        |         `boolean`         |  `false`   |
| disabled         | Sinalizador de item de menu desabilitado                         |         `boolean`         |  `false`   |
| active           | Sinalizador de item de menu ativo                          |         `boolean`         |  `false`   |
| href             | URL                                            |         `string`          |            |
| title            | Atributo title                                |         `string`          |            |
| target           | Atributo target                               |         `string`          |            |
| rel              | Atributo rel                                  |         `string`          |            |
| onClick          | Manipulador para o evento onclick                      | `React.MouseEventHandler` |            |
| theme            | Tema do item do menu                                |   `"normal"` `"danger"`   | `"normal"` |
| children         | Elemento filho                                  |     `React.ReactNode`     |            |
| className        | Atributo `class` HTML para o elemento raiz    |         `string`          |            |
| contentClassName | Atributo `class` HTML para o elemento de conteúdo |         `string`          |            |
| style            | Atributo `style` HTML                         |   `React.CSSProperties`   |            |
| qa               | Atributo `data-qa` HTML, usado para testes     |         `string`          |            |
| extraProps       | Atributos HTML adicionais                     |         `Record`          |            |

## Menu.Group

Você pode agrupar itens por tópicos dentro de um único menu:

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### Propriedades

| Nome      | Descrição                                |         Tipo          | Padrão |
| :-------- | :----------------------------------------- | :-------------------: | :-----: |
| label     | Rótulo do grupo de menu                           |       `string`        |         |
| children  | Elemento filho                              |   `React.ReactNode`   |         |
| className | Atributo `class` HTML                     |       `string`        |         |
| style     | Atributo `style` HTML                     | `React.CSSProperties` |         |
| qa        | Atributo `data-qa` HTML, usado para testes |       `string`        |         |