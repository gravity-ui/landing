<!--GITHUB_BLOCK-->

# Menu

<!--/GITHUB_BLOCK-->

El componente `Menu` permite crear fácilmente vistas para listas de acciones.

```tsx
import {Menu} from '@gravity-ui/uikit';
```

Tiene componentes dedicados para elementos (`Menu.Item`) y grupos (`Menu.Group`). Puedes combinarlos para crear menús más complejos.

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

### Tamaño

Esta propiedad se utiliza para seleccionar el tamaño del menú. El valor predeterminado es `m`.

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

## Propiedades

| Nombre      | Descripción                                |           Tipo           | Predeterminado |
| :---------- | :----------------------------------------- | :----------------------: | :------------: |
| size        | Tamaño del menú                            | `"s"` `"m"` `"l"` `"xl"` |     `"m"`      |
| children    | Elemento hijo                              |    `React.ReactNode`     |                |
| className   | Atributo `class` HTML                      |         `string`         |                |
| style       | Atributo `style` HTML                      |  `React.CSSProperties`   |                |
| qa          | Atributo `data-qa` HTML, usado para pruebas |         `string`         |                |

## Menu.Item

Esta propiedad se utiliza para renderizar elementos del menú.

### Icono

Utiliza la propiedad `iconStart` o `iconEnd` para mostrar un icono al principio o al final de un elemento del menú:

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

Usando esta propiedad, puedes habilitar o deshabilitar (atenuar) elementos específicos del menú:

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

Esto te permite cambiar el tema del elemento del menú. El tema predeterminado es `normal`.

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

### Propiedades

| Nombre             | Descripción                                    |           Tipo            |  Predeterminado   |
| :---------------- | :--------------------------------------------- | :-----------------------: | :--------: |
| iconStart        | Icono del menú antes del texto del elemento                     |        `ReactNode`        |            |
| iconEnd          | Icono del menú después del texto del elemento                      |        `ReactNode`        |            |
| selected         | Indicador de elemento de menú seleccionado                        |         `boolean`         |  `false`   |
| disabled         | Indicador de elemento de menú deshabilitado                        |         `boolean`         |  `false`   |
| active           | Indicador de elemento de menú activo                          |         `boolean`         |  `false`   |
| href             | URL                                            |         `string`          |            |
| title            | Atributo de título                                |         `string`          |            |
| target           | Atributo de destino                               |         `string`          |            |
| rel              | Atributo rel                                  |         `string`          |            |
| onClick          | Manejador para el evento onclick                      | `React.MouseEventHandler` |            |
| theme            | Tema del elemento del menú                                |   `"normal"` `"danger"`   | `"normal"` |
| children         | Elemento hijo                                  |     `React.ReactNode`     |            |
| className        | Atributo HTML `class` para el elemento raíz    |         `string`          |            |
| contentClassName | Atributo HTML `class` para el elemento de contenido |         `string`          |            |
| style            | Atributo HTML `style`                         |   `React.CSSProperties`   |            |
| qa               | Atributo HTML `data-qa`, usado para pruebas     |         `string`          |            |
| extraProps       | Atributos HTML adicionales                     |         `Record`          |            |

## Menu.Group

Puedes agrupar elementos por temas dentro de un solo menú:

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

### Propiedades

| Nombre      | Descripción                                |         Tipo          | Predeterminado |
| :-------- | :----------------------------------------- | :-------------------: | :-----: |
| label     | Etiqueta del grupo de menú                           |       `string`        |         |
| children  | Elemento hijo                              |   `React.ReactNode`   |         |
| className | Atributo HTML `class`                     |       `string`        |         |
| style     | Atributo HTML `style`                     | `React.CSSProperties` |         |
| qa        | Atributo HTML `data-qa`, usado para pruebas |       `string`        |         |
