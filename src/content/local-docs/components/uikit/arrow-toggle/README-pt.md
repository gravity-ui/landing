`ArrowToggle` é um componente para exibir o ícone de chevron. Ele pode girar em quatro direções e pode ser usado para exibir listas suspensas, componentes de corte, etc.

## Aparência

`ArrowToggle` tem quatro direções possíveis: `top`, `right`, `bottom` e `left`.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Tamanho

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Usar como elemento interativo

Aqui está um exemplo de uso do ArrowToggle com um ícone de alternância:

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Propriedades

| Nome      | Descrição                               |   Tipo   |  Padrão   |
| :-------- | :-------------------------------------- | :------: | :-------: |
| className | Atributo HTML `class`                   | `string` |           |
| direction | Usado para definir a direção do `arrowToggle` | `string` | `"bottom"` |
| size      | Tamanho do `arrowToggle` (em pixels)    | `number` |    `16`   |
| qa        | Atributo HTML `data-qa`, usado para testes | `string` |           |

## API CSS

| Nome                                   | Descrição           |
| :------------------------------------- | :------------------ |
| `--g-arrow-toggle-transition-duration` | Duração da transição |