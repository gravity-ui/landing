Você pode usar `Label`s para destacar certas informações. Um `Label` com o botão `Close` ou `Copy` pode ser útil para várias ações simples.

`Label`s são mais adequados para exibir informações de texto de uma linha com diferentes códigos de cores que mostram sua importância.

```tsx
import {Label} from '@gravity-ui/uikit';
```

## Aparência

Um `Label` pode ser exibido em vários estilos.

### Tema

Use a propriedade `theme` para aplicar diferentes temas para vários status. Você pode usar os seguintes valores: `normal`, `info`, `success`, `warning`, `danger`, `utility`, `unknown` e `clear`.
O tema padrão é `normal`.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Tipo

A propriedade `type` adiciona várias opções a um `Label`:

`copy`: Adiciona um botão de cópia; quando clicado, ele copia o valor da propriedade `copyText`.

`close`: Adiciona um botão de fechar para gerenciar listas de labels.

`info`: Adiciona um ícone de informação ao label.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Ícone

Você pode adicionar um ícone com a propriedade `icon`. Para fazer isso, use o componente [`Icon`](../Icon), que é um wrapper especial para SVGs.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Valor

Você pode usar `Label`s para exibir informações de chave-valor. Para isso, você precisa fornecer a chave para a propriedade `children` e o valor para `value`:

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Estado

Um `label` pode ter diferentes estados:

- `disabled`: Nenhuma interação permitida.
- `interactive`: Torna o label passível de hover.
- `loading`: Mostra um estado de carregamento.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Tamanho

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## Propriedades

| Nome             | Descrição                                     |                  Tipo                   |   Padrão   |
| :--------------- | :---------------------------------------------- | :-------------------------------------: | :---------: |
| children         | Conteúdo                                        |            `React.ReactNode`            |             |
| className        | Atributo `class` do HTML                        |                `string`                 |             |
| closeButtonLabel | `aria-label` do botão de fechar                 |                `string`                 |             |
| copyButtonLabel  | `aria-label` do botão de copiar                 |                `string`                 |             |
| copyText         | Texto para copiar                               |                `string`                 |             |
| disabled         | Estado desabilitado                             |                `boolean`                |             |
| icon             | Ícone do rótulo (à esquerda)                    |            `React.ReactNode`            |             |
| interactive      | Habilita efeito hover                           |                `boolean`                |             |
| loading          | Estado de carregamento                          |                `boolean`                |   `false`   |
| onClick          | Manipulador de evento `click`                   |               `Function`                |             |
| onCloseClick     | Manipulador de evento `click` do botão de fechar |               `Function`                |             |
| onCopy           | Manipulador de evento `copy`                    |               `Function`                |             |
| qa               | Atributo `data-qa` do HTML, usado para testes   |                `string`                 |             |
| size             | Tamanho do rótulo                                |       `"xxs"` `"xs"` `"s"` `"m"`        |   `"xs"`    |
| theme            | Tema do rótulo                                  |                `string`                 | `"normal"`  |
| title            | Atributo `title` do HTML                        |                `string`                 |             |
| type             | Tipo do rótulo                                   | `"default"` `"copy"` `"close"` `"info"` | `"default"` |
| value            | Valor do rótulo (exibido como `"children : value"`) |            `React.ReactNode`            |             |
| width            | Controla como o Rótulo usa o espaço do pai      |                `"auto"`                 |             |