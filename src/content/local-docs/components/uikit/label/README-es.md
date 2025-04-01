<!--GITHUB_BLOCK-->

# Etiqueta

<!--/GITHUB_BLOCK-->

```tsx
import {Label} from '@gravity-ui/uikit';
```

Puede usar `Label`s para resaltar cierta información. `Label` Con el `Copy` botón `Close` o puede resultar útil para realizar varias acciones sencillas.

`Label`Los s son los más adecuados para mostrar información de texto de una línea con diferentes códigos de color que muestran su importancia.

## Apariencia

A se `Label` puede mostrar en varios estilos.

### Tema

Utilice la `theme` propiedad para aplicar diferentes temas para varios estados. Puede usar los valores siguientes: `normal` `info`, `success`, `warning`, `danger`, `utility` `unknown`, y `clear`.
El tema predeterminado es `normal`.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Label theme="normal">Normal</Label>
<Label theme="info">Info</Label>
<Label theme="success">Success</Label>
<Label theme="warning">Warning</Label>
<Label theme="danger">Danger</Label>
<Label theme="utility">Utility</Label>
<Label theme="unknown">Unknown</Label>
<Label theme="clear">Clear</Label>
`}
>
    <UIKit.Label theme="normal">Normal</UIKit.Label>
    <UIKit.Label theme="info">Info</UIKit.Label>
    <UIKit.Label theme="success">Success</UIKit.Label>
    <UIKit.Label theme="warning">Warning</UIKit.Label>
    <UIKit.Label theme="danger">Danger</UIKit.Label>
    <UIKit.Label theme="utility">Utility</UIKit.Label>
    <UIKit.Label theme="unknown">Unknown</UIKit.Label>
    <UIKit.Label theme="clear">Clear</UIKit.Label>
</ExampleBlock>

LANDING_BLOCK-->

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

La `type` propiedad añade varias opciones a `Label`:

`copy`: Añade un botón de copia; al hacer clic en él, copia el valor de la `copyText` propiedad.

`close`: Añade un botón de cierre para gestionar las listas de etiquetas.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Label type="default" onClick={() => alert('On click label')} size="s">Clickable</Label>
<Label type="close" onCloseClick={() => alert('On click close')} size="s">Closable</Label>
<Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">Copy</Label>
`}
>
    <UIKit.Label type="default" onClick={() => alert('On click label')} size="s">Clickable</UIKit.Label>
    <UIKit.Label type="close" onCloseClick={() => alert('On click close')} size="s">Closable</UIKit.Label>
    <UIKit.Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">Copy</UIKit.Label>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Label type="default" onClick={() => alert('On click label')} size="s">Clickable</Label>
