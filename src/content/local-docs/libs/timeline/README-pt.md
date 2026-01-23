# @gravity-ui/timeline [![npm package](https://img.shields.io/npm/v/@gravity-ui/timeline)](https://www.npmjs.com/package/@gravity-ui/timeline) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/timeline/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/timeline/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/timeline/)

Uma biblioteca baseada em React para criar visualizações de linha do tempo interativas com renderização em canvas.

## Documentação

Para detalhes, consulte [Documentação](./docs/docs.md).

## Funcionalidades

- Renderização baseada em canvas para alto desempenho
- Linha do tempo interativa com capacidades de zoom e pan
- Suporte para eventos, marcadores, seções, eixos e grade
- Seções de fundo para organização visual e destaque de períodos de tempo
- Agrupamento inteligente de marcadores com zoom automático para o grupo - Clique em marcadores agrupados para dar zoom em seus componentes individuais
- Renderização virtualizada para melhor desempenho com grandes conjuntos de dados (ativo apenas quando o conteúdo da linha do tempo excede a viewport)
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

### Estrutura de Seção

Cada seção requer a seguinte estrutura:

```typescript
type TimelineSection = {
  id: string;               // Identificador único da seção
  from: number;             // Timestamp de início
  to?: number;              // Timestamp de fim opcional (padrão para o fim da linha do tempo)
  color: string;            // Cor de fundo da seção
  hoverColor?: string;      // Cor opcional ao passar o mouse sobre a seção
  renderer?: AbstractSectionRenderer; // Renderizador personalizado opcional
};
```

As seções fornecem coloração de fundo para períodos de tempo e ajudam a organizar o conteúdo da linha do tempo visualmente:

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
          // Nenhum 'to' especificado - estende até o fim da linha do tempo
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

### Estrutura de Marcador

Cada marcador requer a seguinte estrutura:

```typescript
type TimelineMarker = {
  time: number;           // Timestamp para a posição do marcador
  color: string;          // Cor da linha do marcador
  activeColor: string;    // Cor quando o marcador está selecionado (obrigatório)
  hoverColor: string;     // Cor ao passar o mouse sobre o marcador (obrigatório)
  lineWidth?: number;     // Largura opcional da linha do marcador
  label?: string;         // Texto de rótulo opcional
  labelColor?: string;    // Cor do rótulo opcional
  renderer?: AbstractMarkerRenderer; // Renderizador personalizado opcional
  nonSelectable?: boolean;// Se o marcador pode ser selecionado
  group?: boolean;        // Se o marcador representa um grupo
};
```

### Agrupamento e Zoom de Marcadores

A linha do tempo agrupa automaticamente marcadores que estão próximos e fornece funcionalidade de zoom:

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
        collapseMinDistance: 8,        // Agrupa marcadores a até 8 pixels de distância
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
   - `end`: Hora de término da linha do tempo
   - `axes`: Array de configurações de eixos
   - `events`: Array de configurações de eventos
   - `markers`: Array de configurações de marcadores
   - `sections`: Array de configurações de seções

2. **ViewConfiguration**: Gerencia a representação visual e as configurações de interação
   - Controla a aparência, níveis de zoom e comportamento de interação
   - Pode ser personalizado ou usar valores padrão

### Tratamento de Eventos

O componente de linha do tempo suporta vários eventos interativos:

- `on-click`: Disparado ao clicar na linha do tempo
- `on-context-click`: Disparado ao clicar com o botão direito/menu de contexto
- `on-select-change`: Disparado quando a seleção muda
- `on-hover`: Disparado ao passar o mouse sobre elementos da linha do tempo
- `on-leave`: Disparado quando o mouse sai de elementos da linha do tempo

Exemplo de tratamento de eventos:

```tsx
import { useTimelineEvent } from '@gravity-ui/timeline/react';

const MyTimelineComponent = () => {
  const { timeline } = useTimeline({ /* ... */ });

  useTimelineEvent(timeline, 'on-click', (data) => {
    console.log('Timeline clicada:', data);
  });

  useTimelineEvent(timeline, 'on-select-change', (data) => {
    console.log('Seleção alterada:', data);
  });

  return <TimelineCanvas timeline={timeline} />;
};
```

### Integração com React

O componente usa hooks personalizados para gerenciar a linha do tempo:

- `useTimeline`: Gerencia a instância da linha do tempo e seu ciclo de vida
  - Cria e inicializa a linha do tempo
  - Lida com a limpeza ao desmontar o componente
  - Fornece acesso à instância da linha do tempo

- `useTimelineEvent`: Lida com a assinatura de eventos e a limpeza
  - Gerencia o ciclo de vida do ouvinte de eventos
  - Limpa automaticamente os ouvintes ao desmontar

O componente lida automaticamente com a limpeza e destruição da instância da linha do tempo quando desmontado.

### Estrutura de Eventos

Os eventos na linha do tempo seguem esta estrutura:

```typescript
type TimelineEvent = {
  id: string;             // Identificador único
  from: number;           // Timestamp de início
  to?: number;            // Timestamp de término (opcional para eventos pontuais)
  axisId: string;         // ID do eixo ao qual este evento pertence
  trackIndex: number;     // Índice na trilha do eixo
  renderer?: AbstractEventRenderer; // Renderizador personalizado opcional
  color?: string;         // Cor do evento opcional
  selectedColor?: string; // Cor do estado selecionado opcional
};
```

### Uso Direto com TypeScript

A classe `Timeline` pode ser usada diretamente em TypeScript sem React. Isso é útil para integrar com outros frameworks ou aplicações JavaScript vanilla:

```typescript
import { Timeline } from '@gravity-ui/timeline';

const timestamp = Date.now();

// Cria uma instância da linha do tempo
const timeline = new Timeline({
  settings: {
    start: timestamp,
    end: timestamp + 3600000, // 1 hora a partir de agora
    axes: [
      {
        id: 'main',
        label: 'Eixo Principal',
        color: '#000000'
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
  console.log('Timeline clicada:', detail);
});

timeline.on('on-select-change', (detail) => {
  console.log('Seleção alterada:', detail);
});

// Limpa quando terminar
timeline.destroy();
```

A classe `Timeline` fornece uma API rica para gerenciar a linha do tempo:

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

  // Emite eventos personalizados
  timeline.emit('customEvent', { data: 'dados personalizados' });
  ```

- **Controle da Linha do Tempo**:
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
      label: 'Novo Eixo',
      color: '#0000ff'
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
  ```

## Exemplos ao Vivo

Explore exemplos interativos em nosso [Storybook](https://preview.gravity-ui.com/timeline/):

- [Linha do Tempo Básica](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--basic) - Linha do tempo simples com eventos e eixos
- [Linha do Tempo Infinita](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--endless-timelines) - Linha do tempo infinita com eventos e eixos
- [Marcadores](https://preview.gravity-ui.com/timeline/?path=/story/timeline-markers--basic) - Linha do tempo com marcadores verticais e rótulos
- [Eventos Personalizados](https://preview.gravity-ui.com/timeline/?path=/story/timeline-events--custom-renderer) - Linha do tempo com renderização de eventos personalizada


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