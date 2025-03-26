<!--GITHUB_BLOCK-->

# ArrowToggle

<!--/GITHUB_BLOCK-->

`ArrowToggle` es un componente para mostrar el icono de chevron. Puede rotar en cuatro direcciones y puede usarse para mostrar listas desplegables, componentes plegados, etc.

## Apariencia

`ArrowToggle` tiene cuatro posibles direcciones: `top` (arriba), `right` (derecha), `bottom` (abajo) y `left` (izquierda).

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<ArrowToggle direction="top" /> top
<ArrowToggle direction="right" /> right
<ArrowToggle direction="bottom" /> bottom
<ArrowToggle direction="left" /> left
`}>
    <UIKit.ArrowToggle direction="top" /> top
    <UIKit.ArrowToggle direction="right" /> right
    <UIKit.ArrowToggle direction="bottom" /> bottom
    <UIKit.ArrowToggle direction="left" /> left
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<ArrowToggle direction="top" /> top
<ArrowToggle direction="right" /> right
<ArrowToggle direction="bottom" /> bottom
<ArrowToggle direction="left" /> left
```

<!--/GITHUB_BLOCK-->

## Tamaño

<!--LANDING_BLOCK

<ExampleBlock
code={`
<ArrowToggle size={10} /> 10
<ArrowToggle size={20} /> 20
<ArrowToggle size={30} /> 30
<ArrowToggle size={40} /> 40
<ArrowToggle size={50} /> 50
<ArrowToggle size={100} /> 100
`}>
    <UIKit.ArrowToggle size={10} /> 10
    <UIKit.ArrowToggle size={20} /> 20
    <UIKit.ArrowToggle size={30} /> 30
    <UIKit.ArrowToggle size={40} /> 40
    <UIKit.ArrowToggle size={50} /> 50
    <UIKit.ArrowToggle size={100} /> 100
</ExampleBlock>

LANDING_BLOCK-->

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

## Uso como elemento interactivo

Aquí hay un ejemplo de uso de ArrowToggle con un icono que cambia:

<!--LANDING_BLOCK

<ExampleBlock
code={`
const [directionIndex, setDirectionIndex] = React.useState(0);
const directions = ['top', 'left', 'bottom', 'right'] as Array<ArrowToggleProps['direction']>;
const direction = directions[directionIndex % directions.length];

return (
    <Button onClick={() => setDirectionIndex(directionIndex + 1)} view="flat">
        <ArrowToggle {...args} direction={direction} /> <h3>{direction}</h3>
    </Button>
);
`}>
    <UIKitExamples.ArrowToggleExample/>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
const [directionIndex, setDirectionIndex] = React.useState(0);
const directions = ['top', 'left', 'bottom', 'right'] as Array<ArrowToggleProps['direction']>;
const direction = directions[directionIndex % directions.length];

return (
  <Button onClick={() => setDirectionIndex(directionIndex + 1)} view="flat">
    <ArrowToggle {...args} direction={direction} /> <h3>{direction}</h3>
  </Button>
);
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre    | Descripción                                          |   Tipo   | Valor predeterminado |
| :-------- | :--------------------------------------------------- | :------: | :------------------: |
| className | Atributo HTML `class`                                | `string` |                      |
| direction | Usado para establecer la dirección del `arrowToggle` | `string` |      `"bottom"`      |
| size      | Tamaño del `arrowToggle` (en píxeles)                | `number` |         `16`         |
| qa        | Atributo HTML `data-qa`, usado para pruebas          | `string` |                      |
