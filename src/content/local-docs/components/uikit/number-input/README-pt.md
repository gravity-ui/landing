<!--GITHUB_BLOCK-->

# NumberInput

<!--/GITHUB_BLOCK-->

`NumberInput` é um campo de texto para inserir valores numéricos, com controles de incremento/decremento opcionais, limites mínimo/máximo e formatação de valor.

```tsx
import {NumberInput} from '@gravity-ui/uikit';
```

## Aparência

A aparência do `NumberInput` é controlada pelas propriedades `view` e `pin`.

### View

`normal` - a visualização principal do `NumberInput` (usada por padrão).

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput placeholder="Placeholder" />;
}
SANDBOX-->

`clear` - pode ser usado com um wrapper personalizado para `NumberInput`.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput view="clear" placeholder="Placeholder" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput view="normal" />
<NumberInput view="clear" />
```

<!--/GITHUB_BLOCK-->

### Pin

Permite controlar a visualização das bordas direita e esquerda da borda do `NumberInput`.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput placeholder="Placeholder" pin="round-brick" />
            <NumberInput placeholder="Placeholder" pin="brick-brick" />
            <NumberInput placeholder="Placeholder" pin="brick-round" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput pin="round-brick" />
<NumberInput pin="brick-brick" />
<NumberInput pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## Estados

### Desabilitado

O estado do `NumberInput` em que você não quer que o usuário possa interagir com o componente.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput placeholder="Placeholder" disabled />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput disabled />
```

<!--/GITHUB_BLOCK-->

### Erro

O estado do `NumberInput` em que você deseja indicar uma entrada incorreta do usuário. Para alterar a aparência do `NumberInput`, use a propriedade `validationState` com o valor `"invalid"`. Uma mensagem opcional pode ser adicionada através da propriedade `errorMessage`. Por padrão, o texto da mensagem é renderizado fora do componente.
Esse comportamento pode ser alterado com a propriedade `errorPlacement`.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput
                placeholder="Placeholder"
                errorMessage="Error message"
                validationState="invalid"
            />
            <NumberInput
                placeholder="Placeholder"
                errorPlacement="inside"
                errorMessage="Error message"
                validationState="invalid"
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput errorMessage="Error message" validationState="invalid" />
<NumberInput errorPlacement="inside" errorMessage="Error message" validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## Tamanho

`s` – Usado quando os controles padrão são muito grandes (tabelas, pequenos cards).

`m` – Tamanho básico, usado na maioria dos componentes.

`l` – Controles básicos realizados no cabeçalho de uma página, janelas modais ou pop-ups.

`xl` – Usado em páginas de promoção e landing pages.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput placeholder="Placeholder" size="s" />
            <NumberInput placeholder="Placeholder" size="m" />
            <NumberInput placeholder="Placeholder" size="l" />
            <NumberInput placeholder="Placeholder" size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput size="s" />
<NumberInput size="m" />
<NumberInput size="l" />
<NumberInput size="xl" />
```

<!--/GITHUB_BLOCK-->

## Rótulo

Permite definir o rótulo à esquerda do controle.

- o rótulo está localizado à direita dos elementos adicionados através da propriedade `startContent`.
- o rótulo pode ocupar no máximo metade da largura total do espaço do NumberInput.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput placeholder="Placeholder" label="Label" />
            <NumberInput
                placeholder="Placeholder"
                label="Very long label with huge amount of symbols"
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput label="Label" />
```

<!--/GITHUB_BLOCK-->

## Conteúdo adicional

### Conteúdo inicial

Permite adicionar conteúdo à esquerda do controle. Localizado à esquerda do rótulo adicionado através da propriedade `label`.

