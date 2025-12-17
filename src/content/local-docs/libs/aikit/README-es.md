# @gravity-ui/aikit

[![npm package](https://img.shields.io/npm/v/@gravity-ui/aikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/aikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/aikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/aikit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/aikit/?path=/docs/pages-chatcontainer--docs)

---

Biblioteca de componentes UI para chats de IA construida con principios de Atomic Design.

## Descripción

**@gravity-ui/aikit** es una biblioteca de componentes React flexible y extensible para construir chats de IA de cualquier complejidad. La biblioteca proporciona un conjunto de componentes listos para usar que se pueden usar tal cual o personalizar según tus necesidades.

### Características Principales

- 🎨 **Atomic Design** — jerarquía clara de componentes desde átomos hasta páginas
- 🔧 **Independiente del SDK** — independiente de SDKs de IA específicos
- 🎭 **Enfoque de Dos Niveles** — componentes listos para usar + hooks para personalización
- 🎨 **Variables CSS** — fácil tematización sin sobrescribir componentes
- 📦 **TypeScript** — seguridad de tipos completa desde el inicio
- 🔌 **Extensible** — sistema de registro de tipos de mensajes personalizados

## Estructura del Proyecto

```
src/
├── components/
│   ├── atoms/          # Elementos UI básicos indivisibles
│   ├── molecules/      # Grupos simples de átomos
│   ├── organisms/      # Componentes complejos con lógica
│   ├── templates/      # Diseños completos
│   └── pages/          # Integraciones completas con datos
├── hooks/              # Hooks de propósito general
├── types/              # Tipos TypeScript
├── utils/              # Utilidades
└── themes/             # Temas CSS y variables
```

## Instalación

```bash
npm install @gravity-ui/aikit
```

## Inicio Rápido

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
                // Tu lógica de envío
                console.log('Mensaje:', data.content);
            }}
            onSelectChat={setActiveChat}
            onCreateChat={() => {
                // Crear nuevo chat
            }}
            onDeleteChat={(chat) => {
                // Eliminar chat
            }}
        />
    );
}
```

## Arquitectura

La biblioteca está construida sobre principios de **Atomic Design**:

### 🔹 Átomos

Elementos UI básicos indivisibles sin lógica de negocio:

- `ActionButton` — botón con tooltip integrado
- `Alert` — mensajes de alerta con variantes
- `ChatDate` — formato de fecha con fechas relativas
- `ContextIndicator` — indicador de uso de contexto de tokens
- `ContextItem` — etiqueta de contexto con acción de eliminar
- `DiffStat` — visualización de estadísticas de cambios de código
- `Disclaimer` — componente de texto de descargo de responsabilidad
- `InlineCitation` — citas de texto
- `Loader` — indicador de carga
- `MarkdownRenderer` — renderizador de Yandex Flavored Markdown
- `MessageBalloon` — envoltorio de mensaje
- `Shimmer` — efecto de animación de carga
- `SubmitButton` — botón de envío con estados
- `ToolIndicator` — indicador de estado de ejecución de herramienta

### 🔸 Moléculas

Combinaciones simples de átomos:

- `BaseMessage` — envoltorio base para todos los tipos de mensajes
- `ButtonGroup` — grupo de botones con soporte de orientación
- `InputContext` — gestión de contexto
- `PromptInputBody` — textarea con crecimiento automático
- `PromptInputFooter` — pie de página con iconos de acción y botón de envío
- `PromptInputHeader` — encabezado con elementos de contexto e indicador
- `PromptInputPanel` — contenedor de panel para contenido personalizado
- `Suggestions` — botones de sugerencias clicables
- `Tabs` — pestañas de navegación con funcionalidad de eliminación
- `ToolFooter` — pie de página de mensaje de herramienta con acciones
- `ToolHeader` — encabezado de mensaje de herramienta con icono y acciones

### 🔶 Organismos

Componentes complejos con lógica interna:

- `AssistantMessage` — mensaje del asistente de IA
- `Header` — encabezado del chat
- `MessageList` — lista de mensajes
- `PromptInput` — campo de entrada de mensaje
- `ThinkingMessage` — proceso de pensamiento de IA
- `ToolMessage` — ejecución de herramienta
- `UserMessage` — mensaje del usuario

### 📄 Plantillas

Diseños completos:

- `ChatContent` — contenido principal del chat
- `EmptyContainer` — estado vacío
- `History` — historial de chat

### 📱 Páginas

Integraciones completas:

- `ChatContainer` — chat completamente ensamblado

## Documentación

- [Guía de Inicio Rápido](./docs/GETTING_STARTED.md)
- [Arquitectura](./docs/ARCHITECTURE.md)
- [Estructura del Proyecto](./docs/PROJECT_STRUCTURE.md)
- [Guía de Pruebas](./docs/TESTING.md)
- [Guía de Playwright](./playwright/README.md)

## Pruebas

El proyecto utiliza Playwright Component Testing para pruebas de regresión visual.

### Ejecutar pruebas

**Importante**: Todas las pruebas deben ejecutarse mediante Docker para garantizar capturas de pantalla consistentes en diferentes entornos.

```bash
# Ejecutar todas las pruebas de componentes en Docker (recomendado)
npm run playwright:docker

# Actualizar líneas base de capturas de pantalla en Docker
npm run playwright:docker:update

# Ejecutar prueba específica por patrón grep en Docker
npm run playwright:docker -- --grep "@ComponentName"

# Limpiar caché de Docker si es necesario
npm run playwright:docker:clear-cache
```

### Pruebas locales (solo Linux)

Si estás en Linux, puedes ejecutar pruebas localmente:

```bash
# Instalar navegadores de Playwright (ejecutar una vez)
npm run playwright:install

# Ejecutar todas las pruebas de componentes
npm run playwright

# Actualizar líneas base de capturas de pantalla
npm run playwright:update
```

Para documentación detallada de pruebas, consulta la [Guía de Playwright](./playwright/README.md).

## Desarrollo

Las instrucciones de desarrollo y contribución están disponibles en [CONTRIBUTING.md](./CONTRIBUTING.md).

## Licencia

MIT

