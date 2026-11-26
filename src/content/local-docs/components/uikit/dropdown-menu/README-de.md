Das Dropdown-Menü-Komponente bietet Gruppierung von Elementen, Untermenüs und einen anpassbaren Schalter. Die Elemente des Dropdown-Menüs werden mit der `items`-Eigenschaft konfiguriert. Standardmäßig ist der Menüschalter ein Button mit dem Ellipsen-Symbol (**⋯**), der mit der `renderSwitcher`-Eigenschaft überschrieben werden kann.

```tsx
import {DropdownMenu} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Gruppierte Elemente

`DropdownMenu`-Elemente können gruppiert und visuell von anderen Menüelementen getrennt werden, indem Arrays von Menüelementen in das `items`-Array verschachtelt werden.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Untermenüs

Die `items`-Eigenschaft eines einzelnen Menüelements fügt diesem Element verschachtelte Unterelemente hinzu.

Menüelemente mit Untermenüs erhalten die folgenden zusätzlichen Klassennamen, um zusätzliche Stile zu ermöglichen:

- `.g-dropdown-menu__menu-item_with-submenu`: Für Elemente mit mehr als einem verschachtelten Element.
- `.g-dropdown-menu__menu-item_active-parent`: Für das Element, dessen Untermenü gerade geöffnet ist.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Benutzerdefinierter Menüschalter

Um den Menüschalter zu konfigurieren, verwenden Sie die `renderSwitcher`-Eigenschaft. Dies kann jede Funktion sein, die eine React-Komponente zurückgibt (oder im TypeScript-Sinne `(props: SwitcherProps) => React.ReactNode`, siehe [`SwitcherProps`](#switcherprops) unten). Standardmäßig ist der Menüschalter ein Button mit dem Ellipsen-Symbol (**⋯**).

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

Das obige Beispiel ist vereinfacht, um die Idee eines anpassbaren Menüschalters zu demonstrieren. In einer realen Anwendung wird generell empfohlen, dass der klickbare Menüschalter eine Komponente ist, die mit der Tastatur und anderen assistiven Technologien zugänglich ist, wie z. B. ein Button.

## Benutzerdefinierte Symbole

Sie können einem `DropdownMenu`-Element benutzerdefinierte Symbole mit der `iconStart`- oder `iconEnd`-Eigenschaft hinzufügen. Standardmäßig werden die `DropdownMenu`-Elemente ohne Symbole geliefert.

Sie können das Symbol des Menüschalters mit den `renderSwitcher`-Eigenschaften des `DropdownMenu` ändern. Standardmäßig ist der Menüschalter ein Button mit dem Ellipsen-Symbol (**⋯**).

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Eigenschaften

| Name                       | Beschreibung                                                                                             |                        Typ                        |    Standard    |
| :------------------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------------: | :------------: |
| `items`                    | Array von Elementen. Verschachtelte Arrays von Elementen stellen visuell getrennte Gruppen dar.          | `(DropdownMenuItem \| DropdownMenuItem[])[] \| []` |                |
| `data`                     | Eine Nutzlast, die an die Aktionen übergeben wird, die vom Menü aus aufgerufen werden. (Dies kann für Kontextmenüs nützlich sein.) |                       `any`                       |                |
| `icon`                     | Symbol des Standard-`switcher`.                                                                          |                 `React.ReactNode`                 | Ellipsis-Symbol |
| `size`                     | Gilt sowohl für den Standard-`switcher` als auch für das Menü.                                           |            `'s' \| 'm' \| 'l' \| 'xl'`            |     `'m'`     |
| `disabled`                 | Wenn diese Eigenschaft auf `true` gesetzt ist, wird die `switcher`-Schaltfläche deaktiviert und das Menü kann nicht geöffnet werden. |                     `boolean`                     |                |
| `renderSwitcher`           | Renderfunktion für die Menü-Umschaltsteuerung.                                                           |                 `React.ReactNode`                 |                |
| `switcherWrapperClassName` | Wert für die `className`-Eigenschaft der übergeordneten Komponente des `switcher`.                       |                      `string`                      |                |
| `defaultSwitcherProps`     | Standard-`switcher`-Eigenschaften.                                                                       |                   `ButtonProps`                   |                |
| `defaultSwitcherClassName` | Wert für die `className`-Eigenschaft des Standard-`switcher`.                                            |                      `string`                      |                |
| `menuProps`                | Überschreibt die Standardeigenschaften des Dropdown-Menü-Popups.                                         |                    `MenuProps`                    |                |
| `popupProps`               | Überschreibt die Standard-Popup-Eigenschaften.                                                           |                    `PopupProps`                    |                |
| `open`                     | Schaltet die Sichtbarkeit des Dropdown-Menüs um.                                                         |                     `boolean`                     |                |
| `onOpenToggle`             | Wird aufgerufen, wenn das Menü geöffnet oder geschlossen wird.                                           |                    `() => void`                    |                |
| `onSwitcherClick`          | Wird aufgerufen, wenn der `switcher` angeklickt wird.                                                    |       `React.MouseEventHandler<HTMLElement>`       |                |
| `hideOnScroll`             | Gibt an, ob das Menü beim Scrollen eines übergeordneten Elements ausgeblendet werden soll.             |                     `boolean`                     |     `true`     |
| `children`                 | Benutzerdefinierter Inhalt im Menü-Popup.                                                               |                 `React.ReactNode`                 |                |

### DropdownMenuItem

Dieser Typ beschreibt einzelne Dropdown-Menüelemente.
GRAVITY_TRANSLATION_BLOCK_1_END
### DropdownMenu

This component renders a menu of `DropdownMenuItem` components.
GRAVITY_TRANSLATION_BLOCK_2_END
It can be used to create context menus, submenus, or any other type of dropdown menu.
GRAVITY_TRANSLATION_BLOCK_3_END
### Props

#### `anchorElement`

*   **Type:** `HTMLElement`
*   **Description:** The element that the dropdown menu will be anchored to. This is typically a button or another interactive element.
GRAVITY_TRANSLATION_BLOCK_4_END
#### `children`

*   **Type:** `React.ReactNode`
*   **Description:** The content of the dropdown menu, which should be one or more `DropdownMenuItem` components.
GRAVITY_TRANSLATION_BLOCK_5_END
#### `isOpen`

*   **Type:** `boolean`
*   **Description:** Controls whether the dropdown menu is currently visible.
GRAVITY_TRANSLATION_BLOCK_6_END
#### `onClose`

*   **Type:** `() => void`
*   **Description:** A callback function that is called when the dropdown menu is closed (e.g., by clicking outside of it).
GRAVITY_TRANSLATION_BLOCK_7_END
#### `position`

*   **Type:** `'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'`
*   **Default:** `'bottom-left'`
*   **Description:** Specifies the position of the dropdown menu relative to the `anchorElement`.
GRAVITY_TRANSLATION_BLOCK_8_END
### Example Usage

```jsx
import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuItem } from '@your-ui-library/dropdown';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleMenuItemClick = (item) => {
    console.log(`Clicked on: ${item}`);
    handleClose();
  };

  return (
    <div>
      <button ref={anchorRef} onClick={handleOpen}>
        Open Menu
      </button>
      <DropdownMenu
        anchorElement={anchorRef.current}
        isOpen={isOpen}
        onClose={handleClose}
        position="bottom-left"
      >
        <DropdownMenuItem onClick={() => handleMenuItemClick('Option 1')}>
          Option 1
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMenuItemClick('Option 2')}>
          Option 2
        </DropdownMenuItem>
        <DropdownMenuItem disabled onClick={() => handleMenuItemClick('Disabled Option')}>
          Disabled Option
        </DropdownMenuItem>
      </DropdownMenu>
    </div>
  );
}

