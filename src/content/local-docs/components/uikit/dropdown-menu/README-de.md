Die Dropdown-Menü-Komponente bietet Gruppierung von Elementen, Untermenüs und einen anpassbaren Schalter. Die Dropdown-Menü-Elemente werden mit der `items`-Eigenschaft konfiguriert. Standardmäßig ist der Menüschalter ein Button mit dem Ellipsen-Symbol (**⋯**), der mit der `renderSwitcher`-Eigenschaft überschrieben werden kann.

```tsx
import {DropdownMenu} from '@gravity-ui/uikit/legacy';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Gruppierte Elemente

`DropdownMenu`-Elemente können gruppiert und visuell von anderen Menüelementen getrennt werden, indem Arrays von Menüelementen in das `items`-Array verschachtelt werden.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Untermenüs

Die `items`-Eigenschaft eines einzelnen Menüelements fügt verschachtelte Unterelemente zu diesem Element hinzu.

Menüelemente mit Untermenüs erhalten die folgenden zusätzlichen Klassennamen, um zusätzliche Stile zu ermöglichen:

- `.g-dropdown-menu-legacy__menu-item_with-submenu`: Für Elemente mit mehr als einem verschachtelten Element.
- `.g-dropdown-menu-legacy__menu-item_active-parent`: Für das Element, dessen Untermenü gerade geöffnet ist.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Benutzerdefinierter Menüschalter

Um den Menüschalter zu konfigurieren, verwenden Sie die `renderSwitcher`-Eigenschaft. Dies kann jede Funktion sein, die eine React-Komponente zurückgibt (oder im TypeScript-Sinne `(props: SwitcherProps) => React.ReactNode`, siehe [`SwitcherProps`](#switcherprops) unten). Standardmäßig ist der Menüschalter ein Button mit dem Ellipsen-Symbol (**⋯**).

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

Das obige Beispiel ist stark vereinfacht, um die Idee eines anpassbaren Menüschalters zu demonstrieren. In einer realen Anwendung wird generell empfohlen, dass der klickbare Menüschalter eine Komponente ist, die mit der Tastatur und anderen assistiven Technologien zugänglich ist, wie z. B. ein Button.

## Benutzerdefinierte Symbole

Sie können einem `DropdownMenu`-Element benutzerdefinierte Symbole mit der `iconStart`- oder `iconEnd`-Eigenschaft hinzufügen. Standardmäßig werden die `DropdownMenu`-Elemente ohne Symbole geliefert.

Sie können das Symbol des Menüschalters mit den `renderSwitcher`-Eigenschaften des `DropdownMenu` ändern. Standardmäßig ist der Menüschalter ein Button mit dem Ellipsen-Symbol (**⋯**).

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Eigenschaften

| Name                       | Beschreibung                                                                                                   |                        Typ                        |    Standard    |
| :------------------------- | :------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------: | :------------: |
| `items`                    | Array von Elementen. Verschachtelte Arrays von Elementen stellen visuell getrennte Gruppen dar.              | `(DropdownMenuItem \| DropdownMenuItem[])[] \| []` |                |
| `data`                     | Eine Nutzlast, die an die Aktionen übergeben wird, die vom Menü aus aufgerufen werden. (Dies kann für Kontextmenüs nützlich sein.) |                       `any`                       |                |
| `icon`                     | Symbol des Standard-`switcher`.                                                                                |                 `React.ReactNode`                 | Ellipsis-Symbol |
| `size`                     | Gilt sowohl für den Standard-`switcher` als auch für das Menü.                                                 |            `'s' \| 'm' \| 'l' \| 'xl'`            |     `'m'`     |
| `disabled`                 | Wenn diese Eigenschaft auf `true` gesetzt ist, wird die `switcher`-Schaltfläche deaktiviert und das Menü kann nicht geöffnet werden. |                     `boolean`                     |                |
| `renderSwitcher`           | Renderfunktion für die Menü-Umschaltsteuerung.                                                                 |                 `React.ReactNode`                 |                |
| `switcherWrapperClassName` | Wert für die `className`-Eigenschaft der übergeordneten Komponente des `switcher`.                             |                      `string`                      |                |
| `defaultSwitcherProps`     | Standard-`switcher`-Eigenschaften.                                                                             |                   `ButtonProps`                   |                |
| `defaultSwitcherClassName` | Wert für die `className`-Eigenschaft des Standard-`switcher`.                                                  |                      `string`                      |                |
| `menuProps`                | Überschreibt die Standardeigenschaften des Dropdown-Menü-Popups.                                               |                    `MenuProps`                    |                |
| `popupProps`               | Überschreibt die Standard-Popup-Eigenschaften.                                                                 |                    `PopupProps`                    |                |
| `open`                     | Schaltet die Sichtbarkeit des Dropdown-Menüs um.                                                               |                     `boolean`                     |                |
| `onOpenToggle`             | Wird aufgerufen, wenn das Menü geöffnet oder geschlossen wird.                                                 |                    `() => void`                    |                |
| `onSwitcherClick`          | Wird aufgerufen, wenn der `switcher` angeklickt wird.                                                          |       `React.MouseEventHandler<HTMLElement>`       |                |
| `hideOnScroll`             | Gibt an, ob das Menü beim Scrollen eines übergeordneten Elements ausgeblendet werden soll.                   |                     `boolean`                     |     `true`     |
| `children`                 | Benutzerdefinierter Inhalt im Menü-Popup.                                                                     |                 `React.ReactNode`                 |                |

### DropdownMenuItem

Dieser Typ beschreibt einzelne Dropdown-Menüelemente.
GRAVITY_TRANSLATION_BLOCK_1_END
### DropdownMenu

This component renders a menu that can be triggered by a button or other element.

It is a wrapper around the [Radix UI DropdownMenu](https://www.radix-ui.com/primitives/docs/components/dropdown-menu) component.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the dropdown menu. This can be a `DropdownMenuTrigger` and `DropdownMenuItem`s. |
| `modal` | `boolean` | `false` | When `true`, the dropdown menu will be a modal. This means that the rest of the UI will be inert until the dropdown menu is dismissed. |
| `open` | `boolean` | - | The open state of the dropdown menu. |
| `onOpenChange` | `(open: boolean) => void` | - | Callback fired when the open state of the dropdown menu changes. |
| `dir` | `'ltr' | 'rtl'` | - | The text direction of the dropdown menu. |
| `closeOnEscapeKeyDown` | `boolean` | `true` | Whether to close the dropdown menu when the escape key is pressed. |
| `closeOnOutsideClick` | `boolean` | `true` | Whether to close the dropdown menu when the user clicks outside of it. |
| `onCloseAutoFocus` | `(event: Event) => void` | - | Callback fired when the dropdown menu is closed and the focus moves to the element that triggered the dropdown menu. |
| `onOpenAutoFocus` | `(event: Event) => void` | - | Callback fired when the dropdown menu is opened and the focus moves to the dropdown menu. |
| `onDismiss` | `() => void` | - | Callback fired when the dropdown menu is dismissed. |

#### Usage

```jsx
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from '@your-ui-library/dropdown-menu';

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuItem onSelect={() => alert('Selected item 1')}>Item 1</DropdownMenuItem>
      <DropdownMenuItem onSelect={() => alert('Selected item 2')}>Item 2</DropdownMenuItem>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_2_END
