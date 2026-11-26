# Footer y MobileFooter

Los componentes del pie de página. Usa `Footer` para la versión de escritorio y `MobileFooter` para la versión móvil.
Ambos componentes tienen las mismas propiedades.

## Propiedades

| Propiedad                                                                                | Tipo                             | Requerido | Predeterminado | Descripción                   |
| :--------------------------------------------------------------------------------------- | :------------------------------- | :-------: | :------------ | :---------------------------- |
| className                                                                                | `String`                         |           |               | Nombre de clase del pie de página             |
| [menuItems](https://github.com/gravity-ui/uikit/tree/main/src/components/Menu)           | `FooterMenuItem[]`               |           |               | Lista de elementos del menú del pie de página     |
| withDivider                                                                              | `Boolean`                        |           |               | Mostrar borde superior en el pie de página |
| moreButtonTitle                                                                          | `String`                         |           |               | El título del botón de más elementos   |
| onMoreButtonClick                                                                        | `MouseEventHandler<HTMLElement>` |           |               | El manejador de clics del botón de más   |
| [view](#view)                                                                            | `normal` o `clear`              |           |               | La vista del pie de página               |
| [logo](https://preview.gravity-ui.com/navigation/?path=/story/components-logo--showcase) | `LogoProps`                      |           |               | Las propiedades del logo del servicio   |
| logoWrapperClassName                                                                     | `string`                         |           |               | El nombre de clase del contenedor del logo   |
| copyright                                                                                | `string`                         |           |               | El copyright                 |

### view

- normal - fondo blanco y todos los elementos configurados
- clear - fondo transparente y solo el copyright

### Uso

Ver demos

- Escritorio: `src/components/Footer/desktop/__stories__/FooterShowcase.tsx`,
- Móvil: `src/components/Footer/mobile/__stories__/MobileFooterShowcase.tsx`.

### Ejemplos

#### Footer

```tsx
import { Footer } from '@gravity-ui/navigation';

<Footer
    className="page-footer"
    withDivider={false}
    moreButtonTitle="Show more"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    logo={{
        icon: logoIcon,
        iconSize: 24,
        text: 'My Service'
    }}
    menuItems={[
        {
            text: 'About Service',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Documentation',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Confidential',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
    ]}
/>

<Footer
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    view="clear"
/>
```

#### MobileFooter

```tsx
import { MobileFooter } from '@gravity-ui/navigation';
```

<MobileFooter
    className="page-footer"
    withDivider={false}
    moreButtonTitle="Mostrar más"
    copyright={`@ ${new Date().getFullYear()} "Mi Servicio"`}
    logo={{
        icon: logoIcon,
        iconSize: 24,
        text: 'Mi Servicio'
    }}
    menuItems={[
        {
            text: 'Acerca del Servicio',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Documentación',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Confidencial',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
    ]}
/>

<MobileFooter
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "Mi Servicio"`}
    view="clear"
/>
```

El componente `MobileFooter` es un pie de página diseñado para dispositivos móviles.

GRAVITY_TRANSLATION_BLOCK_1_END

## Propiedades

El componente `MobileFooter` acepta las siguientes propiedades:

| Propiedad | Tipo | Descripción | Valor por defecto |
| --------- | ---- | ----------- | ----------------- |
| `className` | `String` | Clase CSS adicional para el componente. | - |
| `withDivider` | `Boolean` | Si se debe mostrar un divisor encima del pie de página. | `true` |
| `moreButtonTitle` | `String` | Título del botón "Mostrar más". | `Show more` |
| `copyright` | `String` | Texto de copyright. | - |
| `logo` | `Object` | Objeto que contiene la información del logo. | - |
| `logo.icon` | `ReactNode` | Icono del logo. | - |
| `logo.iconSize` | `Number` | Tamaño del icono del logo. | `24` |
| `logo.text` | `String` | Texto del logo. | - |
| `menuItems` | `Array<Object>` | Matriz de elementos del menú. | `[]` |
| `menuItems[].text` | `String` | Texto del elemento del menú. | - |
| `menuItems[].href` | `String` | URL del elemento del menú. | - |
| `menuItems[].target` | `String` | Atributo `target` para el enlace del elemento del menú. | `blank` |
| `view` | `String` | Vista del pie de página. Puede ser `default` o `clear`. | `default` |

GRAVITY_TRANSLATION_BLOCK_2_END

## Ejemplos

### Ejemplo básico

```jsx
<MobileFooter
    className="page-footer"
    moreButtonTitle="Show more"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    logo={{
        icon: logoIcon,
        iconSize: 24,
        text: 'My Service'
    }}
    menuItems={[
        {
            text: 'About Service',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Documentation',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Confidential',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
    ]}
/>
```

GRAVITY_TRANSLATION_BLOCK_3_END

### Ejemplo con vista `clear`

```jsx
<MobileFooter
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    view="clear"
/>
```

GRAVITY_TRANSLATION_BLOCK_4_END