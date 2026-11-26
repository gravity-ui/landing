```tsx
import {RangeCalendar} from '@gravity-ui/date-components';
```

`RangeCalendar` é um componente de UI poderoso, flexível e fácil de usar, projetado para selecionar um intervalo de datas. Construído com React, ele combina a funcionalidade de um calendário e um seletor de intervalo de datas, tornando-o uma escolha ideal para aplicações que exigem que os usuários insiram uma data de início e fim. Ele pode ser controlado se você definir a propriedade `value`. Ou pode ser não controlado se você não definir nenhum valor, mas neste caso você pode gerenciar o estado inicial com a propriedade opcional `defaultValue`. O componente é não controlado por padrão.

### Adição útil

Para definir datas no formato correto, você pode precisar incluir auxiliares adicionais da [biblioteca Date Utils](https://gravity-ui.com/libraries/date-utils)

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

GRAVITY_TRANSLATION_BLOCK_1_END

## Tamanho

Para controlar o tamanho do `RangeCalendar`, use a propriedade `size`. O tamanho padrão é `m`.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Valor

### Valor mínimo e máximo

A propriedade `minValue` permite especificar a data e hora mais cedo que pode ser inserida pelo usuário. Inversamente, a propriedade `maxValue` especifica a data e hora mais tarde que pode ser inserida. Todos os outros valores serão desativados para o usuário.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Modo

Define o intervalo de tempo que o `RangeCalendar` deve exibir. Com `mode`, você pode escolhê-lo de forma controlada. Para uma forma não controlada, você não precisa especificar nenhum valor. Você também pode definir o modo inicial de forma não controlada com a prop `defaultMode`.

`days` - modo padrão para `RangeCalendar`. Ele mostra os dias do mês.

`months` - mostra os meses do ano

`quarters` - mostra os trimestres por ano (não disponível como valor em `defaultMode`)

`years` - mostra vários anos para seleção

Você pode limitar os modos habilitados usando a prop `modes`.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Estados

### Desativado

O estado do `RangeCalendar` onde você não quer que o usuário possa interagir com o componente.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### Somente leitura

`readOnly` é um atributo booleano que, quando definido como true, torna o componente `RangeCalendar` imutável para o usuário. Isso significa que, embora a entrada exiba seu valor atual, os usuários não poderão alterá-lo.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Valor focado

Permite selecionar a data em que a visualização do `RangeCalendar` está focada. Se você precisar que seja controlado, deve usar a prop `focusedValue`. Você pode definir o valor focado inicial para um componente não controlado com a prop opcional `defaultFocusedValue`.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Fuso horário

`timeZone` é a propriedade para definir o fuso horário do valor na entrada. [Saiba mais sobre fusos horários](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Propriedades

| Nome                                  | Descrição                                                                                                            | Tipo                               | Padrão                               |
| :------------------------------------ | :------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------: | :---------------------------------------------------------: |
| aria-describedby                      | O atributo `aria-describedby` do controle                                                                           |                             `string`                             |                                                             |
| aria-details                          | O atributo `aria-details` do controle                                                                               |                             `string`                             |                                                             |
| aria-label                            | O atributo `aria-label` do controle                                                                                 |                             `string`                             |                                                             |
| aria-labelledby                       | O atributo `aria-labelledby` do controle                                                                            |                             `string`                             |                                                             |
| autoFocus                             | O atributo `autofocus` do controle                                                                                  |                            `boolean`                             |                                                             |
| className                             | O nome da classe do wrapper do controle                                                                              |                             `string`                             |                                                             |
| [defaultFocusedValue](#focused-value) | A data que está em foco quando o calendário é montado pela primeira vez (não controlado)                               |                            `DateTime`                            |                                                             |
| [defaultMode](#mode)                  | Modo inicial a ser exibido no calendário                                                                             |                `days` `months` `quarters` `years`                |                                                             |
| [defaultValue](#value)                | Define o valor inicial para o componente não controlado.                                                             |                      `RangeValue<DateTime>`                      |                                                             |
| [disabled](#disabled)                 | Indica que o usuário não pode interagir com o controle                                                               |                            `boolean`                             |                           `false`                           |
| [focusedValue](#focused-value)        | Define a visualização padrão do componente não controlado que inclui este valor                                      |                        `DateTime` `null`                         |                                                             |
| id                                    | O atributo `id` do controle                                                                                         |                             `string`                             |                                                             |
| isDateUnavailable                     | Callback que é chamado para cada data do calendário. Se retornar `true`, a data estará indisponível.             |                 `((date: DateTime) => boolean)`                  |                                                             |
| isWeekend                             | Callback que é chamado para cada data do calendário. Se retornar `true`, a data é um fim de semana.                 |                 `((date: DateTime) => boolean)`                  |                                                             |
| [maxValue](#min-and-max-value)        | A data máxima permitida que um usuário pode selecionar.                                                              |                            `DateTime`                            |                                                             |
| [minValue](#min-and-max-value)        | A data mínima permitida que um usuário pode selecionar.                                                              |                            `DateTime`                            |                                                             |
| [mode](#mode)                         | Define o intervalo de tempo que `RangeCalendar` deve exibir de forma controlada.                                    |                `days` `months` `quarters` `years`                |                                                             |
| modes                                 | Modos disponíveis para o usuário                                                                                     |         `Partial<Record<RangeCalendarLayout, boolean>>`          | `{days: true, months: true, quarters: false, years: true }` |
| onBlur                                | Dispara quando o controle perde o foco. Fornece o evento de foco como argumento do callback                         |          `((e: FocusEvent<Element, Element>) => void)`           |                                                             |
| onFocus                               | Dispara quando o controle ganha foco. Fornece o evento de foco como argumento do callback                          |          `((e: FocusEvent<Element, Element>) => void)`           |                                                             |
| onFocusUpdate                         | Dispara quando a data em foco do controle muda.                                                                      |                   `((date: DateTime) => void)`                   |                                                             |
| onUpdate                              | Dispara quando o valor é alterado.                                                                                   |                   `((value: DateTime) => void`                   |                                                             |
| onUpdateMode                          | Dispara quando o modo é alterado.                                                                                    | `((value: 'days' \| 'months' \| 'quarters' \| 'years' ) => void` |                                                             |
| [readOnly](#readonly)                 | Se o valor do calendário é imutável.                                                                                 |                            `boolean`                             |                           `false`                           |
| [size](#size)                         | O tamanho do controle                                                                                                |                        `"m"` `"l"` `"xl"`                        |                            `"m"`                            |
| style                                 | Define o estilo inline para o elemento.                                                                              |                         `CSSProperties`                          |                                                             |
| [timeZone](#time-zone)                | Define o fuso horário. [Saiba mais sobre fusos horários](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                             `string`                             |                                                             |
| [value](#calendar)                    | O valor do controle                                                                                                  |                  `RangeValue<DateTime>` `null`                   |                                                             |