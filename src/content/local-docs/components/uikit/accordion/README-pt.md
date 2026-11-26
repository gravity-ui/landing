O componente Accordion permite criar painéis de conteúdo recolhíveis onde os utilizadores podem mostrar ou ocultar secções de informação. Isto é útil para organizar grandes quantidades de conteúdo de forma compacta.

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

## Controlar o estado do accordion

Pode controlar o estado do accordion utilizando as propriedades `value` e `onUpdate` do componente raiz, ou por item.

Exemplo de controlo de estado a partir do componente raiz:

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

Exemplo de controlo de estado por item através da propriedade `expanded`:

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Tamanho

Utilize a propriedade `size` para controlar o tamanho do `Accordion`. O tamanho padrão é `m`.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Visualização

`solid`: Visualização principal com fundo (usada por padrão).

`top-bottom`: Visualização com bordas superior e inferior.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Posição da Seta

`end`: A seta está posicionada no final do cabeçalho (usada por padrão).

`start`: A seta está posicionada no início do cabeçalho.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Múltiplos

A propriedade `multiple` permite que vários itens do accordion sejam expandidos simultaneamente.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## Resumo Personalizado

Utilize o componente `Accordion.Summary` para criar um cabeçalho personalizado.

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

## Estado Desativado

Itens individuais do accordion podem ser desativados utilizando a propriedade `disabled`.

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

## Propriedades

### Accordion

| Nome          | Descrição                                        |            Tipo            |  Padrão  |
| :------------ | :----------------------------------------------- | :------------------------: | :-------: |
| size          | Tamanho do Accordion                             |     `"m"` `"l"` `"xl"`     |   `"m"`   |
| view          | Aparência do Accordion                           |  `"solid"` `"top-bottom"`  | `"solid"` |
| multiple      | Permite que múltiplos itens sejam expandidos simultaneamente |         `boolean`          |  `false`  |
| arrowPosition | Posição do indicador de seta                     |     `"start"` `"end"`      |  `"end"`  |
| defaultValue  | Valor padrão para estado não controlado          | `string` `string[]` `null` |           |
| value         | Valor atual para estado controlado               | `string` `string[]` `null` |           |
| onUpdate      | Função de callback chamada quando o estado muda  |         `Function`         |           |
| ariaLevel     | Nível de cabeçalho para acessibilidade           |          `number`          |    `3`    |
| className     | Nome da classe CSS                               |          `string`          |           |
| qa            | Atributo `data-qa` HTML, usado para testes       |          `string`          |           |

### Accordion.Item

| Nome            | Descrição                                      |       Type        | Padrão |
| :-------------- | :--------------------------------------------- | :---------------: | :----: |
| value           | Identificador único para o item                |     `string`      |        |
| summary         | Cabeçalho do item do accordion                 | `React.ReactNode` |        |
| expanded        | Estado expandido controlado                    |     `boolean`     |        |
| defaultExpanded | Estado expandido padrão                        |     `boolean`     |        |
| disabled        | Desativa o item do accordion                   |     `boolean`     | `false` |
| keepMounted     | Mantém o conteúdo no DOM mesmo quando recolhido |     `boolean`     |        |
| onUpdate        | Função de callback chamada quando o estado do item muda |    `Function`     |        |
| className       | Nome da classe CSS                             |     `string`      |        |
| qa              | Atributo `data-qa` HTML, usado para testes     |     `string`      |        |

### Accordion.Summary
GRAVITY_TRANSLATION_BLOCK_17_END

| Nome     | Descrição                                                                             |                      Tipo                       |                                          Padrão                                          |
| :------- | :-------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | Função de renderização de resumo personalizada                                          | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | Atributo `data-qa` do HTML, usado para testes. Funciona apenas se `qa` for passado em Accordion.Item |                    `string`                     | `${accordion-item}-summary` se `qa` for passado em Accordion.Item, `disclosure-summary` se não |

## API CSS

| Nome                           | Descrição                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | Preenchimento em linha (horizontal) para o acordeão |