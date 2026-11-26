El componente `DropdownMenu` proporciona agrupación de elementos, submenús y un alternador personalizable. Los elementos del menú desplegable se configuran con la propiedad `items`. Por defecto, el alternador del menú es un botón con el icono de puntos suspensivos (**⋯**), que puede ser reemplazado con la propiedad `renderSwitcher`.

```tsx
import {DropdownMenu} from '@gravity-ui/uikit';
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

- `.g-dropdown-menu__menu-item_with-submenu`: Para elementos con más de un elemento anidado.
- `.g-dropdown-menu__menu-item_active-parent`: Para el elemento cuyo submenú está actualmente abierto.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Alternador de menú personalizado

Para configurar el alternador del menú, utiliza la propiedad `renderSwitcher`. Puede ser cualquier función que devuelva un componente React (o cualquier `(props: SwitcherProps) => React.ReactNode` en términos de TypeScript, consulta [`SwitcherProps`](#switcherprops) a continuación). Por defecto, el alternador del menú es un botón con el icono de puntos suspensivos (**⋯**).

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

El ejemplo anterior está muy simplificado para demostrar la idea del alternador de menú personalizable. En una aplicación real, generalmente se recomienda que el alternador de menú clicable sea un componente accesible con teclado y otras tecnologías de asistencia, como un botón.

## Iconos personalizados

Puedes añadir iconos personalizados a un elemento de `DropdownMenu` usando la propiedad `iconStart` o `iconEnd`. Por defecto, los elementos de `DropdownMenu` no llevan iconos.

Puedes cambiar el icono del alternador del menú con las propiedades `renderSwitcher` de `DropdownMenu`. Por defecto, el alternador del menú es un botón con el icono de puntos suspensivos (**⋯**).

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

This component renders an individual menu item. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_3_END
### DropdownMenu.Separator

This component renders a separator between menu items. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_4_END
### DropdownMenu.Trigger

This component renders the element that triggers the dropdown menu. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_5_END
### DropdownMenu.Content

This component renders the content of the dropdown menu. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_6_END
### DropdownMenu.Label

This component renders a label for a group of menu items. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_7_END
### DropdownMenu.CheckboxItem

This component renders a menu item with a checkbox. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_8_END
### DropdownMenu.RadioItem

This component renders a menu item with a radio button. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_9_END
### DropdownMenu.Sub

This component renders a nested dropdown menu. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_10_END
### DropdownMenu.SubTrigger

This component renders the trigger for a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub`.
GRAVITY_TRANSLATION_BLOCK_11_END
### DropdownMenu.SubContent

This component renders the content of a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub`.
GRAVITY_TRANSLATION_BLOCK_12_END
### DropdownMenu.Group

This component renders a group of menu items. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_13_END
### DropdownMenu.Portal

This component renders the dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_14_END
### DropdownMenu.RadioGroup

This component renders a group of radio items. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_15_END
### DropdownMenu.Sub.Trigger

This component renders the trigger for a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub`.
GRAVITY_TRANSLATION_BLOCK_16_END
### DropdownMenu.Sub.Content

This component renders the content of a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub`.
GRAVITY_TRANSLATION_BLOCK_17_END
### DropdownMenu.Sub.Group

This component renders a group of menu items within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub`.
GRAVITY_TRANSLATION_BLOCK_18_END
### DropdownMenu.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub`.
GRAVITY_TRANSLATION_BLOCK_19_END
### DropdownMenu.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub`.
GRAVITY_TRANSLATION_BLOCK_20_END
### DropdownMenu.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub`.
GRAVITY_TRANSLATION_BLOCK_21_END
### DropdownMenu.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub`.
GRAVITY_TRANSLATION_BLOCK_22_END
### DropdownMenu.Sub.Item

