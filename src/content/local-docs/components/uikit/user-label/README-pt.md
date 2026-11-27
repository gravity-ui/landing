# UserLabel

`UserLabel` é um chip compacto com o avatar e o nome ou e-mail de um usuário, adequado para menções e listas inline (use `User` para um bloco de perfil maior e `Avatar` apenas para a imagem).

## Type

Usado para gerenciar a aparência do avatar. Use `"person"` para uma entidade personalizada e `"email"`, para um endereço de e-mail. Se você não precisar de nenhum avatar, use `"empty"`.

<!--SANDBOX
import {UserLabel} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <UserLabel type="person" text="Charles Darwin" />
            <UserLabel type="email" text="email@example.com" />
            <UserLabel type="empty" text="Alan Turing" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<UserLabel type="person" text="Charles Darwin (person)" />
<UserLabel type="email" text="email@example.com (email)" />
<UserLabel type="empty" text="Alan Turing (empty)" />
```

<!--/GITHUB_BLOCK-->

## Avatar

Este componente pode ser usado com um avatar personalizado. Ele só funciona com `type: 'person'`. Você pode fornecer uma imagem, uma propriedade do componente [Avatar](../Avatar/README.md) ou um nó React personalizado.

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {UserLabel} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <UserLabel
                type="person"
                avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg/193px-Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg"
                text="Charles Darwin"
            />
            <UserLabel type="person" avatar={{icon: GraduationCap}} text="Charles Darwin" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
import {GraduationCap} from '@gravity-ui/icons';

<UserLabel type="person" avatar="<url>" text="Charles Darwin" />
<UserLabel type="person" avatar={{icon: GraduationCap}} text="Charles Darwin" />
```

<!--/GITHUB_BLOCK-->

## Interactivity

Este componente também é interativo: pode ser clicável ou fechável.

<!--SANDBOX
import {UserLabel} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <UserLabel text="Charles Darwin" onClick={() => alert('onClick triggered')} />
            <UserLabel text="Charles Darwin" onCloseClick={() => alert('onCloseClick triggered')} />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<UserLabel text="Charles Darwin" onClick={() => alert('onClick triggered')} />
<UserLabel text="Charles Darwin" onCloseClick={() => alert('onCloseClick triggered')} />
```

<!--/GITHUB_BLOCK-->

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
