# @gravity-ui/timeline [![npm package](https://img.shields.io/npm/v/@gravity-ui/timeline)](https://www.npmjs.com/package/@gravity-ui/timeline) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/timeline/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/timeline/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/timeline/)

> [Versão em Português](./README-pt.md)

Uma biblioteca baseada em React para construir visualizações interativas de linha do tempo com renderização em canvas.

## Documentação

Para detalhes, consulte [Documentação](./docs/docs.md).

## Prévia

Linha do tempo básica com eventos e eixos:

![Linha do tempo básica com eventos](./docs/img/lines.png)

Renderização personalizada com eventos aninhados expansíveis ([NestedEvents](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--nested-events-story) exemplo):

![Linha do tempo com eventos aninhados](./docs/img/events.png)

## Funcionalidades

- Renderização baseada em canvas para alta performance
- Linha do tempo interativa com capacidades de zoom e pan
- Interações flexíveis com roda e touchpad, incluindo passagem de scroll vertical
- Suporte para eventos, marcadores, seções, eixos e grade
- Seções de fundo para organização visual e destaque de períodos de tempo
- Agrupamento inteligente de marcadores com zoom automático para o grupo - Clique em marcadores agrupados para dar zoom em seus componentes individuais
- Renderização virtualizada para melhor performance com grandes conjuntos de dados (ativa apenas quando o conteúdo da linha do tempo excede a viewport)
- Aparência e comportamento personalizáveis
- Suporte a TypeScript com definições de tipo completas
- Integração com React com hooks personalizados

## Instalação

```bash
npm install @gravity-ui/timeline
```

## Uso

O componente de linha do tempo pode ser usado em aplicações React com a seguinte configuração básica:

```tsx
import { TimelineCanvas, useTimeline } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline, api, start, stop } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000, // 1 hora a partir de agora
      axes: [],
      events: [],
      markers: [],
      sections: []
    },
    viewConfiguration: {
      // Configuração de visualização opcional
    }
  });

  // timeline - Instância da linha do tempo
  // api - Instância do CanvasApi (o mesmo que timeline.api)
  // start - função para inicializar a linha do tempo com o canvas
  // stop - função para destruir a linha do tempo

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <TimelineCanvas timeline={timeline} />
    </div>
  );
};
```

### Estrutura do Eixo

Cada eixo possui a seguinte estrutura:

```typescript
type TimelineAxis = {
  id: string;          // Identificador único do eixo
  tracksCount: number; // Número de trilhas no eixo
  top: number;         // Posição vertical (px)
  height: number;      // Altura por trilha (px)
};
```

### Linhas Horizontais do Eixo

Configure a posição das linhas horizontais através de `viewConfiguration.axes.linePosition`:

- `"center"` (padrão) desenha uma linha no centro de cada trilha.
- `"between"` desenha uma linha após cada trilha, em sua borda inferior. Isso é útil para linhas de estilo de tabela com barras de eventos centralizadas.

```typescript
viewConfiguration: {
  axes: {
    linePosition: 'between'
  }
}
```

### Interações Flexíveis da Câmera

`ZoomMode` fornece predefinições de interação familiares, enquanto `camera.interactions` permite substituir um gesto individual. Isso é útil quando uma linha do tempo está dentro de uma página com scroll vertical: mantenha o pan horizontal e o zoom do touchpad, mas permita que o scroll normal da roda alcance o contêiner pai.

```tsx
import {ZoomMode} from '@gravity-ui/timeline';

const {timeline} = useTimeline({
  settings: { /* ... */ },
  viewConfiguration: {
    camera: {
      zoom: ZoomMode.DEFAULT,
      interactions: {
        verticalWheel: 'pass-through',
        horizontalWheel: 'pan',
        pinch: 'zoom',
      },
      zoomSensitivity: {
        in: 0.5,
        out: 0.5,
      },
      minRange: 5_000,
      maxRange: 1000 * 60 * 60 * 24 * 365,
    },
  },
});
```

