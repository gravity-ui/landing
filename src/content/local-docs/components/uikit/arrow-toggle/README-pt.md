<!--GITHUB_BLOCK-->

# ArrowToggle

<!--/GITHUB_BLOCK-->

`ArrowToggle` é um componente para exibir o ícone de chevron. Ele pode girar em quatro direções e pode ser usado para exibir listas suspensas, componentes de corte, etc.

## Aparência

`ArrowToggle` tem quatro direções possíveis: `top`, `right`, `bottom` e `left`.

<!--SANDBOX
import {ArrowToggle} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <ArrowToggle direction="top" /> top
            <ArrowToggle direction="right" /> right
            <ArrowToggle direction="bottom" /> bottom
            <ArrowToggle direction="left" /> left
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<ArrowToggle direction="top" /> top
<ArrowToggle direction="right" /> right
<ArrowToggle direction="bottom" /> bottom
<ArrowToggle direction="left" /> left
```

<!--/GITHUB_BLOCK-->

## Tamanho

<!--SANDBOX
import {ArrowToggle} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <ArrowToggle size={10} /> 10
            <ArrowToggle size={20} /> 20
            <ArrowToggle size={30} /> 30
            <ArrowToggle size={40} /> 40
            <ArrowToggle size={50} /> 50
            <ArrowToggle size={100} /> 100
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<ArrowToggle size={10} /> 10
<ArrowToggle size={20} /> 20
<ArrowToggle size={30} /> 30
<ArrowToggle size={40} /> 40
<ArrowToggle size={50} /> 50
<ArrowToggle size={100} /> 100
```

<!--/GITHUB_BLOCK-->

## Usar como elemento interativo

Aqui está um exemplo de uso do ArrowToggle com um ícone de alternância:

<!--SANDBOX
import {useState} from 'react';
import type {ArrowToggleProps} from '@gravity-ui/uikit';
import {ArrowToggle, Button} from '@gravity-ui/uikit';

const directions = ['top', 'left', 'bottom', 'right'] as Array<ArrowToggleProps['direction']>;

export default function () {
    const [directionIndex, setDirectionIndex] = useState(0);
    const direction = directions[directionIndex % directions.length];

    return (
        <Button onClick={() => setDirectionIndex(directionIndex + 1)} view="flat">
            <ArrowToggle direction={direction} /> <span>{direction}</span>
        </Button>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [directionIndex, setDirectionIndex] = React.useState(0);
const directions = ['top', 'left', 'bottom', 'right'] as Array<ArrowToggleProps['direction']>;
const direction = directions[directionIndex % directions.length];

return (
  <Button onClick={() => setDirectionIndex(directionIndex + 1)} view="flat">
    <ArrowToggle {...args} direction={direction} /> <span>{direction}</span>
  </Button>
);
```

<!--/GITHUB_BLOCK-->

## Propriedades

| Nome      | Descrição                               |   Tipo   |  Padrão   |
| :-------- | :-------------------------------------- | :------: | :-------: |
| className | Atributo HTML `class`                   | `string` |           |
| direction | Usado para definir a direção do `arrowToggle` | `string` | `"bottom"` |
| size      | Tamanho do `arrowToggle` (em pixels)    | `number` |    `16`   |
| qa        | Atributo HTML `data-qa`, usado para testes | `string` |           |

## API CSS

| Nome                                   | Descrição           |
| :------------------------------------- | :------------------ |
| `--g-arrow-toggle-transition-duration` | Duração da transição |
