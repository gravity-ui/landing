<!--GITHUB_BLOCK-->

# RelativeDateField

<!--/GITHUB_BLOCK-->

```tsx
import {RelativeDateField} from '@gravity-ui/date-components';
```

O componente `RelativeDateField` é usado apenas para inserir datas relativas. Ele não pode ser usado como um `DateField` "normal".

## Entrada relativa

O componente recebe valores em um formato relativo especial. Você define valores como fórmulas que ajudarão a calcular a data exata. Podemos chamar isso de `formato estilo Grafana` porque é muito semelhante ao formato dos campos de tempo relativo do Grafana. Para saber mais sobre valores de tempo relativo no Grafana, leia [a documentação](https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/).

Usando este modo, você pode entregar seus dados da origem ao destino e calcular o valor exato diretamente no endpoint necessário, sem imprecisões.

## Regras de entrada válidas

- um valor deve começar com a palavra-chave `now`
- a expressão de data relativa geralmente se parece com: `now${operador}${contagem}${unidade}`
- valores disponíveis para `operador`:
  - `-` - subtração
  - `+` - adição
  - `/` - trazer para o início da `unidade`
- valores válidos de `contagem` - qualquer número natural
- valores válidos de `unidade`:
  - `d` - dia
  - `w` - semana
  - `M` - mês
  - `Q` - trimestre
  - `y` - ano
  - `h` - hora
  - `m` - minuto

### Exemplos de uso

> `now-1d`
>
> `now/w`
>
> `now+10d-5d/M`

## Propriedades

| Nome             | Descrição                                                                                                            |                     Tipo                      |     Padrão     |
| :--------------- | :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :------------: |
| aria-describedby | O atributo `aria-describedby` do controle                                                                             |                   `string`                    |                |
| aria-details     | O atributo `aria-details` do controle                                                                                 |                   `string`                    |                |
| aria-label       | O atributo `aria-label` do controle                                                                                   |                   `string`                    |                |
| aria-labelledby  | O atributo `aria-labelledby` do controle                                                                              |                   `string`                    |                |
| autoFocus        | O atributo `autofocus` do controle                                                                                    |                   `boolean`                   |                |
| className        | O nome da classe do wrapper do controle                                                                              |                   `string`                    |                |
| defaultValue     | Define o valor inicial para o componente não controlado.                                                             |                   `string`                    |                |
| disabled         | Indica que o usuário não pode interagir com o controle                                                               |                   `boolean`                   |     `false`    |
| errorMessage     | Texto de erro                                                                                                        |                  `ReactNode`                  |                |
| hasClear         | Mostra o ícone para limpar o valor do controle                                                                       |                   `boolean`                   |     `false`    |
| hasTime          | Mostra o campo de hora no valor do popup                                                                             |                   `boolean`                   |     `false`    |
| id               | O atributo `id` do controle                                                                                           |                   `string`                    |                |
| label            | Texto de ajuda renderizado à esquerda do nó de entrada                                                               |                   `string`                    |                |
| leftContent      | O nó do usuário renderizado antes do rótulo e da entrada                                                             |               `React.ReactNode`               |                |
| onBlur           | Dispara quando o controle perde o foco. Fornece o evento de foco como argumento do callback                          | `((e: FocusEvent<Element, Element>) => void)` |                |
| onFocus          | Dispara quando o controle ganha foco. Fornece o evento de foco como argumento do callback                            | `((e: FocusEvent<Element, Element>) => void)` |                |
| onKeyDown        | Dispara quando uma tecla é pressionada. Fornece o evento do teclado como argumento do callback                       |    `((e: KeyboardEvent<Element>) => void)`    |                |
| onKeyUp          | Dispara quando uma tecla é liberada. Fornece o evento do teclado como argumento do callback                          |    `((e: KeyboardEvent<Element>) => void)`    |                |
| onUpdate         | Dispara quando o valor é alterado pelo usuário. Fornece o novo valor como argumento do callback                      |      `((value: string \| null) => void`       |                |
| pin              | Arredondamento de canto                                                                                              |                   `string`                    | `'round-round'` |
| placeholder      | Texto que aparece no controle quando ele não tem valor definido                                                      |                   `string`                    |                |
| readOnly         | Se o valor do componente é imutável.                                                                                 |                   `boolean`                   |     `false`    |
| rightContent     | Nó do usuário renderizado após o nó de entrada e o botão de limpar                                                   |               `React.ReactNode`               |                |
| size             | O tamanho do controle                                                                                                |           `"s"` `"m"` `"l"` `"xl"`            |      `"m"`     |
| style            | Define o estilo inline para o elemento.                                                                              |                `CSSProperties`                |                |
| timeZone         | Define o fuso horário. [Saiba mais sobre fusos horários](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                   `string`                    |                |
| validationState  | Estado de validação                                                                                                  |                  `"invalid"`                  |                |
| value            | O valor do controle                                                                                                  |                `string` `null`                |                |
| view             | A visualização do controle                                                                                           |             `"normal"` `"clear"`              |   `"normal"`   |
