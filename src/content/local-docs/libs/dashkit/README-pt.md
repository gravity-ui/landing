# DashKit

Uma biblioteca para renderizar grades de dashboards.

A entrada `@gravity-ui/dashkit/gridstack`, que é opcional, exporta `DashKitGridStack` para layouts salvos planos e aninhados usando GridStack 12.6.0. Ela compartilha registro de plugins, atualizações controladas, refs, prontidão e autoheight com DashKit. A funcionalidade de arrastar nativa suporta transferências entre zonas e contêineres, incluindo subárvores de contêineres inteiras. A paleta externa solta pré-visualizações e aplica o documento completo, incluindo contêineres deslocados. Consulte a [documentação do GridStack](docs/gridstack.md) para a API suportada, o [formato de documento aninhado](docs/gridstack.md#nested-document-format) e a carga útil da paleta.

`DashKitGridStack` valida a configuração antes de renderizar e antes de edições estáticas. Geometria inválida, IDs de widget/seletor duplicados, entradas de layout órfãs e documentos aninhados geram erros `DashKitGridStack:`; os hosts devem validar documentos salvos ou usar um "error boundary". Itens sem entradas de layout permanecem desmontados. Layouts controlados usam o modo de compactação configurado; defina `compactType: null` para reter espaços.

Ambos os renderizadores também entregam geometria de movimentação/redimensionamento reconhecida às props do plugin e ao contexto de layout. O legado `DashKit` consome reconhecimentos durante um arrasto ativo sem reproduzir geometria antiga quando esse gesto termina.

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
  layout: Layout[];
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
- **editMode**: Se o modo de edição está habilitado.
- **onItemEdit**: Chamado quando você clica para editar um widget.
- **onChange**: Chamado quando a configuração ou [itemsStateAndParams](#itemsStateAndParams) são alterados.
- **onDrop**: Chamado quando um item é solto do ActionPanel usando (#DashKitDnDWrapper)
- **onItemMountChange**: Chamado quando o estado de montagem do item é alterado
- **onItemRender**: Chamado quando a renderização do item é concluída
- **defaultGlobalParams**, **globalParams**: [Parâmetros](#Params) que afetam todos os widgets. No DataLens, `defaultGlobalParams` são parâmetros globais definidos nas configurações do dashboard. `globalParams` são parâmetros globais que podem ser definidos na URL.
- **itemsStateAndParams**: [itemsStateAndParams](#itemsStateAndParams).
- **settings**: Configurações do DashKit. Opcionalmente, `isolateItemUpdates: true` suprime atualizações do renderizador causadas apenas por alterações de layout de outros widgets. Dados próprios, estado, parâmetros, geometria, configurações, contexto e callbacks ainda são atualizados; o padrão mantém atualizações completas do renderizador de layout. Memoizar `settings` e `context` entre renderizações: novas referências de objeto acionam atualizações do renderizador mesmo com o isolamento habilitado. Com o isolamento habilitado, plugins que leem a geometria de irmãos através de `layout` podem observar valores de irmãos desatualizados.
- **context**: Objeto que será passado para todos os widgets.
- **overlayControls**: Objeto que substitui os controles do widget no momento da edição. Se não for transmitido, controles básicos serão exibidos. Se `null` for passado, apenas o botão de fechar ou um menu personalizado será exibido.
- **overlayMenuItems**: Itens de menu suspensos personalizados
- **noOverlay**: Se `true`, a sobreposição e os controles não são exibidos durante a edição.
- **focusable**: Se `true`, os itens da grade serão focáveis.
- **onItemFocus**: Chamado quando `focusable` é true e o item está focado.
- **onItemBlur**: Chamado quando `focusable` é true e o item perde o foco.
- **draggableHandleClassName**: Nome da classe CSS do elemento que torna o widget arrastável.
- **onDragStart**: Chamado pelo ReactGridLayout quando o arrasto do item começou
- **onDrag**: Chamado pelo ReactGridLayout enquanto o item está sendo arrastado
- **onDragStop**: Chamado pelo ReactGridLayout quando o arrasto do item parou
- **onResizeStart**: Chamado pelo ReactGridLayout quando o redimensionamento do item começou
- **onResize**: Chamado pelo ReactGridLayout enquanto o item está sendo redimensionado
- **onResizeStop**: Chamado pelo ReactGridLayout quando o redimensionamento do item parou
- **getPreparedCopyItemOptions**: Chamado para converter um item copiado em um objeto serializável antes de salvá-lo no localStorage. Deve ser usado em vez da prop depreciada `context.getPreparedCopyItemOptions`
- **onCopyFulfill**: Chamado quando a cópia do item é concluída com `error=null` e `data` definido em caso de sucesso, e com `error: Error` sem `data` caso contrário

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

  Registro e configuração de plugins

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
  ```

```typescript
  DashKit.registerPlugins({
    type: 'custom',
    defaultLayout: {
      w: 10,
      h: 8,
    },
    renderer: function CustomPlugin() {
      return <div>Widget personalizado com controles personalizados</div>;
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

Exemplo de Config:

```ts
import {DashKitProps} from '@gravity-ui/dashkit';

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

Adicionar um novo item à config:

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
    // Opcional. Se um novo item precisar ser inserido no layout atual com dimensões predefinidas
    layout: { // Item atual inserido antes de 'Ea'
      h: 6,
      w: 12,
      x: 0,
      y: 2,
    },,
  },
  config: config,
  options: {
    // Opcional. Novos valores de layout para itens existentes quando um novo elemento é solto do ActionPanel
    updateLayout: newLayout,
  },
});
```

Alterar um item existente na config:

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

Excluir um item da config:

```ts
import {DashKitProps} from '@gravity-ui/dashkit';

const oldItemsStateAndParams: DashKitProps['itemsStateAndParams'] = {};

const {config: newConfig, itemsStateAndParams} = DashKit.removeItem({
  id: 'tT', // item.id
  config: config,
  itemsStateAndParams: this.state.itemsStateAndParams,
});
```

### Params

```ts
type Params = Record<string, string | string[]>;
```

`DashKit` gera parâmetros de acordo com os parâmetros padrão para widgets, links e aliases. Esses parâmetros são necessários para a biblioteca [ChartKit](https://github.com/gravity-ui/chartkit).

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

### Eventos experimentais do DashKit

> Experimental: esta API pode mudar em lançamentos menores.

`DashKit` expõe uma API experimental de eventos de instância. Use uma referência de componente e assine com `dashkitRef.current?.on(eventName, handler)`. O método retorna um callback de cancelamento de inscrição.

O primeiro evento suportado é `change`. Ele é emitido quando o layout muda, antes que `onChange` seja chamado. O manipulador pode ler os layouts completo, anterior e posterior, ler patches de layout ou chamar `preventDefault()` para interromper a chamada padrão de `onChange`.

```tsx
import React from 'react';
import {DashKit} from '@gravity-ui/dashkit';
import type {DashKitChangeEvent} from '@gravity-ui/dashkit';

function Dashboard() {
  const dashkitRef = React.useRef<DashKit>(null);
```

```tsx
function Dashboard() {
  const [config, setConfig] = useState(initialConfig);
  const dashkitRef = useRef<DashKit>(null);

  React.useEffect(() => {
    const unsubscribe = dashkitRef.current?.on('change', (event: DashKitChangeEvent) => {
      console.log(event.patches);

      if (event.patches.length > 0) {
        event.preventDefault();
      }
    });

    return () => unsubscribe?.();
  }, []);

  return <DashKit ref={dashkitRef} config={config} editMode={true} onChange={onChange} />;
}
```

```ts
type DashKitLayoutPatch = Pick<ConfigLayout, 'i'> &
  Partial<Pick<ConfigLayout, 'x' | 'y' | 'w' | 'h' | 'parent'>>;

type DashKitChangeEvent = {
  patches: DashKitLayoutPatch[];
  layout: ConfigLayout[];
  previousLayout: ConfigLayout[];
  preventDefault: () => void;
  readonly defaultPrevented: boolean;
};
```

#### Atualizações de layout orientadas a eventos

Se você usar `preventDefault()` no manipulador de eventos `change`, agora poderá lidar com as atualizações de layout sem reinicializar a prop `config`. O DashKit mantém uma linha de base interna e calcula os patches incrementalmente:

```tsx
function Dashboard() {
  const [config, setConfig] = useState(initialConfig);
  const dashkitRef = useRef<DashKit>(null);

  useEffect(() => {
    const unsubscribe = dashkitRef.current?.on('change', (event) => {
      event.preventDefault(); // Não chame onChange

      // Envie apenas os patches incrementais para o seu backend
      sendPatches(event.patches);

      // Não é necessário chamar setConfig({ ...config, layout: event.layout })
      // O DashKit mantém o estado visual internamente
    });

    return unsubscribe;
  }, []);

  return <DashKit ref={dashkitRef} config={config} editMode onChange={() => {}} />;
}
```

**Importante:** Se você atualizar `config.layout` posteriormente a partir das props (por exemplo, de uma sincronização do servidor), o DashKit redefinirá sua linha de base interna para corresponder à nova prop. Isso garante compatibilidade com fluxos de trabalho orientados a eventos e controlados.

### Menu

Você pode especificar um menu de sobreposição de widget DashKit personalizado no modo de edição

```ts
type MenuItem = {
  id: string; // id único
  title?: string; // título em string
  icon?: ReactNode; // nó do ícone
  iconSize?: number | string; // tamanho do ícone em px como número ou como string com unidades
  handler?: (item: ConfigItem) => void; // manipulador de ação de item personalizado
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
  onDropDragOver?: (
    draggedItem: DraggedOverItem,
    sharedItem: DraggedOverItem | null,
  ) => void | boolean;
}
```

- **dragImageSrc**: Imagem de arrastar personalizada opcional. Por padrão, o item do ActionPanel arrastado é mostrado como prévia.
- **onDragStart**: Callback chamado quando o elemento é arrastado do ActionPanel
- **onDragEnd**: Callback chamado quando o elemento é solto ou o arrasto é cancelado

```ts
type ItemDragProps = {
  type: string; // Tipo de plugin
  layout?: {
    // Opcional. Tamanho do item de layout para prévia e inicialização
    w?: number;
    h?: number;
  };
  extra?: any; // Contexto personalizado do usuário
};
```

```ts
type ItemDropProps = {
  commit: () => void; // O callback deve ser chamado após todas as operações de configuração serem feitas
  dragProps: ItemDragProps; // Props de arrastar do item
  itemLayout: ConfigLayout; // Dimensões de layout do item calculadas
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
| :--------------------------------------------- | :------------------ |
| Variáveis do painel de ação                         |                     |
| `--dashkit-action-panel-color`                 | Cor de fundo        |
| `--dashkit-action-panel-border-color`          | Cor da borda        |
| `--dashkit-action-panel-border-radius`         | Raio da borda       |
| Variáveis do item do painel de ação                    |                     |
| `--dashkit-action-panel-item-color`            | Cor de fundo        |
| `--dashkit-action-panel-item-text-color`       | Cor do texto        |
| `--dashkit-action-panel-item-color-hover`      | Cor de fundo ao passar o mouse |
| `--dashkit-action-panel-item-color-dragging`   | Cor de fundo ao arrastar |
| `--dashkit-action-panel-item-text-color-hover` | Cor do texto ao passar o mouse |
| `--dashkit-action-panel-item-text-color-dragging` | Cor do texto ao arrastar |
| Variáveis de sobreposição                             |                     |
| `--dashkit-overlay-border-color`               | Cor da borda        |
| `--dashkit-overlay-color`                      | Cor de fundo        |
| `--dashkit-overlay-opacity`                    | Opacidade           |
| Variáveis do item da grade                             |                     |
| `--dashkit-grid-item-edit-opacity`             | Opacidade           |
| `--dashkit-grid-item-border-radius`            | Raio da borda       |
| Variáveis de espaço reservado                         |                     |
| `--dashkit-placeholder-color`                  | Cor de fundo        |
| `--dashkit-placeholder-opacity`                | Opacidade           |

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

### Compilar e observar

- Compilar dependências `npm ci`
- Compilar o projeto `npm run build`
- Compilar o storybook `npm run start`

Por padrão, o storybook é executado em `http://localhost:7120/`.
Novas alterações em um projeto nem sempre são capturadas quando o storybook está em execução, portanto, é melhor recompilar um projeto manualmente e reiniciar o storybook.

### Exemplo de configuração do nginx para desenvolvimento em uma máquina de desenvolvimento

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

## Licença

Distribuído sob a Licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## Para agentes de IA

Um compositor de grade de painel que organiza widgets redimensionáveis e arrastáveis em uma grade responsiva por meio de um sistema de plugins — utilize-o ao construir um painel editável pelo usuário (adicionar/mover/redimensionar/excluir widgets) em vez de posicionar gráficos ou painéis individuais manualmente.

### Quando usar

- Renderizar um painel configurável onde os widgets são posicionados, redimensionados e reorganizados em uma grade (construído sobre `react-grid-layout`).
- Layouts editáveis pelo usuário: adicionar/remover widgets de um painel de ação, arrastar e soltar, modo de edição com controles de sobreposição.
- Widgets baseados em plugins onde cada tipo de widget (título, texto, gráfico, personalizado) é registrado uma vez e controlado por uma `config`.

### Quando não usar

- Para um único gráfico ou painel fixo, use [`@gravity-ui/charts`](https://gravity-ui.com/charts) ou [`@gravity-ui/chartkit`](https://github.com/gravity-ui/chartkit) diretamente — a infraestrutura de grade/plugin é um overhead para um único widget.
- Para uma grade responsiva de propósito geral que não seja um painel de widgets, use `react-grid-layout` diretamente.
- Para incorporar widgets de gráfico com suporte a ChartKit dentro de um painel DashKit, o DashKit é o invólucro; ele ainda depende de [`@gravity-ui/chartkit`](https://github.com/gravity-ui/chartkit) para renderizar os gráficos reais.

### Armadilhas comuns

- **Component `<Dashboard>` alucinado** — a exportação é `<DashKit>` (o shell de arrastar e soltar é `<DashKitDnDWrapper>` envolvendo `<DashKit>` + `<ActionPanel>`).
- **Mutando `config` em vez de usar helpers** — use os helpers estáticos `DashKit.setItem({...})` / `DashKit.removeItem({...})` para adicionar/alterar/remover itens, para que o layout e os IDs permaneçam consistentes.
- **Esquecendo `DashKit.setSettings` / `DashKit.registerPlugins`** — o componente deve ser configurado (idioma, configurações de grade, registro de plugins) antes de ser renderizado, ou os widgets não mostrarão nada.
- **Confundindo as duas props de parâmetros** — `defaultGlobalParams` (padrões no nível do dashboard) vs `globalParams` (globais que podem ser sobrescritos pela URL); ambos fluem para a fila de geração de parâmetros consumida pelo ChartKit.
- **Chamando `onChange` manualmente com o evento `change`** — quando você usa `event.preventDefault()` no handler experimental `change`, o DashKit mantém o estado visual internamente; redefinir `config.layout` a partir das props redefine essa linha de base.

## Documentação para agentes de IA

A documentação legível por agentes para a versão instalada está localizada em `node_modules/@gravity-ui/dashkit/build/docs/INDEX.md`.