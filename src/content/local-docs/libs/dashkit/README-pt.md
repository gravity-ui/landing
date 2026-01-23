# @gravity-ui/dashkit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dashkit)](https://www.npmjs.com/package/@gravity-ui/dashkit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dashkit/.github/workflows/ci.yaml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/dashkit/actions/workflows/ci.yaml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dashkit/)

# DashKit

Uma biblioteca para renderizar grades de dashboards.

## Instalação

```bash
npm i @gravity-ui/dashkit @gravity-ui/uikit
```

## Descrição

A biblioteca é usada para alinhar widgets em uma grade, redimensioná-los, adicionar novos e excluí-los.
O widget é um componente React. Por exemplo, texto, gráficos e imagens.

Novos widgets são adicionados através de um sistema de plugins.

### Plugins

Plugins são necessários para criar widgets personalizados.

### Props

```ts
type ItemManipulationCallback = (eventData: {
    layout: Layouts;
    oldItem: Layout;
    newItem: Layout;
    placeholder: Layout;
    e: MouseEvent;
    element: HTMLElement;
}) => void;

interface DashKitProps {
  config: Config;
  editMode: boolean;
  onItemEdit: ({id}: {id: string}) => void;
  onChange: (data: {config: Config; itemsStateAndParams: ItemsStateAndParams}) => void;
  onDrop: (dropProps: ItemDropProps) => void;
  onItemMountChange: (item: ConfigItem, state: {isAsync: boolead; isMounted: boolean}) => void;
  onItemRender: (item: ConfigItem) => void;

  onDragStart?: ItemManipulationCallback;
  onDrag?: ItemManipulationCallback;
  onDragStop?: ItemManipulationCallback;
  onResizeStart?: ItemManipulationCallback;
  onResize?: ItemManipulationCallback;
  onResizeStop?: ItemManipulationCallback;

  defaultGlobalParams: GlobalParams;
  globalParams: GlobalParams;
  itemsStateAndParams: ItemsStateAndParams;
  settings: SettingsProps;
  context: ContextProps;
  overlayControls?: Record<string, OverlayControlItem[]> | null;
  overlayMenuItems?: MenuItems[] | null;
  noOverlay?: boolean;

  focusable?: boolean;
  onItemFocus: (item: ConfigItem) => void;
  onItemBlur: (item: ConfigItem) => void;

  draggableHandleClassName?: string;
  getPreparedCopyItemOptions?: (options: PreparedCopyItemOptions) => PreparedCopyItemOptions;
  onCopyFulfill?: (error: null | Error, data?: PreparedCopyItemOptions) => void;
}
```

