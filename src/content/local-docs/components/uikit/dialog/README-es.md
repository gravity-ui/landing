<!--GITHUB_BLOCK-->

# Dialog

<!--/GITHUB_BLOCK-->

`Dialog` es una ventana modal con un título, cuerpo y acciones en el pie de página, utilizada para confirmaciones, formularios y avisos. Está construida sobre `Modal`.

```tsx
import {Dialog} from '@gravity-ui/uikit';
```

## Uso

```tsx
const [open, setOpen] = useState(false);
const dialogTitleId = 'app-confirmation-dialog-title';

<Dialog
  onClose={() => setOpen(false)}
  open={open}
  onEnterKeyDown={() => {
    alert('onEnterKeyDown');
  }}
  aria-labelledby={dialogTitleId}
>
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

| Nombre                  | Descripción                                                                                             | Tipo                                                                                             | Predeterminado |
| :-------------------- | :------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------- | :------------- |
| open                  | Estado actual del diálogo                                                                               | `boolean`                                                                                        |                |
| onEscapeKeyDown       | Manejador de eventos de pulsación de la tecla Escape                                                    | `(event: KeyboardEvent) => void`                                                                 |                |
| onEnterKeyDown        | Manejador de eventos de pulsación de la tecla Enter                                                     | `(event: KeyboardEvent) => void`                                                                 |                |
| onOutsideClick        | Manejador de eventos al hacer clic fuera del diálogo                                                    | `(event: MouseEvent) => void`                                                                    |                |
| onClose               | Manejador de eventos al cerrar el diálogo                                                               | `(event: MouseEvent or KeyboardEvent,` `reason: ModalCloseReason or "closeButtonClick") => void` |                |
| className             | `className` del contenedor del contenido del diálogo                                                    | `string`                                                                                         |                |
| modalClassName        | `className` del cuadro modal en el que se incrusta el diálogo                                           | `string`                                                                                         |                |
| size                  | Tamaño del diálogo. Obsoleto. Utilice `maxWidth` + `fullWidth` para lograr el mismo resultado.          | `'s'` `'m'` `'l'`                                                                                |                |
| maxWidth              | Ancho máximo del contenido del diálogo                                                                  | `'s'` `'m'` `'l'`                                                                                |                |
| fullWidth             | Si es `true`, el contenido se estira hasta `maxWidth`                                                   | `boolean`                                                                                        |                |
| disableBodyScrollLock | Activa/desactiva el bloqueo del desplazamiento del cuerpo                                               | `boolean`                                                                                        | `false`        |
| disableEscapeKeyDown  | Activa/desactiva la desactivación de la pulsación de la tecla Escape                                    | `boolean`                                                                                        | `false`        |
| disableOutsideClick   | Activa/desactiva la desactivación del clic exterior                                                     | `boolean`                                                                                        | `false`        |
| keepMounted           | Activa/desactiva si el diálogo se mantiene en estado montado                                            | `boolean`                                                                                        | `false`        |
| hasCloseButton        | Activa/desactiva si hay un icono de cruz en la esquina superior derecha del diálogo                    | `boolean`                                                                                        | `true`         |
| aria-labelledby       | ID del título de `<Dialog/>`. Utilice la propiedad `id` de `<Dialog.Header/>` para establecer el ID del título | `string`                                                                                         |                |
| aria-label            | Etiqueta del diálogo para accesibilidad. Establezca `aria-labelledby` si el título es visible para el usuario | `string`                                                                                         |                |
| container             | Elemento contenedor para el cuadro de diálogo                                                           | `HTMLElement`                                                                                    |                |
| qa                    | Valor del atributo `data-qa` del cuadro modal en el que se incrusta el diálogo                         | `string`                                                                                         |                |
| contentOverflow       | Determina si el `Dialog` tiene un indicador de desplazamiento interno o si crece con el contenido       | `'visible'` `'auto'`                                                                             | `'visible'`    |
