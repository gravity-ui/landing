<!--GITHUB_BLOCK-->

# Modal

<!--/GITHUB_BLOCK-->

```tsx
import {Modal} from '@gravity-ui/uikit';
```

El `Modal` componente sirve como base para crear ventanas emergentes con un fondo sobre el resto del contenido de una página.
Desactiva el desplazamiento al abrir y gestiona el enfoque del contenido. Los componentes `Modal` secundarios se representan dentro del [`Portal`](../Portal) componente.
Con `Modal`, puede implementar cuadros de diálogo, alertas, confirmaciones y más.

## Uso

```tsx
import {useState} from 'react';
import {Button, Modal} from '@gravity-ui/uikit';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>
<Modal open={open} onClose={() => setOpen(false)}>
    Content
</Modal>
```

## Propiedades

| Nombre                | Descripción                                                                                               |       Tipo        | Predeterminado  |
| :-------------------- | :-------------------------------------------------------------------------------------------------------- | :---------------: | :-------------: |
| autoFocus             | Mientras esté abierto, el enfoque se centrará en el primer elemento interactivo del contenido             |     `boolean`     |     `true`      |
| niños                 | Cualquier contenido de React                                                                              | `React.ReactNode` |                 |
| className             | `class` Atributo HTML para el nodo raíz                                                                   |     `string`      |                 |
| contenedor            | Elemento DOM en el que están montados los niños                                                           |   `HTMLElement`   | `document.body` |
| contentClassName      | `class` Atributo HTML para el nodo de contenido                                                           |     `string`      |                 |
| disableBodyScrollLock | Desactiva el bloqueo del desplazamiento mientras está abierto                                             |     `boolean`     |     `false`     |
| disableEscapeKeyDown  | Deshabilita la activación de cerca `Esc`                                                                  |     `boolean`     |     `false`     |
| disableOutsideClick   | Desactiva la activación de clics cercanos al hacer clic desde el exterior                                 |     `boolean`     |     `false`     |
| focusTrap             | Permite el comportamiento de captura de enfoque                                                           |     `boolean`     |     `true`      |
| keepMounted           | `Modal` no se eliminará del DOM al ocultarse                                                              |     `boolean`     |     `false`     |
| onClose               | Maneja el evento `Modal` cerrado                                                                          |    `Function`     |                 |
| onEnterKeyDown        | `Enter` gestor de eventos de prensa                                                                       |    `Function`     |                 |
| onEscapeKeyDown       | `Esc` gestor de eventos de prensa                                                                         |    `Function`     |                 |
| onTransitionEnter     | Controlador de eventos de inicio de transición abierto                                                    |    `Function`     |                 |
| onTransitionExit      | Cerrar el controlador de eventos de inicio de transición                                                  |    `Function`     |                 |
| onTransitionEntered   | Controlador de eventos de fin de transición abierto                                                       |    `Function`     |                 |
| onTransitionExited    | Cerrar el controlador de eventos de fin de transición                                                     |    `Function`     |                 |
| onOutsideClick        | Controlador de eventos de clic externo                                                                    |    `Function`     |                 |
| abierto               | Gestiona `Modal` la visibilidad                                                                           |     `boolean`     |     `false`     |
| qa                    | Atributo de prueba (`data-qa`)                                                                            |     `string`      |                 |
| restoreFocusRef       | Elemento al que se restablecerá el foco                                                                   | `React.RefObject` |                 |
| estilo                | `style` Atributo HTML para el nodo raíz                                                                   |     `string`      |                 |
| etiqueta aria         | `aria-label` Atributo HTML para describir `Modal`                                                         |     `string`      |                 |
| aria - etiquetada por | ID del elemento de `Modal` subtítulo visible                                                              |     `string`      |                 |
| contentOverflow       | Determina si `Modal` tiene un indicador de desplazamiento en su interior o si se agranda con el contenido | `visible` `auto`  |    `visible`    |

## API CSS

| Nombre                    | Descripción                            |
| :------------------------ | :------------------------------------- |
| `--g-modal-margin`        | Margen alrededor del `Modal` contenido |
| `--g-modal-border-radius` | `Modal` radio del borde del contenido  |
