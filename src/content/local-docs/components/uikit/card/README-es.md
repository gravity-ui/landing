<!--GITHUB_BLOCK-->

# Card

<!--/GITHUB_BLOCK-->

`Card` es un componente React reutilizable que básicamente es un contenedor tipo tarjeta con estilos y características personalizables. Se utiliza para mostrar información o contenido de una manera visualmente atractiva y bien organizada.

```tsx
import {Card} from '@gravity-ui/uikit';
```

## Apariencia

`Card` se puede mostrar con múltiples combinaciones de estilos:

- `theme`: `normal`, `info`, `success`, `warning`, `danger` o `utility`.
- `type`: `selection`, `action` o `container`.
- `view`: `outlined`, `clear`, `outlined`, `filled` o `raised` (dependiendo del parámetro `type`).

## Theme

Este parámetro se utiliza para especificar el estilo del tema de la tarjeta. Determina el esquema de color y la apariencia de la tarjeta.

Al especificar diferentes valores de tema, puedes personalizar la apariencia visual de `Card` para que coincida con tu propósito y el estilo que necesitas.

- `normal`: Tema normal/predeterminado de la tarjeta.
- `info`: Tema para mostrar información neutral.
- `success`: Tema para mostrar contenido positivo o afirmativo.
- `warning`: Tema para mostrar advertencias.
- `danger`: Tema para mostrar contenido relacionado con problemas críticos o errores.
- `utility`: Tema para mostrar consejos útiles.

<!--SANDBOX
import {Card} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const cardStyle: CSSProperties = {
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const gridStyle: CSSProperties = {
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '10px',
};

export default function () {
    return (
        <div style={gridStyle}>
            <Card style={cardStyle} theme="normal" size="l">
                Normal
            </Card>
            <Card style={cardStyle} theme="info" size="l">
                Info
            </Card>
            <Card style={cardStyle} theme="success" size="l">
                Success
            </Card>
            <Card style={cardStyle} theme="warning" size="l">
                Warning
            </Card>
            <Card style={cardStyle} theme="danger" size="l">
                Danger
            </Card>
            <Card style={cardStyle} theme="utility" size="l">
                Utility
            </Card>
        </div>
    );
}
SANDBOX-->

## Type

Este parámetro se utiliza para definir el tipo del componente `Card`. Te permite personalizar la apariencia y el comportamiento de la tarjeta.

- `container`: Tarjeta que actúa como contenedor para otros elementos. Proporciona un diseño estructurado para el contenido.
- `action`: Tarjeta con un elemento interactivo, como un botón, que activa una acción al hacer clic.
- `selection`: Tarjeta que se puede seleccionar o hacer clic para realizar una acción específica.

<!--SANDBOX
import {Card} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const cardStyle: CSSProperties = {
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const gridStyle: CSSProperties = {
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '10px',
};

export default function () {
    return (
        <div style={gridStyle}>
            <Card style={cardStyle} view="outlined" type="container" size="l">
                Container
            </Card>
            <Card
                style={cardStyle}
                view="outlined"
                type="action"
                onClick={() => alert(':wave: hey')}
                size="l"
            >
                action with onClick
            </Card>
            <Card style={cardStyle} view="outlined" type="selection" size="l">
                Selection
            </Card>
        </div>
    );
}
SANDBOX-->

## View

Este parámetro se utiliza para especificar el estilo de vista o diseño de `Card`. Te permite personalizar la apariencia y la disposición del contenido de la tarjeta.

- `clear`: Sin estilo.
- `outlined`: Aplica un borde delgado para resaltar el contenido de la tarjeta.
- `filled`: Rellena el contenido de la tarjeta.
- `raised`: Aplica una sombra para levantar ligeramente el contenedor.

<!--SANDBOX
import {Card} from '@gravity-ui/uikit';
import {type CSSProperties} from 'react';

const cardStyle: CSSProperties = {
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const gridStyle: CSSProperties = {
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '10px',
};

export default function () {
    return (
        <div style={gridStyle}>
            <Card style={cardStyle} view="clear" type="container" size="l">
                Clear
            </Card>
            <Card style={cardStyle} view="outlined" type="container" size="l">
                Outlined
            </Card>
            <Card style={cardStyle} view="filled" type="container" size="l">
                Filled
            </Card>
            <Card style={cardStyle} view="raised" type="container" size="l">
                Raised
            </Card>
        </div>
    );
}
SANDBOX-->

## Propiedades

| Nombre      | Descripción                                                                                       |    Tipo     |    Predeterminado    |
| :---------- | :------------------------------------------------------------------------------------------------ | :---------: | :------------------: |
| children  | Contenido de la tarjeta                                                                           | `ReactNode` |                      |
| type      | El tipo de `Card` determina qué propiedades están disponibles.                                        |  `string`   | `"container"`        |
| view      | Esta propiedad solo está disponible para los tipos `"container"` y `"selection"`.                  |  `string`   | `"outlined"`         |
| theme     | Color base de la tarjeta. Esta propiedad solo está disponible para el tipo `"container"`.                  |  `string`   | `"normal"`           |
| size      | El tamaño de `Card` determina qué propiedades están disponibles.                                        |  `string`   | `"m"`                |
| className | Clase CSS                                                                                         |  `string`   |                      |
| onClick   | Manejador de clics en la tarjeta. Esta propiedad solo está disponible para los tipos `"selection"` y `"action"`. | `Function`  |                      |
| selected  | Tarjeta seleccionada. Esta propiedad solo está disponible para el tipo `"selection"`.                      |  `Boolean`  |                      |
| disabled  | Tarjeta deshabilitada. Esta propiedad solo está disponible para los tipos `"selection"` y `"action"`.      |  `Boolean`  |                      |
| qa        | Atributo HTML `data-qa`, utilizado para pruebas                                                        |  `string`   |                      |

## API CSS

| Nombre                        | Descripción      |
| :-------------------------- | :--------------- |
| `--g-card-background-color` | Color de fondo |
| `--g-card-border-width`     | Ancho del borde     |
| `--g-card-border-color`     | Color del borde     |
| `--g-card-border-radius`    | Radio del borde    |
| `--g-card-box-shadow`       | Sombra           |
