```tsx
import {PasswordInput} from '@gravity-ui/uikit';
```

`PasswordInput` para digitar senhas e outras informações confidenciais. Ele pode ser renderizado com botões de cópia e de revelação para um uso mais conveniente.

### Botão de cópia

Este botão permite aos usuários copiar facilmente o valor da entrada para a área de transferência. Você pode ocultar este botão com a prop booleana `hideCopyButton`.

GRAVITY_TRANSLATION_BLOCK_1_END

### Botão de revelação

A prop `hideRevealButton` permite aos usuários alternar a visibilidade da senha.

GRAVITY_TRANSLATION_BLOCK_2_END

### Propriedades

`PasswordInput` [propriedades](https://github.com/gravity-ui/uikit/blob/main/src/components/controls/TextInput/README.md#properties), com algumas exceções e adições:

- `type` é omitido;

| Nome                | Descrição                                                                |    Tipo    | Padrão |
| :------------------ | :------------------------------------------------------------------------- | :--------: | :-----: |
| hideCopyButton      | Exibe o botão de cópia                                                           | `boolean`  | `false` |
| hideRevealButton    | Exibe o botão de revelação                                                         | `boolean`  | `false` |
| showCopyTooltip     | Determina se o tooltip para o botão de cópia deve ser exibido              | `boolean`  | `false` |
| showRevealTooltip   | Determina se o tooltip para o botão de revelação deve ser exibido            | `boolean`  | `false` |
| revealValue         | Determina o estado de visibilidade do campo de entrada de senha                | `boolean`  | `false` |
| onRevealValueUpdate | Uma função de callback que é invocada sempre que o estado `revealValue` muda | `function` |         |

GRAVITY_TRANSLATION_BLOCK_3_END