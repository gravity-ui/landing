`Dialog` ist ein modales Fenster mit einem Titel, einem Inhalt und Aktionsschaltflächen im Fußbereich, das für Bestätigungen, Formulare und Eingabeaufforderungen verwendet wird. Es basiert auf `Modal`.

```tsx
import {Dialog} from '@gravity-ui/uikit';
```

## Verwendung

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

## Eigenschaften
GRAVITY_TRANSLATION_BLOCK_0_END

| Name                  | Beschreibung                                                                                                | Typ                                                                                              | Standard    |
| :-------------------- | :---------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- | :---------- |
| open                  | Aktueller Dialogzustand                                                                                     | `boolean`                                                                                        |             |
| onEscapeKeyDown       | Escape-Tastendruck-Ereignisbehandlungsroutine                                                               | `(event: KeyboardEvent) => void`                                                                 |             |
| onEnterKeyDown        | Enter-Tastendruck-Ereignisbehandlungsroutine                                                                | `(event: KeyboardEvent) => void`                                                                 |             |
| onOutsideClick        | Ereignisbehandlungsroutine bei einem Mausklick außerhalb des Dialogs                                        | `(event: MouseEvent) => void`                                                                    |             |
| onClose               | Ereignisbehandlungsroutine beim Schließen des Dialogs                                                       | `(event: MouseEvent or KeyboardEvent,` `reason: ModalCloseReason or "closeButtonClick") => void` |             |
| className             | `className` des Wrapper-Elements des Dialoginhalts                                                          | `string`                                                                                         |             |
| modalClassName        | `className` der Modalbox, in die der Dialog eingebettet ist                                                  | `string`                                                                                         |             |
| size                  | Dialoggröße. Veraltet. Verwenden Sie `maxWidth` + `fullWidth`, um dasselbe Ergebnis zu erzielen.            | `'s'` `'m'` `'l'`                                                                                |             |
| maxWidth              | Maximale Breite des Dialoginhalts                                                                           | `'s'` `'m'` `'l'`                                                                                |             |
| fullWidth             | Wenn `true`, dehnt sich der Inhalt auf `maxWidth` aus                                                       | `boolean`                                                                                        |             |
| disableBodyScrollLock | Schaltet ab, ob das Scrollen des Bodys gesperrt ist                                                         | `boolean`                                                                                        | `false`     |
| disableEscapeKeyDown  | Schaltet ab, ob der Escape-Tastendruck deaktiviert ist                                                     | `boolean`                                                                                        | `false`     |
| disableOutsideClick   | Schaltet ab, ob der Klick außerhalb deaktiviert ist                                                         | `boolean`                                                                                        | `false`     |
| keepMounted           | Schaltet ab, ob der Dialog im gemounteten Zustand gehalten wird                                             | `boolean`                                                                                        | `false`     |
| hasCloseButton        | Schaltet ab, ob ein Kreuzsymbol in der oberen rechten Ecke des Dialogs vorhanden ist                        | `boolean`                                                                                        | `true`      |
| aria-labelledby       | ID der `<Dialog/>`-Beschriftung. Verwenden Sie die `id`-Eigenschaft von `<Dialog.Header/>`, um die ID für die Beschriftung festzulegen | `string`                                                                                         |             |
| aria-label            | Dialogbeschriftung für Barrierefreiheit. Setzen Sie `aria-labelledby`, wenn die Beschriftung für den Benutzer sichtbar ist | `string`                                                                                         |             |
| container             | Container-Element für die Dialogbox                                                                         | `HTMLElement`                                                                                    |             |
| qa                    | `data-qa`-Attributwert der Modalbox, in die der Dialog eingebettet ist                                      | `string`                                                                                         |             |
| contentOverflow       | Bestimmt, ob der `Dialog` eine Scrollanzeige im Inneren hat oder mit dem Inhalt größer wird                | `'visible'` `'auto'`                                                                             | `'visible'` |