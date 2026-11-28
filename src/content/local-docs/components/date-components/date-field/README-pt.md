O componente `DateField` é um campo de entrada versátil e conveniente, projetado especificamente para a entrada de datas em aplicações React. Com uma interface intuitiva e fácil integração, é perfeito para qualquer formulário que exija entrada de data ou hora, como agendadores de eventos, sistemas de reserva ou relatórios baseados em dados. Ele pode ser controlado se você definir a propriedade `value`. Ou pode ser não controlado se você não definir nenhum valor, mas neste caso você pode gerenciar o estado inicial com a propriedade opcional `defaultValue`. O componente é não controlado por padrão.

## Adição útil

Para definir datas no formato correto, você pode precisar incluir auxiliares adicionais da [biblioteca Date Utils](https://gravity-ui.com/libraries/date-utils)

```tsx
import {dateTimeParse} from '@gravity-ui/date-utils';
```

## Aparência

A aparência do `DateField` é controlada pelas propriedades `size`, `view` e `pin`.

### Tamanho

Para controlar o tamanho do `DateField`, use a propriedade `size`. O tamanho padrão é `m`.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Visualização

`normal` - a visualização principal do `DateField` (usada por padrão).

GRAVITY_TRANSLATION_BLOCK_3_END

`clear` - visualização do `DateField` sem bordas visíveis (pode ser usado com um wrapper personalizado)

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

A propriedade `minValue` permite especificar a data e hora mais cedo que pode ser inserida pelo usuário. Inversamente, a propriedade `maxValue` especifica a data e hora mais tarde que pode ser inserida. Se você inserir um valor fora desses limites, o componente alterará sua visualização, como no caso de um estado de validação inválido.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Estados

### Desabilitado

O estado do `DateField` em que você não quer que o usuário possa interagir com o componente.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Somente leitura

`readOnly` é um atributo booleano que, quando definido como true, torna o componente `DateField` imutável para o usuário. Isso significa que, embora a entrada exiba seu valor atual, os usuários não poderão alterá-lo.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### Erro

O estado do `DateField` em que você deseja indicar uma entrada incorreta do usuário. Para alterar a aparência do `DateField`, use a propriedade `validationState` com o valor `"invalid"`. Uma mensagem opcional pode ser adicionada através da propriedade `errorMessage`. O texto da mensagem será renderizado abaixo do componente.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## Conteúdo adicional

### Placeholder

Esta prop permite fornecer uma dica curta que descreve o valor esperado do campo de entrada. Essa dica é exibida dentro do campo de entrada antes que o usuário insira um valor e desaparece quando o texto é inserido.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Rótulo

Permite colocar o rótulo na parte esquerda do campo. O rótulo pode ocupar no máximo metade da largura total do espaço do `DateField`.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

### Botão Limpar

`hasClear` é uma prop booleana que oferece aos usuários a capacidade de limpar rapidamente o conteúdo do campo de entrada.

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

### Conteúdo inicial

Permite adicionar conteúdo à parte inicial do campo. Ele é colocado antes de todos os outros componentes.

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

### Conteúdo final

Permite adicionar conteúdo à parte final do campo. Ele é colocado após todos os outros componentes.

GRAVITY_TRANSLATION_BLOCK_24_END

GRAVITY_TRANSLATION_BLOCK_25_END

## Formato

A prop `format` é uma string que define o formato de data e hora que o componente `DateField` aceitará e exibirá. Esta prop determina como a data e a hora são apresentadas visualmente ao usuário e como a entrada do usuário deve ser formatada. [Formatos disponíveis](https://day.js.org/docs/en/display/format)

GRAVITY_TRANSLATION_BLOCK_26_END

GRAVITY_TRANSLATION_BLOCK_27_END

### Analisador de Data Personalizado

Você pode fornecer uma função de análise personalizada para lidar com strings de data coladas através da prop `parseDateFromString`. Isso é útil quando você precisa suportar formatos de data específicos ou lógica de análise personalizada que difere do comportamento padrão.

GRAVITY_TRANSLATION_BLOCK_28_END

## Fuso horário

`timeZone` é a propriedade para definir o fuso horário do valor na entrada. [Saiba mais sobre fusos horários](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Propriedades

| Nome                | Descrição                                                                                                            |                               Tipo                                 |          Padrão          |
| :------------------ | :------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------: | :----------------------: |
| aria-describedby    | O atributo `aria-describedby` do controle                                                                           |                               `string`                               |                          |
| aria-details        | O atributo `aria-details` do controle                                                                               |                               `string`                               |                          |
| aria-label          | O atributo `aria-label` do controle                                                                                 |                               `string`                               |                          |
| aria-labelledby     | O atributo `aria-labelledby` do controle                                                                            |                               `string`                               |                          |
| autoFocus           | O atributo `autofocus` do controle                                                                                  |                              `boolean`                               |                          |
| className           | O nome da classe do wrapper do controle                                                                              |                               `string`                               |                          |
| defaultValue        | Define o valor inicial para o componente não controlado.                                                             |                              `DateTime`                              |                          |
| disabled            | Indica que o usuário não pode interagir com o controle                                                               |                              `boolean`                               |         `false`          |
| errorMessage        | Texto de erro                                                                                                        |                             `ReactNode`                              |                          |
| format              | Formato da data quando renderizada no input. [Formatos disponíveis](https://day.js.org/docs/en/display/format)        |                               `string`                               |                          |
| hasClear            | Mostra o ícone para limpar o valor do controle                                                                       |                              `boolean`                               |         `false`          |
| id                  | O atributo `id` do controle                                                                                         |                               `string`                               |                          |
| isDateUnavailable   | Callback que é chamado para cada data do calendário. Se retornar true, então a data está indisponível.             |                   `((date: DateTime) => boolean)`                    |                          |
| label               | Texto de ajuda renderizado à esquerda do nó de input                                                                 |                               `string`                               |                          |
| startContent        | O nó do usuário renderizado antes do rótulo e do input                                                               |                          `React.ReactNode`                           |                          |
| maxValue            | A data máxima permitida que um usuário pode selecionar.                                                              |                              `DateTime`                              |                          |
| minValue            | A data mínima permitida que um usuário pode selecionar.                                                              |                              `DateTime`                              |                          |
| onBlur              | Dispara quando o controle perde o foco. Fornece o evento de foco como argumento do callback                        |            `((e: FocusEvent<Element, Element>) => void)`             |                          |
| onFocus             | Dispara quando o controle ganha foco. Fornece o evento de foco como argumento do callback                          |            `((e: FocusEvent<Element, Element>) => void)`             |                          |
| onKeyDown           | Dispara quando uma tecla é pressionada. Fornece o evento do teclado como argumento do callback                      |               `((e: KeyboardEvent<Element>) => void)`                |                          |
| onKeyUp             | Dispara quando uma tecla é liberada. Fornece o evento do teclado como argumento do callback                        |               `((e: KeyboardEvent<Element>) => void)`                |                          |
| onUpdate            | Dispara quando o valor é alterado pelo usuário. Fornece o novo valor como argumento do callback                      |                 `((value: DateTime \| null) => void`                 |                          |
| parseDateFromString | Função de parser personalizada para analisar strings de data coladas. Se não for fornecida, o parser padrão será usado. | `((dateStr: string, format: string, timeZone?: string) => DateTime)` |                          |
| pin                 | Arredondamento de canto                                                                                              |                               `string`                               |      `'round-round'`      |
| placeholder         | Texto que aparece no controle quando ele não tem nenhum valor definido                                              |                               `string`                               |                          |
| placeholderValue    | Uma data de placeholder que controla os valores padrão de cada segmento quando o usuário interage com eles pela primeira vez. |                              `DateTime`                              | `data de hoje à meia-noite` |
| readOnly            | Se o valor do componente é imutável.                                                                                 |                              `boolean`                               |         `false`          |
| endContent          | Nó do usuário renderizado após o nó de input e o botão de limpar                                                     |                          `React.ReactNode`                           |                          |
| size                | O tamanho do controle                                                                                                |                       `"s"` `"m"` `"l"` `"xl"`                       |           `"m"`           |
| style               | Define o estilo inline para o elemento.                                                                              |                           `CSSProperties`                            |                          |
| timeZone            | Define o fuso horário. [Saiba mais sobre fusos horários](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                               `string`                               |                          |
| validationState     | Estado de validação                                                                                                  |                             `"invalid"`                              |                          |
| value               | O valor do controle                                                                                                  |                          `DateTime` `null`                           |                          |
| view                | A visualização do controle                                                                                           |                         `"normal"` `"clear"`                         |        `"normal"`         |