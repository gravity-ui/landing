<!--GITHUB_BLOCK-->

# Label

<!--/GITHUB_BLOCK-->

Puedes usar `Label`s para resaltar cierta información. Un `Label` con el botón `Close` o `Copy` puede ser útil para varias acciones sencillas.

Los `Label`s son más adecuados para mostrar información de texto de una sola línea con diferentes códigos de color que indican su importancia.

```tsx
import {Label} from '@gravity-ui/uikit';
```

## Apariencia

Un `Label` se puede mostrar en varios estilos.

### Tema

Usa la propiedad `theme` para aplicar diferentes temas para varios estados. Puedes usar los siguientes valores: `normal`, `info`, `success`, `warning`, `danger`, `utility`, `unknown` y `clear`.
El tema predeterminado es `normal`.

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label theme="normal">Normal</Label>
            <Label theme="info">Info</Label>
            <Label theme="success">Success</Label>
            <Label theme="warning">Warning</Label>
            <Label theme="danger">Danger</Label>
            <Label theme="utility">Utility</Label>
            <Label theme="unknown">Unknown</Label>
            <Label theme="clear">Clear</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label theme="normal">Normal</Label>
<Label theme="info">Info</Label>
<Label theme="success">Success</Label>
<Label theme="warning">Warning</Label>
<Label theme="danger">Danger</Label>
<Label theme="utility">Utility</Label>
<Label theme="unknown">Unknown</Label>
<Label theme="clear">Clear</Label>
```

<!--/GITHUB_BLOCK-->

### Tipo

La propiedad `type` agrega varias opciones a un `Label`:

`copy`: Agrega un botón de copia; al hacer clic, copia el valor de la propiedad `copyText`.

`close`: Agrega un botón de cierre para administrar listas de etiquetas.

`info`: Agrega un ícono de información a la etiqueta.

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label type="default" onClick={() => alert('On click label')} size="s">
                Clickable
            </Label>
            <Label type="close" onCloseClick={() => alert('On click close')} size="s">
                Closable
            </Label>
            <Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">
                Copy
            </Label>
            <Label type="info" size="s">Info</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label type="default" onClick={() => alert('On click label')} size="s">Clickable</Label>
<Label type="close" onCloseClick={() => alert('On click close')} size="s">Closable</Label>
<Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">Copy</Label>
<Label type="info" size="s">Info</Label>
```

<!--/GITHUB_BLOCK-->

### Icono

Puedes agregar un ícono con la propiedad `icon`. Para hacerlo, usa el componente [`Icon`](../Icon), que es un envoltorio especial para SVGs.

<!--SANDBOX
import {Icon, Label} from '@gravity-ui/uikit';
import {Gear} from '@gravity-ui/icons';

export default function () {
    return (
        <>
            <Label icon={<Icon size={16} data={Gear} />}>Icon</Label>
            <Label type="close" icon={<Icon size={16} data={Gear} />}>Icon and close</Label>
            <Label type="copy" icon={<Icon size={16} data={Gear} />}>Icon and copy</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label icon={<Icon size={16} data={GearIcon} />}>Icon</Label>
<Label type="close" icon={<Icon size={16} data={GearIcon} />}>Icon and close</Label>
<Label type="copy" icon={<Icon size={16} data={GearIcon} />}>Icon and copy</Label>
```

<!--/GITHUB_BLOCK-->

## Valor

Puedes usar `Label`s para mostrar información de clave-valor. Para ello, debes proporcionar la clave a la propiedad `children` y el valor a `value`:

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label theme="normal" value="Value">Key</Label>
            <Label theme="info" value="Value">Key</Label>
            <Label theme="success" value="Value">Key</Label>
            <Label theme="warning" value="Value">Key</Label>
            <Label theme="danger" value="Value">Key</Label>
            <Label theme="utility" value="Value">Key</Label>
            <Label theme="unknown" value="Value">Key</Label>
            <Label theme="clear" value="Value">Key</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label theme="normal" value="Value">Key</Label>
<Label theme="info" value="Value">Key</Label>
<Label theme="success" value="Value">Key</Label>
<Label theme="warning" value="Value">Key</Label>
<Label theme="danger" value="Value">Key</Label>
<Label theme="utility" value="Value">Key</Label>
<Label theme="unknown" value="Value">Key</Label>
<Label theme="clear" value="Value">Key</Label>
```

<!--/GITHUB_BLOCK-->

## Estado

Una `label` puede tener diferentes estados:

- `disabled`: No se permiten interacciones.
- `interactive`: Hace que la etiqueta sea sensible al pasar el cursor.
- `loading`: Muestra un estado de carga.

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label>Default</Label>
            <Label disabled>Disabled</Label>
            <Label interactive>Interactive</Label>
            <Label loading>Loading</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label>Default</Label>
<Label disabled>Disabled</Label>
<Label interactive>Interactive</Label>
<Label loading>Loading</Label>
```

<!--/GITHUB_BLOCK-->

## Tamaño

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label size="xxs">XXS size</Label>
            <Label size="xs">XS size</Label>
            <Label size="s">S size</Label>
            <Label size="m">M size</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label size="xxs">XXS size</Label>
<Label size="xs">XS size</Label>
<Label size="s">S size</Label>
<Label size="m">M size</Label>
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre             | Descripción                                     |                  Tipo                   |   Predeterminado   |
| :--------------- | :---------------------------------------------- | :-------------------------------------: | :----------------: |
| children         | Contenido                                       |            `React.ReactNode`            |                    |
| className        | Atributo `class` de HTML                        |                `string`                 |                    |
| closeButtonLabel | `aria-label` del botón de cierre                |                `string`                 |                    |
| copyButtonLabel  | `aria-label` del botón de copia                 |                `string`                 |                    |
| copyText         | Texto a copiar                                  |                `string`                 |                    |
| disabled         | Estado deshabilitado                            |                `boolean`                |                    |
| icon             | Icono de la etiqueta (a la izquierda)           |            `React.ReactNode`            |                    |
| interactive      | Habilita el efecto hover                         |                `boolean`                |                    |
| loading          | Estado de carga                                 |                `boolean`                |       `false`      |
| onClick          | Manejador de eventos `click`                    |               `Function`                |                    |
| onCloseClick     | Manejador de eventos `click` del botón de cierre |               `Function`                |                    |
| onCopy           | Manejador de eventos `copy`                     |               `Function`                |                    |
| qa               | Atributo `data-qa` de HTML, usado para pruebas  |                `string`                 |                    |
| size             | Tamaño de la etiqueta                           |       `"xxs"` `"xs"` `"s"` `"m"`        |       `"xs"`       |
| theme            | Tema de la etiqueta                             |                `string`                 |     `"normal"`     |
| title            | Atributo `title` de HTML                        |                `string`                 |                    |
| type             | Tipo de etiqueta                                | `"default"` `"copy"` `"close"` `"info"` |     `"default"`    |
| value            | Valor de la etiqueta (mostrado como `"children : value"`) |            `React.ReactNode`            |                    |
| width            | Controla cómo la etiqueta usa el espacio del padre |                `"auto"`                 |                    |