<Label type="close" onCloseClick={() => alert('On click close')} size="s">Closable</Label>
<Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">Copy</Label>
```

<!--/GITHUB_BLOCK-->

### Icono

Puede añadir un icono con la `icon` propiedad. Para ello, utilice el [`Icon`](../Icon) componente, que es un contenedor especial para SVG.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Label icon={<Icon size={16} data={GearIcon} />}>Icon</Label>
<Label type="close" icon={<Icon size={16} data={GearIcon} />}>Icon and close</Label>
<Label type="copy" icon={<Icon size={16} data={GearIcon} />}>Icon and copy</Label>
`}
>
    <UIKit.Label icon={
        <UIKit.Icon data={() => (
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" class="g-icon" fill="currentColor" stroke="none" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M7.199 2H8.8a.2.2 0 0 1 .2.2c0 1.808 1.958 2.939 3.524 2.034a.199.199 0 0 1 .271.073l.802 1.388a.199.199 0 0 1-.073.272c-1.566.904-1.566 3.164 0 4.069a.199.199 0 0 1 .073.271l-.802 1.388a.199.199 0 0 1-.271.073C10.958 10.863 9 11.993 9 13.8a.2.2 0 0 1-.199.2H7.2a.199.199 0 0 1-.2-.2c0-1.808-1.958-2.938-3.524-2.034a.199.199 0 0 1-.272-.073l-.8-1.388a.199.199 0 0 1 .072-.271c1.566-.905 1.566-3.165 0-4.07a.199.199 0 0 1-.073-.271l.801-1.388a.199.199 0 0 1 .272-.073C5.042 5.138 7 4.007 7 2.2c0-.11.089-.199.199-.199ZM5.5 2.2c0-.94.76-1.7 1.699-1.7H8.8c.94 0 1.7.76 1.7 1.7a.85.85 0 0 0 1.274.735 1.699 1.699 0 0 1 2.32.622l.802 1.388c.469.813.19 1.851-.622 2.32a.85.85 0 0 0 0 1.472 1.7 1.7 0 0 1 .622 2.32l-.802 1.388a1.699 1.699 0 0 1-2.32.622.85.85 0 0 0-1.274.735c0 .939-.76 1.7-1.699 1.7H7.2a1.7 1.7 0 0 1-1.699-1.7.85.85 0 0 0-1.274-.735 1.698 1.698 0 0 1-2.32-.622l-.802-1.388a1.699 1.699 0 0 1 .622-2.32.85.85 0 0 0 0-1.471 1.699 1.699 0 0 1-.622-2.321l.801-1.388a1.699 1.699 0 0 1 2.32-.622A.85.85 0 0 0 5.5 2.2Zm4 5.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd"></path></svg></svg>
        )} size={16} />
    }>
        <span>Icon</span>
    </UIKit.Label>
    <UIKit.Label type="close" icon={
        <UIKit.Icon data={() => (
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" class="g-icon" fill="currentColor" stroke="none" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M7.199 2H8.8a.2.2 0 0 1 .2.2c0 1.808 1.958 2.939 3.524 2.034a.199.199 0 0 1 .271.073l.802 1.388a.199.199 0 0 1-.073.272c-1.566.904-1.566 3.164 0 4.069a.199.199 0 0 1 .073.271l-.802 1.388a.199.199 0 0 1-.271.073C10.958 10.863 9 11.993 9 13.8a.2.2 0 0 1-.199.2H7.2a.199.199 0 0 1-.2-.2c0-1.808-1.958-2.938-3.524-2.034a.199.199 0 0 1-.272-.073l-.8-1.388a.199.199 0 0 1 .072-.271c1.566-.905 1.566-3.165 0-4.07a.199.199 0 0 1-.073-.271l.801-1.388a.199.199 0 0 1 .272-.073C5.042 5.138 7 4.007 7 2.2c0-.11.089-.199.199-.199ZM5.5 2.2c0-.94.76-1.7 1.699-1.7H8.8c.94 0 1.7.76 1.7 1.7a.85.85 0 0 0 1.274.735 1.699 1.699 0 0 1 2.32.622l.802 1.388c.469.813.19 1.851-.622 2.32a.85.85 0 0 0 0 1.472 1.7 1.7 0 0 1 .622 2.32l-.802 1.388a1.699 1.699 0 0 1-2.32.622.85.85 0 0 0-1.274.735c0 .939-.76 1.7-1.699 1.7H7.2a1.7 1.7 0 0 1-1.699-1.7.85.85 0 0 0-1.274-.735 1.698 1.698 0 0 1-2.32-.622l-.802-1.388a1.699 1.699 0 0 1 .622-2.32.85.85 0 0 0 0-1.471 1.699 1.699 0 0 1-.622-2.321l.801-1.388a1.699 1.699 0 0 1 2.32-.622A.85.85 0 0 0 5.5 2.2Zm4 5.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd"></path></svg></svg>
        )} size={16} />
    }>
        <span>Icon and close</span>
    </UIKit.Label>
    <UIKit.Label type="copy" icon={
        <UIKit.Icon data={() => (
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" class="g-icon" fill="currentColor" stroke="none" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M7.199 2H8.8a.2.2 0 0 1 .2.2c0 1.808 1.958 2.939 3.524 2.034a.199.199 0 0 1 .271.073l.802 1.388a.199.199 0 0 1-.073.272c-1.566.904-1.566 3.164 0 4.069a.199.199 0 0 1 .073.271l-.802 1.388a.199.199 0 0 1-.271.073C10.958 10.863 9 11.993 9 13.8a.2.2 0 0 1-.199.2H7.2a.199.199 0 0 1-.2-.2c0-1.808-1.958-2.938-3.524-2.034a.199.199 0 0 1-.272-.073l-.8-1.388a.199.199 0 0 1 .072-.271c1.566-.905 1.566-3.165 0-4.07a.199.199 0 0 1-.073-.271l.801-1.388a.199.199 0 0 1 .272-.073C5.042 5.138 7 4.007 7 2.2c0-.11.089-.199.199-.199ZM5.5 2.2c0-.94.76-1.7 1.699-1.7H8.8c.94 0 1.7.76 1.7 1.7a.85.85 0 0 0 1.274.735 1.699 1.699 0 0 1 2.32.622l.802 1.388c.469.813.19 1.851-.622 2.32a.85.85 0 0 0 0 1.472 1.7 1.7 0 0 1 .622 2.32l-.802 1.388a1.699 1.699 0 0 1-2.32.622.85.85 0 0 0-1.274.735c0 .939-.76 1.7-1.699 1.7H7.2a1.7 1.7 0 0 1-1.699-1.7.85.85 0 0 0-1.274-.735 1.698 1.698 0 0 1-2.32-.622l-.802-1.388a1.699 1.699 0 0 1 .622-2.32.85.85 0 0 0 0-1.471 1.699 1.699 0 0 1-.622-2.321l.801-1.388a1.699 1.699 0 0 1 2.32-.622A.85.85 0 0 0 5.5 2.2Zm4 5.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd"></path></svg></svg>
        )} size={16} />
    }>
        <span>Icon and copy</span>
    </UIKit.Label>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Label icon={<Icon size={16} data={GearIcon} />}>Icon</Label>
