## Pie de página y MobileFooter

Los componentes del pie de página. `Footer` Úselo para la versión de escritorio y `MobileFooter` para la versión móvil.
Ambos componentes tienen las mismas propiedades.

### PropTypes

| Propiedad                                                                                    | Tipo                             | Necesario | Predeterminado | Descripción                                       |
| :------------------------------------------------------------------------------------------- | :------------------------------- | :-------: | :------------- | :------------------------------------------------ |
| className                                                                                    | `String`                         |           |                | Nombre de la clase de pie de página               |
| [menuItems](https://github.com/gravity-ui/uikit/tree/main/src/components/Menu)               | `FooterMenuItem[]`               |           |                | Lista de elementos del menú de pie de página      |
| withDivider                                                                                  | `Boolean`                        |           |                | Mostrar el borde superior en el pie de página     |
| moreButtonTitle                                                                              | `String`                         |           |                | El título del botón de más elementos              |
| onMoreButtonClick                                                                            | `MouseEventHandler<HTMLElement>` |           |                | El controlador de clics de más botones            |
| [vista](#view)                                                                               | `normal` o `clear`               |           |                | La vista de pie de página                         |
| [logotipo](https://preview.gravity-ui.com/navigation/?path=/story/components-logo--showcase) | `LogoProps`                      |           |                | Propiedades del logotipo del servicio             |
| logoWrapperClassName                                                                         | `string`                         |           |                | El nombre de la clase del contenedor de logotipos |
| derechos de autor                                                                            | `string`                         |           |                | Los derechos de autor                             |

### vista

- normal: fondo blanco y todos los elementos configurados
- fondo transparente y solo los derechos de autor

### Uso

Ver demostraciones

- Escritorio: `src/components/Footer/desktop/__stories__/FooterShowcase.tsx`,
- Móvil: `src/components/Footer/mobile/__stories__/MobileFooterShowcase.tsx`.

### Ejemplos

#### Pie de página

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

<MobileFooter
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

<MobileFooter
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    view="clear"
/>
```