This component renders an individual menu item within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub`.
GRAVITY_TRANSLATION_BLOCK_23_END
### DropdownMenu.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_24_END
### DropdownMenu.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub`.
GRAVITY_TRANSLATION_BLOCK_25_END
### DropdownMenu.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub`.
GRAVITY_TRANSLATION_BLOCK_26_END
### DropdownMenu.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_27_END
### DropdownMenu.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_28_END
### DropdownMenu.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_29_END
### DropdownMenu.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_30_END
### DropdownMenu.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_31_END
### DropdownMenu.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_32_END
### DropdownMenu.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_33_END
### DropdownMenu.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_34_END
### DropdownMenu.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_35_END
### DropdownMenu.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_36_END
### DropdownMenu.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_37_END
### DropdownMenu.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_38_END
### DropdownMenu.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_39_END
### DropdownMenu.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_40_END
### DropdownMenu.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_41_END
### DropdownMenu.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_42_END
### DropdownMenu.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_43_END
### DropdownMenu.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_44_END
### DropdownMenu.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_45_END
### DropdownMenu.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_46_END
### DropdownMenu.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_47_END
### DropdownMenu.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_48_END
### DropdownMenu.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_49_END
### DropdownMenu.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_50_END
### DropdownMenu.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_51_END
### DropdownMenu.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_52_END
### DropdownMenu.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_53_END
### DropdownMenu.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_54_END
### DropdownMenu.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_55_END
### DropdownMenu.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_56_END
### DropdownMenu.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_57_END
### DropdownMenu.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_58_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_59_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_60_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_61_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_62_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_63_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_64_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_65_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_66_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_67_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_68_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_69_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_70_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_71_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_72_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_73_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_74_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_75_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_76_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_77_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_78_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_79_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_80_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_81_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_82_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_83_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_84_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_85_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_86_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_87_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_88_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_89_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_90_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_91_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_92_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_93_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_94_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_95_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_96_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_97_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_98_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_99_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_100_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_101_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_102_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_103_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_104_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_105_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_106_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_107_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_108_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_109_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_110_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_111_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_112_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_113_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_114_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_115_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_116_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_117_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_118_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_119_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_120_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_121_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_122_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_123_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_124_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_125_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_126_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_127_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_128_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_129_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_130_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_131_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_132_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_133_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_134_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_135_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_136_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_137_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_138_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_139_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_140_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_141_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_142_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_143_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_144_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_145_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_146_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_147_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_148_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_149_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_150_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_151_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_152_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_153_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_154_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_155_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_156_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_157_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_158_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_159_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_160_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_161_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_162_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_163_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_164_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_165_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_166_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_167_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_168_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_169_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_170_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_171_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_172_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_173_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_174_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_175_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_176_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_177_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_178_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_179_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_180_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_181_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_182_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_183_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_184_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_185_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_186_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_187_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_188_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_189_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_190_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_191_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_192_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_193_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_194_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_195_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_196_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_197_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_198_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_199_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_200_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_201_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_202_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_203_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_204_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_205_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_206_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_207_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_208_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_209_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_210_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_211_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_212_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_213_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_214_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_215_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_216_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_217_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_218_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_219_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_220_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_221_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_222_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_223_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_224_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_225_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_226_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_227_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_228_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_229_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_230_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_231_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_232_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_233_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_234_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_235_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_236_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_237_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_238_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_239_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_240_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_241_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_242_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_243_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_244_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_245_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_246_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_247_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_248_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_249_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_250_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_251_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_252_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_253_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_254_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_255_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_256_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_257_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_258_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_259_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_260_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_261_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_262_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_263_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_264_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_265_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_266_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_267_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_268_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_269_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_270_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_271_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_272_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_273_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_274_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_275_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_276_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_277_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_278_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_279_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_280_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_281_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_282_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_283_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_284_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_285_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_286_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_287_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_288_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_289_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_290_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_291_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_292_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_293_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_294_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_295_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_296_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_297_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_298_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_299_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_300_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_301_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_302_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_303_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_304_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_305_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_306_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_307_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_308_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_309_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_310_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_311_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_312_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_313_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_314_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_315_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_316_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_317_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_318_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_319_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_320_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_321_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_322_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_323_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_324_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_325_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_326_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_327_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_328_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_329_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_330_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_331_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_332_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_333_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_334_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_335_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_336_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_337_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_338_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_339_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_340_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_341_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_342_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_343_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_344_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_345_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_346_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_347_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_348_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_349_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_350_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_351_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_352_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_353_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_354_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_355_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_356_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_357_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_358_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_359_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_360_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.CheckboxItem

