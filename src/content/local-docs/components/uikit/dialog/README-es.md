`Dialog` es una ventana modal con un título, cuerpo y acciones de pie de página, utilizada para confirmaciones, formularios y avisos. Está construida sobre `Modal`.

```tsx
import {Dialog} from '@gravity-ui/uikit';
```

## Uso

```tsx
const [open, setOpen] = useState(false);
const dialogTitleId = 'app-confirmation-dialog-title';

<Dialog onOpenChange={setOpen} open={open} aria-labelledby={dialogTitleId}>
  <Dialog.Header caption="Caption" id={dialogTitleId} />
  <Dialog.Body>Dialog.Body</Dialog.Body>
  <Dialog.Footer
    onClickButtonCancel={() => setOpen(false)}
    onClickButtonApply={() => alert('onApply')}
    textButtonApply="Apply"
    textButtonCancel="Cancel"
  />
</Dialog>;
```

## Propiedades
GRAVITY_TRANSLATION_BLOCK_0_END

| Nombre                  | Descripción                                                                                             | Tipo                                                                | Por defecto     |
| :-------------------- | :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------ | :---------- |
| open                  | Estado actual del diálogo                                                                               | `boolean`                                                           |             |
| onOpenChange          | Maneja los cambios en el estado abierto del diálogo                                                     | `(open: boolean, event?: Event, reason?: OpenChangeReason) => void` |             |
| initialFocus          | Objetivo de foco inicial, incluyendo el botón `cancelar` o `aplicar` del pie de página                  | `ModalProps['initialFocus'] \| 'cancel' \| 'apply'`                 |             |
| returnFocus           | Controla a dónde regresa el foco después de cerrar                                                      | `ModalProps['returnFocus']`                                         |             |
| className             | `className` del contenedor del contenido del diálogo                                                     | `string`                                                            |             |
| modalClassName        | `className` del cuadro modal en el que está incrustado el diálogo                                       | `string`                                                            |             |
| maxWidth              | Ancho máximo del contenido del diálogo                                                                  | `'s'` `'m'` `'l'`                                                   |             |
| fullWidth             | Si es `true`, el contenido se estira hasta `maxWidth`                                                   | `boolean`                                                           |             |
| disableBodyScrollLock | Activa o desactiva el bloqueo del desplazamiento del cuerpo                                             | `boolean`                                                           | `false`     |
| disableTransition     | Omite las animaciones de apertura y cierre cuando es `true`.                                             | `boolean`                                                           | `false`     |
| disableEscapeKeyDown  | Activa o desactiva la pulsación de la tecla escape                                                      | `boolean`                                                           | `false`     |
| disableOutsideClick   | Activa o desactiva el clic exterior                                                                     | `boolean`                                                           | `false`     |
| keepMounted           | Activa o desactiva si el diálogo se mantiene en estado montado                                          | `boolean`                                                           | `false`     |
| hasCloseButton        | Activa o desactiva si hay un icono de cruz en la esquina superior derecha del diálogo                   | `boolean`                                                           | `true`      |
| aria-labelledby       | ID del título del `<Dialog/>`. Usa la propiedad `id` de `<Dialog.Header/>` para establecer el ID del título | `string`                                                            |             |
| aria-label            | Etiqueta del diálogo para accesibilidad. Establece `aria-labelledby` si el título es visible para el usuario | `string`                                                            |             |
| container             | Elemento contenedor para el cuadro de diálogo                                                           | `HTMLElement`                                                       |             |
| qa                    | Valor del atributo `data-qa` del cuadro modal en el que está incrustado el diálogo                      | `string`                                                            |             |
| contentOverflow       | Determina si el `Dialog` tiene un indicador de desplazamiento interno o si aumenta de tamaño con el contenido | `'visible'` `'auto'`                                                | `'visible'` |

`onOpenChange` recibe `escape-key` para Escape, `outside-press` para un clic externo, `click` para el botón de cierre y `undefined` para el botón de desestimar del lector de pantalla. Cierra cuando `open` se vuelve `false` independientemente de la razón.

GRAVITY_TRANSLATION_BLOCK_1_END