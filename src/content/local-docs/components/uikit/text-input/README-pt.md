```tsx
import {TextInput} from '@gravity-ui/uikit';
```

TextInput permite que os usuários insiram texto em uma interface de usuário.

## Aparência

A aparência do `TextInput` é controlada pelas propriedades `view` e `pin`.

### View

`normal` - a visualização principal do `TextInput` (usada por padrão).

GRAVITY_TRANSLATION_BLOCK_1_END

`clear` - pode ser usado com um wrapper personalizado para `TextInput`.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Pin

Permite controlar a visualização das bordas direita e esquerda da borda do `TextInput`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Estados

### Desabilitado

O estado do `TextInput` em que você não quer que o usuário possa interagir com o componente.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Erro

O estado do `TextInput` em que você deseja indicar uma entrada incorreta do usuário. Para alterar a aparência do `TextInput`, use a propriedade `validationState` com o valor `"invalid"`. Um texto de mensagem opcional pode ser adicionado através da propriedade `errorMessage`. Por padrão, o texto da mensagem é renderizado fora do componente.
Esse comportamento pode ser alterado com a propriedade `errorPlacement`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Tamanho

`s` – Usado quando os controles padrão são muito grandes (tabelas, cartões pequenos).

`m` – Tamanho básico, usado na maioria dos componentes.

`l` – Controles básicos realizados no cabeçalho de uma página, janelas modais ou pop-ups.

`xl` – Usado em páginas de promoção e landing pages.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Rótulo

Permite definir o rótulo à esquerda do controle.

- o rótulo ocupa a posição mais à esquerda em relação ao controle. Ou seja, os elementos adicionados através da propriedade `startContent` ficarão à direita.
- o rótulo pode ocupar no máximo metade da largura de todo o espaço do TextInput.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Conteúdo adicional

### Conteúdo inicial

Permite adicionar conteúdo à esquerda do controle (ou à direita em caso de uso de [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL)). Localizado à esquerda (ou à direita em caso de uso de rtl) do rótulo adicionado através da propriedade `label`.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

### Conteúdo final

Permite adicionar conteúdo à direita (ou à esquerda em caso de uso de [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL)) do controle. Localizado à direita (ou à esquerda em caso de uso de rtl) do botão de limpar adicionado através da propriedade `hasClear`.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

## Propriedades

| Nome            | Descrição                                                                                                               |                               Tipo                                  | Padrão          |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------: | :-------------: |
| autoComplete    | Atributo `autocomplete` do controle                                                                                     |                          `boolean` `string`                           |                 |
| autoFocus       | Atributo `autofocus` do controle                                                                                        |                               `boolean`                               |                 |
| className       | Nome da classe do wrapper do controle                                                                                   |                               `string`                                |                 |
| controlProps    | Atributos HTML do controle                                                                                              |             `React.InputHTMLAttributes<HTMLInputElement>`             |                 |
| controlRef      | Ref do React fornecida ao controle                                                                                      |                     `React.Ref<HTMLInputElement>`                     |                 |
| defaultValue    | Valor padrão do controle, usado quando o componente não está controlado                                                |                               `string`                                |                 |
| disabled        | Indica que o usuário não pode interagir com o controle                                                                  |                           `React.ReactNode`                           |                 |
| endContent      | Nó do usuário renderizado após o nó de entrada, botão de limpar e ícone de erro                                         |                               `string`                                |                 |
| errorMessage    | Texto de erro                                                                                                           |                               `string`                                |                 |
| errorPlacement  | Posicionamento do erro                                                                                                  |                          `outside` `inside`                           |    `outside`    |
| hasClear        | Mostra o ícone para limpar o valor do controle                                                                          |                               `boolean`                               |     `false`     |
| id              | Atributo `id` do controle                                                                                               |                               `string`                                |                 |
| label           | Texto de ajuda renderizado à esquerda do nó de entrada                                                                  |                               `string`                                |                 |
| name            | Atributo `name` do controle. Se não especificado, será gerado automaticamente se não for especificado                   |                               `string`                                |                 |
| note            | Um elemento opcional exibido no canto inferior direito do controle que compartilha espaço com o contêiner de erro         |                           `React.ReactNode`                           |                 |
| onBlur          | Dispara quando o controle perde o foco. Fornece o evento de foco como argumento do callback                             |                              `function`                               |                 |
| onChange        | Dispara quando o valor da entrada é alterado pelo usuário. Fornece o evento de alteração como argumento do callback     |                              `function`                               |                 |
| onFocus         | Dispara quando o controle ganha foco. Fornece o evento de foco como argumento do callback                               |                              `function`                               |                 |
| onKeyDown       | Dispara quando uma tecla é pressionada. Fornece o evento do teclado como argumento do callback                          |                              `function`                               |                 |
| onKeyUp         | Dispara quando uma tecla é liberada. Fornece o evento do teclado como argumento do callback                             |                              `function`                               |                 |
| onUpdate        | Dispara quando o valor da entrada é alterado pelo usuário. Fornece o novo valor como argumento do callback              |                              `function`                               |                 |
| pin             | Visualização da borda do controle                                                                                       |                               `string`                                | `'round-round'` |
| placeholder     | Texto que aparece no controle quando ele não tem valor definido                                                         |                               `string`                                |                 |
| qa              | Atributo de ID de teste (`data-qa`)                                                                                     |                               `string`                                |
| readOnly        | Indica que o usuário não pode alterar o valor do controle                                                               |                               `boolean`                               |     `false`     |
| size            | O tamanho do controle                                                                                                   |                       `"s"` `"m"` `"l"` `"xl"`                        |      `"m"`      |
| startContent    | Nó do usuário renderizado antes do rótulo e do nó de entrada                                                            |                           `React.ReactNode`                           |                 |
| tabIndex        | Atributo `tabindex` do controle                                                                                         |                               `string`                                |                 |
| type            | O tipo do controle                                                                                                      | `"email"` `"number"` `"password"` `"search"` `"tel"` `"text"` `"url"` |                 |
| validationState | Estado de validação                                                                                                     |                              `"invalid"`                              |                 |
| value           | O valor do controle                                                                                                     |                               `string`                                |                 |
| view            | A visualização do controle                                                                                              |                         `"normal"` `"clear"`                          |   `"normal"`    |

## API CSS

| Nome                                 | Descrição                                         |
| :----------------------------------- | :-------------------------------------------------- |
| `--g-text-input-text-color`          | Cor do texto                                          |
| `--g-text-input-label-color`         | Cor do rótulo                                        |
| `--g-text-input-placeholder-color`   | Cor do placeholder                                   |
| `--g-text-input-background-color`    | Cor de fundo                                    |
| `--g-text-input-border-radius`       | Raio da borda                                       |
| `--g-text-input-border-width`        | Largura da borda                                        |
| `--g-text-input-border-color`        | Cor da borda                                        |
| `--g-text-input-border-color-hover`  | Cor da borda se em hover                             |
| `--g-text-input-border-color-active` | Cor da borda se ativa                              |
| `--g-text-input-focus-outline-color` | Cor do contorno se em foco (por padrão não apresentado) |