export default MyComponent;
```
GRAVITY_TRANSLATION_BLOCK_9_END
### DropdownMenuItem

This type describes individual dropdown menu items.
GRAVITY_TRANSLATION_BLOCK_10_END
### Props

#### `children`

*   **Type:** `React.ReactNode`
*   **Description:** The content of the dropdown menu item. This can be text, icons, or other React components.
GRAVITY_TRANSLATION_BLOCK_11_END
#### `disabled`

*   **Type:** `boolean`
*   **Default:** `false`
*   **Description:** If `true`, the menu item will be disabled and cannot be interacted with.
GRAVITY_TRANSLATION_BLOCK_12_END
#### `onClick`

*   **Type:** `(event: React.MouseEvent) => void`
*   **Description:** A callback function that is called when the menu item is clicked.
GRAVITY_TRANSLATION_BLOCK_13_END
#### `href`

*   **Type:** `string`
*   **Description:** If provided, the menu item will render as a link with the specified `href`.
GRAVITY_TRANSLATION_BLOCK_14_END
#### `target`

*   **Type:** `'_blank' | '_self' | '_parent' | '_top'`
*   **Description:** Specifies where to open the linked document when the `href` prop is used.
GRAVITY_TRANSLATION_BLOCK_15_END
#### `rel`

*   **Type:** `string`
*   **Description:** Specifies the relationship of the linked document when the `href` prop is used. Commonly used with `target="_blank"` for security reasons (e.g., `"noopener noreferrer"`).
GRAVITY_TRANSLATION_BLOCK_16_END
### Example Usage

```jsx
import React from 'react';
import { DropdownMenuItem } from '@your-ui-library/dropdown';

