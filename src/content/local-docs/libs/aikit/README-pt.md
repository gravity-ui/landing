# AIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/aikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/aikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/aikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/aikit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/aikit/?path=/docs/pages-chatcontainer--docs)

Biblioteca de componentes de UI para chats de IA construída com princípios de Atomic Design.

<!--GITHUB_BLOCK-->

![Imagem de capa](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/aikit_cover.png)

![Imagem de exemplo](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/aikit_example.png)

## Recursos

### ![Logo do Globo Claro](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Logo do Globo Escuro](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [Website](https://gravity-ui.com/libraries/aikit)

### ![Logo do Storybook Claro](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Logo do Storybook Escuro](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/aikit/)

### ![Logo da Comunidade Claro](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Logo da Comunidade Escuro](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [Comunidade](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## Descrição

**@gravity-ui/aikit** é uma biblioteca de componentes React flexível e extensível para construir chats de IA de qualquer complexidade. A biblioteca fornece um conjunto de componentes prontos que podem ser usados como estão ou personalizados para atender às suas necessidades.

### Principais Recursos

- 🎨 **Atomic Design** — hierarquia clara de componentes, de átomos a páginas
- 🔧 **Independente de SDK** — não depende de SDKs de IA específicos
- 🎭 **Abordagem de Dois Níveis** — componentes prontos + hooks para personalização
- 🎨 **Variáveis CSS** — temas fáceis sem sobrescrever componentes
- 📦 **TypeScript** — segurança de tipo completa "out of the box"
- 🔌 **Extensível** — sistema de registro de tipos de mensagem personalizados

## Estrutura do Projeto

```
src/
├── components/
│   ├── atoms/          # Elementos básicos de UI indivisíveis
│   ├── molecules/      # Grupos simples de átomos
│   ├── organisms/      # Componentes complexos com lógica
│   ├── templates/      # Layouts completos
│   └── pages/          # Integrações completas com dados
├── hooks/              # Hooks de propósito geral
├── types/              # Tipos TypeScript
├── utils/              # Utilitários
└── themes/             # Temas CSS e variáveis
```

## Instalação

```bash
npm install @gravity-ui/aikit
```

## Início Rápido

```typescript
import { ChatContainer } from '@gravity-ui/aikit';
import type { ChatType, TChatMessage } from '@gravity-ui/aikit';

function App() {
    const [messages, setMessages] = useState<TChatMessage[]>([]);
    const [chats, setChats] = useState<ChatType[]>([]);
    const [activeChat, setActiveChat] = useState<ChatType | null>(null);

    return (
        <ChatContainer
            chats={chats}
            activeChat={activeChat}
            messages={messages}
            onSendMessage={async (data) => {
                // Sua lógica de envio
                console.log('Mensagem:', data.content);
            }}
            onSelectChat={setActiveChat}
            onCreateChat={() => {
                // Criar novo chat
            }}
            onDeleteChat={(chat) => {
                // Excluir chat
            }}
        />
    );
}
```

## Arquitetura

A biblioteca é construída com base nos princípios de **Atomic Design**:

### 🔹 Átomos

Elementos básicos de UI indivisíveis, sem lógica de negócios:

- `ActionButton` — botão com tooltip integrado
- `Alert` — mensagens de alerta com variantes
- `ChatDate` — formatação de data com datas relativas
- `ContextIndicator` — indicador de uso de contexto de token
- `ContextItem` — rótulo de contexto com ação de remover
- `DiffStat` — exibição de estatísticas de alteração de código
- `Disclaimer` — componente de texto de aviso
- `InlineCitation` — citações de texto
- `Loader` — indicador de carregamento
- `MarkdownRenderer` — renderizador Yandex Flavored Markdown
- `MessageBalloon` — wrapper de mensagem
- `Shimmer` — efeito de animação de carregamento
- `SubmitButton` — botão de envio com estados
- `ToolIndicator` — indicador de status de execução de ferramenta

### 🔸 Moléculas

Combinações simples de átomos:

- `BaseMessage` — wrapper base para todos os tipos de mensagem
- `ButtonGroup` — grupo de botões com suporte a orientação
- `InputContext` — gerenciamento de contexto
- `PromptInputBody` — área de texto com crescimento automático
- `PromptInputFooter` — rodapé com ícones de ação e botão de envio
- `PromptInputHeader` — cabeçalho com itens de contexto e indicador
- `PromptInputPanel` — painel para conteúdo personalizado
- `Suggestions` — botões de sugestão clicáveis
- `Tabs` — abas de navegação com funcionalidade de exclusão
- `ToolFooter` — rodapé de mensagem de ferramenta com ações
- `ToolHeader` — cabeçalho de mensagem de ferramenta com ícone e ações