<!--SANDBOX
import {Label, NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <NumberInput
            placeholder="Search"
            label="Label"
            startContent={<Label size="s">Left</Label>}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput startContent={<Label>Left</Label>} />
```

<!--/GITHUB_BLOCK-->

### Conteúdo final

Permite adicionar conteúdo à direita do controle. Localizado à direita do botão de limpar adicionado através da propriedade `hasClear` e do ícone de erro interno.

<!--SANDBOX
import {Label, NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <NumberInput
            hasClear
            placeholder="Placeholder"
            endContent={<Label size="s">Right</Label>}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput endContent={<Label>Right</Label>} />
```

<!--/GITHUB_BLOCK-->

### Controles

A visibilidade dos controles de seta de incremento/decremento na posição mais à direita do componente pode ser gerenciada pela propriedade `hiddenControls`.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput />
            <NumberInput hiddenControls />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput />
<NumberInput hiddenControls />
```

<!--/GITHUB_BLOCK-->

## Comportamento

### Valores Mínimo/Máximo

Permite definir os valores mínimo e máximo que podem ser inseridos no input. Valores que não se encaixam no intervalo definido serão limitados ao sair do foco para o valor permitido mais próximo.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput min={-100} max={100} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput min={-100} max={100} />
```

<!--/GITHUB_BLOCK-->

### Passo

Permite definir a quantidade pela qual o valor no input é incrementado ou decrementado com os botões de seta nos controles do componente ou no teclado.

Ele também adiciona restrições aos valores permitidos e habilita o ajuste do número inserido ao sair do foco para os valores permitidos pelas seguintes regras:

- se o passo e o valor mínimo forem definidos com valores inteiros, então os valores permitidos são definidos como `min + (step * n)`, onde `n` é um número inteiro;
- se o passo for um número inteiro e o valor mínimo não for definido, então os valores permitidos são definidos como divisíveis pelo passo;
- se o passo ou os valores mínimos forem decimais, então o ajuste não é aplicável

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput min={-10} step={4} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput min={-10} step={4} />
```

<!--/GITHUB_BLOCK-->

### Multiplicador de passo

Permite definir o valor pelo qual o valor do passo é multiplicado quando a tecla Shift é pressionada no teclado, definindo a propriedade `shiftMultiplier`.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput shiftMultiplier={50} />
            <NumberInput shiftMultiplier={8} step={4} />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput shiftMultiplier={50} />
<NumberInput shiftMultiplier={8} step={4} />
```

<!--/GITHUB_BLOCK-->

### Restrição de valores decimais

Permite alternar a capacidade de inserir apenas valores inteiros ou também decimais através da propriedade `allowDecimal`.
Com a propriedade `allowDecimal={false}`, um ponto inserido no input seria ignorado e os valores decimais colados seriam arredondados para baixo.

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput allowDecimal />
            <NumberInput allowDecimal={false} />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput allowDecimal />
<NumberInput allowDecimal={false} />
```

<!--/GITHUB_BLOCK-->

## Propriedades

| Nome            | Descrição                                                                                                             |                     Tipo                      |      Padrão       |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :----------------: |
| allowDecimal    | Permite a entrada de números decimais                                                                                |                   `boolean`                   |      `false`       |
| autoComplete    | Atributo `autocomplete` do controle                                                                                  |              `boolean` `string`               |                    |
| autoFocus       | Atributo `autofocus` do controle                                                                                     |                   `boolean`                   |                    |
| className       | Nome da classe do wrapper do controle                                                                                        |                   `string`                    |                    |
| controlProps    | Atributos HTML do controle                                                                                           | `React.InputHTMLAttributes<HTMLInputElement>` |                    |
| controlRef      | Ref do React fornecida ao controle                                                                                       |         `React.Ref<HTMLInputElement>`         |                    |
| defaultValue    | Valor padrão do controle, usado quando o componente não está controlado                                                  |             `number` `undefined`              |                    |
| disabled        | Indica que o usuário não pode interagir com o controle                                                                |                   `boolean`                   |      `false`       |
| endContent      | Nó do usuário renderizado após o nó de entrada, o botão de limpar e dentro do ícone de erro                                           |               `React.ReactNode`               |                    |
| errorMessage    | Texto de erro                                                                                                              |                   `string`                    |                    |
| errorPlacement  | Posicionamento do erro                                                                                                         |              `outside` `inside`               |     `outside`      |
| hasClear        | Mostra o ícone para limpar o valor do controle                                                                             |                   `boolean`                   |      `false`       |
| hiddenControls  | Oculta os botões de incrementar/decrementar no final do controle                                                                 |                   `boolean`                   |                    |
| id              | Atributo `id` do controle                                                                                            |                   `string`                    |                    |
| label           | Texto de ajuda renderizado à esquerda do nó de entrada                                                                        |                   `string`                    |                    |
| max             | Valor máximo permitido. É usado para limitar o valor inserido ao intervalo permitido                                               |                   `number`                    | `MAX_SAFE_INTEGER` |
| min             | Valor mínimo permitido. É usado para limitar o valor inserido ao intervalo permitido                                               |                   `number`                    | `MIN_SAFE_INTEGER` |
| name            | Atributo `name` do controle. Se não especificado, será gerado automaticamente se não for especificado                          |                   `string`                    |                    |
| note            | Um elemento opcional exibido sob o canto inferior direito do controle que compartilha espaço com o contêiner de erro |               `React.ReactNode`               |                    |
| onBlur          | Dispara quando o controle perde o foco. Fornece o evento de foco como argumento do callback                                        |                  `function`                   |                    |
| onChange        | Dispara quando o valor da entrada é alterado pelo usuário. Fornece o evento de alteração como argumento do callback                    |                  `function`                   |                    |
| onFocus         | Dispara quando o controle obtém foco. Fornece o evento de foco como argumento do callback                                        |                  `function`                   |                    |
| onKeyDown       | Dispara quando uma tecla é pressionada. Fornece o evento do teclado como argumento do callback                                           |                  `function`                   |                    |
| onKeyUp         | Dispara quando uma tecla é liberada. Fornece o evento do teclado como argumento do callback                                          |                  `function`                   |                    |
| onUpdate        | Dispara quando o valor da entrada é alterado pelo usuário. Fornece o novo valor como argumento do callback                       |                  `function`                   |                    |
| pin             | Visualização da borda do controle                                                                                               |                   `string`                    |  `'round-round'`   |
| placeholder     | Texto que aparece no controle quando ele não tem valor definido                                                               |                   `string`                    |                    |
| qa              | Atributo de ID de teste (`data-qa`)                                                                                           |                   `string`                    |                    |
| readonly        | Indica que o usuário não pode alterar o valor do controle                                                                   |                   `boolean`                   |      `false`       |
| shiftMultiplier | Multiplicador de passo quando o botão shift é pressionado                                                                            |                   `number`                    |        `10`        |
| size            | O tamanho do controle                                                                                                 |           `"s"` `"m"` `"l"` `"xl"`            |       `"m"`        |
| step            | Delta para incrementar/decrementar o valor inserido com os botões de seta do teclado ou controles do componente                     |                   `number`                    |        `1`         |
| startContent    | O nó do usuário renderizado antes do rótulo e da entrada                                                                         |               `React.ReactNode`               |                    |
| tabIndex        | Atributo `tabindex` do controle                                                                                 |                   `string`                    |                    |
| validationState | Estado de validação                                                                                                        |                  `"invalid"`                  |                    |
| value           | O valor do controle                                                                                                |             `number` `undefined`              |                    |
| view            | A visualização do controle                                                                                                 |             `"normal"` `"clear"`              |     `"normal"`     |

## API CSS

O componente não possui sua própria API CSS, mas estende a API do componente pai TextInput.
