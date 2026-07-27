# @gravity-ui/dashkit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dashkit)](https://www.npmjs.com/package/@gravity-ui/dashkit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dashkit/.github/workflows/ci.yaml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/dashkit/actions/workflows/ci.yaml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dashkit/)

# DashKit

Uma biblioteca para renderizar grades

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

Adicionar um novo item à configuração:

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

Alterar um item existente na configuração:

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

Excluir um item da configuração:

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

### Eventos experimentais do DashKit

> Experimental: esta API pode mudar em lançamentos menores.

O `DashKit` expõe uma API experimental de eventos de instância. Use uma referência de componente e assine com `dashkitRef.current?.on(eventName, handler)`. O método retorna uma função de cancelamento de inscrição.

O primeiro evento suportado é `change`. Ele é emitido quando o layout muda, antes que `onChange` seja chamado. O manipulador pode ler os layouts completo, anterior e os patches de layout, ou chamar `preventDefault()` para interromper a chamada padrão de `onChange`.

```tsx
import React from 'react';
import {DashKit} from '@gravity-ui/dashkit';
import type {DashKitChangeEvent} from '@gravity-ui/dashkit';

function Dashboard() {
  const dashkitRef = React.useRef<DashKit>(null);

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

Se você usar `preventDefault()` no manipulador de eventos `change`, agora poderá lidar com atualizações de layout sem reinicializar a prop `config`. O DashKit mantém uma linha de base interna e calcula os patches incrementalmente:

```tsx
function Dashboard() {
  const [config, setConfig] = useState(initialConfig);
  const dashkit

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

- Instalar dependências `npm ci`
- Compilar o projeto `npm run build`
- Compilar o storybook `npm run start`

Por padrão, o storybook roda em `http://localhost:7120/`.
Novas alterações no projeto nem sempre são capturadas quando o storybook está rodando, então é melhor recompilar o projeto manualmente e reiniciar o storybook.

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

## Licença

Distribuído sob a Licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## Para agentes de IA

Um compositor de grade de dashboard que organiza widgets redimensionáveis e arrastáveis em uma grade responsiva através de um sistema de plugins — utilize-o ao construir um dashboard editável pelo usuário (adicionar/mover/redimensionar/excluir widgets) em vez de posicionar gráficos ou painéis individuais manualmente.

### Quando usar

- Renderizar um dashboard configurável onde os widgets são posicionados, redimensionados e reorganizados em uma grade (construído sobre `react-grid-layout`).
- Layouts editáveis pelo usuário: adicionar/remover widgets de um painel de ação, arrastar e soltar, modo de edição com controles de sobreposição.
- Widgets baseados em plugins onde cada tipo de widget (título, texto, gráfico, customizado) é registrado uma vez e controlado por uma `config`.

### Quando não usar

- Para um único gráfico ou painel fixo, use [`@gravity-ui/charts`](https://gravity-ui.com/charts) ou [`@gravity-ui/chartkit`](https://github.com/gravity-ui/chartkit) diretamente — a infraestrutura de grade/plugin é um overhead para um único widget.
- Para uma grade responsiva de propósito geral que não seja um dashboard de widgets, use `react-grid-layout` diretamente.
- Para incorporar widgets de gráfico baseados em ChartKit dentro de um dashboard DashKit, o DashKit é o invólucro; ele ainda depende de [`@gravity-ui/chartkit`](https://github.com/gravity-ui/chartkit) para renderizar os gráficos reais.

### Armadilhas comuns

- **Componente `<Dashboard>` alucinado** — a exportação é `<DashKit>` (o invólucro de arrastar e soltar é `<DashKitDnDWrapper>` que envolve `<DashKit>` + `<ActionPanel>`).
- **Mutação de `config` em vez de usar helpers** — use os helpers estáticos `DashKit.setItem({...})` / `DashKit.removeItem({...})` para adicionar/alterar/remover itens para que o layout e os IDs permaneçam consistentes.
- **Esquecer `DashKit.setSettings` / `DashKit.registerPlugins`** — o componente deve ser configurado (idioma, configurações de grade, registro de plugins) antes de ser renderizado, ou os widgets não exibirão nada.
- **Confundir as duas props de parâmetros** — `defaultGlobalParams` (padrões em nível de dashboard) vs `globalParams` (globais que podem ser sobrescritos pela URL); ambos fluem para a fila de geração de parâmetros consumida pelo ChartKit.
- **Chamar `onChange` manualmente com o evento `change`** — quando você usa `event.preventDefault()` no manipulador experimental `change`, o DashKit mantém o estado visual internamente; redefinir `config.layout` a partir das props redefine essa linha de base.

## Documentação para agentes de IA

A documentação legível por agente para a versão instalada está localizada em `node_modules/@gravity-ui/dashkit/build/docs/INDEX.md`.