### 🔶 Organismos

Componentes complexos com lógica interna:

- `AssistantMessage` — mensagem do assistente de IA
- `Header` — cabeçalho do chat
- `MessageList` — lista de mensagens
- `PromptInput` — campo de entrada de mensagem
- `ThinkingMessage` — processo de pensamento da IA
- `ToolMessage` — execução de ferramenta
- `UserMessage` — mensagem do usuário

### 📄 Templates

Layouts completos:

- `ChatContent` — conteúdo principal do chat
- `EmptyContainer` — estado vazio
- `History` — histórico de chat

### 📱 Páginas

Integrações completas:

- `ChatContainer` — chat totalmente montado

## Documentação

- [Guia de Início Rápido](./docs/GETTING_STARTED.md)
- [Arquitetura](./docs/ARCHITECTURE.md)
- [Estrutura do Projeto](./docs/PROJECT_STRUCTURE.md)
- [Guia de Testes](./docs/TESTING.md)
- [Guia do Playwright](./playwright/README.md)

## Testes

O projeto utiliza o Playwright Component Testing para testes de regressão visual.

### Executar testes

**Importante**: Todos os testes devem ser executados via Docker para garantir capturas de tela consistentes entre diferentes ambientes.

```bash
# Executar todos os testes de componente no Docker (recomendado)
npm run playwright:docker

# Atualizar as linhas de base das capturas de tela no Docker
npm run playwright:docker:update

# Executar um teste específico por padrão de grep no Docker
npm run playwright:docker -- --grep "@ComponentName"

# Limpar o cache do Docker, se necessário
npm run playwright:docker:clear-cache
```

### Testes locais (apenas Linux)

Se você estiver no Linux, pode executar os testes localmente:

```bash
# Instalar navegadores do Playwright (executar uma vez)
npm run playwright:install
# Executar todos os testes de componente
npm run playwright
# Atualizar as linhas de base das capturas de tela
npm run playwright:update
```

Para documentação detalhada de testes, consulte [Guia do Playwright](./playwright/README.md).

## Desenvolvimento

As instruções de desenvolvimento e contribuição estão disponíveis em [CONTRIBUTING.md](./CONTRIBUTING.md).

## Licença

MIT

## Para agentes de IA

Uma biblioteca de componentes React para construir interfaces de chat de IA, organizada por Atomic Design (átomos → moléculas → organismos → templates → páginas) e independente de SDK — utilize-a para montar uma UI de chat (listas de mensagens, entrada de prompt, chamadas de ferramentas, anexos) em vez de compor esses primitivos manualmente a partir do `@gravity-ui/uikit`.

### Quando usar

- Construindo uma UI de chat de IA/LLM (mensagens de assistente/usuário/ferramenta, entrada de prompt com sugestões, upload de anexos, estados de pensamento).
- Desejando layouts de chat prontos (`ChatContainer`, `MessageList`, `PromptInput`) mais hooks para personalizar o comportamento.
- Incorporando ao ecossistema Gravity UI com temas compartilhados via variáveis CSS.

### Quando não usar

- Para primitivos de UI de propósito geral (botões, entradas, modais), use [`@gravity-ui/uikit`](https://gravity-ui.com/uikit) diretamente — AIKit é construído sobre ele para necessidades específicas de chat.
- Para renderizar markdown rico em mensagens, o `MarkdownRenderer` do AIKit envolve o [`@gravity-ui/markdown-editor`](https://github.com/gravity-ui/markdown-editor); para renderização de markdown independente, use esse pacote diretamente.
- Para uma única bolha de chat sem orquestração de chat, um `MarkdownRenderer`/bloco de texto do uikit é mais leve do que o pipeline completo de mensagens do AIKit.

### Armadilhas comuns

- **Alucinar uma importação de SDK de IA** — AIKit é independente de SDK; ele fornece componentes/hooks, não um cliente LLM. Traga sua própria fonte de dados e alimente mensagens via props.
- **Procurar por `<Chat>` / `<AIChat>`** — a exportação no nível da página é `ChatContainer` (e `AIStudioChat`); não há um componente literalmente chamado `Chat`.
- **Pular o registro do tipo de mensagem para tipos personalizados** — tipos de mensagem personalizados devem ser registrados no sistema de tipos de mensagem, ou eles serão renderizados como desconhecidos.
- **Editar componentes base em vez de usar hooks** — o design de dois níveis espera que você personalize via hooks/composição; substituir os internos diretamente quebra as atualizações.

## Documentação para agentes de IA

A documentação legível por agente para a versão instalada está localizada em `node_modules/@gravity-ui/aikit/build/docs/INDEX.md`.