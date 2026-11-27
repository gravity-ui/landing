<!--GITHUB_BLOCK-->

# Progress

<!--/GITHUB_BLOCK-->

O componente `Progress` exibe o progresso da operação atual. Ele também pode ser dividido em seções.

```tsx
import {Progress} from '@gravity-ui/uikit';
```

## Tema

Use a propriedade `theme` para especificar a cor de todo o progresso ou da parte composta:

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress text="default" value={50} />
                <Box height={4} />
                <Progress text="success" theme="success" value={50} />
            </Box>
            <Box width={'30%'}>
                <Progress text="warning" theme="warning" value={50} />
                <Box height={4} />
                <Progress text="danger" theme="danger" value={50} />
            </Box>
            <Box width={'30%'}>
                <Progress text="info" theme="info" value={50} />
                <Box height={4} />
                <Progress text="misc" theme="misc" value={50} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress text="default" value={50} />
<Progress text="warning" theme="warning" value={50} />
<Progress text="info" theme="info" value={50} />
<Progress text="success" theme="success" value={50} />
<Progress text="danger" theme="danger" value={50} />
<Progress text="misc" theme="misc" value={50} />
```

<!--/GITHUB_BLOCK-->

## Estados

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width={'30%'}>
            <Progress text="Loading" theme="misc" value={60} loading />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress text="Loading" theme="misc" value={60} loading={true} />
```

<!--/GITHUB_BLOCK-->

## Tamanho

Para gerenciar o tamanho do componente `Progress`, use a propriedade `size` que pode aceitar os seguintes valores: `"xs"`, `"s"` e `"m"`. A propriedade `text` funciona apenas com o tamanho `"m"`.

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress theme="success" value={60} size="xs" />
            </Box>
            <Box width={'30%'}>
                <Progress theme="warning" value={70} size="s" />
            </Box>
            <Box width={'30%'}>
                <Progress theme="danger" value={80} size="m" />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress theme="success" value={60} size="xs" />
<Progress theme="warning" value={70} size="s" />
<Progress theme="danger" value={80} size="m" />
```

<!--/GITHUB_BLOCK-->

## Pontos de Quebra

Use a propriedade `colorStops` para definir os pontos de quebra do componente `Progress`.

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

const colorStops = [
    {theme: 'danger', stop: 20},
    {theme: 'warning', stop: 50},
    {theme: 'success', stop: 100},
];

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress value={10} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={40} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={60} colorStops={colorStops} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress value={10} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
<Progress value={40} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
<Progress value={60} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
```

<!--/GITHUB_BLOCK-->

Use a propriedade opcional `color` para substituir a cor do tema:

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

const colorStops = [
    {theme: 'danger', stop: 20, color: '#ff4444'},
    {theme: 'warning', stop: 50, color: '#ffaa00'},
    {theme: 'success', stop: 100, color: '#44ff44'},
];

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress value={10} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={40} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={60} colorStops={colorStops} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress value={10} colorStops={[{theme: 'danger', stop: 20, color: '#ff4444'}, {theme: 'warning', stop: 50, color: '#ffaa00'}, {theme: 'success', stop: 100, color: '#44ff44'}]} />
<Progress value={40} colorStops={[{theme: 'danger', stop: 20, color: '#ff4444'}, {theme: 'warning', stop: 50, color: '#ffaa00'}, {theme: 'success', stop: 100, color: '#44ff44'}]} />
<Progress value={60} colorStops={[{theme: 'danger', stop: 20, color: '#ff4444'}, {theme: 'warning', stop: 50, color: '#ffaa00'}, {theme: 'success', stop: 100, color: '#44ff44'}]} />
```

<!--/GITHUB_BLOCK-->

## Pilha

<!--SANDBOX
import type {Stack} from '@gravity-ui/uikit';
import {Box, Progress} from '@gravity-ui/uikit';

const defaultStack: Stack[] = [
    {theme: 'default', content: 'First', value: 25},
    {theme: 'success', content: 'Second', value: 25},
    {theme: 'warning', content: 'Third', value: 25},
    {theme: 'danger', content: 'Fourth', value: 25},
];

const customColorStack: Stack[] = [
    {color: '#6e5d8c', value: 33.333333333333336},
    {color: '#5b785b', value: 33.333333333333336},
    {color: '#956069', value: 33.333333333333336},
];

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress stack={defaultStack} />
            </Box>
            <Box width={'30%'}>
                <Progress text="Progress with custom colors" stack={customColorStack} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress stack={[
  {theme: 'default', content: 'First', value: 25},
  {theme: 'success', content: 'Second', value: 25},
  {theme: 'warning', content: 'Third', value: 25},
  {theme: 'danger', content: 'Fourth', value: 25},
]} />
<Progress text="Progress with custom colors" stack={[
  {color: '#6e5d8c', value: 33.333333333333336},
  {color: '#5b785b', value: 33.333333333333336},
  {color: '#956069', value: 33.333333333333336},
]} />
```

