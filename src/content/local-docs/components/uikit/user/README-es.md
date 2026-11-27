<!--GITHUB_BLOCK-->

# User

<!--/GITHUB_BLOCK-->

Este es un componente general para mostrar un avatar de usuario con un bloque de información. Utiliza el componente [Avatar](../Avatar/README.md) para renderizar el avatar. También puede aceptar un nodo React personalizado como avatar.

```tsx
import {User} from '@gravity-ui/uikit';
```

## Nombre y descripción

El componente `User` tiene las propiedades `name` y `description` para mostrar un bloque de información.

<!--SANDBOX
import {User} from '@gravity-ui/uikit';

export default function () {
    return (
        <User
            avatar={{text: 'Charles Darwin', theme: 'brand'}}
            name="Charles Darwin"
            description="charles@mail.ai"
            size="l"
        />
    );
}
SANDBOX-->

## Tamaño

Utiliza la propiedad `size` para gestionar el tamaño de `User`. El tamaño predeterminado es `m`. Los valores posibles son `3xs`, `2xs`, `xs`, `s`, `m`, `l` y `xl`.

Esta propiedad también se proporciona al componente `Avatar` interno.

<!--SANDBOX
import {User} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <User
                avatar={{text: 'Charles Darwin', theme: 'brand'}}
                name="Charles Darwin"
                description="charles@mail.ai"
                size="3xs"
            />
            <User
                avatar={{text: 'Charles Darwin', theme: 'brand'}}
                name="Charles Darwin"
                description="charles@mail.ai"
                size="2xs"
            />
            <User
                avatar={{text: 'Charles Darwin', theme: 'brand'}}
                name="Charles Darwin"
                description="charles@mail.ai"
                size="xs"
            />
            <User
                avatar={{text: 'Charles Darwin', theme: 'brand'}}
                name="Charles Darwin"
                description="charles@mail.ai"
                size="s"
            />
            <User
                avatar={{text: 'Charles Darwin', theme: 'brand'}}
                name="Charles Darwin"
                description="charles@mail.ai"
                size="m"
            />
            <User
                avatar={{text: 'Charles Darwin', theme: 'brand'}}
                name="Charles Darwin"
                description="charles@mail.ai"
                size="l"
            />
            <User
                avatar={{text: 'Charles Darwin', theme: 'brand'}}
                name="Charles Darwin"
                description="charles@mail.ai"
                size="xl"
            />
        </>
    );
}
SANDBOX-->

## Propiedades

| Nombre             | Descripción                                |                                    Tipo                                     | Predeterminado |
| :--------------- | :----------------------------------------- | :-------------------------------------------------------------------------: | :-----: |
| avatar           | Avatar del usuario                                | [AvatarProps](../Avatar/README.md#properties) `string` `React.ReactElement` |         |
| name             | Nombre del usuario                                  |                              `React.ReactNode`                              |         |
| description      | Descripción del usuario                           |                              `React.ReactNode`                              |         |
| size             | Tamaño de la sección del usuario                          |               `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'`               |   `m`   |
| aria-label       | `aria-label` para la sección del usuario          |                                  `string`                                   |         |
| aria-labelledby  | `aria-labelledby` para la sección del usuario     |                                  `string`                                   |         |
| aria-describedby | `aria-describedby` para la sección del usuario    |                                  `string`                                   |         |
| aria-details     | `aria-details` para la sección del usuario        |                                  `string`                                   |         |
| className        | Clase CSS personalizada para el elemento raíz      |                                  `string`                                   |         |
| style            | Atributo de estilo HTML                       |                            `React.CSSProperties`                            |         |
| qa               | Atributo HTML `data-qa`, utilizado para pruebas |                                  `string`                                   |         |

## API CSS

| Nombre                               | Descripción                       |
| :--------------------------------- | :-------------------------------- |
| `--g-user-avatar-offset`           | Espacio entre el avatar y el bloque de texto |
| `--g-user-name-font-weight`        | Peso de la fuente del nombre                  |
| `--g-user-name-font-size`          | Tamaño de la fuente del nombre                |
| `--g-user-name-line-height`        | Altura de línea del nombre                  |
| `--g-user-description-font-weight` | Peso de la fuente de la descripción           |
| `--g-user-description-font-size`   | Tamaño de la fuente de la descripción         |
| `--g-user-description-line-height` | Altura de línea de la descripción           |
