# AIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/aikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/aikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/aikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/aikit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/aikit/?path=/docs/pages-chatcontainer--docs)

Biblioteca de componentes de UI para chats de IA construida con principios de Diseño Atómico.

<!--GITHUB_BLOCK-->

![Imagen de portada](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/aikit_cover.png)

![Imagen de ejemplo](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/aikit_example.png)

## Recursos

### ![Logo del Globo Claro](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Logo del Globo Oscuro](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [Sitio web](https://gravity-ui.com/libraries/aikit)

### ![Logo de Storybook Claro](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Logo de Storybook Oscuro](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/aikit/)

### ![Logo de Comunidad Claro](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Logo de Comunidad Oscuro](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [Comunidad](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## Descripción

**@gravity-ui/aikit** es una biblioteca de componentes React flexible y extensible para construir chats de IA de cualquier complejidad. La biblioteca proporciona un conjunto de componentes listos para usar que pueden ser utilizados tal cual o personalizados para adaptarse a tus necesidades.

### Características Principales

- 🎨 **Diseño Atómico** — jerarquía de componentes clara desde átomos hasta páginas
- 🔧 **Independiente del SDK** — independiente de SDKs de IA específicos
- 🎭 **Enfoque de Dos Niveles** — componentes listos para usar + hooks para personalización
- 🎨 **Variables CSS** — tematización sencilla sin sobrescrituras de componentes
- 📦 **TypeScript** — seguridad de tipos completa desde el principio
- 🔌 **Extensible** — sistema de registro de tipos de mensajes personalizados

## Estructura del Proyecto

```
src/
├── components/
│   ├── atoms/          # Elementos básicos indivisibles de la UI
│   ├── molecules/      # Grupos simples de átomos
│   ├── organisms/      # Componentes complejos con lógica
│   ├── templates/      # Diseños completos
│   └── pages/          # Integraciones completas con datos
├── hooks/              # Hooks de propósito general
├── types/              # Tipos de TypeScript
├── utils/              # Utilidades
└── themes/             # Temas y variables CSS
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

La biblioteca está construida sobre los principios del **Diseño Atómico**:

### 🔹 Átomos

Elementos básicos de UI indivisibles sin lógica de negocio:

- `ActionButton` — botón con tooltip integrado
- `Alert` — mensajes de alerta con variantes
- `ChatDate` — formato de fecha con fechas relativas
- `ContextIndicator` — indicador de uso de contexto de token
- `ContextItem` — etiqueta de contexto con acción de eliminar
- `DiffStat` — visualización de estadísticas de cambios de código
- `Disclaimer` — componente de texto de descargo de responsabilidad
- `InlineCitation` — citas de texto
- `Loader` — indicador de carga
- `MarkdownRenderer` — renderizador de Yandex Flavored Markdown
- `MessageBalloon` — contenedor de mensaje
- `Shimmer` — efecto de animación de carga
- `SubmitButton` — botón de envío con estados
- `ToolIndicator` — indicador de estado de ejecución de herramienta

### 🔸 Moléculas

Combinaciones simples de átomos:

- `BaseMessage` — contenedor base para todos los tipos de mensajes
- `ButtonGroup` — grupo de botones con soporte de orientación
- `InputContext` — gestión de contexto
- `PromptInputBody` — área de texto con auto-crecimiento
- `PromptInputFooter` — pie de página con iconos de acción y botón de envío
- `PromptInputHeader` — encabezado con elementos de contexto e indicador
- `PromptInputPanel` — panel contenedor para contenido personalizado
- `Suggestions` — botones de sugerencias clickeables
- `Tabs` — pestañas de navegación con funcionalidad de eliminación
- `ToolFooter` — pie de página de mensaje de herramienta con acciones
- `ToolHeader` — encabezado de mensaje de herramienta con icono y acciones

### 🔶 Organismos

Componentes complejos con lógica interna:

- `AssistantMessage` — mensaje del asistente de IA
- `Header` — encabezado del chat
- `MessageList` — lista de mensajes
- `PromptInput` — campo de entrada de mensajes
- `ThinkingMessage` — proceso de pensamiento de la IA
- `ToolMessage` — ejecución de herramienta
- `UserMessage` — mensaje del usuario

### 📄 Plantillas

Diseños completos:

- `ChatContent` — contenido principal del chat
- `EmptyContainer` — estado vacío
- `History` — historial del chat

### 📱 Páginas

Integraciones completas:

- `ChatContainer` — chat completamente ensamblado

## Documentación

- [Guía de inicio rápido](./docs/GETTING_STARTED.md)
- [Arquitectura](./docs/ARCHITECTURE.md)
- [Estructura del proyecto](./docs/PROJECT_STRUCTURE.md)
- [Guía de pruebas](./docs/TESTING.md)
- [Guía de Playwright](./playwright/README.md)

## Pruebas

El proyecto utiliza Playwright Component Testing para pruebas de regresión visual.

### Ejecutar pruebas

**Importante**: Todas las pruebas deben ejecutarse a través de Docker para garantizar capturas de pantalla consistentes en diferentes entornos.

```bash
# Ejecutar todas las pruebas de componentes en Docker (recomendado)
npm run playwright:docker

