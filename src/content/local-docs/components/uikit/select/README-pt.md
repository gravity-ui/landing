`Select` é um controle que fornece uma lista de opções que um usuário pode selecionar.

```tsx
import {Select} from '@gravity-ui/uikit';
```

## Opções

Opções para selecionar.

### Definindo opções

Você pode definir opções como um array de objetos ou como filhos de um componente. A primeira abordagem é útil para casos em que as opções exigem preparação complexa e, possivelmente, memorização. A segunda é conveniente quando há poucas opções e sua configuração não requer cálculos complexos.

#### Lista plana

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

#### Lista agrupada

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Armazenando dados em opções

Você pode definir e armazenar dados exclusivos em cada opção usando a propriedade `option.data`. Isso pode ser útil quando você precisa enriquecer os dados ao usar o callback `onUpdate` ou, por exemplo, ao renderizar suas opções com `renderOption`.

## Selecionando múltiplas opções

Para habilitar a seleção múltipla, use a propriedade `multiple`. Seu valor padrão é `false`.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Contador

Você pode adicionar um contador de itens selecionados ao componente usando a propriedade `hasCounter`.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Filtrando opções

Para habilitar a seção de filtro, use a propriedade `filterable`. Seu valor padrão é `false`.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Tamanho

Para gerenciar o tamanho padrão do controle e das opções, use a propriedade `size`. Seu tamanho padrão é `m`.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## Largura do controle

Por padrão, a largura do controle se estende para corresponder à largura do conteúdo das opções selecionadas. Você pode gerenciá-la usando a propriedade `width`:

`'max'`: Estende para a largura total do pai.

`number`: Aplica a largura em pixels.

GRAVITY_TRANSLATION_BLOCK_13_END

## Largura do popup

Você pode gerenciar a largura do popup com a propriedade `popupWidth`. Os valores disponíveis são:

`'fit'`: Aplica a largura do controle.

`number`: Aplica a largura em pixels.

Pontos a serem observados sobre o comportamento padrão:

