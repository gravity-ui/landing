<!--GITHUB_BLOCK-->

# Alert

<!--/GITHUB_BLOCK-->

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

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert theme="normal" title="Normal" message="Normal theme" />
            <Alert theme="info" title="Info" message="Info theme" />
            <Alert theme="success" title="Success" message="Success theme" />
            <Alert theme="warning" title="Warning" message="Warning theme" />
            <Alert theme="danger" title="Danger" message="Danger theme" />
            <Alert theme="utility" title="Utility" message="Utility theme" />
            <Alert theme="clear" title="Clear" message="Clear theme" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert theme="normal" title="Normal" message="Normal theme"/>
<Alert theme="info" title="Info" message="Info theme"/>
<Alert theme="success" title="Success" message="Success theme"/>
<Alert theme="warning" title="Warning" message="Warning theme"/>
<Alert theme="danger" title="Danger" message="Danger theme"/>
<Alert theme="utility" title="Utility" message="Utility theme"/>
<Alert theme="clear" title="Clear" message="Clear theme"/>
```

<!--/GITHUB_BLOCK-->

### Visualização

`filled`: Usado para ajustar a cor de fundo do alerta (usado por padrão).

`outlined`: Usado para ajustar a cor da borda do alerta.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert title="Filled" message="Filled view" view="filled" />
            <Alert title="Outlined" message="Outlined theme" view="outlined" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```
<Alert title="Filled" message="Filled view" view="filled" />
<Alert title="Outlined" message="Outlined theme" view="outlined" />
```

<!--/GITHUB_BLOCK-->

### Layout

`vertical`: Usado para direcionar os usuários ao conteúdo se houver uma propriedade `actions` com botões. Permite exibir botões abaixo do texto (usado por padrão).

`horizontal`: Usado para direcionar os usuários ao conteúdo se houver uma propriedade `actions` com botões. Permite exibir botões à direita do texto.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert
                layout="vertical"
                title="Vertical"
                message="Vertical direction"
                actions={<Alert.Action>button</Alert.Action>}
            />
            <Alert
                layout="horizontal"
                title="Horizontal"
                message="Horizontal direction"
                actions={<Alert.Action>button</Alert.Action>}
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert layout="vertical" title="Vertical" message="Vertical direction" actions={<Alert.Action>button</Alert.Action>}/>
<Alert layout="horizontal" title="Horizontal" message="Horizontal direction" actions={<Alert.Action>button</Alert.Action>}/>
```

<!--/GITHUB_BLOCK-->

### Cantos

`rounded`: Habilita cantos arredondados da janela de alerta (usado por padrão).

`square`: Habilita cantos quadrados da janela de alerta.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert title="Rounded" message="Rounded corners" corners="rounded" />
            <Alert title="Square" message="Square corners" corners="square" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert title="Rounded" message="Rounded corners" corners="rounded"/>
<Alert title="Square" message="Square corners" corners="square"/>
```

<!--/GITHUB_BLOCK-->

## Título do Alerta

`title`: Título do alerta. Tem uma prioridade menor que `Alert.Title`.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return <Alert title={<Alert.Title className={'some-class'} text="some text" />} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert title={<Alert.Title className={'some-class'} text="some text"></Alert.Title>} />
```

<!--/GITHUB_BLOCK-->

## Mensagem do Alerta

`message`: Mensagem do alerta. Deve ser significativa o suficiente para explicar completamente o que o alerta trata.

## `onClose`

`onClose`: Função de callback chamada quando um usuário clica no botão de fechar do alerta. Quando esta propriedade é definida, o botão de fechar ficará visível.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <Alert
            onClose={() => alert('Close button pressed')}
            title="Alert has close"
            message="Alert has close"
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert
  onClose={() => alert('Close button pressed')}
  title="Alert has close"
  message="Alert has close"