function Example() {
  const handleClick = (item) => {
    alert(`You clicked ${item}`);
  };

  return (
    <div>
      <DropdownMenuItem onClick={() => handleClick('Item A')}>
        Item A
      </DropdownMenuItem>
      <DropdownMenuItem disabled>
        Disabled Item
      </DropdownMenuItem>
      <DropdownMenuItem href="/settings" target="_self">
        Settings
      </DropdownMenuItem>
      <DropdownMenuItem href="https://example.com" target="_blank" rel="noopener noreferrer">
        External Link
      </DropdownMenuItem>
    </div>
  );
}

export default Example;
```
GRAVITY_TRANSLATION_BLOCK_17_END

| Name         | Beschreibung                                                                                                                            |                      Typ                      | Standardwert |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------: | :----------: |
| `text`       | Inhalt des Menüelements.                                                                                                                |               `React.ReactNode`                |              |
| `action`     | Klick-Handler für Menüelemente. Er erhält Parameter von der übergeordneten Dropdown-Menükomponente (sowohl `event` als auch `data`).      | `(event: React.MouseEvent, data: any) => void` |              |
| `iconStart`  | Symbol des Menüelements vor dem Inhalt.                                                                                                 |               `React.ReactNode`                |              |
| `iconEnd`    | Symbol des Menüelements nach dem Inhalt. Wird ignoriert, wenn das Element ein Untermenü hat.                                            |               `React.ReactNode`                |              |
| `hidden`     | Bestimmt, ob das Element ausgeblendet ist.                                                                                             |                   `boolean`                    |              |
| `disabled`   | Bestimmt, ob das Element deaktiviert ist.                                                                                              |                   `boolean`                    |              |
| `href`       | Ein Menüelement mit dieser Eigenschaft wird zu einem Link zur angegebenen Stelle.                                                       |                    `string`                    |              |
| `target`     | Entspricht dem `target`-Attribut des `<a>`-Tags.                                                                                       |                    `string`                    |              |
| `rel`        | Entspricht dem `rel`-Attribut des `<a>`-Tags.                                                                                          |                    `string`                    |              |
| `extraProps` | Zusätzliche Eigenschaften des Menüelements.                                                                                           |                    `object`                    |              |
| `title`      | Tooltip-Text.                                                                                                                           |                    `string`                    |              |
| `className`  | Wert des `class`-HTML-Attributs.                                                                                                        |                    `string`                    |              |
| `items`      | Untermenüelemente.                                                                                                                      |  `(DropdownMenuItem \| DropdownMenuItem[])[]`  |              |
| `popupProps` | Eigenschaften des Untermenü-Popups.                                                                                                     |                    `string`                    |              |
| `path`       | Pfad der Indizes von der Wurzel bis zum aktuellen Element.                                                                              |                   `number[]`                   |              |
| `closeMenu`  | Benutzerdefinierter `closeMenu`-Callback. Er kann anstelle des Schließens des Hauptmenüs aufgerufen werden und zum Schließen von Untermenüs vor dem Hauptmenü verwendet werden. |                  `() => void`                  |              |

### SwitcherProps

| Name        | Description                                                              |     Type     |
| :---------- | :----------------------------------------------------------------------- | :----------: |
| `onClick`   | Wird aufgerufen, wenn der Schalter angeklickt wird.                       | `() => void` |
| `onKeyDown` | Wird aufgerufen, wenn der Schalter fokussiert ist und eine Aktionstaste gedrückt wird. | `() => void` |