Cada interação aceita `'zoom'`, `'pan'` ou `'pass-through'`. `pinch` representa um gesto de Ctrl+roda do touchpad do navegador. `zoomSensitivity.in` e `zoomSensitivity.out` multiplicam independentemente a velocidade de zoom in e zoom out: `1` é o padrão, valores menores são mais suaves e `0` desativa o zoom nessa direção. Pequenos deltas do touchpad são suavizados automaticamente. `minRange` e `maxRange` são durações em milissegundos; o mínimo é de 5 segundos por padrão e o máximo é irrestrito a menos que configurado, então defina `maxRange` para limitar o quão longe os usuários podem dar zoom out. Veja o exemplo interativo [Camera interactions Storybook](https://preview.gravity-ui.com/timeline/?path=/story/components-timelinecanvas--interaction-and-focus).

### Estrutura da Seção

Cada seção requer a seguinte estrutura:

```typescript
type TimelineSection = {
  id: string;               // Identificador único da seção
  from: number;             // Timestamp de início
  to?: number;              // Timestamp de fim opcional (padrão para o fim da linha do tempo)
  color: string;            // Cor de fundo da seção
  hoverColor?: string;      // Cor opcional quando a seção está em hover
  renderer?: AbstractSectionRenderer; // Renderizador personalizado opcional (exportado do pacote)
};
```

As seções fornecem cores de fundo para períodos de tempo e ajudam a organizar o conteúdo da linha do tempo visualmente:

```tsx
const MyTimelineComponent = () => {
  const { timeline } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000,
      axes: [],
      events: [],
      markers: [],
      sections: [
        {
          id: 'morning',
          from: Date.now(),
          to: Date.now() + 1800000, // 30 minutos
          color: 'rgba(255, 235, 59, 0.3)', // Amarelo semitransparente
          hoverColor: 'rgba(255, 235, 59, 0.4)'
        },
        {
          id: 'afternoon',
          from: Date.now() + 1800000,
          // 'to' não especificado - estende até o fim da linha do tempo
          color: 'rgba(76, 175, 80, 0.2)', // Verde semitransparente
          hoverColor: 'rgba(76, 175, 80, 0.3)'
        }
      ]
    },
    viewConfiguration: {
      sections: {
        hitboxPadding: 2 // Preenchimento para detecção de hover
      }
    }
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### Estrutura de Marcadores

Cada marcador requer a seguinte estrutura:

```typescript
type TimelineMarker = {
  time: number;           // Timestamp para a posição do marcador
  color: string;          // Cor da linha do marcador
  activeColor: string;    // Cor quando o marcador está selecionado (obrigatório)
  hoverColor: string;     // Cor quando o marcador está em hover (obrigatório)
  lineWidth?: number;     // Largura opcional da linha do marcador
  label?: string;         // Texto opcional do rótulo
  labelColor?: string;    // Cor opcional do rótulo
  renderer?: AbstractMarkerRenderer; // Renderizador customizado opcional
  nonSelectable?: boolean;// Se o marcador pode ser selecionado
  group?: boolean;        // Se o marcador representa um grupo
};
```

### Agrupamento e Zoom de Marcadores

A linha do tempo agrupa automaticamente marcadores que estão próximos e oferece funcionalidade de zoom:

```tsx
const MyTimelineComponent = () => {
  const { timeline } = useTimeline({
    settings: {
      start: Date.now(),
      end: Date.now() + 3600000,
      axes: [],
      events: [],
      markers: [
        // Estes marcadores serão agrupados
        { time: Date.now(), color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Evento 1' },
        { time: Date.now() + 1000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Evento 2' },
        { time: Date.now() + 2000, color: '#ff0000', activeColor: '#ff5252', hoverColor: '#ff1744', label: 'Evento 3' },
      ]
    },
    viewConfiguration: {
      markers: {
        collapseMinDistance: 8,        // Agrupa marcadores em até 8 pixels
        groupZoomEnabled: true,        // Habilita zoom ao clicar no grupo
        groupZoomPadding: 0.3,        // 30% de preenchimento ao redor do grupo
        groupZoomMaxFactor: 0.3,      // Fator máximo de zoom
      }
    }
  });

  // Escuta eventos de zoom de grupo
  useTimelineEvent(timeline, 'on-group-marker-click', (data) => {
    console.log('Grupo com zoom:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

## Como Funciona

O componente de linha do tempo é construído usando React e oferece uma maneira flexível de criar visualizações de linha do tempo interativas. Veja como funciona:

### Arquitetura do Componente

A linha do tempo é implementada como um componente React que pode ser configurado através de dois objetos principais:

1. **TimelineSettings**: Controla o comportamento e a aparência principal da linha do tempo
   - `start`: Hora de início da linha do tempo
   - `end`: Hora de fim da linha do tempo
   - `axes`: Array de configurações de eixos (veja a estrutura abaixo)
   - `events`: Array de configurações de eventos
   - `markers`: Array de configurações de marcadores
   - `sections`: Array de configurações de seções

2. **ViewConfiguration**: Gerencia a representação visual e as configurações de interação
   - Controla a aparência, níveis de zoom e comportamento de interação
   - Pode ser personalizado ou usar valores padrão

### Tratamento de Eventos

O componente de linha do tempo suporta vários eventos interativos:

- `on-click`: Disparado ao clicar na linha do tempo; inclui os elementos atingidos, timestamp, coordenadas da viewport e coordenadas do canvas
- `on-context-click`: Disparado ao clicar com o botão direito/menu de contexto
- `on-select-change`: Disparado quando a seleção muda
- `on-hover`: Disparado ao passar o mouse sobre elementos da linha do tempo
- `on-leave`: Disparado quando o mouse sai dos elementos da linha do tempo

Exemplo de tratamento de eventos:

```tsx
import { useTimelineEvent } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline } = useTimeline({ /* ... */ });

  useTimelineEvent(timeline, 'on-click', (data) => {
    console.log('Linha do tempo clicada:', data);
  });

  useTimelineEvent(timeline, 'on-select-change', (data) => {
    console.log('Seleção alterada:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### Integração com React

O componente usa hooks customizados para o gerenciamento da linha do tempo:

- `useTimeline`: Gerencia a instância da linha do tempo e seu ciclo de vida
  - Cria e inicializa a linha do tempo
  - Lida com a limpeza ao desmontar o componente
  - Fornece acesso à instância da linha do tempo

- `useTimelineEvent`: Lida com a assinatura de eventos e a limpeza
  - Gerencia o ciclo de vida do ouvinte de eventos
  - Limpa automaticamente os ouvintes ao desmontar

O componente lida automaticamente com a limpeza e destruição da instância da linha do tempo quando desmontado.

### Popup de Evento

Instale `@gravity-ui/uikit` e seus estilos para exibir detalhes de eventos sem
precisar assinar eventos de hover ou calcular coordenadas:

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import {EventPopup} from '@gravity-ui/timeline/react/uikit';

<>
  <TimelineCanvas timeline={timeline} />
  <EventPopup
    timeline={timeline}
    content={(event) => <EventDetails event={event} />}
  />
</>
```

O popup, o destaque de hover e o cursor usam o mesmo evento: um acerto exato tem prioridade sobre eventos próximos. Acertos exatos sobrepostos são resolvidos para o último evento na ordem de desenho. Somente quando não há um acerto exato, uma tolerância de `3 px + events.hitboxPadding` é usada. Consultas de grupo e `on-hover` ainda incluem todos os candidatos.

O `EventPopup` abre após 150 ms e fecha 200 ms após o ponteiro sair do
evento. Defina `openDelay`, `closeDelay`, `placement`, `offset`, `className` ou
`aria-label` quando necessário. O popup permanece aberto enquanto seu conteúdo tem ponteiro
ou foco, fecha ao pressionar Escape ou clicar fora, e usa o último evento na ordem dos dados
quando os eventos se sobrepõem. `hoverColor` e `isHovered` controlam o desenho do evento;
o `EventPopup` controla a UI de seus detalhes.

### Estrutura de Eventos

Os eventos na linha do tempo seguem esta estrutura:

```typescript
type TimelineEvent = {
  id: string;             // Identificador único
  from: number;           // Timestamp de início
  to?: number;            // Timestamp de fim (opcional para eventos pontuais)
  axisId: string;         // ID do eixo ao qual este evento pertence
  trackIndex: number;     // Índice na trilha do eixo
  renderer?: AbstractEventRenderer; // Renderizador customizado opcional
  color?: string;         // Cor opcional do evento
  hoverColor?: string;    // Cor opcional para o estado em hover
  selectedColor?: string; // Cor opcional para o estado selecionado
  cursor?: string;        // Cursor CSS opcional ao passar o mouse sobre o evento
};
```

Defina `cursor: 'pointer'` em eventos que executam uma ação ao serem clicados. O cursor
é aplicado apenas enquanto o ponteiro estiver sobre esse evento; quando eventos se sobrepõem, o
último evento na ordem dos dados determina o cursor.

### Cores do Gravity UI

O Canvas não consegue resolver propriedades CSS customizadas por si só. A Timeline resolve um valor completo `var(--token)` em relação ao seu elemento canvas, então os tokens semânticos do Gravity UI funcionam para eventos, marcadores, seções, eixos, grid e régua integrados.

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import {ThemeProvider} from '@gravity-ui/uikit';
import {useTimeline} from '@gravity-ui/timeline/react';
import {GravityTimelineCanvas} from '@gravity-ui/timeline/react/uikit';

<ThemeProvider theme="light">
  <GravityTimelineCanvas timeline={timeline} />
</ThemeProvider>
```

Passe tokens diretamente em qualquer campo de cor, por exemplo
`color: 'var(--g-color-base-positive-medium)'`. O `GravityTimelineCanvas`
redesenha automaticamente quando o tema efetivo do Gravity UI muda. Para um token ausente,
use um fallback CSS como `var(--app-event-color, transparent)` ou chame
`timeline.api.resolveColor(color, fallback)` de um renderizador customizado.

Para eventos, `color` é usado normalmente, `hoverColor` ao passar o mouse, e
`selectedColor` após a seleção:

```ts
const events = [
  {
    id: 'deploy',
    from: start,
    to: end,
    axisId: 'main',
    trackIndex: 0,
    color: 'var(--g-color-base-positive-medium)',
    hoverColor: 'var(--g-color-base-positive-medium-hover)',
    selectedColor: 'var(--g-color-base-positive-heavy)',
  },
];
```

Renderizadores de eventos customizados recebem `resolveColor` como seu último argumento opcional;
renderizadores de marcadores e seções customizados o recebem em seus dados de renderização.

### Fontes do Canvas

Defina `viewConfiguration.font` uma vez para configurar a fonte padrão para a régua,
eventos e marcadores. Um `ruler.font`, `events.font` ou `markers.font` específico do componente
tem precedência. O padrão permanece `10px sans-serif`.

O Canvas não pode usar variáveis CSS ou `inherit` diretamente em `ctx.font`, então
a Timeline resolve tokens de valor completo no contexto CSS do canvas:

```ts
viewConfiguration: {
  font: 'var(--g-text-caption-2-font)',
}
```

Use `font: 'inherit'` para usar a fonte computada do elemento canvas. Renderizadores customizados
recebem `resolveFont` junto com `resolveColor`, ou podem chamar
`timeline.api.resolveFont(font)`. Após uma fonte web carregar dinamicamente, chame
`timeline.api.rerender()` para redesenhar o texto do canvas com ela.

### Uso Direto de TypeScript

A classe Timeline pode ser usada diretamente em TypeScript sem React. Isso é útil para integrar com outros frameworks ou aplicações JavaScript vanilla:

```typescript
import { Timeline } from '@gravity-ui/timeline';

const timestamp = Date.now();

// Cria uma instância de timeline
const timeline = new Timeline({
  settings: {
    start: timestamp,
    end: timestamp + 3600000, // 1 hora a partir de agora
    axes: [
      {
        id: 'main',
        tracksCount: 3,
        top: 0,
        height: 100
      }
    ],
    events: [
      {
        id: 'event1',
        from: timestamp + 1800000, // 30 minutos a partir de agora
        to: timestamp + 2400000,   // 40 minutos a partir de agora
        label: 'Evento de Exemplo',
        axisId: 'main'
      }
    ],
    markers: [
      {
        id: 'marker1',
        time: timestamp + 1200000, // 20 minutos a partir de agora
        label: 'Ponto Importante',
        color: '#ff0000',
        activeColor: '#ff5252',
        hoverColor: '#ff1744'
      }
    ],
    sections: [
      {
        id: 'section1',
        from: timestamp,
        to: timestamp + 1800000, // Primeiros 30 minutos
        color: 'rgba(33, 150, 243, 0.2)', // Fundo azul claro
        hoverColor: 'rgba(33, 150, 243, 0.3)'
      }
    ]
  },
  viewConfiguration: {
    // Opcional: personalizar configurações de visualização
    zoomLevels: [1, 2, 4, 8, 16],
    hideRuler: false,
    showGrid: true
  }
});

// Inicializa com um elemento canvas
const canvas = document.querySelector('canvas');
if (canvas instanceof HTMLCanvasElement) {
  timeline.init(canvas);
}

// Adiciona ouvintes de eventos
timeline.on('on-click', (detail) => {
  console.log('Timeline clicado:', detail);
});

timeline.on('on-select-change', (detail) => {
  console.log('Seleção alterada:', detail);
});

// Limpa quando terminar
timeline.destroy();
```

A classe Timeline fornece uma API rica para gerenciar a linha do tempo:

- **Gerenciamento de Eventos**:
  ```typescript
  // Adiciona um ouvinte de evento
  timeline.on('eventClick', (detail) => {
    console.log('Evento clicado:', detail);
  });

  // Remove um ouvinte de evento
  const handler = (detail) => console.log(detail);
  timeline.on('eventClick', handler);
  timeline.off('eventClick', handler);

  // Emite eventos customizados
  timeline.emit('customEvent', { data: 'dados customizados' });
  ```

- **Controle de Linha do Tempo**:
  ```typescript
  // Atualiza os dados da linha do tempo
  timeline.api.setEvents([
    {
      id: 'newEvent',
      from: Date.now(),
      to: Date.now() + 3600000,
      label: 'Novo Evento',
      axisId: 'main',
      trackIndex: 0
    }
  ]);

  // Atualiza os eixos
  timeline.api.setAxes([
    {
      id: 'newAxis',
      tracksCount: 2,
      top: 0,
      height: 80
    }
  ]);

  // Atualiza os marcadores
  timeline.api.setMarkers([
    {
      id: 'newMarker',
      time: Date.now(),
      label: 'Novo Marcador',
      color: '#00ff00',
      activeColor: '#4caf50',
      hoverColor: '#2e7d32'
    }
  ]);

  // Atualiza as seções
  timeline.api.setSections([
    {
      id: 'newSection',
      from: Date.now(),
      to: Date.now() + 1800000,
      color: 'rgba(255, 193, 7, 0.2)', // Fundo âmbar claro
      hoverColor: 'rgba(255, 193, 7, 0.3)'
    }
  ]);

  // Atualiza a configuração de visualização (mescla com a configuração atual)
  timeline.api.setViewConfiguration({ hideRuler: true });
  ```

## Exemplos ao Vivo

Explore exemplos interativos em nosso [Storybook](https://preview.gravity-ui.com/timeline/):

- [Linha do Tempo Básica](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--basic) - Linha do tempo simples com eventos e eixos
- [Linha do Tempo Infinita](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--endless-timelines) - Linha do tempo infinita com eventos e eixos
- [Marcadores](https://preview.gravity-ui.com/timeline/?path=/story/timeline-markers--basic) - Linha do tempo com marcadores verticais e rótulos
- [Interações da Câmera](https://preview.gravity-ui.com/timeline/?path=/story/components-timelinecanvas--interaction-and-focus) - Configure o comportamento de roda, rolagem horizontal e pinça do trackpad
- [Eventos Personalizados](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--custom-renderer) - Linha do tempo com renderização de eventos personalizada
- [Integrações](https://preview.gravity-ui.com/timeline/?path=/story/integrations-gravity-ui--timeline-ruler) - RangeDateSelection, DragHandler, NestedEvents, Popup, List


## Desenvolvimento

### Storybook

Este projeto inclui o Storybook para desenvolvimento e documentação de componentes.

Para executar o Storybook:

```bash
npm run storybook
```

Isso iniciará o servidor de desenvolvimento do Storybook na porta 6006. Você pode acessá-lo em http://localhost:6006.

Para construir uma versão estática do Storybook para implantação:

```bash
npm run build-storybook
```

## Licença

MIT