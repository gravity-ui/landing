# UserLabel

El `UserLabel` componente se puede usar para mostrar usuarios o información relacionada con los usuarios.

## Tipo

Se usa para administrar la apariencia del avatar. `"person"` Úselo para una entidad personalizada y `"email"` para una dirección de correo electrónico. Si no necesitas ningún avatar, úsalo `"empty"`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<UserLabel type="person" text="Charles Darwin" />
<UserLabel type="email" text="email@example.com" />
<UserLabel type="empty" text="Alan Turing" />
`}
>
    <UIKit.UserLabel type="person" text="Charles Darwin" />
    <UIKit.UserLabel type="email" text="email@example.com" />
    <UIKit.UserLabel type="empty" text="Alan Turing" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<UserLabel type="person" text="Charles Darwin (person)" />
<UserLabel type="email" text="email@example.com (email)" />
<UserLabel type="empty" text="Alan Turing (empty)" />
```

<!--/GITHUB_BLOCK-->

## Avatar

Este componente se puede usar con un avatar personalizado. Solo funciona con `type: 'person'`. Puedes proporcionar una imagen, una propiedad del componente [Avatar](../Avatar/README.md) o un nodo React personalizado.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
import {GraduationCap} from '@gravity-ui/icons';

<UserLabel type="person" avatar="<url>" text="Charles Darwin" />
<UserLabel type="person" avatar={{icon: GraduationCap}} text="Charles Darwin" />
`}
>
    <UIKit.UserLabel type="person" avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg/193px-Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg" text="Charles Darwin" />
    <UIKit.UserLabel type="person" avatar={{icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M6.836 3.202 1.74 5.386a.396.396 0 0 0 0 .728l5.096 2.184a2.5 2.5 0 0 0 .985.202h.358a2.5 2.5 0 0 0 .985-.202l5.096-2.184a.396.396 0 0 0 0-.728L9.164 3.202A2.5 2.5 0 0 0 8.179 3h-.358a2.5 2.5 0 0 0-.985.202ZM1.5 7.642l1.5.644v3.228a2 2 0 0 0 1.106 1.789l.806.403a7 7 0 0 0 6.193.033l.909-.442a2 2 0 0 0 1.125-1.798V8.226l1.712-.734a1.896 1.896 0 0 0 0-3.484L9.755 1.823A4 4 0 0 0 8.179 1.5h-.358a4 4 0 0 0-1.576.323L1.15 4.008A1.896 1.896 0 0 0 0 5.75v4.5a.75.75 0 0 0 1.5 0V7.643Zm3 3.872V8.929l1.745.748A4 4 0 0 0 7.821 10h.358a4 4 0 0 0 1.576-.323l1.884-.808v2.63a.5.5 0 0 1-.282.45l-.909.442a5.5 5.5 0 0 1-4.865-.027l-.807-.403a.5.5 0 0 1-.276-.447Z" clip-rule="evenodd"/></svg>'}} text="Charles Darwin" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
import {GraduationCap} from '@gravity-ui/icons';

<UserLabel type="person" avatar="<url>" text="Charles Darwin" />
<UserLabel type="person" avatar={{icon: GraduationCap}} text="Charles Darwin" />
```

<!--/GITHUB_BLOCK-->

## Interactividad

Este componente también es interactivo: se puede hacer clic en él o se puede cerrar.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<UserLabel text="Charles Darwin" onClick={() => alert('onClick triggered')} />
<UserLabel text="Charles Darwin" onCloseClick={() => alert('onCloseClick triggered')} />
`}
>
    <UIKit.UserLabel text="Charles Darwin" onClick={() => alert('onClick triggered')} />
    <UIKit.UserLabel text="Charles Darwin" onCloseClick={() => alert('onCloseClick triggered')} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<UserLabel text="Charles Darwin" onClick={() => alert('onClick triggered')} />
<UserLabel text="Charles Darwin" onCloseClick={() => alert('onCloseClick triggered')} />
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre       | Descripción                                                    |                                     Tipo                                     | Predeterminado |
| :----------- | :------------------------------------------------------------- | :--------------------------------------------------------------------------: | :------------: |
| tipo         | Apariencia del avatar                                          |                             `'person'` `'empty'`                             |   `'person'`   |
| vista        | `UserLabel` vista                                              |                            `'outlined'` `'clear'`                            |  `'outlined'`  |
| tamaño       | Tamaño del avatar                                              |                                `'3xs'` `'xl'`                                |     `'s'`      |
| avatar       | Avatar de usuario                                              | [Avatar Props](../Avatar/README.md#properties) `string` `React.ReactElement` |                |
| mensaje      | Texto visible                                                  |                              `React.ReactNode`                               |                |
| descripción  | Descripción del usuario                                        |                              `React.ReactNode`                               |                |
| onClick      | `click` controlador de eventos para el componente              |                                  `Function`                                  |                |
| onCloseClick | `click` controlador de eventos para el botón con forma de cruz |                                  `Function`                                  |                |
| className    | Clase CSS personalizada para el elemento raíz                  |                                   `string`                                   |                |
| estilo       | Atributo de estilo HTML                                        |                            `React.CSSProperties`                             |                |
| qa           | `data-qa` Atributo HTML, usado para realizar pruebas           |                                   `string`                                   |                |

## API CSS

| Nombre                                   | Descripción                                                  |
| :--------------------------------------- | :----------------------------------------------------------- |
| `--g-user-label-size`                    | Tamaño del avatar (ancho y alto) y alto de la etiqueta       |
| `--g-user-label-border-radius`           | Radio del borde de la etiqueta                               |
| `--g-user-label-padding`                 | Relleno horizontal de etiquetas                              |
| `--g-user-label-gap`                     | Espacio entre los elementos (avatar, texto, icono de cerrar) |
| `--g-user-label-text-font-weight`        | Peso de la fuente del texto                                  |
| `--g-user-label-text-font-size`          | Tamaño de fuente del texto                                   |
| `--g-user-label-text-line-height`        | Altura de línea de texto                                     |
| `--g-user-label-description-font-weight` | Descripción: peso de la fuente                               |
| `--g-user-label-description-font-size`   | Tamaño de fuente de la descripción                           |
| `--g-user-label-description-line-height` | Altura de la línea descriptiva                               |
