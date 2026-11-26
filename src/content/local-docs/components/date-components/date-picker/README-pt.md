```tsx
import {DatePicker} from '@gravity-ui/date-components';
```

`DatePicker` é um componente sofisticado, leve e totalmente personalizável, projetado para fornecer funcionalidade intuitiva de seleção de datas em suas aplicações React. Construído com a experiência do usuário e facilidade de integração em mente, ele se encaixa perfeitamente em formulários, modais ou qualquer elemento de UI que exija entrada de data. Ele pode ser controlado se você definir a propriedade `value`. Ou pode ser não controlado se você não definir nenhum valor, mas neste caso você pode gerenciar o estado inicial com a propriedade opcional `defaultValue`. O componente é não controlado por padrão.

### Adição útil

Para definir datas no formato correto, você pode precisar incluir auxiliares adicionais da biblioteca [Date Utils](https://gravity-ui.com/libraries/date-utils)

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

## Aparência

A aparência do `DatePicker` é controlada pelas propriedades `size`, `view` e `pin`.

### Tamanho

Para controlar o tamanho do `DatePicker`, use a propriedade `size`. O tamanho padrão é `m`.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Visualização

`normal` - a visualização principal do `DatePicker` (usada por padrão).

GRAVITY_TRANSLATION_BLOCK_3_END

`clear` - visualização do `DatePicker` sem bordas visíveis (pode ser usada com um wrapper personalizado)

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Pin

A propriedade `pin` permite controlar a forma das bordas direita e esquerda e é geralmente usada para combinar vários controles em uma única unidade.
O valor da propriedade `pin` consiste em nomes de estilo de borda esquerda e direita divididos por um hífen, por exemplo, `"round-brick"`.
Os estilos de borda são: `round` (padrão), `circle`, `brick` e `clear`.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Valor

### Valor mínimo e máximo

A propriedade `minValue` permite especificar a data e hora mais cedo que podem ser inseridas pelo usuário. Inversamente, a propriedade `maxValue` especifica a data e hora mais tarde que podem ser inseridas. Se você inserir um valor fora desses limites, o componente altera sua visualização, como no caso de um estado de validação inválido.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Estados

### Desabilitado

O estado do `DatePicker` onde você não quer que o usuário possa interagir com o componente.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Somente leitura

`readOnly` é um atributo booleano que, quando definido como true, torna o componente `DatePicker` imutável para o usuário. Isso significa que, embora a entrada exiba seu valor atual, os usuários não poderão alterá-lo.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### Erro

O estado do `DatePicker` no qual você deseja indicar uma entrada incorreta do usuário. Para alterar a aparência do `DatePicker`, use a propriedade `validationState` com o valor `"invalid"`. Uma mensagem opcional pode ser adicionada através da propriedade `errorMessage`. O texto da mensagem será renderizado abaixo do componente.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## Conteúdo adicional

### Placeholder

Esta prop permite fornecer uma dica curta que descreve o valor esperado do campo de entrada. Essa dica é exibida dentro do campo de entrada antes que o usuário insira um valor e desaparece quando o texto é inserido.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Rótulo

Permite colocar o rótulo na parte esquerda do campo. O rótulo pode ocupar no máximo metade da largura total do espaço do `DatePicker`.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

### Botão Limpar

`hasClear` é uma prop booleana que oferece aos usuários a capacidade de limpar rapidamente o conteúdo do campo de entrada.

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

## Formato

A prop `format` é uma string que define o formato de data e hora que o componente `DatePicker` aceitará e exibirá. Esta prop determina como a data e a hora são apresentadas visualmente ao usuário e como a entrada do usuário deve ser formatada. [Formatos disponíveis](https://day.js.org/docs/en/display/format)

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

### Analisador de Data Personalizado

Você pode fornecer uma função de análise personalizada para lidar com strings de data coladas através da prop `parseDateFromString`. Isso é útil quando você precisa suportar formatos de data específicos ou lógica de análise personalizada que difere do comportamento padrão.

GRAVITY_TRANSLATION_BLOCK_24_END

## Fuso horário

`timeZone` é a propriedade para definir o fuso horário do valor na entrada. [Saiba mais sobre fusos horários](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Personalização

Se você quiser usar um componente de calendário personalizado dentro do `DatePicker`, pode passá-lo como `children` com props semelhantes às de um calendário.

GRAVITY_TRANSLATION_BLOCK_25_END

GRAVITY_TRANSLATION_BLOCK_26_END

## Propriedades

| Nome                           | Descrição                                                                                                                                |                               Tipo                                 |          Padrão          |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------: | :----------------------: |
| aria-describedby               | O `aria-describedby` do controle. Identifica o elemento (ou elementos) que descreve o objeto. atributo                                |                               `string`                               |                          |
| aria-details                   | O `aria-details` do controle. Identifica o elemento (ou elementos) que fornece uma descrição detalhada e estendida para o objeto. atributo |                               `string`                               |                          |
| aria-label                     | O `aria-label` do controle. Define um valor de string que rotula o elemento atual. atributo                                              |                               `string`                               |                          |
| aria-labelledby                | O `aria-labelledby` do controle. Identifica o elemento (ou elementos) que rotula o elemento atual. atributo                           |                               `string`                               |                          |
| autoFocus                      | O `autofocus` do controle. Se o elemento deve receber foco ao renderizar. atributo                                                   |                              `boolean`                               |                          |
| className                      | O nome da classe do wrapper do controle                                                                                                           |                               `string`                               |                          |
| [defaultValue](#datepicker)    | Define o valor inicial para o componente não controlado.                                                                                         |                              `DateTime`                              |                          |
| [disabled](#disabled)          | Indica que o usuário não pode interagir com o controle                                                                                   |                              `boolean`                               |          `false`          |
| [errorMessage](#error)         | Texto de erro                                                                                                                                 |                             `ReactNode`                              |                          |
| [format](#format)              | Formato da data quando renderizada na entrada. [Formatos disponíveis](https://day.js.org/docs/en/display/format)                              |                               `string`                               |                          |
| [hasClear](#clear-button)      | Mostra o ícone para limpar o valor do controle                                                                                                |                              `boolean`                               |          `false`          |
| id                             | O atributo `id` do controle                                                                                                               |                               `string`                               |                          |
| isDateUnavailable              | Callback que é chamado para cada data do calendário. Se retornar true, então a data está indisponível.                                   |                   `((date: DateTime) => boolean)`                    |                          |
| [label](#label)                | Texto de ajuda renderizado à esquerda do nó de entrada                                                                                           |                               `string`                               |                          |
| [maxValue](#min-and-max-value) | A data máxima permitida que um usuário pode selecionar.                                                                                           |                              `DateTime`                              |                          |
| [minValue](#min-and-max-value) | A data mínima permitida que um usuário pode selecionar.                                                                                           |                              `DateTime`                              |                          |
| onBlur                         | Dispara quando o controle perde o foco. Fornece o evento de foco como argumento do callback                                                           |            `((e: FocusEvent<Element, Element>) => void)`             |                          |
| onFocus                        | Dispara quando o controle ganha foco. Fornece o evento de foco como argumento do callback                                                           |            `((e: FocusEvent<Element, Element>) => void)`             |                          |
| onKeyDown                      | Dispara quando uma tecla é pressionada. Fornece o evento do teclado como argumento do callback                                                              |               `((e: KeyboardEvent<Element>) => void)`                |                          |
| onKeyUp                        | Dispara quando uma tecla é liberada. Fornece o evento do teclado como argumento do callback                                                             |               `((e: KeyboardEvent<Element>) => void)`                |                          |
| onUpdate                       | Dispara quando o valor é alterado pelo usuário. Fornece o novo valor como argumento do callback                                                  |                 `((value: DateTime \| null) => void`                 |                          |
| parseDateFromString            | Função de análise personalizada para analisar strings de data coladas. Se não for fornecida, o analisador padrão será usado.                                  | `((dateStr: string, format: string, timeZone?: string) => DateTime)` |                           |
| [pin](#pin)                    | Arredondamento de canto                                                                                                                            |                            `TextInputPin`                            |      `'round-round'`      |
| [placeholder](#placeholder)    | Texto que aparece no controle quando ele não tem nenhum valor definido                                                                                  |                               `string`                               |                          |
| placeholderValue               | Uma data de espaço reservado que controla os valores padrão de cada segmento quando o usuário interage com eles pela primeira vez.                               |                              `DateTime`                              | `data de hoje à meia-noite` |
| [readOnly](#readonly)          | Se o valor do componente é imutável.                                                                                                |                              `boolean`                               |          `false`          |
| [size](#size)                  | O tamanho do controle                                                                                                                    |                       `"s"` `"m"` `"l"` `"xl"`                       |           `"m"`           |
| style                          | Define o estilo inline para o elemento.                                                                                                         |                           `CSSProperties`                            |                          |
| [timeZone](#time-zone)         | Define o fuso horário. [Saiba mais sobre fusos horários](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)                       |                               `string`                               |                          |
| [validationState](#error)      | Estado de validação                                                                                                                           |                             `"invalid"`                              |                           |
| [value](#datepicker)           | O valor do controle                                                                                                                   |                          `DateTime` `null`                           |                           |
| [view](#view)                  | A visualização do controle                                                                                                                    |                         `"normal"` `"clear"`                         |        `"normal"`         |