- A largura do popup é igual à largura da opção mais larga, mas não superior a `90vw`. Isso não se aplica caso você use [virtualização](#virtualized-list).

- Opções estreitas são estendidas para caber na largura do controle.

GRAVITY_TRANSLATION_BLOCK_14_END

### Lista virtualizada

Para uma exibição ideal de um grande número de opções, `Select` possui uma ferramenta de virtualização de lista integrada. A virtualização é habilitada após superar o limite do número de opções (`50` por padrão). Você pode gerenciar esse valor usando a propriedade `virtualizationThreshold`.

Ao usar a virtualização, algumas restrições se aplicam ao elemento popup:

- A largura do popup não é mais ajustada ao comprimento da opção mais longa.

- A largura mínima do popup é igual à largura do controle, ou `100px` se o controle for mais curto.

GRAVITY_TRANSLATION_BLOCK_15_END

## Uso avançado

Existem muitas maneiras de personalizar seu `Select`.

### Renderizando controle personalizado

Para renderizar um controle personalizado, use a propriedade `renderControl`.
Observação: Você deve encaminhar todos os argumentos para o seu nó para habilitar um comportamento consistente, assim como ao usar o controle padrão.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Renderizando seção de filtro personalizada

Para renderizar uma seção de filtro personalizada, use a propriedade `renderFilter` e defina a propriedade `filterable` como `true`.
Observação: Você precisa encaminhar todos os argumentos para o seu nó para habilitar um filtro que funcione corretamente, assim como ao usar a configuração padrão.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

### Renderizando opções personalizadas

Para renderizar opções personalizadas, use a propriedade `renderOption`:

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

### Renderizando opções selecionadas personalizadas

Para renderizar opções selecionadas personalizadas, use a propriedade `renderSelectedOption`:

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

### Renderizando opções com alturas diferentes

As opções têm uma altura fixa de acordo com a propriedade `size`. Se você precisar renderizar opções com alturas diferentes, pode usar a propriedade `option.data`. Ela armazenará informações sobre qual altura você precisa definir para as opções, bem como a propriedade `getOptionHeight` para definir esse valor.

GRAVITY_TRANSLATION_BLOCK_24_END

GRAVITY_TRANSLATION_BLOCK_25_END

### Renderizando contador personalizado

Para renderizar um contador personalizado, use a propriedade `renderCounter`. O contador só é exibido quando a seleção múltipla está habilitada (`multiple={true}`) e `hasCounter={true}`.

GRAVITY_TRANSLATION_BLOCK_26_END

GRAVITY_TRANSLATION_BLOCK_27_END

### Renderizando lista de opções

A propriedade `renderPopup` permite controlar o conteúdo da lista de opções: alterar a ordem dos elementos padrão (filtro, lista), ocultá-los ou adicionar elementos personalizados entre, antes ou depois deles.

GRAVITY_TRANSLATION_BLOCK_28_END

GRAVITY_TRANSLATION_BLOCK_29_END

### Erro

Este estado do `Select` é para entrada incorreta do usuário. Para alterar a aparência do `Select`, use a propriedade `validationState` com o valor `"invalid"`. Opcionalmente, você pode fornecer uma mensagem de erro através da propriedade `errorMessage`. Por padrão, o texto da mensagem é renderizado fora do componente.
Você pode alterar isso com a propriedade `errorPlacement`.

GRAVITY_TRANSLATION_BLOCK_30_END

## Propriedades

| Nome                                                      | Descrição                                                                                                                      | Tipo                                     | Padrão                                                   |
| :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------- |
| className                                                 | Controla a classe CSS                                                                                                            | `string`                                 |                                                          |
| defaultValue                                              | Valores padrão que representam opções selecionadas em caso de uso de estado não controlado                                       | `string[]`                               |                                                          |
| disabled                                                  | Indica que o controle não pode ser manipulado pelo usuário                                                                        | `boolean`                                | `false`                                                  |
| [filterable](#filtering-options)                          | Indica que o popup de seleção possui uma seção de filtro                                                                        | `boolean`                                | `false`                                                  |
| filterOption                                              | Usado para comparar a opção com o filtro                                                                                         | `function`                               |                                                          |
| filterPlaceholder                                         | Texto padrão do placeholder da entrada de filtro                                                                                 | `string`                                 |                                                          |
| [getOptionHeight](#render-options-with-different-heights) | Usado para definir a altura de opções personalizadas do usuário                                                                  | `function`                               |                                                          |
| getOptionGroupHeight                                      | Usado para definir a altura de grupos de opções personalizados do usuário                                                        | `function`                               |                                                          |
| hasClear                                                  | Habilita a exibição de um ícone para limpar as opções selecionadas                                                               | `boolean`                                | `false`                                                  |
| id                                                        | Atributo `id` do HTML                                                                                                            | `string`                                 |                                                          |
| label                                                     | Rótulo do controle                                                                                                               | `string`                                 |                                                          |
| loading                                                   | Adiciona o item de carregamento ao final da lista de opções. Funciona como um indicador de carregamento persistente enquanto a lista de opções está vazia. | `boolean`                                |                                                          |
| [multiple](#selecting-multiple-options)                   | Indica se várias opções podem ser selecionadas na lista                                                                          | `boolean`                                | `false`                                                  |
| name                                                      | Nome do controle                                                                                                                 | `string`                                 |                                                          |
| onBlur                                                    | Handler chamado quando o elemento perde o foco.                                                                                  | `function`                               |                                                          |
| filter                                                    | Valor controlado do filtro                                                                                                       | `string`                                 | `''`                                                     |
| onFilterChange                                            | Dispara a cada alteração do filtro                                                                                               | `function`                               |                                                          |
| onFocus                                                   | Handler chamado quando o elemento ganha foco                                                                                     | `function`                               |                                                          |
| onLoadMore                                                | Dispara quando o indicador de carregamento fica visível                                                                          | `function`                               |                                                          |
| onOpenChange                                              | Dispara a cada alteração da visibilidade do popup                                                                                | `function`                               |                                                          |
| onUpdate                                                  | Dispara quando uma alteração no valor do `Select` é confirmada pelo usuário                                                     | `function`                               |                                                          |
| [options](#options)                                       | Opções para selecionar                                                                                                           | `(SelectOption \| SelectOptionGroup)[]`  |                                                          |
| pin                                                       | Vista da borda do controle                                                                                                       | `string`                                 | `'round-round'`                                          |
| placeholder                                               | Texto do placeholder                                                                                                             | `string`                                 |                                                          |
| popupClassName                                            | Classe CSS do popup com a lista de opções                                                                                        | `string`                                 |                                                          |
| popupPlacement                                            | Posicionamento do popup                                                                                                          | `PopupPlacement` `Array<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                | Largura do popup                                                                                                                 | `number \| 'fit' \| 'outfit'`            | `'outfit'`                                               |
| qa                                                        | Atributo de ID de teste (`data-qa`)                                                                                              | `string`                                 |                                                          |
| [renderControl](#render-custom-control)                   | Usado para renderizar o controle do usuário                                                                                      | `function`                               |                                                          |
| [renderCounter](#rendering-custom-counter)                | Usado para renderizar o contador do usuário. Funciona apenas com [hasCounter](#counter).                                         | `function`                               |                                                          |
| renderEmptyOptions                                        | Usado para renderizar um nó para uma lista de opções vazia                                                                       | `function`                               |                                                          |
| [renderFilter](#render-custom-filter-section)             | Usado para renderizar a seção de filtro do usuário                                                                               | `function`                               |                                                          |
| [renderOption](#render-custom-options)                    | Usado para renderizar as opções do usuário                                                                                       | `function`                               |                                                          |
| renderOptionGroup                                         | Usado para renderizar grupos de opções do usuário                                                                                | `function`                               |                                                          |
| [renderSelectedOption](#render-custom-selected-options)   | Usado para renderizar as opções selecionadas do usuário                                                                          | `function`                               |                                                          |
| [renderPopup](#rendering-options-list)                    | Usado para renderizar o conteúdo da lista de opções                                                                              | `function`                               |                                                          |
| [size](#size)                                             | Tamanho do controle / opções                                                                                                     | `string`                                 | `'m'`                                                    |
| value                                                     | Valores que representam opções selecionadas                                                                                      | `string[]`                               |                                                          |
| view                                                      | Vista do controle                                                                                                                | `string`                                 | `'normal'`                                               |
| [virtualizationThreshold](#virtualized-list)              | Limite de contagem de opções após o qual a virtualização é habilitada                                                            | `number`                                 | `50`                                                     |
| [width](#control-width)                                   | Largura do controle                                                                                                              | `string \| number`                       | `undefined`                                              |
| errorMessage                                              | Texto de erro                                                                                                                    | `string`                                 |                                                          |
| errorPlacement                                            | Posição do erro                                                                                                                  | `outside` `inside`                       | `outside`                                                |
| validationState                                           | Estado de validação                                                                                                              | `"invalid"`                              |                                                          |
| [hasCounter](#counter)                                    | Mostra a contagem de opções selecionadas. O contador aparece apenas quando a seleção [multiple](#selecting-multiple-options) está habilitada. | `boolean`                                |                                                          |

## API CSS

| Nome                             | Descrição                                   |
| :------------------------------- | :-------------------------------------------- |
| `--g-select-focus-outline-color` | Cor do contorno se focado (ausente por padrão) |