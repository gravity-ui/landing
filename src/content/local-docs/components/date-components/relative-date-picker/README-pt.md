<!--GITHUB_BLOCK-->

# RelativeDatePicker

<!--/GITHUB_BLOCK-->

```tsx
import {RelativeDatePicker} from '@gravity-ui/date-components';
```

`RelativeDatePicker` é quase o mesmo componente que `DatePicker`, mas tem a capacidade de usar datas relativas.

## Diferença do `DatePicker`

`RelativeDatePicker` pode funcionar em dois modos: `absolute` e `relative`. Você pode alternar interativamente clicando no botão `f(x)`. Ou você pode definir o campo `type` no objeto `value` ou `defaultValue`.

### Absoluto

O comportamento do `RelativeDatePicker` no modo `absolute` é muito semelhante ao do `DatePicker` simples.

<!--LANDING_BLOCK

[Learn more about DatePicker](/components/date-components/date-picker)

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about DatePicker](/src/components/DatePicker)

<!--/GITHUB_BLOCK-->

### Relativo

Neste modo, `RelativeDatePicker` obtém e retorna valores em um formato relativo especial.

<!--LANDING_BLOCK

[Learn more about rules of relative formulas](/components/date-components/relative-date-field#relative-input)

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about rules of relative formulas](/src/components/RelativeDateField#relative-input)

<!--/GITHUB_BLOCK-->

## Propriedades

| Nome              | Descrição                                                                                                                                |                     Tipo                      |          Padrão          |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :----------------------: |
| aria-describedby  | O `aria-describedby` do controle. Identifica o elemento (ou elementos) que descreve o objeto. atributo                                |                   `string`                    |                           |
| aria-details      | O `aria-details` do controle. Identifica o elemento (ou elementos) que fornece uma descrição detalhada e estendida para o objeto. atributo |                   `string`                    |                           |
| aria-label        | O `aria-label` do controle. Define um valor de string que rotula o elemento atual. atributo                                              |                   `string`                    |                           |
| aria-labelledby   | O `aria-labelledby` do controle. Identifica o elemento (ou elementos) que rotula o elemento atual. atributo                           |                   `string`                    |                           |
| autoFocus         | O `autofocus` do controle. Se o elemento deve receber foco ao renderizar. atributo                                                   |                   `boolean`                   |                           |
| className         | Nome da classe do wrapper do controle                                                                                                           |                   `string`                    |                           |
| defaultValue      | Define o valor inicial para o componente não controlado.                                                                                         |                    `Value`                    |                           |
| disabled          | Indica que o usuário não pode interagir com o controle                                                                                   |                   `boolean`                   |          `false`          |
| errorMessage      | Texto de erro                                                                                                                                 |                  `ReactNode`                  |                           |
| format            | Formato da data quando renderizada no input. [Formatos disponíveis](https://day.js.org/docs/en/display/format)                              |                   `string`                    |                           |
| hasClear          | Mostra o ícone para limpar o valor do controle                                                                                                |                   `boolean`                   |          `false`          |
| id                | O atributo `id` do controle                                                                                                               |                   `string`                    |                           |
| isDateUnavailable | Callback que é chamado para cada data do calendário. Se retornar true, então a data está indisponível.                                   |        `((date: DateTime) => boolean)`        |                           |
| label             | Texto de ajuda renderizado à esquerda do nó de entrada                                                                                           |                   `string`                    |                           |
| maxValue          | A data máxima permitida que um usuário pode selecionar.                                                                                           |                  `DateTime`                   |                           |
| minValue          | A data mínima permitida que um usuário pode selecionar.                                                                                           |                  `DateTime`                   |                           |
| onBlur            | Dispara quando o controle perde o foco. Fornece o evento de foco como argumento do callback                                                           | `((e: FocusEvent<Element, Element>) => void)` |                           |
| onFocus           | Dispara quando o controle ganha foco. Fornece o evento de foco como argumento do callback                                                           | `((e: FocusEvent<Element, Element>) => void)` |                           |
| onKeyDown         | Dispara quando uma tecla é pressionada. Fornece o evento do teclado como argumento do callback                                                              |    `((e: KeyboardEvent<Element>) => void)`    |                           |
| onKeyUp           | Dispara quando uma tecla é liberada. Fornece o evento do teclado como argumento do callback                                                             |    `((e: KeyboardEvent<Element>) => void)`    |                           |
| onUpdate          | Dispara quando o valor é alterado pelo usuário. Fornece o novo valor como argumento do callback                                                  |       `((value: Value \| null) => void`       |                           |
| pin               | Arredondamento dos cantos                                                                                                                            |                `TextInputPin`                 |      `'round-round'`      |
| placeholder       | Texto que aparece no controle quando ele não tem valor definido                                                                                  |                   `string`                    |                           |
| placeholderValue  | Uma data de placeholder que controla os valores padrão de cada segmento quando o usuário interage com eles pela primeira vez.                               |                  `DateTime`                   | `data de hoje à meia-noite` |
| readOnly          | Se o valor do componente é imutável.                                                                                                |                   `boolean`                   |          `false`          |
| size              | O tamanho do controle                                                                                                                    |           `"s"` `"m"` `"l"` `"xl"`            |           `"m"`           |
| style             | Define o estilo inline para o elemento.                                                                                                         |                `CSSProperties`                |                           |
| timeZone          | Define o fuso horário. [Saiba mais sobre fusos horários](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)                       |                   `string`                    |                           |
| validationState   | Estado de validação                                                                                                                           |                  `"invalid"`                  |                           |
| value             | O valor do controle                                                                                                                   |                `Value` `null`                 |                           |
| view              | A visualização do controle                                                                                                                    |             `"normal"` `"clear"`              |        `"normal"`         |
