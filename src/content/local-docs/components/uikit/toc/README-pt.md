O componente `Toc` foi projetado para exibir um sumário da página, mostrando um conjunto de itens com dois níveis de hierarquia.

```tsx
import {Toc} from '@gravity-ui/uikit';
```

## Uso

Você pode usar `Toc` de duas maneiras:

1. Com itens como links.
2. Com itens como botões clicáveis.

Para usar a primeira opção, forneça o link apropriado para cada item `Toc` através da propriedade `href`. Você ainda poderá usar um manipulador de clique para controlar o elemento `Toc` ativo.

Se você pular isso, o componente usará a outra opção.

## Propriedades

| Nome      | Descrição                                                                      |    Tipo     | Padrão |
| :-------- | :----------------------------------------------------------------------------- | :---------: | :----: |
| className | Classe CSS                                                                     |  `string`   |        |
| items     | Elementos do TOC                                                               | `TocItem[]` |        |
| value     | Item ativo atual                                                               |  `string`   |        |
| onUpdate  | Manipulador de clique do item                                                  | `Function`  |        |
| qa        | O valor a ser fornecido ao atributo `data-qa` do contêiner `Toc`               |  `string`   |        |

#### TocItem

| Nome    | Descrição                                                                                              |        Tipo         | Padrão |
| :------ | :----------------------------------------------------------------------------------------------------- | :-----------------: | :----: |
| value   | Valor do item                                                                                          |      `string`       |        |
| content | Conteúdo do item a ser exibido                                                                         | `React.ReactNode[]` |        |
| href    | A propriedade `href` do elemento `<a>`, para o qual um item será convertido se fornecido                |      `string`       |        |
| items   | Itens filhos                                                                                           |     `TocItem[]`     |        |
GRAVITY_TRANSLATION_BLOCK_0_END