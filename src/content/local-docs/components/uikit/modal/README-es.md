El componente `Modal` sirve como base para crear ventanas emergentes con un fondo sobre el resto del contenido de una página.
Deshabilita el desplazamiento al abrir y gestiona el foco del contenido. Los componentes hijos de `Modal` se renderizan dentro del componente [`Portal`](../Portal).
Con `Modal`, puedes implementar diálogos, alertas, confirmaciones y más.

```tsx
import {Modal} from '@gravity-ui/uikit';
```

## Uso

```tsx
import {useState} from 'react';
import {Button, Modal} from '@gravity-ui/uikit';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Abrir Modal</Button>
<Modal open={open} onOpenChange={setOpen}>
    Contenido
</Modal>
```

## Propiedades

| Nombre                         | Descripción                                                                                  |                    Tipo                     |     Predeterminado     |
| :--------------------------- | :------------------------------------------------------------------------------------------- | :-----------------------------------------: | :--------------------: |
| children                     | Cualquier contenido de React                                                                   |              `React.ReactNode`              |                        |
| className                    | Atributo `class` HTML para el nodo raíz                                                      |                  `string`                   |                        |
| container                    | Elemento DOM al que se monta el componente a través de `Portal`                               |                `HTMLElement`                |    `document.body`     |
| contentClassName             | Atributo `class` HTML para el nodo de contenido                                              |                  `string`                   |                        |
| disableBodyScrollLock        | Deshabilita el bloqueo de desplazamiento mientras está abierto                               |                  `boolean`                  |        `false`         |
| disableTransition            | Omite las animaciones de apertura y cierre cuando es `true`.                                 |                  `boolean`                  |        `false`         |
| disableEscapeKeyDown         | Deshabilita el cierre al presionar `Esc`                                                      |                  `boolean`                  |        `false`         |
| disableOutsideClick          | Deshabilita el cierre al hacer clic fuera                                                    |                  `boolean`                  |        `false`         |
| disablePortal                | Deshabilita el uso de `Portal`                                                               |                  `boolean`                  |        `false`         |
| keepMounted                  | `Modal` no se eliminará del DOM al ocultarse                                                 |                  `boolean`                  |        `false`         |
| initialFocus                 | Objetivo de foco inicial; por defecto, el nodo de contenido                                  | `FloatingFocusManagerProps['initialFocus']` |                        |
| returnFocus                  | Controla a dónde regresa el foco después de cerrar                                           | `FloatingFocusManagerProps['returnFocus']`  |                        |
| disableVisuallyHiddenDismiss | Elimina los botones de cierre visualmente ocultos para lectores de pantalla                  |                  `boolean`                  |        `false`         |
| floatingRef                  | Ref al nodo de contenido del modal                                                           |  `React.RefObject<HTMLDivElement \| null>`  |                        |
| onOpenChange                 | Maneja los cambios de estado de apertura de `Modal`                                          |                 `Function`                  |                        |
| onTransitionIn               | Manejador de eventos de inicio de transición de apertura                                     |                 `Function`                  |                        |
| onTransitionOut              | Manejador de eventos de inicio de transición de cierre                                        |                 `Function`                  |                        |
| onTransitionInComplete       | Manejador de eventos de fin de transición de apertura                                        |                 `Function`                  |                        |
| onTransitionOutComplete      | Manejador de eventos de fin de transición de cierre                                           |                 `Function`                  |                        |
| open                         | Gestiona la visibilidad de `Modal`                                                           |                  `boolean`                  |        `false`         |
| qa                           | Atributo de prueba (`data-qa`)                                                               |                  `string`                   |                        |
| style                        | Atributo `style` HTML para el nodo raíz                                                      |                  `string`                   |                        |
| aria-label                   | Atributo `aria-label` HTML para describir `Modal`                                            |                  `string`                   |                        |
| aria-labelledby              | ID del elemento de título visible de `Modal`                                                 |                  `string`                   |                        |
| contentOverflow              | Determina si el `Modal` tiene un indicador de desplazamiento interno o crece con el contenido |              `visible` `auto`               |       `visible`        |

`onOpenChange` recibe `escape-key` para Escape, `outside-press` para un clic externo y `undefined` para el botón de dismissal del lector de pantalla. Cierra cuando `open` se vuelve `false` independientemente de la razón.

## API CSS

| Nombre                      | Descripción                       |
| :------------------------ | :-------------------------------- |
| `--g-modal-margin`        | Margen alrededor del contenido del `Modal` |
| `--g-modal-border-radius` | Radio del borde del contenido del `Modal`     |
| `--g-modal-width`         | Ancho del contenido del `Modal`             |
| `--g-modal-min-width`     | Ancho mínimo del contenido del `Modal`         |
| `--g-modal-max-width`     | Ancho máximo del contenido del `Modal`         |
| `--g-modal-height`        | Alto del contenido del `Modal`            |
| `--g-modal-min-height`    | Alto mínimo del contenido del `Modal`        |
| `--g-modal-max-height`    | Alto máximo del contenido del `Modal`        |