- **config**: [Config](#Config).
- **editMode**: Se o modo de edição está ativado.
- **onItemEdit**: Chamado quando você clica para editar um widget.
- **onChange**: Chamado quando a configuração ou [itemsStateAndParams](#itemsStateAndParams) são alterados.
- **onDrop**: Chamado quando um item é solto do ActionPanel usando (#DashKitDnDWrapper)
- **onItemMountChange**: Chamado quando o estado de montagem do item é alterado
- **onItemRender**: Chamado quando a renderização do item é concluída
- **defaultGlobalParams**, **globalParams**: [Parâmetros](#Params) que afetam todos os widgets. No DataLens, `defaultGlobalParams` são parâmetros globais definidos nas configurações do dashboard. `globalParams` são parâmetros globais que podem ser definidos na URL.
- **itemsStateAndParams**: [itemsStateAndParams](#itemsStateAndParams).
- **settings**: Configurações do DashKit.
- **context**: Objeto que será passado para todos os widgets.
- **overlayControls**: Objeto que substitui os controles do widget no momento da edição. Se não for transmitido, controles básicos serão exibidos. Se `null` for passado, apenas o botão de fechar ou um menu personalizado será exibido.
- **overlayMenuItems**: Itens de menu suspensos personalizados
- **noOverlay**: Se `true`, a sobreposição e os controles não são exibidos durante a edição.
- **focusable**: Se `true`, os itens da grade serão focáveis.
- **onItemFocus**: Chamado quando `focusable` é true e o item recebe foco.
- **onItemBlur**: Chamado quando `focusable` é true e o item perde o foco.
- **draggableHandleClassName**: Nome da classe CSS do elemento que torna o widget arrastável.
- **onDragStart**: Chamado pelo ReactGridLayout quando o arrasto do item começa
- **onDrag**: Chamado pelo ReactGridLayout durante o arrasto do item
- **onDragStop**: Chamado pelo ReactGridLayout quando o arrasto do item para
- **onResizeStart**: Chamado pelo ReactGridLayout quando o redimensionamento do item começa
- **onResize**: Chamado pelo ReactGridLayout durante o redimensionamento do item
- **onResizeStop**: Chamado pelo ReactGridLayout quando o redimensionamento do item para
- **getPreparedCopyItemOptions**: Chamado para converter um item copiado em um objeto serializável antes de salvá-lo no localStorage. Deve ser usado em vez da prop depreciada `context.getPreparedCopyItemOptions`.
- **onCopyFulfill**: Chamado quando a cópia do item é concluída com `error=null` e `data` definido em caso de sucesso, e com `error: Error` sem `data` caso contrário.

## Uso

### Configuração do DashKit

Antes de usar o `DashKit` como um componente React, ele deve ser configurado.

- Definir idioma

  ```js
  import {configure, Lang} from '@gravity-ui/uikit';

  configure({lang: Lang.En});
  ```

- DashKit.setSettings

  Usado para configurações globais do DashKit (como margens entre widgets, tamanhos padrão de widgets e menu de sobreposição de widgets)

  ```js
  import {DashKit} from '@gravity-ui/dashkit';

  DashKit.setSettings({
    gridLayout: {margin: [8, 8]},
    isMobile: true,
    // menu: [] as Array<MenuItem>,
  });
  ```

- DashKit.registerPlugins

  Registrando e configurando plugins

  ```js
  import {DashKit} from '@gravity-ui/dashkit';
  import {pluginTitle, pluginText} from '@gravity-ui/dashkit';

  DashKit.registerPlugins(
    pluginTitle,
    pluginText.setSettings({
      apiHandler({text}) {
        return api.getMarkdown(text);
      },
    }),
  );

  DashKit.registerPlugins({
    type: 'custom',
    defaultLayout: {
      w: 10,
      h: 8,
    },
    renderer: function CustomPlugin() {
      return <div>Custom widget with custom controls</div>;
    },
  });
  ```

### Config

```ts
export interface Config {
  salt: string; // para formar um ID único
  counter: number; // para formar um ID único, apenas aumenta
  items: ConfigItem[]; // estados iniciais dos widgets
  layout: ConfigLayout[]; // posição do widget na grade https://github.com/react-grid-layout
  aliases: ConfigAliases; // aliases para parâmetros veja #Params
  connections: ConfigConnection[]; // links entre widgets veja #Params
}
```

Exemplo de configuração:

```ts
import {DashKitProps} from '@gravity-ui/dashkit';
```

```ts
const config: DashKitProps['config'] = {
  salt: '0.46703554571365613',
  counter: 4,
  items: [
    {
      id: 'tT',
      data: {
        size: 'm',
        text: 'Legenda',
        showInTOC: true,
      },
      type: 'title',
      namespace: 'default',
      orderId: 1,
    },
    {
      id: 'Ea',
      data: {
        text: 'modo _editActive',
        _editActive: true,
      },
      type: 'text',
      namespace: 'default',
    },
    {
      id: 'zR',
      data: {
        text: '### Texto',
      },
      type: 'text',
      namespace: 'default',
      orderId: 0,
    },
    {
      id: 'Dk',
      data: {
        foo: 'bar',
      },
      type: 'custom',
      namespace: 'default',
      orderId: 5,
    },
  ],
  layout: [
    {
      h: 2,
      i: 'tT',
      w: 36,
      x: 0,
      y: 0,
    },
    {
      h: 6,
      i: 'Ea',
      w: 12,
      x: 0,
      y: 2,
    },
    {
      h: 6,
      i: 'zR',
      w: 12,
      x: 12,
      y: 2,
    },
    {
      h: 4,
      i: 'Dk',
      w: 8,
      x: 0,
      y: 8,
    },
  ],
  aliases: {},
  connections: [],
};
```

Adicione um novo item à configuração:

```ts
const newLayout = updateLayout: [
  {
    h: 6,
    i: 'Ea',
    w: 12,
    x: 0,
    y: 6,
  },
  {
    h: 4,
    i: 'Dk',
    w: 8,
    x: 0,
    y: 12,
  },
];

const newConfig = DashKit.setItem({
  item: {
    data: {
      text: `Algum texto`,
    },
    namespace: 'default',
    type: 'text',
    // Opcional. Se o novo item precisar ser inserido no layout atual com dimensões predefinidas
    layout: { // Item atual inserido antes de 'Ea'
      h: 6,
      w: 12,
      x: 0,
      y: 2,
    },,
  },
  config: config,
  options: {
    // Opcional. Novos valores de layout para itens existentes quando um novo elemento é arrastado do ActionPanel
    updateLayout: newLayout,
  },
});
```

Altere um item existente na configuração:

```ts
const newConfig = DashKit.setItem({
  item: {
    id: 'tT', // item.id
    data: {
      size: 'm',
      text: `Nova legenda`,
    },
    namespace: 'default',
    type: 'title',
  },
  config: config,
});
```

Exclua um item da configuração:

```ts
import {DashKitProps} from '@gravity-ui/dashkit';

const oldItemsStateAndParams: DashKitProps['itemsStateAndParams'] = {};

const {config: newConfig, itemsStateAndParams} = DashKit.removeItem({
  id: 'tT', // item.id
  config: config,
  itemsStateAndParams: this.state.itemsStateAndParams,
});
```

### Parâmetros

```ts
type Params = Record<string, string | string[]>;
```

O `DashKit` gera parâmetros de acordo com os parâmetros padrão para widgets, links e aliases. Esses parâmetros são necessários para a biblioteca [ChartKit](https://github.com/gravity-ui/chartkit).

Ordem de geração:

1. `defaultGlobalParams`
2. Parâmetros padrão do widget `item.default`
3. `globalParams`
4. Parâmetros de [itemsStateAndParams](#itemsStateAndParams) de acordo com a fila.

### itemsStateAndParams

Objeto que armazena parâmetros e estados de widgets, bem como uma fila de alterações de parâmetros.
Ele possui um campo `__meta__` para armazenar informações de fila e metadados.

```ts
interface StateAndParamsMeta = {
    __meta__: {
        queue: {id: string}[]; // fila
        version: number; // versão atual de itemsStateAndParams
    };
}
```

E também estados e parâmetros de widgets:

```ts
interface ItemsStateAndParamsBase {
  [itemId: string]: {
    state?: Record<string, any>;
    params?: Params;
  };
}
```

```ts
type ItemsStateAndParams = StateAndParamsMeta & ItemsStateAndParamsBase;
```

### Menu

Você pode especificar um menu de sobreposição personalizado para widgets do DashKit no modo de edição.

```ts
type MenuItem = {
  id: string; // id único
  title?: string; // título em string
  icon?: ReactNode; // nó do ícone
  iconSize?: number | string; // tamanho do ícone em px como número ou como string com unidades
  handler?: (item: ConfigItem) => void; // manipulador de ação personalizado do item
  visible?: (item: ConfigItem) => boolean; // manipulador de visibilidade opcional para filtrar itens do menu
  className?: string; // propriedade de classe personalizada
};

// use um array de itens de menu nas configurações
<Dashkit overlayMenuItems={[] as Array<MenuItem> | null} />

[obsoleto]
// a propriedade overlayMenuItems tem prioridade maior sobre o menu setSettings
DashKit.setSettings({menu: [] as Array<MenuItem>});
```

### Itens arrastáveis do ActionPanel

#### DashKitDnDWrapper

```ts
type DraggedOverItem = {
  h: number;
  w: number;
  type: string;
  parent: string;
  i?: number;
};

interface DashKitDnDWrapperProps {
  dragImageSrc?: string;
  onDragStart?: (dragProps: ItemDragProps) => void;
  onDragEnd?: () => void;
  onDropDragOver?: (draggedItem: DraggedOverItem, sharedItem: DraggedOverItem | null) => void | boolean;
}
```

- **dragImageSrc**: Prévia da imagem de arrastar, por padrão é usado um png transparente de 1px em base64.
- **onDragStart**: Callback chamado quando um elemento é arrastado do ActionPanel.
- **onDragEnd**: Callback chamado quando um elemento é solto ou o arrasto é cancelado.

```ts
type ItemDragProps = {
    type: string; // Tipo do plugin
    layout?: { // Opcional. Tamanho do item do layout para pré-visualização e inicialização
        w?: number;
        h?: number;
    };
    extra?: any; // Contexto customizado do usuário
};
```

```ts
type ItemDropProps = {
    commit: () => void; // O callback deve ser chamado após todas as operações de configuração serem feitas
    dragProps: ItemDragProps; // Props de arrastar do item
    itemLayout: ConfigLayout; // Dimensões do layout do item calculadas
    newLayout: ConfigLayout[]; // Novo layout após o elemento ser solto
};
```


#### Exemplo:

```jsx
const overlayMenuItems = [
  {
    id: 'chart',
    icon: <Icon data={ChartColumn} />,
    title: 'Chart',
    qa: 'chart',
    dragProps: { // ItemDragProps
        type: 'custom', // Tipo de plugin registrado
    },
  }
]

const onDrop = (dropProps: ItemDropProps) => {
  // ... adicione o elemento à sua configuração
  dropProps.commit();
}

<DashKitDnDWrapper>
  <DashKit editMode={true} config={config} onChange={onChange} onDrop={onDrop} />
  <ActionPanel items={overlayMenuItems} />
</DashKitDnDWrapper>
```

### API CSS

| Nome                                           | Descrição           |
| :--------------------------------------------- | :-------------------- |
| Variáveis do painel de ação                         |                       |
| `--dashkit-action-panel-color`                 | Cor de fundo      |
| `--dashkit-action-panel-border-color`          | Cor da borda          |
| `--dashkit-action-panel-border-radius`         | Raio da borda         |
| Variáveis do item do painel de ação                    |                       |
| `--dashkit-action-panel-item-color`            | Cor de fundo       |
| `--dashkit-action-panel-item-text-color`       | Cor do texto      |
| `--dashkit-action-panel-item-color-hover`      | Cor de fundo ao passar o mouse |
| `--dashkit-action-panel-item-text-color-hover` | Cor do texto ao passar o mouse      |
| Variáveis da sobreposição                              |                       |
| `--dashkit-overlay-border-color`               | Cor da borda          |
| `--dashkit-overlay-color`                      | Cor de fundo                      |
| `--dashkit-overlay-opacity`                    | Opacidade               |
| Variáveis do item da grade                             |                       |
| `--dashkit-grid-item-edit-opacity`             | Opacidade               |
| `--dashkit-grid-item-border-radius`            | Raio da borda            |
| Variáveis do placeholder                           |                       |
| `--dashkit-placeholder-color`                  | Cor de fundo                      |
| `--dashkit-placeholder-opacity`                | Opacidade               |

#### Exemplo de uso

```css
.custom-theme-wrapper {
  --dashkit-grid-item-edit-opacit: 1;
  --dashkit-overlay-color: var(--g-color-base-float);
  --dashkit-overlay-border-color: var(--g-color-base-float);
  --dashkit-overlay-opacity: 0.5;

  --dashkit-action-panel-border-color: var(--g-color-line-info);
  --dashkit-action-panel-color: var(--g-color-base-float-accent);
  --dashkit-action-panel-border-radius: var(--g-border-radius-xxl);
}
```

```tsx
// ....

const CustomThemeWrapper = (props: {
  dashkitProps: DashkitProps;
  actionPanelProps: ActionPanelProps;
}) => {
  return (
    <div className="custom-theme-wrapper">
      <Dashkit {...props.dashkitProps} />
      <ActionPanel {...props.actionPanelProps} />
    </div>
  );
};
```

## Desenvolvimento

### Build e watch

- Construir dependências `npm ci`
- Construir o projeto `npm run build`
- Construir o storybook `npm run start`

Por padrão, o storybook roda em `http://localhost:7120/`.
Novas alterações no projeto nem sempre são capturadas quando o storybook está em execução, então é melhor reconstruir o projeto manualmente e reiniciar o storybook.


### Exemplo de configuração nginx para desenvolvimento em uma máquina de desenvolvimento

```bash
server {
    server_name dashkit.username.ru;

    include common/ssl;

    access_log /home/username/logs/common.access.log;
    error_log /home/username/logs/common.error.log;

    root /home/username/projects/dashkit;

    location / {
        try_files $uri @node;
    }

    location @node {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://127.0.0.1:7120;
        proxy_redirect off;
    }
}

```