<Label type="close" icon={<Icon size={16} data={GearIcon} />}>Icon and close</Label>
<Label type="copy" icon={<Icon size={16} data={GearIcon} />}>Icon and copy</Label>
```

<!--/GITHUB_BLOCK-->

## Valor

Puede usar `Label`s para mostrar información de valores clave. Para ello, debe proporcionar la clave de la `children` propiedad y el valor para: `value`

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Label theme="normal" value="Value">Key</Label>
<Label theme="info" value="Value">Key</Label>
<Label theme="success" value="Value">Key</Label>
<Label theme="warning" value="Value">Key</Label>
<Label theme="danger" value="Value">Key</Label>
<Label theme="utility" value="Value">Key</Label>
<Label theme="unknown" value="Value">Key</Label>
<Label theme="clear" value="Value">Key</Label>
`}
>
    <UIKit.Label theme="normal" value="Value">Key</UIKit.Label>
    <UIKit.Label theme="info" value="Value">Key</UIKit.Label>
    <UIKit.Label theme="success" value="Value">Key</UIKit.Label>
    <UIKit.Label theme="warning" value="Value">Key</UIKit.Label>
    <UIKit.Label theme="danger" value="Value">Key</UIKit.Label>
    <UIKit.Label theme="utility" value="Value">Key</UIKit.Label>
    <UIKit.Label theme="unknown" value="Value">Key</UIKit.Label>
    <UIKit.Label theme="clear" value="Value">Key</UIKit.Label>
</ExampleBlock>

LANDING_BLOCK-->

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

A `label` puede tener diferentes estados:

- `disabled`: No se permiten interacciones.
- `interactive`: Hace que la etiqueta se pueda colocar sobre el ratón.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Label>Default</Label>
<Label disabled>Disabled</Label>
<Label interactive>Interactive</Label>
`}
>
    <UIKit.Label>Default</UIKit.Label>
    <UIKit.Label disabled>Disabled</UIKit.Label>
    <UIKit.Label interactive>Interactive</UIKit.Label>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Label>Default</Label>
<Label disabled>Disabled</Label>
<Label interactive>Interactive</Label>
```

<!--/GITHUB_BLOCK-->

## Tamaño

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Label size="xs">XS size</Label>
<Label size="s">S size</Label>
<Label size="m">M size</Label>
`}
>
    <UIKit.Label size="xs">XS size</UIKit.Label>
    <UIKit.Label size="s">S size</UIKit.Label>
    <UIKit.Label size="m">M size</UIKit.Label>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Label size="xs">XS size</Label>
<Label size="s">S size</Label>
<Label size="m">M size</Label>
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre           | Descripción                                            |         Tipo          | Predeterminado |
| :--------------- | :----------------------------------------------------- | :-------------------: | :------------: |
| niños            | Contenido                                              |   `React.ReactNode`   |                |
| className        | `class` Atributo HTML                                  |       `string`        |                |
| closeButtonLabel | `aria-label` del botón de cierre                       |       `string`        |                |
| copyButtonLabel  | `aria-label` del botón de copia                        |       `string`        |                |
| copyText         | Texto para copiar                                      |       `string`        |                |
| inhabilitado     | Estado desactivado                                     |       `boolean`       |                |
| icono            | Icono de etiqueta (a la izquierda)                     |   `React.ReactNode`   |                |
| interactivo      | Activa el efecto de desplazamiento                     |       `boolean`       |                |
| onClick          | `click` controlador de eventos                         |      `Function`       |                |
| onCloseClick     | Controlador de `click` eventos del botón Cerrar        |      `Function`       |                |
| onCopy           | `copy` controlador de eventos                          |      `Function`       |                |
| tamaño           | Tamaño de etiqueta                                     |     `"xs"` `"m"`      |     `"s"`      |
| canción          | Tema de etiqueta                                       |       `string`        |   `"normal"`   |
| tipo             | Tipo de etiqueta                                       | `"default"` `"close"` |  `"default"`   |
| valor            | Valor de etiqueta (mostrado como `"children : value"`) |       `string`        |                |
| título           | `title` Atributo HTML                                  |       `string`        |                |
| qa               | `data-qa` Atributo HTML, usado para realizar pruebas   |       `string`        |                |
