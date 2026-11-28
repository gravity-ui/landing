O componente `DropdownMenu` oferece agrupamento de itens, submenus e um alternador personalizável. Os itens do menu suspenso são configurados com a propriedade `items`. Por padrão, o alternador do menu é um botão com o ícone de reticências (**⋯**), que pode ser substituído pela propriedade `renderSwitcher`.

```tsx
import {DropdownMenu} from '@gravity-ui/uikit/legacy';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Itens agrupados

Os itens do `DropdownMenu` podem ser agrupados e visualmente separados de outros itens do menu, introduzindo arrays de itens do menu aninhados no array `items`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Submenus

A propriedade `items` em um item individual do menu adiciona sub-itens aninhados a esse item.

Os itens do menu com submenus recebem as seguintes classes adicionais para permitir estilização extra:

- `.g-dropdown-menu-legacy__menu-item_with-submenu`: Para itens com mais de um item aninhado.
- `.g-dropdown-menu-legacy__menu-item_active-parent`: Para o item cujo submenu está atualmente aberto.

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
| `icon`                     | Ícone do `switcher` padrão.                                                                    |                 `React.ReactNode`                  | Ícone de reticências |
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

This component renders a list of `DropdownMenuItem` components.
GRAVITY_TRANSLATION_BLOCK_2_END
It accepts the following props:
GRAVITY_TRANSLATION_BLOCK_3_END
| Prop | Type | Description | Default |
|---|---|---|---|
| `children` | `React.ReactNode` | The content of the dropdown menu. This should be a list of `DropdownMenuItem` components. | `null` |
| `open` | `boolean` | Whether the dropdown menu is open. | `false` |
| `onClose` | `() => void` | A callback function that is called when the dropdown menu is closed. | `null` |
| `anchorEl` | `HTMLElement` | The element that the dropdown menu is anchored to. | `null` |
| `PaperProps` | `PaperProps` | Props to be applied to the `Paper` component that wraps the dropdown menu. | `null` |
| `MenuListProps` | `MenuListProps` | Props to be applied to the `MenuList` component that contains the `DropdownMenuItem` components. | `null` |
| `PopoverProps` | `PopoverProps` | Props to be applied to the `Popover` component that renders the dropdown menu. | `null` |
GRAVITY_TRANSLATION_BLOCK_4_END
### DropdownMenu

Este componente renderiza uma lista de componentes `DropdownMenuItem`.
GRAVITY_TRANSLATION_BLOCK_5_END
Ele aceita as seguintes props:
GRAVITY_TRANSLATION_BLOCK_6_END
| Prop | Tipo | Descrição | Padrão |
|---|---|---|---|
| `children` | `React.ReactNode` | O conteúdo do menu suspenso. Deve ser uma lista de componentes `DropdownMenuItem`. | `null` |
| `open` | `boolean` | Se o menu suspenso está aberto. | `false` |
| `onClose` | `() => void` | Uma função de callback que é chamada quando o menu suspenso é fechado. | `null` |
| `anchorEl` | `HTMLElement` | O elemento ao qual o menu suspenso está ancorado. | `null` |
| `PaperProps` | `PaperProps` | Props a serem aplicadas ao componente `Paper` que envolve o menu suspenso. | `null` |
| `MenuListProps` | `MenuListProps` | Props a serem aplicadas ao componente `MenuList` que contém os componentes `DropdownMenuItem`. | `null` |
| `PopoverProps` | `PopoverProps` | Props a serem aplicadas ao componente `Popover` que renderiza o menu suspenso. | `null` |
GRAVITY_TRANSLATION_BLOCK_7_END
### Example

```jsx
import React from 'react';
import { DropdownMenu, DropdownMenuItem } from '@your-ui-library/dropdown';
import Button from '@your-ui-library/button';

function MyDropdown() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button ref={anchorRef} onClick={handleToggle}>
        Open Menu
      </Button>
      <DropdownMenu
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
      >
        <DropdownMenuItem onClick={handleClose}>Item 1</DropdownMenuItem>
        <DropdownMenuItem onClick={handleClose}>Item 2</DropdownMenuItem>
        <DropdownMenuItem onClick={handleClose}>Item 3</DropdownMenuItem>
      </DropdownMenu>
    </div>
  );
}

export default MyDropdown;
```
GRAVITY_TRANSLATION_BLOCK_8_END
### Exemplo

```jsx
import React from 'react';
import { DropdownMenu, DropdownMenuItem } from '@your-ui-library/dropdown';
import Button from '@your-ui-library/button';

function MyDropdown() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button ref={anchorRef} onClick={handleToggle}>
        Abrir Menu
      </Button>
      <DropdownMenu
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
      >
        <DropdownMenuItem onClick={handleClose}>Item 1</DropdownMenuItem>
        <DropdownMenuItem onClick={handleClose}>Item 2</DropdownMenuItem>
        <DropdownMenuItem onClick={handleClose}>Item 3</DropdownMenuItem>
      </DropdownMenu>
    </div>
  );
}

export default MyDropdown;
```
GRAVITY_TRANSLATION_BLOCK_9_END

| Nome         | Descrição                                                                                                                            |                      Tipo                      | Padrão |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------: | :-----: |
| `text`       | Conteúdo do item do menu.                                                                                                            |               `React.ReactNode`                |         |
| `action`     | Manipulador de clique do item do menu. Ele recebe os parâmetros do componente pai do menu suspenso (tanto `event` quanto `data`). | `(event: React.MouseEvent, data: any) => void` |         |
| `iconStart`  | Ícone do item do menu antes do conteúdo do item.                                                                                     |               `React.ReactNode`                |         |
| `iconEnd`    | Ícone do item do menu após o conteúdo do item. Ignorado se o item tiver um submenu.                                                  |               `React.ReactNode`                |         |
| `hidden`     | Determina se o item está oculto.                                                                                                     |                   `boolean`                    |         |
| `disabled`   | Determina se o item está desabilitado.                                                                                               |                   `boolean`                    |         |
| `href`       | O item do menu com esta propriedade se torna um link para o local especificado.                                                      |                    `string`                    |         |
| `target`     | Igual ao atributo `target` da tag `<a>`.                                                                                            |                    `string`                    |         |
| `rel`        | Igual ao atributo `rel` da tag `<a>`.                                                                                               |                    `string`                    |         |
| `extraProps` | Propriedades adicionais do item do menu.                                                                                             |                    `object`                    |         |
| `title`      | Texto da dica de ferramenta.                                                                                                         |                    `string`                    |         |
| `className`  | Valor do atributo HTML `class`.                                                                                                     |                    `string`                    |         |
| `items`      | Itens do submenu.                                                                                                                    |  `(DropdownMenuItem \| DropdownMenuItem[])[]`  |         |
| `popupProps` | Propriedades do popup do submenu.                                                                                                    |                    `string`                    |         |
| `path`       | Caminho dos índices da raiz até o item atual.                                                                                        |                   `number[]`                   |         |
| `closeMenu`  | Callback `closeMenu` personalizado. Ele pode ser chamado em vez de fechar o menu principal e usado para fechar submenus antes do menu principal. |                  `() => void`                  |         |

### SwitcherProps

| Nome        | Descrição                                                              |     Tipo     |
| :---------- | :--------------------------------------------------------------------- | :----------: |
| `onClick`   | Chamado quando o seletor é clicado.                                    | `() => void` |
| `onKeyDown` | Chamado quando o seletor está focado e a tecla de ação é pressionada. | `() => void` |