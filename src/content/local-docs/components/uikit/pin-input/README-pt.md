`PinInput` é um grupo de campos de entrada para inserir rapidamente uma sequência de valores numéricos ou alfanuméricos. Seu caso de uso mais comum é a inserção de códigos OTP ou de confirmação recebidos por mensagens de texto (SMS), e-mails ou aplicativos autenticadores.

Cada campo de entrada coleta um caractere por vez. Quando um valor é aceito, o foco é movido para o próximo campo de entrada, até que todos os campos sejam preenchidos.

```tsx
import {PinInput} from '@gravity-ui/uikit';
```

## Tipo

Por padrão, os campos de entrada aceitam apenas valores numéricos. Para permitir valores alfanuméricos, defina a propriedade `type` como `"alphanumeric"`:

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Tamanho

Este componente vem em quatro tamanhos: `s`, `m`, `l` e `xl`. O tamanho padrão é `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Estado

Se você não quiser que o usuário interaja com o componente, defina a propriedade `disabled`.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

Para mostrar um estado inválido do componente, use a propriedade `validationState` com o valor `"invalid"`. Opcionalmente, você pode definir um texto de mensagem de erro com a propriedade `errorMessage`.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Placeholder

Por padrão, não há placeholder para os campos de entrada. Você pode defini-lo com a propriedade `placeholder`.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Máscara

Se você precisar mascarar os valores inseridos, use a propriedade `mask`. Ela é semelhante ao comportamento de `<input type="password"/>`.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## OTP

Se você quiser que o navegador sugira códigos de uso único do contexto externo (por exemplo, SMS), defina a propriedade `otp`.

## API

- `focus(): void`: Define o foco no campo de entrada ativo atual.

## API CSS

| Nome                       | Descrição                                                              |
| :------------------------- | :--------------------------------------------------------------------- |
| `--g-pin-input-item-width` | Define a largura de cada campo de entrada, a menos que `responsive` seja `true`. |
| `--g-pin-input-item-gap`   | Define o espaçamento entre os campos de entrada.                       |

## Propriedades

| Nome             | Descrição                                                                                                                                           |                     Tipo                     |   Padrão   |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: | :---------: |
| apiRef           | Ref para a [API](#api).                                                                                                                               |              `React.RefObject`               |             |
| aria-describedby | Atributo HTML `aria-describedby`                                                                                                                     |                   `string`                   |             |
| aria-label       | Atributo HTML `aria-label`                                                                                                                           |                   `string`                   |             |
| aria-labelledby  | Atributo HTML `aria-labelledby`                                                                                                                      |                   `string`                   |             |
| autoFocus        | Habilita ou desabilita o foco no primeiro input na renderização inicial.                                                                                |                  `boolean`                   |             |
| className        | Atributo HTML `class`                                                                                                                                |                   `string`                   |             |
| defaultValue     | Valor inicial para um componente não controlado.                                                                                                          |                  `string[]`                  |             |
| disabled         | Alterna o estado `disabled`                                                                                                                          |                  `boolean`                   |             |
| errorMessage     | Texto de erro colocado sob o canto inferior esquerdo, que compartilha espaço com o contêiner de nota. Visível apenas quando `validationState` é definido como `"invalid"`. |              `React.ReactNode`               |             |
| id               | Prefixo do atributo HTML `id` para os inputs. O ID resultante também conterá a parte `"-${index}"`.                                                     |                   `string`                   |             |
| length           | Número de campos de input.                                                                                                                               |                   `number`                   |     `4`     |
| mask             | Quando definido como `true`, os valores dos inputs serão mascarados como campo de senha.                                                                            |                  `boolean`                   |             |
| name             | Atributo HTML `name` para o input.                                                                                                                      |                   `string`                   |             |
| form             | O formulário associado ao elemento input subjacente.                                                                                                   |                   `string`                   |             |
| note             | Um elemento colocado sob o canto inferior direito, que compartilha espaço com o contêiner de erro.                                                             |              `React.ReactNode`               |             |
| onUpdate         | Callback acionado quando qualquer um dos inputs muda.                                                                                                            |         `(value: string[]) => void`          |             |
| onUpdateComplete | Callback acionado quando qualquer um dos inputs muda e todos eles estão preenchidos.                                                                                 |         `(value: string[]) => void`          |             |
| otp              | Quando definido como `true`, adiciona `autocomplete="one-time-code"` aos inputs.                                                                                    |                  `boolean`                   |             |
| placeholder      | Placeholder para os inputs                                                                                                                                |                   `string`                   |             |
| qa               | Atributo HTML `data-qa` usado para fins de teste.                                                                                                   |                   `string`                   |             |
| responsive       | Largura do pai distribuída igualmente entre os inputs.                                                                                                     |                  `boolean`                   |             |
| size             | Tamanho do campo de input.                                                                                                                                     |           `"s"` `"m"` `"l"` `"xl"`           |    `"m"`    |
| style            | Atributo HTML `style`                                                                                                                                |            `React.CSSProperties`             |             |
| type             | Determina quais tipos de valores de input são permitidos.                                                                                                       |         `"numeric"` `"alphanumeric"`         | `"numeric"` |
| validationState  | Estado de validação que afeta a aparência do componente.                                                                                               |                 `"invalid"`                  |             |
| value            | Valor atual para o componente controlado.                                                                                                           |                  `string[]`                  |             |
| `onFocus`        | Callback acionado quando o componente recebe foco.                                                                                                     | `(event: React.FocusEvent<Element>) => void` |             |
| `onBlur`         | Callback acionado quando o componente perde o foco.                                                                                                        | `(event: React.FocusEvent<Element>) => void` |             |