<!--GITHUB_BLOCK-->

# Usuario

<!--/GITHUB_BLOCK-->

```tsx
import {User} from '@gravity-ui/uikit';
```

Este es un componente general para mostrar un avatar de usuario con un bloque de información. Utiliza el componente [Avatar](../Avatar/README.md) para renderizar el avatar. También puede aceptar un nodo React personalizado como avatar.

## Nombre y descripción

El `User` componente tiene las `description` propiedades `name` y para mostrar un bloque de información.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="l" />
`}
>
    <UIKit.User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="l" />
</ExampleBlock>

LANDING_BLOCK-->

## Tamaño

Usa la `size` propiedad para administrar el `User` tamaño. El tamaño predeterminado es `m`. Los valores posibles son `3xs` `2xs`, `xs`, `s` `m`, `l`, y `xl`.

Esta propiedad también se proporciona al `Avatar` componente interno.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="3xs" />
<User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="2xs" />
<User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="xs" />
<User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="s" />
<User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="m" />
<User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="l" />
<User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="xl" />
`}
>
    <UIKit.User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="3xs" />
    <UIKit.User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="2xs" />
    <UIKit.User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="xs" />
    <UIKit.User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="s" />
    <UIKit.User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="m" />
    <UIKit.User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="l" />
    <UIKit.User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="xl" />
</ExampleBlock>

LANDING_BLOCK-->

## Propiedades

| Nombre                | Descripción                                          |                                     Tipo                                     | Predeterminado |
| :-------------------- | :--------------------------------------------------- | :--------------------------------------------------------------------------: | :------------: |
| avatar                | Avatar de usuario                                    | [Avatar Props](../Avatar/README.md#properties) `string` `React.ReactElement` |                |
| nombre                | Nombre de usuario                                    |                              `React.ReactNode`                               |                |
| descripción           | Descripción del usuario                              |                              `React.ReactNode`                               |                |
| tamaño                | Tamaño de la sección de usuario                      |                                `'3xs'` `'xl'`                                |      `m`       |
| etiqueta aria         | `aria-label` para la sección de usuarios             |                                   `string`                                   |                |
| aria - etiquetada por | `aria-labelledby` para la sección de usuarios        |                                   `string`                                   |                |
| aria, descrita por    | `aria-describedby` para la sección de usuarios       |                                   `string`                                   |                |
| detalles de aria      | `aria-details` para la sección de usuarios           |                                   `string`                                   |                |
| className             | Clase CSS personalizada para el elemento raíz        |                                   `string`                                   |                |
| estilo                | Atributo de estilo HTML                              |                            `React.CSSProperties`                             |                |
| qa                    | `data-qa` Atributo HTML, usado para realizar pruebas |                                   `string`                                   |                |

## API CSS

| Nombre                             | Descripción                                 |
| :--------------------------------- | :------------------------------------------ |
| `--g-user-avatar-offset`           | Brecha entre el avatar y el bloque de texto |
| `--g-user-name-font-weight`        | Peso de la fuente del nombre                |
| `--g-user-name-font-size`          | Tamaño de fuente del nombre                 |
| `--g-user-name-line-height`        | Altura de la línea de nombre                |
| `--g-user-description-font-weight` | Descripción: peso de la fuente              |
| `--g-user-description-font-size`   | Tamaño de fuente de la descripción          |
| `--g-user-description-line-height` | Altura de la línea descriptiva              |
