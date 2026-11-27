<!--GITHUB_BLOCK-->

# Menu

<!--/GITHUB_BLOCK-->

O componente `Menu` permite criar facilmente visualizações para listas de ações.

```tsx
import {Menu} from '@gravity-ui/uikit';
```

Ele possui componentes dedicados para itens (`Menu.Item`) e grupos (`Menu.Group`). Você pode combiná-los para criar menus mais complexos.

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item>First</Menu.Item>
            <Menu.Item>Second</Menu.Item>
            <Menu.Group label="Group">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item>First</Menu.Item>
  <Menu.Item>Second</Menu.Item>
  <Menu.Group label="Group">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
</Menu>
```

<!--/GITHUB_BLOCK-->

### Tamanho

Esta propriedade é usada para selecionar o tamanho do menu. O valor padrão é `m`.

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Menu size="s">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
            <Menu size="m">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
            <Menu size="l">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
            <Menu size="xl">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu size="s">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>

<Menu size="m">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>

<Menu size="l">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>

<Menu size="xl">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

## Propriedades

| Nome      | Descrição                                  |           Tipo           | Padrão |
| :-------- | :----------------------------------------- | :----------------------: | :-----: |
| size      | Tamanho do menu                            | `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| children  | Elemento filho                             |    `React.ReactNode`     |         |
| className | Atributo `class` HTML                      |         `string`         |         |
| style     | Atributo `style` HTML                      |  `React.CSSProperties`   |         |
| qa        | Atributo `data-qa` HTML, usado para testes |         `string`         |         |

## Menu.Item

Esta propriedade é usada para renderizar itens de menu.

### Ícone

Use a propriedade `iconStart` ou `iconEnd` para exibir um ícone no início ou no final de um item de menu:

<!--SANDBOX
import {Gear, TriangleExclamation} from '@gravity-ui/icons';
import {Icon, Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Menu>
                <Menu.Item iconStart={<Icon size={16} data={Gear} />}>Item with icon</Menu.Item>
                <Menu.Item>Item without icon</Menu.Item>
            </Menu>
            <Menu>
                <Menu.Item iconEnd={<Icon size={16} data={TriangleExclamation} />}>
                    Item with icon
                </Menu.Item>
                <Menu.Item>Item without icon</Menu.Item>
            </Menu>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item iconStart={<Icon size={16} data={GearIcon} />}>Item with icon</Menu.Item>
  <Menu.Item>Item without icon</Menu.Item>
</Menu>
```

```tsx
<Menu>
  <Menu.Item iconEnd={<Icon size={16} data={TriangleExclamation} />}>Item with icon</Menu.Item>
  <Menu.Item>Item without icon</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### Estados

Usando esta propriedade, você pode habilitar ou desabilitar (esmaecer) itens de menu específicos:

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item disabled>First</Menu.Item>
            <Menu.Item>Second</Menu.Item>
            <Menu.Item selected>Third</Menu.Item>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item disabled>First</Menu.Item>
  <Menu.Item>Second</Menu.Item>
  <Menu.Item selected>Third</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### Tema

Isso permite que você altere o tema do item do menu. O tema padrão é `normal`.

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item theme="danger">First</Menu.Item>
            <Menu.Item theme="normal">Second</Menu.Item>
            <Menu.Item>Third</Menu.Item>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item theme="danger">First</Menu.Item>
  <Menu.Item theme="normal">Second</Menu.Item>
  <Menu.Item>Third</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### Propriedades

| Nome             | Descrição                                    |           Tipo            |  Padrão   |
| :--------------- | :--------------------------------------------- | :-----------------------: | :--------: |
| iconStart        | Ícone do menu antes do texto do item                     |        `ReactNode`        |            |
| iconEnd          | Ícone do menu após o texto do item                      |        `ReactNode`        |            |
| selected         | Sinalizador de item de menu selecionado                        |         `boolean`         |  `false`   |
| disabled         | Sinalizador de item de menu desabilitado                         |         `boolean`         |  `false`   |
| active           | Sinalizador de item de menu ativo                          |         `boolean`         |  `false`   |
| href             | URL                                            |         `string`          |            |
| title            | Atributo title                                |         `string`          |            |
| target           | Atributo target                               |         `string`          |            |
| rel              | Atributo rel                                  |         `string`          |            |
| onClick          | Manipulador para o evento onclick                      | `React.MouseEventHandler` |            |
| theme            | Tema do item do menu                                |   `"normal"` `"danger"`   | `"normal"` |
| children         | Elemento filho                                  |     `React.ReactNode`     |            |
| className        | Atributo `class` HTML para o elemento raiz    |         `string`          |            |
| contentClassName | Atributo `class` HTML para o elemento de conteúdo |         `string`          |            |
| style            | Atributo `style` HTML                         |   `React.CSSProperties`   |            |
| qa               | Atributo `data-qa` HTML, usado para testes     |         `string`          |            |
| extraProps       | Atributos HTML adicionais                     |         `Record`          |            |

## Menu.Group

Você pode agrupar itens por tópicos dentro de um único menu:

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item>First</Menu.Item>
            <Menu.Group label="Group One">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
            <Menu.Group label="Group Two">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
            <Menu.Item>Middle</Menu.Item>
            <Menu.Group label="Group Three">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
            <Menu.Item>Last</Menu.Item>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item>First</Menu.Item>
  <Menu.Group label="Group One">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
  <Menu.Group label="Group Two">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
  <Menu.Item>Middle</Menu.Item>
  <Menu.Group label="Group Three">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
  <Menu.Item>Last</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### Propriedades

| Nome      | Descrição                                |         Tipo          | Padrão |
| :-------- | :----------------------------------------- | :-------------------: | :-----: |
| label     | Rótulo do grupo de menu                           |       `string`        |         |
| children  | Elemento filho                              |   `React.ReactNode`   |         |
| className | Atributo `class` HTML                     |       `string`        |         |
| style     | Atributo `style` HTML                     | `React.CSSProperties` |         |
| qa        | Atributo `data-qa` HTML, usado para testes |       `string`        |         |
