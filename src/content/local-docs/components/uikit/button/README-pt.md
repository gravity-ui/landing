<!--GITHUB_BLOCK-->

# Button

<!--/GITHUB_BLOCK-->

Os botões atuam como um gatilho para certas ações. Embora este seja o seu propósito principal, em alguns casos muito raros, eles podem ser usados como links para navegar para outras páginas.

```tsx
import {Button} from '@gravity-ui/uikit';
```

## Aparência

Existem quatro tipos de `Button` em termos de aparência: básico, contornado, plano e de contraste.
A aparência do `Button` é determinada pela propriedade `view`.

### Básico

`action`: O tipo mais distinto de `Button`. É usado para a ação principal em uma tela que requer mais atenção.
Recomendamos o uso de apenas um botão desse tipo por página.

`normal`: Tipo padrão de `Button` projetado para ações secundárias ou para manter a importância de uma ação sem chamar muita atenção para ela.

`raised`: Colocado acima do conteúdo como um elemento flutuante, geralmente com uma localização fixa.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit'

export default function () {
    return (
        <>
            <Button view="action" size="l">Action</Button>
            <Button view="normal" size="l">Normal</Button>
            <Button view="raised" size="l">Raised</Button>
        </>
    )
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="action" size="l">Action</Button>
<Button view="normal" size="l">Normal</Button>
<Button view="raised" size="l">Raised</Button>
```

<!--/GITHUB_BLOCK-->

### Contornado

`outlined`: Usado para ações secundárias que requerem menos atenção. Pode ser usado com ou sem um botão principal; no primeiro caso, deve ser um botão enfatizado.

`outlined-action`: Geralmente usado como um link para outra página ou recurso externo.

Este tipo também possui variações semânticas que podem ser usadas quando semânticas adicionais são necessárias: `outlined-info`, `outlined-success`, `outlined-warning` e `outlined-danger`.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button view="outlined" size="l">Outlined</Button>
            <Button view="outlined-action" size="l">Outlined Action</Button>
            <Button view="outlined-info" size="l">Outlined Info</Button>
            <Button view="outlined-success" size="l">Outlined Success</Button>
            <Button view="outlined-warning" size="l">Outlined Warning</Button>
            <Button view="outlined-danger" size="l">Outlined Danger</Button>
            <Button view="outlined-utility" size="l">Outlined Utility</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="outlined" size="l">Outlined</Button>
<Button view="outlined-action" size="l">Outlined Action</Button>
<Button view="outlined-info" size="l">Outlined Info</Button>
<Button view="outlined-success" size="l">Outlined Success</Button>
<Button view="outlined-warning" size="l">Outlined Warning</Button>
<Button view="outlined-danger" size="l">Outlined Danger</Button>
<Button view="outlined-utility" size="l">Outlined Utility</Button>
```

<!--/GITHUB_BLOCK-->

### Plano

`flat`: Usado para ações auxiliares que requerem a menor atenção. É frequentemente usado em uma lista de botões ou ícones de ação (sem texto) em um editor.

`flat-secondary`: Menos enfatizado que o botão `flat`. É frequentemente usado como um botão secundário em caixas de diálogo e janelas modais.

`flat-action`: Geralmente usado como um link para outra página ou recurso externo.

Ele também possui variações semânticas que podem ser usadas onde semânticas adicionais são necessárias: `outlined-info`, `outlined-success`, `outlined-warning` e `outlined-danger`.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button view="flat" size="l">Flat</Button>
            <Button view="flat-action" size="l">Flat Action</Button>
            <Button view="flat-info" size="l">Flat Info</Button>
            <Button view="flat-success" size="l">Flat Success</Button>
            <Button view="flat-warning" size="l">Flat Warning</Button>
            <Button view="flat-danger" size="l">Flat Danger</Button>
            <Button view="flat-utility" size="l">Flat Utility</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="flat" size="l">Flat</Button>
<Button view="flat-secondary" size="l">Flat Secondary</Button>
<Button view="flat-action" size="l">Flat Action</Button>
<Button view="flat-info" size="l">Flat Info</Button>
<Button view="flat-success" size="l">Flat Success</Button>
<Button view="flat-warning" size="l">Flat Warning</Button>
<Button view="flat-danger" size="l">Flat Danger</Button>
<Button view="flat-utility" size="l">Flat Utility</Button>
```

<!--/GITHUB_BLOCK-->

### Contraste

Os botões `normal-contrast`, `outline-contrast` e `flat-contrast` destacam ações contra fundos complexos, por exemplo, em um banner, ou contra um fundo inverso.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit'
import {type CSSProperties} from 'react';

const containerStyle: CSSProperties = {
    display: 'flex',
    gap: 16,
    backgroundColor: 'rgb(68, 38, 204)',
    padding: '20px',
    borderRadius: '8px'
}

export default function () {
    return (
        <div style={containerStyle}>
            <Button view="normal-contrast" size="l">Normal Contrast</Button>
            <Button view="outlined-contrast" size="l">Outlined Contrast</Button>
            <Button view="flat-contrast" size="l">Flat Contrast</Button>
        </div>
    )
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="normal-contrast" size="l">Normal Contrast</Button>
<Button view="outlined-contrast" size="l">Outlined Contrast</Button>
<Button view="flat-contrast" size="l">Flat Contrast</Button>
```

<!--/GITHUB_BLOCK-->

## Ícones

Para adicionar um ícone a um `Button`, use o componente [`Icon`](../Icon), que é um wrapper especial para SVGs.

<!--SANDBOX
import {Gear} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button view="outlined" size="l">
                <Icon data={Gear} size={18} />
                Start
            </Button>
            <Button view="outlined" size="l">
                End
                <Icon data={Gear} size={18} />
            </Button>
            <Button view="outlined" size="l">
                <Icon data={Gear} size={18} />
                Both
                <Icon data={Gear} size={18} />
            </Button>
            <Button view="outlined" size="l">
                <Icon data={Gear} size={18} />
            </Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button view="outlined" size="l">
    <Icon data={Gear} size={18} />
    Start
</Button>
<Button view="outlined" size="l">
    End
    <Icon data={Gear} size={18} />
</Button>
<Button view="outlined" size="l">
    <Icon data={Gear} size={18} />
    Both
    <Icon data={Gear} size={18} />
</Button>
<Button view="outlined" size="l">
    No text:
    <Icon data={Gear} size={18} />
</Button>
```

<!--/GITHUB_BLOCK-->

## Estados

Um `Button` pode ter diferentes estados:

`disabled`: Quando o botão está indisponível por algum motivo.

`loading`: Quando alguns processos assíncronos estão em execução em segundo plano.

`selected`: Quando o usuário pode **Ativar** e **Desativar** o botão.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button size="l" disabled>Disabled</Button>
            <Button size="l" loading>Loading</Button>
            <Button size="l" selected>Selected</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button size="l" disabled>Disabled</Button>
<Button size="l" loading>Loading</Button>
<Button size="l" selected>Selected</Button>
```

<!--/GITHUB_BLOCK-->

### Gatilho de menu

O `Button` muda automaticamente sua aparência quando atributos aria correspondentes (`aria-haspopup`, `aria-expanded`) são passados:

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button aria-haspopup="menu" aria-expanded="true">Menu</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button aria-haspopup="menu" aria-expanded="true">
  Menu
</Button>
```

<!--/GITHUB_BLOCK-->

## Tamanho

Use a propriedade `size` para gerenciar o tamanho do `Button`. O tamanho padrão é `m`.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Button size="xs">XS Size</Button>
            <Button size="s">S Size</Button>
            <Button size="m">M Size</Button>
            <Button size="l">L Size</Button>
            <Button size="xl">XL Size</Button>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Button size="xs">XS Size</Button>
<Button size="s">S Size</Button>
<Button size="m">M Size</Button>
<Button size="l">L Size</Button>
<Button size="xl">XL Size</Button>
```

<!--/GITHUB_BLOCK-->

## Largura

Use a propriedade `width` para gerenciar como o `Button` se comporta dentro do contêiner:

`auto`: Limita a largura máxima do `Button` ocultando o conteúdo transbordante com reticências.

`max`: Corresponde à largura do `Button` à largura do contêiner pai, também ocultando o conteúdo transbordante com reticências.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const containerStyle: CSSProperties = {
    width: 100,
    border: '2px dashed gray',
};

const titleStyle: CSSProperties = {
    textAlign: 'center',
};

export default function () {
    return (
        <>
            <div style={containerStyle}>
                <h4 style={titleStyle}>Default</h4>
                <p>
                    <Button>Text</Button>
                </p>
                <p>
                    <Button>Very Long Text</Button>
                </p>
            </div>
            <div style={containerStyle}>
                <h4 style={titleStyle}>Auto</h4>
                <p>
                    <Button width="auto">Text</Button>
                </p>
                <p>
                    <Button width="auto">Very Long Text</Button>
                </p>
            </div>
            <div style={containerStyle}>
                <h4 style={titleStyle}>Max</h4>
                <p>
                    <Button width="max">Text</Button>
                </p>
                <p>
                    <Button width="max">Very Long Text</Button>
                </p>
            </div>
        </>
    );
}
SANDBOX-->

## Pino

A propriedade `pin` permite gerenciar a forma das bordas _início_ e _fim_ e é geralmente usada para combinar vários botões em uma única unidade.
O valor da propriedade `pin` consiste nos nomes de estilo _início_ e _fim_ separados por um hífen, por exemplo, `round-brick`.
Os estilos de borda são: `round` (padrão), `circle`, `brick` e `clear`.

<!--SANDBOX
import {Button} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <div>
                <Button view="action" size="l" pin="round-clear">Create</Button>
                <Button view="action" size="l" pin="brick-round">...</Button>
            </div>
            <div>
                <Button view="normal" size="l" pin="circle-clear">Start</Button>
                <Button view="normal" size="l" pin="brick-brick" selected>Center</Button>
                <Button view="normal" size="l" pin="clear-circle">End</Button>
            </div>
            <div>
                <Button view="outlined" pin="brick-clear">1</Button>
                <Button view="outlined" pin="clear-clear">2</Button>
                <Button view="outlined" pin="clear-clear">3</Button>
                <Button view="outlined" pin="clear-brick">4</Button>
            </div>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div>
    <Button view="action" size="l" pin="round-brick">Create</Button>
    <Button view="action" size="l" pin="brick-round">...</Button>
</div>
<div>
    <Button view="normal" size="l" pin="circle-clear">Start</Button>
    <Button view="normal" size="l" pin="brick-brick" selected>Center</Button>
    <Button view="normal" size="l" pin="clear-circle">End</Button>
</div>
<div>
    <Button view="outlined" pin="brick-clear">1</Button>
    <Button view="outlined" pin="clear-clear">2</Button>
    <Button view="outlined" pin="clear-clear">3</Button>
    <Button view="outlined" pin="clear-brick">4</Button>
</div>
```

<!--/GITHUB_BLOCK-->

## Propriedades

O `Button` aceita quaisquer props válidos de elemento `button` ou `a`, além destas:

| Nome      | Descrição                                                          |              Tipo               |     Padrão     |
| :-------- | :------------------------------------------------------------------- | :-----------------------------: | :------------: |
| children  | Conteúdo do `Button`. Você pode usar texto e o componente `<Icon/>`. |        `React.ReactNode`        |                |
| component | Substitui o componente raiz                                          |       `React.ElementType`       |                |
| disabled  | Alterna o estado `disabled`                                          |            `boolean`            |     `false`     |
| href      | Passe isso para tornar o componente raiz um link                    |            `string`             |                |
| loading   | Alterna o estado `loading`                                           |            `boolean`            |     `false`     |
| pin       | Define o estilo da borda do `Button`                                 |            `string`             | `"round-round"` |
| qa        | Atributo HTML `data-qa`, usado para testes                           |            `string`             |                |
| selected  | Alterna o estado `selected`                                          |            `boolean`            |                |
| size      | Define o tamanho do `Button`                                         | `"xs"` `"s"` `"m"` `"l"` `"xl"` |      `"m"`      |
| view      | Define a aparência do `Button`                                       |          `ButtonView`           |   `"normal"`    |
| width     | Controla como o `Button` usa o espaço do pai                         |        `"auto"` `"max"`         |                |

## API CSS

| Nome                                | Descrição               |
| :---------------------------------- | :------------------------ |
| `--g-button-text-color`             | Cor do texto                |
| `--g-button-text-color-hover`       | Cor do texto ao passar o mouse       |
| `--g-button-background-color`       | Cor de fundo          |
| `--g-button-background-color-hover` | Cor de fundo ao passar o mouse |
| `--g-button-border-width`           | Largura da borda              |
| `--g-button-border-color`           | Cor da borda              |
| `--g-button-border-style`           | Estilo da borda           |
| `--g-button-focus-outline-width`    | Largura do contorno de foco       |
| `--g-button-focus-outline-color`    | Cor do contorno de foco       |
| `--g-button-focus-outline-style`    | Estilo do contorno de foco       |
| `--g-button-focus-outline-offset`   | Deslocamento do contorno de foco      |
| `--g-button-height`                 | Altura (altura da linha)      |
| `--g-button-padding`                | Preenchimentos laterais             |
| `--g-button-border-radius`          | Raio da borda             |
| `--g-button-font-size`              | Tamanho da fonte do texto            |
| `--g-button-icon-space`             | Espaço disponível para o ícone      |
| `--g-button-icon-offset`            | Deslocamento do ícone               |