<!--/GITHUB_BLOCK-->

## Propriedades

| Nome            | Descrição                                                                                                                             |                          Tipo                          |   Padrão   |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------: | :--------: |
| className       | Atributo `class` do HTML                                                                                                              |                        `string`                        |            |
| colorStops      | Define pontos de interrupção com temas                                                                                                | `Array<{theme: string; stop: number; color?: string}>` |            |
| colorStopsValue | Define o valor para escolher a parada atual ou um valor alternativo para `colorStops`. O intervalo disponível é de 0 a 100.             |                        `number`                        |            |
| loading         | Alterna o estado `loading`                                                                                                            |                       `boolean`                        |   `false`  |
| size            | Define o tamanho da barra de progresso. O texto da barra de progresso só pode ser exibido no tamanho `"m"`.                          |                        `string`                        |    `"m"`   |
| stack           | Configuração da barra de progresso composta. Não é necessário se um `value` for fornecido.                                             |                     `Array<Stack>`                     |            |
| stackClassName  | Atributo `class` do HTML da pilha                                                                                                     |                        `string`                        |            |
| text            | Texto dentro da barra de progresso                                                                                                    |                      `ReactNode`                       |            |
| theme           | Define a cor do progresso                                                                                                             |                        `string`                        | `"default"`|
| value           | Valor de progresso atual. O intervalo disponível é de 0 a 100. O uso do valor da propriedade `stack` é opcional e é usado como `maxValue`. |                        `number`                        |            |

### `Stack`

| Nome      | Descrição                                                                                                                            |    Tipo     |   Padrão   |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------- | :---------: | :---------: |
| className | Atributo `class` HTML do elemento stack                                                                                              |  `string`   |             |
| color     | Define a cor de fundo para o atributo `style` HTML                                                                                  |  `string`   |             |
| content   | Conteúdo do elemento stack                                                                                                           | `ReactNode` |             |
| title     | Atributo `title` HTML                                                                                                                |  `string`   |             |
| theme     | Define a cor do elemento stack                                                                                                        |  `string`   | `"default"` |
| value     | Valor de progresso atual. O intervalo disponível é de 0 a 100. O uso do valor da propriedade `stack` é opcional e é usado como `maxValue`. |  `number`   |             |
| qa        | Atributo `data-qa` HTML, usado para testes                                                                                           |  `string`   |             |

## API CSS

| Nome                                   | Descrição                        |
| :------------------------------------- | :------------------------------- |
| `--g-progress-empty-text-color`        | Cor do texto `Progress` vazio    |
| `--g-progress-filled-text-color`       | Cor do texto `Progress` preenchido |
| `--g-progress-empty-background-color`  | Cor de fundo `Progress` vazia    |
| `--g-progress-filled-background-color` | Cor de fundo `Progress` preenchido |
