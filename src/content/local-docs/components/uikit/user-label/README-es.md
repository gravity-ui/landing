# UserLabel

`UserLabel` es un chip compacto con el avatar y el nombre o correo electrónico de un usuario, adecuado para menciones y listas en línea (use `User` para un bloque de perfil más grande y `Avatar` solo para la imagen).

## Type

Se utiliza para gestionar la apariencia del avatar. Use `"person"` para una entidad personalizada y `"email"`, para una dirección de correo electrónico. Si no necesita ningún avatar, use `"empty"`.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Avatar

Este componente se puede usar con un avatar personalizado. Solo funciona con `type: 'person'`. Puede proporcionar una imagen, una propiedad del componente [Avatar](../Avatar/README.md) o un nodo React personalizado.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Interactivity

Este componente también es interactivo: puede ser clickeable o cerrable.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

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