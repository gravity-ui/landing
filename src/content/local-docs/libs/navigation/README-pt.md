# @gravity-ui/navigation &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/navigation)](https://www.npmjs.com/package/@gravity-ui/navigation) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/navigation/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/navigation/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/navigation/)

### Navegação do Cabeçalho Lateral &middot; [Preview →](https://preview.yandexcloud.dev/navigation/)

![](docs/images/showcase.png)

## Instalar

```bash
npm install @gravity-ui/navigation
```

Certifique-se de que as dependências "peer" estejam instaladas em seu projeto

```bash
npm install --dev @gravity-ui/uikit@^7.2.0 @gravity-ui/icons@^2.2.0 @bem-react/classname@^1.6.0 react@^19.0.0 react-dom@^19.0.0
```

## Uso

Renderize `AsideHeader` como o "app shell". É um componente controlado — você gerencia o estado recolhido através de `compact`/`onChangeCompact` — e o conteúdo da sua página é passado por `renderContent`. Configure os estilos do `@gravity-ui/uikit` e o `ThemeProvider` primeiro (veja o [guia de estilos do uikit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles)).

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
        logo={{text: 'Meu App', href: '/'}}
        compact={compact}
        onChangeCompact={setCompact}
        menuItems={[
          {id: 'home', title: 'Início', icon: House, current: true},
          {id: 'settings', title: 'Configurações', icon: Gear},
        ]}
        renderContent={() => <main>Conteúdo da página</main>}
      />
    </ThemeProvider>
  );
}
```

## Sandboxes

Básico
https://codesandbox.io/p/devbox/navigation-demo-simple-x9k5sd

Avançado
https://codesandbox.io/p/devbox/recursing-dawn-6kc9vh

## Roadmap 2025

1. Suporte a SSR
2. Adicionar mais documentação e exemplos ao [Gravity UI](https://gravity-ui.com/ru/components/navigation/aside-header)
3. Suporte à navegação no tema do UIKit
4. Unificar a API de `subheaderItem`, `menuItem`, `footerItem`

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

Usado para tematizar os componentes de Navegação

## Licença

Distribuído sob a Licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## Para agentes de IA

Componentes de navegação de "application-shell" para aplicativos Gravity UI — a barra lateral `AsideHeader` recolhível, mais rodapés, drawers, logo, painéis de atalhos e configurações que compõem uma página inteira.

### Quando usar

- O frame de navegação principal do aplicativo: `AsideHeader` (navegação lateral recolhível) com `menuItems`, seções de subcabeçalho e rodapé.
- UI de suporte do shell: `Drawer`/`DrawerItem`, `Footer`/`MobileFooter`, `MobileHeader`, `HotkeysPanel`, `Settings`, `ActionBar`, `Logo`.
- Organização do conteúdo da página dentro do frame de navegação via `renderContent` / `PageLayout`.

### Quando não usar

- Controles genéricos dentro da página (botões, abas, menus, breadcrumbs) — use [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit); este pacote é o "chrome" externo do aplicativo, não componentes gerais.
- Renderização do corpo da página a partir de configuração — use [`@gravity-ui/page-constructor`](https://github.com/gravity-ui/page-constructor).
- Roteamento do lado do cliente — isso fornece apenas a UI de navegação; conecte os cliques ao seu próprio roteador.

### Armadilhas comuns

- **`AsideHeader` é controlado.** Você deve gerenciar o estado recolhido com `compact` e atualizá-lo em `onChangeCompact`; passar `compact` sem o manipulador congela a barra lateral.
- **Os itens do menu são `menuItems`, identificados por `id`.** Cada item é `{id, title, icon, current, onItemClick}`; `icon` aceita um componente de ícone (por exemplo, de `@gravity-ui/icons`), não um nome de string.
- **Dependências "peer" são necessárias.** `@gravity-ui/uikit`, `@gravity-ui/icons` e `@bem-react/classname` devem ser instalados juntamente com `react`/`react-dom`.
- **Requer configuração do uikit.** Renderize dentro de `ThemeProvider` e importe `@gravity-ui/uikit/styles/styles.css`, ou o shell será renderizado sem estilo.
- **O conteúdo da página passa por `renderContent`.** Renderize seu conteúdo roteado através da prop `renderContent` / `PageLayout`, não como `children`.