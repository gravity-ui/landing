Le composant `DropdownMenu` permet de regrouper des éléments, d'avoir des sous-menus et un sélecteur personnalisable. Les éléments du menu déroulant sont configurés avec la propriété `items`. Par défaut, le sélecteur du menu est un bouton avec l'icône d'ellipse (**⋯**), qui peut être remplacé par la propriété `renderSwitcher`.

```tsx
import {DropdownMenu} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Éléments groupés

Les éléments du `DropdownMenu` peuvent être groupés et séparés visuellement des autres éléments du menu en introduisant des tableaux d'éléments de menu imbriqués dans le tableau `items`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Sous-menus

La propriété `items` d'un élément de menu individuel ajoute des sous-éléments imbriqués à cet élément.

Les éléments de menu avec des sous-menus obtiennent les classes CSS supplémentaires suivantes pour permettre un style supplémentaire :

- `.g-dropdown-menu__menu-item_with-submenu` : Pour les éléments comportant plus d'un élément imbriqué.
- `.g-dropdown-menu__menu-item_active-parent` : Pour l'élément dont le sous-menu est actuellement ouvert.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Sélecteur de menu personnalisé

Pour configurer le sélecteur du menu, utilisez la propriété `renderSwitcher`. Il peut s'agir de n'importe quelle fonction qui renvoie un composant React (ou tout `(props: SwitcherProps) => React.ReactNode` en termes TypeScript, voir [`SwitcherProps`](#switcherprops) ci-dessous). Par défaut, le sélecteur du menu est un bouton avec l'icône d'ellipse (**⋯**).

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

L'exemple ci-dessus est très simplifié pour démontrer l'idée d'un sélecteur de menu personnalisable. Dans une application réelle, il est généralement recommandé que le sélecteur de menu cliquable soit un composant accessible avec un clavier et d'autres technologies d'assistance, tel qu'un bouton.

## Icônes personnalisées

Vous pouvez ajouter des icônes personnalisées à un élément `DropdownMenu` en utilisant la propriété `iconStart` ou `iconEnd`. Par défaut, les éléments `DropdownMenu` n'ont pas d'icônes.

Vous pouvez changer l'icône du sélecteur de menu avec les propriétés `renderSwitcher` du `DropdownMenu`. Par défaut, le sélecteur du menu est un bouton avec l'icône d'ellipse (**⋯**).

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Propriétés

| Nom                       | Description                                                                                             |                        Type                        |    Défaut    |
| :------------------------- | :------------------------------------------------------------------------------------------------------ | :------------------------------------------------: | :----------: |
| `items`                    | Tableau d'éléments. Les tableaux imbriqués d'éléments représentent des groupes visuellement séparés. | `(DropdownMenuItem \| DropdownMenuItem[])[] \| []` |              |
| `data`                     | Une charge utile fournie aux actions appelées depuis le menu. (Cela peut être utile pour les menus contextuels.) |                       `any`                        |              |
| `icon`                     | Icône du `switcher` par défaut.                                                                         |                 `React.ReactNode`                  | Icône Ellipsis |
| `size`                     | Appliqué au `switcher` par défaut et au menu.                                                           |            `'s' \| 'm' \| 'l' \| 'xl'`             |     `'m'`     |
| `disabled`                 | Définir cette propriété sur `true` désactive le bouton `switcher` et empêche l'ouverture du menu.       |                     `boolean`                      |              |
| `renderSwitcher`           | Fonction de rendu pour le contrôle de bascule du menu.                                                  |                 `React.ReactNode`                  |              |
| `switcherWrapperClassName` | Valeur de la propriété `className` du composant parent du `switcher`.                                   |                      `string`                      |              |
| `defaultSwitcherProps`     | Propriétés `switcher` par défaut.                                                                       |                   `ButtonProps`                    |              |
| `defaultSwitcherClassName` | Valeur de la propriété `className` du `switcher` par défaut.                                            |                      `string`                      |              |
| `menuProps`                | Remplace les propriétés par défaut de la fenêtre contextuelle du menu déroulant.                        |                    `MenuProps`                     |              |
| `popupProps`               | Remplace les propriétés par défaut de la fenêtre contextuelle.                                         |                    `PopupProps`                    |              |
| `open`                     | Bascule la visibilité du menu déroulant.                                                                |                     `boolean`                      |              |
| `onOpenToggle`             | Appelée lorsque le menu est ouvert ou fermé.                                                            |                    `() => void`                    |              |
| `onSwitcherClick`          | Appelée lorsque le `switcher` est cliqué.                                                              |       `React.MouseEventHandler<HTMLElement>`       |              |
| `hideOnScroll`             | Spécifie si le menu doit être masqué lorsqu'un élément parent défile.                                   |                     `boolean`                      |    `true`    |
| `children`                 | Contenu personnalisé à l'intérieur de la fenêtre contextuelle du menu.                                  |                 `React.ReactNode`                  |              |

### DropdownMenuItem

Ce type décrit les éléments individuels d'un menu déroulant.
GRAVITY_TRANSLATION_BLOCK_1_END
### DropdownMenu

This component renders a menu that can be triggered by a button or other element.
GRAVITY_TRANSLATION_BLOCK_2_END
### DropdownMenu.Item

This component renders a single item within a `DropdownMenu`. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_3_END
### DropdownMenu.Separator

This component renders a horizontal separator line within a `DropdownMenu`. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_4_END
### DropdownMenu.Label

This component renders a label within a `DropdownMenu`. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_5_END
### DropdownMenu.Group

This component renders a group of items within a `DropdownMenu`. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_6_END
### DropdownMenu.CheckboxItem

This component renders a checkbox item within a `DropdownMenu`. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_7_END
### DropdownMenu.RadioItem

This component renders a radio button item within a `DropdownMenu`. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_8_END
### DropdownMenu.Sub

This component renders a submenu within a `DropdownMenu`. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_9_END
### DropdownMenu.SubTrigger

This component renders the trigger for a submenu within a `DropdownMenu`. It should be used as a child of `DropdownMenu.Sub`.
GRAVITY_TRANSLATION_BLOCK_10_END
### DropdownMenu.SubContent

This component renders the content of a submenu within a `DropdownMenu`. It should be used as a child of `DropdownMenu.Sub`.
GRAVITY_TRANSLATION_BLOCK_11_END
### DropdownMenu.Content

This component renders the content of a `DropdownMenu`. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_12_END
### DropdownMenu.Trigger

This component renders the trigger for a `DropdownMenu`. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_13_END
### DropdownMenu.Portal

This component renders the `DropdownMenu.Content` in a portal. It should be used as a child of `DropdownMenu`.
GRAVITY_TRANSLATION_BLOCK_14_END
### DropdownMenu.Root

This component is the root of the `DropdownMenu` component. It should be used as a parent of all other `DropdownMenu` components.
GRAVITY_TRANSLATION_BLOCK_15_END
### DropdownMenu.Viewport

This component renders the viewport of a `DropdownMenu`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_16_END
### DropdownMenu.ScrollArea

This component renders a scrollable area within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_17_END
### DropdownMenu.CheckboxIndicator

This component renders a checkbox indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_18_END
### DropdownMenu.RadioIndicator

This component renders a radio indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_19_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_20_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_21_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_22_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_23_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_24_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_25_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_26_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_27_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_28_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_29_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_30_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_31_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_32_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_33_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_34_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_35_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_36_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_37_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_38_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_39_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_40_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_41_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_42_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_43_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_44_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_45_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_46_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_47_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_48_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_49_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_50_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_51_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_52_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_53_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_54_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_55_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_56_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_57_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_58_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_59_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_60_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_61_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_62_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_63_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_64_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_65_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_66_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_67_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_68_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_69_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_70_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_71_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_72_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_73_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_74_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_75_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_76_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_77_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_78_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_79_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_80_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_81_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_82_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_83_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_84_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_85_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_86_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_87_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_88_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_89_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_90_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_91_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_92_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_93_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_94_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_95_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_96_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_97_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_98_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_99_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_100_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_101_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_102_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_103_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_104_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_105_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_106_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_107_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_108_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_109_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_110_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_111_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_112_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_113_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_114_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_115_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_116_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_117_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_118_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_119_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_120_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_121_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_122_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_123_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_124_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_125_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_126_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_127_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_128_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_129_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_130_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_131_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_132_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_133_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_134_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_135_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_136_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_137_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_138_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_139_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_140_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_141_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_142_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_143_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_144_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_145_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_146_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_147_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_148_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_149_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_150_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_151_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_152_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_153_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_154_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_155_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_156_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_157_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_158_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_159_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_160_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_161_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_162_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_163_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_164_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_165_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_166_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_167_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_168_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_169_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_170_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_171_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_172_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_173_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_174_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_175_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_176_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_177_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_178_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_179_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_180_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_181_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_182_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_183_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_184_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_185_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_186_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_187_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_188_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_189_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_190_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_191_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_192_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_193_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_194_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_195_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_196_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_197_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_198_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_199_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_200_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_201_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_202_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_203_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_204_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_205_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_206_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_207_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_208_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_209_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_210_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_211_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_212_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_213_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_214_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_215_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_216_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_217_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_218_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_219_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_220_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_221_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_222_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_223_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_224_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_225_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_226_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_227_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_228_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_229_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_230_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_231_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_232_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_233_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_234_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_235_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_236_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_237_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_238_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_239_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_240_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_241_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_242_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_243_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_244_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_245_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_246_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_247_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_248_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_249_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_250_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_251_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_252_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_253_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_254_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_255_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_256_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_257_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_258_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_259_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_260_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_261_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_262_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_263_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_264_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_265_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_266_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_267_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_268_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_269_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_270_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_271_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_272_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_273_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_274_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_275_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_276_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_277_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_278_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_279_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_280_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_281_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_282_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_283_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_284_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_285_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_286_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_287_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_288_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_289_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_290_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_291_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_292_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_293_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_294_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_295_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_296_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_297_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_298_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_299_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_300_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_301_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_302_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_303_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_304_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_305_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_306_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_307_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_308_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_309_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_310_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_311_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_312_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_313_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_314_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_315_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_316_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_317_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_318_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_319_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_320_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_321_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_322_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_323_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_324_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_325_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_326_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_327_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_328_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_329_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_330_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_331_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_332_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_333_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_334_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_335_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_336_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_337_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_338_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_339_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_340_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_341_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_342_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_343_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_344_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_345_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_346_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_347_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_348_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_349_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_350_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_351_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_352_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_353_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_354_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_355_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_356_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_357_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_358_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_359_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_360_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_361_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_362_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_363_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_364_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_365_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_366_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_367_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_368_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_369_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_370_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_371_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_372_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_373_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_374_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_375_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_376_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_377_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_378_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_379_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_380_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_381_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_382_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_383_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_384_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_385_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_386_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_387_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_388_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_389_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_390_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_391_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_392_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_393_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_394_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_395_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_396_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_397_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_398_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_399_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_400_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_401_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_402_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_403_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_404_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_405_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_406_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_407_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_408_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_409_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_410_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_411_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_412_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_413_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_414_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_415_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_416_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_417_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_418_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_419_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_420_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_421_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_422_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_423_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_424_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_425_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_426_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_427_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_428_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_429_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_430_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_431_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_432_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_433_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_434_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_435_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_436_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_437_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_438_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_439_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_440_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_441_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_442_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_443_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_444_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_445_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_446_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_447_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_448_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_449_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_450_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_451_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_452_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_453_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_454_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_455_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_456_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_457_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_458_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_459_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_460_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_461_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_462_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_463_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_464_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_465_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_466_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_467_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_468_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_469_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_470_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_471_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_472_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_473_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_474_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_475_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_476_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_477_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_478_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_479_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_480_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_481_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_482_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_483_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_484_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_485_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_486_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_487_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_488_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_489_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_490_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_491_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_492_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_493_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_494_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_495_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_496_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_497_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_498_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_499_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_500_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_501_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_502_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_503_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_504_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_505_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_506_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_507_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_508_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_509_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_510_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_511_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_512_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_513_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_514_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_515_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_516_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_517_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_518_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_519_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_520_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_521_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_522_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_523_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_524_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_525_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_526_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_527_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_528_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_529_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_530_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_531_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_532_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_533_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_534_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_535_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_536_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_537_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_538_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_539_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_540_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_541_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_542_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_543_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_544_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_545_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_546_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_547_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_548_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_549_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_550_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_551_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_552_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_553_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_554_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_555_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_556_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_557_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_558_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_559_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_560_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_561_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_562_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_563_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_564_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_565_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_566_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_567_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_568_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_569_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_570_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_571_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_572_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_573_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_574_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_575_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_576_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_577_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_578_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_579_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_580_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_581_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_582_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_583_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_584_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_585_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_586_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_587_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_588_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_589_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_590_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_591_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_592_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_593_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_594_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_595_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_596_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_597_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_598_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_599_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_600_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_601_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_602_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_603_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_604_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_605_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_606_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_607_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_608_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_609_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_610_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_611_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_612_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_613_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_614_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_615_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_616_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_617_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_618_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_619_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_620_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_621_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_622_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_623_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_624_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_625_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_626_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_627_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_628_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_629_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_630_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_631_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_632_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_633_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_634_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_635_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_636_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_637_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_638_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_639_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_640_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_641_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_642_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_643_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_644_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_645_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_646_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_647_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_648_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_649_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_650_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_651_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_652_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_653_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_654_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_655_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_656_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_657_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_658_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_659_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_660_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_661_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_662_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_663_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_664_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_665_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_666_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_667_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_668_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_669_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_670_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_671_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_672_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_673_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_674_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_675_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_676_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_677_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_678_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_679_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_680_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_681_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_682_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_683_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_684_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_685_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_686_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_687_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_688_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_689_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_690_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_691_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_692_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_693_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_694_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_695_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_696_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_697_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_698_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_699_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_700_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_701_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_702_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_703_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_704_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_705_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_706_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_707_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_708_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_709_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_710_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_711_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_712_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_713_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_714_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_715_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_716_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_717_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_718_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_719_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_720_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_721_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_722_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_723_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_724_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_725_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_726_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_727_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_728_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_729_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_730_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_731_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_732_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_733_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_734_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_735_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_736_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_737_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_738_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_739_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_740_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_741_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_742_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_743_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_744_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_745_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_746_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_747_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_748_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_749_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_750_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_751_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_752_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_753_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_754_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_755_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_756_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_757_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_758_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_759_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_760_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_761_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_762_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_763_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_764_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_765_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_766_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_767_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_768_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_769_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_770_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_771_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_772_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_773_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_774_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_775_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_776_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_777_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_778_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_779_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_780_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_781_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_782_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_783_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_784_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_785_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_786_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_787_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_788_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_789_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_790_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_791_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_792_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_793_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_794_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_795_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_796_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_797_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_798_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_799_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_800_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_801_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_802_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_803_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_804_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_805_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_806_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_807_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_808_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_809_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_810_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_811_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_812_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_813_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_814_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_815_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_816_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_817_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_818_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_819_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_820_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_821_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_822_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_823_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_824_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_825_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_826_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_827_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_828_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_829_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_830_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_831_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_832_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_833_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_834_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_835_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_836_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_837_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_838_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_839_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_840_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_841_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_842_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_843_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_844_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_845_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_846_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_847_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_848_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_849_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_850_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_851_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_852_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_853_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_854_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_855_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_856_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_857_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_858_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_859_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_860_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_861_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_862_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_863_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_864_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_865_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_866_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_867_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_868_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_869_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_870_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_871_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_872_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_873_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_874_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_875_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_876_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_877_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_878_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_879_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_880_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_881_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_882_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_883_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_884_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_885_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_886_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_887_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_888_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_889_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_890_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_891_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_892_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_893_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_894_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_895_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_896_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_897_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_898_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_899_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_900_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_901_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_902_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_903_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_904_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_905_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_906_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_907_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_908_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_909_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_910_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_911_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_912_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_913_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_914_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_915_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_916_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_917_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_918_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_919_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_920_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_921_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_922_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_923_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_924_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_925_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_926_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_927_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_928_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_929_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_930_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_931_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_932_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_933_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_934_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_935_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_936_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_937_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_938_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_939_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_940_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_941_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_942_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_943_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_944_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_945_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_946_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_947_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_948_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_949_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_950_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_951_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_952_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_953_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_954_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_955_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_956_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_957_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_958_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_959_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_960_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_961_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_962_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_963_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_964_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_965_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_966_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_967_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_968_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_969_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_970_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_971_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_972_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_973_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_974_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_975_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_976_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_977_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_978_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_979_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_980_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_981_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_982_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_983_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_984_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_985_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_986_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_987_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_988_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_989_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_990_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_991_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_992_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_993_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_994_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_995_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_996_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_997_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_998_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_999_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1000_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1001_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1002_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1003_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1004_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1005_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1006_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1007_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1008_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1009_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1010_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1011_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1012_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1013_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1014_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1015_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1016_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1017_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1018_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1019_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1020_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1021_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1022_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1023_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1024_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1025_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1026_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1027_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1028_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1029_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1030_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1031_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1032_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1033_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1034_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1035_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1036_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1037_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1038_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1039_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1040_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1041_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1042_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1043_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1044_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1045_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1046_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1047_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1048_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1049_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1050_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1051_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1052_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1053_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1054_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1055_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1056_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1057_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1058_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1059_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1060_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1061_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1062_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1063_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1064_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1065_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1066_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1067_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1068_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1069_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1070_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1071_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1072_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1073_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1074_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1075_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1076_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1077_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1078_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1079_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1080_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1081_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1082_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1083_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1084_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1085_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1086_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1087_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1088_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1089_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1090_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1091_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1092_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1093_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1094_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1095_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1096_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1097_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1098_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1099_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1100_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1101_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1102_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1103_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1104_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1105_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1106_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1107_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1108_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1109_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1110_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1111_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1112_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1113_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1114_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1115_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1116_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1117_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1118_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1119_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1120_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1121_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1122_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1123_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1124_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1125_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1126_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1127_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1128_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1129_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1130_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1131_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1132_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1133_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1134_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1135_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1136_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1137_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1138_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1139_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1140_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1141_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1142_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1143_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1144_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1145_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1146_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1147_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1148_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1149_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1150_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1151_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1152_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1153_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1154_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1155_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1156_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1157_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1158_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1159_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1160_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1161_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1162_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1163_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1164_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1165_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1166_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1167_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1168_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1169_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1170_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1171_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1172_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1173_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1174_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1175_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1176_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1177_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1178_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1179_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1180_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1181_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1182_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1183_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1184_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1185_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1186_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1187_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1188_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1189_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1190_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1191_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1192_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1193_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1194_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1195_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1196_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1197_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1198_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1199_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1200_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1201_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1202_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1203_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1204_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1205_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1206_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1207_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1208_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1209_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1210_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1211_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1212_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1213_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1214_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1215_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1216_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1217_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1218_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1219_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1220_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1221_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1222_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1223_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1224_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1225_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1226_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1227_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1228_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1229_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1230_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_TRANSLATION_BLOCK_1231_END
### DropdownMenu.ViewportIndicator

This component renders an indicator within a `DropdownMenu.Viewport`. It should be used as a child of `DropdownMenu.Viewport`.
GRAVITY_TRANSLATION_BLOCK_1232_END
### DropdownMenu.ScrollAreaIndicator

This component renders an indicator within a `DropdownMenu.ScrollArea`. It should be used as a child of `DropdownMenu.ScrollArea`.
GRAVITY_TRANSLATION_BLOCK_1233_END
### DropdownMenu.CheckboxItemIndicator

This component renders an indicator within a `DropdownMenu.CheckboxItem`. It should be used as a child of `DropdownMenu.CheckboxItem`.
GRAVITY_TRANSLATION_BLOCK_1234_END
### DropdownMenu.RadioItemIndicator

This component renders an indicator within a `DropdownMenu.RadioItem`. It should be used as a child of `DropdownMenu.RadioItem`.
GRAVITY_TRANSLATION_BLOCK_1235_END
### DropdownMenu.ItemIndicator

This component renders an indicator within a `DropdownMenu.Item`. It should be used as a child of `DropdownMenu.Item`.
GRAVITY_TRANSLATION_BLOCK_1236_END
### DropdownMenu.SubTriggerIndicator

This component renders an indicator within a `DropdownMenu.SubTrigger`. It should be used as a child of `DropdownMenu.SubTrigger`.
GRAVITY_TRANSLATION_BLOCK_1237_END
### DropdownMenu.SubContentIndicator

This component renders an indicator within a `DropdownMenu.SubContent`. It should be used as a child of `DropdownMenu.SubContent`.
GRAVITY_TRANSLATION_BLOCK_1238_END
### DropdownMenu.ContentIndicator

This component renders an indicator within a `DropdownMenu.Content`. It should be used as a child of `DropdownMenu.Content`.
GRAVITY_

| Nom         | Description                                                                                                                            |                      Type                      | Défaut |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------: | :-----: |
| `text`      | Contenu de l'élément de menu.                                                                                                          |               `React.ReactNode`                |         |
| `action`    | Gestionnaire de clic de l'élément de menu. Il reçoit les paramètres du composant parent du menu déroulant (à la fois `event` et `data`). | `(event: React.MouseEvent, data: any) => void` |         |
| `iconStart` | Icône de l'élément de menu avant le contenu de l'élément.                                                                              |               `React.ReactNode`                |         |
| `iconEnd`   | Icône de l'élément de menu après le contenu de l'élément. Ignoré si l'élément a un sous-menu.                                          |               `React.ReactNode`                |         |
| `hidden`    | Détermine si l'élément est masqué.                                                                                                     |                   `boolean`                    |         |
| `disabled`  | Détermine si l'élément est désactivé.                                                                                                  |                   `boolean`                    |         |
| `href`      | L'élément de menu avec cette propriété devient un lien vers l'emplacement spécifié.                                                    |                    `string`                    |         |
| `target`    | Identique à l'attribut `target` de la balise `<a>`.                                                                                    |                    `string`                    |         |
| `rel`       | Identique à l'attribut `rel` de la balise `<a>`.                                                                                       |                    `string`                    |         |
| `extraProps`| Propriétés supplémentaires de l'élément de menu.                                                                                       |                    `object`                    |         |
| `title`     | Texte de l'infobulle.                                                                                                                  |                    `string`                    |         |
| `className` | Valeur de l'attribut HTML `class`.                                                                                                     |                    `string`                    |         |
| `items`     | Éléments du sous-menu.                                                                                                                 |  `(DropdownMenuItem \| DropdownMenuItem[])[]`  |         |
| `popupProps`| Propriétés de la fenêtre contextuelle du sous-menu.                                                                                    |                    `string`                    |         |
| `path`      | Chemin des index de la racine à l'élément actuel.                                                                                      |                   `number[]`                   |         |
| `closeMenu` | Rappel `closeMenu` personnalisé. Il peut être appelé au lieu de fermer le menu principal et utilisé pour fermer les sous-menus avant le menu principal. |                  `() => void`                  |         |

### SwitcherProps

| Nom        | Description                                                              |     Type     |
| :--------- | :----------------------------------------------------------------------- | :----------: |
| `onClick`  | Appelée lorsque le sélecteur est cliqué.                                 | `() => void` |
| `onKeyDown` | Appelée lorsque le sélecteur est focalisé et que la touche d'action est pressée. | `() => void` |