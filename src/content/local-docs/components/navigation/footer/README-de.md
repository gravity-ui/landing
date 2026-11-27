# Footer und MobileFooter

Die Komponenten für die Seitenfußzeile. Verwenden Sie `Footer` für die Desktop-Version und `MobileFooter` für die mobile Version.
Beide Komponenten haben die gleichen Eigenschaften.

## Eigenschaften

| Eigenschaft                                                                              | Typ                             | Erforderlich | Standard | Beschreibung                   |
| :--------------------------------------------------------------------------------------- | :------------------------------- | :------: | :------ | :---------------------------- |
| className                                                                                | `String`                         |          |         | Klassenname der Fußzeile             |
| [menuItems](https://github.com/gravity-ui/uikit/tree/main/src/components/Menu)           | `FooterMenuItem[]`               |          |         | Liste der Menüeinträge der Fußzeile     |
| withDivider                                                                              | `Boolean`                        |          |         | Zeigt den oberen Rand der Fußzeile an |
| moreButtonTitle                                                                          | `String`                         |          |         | Titel des Buttons für weitere Elemente   |
| onMoreButtonClick                                                                        | `MouseEventHandler<HTMLElement>` |          |         | Handler für den Klick auf den Button für weitere Elemente |
| [view](#view)                                                                            | `normal` oder `clear`              |          |         | Ansicht der Fußzeile               |
| [logo](https://preview.gravity-ui.com/navigation/?path=/story/components-logo--showcase) | `LogoProps`                      |          |         | Eigenschaften des Service-Logos   |
| logoWrapperClassName                                                                     | `string`                         |          |         | Klassenname des Logo-Containers   |
| copyright                                                                                | `string`                         |          |         | Copyright                 |

### view

- normal - weißer Hintergrund und alle konfigurierten Elemente
- clear - transparenter Hintergrund und nur das Copyright

### Verwendung

Siehe Demos

- Desktop: `src/components/Footer/desktop/__stories__/FooterShowcase.tsx`,
- Mobile: `src/components/Footer/mobile/__stories__/MobileFooterShowcase.tsx`.

### Beispiele

#### Footer

```tsx
import { Footer } from '@gravity-ui/navigation';

<Footer
    className="page-footer"
    withDivider={false}
    moreButtonTitle="Mehr anzeigen"
    copyright={`@ ${new Date().getFullYear()} "Mein Service"`}
    logo={{
        icon: logoIcon,
        iconSize: 24,
        text: 'Mein Service'
    }}
    menuItems={[
        {
            text: 'Über den Service',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Dokumentation',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Vertraulich',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
    ]}
/>

<Footer
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "Mein Service"`}
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
    moreButtonTitle="Mehr anzeigen"
    copyright={`@ ${new Date().getFullYear()} "Mein Dienst"`}
    logo={{
        icon: logoIcon,
        iconSize: 24,
        text: 'Mein Dienst'
    }}
    menuItems={[
        {
            text: 'Über den Dienst',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Dokumentation',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Vertraulich',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
    ]}
/>

<MobileFooter
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "Mein Dienst"`}
    view="clear"
/>
```