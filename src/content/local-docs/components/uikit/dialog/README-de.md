`Dialog` ist ein modales Fenster mit einem Titel, einem Hauptteil und Aktionen im Fußbereich, das für Bestätigungen, Formulare und Aufforderungen verwendet wird. Es basiert auf `Modal`.

```tsx
import {Dialog} from '@gravity-ui/uikit';
```

## Verwendung

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

## Eigenschaften
GRAVITY_TRANSLATION_BLOCK_0_END

| Name                  | Beschreibung                                                                                             | Typ                                                                | Standard     |
| :-------------------- | :------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------ | :----------- |
| open                  | Aktueller Dialogzustand                                                                                  | `boolean`                                                           |              |
| onOpenChange          | Behandelt Änderungen des Dialogzustands                                                                  | `(open: boolean, event?: Event, reason?: OpenChangeReason) => void` |              |
| initialFocus          | Ziel für den anfänglichen Fokus, einschließlich der Schaltflächen `cancel` oder `apply` im Footer        | `ModalProps['initialFocus'] \| 'cancel' \| 'apply'`                 |              |
| returnFocus           | Steuert, wohin der Fokus nach dem Schließen zurückkehrt                                                  | `ModalProps['returnFocus']`                                         |              |
| className             | `className` des Wrapper-Elements für den Dialoginhalt                                                    | `string`                                                            |              |
| modalClassName        | `className` der Modalbox, in die der Dialog eingebettet ist                                              | `string`                                                            |              |
| maxWidth              | Maximale Breite des Dialoginhalts                                                                        | `'s'` `'m'` `'l'`                                                   |              |
| fullWidth             | Wenn `true`, dehnt sich der Inhalt auf `maxWidth` aus                                                   | `boolean`                                                           |              |
| disableBodyScrollLock | Schaltet das Sperren des Body-Scrolls um                                                                 | `boolean`                                                           | `false`      |
| disableTransition     | Überspringt Öffnungs- und Schließanimationen, wenn `true`.                                               | `boolean`                                                           | `false`      |
| disableEscapeKeyDown  | Schaltet das Deaktivieren von Escape-KeyDown um                                                          | `boolean`                                                           | `false`      |
| disableOutsideClick   | Schaltet das Deaktivieren von Klicks außerhalb des Dialogs um                                            | `boolean`                                                           | `false`      |
| keepMounted           | Schaltet um, ob der Dialog im gemounteten Zustand gehalten wird                                          | `boolean`                                                           | `false`      |
| hasCloseButton        | Schaltet um, ob sich in der oberen rechten Ecke des Dialogs ein Schließsymbol befindet                  | `boolean`                                                           | `true`       |
| aria-labelledby       | ID der Dialogunterschrift. Verwenden Sie die `id`-Eigenschaft von `<Dialog.Header/>`, um die ID für die Unterschrift festzulegen | `string`                                                            |              |
| aria-label            | Dialogbeschriftung für Barrierefreiheit. Setzen Sie `aria-labelledby`, wenn die Unterschrift für den Benutzer sichtbar ist | `string`                                                            |              |
| container             | Container-Element für die Dialogbox                                                                      | `HTMLElement`                                                       |              |
| qa                    | `data-qa`-Attributwert der Modalbox, in die der Dialog eingebettet ist                                   | `string`                                                            |              |
| contentOverflow       | Bestimmt, ob der `Dialog` eine Scrollanzeige im Inneren hat oder mit dem Inhalt größer wird            | `'visible'` `'auto'`                                                | `'visible'`  |

`onOpenChange` empfängt `escape-key` für die Escape-Taste, `outside-press` für einen Klick außerhalb, `click` für den Schließen-Button und `undefined` für den Schließen-Button für Screenreader. Schließen, wenn `open` zu `false` wird, unabhängig vom Grund.
GRAVITY_TRANSLATION_BLOCK_1_END