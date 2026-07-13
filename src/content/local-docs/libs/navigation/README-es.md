# @gravity-ui/navigation &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/navigation)](https://www.npmjs.com/package/@gravity-ui/navigation) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/navigation/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/navigation/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/navigation/)

### Navegación de encabezado lateral &middot; [Vista previa →](https://preview.yandexcloud.dev/navigation/)

![](docs/images/showcase.png)

## Instalación

```bash
npm install @gravity-ui/navigation
```

Asegúrate de que las dependencias peer estén instaladas en tu proyecto

```bash
npm install --dev @gravity-ui/uikit@^7.2.0 @gravity-ui/icons@^2.2.0 @bem-react/classname@^1.6.0 react@^19.0.0 react-dom@^19.0.0
```

## Uso

Renderiza `AsideHeader` como el shell de la aplicación. Es un componente controlado: tú gestionas el estado colapsado a través de `compact`/`onChangeCompact`, y el contenido de tu página se pasa a través de `renderContent`. Configura primero los estilos de `@gravity-ui/uikit` y `ThemeProvider` (consulta la [guía de estilos de uikit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles)).

```tsx
import React from 'react';
import {AsideHeader} from '@gravity-ui/navigation';
import {Gear, House} from '@gravity-ui/icons';
import {ThemeProvider} from '@gravity-ui/uikit';

import '@gravity-ui/uikit/styles/styles.css';

export function App() {
  const [compact, setCompact] = React.useState(false);

  return (
    <ThemeProvider theme="light">
      <AsideHeader
        logo={{text: 'Mi App', href: '/'}}
        compact={compact}
        onChangeCompact={setCompact}
        menuItems={[
          {id: 'home', title: 'Inicio', icon: House, current: true},
          {id: 'settings', title: 'Configuración', icon: Gear},
        ]}
        renderContent={() => <main>Contenido de la página</main>}
      />
    </ThemeProvider>
  );
}
```

## Sandboxes

Básico
https://codesandbox.io/p/devbox/navigation-demo-simple-x9k5sd

Avanzado
https://codesandbox.io/p/devbox/recursing-dawn-6kc9vh

## Hoja de ruta 2025

1. Soporte para SSR
2. Añadir más documentación y ejemplos a [Gravity UI](https://gravity-ui.com/ru/components/navigation/aside-header)
3. Soporte para la temática de Navigation en UIKit
4. Unificar la API de `subheaderItem`, `menuItem`, `footerItem`

## Componentes

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

## API CSS

Se utiliza para la tematización de los componentes de Navigation

## Licencia

Distribuido bajo la Licencia MIT. Consulta [LICENSE](LICENSE) para más detalles.

## Para agentes de IA

Componentes de navegación de shell de aplicación para aplicaciones Gravity UI: la barra lateral `AsideHeader` colapsable, además de pies de página, cajones, logo, paneles de atajos de teclado y configuración que enmarcan una página completa.

### Cuándo usar

- El marco de navegación principal de la aplicación: `AsideHeader` (navegación lateral colapsable) con `menuItems`, subencabezado y secciones de pie de página.
- UI de shell de soporte: `Drawer`/`DrawerItem`, `Footer`/`MobileFooter`, `MobileHeader`, `HotkeysPanel`, `Settings`, `ActionBar`, `Logo`.
- Diseño del contenido de la página dentro del marco de navegación a través de `renderContent` / `PageLayout`.

### Cuándo no usar

- Controles genéricos dentro de la página (botones, pestañas, menús, breadcrumbs): usa [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit); este paquete es el cromo exterior de la aplicación, no componentes generales.
- Renderizar el cuerpo de la página en sí a partir de una configuración: usa [`@gravity-ui/page-constructor`](https://github.com/gravity-ui/page-constructor).
- Enrutamiento del lado del cliente: esto solo proporciona la UI de navegación; conecta los clics a tu propio enrutador.

### Errores comunes

- **`AsideHeader` es controlado.** Debes gestionar el estado colapsado con `compact` y actualizarlo en `onChangeCompact`; pasar `compact` sin el manejador congela la barra lateral.
- **Los elementos del menú son `menuItems`, indexados por `id`.** Cada elemento es `{id, title, icon, current, onItemClick}`; `icon` acepta un componente de icono (por ejemplo, de `@gravity-ui/icons`), no un nombre de cadena.
- **Se requieren dependencias peer.** `@gravity-ui/uikit`, `@gravity-ui/icons` y `@bem-react/classname` deben instalarse junto con `react`/`react-dom`.
- **Necesita configuración de uikit.** Renderiza dentro de `ThemeProvider` e importa `@gravity-ui/uikit/styles/styles.css`, o el shell se renderizará sin estilo.
- **El contenido de la página se pasa a través de `renderContent`.** Renderiza tu contenido enrutado a través de la prop `renderContent` / `PageLayout`, no como `children`.