This component renders a menu item with a checkbox within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_361_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioItem

This component renders a menu item with a radio button within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_362_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Separator

This component renders a separator between menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_363_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Item

This component renders an individual menu item within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_364_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Portal

This component renders the nested dropdown menu content in a portal. This is useful for positioning the menu outside of its parent element.
GRAVITY_TRANSLATION_BLOCK_365_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.RadioGroup

This component renders a group of radio items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_366_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub

This component renders a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_367_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Trigger

This component renders the trigger for a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_368_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Content

This component renders the content of a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_369_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Group

This component renders a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu. It should be used as a child of `DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub`.
GRAVITY_TRANSLATION_BLOCK_370_END
### DropdownMenu.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Sub.Label

This component renders a label for a group of menu items within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within a nested dropdown menu within

| Nombre         | Descripción                                                                                                                                                           |                      Tipo                      | Por defecto |
| :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------: | :-------: |
| `text`       | Contenido del elemento del menú.                                                                                                                                      |               `React.ReactNode`                |           |
| `action`     | Manejador de clics del elemento del menú. Recibe los parámetros del componente padre del menú desplegable (tanto `event` como `data`).                               | `(event: React.MouseEvent, data: any) => void` |           |
| `iconStart`  | Icono del elemento del menú antes del contenido del elemento.                                                                                                         |               `React.ReactNode`                |           |
| `iconEnd`    | Icono del elemento del menú después del contenido del elemento. Se ignora si el elemento tiene un submenú.                                                             |               `React.ReactNode`                |           |
| `hidden`     | Determina si el elemento está oculto.                                                                                                                                 |                   `boolean`                    |           |
| `disabled`   | Determina si el elemento está deshabilitado.                                                                                                                         |                   `boolean`                    |           |
| `href`       | El elemento del menú con esta propiedad se convierte en un enlace a la ubicación especificada.                                                                         |                    `string`                    |           |
| `target`     | Igual que el atributo `target` de la etiqueta `<a>`.                                                                                                                  |                    `string`                    |           |
| `rel`        | Igual que el atributo `rel` de la etiqueta `<a>`.                                                                                                                     |                    `string`                    |           |
| `extraProps` | Propiedades adicionales del elemento del menú.                                                                                                                        |                    `object`                    |           |
| `title`      | Texto de la información sobre herramientas (tooltip).                                                                                                                 |                    `string`                    |           |
| `className`  | Valor del atributo `class` de HTML.                                                                                                                                  |                    `string`                    |           |
| `items`      | Elementos del submenú.                                                                                                                                                |  `(DropdownMenuItem \| DropdownMenuItem[])[]`  |           |
| `popupProps` | Propiedades del popup del submenú.                                                                                                                                    |                    `string`                    |           |
| `path`       | Ruta de los índices desde la raíz hasta el elemento actual.                                                                                                           |                   `number[]`                   |           |
| `closeMenu`  | Callback personalizado `closeMenu`. Se puede llamar en lugar de cerrar el menú principal y se utiliza para cerrar submenús antes del menú principal.                 |                  `() => void`                  |           |

### SwitcherProps

| Nombre        | Descripción                                                              |     Tipo     |
| :------------ | :----------------------------------------------------------------------- | :----------: |
| `onClick`   | Se llama cuando se hace clic en el selector.                           | `() => void` |
| `onKeyDown` | Se llama cuando el selector tiene el foco y se presiona la tecla de acción. | `() => void` |