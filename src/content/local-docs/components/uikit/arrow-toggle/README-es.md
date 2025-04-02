<!--GITHUB_BLOCK-->

# ArrowToggle

<!--/GITHUB_BLOCK-->

`ArrowToggle` es un componente para mostrar el icono de cheurón. Puede girar en cuatro direcciones y se puede usar para mostrar listas desplegables, cortar componentes, etc.

## Apariencia

`ArrowToggle` tiene cuatro direcciones posibles: `top` `right`, `bottom`, y `left`.

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

## Utilízalo como elemento interactivo

Este es un ejemplo del uso de ArrowToggle con un icono de alternancia:

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

| Nombre    | Descripción                                          |   Tipo   | Predeterminado |
| :-------- | :--------------------------------------------------- | :------: | :------------: |
| className | `class` Atributo HTML                                | `string` |                |
| dirección | Se usa para establecer la `arrowToggle` dirección    | `string` |   `"bottom"`   |
| tamaño    | `arrowToggle` tamaño (en píxeles)                    | `number` |      `16`      |
| qa        | `data-qa` Atributo HTML, usado para realizar pruebas | `string` |                |
