```tsx
import {TextArea} from '@gravity-ui/uikit';
```

`TextArea` permite que os usuários insiram texto em uma interface de usuário.

## Aparência

A aparência do `TextArea` é controlada pelas propriedades `view` e `pin`.

### View

`normal` - é a visualização principal do `TextArea` (usada por padrão).

GRAVITY_TRANSLATION_BLOCK_1_END

`clear` - pode ser usado ao usar um wrapper personalizado para o `TextArea`.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Pin

Permite controlar a aparência das bordas direita e esquerda da borda do `TextArea`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Estados

### Desabilitado

O estado do `TextArea` onde você não quer que o usuário possa interagir com o componente.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Erro

O estado do `TextArea` onde você deseja mostrar a entrada incorreta do usuário. Para alterar a aparência do `TextArea`, use a propriedade `validationState` com o valor "invalid".
Uma mensagem de texto opcional pode ser adicionada através da propriedade `errorMessage`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Tamanho

`s` – Usado quando os controles padrão são muito grandes (tabelas, cartões pequenos).

`m` – O tamanho básico, usado na maioria dos componentes.

`l` – Usado para controles básicos no cabeçalho de uma página, janelas modais ou pop-ups.

`xl` – Usado em páginas promocionais e de destino.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Gerenciamento de linhas

O número de linhas do `TextArea` é controlado pelas propriedades `rows`, `minRows` e `maxRows`. A propriedade `rows` desabilita o cálculo automático de altura.
Para definir a altura desejada do `TextArea`, use a propriedade `className` ou `style` com a propriedade `rows` definida como 1.

GRAVITY_TRANSLATION_BLOCK_12_END

## TextArea redimensionável

Você pode obter um comportamento redimensionável fornecendo o estilo `resize` à propriedade `controlProps`. Certifique-se de especificar a propriedade `rows` se permitir que a altura da área de texto seja redimensionada, caso contrário, o redimensionamento entrará em conflito com o cálculo automático de altura.

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

## Propriedades

| Nome            | Descrição                                                                                                                       |                        Tipo                         |     Padrão     |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------: | :------------: |
| autoComplete    | O atributo `autocomplete` do controle                                                                                            |                 `boolean` `string`                  |                |
| autoFocus       | O atributo `autofocus` do controle                                                                                               |                      `boolean`                      |                |
| className       | Nome da classe do wrapper do controle                                                                                             |                      `string`                       |                |
| controlProps    | Atributos HTML do controle                                                                                                        | `React.TextareaHTMLAttributes<HTMLTextAreaElement>` |                |
| controlRef      | Ref do React fornecida ao controle                                                                                                |          `React.Ref<HTMLTextAreaElement>`           |                |
| defaultValue    | Valor padrão do controle. Usado quando o componente não é controlado                                                            |                      `string`                       |                |
| disabled        | Indica que o usuário não pode interagir com o controle                                                                          |                      `boolean`                      |     `false`     |
| errorMessage    | Texto de erro                                                                                                                     |                      `string`                       |                |
| hasClear        | Mostra o ícone para limpar o valor do controle                                                                                   |                      `boolean`                      |     `false`     |
| id              | O atributo `id` do controle                                                                                                      |                      `string`                       |                |
| maxRows         | O número máximo de linhas de texto visíveis para o controle. Ignorado se `rows` for especificado                                          |                      `number`                       |                |
| minRows         | O número mínimo de linhas de texto visíveis para o controle. Ignorado se `rows` for especificado                                          |                      `number`                       |                |
| name            | O atributo `name` do controle. Se não especificado, será gerado automaticamente.                                                         |                      `string`                       |                |
| note            | Um elemento opcional exibido sob o canto inferior direito do controle e compartilhando espaço com o contêiner de erro             |                  `React.ReactNode`                  |                |
| onBlur          | Dispara quando o controle perde o foco. Fornece o evento de foco como argumento do callback                                                  |                     `function`                      |                |
| onChange        | Dispara quando o valor da entrada é alterado pelo usuário. Fornece o evento de alteração como argumento do callback                               |                     `function`                      |                |
| onFocus         | Dispara quando o controle ganha foco. Fornece o evento de foco como argumento do callback                                                  |                     `function`                      |                |
| onKeyDown       | Dispara quando uma tecla é pressionada. Fornece o evento do teclado como argumento do callback                                                     |                     `function`                      |                |
| onKeyUp         | Dispara quando uma tecla é liberada. Fornece o evento do teclado como argumento do callback                                                    |                     `function`                      |                |
| onUpdate        | Dispara quando o valor da entrada é alterado pelo usuário. Fornece o novo valor como argumento do callback                                  |                     `function`                      |                |
| pin             | A visualização da borda do controle                                                                                                         |                      `string`                       | `"round-round"` |
| placeholder     | Texto que aparece no controle quando nenhum valor é definido                                                                             |                      `string`                       |                |
| qa              | Atributo de ID de teste (`data-qa`)                                                                                                     |                      `string`                       |                |
| readOnly        | Indica que o usuário não pode alterar o valor do controle                                                                             |                      `boolean`                      |     `false`     |
| rows            | O número de linhas de texto visíveis para o controle. Se não especificado, a altura será calculada automaticamente com base no conteúdo |                      `number`                       |                |
| size            | O tamanho do controle                                                                                                                |              `"s"` `"m"` `"l"` `"xl"`               |      `"m"`      |
| tabIndex        | O atributo `tabindex` do controle                                                                                                |                      `string`                       |                |
| type            | O tipo do controle                                                                                                                |                      `string`                       |                |
| validationState | Estado de validação                                                                                                                  |                     `"invalid"`                     |                |
| value           | O valor do controle                                                                                                               |                      `string`                       |                |
| view            | A visualização do controle                                                                                                         |                `"normal"` `"clear"`                 |   `"normal"`    |

## API CSS

| Nome                                | Descrição                                         |
| :---------------------------------- | :-------------------------------------------------- |
| `--g-text-area-text-color`          | Cor do texto                                          |
| `--g-text-area-placeholder-color`   | Cor do placeholder                                   |
| `--g-text-area-background-color`    | Cor de fundo                                    |
| `--g-text-area-border-radius`       | Raio da borda                                       |
| `--g-text-area-border-width`        | Largura da borda                                        |
| `--g-text-area-border-color`        | Cor da borda                                        |
| `--g-text-area-border-color-hover`  | Cor da borda se em hover                             |
| `--g-text-area-border-color-active` | Cor da borda se ativa                              |
| `--g-text-area-focus-outline-color` | Cor do contorno se focado (por padrão não apresentado) |