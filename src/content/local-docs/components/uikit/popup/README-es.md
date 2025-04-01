<!--GITHUB_BLOCK-->

# Ventana emergente

<!--/GITHUB_BLOCK-->

```tsx
import {Popup} from '@gravity-ui/uikit';
```

Puedes usar un `Popup` para mostrar contenido flotante sobre la página. Técnicamente, es un envoltorio de una [interfaz de usuario flotante](https://floating-ui.com) con algunos valores predeterminados. Para gestionar `Popup` la visibilidad, utilice la `open` propiedad.
Los componentes `Popup` secundarios se representan dentro del [`Portal`](../Portal) componente. Para deshabilitar este comportamiento, utilice la `disablePortal` propiedad.

## Ancla

Para especificar el ancla de un elemento flotante, puede usar la `anchorElement` propiedad.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
const [buttonElement, setButtonElement] = React.useState(null);
const [open, setOpen] = React.useState(false);

<Button ref={setButtonElement} onClick={() => setOpen((prevOpen) => !prevOpen)}>
  Toggle Popup
</Button>
<Popup anchorElement={buttonElement} open={open} placement="bottom">
  Content
</Popup>
`}>
    <UIKitExamples.PopupAnchorExample/>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
const [buttonElement, setButtonElement] = React.useState(null);
const [open, setOpen] = React.useState(false);

<Button ref={setButtonElement} onClick={() => setOpen((prevOpen) => !prevOpen)}>
  Toggle Popup
</Button>
<Popup anchorElement={buttonElement} open={open} placement="bottom">
  Content
</Popup>
```

<!--/GITHUB_BLOCK-->

## Colocación

Utilice la `placement` propiedad para gestionar la `Popup` posición alrededor del elemento de anclaje.
De forma predeterminada, `Popup` usa [flip middleware](https://floating-ui.com/docs/flip) para evitar el desbordamiento.
Si la propiedad se establece en una matriz, el primer elemento se usará como valor de ubicación predeterminado y el resto se usará como [ubicaciones alternativas](https://floating-ui.com/docs/flip#fallbackplacements).
También es aceptable usar los valores `auto`, `auto-start`, `auto-end` para usar el [middleware AutoPlacement](https://floating-ui.com/docs/autoPlacement) en lugar de flip.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
const [boxElement, setBoxElement] = React.useState(null);

<div ref={setBoxElement} />
<Popup open anchorElement={boxElement} placement="top-start">Top Start</Popup>
<Popup open anchorElement={boxElement} placement="top">Top</Popup>
<Popup open anchorElement={boxElement} placement="top-end">Top End</Popup>
<Popup open anchorElement={boxElement} placement="right-start">Right Start</Popup>
<Popup open anchorElement={boxElement} placement="right">Right</Popup>
<Popup open anchorElement={boxElement} placement="right-end">Right End</Popup>
<Popup open anchorElement={boxElement} placement="bottom-end">Bottom End</Popup>
<Popup open anchorElement={boxElement} placement="bottom">Bottom</Popup>
<Popup open anchorElement={boxElement} placement="bottom-start">Bottom Start</Popup>
<Popup open anchorElement={boxElement} placement="left-end">Left End</Popup>
<Popup open anchorElement={boxElement} placement="left">Left</Popup>
<Popup open anchorElement={boxElement} placement="left-start">Left Start</Popup>
`}>
    <UIKitExamples.PopupPlacementExample/>
</ExampleBlock>

LANDING_BLOCK-->

## Propiedades

| Nombre                  | Descripción                                                                                              |                                       Tipo                                        | Predeterminado |
| :---------------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------: | :------------: |
| anchorElement           | Elemento de anclaje. También puede ser un `VirtualElement`                                               |                               `PopupAnchorElement`                                |                |
| aria, descrita por      | `aria-describedby` atributo. Úselo si tiene nodos de etiqueta y descripción                              |                                     `string`                                      |                |
| etiqueta aria           | `aria-label` atributo. Úselo solo si no tiene ningún subtítulo visible                                   |                                     `string`                                      |                |
| aria - etiquetada por   | `aria-labelledby` atributo. Es preferible si tiene subtítulos visibles                                   |                                     `string`                                      |                |
| niños                   | Cualquier contenido de React                                                                             |                                 `React.ReactNode`                                 |                |
| className               | `class` Atributo HTML para el nodo raíz                                                                  |                                     `string`                                      |                |
| disableEscapeKeyDown    | Deshabilita la activación de cerca `Esc`                                                                 |                                     `boolean`                                     |    `false`     |
| disableFocusOut         | Desactiva la activación del cierre al enfocar                                                            |                                     `boolean`                                     |    `false`     |
| disableOutsideClick     | Desactiva la activación de clics cercanos al hacer clic desde el exterior                                |                                     `boolean`                                     |    `false`     |
| disablePortal           | Deshabilita el uso `Portal` para niños                                                                   |                                     `boolean`                                     |    `false`     |
| disableTransition       | Desactiva la animación de la apertura/desaparición de ventanas emergentes                                |                                     `boolean`                                     |    `false`     |
| floatingClassName       | Clase adicional para aplicar al `Floating UI` elemento                                                   |                                     `string`                                      |                |
| floatingContext         | `Floating UI` contexto para proporcionar interacciones                                                   |                               `FloatingRootContext`                               |                |
| floatingInteractions    | Anular interacciones `Floating UI`                                                                       |                              `Matriz<ElementProps>`                               |                |
| floatingMiddlewares     | `Floating UI` middleware. Si se configuran, sobrescribirán por completo los middlewares predeterminados. |                               `Matriz<Middleware>`                                |                |
| floatingStyles          | Estilos que se van a aplicar al `Floating UI` elemento                                                   |                               `React.CSSProperties`                               |                |
| focusOrder              | El orden en el que se centra el círculo                                                                  |                 `Matriz<'referencia'\| 'flotante'\| 'contenido'>`                 | `['content']`  |
| hasArrow                | Representa la flecha que apunta al ancla                                                                 |                                     `boolean`                                     |    `false`     |
| identificación          | `id` Atributo HTML                                                                                       |                                     `string`                                      |                |
| initialFocus            | Elemento inicial en el que centrarse. El número positivo es el índice del elemento tabulable.            |                        `number` `Reactar.Ref<HTMLElement>`                        |                |
| keepMounted             | `Popup` no se eliminará del DOM al ocultarse                                                             |                                     `boolean`                                     |    `false`     |
| modal                   | Permite un comportamiento de captura de enfoque                                                          |                                     `boolean`                                     |    `false`     |
| compensar               | `Floating UI` valor de compensación                                                                      |                                   `PopupOffset`                                   |      `4`       |
| onOpenChange            | Maneja `Popup` el evento de cambio abierto                                                               |                                    `Function`                                     |                |
| onTransitionIn          | Animación emergente abierta al iniciar                                                                   |                                    `Function`                                     |                |
| onTransitionInComplete  | Al terminar, abre la animación emergente                                                                 |                                    `Function`                                     |                |
| onTransitionOut         | Animación emergente al iniciar y cerrar                                                                  |                                    `Function`                                     |                |
| onTransitionOutComplete | Al terminar, cierre la animación emergente                                                               |                                    `Function`                                     |                |
| abierto                 | Gestiona `Popup` la visibilidad                                                                          |                                     `boolean`                                     |    `false`     |
| colocación              | `Floating UI` colocación                                                                                 | `Placement` `Array:` `inicio<Placement>` `automático` `, finalización automática` |                |
| qa                      | Atributo de prueba (`data-qa`)                                                                           |                                     `string`                                      |                |
| returnFocus             | Elemento en el que centrarse el cierre                                                                   |                       `boolean` `Reactar.Ref<HTMLElement>`                        |     `true`     |
| papel                   | Función de accesibilidad de la ventana emergente                                                         |                                     `string`                                      |                |
| estrategia              | `Floating UI` estrategia de posicionamiento                                                              |                                `absolute` `fixed`                                 |   `absolute`   |
| estilo                  | `style` Atributo HTML para nodo raíz                                                                     |                               `React.CSSProperties`                               |                |

## API CSS

| Nombre                       | Descripción     |
| :--------------------------- | :-------------- |
| `--g-popup-background-color` | Color de fondo  |
| `--g-popup-border-color`     | Color del borde |
| `--g-popup-border-width`     | Ancho del borde |
