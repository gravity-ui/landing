# Footer et MobileFooter

Les composants de pied de page. Utilisez `Footer` pour la version de bureau et `MobileFooter` pour la version mobile.
Les deux composants ont les mêmes propriétés.

## Propriétés

| Propriété                                                                                 | Type                             | Requis | Défaut | Description                   |
| :--------------------------------------------------------------------------------------- | :------------------------------- | :------: | :------ | :---------------------------- |
| className                                                                                | `String`                         |          |         | Nom de classe du pied de page             |
| [menuItems](https://github.com/gravity-ui/uikit/tree/main/src/components/Menu)           | `FooterMenuItem[]`               |          |         | Liste des éléments de menu du pied de page     |
| withDivider                                                                              | `Boolean`                        |          |         | Afficher la bordure supérieure sur le pied de page |
| moreButtonTitle                                                                          | `String`                         |          |         | Le titre du bouton pour plus d'éléments   |
| onMoreButtonClick                                                                        | `MouseEventHandler<HTMLElement>` |          |         | Le gestionnaire de clic du bouton pour plus d'éléments |
| [view](#view)                                                                            | `normal` ou `clear`              |          |         | La vue du pied de page               |
| [logo](https://preview.gravity-ui.com/navigation/?path=/story/components-logo--showcase) | `LogoProps`                      |          |         | Les propriétés du logo du service   |
| logoWrapperClassName                                                                     | `string`                         |          |         | Le nom de classe de l'enveloppe du logo   |
| copyright                                                                                | `string`                         |          |         | Le copyright                 |

### view

- normal - fond blanc et tous les éléments configurés
- clear - fond transparent et uniquement le copyright

### Utilisation

Voir les démos

- Bureau : `src/components/Footer/desktop/__stories__/FooterShowcase.tsx`,
- Mobile : `src/components/Footer/mobile/__stories__/MobileFooterShowcase.tsx`.

### Exemples

#### Footer

```tsx
import { Footer } from '@gravity-ui/navigation';

<Footer
    className="page-footer"
    withDivider={false}
    moreButtonTitle="Afficher plus"
    copyright={`@ ${new Date().getFullYear()} "Mon Service"`}
    logo={{
        icon: logoIcon,
        iconSize: 24,
        text: 'Mon Service'
    }}
    menuItems={[
        {
            text: 'À propos du service',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Documentation',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Confidentiel',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
    ]}
/>

<Footer
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "Mon Service"`}
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
    moreButtonTitle="Afficher plus"
    copyright={`@ ${new Date().getFullYear()} "Mon Service"`}
    logo={{
        icon: logoIcon,
        iconSize: 24,
        text: 'Mon Service'
    }}
    menuItems={[
        {
            text: 'À propos du service',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Documentation',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Confidentiel',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
    ]}
/>

<MobileFooter
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "Mon Service"`}
    view="clear"
/>
```