### DropdownMenuTrigger

This component is used to trigger the dropdown menu. It can be any clickable element.

It is a wrapper around the [Radix UI DropdownMenu.Trigger](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#trigger) component.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the dropdown menu trigger. |
| `asChild` | `boolean` | `false` | When `true`, the trigger will be rendered as a child of the element it wraps. This is useful for composing components. |

#### Usage

```jsx
import { DropdownMenu, DropdownMenuTrigger } from '@your-ui-library/dropdown-menu';

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Click me</DropdownMenuTrigger>
      {/* ... */}
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_3_END
### DropdownMenuItem

This component represents an individual item within a dropdown menu.

It is a wrapper around the [Radix UI DropdownMenu.Item](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item) component.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the dropdown menu item. |
| `disabled` | `boolean` | `false` | Whether the dropdown menu item is disabled. |
| `onSelect` | `(event: Event) => void` | - | Callback fired when the dropdown menu item is selected. |
| `asChild` | `boolean` | `false` | When `true`, the item will be rendered as a child of the element it wraps. This is useful for composing components. |

#### Usage

```jsx
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from '@your-ui-library/dropdown-menu';

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuItem onSelect={() => alert('Action 1')}>Action 1</DropdownMenuItem>
      <DropdownMenuItem disabled onSelect={() => alert('Action 2')}>Disabled Action</DropdownMenuItem>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_4_END
### DropdownMenuSeparator

This component renders a separator between dropdown menu items.

It is a wrapper around the [Radix UI DropdownMenu.Separator](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#separator) component.

#### Props

This component does not accept any props.

#### Usage

```jsx
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@your-ui-library/dropdown-menu';

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuItem onSelect={() => alert('Action 1')}>Action 1</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onSelect={() => alert('Action 2')}>Action 2</DropdownMenuItem>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_5_END
### DropdownMenuLabel

This component renders a label for a group of dropdown menu items.

It is a wrapper around the [Radix UI DropdownMenu.Label](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#label) component.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the dropdown menu label. |
| `asChild` | `boolean` | `false` | When `true`, the label will be rendered as a child of the element it wraps. This is useful for composing components. |

#### Usage

```jsx
import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@your-ui-library/dropdown-menu';

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuLabel>My Label</DropdownMenuLabel>
      <DropdownMenuItem onSelect={() => alert('Action 1')}>Action 1</DropdownMenuItem>
      <DropdownMenuItem onSelect={() => alert('Action 2')}>Action 2</DropdownMenuItem>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_6_END
### DropdownMenuGroup

This component groups multiple dropdown menu items together.

It is a wrapper around the [Radix UI DropdownMenu.Group](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#group) component.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the dropdown menu group. This should be `DropdownMenuItem`s. |
| `asChild` | `boolean` | `false` | When `true`, the group will be rendered as a child of the element it wraps. This is useful for composing components. |

#### Usage

```jsx
import { DropdownMenu, DropdownMenuItem, DropdownMenuGroup, DropdownMenuTrigger } from '@your-ui-library/dropdown-menu';

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuGroup>
        <DropdownMenuItem onSelect={() => alert('Action 1')}>Action 1</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => alert('Action 2')}>Action 2</DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_7_END
### DropdownMenuRadioGroup

This component groups multiple radio button-like dropdown menu items together.

It is a wrapper around the [Radix UI DropdownMenu.RadioGroup](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#radiogroup) component.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the dropdown menu radio group. This should be `DropdownMenuRadioItem`s. |
| `value` | `string` | - | The currently selected value in the radio group. |
| `onValueChange` | `(value: string) => void` | - | Callback fired when the selected value changes. |
| `asChild` | `boolean` | `false` | When `true`, the radio group will be rendered as a child of the element it wraps. This is useful for composing components. |

#### Usage

```jsx
import { DropdownMenu, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@your-ui-library/dropdown-menu';

function MyDropdownMenu() {
  const [value, setValue] = React.useState('item1');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
        <DropdownMenuRadioItem value="item1">Item 1</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="item2">Item 2</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_8_END
### DropdownMenuRadioItem

This component represents an individual radio button-like item within a dropdown menu radio group.

It is a wrapper around the [Radix UI DropdownMenu.RadioItem](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#radioitem) component.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the dropdown menu radio item. |
| `value` | `string` | - | The value of the radio item. |
| `disabled` | `boolean` | `false` | Whether the dropdown menu radio item is disabled. |
| `asChild` | `boolean` | `false` | When `true`, the radio item will be rendered as a child of the element it wraps. This is useful for composing components. |

#### Usage

```jsx
import { DropdownMenu, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@your-ui-library/dropdown-menu';

function MyDropdownMenu() {
  const [value, setValue] = React.useState('item1');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
        <DropdownMenuRadioItem value="item1">Item 1</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="item2">Item 2</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_9_END
### DropdownMenuCheckboxItem

This component represents an individual checkbox-like item within a dropdown menu.

It is a wrapper around the [Radix UI DropdownMenu.CheckboxItem](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#checkboxitem) component.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the dropdown menu checkbox item. |
| `checked` | `boolean` | - | Whether the checkbox is checked. |
| `onCheckedChange` | `(checked: boolean) => void` | - | Callback fired when the checked state changes. |
| `disabled` | `boolean` | `false` | Whether the dropdown menu checkbox item is disabled. |
| `asChild` | `boolean` | `false` | When `true`, the checkbox item will be rendered as a child of the element it wraps. This is useful for composing components. |

#### Usage

```jsx
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuTrigger } from '@your-ui-library/dropdown-menu';

function MyDropdownMenu() {
  const [checked, setChecked] = React.useState(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuCheckboxItem checked={checked} onCheckedChange={setChecked}>
        Option
      </DropdownMenuCheckboxItem>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_10_END
### DropdownMenuContent

This component renders the content of the dropdown menu.

It is a wrapper around the [Radix UI DropdownMenu.Content](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#content) component.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the dropdown menu. This should be `DropdownMenuItem`s, `DropdownMenuSeparator`s, etc. |
| `side` | `'top' | 'right' | 'bottom' | 'left'` | `'bottom'` | The side of the trigger element to render the dropdown menu content on. |
| `sideOffset` | `number` | `0` | The offset along the side of the trigger element. |
| `align` | `'start' | 'center' | 'end'` | `'start'` | The alignment of the dropdown menu content with the trigger element. |
| `alignOffset` | `number` | `0` | The offset along the alignment axis. |
| `avoidCollisions` | `boolean` | `true` | Whether to avoid collisions with the viewport edges. |
| `collisionBoundary` | `Element | null` | `null` | The boundary element to use for collision detection. |
| `collisionPadding` | `number | Record<'top' | 'right' | 'bottom' | 'left', number>` | `0` | The padding to use for collision detection. |
| `arrowOffset` | `number` | `0` | The offset of the arrow. |
| `sticky` | `'normal' | 'always'` | `'normal'` | Whether the dropdown menu content should be sticky. |
| `hideWhenDetached` | `boolean` | `false` | Whether to hide the dropdown menu content when it is detached from the trigger element. |
| `onPlaced` | `() => void` | - | Callback fired when the dropdown menu content is placed. |
| `asChild` | `boolean` | `false` | When `true`, the content will be rendered as a child of the element it wraps. This is useful for composing components. |

#### Usage

```jsx
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from '@your-ui-library/dropdown-menu';

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={() => alert('Action 1')}>Action 1</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => alert('Action 2')}>Action 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_11_END
### DropdownMenuArrow

This component renders an arrow that points from the dropdown menu content to the trigger element.

It is a wrapper around the [Radix UI DropdownMenu.Arrow](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#arrow) component.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `width` | `number` | `10` | The width of the arrow. |
| `height` | `number` | `10` | The height of the arrow. |
| `offsetX` | `number` | `0` | The offset of the arrow along the x-axis. |
| `offsetY` | `number` | `0` | The offset of the arrow along the y-axis. |
| `asChild` | `boolean` | `false` | When `true`, the arrow will be rendered as a child of the element it wraps. This is useful for composing components. |

#### Usage

```jsx
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuArrow } from '@your-ui-library/dropdown-menu';

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={() => alert('Action 1')}>Action 1</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => alert('Action 2')}>Action 2</DropdownMenuItem>
        <DropdownMenuArrow />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_12_END
### DropdownMenuSub

This component is used to create nested dropdown menus.

It is a wrapper around the [Radix UI DropdownMenu.Sub](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#sub) component.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the nested dropdown menu. This should be a `DropdownMenuSubTrigger` and a `DropdownMenuSubContent`. |
| `open` | `boolean` | - | The open state of the nested dropdown menu. |
| `onOpenChange` | `(open: boolean) => void` | - | Callback fired when the open state of the nested dropdown menu changes. |

#### Usage

```jsx
import { DropdownMenu, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuItem, DropdownMenuTrigger } from '@your-ui-library/dropdown-menu';

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Sub Menu</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem onSelect={() => alert('Sub Action 1')}>Sub Action 1</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => alert('Sub Action 2')}>Sub Action 2</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_13_END
### DropdownMenuSubTrigger

This component is used to trigger a nested dropdown menu.

It is a wrapper around the [Radix UI DropdownMenu.SubTrigger](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#subtrigger) component.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the sub menu trigger. |
| `asChild` | `boolean` | `false` | When `true`, the trigger will be rendered as a child of the element it wraps. This is useful for composing components. |

#### Usage

```jsx
import { DropdownMenu, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuItem, DropdownMenuTrigger } from '@your-ui-library/dropdown-menu';

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Sub Menu</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem onSelect={() => alert('Sub Action 1')}>Sub Action 1</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => alert('Sub Action 2')}>Sub Action 2</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_14_END
### DropdownMenuSubContent

This component renders the content of a nested dropdown menu.

It is a wrapper around the [Radix UI DropdownMenu.SubContent](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#subcontent) component.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the sub menu. This should be `DropdownMenuItem`s, `DropdownMenuSeparator`s, etc. |
| `side` | `'top' | 'right' | 'bottom' | 'left'` | `'right'` | The side of the trigger element to render the sub menu content on. |
| `sideOffset` | `number` | `0` | The offset along the side of the trigger element. |
| `align` | `'start' | 'center' | 'end'` | `'start'` | The alignment of the sub menu content with the trigger element. |
| `alignOffset` | `number` | `0` | The offset along the alignment axis. |
| `avoidCollisions` | `boolean` | `true` | Whether to avoid collisions with the viewport edges. |
| `collisionBoundary` | `Element | null` | `null` | The boundary element to use for collision detection. |
| `collisionPadding` | `number | Record<'top' | 'right' | 'bottom' | 'left', number>` | `0` | The padding to use for collision detection. |
| `arrowOffset` | `number` | `0` | The offset of the arrow. |
| `sticky` | `'normal' | 'always'` | `'normal'` | Whether the sub menu content should be sticky. |
| `hideWhenDetached` | `boolean` | `false` | Whether to hide the sub menu content when it is detached from the trigger element. |
| `onPlaced` | `() => void` | - | Callback fired when the sub menu content is placed. |
| `asChild` | `boolean` | `false` | When `true`, the content will be rendered as a child of the element it wraps. This is useful for composing components. |

#### Usage

```jsx
import { DropdownMenu, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuItem, DropdownMenuTrigger } from '@your-ui-library/dropdown-menu';

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Sub Menu</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem onSelect={() => alert('Sub Action 1')}>Sub Action 1</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => alert('Sub Action 2')}>Sub Action 2</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_15_END
### DropdownMenuPortal

This component renders the dropdown menu content in a portal. This is useful for preventing the dropdown menu from being clipped by its parent elements.

It is a wrapper around the [Radix UI DropdownMenu.Portal](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#portal) component.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the portal. This should be the `DropdownMenuContent` and any other elements that should be rendered in the portal. |
| `container` | `HTMLElement | React.MutableRefObject<HTMLElement> | null` | - | The container element to render the portal into. If not provided, the portal will be rendered into the default container (usually the document body). |

#### Usage

```jsx
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuPortal } from '@your-ui-library/dropdown-menu';

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => alert('Action 1')}>Action 1</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => alert('Action 2')}>Action 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_16_END
### DropdownMenuScrollArea

This component renders a scrollable area within the dropdown menu content. This is useful for menus with many items.

It is a wrapper around the [Radix UI DropdownMenu.ScrollArea](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#scrollarea) component.

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the scrollable area. |
| `asChild` | `boolean` | `false` | When `true`, the scroll area will be rendered as a child of the element it wraps. This is useful for composing components. |

#### Usage

```jsx
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuScrollArea } from '@your-ui-library/dropdown-menu';

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuScrollArea>
          <DropdownMenuItem onSelect={() => alert('Action 1')}>Action 1</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => alert('Action 2')}>Action 2</DropdownMenuItem>
          {/* ... more items */}
        </DropdownMenuScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_17_END

| Name         | Beschreibung                                                                                                                            |                      Typ                      | Standardwert |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------: | :----------: |
| `text`       | Inhalt des Menüelements.                                                                                                                |               `React.ReactNode`                |              |
| `action`     | Klick-Handler für Menüelemente. Er erhält Parameter von der übergeordneten Dropdown-Menükomponente (sowohl `event` als auch `data`).      | `(event: React.MouseEvent, data: any) => void` |              |
| `iconStart`  | Symbol des Menüelements vor dem Inhalt.                                                                                                 |               `React.ReactNode`                |              |
| `iconEnd`    | Symbol des Menüelements nach dem Inhalt. Wird ignoriert, wenn das Element ein Untermenü hat.                                            |               `React.ReactNode`                |              |
| `hidden`     | Bestimmt, ob das Element ausgeblendet wird.                                                                                            |                   `boolean`                    |              |
| `disabled`   | Bestimmt, ob das Element deaktiviert ist.                                                                                              |                   `boolean`                    |              |
| `href`       | Ein Menüelement mit dieser Eigenschaft wird zu einem Link zur angegebenen Stelle.                                                       |                    `string`                    |              |
| `target`     | Gleicht dem `target`-Attribut des `<a>`-Tags.                                                                                           |                    `string`                    |              |
| `rel`        | Gleicht dem `rel`-Attribut des `<a>`-Tags.                                                                                              |                    `string`                    |              |
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