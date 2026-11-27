El componente `DropdownMenu` proporciona agrupación de elementos, submenús y un interruptor personalizable. Los elementos del menú desplegable se configuran con la propiedad `items`. Por defecto, el interruptor del menú es un botón con el icono de puntos suspensivos (**⋯**), que puede ser anulado con la propiedad `renderSwitcher`.

```tsx
import {DropdownMenu} from '@gravity-ui/uikit/legacy';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Elementos agrupados

Los elementos de `DropdownMenu` se pueden agrupar y separar visualmente de otros elementos del menú introduciendo arrays de elementos de menú anidados en el array `items`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Submenús

La propiedad `items` en un elemento de menú individual añade sub-elementos anidados a dicho elemento.

Los elementos de menú con submenús obtienen los siguientes nombres de clase adicionales para permitir un estilo extra:

- `.g-dropdown-menu-legacy__menu-item_with-submenu`: Para elementos con más de un elemento anidado.
- `.g-dropdown-menu-legacy__menu-item_active-parent`: Para el elemento cuyo submenú está actualmente abierto.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Interruptor de menú personalizado

Para configurar el interruptor del menú, utiliza la propiedad `renderSwitcher`. Puede ser cualquier función que devuelva un componente React (o cualquier `(props: SwitcherProps) => React.ReactNode` en términos de TypeScript, consulta [`SwitcherProps`](#switcherprops) a continuación). Por defecto, el interruptor del menú es un botón con el icono de puntos suspensivos (**⋯**).

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

El ejemplo anterior está simplificado en exceso para demostrar la idea del interruptor de menú personalizable. En una aplicación real, generalmente se recomienda que el interruptor de menú clickeable sea un componente accesible con teclado y otras tecnologías de asistencia, como un botón.

## Iconos personalizados

Puedes añadir iconos personalizados a un elemento de `DropdownMenu` utilizando la propiedad `iconStart` o `iconEnd`. Por defecto, los elementos de `DropdownMenu` no llevan iconos.

Puedes cambiar el icono del interruptor del menú con las propiedades `renderSwitcher` de `DropdownMenu`. Por defecto, el interruptor del menú es un botón con el icono de puntos suspensivos (**⋯**).

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Propiedades

| Nombre                       | Descripción                                                                                        |                        Tipo                        |    Por defecto    |
| :------------------------- | :------------------------------------------------------------------------------------------------- | :------------------------------------------------: | :-----------: |
| `items`                    | Array de elementos. Los arrays anidados de elementos representan grupos visualmente separados.                        | `(DropdownMenuItem \| DropdownMenuItem[])[] \| []` |               |
| `data`                     | Una carga útil proporcionada a las acciones llamadas desde el menú. (Esto puede ser útil para menús contextuales).    |                       `any`                        |               |
| `icon`                     | Icono del `switcher` por defecto.                                                                    |                 `React.ReactNode`                  | Icono de puntos suspensivos |
| `size`                     | Aplicado tanto al `switcher` por defecto como al menú.                                               |            `'s' \| 'm' \| 'l' \| 'xl'`             |     `'m'`     |
| `disabled`                 | Establecer esta propiedad en `true` deshabilita el botón `switcher` y evita que se abra el menú. |                     `boolean`                      |               |
| `renderSwitcher`           | Función de renderizado para el control de alternancia del menú.                        |                 `React.ReactNode`                  |               |
| `switcherWrapperClassName` | Valor para la propiedad `className` del componente padre del `switcher`.                           |                      `string`                      |               |
| `defaultSwitcherProps`     | Propiedades por defecto del `switcher`.                                                                     |                   `ButtonProps`                    |               |
| `defaultSwitcherClassName` | Valor para la propiedad `className` del `switcher` por defecto.                                      |                      `string`                      |               |
| `menuProps`                | Anula las propiedades emergentes del menú desplegable por defecto.                                              |                    `MenuProps`                     |               |
| `popupProps`               | Anula las propiedades emergentes por defecto.                                                            |                    `PopupProps`                    |               |
| `open`                     | Activa/desactiva la visibilidad del menú desplegable.                                                                  |                     `boolean`                      |               |
| `onOpenToggle`             | Se llama cuando el menú se abre o se cierra.                                                          |                    `() => void`                    |               |
| `onSwitcherClick`          | Se llama cuando se hace clic en `switcher`.                                                                 |       `React.MouseEventHandler<HTMLElement>`       |               |
| `hideOnScroll`             | Especifica si se debe ocultar el menú cuando se desplaza un elemento padre.                              |                     `boolean`                      |    `true`     |
| `children`                 | Contenido personalizado dentro del popup del menú.                                                              |                 `React.ReactNode`                  |               |

### DropdownMenuItem

Este tipo describe los elementos individuales de un menú desplegable.
GRAVITY_TRANSLATION_BLOCK_1_END
### DropdownMenu

This component renders a menu that can be triggered by a button or other element.
GRAVITY_TRANSLATION_BLOCK_2_END
### DropdownMenu.Item

This component renders an individual dropdown menu item.
GRAVITY_TRANSLATION_BLOCK_3_END
### DropdownMenu.Separator

This component renders a separator between dropdown menu items.
GRAVITY_TRANSLATION_BLOCK_4_END
### DropdownMenu.SubMenu

This component renders a submenu within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_5_END
### DropdownMenu.SubMenuTrigger

This component renders a trigger for a submenu within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_6_END
### DropdownMenu.SubMenuContent

This component renders the content of a submenu within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_7_END
### DropdownMenu.RadioGroup

This component renders a radio group within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_8_END
### DropdownMenu.RadioItem

This component renders a radio item within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_9_END
### DropdownMenu.CheckboxItem

This component renders a checkbox item within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_10_END
### DropdownMenu.Label

This component renders a label within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_11_END
### DropdownMenu.Group

This component renders a group of items within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_12_END
### DropdownMenu.Portal

This component renders the dropdown menu in a portal.
GRAVITY_TRANSLATION_BLOCK_13_END
### DropdownMenu.Trigger

This component renders the trigger for a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_14_END
### DropdownMenu.Content

This component renders the content of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_15_END
### DropdownMenu.Root

This component renders the root of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_16_END
### DropdownMenu.TriggerItem

This component renders a trigger item within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_17_END
### DropdownMenu.Shortcut

This component renders a shortcut within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_18_END
### DropdownMenu.Description

This component renders a description within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_19_END
### DropdownMenu.Icon

This component renders an icon within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_20_END
### DropdownMenu.Checkbox

This component renders a checkbox within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_21_END
### DropdownMenu.Radio

This component renders a radio button within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_22_END
### DropdownMenu.Indicator

This component renders an indicator within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_23_END
### DropdownMenu.ScrollArea

This component renders a scrollable area within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_24_END
### DropdownMenu.Viewport

This component renders the viewport of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_25_END
### DropdownMenu.Arrow

This component renders an arrow within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_26_END
### DropdownMenu.Close

This component renders a close button within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_27_END
### DropdownMenu.Cancel

This component renders a cancel button within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_28_END
### DropdownMenu.ItemIndicator

This component renders an item indicator within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_29_END
### DropdownMenu.Sub

This component renders a submenu within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_30_END
### DropdownMenu.SubTrigger

This component renders a trigger for a submenu within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_31_END
### DropdownMenu.SubContent

This component renders the content of a submenu within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_32_END
### DropdownMenu.SubViewport

This component renders the viewport of a submenu within a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_33_END
### DropdownMenu.SubArrow

This component renders an arrow within a submenu of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_34_END
### DropdownMenu.SubClose

This component renders a close button within a submenu of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_35_END
### DropdownMenu.SubCancel

This component renders a cancel button within a submenu of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_36_END
### DropdownMenu.SubItemIndicator

This component renders an item indicator within a submenu of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_37_END
### DropdownMenu.SubGroup

This component renders a group of items within a submenu of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_38_END
### DropdownMenu.SubLabel

This component renders a label within a submenu of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_39_END
### DropdownMenu.SubCheckbox

This component renders a checkbox within a submenu of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_40_END
### DropdownMenu.SubRadio

This component renders a radio button within a submenu of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_41_END
### DropdownMenu.SubCheckboxItem

This component renders a checkbox item within a submenu of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_42_END
### DropdownMenu.SubRadioItem

This component renders a radio item within a submenu of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_43_END
### DropdownMenu.SubSeparator

This component renders a separator within a submenu of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_44_END
### DropdownMenu.SubShortcut

This component renders a shortcut within a submenu of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_45_END
### DropdownMenu.SubDescription

This component renders a description within a submenu of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_46_END
### DropdownMenu.SubIcon

This component renders an icon within a submenu of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_47_END
### DropdownMenu.SubScrollArea

This component renders a scrollable area within a submenu of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_48_END
### DropdownMenu.SubTriggerItem

This component renders a trigger item within a submenu of a dropdown menu.
GRAVITY_TRANSLATION_BLOCK_49_END
### DropdownMenu.SubPortal

This component renders a submenu within a portal.
GRAVITY_TRANSLATION_BLOCK_50_END
### DropdownMenu.SubContentPortal

This component renders the content of a submenu within a portal.
GRAVITY_TRANSLATION_BLOCK_51_END
### DropdownMenu.SubContentViewport

This component renders the viewport of a submenu within a portal.
GRAVITY_TRANSLATION_BLOCK_52_END
### DropdownMenu.SubContentArrow

This component renders an arrow within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_53_END
### DropdownMenu.SubContentClose

This component renders a close button within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_54_END
### DropdownMenu.SubContentCancel

This component renders a cancel button within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_55_END
### DropdownMenu.SubContentItemIndicator

This component renders an item indicator within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_56_END
### DropdownMenu.SubContentGroup

This component renders a group of items within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_57_END
### DropdownMenu.SubContentLabel

This component renders a label within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_58_END
### DropdownMenu.SubContentCheckbox

This component renders a checkbox within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_59_END
### DropdownMenu.SubContentRadio

This component renders a radio button within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_60_END
### DropdownMenu.SubContentCheckboxItem

This component renders a checkbox item within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_61_END
### DropdownMenu.SubContentRadioItem

This component renders a radio item within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_62_END
### DropdownMenu.SubContentSeparator

This component renders a separator within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_63_END
### DropdownMenu.SubContentShortcut

This component renders a shortcut within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_64_END
### DropdownMenu.SubContentDescription

This component renders a description within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_65_END
### DropdownMenu.SubContentIcon

This component renders an icon within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_66_END
### DropdownMenu.SubContentScrollArea

This component renders a scrollable area within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_67_END
### DropdownMenu.SubContentTriggerItem

This component renders a trigger item within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_68_END
### DropdownMenu.SubContentCloseItem

This component renders a close item within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_69_END
### DropdownMenu.SubContentCancelItem

This component renders a cancel item within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_70_END
### DropdownMenu.SubContentItem

This component renders an item within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_71_END
### DropdownMenu.SubContentSubMenu

This component renders a submenu within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_72_END
### DropdownMenu.SubContentSubTrigger

This component renders a trigger for a submenu within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_73_END
### DropdownMenu.SubContentSubContent

This component renders the content of a submenu within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_74_END
### DropdownMenu.SubContentSubViewport

This component renders the viewport of a submenu within the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_75_END
### DropdownMenu.SubContentSubArrow

This component renders an arrow within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_76_END
### DropdownMenu.SubContentSubClose

This component renders a close button within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_77_END
### DropdownMenu.SubContentSubCancel

This component renders a cancel button within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_78_END
### DropdownMenu.SubContentSubItemIndicator

This component renders an item indicator within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_79_END
### DropdownMenu.SubContentSubGroup

This component renders a group of items within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_80_END
### DropdownMenu.SubContentSubLabel

This component renders a label within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_81_END
### DropdownMenu.SubContentSubCheckbox

This component renders a checkbox within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_82_END
### DropdownMenu.SubContentSubRadio

This component renders a radio button within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_83_END
### DropdownMenu.SubContentSubCheckboxItem

This component renders a checkbox item within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_84_END
### DropdownMenu.SubContentSubRadioItem

This component renders a radio item within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_85_END
### DropdownMenu.SubContentSubSeparator

This component renders a separator within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_86_END
### DropdownMenu.SubContentSubShortcut

This component renders a shortcut within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_87_END
### DropdownMenu.SubContentSubDescription

This component renders a description within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_88_END
### DropdownMenu.SubContentSubIcon

This component renders an icon within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_89_END
### DropdownMenu.SubContentSubScrollArea

This component renders a scrollable area within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_90_END
### DropdownMenu.SubContentSubTriggerItem

This component renders a trigger item within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_91_END
### DropdownMenu.SubContentSubCloseItem

This component renders a close item within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_92_END
### DropdownMenu.SubContentSubCancelItem

This component renders a cancel item within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_93_END
### DropdownMenu.SubContentSubMenuItem

This component renders an item within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_94_END
### DropdownMenu.SubContentSubSubMenu

This component renders a submenu within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_95_END
### DropdownMenu.SubContentSubSubTrigger

This component renders a trigger for a submenu within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_96_END
### DropdownMenu.SubContentSubSubContent

This component renders the content of a submenu within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_97_END
### DropdownMenu.SubContentSubSubViewport

This component renders the viewport of a submenu within a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_98_END
### DropdownMenu.SubContentSubSubArrow

This component renders an arrow within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_99_END
### DropdownMenu.SubContentSubSubClose

This component renders a close button within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_100_END
### DropdownMenu.SubContentSubSubCancel

This component renders a cancel button within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_101_END
### DropdownMenu.SubContentSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_102_END
### DropdownMenu.SubContentSubSubGroup

This component renders a group of items within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_103_END
### DropdownMenu.SubContentSubSubLabel

This component renders a label within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_104_END
### DropdownMenu.SubContentSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_105_END
### DropdownMenu.SubContentSubSubRadio

This component renders a radio button within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_106_END
### DropdownMenu.SubContentSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_107_END
### DropdownMenu.SubContentSubSubRadioItem

This component renders a radio item within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_108_END
### DropdownMenu.SubContentSubSubSeparator

This component renders a separator within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_109_END
### DropdownMenu.SubContentSubSubShortcut

This component renders a shortcut within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_110_END
### DropdownMenu.SubContentSubSubDescription

This component renders a description within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_111_END
### DropdownMenu.SubContentSubSubIcon

This component renders an icon within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_112_END
### DropdownMenu.SubContentSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_113_END
### DropdownMenu.SubContentSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_114_END
### DropdownMenu.SubContentSubSubCloseItem

This component renders a close item within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_115_END
### DropdownMenu.SubContentSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_116_END
### DropdownMenu.SubContentSubSubMenuItem

This component renders an item within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_117_END
### DropdownMenu.SubContentSubSubSubMenu

This component renders a submenu within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_118_END
### DropdownMenu.SubContentSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_119_END
### DropdownMenu.SubContentSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_120_END
### DropdownMenu.SubContentSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_121_END
### DropdownMenu.SubContentSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_122_END
### DropdownMenu.SubContentSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_123_END
### DropdownMenu.SubContentSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_124_END
### DropdownMenu.SubContentSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_125_END
### DropdownMenu.SubContentSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_126_END
### DropdownMenu.SubContentSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_127_END
### DropdownMenu.SubContentSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_128_END
### DropdownMenu.SubContentSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_129_END
### DropdownMenu.SubContentSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_130_END
### DropdownMenu.SubContentSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_131_END
### DropdownMenu.SubContentSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_132_END
### DropdownMenu.SubContentSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_133_END
### DropdownMenu.SubContentSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_134_END
### DropdownMenu.SubContentSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_135_END
### DropdownMenu.SubContentSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_136_END
### DropdownMenu.SubContentSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_137_END
### DropdownMenu.SubContentSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_138_END
### DropdownMenu.SubContentSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_139_END
### DropdownMenu.SubContentSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_140_END
### DropdownMenu.SubContentSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_141_END
### DropdownMenu.SubContentSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_142_END
### DropdownMenu.SubContentSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_143_END
### DropdownMenu.SubContentSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_144_END
### DropdownMenu.SubContentSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_145_END
### DropdownMenu.SubContentSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_146_END
### DropdownMenu.SubContentSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_147_END
### DropdownMenu.SubContentSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_148_END
### DropdownMenu.SubContentSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_149_END
### DropdownMenu.SubContentSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_150_END
### DropdownMenu.SubContentSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_151_END
### DropdownMenu.SubContentSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_152_END
### DropdownMenu.SubContentSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_153_END
### DropdownMenu.SubContentSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_154_END
### DropdownMenu.SubContentSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_155_END
### DropdownMenu.SubContentSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_156_END
### DropdownMenu.SubContentSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_157_END
### DropdownMenu.SubContentSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_158_END
### DropdownMenu.SubContentSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_159_END
### DropdownMenu.SubContentSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_160_END
### DropdownMenu.SubContentSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_161_END
### DropdownMenu.SubContentSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_162_END
### DropdownMenu.SubContentSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_163_END
### DropdownMenu.SubContentSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_164_END
### DropdownMenu.SubContentSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_165_END
### DropdownMenu.SubContentSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_166_END
### DropdownMenu.SubContentSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_167_END
### DropdownMenu.SubContentSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_168_END
### DropdownMenu.SubContentSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_169_END
### DropdownMenu.SubContentSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_170_END
### DropdownMenu.SubContentSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_171_END
### DropdownMenu.SubContentSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_172_END
### DropdownMenu.SubContentSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_173_END
### DropdownMenu.SubContentSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_174_END
### DropdownMenu.SubContentSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_175_END
### DropdownMenu.SubContentSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_176_END
### DropdownMenu.SubContentSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_177_END
### DropdownMenu.SubContentSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_178_END
### DropdownMenu.SubContentSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_179_END
### DropdownMenu.SubContentSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_180_END
### DropdownMenu.SubContentSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_181_END
### DropdownMenu.SubContentSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_182_END
### DropdownMenu.SubContentSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_183_END
### DropdownMenu.SubContentSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_184_END
### DropdownMenu.SubContentSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_185_END
### DropdownMenu.SubContentSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_186_END
### DropdownMenu.SubContentSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_187_END
### DropdownMenu.SubContentSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_188_END
### DropdownMenu.SubContentSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_189_END
### DropdownMenu.SubContentSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_190_END
### DropdownMenu.SubContentSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_191_END
### DropdownMenu.SubContentSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_192_END
### DropdownMenu.SubContentSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_193_END
### DropdownMenu.SubContentSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_194_END
### DropdownMenu.SubContentSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_195_END
### DropdownMenu.SubContentSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_196_END
### DropdownMenu.SubContentSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_197_END
### DropdownMenu.SubContentSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_198_END
### DropdownMenu.SubContentSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_199_END
### DropdownMenu.SubContentSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_200_END
### DropdownMenu.SubContentSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_201_END
### DropdownMenu.SubContentSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_202_END
### DropdownMenu.SubContentSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_203_END
### DropdownMenu.SubContentSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_204_END
### DropdownMenu.SubContentSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_205_END
### DropdownMenu.SubContentSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_206_END
### DropdownMenu.SubContentSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_207_END
### DropdownMenu.SubContentSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_208_END
### DropdownMenu.SubContentSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_209_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_210_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_211_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_212_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_213_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_214_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_215_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_216_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_217_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_218_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_219_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_220_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_221_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_222_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_223_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_224_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_225_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_226_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_227_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_228_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_229_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_230_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_231_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_232_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_233_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_234_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_235_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_236_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_237_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_238_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_239_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_240_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_241_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_242_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_243_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_244_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_245_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_246_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_247_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_248_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_249_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_250_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_251_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_252_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_253_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_254_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_255_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_256_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_257_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_258_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_259_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_260_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_261_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_262_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_263_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_264_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_265_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_266_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_267_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_268_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_269_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_270_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_271_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_272_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_273_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_274_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_275_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_276_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_277_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_278_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_279_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_280_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_281_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_282_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_283_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_284_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_285_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_286_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_287_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_288_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_289_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_290_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_291_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_292_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_293_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_294_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_295_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_296_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_297_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_298_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_299_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_300_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_301_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_302_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_303_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_304_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_305_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_306_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_307_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_308_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_309_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_310_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_311_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_312_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_313_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_314_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_315_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_316_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_317_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_318_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_319_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_320_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_321_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_322_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_323_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_324_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_325_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_326_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_327_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_328_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_329_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_330_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_331_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_332_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_333_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_334_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_335_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_336_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_337_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_338_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_339_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_340_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_341_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_342_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_343_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_344_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_345_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_346_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_347_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_348_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_349_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_350_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_351_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_352_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_353_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_354_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_355_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_356_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_357_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_358_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_359_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_360_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_361_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_362_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_363_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_364_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_365_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_366_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_367_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_368_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_369_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_370_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_371_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_372_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_373_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_374_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_375_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_376_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_377_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_378_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_379_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_380_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_381_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_382_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_383_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_384_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_385_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_386_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_387_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_388_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_389_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_390_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_391_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_392_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_393_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_394_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_395_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_396_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_397_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_398_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_399_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_400_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_401_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_402_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_403_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_404_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_405_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_406_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_407_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_408_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_409_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_410_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_411_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_412_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_413_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_414_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_415_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_416_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_417_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_418_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_419_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_420_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_421_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_422_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_423_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_424_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_425_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_426_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_427_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_428_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_429_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_430_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_431_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_432_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_433_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_434_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_435_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_436_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_437_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_438_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_439_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_440_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_441_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_442_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_443_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_444_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_445_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_446_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_447_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_448_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_449_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_450_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_451_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_452_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_453_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_454_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_455_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_456_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_457_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_458_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_459_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_460_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_461_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_462_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_463_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_464_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_465_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_466_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_467_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_468_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_469_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_470_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_471_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_472_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_473_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_474_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_475_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_476_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_477_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_478_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_479_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_480_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_481_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_482_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_483_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_484_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_485_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_486_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_487_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_488_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_489_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_490_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_491_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_492_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_493_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_494_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_495_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_496_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_497_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_498_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_499_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_500_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_501_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_502_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_503_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_504_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_505_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_506_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_507_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_508_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_509_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_510_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_511_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_512_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_513_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_514_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_515_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_516_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_517_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_518_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_519_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_520_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_521_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_522_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_523_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_524_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_525_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_526_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_527_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_528_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_529_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_530_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_531_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_532_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_533_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_534_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_535_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_536_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_537_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_538_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_539_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_540_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_541_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_542_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_543_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_544_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_545_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_546_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_547_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_548_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_549_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_550_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_551_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_552_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_553_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_554_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_555_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_556_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_557_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_558_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_559_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_560_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_561_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_562_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_563_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_564_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_565_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_566_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_567_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_568_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_569_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_570_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_571_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_572_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_573_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_574_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_575_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_576_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_577_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_578_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_579_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_580_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_581_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_582_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_583_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_584_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_585_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_586_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_587_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_588_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_589_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_590_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_591_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_592_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_593_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_594_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_595_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_596_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_597_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_598_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_599_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_600_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_601_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_602_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_603_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_604_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_605_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_606_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_607_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_608_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_609_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_610_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_611_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_612_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_613_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_614_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_615_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_616_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_617_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_618_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_619_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_620_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_621_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_622_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_623_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_624_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_625_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_626_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_627_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_628_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_629_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_630_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_631_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_632_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_633_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_634_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_635_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_636_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_637_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_638_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_639_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_640_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_641_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_642_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_643_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_644_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_645_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_646_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_647_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_648_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_649_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_650_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_651_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_652_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_653_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_654_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_655_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_656_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_657_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_658_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_659_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_660_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_661_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_662_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_663_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_664_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_665_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_666_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_667_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_668_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_669_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_670_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_671_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_672_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_673_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_674_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_675_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_676_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_677_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_678_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_679_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_680_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_681_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_682_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_683_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_684_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_685_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_686_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_687_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_688_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_689_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_690_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_691_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_692_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_693_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_694_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_695_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_696_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_697_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_698_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_699_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_700_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_701_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_702_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_703_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_704_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_705_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_706_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_707_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_708_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_709_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_710_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_711_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_712_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_713_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_714_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_715_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_716_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_717_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_718_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_719_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_720_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_721_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_722_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_723_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_724_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_725_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_726_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_727_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_728_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_729_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_730_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_731_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_732_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_733_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_734_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_735_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_736_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_737_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_738_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_739_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTrigger

This component renders a trigger for a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_740_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubContent

This component renders the content of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_741_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubViewport

This component renders the viewport of a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_742_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubArrow

This component renders an arrow within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_743_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubClose

This component renders a close button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_744_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancel

This component renders a cancel button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_745_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubItemIndicator

This component renders an item indicator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_746_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubGroup

This component renders a group of items within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_747_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubLabel

This component renders a label within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_748_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckbox

This component renders a checkbox within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_749_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadio

This component renders a radio button within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_750_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCheckboxItem

This component renders a checkbox item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_751_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubRadioItem

This component renders a radio item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_752_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSeparator

This component renders a separator within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_753_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubShortcut

This component renders a shortcut within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_754_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubDescription

This component renders a description within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_755_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubIcon

This component renders an icon within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_756_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubScrollArea

This component renders a scrollable area within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_757_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubTriggerItem

This component renders a trigger item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_758_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCloseItem

This component renders a close item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_759_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubCancelItem

This component renders a cancel item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_760_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenuItem

This component renders an item within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_761_END
### DropdownMenu.SubContentSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubSubMenu

This component renders a submenu within a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of a submenu of the content of a submenu in a portal.
GRAVITY_TRANSLATION_BLOCK_762_END
### DropdownMenu

| Nombre         | Descripción                                                                                                                                                            |                      Tipo                      | Por defecto |
| :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------: | :-------: |
| `text`       | Contenido del elemento del menú.                                                                                                                                       |               `React.ReactNode`                |           |
| `action`     | Manejador de clics del elemento del menú. Recibe los parámetros del componente padre del menú desplegable (tanto `event` como `data`).                               | `(event: React.MouseEvent, data: any) => void` |           |
| `iconStart`  | Icono del elemento del menú antes del contenido del elemento.                                                                                                          |               `React.ReactNode`                |           |
| `iconEnd`    | Icono del elemento del menú después del contenido del elemento. Se ignora si el elemento tiene un submenú.                                                              |               `React.ReactNode`                |           |
| `hidden`     | Determina si el elemento está oculto.                                                                                                                                  |                   `boolean`                    |           |
| `disabled`   | Determina si el elemento está deshabilitado.                                                                                                                           |                   `boolean`                    |           |
| `href`       | El elemento del menú con esta propiedad se convierte en un enlace a la ubicación especificada.                                                                          |                    `string`                    |           |
| `target`     | Igual que el atributo `target` de la etiqueta `<a>`.                                                                                                                   |                    `string`                    |           |
| `rel`        | Igual que el atributo `rel` de la etiqueta `<a>`.                                                                                                                      |                    `string`                    |           |
| `extraProps` | Propiedades adicionales del elemento del menú.                                                                                                                         |                    `object`                    |           |
| `title`      | Texto de la información sobre herramientas (tooltip).                                                                                                                  |                    `string`                    |           |
| `className`  | Valor del atributo `class` de HTML.                                                                                                                                   |                    `string`                    |           |
| `items`      | Elementos del submenú.                                                                                                                                                 |  `(DropdownMenuItem \| DropdownMenuItem[])[]`  |           |
| `popupProps` | Propiedades del popup del submenú.                                                                                                                                     |                    `string`                    |           |
| `path`       | Ruta de los índices desde la raíz hasta el elemento actual.                                                                                                            |                   `number[]`                   |           |
| `closeMenu`  | Callback personalizado `closeMenu`. Se puede llamar en lugar de cerrar el menú principal y se utiliza para cerrar submenús antes del menú principal.                  |                  `() => void`                  |           |

### SwitcherProps

| Nombre        | Descripción                                                              |     Tipo     |
| :------------ | :----------------------------------------------------------------------- | :----------: |
| `onClick`   | Se llama cuando se hace clic en el selector.                           | `() => void` |
| `onKeyDown` | Se llama cuando el selector tiene el foco y se presiona la tecla de acción. | `() => void` |