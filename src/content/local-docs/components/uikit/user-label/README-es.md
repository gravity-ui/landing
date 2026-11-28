# UserLabel

`UserLabel` es un chip compacto con el avatar y el nombre o correo electrónico de un usuario, adecuado para menciones y listas en línea (use `User` para un bloque de perfil más grande y `Avatar` solo para la imagen).

## Type

Se utiliza para gestionar la apariencia del avatar. Use `"person"` para una entidad personalizada y `"email"`, para una dirección de correo electrónico. Si no necesita ningún avatar, use `"empty"`.

<!--SANDBOX
import {UserLabel} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <UserLabel type="person" text="Charles Darwin" />
            <UserLabel type="email" text="email@example.com" />
            <UserLabel type="empty" text="Alan Turing" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<UserLabel type="person" text="Charles Darwin (person)" />
<UserLabel type="email" text="email@example.com (email)" />
<UserLabel type="empty" text="Alan Turing (empty)" />
```

<!--/GITHUB_BLOCK-->

## Avatar

Este componente se puede usar con un avatar personalizado. Solo funciona con `type: 'person'`. Puede proporcionar una imagen, una propiedad del componente [Avatar](../Avatar/README.md) o un nodo React personalizado.

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {UserLabel} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <UserLabel
                type="person"
                avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg/193px-Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg"
                text="Charles Darwin"
            />
            <UserLabel type="person" avatar={{icon: GraduationCap}} text="Charles Darwin" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
import {GraduationCap} from '@gravity-ui/icons';

<UserLabel type="person" avatar="<url>" text="Charles Darwin" />
<UserLabel type="person" avatar={{icon: GraduationCap}} text="Charles Darwin" />
```

<!--/GITHUB_BLOCK-->

## Interactivity

Este componente también es interactivo: puede ser clickeable o cerrable.

<!--SANDBOX
import {UserLabel} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <UserLabel text="Charles Darwin" onClick={() => alert('onClick triggered')} />
            <UserLabel text="Charles Darwin" onCloseClick={() => alert('onCloseClick triggered')} />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<UserLabel text="Charles Darwin" onClick={() => alert('onClick triggered')} />
<UserLabel text="Charles Darwin" onCloseClick={() => alert('onCloseClick triggered')} />
```

<!--/GITHUB_BLOCK-->

## Properties

| Name         | Description                                     |                                    Type                                     |   Default    |
| :----------- | :---------------------------------------------- | :-------------------------------------------------------------------------: | :----------: |
| type         | Avatar appearance                               |                       `'person'` `'email'` `'empty'`                        |  `'person'`  |
| view         | `UserLabel` view                                |                           `'outlined'` `'clear'`                            | `'outlined'` |
| size         | Avatar size                                     |               `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'`               |    `'s'`     |
| avatar       | User avatar                                     | [AvatarProps](../Avatar/README.md#properties) `string` `React.ReactElement` |              |
| text         | Visible text                                    |                              `React.ReactNode`                              |              |
| description  | User description                                |                              `React.ReactNode`                              |              |
| onClick      | `click` event handler for the component         |                                 `Function`                                  |              |
| onCloseClick | `click` event handler for the cross-icon button |                                 `Function`                                  |              |
| className    | Custom CSS class for the root element           |                                  `string`                                   |              |
| style        | HTML style attribute                            |                            `React.CSSProperties`                            |              |
| qa           | `data-qa` HTML attribute, used for testing      |                                  `string`                                   |              |

## CSS API

| Nombre                                     | Descripción                                             |
| :--------------------------------------- | :------------------------------------------------------ |
| `--g-user-label-size`                    | Tamaño para el avatar (ancho y alto) y alto para la etiqueta |
| `--g-user-label-border-radius`           | Radio del borde de la etiqueta                          |
| `--g-user-label-padding`                 | Relleno horizontal de la etiqueta                       |
| `--g-user-label-gap`                     | Espacio entre elementos (avatar, texto, icono de cierre) |
| `--g-user-label-text-font-weight`        | Peso de la fuente del texto                             |
| `--g-user-label-text-font-size`          | Tamaño de la fuente del texto                           |
| `--g-user-label-text-line-height`        | Altura de línea del texto                               |
| `--g-user-label-description-font-weight` | Peso de la fuente de la descripción                     |
| `--g-user-label-description-font-size`   | Tamaño de la fuente de la descripción                   |
| `--g-user-label-description-line-height` | Altura de línea de la descripción                       |
