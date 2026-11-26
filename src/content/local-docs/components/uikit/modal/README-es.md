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
<Modal open={open} onClose={() => setOpen(false)}>
    Contenido
</Modal>
```

## Propiedades

| Nombre                  | Descripción                                                                                  |       Tipo        |     Predeterminado     |
| :-------------------- | :------------------------------------------------------------------------------------------- | :---------------: | :--------------------: |
| autoFocus             | Mientras está abierto, el foco se establecerá en el primer elemento interactivo del contenido            |     `boolean`     |     `true`      |
| children              | Cualquier contenido de React                                                                            | `React.ReactNode` |                 |
| className             | Atributo HTML `class` para el nodo raíz                                                     |     `string`      |                 |
| container             | Elemento DOM al que se monta el componente a través de `Portal`                                       |   `HTMLElement`   | `document.body` |
| contentClassName      | Atributo HTML `class` para el nodo de contenido                                                  |     `string`      |                 |
| disableBodyScrollLock | Deshabilita el bloqueo de desplazamiento mientras está abierto                                                           |     `boolean`     |     `false`     |
| disableEscapeKeyDown  | Deshabilita el cierre al presionar `Esc`                                                           |     `boolean`     |     `false`     |
| disableOutsideClick   | Deshabilita el cierre al hacer clic fuera                                                  |     `boolean`     |     `false`     |
| disablePortal         | Deshabilita el uso de `Portal`                                                                      |     `boolean`     |     `false`     |
| focusTrap             | Habilita el comportamiento de captura de foco                                                              |     `boolean`     |     `true`      |
| keepMounted           | `Modal` no se eliminará del DOM al ocultarse                                         |     `boolean`     |     `false`     |
| onClose               | Maneja el evento de cierre de `Modal`                                                                  |    `Function`     |                 |
| onEnterKeyDown        | Manejador de eventos al presionar `Enter`                                                                  |    `Function`     |                 |
| onEscapeKeyDown       | Manejador de eventos al presionar `Esc`                                                                    |    `Function`     |                 |
| onTransitionEnter     | Manejador de eventos al inicio de la transición de apertura                                                          |    `Function`     |                 |
| onTransitionExit      | Manejador de eventos al inicio de la transición de cierre                                                         |    `Function`     |                 |
| onTransitionEntered   | Manejador de eventos al final de la transición de apertura                                                            |    `Function`     |                 |
| onTransitionExited    | Manejador de eventos al final de la transición de cierre                                                           |    `Function`     |                 |
| onOutsideClick        | Manejador de eventos al hacer clic fuera                                                                  |    `Function`     |                 |
| open                  | Gestiona la visibilidad de `Modal`                                                                   |     `boolean`     |     `false`     |
| qa                    | Atributo de prueba (`data-qa`)                                                                   |     `string`      |                 |
| restoreFocusRef       | Elemento al que se restaurará el foco                                                        | `React.RefObject` |                 |
| style                 | Atributo HTML `style` para el nodo raíz                                                     |     `string`      |                 |
| aria-label            | Atributo HTML `aria-label` para describir `Modal`                                              |     `string`      |                 |
| aria-labelledby       | ID del elemento de título visible de `Modal`                                                    |     `string`      |                 |
| contentOverflow       | Determina si el `Modal` tiene un indicador de desplazamiento interno o crece con el contenido | `visible` `auto`  |    `visible`    |

## API CSS

| Nombre                      | Descripción                       |
| :------------------------ | :-------------------------------- |
| `--g-modal-margin`        | Margen alrededor del contenido del `Modal` |
| `--g-modal-border-radius` | Radio del borde del contenido del `Modal`     |
| `--g-modal-width`         | Ancho del contenido del `Modal`             |
| `--g-modal-max-width`     | Ancho máximo del contenido del `Modal`         |
| `--g-modal-height`        | Altura del contenido del `Modal`            |
| `--g-modal-max-height`    | Altura máxima del contenido del `Modal`        |