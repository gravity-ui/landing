# UserLabel

`UserLabel` é um chip compacto com o avatar e o nome ou e-mail de um usuário, adequado para menções e listas inline (use `User` para um bloco de perfil maior e `Avatar` apenas para a imagem).

## Type

Usado para gerenciar a aparência do avatar. Use `"person"` para uma entidade personalizada e `"email"`, para um endereço de e-mail. Se você não precisar de nenhum avatar, use `"empty"`.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Avatar

Este componente pode ser usado com um avatar personalizado. Ele só funciona com `type: 'person'`. Você pode fornecer uma imagem, uma propriedade do componente [Avatar](../Avatar/README.md) ou um nó React personalizado.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Interactivity

Este componente também é interativo: pode ser clicável ou fechável.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Properties

| Name         | Description                                     |                                    Type                                     |   Default    |
| :----------- | :---------------------------------------------- | :-------------------------------------------------------------------------: | :----------: |
| type         | Aparência do avatar                             |                       `'person'` `'email'` `'empty'`                        |  `'person'`  |
| view         | Visualização do `UserLabel`                     |                           `'outlined'` `'clear'`                            | `'outlined'` |
| size         | Tamanho do avatar                               |               `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'`               |    `'s'`     |
| avatar       | Avatar do usuário                               | [AvatarProps](../Avatar/README.md#properties) `string` `React.ReactElement` |              |
| text         | Texto visível                                   |                              `React.ReactNode`                              |              |
| description  | Descrição do usuário                            |                              `React.ReactNode`                              |              |
| onClick      | Manipulador de evento `click` para o componente |                                 `Function`                                  |              |
| onCloseClick | Manipulador de evento `click` para o botão de fechar |                                 `Function`                                  |              |
| className    | Classe CSS personalizada para o elemento raiz   |                                  `string`                                   |              |
| style        | Atributo de estilo HTML                         |                            `React.CSSProperties`                            |              |
| qa           | Atributo `data-qa` HTML, usado para testes      |                                  `string`                                   |              |

## CSS API

| Nome                                     | Descrição                                             |
| :--------------------------------------- | :------------------------------------------------------ |
| `--g-user-label-size`                    | Tamanho para avatar (largura e altura) e altura para o rótulo |
| `--g-user-label-border-radius`           | Raio da borda do rótulo                                 |
| `--g-user-label-padding`                 | Preenchimento horizontal do rótulo                      |
| `--g-user-label-gap`                     | Espaço entre os elementos (avatar, texto, ícone de fechar) |
| `--g-user-label-text-font-weight`        | Peso da fonte do texto                                  |
| `--g-user-label-text-font-size`          | Tamanho da fonte do texto                               |
| `--g-user-label-text-line-height`        | Altura da linha do texto                                |
| `--g-user-label-description-font-weight` | Peso da fonte da descrição                              |
| `--g-user-label-description-font-size`   | Tamanho da fonte da descrição                           |
| `--g-user-label-description-line-height` | Altura da linha da descrição                            |