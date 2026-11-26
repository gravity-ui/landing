O componente `Progress` exibe o progresso da operação atual. Ele também pode ser dividido em seções.

```tsx
import {Progress} from '@gravity-ui/uikit';
```

## Tema

Use a propriedade `theme` para especificar a cor de todo o progresso ou da parte composta:

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Estados

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Tamanho

Para gerenciar o tamanho do componente `Progress`, use a propriedade `size` que pode aceitar os seguintes valores: `"xs"`, `"s"` e `"m"`. A propriedade `text` funciona apenas com o tamanho `"m"`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Pontos de Quebra

Use a propriedade `colorStops` para definir os pontos de quebra do componente `Progress`.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

Use a propriedade opcional `color` para substituir a cor do tema:

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Pilha

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

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