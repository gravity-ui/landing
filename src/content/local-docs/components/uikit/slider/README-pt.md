O slider é um componente React personalizável e responsivo que permite aos usuários selecionar um único valor ou um intervalo de valores de um conjunto de dados especificado.

```tsx
import {Slider} from '@gravity-ui/uikit';
```

## Variações do Slider

### Slider único

Este é um slider com uma alça para selecionar um único valor. Ele é usado por padrão.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Slider de intervalo

Este é um slider com duas alças para selecionar um intervalo. Para usá-lo, defina `defaultValue` (para um slider não controlado) ou `value` (para um controlado) para o array.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Estados

### Desativado

Este é um estado de um `Slider` onde você não quer permitir que o usuário interaja com este componente.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Erro

Este estado do `Slider` é para entrada incorreta do usuário. Para alterar a aparência do `Slider`, use a propriedade `validationState` com o valor `"invalid"`. Opcionalmente, você pode fornecer uma mensagem de erro através da propriedade `errorMessage`. O texto desta mensagem será renderizado abaixo do slider.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Tamanho

Use a propriedade `size` para gerenciar o tamanho do `Slider`. O tamanho padrão é `m`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Valor

### Valor mínimo e máximo

As propriedades `min` e `max` definem os limites do intervalo que o `Slider` pode manipular. Essas propriedades são essenciais para definir os limites dos valores selecionáveis.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Passo

A propriedade `step` determina os incrementos dentro do intervalo de valor mínimo e máximo. Isso significa o quanto o valor muda com um único movimento do slider.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### Marcadores

A propriedade `marks` é utilizada no componente `Slider` para especificar marcadores visuais ao longo do slider que ajudam a indicar vários pontos entre o valor mínimo e máximo. Esta propriedade aprimora a usabilidade e a interface visual do slider, especialmente para denotar intervalos específicos. Por padrão, são 2 (valores `min` e `max`). Você pode usá-la de 2 maneiras diferentes:

- a quantidade de marcadores visuais ao longo do slider

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

- o array de valores de marcadores ao longo do slider

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

O valor `0` ou um array vazio `[]` na propriedade `marks` oculta todos os marcadores do `Slider`.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

> O valor do marcador está disponível para seleção, mesmo que não corresponda à condição do valor `step`.

Você pode alterar o formato de exibição dos valores dos marcadores usando a propriedade `marksFormat`.

#### Definir valores disponíveis

Você pode definir a propriedade `step` como `null` para definir um conjunto de valores específicos que o slider pode manipular, em vez de um intervalo contínuo. Isso é particularmente útil quando apenas certos valores discretos são válidos para seleção. Nesses casos, as propriedades `min`, `max` e `marks` permitem especificar um array de números que representam os valores exatos que os usuários podem selecionar usando o `Slider`.

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

## Ponto de partida

A propriedade `startPoint` permite definir o ponto de partida da trilha. Ela usa o valor mínimo do `Slider` por padrão. Será ignorada se você usar o `Slider` com valores de intervalo ou se definir a propriedade `inverted`.

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

## Invertido

A propriedade `inverted` permite definir a visualização invertida da trilha do `Slider`.
Por padrão (de `false`), o `Slider` mostra o intervalo de `min` até a alça.
Se `true`, ele indica o intervalo da alça até `max`.
Apenas para `Slider` único. A propriedade `startPoint` será ignorada.

GRAVITY_TRANSLATION_BLOCK_24_END

GRAVITY_TRANSLATION_BLOCK_25_END

## Tooltip

A propriedade `tooltipDisplay` é usada no componente `Slider` para controlar o comportamento de exibição de um tooltip que mostra o valor atual enquanto o usuário interage com o slider. O valor `auto` exibe o tooltip apenas quando as alças do `Slider` estão com o cursor sobre elas ou focadas.

GRAVITY_TRANSLATION_BLOCK_26_END

GRAVITY_TRANSLATION_BLOCK_27_END

