<!--GITHUB_BLOCK-->

# Button

<!--/GITHUB_BLOCK-->

Los botones actúan como un disparador para ciertas acciones. Si bien este es su propósito principal, en casos muy raros, se pueden usar como enlaces para navegar a otras páginas.

```tsx
import {Button} from '@gravity-ui/uikit';
```

## Apariencia

Hay cuatro tipos de `Button` en términos de apariencia: básico, contorneado, plano y de contraste.
La apariencia del `Button` está determinada por la propiedad `view`.

### Básico

`action`: El tipo de `Button` más distintivo. Se utiliza para la acción principal en una pantalla que requiere la mayor atención.
Recomendamos usar solo un botón de este tipo por página.

`normal`: Tipo predeterminado de `Button` diseñado para acciones secundarias o para mantener la importancia de una acción sin llamar demasiado la atención sobre ella.

`raised`: Colocado sobre el contenido como un elemento flotante, generalmente con una ubicación fija.

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

### Contorneado

`outlined`: Se utiliza para acciones secundarias que requieren menos atención. Se puede usar con o sin un botón principal; en el primer caso, debe ser uno enfatizado.

`outlined-action`: Generalmente se usa como un enlace a otra página o recurso externo.

Este tipo también tiene variaciones semánticas que se pueden usar cuando se necesita semántica adicional: `outlined-info`, `outlined-success`, `outlined-warning` y `outlined-danger`.

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

`flat`: Se utiliza para acciones auxiliares que requieren la menor atención. A menudo se usa en una lista de botones o iconos de acción (sin texto) en un editor.

`flat-secondary`: Menos enfatizado que el botón `flat`. A menudo se usa como un botón secundario en cuadros de diálogo y ventanas modales.

`flat-action`: Generalmente se usa como un enlace a otra página o recurso externo.

También tiene variaciones semánticas que se pueden usar cuando se necesita semántica adicional: `outlined-info`, `outlined-success`, `outlined-warning` y `outlined-danger`.

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

Los botones `normal-contrast`, `outline-contrast` y `flat-contrast` resaltan las acciones sobre fondos complejos, por ejemplo, en un banner, o sobre un fondo inverso.

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

## Iconos

Para agregar un icono a un `Button`, use el componente [`Icon`](../Icon), que es un envoltorio especial para SVGs.

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

Un `Button` puede tener diferentes estados:

`disabled`: Cuando el botón no está disponible por alguna razón.

`loading`: Cuando se están ejecutando procesos asíncronos en segundo plano.

`selected`: Cuando el usuario puede **Habilitar** y **Deshabilitar** el botón.

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

### Disparador de menú

El `Button` cambia automáticamente su apariencia cuando se pasan los atributos aria correspondientes (`aria-haspopup`, `aria-expanded`):

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

## Tamaño

Use la propiedad `size` para administrar el tamaño del `Button`. El tamaño predeterminado es `m`.

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

## Ancho

Use la propiedad `width` para administrar cómo se comporta el `Button` dentro del contenedor:

`auto`: Limita el ancho máximo del `Button` ocultando el contenido que se desborda con puntos suspensivos.

`max`: Adapta el ancho del `Button` al ancho del contenedor padre, ocultando también el contenido que se desborda con puntos suspensivos.

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

## Pin

La propiedad `pin` le permite administrar la forma de los bordes _inicial_ y _final_ y generalmente se usa para combinar varios botones en una sola unidad.
El valor de la propiedad `pin` consta de los nombres de estilo _inicial_ y _final_ separados por un guion, por ejemplo, `round-brick`.
Los estilos de borde son: `round` (predeterminado), `circle`, `brick` y `clear`.

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

## Propiedades

El `Button` acepta cualquier prop válido de elemento `button` o `a` además de estas:

| Nombre      | Descripción                                                          |              Tipo               |     Predeterminado     |
| :---------- | :------------------------------------------------------------------- | :-----------------------------: | :--------------------: |
| children  | Contenido de `Button`. Puedes usar texto y el componente `<Icon/>`. |        `React.ReactNode`        |                        |
| component | Sobrescribe el componente raíz                                         |       `React.ElementType`       |                        |
| disabled  | Activa/desactiva el estado `disabled`                                |            `boolean`            |         `false`        |
| href      | Pasa esto para hacer que el componente raíz sea un enlace            |            `string`             |                        |
| loading   | Activa/desactiva el estado `loading`                                 |            `boolean`            |         `false`        |
| pin       | Establece el estilo del borde de `Button`                            |            `string`             |     `"round-round"`    |
| qa        | Atributo HTML `data-qa`, usado para pruebas                          |            `string`             |                        |
| selected  | Activa/desactiva el estado `selected`                                |            `boolean`            |                        |
| size      | Establece el tamaño de `Button`                                      | `"xs"` `"s"` `"m"` `"l"` `"xl"` |         `"m"`          |
| view      | Establece la apariencia de `Button`                                  |          `ButtonView`           |      `"normal"`      |
| width     | Controla cómo `Button` usa el espacio del padre                      |        `"auto"` `"max"`         |                        |

## API CSS

| Nombre                                | Descripción               |
| :---------------------------------- | :------------------------ |
| `--g-button-text-color`             | Color del texto           |
| `--g-button-text-color-hover`       | Color del texto al pasar el ratón por encima |
| `--g-button-background-color`       | Color de fondo            |
| `--g-button-background-color-hover` | Color de fondo al pasar el ratón por encima |
| `--g-button-border-width`           | Ancho del borde           |
| `--g-button-border-color`           | Color del borde           |
| `--g-button-border-style`           | Estilo del borde          |
| `--g-button-focus-outline-width`    | Ancho del contorno de foco |
| `--g-button-focus-outline-color`    | Color del contorno de foco |
| `--g-button-focus-outline-style`    | Estilo del contorno de foco |
| `--g-button-focus-outline-offset`   | Desplazamiento del contorno de foco |
| `--g-button-height`                 | Altura (altura de línea)  |
| `--g-button-padding`                | Rellenos laterales        |
| `--g-button-border-radius`          | Radio del borde           |
| `--g-button-font-size`              | Tamaño de fuente del texto |
| `--g-button-icon-space`             | Espacio disponible para el icono |
| `--g-button-icon-offset`            | Desplazamiento del icono  |
