O componente `Alert` exibe uma mensagem proeminente para chamar a atenção do usuário para informações importantes.

```tsx
import {Alert} from '@gravity-ui/uikit';
```

### Tema

`normal`: Tema principal (usado por padrão).

`info`: Usado para qualquer tipo de informação regular.

`success`: Usado para informações positivas.

`warning`: Usado para informações que precisam de atenção.

`danger`: Usado para erros críticos.

`utility`: Usado para dicas úteis.

`clear`: Sem estilos, adequado para uso em outros componentes (por exemplo, como `content` em `Popover`)

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Visual

`filled`: Usado para ajustar a cor de fundo do alerta (usado por padrão).

`outlined`: Usado para ajustar a cor da borda do alerta.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Layout

`vertical`: Usado para direcionar os usuários ao conteúdo se houver uma propriedade `actions` com botões. Permite exibir botões abaixo do texto (usado por padrão).

`horizontal`: Usado para direcionar os usuários ao conteúdo se houver uma propriedade `actions` com botões. Permite exibir botões à direita do texto.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Cantos

`rounded`: Habilita cantos arredondados da janela de alerta (usado por padrão).

`square`: Habilita cantos quadrados da janela de alerta.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Título do Alerta

`title`: Título do alerta. Tem prioridade menor que `Alert.Title`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Mensagem do Alerta

`message`: Mensagem do alerta. Deve ser significativa o suficiente para explicar completamente do que se trata o alerta.

## `onClose`

`onClose`: Função de callback chamada quando um usuário clica no botão de fechar do alerta. Quando esta propriedade é definida, o botão de fechar ficará visível.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Alinhamento

Determina como o conteúdo dentro do componente `Alert` é alinhado verticalmente.

`baseline`: Alinhamento padrão.

`center`: O conteúdo é centralizado verticalmente dentro do componente `Alert`. Pode ser útil se as ações ocuparem mais espaço do que o texto, ou se o ícone precisar estar no meio do conteúdo.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Propriedades

| Nome          | Descrição                                                                 |                                     Tipo                                     |   Padrão    |
| :------------ | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------: | :---------: |
| theme         | Aparência do alerta                                                        | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` `"clear"` |  `"normal"`  |
| size          | Tamanho do alerta                                                           |                              `"s"` `"m"` `"l"`                               |    `"m"`     |
| view          | Habilita/desabilita a cor de fundo do alerta                                |                           `"filled"` `"outlined"`                            |  `"filled"`  |
| layout        | Usado para direcionar usuários ao conteúdo se houver a propriedade `actions` com botões |                         `"vertical"` `"horizontal"`                          | `"vertical"` |
| actionsLayout | Usado para controlar a direção dos botões de ação.                        |                         `"vertical"` `"horizontal"`                          | `"vertical"` |
| corners       | Usado para cantos arredondados/quadrados da janela de alerta                |                            `"rounded"` `"square"`                            | `"rounded"`  |
| title         | Título do alerta                                                            |                                   `string`                                   |             |
| message       | Mensagem do alerta                                                          |                              `React.ReactNode`                               |             |
| onClose       | Uma função de callback chamada quando o usuário clica no botão de fechar do alerta |                                  `Function`                                  |             |
| actions       | Array de botões ou componentes personalizados completos                     |                      `React.ReactNode` `"AlertAction"`                       |             |
| align         | Determina como o conteúdo dentro do componente Alert é alinhado verticalmente |                           `"center"` `"baseline"`                            | `"baseline"` |
| style         | Atributo de estilo HTML                                                     |                            `React.CSSProperties`                             |             |
| className     | Nome da classe do alerta                                                    |                                   `string`                                   |             |
| icon          | Substitui o ícone padrão                                                    |                              `React.ReactNode`                               |             |
| qa            | Atributo `data-qa` do HTML, usado em testes.                                |                                   `string`                                   |             |

## API CSS

| Nome                               | Descrição                                                                    |
| :--------------------------------- | :----------------------------------------------------------------------------- |
| `--g-alert-padding`                | Preenchimentos laterais.                                                       |
| `--g-alert-border-radius`          | Raio da borda.                                                                 |
| `--g-alert-icon-margin-inline-end` | A indentação entre o ícone e a parte de conteúdo (conteúdo de texto + ações) |
| `--g-alert-close-btn-margin`       | A indentação entre a parte de conteúdo (conteúdo de texto + ações) e o botão de fechar |
| `--g-alert-actions-margin`         | Espaço entre o conteúdo de texto e as ações.                                  |
| `--g-alert-message-title-indent`   | Espaço entre o título e a mensagem.                                            |
| `--g-alert-actions-gap`            | Espaço entre os botões de ação.                                                |
| `--g-alert-title-text-color`       | Cor do título.                                                                 |
| `--g-alert-title-font-size`        | Tamanho da fonte do título.                                                    |
| `--g-alert-title-line-height`      | Altura da linha do título.                                                     |
| `--g-alert-message-text-color`     | Cor da mensagem.                                                               |
| `--g-alert-message-font-size`      | Tamanho da fonte da mensagem.                                                  |
| `--g-alert-message-font-weight`    | Peso da fonte da mensagem.                                                     |
| `--g-alert-message-line-height`    | Altura da linha da mensagem.                                                   |