Você pode alterar o formato de exibição do valor do tooltip usando a propriedade `tooltipFormat`. Se você não especificar `tooltipFormat`, `marksFormat` será usado para exibir o valor no tooltip.

## Propriedades

| Nome                             | Descrição                                                                                                                                                                              |                         Tipo                         | Padrão |
| :------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------: | :-----: |
| apiRef                           | Ref para as props do componente Slider para foco e blur                                                                                                                                  |                `RefObject<SliderRef>`                |         |
| autoFocus                        | O atributo `autofocus` do controle                                                                                                                                                      |                      `boolean`                       |         |
| className                        | O nome da classe do wrapper do controle                                                                                                                                                  |                       `string`                       |         |
| [defaultValue](#slider-variants) | O valor padrão do controle, usado quando o componente não está controlado. Usa o valor mínimo do `Slider` por padrão.                                                                   |             `number` `[number, number]`              |         |
| [disabled](#disabled)            | Indica que o usuário não pode interagir com o controle                                                                                                                                   |                      `boolean`                       | `false` |
| [errorMessage](#error)           | Texto de um erro a ser exibido                                                                                                                                                          |                       `string`                       |         |
| [marks](#marks)                  | Marcas de texto sob o slider. Pode ser definido como a quantidade de marcas do slider, ou como um array de valores que devem ter marcas. O valor `0` ou um array vazio oculta todas as marcas. |                 `number` `number[]`                  |   `2`   |
| [marksFormat](#marks)            | Formatador para o valor exibido da marca                                                                                                                                                 |             `(value: number) => string`              |         |
| [max](#min-and-max-value)        | O valor máximo do componente.                                                                                                                                                            |                       `number`                       |  `100`  |
| [min](#min-and-max-value)        | O valor mínimo do componente.                                                                                                                                                            |                       `number`                       |   `0`   |
| onBlur                           | Dispara quando o controle perde o foco. Fornece o evento de foco como argumento do callback                                                                                             | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |         |
| onUpdate                         | Dispara quando o valor do slider é alterado pelo usuário. Fornece o evento de alteração como argumento do callback                                                                       |   `((value: number \| [number, number]) => void)`    |         |
| onUpdateComplete                 | Dispara quando `ontouchend` ou `onmouseup` é acionado. Fornece o evento de alteração como argumento do callback                                                                         |   `((value: number \| [number, number]) => void)`    |         |
| onFocus                          | Dispara quando o controle obtém foco. Fornece o evento de foco como argumento do callback                                                                                               | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |         |
| [size](#size)                    | O tamanho do controle                                                                                                                                                                    |               `"s"` `"m"` `"l"` `"xl"`               |  `"m"`  |
| [step](#step)                    | Valor a ser adicionado ou subtraído a cada passo que o slider faz. Pode ser definido como `null` para usar as `marks` como passos.                                                     |                   `number` `null`                    |   `1`   |
| [startPoint](#start-point)       | Ponto de início da trilha. Ignorado para sliders de intervalo e para sliders invertidos.                                                                                                 |                       `number`                       |         |
| [inverted](#inverted)            | Slider com trilha invertida (da alça para `max`).                                                                                                                                        |                      `boolean`                       |         |
| tabIndex                         | O atributo `tabIndex` do controle                                                                                                                                                       |             `number` `[number, number]`              |         |
| [tooltipDisplay](#tooltip)       | O comportamento de exibição da tooltip                                                                                                                                                   |                  `off` `on` `auto`                   |  `off`  |
| [tooltipFormat](#tooltip)        | Formatador para o valor exibido da tooltip. Usa `marksFormat` se não estiver definido                                                                                                    |             `(value: number) => string`              |         |
| [validationState](#error)        | Estado de validação                                                                                                                                                                      |                     `"invalid"`                      |         |
| [value](#slider-variants)        | O valor do controle                                                                                                                                                                      |             `number` `[number, number]`              |         |