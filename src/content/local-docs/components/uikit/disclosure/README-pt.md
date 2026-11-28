`Disclosure` é um componente colapsável que permite exibir e ocultar seu conteúdo aninhado.

```tsx
import {Disclosure} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

## Controlando o estado de expansão

Você pode controlar o estado de expansão usando as propriedades `expanded` e `onUpdate`.

Exemplo de componente controlado:

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Tamanho

Use a propriedade `size` para controlar o tamanho do `Disclosure`. O tamanho padrão é `m`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Posição da Seta

`start`: A seta é posicionada no início do cabeçalho (usado por padrão).

`end`: A seta é posicionada no final do cabeçalho.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Conteúdo Personalizado

Use o componente `Disclosure.Summary` para criar um cabeçalho personalizado e `Disclosure.Details` para preencher o conteúdo personalizado.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Estado Desabilitado

O `Disclosure` pode ser desabilitado usando a propriedade `disabled`.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Propriedades

### Disclosure

| Nome             | Descrição                                                  | Tipo                                                  | Padrão    |
| :--------------- | :----------------------------------------------------------- | :---------------------------------------------------- | :-------- |
| size             | Tamanho do componente                                        | `"m"` `"l"` `"xl"`                                    | `"m"`     |
| className        | Nome da classe CSS do elemento raiz                          | `string`                                              |           |
| disabled         | Estado desabilitado                                          | `boolean`                                             | `false`   |
| defaultExpanded  | Estado padrão de abertura                                    | `boolean`                                             | `false`   |
| expanded         | Estado de abertura controlado                                | `boolean`                                             |           |
| arrowPosition    | Posição do controle                                          | `"start"` `"end"`                                     | `"start"` |
| summary          | Resumo do conteúdo                                           | `React.ReactNode`                                     |           |
| keepMounted      | Manter o conteúdo no DOM mesmo quando recolhido              | `boolean`                                             | `true`    |
| onUpdate         | Callback é acionado quando o estado de expandir/recolher é alterado. | `(expanded: boolean) => void`                         |           |
| onSummaryKeyDown | Callback é acionado em eventos de teclado quando o resumo está focado. | `(e: React.KeyboardEvent<HTMLButtonElement>) => void` |           |
| children         | Conteúdo                                                     | `React.ReactNode`                                     |           |
| qa               | Identificador de teste                                       | `string`                                              |           |

### Disclosure.Summary

| Nome     | Descrição                                     | Tipo                                            | Padrão               |
| :------- | :-------------------------------------------- | :---------------------------------------------- | :------------------- |
| children | Função de renderização                        | `(props, defaultSummary) => React.ReactElement` |                      |
| qa       | Identificador de teste                        | `string`                                        | `disclosure-summary` |

### Disclosure.Details

| Nome     | Descrição                               | Tipo              | Padrão               |
| :------- | :-------------------------------------- | :---------------- | :------------------- |
| children | Conteúdo                                | `React.ReactNode` |                      |
| qa       | Identificador de teste                  | `string`          | `disclosure-details` |

## API CSS

| Nome                                 | Descrição                                          |
| :----------------------------------- | :--------------------------------------------------- |
| `--g-disclosure-text-color`          | Cor do texto para o resumo do conteúdo                   |
| `--g-disclosure-text-color-disabled` | Cor do texto para o resumo do conteúdo no estado desabilitado |