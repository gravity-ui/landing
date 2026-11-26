GRAVITY_TRANSLATION_BLOCK_0_END

Este é um componente geral para exibir um avatar de usuário com um bloco de informações. Ele usa o componente [Avatar](../Avatar/README.md) para renderizar o avatar. Ele também pode aceitar um nó React personalizado como avatar.

```tsx
import {User} from '@gravity-ui/uikit';
```

## Nome e descrição

O componente `User` possui as propriedades `name` e `description` para exibir um bloco de informações.

GRAVITY_TRANSLATION_BLOCK_1_END

## Tamanho

Use a propriedade `size` para gerenciar o tamanho do `User`. O tamanho padrão é `m`. Os valores possíveis são `3xs`, `2xs`, `xs`, `s`, `m`, `l` e `xl`.

Esta propriedade também é fornecida ao componente `Avatar` interno.

GRAVITY_TRANSLATION_BLOCK_2_END

## Propriedades

| Nome             | Descrição                                |                                    Tipo                                     | Padrão |
| :--------------- | :----------------------------------------- | :-------------------------------------------------------------------------: | :----: |
| avatar           | Avatar do usuário                          | [AvatarProps](../Avatar/README.md#properties) `string` `React.ReactElement` |        |
| name             | Nome do usuário                            |                              `React.ReactNode`                              |        |
| description      | Descrição do usuário                       |                              `React.ReactNode`                              |        |
| size             | Tamanho da seção do usuário                |               `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'`               |  `m`   |
| aria-label       | `aria-label` para a seção do usuário       |                                  `string`                                   |        |
| aria-labelledby  | `aria-labelledby` para a seção do usuário  |                                  `string`                                   |        |
| aria-describedby | `aria-describedby` para a seção do usuário |                                  `string`                                   |        |
| aria-details     | `aria-details` para a seção do usuário     |                                  `string`                                   |        |
| className        | Classe CSS personalizada para o elemento raiz |                                  `string`                                   |        |
| style            | Atributo de estilo HTML                    |                            `React.CSSProperties`                            |        |
| qa               | Atributo HTML `data-qa`, usado para testes |                                  `string`                                   |        |

## API CSS

| Nome                               | Descrição                     |
| :--------------------------------- | :---------------------------- |
| `--g-user-avatar-offset`           | Espaço entre o avatar e o bloco de texto |
| `--g-user-name-font-weight`        | Peso da fonte do nome         |
| `--g-user-name-font-size`          | Tamanho da fonte do nome      |
| `--g-user-name-line-height`        | Altura da linha do nome       |
| `--g-user-description-font-weight` | Peso da fonte da descrição    |
| `--g-user-description-font-size`   | Tamanho da fonte da descrição |
| `--g-user-description-line-height` | Altura da linha da descrição  |