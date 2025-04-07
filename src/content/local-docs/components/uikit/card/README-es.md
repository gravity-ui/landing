<!--GITHUB_BLOCK-->

# Tarjeta

<!--/GITHUB_BLOCK-->

```tsx
import {Card} from '@gravity-ui/uikit';
```

## Descripción

`Card` es un componente reutilizable de React que básicamente es un contenedor similar a una tarjeta con estilos y características personalizables. Se utiliza para mostrar información o contenido de una manera visualmente atractiva y bien organizada.

## Apariencia

`Card` se puede mostrar con múltiples combinaciones de estilos:

- `theme`: `normal`, `info`, `success`, `warning`, `danger`, o `utility`.
- `type`: `selection`, `action`, o `container`.
- `view`:`outlined` o `clear`, o `outlined` `filled`, o `raised` (según el `type` parámetro).

## Tema

Este parámetro se usa para especificar el estilo del tema de la tarjeta. Determina la combinación de colores y el aspecto de la carta.

Al especificar diferentes valores de tema, puede personalizar la apariencia `Card` visual para que coincida con su propósito y el estilo que necesita.

- `normal`: Tema normal/predeterminado de la tarjeta.
- `info`: Tema para mostrar información neutra.
- `success`: Tema para mostrar contenido positivo o afirmativo.
- `warning`: Tema para mostrar advertencias.
- `danger`: Tema para mostrar el contenido relacionado con problemas o errores críticos.
- `utility`: Tema para mostrar consejos útiles.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
const style = {
    width: '120px';
    height: '120px';
    display: 'flex';
    alignItems: 'center';
    justifyContent: 'center';
}

<Card style={style} theme="normal" size="l">Normal</Card>
<Card style={style} theme="info" size="l">Info</Card>
<Card style={style} theme="success" size="l">Success</Card>
<Card style={style} theme="warning" size="l">Warning</Card>
<Card style={style} theme="danger" size="l">Danger</Card>
<Card style={style} theme="utility" size="l">Utility</Card>
`}>

    <div style={{display: 'grid', gridAutoFlow: 'column', gridGap: '10px'}}>
        <UIKit.Card style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px'}} theme="normal" size="l">Normal</UIKit.Card>
        <UIKit.Card style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px'}} theme="info" size="l">Info</UIKit.Card>
        <UIKit.Card style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px'}} theme="success" size="l">Success</UIKit.Card>
        <UIKit.Card style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px'}} theme="warning" size="l">Warning</UIKit.Card>
        <UIKit.Card style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px'}} theme="danger" size="l">Danger</UIKit.Card>
        <UIKit.Card style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px'}} theme="utility" size="l">Utility</UIKit.Card>
    </div>

</ExampleBlock>
LANDING_BLOCK-->

## Tipo

Este parámetro se usa para definir el tipo del `Card` componente. Permite personalizar la apariencia y el comportamiento de la tarjeta.

- `container`: Tarjeta que actúa como contenedor de otros elementos. Proporciona un diseño estructurado para el contenido.
- `action`: Tarjeta con un elemento interactivo, como un botón, que desencadena una acción al hacer clic en ella.
- `selection`: Tarjeta en la que se puede seleccionar o hacer clic para realizar una acción específica.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
const style = {
    width: '120px';
    height: '120px';
    display: 'flex';
    alignItems: 'center';
    justifyContent: 'center';
}

    <Card style={style} view="outlined" type="container" size="l">Container</Card>
    <Card style={style} view="outlined" type="action" size="l">action with onClick</Card>
    <Card style={style} view="outlined" type="selection" size="l">Selection</Card>
`}>
    <div style={{display: 'grid', gridAutoFlow: 'column', gridGap: '10px'}}>
        <UIKit.Card style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px'}} view="outlined" type="container" size="l">Container</UIKit.Card>
        <UIKit.Card style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px'}} view="outlined" type="action" onClick={() => alert(':wave: hey')} size="l">action with onClick</UIKit.Card>
        <UIKit.Card style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px'}} view="outlined" type="selection" size="l">Selection</UIKit.Card>
    </div>

</ExampleBlock>
LANDING_BLOCK-->

## Ver

Este parámetro se usa para especificar la `Card` vista o el estilo de diseño. Permite personalizar la apariencia y la disposición del contenido de la tarjeta.

- `clear`: Sin estilo.
- `outlined`: Aplica un borde fino para resaltar el contenido de la tarjeta.
- `filled`: Rellena el contenido de la tarjeta.
- `raised`: Aplica una sombra para levantar ligeramente el contenedor.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
const style = {
    width: '120px';
    height: '120px';
    display: 'flex';
    alignItems: 'center';
    justifyContent: 'center';
}

    <Card style={style} view="clear" type="container" size="l">Clear</Card>
    <Card style={style} view="outlined" type="container" size="l">Outlined</Card>
    <Card style={style} view="filled" type="container" size="l">Filled</Card>
    <Card style={style} view="raised" type="container" size="l">Raised</Card>
`}>
    <div style={{display: 'grid', gridAutoFlow: 'column', gridGap: '10px'}}>
        <UIKit.Card style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px'}} view="clear" type="container" size="l">Clear</UIKit.Card>
        <UIKit.Card style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px'}} view="outlined" type="container" size="l">Outlined</UIKit.Card>
        <UIKit.Card style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px'}} view="filled" type="container" size="l">Filled</UIKit.Card>
        <UIKit.Card style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '120px', height: '120px'}} view="raised" type="container" size="l">Raised</UIKit.Card>
    </div>

</ExampleBlock>
LANDING_BLOCK-->

## Propiedades

| Nombre       | Descripción                                                                                                   |    Tipo     | Predeterminado |
| :----------- | :------------------------------------------------------------------------------------------------------------ | :---------: | :------------: |
| niños        | Contenido de la tarjeta                                                                                       | `ReactNode` |                |
| tipo         | El `Card` tipo determina qué propiedades están disponibles.                                                   |  `string`   | `"container"`  |
| vista        | Esta propiedad solo está disponible para los `"container"` y `"selection"` `type`s.                           |  `string`   |  `"outlined"`  |
| canción      | Color base de la carta. Esta propiedad solo está disponible para `"container"` `type`.                        |  `string`   |   `"normal"`   |
| tamaño       | El `Card` tamaño determina qué propiedades están disponibles.                                                 |  `string`   |     `"m"`      |
| className    | clase CSS                                                                                                     |  `string`   |                |
| onClick      | Gestor de clics de cartas. Esta propiedad solo está disponible para los `"selection"` y `"action"` `type`s.   | `Function`  |                |
| seleccionado | Tarjeta seleccionada. Esta propiedad solo está disponible para `"selection"` `type`.                          |  `Boolean`  |                |
| inhabilitado | Tarjeta para discapacitados. Esta propiedad solo está disponible para los `"selection"` y `"action"` `type`s. |  `Boolean`  |                |
| qa           | `data-qa` Atributo HTML, usado para realizar pruebas                                                          |  `string`   |                |

## API CSS

| Nombre                      | Descripción     |
| :-------------------------- | :-------------- |
| `--g-card-background-color` | Color de fondo  |
| `--g-card-border-width`     | Ancho del borde |
| `--g-card-border-color`     | Color del borde |
| `--g-card-border-radius`    | Radio de borde  |
| `--g-card-box-shadow`       | Sombra          |
