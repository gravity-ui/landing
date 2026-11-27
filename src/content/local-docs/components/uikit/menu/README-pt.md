# Menu

O componente `Menu` exibe uma lista de escolhas no `Popup` ao interagir com seu gatilho, tipicamente um botão.

Existe uma coleção de componentes relacionados:

- `Menu` - o contêiner do menu
- `MenuItem` - uma opção para selecionar no menu
- `MenuDivider` - um divisor para agrupar opções
- `MenuTrigger` - um gatilho padrão embutido, `Button` com ícone de reticências

## Uso básico

```jsx
import {Menu, MenuItem, MenuDivider, MenuTrigger} from '@gravity-ui/uikit';

function BasicMenu() {
  return (
    <Menu trigger={<MenuTrigger />}>
      <MenuItem>Copiar</MenuItem>
      <MenuItem>Mover</MenuItem>
      <MenuDivider />
      <MenuItem theme="danger">Excluir</MenuItem>
    </Menu>
  );
}
```

## Gatilho personalizado

Você pode renderizar qualquer tipo de componente como gatilho se ele aceitar `basic HTMLAttributes` como props e uma `ref` para `HTMLElement`.
Para componentes mais complexos, você pode usar uma variante de função da prop `trigger` que tem `triggerProps` como primeiro argumento
e `triggerRef` como segundo argumento, que você deve passar para o seu componente.

## Menu de contexto

Para implementar o padrão de menu de contexto, você deve usar um "elemento virtual" como gatilho:

```jsx
import {Menu, MenuItem, MenuDivider, MenuTrigger} from '@gravity-ui/uikit';

function ContextMenu() {
  const [trigger, setTrigger] = React.useState(null);

  React.useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
      setTrigger({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: event.clientX,
            y: event.clientY,
            top: event.clientY,
            right: event.clientX,
            bottom: event.clientY,
            left: event.clientX,
          };
        },
      });
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <Menu trigger={trigger}>
      <MenuItem>Copiar</MenuItem>
      <MenuItem>Mover</MenuItem>
      <MenuDivider />
      <MenuItem theme="danger">Excluir</MenuItem>
    </Menu>
  );
}
```

## Modo inline

Por padrão, o `Menu` é renderizado dentro do `Popup`. Mas você pode renderizá-lo inline usando a prop `inline` em seu próprio contêiner.

## Propriedades

| Nome            | Descrição                                     |                                              Tipo                                               |     Padrão      |
| :-------------- | :---------------------------------------------- | :---------------------------------------------------------------------------------------------: | :-------------: |
| className       | Atributo `class` do HTML                          |                                            `string`                                             |                 |
| style           | Atributo `style` do HTML                          |                                      `React.CSSProperties`                                      |                 |
| aria-label      | Nome acessível para o menu                    |                                            `string`                                             |                 |
| aria-labelledby | ID de um elemento que nomeia o menu            |                                            `string`                                             |                 |
| qa              | ID de teste (atributo `data-qa`)                   |                                            `string`                                             |                 |
| open            | Estado controlado para `open`                     |                                            `boolean`                                            |                 |
| defaultOpen     | Estado não controlado para `open`                   |                                            `boolean`                                            |                 |
| children        | Componentes relacionados ao menu (itens, divisores, etc.) |                                        `React.ReactNode`                                        |                 |
| disabled        | Estado desabilitado                                  |                                            `boolean`                                            |     `false`      |
| inline          | Renderiza o menu inline                         |                                            `boolean`                                            |     `false`      |
| trigger         | Elemento de gatilho que abre o menu            | `React.ReactElement` `(triggerProps, triggerRef) => React.ReactElement` `VirtualElement` `null` |                 |
| placement       | Posicionamento do popup                          |                                        `PopupPlacement`                                         | `"bottom-start"` |
| onOpenChange    | Callback para mudança de estado de `open`                |                `(open: boolean, event: Event, reason: OpenChangeReason) => void`                |                 |
| size            | O tamanho do `Menu`                                 |                                    `"s"` `"m"` `"l"` `"xl"`                                     |      `"m"`       |

### MenuItem

Quando um `Icon` sem um tamanho explícito é passado para a propriedade `icon`, seu tamanho é selecionado
automaticamente de acordo com o tamanho do `Menu`. Defina explicitamente o `size`, `width` ou `height`
do `Icon` para substituí-lo.

`MenuItem` aceita quaisquer props válidas de elemento `button` ou `a` além destas:

| Nome      | Descrição                         |                                Type                                |  Padrão   |
| :-------- | :---------------------------------- | :----------------------------------------------------------------: | :-------: |
| qa        | ID de teste (atributo `data-qa`)    |                              `string`                              |           |
| theme     | O tema do `MenuItem`                | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` | `"normal"` |
| selected  | Estado selecionado (`menuitemcheckbox`) |                             `boolean`                              |           |
| disabled  | Estado desabilitado                 |                             `boolean`                              |  `false`  |
| icon      | Slot de renderização para um ícone  |                        `React.ReactElement`                        |           |
| arrow     | Slot de renderização para uma seta de menu aninhado |                        `React.ReactElement`                        |           |
| children  | Conteúdo                            |                         `React.ReactNode`                          |           |
| component | Componente raiz personalizado       |                        `React.ElementType`                         |           |

### MenuTrigger

`MenuTrigger` aceita quaisquer props do componente `Button` além destas:

| Nome | Descrição             |            Type             |    Padrão     |
| :--- | :---------------------- | :-------------------------: | :-----------: |
| icon | Tipo de ícone a exibir | `"horizontal"` `"vertical"` | `"horizontal"` |