/>
```

<!--/GITHUB_BLOCK-->

### Alinhamento

Determina como o conteúdo dentro do componente `Alert` é alinhado verticalmente.

`baseline`: Alinhamento padrão.

`center`: O conteúdo é centralizado verticalmente dentro do componente `Alert`. Pode ser útil se as ações ocuparem mais espaço do que o texto, ou se o ícone precisar estar no meio do conteúdo.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert
                align="baseline"
                theme="info"
                title="Baseline"
                message="Baseline align"
                actions={<Alert.Action>button</Alert.Action>}
            />
            <Alert
                align="center"
                theme="info"
                title="Center"
                message="Center align"
                actions={<Alert.Action>button</Alert.Action>}
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert align="vertical" title="Vertical" message="Vertical direction" actions={<Alert.Action>button</Alert.Action>}/>
<Alert align="horizontal" title="Horizontal" message="Horizontal direction" actions={<Alert.Action>button</Alert.Action>}/>
```

<!--/GITHUB_BLOCK-->

## Propriedades

A propriedade `Alert` aceita as seguintes propriedades:

| Nome | Descrição | Tipo | Padrão | Obrigatório |
|---|---|---|---|---|
| `align` | Alinhamento do conteúdo do alerta. | `'vertical' | 'horizontal' | 'baseline' | 'center'` | `'vertical'` | Não |
| `actions` | Elementos de ação para o alerta. | `React.ReactNode` | - | Não |
| `children` | Conteúdo principal do alerta. | `React.ReactNode` | - | Não |
| `className` | Classe CSS adicional para o alerta. | `string` | - | Não |
| `closable` | Indica se o alerta pode ser fechado. | `boolean` | `false` | Não |
| `contentClassName` | Classe CSS adicional para o conteúdo do alerta. | `string` | - | Não |
| `hasIcon` | Indica se o alerta deve exibir um ícone. | `boolean` | `false` | Não |
| `icon` | Ícone personalizado para o alerta. | `React.ReactNode` | - | Não |
| `message` | Mensagem principal do alerta. | `React.ReactNode` | - | Não |
| `onClose` | Função de callback chamada quando o alerta é fechado. | `() => void` | - | Não |
| `theme` | Tema visual do alerta. | `'info' | 'success' | 'warning' | 'danger'` | `'info'` | Não |
| `title` | Título do alerta. | `React.ReactNode` | - | Não |

| Nome          | Descrição                                                                 |                                     Tipo                                     |   Padrão    |
| :------------ | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------: | :---------: |
| theme         | Aparência do alerta                                                        | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` `"clear"` |  `"normal"`  |
| size          | Tamanho do alerta                                                                  |                              `"s"` `"m"` `"l"`                               |    `"m"`     |
| view          | Habilita/desabilita a cor de fundo do alerta                                |                           `"filled"` `"outlined"`                            |  `"filled"`  |
| layout        | Usado para direcionar usuários a conteúdo se houver a propriedade `actions` com botões |                         `"vertical"` `"horizontal"`                          | `"vertical"` |
| actionsLayout | Usado para controlar a direção dos botões de ação.                        |                         `"vertical"` `"horizontal"`                          | `"vertical"` |
| corners       | Usado para cantos arredondados/quadrados da janela de alerta                           |                            `"rounded"` `"square"`                            | `"rounded"`  |
| title         | Título do alerta                                                          |                                   `string`                                   |             |
| message       | Mensagem do alerta                                                        |                              `React.ReactNode`                               |             |
| onClose       | Uma função de callback chamada quando o usuário clica no botão de fechar do alerta    |                                  `Function`                                  |             |
| actions       | Array de botões ou componentes personalizados completos                                  |                      `React.ReactNode` `"AlertAction"`                       |             |
| align         | Determina como o conteúdo dentro do componente `Alert` é alinhado verticalmente     |                           `"center"` `"baseline"`                            | `"baseline"` |
| style         | Atributo de estilo HTML                                                        |                            `React.CSSProperties`                             |             |
| className     | Nome da classe do alerta                                                         |                                   `string`                                   |             |
| icon          | Substitui o ícone padrão                                                       |                              `React.ReactNode`                               |             |
| qa            | Atributo `data-qa` do HTML, usado em testes.                                    |                                   `string`                                   |             |

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