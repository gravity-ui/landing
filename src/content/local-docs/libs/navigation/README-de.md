# @gravity-ui/navigation &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/navigation)](https://www.npmjs.com/package/@gravity-ui/navigation) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/navigation/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/navigation/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/navigation/)

### Seitenleisten-Kopfzeilen-Navigation &middot; [Vorschau →](https://preview.yandexcloud.dev/navigation/)

![](docs/images/showcase.png)

## Installation

```bash
npm install @gravity-ui/navigation
```

Stellen Sie sicher, dass die Peer-Abhängigkeiten in Ihrem Projekt installiert sind

```bash
npm install --dev @gravity-ui/uikit@^8.0.0 @gravity-ui/icons@^2.2.0 @bem-react/classname@^1.6.0 react@^19.0.0 react-dom@^19.0.0
```

## Migration

Upgrade von Version 7.x (`@gravity-ui/uikit` 8, React 18 oder 19): siehe [MIGRATION_GUIDE_v8.md](MIGRATION_GUIDE_v8.md).

Upgrade von Version 4.x, 5.x oder 6.x: folgen Sie zuerst [MIGRATION_GUIDE_v7.md](MIGRATION_GUIDE_v7.md) und dann [MIGRATION_GUIDE_v8.md](MIGRATION_GUIDE_v8.md).

## Verwendung

Rendern Sie `AsideHeader` als App-Shell. Es ist eine gesteuerte Komponente – Sie verwalten den zusammengeklappten Zustand über `compact`/`onChangeCompact` – und Ihr Seiteninhalt wird über `renderContent` bereitgestellt. Richten Sie zuerst die `@gravity-ui/uikit`-Stile und den `Provider` ein (siehe die [uikit-Stilanleitung](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles)).

```tsx
import React from 'react';
import {AsideHeader} from '@gravity-ui/navigation';
import {Gear, House} from '@gravity-ui/icons';
import {Provider} from '@gravity-ui/uikit';

import '@gravity-ui/uikit/styles/styles.css';

export function App() {
  const [compact, setCompact] = React.useState(false);

  return (
    <Provider theme="light">
      <AsideHeader
        logo={{text: 'Meine App', href: '/'}}
        compact={compact}
        onChangeCompact={setCompact}
        menuItems={[
          {id: 'home', title: 'Home', icon: House, current: true},
          {id: 'settings', title: 'Einstellungen', icon: Gear},
        ]}
        renderContent={() => <main>Seiteninhalt</main>}
      />
    </Provider>
  );
}
```

## Sandboxes

Einfach
https://codesandbox.io/p/devbox/navigation-demo-simple-x9k5sd

Fortgeschritten
https://codesandbox.io/p/devbox/recursing-dawn-6kc9vh

## Roadmap 2025

1. Unterstützung für SSR
2. Mehr Dokumentation und Beispiele zu [Gravity UI](https://gravity-ui.com/ru/components/navigation/aside-header) hinzufügen
3. Unterstützung für Navigation im UIKit-Themer
4. API für `subheaderItem`, `menuItem`, `footerItem` vereinheitlichen

## Komponenten

- [AsideHeader](https://github.com/gravity-ui/navigation/tree/main/src/components/AsideHeader/README.md)
  - [AllPagesPanel](https://github.com/gravity-ui/navigation/tree/main/src/components/AllPagesPanel/README.md)
  - PageLayout
- [PageLayoutAside](https://github.com/gravity-ui/navigation/tree/main/src/components/AsideHeader/README.md)
- AsideFallback
- FooterItem
- [Logo](https://github.com/gravity-ui/navigation/tree/main/src/components/Logo/Readme.md)
- [Drawer](https://github.com/gravity-ui/navigation/tree/main/src/components/Drawer/README.md)
- [DrawerItem](https://github.com/gravity-ui/navigation/blob/main/src/components/Drawer/README.md#draweritem-props)
- [MobileHeader](https://github.com/gravity-ui/navigation/tree/main/src/components/MobileHeader/README.md)
- MobileHeaderFooterItem
- MobileLogo
- [HotkeysPanel](https://github.com/gravity-ui/navigation/tree/main/src/components/HotkeysPanel/README.md)
- [Footer](https://github.com/gravity-ui/navigation/tree/main/src/components/Footer/README.md)
- [MobileFooter](https://github.com/gravity-ui/navigation/tree/main/src/components/Footer/README.md)
- [ActionBar](https://github.com/gravity-ui/navigation/tree/main/src/components/ActionBar/README.md)
- [Settings](https://github.com/gravity-ui/navigation/tree/main/src/components/Settings/README.md)

## CSS API

Wird für die Thematisierung von Navigationskomponenten verwendet

## Lizenz

Verteilt unter der MIT-Lizenz. Details finden Sie in [LICENSE](LICENSE).

## Für KI-Agenten

Anwendungs-Shell-Navigationskomponenten für Gravity UI-Apps – die einklappbare `AsideHeader`-Seitenleiste sowie Fußzeilen, Schubladen, Logos, Hotkeys und Einstellungsfenster, die eine ganze Seite umrahmen.

### Wann zu verwenden

- Der primäre Navigationsrahmen der App: `AsideHeader` (einklappbare Seitenleiste) mit `menuItems`, Unterkopfzeile und Fußzeilenabschnitten.
- Unterstützende Shell-UI: `Drawer`/`DrawerItem`, `Footer`/`MobileFooter`, `MobileHeader`, `HotkeysPanel`, `Settings`, `ActionBar`, `Logo`.
- Anordnung von Seiteninhalten innerhalb des Navigationsrahmens über `renderContent` / `PageLayout`.

### Wann nicht zu verwenden

- Allgemeine Steuerelemente innerhalb der Seite (Schaltflächen, Tabs, Menüs, Breadcrumbs) – verwenden Sie [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit); dieses Paket ist die äußere App-Chrome, keine allgemeinen Komponenten.
- Rendern des Seitenkörpers selbst aus Konfiguration – verwenden Sie [`@gravity-ui/page-constructor`](https://github.com/gravity-ui/page-constructor).
- Clientseitiges Routing – dies bietet nur die Navigations-UI; verknüpfen Sie Klicks mit Ihrem eigenen Router.

### Häufige Fallstricke

- **`AsideHeader` ist gesteuert.** Sie müssen den eingeklappten Zustand mit `compact` selbst verwalten und ihn in `onChangeCompact` aktualisieren. Wenn Sie `compact` ohne Handler übergeben, friert die Seitenleiste ein.
- **Menüpunkte sind `menuItems`, indiziert nach `id`.** Jeder Punkt ist `{id, title, icon, current, onItemClick}`; `icon` erwartet eine Icon-Komponente (z. B. von `@gravity-ui/icons`), keine Zeichenkette.
- **Peer-Abhängigkeiten sind erforderlich.** `@gravity-ui/uikit`, `@gravity-ui/icons` und `@bem-react/classname` müssen zusammen mit `react`/`react-dom` installiert werden.
- **Benötigt uikit-Setup.** Rendern Sie innerhalb von `Provider` und importieren Sie `@gravity-ui/uikit/styles/styles.css`, andernfalls wird die Shell ungestylt gerendert.
- **Seiteninhalt wird über `renderContent` übergeben.** Rendern Sie Ihren gerouteten Inhalt über die `renderContent`-Prop / `PageLayout`, nicht als `children`.

## Dokumentation für KI-Agenten

Agentenlesbare Dokumentation für die installierte Version befindet sich in `node_modules/@gravity-ui/navigation/build/docs/INDEX.md`.