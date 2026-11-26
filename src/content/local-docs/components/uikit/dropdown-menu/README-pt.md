O componente `DropdownMenu` oferece agrupamento de itens, submenus e um alternador personalizável. Os itens do menu suspenso são configurados com a propriedade `items`. Por padrão, o alternador do menu é um botão com o ícone de reticências (**⋯**), que pode ser substituído pela propriedade `renderSwitcher`.

```tsx
import {DropdownMenu} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Itens agrupados

Os itens do `DropdownMenu` podem ser agrupados e visualmente separados de outros itens do menu, introduzindo arrays de itens de menu aninhados no array `items`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Submenus

A propriedade `items` em um item de menu individual adiciona sub-itens aninhados a esse item.

Os itens de menu com submenus recebem os seguintes nomes de classe adicionais para permitir estilização extra:

- `.g-dropdown-menu__menu-item_with-submenu`: Para itens com mais de um item aninhado.
- `.g-dropdown-menu__menu-item_active-parent`: Para o item cujo submenu está atualmente aberto.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Alternador de menu personalizado

Para configurar o alternador do menu, use a propriedade `renderSwitcher`. Pode ser qualquer função que retorne um componente React (ou qualquer `(props: SwitcherProps) => React.ReactNode` em termos de TypeScript, veja [`SwitcherProps`](#switcherprops) abaixo). Por padrão, o alternador do menu é um botão com o ícone de reticências (**⋯**).

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

O exemplo acima é simplificado para demonstrar a ideia do alternador de menu personalizável. Em uma aplicação real, geralmente é recomendado que o alternador de menu clicável seja um componente acessível com teclado e outras tecnologias assistivas, como um botão.

## Ícones personalizados

Você pode adicionar ícones personalizados a um item do `DropdownMenu` usando a propriedade `iconStart` ou `iconEnd`. Por padrão, os itens do `DropdownMenu` não possuem ícones.

Você pode alterar o ícone do alternador do menu com as propriedades `renderSwitcher` do `DropdownMenu`. Por padrão, o alternador do menu é um botão com o ícone de reticências (**⋯**).

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Propriedades

| Nome                       | Descrição                                                                                        |                        Tipo                        |    Padrão    |
| :------------------------- | :------------------------------------------------------------------------------------------------- | :------------------------------------------------: | :----------: |
| `items`                    | Matriz de itens. Matrizes aninhadas de itens representam grupos visualmente separados.                        | `(DropdownMenuItem \| DropdownMenuItem[])[] \| []` |              |
| `data`                     | Uma carga útil fornecida às ações chamadas do menu. (Isso pode ser útil para menus de contexto.)    |                       `any`                        |              |
| `icon`                     | Ícone do `switcher` padrão.                                                                    |                 `React.ReactNode`                  | Ícone de elipse |
| `size`                     | Aplicado tanto ao `switcher` padrão quanto ao menu.                                               |            `'s' \| 'm' \| 'l' \| 'xl'`             |     `'m'`     |
| `disabled`                 | Definir esta propriedade como `true` desabilita o botão `switcher` e impede a abertura do menu. |                     `boolean`                      |              |
| `renderSwitcher`           | Função de renderização para o controle de alternância do menu.                                                       |                 `React.ReactNode`                  |              |
| `switcherWrapperClassName` | Valor para a propriedade `className` do componente pai do `switcher`.                           |                      `string`                      |              |
| `defaultSwitcherProps`     | Propriedades padrão do `switcher`.                                                                     |                   `ButtonProps`                    |              |
| `defaultSwitcherClassName` | Valor para a propriedade `className` do `switcher` padrão.                                      |                      `string`                      |              |
| `menuProps`                | Substitui as propriedades padrão do popup do menu suspenso.                                              |                    `MenuProps`                     |              |
| `popupProps`               | Substitui as propriedades padrão do popup.                                                            |                    `PopupProps`                    |              |
| `open`                     | Alterna a visibilidade do menu suspenso.                                                                  |                     `boolean`                      |              |
| `onOpenToggle`             | Chamado quando o menu é aberto ou fechado.                                                          |                    `() => void`                    |              |
| `onSwitcherClick`          | Chamado quando o `switcher` é clicado.                                                                 |       `React.MouseEventHandler<HTMLElement>`       |              |
| `hideOnScroll`             | Especifica se deve ocultar o menu quando um elemento pai é rolado.                              |                     `boolean`                      |    `true`     |
| `children`                 | Conteúdo personalizado dentro do popup do menu.                                                              |                 `React.ReactNode`                  |              |

### DropdownMenuItem

Este tipo descreve itens individuais de menu suspenso.
GRAVITY_TRANSLATION_BLOCK_1_END
### DropdownMenu

This component renders a list of `DropdownMenuItem`s.

It is a controlled component, meaning that its open/closed state is managed by the parent component.

#### Props

| Prop Name | Type | Description | Default | Required |
|---|---|---|---|---|
| `children` | `React.ReactNode` | The content of the dropdown menu. This should be a list of `DropdownMenuItem`s. | `null` | Yes |
| `isOpen` | `boolean` | Whether the dropdown menu is currently open. | `false` | Yes |
| `onClose` | `() => void` | A callback function that is called when the dropdown menu is closed. | `null` | Yes |
| `position` | `'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'` | The position of the dropdown menu relative to its trigger element. | `'bottom-left'` | No |
| `trigger` | `React.ReactNode` | The element that triggers the dropdown menu to open and close. | `null` | Yes |

#### Example

```jsx
import { DropdownMenu, DropdownMenuItem } from '@gravity-ui/uikit';
import React, { useState } from 'react';

function MyDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <DropdownMenu
      isOpen={isOpen}
      onClose={handleClose}
      trigger={<button onClick={() => setIsOpen(true)}>Open Menu</button>}
    >
      <DropdownMenuItem onClick={() => console.log('Option 1 clicked')}>
        Option 1
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => console.log('Option 2 clicked')}>
        Option 2
      </DropdownMenuItem>
    </DropdownMenu>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_2_END
### DropdownMenuItem

This type describes individual dropdown menu items.

#### Props

| Prop Name | Type | Description | Default | Required |
|---|---|---|---|---|
| `children` | `React.ReactNode` | The content of the dropdown menu item. | `null` | Yes |
| `disabled` | `boolean` | Whether the dropdown menu item is disabled. | `false` | No |
| `onClick` | `() => void` | A callback function that is called when the dropdown menu item is clicked. | `null` | No |
| `href` | `string` | If provided, the dropdown menu item will be rendered as a link. | `null` | No |
| `target` | `'_blank' | '_self' | '_parent' | '_top'` | The target attribute for the link. | `null` | No |
| `pin` | `'circle-left' | 'circle-right' | 'square-left' | 'square-right'` | The pin of the dropdown menu item. | `null` | No |
| `selected` | `boolean` | Whether the dropdown menu item is selected. | `false` | No |
| `view` | `'normal' | 'danger'` | The view of the dropdown menu item. | `'normal'` | No |

#### Example

```jsx
import { DropdownMenuItem } from '@gravity-ui/uikit';

function MyDropdownItems() {
  return (
    <div>
      <DropdownMenuItem onClick={() => console.log('Item clicked')}>
        Clickable Item
      </DropdownMenuItem>
      <DropdownMenuItem disabled>
        Disabled Item
      </DropdownMenuItem>
      <DropdownMenuItem href="/some-page">
        Link Item
      </DropdownMenuItem>
    </div>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_3_END

| Nome         | Descrição                                                                                                                               |                      Tipo                      | Padrão |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------: | :-----: |
| `text`       | Conteúdo do item do menu.                                                                                                               |               `React.ReactNode`                |         |
| `action`     | Manipulador de clique do item do menu. Ele recebe os parâmetros do componente pai do menu suspenso (tanto `event` quanto `data`).          | `(event: React.MouseEvent, data: any) => void` |         |
| `iconStart`  | Ícone do item do menu antes do conteúdo do item.                                                                                        |               `React.ReactNode`                |         |
| `iconEnd`    | Ícone do item do menu após o conteúdo do item. Ignorado se o item tiver um submenu.                                                      |               `React.ReactNode`                |         |
| `hidden`     | Determina se o item está oculto.                                                                                                        |                   `boolean`                    |         |
| `disabled`   | Determina se o item está desabilitado.                                                                                                  |                   `boolean`                    |         |
| `href`       | O item do menu com esta propriedade se torna um link para o local especificado.                                                          |                    `string`                    |         |
| `target`     | Igual ao atributo `target` da tag `<a>`.                                                                                               |                    `string`                    |         |
| `rel`        | Igual ao atributo `rel` da tag `<a>`.                                                                                                  |                    `string`                    |         |
| `extraProps` | Propriedades adicionais do item do menu.                                                                                                |                    `object`                    |         |
| `title`      | Texto da dica de ferramenta.                                                                                                            |                    `string`                    |         |
| `className`  | Valor do atributo HTML `class`.                                                                                                         |                    `string`                    |         |
| `items`      | Itens do submenu.                                                                                                                       |  `(DropdownMenuItem \| DropdownMenuItem[])[]`  |         |
| `popupProps` | Propriedades do popup do submenu.                                                                                                       |                    `string`                    |         |
| `path`       | Caminho dos índices da raiz até o item atual.                                                                                           |                   `number[]`                   |         |
| `closeMenu`  | Callback personalizado `closeMenu`. Ele pode ser chamado em vez de fechar o menu principal e usado para fechar submenus antes do menu principal. |                  `() => void`                  |         |

### SwitcherProps

| Nome        | Descrição                                                              |     Tipo     |
| :---------- | :--------------------------------------------------------------------- | :----------: |
| `onClick`   | Chamado quando o switcher é clicado.                                   | `() => void` |
| `onKeyDown` | Chamado quando o switcher está focado e a tecla de ação é pressionada. | `() => void` |