# Actualizar las líneas base de las capturas de pantalla en Docker
npm run playwright:docker:update

# Ejecutar una prueba específica por patrón grep en Docker
npm run playwright:docker -- --grep "@ComponentName"

# Limpiar la caché de Docker si es necesario
npm run playwright:docker:clear-cache
```

### Pruebas locales (solo Linux)

Si estás en Linux, puedes ejecutar las pruebas localmente:

```bash
# Instalar navegadores de Playwright (ejecutar una vez)
npm run playwright:install
# Ejecutar todas las pruebas de componentes
npm run playwright
# Actualizar las líneas base de las capturas de pantalla
npm run playwright:update
```

Para obtener documentación detallada sobre las pruebas, consulta [Guía de Playwright](./playwright/README.md).

## Desarrollo

Las instrucciones de desarrollo y contribución están disponibles en [CONTRIBUTING.md](./CONTRIBUTING.md).

## Licencia

MIT

## Para agentes de IA

Una biblioteca de componentes React para construir interfaces de chat de IA, organizada según el Diseño Atómico (átomos → moléculas → organismos → plantillas → páginas) y agnóstica al SDK; úsala para ensamblar una interfaz de chat (listas de mensajes, entrada de indicaciones, llamadas a herramientas, adjuntos) en lugar de componer esos primitivos a mano a partir de `@gravity-ui/uikit`.

### Cuándo usar

- Construir una interfaz de chat de IA/LLM (mensajes de asistente/usuario/herramienta, entrada de indicaciones con sugerencias, carga de adjuntos, estados de pensamiento).
- Querer diseños de chat listos para usar (`ChatContainer`, `MessageList`, `PromptInput`) más hooks para personalizar el comportamiento.
- Integrar en el ecosistema Gravity UI con tematización compartida a través de variables CSS.

### Cuándo no usar

- Para primitivas de UI de propósito general (botones, entradas, modales), usa [`@gravity-ui/uikit`](https://gravity-ui.com/uikit) directamente; AIKit se basa en él para necesidades específicas de chat.
- Para renderizar markdown enriquecido en mensajes, `MarkdownRenderer` de AIKit envuelve [`@gravity-ui/markdown-editor`](https://github.com/gravity-ui/markdown-editor); para renderizar markdown de forma independiente, usa ese paquete directamente.
- Para una sola burbuja de chat sin orquestación de chat, un bloque de texto/`MarkdownRenderer` de uikit es más ligero que el pipeline de mensajes completo de AIKit.

### Errores comunes

- **Inventar una importación de SDK de IA** — AIKit es agnóstico al SDK; proporciona componentes/hooks, no un cliente LLM. Aporta tu propia fuente de datos y alimenta los mensajes a través de props.
- **Buscar `<Chat>` / `<AIChat>`** — la exportación a nivel de página es `ChatContainer` (y `AIStudioChat`); no hay un componente llamado literalmente `Chat`.
- **Omitir el registro de tipos de mensaje para tipos personalizados** — los tipos de mensaje personalizados deben registrarse en el sistema de tipos de mensaje, o se renderizarán como desconocidos.
- **Editar componentes base en lugar de usar hooks** — el diseño de dos niveles espera que personalices a través de hooks/composición; sobrescribir los internos directamente rompe las actualizaciones.

## Documentación para agentes de IA

La documentación legible por agentes para la versión instalada se encuentra en `node_modules/@gravity-ui/aikit/build/docs/INDEX.md`.