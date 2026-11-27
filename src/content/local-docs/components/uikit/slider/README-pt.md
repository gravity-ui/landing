<!--GITHUB_BLOCK-->

# Slider

<!--/GITHUB_BLOCK-->

O slider é um componente React personalizável e responsivo que permite aos usuários selecionar um único valor ou um intervalo de valores de um conjunto de dados especificado.

```tsx
import {Slider} from '@gravity-ui/uikit';
```

## Variações do Slider

### Slider único

Este é um slider com uma alça para selecionar um único valor. Ele é usado por padrão.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider />
```

<!--/GITHUB_BLOCK-->

### Slider de intervalo

Este é um slider com duas alças para selecionar um intervalo. Para usá-lo, defina `defaultValue` (para um slider não controlado) ou `value` (para um controlado) para o array.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider defaultValue={[20, 40]} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider defaultValue={[20, 40]} />
```

<!--/GITHUB_BLOCK-->

## Estados

### Desativado

Este é um estado de um `Slider` onde você não quer permitir que o usuário interaja com este componente.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider disabled />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider disabled={true} />
```

<!--/GITHUB_BLOCK-->

### Erro

Este estado do `Slider` é para entrada incorreta do usuário. Para alterar a aparência do `Slider`, use a propriedade `validationState` com o valor `"invalid"`. Opcionalmente, você pode fornecer uma mensagem de erro através da propriedade `errorMessage`. O texto desta mensagem será renderizado abaixo do slider.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider validationState="invalid" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider validationState="invalid" errorMessage="Error message" />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider validationState={"invalid"} />
<Slider validationState={"invalid"} errorMessage="Error message" />
```

<!--/GITHUB_BLOCK-->

## Tamanho

Use a propriedade `size` para gerenciar o tamanho do `Slider`. O tamanho padrão é `m`.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider size="s" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="m" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="l" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="xl" />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider size="s" />
<Slider size="m" />
<Slider size="l" />
<Slider size="xl" />
```

<!--/GITHUB_BLOCK-->

## Valor

### Valor mínimo e máximo

As propriedades `min` e `max` definem os limites do intervalo que o `Slider` pode manipular. Essas propriedades são essenciais para definir os limites dos valores selecionáveis.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider min={10} />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider max={50} />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider min={20} max={60} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider min={10} />
<Slider max={50} />
<Slider min={20} max={60} />
```

<!--/GITHUB_BLOCK-->

### Passo

A propriedade `step` determina os incrementos dentro do intervalo de valor mínimo e máximo. Isso significa o quanto o valor muda com um único movimento do slider.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider step={10} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider step={10} />
```

<!--/GITHUB_BLOCK-->

### Marcadores

A propriedade `marks` é utilizada no componente `Slider` para especificar marcadores visuais ao longo do slider que ajudam a indicar vários pontos entre o valor mínimo e máximo. Esta propriedade aprimora a usabilidade e a interface visual do slider, especialmente para denotar intervalos específicos. Por padrão, são 2 (valores `min` e `max`). Você pode usá-la de 2 maneiras diferentes:

- a quantidade de marcadores visuais ao longo do slider

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={11} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={11} />
```

<!--/GITHUB_BLOCK-->

- o array de valores de marcadores ao longo do slider

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={[0, 50, 100]} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={[0, 50, 100]} />
```

<!--/GITHUB_BLOCK-->

O valor `0` ou um array vazio `[]` na propriedade `marks` oculta todos os marcadores do `Slider`.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={0} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={0} />
```

<!--/GITHUB_BLOCK-->

> O valor do marcador está disponível para seleção, mesmo que não corresponda à condição do valor `step`.

Você pode alterar o formato de exibição dos valores dos marcadores usando a propriedade `marksFormat`.

#### Definir valores disponíveis

Você pode definir a propriedade `step` como `null` para definir um conjunto de valores específicos que o slider pode manipular, em vez de um intervalo contínuo. Isso é particularmente útil quando apenas certos valores discretos são válidos para seleção. Nesses casos, as propriedades `min`, `max` e `marks` permitem especificar um array de números que representam os valores exatos que os usuários podem selecionar usando o `Slider`.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={[10, 20, 50, 55, 65, 80]} step={null} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={[10, 20, 50, 55, 65, 80]} step={null} />
```

<!--/GITHUB_BLOCK-->

## Ponto de partida

A propriedade `startPoint` permite definir o ponto de partida da trilha. Ela usa o valor mínimo do `Slider` por padrão. Será ignorada se você usar o `Slider` com valores de intervalo ou se definir a propriedade `inverted`.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider startPoint={50} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider startPoint={50} />
```

<!--/GITHUB_BLOCK-->

## Invertido

A propriedade `inverted` permite definir a visualização invertida da trilha do `Slider`.
Por padrão (de `false`), o `Slider` mostra o intervalo de `min` até a alça.
Se `true`, ele indica o intervalo da alça até `max`.
Apenas para `Slider` único. A propriedade `startPoint` será ignorada.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider inverted />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider inverted />
```

<!--/GITHUB_BLOCK-->

## Tooltip

A propriedade `tooltipDisplay` é usada no componente `Slider` para controlar o comportamento de exibição de um tooltip que mostra o valor atual enquanto o usuário interage com o slider. O valor `auto` exibe o tooltip apenas quando as alças do `Slider` estão com o cursor sobre elas ou focadas.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider tooltipDisplay="on" />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider tooltipDisplay="on" />
```

<!--/GITHUB_BLOCK-->

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
